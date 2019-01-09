import React from 'react';

import createBoard from '../../utils';

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
        <h1>HELLO WORLD</h1>
      </div>
    );
  }
}

export default App;
