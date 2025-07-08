import React,  { createContext, useEffect, useState, useContext } from 'react';

export const ThemeContext = createContext('dark');
 
export const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(() => {
        const theme = localStorage.getItem('theme');
        if (theme === null) return true; // default to dark
        return theme === 'dark';
    });

  

    useEffect(()=>{
        // Add transition class for smooth color change
        document.documentElement.classList.add('transition-colors', 'duration-500');
        if(darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useDarkMode = () => useContext(ThemeContext);