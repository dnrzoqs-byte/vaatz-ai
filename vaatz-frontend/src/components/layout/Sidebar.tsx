// ─── Sidebar Component ────────────────────────────────────────────────────────
// 사이드바: 브랜드, 구매DB 메뉴, 요청, 채팅히스토리, 사용자 정보
// vaatz-init.js 함수들은 window.* 로 호출 (Phase 1 bridge)
// ─────────────────────────────────────────────────────────────────────────────

interface ChatHistory {
  id: number
  title: string
  date: string
  active?: boolean
}

const CHAT_HISTORY: ChatHistory[] = [
  { id: 1, title: '탄력적입찰 vs 경매입찰', date: '오늘 15:42', active: true },
  { id: 2, title: '품질 5스타 평가기준',     date: '오늘 13:10' },
  { id: 3, title: 'VAATZ 구매요청 생성',     date: '오늘 10:28' },
  { id: 4, title: '수의계약 사유서 작성',     date: '어제' },
  { id: 5, title: '해외구매 환율 적용',      date: '2월 5일' },
]

// window.* 전역 함수 타입 선언
declare global {
  interface Window {
    sv: (view: string) => void
    openDB: (type: string) => void
    reqOpen: () => void
    openHistory: () => void
    oa: () => void
    openMypage: () => void
    toggleTheme: () => void
    openComm: (tab?: string) => void
    closeComm: () => void
  }
}

export default function Sidebar() {
  return (
    <div className="sb">
      {/* ── 헤더 ── */}
      <div className="sb-hd">
        <div className="brand">
          <div
            className="brand-m"
            onClick={() => window.sv?.('wl')}
            style={{ cursor: 'pointer' }}
            title="홈으로"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z"
                fill="white"
                opacity=".9"
              />
            </svg>
          </div>
          <div>
            <div className="brand-n">VAATZ AI</div>
            <div className="brand-s">Hyundai · Kia Procurement</div>
          </div>
        </div>
        <button className="new-c" onClick={() => window.sv?.('wl')}>
          ＋ 새 대화
        </button>
      </div>

      {/* ── 구매 DB ── */}
      <div className="sb-nav">
        <div className="sb-lb">구매 DB</div>
        <button className="sb-i" onClick={() => window.openDB?.('term')}>
          <span className="sb-ic sb-ic-book" />용어사전
        </button>
        <button className="sb-i" onClick={() => window.openDB?.('std')}>
          <span className="sb-ic sb-ic-list" />업무표준
        </button>
        <button className="sb-i" onClick={() => window.openDB?.('star')}>
          <span className="sb-ic sb-ic-star" />품질 5스타
        </button>
        <button className="sb-i" onClick={() => window.openDB?.('bid')}>
          <span className="sb-ic sb-ic-tag" />입찰관리
        </button>
      </div>

      {/* ── 요청 ── */}
      <div className="sb-nav">
        <div className="sb-lb">요청</div>
        <button className="sb-i" onClick={() => window.reqOpen?.()}>
          <span className="sb-ic sb-ic-upload" />데이터 업로드 요청
        </button>
        <button className="sb-i" onClick={() => window.openHistory?.()}>
          <span className="sb-ic sb-ic-history" />이력 관리
        </button>
      </div>

      {/* ── 최근 대화 ── */}
      <div className="sb-nav">
        <div className="sb-lb">최근 대화</div>
      </div>
      <div className="sb-hist">
        {CHAT_HISTORY.map(item => (
          <div
            key={item.id}
            className={`hi${item.active ? ' on' : ''}`}
            onClick={() => window.sv?.('ch')}
          >
            <div className="hi-t">{item.title}</div>
            <div className="hi-m">{item.date}</div>
          </div>
        ))}
      </div>

      {/* ── 푸터: Admin + 유저 + 테마 ── */}
      <div className="sb-ft">
        <button className="sb-i" onClick={() => window.oa?.()}>
          <span className="sb-ic sb-ic-lock" />Admin
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div
            className="sb-u"
            onClick={() => window.openMypage?.()}
            style={{ flex: 1 }}
          >
            <div className="sb-av">김</div>
            <div>
              <div className="sb-un">김현대 책임매니저</div>
              <div className="sb-ur">구매디지털추진팀</div>
            </div>
          </div>
          <button
            className="theme-mini-btn"
            id="themeBtn"
            onClick={(e) => { e.stopPropagation(); window.toggleTheme?.() }}
          >
            🌙
          </button>
        </div>
      </div>
    </div>
  )
}
