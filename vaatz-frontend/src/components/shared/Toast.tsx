// ─── Toast Component ──────────────────────────────────────────────────────────
// Phase 1: 컨테이너만 렌더링 — vaatz-init.js의 toast() 함수가 DOM 직접 관리.
//
// Phase 2 마이그레이션 시:
//   - useApp()의 toasts 상태 연동
//   - vaatz-init.js toast() → window.__reactToast() 로 전환
// ─────────────────────────────────────────────────────────────────────────────
import { memo } from 'react'
import '../../styles/toast.css'

// 절대 리렌더링 안 함 → vaatz-init.js DOM 조작 유지
const Toast = memo(function Toast() {
  return <div className="toast-wrap" id="toastWrap" />
}, () => true)

export default Toast
