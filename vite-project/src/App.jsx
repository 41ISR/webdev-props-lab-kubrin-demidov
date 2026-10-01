import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Courses } from './components/Courses'
import { Reviews } from './components/Reviews'
import { Hero } from './components/Hero'
function App() {

  return (
    <>
      <Header />
      <Hero />
     <section />
      <Courses/>
      <Reviews/>
    </>
  )
}

export default App