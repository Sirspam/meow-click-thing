"use client"

import NyaSoundImage from "@/app/components/ui/NyaSoundImage"
import { useTheme } from "@/app/components/ThemeProvider"
import { useEffect } from "react"

interface NyaSoundImageValues {
  imgPath: string
  imgAlt: string
  mp3Path: string
}

export default function Home() {
  const { theme, setTheme } = useTheme()

  // Preload both images so they both load immediately when the theme is toggled
  useEffect(() => {
    new Image().src = `${
      process.env.NEXT_PUBLIC_REPO_PATH || ""
    }/chocola_mini_sitting.webp`
    new Image().src = `${
      process.env.NEXT_PUBLIC_REPO_PATH || ""
    }/vanilla_mini_sitting.webp`
  }, [])

  return (
    <main className="flex overflow-hidden h-full items-center justify-center p-10 lg:p-0 bg-cyan-50 dark:bg-night-rider-950">
      {theme === "dark" ? (
        <NyaSoundImage
          imgPath={`${
            process.env.NEXT_PUBLIC_REPO_PATH || ""
          }/chocola_mini_sitting.webp`}
          imgAlt="Chocola"
          mp3Path={`${
            process.env.NEXT_PUBLIC_REPO_PATH || ""
          }/chocola_meow.mp3`}
        />
      ) : (
        <NyaSoundImage
          imgPath={`${
            process.env.NEXT_PUBLIC_REPO_PATH || ""
          }/vanilla_mini_sitting.webp`}
          imgAlt="Vanilla"
          mp3Path={`${
            process.env.NEXT_PUBLIC_REPO_PATH || ""
          }/vanilla_meow.mp3`}
        />
      )}
    </main>
  )
}
