import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
function CardItem({ src, text, label, description }) {
    return (
        <li className="cards2__item">
            <div className="cards2__item__link">
                <div className="front">
                    <FontAwesomeIcon icon={faRepeat} />
                    <figure className="cards2__items__pic__wrap" data-label={label}>
                        <img src={src} alt={text} className="cards2__item__img" />
                    </figure>
                    <div className="cards2__item__info">
                        <h5 className="cards2__item__text">{text}</h5>
                    </div>
                </div>
                <div className="back">
                <FontAwesomeIcon icon={faRepeat} />
                    <p>{description}</p>
                </div>
            </div>
        </li>
    );
}

export default CardItem;
