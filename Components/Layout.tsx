import React from 'react'
import  Head from 'next/head'
import Nav from './NavBar/Nav'
import Footer from './Footer/Footer'
import { SessionProvider } from 'next-auth/react'
function Layout({children}) {
  return (
        <>
        <SessionProvider>
                <header>
                    <Nav/>
                </header>
                    <main>
                       {children}
                    </main>
                <footer>
                    <Footer/>
                </footer>
                
        </SessionProvider>
          
        </>
  )
}

export default Layout