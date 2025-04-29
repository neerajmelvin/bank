import React, { useState } from "react";
import "./Login.css"; // For styling

const Login = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [pin, setPin] = useState("");

  const handleSignIn = () => {
    // Placeholder logic – replace with real backend call
    if (cardNumber === "123456" && pin === "1234") {
      alert("Login successful!");
      // Navigate to main page
    } else {
      alert("Incorrect Card Number or PIN");
    }
  };

  const handleClear = () => {
    setCardNumber("");
    setPin("");
  };

  const handleSignUp = () => {
    alert("Redirecting to Signup Page...");
    // Navigate to signup page
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/icon/bank.png" alt="Bank Logo" className="logo" />
        <h2>Welcome to ATM</h2>
        <label>Card No:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter card number"
        />
        <label>PIN:</label>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="Enter PIN"
        />
        <button onClick={handleSignIn}>SIGN IN</button>
        <button onClick={handleClear}>CLEAR</button>
        <button onClick={handleSignUp}>SIGN UP</button>
      </div>
    </div>
  );
};

export default Login;
