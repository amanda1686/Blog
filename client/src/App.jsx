import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Proyects from './pages/Proyects'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'


export default function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About />}/>
  <Route path='/dashboard' element={<Dashboard />} />
  <Route path='/proyects' element={<Proyects />}/>
  <Route path='/signin' element={<SignIn/>} />
  <Route path='/signup' element={<SignUp/>}/>
</Routes>
</BrowserRouter>
  )
}