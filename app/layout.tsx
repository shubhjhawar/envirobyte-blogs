import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import SessionProvider from '@/components/sessionProvider'
import { getServerSession } from "next-auth"
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Envirobyte Blogs',
  description: 'this is a blog website',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession();
  
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <SessionProvider>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
