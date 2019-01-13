import React from 'react';

import createBoard from '../../utils';
import Board from './Board';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: createBoard(),
      curPlayer: 'red',
    };

    this.piecePositioning = this.piecePositioning.bind(this);
    this.movePiece = this.movePiece.bind(this);
  }

  piecePositioning(row, col) {
    const { board, curPlayer } = this.state;
    const piece = board[row][col];
    if (piece.piece !== curPlayer) {
      return;
    }

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j].piece === 'grey') {
          board[i][j].piece = null;
          board[i][j].moveOption = null;
        }
        if (board[i][j].selected) {
          board[i][j].selected = false;
        }
      }
    }

    piece.selected = true;

    if (piece.piece === 'red') {
      if (row >= 1) {
        if (col < board.length - 1 && board[row - 1][col + 1].piece === null) {
          board[row - 1][col + 1].piece = 'grey';
          board[row - 1][col + 1].moveOption = {
            row,
            col,
          };
        }
        if (col > 0 && board[row - 1][col - 1].piece === null) {
          board[row - 1][col - 1].piece = 'grey';
          board[row - 1][col - 1].moveOption = {
            row,
            col,
          };
        }
      }
    } else if (piece.piece === 'white') {
      if (row < board.length - 1) {
        if (col < board.length - 1 && board[row + 1][col + 1].piece === null) {
          board[row + 1][col + 1].piece = 'grey';
          board[row + 1][col + 1].moveOption = {
            row,
            col,
          };

        }
        if (col > 0 && board[row + 1][col - 1].piece === null) {
          board[row + 1][col - 1].piece = 'grey';
          board[row + 1][col - 1].moveOption = {
            row,
            col,
          };
        }
      }
    }
    this.setState(board);
  }

  movePiece(row, col) {
    const { board } = this.state;
    let { curPlayer } = this.state;
    const piece = board[row][col];
    const { moveOption } = piece;
    if (piece.moveOption === null) {
      return;
    }

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j].piece === 'grey') {
          board[i][j].piece = null;
          board[i][j].moveOption = null;
        }
        if (board[i][j].selected) {
          board[i][j].selected = false;
        }
      }
    }

    board[row][col].piece = curPlayer;
    board[row][col].king = board[moveOption.row][moveOption.col].king;
    board[moveOption.row][moveOption.col].piece = null;
    board[moveOption.row][moveOption.col].king = false;

    if (curPlayer === 'red') {
      curPlayer = 'white';
    } else {
      curPlayer = 'red';
    }

    this.setState({ board, curPlayer });
  }

  render() {
    const { board } = this.state;
    return (
      <div className="application">
        <div className="header">
          <h1 className="header-title">CHECKERS</h1>
          <h3 className="header-description">{'One of the world\'s oldest games - also known as draughts'}</h3>
        </div>
        <Board board={board} pieceMovement={this.piecePositioning} movePiece={this.movePiece} />
      </div>
    );
  }
}

export default App;
