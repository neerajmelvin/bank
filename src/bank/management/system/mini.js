import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MiniStatement.css";

const MiniStatement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pin = location.state?.pin || "";

  const [cardNumber, setCardNumber] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Simulate fetch from DB using pin
    const fetchCardAndTransactions = async () => {
      try {
        // Simulated data (replace with real DB/API call)
        const mockCardNumber = "1234567890123456";
        const mockTransactions = [
          { date: "2025-04-20", type: "Deposit", amount: 1000 },
          { date: "2025-04-21", type: "Withdraw", amount: 500 },
          { date: "2025-04-22", type: "Deposit", amount: 2000 },
        ];

        let bal = 0;
        mockTransactions.forEach((t) => {
          if (t.type === "Deposit") bal += t.amount;
          else bal -= t.amount;
        });

        setCardNumber(
          `${mockCardNumber.slice(0, 4)}XXXXXXXX${mockCardNumber.slice(12)}`
        );
        setTransactions(mockTransactions);
        setBalance(bal);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchCardAndTransactions();
  }, [pin]);

  return (
    <div className="mini-container">
      <h2 className="bank-name">TechCoder A.V</h2>
      <p className="card-number">Card Number: {cardNumber}</p>
      <div className="transactions">
        {transactions.map((t, index) => (
          <div key={index} className="transaction-row">
            <span>{t.date}</span>
            <span>{t.type}</span>
            <span>Rs {t.amount}</span>
          </div>
        ))}
      </div>
      <p className="balance">Your Total Balance is Rs {balance}</p>
      <button onClick={() => navigate(-1)}>Exit</button>
    </div>
  );
};

export default MiniStatement;
