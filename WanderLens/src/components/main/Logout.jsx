import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SetIsLoggedInContext } from "../../App"; // Make sure this imports correctly
import { Button } from "./Button";

export const Logout = () => {
    const navigate = useNavigate();
    const setIsLoggedIn = useContext(SetIsLoggedInContext); // Consume the context

    const handleLogout = async (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        try {
            const response = await axios.post('http://localhost:3001/logout', {}, { withCredentials: true });
            if (response.status === 200) {
                setIsLoggedIn(false); // Correctly call the function from context
                navigate("/login"); // Redirect to login page
            }
        } catch (error) {
            console.error("Logout error:", error);
            // Handle errors here (e.g., show a notification)
        }
    };

    return (
        <Button buttonStyle="btn--outline" buttonSize="btn--small" onClick={handleLogout}>Logout</Button> // Use button instead of anchor
    );
};
