import React, { useState } from 'react';

const Signup2 = ({ formno }) => {
    const [formData, setFormData] = useState({
        religion: '',
        category: '',
        income: '',
        education: '',
        occupation: '',
        pan: '',
        aadhar: '',
        seniorCitizen: '',
        existingAccount: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you'd send formData to the backend or handle it further
        if (!formData.pan || !formData.aadhar) {
            alert('Fill all the fields');
        } else {
            console.log('Form Submitted:', formData);
            // Proceed to the next step, for example, navigate to Signup3
        }
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#FCE94F', fontFamily: 'Raleway' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Application Form - Page 2</h1>
                <h2>Additional Details</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Religion:</label>
                    <select name="religion" value={formData.religion} onChange={handleChange}>
                        <option value="Hindu">Hindu</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Sikh">Sikh</option>
                        <option value="Christian">Christian</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label>Category:</label>
                    <select name="category" value={formData.category} onChange={handleChange}>
                        <option value="General">General</option>
                        <option value="OBC">OBC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label>Income:</label>
                    <select name="income" value={formData.income} onChange={handleChange}>
                        <option value="Null">Null</option>
                        <option value="<1,50,000"><1,50,000</option>
                        <option value="<2,50,000"><2,50,000</option>
                        <option value="5,00,000">5,00,000</option>
                        <option value="Upto 10,00,000">Upto 10,00,000</option>
                        <option value="Above 10,00,000">Above 10,00,000</option>
                    </select>
                </div>

                <div>
                    <label>Education:</label>
                    <select name="education" value={formData.education} onChange={handleChange}>
                        <option value="Non-Graduate">Non-Graduate</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Post-Graduate">Post-Graduate</option>
                        <option value="Doctorate">Doctorate</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div>
                    <label>Occupation:</label>
                    <select name="occupation" value={formData.occupation} onChange={handleChange}>
                        <option value="Salaried">Salaried</option>
                        <option value="Self-Employed">Self-Employed</option>
                        <option value="Business">Business</option>
                        <option value="Student">Student</option>
                        <option value="Retired">Retired</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label>PAN Number:</label>
                    <input type="text" name="pan" value={formData.pan} onChange={handleChange} />
                </div>

                <div>
                    <label>Aadhar Number:</label>
                    <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} />
                </div>

                <div>
                    <label>Senior Citizen:</label>
                    <input type="radio" name="seniorCitizen" value="Yes" onChange={handleChange} /> Yes
                    <input type="radio" name="seniorCitizen" value="No" onChange={handleChange} /> No
                </div>

                <div>
                    <label>Existing Account:</label>
                    <input type="radio" name="existingAccount" value="Yes" onChange={handleChange} /> Yes
                    <input type="radio" name="existingAccount" value="No" onChange={handleChange} /> No
                </div>

                <div>
                    <button type="submit">Next</button>
                </div>
            </form>
        </div>
    );
};

export default Signup2;
