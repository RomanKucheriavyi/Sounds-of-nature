import React from "react";
import { Link } from "react-router-dom";
import DarkThemeSwitcher from "../dark-theme-switcher/dark-theme-switcher";
import { useTheme } from "../../hooks/useTheme";

import "./navbar.css"

const Navbar = () => {
    const {headertheme, isDark} = useTheme();
    const navClassName = 'navbar navbar-expand-lg ' + (isDark ? 'navbar-dark' : 'navbar-light');
    return (
        <nav className={navClassName} style = {{backgroundColor: headertheme.backgroundColor, color: headertheme.color}}>
            <div className="container-fluid">
                <div className="header">
                    <h1 className="header-brand">
                        <Link to="/">Ambient sounds</Link>
                        <DarkThemeSwitcher/>
                    </h1>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
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
                </div>
            </div>
        </nav>
    );
}; 

export default Navbar;

