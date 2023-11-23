import React from "react";
import "./transferForm.css";

export default function TransferForm() {
  // const [amount, setAmount] = useState("");
  // const [fromAccount, setFromAccount] = useState("Savings");
  // const [toAccount, setToAccount] = useState("Checking");

  // const handleTransfer = () => {
  //   console.log(`Transfer ${amount} from ${fromAccount} to ${toAccount}`);
  //   setAmount("");
  //   setFromAccount("Savings");
  //   setToAccount("Checking");
  // };
  return (
    <div>
      <div className="transfer-container">
        <h1>Transfer</h1>
        <form >
        <label>
           Full Name:
            <input
              type="text"
              // value={amount}
              // onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <label>
            Account Number:
            <input
              type="number"
              // value={amount}
              // onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <label>
            Routing Number:
            <input
              type="number"
              // value={amount}
              // onChange={(e) => setAmount(e.target.value)}
            />
          </label>

          <label>
            Amount:
            <input
              type="number"
              // value={amount}
              // onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          {/* <label>
            From Account:
            <select
              value={fromAccount}
              onChange={(e) => setFromAccount(e.target.value)}
            >
              <option value="Savings">Savings</option>
              <option value="Checking">Checking</option>
            </select>
          </label>
          <label>
            To Account:
            <select
              value={toAccount}
              onChange={(e) => setToAccount(e.target.value)}
            >
              <option value="Savings">Savings</option>
              <option value="Checking">Checking</option>
            </select>
          </label> */}
          <button 
          // onClick={handleTransfer}
          >Transfer</button>
        </form>
      </div>
    </div>
  );
}
