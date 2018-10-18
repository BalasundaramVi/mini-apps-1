import React from 'react';

var Row = (props) => {
  return (
    <div className= {`row ${props.curRow}`}>
      {props.rows.map((slot, i) => {
        return (
          <div key={i} className='outerBox'>
            <div key={`${i}`} row={props.curRow} col={i} className={`col ${i} ${slot}`} id={`col_${i}`}>{slot}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Row;