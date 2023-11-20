import React, { useState } from "react";
import "./profile.css";
import DepositForm from "../../components/depositForm/DepositForm";
import Withdraw from "../../components/withdraw/Withdraw";
import { CiSaveDown1 } from "react-icons/ci";
import { TbTransfer } from "react-icons/tb";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import TransferForm from "../../components/transferForm/TransferForm";
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
          <h2>Hi, John</h2>
          {/* <p>Accounts</p> */}
        </div>
        <div className="top">
          <div className="info-section">
            <h2>Contact Information</h2>
            <p>
              <span className="bolder">Email:</span> johndoe@email.com
            </p>
            <p>
              <span className="bolder">Phone: </span> (123) 456-7890
            </p>
          </div>
          <div className="info-section">
            <h2>Account Details</h2>
            <div class="card">
              <p>
                <span className="bolder">Name: </span>John Doe
              </p>
              <div className="balance">
                <p>
                  <span className="bolder">Account Number:</span> 12345156182356789
                </p>
                <p>
                  <span className="bolder">Balance:</span> $50,000.00
                </p>
              </div>
              {/* <p class="card-footer">Created by Rahul C.</p> */}
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

          <div className="info-section">
            <h2>Notifications</h2>
            <div className="message-notification">
              <span className="message-icon">
                <AiOutlineMessage />
              </span>
              <p>New statement available for download.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
