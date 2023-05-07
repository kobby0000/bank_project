import React from 'react';
import "./squareCard.css";

function SquareCard(props) {
  return (
    <div>
         <div className="box">
            <img src= {props.src} alt= {props.alt} />
            <p>{props.title}</p>
          </div>
    </div>
  )
}

export default SquareCard