// wanderlens/src/components/Card.jsx
import React from 'react';
import './Card.css'; // You can create a separate CSS file for card styles if needed

const Card = ({ title, description, imgSrc, onClick }) => {
    return (
        <div className="card" style={{ cursor: 'pointer' }}>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imgSrc} alt={title} id='eiffel' />
        </div>
    );
};

export default Card;


