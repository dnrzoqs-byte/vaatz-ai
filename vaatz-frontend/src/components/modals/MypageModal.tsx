// ─── MypageModal ─────────────────────────────────────────────────────────────
// 마이페이지 모달 (frozen) — vaatz-init.js openMypage/closeMypage 관리.
// Phase 4: HTML 분리 완료. Phase 5에서 React 상태 전환 예정.
// ─────────────────────────────────────────────────────────────────────────────
import { memo } from 'react'
import { mypageModalHtml } from '../../data/mypage-modal-html'

const MypageModal = memo(function MypageModal() {
  return <div dangerouslySetInnerHTML={{ __html: mypageModalHtml }} />
}, () => true)

export default MypageModal
