import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />  
      <Route path="/about" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
