import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'








function App() {


  return (
   <>
   <div className='fixed z-50 w-full'>
   <Navbar/>
   
   
   </div>
   
   <Outlet/>
   <Footer/>
   

    </>
  )
}

export default App
