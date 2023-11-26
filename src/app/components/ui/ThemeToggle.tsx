"use client"

import {useTheme} from "@/app/components/ThemeProvider";
import {Button} from "@/app/components/ui/button";
import NyaSoundImage from "@/app/components/ui/NyaSoundImage";
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