import "@/app/globals.css"
import { Navbar } from "../components/navbar/navbar"
import { ThemeProvider } from "../components/theme-provider"
import type React from "react" // Added import for React

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

