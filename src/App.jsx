import React from 'react'
import { BrowserRouter,Route ,Routes } from 'react-router-dom'
import Home from './pages/home';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Skills from './pages/skills'
import Profile from './pages/profile'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/'
       element={
        <>
          <Header/>
          <Home/>
          <Profile/>
          <Skills/>
          <Footer/>
        </>
       }/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App