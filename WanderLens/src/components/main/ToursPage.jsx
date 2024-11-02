// wanderlens/src/components/toursPage.jsx
import React, { useContext } from 'react';
import { Context } from '../../context/context';

const ToursPage = () => {  // Now using the correct component name
    const { resultData, loading } = useContext(Context);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="tours-page">
            <h2>Search Results</h2>
            {resultData ? (
                <p>{resultData}</p>
            ) : (
                <p>No results found. Please try again.</p>
            )}
        </div>
    );
};

export default ToursPage;
