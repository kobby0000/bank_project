import React,{useState,useRef} from 'react';
import "./notification.css";

function Notification(props) {
  const [active, setActive] = useState(false);
  const showRef = useRef();


  return (
    <div>
         <div className="message-notification" onClick={() => setActive(!active)}>
              <div className="message-icon">
                {props.icon}
                {props.image && <img src={props.image} alt="Notification" />}
              </div>
            <div className="message-text">
                <div className="text-top">
              <h3>{props.heading}</h3>
              <p className="money">
                -$500
              </p>
                </div>
              <div className="text-bottom">
              <p className='date'>10/5/2023</p>
              <p className="time">4:30 PM</p>
              </div>
            </div>
         </div>
        
         <div 
         className='notification-detail' 
         ref={showRef}
         style={
          active 
          ? {
          height : showRef.current.scrollHeight + "px",
         }
        : {
          height: "0px"
        }
      }
         >
          <p><span className="bolder">{props.head} </span>{props.message}</p>
         </div>
         
    </div>
  )
}

export default Notification