import { useEffect, useRef } from 'react'
import { vaatzHtml } from './vaatz-html'
import { initVaatz } from './scripts/vaatz-init'

export default function App() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    // 다크모드 기본값 설정 (JS 초기화 전에 먼저 적용)
    const saved = localStorage.getItem('vaatz-theme') || 'dark'
    document.documentElement.setAttribute('data-theme', saved)

    // body 스타일 원본과 동일하게 설정
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.body.style.height = '100vh'
    document.body.style.overflow = 'hidden'

    initVaatz()
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: vaatzHtml }} />
}
