import React from "react";
import { Button } from './Button'; // Your custom Button component
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection() {
    return (
        <div className="hero-container">
            <video className="hero-video" src="./images/video1.mp4" autoPlay loop muted />
            <div className="hero-content">
                <h1>-WanderLens-</h1>
                <p>Explore the WORLD virtually..</p>
                <div className="hero-btns">
                    <Button 
                        className="btns" 
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        to="/signup" // Specify the route for "Get Started"
                    >
                        Get Started
                    </Button>
                    <Button 
                        className="btns" 
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        to="#" // Specify the route for "Watch Trailer"
                    >
                        Watch Trailer
                        <FontAwesomeIcon icon={faPlayCircle} style={{ marginLeft: '8px' }} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
