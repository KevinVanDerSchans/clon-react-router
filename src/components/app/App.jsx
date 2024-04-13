import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

const NAVIGATION_EVENT = 'pushstate'

function navigate(href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function HomePage() {
  return (
    <>
      <h1>Practice - React Router</h1>

      <p>HomePage page example</p>
      <button onClick={() => navigate('/about')}>Go to About Us</button>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>

      <p>About page example</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
