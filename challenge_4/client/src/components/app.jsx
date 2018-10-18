import React from 'react';
import Board from './board.jsx';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    var board = [];
    for (var row = 0; row < 6; row++) {
      var oneRow = [];
      for (var col = 0; col < 7; col++) {
        oneRow.push(-1);
      }
      board.push(oneRow);
    }
    console.log(board);

    this.state = {
      board: board
    }
  }

  render() {
    return(
      <div className='app'>
        <div className='description'>
          <h1>Connect Four</h1>
          <p>Object: Connect four of your checkers in a row while preventing</p>
          <p>your opponent from doing the same. But, look out -- your opponent</p>
          <p>can sneak up on you and win the game!  --Milton Bradley</p>
        </div>
        <div className='game'>
          <div className='columnSelection'>
            <span id = 'drop1' className='drop'>Drop</span>
            <span id = 'drop2' className='drop'>Drop</span>
            <span id = 'drop3' className='drop'>Drop</span>
            <span id = 'drop4' className='drop'>Drop</span>
            <span id = 'drop5' className='drop'>Drop</span>
            <span id = 'drop6' className='drop'>Drop</span>
            <span id = 'drop7' className='drop'>Drop</span>
          </div>
          <Board board={this.state.board}/>
        </div>
      </div>
    )
  }
}