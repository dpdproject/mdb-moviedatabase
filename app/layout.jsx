import './globals.css'
import { Karla } from '@next/font/google'
import Navbar from './UI Components/3.organisms/Navbar'

const karla = Karla({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${karla.className}`}>
        <Navbar />
        <div className='mx-3 md:mx-20'>
          {children}
        </div>
      </body>
    </html>
  )
}
