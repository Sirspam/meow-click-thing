"use client"

import {useTheme} from "@/app/_components/ThemeProvider";
import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react";

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
        <Button variant="ghost" size="icon" onClick={ToggleTheme}>
            {theme === "dark" ?
                <Moon/> :
                <Sun/>
            }
        </Button>
    )
}