import React,{useState} from "react";
import "./profile.css";
// import FormSlide from "../../components/formSlideAnimation/FormSlide";

function Profile() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleContent = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1); // Close the content if the same button is clicked
    } else {
      setOpenIndex(index); // Open the content of the clicked button
    }
  };

  return (
    <div id="profile">
      <div className="profile-info container">
        <div className="intro">
          <h2>Hi, John</h2>
          {/* <p>Accounts</p> */}
        </div>
      <div className="top">
        <div className="info-section">
          <h2>Contact Information</h2>
          <p>Email: johndoe@email.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="info-section">
          <h2>Account Details</h2>
          <div className="name">
          <p>John Doe</p>
          </div>
          <div className="balance">
          <p>Account Number: 123456789</p>
          <p>Balance: $10,000.00</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="info-section">
          <h2>Transactions</h2>

          <div className="action-buttons">
          {data.map((item, index) => (
        <div key={index} className="info-section">
          <button className="action-button" onClick={() => toggleContent(index)}>
            {item.label}
          </button>
          {openIndex === index && <div className="content">{item.children}</div>}
        </div>
      ))}
          </div>
       
        </div>
        <div className="info-section">
          <h2>Notifications</h2>
          <div className="message-notification">
            <span className="message-icon">📬</span>
            <p>New statement available for download.</p>
          </div>
      </div>
        </div>
      </div>
    </div>
  );
}


const data = [
  {
    label: "Transfer",
    children: (
      <div>
        <p>start</p>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    ),
  },
  {
    label: "Deposit",
    children: <p>start</p>,
  },
  {
    label: "Withdrawal",
    children: <p>start</p>,
  },
];

export default Profile
