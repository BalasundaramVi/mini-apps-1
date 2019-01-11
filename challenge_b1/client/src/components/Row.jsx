import React from 'react';

import RED_PIECE from '../../assets/red_piece.png';
import '../styles/Row.css';

const Row = ({ row }) => (
  <div className="inner-row">
    {row.map((square, i) => {
      let piece;
      if (square.piece === 'red') {
        piece = <div className="red piece">RED</div>;
      } else if (square.piece === 'white') {
        piece = <div>WHITE</div>
      } else {
        piece = <div>NULL</div>;
      }

      return (
        <div className={`square col_${i}`} key={`col_${i + 1}`}>
          <div className="inner-square">{piece}</div>
        </div>
      );
    })}
  </div>
);

export default Row;
