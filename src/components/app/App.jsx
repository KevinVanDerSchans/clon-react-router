import HomePage from '../../pages/Home/HomePage'
import AboutPage from '../../pages/About/AboutPage'
import SearchPage from '../../pages/Search/SearchPage'
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
  {
    path: '/search/:query',
    Component: SearchPage,
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
