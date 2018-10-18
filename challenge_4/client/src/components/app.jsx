import React from 'react';

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
      <div>
        <div className='description'>
          <h1>Connect Four</h1>
          <p>Object: Connect four of your checkers in a row while preventing</p>
          <p>your opponent from doing the same. But, look out -- your opponent</p>
          <p>can sneak up on you and win the game!  --Milton Bradley</p>
        </div>
        <div className='Board'>
          
        </div>
      </div>
    )
  }
}