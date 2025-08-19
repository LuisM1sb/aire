import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        {/* Separador visual */}
        <div className="h-0.5 bg-gradient-to-r from-blue-600 to-green-600"></div>
        <Contact />
        <Footer />
      </div>
  )
}

export default App
