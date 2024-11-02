// wanderlens/src/components/search.jsx
import React, { useContext } from 'react';
import './search.css';
import { Context } from '../../context/context';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Search = ({ onSubmit }) => {
    const { input, setInput } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(input);
    };

    return (
        <div class="cta-container">
              <Button 
                        className="btns" 
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        to="/results" 
                    >
                        Explore Tours
                        <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
                    </Button>
        </div>

    );
};

export default Search;
