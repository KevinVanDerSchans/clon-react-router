import { navigate } from '../../components/Link/Link'

export default function HomePage() {
  return (
    <>
      <h1>Practice - React Router</h1>

      <p>HomePage page example</p>
      <button onClick={() => navigate('/about')}>Go to About Us</button>
    </>
  )
}
