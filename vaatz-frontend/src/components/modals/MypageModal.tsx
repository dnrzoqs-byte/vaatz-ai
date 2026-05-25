// ─── MypageModal ──────────────────────────────────────────────────────────────
// 마이페이지 오버레이 — React Context 기반 열림/닫힘.
// Phase 5: AppContext.mypageOpen → #mpOv .sh 동기화.
//
// - MypageModalInner: frozen memo — vaatz-init.js DOM 조작 허용
// - MypageModal (wrapper): useEffect로 .sh 클래스 + body overflow 제어
// ─────────────────────────────────────────────────────────────────────────────
import { memo, useEffect } from 'react'
import { mypageModalHtml } from '../../data/mypage-modal-html'
import { useApp } from '../../context/AppContext'

// 항상 DOM에 존재하는 frozen 내부 컴포넌트
const MypageModalInner = memo(function MypageModalInner() {
  return <div dangerouslySetInnerHTML={{ __html: mypageModalHtml }} />
}, () => true)

// wrapper: React 상태 → DOM 클래스 동기화
export default function MypageModal() {
  const { mypageOpen } = useApp()

  useEffect(() => {
    const el = document.getElementById('mpOv')
    if (el) el.classList.toggle('sh', mypageOpen)
    document.body.style.overflow = mypageOpen ? 'hidden' : ''
  }, [mypageOpen])

  return <MypageModalInner />
}
