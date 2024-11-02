import React from "react";
import CardItem from './CardItem';
import './Cards.css';

export default function Cards() {
    return (
        <div className="cards2">
            <h1>Key Features</h1>
            <div className="cards2__container">
                <div className="cards2__wrapper">
                    <ul className="cards2__items">
                        <CardItem
                            src="/images/vr.jpg"
                            text="Immersive Experience"
                            label="VR"
                            description="Experience a 360-degree view of iconic landmarks and natural wonders."
                        />
                        <CardItem
                            src="/images/gemini.jpg"
                            text="AI-Powered Guide"
                            label="AI"
                            description="An AI guide provides real-time insights and information about each location."
                        />
                        <CardItem
                            src="/images/culture.jpg"
                            text="Explore the Hidden Gems"
                            label="Discovery"
                            description="Explore lesser-known locations and hidden gems that are off the beaten path."
                        />
                        <CardItem
                            src="/images/events.jpg"
                            text="Seasonal Tours"
                            label="Events"
                            description="Join virtual tours during local festivals and events for a unique cultural experience."
                        />
                        {/* Add more <CardItem /> instances if needed */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
