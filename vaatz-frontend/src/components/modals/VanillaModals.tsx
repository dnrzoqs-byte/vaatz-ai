// ─── VanillaModals Component ─────────────────────────────────────────────────
// vaatz-init.js가 관리하는 모달들을 한 번만 렌더링하는 컴포넌트.
//
// Phase 1 Bridge 패턴:
//   - React는 이 컴포넌트를 단 한 번만 렌더링 (memo + () => true)
//   - 이후 vaatz-init.js가 #commOv, #ao 등에 직접 DOM 조작 가능
//   - React의 리렌더링이 vaatz-init.js 변경 사항을 덮어쓰지 않음
//
// 마이그레이션 계획:
//   - Phase 2: CommunityModal.tsx → React 컴포넌트 전환
//   - Phase 3: AdminPanel.tsx → React 컴포넌트 전환
//   - Phase 4: 나머지 모달 전환
// ─────────────────────────────────────────────────────────────────────────────
import { memo } from 'react'
import { modalsHtml }       from '../../data/modals-html'
import { companionHtml }    from '../../data/companion-html'
import { inlineStylesHtml } from '../../data/inline-styles-html'

const VanillaModals = memo(() => {
  return (
    <>
      {/* 마이페이지, 요청모달, Admin패널, Q&A작성, DB뷰어, 커뮤니티 */}
      <div dangerouslySetInnerHTML={{ __html: modalsHtml }} />

      {/* 플로팅 캐릭터 + 컴패니언 허브 */}
      <div dangerouslySetInnerHTML={{ __html: companionHtml }} />

      {/* 인라인 스타일 (v34-css 등) */}
      <div dangerouslySetInnerHTML={{ __html: inlineStylesHtml }} />
    </>
  )
}, () => true) // 절대 리렌더링 안 함

export default VanillaModals
