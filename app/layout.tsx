import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import LexChatbot from "@/components/lex-chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luna Milk - Richer Taste for Beautiful Moments",
  description: "Luna Milk provides nutritious dairy products for families across the region.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <LexChatbot />
      </body>
    </html>
  )
}
