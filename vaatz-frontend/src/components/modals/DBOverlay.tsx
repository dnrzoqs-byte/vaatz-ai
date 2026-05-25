// ─── DBOverlay ────────────────────────────────────────────────────────────────
// 구매 DB 뷰어 오버레이 — React Context 기반 열림/닫힘.
// Phase 5: AppContext.dbOpen → #dbOv .sh 동기화.
//
// - DBOverlayInner: frozen memo — vaatz-init.js DOM 조작 허용
// - DBOverlay (wrapper): useEffect로 .sh 클래스 제어
//   ※ 탭 전환·검색 초기화는 vaatz-init.js openDB() 가 직접 처리
// ─────────────────────────────────────────────────────────────────────────────
import { memo, useEffect } from 'react'
import { dbOverlayHtml } from '../../data/db-overlay-html'
import { useApp } from '../../context/AppContext'

// 항상 DOM에 존재하는 frozen 내부 컴포넌트
const DBOverlayInner = memo(function DBOverlayInner() {
  return <div dangerouslySetInnerHTML={{ __html: dbOverlayHtml }} />
}, () => true)

// wrapper: React 상태 → DOM 클래스 동기화
export default function DBOverlay() {
  const { dbOpen } = useApp()

  useEffect(() => {
    const el = document.getElementById('dbOv')
    if (el) el.classList.toggle('sh', dbOpen)
  }, [dbOpen])

  return <DBOverlayInner />
}
