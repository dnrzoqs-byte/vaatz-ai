import { useEffect, useRef } from 'react'
import { vaatzHtml } from './vaatz-html'

export default function App() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    // 테마 초기화 (깜빡임 방지)
    const saved = localStorage.getItem('vaatz-theme') || 'dark'
    document.documentElement.setAttribute('data-theme', saved)

    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.body.style.height = '100vh'
    document.body.style.overflow = 'hidden'

    // JS를 전역 스코프로 로드 (inline onclick 핸들러가 함수에 접근 가능)
    const script = document.createElement('script')
    script.src = '/vaatz-init.js'
    script.async = false
    document.body.appendChild(script)
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: vaatzHtml }} />
}
