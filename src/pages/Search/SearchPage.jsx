import { useEffect } from 'react'

export default function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `This is ${routeParams.query}`
  }, [])

  return <h1>This is {routeParams.query}</h1>
}
