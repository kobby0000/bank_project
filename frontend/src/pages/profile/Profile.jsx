import React, { useState } from "react";
import "./profile.css";
import DepositForm from "../../components/depositForm/DepositForm";
import Withdraw from "../../components/withdraw/Withdraw";
import { CiSaveDown1 } from "react-icons/ci";
import { TbTransfer } from "react-icons/tb";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import avatar from "../../assets/images/team2.jpg";
import logo from "../../assets/images/only_logo.png";
import TransferForm from "../../components/transferForm/TransferForm";
import Notification from "../../components/notification/Notification";
import amazonImg from "../../assets/images/amazonlogo.jpg";
import uberImg from "../../assets/images/uber22.png";
// import FormSlide from "../../components/formSlideAnimation/FormSlide";

function Profile() {
  const [activeButton, setActiveButton] = useState(null);

  const toggleContent = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };

  return (
    <div id="profile">
      <div className="profile-info">
        <div className="intro">
            <img className="avatar" src={avatar} alt="personal profile" />
          <h2>Hi, John</h2>
        </div>
        <div className="top">
          <div className="card-container">
            {/* <h2>Account Details</h2> */}
            <div class="card">
              <div className="card-top holder-name">
              <p className="bolder">John William Doe</p>
                <p>00345156182356789</p>
              </div>
              <div className="card-bottom">
                <div className="bottom-left">
                <p className="bolder">Total Balance</p>
                <p className="balance">$50,000.00 </p>
                </div>
                <div className="bottom-right">
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>       
          </div>
          <div className="notification">
            <h2>Notifications</h2>
            <div className="notification-bottom">
            <Notification 
            icon= <MdOutlinePublishedWithChanges />
            heading="withdrwal"
            message= "654236342156"
            head= "Transaction ID:"
            />
           
            <Notification 
            icon= <CiSaveDown1 />
            heading="Deposit"
            message= "587465421563"
            head= "Transaction ID:"
            />

            <Notification 
            heading="Amazon"
            image={amazonImg}
            message= "845652421563"
            head= "Transaction ID:"
            />
           
            <Notification 
            icon= <AiOutlineMessage />
            heading="Admin"
            message= "Please visit our office for your credit card or call: +44525653256.Thank you!"
            />

            <Notification 
            heading="Uber"
            image={uberImg}
            message= "325468544563"
            head= "Transaction ID:"
            />

            <Notification 
            heading="Amazone"
            image={amazonImg}
            message= "452365478955"
            head= "Transaction ID:"
            />
            
            </div>
          </div>
        </div>


        <div className="bottom">
        <div className="info-section">
            <h2>Transactions</h2>
            <div className="action-buttons">
              {/* <div className="info-section"> */}
              {/* ====== Transfer====== */}
              <div className="btn-container">
                <button
                  className="action-button"
                  onClick={() => toggleContent("transfer")}
                >
                  <TbTransfer className="icon" />
                  Transfer
                </button>
                {activeButton === "transfer" && (
                  <div className="content transfer">
                    <TransferForm />
                  </div>
                )}
              </div>
              {/* ====== Deposit ====== */}
              <div className="btn-container">
                <button
                  className="action-button"
                  onClick={() => toggleContent("deposit")}
                >
                  <CiSaveDown1 className="icon" />
                  <span className="number">3 </span>
                  Deposits
                </button>
                {activeButton === "deposit" && (
                  <div className="content deposit">
                    <DepositForm />
                  </div>
                )}
              </div>
              {/* ====== Withdrawal ====== */}
              <div className="btn-container">
                <button
                  className="action-button"
                  onClick={() => toggleContent("withdraw")}
                >
                  <MdOutlinePublishedWithChanges className="icon" />
                  <span className="number">4</span>
                  Withdrawal
                </button>
                {activeButton === "withdraw" && (
                  <div className="content withdraw">
                    <Withdraw />
                  </div>
                )}
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <section id="footer" className="footer_profile">
        <div className="footer_wrapper container">
          <div className="bottom">
            <div className="main">
            <div className="left">
              <p>Copyright© {new Date().getFullYear()}</p>
            </div>
            <div className="right">
              <a href="/terms&condistions">Terms & Conditions</a>
              <a href="/privacy&policy">Privacy & Plolicy</a>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
