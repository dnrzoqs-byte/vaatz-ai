// ─── TopBar Component ─────────────────────────────────────────────────────────
// 상단바: VAATZ AI 타이틀, 검색범위 스위치, 외부지식 토글, 알림
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react'

declare global {
  interface Window {
    scT: (btn: HTMLElement, type: string) => void
    toggleWeb: () => void
    toggleNoti: () => void
    clearNoti: () => void
    handleNotiClick: (type: string) => void
    oa: () => void
  }
}

const NOTIFICATIONS = [
  { id: 1, icon: '📤', title: '새 업로드 요청', desc: '박성민 매니저가 구매전략팀에 문서 업로드를 요청했습니다.', time: '5분 전',   action: 'req', unread: true },
  { id: 2, icon: '✅', title: '요청 승인 완료', desc: '공정거래법 하도급 관련 조항이 승인되어 지식 베이스에 반영됩니다.',       time: '1시간 전', action: 'req', unread: true },
  { id: 3, icon: '🔧', title: '시스템 공지',   desc: 'Learning Lounge 데이터 동기화가 68% 진행 중입니다.',                   time: '2시간 전', action: 'sys', unread: true },
  { id: 4, icon: '❌', title: '요청 보완 요청', desc: '해외구매 환율 보고서가 보안 등급 미달로 보완 요청되었습니다.',           time: '어제',     action: 'req', unread: false },
]

export default function TopBar() {
  const [scopeAll, setScopeAll] = useState(true)
  const [notiOpen, setNotiOpen] = useState(false)
  const [badge, setBadge] = useState(3)

  const handleScopeClick = (type: 'all' | 'my', btn: HTMLElement) => {
    setScopeAll(type === 'all')
    // Bridge: vanilla JS의 scT 로직 재현
    if (type === 'my') {
      window.scT?.(btn, 'my')
    } else {
      window.scT?.(btn, 'all')
    }
  }

  const handleClearNoti = () => {
    setBadge(0)
    setNotiOpen(false)
  }

  return (
    <div className="tb">
      {/* 왼쪽: 타이틀 + 검색범위 + 외부지식 */}
      <div className="tb-l">
        <div className="tb-t">VAATZ AI</div>

        <div className="sc-sw">
          <button
            className={`sc-btn${scopeAll ? ' on' : ''}`}
            onClick={(e) => handleScopeClick('all', e.currentTarget)}
          >
            구매지식
          </button>
          <button
            className={`sc-btn${!scopeAll ? ' on' : ''}`}
            onClick={(e) => handleScopeClick('my', e.currentTarget)}
          >
            내 파일
          </button>
        </div>

        <div
          className="web-tg-mini"
          onClick={() => window.toggleWeb?.()}
          title="웹 검색 결과를 AI 답변에 반영합니다 (켜고 끄기)"
        >
          <span style={{ fontSize: 12 }}>🌐</span>
          <span className="web-tg-label">웹 검색</span>
          <div className="web-tg" id="webTg" />
        </div>
      </div>

      {/* 오른쪽: 알림 */}
      <div className="tb-r">
        <div className="noti-wrap">
          <button
            className="noti-btn"
            id="notiBtn"
            onClick={() => setNotiOpen(o => !o)}
          >
            <span className="icon-bell" />
            {badge > 0 && (
              <span className="noti-badge" id="notiBadge">{badge}</span>
            )}
          </button>

          {notiOpen && (
            <div className="noti-panel" id="notiPanel">
              <div className="noti-hd">
                <span className="noti-hd-t">🔔 알림</span>
                <button className="noti-clear" onClick={handleClearNoti}>
                  모두 읽음
                </button>
              </div>
              <div className="noti-list" id="notiList">
                {NOTIFICATIONS.map(n => (
                  <div
                    key={n.id}
                    className={`noti-item${n.unread ? ' unread' : ''}`}
                    onClick={() => {
                      window.handleNotiClick?.(n.action)
                      setNotiOpen(false)
                    }}
                  >
                    <span className="noti-item-ic">{n.icon}</span>
                    <div className="noti-item-body">
                      <div className="noti-item-title">{n.title}</div>
                      <div className="noti-item-desc">{n.desc}</div>
                      <div className="noti-item-time">{n.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
