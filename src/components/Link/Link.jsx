/* eslint-disable react-refresh/only-export-components */
import { EVENTS } from '../../constants'

export function navigate(href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link() {
  return <></>
}
