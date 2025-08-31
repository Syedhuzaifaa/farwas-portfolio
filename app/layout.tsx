import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Farwa - Creative Designer & Full-Stack Developer",
  description:
    "Portfolio of Farwa - Creative Designer and Full-Stack Web Developer specializing in UI/UX Design, Logo Design, and Modern Web Applications",
  keywords: ["designer", "developer", "portfolio", "UI/UX", "web development", "logo design"],
  authors: [{ name: "Farwa " }],
  openGraph: {
    title: "Farwa - Creative Designer & Full-Stack Developer",
    description: "Portfolio showcasing creative design and web development work",
    type: "website",
  },
  generator: "v0.dev",
  icons: {
    icon: "📊", // Path from public folder
    shortcut: "📊",
    apple: "/apple-touch-icon.png", // optional for iOS
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
