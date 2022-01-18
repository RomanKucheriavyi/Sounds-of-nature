import React from "react";
import { Link } from "react-router-dom";
import DarkThemeSwitcher from "../dark-theme-switcher/dark-theme-switcher";
import { useTheme } from "../../contexts/theme";

import "./header.css"

const Header = () => {
    const {headertheme, isDark} = useTheme();
    const navClassName = 'navbar navbar-expand-lg ' + (isDark ? 'navbar-dark' : 'navbar-light');
    return (
        <nav className={navClassName} style = {{backgroundColor: headertheme.backgroundColor, color: headertheme.color}}>
            <div className="container-fluid">
                <h1 className="headline">
                    <Link to="/">Ambient sounds</Link>
                </h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <input className="form-range me-auto mb-2 mb-lg-0" min="0" max="1" step="0.01" type="range"/>
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                            <Link to="/log-in">Log In</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/how-it-works">How it works</Link>
                        </li>
                    </ul>
                    <DarkThemeSwitcher/>
                </div>
            </div>
        </nav>
    );
}; 

export default Header;

