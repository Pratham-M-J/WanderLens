import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import HeroSection from './components/main/HeroSection'; // Ensure the correct path
import Main from './components/main/main';
import ResultsPage from './components/main/ResultsPage';
import { Login } from './components/main/Login';
import { Logout } from './components/main/Logout';
import { Signup } from './components/main/Signup';
import ToursPage from './components/main/toursPage';

 // Ensure the correct path
import "./App.css";

export const IsLoggedInContext = createContext();
export const SetIsLoggedInContext = createContext();
export const UserContext = createContext();

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("http://localhost:3001/user", { withCredentials: true });
                setIsLoggedIn(!!response.data.user);
                setUser(response.data.user || null);
            } catch (error) {
                console.error("Authentication check failed:", error);
                setIsLoggedIn(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <IsLoggedInContext.Provider value={isLoggedIn}>
            <SetIsLoggedInContext.Provider value={setIsLoggedIn}>
                <UserContext.Provider value={user}>
                    <Router>
                     
                        <Routes>
                            <Route path="/" element={<HeroSection />} />
                            <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
                            <Route path="/signup" element={isLoggedIn ? <Navigate to="/home" /> : <Signup />} />
                            <Route path="/logout" element={isLoggedIn ? <Logout /> : <Navigate to="/login" />} />
                            <Route path="/home" element={isLoggedIn ? <Main /> : <Navigate to="/login" />} />
                            <Route path="/results" element={isLoggedIn ? <ResultsPage /> : <Navigate to="/login" />} />
                            <Route path="/toursPage" element={isLoggedIn ? <ToursPage /> : <Navigate to="/login" />} />
                        </Routes>
                    </Router>
                </UserContext.Provider>
            </SetIsLoggedInContext.Provider>
        </IsLoggedInContext.Provider>
    );
}

export default App;
