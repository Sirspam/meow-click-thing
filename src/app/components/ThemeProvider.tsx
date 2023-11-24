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

// I should just use next-themes next time
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
    const [mounted, setMounted] = useState(false)
    const [theme, setTheme] = useState(getInitialTheme())

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={theme}>
                {props.children}
            </div>
        </ThemeContext.Provider>
    )
}