import React from 'react'
import Header from './components/Header.jsx'
import './App.css'
import Hero from './components/Hero';
import About from './components/About.jsx';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  return (
   <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
   <Header />
   <Hero />
   <About />
   <Projects />
   <Skills />
   <Contact />
   <Footer />
   </div>
  )
}

export default App

