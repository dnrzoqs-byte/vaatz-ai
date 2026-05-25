// ─── RightPanel Component ─────────────────────────────────────────────────────
// 우측 패널: 내 파일 탭 + 답변 근거 탭
//
// Phase 1 Bridge 패턴:
//   - memo(() => true) → 절대 리렌더링 안 함
//   - vaatz-init.js가 #srcChips, #srcVw 등에 직접 DOM 조작
//   - 탭 전환(rpSwitchTab), 파일 관리(tf/newFolder/delSelected/simUpload)
//     드래그앤드롭(fDragOver/fDragLeave/fDrop/fDragStart) 모두 vaatz-init.js 담당
// ─────────────────────────────────────────────────────────────────────────────
import { memo } from 'react'

declare global {
  interface Window {
    rpT: () => void
    rpSwitchTab: (tab: string) => void
    newFolder: () => void
    delSelected: () => void
    simUpload: () => void
    tf: (el: HTMLElement) => void
    fDragOver: (e: Event, el: HTMLElement) => void
    fDragLeave: (el: HTMLElement) => void
    fDrop: (e: Event, el: HTMLElement) => void
    fDragStart: (e: Event, el: HTMLElement) => void
  }
}

const RightPanel = memo(function RightPanel() {
  return (
    <div className="rp sh" id="rp">
      {/* 리사이즈 핸들 */}
      <div className="rp-rs" id="rpResize" />

      {/* 헤더 */}
      <div className="rp-h">
        <div className="rp-t" id="rpTitle">📂 작업 패널</div>
        <button className="rp-c" onClick={() => window.rpT?.()}>✕</button>
      </div>

      {/* 탭 버튼 */}
      <div className="rp-tabs">
        <button
          className="rp-tab"
          id="rpTabMy"
          onClick={() => window.rpSwitchTab?.('my')}
        >
          <span>📂</span>내 파일{' '}
          <span className="rp-tab-count" id="rpCnt">5</span>
        </button>
        <button
          className="rp-tab on"
          id="rpTabSrc"
          onClick={() => window.rpSwitchTab?.('src')}
        >
          <span>🔍</span>답변 근거{' '}
          <span className="rp-tab-count" id="rpSrcCnt">5</span>
          <span className="rp-tab-dot" id="rpSrcDot" />
        </button>
      </div>

      {/* ── 내 파일 탭 ── */}
      <div className="rp-tab-pane" id="rpPaneMy">

        {/* 툴바 */}
        <div className="rp-bar">
          <button className="rp-btn0" onClick={() => window.newFolder?.()}>📁 새 폴더</button>
          <button className="rp-btn0 x" onClick={() => window.delSelected?.()}>🗑 선택 삭제</button>
        </div>

        <div className="rp-b">
          {/* 업로드 존 */}
          <div className="rp-up">
            <div
              className="upl-z"
              id="dropZone"
              onClick={() => window.simUpload?.()}
            >
              <span className="upl-i">☁️</span>
              <div className="upl-t">클릭 또는 파일 드래그</div>
              <div className="upl-s">PDF, DOCX, XLSX · 최대 10MB</div>
            </div>
          </div>

          {/* 파일 목록 */}
          <div className="fl-sec" id="fileSec">
            <div className="fl-tl">개인 폴더</div>

            {/* 폴더: 프로젝트 Alpha (열림) */}
            <div className="ft-f">
              <div
                className="ft-fh"
                onClick={(e) => window.tf?.(e.currentTarget)}
                onDragOver={(e) => { e.preventDefault(); window.fDragOver?.(e.nativeEvent, e.currentTarget) }}
                onDragLeave={(e) => window.fDragLeave?.(e.currentTarget)}
                onDrop={(e) => window.fDrop?.(e.nativeEvent, e.currentTarget)}
              >
                <input type="checkbox" className="fl-chk" onClick={(e) => e.stopPropagation()} readOnly />
                <span className="ft-ar op">▶</span>
                <span className="ft-ic">📁</span>
                <span className="ft-nm">프로젝트 Alpha</span>
              </div>
              <div className="ft-ds" style={{ maxHeight: '200px' }}>
                <div
                  className="fl-file"
                  draggable={true}
                  onDragStart={(e) => window.fDragStart?.(e.nativeEvent, e.currentTarget)}
                >
                  <input type="checkbox" className="fl-chk" onClick={(e) => e.stopPropagation()} readOnly />
                  <span className="fl-file-ic">📄</span>
                  <div className="fl-file-info">
                    <div className="fl-file-nm">25년_상반기_전략.pdf</div>
                    <div className="fl-file-meta">2.4 MB · 오늘</div>
                  </div>
                </div>
                <div
                  className="fl-file"
                  draggable={true}
                  onDragStart={(e) => window.fDragStart?.(e.nativeEvent, e.currentTarget)}
                >
                  <input type="checkbox" className="fl-chk" onClick={(e) => e.stopPropagation()} readOnly />
                  <span className="fl-file-ic">📊</span>
                  <div className="fl-file-info">
                    <div className="fl-file-nm">업체_평가_데이터.xlsx</div>
                    <div className="fl-file-meta">856 KB · 어제</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 폴더: 참고 자료 (닫힘) */}
            <div className="ft-f">
              <div
                className="ft-fh"
                onClick={(e) => window.tf?.(e.currentTarget)}
                onDragOver={(e) => { e.preventDefault(); window.fDragOver?.(e.nativeEvent, e.currentTarget) }}
                onDragLeave={(e) => window.fDragLeave?.(e.currentTarget)}
                onDrop={(e) => window.fDrop?.(e.nativeEvent, e.currentTarget)}
              >
                <input type="checkbox" className="fl-chk" onClick={(e) => e.stopPropagation()} readOnly />
                <span className="ft-ar">▶</span>
                <span className="ft-ic">📁</span>
                <span className="ft-nm">참고 자료</span>
              </div>
              <div className="ft-ds cl" style={{ maxHeight: 0 }}>
                <div
                  className="fl-file"
                  draggable={true}
                  onDragStart={(e) => window.fDragStart?.(e.nativeEvent, e.currentTarget)}
                >
                  <input type="checkbox" className="fl-chk" onClick={(e) => e.stopPropagation()} readOnly />
                  <span className="fl-file-ic">📘</span>
                  <div className="fl-file-info">
                    <div className="fl-file-nm">개인_메모.txt</div>
                    <div className="fl-file-meta">12 KB · 2월 5일</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 미분류 파일 */}
            <div className="fl-tl" style={{ marginTop: '10px' }}>
              미분류 파일{' '}
              <span style={{ fontSize: '8px', color: 'var(--text-4)', fontWeight: 400, letterSpacing: 0 }}>
                폴더로 드래그하여 정리
              </span>
            </div>
            <div id="uncategorized">
              <div
                className="fl-file"
                draggable={true}
                onDragStart={(e) => window.fDragStart?.(e.nativeEvent, e.currentTarget)}
              >
                <input type="checkbox" className="fl-chk" onClick={(e) => e.stopPropagation()} readOnly />
                <span className="fl-file-ic">📄</span>
                <div className="fl-file-info">
                  <div className="fl-file-nm">회의록_260208.docx</div>
                  <div className="fl-file-meta">340 KB · 오늘</div>
                </div>
              </div>
              <div
                className="fl-file"
                draggable={true}
                onDragStart={(e) => window.fDragStart?.(e.nativeEvent, e.currentTarget)}
              >
                <input type="checkbox" className="fl-chk" onClick={(e) => e.stopPropagation()} readOnly />
                <span className="fl-file-ic">📄</span>
                <div className="fl-file-info">
                  <div className="fl-file-nm">입찰비교_분석표.pdf</div>
                  <div className="fl-file-meta">1.2 MB · 오늘</div>
                </div>
              </div>
            </div>
          </div>{/* /fl-sec */}
        </div>{/* /rp-b */}

        {/* 하단 통계 + 새 폴더 링크 */}
        <div className="rp-ft">
          <span id="rpStats">총 5개</span>
          <span
            style={{ color: 'var(--accent)', cursor: 'pointer' }}
            onClick={() => window.newFolder?.()}
          >
            + 새 폴더
          </span>
        </div>

        {/* 커뮤니티 미니 위젯 */}
        <div className="comm-mini">
          <div className="comm-mini-hd">
            <span>🔥 인기 질문</span>
            <button className="comm-mini-more" onClick={() => (window as any).openComm?.('qa')}>
              커뮤니티 →
            </button>
          </div>
          <div className="comm-mini-item" onClick={() => (window as any).openComm?.('qa')}>
            <span className="comm-mini-hot">🔥</span>
            <span className="comm-mini-title">탄력적입찰 유찰 시 처리 절차</span>
            <span className="comm-mini-tag" style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}>채택</span>
            <span className="comm-mini-votes">47</span>
          </div>
          <div className="comm-mini-item" onClick={() => (window as any).openComm?.('qa')}>
            <span className="comm-mini-hot">✨</span>
            <span className="comm-mini-title">5스타 4→5등급 승급 심사항목</span>
            <span className="comm-mini-tag" style={{ background: 'var(--g-dim)', color: 'var(--g)' }}>NEW</span>
            <span className="comm-mini-votes">23</span>
          </div>
          <div className="comm-mini-item" onClick={() => (window as any).openComm?.('qa')}>
            <span className="comm-mini-hot">💬</span>
            <span className="comm-mini-title">해외 발주 시 환율 적용 방법</span>
            <span className="comm-mini-tag" style={{ background: 'var(--bg-3)', color: 'var(--text-3)' }}>VAATZ</span>
            <span className="comm-mini-votes">15</span>
          </div>
          <div className="comm-mini-item" onClick={() => (window as any).openComm?.('qa')}>
            <span className="comm-mini-hot">📝</span>
            <span className="comm-mini-title">수의계약 긴급 사유서 승인 기준</span>
            <span className="comm-mini-tag" style={{ background: 'var(--a-dim)', color: 'var(--a)' }}>대기</span>
            <span className="comm-mini-votes">8</span>
          </div>
        </div>

      </div>{/* /rpPaneMy */}

      {/* ── 답변 근거 탭 ── */}
      <div className="rp-tab-pane on" id="rpPaneSrc">
        <div className="src-hd">
          <div className="src-hd-q">현재 답변의 출처 문서</div>
          <div className="src-hd-qt" id="srcHdQ">
            탄력적입찰과 경매입찰의 차이점을 알려주세요. VAATZ에서 어떻게 진행하나요?
          </div>
        </div>
        {/* vaatz-init.js가 동적으로 채우는 영역 */}
        <div className="src-chips" id="srcChips" />
        <div className="src-vw" id="srcVw" />
      </div>

    </div>
  )
}, () => true) // 절대 리렌더링 안 함 → vaatz-init.js DOM 조작 유지

export default RightPanel
