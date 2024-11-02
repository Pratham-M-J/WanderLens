import React, { useContext, useState } from 'react';
import './main.css';
import Greet from './Greet';
import Card from './Card';
import Search from './search';
import { Context } from '../../context/context';
import { UserContext } from '../../App'; // Import user context
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';

import Cards from './Cards';
import Footer from './Footer';

const Main = () => {
    const user = useContext(UserContext); // Get user data from UserContext
    const { onSent, setInput } = useContext(Context);
    const navigate = useNavigate();
    const [isPaused, setIsPaused] = useState(false);
    

    const handleSearchSubmit = (prompt) => {
        onSent(`You are a tour guide and give a brief and interesting info of ${prompt}. If there isn't any place/tourist attraction in the input, output "The input should be a place name."`)
            .then(() => {
                navigate('/results');
            });
    };

    const handleCardClick = (place) => {
        onSent(`You are a tour guide and give a brief and interesting info of ${place}.`)
            .then(() => {
                setInput(place);
                navigate('/results');
            });
    };

    return (
        
        <div className="main">
            <Navbar />
            
            <div className="main-container">
                <div className="greet">
                    <span id="greet-name">
                        <b>{user ? `Hello ${user.name}` : "Hello There...."}</b>
                    </span>
                    <br />
                    <Greet />
                </div>
                <Search onSubmit={handleSearchSubmit} />
                <div
                    className={`cards ${isPaused ? 'paused' : ''}`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <Card
                        title="Paris"
                        description="City of Light, captivates with its timeless elegance and iconic landmarks."
                        imgSrc="./images/eiffel.png"
                        onClick={() => handleCardClick('Paris')}
                    />
                    <Card
                        title="Rome"
                        description="A city where ancient history and breathtaking architecture meet."
                        imgSrc="./images/rome.png"
                        onClick={() => handleCardClick('Rome')}
                    />
                    <Card
                        title="Cambodia"
                        description="A land of ancient temples, rich heritage, and captivating landscapes."
                        imgSrc="./images/angkor.png"
                        onClick={() => handleCardClick('Cambodia')}
                    />
                    <Card
                        title="Delhi"
                        description="A dynamic blend of rich history, diverse culture, and modern vibrance."
                        imgSrc="./images/fort.webp"
                        onClick={() => handleCardClick('Delhi')}
                    />
                </div>
                
            </div>
            
            <Cards/>
            <Footer/>
        </div>
        
        
    );
};

export default Main;
