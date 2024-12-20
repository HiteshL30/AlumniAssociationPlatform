import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


function Layout({children}) {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header/>
        <div className='container md:max-w-[85%] max-w-[95%] flex-1 py-10'>{children}</div>
        <Footer/>
    </div>
  )
}

export default Layout