import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

// Pages
import Home from './pages/Home'
import Events from './pages/Events'
import Sponsors from './pages/Sponsors'
import Team from './pages/Team'
import FAQ from './pages/FAQ'
import About from './pages/About'

function App() {
  const [world, setWorld] = useState<'heikai' | 'wakai' | 'hankai' | 'peace' | 'golden'>('heikai')

  useEffect(() => {
    const interval = setInterval(() => {
      setWorld(prev => {
        const worlds = ['heikai', 'wakai', 'hankai', 'peace', 'golden'] as const
        const currentIndex = worlds.indexOf(prev)
        return worlds[(currentIndex + 1) % worlds.length]
      })
    }, 10000)

    const createSlash = (e: MouseEvent) => {
      const slash = document.createElement('div')
      slash.className = 'katana-slash'
      slash.style.left = `${e.clientX}px`
      slash.style.top = `${e.clientY}px`
      slash.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`
      document.body.appendChild(slash)

      setTimeout(() => slash.remove(), 600)
    }

    window.addEventListener('mousedown', createSlash)

    return () => {
      clearInterval(interval)
      window.removeEventListener('mousedown', createSlash)
    }
  }, [])

  return (
    <Router>
      <div className={`App world-${world}`}>
        <LoadingScreen />

        {/* World Overlays */}
        <div className="world-overlay heikai-overlay" />
        <div className="world-overlay wakai-overlay" />
        <div className="world-overlay hankai-overlay" />
        <div className="world-overlay peace-overlay" />
        <div className="world-overlay golden-overlay" />

        {/* Global Japan Texture Overlay */}
        <div className="matsuri-overlay" />

        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App