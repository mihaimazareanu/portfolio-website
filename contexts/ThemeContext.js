import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <ThemeContext.Provider value={{isDarkTheme, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}