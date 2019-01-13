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
        }
        if (col > 0 && board[row - 1][col - 1].piece === null) {
          board[row - 1][col - 1].piece = 'grey';
        }
      }
    } else if (piece.piece === 'white') {
      if (row < board.length - 1) {
        if (col < board.length - 1 && board[row + 1][col + 1].piece === null) {
          board[row + 1][col + 1].piece = 'grey';
        }
        if (col > 0 && board[row + 1][col - 1].piece === null) {
          board[row + 1][col - 1].piece = 'grey';
        }
      }
    }
    debugger;
    this.setState(board);
  }

  render() {
    const { board } = this.state;
    return (
      <div className="application">
        <div className="header">
          <h1 className="header-title">CHECKERS</h1>
          <h3 className="header-description">{'One of the world\'s oldest games - also known as draughts'}</h3>
        </div>
        <Board board={board} pieceMovement={this.piecePositioning} />
      </div>
    );
  }
}

export default App;
