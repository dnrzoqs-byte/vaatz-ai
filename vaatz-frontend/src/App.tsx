import { useEffect, useRef } from 'react'
import { vaatzHtml } from './vaatz-html'
import { initVaatz } from './scripts/vaatz-init'

export default function App() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true
    initVaatz()
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: vaatzHtml }} />
}
