// Signup.js
import "./signup.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Signup_Greet from "./Signup_greet";
export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Add error state

    const navigate = useNavigate();
    
    const handleSignup = (e) => {
        e.preventDefault();
        setError(""); // Reset error message

        // Signup request
        axios.post("http://localhost:3001/signup", { name, email, password })
            .then((result) => {
                if (result.status === 201) {
                    console.log("User created successfully");
                    navigate("/login");
                }
            })
            .catch((err) => {
                if (err.response && err.response.status === 400) {
                    setError("Email already exists. Please use a different email.");
                } else {
                    setError("An unexpected error occurred.");
                    console.error(err);
                }
            });
    };

    return (

        <div className="signup_container">
            <div className="signup_form_container">
                <div className="left">
                    <Signup_Greet/>
                    
                    <Link to="/login">
                        <button type="button" className="white_btn">
                            Sign In
                        </button>
                    </Link>
                </div>
                <div className="right">
                    <form className="form_container" onSubmit={handleSignup}>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="input"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="input"
                        />
                        {error && <div className="error_msg">{error}</div>}
                        <button type="submit" className="green_btn">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default Signup;
