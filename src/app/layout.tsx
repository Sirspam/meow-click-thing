import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from "@/app/components/ThemeProvider";
import SiteHeader from "@/app/components/SiteHeader";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'meow click thing',
  description: 'I HAVE NO IDEA WHAT I AM DOING',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider>
            <body className={inter.className}>
                <SiteHeader/>
                {children}
            </body>
        </ThemeProvider>
    )
}
