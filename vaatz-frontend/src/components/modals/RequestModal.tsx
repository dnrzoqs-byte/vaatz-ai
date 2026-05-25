// ─── RequestModal ─────────────────────────────────────────────────────────────
// 데이터 업로드 요청 모달 — React Context 기반 열림/닫힘.
// Phase 5: AppContext.requestOpen → #rqM .sh 동기화.
//
// - RequestModalInner: frozen memo — vaatz-init.js DOM 조작 허용
// - RequestModal (wrapper): useEffect로 .sh 클래스 제어 + 닫힐 때 파일 목록 초기화
// ─────────────────────────────────────────────────────────────────────────────
import { memo, useEffect } from 'react'
import { requestModalHtml } from '../../data/request-modal-html'
import { useApp } from '../../context/AppContext'

// 항상 DOM에 존재하는 frozen 내부 컴포넌트
const RequestModalInner = memo(function RequestModalInner() {
  return <div dangerouslySetInnerHTML={{ __html: requestModalHtml }} />
}, () => true)

// wrapper: React 상태 → DOM 클래스 동기화
export default function RequestModal() {
  const { requestOpen } = useApp()

  useEffect(() => {
    const el = document.getElementById('rqM')
    if (el) el.classList.toggle('sh', requestOpen)
    // 닫힐 때 파일 목록 초기화 (vaatz-init.js reqClose 동작 미러링)
    if (!requestOpen) {
      const list = document.getElementById('reqFileList')
      if (list) list.innerHTML = ''
    }
  }, [requestOpen])

  return <RequestModalInner />
}
