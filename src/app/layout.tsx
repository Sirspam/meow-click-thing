import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from "@/app/components/ThemeProvider";
import SiteHeader from "@/app/components/SiteHeader";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'meow click thing',
  description: 'click the cat',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider>
                    <SiteHeader/>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
