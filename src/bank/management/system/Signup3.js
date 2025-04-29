import React, { useState } from "react";

const Signup3 = ({ formno }) => {
    const [accountType, setAccountType] = useState("");
    const [cardNumber, setCardNumber] = useState("XXXX-XXXX-XXXX-4841");
    const [pin, setPin] = useState("XXXX");
    const [services, setServices] = useState({
        atmCard: false,
        internetBanking: false,
        mobileBanking: false,
        emailAlerts: false,
        chequeBook: false,
        eStatement: false
    });

    const handleAccountTypeChange = (e) => {
        setAccountType(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setServices((prevServices) => ({
            ...prevServices,
            [name]: checked
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Random card number and pin generation
        const randomCardNumber = Math.abs(Math.floor(Math.random() * 90000000) + 1409963000000000);
        const randomPin = Math.abs(Math.floor(Math.random() * 9000) + 1000);

        setCardNumber(randomCardNumber);
        setPin(randomPin);

        // Generate services string
        const selectedServices = Object.keys(services)
            .filter((key) => services[key])
            .join(", ");

        // Simulate submission
        console.log("Form Submitted with details: ");
        console.log("Account Type: ", accountType);
        console.log("Card Number: ", randomCardNumber);
        console.log("PIN: ", randomPin);
        console.log("Selected Services: ", selectedServices);

        // Here you would typically send the form data to an API.
    };

    const handleCancel = () => {
        // Handle cancellation (for example, navigate back or reset)
        console.log("Form canceled");
    };

    return (
        <div style={{ padding: "20px", backgroundColor: "#D7FCFC", fontFamily: "Raleway" }}>
            <div style={{ textAlign: "center" }}>
                <h1>Application Form - Page 3</h1>
                <h2>Account Details</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Account Type:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="accountType"
                                value="Saving Account"
                                checked={accountType === "Saving Account"}
                                onChange={handleAccountTypeChange}
                            />
                            Saving Account
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="accountType"
                                value="Fixed Deposit Account"
                                checked={accountType === "Fixed Deposit Account"}
                                onChange={handleAccountTypeChange}
                            />
                            Fixed Deposit Account
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="accountType"
                                value="Current Account"
                                checked={accountType === "Current Account"}
                                onChange={handleAccountTypeChange}
                            />
                            Current Account
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="accountType"
                                value="Recurring Deposit Account"
                                checked={accountType === "Recurring Deposit Account"}
                                onChange={handleAccountTypeChange}
                            />
                            Recurring Deposit Account
                        </label>
                    </div>
                </div>

                <div>
                    <label>Card Number:</label>
                    <div>{cardNumber}</div>
                    <small>(Your 16-digit Card Number)</small>
                    <small>(It would appear on ATM card/cheque book and statements)</small>
                </div>

                <div>
                    <label>PIN:</label>
                    <div>{pin}</div>
                    <small>(4-digit Password)</small>
                </div>

                <div>
                    <label>Services Required:</label>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="atmCard"
                                checked={services.atmCard}
                                onChange={handleCheckboxChange}
                            />
                            ATM Card
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="internetBanking"
                                checked={services.internetBanking}
                                onChange={handleCheckboxChange}
                            />
                            Internet Banking
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="mobileBanking"
                                checked={services.mobileBanking}
                                onChange={handleCheckboxChange}
                            />
                            Mobile Banking
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="emailAlerts"
                                checked={services.emailAlerts}
                                onChange={handleCheckboxChange}
                            />
                            Email Alerts
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="chequeBook"
                                checked={services.chequeBook}
                                onChange={handleCheckboxChange}
                            />
                            Cheque Book
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="eStatement"
                                checked={services.eStatement}
                                onChange={handleCheckboxChange}
                            />
                            E-Statement
                        </label>
                    </div>
                </div>

                <div>
                    <label>
                        <input type="checkbox" checked readOnly />
                        I hereby declare that the above entered details are correct to the best of my knowledge.
                    </label>
                </div>

                <div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>

            <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                <label>Form No: {formno}</label>
            </div>
        </div>
    );
};

export default Signup3;
