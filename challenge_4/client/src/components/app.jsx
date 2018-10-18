import React from 'react';
import Board from './board.jsx';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    var board = [];
    for (var row = 0; row < 6; row++) {
      var oneRow = [];
      for (var col = 0; col < 7; col++) {
        oneRow.push('blank');
      }
      board.push(oneRow);
    }

    this.state = {
      gameOver: false,
      curPlayer: 'red',
      board: board
    }
  }

  checkWinner(row, col, color, board) {
    if (this.checkRow(row, col, color, board)) {
      return true;
    } else if (this.checkCol(row, col, color, board)) {
      return true;
    } else if (this.checkDiagonals(row, col, color, board)) {
      return true;
    }
    return false;
  }

  checkRow(row, col, color, board) {
    var start;
    var end;
    if ((col - 3) > 0) {
      start = col - 3;
    } else {
      start = 0;
    }

    if ((col + 3) > 6) {
      end = 6;
    } else {
      end = col + 3;
    }
    var count = 0;
    for (var i = start; i <= end; i++) {
      if (board[row][i] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }
    return false;
  }

  checkCol(row, col, color, board) {
    var start;
    var end;
    if ((row - 3) > 0) {
      start = row - 3;
    } else {
      start = 0;
    }

    if ((row + 3) > 5) {
      end = 5;
    } else {
      end = row + 3;
    }
    var count = 0;
    for (var i = start; i <= end; i++) {
      if (board[i][col] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }
    return false;
  }

  checkMinorDiagonals(row, col, color, board) {
    var startCol = col - 3;
    var endCol = col + 3;
    var startRow = row + 3;
    var endRow = row - 3;

    var count = 0;
    while (startCol <= endCol && startRow >= endRow) {
      if (startCol < 0 || startRow > 5 || startCol > 6 || startRow < 0) {
        startCol++;
        startRow--;
        continue;
      }

      if (board[startRow][startCol] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }

      startCol++;
      startRow--;
    }
    return false;
  }

  checkMajorDiagonals(row, col, color, board) {
    var startCol = col - 3;
    var endCol = col + 3;
    var startRow = row - 3;
    var endRow = row + 3;

    var count = 0;
    console.log(row, col)
    while (startCol <= endCol && startRow <= endRow) {
      if (startCol < 0 || startRow < 0 || startCol > 6 || startRow > 5) {
        startCol++;
        startRow++;
        continue;
      }

      if (board[startRow][startCol] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }

      startCol++;
      startRow++;
    }
    return false;
  }

  checkDiagonals(row, col, color, board) {
    if (this.checkMajorDiagonals(row, col, color, board)) {
      return true;
    } else if (this.checkMinorDiagonals(row, col, color, board)) {
      return true;
    }
    return false;
  }

  dropPiece(col) {
    var newBoard = {};
    newBoard.gameOver = this.state.gameOver
    newBoard.curPlayer = this.state.curPlayer.concat();
    newBoard.board = this.state.board.concat();

    for (var row = 5; row >= 0; row--) {
      if (newBoard.board[row][col] === 'blank') {

        newBoard.board[row][col] = newBoard.curPlayer;

        if (this.checkWinner(row, col, newBoard.curPlayer, newBoard.board)) {
          newBoard.gameOver = true;
          for (var row = 0; row < 6; row++) {
            for (var col = 0; col < 7; col++) {
              if (newBoard.board[row][col] === 'blank') {
                newBoard.board[row][col] = 'done';
              }
            }
          }
          console.log(`GAME OVER ${newBoard.curPlayer} WON!`)
        } else {
          if (newBoard.curPlayer === 'red') {
            newBoard.curPlayer = 'black';
          } else {
            newBoard.curPlayer = 'red';
          }
        }

        break;
      }
    }
    this.setState(newBoard);
  }

  render() {
    return (
      <div className='app'>
        <div className='description'>
          <h1>Connect Four</h1>
          <p>"Object: Connect four of your checkers in a row while preventing</p>
          <p>your opponent from doing the same. But, look out -- your opponent</p>
          <p>can sneak up on you and win the game!"  --Milton Bradley</p>
        </div>
        <div className='game'>
          <div className='columnSelection'>
            <span id='drop1' className='drop' onClick={() => { this.dropPiece(0) }}>Drop</span>
            <span id='drop2' className='drop' onClick={() => { this.dropPiece(1) }}>Drop</span>
            <span id='drop3' className='drop' onClick={() => { this.dropPiece(2) }}>Drop</span>
            <span id='drop4' className='drop' onClick={() => { this.dropPiece(3) }}>Drop</span>
            <span id='drop5' className='drop' onClick={() => { this.dropPiece(4) }}>Drop</span>
            <span id='drop6' className='drop' onClick={() => { this.dropPiece(5) }}>Drop</span>
            <span id='drop7' className='drop' onClick={() => { this.dropPiece(6) }}>Drop</span>
          </div>
          <Board board={this.state.board} />
        </div>
        {this.state.gameOver ? (<div>GAME OVER - {this.state.curPlayer.toUpperCase()} WON!</div>) : <div></div>}
      </div>
    )
  }
}