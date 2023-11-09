import React,{useState} from 'react';
import "./formSlide.css";


function FormSlide(props) {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="info-section">
        <button className="action-button" onClick={() =>setIsOpen(!isOpen)}>
            {props.label}
            </button>
        {isOpen && <div className="content">
            {props.children}
        </div>}
    </div>
  )
}

export default FormSlide