import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'

import './App.css';

const App = () => {
  return (

    <BrowserRouter>
    <Navbar/>
    
    
    <Routes>
      
      <Route path='/' element={<Navigate to="/login"/>}/>
    
    <Route path="/login" element={<Login/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="//navbar" element={<Navbar/>}/>
      
      
     
      <Route path='/Book/:id'element={<singlebook/>} />
      


         </Routes>
    
    </BrowserRouter>
  

    
  )
}

export default App