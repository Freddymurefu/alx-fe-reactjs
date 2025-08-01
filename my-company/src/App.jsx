import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path= "/" element={<Home />} />
      <Route path= "/About" element={<About />} />
      <Route path= "/Services" element={<Services />} />
      <Route path= "/Contact" element={<Contact />} />
      
     </Routes>
    </ BrowserRouter>
  )
}

export default App
