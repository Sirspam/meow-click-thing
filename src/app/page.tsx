"use client"

import NyaSoundImage from "@/app/components/NyaSoundImage";
import {useTheme} from "@/app/components/ThemeProvider";
import {useEffect} from "react";

interface NyaSoundImageValues {
    imgPath: string;
    imgAlt: string;
    mp3Path: string;
}

export default function Home() {
    const {theme, setTheme} = useTheme()

    // Preload both images so they both load immediately when the theme is toggled
    useEffect(() => {
        new Image().src = "/chocola_mini_sitting.png";
        new Image().src = "/vanilla_mini_sitting.png";
    }, [])

    return (
    <main className="flex items-center justify-center h-screen bg-cyan-100 dark:bg-brown">
        {theme === "dark" ?
            <NyaSoundImage imgPath='/chocola_mini_sitting.png' imgAlt='Chocola' mp3Path='/chocola_meow.mp3'/> :
            <NyaSoundImage imgPath='/vanilla_mini_sitting.png' imgAlt='Vanilla' mp3Path='/vanilla_meow.mp3'/>
        }
    </main>
  )
}
