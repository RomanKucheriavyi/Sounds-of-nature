import { createContext, useState, useEffect, useContext } from "react";


const themes = {
    bodydark: {
        backgroundColor: "#18191a",
        color: "white",
    },
    light: {
        backgroundColor: "white",
        color: "black",
    },
    headerdark: {
        backgroundColor: "#242526",
        color: "white",
    }
};

export const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext)
};

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        localStorage.setItem("isDark", JSON.stringify(!isDark));
        setIsDark(!isDark);
    };
    
    const bodytheme = isDark ? themes.bodydark : themes.light;
    const headertheme = isDark ? themes.headerdark : themes.light;

    useEffect(() => {
        const isDark = localStorage.getItem("isDark") === "true";
        setIsDark(isDark);
    }, []);
    
    return (
        <ThemeContext.Provider value={{bodytheme, headertheme, isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};