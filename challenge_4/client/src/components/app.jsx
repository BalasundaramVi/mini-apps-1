import React from 'react';
import Board from './board.jsx';
import checkWinner from './checkWinner.js'

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

  dropPiece(col) {
    var newBoard = {};
    newBoard.gameOver = this.state.gameOver
    newBoard.curPlayer = this.state.curPlayer.concat();
    newBoard.board = this.state.board.concat();

    for (var row = 5; row >= 0; row--) {
      if (newBoard.board[row][col] === 'blank') {

        newBoard.board[row][col] = newBoard.curPlayer;
        var checkWin = new checkWinner(row, col, newBoard.curPlayer, newBoard.board);
        if (checkWin.win) {
          newBoard.gameOver = true;
          for (var row = 0; row < 6; row++) {
            for (var col = 0; col < 7; col++) {
              if (newBoard.board[row][col] === 'blank') {
                newBoard.board[row][col] = 'done';
              }
            }
          }
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
        {this.state.gameOver ? (<div className='win'>GAME OVER - {this.state.curPlayer.toUpperCase()} WON!</div>) : <div></div>}
      </div>
    )
  }
}