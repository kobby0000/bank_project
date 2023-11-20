import React,{ useState } from 'react';
// import CreditCardInput from "react-credit-card-input";
import "./creditCardInput.css";


function CreditCardInput() {
    
    const [amount, setAmount] = useState('');
    const [source, setSource] = useState('');
    const [creditCard, setCreditCard] = useState('');
  
    const handleAmountChange = (e) => {
      setAmount(e.target.value);
    };
  
    const handleSourceChange = (e) => {
      setSource(e.target.value);
    };
  
    const handleCreditCardChange = (data) => {
      setCreditCard(data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Pass amount, source, and credit card information to the parent component
    //   onDeposit({ amount, source, creditCard });
    };
  return (
    <div className="deposit-form-container">
      <h2 className="form-title">Deposit Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label className="input-label">Amount:</label>
          <input
            className="input-field"
            type="number"
            placeholder="Enter deposit amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div className="input-wrapper">
          <label className="input-label">Source:</label>
          <input
            className="input-field"
            type="text"
            placeholder="Enter source of funds"
            value={source}
            onChange={handleSourceChange}
            required
          />
        </div>
        <div className="input-wrapper">
          <label className="input-label">Credit Card:</label>
          <CreditCardInput
            cardNumberInputProps={{ value: creditCard.cardNumber, onChange: handleCreditCardChange }}
            cardExpiryInputProps={{ value: creditCard.expiry, onChange: handleCreditCardChange }}
            cardCVCInputProps={{ value: creditCard.cvc, onChange: handleCreditCardChange }}
            fieldClassName="input-field"
            required
          />
        </div>
        <button className="submit-button" type="submit">
          Deposit
        </button>
      </form>
    </div>
  )
}

export default CreditCardInput