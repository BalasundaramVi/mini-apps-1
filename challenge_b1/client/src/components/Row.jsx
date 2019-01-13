import React from 'react';

import KING from '../../assets/King.png';
import '../styles/Row.css';

const Row = ({ row, pieceMovement, rowNum }) => (
  <div className="inner-row">
    {row.map((square, i) => {
      let piece;
      const king = <img className="king" src={KING} height="50px" width="50px" alt="None" />;

      if (square.piece === 'red') {
        piece = (
          <div className="red piece">
            <div className={`red_circle ${square.selected ? 'red-selected' : ''}`} onClick={() => pieceMovement(rowNum, i)}>
              {square.king ? king : <div className="not-king" />}
            </div>
          </div>
        );
      } else if (square.piece === 'white') {
        piece = (
          <div className="white piece">
            <div className={`white_circle ${square.selected ? 'white-selected' : ''}`} onClick={() => pieceMovement(rowNum, i)}>
              {square.king ? king : <div className="not-king" />}
            </div>
          </div>
        );
      } else if (square.piece === 'grey') {
        piece = (
          <div className="grey piece">
            <div className="grey_circle">
              {square.king ? king : <div className="not-king" />}
            </div>
          </div>
        );
      } else {
        piece = (
          <div className="empty piece">
            <div className="empty_circle">
              <div className="not-king" />
            </div>
          </div>
        );
      }

      return (
        <div className={`square col_${i}`} key={`col_${i + 1}`}>
          <div className={`inner-square ${square.tile}`}>{piece}</div>
        </div>
      );
    })}
  </div>
);

export default Row;
