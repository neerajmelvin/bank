import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    dob: '',
    gender: '',
    email: '',
    maritalStatus: '',
    address: '',
    city: '',
    pinCode: '',
    state: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.fatherName ||
      !formData.dob ||
      !formData.gender ||
      !formData.email ||
      !formData.maritalStatus ||
      !formData.address ||
      !formData.city ||
      !formData.pinCode ||
      !formData.state
    ) {
      setError('Please fill out all fields.');
      return;
    }

    // Send data to the backend
    axios
      .post('http://yourbackendapi.com/signup', formData)
      .then((response) => {
        console.log(response.data);
        // Redirect to another page, e.g., the next step
        // history.push('/nextPage');
      })
      .catch((error) => {
        console.error(error);
        setError('There was an error processing your request.');
      });
  };

  return (
    <div className="signup-container">
      <h1>Application Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Father's Name:</label>
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          required
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === 'Male'}
          onChange={handleRadioChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === 'Female'}
          onChange={handleRadioChange}
        />
        Female

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Marital Status:</label>
        <input
          type="radio"
          name="maritalStatus"
          value="Married"
          checked={formData.maritalStatus === 'Married'}
          onChange={handleRadioChange}
        />
        Married
        <input
          type="radio"
          name="maritalStatus"
          value="Unmarried"
          checked={formData.maritalStatus === 'Unmarried'}
          onChange={handleRadioChange}
        />
        Unmarried
        <input
          type="radio"
          name="maritalStatus"
          value="Other"
          checked={formData.maritalStatus === 'Other'}
          onChange={handleRadioChange}
        />
        Other

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label>Pin Code:</label>
        <input
          type="text"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          required
        />

        <label>State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Signup;
