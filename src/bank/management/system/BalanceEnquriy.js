import React, { useEffect, useState } from "react";

const BalanceEnquiry = ({ pin, onBack }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    // Replace this URL with your actual API endpoint
    fetch(`/api/balance?pin=${pin}`)
      .then((response) => response.json())
      .then((data) => {
        setBalance(data.balance);
      })
      .catch((error) => {
        console.error("Error fetching balance:", error);
      });
  }, [pin]);

  const handleBack = () => {
    onBack(); // Calls a function passed from the parent to go back
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/atm2.png')",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        color: "white",
        paddingTop: "180px",
        textAlign: "center",
        fontFamily: "System, sans-serif",
      }}
    >
      <h2>Your Current Balance is Rs</h2>
      <h3>{balance !== null ? balance : "Loading..."}</h3>
      <button
        onClick={handleBack}
        style={{
          marginTop: "40px",
          padding: "10px 30px",
          backgroundColor: "#417D80",
          color: "white",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Back
      </button>
    </div>
  );
};

export default BalanceEnquiry;
