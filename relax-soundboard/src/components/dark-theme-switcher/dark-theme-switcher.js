import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useTheme } from "../../contexts/theme";

const DarkThemeSwitcher = () => {
    const {isDark, toggleTheme} = useTheme();
    return (
        <DarkModeToggle
            onChange={toggleTheme}
            checked={isDark}
            size={80}/>
    );
};

export default DarkThemeSwitcher;