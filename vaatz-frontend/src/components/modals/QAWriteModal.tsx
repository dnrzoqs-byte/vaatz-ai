// ─── QAWriteModal ─────────────────────────────────────────────────────────────
// 커뮤니티 Q&A 질문 작성 모달 (frozen) — vaatz-init.js openQuestionWrite/closeQuestionWrite 관리.
// Phase 4: HTML 분리 완료.
// ─────────────────────────────────────────────────────────────────────────────
import { memo } from 'react'
import { qaWriteModalHtml } from '../../data/qawrite-modal-html'

const QAWriteModal = memo(function QAWriteModal() {
  return <div dangerouslySetInnerHTML={{ __html: qaWriteModalHtml }} />
}, () => true)

export default QAWriteModal
