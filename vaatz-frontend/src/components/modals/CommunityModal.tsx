// ─── CommunityModal Component ─────────────────────────────────────────────────
// Phase 2: React Context가 모달 열림/닫힘 상태를 관리.
//
// 아키텍처:
//   - communityOpen (AppContext) → #commOv.classList.toggle('sh') via useEffect
//   - CommunityModalInner = 전체 커뮤니티 HTML (frozen memo) → vaatz-init.js 자유 조작
//   - vaatz-init.js V36 openComm/closeComm → window.__reactOpenComm/__reactCloseComm 호출
//   - commTab·renderQA·setupV33CharacterPicker 등은 그대로 V36 처리
//
// 데이터 흐름:
//   window.openComm(tab)
//     → V36: classList.add('sh') 즉시 반영  +  __reactOpenComm(tab) 상태 동기
//     → React re-render → useEffect → classList.add('sh') (no-op, 이미 추가됨)
//   window.closeComm()
//     → V36: classList.remove('sh')  +  __reactCloseComm() 상태 동기
//
// Phase 3 예정: 탭 스위칭을 React 상태로 전환.
// ─────────────────────────────────────────────────────────────────────────────
import { memo, useEffect } from 'react'
import { useApp } from '../../context/AppContext'
import { communityModalHtml } from '../../data/community-modal-html'

// ─── frozen inner HTML ────────────────────────────────────────
// commOv 포함 전체 커뮤니티 DOM. React 리렌더 차단 → vaatz-init.js 안전 조작.
const CommunityModalInner = memo(function CommunityModalInner() {
  return <div dangerouslySetInnerHTML={{ __html: communityModalHtml }} />
}, () => true)

// ─── CommunityModal ───────────────────────────────────────────
export default function CommunityModal() {
  const { communityOpen } = useApp()

  // communityOpen ↔ #commOv.sh 클래스 동기화
  useEffect(() => {
    const ov = document.getElementById('commOv')
    if (ov) ov.classList.toggle('sh', communityOpen)
  }, [communityOpen])

  // 모달이 열릴 때 Q&A 목록 렌더링 트리거 (V36 renderQA)
  useEffect(() => {
    if (!communityOpen) return
    const w = window as any
    const timer = setTimeout(() => {
      // 현재 on 상태인 탭에 맞는 렌더러 호출
      const active = document.querySelector<HTMLElement>('.comm-tab.on')
      const match  = active?.getAttribute('onclick')?.match(/'(ct-\w+)'/)
      const tabId  = match?.[1] ?? 'ct-qa'
      if (tabId === 'ct-qa')   w.renderQA?.()
      if (tabId === 'ct-char') w.setupV33CharacterPicker?.()
      if (tabId === 'ct-shop') w.renderV33ShopItems?.()
    }, 60)
    return () => clearTimeout(timer)
  }, [communityOpen])

  // CommunityModalInner는 항상 DOM에 존재 (freeze) — 표시/숨김은 CSS .sh 로 처리
  return <CommunityModalInner />
}
