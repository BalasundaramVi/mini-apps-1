import React from 'react';
import Row from './row.jsx';

var Board = (props) => {
  return(
    <ol>
      {props.board.map((row, i) => {
        return (
          <Row key={i} curRow={i} rows={row} id={`row_${i}`}/>
        )
      })}
    </ol>
  )
}

export default Board;