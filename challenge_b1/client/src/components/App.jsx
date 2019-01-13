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

      if (row < board.length - 1 && piece.king === true) {
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

      if (row >= 2) {
        if (col < board.length - 2 && board[row - 1][col + 1].piece === 'white' && board[row - 2][col + 2].piece === null) {
          board[row - 2][col + 2].piece = 'grey';
          board[row - 2][col + 2].moveOption = {
            row,
            col,
          };
          board[row - 2][col + 2].takePiece = {
            row: (row - 1),
            col: (col + 1),
          };
        }
        if (col > 1 && board[row - 1][col - 1].piece === 'white' && board[row - 2][col - 2].piece === null) {
          board[row - 2][col - 2].piece = 'grey';
          board[row - 2][col - 2].moveOption = {
            row,
            col,
          };
          board[row - 2][col - 2].takePiece = {
            row: (row - 1),
            col: (col - 1),
          };
        }
      }

      if (row < board.length - 2 && piece.king === true) {
        if (col < board.length - 2 && board[row + 1][col + 1].piece === 'white' && board[row + 2][col + 2].piece === null) {
          board[row + 2][col + 2].piece = 'grey';
          board[row + 2][col + 2].moveOption = {
            row,
            col,
          };
          board[row + 2][col + 2].takePiece = {
            row: (row + 1),
            col: (col + 1),
          };
        }
        if (col > 1 && board[row + 1][col - 1].piece === 'white' && board[row + 2][col - 2].piece === null) {
          board[row + 2][col - 2].piece = 'grey';
          board[row + 2][col - 2].moveOption = {
            row,
            col,
          };
          board[row + 2][col - 2].takePiece = {
            row: (row + 1),
            col: (col - 1),
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

      if (row >= 1 && piece.king === true) {
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

      if (row < board.length - 2) {
        if (col < board.length - 2 && board[row + 1][col + 1].piece === 'red' && board[row + 2][col + 2].piece === null) {
          board[row + 2][col + 2].piece = 'grey';
          board[row + 2][col + 2].moveOption = {
            row,
            col,
          };
          board[row + 2][col + 2].takePiece = {
            row: (row + 1),
            col: (col + 1),
          };
        }

        if (col > 1 && board[row + 1][col - 1].piece === 'red' && board[row + 2][col - 2].piece === null) {
          board[row + 2][col - 2].piece = 'grey';
          board[row + 2][col - 2].moveOption = {
            row,
            col,
          };
          board[row + 2][col - 2].takePiece = {
            row: (row + 1),
            col: (col - 1),
          };
        }
      }

      if (row >= 2 && piece.king === true) {
        if (col < board.length - 2 && board[row - 1][col + 1].piece === 'red' && board[row - 2][col + 2].piece === null) {
          board[row - 2][col + 2].piece = 'grey';
          board[row - 2][col + 2].moveOption = {
            row,
            col,
          };
          board[row - 2][col + 2].takePiece = {
            row: (row - 1),
            col: (col + 1),
          }
        }

        if (col > 1 && board[row - 1][col - 1].piece === 'red' && board[row - 2][col - 2].piece === null) {
          board[row - 2][col - 2].piece = 'grey';
          board[row - 2][col - 2].moveOption = {
            row,
            col,
          };
          board[row - 2][col - 2].takePiece = {
            row: (row - 1),
            col: (col - 1),
          }
        }
      }
    }

    this.setState(board);
  }

  movePiece(row, col) {
    const { board } = this.state;
    let { curPlayer } = this.state;
    const piece = board[row][col];
    const { moveOption, takePiece } = piece;
    if (piece.moveOption === null) {
      return;
    }

    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1) {
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
    if (curPlayer === 'red' && row === 0) {
      board[row][col].king = true;
    } else if (curPlayer === 'white' && row === board.length - 1) {
      board[row][col].king = true;
    }
    board[moveOption.row][moveOption.col].piece = null;
    board[moveOption.row][moveOption.col].king = false;

    let check = true;
    if (takePiece !== null) {
      board[takePiece.row][takePiece.col].piece = null;
      check = false;
    }

    if (check) {
      if (curPlayer === 'red') {
        curPlayer = 'white';
      } else {
        curPlayer = 'red';
      }
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
