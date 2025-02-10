import './globals.css'
import { Inter } from 'next/font/google'
import { MainNav } from '../components/main-nav'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Lifestyle & Fashion',
  description: 'A curated space for fashion, beauty, and lifestyle',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <MainNav />
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}