import React from 'react';

import '../styles/Row.css';

const Row = ({ row }) => (
  <div className="inner-row">
    {row.map((square, i) => (
      <div className={`square col_${i}`} key={`col_${i + 1}`}>
        <div className="inner-square">{square.piece || 'null'}</div>
      </div>
    ))}
  </div>
);

export default Row;
