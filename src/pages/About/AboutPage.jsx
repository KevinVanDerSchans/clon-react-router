import { Link } from '../../components/Link/Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: 'Esto es un clon de React Router',
    button: 'Ir a inicio',
  },
  en: {
    title: 'About us',
    description: 'This is a clone of React Router',
    button: 'Go to Home',
  },
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')

  return (
    <>
      <h1>{i18n.title}</h1>

      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
