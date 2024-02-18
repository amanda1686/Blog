import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Proyects from './pages/Proyects'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'
import ScrollToTop from './components/ScrollToTop'


export default function App() {
  return (
<BrowserRouter>
<ScrollToTop/>
<Header />
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About />}/>
  <Route element={<PrivateRoute/>}>
   <Route path='/dashboard' element={<Dashboard />} /> 
  </Route>
  <Route element={<OnlyAdminPrivateRoute/>}>
   <Route path='/createpost' element={<CreatePost />} /> 
   <Route path='/updatepost/:postId' element={<UpdatePost />} /> 
  </Route>
  <Route path='/proyects' element={<Proyects />}/>
  <Route path='/signin' element={<SignIn/>} />
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/post/:postSlug' element={<PostPage/>}/>
</Routes>
<Footer/>
</BrowserRouter>
  )
}