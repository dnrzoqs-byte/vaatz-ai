// ─── ChatArea Component ───────────────────────────────────────────────────────
// 채팅 영역: 환영 뷰 + 채팅 뷰
// 데모 채팅 메시지는 정적 JSX. vaatz-init.js의 sv() 함수가 화면 전환을 담당.
// ─────────────────────────────────────────────────────────────────────────────
import { memo } from 'react'

// ─── Welcome 뷰 ───────────────────────────────────────────
export function WelcomeView() {
  return (
    <div id="v-wl" className="cs" style={{ display: 'none' }}>
      <div className="cc">
        <div className="wl">
          <div className="wl-m">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="white" opacity=".9"/>
            </svg>
          </div>
          <div className="wl-ti">VAATZ AI</div>
          <div className="wl-d">
            구매업무규정, 업무표준, VAATZ 매뉴얼, 품질 5스타 기준 기반<br/>
            정확한 근거와 함께 답변합니다.
          </div>
          <div className="wg">
            <div className="wc" onClick={() => window.sv?.('ch')}>
              <div className="wc-i">📋</div>
              <div className="wc-t">구매 절차</div>
              <div className="wc-d">탄력적·경매입찰, 수의계약 등</div>
            </div>
            <div className="wc" onClick={() => window.sv?.('ch')}>
              <div className="wc-i">⭐</div>
              <div className="wc-t">품질 5스타</div>
              <div className="wc-d">등급 기준, 평가항목, 승급 조건</div>
            </div>
            <div className="wc" onClick={() => window.sv?.('ch')}>
              <div className="wc-i">🖥️</div>
              <div className="wc-t">VAATZ 가이드</div>
              <div className="wc-d">구매요청, 발주, 검수 화면 조작</div>
            </div>
            <div className="wc" onClick={() => (window as any).rpT?.()}>
              <div className="wc-i">📂</div>
              <div className="wc-t">내 파일</div>
              <div className="wc-d">개인 문서 업로드 및 관리</div>
            </div>
          </div>
          <div className="wt">
            <button className="wt-i" onClick={() => window.sv?.('ch')}>&ldquo;탄력적입찰이 뭔가요?&rdquo;</button>
            <button className="wt-i" onClick={() => window.sv?.('ch')}>&ldquo;5스타 평가기준&rdquo;</button>
            <button className="wt-i" onClick={() => window.sv?.('ch')}>&ldquo;VAATZ 발주 생성&rdquo;</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── 데모 채팅 메시지 (정적 HTML, vaatz-init.js가 수정 가능) ──
// memo(() => true) = 절대 리렌더링 안 함 → vaatz-init.js DOM 조작 유지
const ChatMessages = memo(() => {
  return (
    <div id="v-ch" className="cs">
      <div className="cc" id="chatContent">
        {/* 데모 사용자 메시지 */}
        <div className="msg msg-u">
          <div className="msg-b">탄력적입찰과 경매입찰의 차이점을 알려주세요. VAATZ에서 어떻게 진행하나요?</div>
        </div>
        {/* 데모 AI 응답 */}
        <DemoAiResponse />
        {/* 후속 질문 버튼 */}
        <div className="fu0">
          <button className="fu-c">📝 입찰 공고 템플릿</button>
          <button className="fu-c">⭐ 5스타 평가항목 상세</button>
          <button className="fu-c">🖥️ VAATZ 경매 화면 가이드</button>
        </div>
      </div>
    </div>
  )
}, () => true)

// ─── 데모 AI 응답 (길지만 한 번만 렌더링) ────────────────
const DemoAiResponse = memo(() => {
  return (
    <div className="msg msg-a">
      <div className="aa">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="white" opacity=".9"/>
        </svg>
      </div>
      <div className="ab">
        <div className="ah">
          <span className="an">VAATZ AI</span>
          <span className="at0">RAG · 5개 문서 인용</span>
          <span className="at0" style={{ background: 'var(--g-dim)', color: 'var(--g)' }}>● 신뢰도 94%</span>
        </div>

        {/* RAG 파이프라인 */}
        <div className="rag-pipeline">
          <div className="rag-hd">
            <div className="rag-hd-l"><div className="rag-hd-ic">🧠</div>검색 및 답변 생성 프로세스</div>
            <div className="rag-conf"><div className="rag-conf-dot" />HIGH CONFIDENCE <span className="rag-conf-v">94%</span></div>
          </div>
          <div className="rag-steps">
            <div className="rag-step"><div className="rag-step-ic">✓</div><div className="rag-step-tx">질의 임베딩 — <b>입찰 · 탄력적 · 경매 · VAATZ</b> 키워드 추출</div><div className="rag-step-mt">128-dim · 38ms</div></div>
            <div className="rag-step"><div className="rag-step-ic">✓</div><div className="rag-step-tx">권한 필터링 — <b>구매디지털추진팀 책임매니저</b> (높음·중간·낮음 모두 열람)</div><div className="rag-step-mt">3 levels</div></div>
            <div className="rag-step"><div className="rag-step-ic">✓</div><div className="rag-step-tx">Vector 검색 — 구매업무규정·업무표준·VAATZ 매뉴얼 DB에서 <b>18개 청크</b> 발견</div><div className="rag-step-mt">cosine ≥ 0.74</div></div>
            <div className="rag-step"><div className="rag-step-ic">✓</div><div className="rag-step-tx">Re-ranking — 상위 <b>5개 핵심 청크</b> 선별 후 답변 생성</div><div className="rag-step-mt">cross-encoder</div></div>
          </div>
          <div className="rag-chunks">
            {[
              { n: 1, label: '규정 §23',          score: '0.94' },
              { n: 2, label: 'STD-PUR-012 §3.2',  score: '0.91' },
              { n: 3, label: '경매가이드 §2.1',    score: '0.88' },
              { n: 4, label: 'VAATZ Ch.5',        score: '0.86' },
              { n: 5, label: '5스타 §3',           score: '0.79' },
            ].map(c => (
              <span key={c.n} className="rag-chunk" onClick={() => (window as any).openSourceFromCitation?.(c.n)}>
                {c.label} <span className="rag-chunk-sc">{c.score}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 본문 */}
        <div className="ai-tx">
          <p><strong>탄력적입찰</strong>과 <strong>경매입찰</strong>은 현대·기아 구매에서 활용하는 대표적 경쟁 입찰 방식입니다.</p>
          <div className="ib">
            <div className="ib-t">탄력적입찰 (Flexible Bidding)</div>
            <div className="ib-b">입찰 참여 업체들이 <strong>타 업체의 순위만 확인</strong>(가격 비공개)하면서 복수 회차에 걸쳐 가격을 수정·제출합니다. 규격이 표준화된 일반 자재·부품 구매에 적용하며, 통상 2~3회차 진행됩니다.</div>
          </div>
          <div className="ib w">
            <div className="ib-t">경매입찰 (Reverse Auction)</div>
            <div className="ib-b"><strong>최저 입찰가를 실시간 공개</strong>하며 정해진 시간 동안 가격을 계속 낮춰 제출하는 역경매 방식입니다. 범용 자재·MRO·물류비에 적용하며, 1억원 이상 건에 권장됩니다.</div>
          </div>
          <p><strong>주요 차이점</strong></p>
          <table className="ct">
            <thead><tr><th>구분</th><th>탄력적입찰</th><th>경매입찰</th></tr></thead>
            <tbody>
              <tr><td>가격 공개</td><td>순위만</td><td>최저가 실시간</td></tr>
              <tr><td>입찰 회차</td><td>2~3회</td><td>시간 내 무제한</td></tr>
              <tr><td>경쟁 강도</td><td>중간</td><td>높음</td></tr>
              <tr><td>주요 품목</td><td>일반 자재·부품</td><td>범용·MRO·물류</td></tr>
              <tr><td>금액 기준</td><td>3천만원 이상</td><td>1억원 이상 권장</td></tr>
            </tbody>
          </table>
        </div>

        {/* 액션 버튼 */}
        <div className="ai-ac">
          <button className="ai-a">👍 도움됨</button>
          <button className="ai-a">👎 부정확</button>
          <button className="ai-a">📋 복사</button>
          <button className="ai-a">📤 공유</button>
          <button className="ai-a">🔄 재생성</button>
        </div>
      </div>
    </div>
  )
}, () => true)

// ─── 입력창 ───────────────────────────────────────────────
export function InputArea() {
  return (
    <div className="iw">
      <div className="ibx">
        <div className="ir">
          <textarea rows={1} placeholder="구매업무에 대해 물어보세요..." />
          <button className="sd">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M7 11L12 6L17 11M12 18V7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="ib3">
          <div className="itl">
            <button className="itb">📎 파일첨부</button>
            <button className="itb">📷 이미지</button>
            <span className="web-ind" id="webInd">🌐 외부지식 활용 중</span>
          </div>
          <span className="ih">Enter 전송</span>
        </div>
      </div>
      <div className="disc">
        ⚠️ AI 답변은 참고용이며, 규정 원문을 확인하세요. ·{' '}
        <span style={{ color: 'var(--text-4)' }}>Ctrl+K 빠른 입력</span>
      </div>
    </div>
  )
}

// ─── 채팅 전체 영역 ───────────────────────────────────────
export default function ChatArea() {
  return (
    <div className="mn-chat">
      <WelcomeView />
      <ChatMessages />
      <InputArea />
    </div>
  )
}
