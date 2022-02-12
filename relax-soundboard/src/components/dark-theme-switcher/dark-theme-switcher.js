import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useTheme } from "../../hooks/useTheme";

const DarkThemeSwitcher = () => {
    const {isDark, toggleTheme} = useTheme();
    return (
        <DarkModeToggle
            onChange={toggleTheme}
            checked={isDark}
            size={60}/>
    );
};

export default DarkThemeSwitcher;