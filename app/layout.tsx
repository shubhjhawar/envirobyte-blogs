import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import SessionProvider from '@/components/sessionProvider'
import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Envirobyte',
  description: 'Envirobyte harnesses the power of cutting-edge Machine Learning and Artificial Intelligence technologies to drive environmental awareness and sustainability initiatives. Our blog serves as a platform for sharing AI-driven insights, innovative solutions, and data-driven approaches towards a greener future. Explore our content to stay informed, inspired, and empowered to make a positive impact on the planet.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession();
  
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}  suppressHydrationWarning={true}>
        <SessionProvider>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            <Toaster />
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
