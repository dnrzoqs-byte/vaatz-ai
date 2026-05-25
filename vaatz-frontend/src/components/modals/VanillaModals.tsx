// ─── VanillaModals Component ─────────────────────────────────────────────────
// Phase 4 이후: 개별 React 컴포넌트로 분리 완료.
// 이 컴포넌트는 플로팅 캐릭터·컴패니언·인라인 스타일·comm-side 버튼만 담당.
//
// Phase 4 이전: modalsHtml 블롭에 모든 모달이 포함되어 있었음.
// Phase 4 이후: 각 모달이 개별 컴포넌트로 분리됨:
//   - MypageModal.tsx    (#mpOv)
//   - RequestModal.tsx   (#rqM)
//   - QAWriteModal.tsx   (#qWriteM)
//   - DBOverlay.tsx      (#dbOv)
//   - CommunityModal.tsx (#commOv) ← Phase 2
//   - AdminPanel.tsx     (#ao)     ← Phase 3
// ─────────────────────────────────────────────────────────────────────────────
import { memo } from 'react'
import { companionHtml }    from '../../data/companion-html'
import { inlineStylesHtml } from '../../data/inline-styles-html'

const VanillaModals = memo(() => {
  return (
    <>
      {/* 플로팅 캐릭터 + 컴패니언 허브 */}
      <div dangerouslySetInnerHTML={{ __html: companionHtml }} />

      {/* 인라인 스타일 (v34-css 등) */}
      <div dangerouslySetInnerHTML={{ __html: inlineStylesHtml }} />

      {/* 커뮤니티 사이드 버튼 (화면 우측 고정) */}
      <div className="comm-side">
        <div
          className="comm-side-btn"
          onClick={() => (window as any).openComm?.('qa')}
          title="구매 커뮤니티 Q&A"
        >
          <span>💡</span><span>Q&A</span>
        </div>
      </div>
    </>
  )
}, () => true) // 절대 리렌더링 안 함

export default VanillaModals
