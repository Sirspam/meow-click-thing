"use client"

import NyaSoundImage from "@/app/_components/ui/NyaSoundImage"
import { useTheme } from "@/app/_components/ThemeProvider"
import { useEffect } from "react"

export default function Home() {
  // This is needed for Github Actions so that it can get the correct full path for resources
  // A .env.local is needed for local development, which overrides the .env in the repo
  // There surely must be a better way to do go about this, but I'm not sure how to do it
  function ReturnLocalOrProdPath(path: string) {
    console.log(
      `${process.env.NEXT_PUBLIC_REPO_PATH || ""}/chocola_mini_sitting.webph`,
    )
    console.log(process.env.NEXT_PUBLIC_REPO_PATH || "" + "/" + path)
    return process.env.NEXT_PUBLIC_REPO_PATH || "" + "/" + path
  }

  const { theme, setTheme } = useTheme()

  // Preload both images so they both load immediately when the theme is toggled
  useEffect(() => {
    new Image().src = ReturnLocalOrProdPath("chocola_mini_sitting.webp")
    new Image().src = ReturnLocalOrProdPath("vanilla_mini_sitting.webp")
  }, [])

  return (
    <main className="flex overflow-hidden h-full items-center justify-center p-10 lg:p-0 bg-cyan-50 dark:bg-night-rider-950">
      {theme === "dark" ? (
        <NyaSoundImage
          imgPath={ReturnLocalOrProdPath("chocola_mini_sitting.webp")}
          imgAlt="Chocola"
          mp3Path={ReturnLocalOrProdPath("chocola_meow.mp3")}
        />
      ) : (
        <NyaSoundImage
          imgPath={ReturnLocalOrProdPath("vanilla_mini_sitting.webp")}
          imgAlt="Vanilla"
          mp3Path={ReturnLocalOrProdPath("vanilla_meow.mp3")}
        />
      )}
    </main>
  )
}
