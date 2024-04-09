import "./globals.scss"
import React from "react";
import Fathom from "@/components/fathom";

export const metadata = {
  title: 'Are you serious, X Corp?',
}

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
    <Fathom/>
    <body>{children}</body>
    </html>
  )
}