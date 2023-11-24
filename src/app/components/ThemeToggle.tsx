"use client"

import {useTheme} from "@/app/components/ThemeProvider";

export default function ThemeToggle() {
    const {theme, setTheme} = useTheme()
    function ToggleTheme() {
        if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    return (
        <button onClick={ToggleTheme}>
            {theme}
        </button>
    )
}