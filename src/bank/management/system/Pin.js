import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PinChange.css";

const PinChange = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPin = location.state?.pin || "";

  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const handleChangePin = () => {
    if (!newPin || !confirmPin) {
      alert("Please fill in both fields.");
      return;
    }
    if (newPin !== confirmPin) {
      alert("Entered PIN does not match.");
      return;
    }

    // Simulated backend update (replace with real API call)
    console.log("Old PIN:", currentPin, "New PIN:", newPin);
    alert("PIN changed successfully.");
    navigate("/main", { state: { pin: newPin } });
  };

  return (
    <div className="pin-container">
      <h2>CHANGE YOUR PIN</h2>
      <label>New PIN:</label>
      <input
        type="password"
        value={newPin}
        onChange={(e) => setNewPin(e.target.value)}
      />
      <label>Re-Enter New PIN:</label>
      <input
        type="password"
        value={confirmPin}
        onChange={(e) => setConfirmPin(e.target.value)}
      />
      <div className="btn-group">
        <button onClick={handleChangePin}>CHANGE</button>
        <button onClick={() => navigate("/main", { state: { pin: currentPin } })}>
          BACK
        </button>
      </div>
    </div>
  );
};

export default PinChange;
