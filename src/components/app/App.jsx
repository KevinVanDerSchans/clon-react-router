import { lazy, Suspense } from 'react'
import SearchPage from '../../pages/Search/SearchPage'
import { Router } from '../../router/Router'
import { Route } from '../Route/Route'
import Page404 from '../../pages/404'
import './App.css'

const HomePage = lazy(() => import('../../pages/Home/HomePage'))
const AboutPage = lazy(() => import('../../pages/About/AboutPage'))

const appRoutes = [
  {
    path: '/:lang/about',
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
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
