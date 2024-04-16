import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Router } from './Router'

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
    expect(screen.getByText('Home')).toBeTruthy()
  })
})
