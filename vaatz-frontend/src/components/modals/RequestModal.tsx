// ─── RequestModal ─────────────────────────────────────────────────────────────
// 데이터 업로드 요청 모달 (frozen) — vaatz-init.js reqOpen/reqClose 관리.
// Phase 4: HTML 분리 완료.
// ─────────────────────────────────────────────────────────────────────────────
import { memo } from 'react'
import { requestModalHtml } from '../../data/request-modal-html'

const RequestModal = memo(function RequestModal() {
  return <div dangerouslySetInnerHTML={{ __html: requestModalHtml }} />
}, () => true)

export default RequestModal
