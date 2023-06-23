import { Metadata } from 'next'
import './globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='container'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
