// ─── AdminPanel Component ─────────────────────────────────────────────────────
// Phase 3: React Context가 Admin 패널 열림/닫힘 상태를 관리.
//
// 아키텍처:
//   - adminOpen (AppContext) → #ao.classList.toggle('sh') via useEffect
//   - AdminPanelInner = 전체 Admin HTML (frozen memo) → vaatz-init.js 자유 조작
//   - vaatz-init.js oa()/ca() → window.__reactOpenAdmin/__reactCloseAdmin 호출
//   - at(btn,id) / openAdminTab(id) 탭 전환은 그대로 vaatz-init.js 처리
//
// Phase 4에서 탭별 React 상태 전환 예정.
// ─────────────────────────────────────────────────────────────────────────────
import { memo, useEffect } from 'react'
import { useApp } from '../../context/AppContext'
import { adminPanelHtml } from '../../data/admin-panel-html'

// ─── frozen inner HTML ────────────────────────────────────────
// #ao 포함 전체 Admin DOM. React 리렌더 차단 → vaatz-init.js 안전 조작.
const AdminPanelInner = memo(function AdminPanelInner() {
  return <div dangerouslySetInnerHTML={{ __html: adminPanelHtml }} />
}, () => true)

// ─── AdminPanel ───────────────────────────────────────────────
export default function AdminPanel() {
  const { adminOpen } = useApp()

  // adminOpen ↔ #ao.sh 클래스 동기화
  useEffect(() => {
    const ao = document.getElementById('ao')
    if (ao) ao.classList.toggle('sh', adminOpen)
  }, [adminOpen])

  // AdminPanelInner는 항상 DOM에 존재 (frozen) — 표시/숨김은 CSS .sh 로 처리
  return <AdminPanelInner />
}
