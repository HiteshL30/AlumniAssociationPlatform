import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './layout/Layout'
import HomePages from './pages/HomePages'





const AppRouter = () => {
    
   
  
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout><HomePages/></Layout>}/>
        </Routes>
    </div>
  )
}

export default AppRouter