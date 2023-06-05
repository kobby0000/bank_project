import React from 'react';
import "./CardTwo.css"

function CardTwo(props) {
  return (
    <div id='card_two'>
        <img src={props.src} alt={props.alt} />
        <p className="heading">{props.title}</p>
        <p>{props.text}</p>
    </div>
  )
}

export default CardTwo