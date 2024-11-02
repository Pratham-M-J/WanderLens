import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "./Logout";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faVrCardboard } from "@fortawesome/free-solid-svg-icons"; // Import the VR icon

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <FontAwesomeIcon icon={faVrCardboard} size="36px"/> {/* Use the imported icon */}
                <Link className="text navbar-brand" to="/">WanderLens</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Logout />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
