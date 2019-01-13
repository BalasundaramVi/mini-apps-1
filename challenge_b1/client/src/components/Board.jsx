import React from 'react';

import Row from './Row';
import '../styles/Board.css';

const Board = ({ board, pieceMovement }) => (
  <div className="board">
    {board.map((row, i) => (
      <div className={`row row_${i}`} key={`row_${i + 1}`}>
        <Row row={row} pieceMovement={pieceMovement} rowNum={i} />
      </div>
    ))}
  </div>
);

export default Board;
