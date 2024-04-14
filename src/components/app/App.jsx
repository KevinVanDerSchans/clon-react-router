import HomePage from '../../pages/Home/HomePage'
import AboutPage from '../../pages/About/AboutPage'
import { Router } from '../../router/Router'
import Page404 from '../../pages/404'
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
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  )
}

export default App
