import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeProvider from "@/app/components/ThemeProvider"
import SiteHeader from "@/app/components/ui/SiteHeader"
import SiteFooter from "./components/ui/SiteFooter"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "meow click thing",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_REPO_PATH ||
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  ),
  openGraph: {
    images: ["/chocovani_cpuhappy.webp"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <ThemeProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
