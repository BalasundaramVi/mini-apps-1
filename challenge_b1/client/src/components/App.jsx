import React from 'react';

import createBoard from '../../utils';
import Board from './Board';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: createBoard(),
    };
  }

  render() {
    const { board } = this.state;
    return (
      <div className="application">
        <div className="header">
          <h1 className="header-title">CHECKERS</h1>
          <h3 className="header-description">{'One of the world\'s oldest games - also known as draughts'}</h3>
        </div>
        <Board board={board} />
      </div>
    );
  }
}

export default App;
