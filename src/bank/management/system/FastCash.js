import React from "react";

const FastCash = ({ pin, onBack }) => {
  const amounts = [100, 500, 1000, 2000, 5000, 10000];

  const handleWithdraw = async (amount) => {
    try {
      const res = await fetch("http://localhost:5000/api/fastcash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin, amount }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(`Rs. ${amount} Debited Successfully`);
        onBack();
      } else {
        alert(data.error || "Transaction failed");
      }
    } catch (err) {
      console.error("FastCash Error:", err);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/atm2.png')",
        backgroundSize: "cover",
        height: "100vh",
        paddingTop: "100px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2>SELECT WITHDRAWAL AMOUNT</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "40px" }}>
        {amounts.map((amt) => (
          <button
            key={amt}
            onClick={() => handleWithdraw(amt)}
            style={{
              padding: "10px 30px",
              backgroundColor: "#417D80",
              color: "white",
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              width: "150px",
            }}
          >
            Rs. {amt}
          </button>
        ))}
        <button
          onClick={onBack}
          style={{
            padding: "10px 30px",
            backgroundColor: "#417D80",
            color: "white",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
            width: "150px",
          }}
        >
          BACK
        </button>
      </div>
    </div>
  );
};

export default FastCash;
