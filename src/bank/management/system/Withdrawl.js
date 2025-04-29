import React, { useState } from 'react';
import axios from 'axios'; // Assuming Axios is being used for API calls to the backend

const Withdrawal = ({ pin }) => {
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [balance, setBalance] = useState(0);

  // Function to fetch the current balance for the user based on their pin
  const fetchBalance = async () => {
    try {
      const response = await axios.get(`/api/balance/${pin}`); // Assuming this API endpoint fetches the balance
      setBalance(response.data.balance);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  // On component mount, fetch the balance
  React.useEffect(() => {
    fetchBalance();
  }, [pin]);

  // Handle withdrawal submission
  const handleWithdraw = async (e) => {
    e.preventDefault();

    if (!amount) {
      setErrorMessage('Please enter an amount to withdraw');
      return;
    }

    const withdrawAmount = parseFloat(amount);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      setErrorMessage('Please enter a valid withdrawal amount');
      return;
    }

    if (withdrawAmount > balance) {
      setErrorMessage('Insufficient balance');
      return;
    }

    try {
      const response = await axios.post('/api/withdraw', {
        pin,
        amount: withdrawAmount,
      });

      if (response.data.success) {
        setErrorMessage('');
        alert(`Rs. ${withdrawAmount} debited successfully`);
        setBalance(balance - withdrawAmount); // Update the balance after successful withdrawal
      } else {
        setErrorMessage('Error during withdrawal. Please try again.');
      }
    } catch (error) {
      console.error('Error during withdrawal:', error);
      setErrorMessage('Error during withdrawal. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>ATM Withdrawal</h2>
      <p style={{ fontSize: '16px' }}>MAXIMUM WITHDRAWAL IS RS. 10,000</p>
      <p style={{ fontSize: '16px' }}>Current balance: Rs. {balance}</p>

      <form onSubmit={handleWithdraw}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="amount" style={{ fontSize: '18px' }}>
            Please Enter Your Amount:
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              fontSize: '16px',
              padding: '8px',
              marginTop: '8px',
              width: '200px',
            }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Withdraw
        </button>
      </form>

      <button
        onClick={() => window.history.back()}
        style={{
          padding: '10px 20px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Back
      </button>

      {errorMessage && (
        <p style={{ color: 'red', marginTop: '20px' }}>{errorMessage}</p>
      )}
    </div>
  );
};

export default Withdrawal;
