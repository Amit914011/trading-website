import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Login from './components/Login.jsx'
import Hero from './components/Hero.jsx'
import Blog from './components/Blog.jsx'
import Contactus from './components/Contactus.jsx'
import SipCalculator from './components/Sipcalculator.jsx'
import LumpsumCalculator from './components/LumpsumCalculator.jsx'
import SwpCalculator from './components/SwpCalculator.jsx'
import Mutualfund from './components/Mutualfund.jsx'
import Healthins from './components/Healthins.jsx'
import Empoweringins from './components/Empoweringins.jsx'
import Aboutus from './components/Aboutus.jsx'
import ContactUs from './components/Contactus.jsx'

let router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Hero/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/sipcalculator' element={<SipCalculator/>}/>
      <Route path='/Lumpsumcalculator' element={<LumpsumCalculator/>}/>
      <Route path='/swpcalculator' element={<SwpCalculator/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/mutualfund' element={<Mutualfund/>}/>
      <Route path='/healthins' element={<Healthins/>}/>
      <Route path='/healthins' element={<Healthins/>}/>
      <Route path='/empowringins' element={<Empoweringins/>}/>
      <Route path='/pdf' element={<pdf/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>

      </Route>
  ))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
