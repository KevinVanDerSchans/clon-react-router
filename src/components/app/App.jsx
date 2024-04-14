import HomePage from '../../pages/Home/HomePage'
import AboutPage from '../../pages/About/AboutPage'
import { Router } from '../../router/Router'
import './App.css'

const appRoutes = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
]

function App() {
  return (
    <main>
      <Router routes={appRoutes} />
    </main>
  )
}

export default App
