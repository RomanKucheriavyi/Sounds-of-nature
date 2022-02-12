import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../navbar/navbar";
import { Home, HowItWorks, NoPage } from "../pages"
import { useTheme } from "../../hooks/useTheme";

import "./app.css"

const App = () => {
    const {bodytheme} = useTheme();
    return(
        <Router>
            <div className="app" style={{ backgroundColor: bodytheme.backgroundColor, color: bodytheme.color }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;


