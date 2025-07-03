import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Contact />
      </div>
  )
}

export default App
