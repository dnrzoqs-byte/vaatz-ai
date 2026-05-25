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

interface ChatGroup {
  label: string
  items: ChatHistory[]
}

const CHAT_HISTORY_GROUPS: ChatGroup[] = [
  {
    label: '오늘',
    items: [
      { id: 1,  title: '탄력적입찰 vs 경매입찰',      date: '15:42', active: true },
      { id: 2,  title: '품질 5스타 평가기준',          date: '13:10' },
      { id: 3,  title: 'VAATZ 구매요청 생성',          date: '10:28' },
      { id: 14, title: '협력사 긴급 거래정지 절차',    date: '09:15' },
    ]
  },
  {
    label: '어제',
    items: [
      { id: 4,  title: '수의계약 사유서 작성',         date: '17:30' },
      { id: 7,  title: '반도체 부품 납기 지연 대응',   date: '14:22' },
      { id: 8,  title: '구매위원회 안건 작성법',        date: '11:05' },
      { id: 9,  title: 'SAP MM 발주서 정정 방법',      date: '09:40' },
    ]
  },
  {
    label: '이번 주',
    items: [
      { id: 5,  title: '해외구매 환율 적용',            date: '5월 23일' },
      { id: 10, title: '5스타 현장심사 준비 체크리스트', date: '5월 22일' },
      { id: 11, title: '입찰 심사위원 선정 기준',        date: '5월 21일' },
      { id: 12, title: '협력사 가격 분쟁 해결 절차',    date: '5월 20일' },
    ]
  },
  {
    label: '지난달',
    items: [
      { id: 13, title: '연간 구매 계획 수립 가이드',    date: '4월 28일' },
      { id: 15, title: 'BOM 변경 시 구매 영향 분석',   date: '4월 15일' },
      { id: 16, title: '공정거래 자율준수 프로그램',    date: '4월 3일' },
    ]
  }
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
        {CHAT_HISTORY_GROUPS.map(group => (
          <div key={group.label}>
            <div className="sb-date-grp">{group.label}</div>
            {group.items.map(item => (
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
