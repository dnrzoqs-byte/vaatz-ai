// ─── DBOverlay ────────────────────────────────────────────────────────────────
// 구매 DB 뷰어 오버레이 (frozen) — vaatz-init.js openDB/closeDB 관리.
// Phase 4: HTML 분리 완료.
// ─────────────────────────────────────────────────────────────────────────────
import { memo } from 'react'
import { dbOverlayHtml } from '../../data/db-overlay-html'

const DBOverlay = memo(function DBOverlay() {
  return <div dangerouslySetInnerHTML={{ __html: dbOverlayHtml }} />
}, () => true)

export default DBOverlay
