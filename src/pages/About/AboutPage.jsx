import { navigate } from '../../components/Link/Link'

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>

      <p>About page example</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </>
  )
}
