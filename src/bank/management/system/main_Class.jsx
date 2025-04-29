import React from "react";
import "./MainMenu.css";
import { useNavigate } from "react-router-dom";

const MainMenu = ({ pin }) => {
  const navigate = useNavigate();

  const handleAction = (action) => {
    switch (action) {
      case "deposit":
        navigate("/deposit", { state: { pin } });
        break;
      case "withdraw":
        navigate("/withdraw", { state: { pin } });
        break;
      case "fastcash":
        navigate("/fastcash", { state: { pin } });
        break;
      case "mini":
        navigate("/mini", { state: { pin } });
        break;
      case "pin":
        navigate("/pinchange", { state: { pin } });
        break;
      case "balance":
        navigate("/balance", { state: { pin } });
        break;
      case "exit":
        window.close(); // Optional: For web, may redirect to login or home
        break;
      default:
        break;
    }
  };

  return (
    <div className="main-container">
      <img src="/icon/atm2.png" alt="ATM background" className="bg-img" />
      <div className="main-overlay">
        <h2>Please Select Your Transaction</h2>
        <div className="button-group">
          <button onClick={() => handleAction("deposit")}>DEPOSIT</button>
          <button onClick={() => handleAction("withdraw")}>CASH WITHDRAWAL</button>
          <button onClick={() => handleAction("fastcash")}>FAST CASH</button>
          <button onClick={() => handleAction("mini")}>MINI STATEMENT</button>
          <button onClick={() => handleAction("pin")}>PIN CHANGE</button>
          <button onClick={() => handleAction("balance")}>BALANCE ENQUIRY</button>
          <button onClick={() => handleAction("exit")}>EXIT</button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
