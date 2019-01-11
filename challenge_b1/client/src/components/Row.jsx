import React from 'react';

import '../styles/Row.css';

const Row = ({ row }) => (
  <div className="inner-row">
    {row.map((square, i) => {
      let piece;
      if (square.piece === 'red') {
        piece = (
          <div className="red piece">
            <div className="red_circle" />
          </div>
        );
      } else if (square.piece === 'white') {
        piece = (
          <div className="white piece">
            <div className="white_circle" />
          </div>
        );
      } else {
        piece = (
          <div className="empty piece">
            <div className="empty_circle" />
          </div>
        );
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
