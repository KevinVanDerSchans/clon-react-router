import { Link } from '../../components/Link/Link'

export default function HomePage() {
  return (
    <>
      <h1>Clon - React Router</h1>

      <p>HomePage page example</p>
      <Link to='/about'>Go to About Us</Link>
    </>
  )
}
