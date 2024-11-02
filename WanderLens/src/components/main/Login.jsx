import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Error state for handling error messages
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Login request
        axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
            .then((result) => {
                if (result.status === 200) {
                    // Fetch user data
                    axios.get("http://localhost:3001/user", { withCredentials: true })
                        .then(response => {
                            if (response.data.user) {
                                // Navigate to home with user data in state
                                navigate("/home", { state: { user: response.data.user } });
                            }
                        })
                        .catch((error) => {
                            console.error("Error fetching user:", error);
                            setError("Failed to fetch user data.");
                        });
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    console.log("Invalid credentials");
                    setError("Invalid email or password. Please try again.");
                } else if (error.response && error.response.status === 400) {
                    console.log("User doesn't exist");
                    setError("User doesn't exist, please sign up.");
                } else {
                    console.error("An unexpected error occurred:", error);
                    setError("An unexpected error occurred. Please try again later.");
                }
            });
    };

    return (
        <div className="login_container">
            <div className="login_form_container">
                <div className="left">
                    <form className="form_container" onSubmit={handleLogin}>
                        <h1 color="orange">Login to Your Account</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            className="input"
                        />
                        {error && <div className="error_msg">{error}</div>}
                        <button type="submit" className="green_btn">
                            Sign In
                        </button>
                    </form>
                </div>
                <div className="right">
                    <h1>New Here?</h1>
                    <Link to="/signup">
                        <button type="button" className="white_btn">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;