import React from 'react';
import "./withdraw.css";

function Withdraw() {

  return (
    <div className="deposit-form-container">
    <h2 className="form-title">Withdrawals</h2>
    <div className="bottom">
    <div className='deposit'>
      <p className="date">Date</p>
      <p className="amount">Amount</p>
    </div>
    <div className='deposit'>
      <p className="date">02/03/2023</p>
      <p className="amount">$120</p>
    </div>
    <div className='deposit'>
      <p className="date">02/03/2023</p>
      <p className="amount">$1750</p>
    </div>
    <div className='deposit'>
      <p className="date">02/03/2023</p>
      <p className="amount">$275</p>
    </div>
    <div className='deposit'>
      <p className="date">02/03/2023</p>
      <p className="amount">$70</p>
    </div>
    </div>
  </div>
  )
}

export default Withdraw