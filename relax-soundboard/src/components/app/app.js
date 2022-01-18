import React from "react";
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import Header from "../header/header";
import { Home, HowItWorks, NoPage } from "../pages"
import { useTheme } from "../../contexts/theme";

import "./app.css"

const App = () => {
    const {bodytheme} = useTheme();
    return(
        <Router>
            <div className="app" style={{ backgroundColor: bodytheme.backgroundColor, color: bodytheme.color }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
