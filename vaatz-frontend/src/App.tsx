// ─── App ─────────────────────────────────────────────────────────────────────
// Phase 1 React Migration:
//   - dangerouslySetInnerHTML({ __html: vaatzHtml }) 제거
//   - 개별 React 컴포넌트로 분리
//   - vaatz-init.js는 그대로 유지 (Bridge 패턴)
//
// 컴포넌트 트리:
//   AppProvider
//     Toast          (fixed overlay — vaatz-init.js가 DOM 직접 관리)
//     .app
//       Sidebar      (정적 레이아웃)
//       .mn
//         TopBar     (검색범위 스위치, 알림)
//         .mn-body
//           ChatArea (웰컴뷰 + 채팅뷰 + 입력창)
//           RightPanel (내 파일 / 답변 근거 패널)
//     VanillaModals  (마이페이지·관리패널·커뮤니티 등 — vaatz-init.js 관리)
// ─────────────────────────────────────────────────────────────────────────────
import { useEffect, useRef } from 'react'
import { AppProvider }    from './context/AppContext'
import Sidebar            from './components/layout/Sidebar'
import TopBar             from './components/layout/TopBar'
import ChatArea           from './components/chat/ChatArea'
import RightPanel         from './components/layout/RightPanel'
import VanillaModals      from './components/modals/VanillaModals'
import Toast              from './components/shared/Toast'

// ─── 앱 본체 (AppProvider 안에서 실행) ──────────────────────
function AppShell() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    // body 스타일 (SSR-safe — React hydration 전에 index.css가 처리하지만 보험용)
    document.body.style.margin  = '0'
    document.body.style.padding = '0'
    document.body.style.height  = '100vh'
    document.body.style.overflow = 'hidden'

    // vaatz-init.js 전역 로드
    // async=false → DOM이 준비된 뒤 동기 실행, inline onclick 핸들러 정상 동작
    const script = document.createElement('script')
    script.src   = '/vaatz-init.js'
    script.async = false
    document.body.appendChild(script)
  }, [])

  return (
    <>
      {/* 토스트 오버레이 (position: fixed) */}
      <Toast />

      {/* 메인 레이아웃 */}
      <div className="app">
        <Sidebar />
        <div className="mn">
          <TopBar />
          <div className="mn-body">
            <ChatArea />
            <RightPanel />
          </div>
        </div>
      </div>

      {/* Vanilla 모달들 (vaatz-init.js 관리) */}
      <VanillaModals />
    </>
  )
}

// ─── 루트 컴포넌트 ────────────────────────────────────────────
export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  )
}
