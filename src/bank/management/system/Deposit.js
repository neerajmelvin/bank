import React, { useState } from "react";

const Deposit = ({ pin, onBack }) => {
  const [amount, setAmount] = useState("");

  const handleDeposit = async () => {
    if (!amount) {
      alert("Please enter the amount you want to deposit");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/deposit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pin, amount }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(`Rs. ${amount} Deposited Successfully`);
        onBack();
      } else {
        alert(data.error || "Error during deposit");
      }
    } catch (error) {
      console.error("Deposit error:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/atm2.png')",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <h2>ENTER AMOUNT YOU WANT TO DEPOSIT</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          backgroundColor: "#417D80",
          color: "white",
          fontSize: "20px",
          padding: "10px",
          marginTop: "20px",
          width: "300px",
        }}
      />
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={handleDeposit}
          style={{
            padding: "10px 30px",
            marginRight: "20px",
            backgroundColor: "#417D80",
            color: "white",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          DEPOSIT
        </button>
        <button
          onClick={onBack}
          style={{
            padding: "10px 30px",
            backgroundColor: "#417D80",
            color: "white",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          BACK
        </button>
      </div>
    </div>
  );
};

export default Deposit;
