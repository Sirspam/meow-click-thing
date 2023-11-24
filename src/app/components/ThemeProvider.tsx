"use client"

import {createContext, useContext, useEffect, useState} from "react";

interface Props {
    children: React.ReactNode
}

interface Theme
{
    theme: string;
    setTheme: (theme: string) => void;
}

const ThemeContext = createContext<Theme | null>(null)

function getInitialTheme() : string {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("color-theme")
        if (storedPrefs !== null) {
            return storedPrefs as string
        }

        const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
        return userMedia.matches ? "dark" : "light"
    }

    return "dark"
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error(`useTheme must be used within a ThemeProvider`)
    }
    return context
}

export default function ThemeProvider(props: Props){
    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        setTheme(getInitialTheme())
    }, [])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <html lang="en" className={theme}>
                {props.children}
            </html>
        </ThemeContext.Provider>
    )
}