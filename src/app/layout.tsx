import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bouquets by Liz — NYC Flowers & Floral Arrangements',
  description: 'Bold, handcrafted bouquets, event decor, and floral arrangements delivered across all 5 boroughs of NYC.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
