import React from 'react';

var Row = (props) => {
  return (
    <div className= {`row ${props.curRow}`}>
      {props.rows.map((slot, i) => {
        return (
          <div className='outerBox'>
            <div key={`${i}`} className={`col ${i}`} id={`col_${i}`}>{slot}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Row;