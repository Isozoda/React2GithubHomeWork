import { createContext, useContext, useEffect, useState, ReactNode } from "react";

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            setDark(true);
            document.body.classList.add("dark");
        }
    }, []);

    function toggleTheme() {
        const newTheme = !dark;
        setDark(newTheme);

        if (newTheme) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);