import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from "@/app/components/ThemeProvider";
import SiteHeader from "@/app/components/ui/SiteHeader";
import SiteFooter from './components/ui/SiteFooter';

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
        <html lang="en" className="h-full">
            <body className={`${inter.className} h-full`}>
                <ThemeProvider>
                    <SiteHeader/>
                    {children}
                    <SiteFooter/>
                </ThemeProvider>
            </body>
        </html>
    )
}
