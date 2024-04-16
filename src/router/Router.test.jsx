import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Router } from './Router'
import { getCurrentPath } from '../utils/utils'
import { Route } from '../components/Route/Route'
import { Link } from '../components/Link/Link'

vi.mock('../utils/utils.js', () => ({
  getCurrentPath: vi.fn(),
}))

describe('Given the Router component', () => {
  beforeEach(() => {
    cleanup()
  })

  it('Then it should be rendered without any problem', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('Then the 404 message will be displayed if no path matches', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy
  })

  it('Then it should render the component from the first matching path', () => {
    getCurrentPath.mockReturnValue('/about')

    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>,
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>,
      },
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('Then it should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route
          path='/'
          Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>Go to About</Link>
              </>
            )
          }}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )

    const anchor = screen.getByText(/Go to About/)
    fireEvent.click(anchor)

    const aboutTitle = await screen.findByText('About')

    expect(aboutTitle).toBeTruthy()
  })
})
