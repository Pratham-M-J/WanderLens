// wanderlens/src/components/ResultsPage.jsx
import React, { useContext } from 'react';
import { Context } from '../../context/context';
import Footer from './Footer';
import TrandingSlider from './TradingSlider';
import { Navbar } from './Navbar';

const ResultsPage = () => {
    const { resultData, loading } = useContext(Context);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="results-page">
            
            {/* <h2>Search Results</h2>
            {resultData ? (
                <p>{resultData}</p>
            ) : (
                <p>No results found. Please try again.</p>
            )} */}
            <Navbar/>
            
            <TrandingSlider/>
            <Footer/>
        </div>
    );
};

export default ResultsPage;
