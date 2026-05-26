
// ╔═══════════════════════════════════════════════════════════════════╗
// ║  VAATZ AI — public/vaatz-init.js                                 ║
// ║  App.tsx의 <script src="/vaatz-init.js">로 브라우저에서 직접 실행   ║
// ║  ⚠️  src/scripts/vaatz-init.ts 는 실행되지 않음 — 수정 금지        ║
// ╠═══════════════════════════════════════════════════════════════════╣
// ║  수정 가이드                                                       ║
// ║    JS 로직  →  이 파일만                                           ║
// ║    CSS      →  src/overrides.css                                  ║
// ║    HTML 구조 →  src/vaatz-html.ts                                 ║
// ╠═══════════════════════════════════════════════════════════════════╣
// ║  목차 (Table of Contents)                                         ║
// ║  §01  전역 유틸리티              line ~6    toast, $, $$, esc       ║
// ║  §02  네비게이션                 line ~21   sv(), currentView        ║
// ║  §03  Admin 탭 전환             line ~36   at()                    ║
// ║  §04  채팅 히스토리 샘플 데이터    line ~40   chatConversations{}     ║
// ║  §05  v26 커뮤니티 기본 구조      line ~670  openComm, commTab 기초  ║
// ║  §06  캐릭터 시스템              line ~719                          ║
// ║  §07  소스 뷰어 / 우측 패널      line ~1100  sourceDocs, rpSwitchTab ║
// ║  §08  [LEGACY] Admin 패널      line ~1800  v25/v26 Admin UI       ║
// ║  §09  [LEGACY] v26/v27 커뮤니티  line ~1940  ⚠ openComm 덮어씌워짐  ║
// ║  §10  [LEGACY] v28 상태텍스트    line ~2195  normText               ║
// ║  §11  V29 채팅 도구 (활성)       line ~2220  installChatTools, mode  ║
// ║  §12  [LEGACY] v29-v33 커뮤니티  line ~2269  ⚠ openComm 덮어씌워짐  ║
// ║  §13  V33 캐릭터/상점 (활성)     line ~3089  setupV33CharacterPicker ║
// ║  §14  [LEGACY] v34 패치         line ~3490  ⚠ openComm 덮어씌워짐  ║
// ║  §15  ★ V36 Q&A (현재 권위버전)  line ~4182  openComm/closeComm 최종║
// ╚═══════════════════════════════════════════════════════════════════╝

// ─────────────────────────────────────────────────────
// §01  전역 유틸리티
// ─────────────────────────────────────────────────────
// ─── Toast System (replaces all alert()) ───
function toast(msg, icon='✅', duration=3500){
  const wrap=document.getElementById('toastWrap');
  const el=document.createElement('div');
  el.className='toast';
  el.innerHTML=`<span class="toast-icon">${icon}</span><span class="toast-body">${msg}</span><button class="toast-close" onclick="dismissToast(this.parentElement)">✕</button>`;
  wrap.appendChild(el);
  setTimeout(()=>dismissToast(el), duration);
}
function dismissToast(el){
  if(!el||el.classList.contains('out'))return;
  el.classList.add('out');
  setTimeout(()=>el.remove(), 260);
}

// ─────────────────────────────────────────────────────
// §02  네비게이션
// ─────────────────────────────────────────────────────
// ─── Navigation ───
let currentView='ch';
function sv(v){
  currentView=v;
  const vWl=document.getElementById('v-wl');
  const vCh=document.getElementById('v-ch');
  if(vWl) vWl.style.display=v==='wl'?'block':'none';
  if(vCh) vCh.style.display=v==='ch'?'block':'none';
  // .pfb buttons (optional — safe guard)
  const pfbs=document.querySelectorAll('.pfb');
  pfbs.forEach(b=>b.classList.remove('on'));
  const pfbTarget=pfbs[v==='wl'?0:1];
  if(pfbTarget) pfbTarget.classList.add('on');
  // Sidebar highlight
  try{
    document.querySelectorAll('.sb-nav .sb-i').forEach(x=>x.classList.remove('on'));
    const first=document.querySelector('.sb-nav .sb-i');
    if(first) first.classList.add('on');
  }catch(e){}
}

function oa(){
  /* Phase 3 bridge: React adminOpen 상태 동기 */
  if(typeof window.__reactOpenAdmin==='function') window.__reactOpenAdmin();
  document.getElementById('ao').classList.add('sh');
  document.body.style.overflow='hidden';
}
function ca(){
  /* Phase 3 bridge: React adminOpen 상태 동기 */
  if(typeof window.__reactCloseAdmin==='function') window.__reactCloseAdmin();
  document.getElementById('ao').classList.remove('sh');
  document.body.style.overflow='';
}
// ─────────────────────────────────────────────────────
// §03  Admin 탭 전환
// ─────────────────────────────────────────────────────
function at(b,id){
  document.querySelectorAll('.atb').forEach(t=>t.classList.remove('on'));
  b.classList.add('on');
  ['p-req','p-doc','p-usr','p-adm','p-int','p-mon','p-verify','p-sec'].forEach(t=>{
    const e=document.getElementById(t);
    if(e)e.style.display=t===id?'block':'none';
  });
}

// ─── Folder Toggle (robust) ───
function tf(el){
  const ar=el.querySelector('.ft-ar');
  const ds=el.nextElementSibling;
  if(!ds||!ds.classList) return;
  if(ar) ar.classList.toggle('op');
  if(ds.classList.contains('cl')){
    ds.classList.remove('cl');
    ds.style.maxHeight=ds.scrollHeight+'px';
  } else {
    ds.style.maxHeight='0';
    ds.classList.add('cl');
  }
}

// ─── Doc Access Panel ───
function td(id){
  const d=document.getElementById(id);
  if(!d)return;
  const show=d.style.display==='none';
  d.style.display=show?'block':'none';
  const pds=d.closest('.ft-ds');
  if(pds){
    if(show){pds.classList.add('has-dap')}
    else{
      const anyOpen=[...pds.querySelectorAll('.dap')].some(x=>x.style.display==='block');
      if(!anyOpen)pds.classList.remove('has-dap');
    }
  }
}

// ─── Modal backdrop close ───
document.getElementById('ao').addEventListener('click',e=>{if(e.target===e.currentTarget)ca()});

// ─── Scope + Right Panel ───
function scT(b,type){
  document.querySelectorAll('.sc-btn').forEach(btn=>btn.classList.remove('on'));
  b.classList.add('on');
  if(type==='my'){
    if(!document.getElementById('rp').classList.contains('sh')) rpT();
    toast('🔍 검색 범위: 내 파일로 변경됨','📂',2500);
  } else {
    toast('🔍 검색 범위: 전체 지식으로 변경됨','🌐',2500);
  }
}
function rpT(){
  const rp=document.getElementById('rp');
  const btn=document.getElementById('rp-btn');
  rp.classList.toggle('sh');
  btn.classList.toggle('act');
}

// ─── Chat Functionality ───
const chatArea=document.querySelector('#v-ch .cc');
const textarea=document.querySelector('.ir textarea');
const sendBtn=document.querySelector('.sd');

function autoResize(el){
  el.style.height='auto';
  el.style.height=Math.min(el.scrollHeight,120)+'px';
}
function updateSendBtn(){
  if(textarea.value.trim()){sendBtn.classList.remove('disabled')}
  else{sendBtn.classList.add('disabled')}
}
textarea.addEventListener('input',function(){autoResize(this);updateSendBtn()});
textarea.addEventListener('keydown',function(e){
  if(e.key==='Enter'&&!e.shiftKey){
    e.preventDefault();
    sendMessage();
  }
});
sendBtn.addEventListener('click',sendMessage);
updateSendBtn();

function sendMessage(){
  const text=textarea.value.trim();
  if(!text) return;
  // Add user message
  const userMsg=document.createElement('div');
  userMsg.className='msg msg-u';
  userMsg.innerHTML=`<div class="msg-b">${escHtml(text)}</div>`;
  chatArea.appendChild(userMsg);
  textarea.value='';
  textarea.style.height='auto';
  updateSendBtn();
  scrollChat();

  // Add typing indicator
  const typing=document.createElement('div');
  typing.className='typing';
  typing.id='typingIndicator';
  typing.innerHTML=`<div class="aa"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="white" opacity=".9"/></svg></div><div class="typing-dots"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
  chatArea.appendChild(typing);
  scrollChat();

  // Simulate AI response
  setTimeout(()=>{
    typing.remove();
    const aiMsg=document.createElement('div');
    aiMsg.className='msg msg-a';
    aiMsg.innerHTML=`<div class="aa"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="white" opacity=".9"/></svg></div>
    <div class="ab"><div class="ah"><span class="an">VAATZ AI</span><span class="at0">RAG · 검색 중</span>${webOn?'<span class="at0" style="background:var(--accent-dim);color:var(--accent)">🌐 외부지식</span>':''}</div>
    <div class="sp"><div class="sp-r ok"><span class="sp-ck">✓</span>구매업무규정 DB 검색 완료</div><div class="sp-r ok"><span class="sp-ck">✓</span>권한 확인 완료</div></div>
    <div class="ai-tx"><p>해당 질의에 대한 답변입니다. 이것은 프로토타입 시뮬레이션이며, 실제 RAG 엔진이 연결되면 구매업무규정, 업무표준, VAATZ 매뉴얼 등을 기반으로 정확한 근거와 함께 답변이 생성됩니다.</p><p>실제 구현 시에는 관련 문서의 출처가 <span class="cr">1</span><span class="cr">2</span> 형태로 표시되며, 하단에 참조 문서 목록이 함께 제공됩니다.</p></div>
    <div class="ai-ac"><button class="ai-a" onclick="this.classList.toggle('active')">👍 도움됨</button><button class="ai-a" onclick="this.classList.toggle('active')">👎 부정확</button><button class="ai-a" onclick="copyAnswer(this)">📋 복사</button><button class="ai-a">🔄 재생성</button></div></div>`;
    chatArea.appendChild(aiMsg);
    scrollChat();
    // Add to history
    addToHistory(text);
  }, 1200+Math.random()*800);
}

function escHtml(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>')}
function scrollChat(){
  const cs=document.querySelector('#v-ch.cs')||document.querySelector('.cs');
  if(!cs) return;
  // rAF: 레이아웃 계산 완료 후 스크롤 → 버벅임 방지
  requestAnimationFrame(function(){ cs.scrollTop=cs.scrollHeight; });
}
function copyAnswer(btn){
  const txt=btn.closest('.ab').querySelector('.ai-tx').innerText;
  navigator.clipboard.writeText(txt).then(()=>toast('답변이 클립보드에 복사되었습니다.','📋',2000));
}
function addToHistory(text){
  const title=text.length>25?text.substring(0,25)+'...':text;
  const hist=document.querySelector('.sb-hist');
  const existing=hist.querySelectorAll('.hi');
  existing.forEach(h=>h.classList.remove('on'));
  const now=new Date();
  const time=now.getHours().toString().padStart(2,'0')+':'+now.getMinutes().toString().padStart(2,'0');
  const hi=document.createElement('div');
  hi.className='hi on highlight-new';
  hi.onclick=function(){
    document.querySelectorAll('.hi').forEach(h=>h.classList.remove('on'));
    this.classList.add('on');
    sv('ch');
  };
  hi.innerHTML=`<div class="hi-t">${escHtml(title)}</div><div class="hi-m">오늘 ${time}</div>`;
  hist.insertBefore(hi,hist.firstChild);
}

// ─────────────────────────────────────────────────────
// §04  채팅 히스토리 샘플 데이터
//      실제 RAG 연결 시 이 부분을 API 호출로 교체
// ─────────────────────────────────────────────────────
// ─── History item click ───
const chatConversations = {
  '탄력적입찰 vs 경매입찰': {
    user: '탄력적입찰과 경매입찰의 차이점을 알려주세요. VAATZ에서 어떻게 진행하나요?',
    ai: '<p><strong>탄력적입찰</strong>과 <strong>경매입찰</strong>은 모두 VAATZ 입찰 모듈에서 지원하는 방식이지만, 목적과 운영 방식이 다릅니다.</p><p><strong>탄력적입찰 (Flexible Bidding)</strong><br>입찰 기간 중 협력사가 가격을 수정·재제출할 수 있는 방식입니다. 복잡한 기술 사양이나 원재료 변동이 큰 품목에 적합하며, 구매팀이 중간 집계 가격을 확인하고 추가 제출 기회를 부여할 수 있습니다.<br>VAATZ 입찰관리 → 입찰 생성 → 유형: <b>탄력적</b> 선택 → 제출 횟수 제한 설정 (기본 3회)</p><p><strong>경매입찰 (Reverse Auction)</strong><br>지정된 시간 내에 협력사들이 실시간으로 낮은 가격을 경쟁하는 방식입니다. 단순 규격 품목, 가격 경쟁이 명확한 품목에 효과적입니다.<br>VAATZ 입찰관리 → 입찰 생성 → 유형: <b>경매(역경매)</b> 선택 → 경매 시간(분) 설정 → 개시가 입력</p><p><strong>선택 기준 요약:</strong><br>• 기술 협의 필요 → 탄력적입찰<br>• 가격 단순 비교 → 경매입찰<br>• 50억원 초과 → 구매위원회 승인 후 방식 결정</p>',
    sources: ['입찰관리_운영지침_v3.pdf', 'VAATZ_입찰모듈_매뉴얼.pdf', '구매업무규정_제38조.pdf']
  },
  '품질 5스타 평가기준': {
    user: '품질 5스타 평가기준을 전체적으로 설명해주세요. 등급별 기준이 궁금합니다.',
    ai: '<p><strong>품질 5스타 제도</strong>는 협력사의 품질 역량을 5단계(1~5등급)로 평가하는 현대·기아 고유의 협력사 품질 관리 체계입니다.</p><p><strong>등급별 기준:</strong></p><p>1등급 (기본): 품질경영시스템 미보유 또는 신규 등록 업체. 기본 납품 자격만 충족.<br>2등급 (양호): ISO 9001 인증 보유, 최근 1년간 중대 품질 사고 0건.<br>3등급 (우수): ISO 9001 + 자체 품질 개선 프로그램 운영, 공정능력지수(Cpk) 1.33 이상.<br>4등급 (탁월): IATF 16949 권장, SPC 관리 체계 구축, 필드 클레임률 0.05% 이하.<br>5등급 (최우수): IATF 16949 필수, 무결점 납입 실적 연속 2년, 현장 심사 통과 필수.</p>',
    sources: ['품질_5스타_운영기준_v4.pdf', '협력사_평가_가이드_2025.xlsx', '5스타_현장심사_체크리스트.pdf']
  },
  'VAATZ 구매요청 생성': {
    user: 'VAATZ에서 구매요청서를 생성하는 방법을 알려주세요.',
    ai: '<p>VAATZ에서 구매요청서를 생성하는 절차를 안내해 드리겠습니다.</p><p><strong>1단계: 구매요청 메뉴 진입</strong><br>VAATZ 메인화면 → 구매관리 → 구매요청 → [신규 요청] 버튼 클릭</p><p><strong>2단계: 기본 정보 입력</strong><br>요청 유형(일반구매/긴급구매), 소요 부서, 납기 희망일, 예산 코드를 입력합니다. 예산 코드는 SAP 연동으로 자동 검증됩니다.</p><p><strong>3단계: 품목 정보 등록</strong><br>품목코드(자재코드)로 검색하거나 직접 입력합니다. 수량, 단위, 희망 단가를 기재합니다. BOM 연동 품목은 자동으로 규격이 입력됩니다.</p><p><strong>4단계: 첨부 서류</strong><br>견적서, 기술 사양서 등 필요 서류를 첨부합니다. 5천만원 초과 건은 비교견적서(3사 이상)가 필수입니다.</p><p><strong>5단계: 결재 요청</strong><br>[결재 요청] 버튼을 클릭하면 결재 라인이 자동 설정됩니다. 팀장 → 실장 → 본부장 순으로 결재됩니다(금액별 전결 기준 적용).</p>',
    sources: ['VAATZ_사용자매뉴얼_v7.pdf', '구매요청_처리기준_2025.pdf']
  },
  '수의계약 사유서 작성': {
    user: '수의계약 사유서 작성법과 필수 포함 항목을 알려주세요.',
    ai: '<p><strong>수의계약 사유서</strong>는 경쟁입찰 없이 특정 업체와 직접 계약을 체결할 때 그 정당성을 입증하기 위해 작성하는 문서입니다.</p><p><strong>필수 포함 항목:</strong></p><p>① <strong>계약 개요</strong>: 계약 건명, 예상 금액, 계약 기간, 대상 업체명 및 사업자번호<br>② <strong>수의계약 사유</strong>: 구매업무규정 제31조에 해당하는 사유를 구체적으로 기재<br> - 특허권, 실용신안권 등 독점적 권리를 보유한 경우<br> - 시급한 생산 차질 방지를 위해 긴급 조달이 필요한 경우<br> - 기존 설비와의 호환성이 필수적인 경우<br>③ <strong>업체 적격성</strong>: 해당 업체가 적합한 근거 (5스타 등급, 과거 납품 실적 등)<br>④ <strong>가격 적정성</strong>: 시장가 비교표, 과거 거래 단가 대비 변동률, 원가 분석표</p><p>양식은 VAATZ → 계약관리 → 양식함에서 <strong>"FM-PU-042 수의계약사유서"</strong>를 다운받으실 수 있습니다.</p>',
    sources: ['구매업무규정_제31조.pdf', '수의계약_사유서_양식(FM-PU-042).docx', '계약관리_업무표준.pdf']
  },
  '해외구매 환율 적용': {
    user: '해외구매 시 환율 적용 기준과 환율 변동 리스크 관리 방법을 알려주세요.',
    ai: '<p><strong>해외구매 환율 적용 기준</strong>은 구매업무규정 제45조 및 글로벌 구매 운영지침에 따라 다음과 같이 운영됩니다.</p><p><strong>환율 적용 원칙:</strong><br>발주서 생성 시점의 한국은행 고시 매매기준율(오전 9시 기준)이 자동 적용됩니다. VAATZ 글로벌 구매 모듈에서 실시간으로 반영되며, 결제 시점 환율과의 차이는 분기별 정산 프로세스에서 조정합니다.</p><p><strong>환율 변동 리스크 관리:</strong></p><p>① <strong>환헤지</strong>: 건당 10억원 초과 해외구매 건은 재무팀과 협의하여 선물환 계약 체결 권장<br>② <strong>가격 조정 조항</strong>: 장기 계약(1년 이상) 시 환율 변동폭 ±5% 초과 시 가격 재협상 조항 삽입<br>③ <strong>통화 분산</strong>: 단일 통화 의존도가 총 해외구매의 60%를 초과하지 않도록 관리</p><p>자세한 내용은 글로벌 구매 운영지침 제3장 환율관리 부분을 참고하시기 바랍니다.</p>',
    sources: ['글로벌_구매_운영지침_v3.pdf', '구매업무규정_제45조.pdf', '환율리스크_관리매뉴얼.pdf']
  },
  '협력사 긴급 거래정지 절차': {
    user: '협력사 긴급 거래정지 절차와 조치 사항을 알려주세요.',
    ai: '<p>협력사 긴급 거래정지는 구매업무규정 제52조에 따라 다음 절차로 진행합니다.</p><p><strong>즉시 조치 (D-day)</strong><br>① 거래정지 사유 발생 확인 (품질 사고, 납품 불이행, 계약 위반 등)<br>② 팀장 보고 → 구매본부장 긴급 승인 요청<br>③ VAATZ → 공급업체 관리 → 거래상태 → "임시 거래정지" 처리<br>④ 해당 협력사 발행 예정 발주서 일괄 보류</p><p><strong>대체 공급 확보 (D+1~3)</strong><br>① 대체 협력사 풀에서 긴급 RFQ 발송 (3사 이상 권장)<br>② 긴급구매 전결 기준 적용 (생산 차질 방지 우선)<br>③ 원가 비교표 작성 및 팀장 전결</p><p><strong>정식 거래정지 처리 (D+5~7)</strong><br>구매위원회 안건 상정 → 심의 → 영구 거래정지 또는 조건부 복원 결정. 법무팀 협의하여 손해배상 청구 여부 검토.</p>',
    sources: ['구매업무규정_제52조.pdf', '협력사거래정지_처리절차.pdf', 'VAATZ_공급업체관리_매뉴얼.pdf']
  },
  '반도체 부품 납기 지연 대응': {
    user: '반도체 부품 납기가 지연될 때 어떻게 대응해야 하나요?',
    ai: '<p>반도체 부품 납기 지연 대응 절차는 생산 차질 심각도에 따라 단계별로 진행합니다.</p><p><strong>단기 대응 (24시간 이내)</strong><br>① 납기 지연 사유 및 예상 납기일 공식 확인 (이메일·서면)<br>② 생산팀·품질팀과 현재 재고 및 생산 가용 일수 공유<br>③ VAATZ 물류 현황 → 입고 예정 현황에서 대체 재고 조회</p><p><strong>중기 대응 (3~7일)</strong><br>① 동일 스펙 대체 부품 검토: 글로벌 소싱팀 협의, 반도체구매팀 브로커 네트워크 활용<br>② 기존 협력사 증산 요청 (초과 납품 인센티브 협의)<br>③ 생산 일정 조정: 생산기획팀과 연계, 이슈 BOM 외 대체 생산 라인 조정</p><p><strong>재발 방지</strong><br>반도체 핵심 부품은 최소 12주 안전재고 유지 권장. 연 2회 공급망 취약성 점검(SRP 리스크 등급 관리).</p>',
    sources: ['반도체구매_리스크관리지침.pdf', '납기지연_대응표준_v2.pdf', '공급망리스크_체크리스트.xlsx']
  },
  '구매위원회 안건 작성법': {
    user: '구매위원회 안건 작성 방법과 제출 기한을 알려주세요.',
    ai: '<p>구매위원회는 50억원 초과 구매, 수의계약, 협력사 등록·거래정지 등 주요 사항을 심의·의결합니다.</p><p><strong>안건 제출 기한</strong><br>위원회 개최일 5영업일 전까지 구매디지털추진팀(위원회 사무국)에 제출</p><p><strong>안건 구성 요소 (FM-PU-011 양식 참고)</strong></p><p>① <b>안건 개요</b>: 안건명, 금액, 상대방, 계약 기간<br>② <b>추진 경위</b>: 경쟁입찰/수의계약 선택 사유, 업체 선정 근거<br>③ <b>비교 검토</b>: 견적 비교표, 기존 계약 대비 단가 변동, 원가 분석표<br>④ <b>기대 효과</b>: 원가 절감액, 품질 향상, 납기 단축 등 정량 지표<br>⑤ <b>첨부 서류</b>: 견적서 원본, 사양서, 업체 프로파일, 보안 적격 확인서</p><p><strong>주의 사항</strong><br>금액 산정 시 부가세 포함 여부 명기, 외화 계약은 기준 환율 명시 필수.</p>',
    sources: ['구매위원회_운영규정.pdf', '안건작성_양식(FM-PU-011).docx', '구매업무규정_제60조.pdf']
  },
  'SAP MM 발주서 정정 방법': {
    user: 'SAP MM 모듈에서 이미 발행된 발주서를 정정하는 방법을 알려주세요.',
    ai: '<p>SAP MM에서 발주서(PO) 정정은 상태에 따라 처리 방식이 다릅니다.</p><p><strong>미납품 상태 정정 (ME22N)</strong><br>① T-code: ME22N → 발주서 번호 입력 → 해당 라인 선택<br>② 변경 가능 항목: 수량, 납기일, 단가(가격 변동 사유 코드 필수), 납품처<br>③ 저장 시 <b>변경 이력</b>이 자동 기록됨 (감사 추적 보장)<br>④ 단가 변경은 구매팀장 재결재 필요 (5% 초과 변동 시)</p><p><strong>부분 납품 후 정정</strong><br>납품 완료 수량은 역전환 불가 → 잔여 수량에 한해 정정. 초과 납품분은 반품 처리(MIGO) 후 신규 발주.</p><p><strong>결재 완료 후 긴급 취소</strong><br>구매팀장 승인 → T-code ME22N → 삭제 표시(L) → 협력사에 공식 취소 통보 필수. 법적 분쟁 방지를 위해 협력사 수신 확인서 보관.</p>',
    sources: ['SAP_MM_사용자매뉴얼_v5.pdf', 'VAATZ_SAP연동_가이드.pdf', '발주서관리_업무표준.pdf']
  },
  '5스타 현장심사 준비 체크리스트': {
    user: '5스타 현장심사 전에 준비해야 할 사항을 체크리스트 형식으로 알려주세요.',
    ai: '<p>품질 5스타 현장심사는 서면 심사 통과 후 현장 방문으로 진행됩니다. 다음 체크리스트를 준비하세요.</p><p><strong>서류 준비 (심사 2주 전)</strong><br>☑ 품질경영시스템 인증서 (IATF 16949 / ISO 9001) 원본<br>☑ 최근 1년 내부 감사 보고서<br>☑ 불량률·클레임 추이 그래프 (월별)<br>☑ SPC(통계적 공정관리) 차트 및 Cpk 분석 결과<br>☑ 협력사 2차 벤더 관리 현황표</p><p><strong>현장 준비 (심사 3일 전)</strong><br>☑ 생산 공정 흐름도(Flow Chart) 최신 버전 게시<br>☑ 품질 이상 발생 시 조치 절차(4D 레포트) 이해 교육<br>☑ 측정 장비 교정 기록 최신화<br>☑ 5S 현장 청결 점검</p><p><strong>심사 당일</strong><br>☑ 심사원 안내 담당자 지정 (품질 팀장급)<br>☑ 불합격 항목 즉시 시정 계획서 작성 준비<br>심사 결과는 통보 후 30일 이내 확정됩니다.</p>',
    sources: ['5스타_현장심사_체크리스트.pdf', '품질_5스타_운영기준_v4.pdf', '현장심사_준비가이드_2025.pdf']
  },
  '입찰 심사위원 선정 기준': {
    user: '입찰 심사위원 선정 기준과 제척·기피 규정을 알려주세요.',
    ai: '<p>입찰 심사위원 구성은 구매업무규정 제38조 및 입찰관리 운영지침에 따릅니다.</p><p><strong>심사위원 구성 원칙</strong><br>- 내부 위원: 구매팀, 기술팀, 품질팀 각 1명 (총 3~5명 구성)<br>- 외부 위원: 50억원 초과 건은 외부 전문가 1명 이상 필수<br>- 위원장: 구매본부장 또는 위임받은 팀장급</p><p><strong>제척 사유 (당연 배제)</strong><br>① 입찰 참여 업체의 임직원·친족<br>② 해당 건 입찰 서류 작성에 관여한 자<br>③ 최근 3년 내 입찰 업체로부터 금품·향응을 수수한 사실이 있는 자</p><p><strong>기피 신청</strong><br>입찰 참여 업체는 특정 심사위원에 대해 기피 신청 가능. 신청 사유는 서면으로 제출하며, 위원장이 타당성 판단. 심사위원 명단은 심사 종료 후 공개합니다.</p>',
    sources: ['입찰관리_운영지침_v3.pdf', '구매업무규정_제38조.pdf', '심사위원_선정기준.pdf']
  },
  '협력사 가격 분쟁 해결 절차': {
    user: '협력사와 단가 인상 요청 관련 가격 분쟁이 발생했을 때 어떻게 처리해야 하나요?',
    ai: '<p>협력사 가격 분쟁은 대화·협의를 우선으로 하되, 단계별 에스컬레이션 체계를 따릅니다.</p><p><strong>1단계: 실무 협의 (D+0~5)</strong><br>① 협력사 원가 분석 자료 요청: 원재료 가격 추이, 인건비 변동, 생산성 지표<br>② 내부 원가 검토: 구매 원가팀과 독립적 원가 분석 실시<br>③ 적정 단가 밴드 설정 후 대안 제시 (예: 수량 조정, 납기 연장, 물류비 지원)</p><p><strong>2단계: 팀장급 협의 (D+5~10)</strong><br>단가 협의가 결렬될 경우 구매팀장·협력사 임원급 미팅 진행. 협의 결과는 반드시 서면으로 확인서 작성.</p><p><strong>3단계: 구매위원회 보고 및 중재 (D+10~)</strong><br>구매위원회 보고 → 협력사 전환 가능성 검토 → 조정 합의 또는 계약 조건 조정. 법적 분쟁은 법무팀 협의 후 대한상사중재원 중재 신청 가능.</p><p>공정거래법상 부당 단가 인하는 금지되어 있으므로 원가 근거 없이 일방적 단가 인하 요구는 불가합니다.</p>',
    sources: ['협력사_가격분쟁_처리기준.pdf', '원가관리_업무표준.pdf', '공정거래_자율준수_가이드.pdf']
  },
  '연간 구매 계획 수립 가이드': {
    user: '연간 구매 계획을 수립할 때 어떤 순서로 진행해야 하나요?',
    ai: '<p>연간 구매 계획은 통상 10~11월에 다음 해 계획을 수립합니다.</p><p><strong>수립 프로세스</strong></p><p>① <b>사업 계획 검토</b>: 생산기획팀으로부터 연간 생산 계획(모델별 대수, 사양 믹스) 수령<br>② <b>소요량 산출</b>: BOM 기반 부품별 소요량 × 단가 (이전 연도 실적 + 신차 BOM 반영)<br>③ <b>시장 환경 분석</b>: 원재료(철강·알루미늄·반도체) 가격 전망, 환율 전망, 물류비 추이<br>④ <b>원가 절감 목표 설정</b>: 전년 구매 총액 대비 목표 절감률 설정 (통상 2~5%)<br>⑤ <b>카테고리별 전략 수립</b>: 단가 재협상, 공급업체 통합, 신규 소싱 등 실행 전략<br>⑥ <b>구매위원회 보고</b>: 예산안 확정 후 재무팀 제출 및 경영진 승인</p><p>VAATZ → 구매기획 → 연간계획 메뉴에서 전년 실적 데이터와 BOM 연동 소요량을 바로 조회할 수 있습니다.</p>',
    sources: ['연간구매계획_수립가이드_2026.pdf', '구매기획_업무표준.pdf', 'BOM_연동_소요량산출_매뉴얼.pdf']
  },
  'BOM 변경 시 구매 영향 분석': {
    user: 'BOM이 변경되었을 때 구매팀에서 어떻게 영향을 분석하고 대응해야 하나요?',
    ai: '<p>BOM(Bill of Materials) 변경은 설계 부서에서 ECO(Engineering Change Order)를 발행하면 구매팀 자동 알림으로 시작됩니다.</p><p><strong>영향 분석 절차</strong></p><p>① <b>ECO 검토</b>: VAATZ → BOM 관리 → ECO 이력에서 변경 내용 확인. 삭제·추가·대체 부품 목록 확인<br>② <b>재고 영향 분석</b>: 폐지 부품의 기존 발주 잔량 및 창고 재고 파악. 과잉 재고 발생 시 반품 협의 또는 대체 사용처 탐색<br>③ <b>신규 부품 소싱</b>: 신규 추가 부품이 기등록 업체 품목이면 단가 협의 즉시 진행. 미등록 품목이면 신규 협력사 발굴 또는 기존 협력사 전환 심사<br>④ <b>납기 Risk 확인</b>: Lead Time이 긴 부품(반도체·주조품 등)은 변경 적용 일정 조율 요청<br>⑤ <b>원가 영향 보고</b>: 변경으로 인한 원가 증감액 산출 후 설계팀·재무팀에 공유</p>',
    sources: ['BOM변경_구매영향분석_절차.pdf', 'ECO_처리업무표준.pdf', 'VAATZ_BOM관리_매뉴얼.pdf']
  },
  '공정거래 자율준수 프로그램': {
    user: '공정거래 자율준수 프로그램(CP)이란 무엇이고 구매팀 적용 사항은 무엇인가요?',
    ai: '<p><strong>공정거래 자율준수 프로그램(CP, Compliance Program)</strong>은 기업이 공정거래 관련 법규를 자율적으로 준수하도록 내부 시스템을 갖추는 제도입니다.</p><p><strong>구매팀 주요 적용 사항</strong></p><p>① <b>부당 단가 인하 금지</b>: 원가 근거 없이 납품 단가를 일방적으로 낮추거나, 소급 적용 요구 금지. 하도급법 제4조 위반<br>② <b>기술 자료 유용 금지</b>: 협력사 제출 견적·도면·기술 자료를 허락 없이 타 업체에 제공하거나 자체 생산에 활용 금지<br>③ <b>납품 단가 조정 의무</b>: 원재료 가격이 10% 이상 상승하면 협력사 요청 시 단가 재협의 의무(하도급법 제16조의2)<br>④ <b>서면 계약 의무</b>: 구두 계약 후 사후 서면 발행 금지, 발주서 발행 전 업무 지시 금지</p><p>구매팀은 연 1회 CP 교육 이수가 의무이며, 위반 사항 발견 시 CP 담당 부서(법무팀)에 즉시 보고해야 합니다.</p>',
    sources: ['공정거래_자율준수_가이드_2026.pdf', '하도급법_핵심포인트.pdf', 'CP_교육교재_v3.pdf']
  }
};

document.querySelectorAll('.hi').forEach(h=>{
  h.addEventListener('click',function(){
    document.querySelectorAll('.hi').forEach(x=>x.classList.remove('on'));
    this.classList.add('on');
    const title = this.querySelector('.hi-t').textContent;
    const conv = chatConversations[title];
    if(conv && !conv.existing){
      sv('ch');
      const cc = document.querySelector('#v-ch .cc');
      cc.innerHTML = '';
      // User message
      const uMsg = document.createElement('div');
      uMsg.className = 'msg msg-u';
      uMsg.innerHTML = '<div class="msg-b">'+escHtml(conv.user)+'</div>';
      cc.appendChild(uMsg);
      // AI response
      const aMsg = document.createElement('div');
      aMsg.className = 'msg msg-a';
      let srcHtml = '';
      if(conv.sources){
        srcHtml = '<div class="sr2"><div class="sr2-h" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display===\'none\'?\'block\':\'none\'"><div class="sr2-hl"><div class="sr2-hl-ic">📎</div>참조 문서</div><div class="sr2-hr"><span class="sr2-cnt">'+conv.sources.length+'</span><span>· 클릭하여 원문 확인</span></div></div><div class="sr2-list">';
        conv.sources.forEach(function(s,i){
          var ext = s.split('.').pop().toLowerCase();
          var typeCls = {pdf:'t-pdf',xlsx:'t-xls',docx:'t-doc',hwp:'t-doc',pptx:'t-ppt'}[ext]||'t-pdf';
          var typeLbl = ext.toUpperCase();
          var rel = (0.95 - i*0.06).toFixed(2);
          srcHtml += '<div class="sr2-c" onclick="openSourceFromCitation('+((i%5)+1)+')"><div class="sr2-c-n">'+(i+1)+'</div><div class="sr2-c-i"><div class="sr2-c-nm">'+s+' <span class="sr2-c-tp '+typeCls+'">'+typeLbl+'</span></div><div class="sr2-c-mt"><span>참조 페이지</span><span class="sr2-c-rel">관련도 '+rel+'</span></div></div><span class="sr2-c-go">→</span></div>';
        });
        srcHtml += '</div></div>';
      }
      // Build a simple RAG pipeline for history items too
      var ragHtml = '<div class="rag-pipeline"><div class="rag-hd"><div class="rag-hd-l"><div class="rag-hd-ic">🧠</div>검색 및 답변 생성 프로세스</div><div class="rag-conf"><div class="rag-conf-dot"></div>CONFIDENCE <span class="rag-conf-v">'+(90-(conv.sources||[]).length)+'%</span></div></div><div class="rag-steps"><div class="rag-step"><div class="rag-step-ic">✓</div><div class="rag-step-tx">질의 임베딩 — 키워드 추출</div><div class="rag-step-mt">128-dim</div></div><div class="rag-step"><div class="rag-step-ic">✓</div><div class="rag-step-tx">권한 확인 — 전체 열람</div><div class="rag-step-mt">3 levels</div></div><div class="rag-step"><div class="rag-step-ic">✓</div><div class="rag-step-tx">Vector 검색 — <b>'+((conv.sources||[]).length)+'개 핵심 청크</b> 선별</div><div class="rag-step-mt">cosine ≥ 0.74</div></div></div></div>';
      aMsg.innerHTML = '<div class="aa"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="white" opacity=".9"/></svg></div><div class="ab"><div class="ah"><span class="an">VAATZ AI</span><span class="at0">RAG · '+((conv.sources||[]).length)+'개 문서 인용</span><span class="at0" style="background:var(--g-dim);color:var(--g)">● 신뢰도 '+(90-(conv.sources||[]).length)+'%</span></div>'+ragHtml+'<div class="ai-tx">'+conv.ai+'</div>'+srcHtml+'<div class="ai-ac"><button class="ai-a" onclick="this.classList.toggle(\'active\')">👍 도움됨</button><button class="ai-a" onclick="this.classList.toggle(\'active\')">👎 부정확</button><button class="ai-a" onclick="copyAnswer(this)">📋 복사</button><button class="ai-a">🔄 재생성</button></div></div>';
      cc.appendChild(aMsg);
      scrollChat();
    } else {
      sv('ch');
    }
  });
});

// ─── Follow-up questions ───
document.querySelectorAll('.fu-c').forEach(btn=>{
  btn.addEventListener('click',function(){
    textarea.value=this.textContent.replace(/^[^\s]+\s/,'');
    autoResize(textarea);
    updateSendBtn();
    textarea.focus();
  });
});

// ─── Welcome card quick actions ───
document.querySelectorAll('.wt-i').forEach(btn=>{
  btn.addEventListener('click',function(){
    sv('ch');
    textarea.value=this.textContent.replace(/"/g,'');
    autoResize(textarea);
    updateSendBtn();
    textarea.focus();
  });
});

// ─── Data Upload Request Modal ───
function reqOpen(){
  if(typeof window.__reactOpenRequest==='function') window.__reactOpenRequest();
  document.getElementById('rqM').classList.add('sh');
}
function reqClose(){
  if(typeof window.__reactCloseRequest==='function') window.__reactCloseRequest();
  document.getElementById('rqM').classList.remove('sh');
  document.getElementById('reqFileList').innerHTML='';
}
function simReqUpload(){
  const nms=['구매전략_보고서_2026.pdf','협력사_평가기준_v3.xlsx','수의계약_가이드_최종.docx','품질검수_체크리스트.hwp','입찰운영_개정안.pdf'];
  const n=nms[Math.floor(Math.random()*nms.length)];
  const s=(Math.random()*8+0.5).toFixed(1);
  const list=document.getElementById('reqFileList');
  const el=document.createElement('div');
  el.className='req-file-item';
  el.innerHTML='<span>📄 '+n+' ('+s+' MB)</span><button class="req-file-rm" onclick="this.parentElement.remove()">✕</button>';
  el.style.opacity='0';
  list.appendChild(el);
  requestAnimationFrame(()=>{el.style.transition='all .25s';el.style.opacity='1'});
}
function submitReq(){
  const team=document.getElementById('reqTeamSel').value;
  if(!team){toast('승인 요청 팀을 선택해주세요.','⚠️',3000);return}
  const files=document.querySelectorAll('#reqFileList .req-file-item');
  if(!files.length){toast('업로드할 파일을 첨부해주세요.','⚠️',3000);return}
  toast(`${team}에 업로드 요청이 전송되었습니다. 관리자 승인 후 지식 베이스에 반영됩니다.`,'✅');
  reqClose();
}

// ─── DB Browser ───
function openDB(tab){
  if(typeof window.__reactOpenDB==='function') window.__reactOpenDB();
  document.getElementById('dbOv').classList.add('sh');
  switchDBTab(null,tab);
  const si=document.getElementById('dbSearchInput');
  if(si){si.value='';si.focus()}
}
function closeDB(){
  if(typeof window.__reactCloseDB==='function') window.__reactCloseDB();
  document.getElementById('dbOv').classList.remove('sh');
}
function switchDBTab(btn,tab){
  document.querySelectorAll('.db-tab').forEach(t=>t.classList.remove('on'));
  if(btn)btn.classList.add('on');
  else document.querySelectorAll('.db-tab').forEach(t=>{
    if(t.textContent.includes({term:'용어',std:'업무',star:'5스타',bid:'입찰'}[tab]||''))t.classList.add('on');
  });
  ['term','std','star','bid'].forEach(t=>{
    const e=document.getElementById('db-'+t);
    if(e)e.style.display=t===tab?'flex':'none';
  });
  const titles={term:'📖 용어사전',std:'📋 업무표준',star:'⭐ 품질 5스타',bid:'🏷️ 입찰관리'};
  document.getElementById('dbTitle').textContent=titles[tab]||'';
  // Clear search
  const si=document.getElementById('dbSearchInput');
  if(si)si.value='';
  filterDB('');
}
function filterDB(query){
  const q=query.toLowerCase().trim();
  document.querySelectorAll('.db-list').forEach(list=>{
    if(list.style.display==='none') return;
    list.querySelectorAll('.db-item').forEach(item=>{
      const text=(item.querySelector('.db-item-nm')?.textContent||'')+(item.querySelector('.db-item-desc')?.textContent||'');
      item.style.display=text.toLowerCase().includes(q)||!q?'flex':'none';
    });
  });
}

// ─── Sidebar menu active ───
document.querySelectorAll('.sb-nav .sb-i').forEach(b=>{
  b.addEventListener('click',function(){
    document.querySelectorAll('.sb-nav .sb-i').forEach(x=>x.classList.remove('on'));
    this.classList.add('on');
  });
});

// ─── File Drag & Drop ───
let dragEl=null;
function fDragStart(e,el){dragEl=el;el.classList.add('dragging');e.dataTransfer.effectAllowed='move'}
function fDragOver(e,fh){e.preventDefault();fh.classList.add('drop-target')}
function fDragLeave(fh){fh.classList.remove('drop-target')}
function fDrop(e,fh){
  e.preventDefault();
  fh.classList.remove('drop-target');
  if(!dragEl) return;
  const ds=fh.nextElementSibling;
  if(ds){
    dragEl.classList.remove('dragging');
    ds.appendChild(dragEl);
    if(ds.classList.contains('cl')){
      ds.classList.remove('cl');
      ds.style.maxHeight=ds.scrollHeight+'px';
      const ar=fh.querySelector('.ft-ar');
      if(ar) ar.classList.add('op');
    } else {
      ds.style.maxHeight=ds.scrollHeight+'px';
    }
    updFC();
    toast('파일이 폴더로 이동되었습니다.','📁',2000);
  }
  dragEl=null;
}
document.addEventListener('dragend',()=>{if(dragEl){dragEl.classList.remove('dragging');dragEl=null}});

// ─── Upload Sim ───
function simUpload(){
  const nms=['견적서_20260208.pdf','납품실적_요약.xlsx','계약서_초안.docx','품질보고서_Q1.pdf','협력사_목록.xlsx','발주서_template.docx'];
  const icons={'pdf':'📄','xlsx':'📊','docx':'📘','hwp':'📝'};
  const n=nms[Math.floor(Math.random()*nms.length)];
  const ext=n.split('.').pop();
  const ic=icons[ext]||'📄';
  const s=(Math.random()*3+.1).toFixed(1);
  const el=document.createElement('div');
  el.className='fl-file highlight-new';
  el.draggable=true;
  el.setAttribute('ondragstart','fDragStart(event,this)');
  el.innerHTML=`<input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="fl-file-ic">${ic}</span><div class="fl-file-info"><div class="fl-file-nm">${n}</div><div class="fl-file-meta">${s} MB · 방금</div></div>`;
  el.style.opacity='0';
  document.getElementById('uncategorized').appendChild(el);
  requestAnimationFrame(()=>{el.style.transition='all .25s';el.style.opacity='1'});
  updFC();
  toast(`${n} 업로드 완료`,'☁️',2500);
}

// ─── Folder + Delete ───
function newFolder(){
  const n=prompt('새 폴더 이름:');
  if(!n) return;
  const id='f'+Date.now();
  const h=`<div class="ft-f"><div class="ft-fh" onclick="tf(this)" ondragover="fDragOver(event,this)" ondragleave="fDragLeave(this)" ondrop="fDrop(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="ft-ar op">▶</span><span class="ft-ic">📁</span><span class="ft-nm">${escHtml(n)}</span></div><div class="ft-ds" id="${id}" style="max-height:200px"></div></div>`;
  const sec=document.getElementById('fileSec');
  const u=sec.querySelector('#uncategorized');
  u.insertAdjacentHTML('beforebegin',h);
  bindFolderCheckboxes();
  toast(`📁 "${n}" 폴더가 생성되었습니다.`,'📁',2500);
}
function delSelected(){
  const ch=document.querySelectorAll('#rp .fl-chk:checked');
  if(!ch.length){toast('삭제할 항목을 선택해주세요.','⚠️',2500);return}
  if(!confirm(ch.length+'개 항목을 삭제하시겠습니까?')) return;
  let count=0;
  ch.forEach(c=>{
    const it=c.closest('.fl-file')||c.closest('.ft-f');
    if(it){
      count++;
      it.style.opacity='0';
      it.style.transform='translateX(8px)';
      setTimeout(()=>it.remove(),200);
    }
  });
  setTimeout(()=>{updFC();toast(`${count}개 항목이 삭제되었습니다.`,'🗑️',2500)},250);
}
function updFC(){
  const n=document.querySelectorAll('#rp .fl-file').length;
  const e=document.getElementById('rpCnt');
  if(e) e.textContent=n;
  const s=document.getElementById('rpStats');
  if(s) s.textContent='총 '+n+'개';
}

// ─── Folder checkbox → auto-check children ───
function bindFolderCheckboxes(){
  document.querySelectorAll('#rp .ft-fh > .fl-chk').forEach(chk=>{
    chk.onchange=function(){
      const folder=this.closest('.ft-f');
      if(!folder) return;
      const ds=folder.querySelector('.ft-ds');
      if(!ds) return;
      ds.querySelectorAll('.fl-chk').forEach(c=>{c.checked=this.checked});
    };
  });
}
bindFolderCheckboxes();

// ─── Admin team checkbox → auto-check children ───
function bindAdminTeamCheckboxes(){
  document.querySelectorAll('#p-req .team-chk').forEach(chk=>{
    chk.onchange=function(){
      const folder=this.closest('.ft-f');
      if(!folder) return;
      const ds=folder.querySelector('.ft-ds');
      if(!ds) return;
      ds.querySelectorAll('.req-chk').forEach(c=>{c.checked=this.checked});
    };
  });
}
bindAdminTeamCheckboxes();

// ─── Request approve/reject ───
function appReq(b){
  const c=b.closest('.req-card');
  c.classList.add('done');
  c.querySelector('.req-acts').innerHTML='<span class="bd bd-g">✅ 승인됨</span>';
  updatePendingCount();
  toast('요청이 승인되었습니다.','✅',2000);
}
function rejReq(b){
  const c=b.closest('.req-card');
  c.classList.add('done');
  c.querySelector('.req-acts').innerHTML='<span class="bd bd-h">보완 요청됨</span>';
  updatePendingCount();
  toast('요청이 보완 요청되었습니다.','❌',2000);
}

function batchApprove(){
  const teamChks=document.querySelectorAll('.team-chk:checked');
  const reqChks=document.querySelectorAll('.req-chk:checked');
  if(!teamChks.length&&!reqChks.length){toast('승인할 팀 또는 요청을 선택해주세요.','⚠️',2500);return}
  let count=0;
  teamChks.forEach(c=>{
    const f=c.closest('.ft-f');
    if(f){
      f.querySelectorAll('.req-card:not(.done)').forEach(cd=>{
        cd.classList.add('done');count++;
        const a=cd.querySelector('.req-acts');
        if(a)a.innerHTML='<span class="bd bd-g">✅ 승인됨</span>';
      });
      c.checked=false;
    }
  });
  reqChks.forEach(c=>{
    const card=c.closest('.req-card');
    if(card&&!card.classList.contains('done')){
      card.classList.add('done');count++;
      const a=card.querySelector('.req-acts');
      if(a)a.innerHTML='<span class="bd bd-g">✅ 승인됨</span>';
    }
    c.checked=false;
  });
  if(count>0){toast(`${count}건 일괄 승인 완료`,'✅');updatePendingCount()}
}

function batchReject(){
  const teamChks=document.querySelectorAll('.team-chk:checked');
  const reqChks=document.querySelectorAll('.req-chk:checked');
  if(!teamChks.length&&!reqChks.length){toast('보완 요청할 팀 또는 요청을 선택해주세요.','⚠️',2500);return}
  if(!confirm('선택한 요청을 일괄 보완 요청하시겠습니까?')) return;
  let count=0;
  teamChks.forEach(c=>{
    const f=c.closest('.ft-f');
    if(f){
      f.querySelectorAll('.req-card:not(.done)').forEach(cd=>{
        cd.classList.add('done');count++;
        const a=cd.querySelector('.req-acts');
        if(a)a.innerHTML='<span class="bd bd-h">보완 요청됨</span>';
      });
      c.checked=false;
    }
  });
  reqChks.forEach(c=>{
    const card=c.closest('.req-card');
    if(card&&!card.classList.contains('done')){
      card.classList.add('done');count++;
      const a=card.querySelector('.req-acts');
      if(a)a.innerHTML='<span class="bd bd-h">보완 요청됨</span>';
    }
    c.checked=false;
  });
  if(count>0){toast(`${count}건 일괄 보완 요청 완료`,'❌');updatePendingCount()}
}

function updatePendingCount(){
  const pending=document.querySelectorAll('#p-req .req-card:not(.done)').length;
  const badge=document.querySelector('.atb span[style*="background:var(--accent)"]');
  if(badge) badge.textContent=pending;
  // Update team-level badges
  document.querySelectorAll('#p-req .ft-f').forEach(f=>{
    const p=f.querySelectorAll('.req-card:not(.done)').length;
    const badge=f.querySelector('.ft-fh span[style*="margin-left:auto"]');
    if(badge){
      if(p>0){badge.style.background='var(--a-dim)';badge.style.color='var(--a)';badge.textContent='대기 '+p;}
      else{badge.style.background='var(--g-dim)';badge.style.color='var(--g)';badge.textContent='완료';}
    }
  });
}

// ─── Drop zones ───
const dz=document.getElementById('dropZone');
if(dz){
  dz.ondragover=e=>{e.preventDefault();dz.classList.add('drag')};
  dz.ondragleave=()=>dz.classList.remove('drag');
  dz.ondrop=e=>{e.preventDefault();dz.classList.remove('drag');simUpload()};
}
const rdz=document.getElementById('reqDropZone');
if(rdz){
  rdz.ondragover=e=>{e.preventDefault();rdz.style.borderColor='var(--accent)';rdz.style.background='var(--accent-dim)'};
  rdz.ondragleave=()=>{rdz.style.borderColor='';rdz.style.background=''};
  rdz.ondrop=e=>{e.preventDefault();rdz.style.borderColor='';rdz.style.background='';simReqUpload()};
}

// ─── Keyboard Shortcuts ───
document.addEventListener('keydown',e=>{
  // Esc to close modals
  if(e.key==='Escape'){
    const commOv=document.getElementById('commOv');
    if(commOv&&commOv.classList.contains('sh')){closeComm();return}
    const qWriteM=document.getElementById('qWriteM');
    if(qWriteM&&qWriteM.classList.contains('sh')){closeQuestionWrite();return}
    const mpOv=document.getElementById('mpOv');
    if(mpOv&&mpOv.classList.contains('sh')){closeMypage();return}
    const rqM=document.getElementById('rqM');
    if(rqM&&rqM.classList.contains('sh')){reqClose();return}
    const dbOv=document.getElementById('dbOv');
    if(dbOv&&dbOv.classList.contains('sh')){closeDB();return}
    const ao=document.getElementById('ao');
    if(ao&&ao.classList.contains('sh')){ca();return}
  }
  // Ctrl+K for quick search
  if((e.ctrlKey||e.metaKey)&&e.key==='k'){
    e.preventDefault();
    textarea.focus();
  }
});

// ─── Feedback buttons (toggle active) ───
document.querySelectorAll('.ai-a').forEach(btn=>{
  if(btn.textContent.includes('도움됨')||btn.textContent.includes('부정확')){
    btn.addEventListener('click',function(){
      const sibling=this.parentElement.querySelectorAll('.ai-a');
      if(this.textContent.includes('도움됨')){
        sibling[1]?.classList.remove('active');
      } else if(this.textContent.includes('부정확')){
        sibling[0]?.classList.remove('active');
      }
      this.classList.toggle('active');
      if(this.classList.contains('active')){
        toast(this.textContent.includes('도움됨')?'피드백 감사합니다!':'개선에 참고하겠습니다.','📝',2000);
      }
    });
  }
});

// ─── Toggle switches (prevent propagation issues) ───
document.querySelectorAll('.tg').forEach(tg=>{
  tg.addEventListener('click',function(e){
    e.stopPropagation();
    this.classList.toggle('on');
  });
});

// ─── Proto bar sync ───
document.querySelectorAll('.pfb').forEach((b,i)=>{
  b.addEventListener('click',function(){
    if(i===0) sv('wl');
    else if(i===1) sv('ch');
    else if(i===2) oa();
  });
});

// ─── v11: Notification System ───
function toggleNoti(){
  const p=document.getElementById('notiPanel');
  p.classList.toggle('sh');
}
function clearNoti(){
  document.querySelectorAll('.noti-item.unread').forEach(i=>i.classList.remove('unread'));
  document.getElementById('notiBadge').textContent='';
  toast('모든 알림을 읽음 처리했습니다.','🔔',2000);
}
function handleNotiClick(type){
  const item=event.currentTarget;
  item.classList.remove('unread');
  updateNotiBadge();
  document.getElementById('notiPanel').classList.remove('sh');
  if(type==='req'){oa();setTimeout(()=>{const t=document.querySelector('.atb');if(t)at(t,'p-req')},100)}
  else if(type==='sys'){oa();setTimeout(()=>{const tabs=document.querySelectorAll('.atb');tabs.forEach(t=>{if(t.textContent.includes('데이터'))at(t,'p-int')})},100)}
}
function updateNotiBadge(){
  const cnt=document.querySelectorAll('.noti-item.unread').length;
  document.getElementById('notiBadge').textContent=cnt||'';
}
// Close noti panel on outside click
document.addEventListener('click',e=>{
  const wrap=document.querySelector('.noti-wrap');
  if(wrap&&!wrap.contains(e.target)){document.getElementById('notiPanel').classList.remove('sh')}
});
// Add notification helper
function addNoti(icon,title,desc){
  const list=document.getElementById('notiList');
  const el=document.createElement('div');
  el.className='noti-item unread';
  el.onclick=function(){this.classList.remove('unread');updateNotiBadge()};
  el.innerHTML=`<span class="noti-item-ic">${icon}</span><div class="noti-item-body"><div class="noti-item-title">${title}</div><div class="noti-item-desc">${desc}</div><div class="noti-item-time">방금</div></div>`;
  list.insertBefore(el,list.firstChild);
  updateNotiBadge();
}

// ─── v11: External Knowledge Toggle ───
let webOn=false;
function toggleWeb(){
  webOn=!webOn;
  document.getElementById('webTg').classList.toggle('on',webOn);
  document.getElementById('webInd').classList.toggle('sh',webOn);
  toast(webOn?'🌐 외부지식 활용 ON — 웹 검색 결과를 AI 응답에 반영합니다.':'🔒 외부지식 OFF — 내부 데이터만 사용합니다.',webOn?'🌐':'🔒',2500);
}

// ─── v11: Mypage ───
function openMypage(){
  if(typeof window.__reactOpenMypage==='function') window.__reactOpenMypage();
  document.getElementById('mpOv').classList.add('sh');
  document.body.style.overflow='hidden';
}
function closeMypage(){
  if(typeof window.__reactCloseMypage==='function') window.__reactCloseMypage();
  document.getElementById('mpOv').classList.remove('sh');
  document.body.style.overflow='';
}
function mpTab(btn,id){
  document.querySelectorAll('.mp-tab').forEach(t=>t.classList.remove('on'));
  btn.classList.add('on');
  ['mp-t1','mp-t2','mp-t3'].forEach(t=>{const e=document.getElementById(t);if(e)e.style.display=t===id?'block':'none'});
}

// ─── v11: Enhanced approve/reject with notifications ───
const origAppReq=appReq;
appReq=function(b){
  origAppReq(b);
  const title=b.closest('.req-card').querySelector('.req-title')?.textContent||'문서';
  addNoti('✅','승인 완료',title+'이(가) 승인되어 지식 베이스에 반영됩니다.');
};
const origRejReq=rejReq;
rejReq=function(b){
  origRejReq(b);
  const title=b.closest('.req-card').querySelector('.req-title')?.textContent||'문서';
  addNoti('❌','요청 보완 요청',title+'이(가) 보완 요청되었습니다.');
};


// ─────────────────────────────────────────────────────
// §05  v26 커뮤니티 기본 구조 + 테마/캐릭터
//      openComm / commTab / voteQ 기초 선언
//      ※ 실제 커뮤니티 렌더링은 §15 V36이 담당
// ─────────────────────────────────────────────────────
// ─── Theme Toggle ───
function toggleTheme(){
  const html=document.documentElement;
  const cur=html.getAttribute('data-theme')||'dark';
  const next=cur==='dark'?'light':'dark';
  html.setAttribute('data-theme',next);
  document.getElementById('themeT').textContent=next==='dark'?'🌙':'☀️';
  toast(next==='light'?'☀️ 라이트 모드로 전환했습니다.':'🌙 다크 모드로 전환했습니다.',next==='light'?'☀️':'🌙',2000);
}

// ─── Community ───
function openComm(tab){
  document.getElementById('commOv').classList.add('sh');
  const tabs={qa:'ct-qa',hof:'ct-hof',lv:'ct-lv',char:'ct-char',shop:'ct-shop'};
  if(tab&&tabs[tab]){
    const idx={qa:0,hof:1,lv:2,char:3,shop:4}[tab]||0;
    commTab(document.querySelectorAll('.comm-tab')[idx],tabs[tab]);
  }
}
function closeComm(){document.getElementById('commOv').classList.remove('sh')}
function commTab(btn,id){
  document.querySelectorAll('.comm-tab').forEach(t=>t.classList.remove('on'));
  if(btn)btn.classList.add('on');
  ['ct-qa','ct-hof','ct-lv','ct-char','ct-shop'].forEach(t=>{const e=document.getElementById(t);if(e)e.style.display=t===id?'block':'none'});
}
function voteQ(btn){
  btn.classList.toggle('on');
  const n=btn.parentElement.querySelector('.qa-v-n');
  let v=parseInt(n.textContent);
  n.textContent=btn.classList.contains('on')?v+1:v-1;
}

// ─── Character ───
const accSlots = {hat:'accHat',face:'accFace',hand:'accHand',pet:'accPet',effect:'charEffect',bg:'charBg'};
const hatItems = ['🎩','👑','🎀','🎓','⛑️'];
const faceItems = ['🕶️','👓','😷','🎭','🤿'];
const petItems = ['🐱','🐶','🐦','🐉','🦄'];
const effectItems = ['⭐','💫','🔥','❄️','🎵'];
const bgItems = ['🌊','🌸','🏔️','🌌','🏭'];

function equipItem(slot,emoji){
  // Category-aware equip
  const cats={hat:hatItems,face:faceItems,pet:petItems,effect:effectItems,bg:bgItems};
  let cat=null;
  for(const[k,arr]of Object.entries(cats)){if(arr.includes(emoji)){cat=k;break}}
  if(cat){document.querySelectorAll('.inv-slot').forEach(s=>{const e=s.textContent.trim();if(cats[cat].includes(e))s.classList.remove('equipped')})}
  slot.classList.add('equipped');
  const targets={hat:'accHat',face:'accFace',pet:'accPet',effect:'charEffect',bg:'charBg'};
  if(cat&&targets[cat]){const el=document.getElementById(targets[cat]);if(el){el.textContent=emoji;el.style.display='block'}}
  toast(emoji+' 장착!','✨',1200);
}
function buyItem(el,emoji,name,price){
  if(el.classList.contains('owned'))return;
  if(confirm(name+'을(를) '+price+'pt로 구매하시겠습니까?')){
    el.classList.add('owned');
    el.querySelector('.shop-pr').textContent='✓ 보유';
    // Add to inventory
    var emptySlot = document.querySelector('.inv-slot.empty');
    if(emptySlot){
      emptySlot.classList.remove('empty');
      emptySlot.textContent = emoji;
      emptySlot.title = name;
      emptySlot.onclick = function(){ equipItem(this,emoji) };
    }
    toast(name+' 구매 완료! 인벤토리에서 장착하세요.','🎉',2000);
  }
}

// ─── Floating Character (draggable) ───
let charMenuOpen=false, isDragging=false, dragOff={x:0,y:0};
const fc=document.getElementById('floatChar');
if(fc){
  fc.addEventListener('mousedown',e=>{
    if(e.target.closest('.float-char-menu'))return;
    isDragging=false;
    dragOff={x:e.clientX-fc.getBoundingClientRect().left, y:e.clientY-fc.getBoundingClientRect().top};
    const onMove=ev=>{isDragging=true;fc.style.right='auto';fc.style.bottom='auto';fc.style.left=(ev.clientX-dragOff.x)+'px';fc.style.top=(ev.clientY-dragOff.y)+'px'};
    const onUp=()=>{document.removeEventListener('mousemove',onMove);document.removeEventListener('mouseup',onUp);if(!isDragging)toggleCharMenu()};
    document.addEventListener('mousemove',onMove);
    document.addEventListener('mouseup',onUp);
  });
}
function toggleCharMenu(){
  const b=document.getElementById('charBubble'),m=document.getElementById('charMenu');
  if(b)b.classList.remove('sh');
  charMenuOpen=!charMenuOpen;
  if(m)m.classList.toggle('sh',charMenuOpen);
}
function closeCharMenu(){charMenuOpen=false;const m=document.getElementById('charMenu');if(m)m.classList.remove('sh')}
function hideFloatChar(){
  document.getElementById('floatChar').classList.add('hidden');
  document.getElementById('floatShow').classList.add('sh');
  document.querySelector('.comm-side').style.bottom='80px';
  closeCharMenu();
}
function showFloatChar(){
  const f=document.getElementById('floatChar');f.classList.remove('hidden');
  f.style.right='24px';f.style.bottom='80px';f.style.left='';f.style.top='';
  document.getElementById('floatShow').classList.remove('sh');
  document.querySelector('.comm-side').style.bottom='150px';
}
function editBubbleMsg(){
  closeCharMenu();
  const msg=prompt('오늘의 한마디를 입력하세요!','오늘도 화이팅! 💪');
  if(msg){
    document.getElementById('charBubble').innerHTML=msg;
    document.getElementById('charBubble').classList.add('sh');
    setTimeout(()=>document.getElementById('charBubble').classList.remove('sh'),5000);
  }
}
// Character select
function pickChar(btn,emoji){
  document.querySelectorAll('.char-sel').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('charMain').textContent=emoji;
  document.getElementById('floatCharBody').textContent=emoji;
  document.getElementById('floatShow').textContent=emoji;
  toast(btn.title+' 선택!','✨',1200);
}
// Show bubble on load
const bubbleMsgs=['오늘도 화이팅! 💪','구매 지식 나누러 가요~','답변 작성하면 +15pt! 📝','이번 달 명예의 전당 도전! 🏆','오늘 컨디션 최고? 😊'];
setTimeout(()=>{const b=document.getElementById('charBubble');if(b){b.innerHTML=bubbleMsgs[Math.floor(Math.random()*bubbleMsgs.length)];b.classList.add('sh');setTimeout(()=>b.classList.remove('sh'),4000)}},2000);
document.addEventListener('click',e=>{if(!e.target.closest('.float-char'))closeCharMenu()});

// Fix equipItem for new char system
const origEquipItem = typeof equipItem === 'function' ? equipItem : null;

// Theme btn sync
const origToggle = toggleTheme;
toggleTheme = function(){
  origToggle();
  const tb=document.getElementById('themeBtn');
  const cur=document.documentElement.getAttribute('data-theme');
  if(tb)tb.textContent=cur==='light'?'☀️':'🌙';
};

// ─── Initial state ───
scrollChat();

// ─── Nickname Management (fixed in mypage) ───
let userNickname = '프로큐어히어로';
function saveNickname(){
  const input = document.getElementById('mpNickInput');
  const val = input.value.trim();
  if(!val){toast('닉네임을 입력해주세요.','⚠️',2500);return}
  if(val.length > 12){toast('닉네임은 12자 이내로 설정해주세요.','⚠️',2500);return}
  userNickname = val;
  document.getElementById('charNick').textContent = val;
  const commNick = document.getElementById('commNickDisplay');
  if(commNick) commNick.textContent = val;
  const qWriteNick = document.getElementById('qWriteNick');
  if(qWriteNick) qWriteNick.textContent = val;
  toast('닉네임이 "'+val+'"(으)로 변경되었습니다.','✅',2500);
}
function setNick(v){
  userNickname = v;
  document.getElementById('charNick').textContent = v;
}

// ─── Q&A Detail View ───
const qaData = {
  1: {
    title:'탄력적입찰에서 1회차 유찰 시 처리 절차가 궁금합니다',
    body:'안녕하세요. 입찰 업무 중 탄력적입찰 1회차에서 유찰이 발생했을 때 어떤 절차를 밟아야 하는지 궁금합니다. 구매업무규정 어디에 관련 내용이 있나요? 수의계약으로 전환하려면 어떤 조건이 필요한지도 알려주시면 감사하겠습니다.',
    cat:'입찰',author:'계약초보',authorLv:'Lv.1',time:'3일 전',hair:'#553C2E',suit:'#52A0A8',hat:'',
    answers:[
      {author:'프로큐어마스터',authorLv:'Lv.4',hair:'#8B4513',suit:'#4EAD7B',hat:'👑',body:'구매업무규정 제23조 4항에 따르면 1회차 유찰 시 참여 업체 확대 또는 수의계약 전환이 가능합니다. 실무적으로는 구매위원회 사전 승인을 받고 2회차를 진행하되, 업체 수가 부족할 경우 수의계약 절차로 전환합니다. 수의계약 전환 시에는 유찰 사유서와 함께 3스타 이상 업체 중 적격 후보 리스트를 첨부해야 합니다.',votes:47,adopted:true,aiDb:true},
      {author:'VAATZ달인',authorLv:'Lv.2',hair:'#1A365D',suit:'#8678BF',hat:'🕶️',body:'추가로 VAATZ에서는 입찰관리 → 유찰처리 메뉴에서 "재공고" 또는 "수의전환" 버튼을 클릭하면 됩니다. 재공고 시에는 기존 참여업체에 자동 알림이 발송됩니다.',votes:12,adopted:false}
    ]
  },
  2: {
    title:'5스타 4→5등급 승급 시 현장 심사 항목이 변경되었나요?',
    body:'25년 1월부터 5스타 평가 기준이 개정되었다고 들었는데, 4등급에서 5등급으로 승급할 때 새로운 필수 요건이 추가되었는지 궁금합니다. IATF 16949 인증이 필수가 되었다는 이야기도 있는데 확인 부탁드립니다.',
    cat:'5스타',author:'품질매니저',authorLv:'Lv.2',time:'1일 전',hair:'#2C1810',suit:'#C29B42',hat:'',
    answers:[
      {author:'품질지킴이',authorLv:'Lv.3',hair:'#2D3748',suit:'#4B8EF0',hat:'🎓',body:'네, 25년 1월부터 신규 평가 기준이 적용되어 품질경영시스템 인증(IATF 16949)이 5등급 승급 필수 요건으로 추가되었습니다. 기존 4등급 업체는 26년 6월까지 유예기간이 적용됩니다. 관련 내용은 협력사 품질 5스타 운영기준 개정안 제5조를 참고하세요.',votes:23,adopted:false}
    ]
  },
  3: {
    title:'VAATZ에서 해외 발주 시 환율 자동 적용 방법',
    body:'해외 구매를 진행할 때 VAATZ 시스템에서 환율이 어떻게 적용되는지 알고 싶습니다. 발주 시점의 환율인지, 아니면 결제 시점 환율인지 혼동이 됩니다.',
    cat:'VAATZ',author:'해외구매담당',authorLv:'Lv.2',time:'오늘',hair:'#1A365D',suit:'#8678BF',hat:'🕶️',
    answers:[
      {author:'VAATZ달인',authorLv:'Lv.2',hair:'#1A365D',suit:'#8678BF',hat:'🕶️',body:'VAATZ 글로벌 구매 모듈에서 환율은 매일 오전 9시 기준으로 한국은행 고시 매매기준율을 자동 수신하여 적용합니다. 발주서 생성 시점의 당일 환율이 자동으로 반영됩니다.',votes:15,adopted:false},
      {author:'프로큐어마스터',authorLv:'Lv.4',hair:'#8B4513',suit:'#4EAD7B',hat:'👑',body:'보충하면, 수동 환율 입력은 특수 통화(AED, THB 등) 거래 시에만 필요합니다. 글로벌 구매 → 환율관리 메뉴에서 통화별 수동 입력이 가능하며, 팀장 승인이 필요합니다.',votes:8,adopted:false}
    ]
  },
  4: {
    title:'수의계약 긴급 사유서 승인 기준이 어떻게 되나요?',
    body:'긴급 수의계약을 진행해야 하는 상황인데, 사유서 작성 시 어떤 기준으로 승인이 이루어지는지 궁금합니다. 금액 기준별 전결 권한이 어떻게 되나요?',
    cat:'계약',author:'계약초보',authorLv:'Lv.1',time:'오늘',hair:'#553C2E',suit:'#52A0A8',hat:'',
    answers:[
      {author:'프로큐어히어로',authorLv:'Lv.3',hair:'#4A3728',suit:'#4B8EF0',hat:'🎩',body:'긴급 수의계약 승인 기준: 5천만원 이하 팀장 전결, 5천만원~1억 실장 승인, 1억 초과 구매위원회 심의 필요. 사유서 양식은 VAATZ → 계약관리 → 양식 다운로드에서 "긴급수의 사유서(FM-PU-042)"를 받으실 수 있습니다.',votes:8,adopted:false}
    ]
  }
};

function miniCharSvg(hair,suit){
  return '<svg viewBox="0 0 80 110" fill="none" style="width:24px;height:30px"><circle cx="40" cy="25" r="14" fill="#FFD8B1"/><circle cx="34" cy="23" r="2" fill="#333"/><circle cx="46" cy="23" r="2" fill="#333"/><path d="M35 29 Q40 33 45 29" stroke="#E8967A" stroke-width="1.5" fill="none" stroke-linecap="round"/><ellipse cx="40" cy="18" rx="18" ry="16" fill="'+hair+'"/><path d="M24 42 L22 80 H58 L56 42 Q40 38 24 42Z" fill="'+suit+'"/></svg>';
}

function showQADetail(id){
  const data = qaData[id];
  if(!data) return;
  document.getElementById('qaList').style.display = 'none';
  document.querySelector('.comm-toolbar').style.display = 'none';
  var tipEl = document.querySelector('#ct-qa > div[style*="text-align"]');
  if(tipEl) tipEl.style.display = 'none';
  var detail = document.getElementById('qaDetailView');
  detail.style.display = 'block';
  
  var answersHtml = '';
  data.answers.forEach(function(a){
    var adoptedStyle = a.adopted ? 'border-color:var(--accent-bd);background:rgba(75,142,240,0.03)' : '';
    var adoptedBadge = a.adopted ? '<div style="position:absolute;top:10px;right:12px;font-size:9px;font-weight:700;color:var(--accent);background:var(--accent-dim);padding:2px 8px;border-radius:4px">✓ 채택된 답변</div>' : '';
    var aiDbBadge = a.aiDb ? '<div style="position:absolute;top:10px;right:'+(a.adopted?'100':'12')+'px;font-size:9px;font-weight:700;color:var(--v);background:var(--v-dim);padding:2px 8px;border-radius:4px">🧠 AI DB 반영</div>' : '';
    var adoptBtn = !a.adopted ? '<button style="background:var(--accent-dim);border:1px solid var(--accent-bd);color:var(--accent);padding:4px 10px;border-radius:5px;font-size:10px;cursor:pointer;font-family:inherit" onclick="adoptAnswer(this)">✓ 채택하기</button>' : '';
    answersHtml += '<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;padding:16px;margin-bottom:8px;position:relative;'+adoptedStyle+'">'+adoptedBadge+aiDbBadge+'<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><div class="qa-char-av">'+miniCharSvg(a.hair,a.suit)+(a.hat?'<span class="mini-acc mini-hat">'+a.hat+'</span>':'')+'</div><div style="font-size:12px;font-weight:600">'+a.author+' <span class="lv">'+a.authorLv+'</span></div></div><div style="font-size:13px;color:var(--text-2);line-height:1.8;margin-bottom:10px">'+a.body+'</div><div style="display:flex;gap:6px;align-items:center"><button style="background:var(--bg-3);border:1px solid var(--border-1);color:var(--text-3);padding:4px 10px;border-radius:5px;font-size:10px;cursor:pointer;font-family:inherit" onclick="voteUp(this)">👍 추천 '+String(a.votes)+'</button>'+adoptBtn+'</div></div>';
  });
  
  document.getElementById('qaDetailContent').innerHTML = '<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;padding:18px;margin-bottom:16px"><div style="display:flex;gap:6px;margin-bottom:8px"><span class="qa-cat">'+data.cat+'</span></div><div style="font-size:16px;font-weight:700;margin-bottom:10px;line-height:1.5">'+data.title+'</div><div style="font-size:13px;color:var(--text-2);line-height:1.8;margin-bottom:12px">'+data.body+'</div><div style="display:flex;align-items:center;gap:10px;font-size:10px;color:var(--text-4)"><div class="qa-author"><div class="qa-char-av">'+miniCharSvg(data.hair,data.suit)+(data.hat?'<span class="mini-acc mini-hat">'+data.hat+'</span>':'')+'</div><span>'+data.author+'</span><span class="lv">'+data.authorLv+'</span></div><span>'+data.time+'</span></div></div><div style="font-size:12px;font-weight:600;margin-bottom:10px;display:flex;align-items:center;gap:5px">💬 답변 '+data.answers.length+'개</div>'+answersHtml;
}

function backToQAList(){
  document.getElementById('qaList').style.display = 'flex';
  document.querySelector('.comm-toolbar').style.display = 'flex';
  var tipEl = document.querySelector('#ct-qa > div[style*="text-align"]');
  if(tipEl) tipEl.style.display = '';
  document.getElementById('qaDetailView').style.display = 'none';
}

function adoptAnswer(btn){
  btn.outerHTML = '<span style="font-size:10px;font-weight:700;color:var(--accent);background:var(--accent-dim);padding:3px 10px;border-radius:5px">✓ 채택 완료</span>';
  toast('답변을 채택했습니다! 작성자에게 +30pt가 지급됩니다.','✅',3000);
}
function voteUp(btn){btn.style.color='var(--accent)';btn.style.borderColor='var(--accent-bd)'}

function submitAnswer(){
  const textarea = document.getElementById('answerTextarea');
  const text = textarea.value.trim();
  if(!text){toast('답변 내용을 입력해주세요.','⚠️',2500);return}
  toast('답변이 등록되었습니다! +5pt 획득','✅',3000);
  textarea.value = '';
}

// ─── Question Write ───
function openQuestionWrite(){
  document.getElementById('qWriteM').classList.add('sh');
  document.getElementById('qWriteNick').textContent = userNickname;
}
function closeQuestionWrite(){
  document.getElementById('qWriteM').classList.remove('sh');
}
function submitQuestion(){
  const cat = document.getElementById('qCatSel').value;
  const title = document.getElementById('qTitleInput').value.trim();
  const body = document.getElementById('qBodyInput').value.trim();
  if(!cat){toast('카테고리를 선택해주세요.','⚠️',2500);return}
  if(!title){toast('질문 제목을 입력해주세요.','⚠️',2500);return}
  if(!body){toast('상세 내용을 입력해주세요.','⚠️',2500);return}
  
  // Add new card to list
  const list = document.getElementById('qaList');
  const card = document.createElement('div');
  card.className = 'qa-card highlight-new';
  card.innerHTML = `<div class="qa-top"><div class="qa-votes"><button class="qa-v-btn" onclick="event.stopPropagation();voteQ(this)">▲</button><span class="qa-v-n">0</span><button class="qa-v-btn" onclick="event.stopPropagation()">▼</button></div>
  <div class="qa-info"><div class="qa-title"><span class="qa-tag new0">NEW</span>${escHtml(title)}</div>
  <div class="qa-preview">${escHtml(body.substring(0,100))}...</div>
  <div class="qa-meta"><span class="qa-cat">${cat}</span><span style="color:var(--g)">💬 0</span><div class="qa-author"><div class="qa-author-av">${userNickname[0]}</div><span>${userNickname}</span><span class="lv lv-3">Lv.3</span></div><span>방금</span></div></div></div>`;
  list.insertBefore(card, list.firstChild);
  
  closeQuestionWrite();
  document.getElementById('qCatSel').value = '';
  document.getElementById('qTitleInput').value = '';
  document.getElementById('qBodyInput').value = '';
  toast('질문이 등록되었습니다! +3pt 획득','✅',3000);
}

// ─── History Modal (이력관리) ───
function openHistory(){
  toast('📜 이력 관리 기능은 향후 업데이트에서 제공됩니다. 현재는 왼쪽 사이드바의 최근 대화 목록에서 이전 대화를 확인하실 수 있습니다.','📜',4000);
}

// ─── Character Widget Bubble Rotation (v20: reuse bubbleMsgs) ───
let bubbleIdx = 0;
setInterval(function(){
  const bubble = document.querySelector('.char-widget-bubble');
  if(bubble){
    bubbleIdx = (bubbleIdx + 1) % bubbleMsgs.length;
    bubble.textContent = bubbleMsgs[bubbleIdx];
  }
}, 8000);


// ═══════════════════════════════════════════════════════════
// ═══ v20: RAG SOURCE HIGHLIGHT VIEWER — Core Logic       ═══
// ═══════════════════════════════════════════════════════════

// Mock document data — each citation maps to a document with rendered "page" content
// In production, this would be PDF.js page rendering + bbox-based highlight overlay
const sourceDocs = {
  1: {
    name: '구매업무규정 제23조',
    type: 'pdf',
    typeLabel: 'PDF',
    path: '/구매전략/규정/구매업무규정_v8.2.pdf',
    security: 'h',
    securityLabel: '높음',
    owner: '김현대 · 구매디지털추진팀',
    version: 'v8.2',
    embedded: '2025.01.15',
    pages: [
      {
        no: 34, total: 156,
        title: '제23조 (경쟁 입찰의 방식)',
        sub: '제4장 입찰 · 제1절 경쟁 입찰',
        highlights: ['primary-1'],
        body: `
          <p><strong>제23조 (경쟁 입찰의 방식)</strong></p>
          <p><span class="src-hi primary" data-h="primary-1"><span class="src-hi-mk">①</span>본 규정에 따른 경쟁 입찰은 탄력적입찰과 경매입찰을 원칙으로 한다.</span> 다만, 다음 각 호의 어느 하나에 해당하는 경우 본부장 승인을 얻어 다른 방식을 적용할 수 있다.</p>
          <ol>
            <li>국가 또는 지방자치단체가 정한 표준 절차를 따라야 하는 경우</li>
            <li>국제 입찰 절차를 적용해야 하는 경우</li>
            <li>긴급 조달이 요구되어 별도 절차가 불가피한 경우</li>
          </ol>
          <h4>1. 탄력적입찰</h4>
          <p><span class="src-hi" data-h="h2">탄력적입찰은 참여 업체에 자신의 순위만을 공개하며, 2회차 이상 가격 제출을 통해 최저 가격을 도출하는 방식이다.</span> 본 방식은 규격이 표준화된 일반 자재 및 부품 구매에 적용한다.</p>
          <h4>2. 경매입찰</h4>
          <p>경매입찰은 입찰 진행 중 모든 참여자에게 현재 최저가를 실시간 공개하며, 마감 시간 내 무제한 가격 수정이 가능하다.</p>
        `
      },
      {
        no: 35, total: 156, title: '제23조 (계속) — 탄력적입찰',
        sub: '제4장 입찰 · 제1절 경쟁 입찰',
        highlights: ['primary-1'],
        body: `
          <p>제2항. <strong>탄력적입찰의 운영 절차</strong></p>
          <p><span class="src-hi primary" data-h="primary-1"><span class="src-hi-mk">②</span>탄력적입찰은 참여 업체에 자신의 순위만을 공개하며, 2회차 이상 가격 제출을 통해 최저 가격을 도출하는 방식이다.</span> 통상 2~3회차 진행하며, 1회차 종료 후 순위 공개와 함께 다음 회차 마감 시간이 통지된다.</p>
          <h4>적용 기준</h4>
          <ul>
            <li>규격이 표준화된 일반 자재 및 부품</li>
            <li>예정 가격 산정이 가능한 품목</li>
            <li>계약 금액 3천만원 이상</li>
          </ul>
          <h4>회차 구성</h4>
          <table><thead><tr><th>회차</th><th>공개 정보</th><th>제출 가능 횟수</th></tr></thead>
          <tbody>
          <tr><td>1회차</td><td>없음</td><td>1회</td></tr>
          <tr><td>2회차</td><td>본인 순위</td><td>1회</td></tr>
          <tr><td>3회차</td><td>본인 순위 + 1위와의 차이</td><td>1회</td></tr>
          </tbody></table>
        `
      },
      {
        no: 36, total: 156, title: '제23조 (계속) — 경매입찰',
        sub: '제4장 입찰 · 제1절 경쟁 입찰',
        highlights: ['primary-1'],
        body: `
          <p>제3항. <strong>경매입찰의 운영 절차</strong></p>
          <p><span class="src-hi primary" data-h="primary-1"><span class="src-hi-mk">③</span>경매입찰은 입찰 진행 중 모든 참여자에게 현재 최저가를 실시간 공개하며, 마감 시간 내 무제한 가격 수정이 가능하다.</span> 본 방식은 범용 자재·MRO·물류비 등 시장 가격이 형성된 품목에 적용한다.</p>
          <h4>적용 권장 기준</h4>
          <ul>
            <li>계약 금액 1억원 이상 건</li>
            <li>3개사 이상의 적격 업체 확보 가능 시</li>
            <li>제품 사양이 동일하여 가격 외 차별화 요소가 적은 경우</li>
          </ul>
          <p>본 방식은 단가 인하 효과가 크나, 과도한 가격 하락에 따른 품질 리스크 검토가 수반되어야 한다.</p>
        `
      },
      {
        no: 37, total: 156, title: '제23조 (계속) — 입찰 연장 규정',
        sub: '제4장 입찰 · 제1절 경쟁 입찰',
        highlights: ['primary-1'],
        body: `
          <p>제4항. <strong>입찰 마감 시간 자동 연장</strong></p>
          <p><span class="src-hi primary" data-h="primary-1"><span class="src-hi-mk">④</span>입찰 마감 5분 전 가격 제출이 발생한 경우, 마감 시간은 자동으로 5분 연장된다.</span> 연장은 추가 입찰이 없을 때까지 반복되며, 최대 6회까지 누적 30분 연장이 가능하다.</p>
          <h4>자동 연장 규칙</h4>
          <ul>
            <li>5분 전 입찰 발생 → +5분 자동 연장</li>
            <li>연장 후 다시 5분 전 입찰 발생 시 재연장</li>
            <li>누적 최대 6회 (30분) 까지</li>
            <li>이후 입찰은 마감 후 무효 처리</li>
          </ul>
          <p>본 규정은 막판 입찰 집중 현상을 완화하고 충분한 경쟁이 이루어지도록 하기 위한 장치이다.</p>
        `
      }
    ],
    quotes: { 'primary-1': 'p.34' }
  },
  2: {
    name: '입찰운영 업무표준 STD-PUR-012',
    type: 'doc',
    typeLabel: 'DOCX',
    path: '/공통/업무표준/STD-PUR-012_v4.docx',
    security: 'm',
    securityLabel: '중간',
    owner: '김현대 · 구매디지털추진팀',
    version: 'v4.0',
    embedded: '2025.01.10',
    pages: [
      {
        no: 14, total: 32, title: '3.2 탄력적입찰 절차',
        sub: '제3장 입찰 운영 · STD-PUR-012',
        highlights: ['primary-1'],
        body: `
          <p><strong>3.2 탄력적입찰 절차</strong></p>
          <p><span class="src-hi primary" data-h="primary-1">3.2.1 1회차 제출 후 순위만 공개, 미낙찰 시 2~3회차까지 가격 수정 제출이 가능하다.</span> 각 회차 마감은 시스템에 의해 자동 통보되며, 회차별 마감 시간은 통상 24시간 단위로 설정된다.</p>
          <h4>3.2.2 시스템 흐름</h4>
          <ol>
            <li>입찰 공고 등록 — VAATZ 구매관리 메뉴 사용</li>
            <li>참여 업체 자동 초대 — 5스타 등급 필터링</li>
            <li>1회차 제출 → 순위 공개</li>
            <li>2회차 제출 → 순위 재공개</li>
            <li>3회차 제출 (필요 시) → 낙찰</li>
          </ol>
          <h4>3.2.3 회차 간 간격</h4>
          <p>각 회차 종료 후 다음 회차 시작 전까지 최소 4시간의 대기 시간을 둔다. 이는 참여 업체가 가격 재검토 시간을 확보하기 위함이다.</p>
        `
      },
      {
        no: 15, total: 32, title: '3.2 탄력적입찰 절차 (계속)',
        sub: '제3장 입찰 운영 · STD-PUR-012',
        highlights: ['primary-1'],
        body: `
          <p><strong>3.2.4 참여 업체 선정</strong></p>
          <p><span class="src-hi primary" data-h="primary-1">참여 업체는 시스템에 등록된 5스타 등급 기준에 따라 자동 필터링되며, 사양서는 일괄 발송된다.</span> 발송 시점에 각 업체에 자동으로 입찰 알림 이메일이 전송된다.</p>
          <h4>3.2.5 사양서 배포</h4>
          <ul>
            <li>업체 초대 시 사양서 자동 첨부</li>
            <li>변경 사항 발생 시 모든 참여 업체에 일괄 재배포</li>
            <li>업체별 다운로드 이력 자동 기록</li>
          </ul>
          <p>사양서 변경이 발생한 경우, 1회차는 처음부터 다시 시작한다.</p>
        `
      }
    ],
    quotes: { 'primary-1': 'p.14' }
  },
  3: {
    name: '경매입찰 가이드라인 v2.1',
    type: 'pdf',
    typeLabel: 'PDF',
    path: '/공통/가이드/경매입찰_가이드_v2.1.pdf',
    security: 'm',
    securityLabel: '중간',
    owner: '이준혁 · 구매전략팀',
    version: 'v2.1',
    embedded: '2025.02.01',
    pages: [
      {
        no: 9, total: 28, title: '2.1 적용범위',
        sub: '제2장 경매입찰 운영 기준',
        highlights: ['primary-1'],
        body: `
          <p><strong>2.1 적용범위</strong></p>
          <p><span class="src-hi primary" data-h="primary-1">2.1.1 범용 자재, MRO, 물류비 등 시장 가격이 형성된 품목 중 계약 금액 1억원 이상 건에 권장한다.</span> 다만, 다음 항목은 적용에서 제외한다.</p>
          <h4>2.1.2 적용 제외 항목</h4>
          <ul>
            <li>전략 부품 (반도체, 모터, 배터리 셀 등)</li>
            <li>품질·기술 차별화가 핵심인 핵심 기술 부품</li>
            <li>특허·실용신안 등 독점 권리가 적용된 품목</li>
            <li>긴급 조달이 필요한 안전·환경 관련 자재</li>
          </ul>
          <h4>2.1.3 권장 적용 품목</h4>
          <table><thead><tr><th>구분</th><th>예시 품목</th></tr></thead>
          <tbody>
          <tr><td>범용 자재</td><td>강판, 알루미늄, 플라스틱 펠릿</td></tr>
          <tr><td>MRO</td><td>공구, 소모성 자재, 사무용품</td></tr>
          <tr><td>물류비</td><td>국내외 운송, 보관, 통관</td></tr>
          </tbody></table>
        `
      },
      {
        no: 13, total: 28, title: '3.2 낙찰 후 처리',
        sub: '제3장 낙찰 및 발주',
        highlights: ['primary-1'],
        body: `
          <p><strong>3.2 낙찰 후 처리</strong></p>
          <p><span class="src-hi primary" data-h="primary-1">3.2.1 낙찰 결과는 구매위원회 승인 후 VAATZ 발주생성 화면으로 자동 연계된다.</span> 승인 권한은 금액 기준에 따라 결정된다.</p>
          <h4>3.2.2 금액별 승인 권한</h4>
          <ul>
            <li>1억원 이하: 팀장 전결</li>
            <li>1억원 초과 ~ 5억원: 실장 승인</li>
            <li>5억원 초과: 구매위원회 심의</li>
          </ul>
          <p>승인 후 VAATZ 시스템에서 자동으로 발주서가 생성되며, 낙찰 업체에 PO 번호와 함께 통보된다.</p>
        `
      }
    ],
    quotes: { 'primary-1': 'p.9' }
  },
  4: {
    name: 'VAATZ 입찰모듈 매뉴얼',
    type: 'ppt',
    typeLabel: 'PPT',
    path: '/공통/매뉴얼/VAATZ_입찰모듈_매뉴얼_v3.pptx',
    security: 'l',
    securityLabel: '낮음',
    owner: '김현대 · 구매디지털추진팀',
    version: 'v3.1',
    embedded: '2025.01.20',
    pages: [
      {
        no: 42, total: 78, title: 'Ch.5 입찰 등록 — 메뉴 진입',
        sub: '제5장 입찰 등록',
        slide: true,
        highlights: ['primary-1'],
        body: `
          <div class="src-slide">
            <div class="src-slide-no">Slide 42 / 78</div>
            <div class="src-slide-ti">5.1 입찰 등록 메뉴 진입</div>
            <div class="src-slide-sub">VAATZ → 구매관리 → 입찰등록</div>
            <ul>
              <li>입찰 유형 선택 (탄력적 / 경매)</li>
              <li>품목, 수량, 납기 필수 입력</li>
              <li>참여 업체 자동 추천 (5스타 등급 기준)</li>
              <li>사양서 첨부 (PDF, DWG, STEP)</li>
            </ul>
            <div class="src-slide-box"><span class="src-hi primary" data-h="primary-1">Ch.5 입찰등록: 구매관리 > 입찰등록에서 입찰 유형(탄력적/경매)을 선택하고 필수 항목을 입력한다.</span></div>
          </div>
        `
      }
    ],
    quotes: { 'primary-1': 'Slide 42' }
  },
  5: {
    name: '품질 5스타 운영기준',
    type: 'xls',
    typeLabel: 'XLSX',
    path: '/품질/규정/5스타_운영기준_v4.xlsx',
    security: 'm',
    securityLabel: '중간',
    owner: '정현수 · 구매품질기획팀',
    version: 'v4.0',
    embedded: '2025.01.05',
    pages: [
      {
        no: 7, total: 24, title: '제7조 입찰 참여 자격',
        sub: '시트: 등급별_권한 · 제7조 영역',
        excel: true,
        highlights: ['primary-1'],
        body: `
          <div class="src-xls">
            <table>
              <thead>
                <tr><th class="col-hd"></th><th class="col-hd">A</th><th class="col-hd">B</th><th class="col-hd">C</th><th class="col-hd">D</th></tr>
              </thead>
              <tbody>
                <tr><td class="row-hd">1</td><th colspan="4">제7조 (입찰 참여 자격) — 5스타 등급 기준</th></tr>
                <tr><td class="row-hd">2</td><th>등급</th><th>입찰 참여</th><th>수의계약</th><th>비고</th></tr>
                <tr><td class="row-hd">3</td><td>★5 최우수</td><td>○ 가능</td><td>◎ 우선 협상 대상</td><td>전 품목</td></tr>
                <tr><td class="row-hd">4</td><td>★4 우수</td><td>○ 가능</td><td>○ 가능</td><td>전 품목</td></tr>
                <tr><td class="row-hd">5</td><td>★3 양호</td><td>○ 가능</td><td>△ 제한적</td><td>일반 품목</td></tr>
                <tr><td class="row-hd">6</td><td>★2 보통</td><td>× 불가</td><td>× 불가</td><td>관찰 대상</td></tr>
                <tr><td class="row-hd">7</td><td>★1 미흡</td><td>× 불가</td><td>× 불가</td><td>개선 권고</td></tr>
                <tr><td class="row-hd">8</td><td colspan="4" class="hi"><span class="src-hi primary" data-h="primary-1">제7조(참여자격) 입찰 참여 업체는 직전 분기 평가 기준 3스타 이상이어야 한다.</span></td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        no: 9, total: 24, title: '제9조 발주 시 등급 연계',
        sub: '시트: 발주_연계',
        excel: true,
        highlights: ['primary-1'],
        body: `
          <div class="src-xls">
            <table>
              <thead><tr><th class="col-hd"></th><th class="col-hd">A</th><th class="col-hd">B</th></tr></thead>
              <tbody>
                <tr><td class="row-hd">1</td><th colspan="2">제9조 (발주 시 등급 정보 표시)</th></tr>
                <tr><td class="row-hd">2</td><td colspan="2" class="hi"><span class="src-hi primary" data-h="primary-1">낙찰 시점의 5스타 등급 정보가 VAATZ 발주 화면에 자동 표시된다.</span></td></tr>
                <tr><td class="row-hd">3</td><td>표시 항목</td><td>등급, 직전 분기 평가일, 평가자, 종합 점수</td></tr>
                <tr><td class="row-hd">4</td><td>업데이트 주기</td><td>분기별 (3, 6, 9, 12월 첫째 주)</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        no: 11, total: 24, title: '제11조 수의계약 우선 협상',
        sub: '시트: 수의계약_연계',
        excel: true,
        highlights: ['primary-1'],
        body: `
          <div class="src-xls">
            <table>
              <thead><tr><th class="col-hd"></th><th class="col-hd">A</th><th class="col-hd">B</th></tr></thead>
              <tbody>
                <tr><td class="row-hd">1</td><th colspan="2">제11조 (수의계약 우선 협상권)</th></tr>
                <tr><td class="row-hd">2</td><td colspan="2" class="hi"><span class="src-hi primary" data-h="primary-1">5스타 등급 업체는 동일 품목 수의계약 시 우선 협상 대상으로 선정된다.</span></td></tr>
                <tr><td class="row-hd">3</td><td>대상</td><td>★5 최우수 등급 업체</td></tr>
                <tr><td class="row-hd">4</td><td>적용 범위</td><td>최근 12개월 내 납품 실적이 있는 동일 품목</td></tr>
                <tr><td class="row-hd">5</td><td>가격 기준</td><td>전회 단가 ±5% 이내</td></tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    quotes: { 'primary-1': 'p.7' }
  }
};

// Per-citation page index — which page to open when clicking [N]
const citationPageMap = {
  1: 0,  // citation [1] → page 34 (index 0)
  2: 0,  // citation [2] → STD-PUR-012 p.14
  3: 0,  // citation [3] → p.9
  4: 0,
  5: 0
};

let currentSourceDoc = 1;
let currentSourcePage = 0;
let rpCurrentTab = 'src';

function rpSwitchTab(tab){
  rpCurrentTab = tab;
  document.querySelectorAll('.rp-tab').forEach(t=>t.classList.remove('on'));
  document.querySelectorAll('.rp-tab-pane').forEach(p=>p.classList.remove('on'));
  if(tab==='my'){
    document.getElementById('rpTabMy').classList.add('on');
    document.getElementById('rpPaneMy').classList.add('on');
    document.getElementById('rpTitle').textContent='📂 작업 패널 · 내 파일';
  } else {
    document.getElementById('rpTabSrc').classList.add('on');
    document.getElementById('rpPaneSrc').classList.add('on');
    document.getElementById('rpTitle').textContent='🔍 작업 패널 · 답변 근거';
    const dot=document.getElementById('rpSrcDot');
    if(dot) dot.style.display='none';
  }
}

function renderSourceChips(){
  const wrap = document.getElementById('srcChips');
  if(!wrap) return;
  wrap.innerHTML = '';
  Object.keys(sourceDocs).forEach(k=>{
    const doc = sourceDocs[k];
    const chip = document.createElement('button');
    chip.className = 'src-chip' + (parseInt(k)===currentSourceDoc?' on':'');
    chip.innerHTML = `<span class="src-chip-n">${k}</span>${doc.name}`;
    chip.onclick = ()=>openSourceFromCitation(parseInt(k));
    wrap.appendChild(chip);
  });
}

function renderSourcePage(){
  const doc = sourceDocs[currentSourceDoc];
  if(!doc) return;
  const page = doc.pages[currentSourcePage];
  if(!page) return;
  const wrap = document.getElementById('srcVw');
  if(!wrap) return;
  
  // Build doc viewer
  const isSlide = page.slide;
  const isExcel = page.excel;
  const isText = !isSlide && !isExcel;
  
  const secCls = 's-'+doc.security;
  
  const pageBody = isText 
    ? `<div class="src-page">
         <div class="src-page-hd"><span>${escHtml(doc.name)} · ${doc.version}</span><span>${page.no} / ${page.total}</span></div>
         <div class="src-page-ti">${escHtml(page.title)}</div>
         <div class="src-page-sub">${escHtml(page.sub)}</div>
         ${page.body}
         <div class="src-page-ft"><span>${escHtml(doc.path)}</span><span>VAATZ AI · ${doc.embedded} 인덱싱</span></div>
       </div>`
    : page.body;
  
  wrap.innerHTML = `
    <div class="src-doc-meta">
      <div class="src-doc-meta-l">
        <div class="src-doc-type t-${doc.type}">${doc.typeLabel}</div>
        <div class="src-doc-info">
          <div class="src-doc-nm">${escHtml(doc.name)}</div>
          <div class="src-doc-pa">${escHtml(doc.path)}</div>
        </div>
      </div>
      <div class="src-doc-sec ${secCls}">🔒 ${doc.securityLabel}</div>
    </div>
    <div class="src-pgnav">
      <div class="src-pgnav-c">
        <button class="src-pgnav-btn" ${currentSourcePage===0?'disabled':''} onclick="navSourcePage(-1)">‹</button>
        <span class="src-pgnav-cnt">${isSlide?'슬라이드 ':isExcel?'시트 ':'p. '}${page.no}/${page.total}</span>
        <button class="src-pgnav-btn" ${currentSourcePage>=doc.pages.length-1?'disabled':''} onclick="navSourcePage(1)">›</button>
      </div>
      <div class="src-pgnav-zoom" style="display:flex;gap:4px;align-items:center">
        <span style="font-size:9px;color:var(--text-4);font-family:'JetBrains Mono',monospace">${doc.owner.split(' · ')[1]||doc.owner}</span>
        <button class="src-pgnav-btn" title="원문 다운로드">⤓</button>
      </div>
    </div>
    ${pageBody}
    <div style="margin-top:10px;padding:8px 10px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;font-size:10px;color:var(--text-4);display:flex;align-items:center;gap:6px">
      <span style="background:#FFD93D;color:#1A1D23;font-weight:700;font-size:9px;padding:1px 4px;border-radius:2px">HIGHLIGHT</span>
      <span>노란색 표시는 AI가 답변 생성에 직접 인용한 원문 부분입니다.</span>
    </div>
  `;
}

function navSourcePage(delta){
  const doc = sourceDocs[currentSourceDoc];
  if(!doc) return;
  const next = currentSourcePage + delta;
  if(next < 0 || next >= doc.pages.length) return;
  currentSourcePage = next;
  renderSourcePage();
}

function openSourceFromCitation(citNum){
  currentSourceDoc = citNum;
  currentSourcePage = 0;
  // Ensure right panel is open
  const rp = document.getElementById('rp');
  if(!rp.classList.contains('sh')){ rp.classList.add('sh') }
  rp.classList.add('src-active');
  setTimeout(()=>rp.classList.remove('src-active'), 600);
  rpSwitchTab('src');
  renderSourceChips();
  renderSourcePage();
  // Visual feedback on the citation
  event && event.stopPropagation && event.stopPropagation();
}

// Initialize source viewer on load
function initSourceViewer(){
  if(document.getElementById('srcChips')){
    renderSourceChips();
    renderSourcePage();
  }
}

// Patch existing rpT() to handle the new pane state
const _origRpT = rpT;
rpT = function(){
  _origRpT.apply(this, arguments);
  // When opened, default to src tab if there are citations available
  const rp = document.getElementById('rp');
  if(rp.classList.contains('sh')) {
    rpSwitchTab(rpCurrentTab||'src');
  }
};

// Patch scope toggle: "내 파일" mode → switch to my files tab
const _origScT = scT;
scT = function(b,type){
  _origScT.apply(this, arguments);
  if(type==='my') rpSwitchTab('my');
};

// Citation click prevents .cr clicks from being interpreted via parent handlers
document.addEventListener('click', function(e){
  // Make sure citation clicks don't bubble awkwardly
  if(e.target.classList && e.target.classList.contains('cr')){
    // already handled
  }
});

// Initialize once DOM ready
window.addEventListener('load', function(){
  initSourceViewer();
});
// Also try immediately in case load already fired
setTimeout(initSourceViewer, 50);

// Resize handle for right panel — improved UX
(function(){
  const handle = document.getElementById('rpResize');
  const rp = document.getElementById('rp');
  if(!handle||!rp) return;
  let isDragging=false, startX=0, startW=0;
  const SNAP_SIZES=[320,380,460,560,640];

  function snapWidth(w){
    // Snap to closest preset if within 24px
    for(const s of SNAP_SIZES){
      if(Math.abs(w-s)<24) return s;
    }
    return w;
  }

  handle.addEventListener('mousedown', function(e){
    isDragging=true; startX=e.clientX;
    startW=rp.getBoundingClientRect().width;
    handle.classList.add('dragging');
    document.body.style.cursor='col-resize';
    document.body.style.userSelect='none';
    // Disable transition while dragging for responsiveness
    rp.style.transition='none';
    e.preventDefault();
  });

  // Touch support
  handle.addEventListener('touchstart', function(e){
    isDragging=true; startX=e.touches[0].clientX;
    startW=rp.getBoundingClientRect().width;
    handle.classList.add('dragging');
    rp.style.transition='none';
    e.preventDefault();
  },{passive:false});

  document.addEventListener('mousemove', function(e){
    if(!isDragging) return;
    const raw=Math.max(280, Math.min(720, startW-(e.clientX-startX)));
    rp.style.width=raw+'px'; rp.style.minWidth=raw+'px';
  });
  document.addEventListener('touchmove', function(e){
    if(!isDragging) return;
    const raw=Math.max(280, Math.min(720, startW-(e.touches[0].clientX-startX)));
    rp.style.width=raw+'px'; rp.style.minWidth=raw+'px';
  },{passive:false});

  function endDrag(){
    if(!isDragging) return;
    isDragging=false;
    handle.classList.remove('dragging');
    document.body.style.cursor=''; document.body.style.userSelect='';
    // Snap and restore transition
    const snapped=snapWidth(rp.getBoundingClientRect().width);
    rp.style.transition='';
    rp.style.width=snapped+'px'; rp.style.minWidth=snapped+'px';
  }
  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchend', endDrag);

  // Double-click to reset to default
  handle.addEventListener('dblclick', function(){
    rp.style.transition='width .3s var(--ease),min-width .3s var(--ease)';
    rp.style.width='360px'; rp.style.minWidth='360px';
    setTimeout(()=>rp.style.transition='',350);
  });
})();

// Make new chat responses also have citation infrastructure (basic)
// Override the existing sendMessage AI part to include the RAG pipeline visual
const _origSendMessage = sendMessage;
sendMessage = function(){
  const text = textarea.value.trim();
  if(!text) return;
  
  const userMsg = document.createElement('div');
  userMsg.className='msg msg-u';
  userMsg.innerHTML='<div class="msg-b">'+escHtml(text)+'</div>';
  chatArea.appendChild(userMsg);
  textarea.value='';
  textarea.style.height='auto';
  updateSendBtn();
  scrollChat();
  
  // Typing indicator
  const typing = document.createElement('div');
  typing.className='typing';
  typing.id='typingIndicator_'+Date.now();
  typing.innerHTML='<div class="aa"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="white" opacity=".9"/></svg></div><div class="typing-dots"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
  chatArea.appendChild(typing);
  scrollChat();
  
  setTimeout(function(){
    typing.remove();
    const aiMsg = document.createElement('div');
    aiMsg.className='msg msg-a';
    aiMsg.innerHTML = `
      <div class="aa"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="white" opacity=".9"/></svg></div>
      <div class="ab">
        <div class="ah"><span class="an">VAATZ AI</span><span class="at0">RAG · 3개 문서 인용</span><span class="at0" style="background:var(--g-dim);color:var(--g)">● 신뢰도 87%</span>${webOn?'<span class="at0" style="background:var(--accent-dim);color:var(--accent)">🌐 외부지식</span>':''}</div>
        <div class="rag-pipeline">
          <div class="rag-hd">
            <div class="rag-hd-l"><div class="rag-hd-ic">🧠</div>검색 및 답변 생성 프로세스</div>
            <div class="rag-conf"><div class="rag-conf-dot"></div>CONFIDENCE <span class="rag-conf-v">87%</span></div>
          </div>
          <div class="rag-steps">
            <div class="rag-step"><div class="rag-step-ic">✓</div><div class="rag-step-tx">질의 임베딩 — <b>키워드 추출</b></div><div class="rag-step-mt">128-dim · 42ms</div></div>
            <div class="rag-step"><div class="rag-step-ic">✓</div><div class="rag-step-tx">권한 필터링 — <b>책임매니저 등급</b></div><div class="rag-step-mt">3 levels</div></div>
            <div class="rag-step"><div class="rag-step-ic">✓</div><div class="rag-step-tx">Vector 검색 — <b>12개 청크</b> 발견 → 상위 3개 선별</div><div class="rag-step-mt">cosine ≥ 0.71</div></div>
          </div>
        </div>
        <div class="ai-tx">
          <p>해당 질의에 대한 답변입니다. 이는 프로토타입 시뮬레이션이며, 실제 RAG 엔진이 연결되면 구매업무규정, 업무표준, VAATZ 매뉴얼 등을 기반으로 정확한 근거와 함께 답변이 생성됩니다.</p>
          <p>실제 구현 시에는 관련 문서의 출처가 <span class="cr" onclick="openSourceFromCitation(1)">1</span><span class="cr" onclick="openSourceFromCitation(2)">2</span> 형태로 표시되며, 각 인용을 클릭하면 우측 패널에 원문 페이지가 노란색 하이라이트와 함께 표시됩니다.</p>
        </div>
        <div class="sr2"><div class="sr2-h" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'"><div class="sr2-hl"><div class="sr2-hl-ic">📎</div>참조 문서</div><div class="sr2-hr"><span class="sr2-cnt">3</span><span>· 클릭하여 원문 확인</span></div></div>
        <div class="sr2-list">
          <div class="sr2-c" onclick="openSourceFromCitation(1)"><div class="sr2-c-n">1</div><div class="sr2-c-i"><div class="sr2-c-nm">구매업무규정 제23조 <span class="sr2-c-tp t-pdf">PDF</span></div><div class="sr2-c-mt"><span>제4장 입찰 · p.34~38</span><span class="sr2-c-rel">관련도 0.88</span></div></div><span class="sr2-c-go">→</span></div>
          <div class="sr2-c" onclick="openSourceFromCitation(2)"><div class="sr2-c-n">2</div><div class="sr2-c-i"><div class="sr2-c-nm">입찰운영 업무표준 STD-PUR-012 <span class="sr2-c-tp t-doc">DOCX</span></div><div class="sr2-c-mt"><span>3.2 절 · p.12~18</span><span class="sr2-c-rel">관련도 0.82</span></div></div><span class="sr2-c-go">→</span></div>
        </div></div>
        <div class="ai-ac"><button class="ai-a" onclick="this.classList.toggle('active')">👍 도움됨</button><button class="ai-a" onclick="this.classList.toggle('active')">👎 부정확</button><button class="ai-a" onclick="copyAnswer(this)">📋 복사</button><button class="ai-a">🔄 재생성</button></div>
      </div>
    `;
    chatArea.appendChild(aiMsg);
    scrollChat();
    addToHistory(text);
    
    // Flash the src dot to indicate new sources
    const dot = document.getElementById('rpSrcDot');
    if(dot) dot.style.display='block';
  }, 1400+Math.random()*600);
};



/* ═══════════════════════════════════════════════════════════
   v23 COMPLETE POLISH — Safe overrides + UX rebuild
   ═══════════════════════════════════════════════════════════ */
(function(){
  const $ = (sel, root=document)=>root.querySelector(sel);
  const $$ = (sel, root=document)=>Array.from(root.querySelectorAll(sel));
  const esc = (s)=>String(s??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const safeToast = (m,i='✅',d=2600)=>{ try{ toast(m,i,d); }catch(e){ console.log(i,m); } };

  const teams = [
    {name:'구매전략팀', icon:'📁', owner:'이준혁 책임매니저', docs:142, managing:116, finalReq:8, published:18, health:'정상'},
    {name:'반도체구매팀', icon:'💾', owner:'최유진 매니저', docs:96, managing:77, finalReq:7, published:12, health:'검토중'},
    {name:'구매품질기획팀', icon:'⭐', owner:'정현수 책임매니저', docs:88, managing:70, finalReq:4, published:14, health:'정상'},
    {name:'PT제어부품구매팀', icon:'⚙️', owner:'한도윤 매니저', docs:74, managing:61, finalReq:5, published:8, health:'정상'},
    {name:'구매역량개발팀', icon:'🎓', owner:'윤서연 매니저', docs:53, managing:44, finalReq:2, published:7, health:'보강필요'},
    {name:'샤시부품구매1팀', icon:'🚘', owner:'박성민 매니저', docs:64, managing:52, finalReq:3, published:9, health:'정상'},
    {name:'의장시스템부품개발팀', icon:'🧩', owner:'장민우 책임매니저', docs:59, managing:47, finalReq:3, published:9, health:'정상'},
    {name:'일반자재구매팀', icon:'📦', owner:'이소라 매니저', docs:112, managing:89, finalReq:9, published:14, health:'검토중'},
    {name:'원가관리팀', icon:'💰', owner:'오민재 책임매니저', docs:48, managing:38, finalReq:6, published:4, health:'보안주의'}
  ];
  const typeList=['PDF','PPT','DOCX','XLSX','CSV'];
  const secList=['리더 전용','일반 공개','지정 사용자'];
  const modeList=['통합모드','생산자재 모드','일반자재 모드','원가모드'];
  const statusList=['작성·보완중','등록 요청됨','보완 요청','AI 검색 반영완료'];
  const docNames=['입찰운영 업무표준','수의계약 운영지침','협력사 품질 5스타 기준','전동화 부품 단가 벤치마크','VAATZ 발주 생성 매뉴얼','해외법인 구매 승인 프로세스','조달청 물품구매계약 특수조건','반도체 수출규제 국가별 현황','원가 산정 기준표','일반자재 MRO 구매 가이드','납기 리스크 대응 매뉴얼','검수확인 업무표준','업체 평가 데이터셋','구매용어 표준정의집','계약관리 규정'];
  // ── 팀별 폴더 뷰: 부서 그룹핑 ──────────────────────────────
  const teamGroups = [
    { id:'tg-strategy', label:'구매전략·기획', icon:'🏛️',
      teams:['구매전략팀','구매품질기획팀','구매역량개발팀'] },
    { id:'tg-parts', label:'부품구매', icon:'⚙️',
      teams:['PT제어부품구매팀','샤시부품구매1팀','의장시스템부품개발팀','반도체구매팀'] },
    { id:'tg-materials', label:'자재·원가관리', icon:'📦',
      teams:['일반자재구매팀','원가관리팀'] }
  ];
  const folderCats=[
    {id:'rule',    label:'구매규정·제도', icon:'📕', subs:[
      {id:'rule-reg',  label:'구매규정서'},
      {id:'rule-std',  label:'표준·절차서'},
      {id:'rule-law',  label:'법령·공시문'}
    ]},
    {id:'bid',     label:'입찰관리',      icon:'🏷️', subs:[
      {id:'bid-plan',   label:'입찰계획서'},
      {id:'bid-doc',    label:'입찰서류'},
      {id:'bid-result', label:'낙찰결과'}
    ]},
    {id:'vaatz',   label:'VAATZ 매뉴얼',  icon:'🖥️', subs:[
      {id:'vaatz-user',  label:'사용자 가이드'},
      {id:'vaatz-admin', label:'관리자 가이드'},
      {id:'vaatz-api',   label:'API 문서'}
    ]},
    {id:'quality', label:'품질·5스타',    icon:'⭐', subs:[
      {id:'quality-5s',    label:'5스타 평가'},
      {id:'quality-audit', label:'품질감사'},
      {id:'quality-defect',label:'불량관리'}
    ]},
    {id:'cost',    label:'원가·단가',     icon:'💰', subs:[
      {id:'cost-unit',  label:'단가기준'},
      {id:'cost-bench', label:'벤치마크'},
      {id:'cost-fx',    label:'환율·시세'}
    ]}
  ];

  let currentTeam = teams[0].name;
  let teamDocs = [];
  let companionOpen=false;
  let userPoints=520;

  function makeDocs(){
    let rows=[];
    teams.forEach((t,ti)=>{
      for(let i=0;i<t.docs;i++){
        const name=docNames[(i+ti)%docNames.length];
        const type=typeList[(i+ti)%typeList.length];
        const sec=secList[(i+ti)%secList.length];
        const mode=modeList[(i+ti*2)%modeList.length];
        let status='작성·보완중';
        if(i < t.finalReq) status='등록 요청됨';
        if(i >= t.docs - t.published) status='AI 검색 반영완료';
        if(i===13 && ti%2===1) status='보완 요청';
        const cat=['rule','bid','vaatz','quality','cost'][(i+ti)%5];
        const subcatMap={'rule':['rule-reg','rule-std','rule-law'],'bid':['bid-plan','bid-doc','bid-result'],'vaatz':['vaatz-user','vaatz-admin','vaatz-api'],'quality':['quality-5s','quality-audit','quality-defect'],'cost':['cost-unit','cost-bench','cost-fx']};
        const subcat=subcatMap[cat][(i)%3];
        rows.push({id:`${ti+1}-${i+1}`, team:t.name, name:`${name}_${String(i+1).padStart(3,'0')}.${type.toLowerCase()}`, type, sec, mode, cat, subcat, version:`v${1+(i%4)}.${i%10}`, owner:i%3===0?t.owner:(i%3===1?'팀 Admin':'팀원 업로드'), date:`2026.05.${String(1+(i%22)).padStart(2,'0')}`, status, chunks:80+(i*7)%420});
      }
    });
    return rows;
  }
  teamDocs = makeDocs();

  function modeCls(mode){ if(mode.includes('생산'))return'mode-prod'; if(mode.includes('일반'))return'mode-general'; if(mode.includes('원가'))return'mode-cost'; return'mode-all'; }
  function statusPill(status){ const cls=status==='AI 검색 반영완료'?'green':status==='등록 요청됨'?'blue':status==='보완 요청'?'red':'amber'; return `<span class="v23-pill ${cls}">${status}</span>`; }
  function secPill(sec){ const cls=sec==='리더 전용'?'red':sec==='지정 사용자'?'violet':'green'; return `<span class="v23-pill ${cls}">${sec}</span>`; }
  function modeBadge(mode){ return `<span class="mode-badge ${modeCls(mode)}">${mode}</span>`; }

  window.toggleTheme=function(){
    const html=document.documentElement; const cur=html.getAttribute('data-theme')||'dark'; const next=cur==='dark'?'light':'dark';
    html.setAttribute('data-theme', next); const tb=$('#themeBtn'); if(tb) tb.textContent=next==='light'?'☀️':'🌙';
    safeToast(next==='light'?'라이트 모드로 전환했습니다.':'다크 모드로 전환했습니다.', next==='light'?'☀️':'🌙',1800);
  };
  window.rpT=function(force){ const rp=$('#rp'); if(!rp)return; if(typeof force==='boolean') rp.classList.toggle('sh',force); else rp.classList.toggle('sh'); const btn=$('#rp-btn'); if(btn)btn.classList.toggle('act',rp.classList.contains('sh')); if(rp.classList.contains('sh') && typeof rpSwitchTab==='function'){ try{rpSwitchTab(window.rpCurrentTab||'src')}catch(e){} } };
  const oldOpenSource = window.openSourceFromCitation;
  window.openSourceFromCitation=function(citNum){
    try{
      if(typeof currentSourceDoc!=='undefined'){ currentSourceDoc=citNum; currentSourcePage=0; }
      const rp=$('#rp'); if(rp){rp.classList.add('sh','src-active'); setTimeout(()=>rp.classList.remove('src-active'),500)}
      if(typeof rpSwitchTab==='function') rpSwitchTab('src');
      if(typeof renderSourceChips==='function') renderSourceChips();
      if(typeof renderSourcePage==='function') renderSourcePage();
    }catch(err){ if(oldOpenSource) try{oldOpenSource(citNum)}catch(e){} }
  };

  function injectTopbar(){
    const tbL=$('.tb-l'); if(!tbL) return;
    if(!$('.admin-top-pill')){ const tbR=$('.tb-r'); if(tbR) tbR.insertAdjacentHTML('afterbegin','<button class="tb-b admin-top-pill" onclick="oa();openAdminTab(\'p-req\')">🔐 ADMIN</button>'); }
    if(!$('.ai-mode-switch')){
      const target=$('.sc-sw',tbL);
      const html=`<div class="ai-mode-switch" id="topModeSwitch"><span class="ai-mode-label">AI Mode</span>${modeList.map((m,i)=>`<button class="ai-mode-btn ${i===0?'on':''}" data-mode="${m}">${m.replace(' 모드','')}</button>`).join('')}</div>`;
      (target||tbL).insertAdjacentHTML(target?'afterend':'beforeend',html);
    }
  }
  document.addEventListener('click',e=>{
    const modeBtn=e.target.closest('.ai-mode-btn');
    if(modeBtn){ $$('.ai-mode-btn').forEach(b=>b.classList.remove('on')); modeBtn.classList.add('on'); safeToast(`${modeBtn.dataset.mode}로 전환했습니다. 접근 가능한 DB만 검색됩니다.`,'🧭',2200); }
  });

  function buildAdminTabs(){
    const tab=$('.adm-t'); if(!tab) return;
    tab.innerHTML=`
      <button class="atb on" onclick="at(this,'p-req')">🏠 운영 홈</button>
      <button class="atb" onclick="at(this,'p-team')">📁 팀별 폴더</button>
      <button class="atb" onclick="at(this,'p-final')">✅ 최종 승인</button>
      <button class="atb" onclick="at(this,'p-list')">📚 최종 리스트</button>
      <button class="atb" onclick="at(this,'p-datamart')">🔗 데이터마트</button>
      <button class="atb" onclick="at(this,'p-mode')">🧭 AI 모드·DB</button>
      <button class="atb" onclick="at(this,'p-usr')">👥 사용자·권한</button>
    `;
  }
  window.at=function(b,id){ $$('.atb').forEach(t=>t.classList.remove('on')); if(b)b.classList.add('on'); $$('.adm-b').forEach(e=>e.style.display='none'); const sec=$('#'+id); if(sec) sec.style.display='block'; };
  window.openAdminTab=function(id){ const btn=[...$$('.atb')].find(b=>b.getAttribute('onclick')?.includes(id)); window.at(btn,id); };

  function addAdmSection(id, html){
    let el=$('#'+id); if(!el){ el=document.createElement('div'); el.id=id; el.className='adm-b'; el.style.display='none'; $('.adm')?.appendChild(el); }
    el.innerHTML=html;
  }

  function renderAdmin(){
    const totalDocs=teams.reduce((a,t)=>a+t.docs,0), totalFinal=teams.reduce((a,t)=>a+t.finalReq,0), published=teams.reduce((a,t)=>a+t.published,0);
    addAdmSection('p-req', `
      <div class="v23-admin-title"><div><div class="v23-title-main">VAATZ AI 지식 운영 홈</div><div class="v23-title-sub">복잡한 트리 대신 3단계 운영 흐름으로 관리합니다. 팀별 폴더에서 관리하고, 등록 요청됨 후 System Admin이 승인하면 최종 리스트와 AI 모드에 반영됩니다.</div></div><div class="v23-actions"><button class="v23-btn" onclick="openAdminTab('p-team')">📁 팀 폴더 보기</button><button class="v23-btn primary" onclick="openAdminTab('p-final')">✅ 최종 승인 처리</button></div></div>
      <div class="v23-hero-grid">
        <div class="v23-kpi"><div class="v23-kpi-label">비정형 문서 총량</div><div class="v23-kpi-value">${totalDocs}<span>건</span></div><div class="v23-kpi-desc">팀별 PDF/PPT/DOCX/XLSX 문서함 전체</div><div class="spark"><i style="height:35%"></i><i style="height:45%"></i><i style="height:62%"></i><i style="height:51%"></i><i style="height:72%"></i><i style="height:85%"></i></div></div>
        <div class="v23-kpi amber"><div class="v23-kpi-label">최종 승인 대기</div><div class="v23-kpi-value">${totalFinal}<span>건</span></div><div class="v23-kpi-desc">팀 Admin이 등록 요청됨한 문서</div><div class="spark"><i style="height:55%"></i><i style="height:72%"></i><i style="height:48%"></i><i style="height:62%"></i><i style="height:81%"></i></div></div>
        <div class="v23-kpi green"><div class="v23-kpi-label">AI AI 검색 반영완료</div><div class="v23-kpi-value">${published}<span>건</span></div><div class="v23-kpi-desc">임베딩 완료 및 검색 활성화</div><div class="spark"><i style="height:42%"></i><i style="height:54%"></i><i style="height:68%"></i><i style="height:79%"></i><i style="height:88%"></i></div></div>
        <div class="v23-kpi violet"><div class="v23-kpi-label">정형 I/F</div><div class="v23-kpi-value">7<span>개</span></div><div class="v23-kpi-desc">VAATZ DB, Autopedia, 타 부문 배치</div><div class="spark"><i style="height:60%"></i><i style="height:60%"></i><i style="height:60%"></i><i style="height:40%"></i><i style="height:80%"></i></div></div>
      </div>
      <div class="v23-process" id="v23HomeProcess">
        <div class="v23-step" id="v23Step1" onclick="filterAdminHomeStep(1)"><div class="v23-step-num">1</div><div class="v23-step-title">팀별 폴더 관리</div><div class="v23-step-desc">각 팀 Admin이 문서를 업로드·수정·버전관리합니다. 클릭하면 이 단계 문서를 바로 필터링합니다.</div><div class="v23-step-foot"><span class="v23-pill amber">${teams.length}개 팀</span><span class="v23-step-hint">클릭해서 필터링</span></div></div>
        <div class="v23-arrow">→</div>
        <div class="v23-step" id="v23Step2" onclick="filterAdminHomeStep(2)"><div class="v23-step-num">2</div><div class="v23-step-title">System Admin 최종 승인</div><div class="v23-step-desc">구매디지털추진팀 Admin이 보안등급, AI 모드, 통합 폴더를 지정하고 최종 승인합니다.</div><div class="v23-step-foot"><span class="v23-pill blue">${totalFinal}건 대기</span><span class="v23-step-hint">클릭해서 필터링</span></div></div>
        <div class="v23-arrow">→</div>
        <div class="v23-step" id="v23Step3" onclick="filterAdminHomeStep(3)"><div class="v23-step-num">3</div><div class="v23-step-title">최종 리스트 관리</div><div class="v23-step-desc">승인된 문서는 최종 지식 리스트에서 버전, 모드, 보안, 임베딩 상태를 운영합니다.</div><div class="v23-step-foot"><span class="v23-pill green">${published}건 활성</span><span class="v23-step-hint">클릭해서 필터링</span></div></div>
      </div>
      <div id="v23HomeFilterPanel" style="display:none"></div>
      <div class="v23-workgrid"><div class="v23-panel"><div class="v23-panel-h"><div class="v23-panel-title">🚨 오늘 처리할 일</div><button class="v23-btn" onclick="openAdminTab('p-final')">전체 보기</button></div><div class="v23-panel-body"><div class="v23-mini-list">${teamDocs.filter(d=>d.status==='등록 요청됨').slice(0,5).map(d=>`<div class="v23-mini-row"><div class="v23-mini-icon">${d.type==='PPT'?'📊':d.type==='XLSX'?'📈':'📄'}</div><div class="v23-mini-main"><div class="v23-mini-title">${esc(d.name)}</div><div class="v23-mini-meta"><span>${esc(d.team)}</span><span>${esc(d.mode)}</span><span>${esc(d.sec)}</span></div></div><button class="v23-btn primary" onclick="openAdminTab('p-final')">검토</button></div>`).join('')}</div></div></div><div class="v23-panel"><div class="v23-panel-h"><div class="v23-panel-title">🔗 정형 데이터 배치 상태</div><button class="v23-btn" onclick="openAdminTab('p-datamart')">모니터링</button></div><div class="v23-panel-body"><div class="v23-mini-list"><div class="v23-mini-row"><div class="v23-mini-icon">🖥️</div><div class="v23-mini-main"><div class="v23-mini-title">VAATZ 업체·품목 마스터</div><div class="v23-mini-meta"><span>05:10 성공</span><span>+14,230 rows</span></div></div><span class="v23-pill green">정상</span></div><div class="v23-mini-row"><div class="v23-mini-icon">📖</div><div class="v23-mini-main"><div class="v23-mini-title">Autopedia 용어 DB</div><div class="v23-mini-meta"><span>06:00 성공</span><span>4,832 terms</span></div></div><span class="v23-pill green">정상</span></div><div class="v23-mini-row"><div class="v23-mini-icon">💰</div><div class="v23-mini-main"><div class="v23-mini-title">원가 DB 일 배치</div><div class="v23-mini-meta"><span>07:30 일부 실패</span><span>12 rows error</span></div></div><span class="v23-pill amber">확인</span></div></div></div></div></div>
    `);

    // ── 팀별 폴더 뷰 헬퍼 v3: 파이프라인 배너 + 파일 트리 ──────
    function pipelineBanner(active){
      const pendCnt=teamDocs.filter(d=>d.status==='등록 요청됨').length;
      const doneCnt=teamDocs.filter(d=>d.status==='AI 검색 반영완료').length;
      const totCnt=teams.reduce((a,t)=>a+t.docs,0);
      return `<div class="adm-pipeline">
        <div class="adm-pipe-step${active==='team'?' adm-pipe-active':''}" onclick="openAdminTab('p-team')">
          <span class="adm-pipe-ic">📁</span>
          <div><div class="adm-pipe-label">팀별 폴더</div><div class="adm-pipe-count">${totCnt}건 관리중</div></div>
        </div>
        <div class="adm-pipe-arrow">→</div>
        <div class="adm-pipe-step${active==='final'?' adm-pipe-active':' adm-pipe-pending'}" onclick="openAdminTab('p-final')">
          <span class="adm-pipe-ic">⏳</span>
          <div><div class="adm-pipe-label">최종 승인</div><div class="adm-pipe-count adm-pipe-pend-c">${pendCnt}건 대기</div></div>
        </div>
        <div class="adm-pipe-arrow">→</div>
        <div class="adm-pipe-step${active==='list'?' adm-pipe-active':' adm-pipe-done'}" onclick="openAdminTab('p-list')">
          <span class="adm-pipe-ic">✅</span>
          <div><div class="adm-pipe-label">최종 리스트</div><div class="adm-pipe-count adm-pipe-done-c">${doneCnt}건 반영</div></div>
        </div>
      </div>`;
    }
    function tfFileRow(d){
      const ic=d.type==='PDF'?'📄':d.type==='PPT'?'📊':d.type==='XLSX'?'📈':d.type==='DOCX'?'📝':'📋';
      let btn='';
      if(d.status==='작성·보완중')
        btn=`<button class="v23-btn primary tf-req-btn" style="padding:3px 9px;font-size:10px;white-space:nowrap;flex-shrink:0" onclick="event.stopPropagation();requestAIDoc('${d.id}',this)">✈ AI 등록요청</button>`;
      else if(d.status==='등록 요청됨')
        btn=`<button class="v23-btn tf-req-btn" style="padding:3px 9px;font-size:10px;white-space:nowrap;flex-shrink:0;color:var(--accent)" onclick="event.stopPropagation();openAdminTab('p-final')">⏳ 승인대기 ↗</button>`;
      else if(d.status==='보완 요청')
        btn=`<button class="v23-btn warn tf-req-btn" style="padding:3px 9px;font-size:10px;white-space:nowrap;flex-shrink:0" onclick="event.stopPropagation();requestAIDoc('${d.id}',this)">↩ 보완 재요청</button>`;
      else
        btn=`<button class="v23-btn good tf-req-btn" style="padding:3px 9px;font-size:10px;white-space:nowrap;flex-shrink:0" onclick="event.stopPropagation();openAdminTab('p-list')">✅ 리스트 확인 ↗</button>`;
      const sCls=d.status==='AI 검색 반영완료'?'green':d.status==='등록 요청됨'?'blue':d.status==='보완 요청'?'red':'amber';
      return `<div class="tf-file-row" data-doc-id="${d.id}">
        <span class="tf-file-ic">${ic}</span>
        <div class="tf-file-info">
          <div class="tf-file-nm">${esc(d.name)}</div>
          <div class="tf-file-meta">${d.version} · ${esc(d.owner)} · ${d.date} · ${d.chunks} chunks</div>
        </div>
        <span class="v23-pill ${sCls} tf-file-status" style="flex-shrink:0;font-size:9px">${d.status}</span>
        ${btn}
      </div>`;
    }
    function tfTeamTree(t){
      const tid='tft_'+t.name.replace(/[\s·]/g,'_');
      const hCls=t.health==='정상'?'green':t.health==='보안주의'?'red':'amber';
      const tDocs=teamDocs.filter(d=>d.team===t.name);
      const catBlocks=folderCats.map(cat=>{
        const files=tDocs.filter(d=>d.cat===cat.id);
        const pend=files.filter(d=>d.status==='등록 요청됨').length;
        const done=files.filter(d=>d.status==='AI 검색 반영완료').length;
        const cid=tid+'_'+cat.id;
        // L4: 소분류 폴더 블록
        const subBlocks=(cat.subs||[]).map(sub=>{
          const subFiles=files.filter(d=>d.subcat===sub.id);
          const sid=cid+'_'+sub.id;
          const sp=subFiles.filter(d=>d.status==='등록 요청됨').length;
          const sd=subFiles.filter(d=>d.status==='AI 검색 반영완료').length;
          return `<div class="tf-subfolder" id="${sid}">
            <div class="tf-subfolder-hd" onclick="toggleCatFolder('${sid}')">
              <span class="tf-subfolder-chev" id="${sid}-chev">▶</span>
              <span class="tf-subfolder-ic">📂</span>
              <span class="tf-subfolder-label">${sub.label}</span>
              <span class="v23-pill" style="font-size:8px;background:var(--bg-4);color:var(--text-3)">${subFiles.length}건</span>
              ${sp>0?`<span class="v23-pill amber" style="font-size:8px">${sp} 대기</span>`:''}
              ${sd>0?`<span class="v23-pill green" style="font-size:8px">${sd} 완료</span>`:''}
              <button class="v23-btn" style="padding:2px 7px;font-size:9px;margin-left:auto;flex-shrink:0" onclick="event.stopPropagation();openUploadModal('${esc(t.name)}','${cat.id}','${sub.id}')">+ 업로드</button>
            </div>
            <div class="tf-subfolder-body" id="${sid}-body" style="display:none">
              ${subFiles.length?subFiles.slice(0,5).map(d=>tfFileRow(d)).join(''):'<div class="tf-empty-sub">파일이 없습니다. 업로드 버튼을 클릭하세요.</div>'}
            </div>
          </div>`;
        }).join('');
        return `<div class="tf-catfolder" id="${cid}">
          <div class="tf-catfolder-hd" onclick="toggleCatFolder('${cid}')">
            <span class="tf-catfolder-chev" id="${cid}-chev">▶</span>
            <span>${cat.icon}</span>
            <span class="tf-catfolder-label">${cat.label}</span>
            <span class="v23-pill" style="font-size:9px;background:var(--bg-4);color:var(--text-3)">${files.length}건</span>
            ${pend>0?`<span class="v23-pill amber" style="font-size:9px">${pend} 대기</span>`:''}
            ${done>0?`<span class="v23-pill green" style="font-size:9px">${done} 완료</span>`:''}
            <button class="v23-btn" style="padding:3px 8px;font-size:9.5px;margin-left:auto;flex-shrink:0" onclick="event.stopPropagation();openUploadModal('${esc(t.name)}','${cat.id}','')">+ 업로드</button>
          </div>
          <div class="tf-catfolder-body" id="${cid}-body" style="display:none">
            ${cat.subs&&cat.subs.length?subBlocks:files.slice(0,6).map(d=>tfFileRow(d)).join('')}
            ${!cat.subs&&files.length>6?`<div class="tf-more-row" onclick="openTeamFolderModal('${esc(t.name)}')">+ ${files.length-6}건 더 보기 →</div>`:''}
          </div>
        </div>`;
      }).join('');
      return `<div class="tf-team-node" id="${tid}">
        <div class="tf-team-row-hd" onclick="expandTFTeam('${tid}')">
          <span class="tf-expand-ic" id="${tid}-chev">▶</span>
          <span class="tf-team-ic">${t.icon}</span>
          <div class="tf-team-info">
            <div class="tf-team-name">${esc(t.name)}</div>
            <div class="tf-team-owner">Admin: ${esc(t.owner)}</div>
          </div>
          <div class="tf-team-nums">
            <span>${t.docs}<span class="tf-num-l">건</span></span>
            <span class="tf-num-sep">·</span>
            <span class="tf-num-req">${t.finalReq}<span class="tf-num-l">요청</span></span>
            <span class="tf-num-sep">·</span>
            <span class="tf-num-ok">${t.published}<span class="tf-num-l">완료</span></span>
          </div>
          <span class="v23-pill ${hCls}" style="flex-shrink:0;font-size:9px">${t.health}</span>
        </div>
        <div class="tf-team-tree-body" id="${tid}-tree" style="display:none">
          ${catBlocks}
        </div>
      </div>`;
    }
    function tfGroupHtml(g){
      const gTeams=teams.filter(t=>g.teams.includes(t.name));
      const tot=gTeams.reduce((a,t)=>a+t.docs,0);
      const req=gTeams.reduce((a,t)=>a+t.finalReq,0);
      const pub=gTeams.reduce((a,t)=>a+t.published,0);
      return `<div class="tf-group" id="${g.id}">
        <div class="tf-group-hd" onclick="toggleTFGroup('${g.id}')">
          <span class="tf-group-ic">${g.icon}</span>
          <div class="tf-group-info">
            <div class="tf-group-label">${g.label}</div>
            <div class="tf-group-meta">${gTeams.length}개 팀 &nbsp;·&nbsp; 전체 <b>${tot}</b>건 &nbsp;·&nbsp; 요청 <b style="color:var(--a)">${req}</b>건 &nbsp;·&nbsp; 완료 <b style="color:var(--g)">${pub}</b>건</div>
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            <span class="v23-pill blue" style="font-size:10px">${gTeams.length}팀</span>
            <span class="tf-chev" id="${g.id}-chev">▼</span>
          </div>
        </div>
        <div class="tf-group-body" id="${g.id}-body">
          ${gTeams.map(t=>tfTeamTree(t)).join('')}
        </div>
      </div>`;
    }

    addAdmSection('p-team', `
      ${pipelineBanner('team')}
      <div class="v23-admin-title" style="margin-top:14px">
        <div>
          <div class="v23-title-main">팀별 폴더 관리</div>
          <div class="v23-title-sub">📁 폴더 보기: 부서 → 팀 → 카테고리 폴더 → 파일까지 드릴다운. 파일마다 [AI 등록요청] → 최종 승인 → 최종 리스트로 자동 연결됩니다.</div>
        </div>
        <div class="v23-actions">
          <div class="tf-view-toggle">
            <button id="tvFolderBtn" class="v23-btn primary" onclick="switchTeamView('folder')">📁 폴더 보기</button>
            <button id="tvListBtn" class="v23-btn" onclick="switchTeamView('list')">📋 목록 보기</button>
          </div>
          <button class="v23-btn">＋ 팀 폴더 추가</button>
        </div>
      </div>

      <!-- 📁 폴더 트리 보기 (기본) -->
      <div id="tvFolderPane">
        ${teamGroups.map(g=>tfGroupHtml(g)).join('')}
      </div>

      <!-- 📋 목록 보기 (카드 그리드) -->
      <div id="tvListPane" style="display:none">
        <div class="team-folder-grid">
          ${teams.map(t=>`<div class="team-folder-card"><div class="team-folder-top"><div class="team-folder-ic">${t.icon}</div><span class="v23-pill ${t.health==='정상'?'green':t.health==='보안주의'?'red':'amber'}">${t.health}</span></div><div class="team-folder-name">${t.name}</div><div class="team-folder-owner">Admin: ${t.owner}</div><div class="team-folder-stats"><div class="team-stat"><div class="team-stat-v">${t.docs}</div><div class="team-stat-l">전체</div></div><div class="team-stat"><div class="team-stat-v" style="color:var(--a)">${t.finalReq}</div><div class="team-stat-l">최종요청</div></div><div class="team-stat"><div class="team-stat-v" style="color:var(--g)">${t.published}</div><div class="team-stat-l">반영완료</div></div></div><div class="team-folder-actions"><button class="v23-btn" onclick="openTeamFolderModal('${t.name}')">크게 보기</button><button class="v23-btn primary" onclick="openTeamFolderModal('${t.name}','request')">등록 요청됨</button></div></div>`).join('')}
        </div>
      </div>
    `);

    const finalDocs=teamDocs.filter(d=>d.status==='등록 요청됨').slice(0,10);
    addAdmSection('p-final', `
      ${pipelineBanner('final')}
      <div class="v23-admin-title"><div><div class="v23-title-main">System Admin 최종 승인</div><div class="v23-title-sub">팀 Admin이 올린 등록 요청됨만 모아 검토합니다. 여기서 통합 폴더, 보안등급, AI 모드를 확정하면 최종 리스트로 이동합니다.</div></div><div class="v23-actions"><button class="v23-btn warn">보완 요청 사유 템플릿</button><button class="v23-btn primary" onclick="approveAllVisibleFinals()">✅ 화면 내 일괄 승인</button></div></div>
      <div class="final-layout"><div>${finalDocs.map((d,i)=>`<div class="approval-card" data-final-id="${d.id}"><div class="approval-card-top"><div><div class="approval-doc">${esc(d.name)}</div><div class="approval-meta">${esc(d.team)} · ${esc(d.owner)} · ${d.date} · ${d.chunks} chunks 예상</div></div>${statusPill(d.status)}</div><div class="approval-settings"><div class="setting-box"><div class="setting-label">통합 폴더</div><select><option>구매업무규정</option><option>입찰관리</option><option>VAATZ 매뉴얼</option><option>품질 5스타</option><option>원가/단가</option></select></div><div class="setting-box"><div class="setting-label">보안등급</div><select><option>${d.sec}</option><option>리더 전용</option><option>일반 공개</option><option>지정 사용자</option></select></div><div class="setting-box"><div class="setting-label">AI 모드</div><select><option>${d.mode}</option>${modeList.map(m=>`<option>${m}</option>`).join('')}</select></div></div><div style="display:flex;gap:6px;margin-top:10px;justify-content:flex-end"><button class="v23-btn" onclick="previewFinalDoc('${d.id}')">원문 보기</button><button class="v23-btn danger" onclick="rejectFinalDoc(this)">보완 요청</button><button class="v23-btn primary" onclick="approveFinalDoc(this)">최종 승인</button></div></div>`).join('')}</div><div class="final-preview"><div class="v23-panel-title" style="margin-bottom:10px">🔎 검토 미리보기</div><div class="preview-doc-page" id="finalPreview"><h4>문서 미리보기</h4><p>왼쪽 문서의 <span class="preview-highlight">원문 보기</span>를 클릭하면 여기에 요약·하이라이트·중복 문서 여부가 표시됩니다.</p><p>최종 승인 전 확인 항목: 최신 버전 여부, 중복 등록 여부, 보안등급, AI 모드 매핑, 임베딩 제외 문구.</p></div><div class="mode-note">Tip. 최종 승인 시 문서가 최종 리스트로 이동하고, 선택한 AI 모드의 RAG Index에 반영됩니다.</div></div></div>
    `);

    const publishedDocs=teamDocs.filter(d=>d.status==='AI 검색 반영완료').slice(0,36);
    addAdmSection('p-list', `
      ${pipelineBanner('list')}
      <div class="v23-admin-title"><div><div class="v23-title-main">최종 리스트 관리</div><div class="v23-title-sub">실제 AI가 검색하는 최종 지식 목록입니다. 문서 버전·보안등급·AI 모드·임베딩 상태를 관리합니다.</div></div><div class="v23-actions"><button class="v23-btn">CSV 내보내기</button><button class="v23-btn primary">＋ 수동 등록</button></div></div>
      <div class="final-list-filter"><input id="finalListSearch" placeholder="최종 문서 검색" oninput="filterFinalList()"><select id="finalModeFilter" onchange="filterFinalList()"><option value="">전체 모드</option>${modeList.map(m=>`<option>${m}</option>`).join('')}</select><select id="finalSecFilter" onchange="filterFinalList()"><option value="">전체 보안</option>${secList.map(s=>`<option>${s}</option>`).join('')}</select></div>
      <div class="final-table-wrap"><table class="large-table" id="finalDocTable"><thead><tr><th>문서명</th><th>팀</th><th>유형</th><th>보안</th><th>AI 모드</th><th>버전</th><th>임베딩</th><th style="text-align:right">작업</th></tr></thead><tbody>${publishedDocs.map(d=>`<tr data-mode="${d.mode}" data-sec="${d.sec}" data-text="${(d.name+d.team+d.mode+d.sec).toLowerCase()}"><td><div class="doc-name-strong">${esc(d.name)}</div><div class="doc-subtle">최종 반영일 ${d.date} · ${d.chunks} chunks</div></td><td>${esc(d.team)}</td><td>${d.type}</td><td>${secPill(d.sec)}</td><td>${modeBadge(d.mode)}</td><td>${d.version}</td><td><span class="v23-pill green">활성</span></td><td><div class="row-actions"><button class="v23-btn" onclick="previewPublishedDoc(this)">상세</button><button class="v23-btn">재색인</button></div></td></tr>`).join('')}</tbody></table></div>
    `);

    addAdmSection('p-datamart', `
      <div class="v23-admin-title"><div><div class="v23-title-main">정형 데이터마트 I/F 모니터링</div><div class="v23-title-sub">VAATZ DB, Autopedia, 타 부문 시스템은 데이터마트에서 일 배치로 수집하고 RAG Index에 반영합니다.</div></div><div class="v23-actions"><button class="v23-btn">배치 캘린더</button><button class="v23-btn primary" onclick="safeV23Toast('전체 I/F 상태를 재점검했습니다.','🔄')">전체 재점검</button></div></div>
      <div class="datamart-grid"><div class="if-card"><div class="if-head"><div><div class="if-name">VAATZ 업체·품목 마스터</div><div class="if-desc">업체, 품목, 발주, 검수, 납품 실적</div></div><span class="v23-pill green">정상</span></div><div class="if-metrics"><div class="if-metric"><div class="if-metric-v">1.42M</div><div class="if-metric-l">ROWS</div></div><div class="if-metric"><div class="if-metric-v">05:10</div><div class="if-metric-l">LAST</div></div><div class="if-metric"><div class="if-metric-v">0</div><div class="if-metric-l">ERROR</div></div></div></div><div class="if-card"><div class="if-head"><div><div class="if-name">Autopedia</div><div class="if-desc">구매/생산/품질 용어 사전</div></div><span class="v23-pill green">정상</span></div><div class="if-metrics"><div class="if-metric"><div class="if-metric-v">4,832</div><div class="if-metric-l">TERMS</div></div><div class="if-metric"><div class="if-metric-v">06:00</div><div class="if-metric-l">LAST</div></div><div class="if-metric"><div class="if-metric-v">0</div><div class="if-metric-l">ERROR</div></div></div></div><div class="if-card warn"><div class="if-head"><div><div class="if-name">원가 DB</div><div class="if-desc">원가 테이블, 단가 이력, 환율 기준</div></div><span class="v23-pill amber">부분 실패</span></div><div class="if-metrics"><div class="if-metric"><div class="if-metric-v">324K</div><div class="if-metric-l">ROWS</div></div><div class="if-metric"><div class="if-metric-v">07:30</div><div class="if-metric-l">LAST</div></div><div class="if-metric"><div class="if-metric-v">12</div><div class="if-metric-l">ERROR</div></div></div></div><div class="if-card"><div class="if-head"><div><div class="if-name">타 부문 시스템</div><div class="if-desc">품질, 생산, 물류 부문 연계 테이블</div></div><span class="v23-pill green">정상</span></div><div class="if-metrics"><div class="if-metric"><div class="if-metric-v">8</div><div class="if-metric-l">SOURCES</div></div><div class="if-metric"><div class="if-metric-v">04:20</div><div class="if-metric-l">LAST</div></div><div class="if-metric"><div class="if-metric-v">0</div><div class="if-metric-l">ERROR</div></div></div></div></div>
      <div class="batch-timeline"><div class="v23-panel-title" style="margin-bottom:8px">⏱ 일 배치 파이프라인</div><div class="batch-row" style="color:var(--text-4);font-weight:800;text-transform:uppercase"><div>작업</div><div>진행률</div><div>시작</div><div>종료</div><div>상태</div></div>${[['VAATZ_MART_DAILY','100%','05:00','05:10','정상','green'],['AUTOPEDIA_TERM_SYNC','100%','06:00','06:02','정상','green'],['COST_DB_DAILY','92%','07:00','07:30','부분 실패','warn'],['RAG_INDEX_REFRESH','68%','08:00','진행중','진행중','warn'],['PERMISSION_SNAPSHOT','100%','03:00','03:04','정상','green']].map(r=>`<div class="batch-row"><div>${r[0]}</div><div><div class="progress-line ${r[5]}"><span style="width:${r[1]}"></span></div></div><div>${r[2]}</div><div>${r[3]}</div><div><span class="v23-pill ${r[5]==='green'?'green':'amber'}">${r[4]}</span></div></div>`).join('')}</div>
    `);

    addAdmSection('p-mode', `
      <div class="v23-admin-title"><div><div class="v23-title-main">AI 모드 · DB 매핑 관리</div><div class="v23-title-sub">비정형 문서와 정형 데이터 소스를 각 AI 모드에 드래그해서 연결합니다. 이후 팀/사용자별 접근 허용까지 통제할 수 있습니다.</div></div><div class="v23-actions"><button class="v23-btn">권한 미리보기</button><button class="v23-btn primary" onclick="safeV23Toast('AI 모드 매핑 정책을 저장했습니다.','🧭')">매핑 저장</button></div></div>
      <div class="mode-mapping"><div class="source-palette"><h4>연결 가능한 데이터 소스</h4>${['📄 구매업무규정 PDF','📊 VAATZ 입찰모듈 PPT','📈 품질 5스타 XLSX','🖥️ VAATZ 업체·품목 DB','📖 Autopedia 용어 DB','💰 원가 DB','🏭 생산부문 품질 DB','📦 일반자재 MRO DB'].map((s,i)=>`<div class="mode-source" draggable="true" data-source="${s}"><span>${s.split(' ')[0]}</span><span>${s.replace(/^\S+\s/,'')}</span></div>`).join('')}<div class="mode-note">비정형 문서는 System Admin 최종 승인 후 이 팔레트에 나타납니다. 정형 DB는 데이터마트 I/F 성공 후 연결 가능합니다.</div></div><div class="mode-board">${modeList.map((m,i)=>`<div class="mode-col" data-mode="${m}"><div class="mode-col-head"><div class="mode-col-title">${m}</div><span class="v23-pill ${i===0?'blue':i===1?'green':i===2?'violet':'red'}">${i===0?'기본':i===1?'생산':i===2?'일반':'보안'}</span></div><div class="mapped-list">${(i===0?['📄 구매업무규정 PDF','🖥️ VAATZ 업체·품목 DB','📖 Autopedia 용어 DB']:i===1?['🏭 생산부문 품질 DB','📈 품질 5스타 XLSX']:i===2?['📦 일반자재 MRO DB','📊 VAATZ 입찰모듈 PPT']:['💰 원가 DB']).map(x=>`<span class="mapped-chip">${x}<button onclick="this.parentElement.remove()">×</button></span>`).join('')}</div><div class="mode-note">${m} 접근은 사용자/팀 권한과 문서 보안등급을 모두 통과해야 활성화됩니다.</div></div>`).join('')}</div></div>
    `);

    const pusr=$('#p-usr'); if(pusr){ pusr.style.display='none'; }
    $$('.adm-b').forEach(e=>{ if(!['p-req'].includes(e.id)) e.style.display='none'; });
    $('#p-req').style.display='block';
  }

  // ── 운영 홈 단계별 필터링 ─────────────────────────────────
  var _homeActiveStep=0;
  window.filterAdminHomeStep=function(step){
    var statusMap={
      1:['작성·보완중','보완 요청'],
      2:['등록 요청됨'],
      3:['AI 검색 반영완료']
    };
    var stepTitles={1:'팀별 폴더 관리 (작성·보완 단계)',2:'System Admin 최종 승인 대기',3:'AI 반영 완료 문서'};
    var panel=document.getElementById('v23HomeFilterPanel');
    if(!panel) return;
    // toggle off if clicking same step
    if(_homeActiveStep===step){
      _homeActiveStep=0;
      panel.style.display='none'; panel.innerHTML='';
      [1,2,3].forEach(function(n){var el=document.getElementById('v23Step'+n);if(el)el.classList.remove('v23-step-active');});
      return;
    }
    _homeActiveStep=step;
    [1,2,3].forEach(function(n){
      var el=document.getElementById('v23Step'+n);
      if(el) el.classList.toggle('v23-step-active',n===step);
    });
    var statuses=statusMap[step]||[];
    var docs=teamDocs.filter(function(d){return statuses.includes(d.status);});
    var pillCls=step===1?'amber':step===2?'blue':'green';
    var rows=docs.slice(0,50).map(function(d){
      var ic=d.type==='PDF'?'📄':d.type==='PPT'?'📊':d.type==='XLSX'?'📈':d.type==='DOCX'?'📝':'📋';
      var sCls=d.status==='AI 검색 반영완료'?'green':d.status==='등록 요청됨'?'blue':d.status==='보완 요청'?'red':'amber';
      var action='';
      if(step===1) action='<button class="v23-btn primary" style="padding:3px 9px;font-size:10px" onclick="requestAIDoc(\''+d.id+'\',this)">✈ 등록요청</button>';
      else if(step===2) action='<button class="v23-btn" style="padding:3px 9px;font-size:10px" onclick="openAdminTab(\'p-final\')">검토 →</button>';
      else action='<button class="v23-btn good" style="padding:3px 9px;font-size:10px" onclick="openAdminTab(\'p-list\')">리스트 확인 →</button>';
      return '<div class="v23hf-row">'+
        '<span class="v23hf-ic">'+ic+'</span>'+
        '<div class="v23hf-info">'+
          '<div class="v23hf-name">'+esc(d.name)+'</div>'+
          '<div class="v23hf-meta">'+esc(d.team)+' · '+esc(d.owner)+' · '+d.date+'</div>'+
        '</div>'+
        '<span class="v23-pill '+sCls+'" style="flex-shrink:0;font-size:9px">'+d.status+'</span>'+
        action+
      '</div>';
    }).join('');
    panel.innerHTML=
      '<div class="v23hf-header">'+
        '<span class="v23hf-title">🔎 '+stepTitles[step]+'</span>'+
        '<span class="v23-pill '+pillCls+'" style="font-size:10px">'+docs.length+'건</span>'+
        '<button class="v23-btn" style="margin-left:auto;padding:3px 10px;font-size:10px" onclick="filterAdminHomeStep('+step+')">✕ 닫기</button>'+
      '</div>'+
      (rows||'<div style="padding:20px;color:var(--text-4);text-align:center">해당 단계에 문서가 없습니다.</div>')+
      (docs.length>50?'<div style="padding:10px;text-align:center;font-size:11px;color:var(--text-3)">+ '+(docs.length-50)+'건 더 있음</div>':'');
    panel.style.display='block';
  };

  // ── 팀 뷰 전환 & 폴더 접기/펼치기 ──────────────────────────
  window.switchTeamView = function(view) {
    var fp=$('#tvFolderPane'), lp=$('#tvListPane');
    var fb=$('#tvFolderBtn'), lb=$('#tvListBtn');
    if(!fp||!lp) return;
    if(view==='folder'){
      fp.style.display='block'; lp.style.display='none';
      if(fb){fb.classList.add('primary'); fb.style.background=''; fb.style.color='';}
      if(lb){lb.classList.remove('primary'); lb.style.background='var(--bg-3)'; lb.style.color='var(--text-2)';}
    } else {
      fp.style.display='none'; lp.style.display='block';
      if(lb){lb.classList.add('primary'); lb.style.background=''; lb.style.color='';}
      if(fb){fb.classList.remove('primary'); fb.style.background='var(--bg-3)'; fb.style.color='var(--text-2)';}
    }
  };
  window.toggleTFGroup = function(id) {
    var body=$('#'+id+'-body'), chev=$('#'+id+'-chev');
    if(!body) return;
    var open = body.style.display!=='none';
    body.style.display = open ? 'none' : 'block';
    if(chev) chev.style.transform = open ? 'rotate(-90deg)' : '';
  };
  window.expandTFTeam = function(id) {
    var body=$('#'+id+'-tree'), chev=$('#'+id+'-chev');
    if(!body) return;
    var open = body.style.display!=='none';
    body.style.display = open ? 'none' : 'block';
    if(chev) chev.style.transform = open ? '' : 'rotate(90deg)';
  };
  window.toggleCatFolder = function(id) {
    var body=$('#'+id+'-body'), chev=$('#'+id+'-chev');
    if(!body) return;
    var open = body.style.display!=='none';
    body.style.display = open ? 'none' : 'block';
    if(chev) chev.textContent = open ? '▶' : '▼';
  };
  window.requestAIDoc = function(id, btn) {
    var row = btn ? btn.closest('[data-doc-id]') : document.querySelector('[data-doc-id="'+id+'"]');
    var statusEl = row ? row.querySelector('.tf-file-status') : null;
    var btnEl = row ? row.querySelector('.tf-req-btn') : null;
    if(statusEl){
      statusEl.textContent = '등록 요청됨';
      statusEl.className = 'v23-pill blue tf-file-status';
    }
    if(btnEl){
      btnEl.textContent = '⏳ 승인대기 ↗';
      btnEl.className = 'v23-btn tf-req-btn';
      btnEl.style.color='var(--accent)';
      btnEl.onclick = function(e){ e.stopPropagation(); openAdminTab('p-final'); };
    }
    document.querySelectorAll('.adm-pipe-pend-c').forEach(function(el){
      var n=parseInt((el.textContent||'0').replace(/[^0-9]/g,''))||0;
      el.textContent=(n+1)+'건 대기';
    });
    safeToast('AI 등록 요청됨이 최종 승인 대기열에 추가됐습니다. [최종 승인] 탭에서 검토하세요.','🚀');
  };
  // ── 업로드 모달 (카테고리·소분류 combo 포함) ────────────────
  window.openUploadModal = function(teamName, preCatId, preSubId){
    var existingModal=document.getElementById('v36UploadModal');
    if(existingModal) existingModal.remove();
    var catData=[
      {id:'rule',   label:'구매규정·제도',icon:'📕', subs:[{id:'rule-reg',label:'구매규정서'},{id:'rule-std',label:'표준·절차서'},{id:'rule-law',label:'법령·공시문'}]},
      {id:'bid',    label:'입찰관리',     icon:'🏷️', subs:[{id:'bid-plan',label:'입찰계획서'},{id:'bid-doc',label:'입찰서류'},{id:'bid-result',label:'낙찰결과'}]},
      {id:'vaatz',  label:'VAATZ 매뉴얼', icon:'🖥️', subs:[{id:'vaatz-user',label:'사용자 가이드'},{id:'vaatz-admin',label:'관리자 가이드'},{id:'vaatz-api',label:'API 문서'}]},
      {id:'quality',label:'품질·5스타',   icon:'⭐', subs:[{id:'quality-5s',label:'5스타 평가'},{id:'quality-audit',label:'품질감사'},{id:'quality-defect',label:'불량관리'}]},
      {id:'cost',   label:'원가·단가',    icon:'💰', subs:[{id:'cost-unit',label:'단가기준'},{id:'cost-bench',label:'벤치마크'},{id:'cost-fx',label:'환율·시세'}]}
    ];
    var selectedCat=preCatId||catData[0].id;
    function renderSubOpts(catId){
      var c=catData.find(function(x){return x.id===catId;});
      if(!c) return '';
      return c.subs.map(function(s){return '<option value="'+s.id+'"'+(s.id===preSubId?' selected':'')+'>'+s.label+'</option>';}).join('');
    }
    var modal=document.createElement('div');
    modal.id='v36UploadModal';
    modal.className='v36-upload-overlay';
    modal.innerHTML=`
      <div class="v36-upload-modal">
        <div class="v36-upload-hd">
          <span>📤 파일 업로드 — ${esc(teamName)}</span>
          <button class="v34-ctrl-btn close" onclick="document.getElementById('v36UploadModal').remove()">✕</button>
        </div>
        <div class="v36-upload-body">
          <div class="v36-dropzone" id="v36DropZone" onclick="document.getElementById('v36FileInput').click()">
            <div class="v36-drop-ic">☁️</div>
            <div class="v36-drop-txt">파일을 드래그하거나 클릭하여 선택</div>
            <div class="v36-drop-sub">PDF · DOCX · XLSX · PPT · HWP 지원</div>
            <input type="file" id="v36FileInput" style="display:none" multiple accept=".pdf,.docx,.xlsx,.ppt,.pptx,.hwp"
              onchange="v36HandleFileSelect(this)">
          </div>
          <div id="v36FileList" style="margin:8px 0"></div>
          <div class="v36-form-row">
            <label class="v36-label">📁 대분류 (L3)</label>
            <select id="v36CatSel" class="v36-sel" onchange="v36UpdateSub(this.value)">
              ${catData.map(function(c){return '<option value="'+c.id+'"'+(c.id===selectedCat?' selected':'')+'>'+c.icon+' '+c.label+'</option>';}).join('')}
            </select>
          </div>
          <div class="v36-form-row">
            <label class="v36-label">📂 소분류 (L4)</label>
            <select id="v36SubSel" class="v36-sel">${renderSubOpts(selectedCat)}</select>
          </div>
          <div class="v36-form-row">
            <label class="v36-label">📝 업로드 사유</label>
            <input id="v36Reason" class="v36-input" placeholder="예: 2026년 기준 최신 규정 반영" />
          </div>
          <div class="v36-form-row">
            <label class="v36-label">🔒 보안등급</label>
            <select id="v36SecSel" class="v36-sel">
              <option>일반 공개</option><option>리더 전용</option><option>지정 사용자</option>
            </select>
          </div>
        </div>
        <div class="v36-upload-ft">
          <span id="v36UploadStatus" style="font-size:11px;color:var(--text-3)"></span>
          <div style="display:flex;gap:8px">
            <button class="v23-btn" onclick="document.getElementById('v36UploadModal').remove()">취소</button>
            <button class="v23-btn primary" onclick="v36SubmitUpload('${esc(teamName)}')">✈ 시스템 관리자에게 등록 요청</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(modal);
    // drag support
    var dz=document.getElementById('v36DropZone');
    if(dz){
      dz.ondragover=function(e){e.preventDefault();dz.classList.add('drag');};
      dz.ondragleave=function(){dz.classList.remove('drag');};
      dz.ondrop=function(e){e.preventDefault();dz.classList.remove('drag');v36HandleFileSelect({files:e.dataTransfer.files});};
    }
  };
  window.simUploadToFolder = function(teamName, catId){
    window.openUploadModal(teamName, catId, '');
  };
  window.v36UpdateSub = function(catId){
    var subData={
      'rule':    [{id:'rule-reg',label:'구매규정서'},{id:'rule-std',label:'표준·절차서'},{id:'rule-law',label:'법령·공시문'}],
      'bid':     [{id:'bid-plan',label:'입찰계획서'},{id:'bid-doc',label:'입찰서류'},{id:'bid-result',label:'낙찰결과'}],
      'vaatz':   [{id:'vaatz-user',label:'사용자 가이드'},{id:'vaatz-admin',label:'관리자 가이드'},{id:'vaatz-api',label:'API 문서'}],
      'quality': [{id:'quality-5s',label:'5스타 평가'},{id:'quality-audit',label:'품질감사'},{id:'quality-defect',label:'불량관리'}],
      'cost':    [{id:'cost-unit',label:'단가기준'},{id:'cost-bench',label:'벤치마크'},{id:'cost-fx',label:'환율·시세'}]
    };
    var sel=document.getElementById('v36SubSel'); if(!sel) return;
    var subs=subData[catId]||[];
    sel.innerHTML=subs.map(function(s){return '<option value="'+s.id+'">'+s.label+'</option>';}).join('');
  };
  window.v36HandleFileSelect = function(inputOrEvent){
    var files=inputOrEvent.files||[];
    var list=document.getElementById('v36FileList'); if(!list) return;
    var names=Array.from(files).map(function(f){
      var ext=(f.name||'').split('.').pop().toUpperCase();
      var ic={PDF:'📄',DOCX:'📝',XLSX:'📊',PPT:'📑',PPTX:'📑',HWP:'📋'}[ext]||'📄';
      return '<div class="v36-file-chip">'+ic+' <span>'+esc(f.name)+'</span></div>';
    }).join('');
    list.innerHTML=names||'<div class="v36-file-chip">📄 <span>샘플_문서.pdf</span></div>';
    var st=document.getElementById('v36UploadStatus');
    if(st) st.textContent=files.length+'개 파일 선택됨';
  };
  window.v36SubmitUpload = function(teamName){
    var cat=document.getElementById('v36CatSel')?.value||'rule';
    var sub=document.getElementById('v36SubSel')?.value||'';
    var reason=document.getElementById('v36Reason')?.value||'(사유 없음)';
    var sec=document.getElementById('v36SecSel')?.value||'일반 공개';
    var catLabels={'rule':'구매규정·제도','bid':'입찰관리','vaatz':'VAATZ 매뉴얼','quality':'품질·5스타','cost':'원가·단가'};
    var subLabels={'rule-reg':'구매규정서','rule-std':'표준·절차서','rule-law':'법령·공시문','bid-plan':'입찰계획서','bid-doc':'입찰서류','bid-result':'낙찰결과','vaatz-user':'사용자 가이드','vaatz-admin':'관리자 가이드','vaatz-api':'API 문서','quality-5s':'5스타 평가','quality-audit':'품질감사','quality-defect':'불량관리','cost-unit':'단가기준','cost-bench':'벤치마크','cost-fx':'환율·시세'};
    var catLabel=catLabels[cat]||cat;
    var subLabel=subLabels[sub]||'';
    var path=teamName+' › '+catLabel+(subLabel?' › '+subLabel:'');
    document.getElementById('v36UploadModal')?.remove();
    safeToast('📤 '+path+' — 등록 요청이 System Admin에게 전달됐습니다. (보안: '+sec+', 사유: '+reason+')','✅',4000);
  };

  window.openTeamFolderModal=function(team, focus){
    currentTeam=team||teams[0].name;
    $('#teamFolderTitle').innerHTML=`📁 ${esc(currentTeam)} 문서함`;
    const t=teams.find(x=>x.name===currentTeam); $('#teamFolderSub').textContent=`Admin: ${t?.owner||'-'} · 전체 ${t?.docs||0}건 · 등록 요청됨 ${t?.finalReq||0}건 · 클릭 없이 큰 리스트에서 바로 관리`;
    $('#teamDocSearch').value=''; $('#teamDocStatusFilter').value=focus==='request'?'등록 요청됨':''; $('#teamSelectAll').checked=false;
    renderTeamDocRows(); $('#teamFolderModal').classList.add('sh');
  };
  window.closeTeamFolderModal=function(){ $('#teamFolderModal').classList.remove('sh'); };
  window.renderTeamDocRows=function(){
    const q=($('#teamDocSearch')?.value||'').toLowerCase(); const st=$('#teamDocStatusFilter')?.value||''; const body=$('#teamDocRows'); if(!body)return;
    const rows=teamDocs.filter(d=>d.team===currentTeam && (!st||d.status===st) && (`${d.name} ${d.type} ${d.sec} ${d.mode} ${d.owner} ${d.status}`.toLowerCase().includes(q))).slice(0,160);
    body.innerHTML=rows.map(d=>`<tr><td><input type="checkbox" class="check-lg team-doc-check" data-id="${d.id}"></td><td><div class="doc-name-strong">${esc(d.name)}</div><div class="doc-subtle">${d.date} · ${d.chunks} chunks · ${esc(d.team)}</div></td><td>${d.type}</td><td>${secPill(d.sec)}</td><td>${modeBadge(d.mode)}</td><td>${d.version}</td><td>${esc(d.owner)}</td><td>${statusPill(d.status)}</td><td><div class="row-actions"><button class="v23-btn" onclick="previewTeamDoc('${d.id}')">미리보기</button><button class="v23-btn primary" onclick="requestOneTeamDoc('${d.id}',this)">등록 요청됨</button></div></td></tr>`).join('') || `<tr><td colspan="9" style="text-align:center;padding:30px;color:var(--text-4)">검색 결과가 없습니다.</td></tr>`;
  };
  window.toggleTeamDocAll=function(chk){ $$('.team-doc-check').forEach(c=>c.checked=chk.checked); };
  window.submitSelectedTeamDocs=function(){ const checked=$$('.team-doc-check:checked'); if(!checked.length){safeToast('등록 요청됨할 문서를 선택해주세요.','⚠️');return} checked.forEach(c=>{const d=teamDocs.find(x=>x.id===c.dataset.id); if(d)d.status='등록 요청됨'}); safeToast(`${checked.length}건을 System Admin 최종 승인 대기열로 보냈습니다.`,'🚀'); renderTeamDocRows(); renderAdmin(); };
  window.requestOneTeamDoc=function(id,btn){ const d=teamDocs.find(x=>x.id===id); if(d){d.status='등록 요청됨'; safeToast(`${d.name} 등록 요청됨 완료`,'🚀'); btn.closest('tr')?.querySelector('td:nth-child(8)') && (btn.closest('tr').querySelector('td:nth-child(8)').innerHTML=statusPill('등록 요청됨')); renderAdmin();} };
  window.previewTeamDoc=function(id){ const d=teamDocs.find(x=>x.id===id); if(!d)return; safeToast(`${d.name} 미리보기: 보안 ${d.sec}, ${d.mode}, ${d.chunks} chunks`,'🔎',3200); };
  window.previewFinalDoc=function(id){ const d=teamDocs.find(x=>x.id===id); const p=$('#finalPreview'); if(!d||!p)return; p.innerHTML=`<h4>${esc(d.name)}</h4><p><b>요청팀:</b> ${esc(d.team)} · <b>담당:</b> ${esc(d.owner)}</p><p>이 문서는 <span class="preview-highlight">${esc(d.mode)}</span>에 연결될 예정이며, 보안등급은 <span class="preview-highlight">${esc(d.sec)}</span>입니다.</p><p>중복 문서 검사 결과: 유사도 0.42 이하로 신규 반영 가능. 예상 청크 수는 ${d.chunks}개입니다.</p>`; };
  window.approveFinalDoc=function(btn){ const card=btn.closest('.approval-card'); if(card){card.style.opacity='.38'; card.style.pointerEvents='none'} safeToast('최종 승인 완료: 최종 리스트와 선택 AI 모드 Index에 반영됩니다.','✅'); };
  window.rejectFinalDoc=function(btn){ const card=btn.closest('.approval-card'); if(card){card.style.opacity='.38'; card.style.pointerEvents='none'} safeToast('보완 요청 처리했습니다. 팀 Admin에게 보완 요청 알림이 전송됩니다.','↩️'); };
  window.approveAllVisibleFinals=function(){ $$('.approval-card').forEach(c=>{c.style.opacity='.38'; c.style.pointerEvents='none'}); safeToast('화면에 표시된 등록 요청됨을 모두 승인했습니다.','✅'); };
  window.filterFinalList=function(){ const q=($('#finalListSearch')?.value||'').toLowerCase(); const m=$('#finalModeFilter')?.value||''; const s=$('#finalSecFilter')?.value||''; $$('#finalDocTable tbody tr').forEach(tr=>{ const ok=(!q||tr.dataset.text.includes(q))&&(!m||tr.dataset.mode===m)&&(!s||tr.dataset.sec===s); tr.style.display=ok?'':'none'; }); };
  window.previewPublishedDoc=function(btn){ const tr=btn.closest('tr'); const name=tr?.querySelector('.doc-name-strong')?.textContent||'문서'; safeToast(`${name} 상세 패널을 열었습니다. 실제 구현 시 원문/버전/인덱스 로그로 연결됩니다.`,'📚'); };
  window.safeV23Toast=safeToast;

  function enableModeDrag(){
    let dragText='';
    document.addEventListener('dragstart',e=>{ const src=e.target.closest('.mode-source'); if(src){dragText=src.dataset.source; e.dataTransfer.setData('text/plain',dragText); }});
    document.addEventListener('dragover',e=>{ const col=e.target.closest('.mode-col'); if(col){e.preventDefault(); col.classList.add('dragover'); }});
    document.addEventListener('dragleave',e=>{ const col=e.target.closest('.mode-col'); if(col) col.classList.remove('dragover'); });
    document.addEventListener('drop',e=>{ const col=e.target.closest('.mode-col'); if(!col)return; e.preventDefault(); col.classList.remove('dragover'); const text=e.dataTransfer.getData('text/plain')||dragText; if(!text)return; const list=col.querySelector('.mapped-list'); if(list && !list.textContent.includes(text)){ list.insertAdjacentHTML('beforeend',`<span class="mapped-chip">${esc(text)}<button onclick="this.parentElement.remove()">×</button></span>`); safeToast(`${text} → ${col.dataset.mode}에 연결했습니다.`,'🧭'); } });
  }

  function ensureMypageHero(){
    if($('#mpCharHero')) return;
    const profile=$('.mp-profile'); if(!profile)return;
    profile.insertAdjacentHTML('afterend', `<div class="mp-character-hero" id="mpCharHero"><div class="buddy-3d"><div class="buddy-hat" id="mpHeroHat">🎩</div><div class="buddy-hair"></div><div class="buddy-face"></div><div class="buddy-eye l"></div><div class="buddy-eye r"></div><div class="buddy-smile"></div><div class="buddy-arm l"></div><div class="buddy-arm r"></div><div class="buddy-body"></div><div class="buddy-wheel l"></div><div class="buddy-wheel r"></div><div class="buddy-badge">AI</div></div><div class="mp-character-info"><div class="mp-character-title">프로큐어히어로의 VAATZ Buddy</div><div class="mp-character-desc">업무 지식 기여, 문서 승인, 답변 채택 활동에 따라 성장하는 3D Companion입니다.</div><div class="mp-character-chips"><span class="v23-pill blue">Lv.3 구매Pro</span><span class="v23-pill green">1,720pt</span><span class="v23-pill amber">아이템 3개 장착</span></div></div><button class="v23-btn primary" onclick="openComm('char')">꾸미기</button></div>`);
  }
  const oldOpenMp=window.openMypage; window.openMypage=function(){ if(oldOpenMp) oldOpenMp(); else $('#mpOv')?.classList.add('sh'); ensureMypageHero(); };

  function renderCharacterScene(label='🚗'){
    const body=$('#charBody'); if(!body)return;
    body.innerHTML=`<div class="v23-char-scene"><div class="buddy-3d"><div class="buddy-hat" id="accHat">🎩</div><div class="buddy-hair"></div><div class="buddy-face"></div><div class="buddy-eye l"></div><div class="buddy-eye r"></div><div class="buddy-smile"></div><div class="buddy-arm l"></div><div class="buddy-arm r"></div><div class="buddy-body"></div><div class="buddy-wheel l"></div><div class="buddy-wheel r"></div><div class="buddy-badge" id="charMain">${label}</div><div id="accFace" style="position:absolute;left:20px;top:18px;font-size:15px;z-index:4"></div><div id="accPet" style="position:absolute;right:-8px;bottom:8px;font-size:22px;z-index:4"></div></div><div class="v23-char-label">자동차+바이어 의인화 Companion</div></div>`;
  }
  window.pickChar=function(btn,emoji){ $$('.char-sel').forEach(b=>b.classList.remove('active')); btn?.classList.add('active'); renderCharacterScene(emoji); const badge=$('#dockBadge'); if(badge) badge.textContent=emoji; safeToast(`${btn?.title||'캐릭터'} 선택 완료`,'✨',1600); };
  window.equipItem=function(slot,emoji){ if(slot){ $$('.inv-slot').forEach(s=>{ if(!s.classList.contains('empty') && s.title===slot.title) s.classList.remove('equipped') }); slot.classList.add('equipped'); } const hat=$('#accHat'), dockHat=$('#dockHat'), mpHat=$('#mpHeroHat'); if(['🎩','👑','🎀','🎓','⛑️','🏆'].includes(emoji)){ if(hat)hat.textContent=emoji; if(dockHat)dockHat.textContent=emoji; if(mpHat)mpHat.textContent=emoji; } else if(['🐱','🐶','🐦','🐉','🦄'].includes(emoji)){ const pet=$('#accPet'); if(pet)pet.textContent=emoji; } else { const face=$('#accFace'); if(face)face.textContent=emoji; } safeToast(`${emoji} 아이템을 장착했습니다.`,'✨',1400); };
  window.buyItem=function(el,emoji,name,price){ if(!el||el.classList.contains('owned')){safeToast('이미 보유한 아이템입니다.','✅');return} if(price>userPoints){ safeToast(`${name} 구매 포인트가 부족합니다. 현재 ${userPoints}pt`, '💰'); return; } userPoints-=price; el.classList.add('owned'); const pr=el.querySelector('.shop-pr'); if(pr) pr.textContent='✓ 보유'; const empty=$('.inv-slot.empty'); if(empty){empty.classList.remove('empty'); empty.textContent=emoji; empty.title=name; empty.tabIndex=0; empty.onclick=function(){equipItem(this,emoji)};} $$('#ct-shop [style*="520pt"]').forEach(x=>x.innerHTML=`💰 ${userPoints}pt 보유`); safeToast(`${name} 구매 완료. 인벤토리에서 장착할 수 있습니다.`,'🎉'); };

  function setupCompanion(){ const card=$('#companionCard'); if(!card)return; const msgs=['팀 폴더는 큰 팝업으로 관리하세요.','최종 승인 후 AI 모드에 바로 반영됩니다.','정형 DB 배치 상태를 매일 확인하세요.','인용 번호를 누르면 원문 하이라이트를 볼 수 있어요.']; let i=0; setInterval(()=>{ const msg=$('#companionMsg'); if(msg){i=(i+1)%msgs.length; msg.textContent=msgs[i];}},7000); }
  window.toggleCompanionHub=function(){ companionOpen=!companionOpen; $('#companionCard')?.classList.toggle('open',companionOpen); };

  window.openHistory=function(){
    const rows=[['AI 질의','탄력적입찰 vs 경매입찰','오늘 15:42','참조 5건 · 신뢰도 94%'],['업로드 요청','해외법인 구매 승인 프로세스','오늘 13:10','구매전략팀 최종요청'],['System 승인','공정거래법 하도급 관련 조항','어제','AI AI 검색 반영완료'],['데이터마트','원가 DB 일 배치 부분 실패','오늘 07:30','12 rows 오류'],['AI 모드 변경','원가모드 DB 매핑 수정','어제','원가 DB 추가']];
    $('#historyList').innerHTML=rows.map(r=>`<div class="history-row"><div class="v23-mini-icon">${r[0].includes('질의')?'💬':r[0].includes('업로드')?'📤':r[0].includes('승인')?'✅':r[0].includes('데이터')?'🔗':'🧭'}</div><div class="history-row-main"><div class="history-title">${r[1]}</div><div class="history-meta">${r[0]} · ${r[2]} · ${r[3]}</div></div><button class="v23-btn">상세</button></div>`).join(''); $('#historyModal').classList.add('sh');
  };
  window.closeHistoryModal=function(){ $('#historyModal').classList.remove('sh'); };

  document.addEventListener('click',e=>{
    const text=(e.target.textContent||'').trim();
    if(e.target.closest('.itb')){ const isFile=text.includes('파일'); const box=$('.ibx'); const old=$('.file-attach-preview'); if(old)old.remove(); box?.insertAdjacentHTML('beforeend',`<div class="file-attach-preview">${isFile?'📎':'📷'} ${isFile?'구매자료_샘플.pdf':'현장사진_sample.png'} 첨부됨 <button class="rp-c" onclick="this.parentElement.remove()">✕</button></div>`); safeToast(isFile?'파일을 첨부했습니다.':'이미지를 첨부했습니다.',isFile?'📎':'📷'); }
    if(e.target.closest('.ai-a')){ const btn=e.target.closest('.ai-a'); if(btn.textContent.includes('공유')) safeToast('공유 링크가 생성되었습니다.','📤'); if(btn.textContent.includes('재생성')) safeToast('동일 근거 기반으로 답변을 재생성합니다.','🔄'); }
  });

  document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ $('#teamFolderModal')?.classList.remove('sh'); $('#historyModal')?.classList.remove('sh'); }});

  function boot(){ injectTopbar(); buildAdminTabs(); renderAdmin(); enableModeDrag(); setupCompanion(); renderCharacterScene('🚗'); ensureMypageHero(); window.at($('.atb.on'),'p-req'); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot); else boot();
})();


(function(){
 const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
 const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
 const say=(m,i='✅',d=2400)=>{try{toast(m,i,d)}catch(e){console.log(i,m)}}; window.say=say; window.safeV25Toast=say;
 const modes=['통합모드','생산자재 모드','일반자재 모드','원가모드'];
 const folders=[['all','📚','전체 지식'],['rule','📕','구매규정·제도'],['bid','🏷️','입찰관리'],['vaatz','🖥️','VAATZ 매뉴얼'],['quality','⭐','품질 5스타'],['cost','💰','원가·단가'],['mro','📦','일반자재·MRO']];
 const teams=['구매전략팀','반도체구매팀','구매품질기획팀','PT제어부품구매팀','구매역량개발팀','샤시부품구매1팀','일반자재구매팀','원가관리팀'];
 const names=['입찰운영 업무표준','구매업무규정 전문','경매입찰 가이드라인','VAATZ 입찰모듈 매뉴얼','품질 5스타 운영기준','전동화 부품 단가 벤치마크','해외법인 구매 승인 프로세스','원가 산정 기준표','일반자재 MRO 구매 가이드','수의계약 사유서 양식','검수확인 업무표준','협력사 평가 데이터셋','구매용어 표준정의집','반도체 수출규제 현황','계약관리 규정'];
 const fids=folders.slice(1).map(f=>f[0]), types=['PDF','PPT','DOCX','XLSX','CSV'], secs=['리더 전용','일반 공개','지정 사용자'];
 let docs=[]; for(let i=0;i<120;i++){let folder=fids[i%fids.length], ms=[]; if(i%2===0)ms.push(modes[0]); if(['bid','quality','vaatz'].includes(folder)||i%5===0)ms.push(modes[1]); if(['mro','vaatz','rule'].includes(folder)||i%7===0)ms.push(modes[2]); if(['cost','rule'].includes(folder)||i%11===0)ms.push(modes[3]); docs.push({id:'D'+i,name:`${names[i%names.length]}_${String(i+1).padStart(3,'0')}.${types[i%types.length].toLowerCase()}`,team:teams[i%teams.length],folder,type:types[i%types.length],sec:secs[i%secs.length],modes:[...new Set(ms)],ver:`v${1+i%4}.${i%10}`,chunks:70+(i*13)%500,owner:i%3?'팀 Admin':'System Admin',status:i%13===0?'등록 요청됨':i%17===0?'보완 요청':i%4===0?'작성·보완중':'AI 검색 반영완료',date:`2026.05.${String(1+i%23).padStart(2,'0')}`})}
 let activeFolder='all', activeMode='통합모드', activeTeam=teams[0], activeTeamFolder='all';
 const qa=[['입찰','채택',47,8,'탄력적입찰에서 1회차 유찰 시 처리 절차가 궁금합니다','재공고와 수의계약 전환 기준, VAATZ 유찰처리 메뉴 사용법을 알고 싶습니다.'],['5스타','답변대기',23,5,'5스타 4→5등급 승급 시 현장 심사 항목이 변경되었나요?','IATF 16949 인증 필수 여부와 기존 협력사 유예기간이 궁금합니다.'],['VAATZ','해결중',15,3,'VAATZ에서 해외 발주 시 환율 자동 적용 방법','해외구매 발주 시점 환율과 결제 시점 환율 기준이 혼동됩니다.'],['계약','HOT',31,6,'수의계약 긴급 사유서 승인 기준과 전결권은 어떻게 되나요?','금액별 승인권자와 구매위원회 심의 조건을 정리하고 싶습니다.'],['원가','NEW',12,1,'원가모드에서 단가 이력과 환율 기준을 같이 조회할 수 있나요?','원가 관련 질의 시 어떤 DB를 연결해야 하는지 궁금합니다.'],['일반자재','답변대기',9,0,'MRO 품목 반복 구매 시 경매입찰을 생략할 수 있는 기준이 있나요?','반복 구매 품목의 예외 기준과 계약 활용 가능 여부가 궁금합니다.']].map((x,i)=>({id:i+1,cat:x[0],status:x[1],votes:x[2],answers:x[3],title:x[4],body:x[5],author:['계약초보','품질매니저','해외구매담당','계약초보','원가분석러','MRO담당'][i],time:i<2?'1일 전':i===5?'20분 전':'오늘'}));
 function countFolder(id){return id==='all'?docs.length:docs.filter(d=>d.folder===id).length}
 function pill(cls,t){return `<span class="v23-pill ${cls}">${t}</span>`} function secPill(t){return t==='리더 전용'?pill('red',t):t==='지정 사용자'?pill('violet',t):pill('green',t)} function statPill(t){return t==='AI 검색 반영완료'?pill('green',t):t==='등록 요청됨'?pill('blue',t):t==='보완 요청'?pill('red',t):pill('amber',t)}
 function modeBtns(d){return modes.map(m=>`<button class="v25-mode ${m.includes('생산')?'prod':m.includes('일반')?'gen':m.includes('원가')?'cost':''} ${d.modes.includes(m)?'on':''}" onclick="toggleDocMode('${d.id}','${m}',this)">${m.replace(' 모드','')}</button>`).join('')}
 window.toggleDocMode=(id,m,btn)=>{let d=docs.find(x=>x.id===id); if(!d)return; if(d.modes.includes(m)){d.modes=d.modes.filter(x=>x!==m);btn?.classList.remove('on');say(`${m} 연결을 해제했습니다.`,'🧭')}else{d.modes.push(m);btn?.classList.add('on');say(`${m}에 연결했습니다.`,'🧭')}};
 function qCard(q){
  const isHot=q.votes>=30||q.status==='HOT';
  const isNew=q.status==='NEW';
  const isAdopted=q.status==='채택';
  const isWait=q.status==='답변대기';
  const isAI=q.id===1;
  const views=Math.floor(q.votes*4.7+20);
  const extraBadge=isHot?`<span class="post-badge hot">🔥 HOT</span>`
    :isNew?`<span class="post-badge new0">✨ NEW</span>`
    :isWait?`<span class="post-badge wait">🙋 답변대기</span>`:'';
  const adoptedBadge=isAdopted?`<span class="post-badge adopted">✓ 채택완료</span>`:'';
  const aiBadge=isAI?`<span class="post-badge ai0">🧠 AI 반영</span>`:'';
  const catBadge=`<span class="post-badge cat">${q.cat}</span>`;
  const hotClass=isHot&&q.votes>=40?' post-hot-banner':'';
  return `<div class="v25-card${hotClass}" data-cat="${q.cat}" data-status="${q.status}" data-text="${(q.title+q.body+q.cat).toLowerCase()}" onclick="showQADetail(${q.id})">
    <div class="post-badges">${extraBadge}${adoptedBadge}${aiBadge}${catBadge}</div>
    <div class="post-title">${esc(q.title)}</div>
    <div class="post-preview">${esc(q.body)}</div>
    <div class="post-footer">
      <div class="post-author"><div class="post-author-av">${q.author?q.author[0]:'?'}</div>${esc(q.author)} · ${q.authorLv||'Lv.1'} · ${q.time}</div>
      <div class="post-stats">
        <span class="post-stat">💬 ${q.answers}</span>
        <span class="post-stat">👁 ${views}</span>
        <span class="post-stat ${isHot?'hot-fire':'votes'}">👍 ${q.votes}</span>
      </div>
    </div>
  </div>`}
 function renderQna(){let ct=$('#ct-qa'); if(!ct)return; let cats=['전체','입찰','계약','5스타','VAATZ','원가','일반자재']; ct.innerHTML=`<div id="v25QaHub" class="v25-qwrap"><div class="v25-qhero"><div class="v25-qhero-main"><div class="v25-eyebrow">Procurement Knowledge Community</div><div class="v25-qtitle">구매본부 Q&A 지식커뮤니티</div><div class="v25-qdesc">질문·답변·채택·AI 학습 반영이 하나로 이어집니다. 반복 질의는 커뮤니티에서 빠르게 해결하고, 검증 답변은 VAATZ AI 지식으로 승격됩니다.</div><div class="v25-qactions"><button class="v25-btn primary" onclick="openQuestionWrite()">✏️ 질문하기</button><button class="v25-btn" onclick="filterQaV25('답변대기')">🙋 답변 필요한 질문</button><button class="v25-btn" onclick="openMemoModal()">📝 내 메모</button></div></div><div class="v25-stats"><div class="v25-stat blue"><div class="v25-stat-v">1,248</div><div class="v25-stat-l">누적 질문</div><div class="v25-stat-d">입찰·계약·VAATZ 중심</div></div><div class="v25-stat green"><div class="v25-stat-v">86%</div><div class="v25-stat-l">해결률</div><div class="v25-stat-d">채택 답변 기준</div></div><div class="v25-stat amber"><div class="v25-stat-v">32</div><div class="v25-stat-l">오늘 활동</div><div class="v25-stat-d">질문 7 · 답변 25</div></div><div class="v25-stat violet"><div class="v25-stat-v">58</div><div class="v25-stat-l">AI 후보</div><div class="v25-stat-d">검증 대기 답변</div></div></div></div><div class="v25-qtoolbar"><input type="hidden" id="qaCatHidden" value="전체"><div class="v25-search"><span>🔍</span><input id="qaSearchV25" placeholder="질문, 답변, 규정명, VAATZ 메뉴 검색" oninput="filterQaV25()"></div>${['전체','답변대기','HOT','채택'].map(x=>`<button class="v25-chip ${x==='전체'?'on':''}" data-qf="${x}" onclick="filterQaV25('${x}')">${x}</button>`).join('')}</div><div class="v25-qlayout"><div class="v25-qside"><div class="v25-box"><div class="v25-box-h">카테고리</div><div class="v25-box-b">${cats.map(c=>`<button class="v25-cat ${c==='전체'?'on':''}" data-qf="${c}" onclick="filterQaV25('${c}')"><span>${c==='전체'?'📚':c==='입찰'?'🏷️':c==='계약'?'📝':c==='5스타'?'⭐':c==='VAATZ'?'🖥️':c==='원가'?'💰':'📦'} ${c}</span><em>${c==='전체'?qa.length:qa.filter(q=>q.cat===c).length}</em></button>`).join('')}</div></div></div><div><div class="qa-sort-bar"><span>정렬</span><button class="sort-btn on" onclick="sortQaV25('default',this)">최신순</button><button class="sort-btn" onclick="sortQaV25('votes',this)">🔥 인기순</button><button class="sort-btn" onclick="sortQaV25('wait',this)">🙋 미채택</button></div><div class="v25-list" id="qaList">${qa.map(qCard).join('')}</div></div><div class="v25-qright"><div class="v25-box"><div class="v25-box-h">오늘 인기 질문</div><div class="v25-box-b">${qa.slice(0,4).map((q,i)=>`<div class="v25-rank" onclick="showQADetail(${q.id})"><div class="v25-rank-num">${i+1}</div><div><div class="v25-rank-title">${esc(q.title)}</div><div class="v25-rank-meta">추천 ${q.votes} · 답변 ${q.answers}</div></div></div>`).join('')}</div></div><div class="v25-box"><div class="v25-box-h">AI 반영 후보</div><div class="v25-box-b" style="font-size:11.5px;color:var(--text-3);line-height:1.7">추천 10개 이상 + 채택 답변은 관리자 검증 큐로 이동합니다.<button class="v25-btn" style="width:100%;margin-top:10px" onclick="say('AI 반영 후보 목록을 열었습니다.','🧠')">후보 보기</button></div></div></div></div></div><div id="qaDetailView" class="v25-detail" style="display:none"><button class="v25-btn" onclick="backToQAList()">← 목록으로 돌아가기</button><div id="qaDetailContent" style="margin-top:12px"></div><div class="v25-answer"><div style="font-size:13px;font-weight:900;color:var(--text-1);margin-bottom:8px">✏️ 답변 작성</div><textarea id="answerTextarea" style="width:100%;min-height:110px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:12px;color:var(--text-1);font-family:inherit;font-size:13px;line-height:1.7;padding:12px;resize:vertical;outline:0" placeholder="근거 규정, VAATZ 메뉴 경로, 실제 처리 경험을 함께 적어주세요."></textarea><div style="display:flex;justify-content:flex-end;margin-top:8px"><button class="v25-btn primary" onclick="submitAnswer()">답변 등록</button></div></div></div>`}
 window.filterQaV25=function(f=''){
   let q=($('#qaSearchV25')?.value||'').toLowerCase();
   if(f){$('#qaCatHidden').value=f; $$('[data-qf]').forEach(b=>b.classList.toggle('on',b.dataset.qf===f));}
   let a=$('#qaCatHidden')?.value||'전체', status=['답변대기','HOT','채택','NEW','해결중'];
   $$('#qaList .v25-card').forEach(c=>{
     let ok=(a==='전체'||(status.includes(a)?c.dataset.status===a:c.dataset.cat===a))&&(!q||c.dataset.text.includes(q));
     c.style.display=ok?'block':'none';
   });
 }
 window.sortQaV25=function(type,btn){
   $$('.sort-btn').forEach(b=>b.classList.remove('on'));
   btn.classList.add('on');
   const list=$('#qaList'); if(!list)return;
   const cards=[...list.querySelectorAll('.v25-card')];
   cards.sort((a,b)=>{
     if(type==='votes'){
       const va=parseInt(a.querySelector('.post-stat.votes,.post-stat.hot-fire')?.textContent||'0');
       const vb=parseInt(b.querySelector('.post-stat.votes,.post-stat.hot-fire')?.textContent||'0');
       return vb-va;
     } else if(type==='wait'){
       const wa=a.dataset.status==='답변대기'?0:1;
       const wb=b.dataset.status==='답변대기'?0:1;
       return wa-wb;
     }
     return 0;
   });
   cards.forEach(c=>list.appendChild(c));
   say(type==='votes'?'인기순으로 정렬했습니다.':'미채택 답변 질문 우선 정렬했습니다.','🔃');
 }
 window.showQADetail=function(id){let q=qa.find(x=>x.id===id); if(!q)return; $('#v25QaHub').style.display='none'; $('#qaDetailView').style.display='block'; $('#qaDetailContent').innerHTML=`<div class="v25-detail-card"><span class="v25-tag">${q.cat}</span><div class="v25-detail-title">${esc(q.title)}</div><div class="v25-detail-body">${esc(q.body)}</div><div class="v25-meta"><span>👤 ${q.author}</span><span>👍 추천 ${q.votes}</span><span>💬 답변 ${q.answers}</span></div></div><div class="v25-answer ok"><span class="v25-tag ok">✓ 채택 답변</span><div style="font-size:13px;color:var(--text-2);line-height:1.8;margin-top:10px">구매업무규정과 VAATZ 처리 경험을 기준으로 보면, 우선 재공고 또는 참여업체 확대를 검토하고 긴급성·적격업체 부족이 명확할 때 수의계약 전환을 검토하는 흐름이 적절합니다.</div><div style="display:flex;gap:6px;margin-top:10px"><button class="v25-btn">👍 추천 47</button><button class="v25-btn saved-answer-btn" onclick="saveAnswerToMemo(this)">⭐ 메모 저장</button></div></div>`}
 window.backToQAList=()=>{$('#v25QaHub').style.display='block';$('#qaDetailView').style.display='none'}; window.submitAnswer=()=>{let t=$('#answerTextarea'); if(!t?.value.trim())return say('답변 내용을 입력해주세요.','⚠️'); t.value=''; say('답변이 등록되었습니다.','✅')};
 function folderTree(fn){return `<div class="v25-folder-tree"><div class="v25-folder-head">통합 지식 폴더</div>${folders.map(f=>`<button class="v25-folder ${f[0]===activeFolder?'on':''}" onclick="${fn}('${f[0]}',this)"><span>${f[1]} ${f[2]}</span><span class="cnt">${countFolder(f[0])}</span></button>`).join('')}</div>`}
 function countFolder(id){return id==='all'?docs.length:docs.filter(d=>d.folder===id).length}
 function renderRows(sel='#v25Rows'){let q=($('#v25Search')?.value||'').toLowerCase(), sec=$('#v25Sec')?.value||'', mode=$('#v25Mode')?.value||'', status=$('#v25Status')?.value||''; let list=docs.filter(d=>(activeFolder==='all'||d.folder===activeFolder)&&(!q||(d.name+d.team+d.owner).toLowerCase().includes(q))&&(!sec||d.sec===sec)&&(!mode||d.modes.includes(mode))&&(!status||d.status===status)); let body=$(sel); if(!body)return; body.innerHTML=list.map(d=>`<tr><td><input type="checkbox" class="check-lg v25-check" data-id="${d.id}"></td><td><div class="v25-doc-title">${esc(d.name)}</div><div class="v25-doc-path">/${folders.find(f=>f[0]===d.folder)?.[2]} · ${d.chunks} chunks</div></td><td>${d.team}</td><td>${d.type}</td><td>${secPill(d.sec)}</td><td><div class="v25-mode-set">${modeBtns(d)}</div></td><td>${d.ver}</td><td>${statPill(d.status)}</td><td><button class="v25-btn" onclick="say('상세 패널을 열었습니다.','📚')">상세</button></td></tr>`).join('')||`<tr><td colspan="9" style="text-align:center;padding:30px;color:var(--text-4)">검색 결과가 없습니다.</td></tr>`}
 window.v25SelectFolder=(id,btn)=>{activeFolder=id; $$('.v25-folder').forEach(b=>b.classList.remove('on'));btn?.classList.add('on');renderRows()}; window.v25Filter=()=>renderRows(); window.v25All=chk=>$$('.v25-check').forEach(c=>c.checked=chk.checked); window.v25BulkMode=m=>{let ids=$$('.v25-check:checked').map(c=>c.dataset.id); if(!ids.length)return say('먼저 문서를 선택해주세요.','⚠️'); ids.forEach(id=>{let d=docs.find(x=>x.id===id); if(d&&!d.modes.includes(m))d.modes.push(m)}); renderRows(); say(`${ids.length}개 문서를 ${m}에 추가했습니다.`,'🧭')}
 function renderFinalList(){let el=$('#p-list'); if(!el)return; el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">최종 리스트 · 폴더 기반 지식 관리</div><div class="v23-title-sub">파일이 많아도 폴더, 검색, 필터, 대량 모드 반영으로 관리합니다. 하나의 파일은 여러 AI 모드에 독립적으로 연결될 수 있습니다.</div></div><div class="v23-actions"><button class="v25-btn">CSV 내보내기</button><button class="v25-btn primary">＋ 수동 등록</button></div></div><div class="v25-folder-layout">${folderTree('v25SelectFolder')}<div class="v25-manager"><div class="v25-manager-h"><div><div class="v25-manager-title">최종 지식 목록</div><div class="v25-manager-sub">모드 칩을 클릭하면 문서별 검색 모드를 ON/OFF 합니다.</div></div><button class="v25-btn primary" onclick="say('변경된 모드 매핑 정책을 저장했습니다.','✅')">변경 저장</button></div><div class="v25-tools"><label style="font-size:11px;color:var(--text-3);display:flex;gap:6px"><input type="checkbox" class="check-lg" onchange="v25All(this)"> 전체</label><div class="v25-search"><span>🔍</span><input id="v25Search" placeholder="문서명, 팀, 담당자 검색" oninput="v25Filter()"></div><select class="v25-select" id="v25Sec" onchange="v25Filter()"><option value="">보안 전체</option>${secs.map(s=>`<option>${s}</option>`).join('')}</select><select class="v25-select" id="v25Mode" onchange="v25Filter()"><option value="">모드 전체</option>${modes.map(m=>`<option>${m}</option>`).join('')}</select><select class="v25-select" id="v25Status" onchange="v25Filter()"><option value="">상태 전체</option><option>AI 검색 반영완료</option><option>작성·보완중</option><option>등록 요청됨</option><option>보완 요청</option></select></div><div class="v25-bulk"><b>대량 작업</b><button class="v25-btn" onclick="v25BulkMode('생산자재 모드')">생산자재 추가</button><button class="v25-btn" onclick="v25BulkMode('일반자재 모드')">일반자재 추가</button><button class="v25-btn" onclick="v25BulkMode('원가모드')">원가 추가</button><span style="margin-left:auto">모드별 복수 연결 가능</span></div><div class="v25-table-wrap"><table class="v25-table"><thead><tr><th></th><th>문서</th><th>팀</th><th>유형</th><th>보안</th><th>AI 모드</th><th>버전</th><th>상태</th><th>작업</th></tr></thead><tbody id="v25Rows"></tbody></table></div></div></div>`;activeFolder='all';renderRows()}
 function renderMode(){let el=$('#p-mode'); if(!el)return; el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">AI 모드 · 대용량 DB 운영 콘솔</div><div class="v23-title-sub">모드별로 검색 가능한 폴더와 데이터 소스를 독립 운영합니다. 드래그보다 폴더·검색·대량선택·규칙 기반 관리를 우선합니다.</div></div><button class="v25-btn primary" onclick="say('AI 모드 정책을 저장했습니다.','🧭')">정책 저장</button></div><div class="v25-mode-work"><div class="v25-mode-side"><div class="v25-folder-head">AI 모드</div>${modes.map((m,i)=>`<button class="v25-mode-tab ${m===activeMode?'on':''}" onclick="selectMode('${m}',this)"><span>${i===0?'🌐':i===1?'🏭':i===2?'📦':'💰'} ${m}</span><span>${docs.filter(d=>d.modes.includes(m)).length}</span></button>`).join('')}<div class="v25-rule" style="margin-top:10px"><div class="v25-rule-title">운영 원칙</div><div style="font-size:11px;color:var(--text-3);line-height:1.65">한 파일은 여러 모드에 들어갈 수 있고, 각 모드는 독립 색인·권한·배치 정책을 가집니다.</div></div></div><div><div class="v25-kpis" id="modeKpi"></div><div class="v25-rule"><div class="v25-rule-title" id="modeRuleTitle">${activeMode} 규칙</div><div class="v25-rule-row"><span>정형 DB 자동 반영</span><div class="v25-toggle on" onclick="this.classList.toggle('on')"></div></div><div class="v25-rule-row"><span>비정형 문서 승인 후 후보 등록</span><div class="v25-toggle on" onclick="this.classList.toggle('on')"></div></div><div class="v25-rule-row"><span>지정 사용자 문서 검색 허용</span><div class="v25-toggle ${activeMode==='원가모드'?'':'on'}" onclick="this.classList.toggle('on')"></div></div></div><div class="v25-manager"><div class="v25-manager-h"><div><div class="v25-manager-title" id="modeListTitle">${activeMode} 연결 데이터</div><div class="v25-manager-sub">현재 모드에 연결된 데이터만 표시합니다. 폴더 단위 일괄 연결을 지원합니다.</div></div><button class="v25-btn warn" onclick="say('선택 폴더를 현재 모드에 일괄 연결했습니다.','🧭')">폴더 일괄 연결</button></div><div class="v25-tools"><div class="v25-search"><span>🔍</span><input id="modeSearch" placeholder="현재 모드 내 검색" oninput="renderModeRows()"></div><select class="v25-select" id="modeFolder" onchange="renderModeRows()"><option value="">폴더 전체</option>${folders.slice(1).map(f=>`<option value="${f[0]}">${f[2]}</option>`).join('')}</select></div><div class="v25-table-wrap"><table class="v25-table"><thead><tr><th>소스</th><th>폴더</th><th>유형</th><th>보안</th><th>연결 모드</th><th>상태</th></tr></thead><tbody id="modeRows"></tbody></table></div></div></div></div>`;renderModeRows();updateModeKpi()}
 window.selectMode=(m,btn)=>{activeMode=m;$$('.v25-mode-tab').forEach(b=>b.classList.remove('on'));btn?.classList.add('on');$('#modeRuleTitle')&&($('#modeRuleTitle').textContent=m+' 규칙');$('#modeListTitle')&&($('#modeListTitle').textContent=m+' 연결 데이터');renderModeRows();updateModeKpi()}; function updateModeKpi(){let l=docs.filter(d=>d.modes.includes(activeMode));$('#modeKpi')&&($('#modeKpi').innerHTML=`<div class="v25-kpi"><div class="v">${l.length}</div><div class="l">연결 소스</div></div><div class="v25-kpi"><div class="v">${new Set(l.map(d=>d.folder)).size}</div><div class="l">연결 폴더</div></div><div class="v25-kpi"><div class="v">${l.filter(d=>d.status==='AI 검색 반영완료').length}</div><div class="l">색인 활성</div></div><div class="v25-kpi"><div class="v">${l.reduce((a,d)=>a+d.chunks,0).toLocaleString()}</div><div class="l">Chunks</div></div>`)}
 window.renderModeRows=()=>{let q=($('#modeSearch')?.value||'').toLowerCase(), f=$('#modeFolder')?.value||'';let l=docs.filter(d=>d.modes.includes(activeMode)&&(!q||(d.name+d.team).toLowerCase().includes(q))&&(!f||d.folder===f));$('#modeRows')&&($('#modeRows').innerHTML=l.map(d=>`<tr><td><div class="v25-doc-title">${esc(d.name)}</div><div class="v25-doc-path">${d.team} · ${d.chunks} chunks</div></td><td>${folders.find(x=>x[0]===d.folder)?.[1]} ${folders.find(x=>x[0]===d.folder)?.[2]}</td><td>${d.type}</td><td>${secPill(d.sec)}</td><td><div class="v25-mode-set">${modeBtns(d)}</div></td><td>${statPill(d.status)}</td></tr>`).join('')||`<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--text-4)">연결 데이터가 없습니다.</td></tr>`)};
 function renderDatamart(){let el=$('#p-datamart');if(!el)return;let sources=[['VAATZ 업체·품목 마스터','정상','1.42M rows','05:10','통합·생산'],['Autopedia 용어 DB','정상','4,832 terms','06:00','통합·일반'],['원가 DB','부분 실패','324K rows','07:30','원가'],['타 부문 품질 DB','정상','8 sources','04:20','생산'],['일반자재 MRO DB','정상','92K rows','05:40','일반']];el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">정형 데이터마트 I/F 모니터링</div><div class="v23-title-sub">데이터가 어디서 들어와 어떤 AI 모드에 반영되는지 한눈에 확인합니다. 실패 지점은 바로 조치할 수 있게 표시합니다.</div></div><button class="v25-btn primary" onclick="say('전체 I/F 상태를 재점검했습니다.','🔄')">전체 재점검</button></div><div class="v25-mart-flow">${['Source','Data Mart','Transform','Index','AI Mode'].map((t,i)=>`<div class="v25-mart-step"><div class="num">${i+1}</div><div class="t">${t}</div><div class="d">${['VAATZ DB, Autopedia, 타 부문 시스템','일 배치 수집·정합성 검증','RAG 검색용 스키마 변환','모드별 Vector / SQL Index 갱신','권한과 모드 정책으로 검색'][i]}</div></div>`).join('')}</div><div class="v25-mart-grid"><div>${sources.map((s,i)=>`<div class="v25-source ${i===0?'on':''}" onclick="selectMart('${esc(s[0])}',this)"><div class="v25-source-title"><span>${i===0?'🖥️':i===1?'📖':i===2?'💰':i===3?'🏭':'📦'} ${s[0]}</span>${s[1]==='정상'?pill('green','정상'):pill('amber','확인')}</div><div class="v25-source-meta">${s[2]} · 마지막 ${s[3]} · ${s[4]}</div></div>`).join('')}</div><div class="v25-detail-panel" id="martDetail"></div></div>`;renderMart('VAATZ 업체·품목 마스터')}
 function renderMart(name){let ok=!name.includes('원가');$('#martDetail')&&($('#martDetail').innerHTML=`<div class="v23-panel-title" style="font-size:15px;margin-bottom:10px">${esc(name)} 상세</div><div class="v25-kpis"><div class="v25-kpi"><div class="v">${ok?'100':'92'}%</div><div class="l">성공률</div></div><div class="v25-kpi"><div class="v">${ok?'0':'12'}</div><div class="l">오류 row</div></div><div class="v25-kpi"><div class="v">${ok?'05:10':'07:30'}</div><div class="l">마지막 종료</div></div><div class="v25-kpi"><div class="v">${ok?'2':'1'}</div><div class="l">연결 모드</div></div></div>${['수집','정합성 검증','RAG Index 반영'].map((x,i)=>`<div class="v25-line"><div>${x}</div><div><div class="v25-progress ${!ok&&i===1?'warn':i===2?'warn':''}"><span style="width:${i===2?'68':(!ok&&i===1?'92':'100')}%"></span></div></div><span class="v23-pill ${(!ok&&i===1)||i===2?'amber':'green'}">${i===2?'진행중':(!ok&&i===1?'부분 실패':'완료')}</span></div>`).join('')}${ok?'':`<div style="margin-top:12px;background:var(--a-dim);border:1px solid rgba(194,155,66,.25);border-radius:12px;padding:12px;font-size:12px;color:var(--a);line-height:1.6"><b>조치 필요:</b> 원가 테이블 12개 row에서 환율 기준일 누락이 감지되었습니다.</div>`}`)} window.selectMart=(n,card)=>{$$('.v25-source').forEach(c=>c.classList.remove('on'));card?.classList.add('on');renderMart(n)};
 function renderAdminV25(){renderFinalList();renderMode();renderDatamart()}
 window.openTeamFolderModal=function(team){activeTeam=team||activeTeam;activeTeamFolder='all';let m=$('#teamFolderModal');if(!m)return;m.innerHTML=`<div class="large-box" style="width:min(1220px,96vw)"><div class="large-hd"><div><div class="large-title">📁 ${activeTeam} 문서함</div><div class="large-sub">폴더별로 문서를 분류하고, 선택 항목을 System Admin 최종 승인으로 요청합니다.</div></div><button class="large-close" onclick="closeTeamFolderModal()">✕</button></div><div class="large-toolbar"><label style="font-size:11px;color:var(--text-4);display:flex;gap:6px"><input type="checkbox" class="check-lg" onchange="toggleTeamDocAll(this)"> 전체 선택</label><div class="large-search"><span>🔍</span><input id="teamDocSearch" placeholder="문서명, 담당자, 모드, 보안등급 검색" oninput="renderTeamDocRows()"></div><select class="frm-i frm-sel" id="teamDocStatusFilter" style="width:135px" onchange="renderTeamDocRows()"><option value="">전체 상태</option><option>작성·보완중</option><option>등록 요청됨</option><option>보완 요청</option><option>AI 검색 반영완료</option></select><button class="v25-btn primary" onclick="submitSelectedTeamDocs()">🚀 선택 등록 요청됨</button></div><div class="large-body"><div class="v25-folder-layout"><div class="v25-folder-tree"><div class="v25-folder-head">${activeTeam} 폴더</div>${folders.map(f=>`<button class="v25-folder ${f[0]==='all'?'on':''}" onclick="selectTeamFolder('${f[0]}',this)"><span>${f[1]} ${f[2]}</span><span class="cnt">${f[0]==='all'?docs.filter(d=>d.team===activeTeam).length:docs.filter(d=>d.team===activeTeam&&d.folder===f[0]).length}</span></button>`).join('')}</div><div style="overflow:auto"><table class="large-table"><thead><tr><th></th><th>문서명</th><th>유형</th><th>보안</th><th>AI 모드</th><th>버전</th><th>담당자</th><th>상태</th><th>작업</th></tr></thead><tbody id="teamDocRows"></tbody></table></div></div></div></div>`;m.classList.add('sh');renderTeamRows()}
 function renderTeamRows(){let q=($('#teamDocSearch')?.value||'').toLowerCase(),st=$('#teamDocStatusFilter')?.value||'';let l=docs.filter(d=>d.team===activeTeam&&(activeTeamFolder==='all'||d.folder===activeTeamFolder)&&(!q||(d.name+d.owner+d.sec+d.modes.join(' ')).toLowerCase().includes(q))&&(!st||d.status===st));$('#teamDocRows')&&($('#teamDocRows').innerHTML=l.map(d=>`<tr><td><input type="checkbox" class="check-lg team-doc-check" data-id="${d.id}"></td><td><div class="v25-doc-title">${esc(d.name)}</div><div class="v25-doc-path">/${folders.find(f=>f[0]===d.folder)?.[2]} · ${d.chunks} chunks</div></td><td>${d.type}</td><td>${secPill(d.sec)}</td><td><div class="v25-mode-set">${modeBtns(d)}</div></td><td>${d.ver}</td><td>${d.owner}</td><td>${statPill(d.status)}</td><td><button class="v25-btn primary" onclick="requestOneTeamDoc('${d.id}')">등록 요청됨</button></td></tr>`).join(''))}
 window.selectTeamFolder=(id,btn)=>{activeTeamFolder=id;$$('#teamFolderModal .v25-folder').forEach(b=>b.classList.remove('on'));btn?.classList.add('on');renderTeamRows()};window.renderTeamDocRows=renderTeamRows;window.toggleTeamDocAll=chk=>$$('#teamFolderModal .team-doc-check').forEach(c=>c.checked=chk.checked);window.submitSelectedTeamDocs=()=>{let ids=$$('#teamFolderModal .team-doc-check:checked').map(c=>c.dataset.id);if(!ids.length)return say('등록 요청됨할 문서를 선택해주세요.','⚠️');ids.forEach(id=>{let d=docs.find(x=>x.id===id);if(d)d.status='등록 요청됨'});renderTeamRows();say(`${ids.length}건을 최종 승인 대기열로 보냈습니다.`,'🚀')};window.requestOneTeamDoc=id=>{let d=docs.find(x=>x.id===id);if(d)d.status='등록 요청됨';renderTeamRows();say('등록 요청됨 완료','🚀')};
 function memoModal(){if($('#v25MemoModal'))return;document.body.insertAdjacentHTML('beforeend',`<div class="v25-memo-modal" id="v25MemoModal" onclick="if(event.target===this)closeMemoModal()"><div class="v25-memo-box"><div class="v25-memo-list"><div class="v25-memo-h"><span>📝 내 메모</span><button class="v25-btn primary" onclick="newMemo()">＋</button></div><div class="v25-memo-items"><div class="v25-memo-item on"><div class="v25-memo-title">탄력적입찰 핵심 정리</div><div class="v25-memo-meta">오늘 · AI 답변 저장</div></div><div class="v25-memo-item"><div class="v25-memo-title">수의계약 체크리스트</div><div class="v25-memo-meta">어제 · 커뮤니티 답변</div></div></div></div><div class="v25-memo-editor"><div class="v25-memo-editor-h"><input id="v25MemoTitle" value="탄력적입찰 핵심 정리"><button class="large-close" onclick="closeMemoModal()">✕</button></div><textarea id="v25MemoBody">• 탄력적입찰: 순위만 공개\n• 경매입찰: 최저가 실시간 공개\n• 5분 전 제출 시 자동 연장\n• 3스타 이상 업체 참여 가능</textarea><div class="v25-memo-foot"><span style="font-size:11px;color:var(--text-4)">AI 답변, 원문 하이라이트, 커뮤니티 답변을 저장할 수 있습니다.</span><button class="v25-btn primary" onclick="saveMemo()">저장</button></div></div></div></div>`)} window.openMemoModal=()=>{memoModal();$('#v25MemoModal').classList.add('sh')};window.closeMemoModal=()=>$('#v25MemoModal')?.classList.remove('sh');window.newMemo=()=>{$('#v25MemoTitle').value='새 메모';$('#v25MemoBody').value=''};window.saveMemo=()=>say('메모가 저장되었습니다.','✅');window.saveAnswerToMemo=btn=>{openMemoModal();$('#v25MemoTitle').value='저장한 커뮤니티 답변';$('#v25MemoBody').value=btn.closest('.v25-answer')?.innerText||'저장한 답변';say('답변을 메모장에 불러왔습니다.','⭐')};
 function improveCompanion(){let p=$('#companionCard .companion-panel'); if(p){p.classList.add('v25-panel');p.innerHTML=`<button class="companion-action" onclick="openMemoModal()">📝 내 메모</button><button class="companion-action" onclick="say('저장한 답변함을 열었습니다.','⭐')">⭐ 저장답변</button><button class="companion-action" onclick="openComm('qa')">💡 커뮤니티</button><button class="companion-action" onclick="openMypage()">👤 마이페이지</button><button class="companion-action" onclick="openComm('char')">🧸 캐릭터</button><button class="companion-action" onclick="openHistory()">📜 기록장</button><div class="companion-admin-divider">Admin 권한 사용자 전용</div><button class="companion-action" onclick="oa();openAdminTab('p-final')">✅ 최종 승인</button><button class="companion-action" onclick="oa();openAdminTab('p-mode')">🧭 모드관리</button>`}let main=$('#companionCard .companion-main'); if(main){main.classList.add('general'); let msg=$('#companionMsg'); if(msg)msg.textContent='메모·커뮤니티·캐릭터를 빠르게 열어보세요.'}}
 const oldOpenComm=window.openComm; window.openComm=function(tab){oldOpenComm&&oldOpenComm(tab); if(tab==='qa'||!tab)renderQna()}; const oldOpenAdminTab=window.openAdminTab; window.openAdminTab=function(id){oldOpenAdminTab&&oldOpenAdminTab(id); setTimeout(()=>{renderAdminV25(); let b=[...$$('.atb')].find(x=>x.getAttribute('onclick')?.includes(id)); window.at&&window.at(b,id)},0)}; const oldSubmitQuestion=window.submitQuestion; window.submitQuestion=function(){let title=$('#qTitleInput')?.value.trim(),body=$('#qBodyInput')?.value.trim(),cat=$('#qCatSel')?.value||'일반'; if(!title||!body){oldSubmitQuestion&&oldSubmitQuestion();return}qa.unshift({id:Date.now(),cat,status:'NEW',votes:0,answers:0,title,body,author:'프로큐어히어로',time:'방금'});$('#qWriteM')?.classList.remove('sh');renderQna();say('질문이 등록되었습니다.','✅')};
 function boot(){let nav=$('.sb-nav'); if(nav&&!$('#v25CommunityEntry'))nav.insertAdjacentHTML('beforeend','<button class="sb-i v25-community-entry" id="v25CommunityEntry" onclick="openComm(\'qa\')"><span class="sb-ic">💡</span>구매본부 지식커뮤니티</button>');let tb=$('.tb-r'); if(tb&&!$('#v25TopCommunityBtn'))tb.insertAdjacentHTML('afterbegin','<button class="tb-b" id="v25TopCommunityBtn" onclick="openComm(\'qa\')">💡 구매 커뮤니티</button>');renderQna();renderAdminV25();improveCompanion();memoModal();$$('.ai-ac').forEach(ac=>{if(!ac.querySelector('.saved-answer-btn'))ac.insertAdjacentHTML('beforeend','<button class="ai-a saved-answer-btn" onclick="openMemoModal()">⭐ 메모 저장</button>')})}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(boot,80));else setTimeout(boot,80);
})();


(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const modes=['통합모드','생산자재 모드','일반자재 모드','원가모드'];
  const finalDocs=[
    {id:'F-01',name:'해외법인 구매 승인 프로세스.docx',team:'구매전략팀',type:'DOCX',sec:'지정 사용자',folder:'구매규정·제도',modes:['통합모드','생산자재 모드']},
    {id:'F-02',name:'전동화 부품 단가 벤치마크.xlsx',team:'PT제어부품구매팀',type:'XLSX',sec:'리더 전용',folder:'원가·단가',modes:['생산자재 모드','원가모드']},
    {id:'F-03',name:'반도체 수출규제 국가별 현황.xlsx',team:'반도체구매팀',type:'XLSX',sec:'지정 사용자',folder:'구매규정·제도',modes:['생산자재 모드']},
    {id:'F-04',name:'일반자재 MRO 구매 가이드.pdf',team:'일반자재구매팀',type:'PDF',sec:'일반 공개',folder:'일반자재·MRO',modes:['통합모드','일반자재 모드']}
  ];
  function pill(c,t){return `<span class="v23-pill ${c}">${t}</span>`}
  function secPill(sec){return sec==='리더 전용'?pill('red',sec):sec==='지정 사용자'?pill('violet',sec):pill('green',sec)}
  function modeButtons(d){return modes.map(m=>`<button class="v25-mode ${m.includes('생산')?'prod':m.includes('일반')?'gen':m.includes('원가')?'cost':''} ${d.modes.includes(m)?'on':''}" onclick="toggleFinalMode('${d.id}','${m}',this)">${m.replace(' 모드','')}</button>`).join('')}
  window.toggleFinalMode=function(id,m,btn){const d=finalDocs.find(x=>x.id===id); if(!d)return; if(d.modes.includes(m)){d.modes=d.modes.filter(x=>x!==m); btn?.classList.remove('on'); window.say&&say(`${d.name}에서 ${m} 연결을 해제했습니다.`,'🧭')}else{d.modes.push(m); btn?.classList.add('on'); window.say&&say(`${d.name}을 ${m}에 연결했습니다.`,'🧭')}};
  window.previewV25Final=function(id){const d=finalDocs.find(x=>x.id===id); const p=$('#v25FinalPreview'); if(!d||!p)return; p.innerHTML=`<h4>${esc(d.name)}</h4><p><b>요청팀:</b> ${esc(d.team)} · <b>보안:</b> ${esc(d.sec)}</p><p>승인 시 <span class="preview-highlight">${d.modes.join(', ')}</span>에 독립적으로 반영됩니다.</p><p>중복 문서 검사: 유사도 0.38 이하, 신규 등록 가능. 예상 청크 수 214개.</p>`};
  window.approveV25Final=function(btn){const card=btn.closest('.v25-final-card'); if(card){card.style.opacity='.38';card.style.pointerEvents='none'} window.say&&say('최종 승인 완료: 선택된 모드별 RAG Index에 독립 반영됩니다.','✅')};
  window.rejectV25Final=function(btn){const card=btn.closest('.v25-final-card'); if(card){card.style.opacity='.38';card.style.pointerEvents='none'} window.say&&say('보완 요청 처리했습니다. 팀 Admin에게 보완 요청 알림을 보냈습니다.','↩️')};
  function renderFinal(){const el=$('#p-final'); if(!el)return; el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">System Admin 최종 승인</div><div class="v23-title-sub">팀 Admin이 등록 요청됨한 문서를 검토합니다. 여기서 통합 폴더, 보안등급, 그리고 여러 AI 모드 연결 여부를 독립적으로 확정합니다.</div></div><div class="v23-actions"><button class="v25-btn warn">보완 요청 사유 템플릿</button><button class="v25-btn primary" onclick="say('화면의 승인 대상을 일괄 승인했습니다.','✅')">화면 내 일괄 승인</button></div></div><div style="display:grid;grid-template-columns:1.25fr .85fr;gap:12px"><div class="v25-list">${finalDocs.map(d=>`<div class="v25-answer v25-final-card"><div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start"><div><div class="v25-doc-title" style="font-size:14px">${esc(d.name)}</div><div class="v25-doc-path">${esc(d.team)} · ${d.type} · 등록 요청됨 · 예상 214 chunks</div></div>${secPill(d.sec)}</div><div class="v25-tools" style="padding:10px 0 0;border:0;background:transparent"><select class="v25-select"><option>${d.folder}</option><option>구매규정·제도</option><option>입찰관리</option><option>VAATZ 매뉴얼</option><option>품질 5스타</option><option>원가·단가</option><option>일반자재·MRO</option></select><select class="v25-select"><option>${d.sec}</option><option>리더 전용</option><option>일반 공개</option><option>지정 사용자</option></select></div><div style="margin-top:10px"><div style="font-size:10px;color:var(--text-4);font-weight:900;text-transform:uppercase;letter-spacing:.7px;margin-bottom:6px">AI 모드 독립 반영</div><div class="v25-mode-set">${modeButtons(d)}</div></div><div style="display:flex;gap:6px;justify-content:flex-end;margin-top:12px"><button class="v25-btn" onclick="previewV25Final('${d.id}')">원문 보기</button><button class="v25-btn" onclick="rejectV25Final(this)">보완 요청</button><button class="v25-btn primary" onclick="approveV25Final(this)">최종 승인</button></div></div>`).join('')}</div><div class="v25-detail-panel"><div class="v23-panel-title" style="font-size:15px;margin-bottom:10px">🔎 승인 미리보기</div><div class="preview-doc-page" id="v25FinalPreview"><h4>문서 미리보기</h4><p>왼쪽 문서의 원문 보기를 클릭하면 요약, 하이라이트, 중복 문서 검사, 모드 반영 범위가 표시됩니다.</p><p>중요: 하나의 문서는 여러 AI 모드에 들어갈 수 있으며, 각 모드의 색인은 독립적으로 갱신됩니다.</p></div><div class="mode-note">Tip. 원가모드와 리더 전용 문서는 승인 로그와 접근 로그를 더 길게 보관하는 정책을 적용할 수 있습니다.</div></div></div>`}
  const old=window.openAdminTab; window.openAdminTab=function(id){old&&old(id); setTimeout(()=>{if(id==='p-final')renderFinal()},20)};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(renderFinal,140));else setTimeout(renderFinal,140);
})();


(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const say=(m,i='✅',d=2200)=>{try{(window.toast||window.say||console.log)(m,i,d)}catch(e){console.log(i,m)}};
  const MODES=['통합모드','생산자재 모드','일반자재 모드','원가모드'];
  function safeLSGet(k,f){try{return localStorage.getItem(k)||f}catch(e){return f}}
  function safeLSSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  let currentMode=safeLSGet('vaatz-current-mode','통합모드');
  let fontSize=safeLSGet('vaatz-font-size','standard');
  const categories=['전체','입찰','계약','VAATZ','5스타','원가','일반자재','해외구매','협력사','규정해석'];
  let communityState={cat:'전체',status:'전체',tag:'',query:'',selected:1};
  let askTags=[];
  const qa=[
    {id:1,cat:'입찰',status:'채택',votes:47,answers:8,title:'탄력적입찰에서 1회차 유찰 시 처리 절차가 궁금합니다',body:'재공고와 수의계약 전환 기준, VAATZ 유찰처리 메뉴 사용법을 알고 싶습니다.',tags:['탄력적입찰','유찰','VAATZ'],author:'계약초보',time:'3일 전'},
    {id:2,cat:'5스타',status:'답변대기',votes:23,answers:5,title:'5스타 4→5등급 승급 시 현장 심사 항목이 변경되었나요?',body:'IATF 16949 인증 필수 여부와 기존 협력사 유예기간이 궁금합니다.',tags:['5스타','IATF16949','협력사'],author:'품질매니저',time:'1일 전'},
    {id:3,cat:'VAATZ',status:'해결중',votes:15,answers:3,title:'VAATZ에서 해외 발주 시 환율 자동 적용 방법',body:'해외구매 발주 시점 환율과 결제 시점 환율 기준이 혼동됩니다.',tags:['환율','해외구매','발주'],author:'해외구매담당',time:'오늘'},
    {id:4,cat:'계약',status:'HOT',votes:31,answers:6,title:'수의계약 긴급 사유서 승인 기준과 전결권은 어떻게 되나요?',body:'금액별 승인권자와 구매위원회 심의 조건을 정리하고 싶습니다.',tags:['수의계약','전결','사유서'],author:'계약초보',time:'오늘'},
    {id:5,cat:'원가',status:'NEW',votes:12,answers:1,title:'원가모드에서 단가 이력과 환율 기준을 같이 조회할 수 있나요?',body:'원가 관련 질의 시 어떤 DB를 연결해야 하는지 궁금합니다.',tags:['원가모드','단가','환율'],author:'원가분석러',time:'2시간 전'},
    {id:6,cat:'일반자재',status:'답변대기',votes:9,answers:0,title:'MRO 품목 반복 구매 시 경매입찰을 생략할 수 있는 기준이 있나요?',body:'반복 구매 품목의 예외 기준과 계약 활용 가능 여부가 궁금합니다.',tags:['MRO','반복구매','경매입찰'],author:'MRO담당',time:'20분 전'},
    {id:7,cat:'규정해석',status:'해결중',votes:18,answers:2,title:'구매업무규정 개정 전후 조항이 충돌할 때 어떤 버전을 우선하나요?',body:'최근 개정본과 기존 업무표준 내용이 다르게 보이는 경우 우선순위가 궁금합니다.',tags:['규정개정','버전관리','업무표준'],author:'규정관리자',time:'오늘'},
    {id:8,cat:'협력사',status:'채택',votes:38,answers:7,title:'협력사 평가 결과를 입찰 참여 조건에 자동 반영할 수 있나요?',body:'5스타 등급과 과거 납품 품질 이슈를 VAATZ 입찰 초대 조건에 반영하는 방법이 궁금합니다.',tags:['협력사','입찰초대','5스타'],author:'품질지킴이',time:'어제'}
  ];
  const folders=[
    {id:'rule',icon:'📕',name:'구매규정·제도',docs:182,chunks:48230,owners:8,health:'정상'},
    {id:'bid',icon:'🏷️',name:'입찰관리',docs:147,chunks:39220,owners:6,health:'정상'},
    {id:'vaatz',icon:'🖥️',name:'VAATZ 매뉴얼',docs:96,chunks:21040,owners:4,health:'정상'},
    {id:'quality',icon:'⭐',name:'품질 5스타',docs:74,chunks:16620,owners:3,health:'정상'},
    {id:'cost',icon:'💰',name:'원가·단가',docs:128,chunks:52610,owners:5,health:'권한주의'},
    {id:'mro',icon:'📦',name:'일반자재·MRO',docs:153,chunks:30650,owners:7,health:'정상'},
    {id:'global',icon:'🌐',name:'해외구매',docs:63,chunks:14290,owners:2,health:'점검'}
  ];
  const modeConfig={
    '통합모드':new Set(['rule','bid','vaatz','quality','mro','global']),
    '생산자재 모드':new Set(['rule','bid','quality','global']),
    '일반자재 모드':new Set(['rule','vaatz','mro']),
    '원가모드':new Set(['cost','rule'])
  };
  const martSources=[
    {id:'vaatz',name:'VAATZ 업체·품목 마스터',type:'VAATZ DB',status:'정상',rows:'1,248,320',last:'05:10',next:'내일 05:10',mode:'통합·생산자재·일반자재',err:0,icon:'🖥️'},
    {id:'autopedia',name:'Autopedia 용어 DB',type:'외부 DB',status:'정상',rows:'4,832',last:'06:00',next:'내일 06:00',mode:'통합모드',err:0,icon:'📖'},
    {id:'cost',name:'원가 DB 일 배치',type:'타 부문 시스템',status:'확인필요',rows:'823,114',last:'07:30',next:'내일 07:30',mode:'원가모드',err:12,icon:'💰'},
    {id:'quality',name:'품질/클레임 데이터',type:'품질 시스템',status:'정상',rows:'326,842',last:'04:30',next:'내일 04:30',mode:'생산자재·통합',err:0,icon:'⭐'},
    {id:'mro',name:'일반자재 MRO 카탈로그',type:'구매 카탈로그',status:'정상',rows:'68,201',last:'03:20',next:'내일 03:20',mode:'일반자재 모드',err:0,icon:'📦'}
  ];
  let selectedMart='vaatz', selectedMode='통합모드', selectedFolder='rule';

  function installChatControls(){
    $$('.ai-mode-switch').forEach(x=>x.remove());
    const box=$('.ibx'); if(!box||$('#v26ChatControls')) return;
    const row=document.createElement('div'); row.className='v26-chat-controls'; row.id='v26ChatControls';
    row.innerHTML=`<div class="v26-control-group"><span class="v26-control-label">AI 모드</span><div class="v26-chipset">${MODES.map(m=>`<button class="v26-mode-btn ${m===currentMode?'on':''}" data-mode="${m}" onclick="setChatModeV26('${m}')">${m.replace(' 모드','')}</button>`).join('')}</div></div><div class="v26-control-group"><span class="v26-control-label">글자</span><div class="v26-chipset">${[['small','작게'],['standard','표준'],['large','크게']].map(x=>`<button class="v26-size-btn ${x[0]===fontSize?'on':''}" data-size="${x[0]}" onclick="setFontSizeV26('${x[0]}')">${x[1]}</button>`).join('')}</div></div>`;
    box.insertBefore(row,box.firstChild);
    applyFontSize();
  }
  window.setChatModeV26=function(mode){currentMode=mode;safeLSSet('vaatz-current-mode',mode);$$('.v26-mode-btn').forEach(b=>b.classList.toggle('on',b.dataset.mode===mode));window.currentAIMode=mode;say(`${mode}로 전환했습니다. 이 모드에 연결된 DB와 문서만 우선 검색합니다.`,'🧭')};
  function applyFontSize(){document.documentElement.setAttribute('data-font-size',fontSize);$$('.v26-size-btn').forEach(b=>b.classList.toggle('on',b.dataset.size===fontSize));}
  window.setFontSizeV26=function(size){fontSize=size;safeLSSet('vaatz-font-size',size);applyFontSize();say(`글씨 크기: ${size==='large'?'크게':size==='small'?'작게':'표준'}로 변경했습니다.`,'Aa',1600)};

  function statusClass(st){return st==='채택'?'green':st==='답변대기'?'amber':st==='HOT'?'red':st==='NEW'?'blue':'blue'}
  function filteredQa(){return qa.filter(q=>(communityState.cat==='전체'||q.cat===communityState.cat)&& (communityState.status==='전체'||q.status===communityState.status) && (!communityState.tag||q.tags.includes(communityState.tag)) && (!communityState.query||`${q.title} ${q.body} ${q.tags.join(' ')} ${q.cat}`.toLowerCase().includes(communityState.query.toLowerCase())))}
  function allTags(){return [...new Set(qa.flatMap(q=>q.tags))].slice(0,18)}
  window.renderCommunityV26=function(){
    const box=$('.comm-box'); if(box) box.classList.add('v26-wide');
    const ct=$('#ct-qa'); if(!ct) return;
    const list=filteredQa(); const selected=qa.find(q=>q.id===communityState.selected)||list[0]||qa[0]; if(selected) communityState.selected=selected.id;
    ct.innerHTML=`<div class="v26-community v26-contain"><aside class="v26-community-side"><div class="v26-community-title">지식커뮤니티</div><div class="v26-community-sub">구매본부 구성원이 질문하고, 채택 답변은 AI 학습 후보로 올라갑니다.</div><div class="v26-q-stats"><div class="v26-q-stat"><div class="v">${qa.length.toLocaleString()}</div><div class="l">전체 질문</div></div><div class="v26-q-stat"><div class="v">82%</div><div class="l">해결률</div></div><div class="v26-q-stat"><div class="v">18</div><div class="l">오늘 활동</div></div><div class="v26-q-stat"><div class="v">11</div><div class="l">AI 후보</div></div></div><div class="v26-cat-title">카테고리</div>${categories.map(c=>`<button class="v26-cat-btn ${communityState.cat===c?'on':''}" onclick="setQCatV26('${c}')"><span>${c==='전체'?'📚':c==='입찰'?'🏷️':c==='계약'?'📄':c==='VAATZ'?'🖥️':c==='5스타'?'⭐':c==='원가'?'💰':c==='일반자재'?'📦':c==='해외구매'?'🌐':c==='협력사'?'🤝':'📘'} ${c}</span><span>${c==='전체'?qa.length:qa.filter(q=>q.cat===c).length}</span></button>`).join('')}<div class="v26-cat-title">인기 태그</div><div class="v26-tag-cloud">${allTags().map(t=>`<button class="v26-tag ${communityState.tag===t?'on':''}" onclick="setQTagV26('${t}')">#${t}</button>`).join('')}</div></aside><main class="v26-community-main"><div class="v26-q-hero"><div><div class="v26-community-title">구매본부 Q&A</div><div class="v26-community-sub">규정·VAATZ·원가·협력사 질문을 빠르게 검색하고 답변을 남길 수 있습니다.</div><div class="v26-q-searchbar"><span>🔍</span><input value="${esc(communityState.query)}" placeholder="질문, 답변, 태그를 검색하세요" oninput="searchQnaV26(this.value)"></div></div><div class="v26-q-actions"><button class="v26-secondary" onclick="setQStatusV26('답변대기')">답변대기</button><button class="v26-primary" onclick="openQuestionWriteV26()">＋ 질문하기</button></div></div><div class="v26-filter-row"><select class="v26-select" onchange="setQStatusV26(this.value)"><option ${communityState.status==='전체'?'selected':''}>전체</option><option ${communityState.status==='답변대기'?'selected':''}>답변대기</option><option ${communityState.status==='해결중'?'selected':''}>해결중</option><option ${communityState.status==='채택'?'selected':''}>채택</option><option ${communityState.status==='HOT'?'selected':''}>HOT</option><option ${communityState.status==='NEW'?'selected':''}>NEW</option></select><button class="v26-secondary" onclick="clearQFiltersV26()">필터 초기화</button><span style="margin-left:auto;color:var(--text-4);font-size:12px">${list.length}개 질문 표시</span></div><div class="v26-q-list">${list.map(q=>`<article class="v26-q-card ${q.id===communityState.selected?'on':''}" onclick="selectQuestionV26(${q.id})"><div class="v26-q-top"><div class="v26-vote"><div class="n">${q.votes}</div><div class="l">추천</div></div><div style="flex:1;min-width:0"><div class="v26-q-title">${esc(q.title)}</div><div class="v26-q-body">${esc(q.body)}</div><div class="v26-q-meta"><span class="v26-q-pill ${statusClass(q.status)}">${q.status}</span><span>💬 ${q.answers}</span><span>👤 ${esc(q.author)}</span><span>${q.time}</span>${q.tags.map(t=>`<span class="v26-tag" onclick="event.stopPropagation();setQTagV26('${t}')">#${esc(t)}</span>`).join('')}</div></div></div></article>`).join('')||`<div class="v26-empty">검색 결과가 없습니다. 필터를 초기화하거나 새 질문을 등록해보세요.</div>`}</div></main><aside class="v26-community-detail">${renderQuestionDetail(selected)}</aside></div>`;
  };
  function renderQuestionDetail(q){if(!q)return `<div class="v26-empty">질문을 선택하면 상세 내용이 표시됩니다.</div>`;return `<div class="v26-buddy-mini"><div class="v26-buddy-face"></div><div class="v26-buddy-text"><div class="t">VAATZ Buddy</div><div class="d">좋은 답변은 채택 후 AI 학습 후보로 자동 추천됩니다.</div></div></div><div class="v26-detail-card"><div class="v26-q-meta" style="margin-bottom:8px"><span class="v26-q-pill ${statusClass(q.status)}">${q.status}</span><span>${q.cat}</span>${q.tags.map(t=>`<span class="v26-tag" onclick="setQTagV26('${t}')">#${esc(t)}</span>`).join('')}</div><div class="v26-q-title">${esc(q.title)}</div><div class="v26-q-body">${esc(q.body)}</div><div class="v26-answer"><div class="v26-answer-title">채택 답변 예시</div><div class="v26-answer-body">관련 규정 조항과 VAATZ 메뉴 경로를 함께 적으면 채택률이 높아집니다. 답변은 추천 10개 이상 또는 질문자 채택 시 AI 학습 검증 후보로 이동합니다.</div><div style="display:flex;gap:8px;margin-top:10px"><button class="v26-secondary" onclick="saveCommunityNoteV26(${q.id})">⭐ 메모 저장</button><button class="v26-secondary" onclick="say('AI 학습 후보로 추천했습니다.','🧠')">🧠 AI 후보 추천</button></div></div><div class="v26-answer"><div class="v26-answer-title">답변 작성</div><div class="v26-reply-box"><textarea id="v26ReplyText" placeholder="근거 문서, 규정 조항, VAATZ 메뉴 경로를 포함해 답변해보세요."></textarea><div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px"><button class="v26-secondary" onclick="say('임시 저장했습니다.','💾')">임시저장</button><button class="v26-primary" onclick="postAnswerV26(${q.id})">답변 등록</button></div></div></div></div>`}
  window.selectQuestionV26=id=>{communityState.selected=id;renderCommunityV26()};
  window.setQCatV26=cat=>{communityState.cat=cat;communityState.selected=(filteredQa()[0]||qa[0]).id;renderCommunityV26()};
  window.setQStatusV26=st=>{communityState.status=st;communityState.selected=(filteredQa()[0]||qa[0]).id;renderCommunityV26()};
  window.setQTagV26=tag=>{communityState.tag=communityState.tag===tag?'':tag;communityState.selected=(filteredQa()[0]||qa[0]).id;renderCommunityV26()};
  window.searchQnaV26=(v)=>{communityState.query=v; window.clearTimeout(window.__v26QTimer); window.__v26QTimer=setTimeout(renderCommunityV26,120)};
  window.clearQFiltersV26=()=>{communityState={cat:'전체',status:'전체',tag:'',query:'',selected:qa[0].id};renderCommunityV26()};
  window.postAnswerV26=id=>{const q=qa.find(x=>x.id===id); if(q){q.answers++;q.status='해결중';say('답변이 등록되었습니다. 채택되면 포인트가 지급됩니다.','✅');renderCommunityV26()}};
  window.saveCommunityNoteV26=id=>{const q=qa.find(x=>x.id===id); if(window.openMemoModal){openMemoModal(); const t=$('#v25MemoTitle'), b=$('#v25MemoBody'); if(t)t.value='커뮤니티 저장: '+q.title; if(b)b.value=`[${q.cat}] ${q.title}\n\n${q.body}\n\n태그: ${q.tags.map(x=>'#'+x).join(' ')}`;} else say('메모에 저장했습니다.','⭐')};

  function ensureAskModal(){if($('#v26AskModal')) return; document.body.insertAdjacentHTML('beforeend',`<div class="v26-ask-modal" id="v26AskModal" onclick="if(event.target===this)closeQuestionWriteV26()"><div class="v26-ask-box"><div class="v26-ask-h"><div><div class="v26-ask-title">질문 등록</div><div class="v26-community-sub">카테고리를 직접 입력하고, 검색이 쉬운 태그를 붙여주세요.</div></div><button class="large-close" onclick="closeQuestionWriteV26()">✕</button></div><div class="v26-ask-body"><div class="v26-form-grid"><div class="v26-field"><label>카테고리</label><input id="v26AskCat" list="v26CatList" placeholder="예: 입찰, 원가, 신규 카테고리 직접 입력"><datalist id="v26CatList">${categories.filter(x=>x!=='전체').map(c=>`<option value="${c}"></option>`).join('')}</datalist></div><div class="v26-field"><label>태그</label><div class="v26-tag-editor" id="v26TagEditor"><input id="v26TagInput" placeholder="Enter로 태그 추가" onkeydown="handleTagKeyV26(event)"></div></div></div><div class="v26-field"><label>질문 제목</label><input id="v26AskTitle" placeholder="질문을 한 줄로 요약해주세요"></div><div class="v26-field"><label>상세 내용</label><textarea id="v26AskBody" placeholder="상황, 관련 문서, VAATZ 화면, 원하는 답변 형태를 적어주세요."></textarea></div></div><div class="v26-ask-foot"><span style="font-size:12px;color:var(--text-4)">좋은 태그 예: #탄력적입찰 #수의계약 #5스타 #원가모드</span><div style="display:flex;gap:8px"><button class="v26-secondary" onclick="closeQuestionWriteV26()">취소</button><button class="v26-primary" onclick="submitQuestionV26()">등록</button></div></div></div></div>`)}
  function renderAskTags(){const ed=$('#v26TagEditor'), input=$('#v26TagInput'); if(!ed||!input)return; ed.querySelectorAll('.v26-tag-item').forEach(x=>x.remove()); askTags.forEach(t=>ed.insertBefore(Object.assign(document.createElement('span'),{className:'v26-tag-item',innerHTML:`#${esc(t)} <button onclick="removeAskTagV26('${esc(t)}')">×</button>`}),input));}
  window.openQuestionWriteV26=()=>{ensureAskModal();askTags=[];['v26AskCat','v26AskTitle','v26AskBody','v26TagInput'].forEach(id=>{const el=$('#'+id); if(el) el.value=''});renderAskTags();$('#v26AskModal').classList.add('sh');setTimeout(()=>$('#v26AskTitle')?.focus(),80)};
  window.closeQuestionWriteV26=()=>$('#v26AskModal')?.classList.remove('sh');
  window.handleTagKeyV26=e=>{if(e.key==='Enter'||e.key===',' ){e.preventDefault();const v=e.target.value.trim().replace(/^#/,'');if(v&&!askTags.includes(v))askTags.push(v);e.target.value='';renderAskTags();}};
  window.removeAskTagV26=t=>{askTags=askTags.filter(x=>x!==t);renderAskTags()};
  window.submitQuestionV26=()=>{const cat=$('#v26AskCat')?.value.trim()||'일반'; const title=$('#v26AskTitle')?.value.trim(); const body=$('#v26AskBody')?.value.trim(); const tagInput=$('#v26TagInput')?.value.trim().replace(/^#/,''); if(tagInput&&!askTags.includes(tagInput))askTags.push(tagInput); if(!title||!body){say('제목과 상세 내용을 입력해주세요.','⚠️');return} const id=Date.now(); qa.unshift({id,cat,status:'답변대기',votes:0,answers:0,title,body,tags:askTags.length?askTags:[cat],author:'프로큐어히어로',time:'방금'}); communityState={cat:'전체',status:'전체',tag:'',query:'',selected:id}; closeQuestionWriteV26(); renderCommunityV26(); say('질문이 등록되었습니다.','✅')};

  const oldOpenComm=window.openComm; window.openComm=function(tab='qa'){if(oldOpenComm)oldOpenComm(tab); if(tab==='qa'||!tab){setTimeout(renderCommunityV26,40)}};
  const oldCommTab=window.commTab; window.commTab=function(btn,id){if(oldCommTab)oldCommTab(btn,id); if(id==='ct-qa')setTimeout(renderCommunityV26,40)};
  const oldOpenQuestion=window.openQuestionWrite; window.openQuestionWrite=function(){openQuestionWriteV26()};

  function renderModeOps(){const el=$('#p-mode'); if(!el)return; const active=modeConfig[selectedMode]; const connected=folders.filter(f=>active.has(f.id)); const chunks=connected.reduce((a,f)=>a+f.chunks,0); el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">AI 모드 · 폴더팩 운영</div><div class="v23-title-sub">대량 파일을 개별 문서가 아니라 폴더팩/규칙팩 단위로 연결하고, 예외 파일만 별도 관리합니다.</div></div><button class="v26-primary" onclick="say('모드 정책을 저장했습니다.','🧭')">정책 저장</button></div><div class="v26-admin-hero"><div class="v26-admin-card"><h3>${selectedMode}</h3><p>현재 모드는 ${connected.length}개 폴더팩, ${connected.reduce((a,f)=>a+f.docs,0).toLocaleString()}개 문서, ${chunks.toLocaleString()} chunks를 검색 대상으로 사용합니다.</p><div class="v26-mini-kpis"><div class="v26-mini-kpi"><div class="v">${connected.length}</div><div class="l">연결 폴더팩</div></div><div class="v26-mini-kpi"><div class="v">${connected.reduce((a,f)=>a+f.docs,0)}</div><div class="l">문서</div></div><div class="v26-mini-kpi"><div class="v">${chunks.toLocaleString()}</div><div class="l">Chunks</div></div><div class="v26-mini-kpi"><div class="v">${selectedMode==='원가모드'?4:9}</div><div class="l">예외 규칙</div></div></div></div><div class="v26-admin-card"><h3>추천 운영 방식</h3><p>① 기본은 폴더팩 단위 연결 ② 특정 파일만 예외 추가/제외 ③ 주 1회 영향도 리포트 ④ 원가/리더 문서는 접근 로그 강화.</p><div class="v26-ops-guide"><h4>복잡도 줄이는 기준</h4><ul><li>파일별 관리보다 “폴더팩” 기준으로 운영</li><li>대량 수정은 검색 결과 선택 후 일괄 반영</li><li>모드별 영향도는 chunks/문서수로 사전 확인</li></ul></div></div></div><div class="v26-pack-layout"><div class="v26-mode-nav"><div class="v26-cat-title">AI 모드</div>${MODES.map(m=>`<button class="${m===selectedMode?'on':''}" onclick="selectModeOpsV26('${m}')"><span>${m==='통합모드'?'🌐':m.includes('생산')?'🏭':m.includes('일반')?'📦':'💰'} ${m}</span><span>${folders.filter(f=>modeConfig[m].has(f.id)).length}</span></button>`).join('')}</div><div><div class="v26-filter-row"><select class="v26-select" id="v26PackFilter" onchange="renderModeOpsV26()"><option value="">전체 폴더팩</option><option value="on">연결됨</option><option value="off">미연결</option></select><button class="v26-secondary" onclick="say('권장 폴더팩을 자동 선택했습니다.','✨')">권장안 적용</button></div><div class="v26-pack-grid">${folders.filter(f=>{const v=$('#v26PackFilter')?.value||''; return !v || (v==='on'?active.has(f.id):!active.has(f.id))}).map(f=>`<div class="v26-pack-card"><div class="v26-pack-head"><div><div class="v26-pack-title">${f.icon} ${f.name}</div><div class="v26-pack-sub">${f.health} · Owner ${f.owners}명 · 모드 연결 시 해당 폴더 전체가 검색 후보가 됩니다.</div></div><div class="v26-toggle ${active.has(f.id)?'on':''}" onclick="togglePackV26('${f.id}',this)"></div></div><div class="v26-pack-meta"><div><b>${f.docs}</b><span>문서</span></div><div><b>${f.chunks.toLocaleString()}</b><span>chunks</span></div><div><b>${f.owners}</b><span>owners</span></div></div></div>`).join('')}</div></div><div class="v26-exception-panel"><div class="v26-pack-title">예외 파일 관리</div><div class="v26-pack-sub">폴더팩에 포함되지만 특정 모드에서 제외하거나, 반대로 개별 파일만 추가합니다.</div><div class="v26-q-searchbar" style="margin-top:10px"><span>🔍</span><input id="v26ExceptionSearch" placeholder="예외 파일 검색" oninput="renderModeOpsV26()"></div><div class="v26-ex-list">${folders.flatMap(f=>[0,1,2].map(i=>({folder:f,name:`${f.name} 예외문서_${i+1}.pdf`,team:['구매전략팀','원가관리팀','일반자재구매팀'][i%3]}))).filter(x=>!$('#v26ExceptionSearch')?.value||x.name.includes($('#v26ExceptionSearch').value)).slice(0,12).map(x=>`<div class="v26-ex-row"><div class="name">${esc(x.name)}</div><div class="meta">${x.team} · ${x.folder.name} · ${selectedMode}에서 ${active.has(x.folder.id)?'포함':'제외'} 상태</div><div style="display:flex;gap:6px;margin-top:8px"><button class="v26-secondary" onclick="say('예외 규칙을 반영했습니다.','🧭')">예외 전환</button><button class="v26-secondary" onclick="say('원문 미리보기를 열었습니다.','🔎')">보기</button></div></div>`).join('')}</div></div></div>`}
  window.selectModeOpsV26=m=>{selectedMode=m;renderModeOps()};
  window.togglePackV26=(id,el)=>{const s=modeConfig[selectedMode]; s.has(id)?s.delete(id):s.add(id); el?.classList.toggle('on'); say('폴더팩 연결 정책을 변경했습니다. 저장 시 반영됩니다.','🧭'); renderModeOps()};
  window.renderModeOpsV26=renderModeOps;

  function renderListOps(){const el=$('#p-list'); if(!el)return; const f=folders.find(x=>x.id===selectedFolder)||folders[0]; const docRows=Array.from({length:Math.min(14,f.docs)},(_,i)=>({name:`${f.name} 문서_${String(i+1).padStart(3,'0')}.${['pdf','ppt','docx','xlsx'][i%4]}`,team:['구매전략팀','원가관리팀','일반자재구매팀','구매품질기획팀'][i%4],sec:['일반 공개','리더 전용','지정 사용자'][i%3],modes:MODES.filter((_,idx)=>(i+idx)%2===0)})); el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">최종 리스트 · 폴더팩 관리</div><div class="v23-title-sub">문서가 많을수록 최종 지식은 폴더팩 중심으로 보고, 상세 문서는 검색 결과에서만 관리합니다.</div></div><div class="v23-actions"><button class="v26-secondary">CSV</button><button class="v26-primary">＋ 등록</button></div></div><div class="v26-folder-board"><div class="v26-folder-side"><div class="v26-cat-title">통합 지식 폴더</div>${folders.map(x=>`<button class="${x.id===selectedFolder?'on':''}" onclick="selectFinalFolderV26('${x.id}')"><span>${x.icon} ${x.name}</span><span>${x.docs}</span></button>`).join('')}</div><div class="v26-folder-main"><div class="v26-folder-main-h"><div><div class="v26-pack-title">${f.icon} ${f.name}</div><div class="v26-pack-sub">${f.docs}개 문서 · ${f.chunks.toLocaleString()} chunks · ${f.owners}명 Owner</div></div><div class="v26-filter-row"><input class="v26-select" style="width:230px" placeholder="현재 폴더 내 검색" oninput="filterFinalRowsV26(this.value)"><button class="v26-secondary" onclick="say('선택 문서를 일괄 재색인했습니다.','🔄')">재색인</button></div></div><div class="v26-doc-list" id="v26FinalRows">${docRows.map(d=>`<div class="v26-doc-row" data-text="${(d.name+d.team+d.sec+d.modes.join(' ')).toLowerCase()}"><div><div class="n">${esc(d.name)}</div><div class="m">${d.team} · v1.${Math.floor(Math.random()*9)} · 활성</div></div><div>${secBadge(d.sec)}</div><div class="v26-tag-cloud">${d.modes.map(m=>`<span class="v26-tag">${m.replace(' 모드','')}</span>`).join('')}</div><button class="v26-secondary" onclick="say('상세 패널을 열었습니다.','📚')">상세</button></div>`).join('')}</div></div></div>`}
  function secBadge(s){return `<span class="v26-q-pill ${s==='리더 전용'?'red':s==='지정 사용자'?'blue':'green'}">${s}</span>`}
  window.selectFinalFolderV26=id=>{selectedFolder=id;renderListOps()};
  window.filterFinalRowsV26=q=>{$$('#v26FinalRows .v26-doc-row').forEach(r=>r.style.display=!q||r.dataset.text.includes(q.toLowerCase())?'grid':'none')};

  function renderMartOps(){const el=$('#p-datamart'); if(!el)return; const src=martSources.find(x=>x.id===selectedMart)||martSources[0]; const ok=src.status==='정상'; el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">정형 데이터마트 · 직관형 모니터링</div><div class="v23-title-sub">Source → Data Mart → Transform → Index → AI Mode 흐름을 소스별로 확인합니다.</div></div><div class="v23-actions"><button class="v26-secondary" onclick="showOnlyIssueMartV26()">문제만 보기</button><button class="v26-primary" onclick="say('전체 배치를 재점검했습니다.','🔄')">전체 재점검</button></div></div><div class="v26-admin-hero"><div class="v26-admin-card"><h3>오늘 배치 요약</h3><p>5개 주요 정형 데이터 중 4개 정상, 1개 확인 필요입니다. 원가 DB의 12개 row 오류는 원본 코드값 누락으로 표시됩니다.</p><div class="v26-mini-kpis"><div class="v26-mini-kpi"><div class="v">4</div><div class="l">정상</div></div><div class="v26-mini-kpi"><div class="v">1</div><div class="l">확인</div></div><div class="v26-mini-kpi"><div class="v">2.4M</div><div class="l">Rows</div></div><div class="v26-mini-kpi"><div class="v">05:10</div><div class="l">주요 배치</div></div></div></div><div class="v26-admin-card"><h3>운영자가 볼 것</h3><p>성공/실패만 보는 대신, 어느 AI 모드에 반영됐는지와 Index까지 도달했는지를 함께 봅니다. 문제 발생 시 원본 Source 담당자와 row 오류를 바로 확인합니다.</p></div></div><div class="v26-mart-grid"><div class="v26-health-list" id="v26MartList">${martSources.map(s=>`<div class="v26-health-card ${s.id===selectedMart?'on':''}" data-status="${s.status}" onclick="selectMartV26('${s.id}')"><div class="v26-health-title"><span>${s.icon} ${s.name}</span><span class="v26-q-pill ${s.status==='정상'?'green':'amber'}">${s.status}</span></div><div class="v26-health-meta">${s.type} · ${s.rows} rows · ${s.last} 완료 · ${s.mode}</div></div>`).join('')}</div><div class="v26-mart-detail"><div class="v26-pack-title">${src.icon} ${src.name}</div><div class="v26-pack-sub">${src.type} · 마지막 완료 ${src.last} · 다음 실행 ${src.next} · 연결 모드 ${src.mode}</div><div class="v26-pipeline">${['수집','검증','변환','Index','AI 반영'].map((t,i)=>`<div class="v26-pipe-step"><div class="v26-pipe-dot ${!ok&&i===1?'warn':''}"></div><div class="t">${t}</div><div class="d">${!ok&&i===1?src.err+' rows 확인':'정상'}</div></div>`).join('')}</div><div class="v26-mini-kpis"><div class="v26-mini-kpi"><div class="v">${src.rows}</div><div class="l">Rows</div></div><div class="v26-mini-kpi"><div class="v">${src.err}</div><div class="l">오류</div></div><div class="v26-mini-kpi"><div class="v">${src.last}</div><div class="l">완료</div></div><div class="v26-mini-kpi"><div class="v">${src.next}</div><div class="l">다음</div></div></div><div class="v26-ops-guide"><h4>조치 가이드</h4><ul><li>오류 row가 있으면 원본 담당 시스템에 재전송 요청</li><li>Index 단계 실패 시 모드별 색인만 재생성</li><li>원가/리더 전용 데이터는 권한 시뮬레이션 후 배포</li></ul></div></div></div>`}
  window.selectMartV26=id=>{selectedMart=id;renderMartOps()};
  window.showOnlyIssueMartV26=()=>{$$('#v26MartList .v26-health-card').forEach(c=>c.style.display=c.dataset.status==='정상'?'none':'block')};

  const oldOpenAdminTab=window.openAdminTab; window.openAdminTab=function(id){if(oldOpenAdminTab)oldOpenAdminTab(id); setTimeout(()=>{if(id==='p-mode')renderModeOps(); if(id==='p-datamart')renderMartOps(); if(id==='p-list')renderListOps();},90)};
  const oldOa=window.oa; window.oa=function(){if(oldOa)oldOa(); setTimeout(()=>{const active=[...$$('.atb')].find(b=>b.classList.contains('on')); const id=(active?.getAttribute('onclick')||'').match(/'([^']+)'/)?.[1]||'p-req'; if(id==='p-mode')renderModeOps(); if(id==='p-datamart')renderMartOps(); if(id==='p-list')renderListOps();},120)};

  function boot(){document.documentElement.setAttribute('data-font-size',fontSize); installChatControls(); ensureAskModal(); const top=$('#topModeSwitch'); if(top)top.remove(); if($('#p-mode')&&$('.atb.on')?.getAttribute('onclick')?.includes('p-mode'))renderModeOps();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(boot,180)); else setTimeout(boot,180);
})();


(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const say=(m,i='✅',d=2300)=>{try{(window.toast||window.say||console.log)(m,i,d)}catch(e){console.log(i,m)}};
  const stageLabel={
    '작성·보완중':'작성·보완중','등록 요청됨':'등록 요청됨','최종요청':'승인요청','보완 요청':'보완 요청','AI 검색 반영완료':'AI 검색 반영완료','반영완료':'AI검색반영','승인됨':'AI 검색 반영완료'
  };
  function normalizeStatusText(root=document){
    try{
      const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){return /작성·보완중|등록 요청됨|최종요청|보완 요청|AI 검색 반영완료|반영완료/.test(node.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});
      const nodes=[]; while(walker.nextNode())nodes.push(walker.currentNode);
      nodes.forEach(n=>{Object.entries(stageLabel).forEach(([a,b])=>{n.nodeValue=n.nodeValue.split(a).join(b)})});
    }catch(e){}
  }
  function statePill(st){
    const map={
      '작성·보완중':['draft','📝'],'등록 요청됨':['requested','🚀'],'시스템 검토중':['review','🔎'],'보완 요청':['returned','↩️'],'AI 검색 반영완료':['live','✅']
    }; const [c,ic]=map[st]||['draft','•']; return `<span class="v27-state ${c}">${ic} ${st}</span>`;
  }
  function modeChips(modes){return modes.map(m=>`<span class="mode-badge ${m.includes('생산')?'mode-prod':m.includes('일반')?'mode-general':m.includes('원가')?'mode-cost':'mode-all'}">${esc(m.replace(' 모드',''))}</span>`).join('')}

  /* Source panel fullscreen button */
  window.toggleSourceFullV27=function(){const rp=$('#rp'); if(!rp)return; rp.classList.toggle('source-full'); say(rp.classList.contains('source-full')?'답변 근거를 크게 봅니다.':'답변 근거 패널 크기를 원래대로 돌렸습니다.','🔎',1600)};
  function installSourceTools(){
    const h=$('#rp .rp-h'); if(h&&!$('#sourceFullBtn')){
      const btn=document.createElement('button'); btn.id='sourceFullBtn'; btn.className='rp-c'; btn.title='근거 패널 크게 보기'; btn.innerHTML='⛶'; btn.onclick=(e)=>{e.stopPropagation();toggleSourceFullV27()};
      const close=h.querySelector('.rp-c'); h.insertBefore(btn,close||null);
    }
  }

  /* Bigger popup fullscreen */
  window.toggleLargeModalMaxV27=function(id){const m=$(id); if(!m)return; m.classList.toggle('full'); const b=m.querySelector('.v27-max-btn'); if(b)b.textContent=m.classList.contains('full')?'↙':'⛶';};

  /* Team folder modal rebuilt with clearer states */
  const teams=['구매전략팀','반도체구매팀','구매품질기획팀','PT제어부품구매팀','구매역량개발팀','샤시부품구매1팀','의장시스템부품개발팀','일반자재구매팀','원가관리팀'];
  const folders=[['all','전체 문서','📚'],['policy','구매규정·제도','📕'],['bid','입찰관리','🏷️'],['manual','VAATZ 매뉴얼','🖥️'],['quality','품질 5스타','⭐'],['cost','원가·단가','💰'],['mro','일반자재·MRO','📦'],['global','해외구매','🌐']];
  const names=['입찰운영 업무표준','구매업무규정 전문','경매입찰 가이드라인','VAATZ 입찰모듈 매뉴얼','품질 5스타 운영기준','전동화 부품 단가 벤치마크','해외법인 구매 승인 프로세스','원가 산정 기준표','일반자재 MRO 구매 가이드','수의계약 사유서 양식','검수확인 업무표준','협력사 평가 데이터셋','구매용어 표준정의집','반도체 수출규제 현황','계약관리 규정','ESG 구매 운영 가이드','납기 리스크 대응 매뉴얼','협력사 신규 등록 절차'];
  const modes=['통합모드','생산자재 모드','일반자재 모드','원가모드'];
  const secs=['리더 전용','일반 공개','지정 사용자'];
  const types=['PDF','PPT','DOCX','XLSX'];
  let v27Team='구매전략팀', v27Folder='all';
  let v27Docs=[];
  function makeV27Docs(){
    let out=[]; teams.forEach((team,ti)=>{for(let i=0;i<92+(ti%4)*14;i++){
      let st='작성·보완중'; if(i<6+ti%4)st='등록 요청됨'; if(i%37===0)st='시스템 검토중'; if(i%41===0)st='보완 요청'; if(i>72+(ti%4)*10)st='AI 검색 반영완료';
      const f=folders[1+((i+ti)% (folders.length-1))][0];
      const myModes=modes.filter((m,mi)=>(i+mi+ti)%3!==0); if(!myModes.length)myModes.push('통합모드');
      out.push({id:`V27-${ti}-${i}`,team,folder:f,name:`${names[(i+ti)%names.length]}_${String(i+1).padStart(3,'0')}.${types[(i+ti)%types.length].toLowerCase()}`,type:types[(i+ti)%types.length],sec:secs[(i+ti)%secs.length],modes:myModes,version:`v${1+i%5}.${i%10}`,owner:i%4===0?'팀 Admin':i%4===1?'팀장 검토':'팀원 업로드',date:`2026.05.${String(1+i%23).padStart(2,'0')}`,status:st,chunks:80+(i*13)%520});
    }}); return out;
  }
  v27Docs=makeV27Docs();
  function secPill(sec){let cls=sec==='리더 전용'?'red':sec==='지정 사용자'?'violet':'green'; return `<span class="v27-pill ${cls}">${esc(sec)}</span>`}
  function renderTeamRowsV27(){
    const q=($('#teamDocSearch')?.value||'').toLowerCase().trim(); const st=$('#teamDocStatusFilter')?.value||''; const sec=$('#teamDocSecFilter')?.value||'';
    let list=v27Docs.filter(d=>d.team===v27Team&&(v27Folder==='all'||d.folder===v27Folder)&&(!st||d.status===st)&&(!sec||d.sec===sec)&&(!q||`${d.name} ${d.owner} ${d.sec} ${d.modes.join(' ')} ${d.status}`.toLowerCase().includes(q)));
    const body=$('#teamDocRows'); if(!body)return; body.innerHTML=list.map(d=>`<tr><td><input type="checkbox" class="check-lg team-doc-check" data-id="${d.id}"></td><td><div class="v25-doc-title">${esc(d.name)}</div><div class="v25-doc-path">/${esc(folders.find(f=>f[0]===d.folder)?.[1||0]||d.folder)} · ${d.date} · ${d.chunks} chunks</div></td><td>${d.type}</td><td>${secPill(d.sec)}</td><td><div class="v25-mode-set">${modeChips(d.modes)}</div></td><td>${d.version}</td><td>${d.owner}</td><td>${statePill(d.status)}</td><td><div class="row-actions"><button class="v27-btn" onclick="previewTeamDocV27('${d.id}')">보기</button><button class="v27-btn primary" onclick="requestOneTeamDoc('${d.id}')">승인 요청</button></div></td></tr>`).join('')||`<tr><td colspan="9"><div class="v27-empty">조건에 맞는 문서가 없습니다.</div></td></tr>`;
    const count=$('#teamDocCount'); if(count)count.textContent=`${list.length.toLocaleString()}건 표시`;
    normalizeStatusText(body);
  }
  window.openTeamFolderModal=function(team){
    v27Team=team||v27Team; v27Folder='all'; const m=$('#teamFolderModal'); if(!m)return;
    const teamDocs=v27Docs.filter(d=>d.team===v27Team);
    m.classList.remove('full');
    m.innerHTML=`<div class="large-box"><div class="large-hd"><div><div class="large-title">📁 ${esc(v27Team)} 문서함</div><div class="large-sub">문서가 많아도 폴더·검색·상태 필터로 좁혀보고, 필요한 문서만 System Admin 승인 요청으로 보냅니다.</div></div><div class="v27-modal-actions"><button class="v27-icon-btn v27-max-btn" onclick="toggleLargeModalMaxV27('#teamFolderModal')" title="전체창">⛶</button><button class="large-close" onclick="closeTeamFolderModal()">✕</button></div></div><div class="large-toolbar"><label style="font-size:13px;color:var(--text-3);display:flex;gap:7px;align-items:center"><input type="checkbox" class="check-lg" onchange="toggleTeamDocAll(this)"> 전체 선택</label><div class="large-search"><span>🔍</span><input id="teamDocSearch" placeholder="문서명, 담당자, 보안등급, AI 모드, 상태 검색" oninput="renderTeamDocRows()"></div><select class="frm-i frm-sel" id="teamDocStatusFilter" style="width:160px" onchange="renderTeamDocRows()"><option value="">전체 단계</option><option>작성·보완중</option><option>등록 요청됨</option><option>시스템 검토중</option><option>보완 요청</option><option>AI 검색 반영완료</option></select><select class="frm-i frm-sel" id="teamDocSecFilter" style="width:150px" onchange="renderTeamDocRows()"><option value="">전체 보안</option><option>리더 전용</option><option>일반 공개</option><option>지정 사용자</option></select><button class="v27-btn primary" onclick="submitSelectedTeamDocs()">🚀 선택 승인 요청</button><span id="teamDocCount" style="margin-left:auto;color:var(--text-4);font-size:13px"></span></div><div class="large-body"><div class="v27-stage-strip"><div class="v27-stage-card"><div class="n">${teamDocs.filter(d=>d.status==='작성·보완중').length}</div><div class="l">작성·보완중<br>업로드·보완 단계</div></div><div class="v27-stage-card"><div class="n">${teamDocs.filter(d=>d.status==='등록 요청됨'||d.status==='시스템 검토중').length}</div><div class="l">System 승인 대기<br>구매디지털추진팀 검토</div></div><div class="v27-stage-card"><div class="n">${teamDocs.filter(d=>d.status==='보완 요청').length}</div><div class="l">보완 요청<br>보안·중복·버전 보완</div></div><div class="v27-stage-card"><div class="n">${teamDocs.filter(d=>d.status==='AI 검색 반영완료').length}</div><div class="l">AI 검색 반영완료<br>RAG 검색 활성</div></div></div><div class="v25-folder-layout"><div class="v25-folder-tree"><div class="v25-folder-head">${esc(v27Team)} 폴더</div>${folders.map(f=>`<button class="v25-folder ${f[0]==='all'?'on':''}" onclick="selectTeamFolder('${f[0]}',this)"><span>${f[2]} ${f[1]}</span><span class="cnt">${f[0]==='all'?teamDocs.length:teamDocs.filter(d=>d.folder===f[0]).length}</span></button>`).join('')}<div class="mode-note" style="margin-top:12px">상태 용어: 작성·보완중 → 등록 요청됨 → 시스템 검토중 → AI 검색 반영완료. 보완 요청는 “보완 요청”으로 표시합니다.</div></div><div class="large-table-wrap"><table class="large-table"><thead><tr><th></th><th>문서명</th><th>유형</th><th>보안</th><th>AI 모드</th><th>버전</th><th>담당자</th><th>단계</th><th>작업</th></tr></thead><tbody id="teamDocRows"></tbody></table></div></div></div></div>`;
    m.classList.add('sh'); renderTeamRowsV27();
  };
  window.closeTeamFolderModal=()=>$('#teamFolderModal')?.classList.remove('sh');
  window.selectTeamFolder=(id,btn)=>{v27Folder=id;$$('#teamFolderModal .v25-folder').forEach(b=>b.classList.remove('on'));btn?.classList.add('on');renderTeamRowsV27();};
  window.renderTeamDocRows=renderTeamRowsV27;
  window.toggleTeamDocAll=chk=>$$('#teamFolderModal .team-doc-check').forEach(c=>c.checked=chk.checked);
  window.submitSelectedTeamDocs=()=>{const ids=$$('#teamFolderModal .team-doc-check:checked').map(c=>c.dataset.id); if(!ids.length)return say('승인 요청할 문서를 선택해주세요.','⚠️'); ids.forEach(id=>{const d=v27Docs.find(x=>x.id===id); if(d)d.status='등록 요청됨'}); renderTeamRowsV27(); say(`${ids.length}건을 System Admin 승인 대기열로 보냈습니다.`,'🚀')};
  window.requestOneTeamDoc=id=>{const d=v27Docs.find(x=>x.id===id); if(d)d.status='등록 요청됨'; renderTeamRowsV27(); say('System Admin 승인 대기열로 보냈습니다.','🚀')};
  window.previewTeamDocV27=id=>{const d=v27Docs.find(x=>x.id===id); if(!d)return; say(`${d.name} 원문 미리보기: 근거 뷰어 형식으로 열 수 있습니다.`,'📄',2600)};

  /* Community v27 */
  let v27Qa=[
    {id:1,cat:'입찰',status:'채택',likes:47,answers:8,title:'탄력적입찰에서 1회차 유찰 시 처리 절차가 궁금합니다',body:'입찰 1회차 유찰 후 재공고와 수의계약 전환 기준이 헷갈립니다. VAATZ 처리 메뉴도 함께 알고 싶습니다.',tags:['탄력적입찰','유찰','수의계약'],author:'계약초보',time:'3일 전',candidate:true},
    {id:2,cat:'5스타',status:'해결중',likes:23,answers:5,title:'5스타 4→5등급 승급 시 현장 심사 항목이 변경되었나요?',body:'IATF 16949 인증이 5스타 승급 필수인지, 기존 협력사 유예기간이 있는지 확인하고 싶습니다.',tags:['5스타','IATF16949','협력사평가'],author:'품질매니저',time:'1일 전',candidate:true},
    {id:3,cat:'원가',status:'답변대기',likes:18,answers:2,title:'원가모드에서 단가 벤치마크 자료는 어떤 권한으로 검색되나요?',body:'원가성 문서가 리더 전용인지 지정 사용자 문서인지, AI 모드별 접근 정책이 궁금합니다.',tags:['원가모드','보안등급','단가'],author:'원가분석',time:'오늘',candidate:false},
    {id:4,cat:'VAATZ',status:'HOT',likes:31,answers:7,title:'VAATZ 발주 생성 후 공급사 통보가 누락될 때 확인할 체크포인트',body:'발주서는 생성됐는데 협력사 알림이 안 갔다는 문의가 있습니다. 메뉴별 확인 순서를 알려주세요.',tags:['VAATZ','발주','협력사알림'],author:'VAATZ달인',time:'오늘',candidate:false},
    {id:5,cat:'일반자재',status:'NEW',likes:9,answers:1,title:'MRO 카탈로그 품목과 수의계약 사유서가 같이 필요한 경우',body:'일반자재 구매에서 카탈로그 품목인데 예외적으로 수의계약 사유서가 필요한 사례가 있는지 궁금합니다.',tags:['MRO','일반자재','수의계약'],author:'MRO담당',time:'방금',candidate:false},
    {id:6,cat:'해외구매',status:'해결중',likes:14,answers:3,title:'해외 발주 시 환율 적용 기준일과 정산 방식',body:'발주일 기준인지 검수일 기준인지, 차액 정산은 어떤 프로세스로 하는지 알고 싶습니다.',tags:['해외구매','환율','정산'],author:'글로벌소싱',time:'오늘',candidate:false}
  ];
  let commState={cat:'전체',status:'전체',tag:'',query:'',selected:1};
  const cats=['전체','입찰','계약','VAATZ','5스타','원가','일반자재','해외구매','협력사'];
  function qTags(){return [...new Set(v27Qa.flatMap(q=>q.tags))].slice(0,22)}
  function qFiltered(){const q=commState.query.toLowerCase();return v27Qa.filter(x=>(commState.cat==='전체'||x.cat===commState.cat)&&(commState.status==='전체'||x.status===commState.status)&&(!commState.tag||x.tags.includes(commState.tag))&&(!q||`${x.title} ${x.body} ${x.tags.join(' ')} ${x.cat}`.toLowerCase().includes(q)))}
  function stCls(s){return s==='채택'?'green':s==='답변대기'?'amber':s==='HOT'?'red':s==='NEW'?'blue':'violet'}
  function renderDetail(q){if(!q)return `<div class="v27-empty">질문을 선택하면 상세가 표시됩니다.</div>`;return `<div class="v27-loop-card"><div class="v27-loop-ic">💡</div><div><div class="v27-loop-title">지식 선순환</div><div class="v27-loop-desc">좋아요 10개 이상 + 채택 답변은 “AI 학습 검증 후보”로 올라가고, System Admin 검증 후 RAG DB에 반영됩니다.</div></div></div><div class="v27-detail-card"><div class="v27-meta"><span class="v27-pill ${stCls(q.status)}">${q.status}</span><span>${q.cat}</span>${q.tags.map(t=>`<button class="v27-tag" onclick="v27SetTag('${esc(t)}')">#${esc(t)}</button>`).join('')}</div><div class="v27-detail-title">${esc(q.title)}</div><div class="v27-detail-body">${esc(q.body)}</div><div class="v27-answer"><div class="v27-answer-h"><div class="v27-answer-author">프로큐어마스터 · 채택 답변 예시</div><span class="v27-pill green">좋아요 ${q.likes}</span></div><div class="v27-answer-body">구매업무규정과 VAATZ 메뉴 경로를 함께 확인하면 좋습니다. 유찰 이후에는 재공고, 참여업체 확대, 수의계약 전환을 검토하고, 금액 기준에 따라 구매위원회 또는 팀장 결재를 진행합니다.</div><div class="v27-answer-actions"><button class="v27-btn" onclick="v27Like(${q.id})">👍 좋아요</button><button class="v27-btn" onclick="v27SaveNote(${q.id})">⭐ 메모 저장</button><button class="v27-btn" onclick="v27Nominate(${q.id})">🧠 AI 검증 후보</button></div></div><div class="v27-answer v27-reply"><div class="v27-answer-author" style="margin-bottom:8px">답변 작성</div><textarea id="v27Reply" placeholder="근거 문서, 규정 조항, VAATZ 메뉴 경로를 포함해 답변해보세요."></textarea><div class="v27-answer-actions" style="justify-content:flex-end"><button class="v27-btn" onclick="say('임시 저장했습니다.','💾')">임시저장</button><button class="v27-btn primary" onclick="v27PostAnswer(${q.id})">답변 등록</button></div></div></div>`}
  window.renderCommunityV27=function(){const box=$('.comm-box'); if(box){box.classList.add('v27-wide');box.classList.remove('v26-wide')} const ct=$('#ct-qa'); if(!ct)return; const list=qFiltered(); const selected=v27Qa.find(q=>q.id===commState.selected)||list[0]||v27Qa[0]; if(selected)commState.selected=selected.id; ct.innerHTML=`<div class="v27-comm-shell"><aside class="v27-comm-left"><div class="v27-comm-title">구매본부<br>지식커뮤니티</div><div class="v27-comm-sub">질문·답변·채택·AI 반영까지 이어지는 구매 지식 허브입니다.</div><div class="v27-stats"><div class="v27-stat"><div class="v">${v27Qa.length}</div><div class="l">샘플 질문</div></div><div class="v27-stat"><div class="v">82%</div><div class="l">해결률</div></div><div class="v27-stat"><div class="v">${v27Qa.filter(q=>q.candidate).length}</div><div class="l">AI 후보</div></div><div class="v27-stat"><div class="v">18</div><div class="l">오늘 활동</div></div></div><div class="v27-filter-title">카테고리</div>${cats.map(c=>`<button class="v27-cat ${commState.cat===c?'on':''}" onclick="v27SetCat('${c}')"><span>${c==='전체'?'📚':c==='입찰'?'🏷️':c==='VAATZ'?'🖥️':c==='5스타'?'⭐':c==='원가'?'💰':c==='일반자재'?'📦':c==='해외구매'?'🌐':'📘'} ${c}</span><span>${c==='전체'?v27Qa.length:v27Qa.filter(q=>q.cat===c).length}</span></button>`).join('')}<div class="v27-filter-title">인기 태그</div><div class="v27-tag-cloud">${qTags().map(t=>`<button class="v27-tag ${commState.tag===t?'on':''}" onclick="v27SetTag('${esc(t)}')">#${esc(t)}</button>`).join('')}</div></aside><main class="v27-comm-main"><div class="v27-list-head"><div><div class="v27-comm-title">Q&A 탐색</div><div class="v27-comm-sub">질문, 답변, 태그를 검색하고 답변대기 질문을 바로 확인하세요.</div><div class="v27-search"><span>🔍</span><input value="${esc(commState.query)}" placeholder="질문·답변·태그 검색" oninput="v27Search(this.value)"></div></div><div class="v27-list-actions"><button class="v27-btn" onclick="v27SetStatus('답변대기')">답변대기</button><button class="v27-btn" onclick="v27SetStatus('채택')">채택</button><button class="v27-btn" onclick="v27ClearFilters()">초기화</button><button class="v27-btn primary" onclick="v27OpenAsk()">＋ 질문하기</button></div></div><div class="v27-meta" style="margin-bottom:12px"><select class="v26-select" onchange="v27SetStatus(this.value)"><option ${commState.status==='전체'?'selected':''}>전체</option><option ${commState.status==='답변대기'?'selected':''}>답변대기</option><option ${commState.status==='해결중'?'selected':''}>해결중</option><option ${commState.status==='채택'?'selected':''}>채택</option><option ${commState.status==='HOT'?'selected':''}>HOT</option><option ${commState.status==='NEW'?'selected':''}>NEW</option></select><span>${list.length}개 질문 표시</span></div><div class="v27-q-list">${list.map(q=>`<article class="v27-q-card ${q.id===commState.selected?'on':''}" onclick="v27SelectQ(${q.id})"><div class="v27-q-row"><div class="v27-vote-box"><div class="n">${q.likes}</div><div class="l">좋아요</div></div><div style="min-width:0;flex:1"><div class="v27-q-title">${esc(q.title)}</div><div class="v27-q-body">${esc(q.body)}</div><div class="v27-meta"><span class="v27-pill ${stCls(q.status)}">${q.status}</span><span>💬 ${q.answers}</span><span>👤 ${esc(q.author)}</span><span>${q.time}</span>${q.candidate?'<span class="v27-pill violet">AI 후보</span>':''}${q.tags.map(t=>`<button class="v27-tag" onclick="event.stopPropagation();v27SetTag('${esc(t)}')">#${esc(t)}</button>`).join('')}</div></div></div></article>`).join('')||'<div class="v27-empty">검색 결과가 없습니다.</div>'}</div></main><aside class="v27-comm-detail">${renderDetail(selected)}</aside></div>`;normalizeStatusText(ct)};
  window.v27SelectQ=id=>{commState.selected=id;renderCommunityV27()}; window.v27SetCat=c=>{commState.cat=c;commState.selected=(qFiltered()[0]||v27Qa[0]).id;renderCommunityV27()}; window.v27SetStatus=s=>{commState.status=s;commState.selected=(qFiltered()[0]||v27Qa[0]).id;renderCommunityV27()}; window.v27SetTag=t=>{commState.tag=commState.tag===t?'':t;commState.selected=(qFiltered()[0]||v27Qa[0]).id;renderCommunityV27()}; window.v27Search=v=>{commState.query=v;clearTimeout(window.__v27q);window.__v27q=setTimeout(renderCommunityV27,100)}; window.v27ClearFilters=()=>{commState={cat:'전체',status:'전체',tag:'',query:'',selected:v27Qa[0].id};renderCommunityV27()}; window.v27Like=id=>{const q=v27Qa.find(x=>x.id===id); if(q)q.likes++; renderCommunityV27(); say('좋아요를 반영했습니다.','👍',1300)}; window.v27Nominate=id=>{const q=v27Qa.find(x=>x.id===id); if(q)q.candidate=true; renderCommunityV27(); say('AI 학습 검증 후보로 올렸습니다. System Admin 검증 후 반영됩니다.','🧠',2600)}; window.v27PostAnswer=id=>{const q=v27Qa.find(x=>x.id===id); if(q){q.answers++;q.status='해결중';} renderCommunityV27(); say('답변이 등록되었습니다.','✅')}; window.v27SaveNote=id=>{const q=v27Qa.find(x=>x.id===id); if(window.openMemoModal){openMemoModal();$('#v25MemoTitle').value='커뮤니티 저장: '+q.title;$('#v25MemoBody').value=`[${q.cat}] ${q.title}\n\n${q.body}\n\n태그: ${q.tags.map(t=>'#'+t).join(' ')}`;}else say('메모에 저장했습니다.','⭐')};
  function installCommunityMax(){const hd=$('.comm-hd'); if(hd&&!$('#v27CommMax')){const bar=document.createElement('div');bar.className='v27-comm-toolbar';bar.innerHTML='<button class="v27-icon-btn" id="v27CommMax" title="커뮤니티 전체창" onclick="toggleCommFullV27()">⛶</button>';hd.appendChild(bar)}}
  window.toggleCommFullV27=()=>{const b=$('.comm-box'); if(!b)return; b.classList.toggle('v27-full'); $('#v27CommMax')&&($('#v27CommMax').textContent=b.classList.contains('v27-full')?'↙':'⛶')};
  const oldOpenComm=window.openComm; window.openComm=function(tab){oldOpenComm&&oldOpenComm(tab); setTimeout(()=>{installCommunityMax(); if(tab==='qa'||!tab)renderCommunityV27();},30)};

  /* Ask modal with direct category + tags */
  let askTags=[];
  function renderAskTags(){const ed=$('#v27TagEditor'), input=$('#v27TagInput'); if(!ed||!input)return; ed.querySelectorAll('.v27-tag-item').forEach(e=>e.remove()); askTags.forEach(t=>{const sp=document.createElement('span');sp.className='v27-tag-item';sp.innerHTML=`#${esc(t)} <button onclick="v27RemoveAskTag('${esc(t)}')">×</button>`;ed.insertBefore(sp,input)})}
  function ensureAsk(){if($('#v27AskModal'))return; document.body.insertAdjacentHTML('beforeend',`<div class="v27-ask-modal" id="v27AskModal" onclick="if(event.target===this)v27CloseAsk()"><div class="v27-ask-box"><div class="v27-ask-h"><div><div class="v27-ask-title">질문 등록</div><div class="v27-comm-sub">카테고리는 직접 입력할 수 있고, 태그는 Enter로 추가합니다.</div></div><button class="large-close" onclick="v27CloseAsk()">✕</button></div><div class="v27-ask-body"><div class="v27-form-grid"><div class="v27-field"><label>카테고리</label><input id="v27AskCat" list="v27CatList" placeholder="예: 입찰, ESG구매, 원가, 신규 카테고리"><datalist id="v27CatList">${cats.filter(c=>c!=='전체').map(c=>`<option value="${c}"></option>`).join('')}</datalist></div><div class="v27-field"><label>태그</label><div class="v27-tag-editor" id="v27TagEditor"><input id="v27TagInput" placeholder="태그 입력 후 Enter" onkeydown="v27HandleTagKey(event)"></div></div></div><div class="v27-field"><label>질문 제목</label><input id="v27AskTitle" placeholder="질문을 한 줄로 요약해주세요"></div><div class="v27-field"><label>상세 내용</label><textarea id="v27AskBody" placeholder="상황, 관련 문서, VAATZ 화면, 원하는 답변 형태를 적어주세요."></textarea></div></div><div class="v27-ask-foot"><span style="font-size:13px;color:var(--text-4)">예: #탄력적입찰 #수의계약 #5스타 #원가모드</span><div style="display:flex;gap:8px"><button class="v27-btn" onclick="v27CloseAsk()">취소</button><button class="v27-btn primary" onclick="v27SubmitAsk()">등록</button></div></div></div></div>`)}
  window.v27OpenAsk=()=>{ensureAsk();askTags=[];['v27AskCat','v27AskTitle','v27AskBody','v27TagInput'].forEach(id=>{const el=$('#'+id);if(el)el.value=''});renderAskTags();$('#v27AskModal').classList.add('sh');setTimeout(()=>$('#v27AskTitle')?.focus(),80)}; window.v27CloseAsk=()=>$('#v27AskModal')?.classList.remove('sh'); window.v27HandleTagKey=e=>{if(e.key==='Enter'||e.key===','){e.preventDefault();const v=e.target.value.replace('#','').trim(); if(v&&!askTags.includes(v))askTags.push(v); e.target.value='';renderAskTags()}}; window.v27RemoveAskTag=t=>{askTags=askTags.filter(x=>x!==t);renderAskTags()}; window.v27SubmitAsk=()=>{const cat=$('#v27AskCat')?.value.trim()||'일반';const title=$('#v27AskTitle')?.value.trim();const body=$('#v27AskBody')?.value.trim(); if(!title||!body)return say('제목과 상세 내용을 입력해주세요.','⚠️'); if(!cats.includes(cat))cats.push(cat); v27Qa.unshift({id:Date.now(),cat,status:'NEW',likes:0,answers:0,title,body,tags:askTags.length?askTags:['질문'],author:'프로큐어히어로',time:'방금',candidate:false});commState={cat:'전체',status:'전체',tag:'',query:'',selected:v27Qa[0].id};v27CloseAsk();renderCommunityV27();say('질문이 등록되었습니다.','✅')};

  /* Simple user/permission admin */
  function renderPermissionsV27(){const el=$('#p-usr'); if(!el)return; el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">사용자 · 권한 관리</div><div class="v23-title-sub">사용자 기본 정보는 사번·직책·소속 기준으로 HR/조직 시스템에서 I/F 수신하고, VAATZ AI에서는 예외 권한과 팀 Admin만 최소 관리합니다.</div></div><div class="v23-actions"><button class="v27-btn">I/F 동기화 로그</button><button class="v27-btn primary">권한 정책 저장</button></div></div><div class="v27-role-grid"><div class="v27-role"><div class="ic">👥</div><div class="t">일반 사용자</div><div class="d">모든 임직원 기본 그룹. 직접 등록하지 않고 SSO/HR I/F로 자동 반영합니다.</div><span class="v27-pill green" style="margin-top:10px">2,184명</span></div><div class="v27-role"><div class="ic">🧑‍💼</div><div class="t">팀 Admin</div><div class="d">팀별 1명만 지정. 팀 문서함 업로드·보완·승인 요청까지만 담당합니다.</div><span class="v27-pill blue" style="margin-top:10px">9명</span></div><div class="v27-role"><div class="ic">👔</div><div class="t">리더 그룹</div><div class="d">임원·팀장 이상 직책자. 직책 기준으로 자동 판별하며 리더 전용 문서 접근에 사용합니다.</div><span class="v27-pill violet" style="margin-top:10px">126명</span></div></div><div class="v27-permission"><div class="v27-perm-card"><h3>팀 Admin 배정</h3><p>팀마다 1명만 관리하면 됩니다. 팀장/임원 정보는 별도 권한 등록이 아니라 조직 I/F의 직책값으로 자동 판별합니다.</p>${teams.slice(0,9).map((t,i)=>`<div class="v27-admin-row"><div class="team">${t}</div><div class="user">${['이준혁 책임','최유진 매니저','정현수 책임','한도윤 매니저','윤서연 매니저','박성민 매니저','장민우 책임','이소라 매니저','오민재 책임'][i]}</div><div class="sync">HR I/F 정상</div><button class="v27-btn">변경</button></div>`).join('')}</div><div class="v27-perm-card"><h3>보안등급 접근 정책</h3><p>문서별 보안등급은 단순하게 3개만 운영합니다. 복잡한 개인 권한은 “지정 사용자”에서 예외로만 처리합니다.</p><table class="v27-matrix"><thead><tr><th>보안등급</th><th>접근 기준</th><th>관리 방식</th></tr></thead><tbody><tr><td>리더 전용</td><td>임원·팀장 이상 자동</td><td>직책 I/F 기반</td></tr><tr><td>일반 공개</td><td>구매본부 전체</td><td>기본 허용</td></tr><tr><td>지정 사용자</td><td>특정 사용자/팀</td><td>예외 목록 관리</td></tr></tbody></table><div class="mode-note">권장 운영: 대부분은 일반 공개, 민감한 정책/원가성 문서는 리더 전용, 프로젝트성 문서만 지정 사용자로 제한합니다.</div></div></div>`;normalizeStatusText(el)};

  /* AI mode management: folder-pack first */
  let activeMode='통합모드';
  function renderModeV27(){const el=$('#p-mode'); if(!el)return; const packs=['구매규정·제도','입찰관리','VAATZ 매뉴얼','품질 5스타','원가·단가','일반자재·MRO','해외구매','협력사 데이터']; el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">AI 모드 · DB 관리</div><div class="v23-title-sub">파일이 많을 때는 개별 파일보다 “폴더팩” 단위로 모드에 연결하고, 예외 파일만 별도로 관리하는 방식이 가장 단순합니다.</div></div><div class="v23-actions"><button class="v27-btn">변경 이력</button><button class="v27-btn primary">정책 저장</button></div></div><div class="v27-mode-console"><aside class="v27-mode-side">${modes.map(m=>`<button class="v27-mode-select ${m===activeMode?'on':''}" onclick="v27SelectMode('${m}')"><span>${m}</span><span>${m==='통합모드'?'8팩':m.includes('생산')?'5팩':m.includes('일반')?'4팩':'3팩'}</span></button>`).join('')}<div class="mode-note">채팅창에서 선택한 모드는 여기에서 연결된 폴더팩과 정형 DB만 우선 검색합니다.</div></aside><main><div class="v27-stage-strip"><div class="v27-stage-card"><div class="n">${activeMode}</div><div class="l">현재 편집 모드</div></div><div class="v27-stage-card"><div class="n">${activeMode==='통합모드'?8:activeMode.includes('생산')?5:activeMode.includes('일반')?4:3}</div><div class="l">연결 폴더팩</div></div><div class="v27-stage-card"><div class="n">${activeMode.includes('원가')?12:activeMode.includes('일반')?8:5}</div><div class="l">예외 파일</div></div><div class="v27-stage-card"><div class="n">${activeMode.includes('원가')?'리더':'일반'}</div><div class="l">기본 권한</div></div></div><div class="v27-pack-list">${packs.map((p,i)=>{const on=activeMode==='통합모드'||(activeMode.includes('생산')&&['구매규정·제도','입찰관리','품질 5스타','원가·단가','해외구매'].includes(p))||(activeMode.includes('일반')&&['구매규정·제도','VAATZ 매뉴얼','일반자재·MRO','협력사 데이터'].includes(p))||(activeMode.includes('원가')&&['구매규정·제도','원가·단가','협력사 데이터'].includes(p));return `<div class="v27-pack"><div class="v27-pack-top"><div><div class="v27-pack-title">📁 ${p}</div><div class="v27-pack-meta">${80+i*27}개 문서 · ${((i+2)*8).toLocaleString()} chunks · Owner ${['구매전략팀','구매디지털추진팀','원가관리팀'][i%3]}</div></div><div class="v27-toggle ${on?'on':''}" onclick="this.classList.toggle('on');say('폴더팩 연결 상태를 변경했습니다.','🧭')"></div></div></div>`}).join('')}</div><div class="v27-exception"><div class="v27-exception-title">예외 파일 관리</div><div class="v27-pack-meta">폴더팩은 연결하되 특정 파일만 제외하거나, 미연결 폴더의 특정 문서만 추가할 수 있습니다. 대량 데이터 운영 시 이 방식이 가장 관리가 쉽습니다.</div><div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap"><button class="v27-btn">＋ 예외 추가</button><button class="v27-btn">검색으로 찾기</button><button class="v27-btn">CSV 업로드</button></div></div></main></div>`};
  window.v27SelectMode=m=>{activeMode=m;renderModeV27()};

  /* Data mart simpler */
  function renderDatamartV27(){const el=$('#p-datamart'); if(!el)return; const srcs=[['VAATZ 업체·품목 마스터','정상','100%','05:10','통합/생산'],['Autopedia 용어 DB','정상','100%','06:00','전 모드'],['원가 DB 일 배치','확인필요','92%','07:30','원가'],['품질/클레임 데이터','정상','99%','04:40','생산'],['일반자재 MRO 카탈로그','정상','100%','05:45','일반']]; el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">데이터마트 I/F 모니터링</div><div class="v23-title-sub">정형 데이터는 Source → Data Mart → 검증 → RAG Index → AI 모드 반영 흐름으로 단순하게 모니터링합니다.</div></div><button class="v27-btn primary">오늘 배치 리포트</button></div><div class="v27-flow-simple"><div class="v27-flow-node"><div class="ic">🗄️</div><div class="t">Source</div></div><div class="v27-flow-node"><div class="ic">🏬</div><div class="t">Data Mart</div></div><div class="v27-flow-node"><div class="ic">✅</div><div class="t">검증</div></div><div class="v27-flow-node"><div class="ic">🧠</div><div class="t">RAG Index</div></div><div class="v27-flow-node"><div class="ic">🧭</div><div class="t">AI 모드</div></div></div><div class="v27-source-health">${srcs.map(s=>`<div class="v27-health-card"><div class="v27-health-title"><span>${s[0]}</span><span class="v27-pill ${s[1]==='정상'?'green':'amber'}">${s[1]}</span></div><div class="v27-health-desc">성공률 ${s[2]} · 마지막 종료 ${s[3]} · 연결 모드 ${s[4]}</div><div class="v27-health-bar ${s[1]==='정상'?'':'warn'}"><span style="width:${s[2]}"></span></div><div style="display:flex;gap:8px;margin-top:12px"><button class="v27-btn">상세</button><button class="v27-btn">로그</button></div></div>`).join('')}</div>`};

  /* Companion: speech, notices, stable character */
  function installBuddySpeech(){const hub=$('#companionHub'); if(!hub)return; if(!$('#v27BuddySpeech')){const sp=document.createElement('div');sp.id='v27BuddySpeech';sp.className='v27-buddy-speech';hub.appendChild(sp)} const panel=$('#companionCard .companion-panel'); if(panel&&!panel.querySelector('.v27-roam-btn')){panel.insertAdjacentHTML('afterbegin','<button class="companion-action v27-roam-btn" onclick="toggleBuddyRoamV27()">🐾 산책 ON/OFF</button><button class="companion-action" onclick="buddySayV27()">💬 한마디</button>')} }
  const buddyMsgs=['오늘 공지: 원가 DB 일 배치 12건 확인 필요해요.','좋은 답변은 좋아요 10개 이상이면 AI 검증 후보가 됩니다.','인용 번호를 누르면 답변 근거 원문을 크게 볼 수 있어요.','업무 중 핵심 내용은 메모에 저장해두세요.','오늘도 구매 지식 레벨업! Lv.4까지 280pt 남았어요.']; let msgIdx=0; window.buddySayV27=function(txt){const sp=$('#v27BuddySpeech'); if(!sp)return; sp.textContent=txt||buddyMsgs[msgIdx++%buddyMsgs.length]; sp.classList.add('sh'); clearTimeout(window.__buddySpeech); window.__buddySpeech=setTimeout(()=>sp.classList.remove('sh'),5200)}; window.toggleBuddyRoamV27=function(){const hub=$('#companionHub'); if(!hub)return; hub.classList.toggle('v27-walk'); say(hub.classList.contains('v27-walk')?'Buddy가 가끔 화면을 산책합니다.':'Buddy 산책을 멈췄습니다.','🐾',1600)};
  function startBuddy(){installBuddySpeech(); setTimeout(()=>buddySayV27('새 공지와 중요한 답변을 제가 알려드릴게요.'),1500); setInterval(()=>{const hub=$('#companionHub'); if(!hub||$('#companionCard')?.classList.contains('open'))return; hub.classList.toggle('v27-left'); hub.classList.toggle('v27-right'); buddySayV27();},26000)}

  /* Mypage character flow */
  function patchMypageButtons(){document.querySelectorAll('[onclick="openComm(\'char\')"]').forEach(b=>{if(b.closest('.mp-box')||b.closest('.mp-ov'))b.setAttribute('onclick','openCharacterStudioV27()')})}
  window.openCharacterStudioV27=function(){try{closeMypage&&closeMypage()}catch(e){} setTimeout(()=>openComm&&openComm('char'),80)};

  /* Open admin tab wrapper */
  const oldOpenAdminTab=window.openAdminTab; window.openAdminTab=function(id){oldOpenAdminTab&&oldOpenAdminTab(id); setTimeout(()=>{if(id==='p-usr')renderPermissionsV27(); if(id==='p-mode')renderModeV27(); if(id==='p-datamart')renderDatamartV27(); normalizeStatusText($('#ao')||document);},40)};
  const oldOa=window.oa; window.oa=function(){oldOa&&oldOa(); setTimeout(()=>{installSourceTools(); normalizeStatusText($('#ao')||document); if($('.atb.on')?.getAttribute('onclick')?.includes('p-usr'))renderPermissionsV27();},80)};

  function boot(){installSourceTools(); installCommunityMax(); installBuddySpeech(); startBuddy(); patchMypageButtons(); normalizeStatusText(document); let __v27HasFont=false;try{__v27HasFont=localStorage.getItem('vaatz-font-size')!=null}catch(e){} if(!__v27HasFont){try{setFontSizeV26('standard')}catch(e){document.documentElement.setAttribute('data-font-size','standard')}} setTimeout(()=>{renderPermissionsV27();renderModeV27();renderDatamartV27();patchMypageButtons();normalizeStatusText(document)},160)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot); else boot();
})();


(function(){
  function $(s,r=document){return r.querySelector(s)}; function $$(s,r=document){return Array.from(r.querySelectorAll(s))};
  window.cycleFontSizeV27=function(){
    const cur=document.documentElement.getAttribute('data-font-size')||'standard';
    const next=cur==='small'?'standard':cur==='standard'?'large':'small';
    if(typeof setFontSizeV26==='function')setFontSizeV26(next); else document.documentElement.setAttribute('data-font-size',next);
    try{(window.toast||window.say||console.log)(`글씨 크기: ${next==='large'?'크게':next==='small'?'작게':'표준'}`,'Aa',1500)}catch(e){}
  };
  function installFontShortcut(){const tb=$('.tb-r'); if(tb&&!$('#v27FontShortcut'))tb.insertAdjacentHTML('afterbegin','<button class="tb-b v27-font-shortcut" id="v27FontShortcut" onclick="cycleFontSizeV27()"><strong>Aa</strong> 글자</button>')}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(installFontShortcut,240)); else setTimeout(installFontShortcut,240);
})();


(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const replacements={
    '팀 관리중':'작성·보완중','팀 검토중':'작성·보완중','최종 승인중':'시스템 검토중','최종 요청':'등록 요청됨','승인 요청됨':'등록 요청됨','System 검토중':'시스템 검토중','수정 요청':'보완 요청','반려':'보완 요청','반영 완료':'AI 검색 반영완료','AI 반영완료':'AI 검색 반영완료','AI반영':'AI 검색 반영'
  };
  function normText(root=document){try{const re=new RegExp(Object.keys(replacements).join('|'),'g');const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(n){return re.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});let nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(n=>{n.nodeValue=n.nodeValue.replace(re,m=>replacements[m]||m).replace(/AI 검색 AI 검색/g,'AI 검색');});}catch(e){}}
  function installModalTools(){
    $$('.large-modal').forEach(m=>{if(m.dataset.v28Tools)return;m.dataset.v28Tools='1';m.addEventListener('dblclick',e=>{if(e.target.closest('.large-hd'))m.classList.toggle('full')});});
  }
  function installCommunityTools(){
    const box=$('.comm-box'); if(box&&!$('#v28CommHint')){const hint=document.createElement('div');hint.id='v28CommHint';hint.style.cssText='font-size:12px;color:var(--text-4);margin-left:8px';hint.textContent='좋아요·채택·AI 검증 후보를 통해 지식이 다시 DB로 반영됩니다.';$('.comm-hd')?.appendChild(hint);}  
  }
  function installEvidenceClick(){
    $$('.sr-c,.cr').forEach(el=>{if(el.dataset.v28Bound)return;el.dataset.v28Bound='1';el.addEventListener('click',()=>{setTimeout(()=>{const rp=$('#rp'); if(rp){rp.classList.add('sh'); const h=$('#rp .rp-h'); if(h&&!$('#sourceFullBtn')){const b=document.createElement('button');b.id='sourceFullBtn';b.className='rp-c';b.textContent='⛶';b.title='근거 크게 보기';b.onclick=e=>{e.stopPropagation();rp.classList.toggle('source-full')};h.appendChild(b);}}},20)})});
  }
  function installBuddyFallback(){
    const hub=$('#companionHub'); if(!hub)return; hub.style.overflow='visible'; if(!$('#v28BuddyNudge')){const n=document.createElement('div');n.id='v28BuddyNudge';n.className='v27-buddy-speech';n.textContent='공지와 중요한 답변은 제가 알려드릴게요.';hub.appendChild(n);} const say=()=>{const n=$('#v28BuddyNudge'); if(!n)return; const msgs=['오늘 공지: 신규 구매규정 개정안이 등록됐어요.','좋아요 10개 이상 채택 답변은 AI 검증 후보가 됩니다.','인용 번호를 누르면 근거 문서를 크게 볼 수 있어요.','중요한 답변은 내 메모에 저장해두세요.'];n.textContent=msgs[Math.floor(Math.random()*msgs.length)];n.classList.add('sh');clearTimeout(window.__v28Buddy);window.__v28Buddy=setTimeout(()=>n.classList.remove('sh'),4500)}; if(!hub.dataset.v28Speech){hub.dataset.v28Speech='1';hub.addEventListener('click',()=>setTimeout(say,60));setTimeout(say,1200);setInterval(say,38000)}
  }
  function patchMypageChar(){ $$('[onclick="openComm(\'char\')"]').forEach(b=>{if(b.closest('.mp-ov'))b.setAttribute('onclick','try{closeMypage()}catch(e){};setTimeout(()=>openComm(\'char\'),80)')}); }
  function boot(){normText();installModalTools();installCommunityTools();installEvidenceClick();installBuddyFallback();patchMypageChar();
    // 주기 2500ms → 10000ms 로 완화 (성능 개선: DOM 전체 스캔 빈도 감소)
    setInterval(()=>{normText();installEvidenceClick();patchMypageChar();},10000);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot); else boot();
})();


(function(){
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const say=(m,i='✅',d=2200)=>{try{(window.toast||window.say||console.log)(m,i,d)}catch(e){console.log(i,m)}};
const MODES=['통합모드','생산자재 모드','일반자재 모드','원가모드'];
const modeInfo={'통합모드':['🌐','전체 구매 지식','승인된 구매 규정·업무표준·VAATZ 지식 전체를 검색합니다.'],'생산자재 모드':['🏭','생산자재 중심','부품·협력사·품질·생산 구매 관련 DB를 우선 검색합니다.'],'일반자재 모드':['📦','일반자재 중심','MRO·사무/설비·일반자재 계약 지식을 우선 검색합니다.'],'원가모드':['💰','원가/단가 중심','원가성 데이터와 단가 이력은 권한 확인 후 검색합니다.']};
function ls(k,f){try{return localStorage.getItem(k)||f}catch(e){return f}}function sls(k,v){try{localStorage.setItem(k,v)}catch(e){}}
let currentMode=ls('vaatz-current-mode','통합모드'),uiSize=ls('vaatz-font-size','standard');
function wrapTopbar(){const tb=$('.tb');if(!tb||$('.tb-topline'))return;const kids=Array.from(tb.children),line=document.createElement('div');line.className='tb-topline';kids.forEach(k=>line.appendChild(k));tb.appendChild(line)}
/* Admin 공지사항 저장소 (localStorage 기반, Admin만 수정 가능) */
const ADMIN_NOTICES_KEY='vaatz-admin-notices';
const DEFAULT_NOTICES=[
  {id:1,icon:'📢',text:'[구매디지털추진팀] VAATZ AI 지식베이스 v2.0 오픈 — 구매업무규정·입찰·5스타 DB 전면 업데이트',date:'2026.02.10',pinned:true},
  {id:2,icon:'🔔',text:'[시스템] 2월 정기 데이터 동기화 완료 — Learning Lounge 교육과정 186건 반영',date:'2026.02.08',pinned:false}
];
function getAdminNotices(){try{const s=localStorage.getItem(ADMIN_NOTICES_KEY);return s?JSON.parse(s):DEFAULT_NOTICES}catch(e){return DEFAULT_NOTICES}}
function saveAdminNotices(ns){try{localStorage.setItem(ADMIN_NOTICES_KEY,JSON.stringify(ns))}catch(e){}}
window.addAdminNotice=function(text,icon){const ns=getAdminNotices();ns.unshift({id:Date.now(),icon:icon||'📢',text,date:new Date().toLocaleDateString('ko-KR',{year:'numeric',month:'2-digit',day:'2-digit'}).replace(/ /g,''),pinned:false});saveAdminNotices(ns);renderNoticeBar()};
window.removeAdminNotice=function(id){saveAdminNotices(getAdminNotices().filter(n=>n.id!==id));renderNoticeBar()};
function renderNoticeBar(){const n=$('#v29Notice');if(!n)return;const notices=getAdminNotices();const pinned=notices.find(x=>x.pinned)||notices[0];if(!pinned){n.style.display='none';return}n.style.display='flex';n.innerHTML=`<span class="v29-notice-badge">${pinned.icon||'📢'} 공지</span><div class="v29-notice-content" id="v29NoticeContent"><span class="v29-notice-main">${pinned.text}</span><span class="v29-notice-date">${pinned.date||''}</span></div><button class="v29-notice-nav" id="v29NoticeNav" onclick="cycleNotice()" title="다음 공지">›</button>`;(function attachAdminEdit(){const isAdmin=document.documentElement.getAttribute('data-user-role')==='admin';if(isAdmin&&!$('#v29NoticeEdit')){const btn=document.createElement('button');btn.id='v29NoticeEdit';btn.className='v29-notice-edit';btn.textContent='수정';btn.onclick=openNoticeEditor;n.appendChild(btn)}})()}
let noticeIdx=0;window.cycleNotice=function(){const ns=getAdminNotices();if(!ns.length)return;noticeIdx=(noticeIdx+1)%ns.length;const n=$('#v29Notice');const c=$('#v29NoticeContent');if(c)c.innerHTML=`<span class="v29-notice-main">${ns[noticeIdx].text}</span><span class="v29-notice-date">${ns[noticeIdx].date||''}</span>`};
window.openNoticeEditor=function(){if($('#v29NoticeModal'))return;const ns=getAdminNotices();document.body.insertAdjacentHTML('beforeend',`<div class="rq-m" id="v29NoticeModal" onclick="if(event.target===this)closeNoticeEditor()" style="z-index:3000"><div class="rq-b" style="width:560px"><div class="rq-h" style="display:flex;justify-content:space-between;align-items:center">📢 공지사항 관리 <button class="adm-x" onclick="closeNoticeEditor()">✕</button></div><div id="v29NList">${ns.map(n=>`<div class="notice-row" data-id="${n.id}"><span style="flex:1;font-size:12px;color:var(--text-2)">${n.icon||'📢'} ${n.text}</span><button class="v29-btn" style="font-size:10px" onclick="window.removeAdminNotice(${n.id});this.closest('#v29NoticeModal').remove()">삭제</button></div>`).join('')||'<div style="font-size:12px;color:var(--text-4);padding:8px">공지사항이 없습니다.</div>'}</div><div style="margin-top:14px;display:flex;flex-direction:column;gap:8px"><input id="v29NIcon" class="frm-i" placeholder="아이콘 (예: 📢)" style="width:60px"><input id="v29NText" class="frm-i" placeholder="공지 내용 입력..."><div class="frm-a"><button class="btn btn-c" onclick="closeNoticeEditor()">닫기</button><button class="btn btn-p" onclick="window.addAdminNotice($('#v29NText').value,$('#v29NIcon').value||'📢');this.closest('#v29NoticeModal').remove()">등록</button></div></div></div></div>`);$('#v29NoticeModal').style.display='flex'};
window.closeNoticeEditor=function(){$('#v29NoticeModal')?.remove()};
function installNotice(){wrapTopbar();const tb=$('.tb');if(!tb||$('#v29Notice'))return;const n=document.createElement('div');n.id='v29Notice';n.className='v29-notice';tb.appendChild(n);renderNoticeBar()}
function updateScope(type){$$('.tb-l .sc-btn').forEach(b=>{const isMy=b.textContent.includes('내 파일');b.classList.toggle('on',type==='my'?isMy:!isMy)})}
window.rpT=function(force,tab){const rp=$('#rp');if(!rp)return;const open=typeof force==='boolean'?force:!rp.classList.contains('sh');rp.classList.toggle('sh',open);if(!open){rp.classList.remove('source-full');updateScope('all');return}if(tab&&window.rpSwitchTab)window.rpSwitchTab(tab);updateScope($('#rpTabMy')?.classList.contains('on')?'my':'all')};
window.scT=function(btn,type){if(btn){btn.parentElement?.querySelectorAll('.sc-btn').forEach(b=>b.classList.remove('on'));btn.classList.add('on')}const rp=$('#rp');if(type==='my'){const already=rp?.classList.contains('sh')&&$('#rpTabMy')?.classList.contains('on');if(already){rpT(false);return}rpT(true,'my');say('내 파일 패널을 열었습니다. 다시 누르거나 X로 닫을 수 있습니다.','📂',1500)}else{rpT(false);say('검색 범위: 구매지식으로 설정했습니다.','📚',1500)}};
function installChatTools(){const box=$('.ibx');if(!box||$('#v29ChatTools'))return;$$('.v26-chat-controls').forEach(x=>x.remove());const row=document.createElement('div');row.id='v29ChatTools';row.className='v29-chat-tools';row.innerHTML=`<div class="v29-mode-select"><button class="v29-mode-current" id="v29ModeCurrent" data-mode="${currentMode}" onclick="toggleModeMenuV29(event)"><span class="v29-mode-icon" id="v29ModeIcon">${modeInfo[currentMode][0]}</span><span class="v29-mode-copy"><span class="v29-mode-title" id="v29ModeTitle">${currentMode}</span><span class="v29-mode-desc" id="v29ModeDesc">${modeInfo[currentMode][2]}</span></span><span>⌃</span></button><div class="v29-mode-menu" id="v29ModeMenu">${MODES.map(m=>`<button class="v29-mode-option ${m===currentMode?'on':''}" data-mode="${m}" onclick="setChatModeV29('${m}')"><div class="t">${modeInfo[m][0]} ${m}</div><div class="d">${modeInfo[m][2]}</div></button>`).join('')}</div></div><div class="v29-size-panel"><span class="lb">화면</span>${[['small','작게'],['standard','표준'],['large','크게']].map(x=>`<button class="v29-size-btn ${x[0]===uiSize?'on':''}" data-size="${x[0]}" onclick="setFontSizeV29('${x[0]}')">${x[1]}</button>`).join('')}</div>`;box.insertBefore(row,box.firstChild);applyFontSize()}
window.toggleModeMenuV29=e=>{e&&e.stopPropagation();$('#v29ModeMenu')?.classList.toggle('sh')};
window.setChatModeV29=mode=>{currentMode=mode;sls('vaatz-current-mode',mode);window.currentAIMode=mode;try{window.setChatModeV26&&window.setChatModeV26(mode)}catch(e){};$('#v29ModeIcon')&&( $('#v29ModeIcon').textContent=modeInfo[mode][0]);$('#v29ModeTitle')&&( $('#v29ModeTitle').textContent=mode);$('#v29ModeDesc')&&( $('#v29ModeDesc').textContent=modeInfo[mode][2]);$('#v29ModeCurrent')?.setAttribute('data-mode',mode);$$('.v29-mode-option').forEach(b=>b.classList.toggle('on',b.dataset.mode===mode));$('#v29ModeMenu')?.classList.remove('sh');say(`${mode}로 전환했습니다.`,'🧭',1600)};
function applyFontSize(){document.documentElement.setAttribute('data-font-size',uiSize);$$('.v29-size-btn').forEach(b=>b.classList.toggle('on',b.dataset.size===uiSize))}
window.setFontSizeV29=size=>{uiSize=size;sls('vaatz-font-size',size);applyFontSize();say(`화면 크기: ${size==='large'?'크게':size==='small'?'작게':'표준'}로 변경했습니다.`,'Aa',1500)};window.setFontSizeV26=window.setFontSizeV29;document.addEventListener('click',e=>{if(!e.target.closest('#v29ChatTools'))$('#v29ModeMenu')?.classList.remove('sh')});
window.setSourcePageV29=i=>{try{currentSourcePage=i;renderSourcePage()}catch(e){}};
try{renderSourcePage=function(){if(typeof sourceDocs==='undefined')return;const doc=sourceDocs[currentSourceDoc],wrap=$('#srcVw');if(!doc||!wrap)return;const pages=doc.pages||[];if(currentSourcePage<0||currentSourcePage>=pages.length)currentSourcePage=0;const nav=pages.map((p,i)=>`<button class="v29-page-link ${i===currentSourcePage?'on':''}" onclick="setSourcePageV29(${i})"><span class="p">${p.slide?'Slide ':p.excel?'Sheet ':'p.'}${p.no}</span><span class="t">${esc(p.title)}</span></button>`).join('');const content=pages.map((p,i)=>{const body=p.slide||p.excel?p.body:`<div class="v29-page-top"><span>${esc(doc.name)} · ${esc(doc.version)}</span><span>${p.no} / ${p.total}</span></div><div class="v29-page-title">${esc(p.title)}</div><div class="v29-page-sub">${esc(p.sub)}</div>${p.body}`;return `<section class="v29-page-card ${i===currentSourcePage?'active':''}" id="v29SrcPage${i}">${body}</section>`}).join('');wrap.innerHTML=`<div class="v29-source-shell"><div class="v29-src-meta"><div style="min-width:0"><div class="v29-src-name"><span class="src-doc-type t-${doc.type}">${doc.typeLabel}</span> ${esc(doc.name)}</div><div class="v29-src-path">${esc(doc.path)} · ${esc(doc.owner)} · ${esc(doc.version)}</div></div><div class="v29-src-actions"><span class="src-doc-sec s-${doc.security}">🔒 ${esc(doc.securityLabel)}</span><button class="v29-btn" onclick="toggleSourceFullV27&&toggleSourceFullV27()">⛶ 크게</button><button class="v29-btn" onclick="say('원문 다운로드는 실제 시스템 연동 시 제공됩니다.','⤓')">다운로드</button></div></div><div class="v29-src-body"><nav class="v29-page-list">${nav}</nav><main class="v29-doc-scroll">${content}<div class="v29-highlight-note"><b>HIGHLIGHT</b> 노란색 영역은 AI가 답변 생성에 직접 인용한 원문입니다. 좌측 페이지 목록을 눌러 다른 근거 페이지를 바로 확인할 수 있습니다.</div></main></div></div>`;setTimeout(()=>$('#v29SrcPage'+currentSourcePage)?.scrollIntoView({block:'start',behavior:'smooth'}),50)};openSourceFromCitation=function(citNum,evt){if(evt&&evt.stopPropagation)evt.stopPropagation();currentSourceDoc=Number(citNum)||1;currentSourcePage=(typeof citationPageMap!=='undefined'&&citationPageMap[currentSourceDoc])||0;const rp=$('#rp');if(rp){rp.classList.add('sh','src-active');setTimeout(()=>rp.classList.remove('src-active'),500)}if(window.rpSwitchTab)window.rpSwitchTab('src');if(window.renderSourceChips)window.renderSourceChips();renderSourcePage();updateScope('all')}}catch(e){console.warn('source override failed',e)}
const cats=['전체','입찰','계약','VAATZ','5스타','원가','일반자재','해외구매','협력사'];let comm={cat:'전체',tag:'',query:'',selected:1},askTags=[];const qna=[{id:1,cat:'입찰',status:'HOT',likes:47,answers:8,title:'탄력적입찰 1회차 유찰 시 다음 절차가 궁금합니다',body:'재공고, 수의계약 전환, VAATZ 유찰처리 메뉴 기준을 한 번에 정리하고 싶습니다.',tags:['탄력적입찰','유찰','수의계약'],author:'계약초보',time:'3일 전',candidate:true,adopted:true},{id:2,cat:'원가',status:'HOT',likes:34,answers:5,title:'원가모드에서 단가 이력과 환율 기준을 같이 볼 수 있나요?',body:'원가 관련 질의 시 어떤 DB와 문서를 연결해야 하는지 궁금합니다.',tags:['원가모드','단가','환율'],author:'원가분석러',time:'2시간 전',candidate:false},{id:3,cat:'5스타',status:'답변대기',likes:18,answers:0,title:'5스타 4→5등급 승급 시 IATF 16949가 필수인가요?',body:'2026년 기준으로 필수 요건인지, 기존 업체의 유예기간이 있는지 확인하고 싶습니다.',tags:['5스타','IATF16949','협력사'],author:'품질매니저',time:'1일 전',candidate:false},{id:4,cat:'VAATZ',status:'채택',likes:22,answers:3,title:'VAATZ 해외 발주 환율은 발주 시점과 결제 시점 중 무엇이 기준인가요?',body:'글로벌 구매 모듈에서 환율 자동 적용 기준과 예외 처리 방법이 궁금합니다.',tags:['VAATZ','환율','해외구매'],author:'해외구매담당',time:'오늘',candidate:true,adopted:true},{id:5,cat:'일반자재',status:'답변대기',likes:9,answers:0,title:'MRO 반복 구매 시 경매입찰을 생략할 수 있는 기준이 있나요?',body:'반복 구매 품목의 계약 활용 가능 여부와 예외 승인 조건이 궁금합니다.',tags:['MRO','반복구매','경매입찰'],author:'MRO담당',time:'20분 전',candidate:false},{id:6,cat:'협력사',status:'해결중',likes:16,answers:2,title:'협력사 평가 결과를 입찰 참여 조건에 자동 반영할 수 있나요?',body:'5스타 등급과 납품 품질 이슈를 VAATZ 입찰 초대 조건에 반영하는 방법이 궁금합니다.',tags:['협력사','입찰초대','5스타'],author:'품질지킴이',time:'어제',candidate:false}];
function allTags(){return[...new Set(qna.flatMap(q=>q.tags))].slice(0,16)}function stCls(st){return st==='HOT'?'hot':st==='채택'?'adopted':st==='답변대기'?'wait':st==='NEW'?'new':'live'}function filtered(){return qna.filter(q=>(comm.cat==='전체'||q.cat===comm.cat)&&(!comm.tag||q.tags.includes(comm.tag))&&(!comm.query||`${q.title} ${q.body} ${q.tags.join(' ')} ${q.cat}`.toLowerCase().includes(comm.query.toLowerCase()))).sort((a,b)=>(b.status==='HOT')-(a.status==='HOT')||b.likes-a.likes)}
function detail(q){if(!q)return'<div class="v27-empty">질문을 선택하세요.</div>';return`<div class="v29-loop"><div class="t">지식 선순환</div><div class="d">채택된 답변은 System Admin 검증 후 AI 지식 후보로 반영됩니다. 좋아요는 보조 신호로만 사용합니다.</div></div><div class="v29-detail-card"><div class="v29-detail-title">${esc(q.title)}</div><div class="v29-detail-body">${esc(q.body)}</div><div class="v29-q-meta v30-detail-meta" style="margin-top:14px"><span class="v29-status ${stCls(q.status)}">${q.status}</span><span>${q.cat}</span><span>👤 ${esc(q.author)}</span><span>${q.time}</span><span>💬 ${q.answers}</span><span>👍 ${q.likes}</span>${q.tags.map(t=>`<button class="v29-tag" onclick="v29SetTag('${esc(t)}')">#${esc(t)}</button>`).join('')}</div><div class="v29-answer"><div class="v29-answer-head"><span class="v29-answer-author">채택 답변 예시</span>${q.adopted?'<span class="v29-status adopted">채택됨</span>':''}</div><div class="v29-answer-body">관련 규정 조항과 VAATZ 메뉴 경로를 함께 적으면 실무자가 바로 사용할 수 있습니다. 검증 후보가 되면 System Admin이 원문 근거를 확인한 뒤 RAG DB 반영 여부를 결정합니다.</div><div class="v29-action-row"><button class="v29-btn" onclick="v29Like(${q.id})">좋아요</button><button class="v29-btn" onclick="v29SaveNote(${q.id})">메모 저장</button><button class="v29-btn" onclick="v29Nominate(${q.id})">AI 검증 후보</button></div></div><div class="v29-reply" style="margin-top:12px"><textarea id="v29Reply" placeholder="답변을 작성해보세요. 규정 조항, VAATZ 메뉴 경로, 실무 예시를 함께 적으면 좋습니다."></textarea><div class="v29-action-row"><button class="v29-btn" onclick="$('#v29Reply').value=''">초기화</button><button class="v29-btn" onclick="v29PostAnswer(${q.id})">답변 등록</button></div></div></div>`}
window.renderCommunityV29=function(){const box=$('.comm-box');if(box){box.classList.add('v29-wide');box.classList.remove('v27-wide','v26-wide')}const ct=$('#ct-qa');if(!ct)return;const list=filtered(),sel=qna.find(q=>q.id===comm.selected)||list[0]||qna[0];if(sel)comm.selected=sel.id;const hot=qna.slice().sort((a,b)=>(b.status==='HOT')-(a.status==='HOT')||b.likes-a.likes).slice(0,3);ct.innerHTML=`<div class="v29-comm v30-comm"><aside class="v29-comm-left"><div class="v29-comm-title">구매본부<br>지식커뮤니티</div><div class="v29-comm-sub">HOT 게시글을 먼저 보고, 질문은 검색과 태그로 빠르게 찾습니다.</div><div class="v29-quick-stats"><div class="v29-quick-stat"><div class="v">${qna.length}</div><div class="l">전체 질문</div></div><div class="v29-quick-stat"><div class="v">${qna.filter(q=>q.status==='답변대기').length}</div><div class="l">답변대기</div></div><div class="v29-quick-stat"><div class="v">${qna.filter(q=>q.status==='HOT').length}</div><div class="l">HOT</div></div><div class="v29-quick-stat"><div class="v">${qna.filter(q=>q.candidate).length}</div><div class="l">AI 후보</div></div></div><div class="v29-section-label">카테고리</div>${cats.map(c=>`<button class="v29-cat ${comm.cat===c?'on':''}" onclick="v29SetCat('${c}')"><span>${c==='전체'?'📚':c==='입찰'?'🏷️':c==='VAATZ'?'🖥️':c==='5스타'?'⭐':c==='원가'?'💰':c==='일반자재'?'📦':c==='해외구매'?'🌐':'🤝'} ${c}</span><span>${c==='전체'?qna.length:qna.filter(q=>q.cat===c).length}</span></button>`).join('')}<div class="v29-section-label">태그</div><div class="v29-tags">${allTags().map(t=>`<button class="v29-tag ${comm.tag===t?'on':''}" onclick="v29SetTag('${esc(t)}')">#${esc(t)}</button>`).join('')}</div></aside><main class="v29-comm-main"><div class="v29-comm-hero v30-comm-hero"><div style="flex:1"><div class="v29-comm-title">HOT Q&A</div><div class="v29-comm-sub">업무에 자주 도움되는 글을 먼저 보여주고, 추천 수는 하단 보조 정보로만 표시합니다.</div><div class="v29-search"><span>🔍</span><input value="${esc(comm.query)}" placeholder="질문·답변·태그 검색" oninput="v29Search(this.value)"></div></div><button class="v29-btn" onclick="v29OpenAsk()">＋ 질문하기</button></div><div class="v29-hot-strip v30-hot-strip">${hot.map(q=>`<div class="v29-hot-card" onclick="v29Select(${q.id})"><div class="v29-hot-label">🔥 업무 HOT</div><div class="v29-hot-title">${esc(q.title)}</div><div class="v29-hot-meta">${q.cat} · 답변 ${q.answers} · 추천 ${q.likes}</div></div>`).join('')}</div><div class="v29-section-label v30-list-label">전체 질문</div><div class="v29-q-list">${list.map(q=>`<article class="v29-q-card ${q.id===comm.selected?'on':''}" onclick="v29Select(${q.id})"><div class="v29-q-title">${esc(q.title)}</div><div class="v29-q-body">${esc(q.body)}</div><div class="v29-q-meta"><span class="v29-status ${stCls(q.status)}">${q.status}</span>${q.candidate?'<span class="v29-status new">AI 후보</span>':''}<span>${q.cat}</span><span>💬 ${q.answers}</span><span>👍 ${q.likes}</span><span>👤 ${esc(q.author)}</span><span>${q.time}</span>${q.tags.map(t=>`<button class="v29-tag" onclick="event.stopPropagation();v29SetTag('${esc(t)}')">#${esc(t)}</button>`).join('')}</div></article>`).join('')||'<div class="v27-empty">검색 결과가 없습니다.</div>'}</div></main><aside class="v29-comm-detail">${detail(sel)}</aside></div>`};

window.v29Select=id=>{comm.selected=id;renderCommunityV29()};window.v29SetCat=c=>{comm.cat=c;comm.selected=(filtered()[0]||qna[0]).id;renderCommunityV29()};window.v29SetTag=t=>{comm.tag=comm.tag===t?'':t;comm.selected=(filtered()[0]||qna[0]).id;renderCommunityV29()};window.v29Search=v=>{comm.query=v;clearTimeout(window.__v29s);window.__v29s=setTimeout(renderCommunityV29,80)};window.v29Like=id=>{const q=qna.find(x=>x.id===id);if(q)q.likes++;renderCommunityV29();say('좋아요를 반영했습니다.','👍',1200)};window.v29Nominate=id=>{const q=qna.find(x=>x.id===id);if(q)q.candidate=true;renderCommunityV29();say('AI 검증 후보로 올렸습니다. System Admin 검증 후 반영됩니다.','🧠',2500)};window.v29PostAnswer=id=>{const q=qna.find(x=>x.id===id);if(q){q.answers++;q.status='해결중'}renderCommunityV29();say('답변이 등록되었습니다.','✅')};window.v29SaveNote=id=>{const q=qna.find(x=>x.id===id);try{window.openMemoModal&&openMemoModal();$('#v25MemoTitle')&&($('#v25MemoTitle').value='커뮤니티 저장: '+q.title);$('#v25MemoBody')&&($('#v25MemoBody').value=`[${q.cat}] ${q.title}\n\n${q.body}\n\n태그: ${q.tags.map(t=>'#'+t).join(' ')}`)}catch(e){say('메모에 저장했습니다.','⭐')}};
function ensureAsk(){if($('#v29AskModal'))return;document.body.insertAdjacentHTML('beforeend',`<div class="v26-ask-modal" id="v29AskModal" onclick="if(event.target===this)v29CloseAsk()"><div class="v26-ask-box"><div class="v26-ask-h"><div><div class="v26-ask-title">질문 등록</div><div class="v29-comm-sub">카테고리는 직접 입력 가능, 태그는 Enter로 추가합니다.</div></div><button class="large-close" onclick="v29CloseAsk()">✕</button></div><div class="v26-ask-body"><div class="v26-form-grid"><div class="v26-field"><label>카테고리</label><input id="v29AskCat" list="v29CatList" placeholder="예: 입찰, ESG구매, 글로벌소싱"><datalist id="v29CatList">${cats.filter(c=>c!=='전체').map(c=>`<option value="${c}"></option>`).join('')}</datalist></div><div class="v26-field"><label>태그</label><div class="v26-tag-editor" id="v29TagEditor"><input id="v29TagInput" placeholder="태그 입력 후 Enter" onkeydown="v29TagKey(event)"></div></div></div><div class="v26-field"><label>질문 제목</label><input id="v29AskTitle" placeholder="질문을 한 줄로 요약해주세요"></div><div class="v26-field"><label>상세 내용</label><textarea id="v29AskBody" placeholder="상황, 관련 문서, VAATZ 화면, 원하는 답변 형태를 적어주세요."></textarea></div></div><div class="v26-ask-foot"><span style="font-size:13px;color:var(--text-4)">예: #탄력적입찰 #원가모드 #5스타</span><div style="display:flex;gap:8px"><button class="v29-btn" onclick="v29CloseAsk()">취소</button><button class="v29-btn" onclick="v29SubmitAsk()">등록</button></div></div></div></div>`)}
function renderAskTags(){const ed=$('#v29TagEditor');if(!ed)return;ed.querySelectorAll('.v26-tag-item').forEach(x=>x.remove());const input=$('#v29TagInput');askTags.forEach(t=>{const chip=document.createElement('span');chip.className='v26-tag-item';chip.innerHTML=`#${esc(t)} <button onclick="v29RemoveTag('${esc(t)}')">×</button>`;ed.insertBefore(chip,input)})}
window.v29OpenAsk=()=>{ensureAsk();askTags=[];['v29AskCat','v29AskTitle','v29AskBody','v29TagInput'].forEach(id=>{const el=$('#'+id);if(el)el.value=''});renderAskTags();$('#v29AskModal')?.classList.add('sh');setTimeout(()=>$('#v29AskTitle')?.focus(),80)};window.v29CloseAsk=()=>$('#v29AskModal')?.classList.remove('sh');window.v29TagKey=e=>{if(e.key==='Enter'||e.key===','){e.preventDefault();const v=e.target.value.replace('#','').trim();if(v&&!askTags.includes(v))askTags.push(v);e.target.value='';renderAskTags()}};window.v29RemoveTag=t=>{askTags=askTags.filter(x=>x!==t);renderAskTags()};window.v29SubmitAsk=()=>{const cat=$('#v29AskCat')?.value.trim()||'일반',title=$('#v29AskTitle')?.value.trim(),body=$('#v29AskBody')?.value.trim();if(!title||!body)return say('제목과 상세 내용을 입력해주세요.','⚠️');if(!cats.includes(cat))cats.push(cat);qna.unshift({id:Date.now(),cat,status:'NEW',likes:0,answers:0,title,body,tags:askTags.length?askTags:['질문'],author:'프로큐어히어로',time:'방금',candidate:false});comm={cat:'전체',tag:'',query:'',selected:qna[0].id};v29CloseAsk();renderCommunityV29();say('질문이 등록되었습니다.','✅')};
const oldOpenComm=window.openComm;window.openComm=function(tab){oldOpenComm&&oldOpenComm(tab);setTimeout(()=>{if(tab==='qa'||!tab)renderCommunityV29()},40)};
function installBuddy(){const hub=$('#companionHub'),card=$('#companionCard');if(!hub||!card)return;$('#v28BuddyNudge')?.remove();$('#v27BuddySpeech')?.remove();let b=$('#v29BuddyBubble');if(!b){b=document.createElement('div');b.id='v29BuddyBubble';b.className='v29-buddy-bubble';hub.appendChild(b)}const msg=$('#companionMsg');if(msg)msg.textContent='공지·메모·커뮤니티를 빠르게 도와드려요.';const name=$('.companion-name');if(name)name.textContent='VAATZ Buddy';const panel=$('.companion-panel',card);if(panel&&!panel.dataset.v29){panel.dataset.v29='1';panel.innerHTML=`<button class="companion-action" onclick="openMemoModal&&openMemoModal()">📝 내 메모</button><button class="companion-action" onclick="openComm('qa')">🔥 핫 Q&A</button><button class="companion-action" onclick="v29BuddyTalk()">💬 공지 보기</button><button class="companion-action" onclick="openMypage&&openMypage()">👤 마이페이지</button><button class="companion-action" onclick="try{closeMypage&&closeMypage()}catch(e){};openComm('char')">🎨 꾸미기</button><button class="companion-action" onclick="openHistory&&openHistory()">📜 기록장</button><div class="companion-admin-divider">Admin 전용</div><button class="companion-action" onclick="oa&&oa();openAdminTab&&openAdminTab('p-final')">✅ 최종 승인</button><button class="companion-action" onclick="oa&&oa();openAdminTab&&openAdminTab('p-datamart')">🗄️ 데이터마트</button>`}if(!hub.dataset.v29){hub.dataset.v29='1';hub.addEventListener('mouseenter',()=>v29BuddyTalk('필요한 기능은 저를 눌러 열어보세요.'));setInterval(()=>{hub.classList.add('v29-hop');setTimeout(()=>hub.classList.remove('v29-hop'),650)},18000);setTimeout(()=>v29BuddyTalk('오늘 공지: 답변 근거 뷰어가 더 크게 개선됐어요.'),1200)}}
const buddyMsgs=['<b>공지</b> 신규 구매규정 개정안이 등록됐어요.','<b>팁</b> 인용 번호를 누르면 근거 원문을 스크롤로 볼 수 있어요.','<b>커뮤니티</b> HOT 질문부터 먼저 확인해보세요.','<b>메모</b> 중요한 답변은 내 메모에 저장해두세요.'];let bm=0;window.v29BuddyTalk=txt=>{const b=$('#v29BuddyBubble');if(!b)return;b.innerHTML=txt||buddyMsgs[bm++%buddyMsgs.length];b.classList.add('sh');clearTimeout(window.__v29bt);window.__v29bt=setTimeout(()=>b.classList.remove('sh'),5200)};
function boot(){installNotice();installChatTools();installBuddy();updateScope('all');setTimeout(()=>{try{setFontSizeV29(uiSize)}catch(e){};try{window.renderSourceChips&&renderSourceChips();renderSourcePage()}catch(e){}},180)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();


(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  function toast(msg,icon='✅',dur=1500){try{(window.toast||window.say||console.log)(msg,icon,dur)}catch(e){console.log(icon,msg)}}
  function toggleMax(overlay){
    if(!overlay)return;
    overlay.classList.toggle('v30-full');
    const full=overlay.classList.contains('v30-full');
    overlay.querySelectorAll('.v30-max-btn').forEach(b=>{b.textContent=full?'↙':'⛶'; b.title=full?'원래 크기':'전체창';});
    const commBox=overlay.querySelector?.('.comm-box');
    if(commBox){commBox.classList.toggle('v30-full',full);commBox.classList.toggle('v27-full',full)}
  }
  window.v30TogglePopupMax=function(idOrEl){
    const el=typeof idOrEl==='string'?$(idOrEl):idOrEl;
    const overlay=el?.closest?.('.ov,.db-ov,.mp-ov,.rq-m,.v26-ask-modal,.v27-ask-modal,.comm-ov,.large-modal')||el;
    toggleMax(overlay);
  };
  function addMaxButton(header, overlay){
    if(!header||!overlay||header.querySelector('.v30-max-btn'))return;
    const tools=document.createElement('div');tools.className='v30-modal-tools';
    const btn=document.createElement('button');btn.type='button';btn.className='v30-max-btn';btn.title='전체창';btn.textContent='⛶';
    btn.onclick=(e)=>{e.stopPropagation();toggleMax(overlay)};
    tools.appendChild(btn);
    const close=header.querySelector('.adm-x,.large-close,.rp-c');
    if(close&&close.parentElement===header){header.insertBefore(tools,close)}
    else header.appendChild(tools);
  }
  function installMaxButtons(){
    addMaxButton($('.comm-hd'), $('.comm-ov'));
    addMaxButton($('.adm-h'), $('#ao'));
    addMaxButton($('.db-hd'), $('#dbOv'));
    addMaxButton($('.mp-hd'), $('#mpOv'));
    addMaxButton($('#teamFolderModal .large-hd'), $('#teamFolderModal'));
    addMaxButton($('#v29AskModal .v26-ask-h'), $('#v29AskModal'));
    addMaxButton($('#rqM .rq-b'), $('#rqM'));
  }
  const oldToggleComm=window.toggleCommFullV27;
  window.toggleCommFullV27=function(){
    const ov=$('.comm-ov'), box=$('.comm-box');
    if(ov){toggleMax(ov);return;}
    if(box){box.classList.toggle('v30-full');box.classList.toggle('v27-full');}
    else oldToggleComm&&oldToggleComm();
  };
  const oldRender=window.renderCommunityV29;
  if(oldRender){window.renderCommunityV29=function(){oldRender();requestAnimationFrame(installMaxButtons)}}
  const oldOpenComm=window.openComm;
  if(oldOpenComm){window.openComm=function(tab){oldOpenComm(tab);setTimeout(installMaxButtons,80)}}
  const oldAsk=window.v29OpenAsk;
  if(oldAsk){window.v29OpenAsk=function(){oldAsk();setTimeout(installMaxButtons,30)}}
  // Make the size control feel intentional: preserve moderate defaults and refresh labels.
  const oldSetFont=window.setFontSizeV29||window.setFontSizeV26;
  window.setFontSizeV29=function(size){
    try{localStorage.setItem('vaatz-font-size',size)}catch(e){}
    document.documentElement.setAttribute('data-font-size',size);
    $$('.v29-size-btn,.v26-size-btn').forEach(b=>b.classList.toggle('on',b.dataset.size===size));
    toast(`화면 배율: ${size==='large'?'크게':size==='small'?'작게':'표준'}`,'Aa',1200);
  };
  window.setFontSizeV26=window.setFontSizeV29;
  function boot(){
    installMaxButtons();
    const cur=document.documentElement.getAttribute('data-font-size') || (localStorage.getItem('vaatz-font-size')||'standard');
    document.documentElement.setAttribute('data-font-size',cur);
    $$('.v29-size-panel .lb').forEach(x=>x.textContent='배율');
    setTimeout(installMaxButtons,400);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
  const mo=new MutationObserver(()=>installMaxButtons());
  mo.observe(document.body,{childList:true,subtree:true});
})();


(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  function patchCommunity(){
    const ct=$('#ct-qa'); if(!ct)return;
    const hero=$('.v29-comm-hero',ct);
    if(hero){
      const title=$('.v29-comm-title',hero); if(title)title.textContent='HOT 게시글 먼저 보기';
      const sub=$('.v29-comm-sub',hero); if(sub)sub.textContent='업무에 바로 도움 되는 질문을 먼저 보고, 필요한 글은 검색·카테고리·태그로 찾습니다.';
    }
    const hot=$('.v29-hot-strip',ct);
    if(hot&&!$('#v31HotHeading',ct)){
      const h=document.createElement('div');h.id='v31HotHeading';h.className='v31-hot-heading';h.innerHTML='🔥 HOT 게시글 <span>추천수는 보조 정보로만 표시</span>';hot.parentNode.insertBefore(h,hot);
    }
    $$('.v29-q-card',ct).forEach(card=>{
      const head=$('.v29-q-head',card), meta=$('.v29-q-meta',card);
      if(!head||!meta)return;
      $$('.v29-like-small',head).forEach(s=>{s.classList.add('v31-card-stat');meta.appendChild(s);});
    });
    const sideTitle=$('.v29-comm-left .v29-comm-title',ct); if(sideTitle)sideTitle.innerHTML='구매 지식<br>커뮤니티';
    const sideSub=$('.v29-comm-left .v29-comm-sub',ct); if(sideSub)sideSub.textContent='HOT·카테고리·태그 중심으로 가볍게 탐색합니다.';
  }
  const oldRender=window.renderCommunityV29;
  if(oldRender&&!window.__v31CommunityWrapped){
    window.__v31CommunityWrapped=true;
    window.renderCommunityV29=function(){oldRender.apply(this,arguments);patchCommunity();};
  }
  const oldOpen=window.openComm;
  if(oldOpen&&!window.__v31OpenWrapped){
    window.__v31OpenWrapped=true;
    window.openComm=function(tab){oldOpen.apply(this,arguments);setTimeout(patchCommunity,70);};
  }
  function boot(){patchCommunity();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
  setInterval(patchCommunity,1800);
})();


(function(){
  'use strict';
  const $=s=>document.querySelector(s);
  const $$=s=>Array.from(document.querySelectorAll(s));

  /* ── 정렬 바를 v29 커뮤니티 리스트에 주입 ── */
  let v32SortMode='최신순';

  function injectSortBar(){
    const list=$('.v29-q-list');
    if(!list||list.parentElement.querySelector('.v32-sort-bar'))return;
    const bar=document.createElement('div');
    bar.className='v32-sort-bar';
    bar.innerHTML=`<span class="v32-sort-label">정렬</span>
      <button class="v32-sort-btn on" onclick="v32Sort('최신순',this)">최신순</button>
      <button class="v32-sort-btn hot-btn" onclick="v32Sort('인기순',this)">🔥 인기순</button>
      <button class="v32-sort-btn" onclick="v32Sort('미채택',this)">🙋 미채택 우선</button>
      <span style="margin-left:auto;font-size:10px;color:var(--text-4)">${list.children.length}개 질문</span>`;
    list.parentElement.insertBefore(bar,list);
  }

  window.v32Sort=function(mode,btn){
    v32SortMode=mode;
    $$('.v32-sort-btn').forEach(b=>b.classList.remove('on'));
    if(btn)btn.classList.add('on');
    const list=$('.v29-q-list'); if(!list)return;
    const cards=[...list.querySelectorAll('.v29-q-card')];
    if(!cards.length)return;
    cards.sort((a,b)=>{
      if(mode==='인기순'){
        const la=parseInt(a.querySelector('.v29-like-small')?.textContent||'0');
        const lb=parseInt(b.querySelector('.v29-like-small')?.textContent||'0');
        return lb-la;
      }
      if(mode==='미채택'){
        const wa=a.querySelector('.v29-status.wait')?0:1;
        const wb=b.querySelector('.v29-status.wait')?0:1;
        return wa-wb;
      }
      return 0;
    });
    cards.forEach(c=>list.appendChild(c));
  };

  /* ── v29 카드에 head 요소 주입 (상태배지를 타이틀 위로) ── */
  function patchCards(){
    $$('.v29-q-card').forEach(card=>{
      if(card.dataset.v32)return;
      card.dataset.v32='1';
      // 상태 배지가 이미 head에 있는지 확인
      if(!card.querySelector('.v29-q-head')){
        const meta=card.querySelector('.v29-q-meta');
        const status=meta?.querySelector('.v29-status');
        if(status){
          const head=document.createElement('div');
          head.className='v29-q-head';
          head.appendChild(status.cloneNode(true));
          status.remove();
          card.insertBefore(head,card.firstChild);
        }
      }
      // 좋아요 수를 마지막으로 이동
      const meta=card.querySelector('.v29-q-meta');
      if(meta){
        const likeEl=meta.querySelector('.v29-like-small');
        if(likeEl)meta.appendChild(likeEl);
      }
    });
  }

  /* ── 공지사항 티커 업데이트 ── */
  function patchNotice(){
    const track=$('.v29-notice-track');
    if(!track||track.dataset.v32)return;
    track.dataset.v32='1';
    const notices=[
      '<b>📌 주요 공지:</b> 25년 1분기 구매혁신 KPI 달성률 91.3% 달성',
      '<b>🔥 HOT 질문:</b> 탄력적입찰 유찰 시 처리 절차 — 답변 채택 완료',
      '<b>✅ 시스템:</b> VAATZ 4.2 업데이트 — 발주 화면 UX 개선',
      '<b>🧠 AI 지식 반영:</b> 5스타 4→5등급 승급 기준 최신화 완료',
      '<b>📤 업로드:</b> 공정거래법 하도급 조항 지식 베이스 반영 완료'
    ];
    track.innerHTML=notices.map(n=>`<span class="v29-notice-item">${n}</span>`).join('') +
                   notices.map(n=>`<span class="v29-notice-item">${n}</span>`).join('');
  }

  /* ── 커뮤니티 오픈 시 개선 적용 ── */
  const origOpen=window.openComm;
  window.openComm=function(tab){
    if(origOpen)origOpen.apply(this,arguments);
    setTimeout(()=>{
      injectSortBar();
      patchCards();
      patchNotice();
    },120);
  };

  /* ── renderCommunityV29 후처리 ── */
  const origRender=window.renderCommunityV29;
  if(origRender&&!window.__v32RenderWrapped){
    window.__v32RenderWrapped=true;
    window.renderCommunityV29=function(){
      origRender.apply(this,arguments);
      requestAnimationFrame(()=>{
        injectSortBar();
        patchCards();
      });
    };
  }

  /* ── 초기 실행 ── */
  function init(){
    patchNotice();
    // v27 vote box 즉시 숨기기 (DOM mutation observer로 동적 제거)
    const style=document.createElement('style');
    style.textContent=`.v27-vote-box,.v26-vote{display:none!important}.v27-q-row,.v26-q-top{display:block!important}`;
    document.head.appendChild(style);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
  else init();
})();


(function(){
  'use strict';
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const say=(m,i='✅',d=2200)=>{try{(window.toast||window.say||console.log)(m,i,d)}catch(e){console.log(i,m)}};

  /* ────────────────────────────────────────────────
   * 1) 컨셉/아이콘 통일: "💡 구매본부 지식 커뮤니티"
   * ──────────────────────────────────────────────── */
  const COMM_NAME='구매본부 지식 커뮤니티';
  const COMM_ICON='💡';

  function unifyCommunityName(){
    // 헤더 타이틀
    const hdH2=$('.comm-hd h2');
    if(hdH2){
      hdH2.innerHTML=`<span style="background:var(--accent-g);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:900">${COMM_ICON} ${COMM_NAME}</span>`;
    }
    // v29 사이드바 타이틀
    $$('.v29-comm-left .v29-comm-title').forEach(el=>{
      // 메인 큰 타이틀만 변경 (HOT Q&A 같은 sub-title은 제외)
      if(el.textContent.includes('구매') && el.textContent.includes('커뮤니티')){
        el.innerHTML=`${COMM_ICON} 구매본부<br>지식 커뮤니티`;
      }
    });
    // 우측 사이드바 미니 패널
    const miniMore=$('.comm-mini-more');
    if(miniMore){miniMore.textContent=`${COMM_NAME} →`}
    // 사이드/플로팅 버튼 라벨
    $$('.comm-side-btn').forEach(b=>{
      const titleAttr=b.getAttribute('title')||'';
      if(titleAttr.includes('Q&A') || titleAttr.includes('지식')){
        b.setAttribute('title',`${COMM_NAME} - Q&A`);
      }
    });
  }

  /* ────────────────────────────────────────────────
   * 2) 창 컨트롤(최대화/닫기) 우측 상단 통일
   *    + v28의 어색한 헤더 힌트 제거
   * ──────────────────────────────────────────────── */
  function reorderCommunityHeader(){
    const hd=$('.comm-hd');
    if(!hd) return;
    // v28 hint 제거 (이미 CSS에서 숨김 처리하지만, DOM에서도 제거)
    $('#v28CommHint')?.remove();

    // 닫기 버튼과 최대화 버튼이 우측에 오도록 재정렬
    const closeBtn=hd.querySelector('.adm-x');
    const tools=hd.querySelector('.v30-modal-tools');
    if(closeBtn && tools){
      // 최대화 그룹을 닫기 버튼 바로 앞에 위치
      hd.appendChild(tools);
      hd.appendChild(closeBtn);
    }
  }

  /* ────────────────────────────────────────────────
   * 3) ADMIN/일반사용자 권한 분리
   *    - 일반 사용자: 좋아요 + 메모 저장만 가능
   *    - "AI 검증 후보" 등재 권한은 시스템 담당자
   *    - 자동 분류 → 시스템 담당자 검증 → AI DB 등재 흐름 안내
   * ──────────────────────────────────────────────── */
  // 사용자 권한 기본값 = 일반 사용자
  document.documentElement.setAttribute('data-user-role','user');

  function buildAutoFlowBanner(){
    return `<div class="v33-auto-flow">
      <span class="v33-auto-flow-ic">🔄</span>
      <div>
        <b>지식 등재 자동화 흐름</b> · 좋아요는 답변 품질의 보조 신호로만 사용됩니다.
        일정 추천 수 이상 + 채택 답변은 <b>자동으로 분류소로 이동</b>되어 시스템 담당자(System Admin) 검증 후
        AI 지식 DB에 최종 등재됩니다. 일반 사용자는 추천·메모 저장까지만 가능합니다.
        <div class="v33-flow-steps">
          <span class="s">①&nbsp;질문·답변</span>
          <span class="arr">→</span>
          <span class="s">②&nbsp;👍 추천</span>
          <span class="arr">→</span>
          <span class="s">③&nbsp;✓ 채택</span>
          <span class="arr">→</span>
          <span class="s">④&nbsp;🤖 자동 분류</span>
          <span class="arr">→</span>
          <span class="s">⑤&nbsp;🛡️ Admin 검증</span>
          <span class="arr">→</span>
          <span class="s">⑥&nbsp;🧠 AI DB 등재</span>
        </div>
      </div>
    </div>`;
  }

  /* ────────────────────────────────────────────────
   * 4) 질문별 예시 답변 케이스 정의
   * ──────────────────────────────────────────────── */
  const v33ExampleAnswers={
    1:{ // 탄력적입찰 1회차 유찰
      summary:'채택된 정답 사례 — 구매업무규정 제23조 4항 + VAATZ 유찰처리 메뉴 절차',
      content:`<p><b>1회차 유찰 시 처리 절차</b> (구매업무규정 제23조 4항)</p>
        <ol>
          <li><b>유찰 사유 확인</b> — 참여 업체 부족(3사 미만) / 예가 초과 / 자격 미달 등 구분</li>
          <li><b>처리 방향 결정</b><ul>
            <li>업체 확대 후 <b>재공고</b>: 5스타 등급 기준 완화 또는 신규 업체 초대</li>
            <li><b>수의계약 전환</b>: 적격 업체 3사 미만 또는 긴급 조달 사유 명확 시</li>
          </ul></li>
          <li><b>구매위원회 사전 승인</b> — 1억원 초과 건은 필수, 사유서 첨부</li>
          <li><b>VAATZ 처리</b>: 입찰관리 → 유찰처리 → "재공고" 또는 "수의전환" 클릭<br>
          → 기존 참여업체에 자동 알림 발송, 변경 이력 자동 기록</li>
        </ol>
        <p><b>💡 실무 팁:</b> 수의계약 전환 시에는 <b>유찰 사유서 + 3스타 이상 업체 중 적격 후보 리스트</b>를 반드시 첨부해야 합니다.</p>
        <div class="v33-src"><b>근거 문서</b>
          <span class="v33-src-chip">구매업무규정 제23조</span>
          <span class="v33-src-chip">입찰운영 STD-PUR-012</span>
          <span class="v33-src-chip">VAATZ 입찰모듈 매뉴얼 Ch.5</span>
        </div>`,
      author:'프로큐어마스터',authorLv:'Lv.4',adopted:true
    },
    2:{ // 5스타 4→5등급
      summary:'채택 답변 — 25년 1월 개정 기준 + IATF 16949 인증 필수 여부',
      content:`<p><b>25년 1월부터 5스타 평가 기준 개정안</b> 적용</p>
        <ul>
          <li>품질경영시스템 인증(<b>IATF 16949</b>)이 <b>5등급 승급 필수 요건</b>으로 추가</li>
          <li>기존 4등급 협력사는 <b>26년 6월까지 유예기간</b> 적용</li>
          <li>유예기간 내 미인증 시 4등급 동결 (재심사 시 자동 4등급 적용)</li>
        </ul>
        <p><b>승급 현장 심사 추가 항목 (25년 1월~)</b></p>
        <ol>
          <li>스마트팩토리 수준 진단 (자동화/디지털화 점수 70점 이상)</li>
          <li>ESG 평가 등급 (B 이상)</li>
          <li>탄소중립 로드맵 제출 (Scope 1·2 기준)</li>
        </ol>
        <p><b>📋 신청 절차:</b> VAATZ → 협력사관리 → 5스타심사 → 승급신청 → 인증서 첨부 → 구매품질기획팀 심사 (약 4~6주 소요)</p>
        <div class="v33-src"><b>근거 문서</b>
          <span class="v33-src-chip">품질 5스타 운영기준 v4.0</span>
          <span class="v33-src-chip">5스타 개정안 25.01</span>
          <span class="v33-src-chip">IATF 16949 인증 가이드</span>
        </div>`,
      author:'품질지킴이',authorLv:'Lv.3',adopted:false
    },
    3:{ // 원가모드 단가 이력 + 환율
      summary:'운영 답변 — 원가모드 권한 구조 + 단가/환율 통합 조회 방법',
      content:`<p><b>원가모드 검색 권한 구조</b></p>
        <ul>
          <li>원가성 문서는 기본 <b>리더 전용</b> 보안등급 (팀장급 이상 자동 접근)</li>
          <li>일반 사용자는 <b>지정 사용자 권한</b>이 부여된 경우에만 검색 가능</li>
          <li>권한 신청: VAATZ → 마이페이지 → 권한신청 → 원가모드 사용 신청 → 팀장 승인</li>
        </ul>
        <p><b>단가 이력 + 환율 통합 조회</b></p>
        <ol>
          <li>채팅창 좌측 모드를 <b>"원가모드"</b>로 전환</li>
          <li>질의 예: <i>"AL-2024 모델 12개월 단가 추이와 USD 환율 동시 조회"</i></li>
          <li>AI가 원가 DB + 환율 DB(한국은행 매매기준율)를 동시 검색하여 통합 차트로 반환</li>
        </ol>
        <p><b>⚠️ 주의:</b> 원가성 데이터는 외부 반출 금지. 캡쳐/복사 시 워터마크가 자동 삽입됩니다.</p>
        <div class="v33-src"><b>근거 문서</b>
          <span class="v33-src-chip">원가 산정 기준표 v2.3</span>
          <span class="v33-src-chip">VAATZ 권한정책 STD-SEC-003</span>
          <span class="v33-src-chip">한국은행 환율 I/F 명세</span>
        </div>`,
      author:'원가분석러',authorLv:'Lv.2',adopted:false
    },
    4:{ // VAATZ 발주 알림 누락
      summary:'채택 답변 — VAATZ 발주 알림 체크포인트 5단계',
      content:`<p><b>VAATZ 발주 알림 누락 시 체크 순서</b></p>
        <ol>
          <li><b>발주서 상태 확인</b><br>
          VAATZ → 발주관리 → 발주조회 → 해당 PO 번호 → "통보상태" 확인 (정상/실패/대기)</li>
          <li><b>협력사 마스터 연락처</b><br>
          업체정보관리 → 협력사 → 알림 수신 담당자 이메일·핸드폰 등록 여부 확인</li>
          <li><b>알림 채널 설정</b><br>
          시스템설정 → 알림설정 → 발주 알림 채널(이메일/SMS/카카오워크) ON 여부</li>
          <li><b>스팸/필터 확인</b><br>
          발신 도메인 <code>noreply@vaatz.co.kr</code> 협력사 메일서버에서 차단 여부 확인 요청</li>
          <li><b>재전송 처리</b><br>
          발주조회 → 우측 "알림 재전송" 버튼 클릭 (1일 최대 3회까지 재시도 가능)</li>
        </ol>
        <p><b>🔧 시스템 장애 의심 시:</b> 구매디지털추진팀(<b>02-3464-XXXX</b>)에 PO번호와 함께 즉시 문의</p>
        <div class="v33-src"><b>근거 문서</b>
          <span class="v33-src-chip">VAATZ 발주모듈 매뉴얼</span>
          <span class="v33-src-chip">협력사 알림 운영지침</span>
          <span class="v33-src-chip">시스템 장애 대응 SOP</span>
        </div>`,
      author:'VAATZ달인',authorLv:'Lv.2',adopted:true
    },
    5:{ // MRO 반복 구매 경매입찰 생략
      summary:'운영 답변 — MRO 카탈로그 + 단가계약 활용 사례',
      content:`<p><b>MRO 반복 구매 시 경매입찰 생략 가능 조건</b> (일반자재 구매 가이드 제4조)</p>
        <ul>
          <li>건당 금액 <b>3천만원 미만</b> + 직전 12개월 내 동일 품목 구매 실적 3회 이상</li>
          <li>카탈로그 등록 품목이며 <b>단가계약(Frame Agreement)</b> 체결 업체 보유</li>
          <li>품목 사양 변경이 없고 시장 가격 변동이 ±5% 이내</li>
        </ul>
        <p><b>처리 절차</b></p>
        <ol>
          <li>VAATZ → 일반자재 → MRO카탈로그 → 품목 선택</li>
          <li>"단가계약 활용" 토글 ON → 자동으로 기존 계약 단가 적용</li>
          <li>발주서 자동 생성 → 팀장 결재만으로 처리 완료</li>
        </ol>
        <p><b>📌 예외 사례:</b> 카탈로그 품목이지만 <b>긴급 사양 변경</b>이 필요한 경우엔 수의계약 사유서 작성 필수 (FM-PU-042 양식 사용)</p>
        <div class="v33-src"><b>근거 문서</b>
          <span class="v33-src-chip">일반자재 MRO 구매 가이드</span>
          <span class="v33-src-chip">단가계약 운영표준 STD-PUR-018</span>
          <span class="v33-src-chip">FM-PU-042 수의계약 사유서</span>
        </div>`,
      author:'MRO담당',authorLv:'Lv.2',adopted:false
    },
    6:{ // 협력사 평가 결과 입찰 자동 반영
      summary:'운영 답변 — 5스타 등급 + 품질 이슈 자동 필터링 설정',
      content:`<p><b>VAATZ 입찰 초대 자동 필터링 설정</b></p>
        <ol>
          <li>입찰등록 → "참여업체 자동추천" 활성화</li>
          <li>필터 조건 설정 (구매전략팀 사전 협의):
            <ul>
              <li><b>5스타 등급:</b> 3스타 이상 (기본값) / 전략 부품은 4스타 이상</li>
              <li><b>품질 이슈:</b> 최근 6개월 클레임 3건 미만 자동 필터</li>
              <li><b>납기 준수율:</b> 95% 이상</li>
              <li><b>재무 건전성:</b> 신용평가 BBB 이상</li>
            </ul>
          </li>
          <li>VAATZ가 협력사평가 DB + 품질이슈 DB + NICE 신용평가 I/F를 실시간 조회하여 적격 업체 리스트 생성</li>
          <li>최종 5~10개 업체 자동 추천 → 담당자 검토 후 초대장 발송</li>
        </ol>
        <p><b>🚫 자동 제외 대상:</b> 영업정지·하도급법 위반·계약해지 이력 업체는 시스템이 자동 차단합니다.</p>
        <div class="v33-src"><b>근거 문서</b>
          <span class="v33-src-chip">협력사 평가 데이터셋 v5</span>
          <span class="v33-src-chip">VAATZ 입찰자동화 매뉴얼</span>
          <span class="v33-src-chip">품질클레임 관리지침</span>
        </div>`,
      author:'품질지킴이',authorLv:'Lv.3',adopted:false
    }
  };

  /* ────────────────────────────────────────────────
   * 4) v29 detail() 함수 오버라이드 — 예시 답변 포함
   * ──────────────────────────────────────────────── */
  function patchV29Detail(){
    // qna 데이터에 접근하기 위해 renderCommunityV29를 한번 더 감쌈
    const oldRender=window.renderCommunityV29;
    if(!oldRender || window.__v33CommunityWrapped) return;
    window.__v33CommunityWrapped=true;

    window.renderCommunityV29=function(){
      oldRender.apply(this,arguments);
      // 렌더 직후 detail 영역을 풍부한 예시 답변으로 교체
      requestAnimationFrame(()=>{
        enrichDetailWithExample();
        unifyCommunityName();
        reorderCommunityHeader();
      });
    };
  }

  function enrichDetailWithExample(){
    const detail=$('.v29-comm-detail');
    if(!detail) return;

    // 현재 선택된 질문 ID 추출
    const onCard=$('.v29-q-card.on');
    const titleEl=$('.v29-detail-title');
    if(!titleEl) return;

    // qna 배열 자체를 찾을 수 없으므로 제목으로 매칭
    const titleText=titleEl.textContent.trim();
    let matchedId=null;
    const titleMap={
      '탄력적입찰':1,'1회차 유찰':1,
      '5스타':2,'IATF':2,'4→5':2,'4 → 5':2,
      '원가모드':3,'단가':3,
      'VAATZ 해외':4,'환율':titleText.includes('VAATZ')?4:null,
      'MRO':5,'반복 구매':5,'경매입찰을 생략':5,
      '협력사 평가':6,'입찰 참여 조건':6,'입찰 초대':6,
      '발주':titleText.includes('알림')||titleText.includes('통보')||titleText.includes('체크포인트')?4:null,
    };
    for(const k of Object.keys(titleMap)){
      if(titleText.includes(k) && titleMap[k]){matchedId=titleMap[k];break}
    }
    if(!matchedId){
      // ID로 정확 매칭 (qna 배열 순서)
      const allCards=$$('.v29-q-card');
      const idx=allCards.findIndex(c=>c.classList.contains('on'));
      if(idx>=0 && idx<6) matchedId=idx+1;
    }
    const example=v33ExampleAnswers[matchedId];
    if(!example) return;

    // 기존 답변 박스 교체 (.v29-answer 첫번째 = 예시 답변)
    const answerBox=detail.querySelector('.v29-answer');
    if(!answerBox || answerBox.dataset.v33) return;
    answerBox.dataset.v33='1';

    // 헤더와 액션 버튼 영역 보존
    const head=answerBox.querySelector('.v29-answer-head');
    const actionRow=answerBox.querySelector('.v29-action-row');
    const bodyEl=answerBox.querySelector('.v29-answer-body');

    if(head){
      head.innerHTML=`<span class="v29-answer-author">✓ 채택 답변 — ${esc(example.author)} <span style="color:var(--text-4);font-weight:400;font-size:10px;margin-left:4px">${esc(example.authorLv)}</span></span>${example.adopted?'<span class="v29-status adopted">채택됨</span>':'<span class="v29-status new">검토중</span>'}`;
    }
    if(bodyEl){
      bodyEl.innerHTML=`<div style="font-size:12px;color:var(--text-3);margin-bottom:8px;font-style:italic">${esc(example.summary)}</div><div class="v33-example-answer">${example.content}</div>`;
    }
    // 액션 버튼: 일반 사용자에게는 AI 검증 후보 제거
    if(actionRow){
      // 부드러운 라벨로 교체
      const btns=actionRow.querySelectorAll('button');
      btns.forEach(b=>{
        const t=(b.textContent||'').trim();
        if(t.includes('좋아요')){b.innerHTML='👍 좋아요'}
        else if(t.includes('메모 저장')){b.innerHTML='⭐ 메모 저장'}
        else if(t.includes('AI 검증')){
          // 일반 사용자는 보이지 않게 (CSS도 동일하게 적용됨)
          b.style.display='none';
        }
      });
    }

    // 답변 박스 위에 자동화 흐름 안내 배너 추가
    const loopCard=detail.querySelector('.v29-loop');
    if(loopCard && !loopCard.dataset.v33){
      loopCard.dataset.v33='1';
      loopCard.outerHTML=buildAutoFlowBanner();
    }
  }

  /* ────────────────────────────────────────────────
   * 5) 캐릭터 시스템 재설계
   *    - 안전하게 렌더링되는 단일 코드포인트 이모지 사용
   *    - 메인 디스플레이가 실제로 변경되도록
   *    - 모자/배경/이펙트가 시각적으로 분리되어 보이도록
   * ──────────────────────────────────────────────── */
  const V33_CHARS=[
    {emoji:'🐧',name:'펭귄 바이어'},
    {emoji:'🐻',name:'곰돌이 협상가'},
    {emoji:'🦊',name:'여우 분석가'},
    {emoji:'🐯',name:'호랑이 품질관리'},
    {emoji:'🦁',name:'사자 리더'},
    {emoji:'🐼',name:'판다 신중파'},
    {emoji:'🐰',name:'토끼 민첩러'},
    {emoji:'🐸',name:'개구리 도전가'},
    {emoji:'🦉',name:'부엉이 전략가'},
    {emoji:'🐲',name:'드래곤 최강자'},
    {emoji:'🤖',name:'AI 어시스턴트'},
    {emoji:'⭐',name:'스타 플레이어'},
    {emoji:'🎯',name:'타겟 마스터'},
    {emoji:'🚀',name:'로켓 추진형'},
    {emoji:'💎',name:'다이아 코어'},
    {emoji:'🏆',name:'챔피언'},
  ];

  // 배경 키 → 그라디언트 매핑
  const V33_BG_MAP={
    'bg-office': {grad:'linear-gradient(180deg,#CFD8DC 0%,#ECEFF1 50%,#F5F5F5 100%)',emoji:'🏢'},
    'bg-ocean':  {grad:'linear-gradient(180deg,#1565C0 0%,#1E90FF 35%,#87CEEB 65%,#B3E5FC 100%)',emoji:'🌊'},
    'bg-cherry': {grad:'linear-gradient(180deg,#F8BBD0 0%,#FCE4EC 40%,#FFF0F5 100%)',emoji:'🌸'},
    'bg-mountain':{grad:'linear-gradient(180deg,#90CAF9 0%,#B3E5FC 40%,#C8E6C9 70%,#FFFFFF 100%)',emoji:'🏔️'},
    'bg-beach':  {grad:'linear-gradient(180deg,#29B6F6 0%,#4FC3F7 30%,#FFF9C4 60%,#FFE082 100%)',emoji:'🏖️'},
    'bg-forest': {grad:'linear-gradient(180deg,#1B5E20 0%,#2E7D32 35%,#43A047 60%,#A5D6A7 100%)',emoji:'🌿'},
    'bg-city':   {grad:'linear-gradient(180deg,#1A237E 0%,#283593 40%,#3949AB 70%,#5C6BC0 100%)',emoji:'🌃'},
    'bg-sunset': {grad:'linear-gradient(180deg,#FF6F00 0%,#FF8F00 20%,#FFB300 45%,#FFD54F 65%,#87CEEB 100%)',emoji:'🌅'},
    'bg-snow':   {grad:'linear-gradient(180deg,#B3E5FC 0%,#E1F5FE 40%,#F0F9FF 70%,#FFFFFF 100%)',emoji:'❄️'},
    'bg-night':  {grad:'linear-gradient(180deg,#0D1B3E 0%,#162040 50%,#1E2A52 100%)',emoji:'🌌'},
    'bg-galaxy': {grad:'linear-gradient(180deg,#0D0D2E 0%,#16083A 40%,#4A1B7A 80%,#673AB7 100%)',emoji:'🪐'},
    'bg-factory':{grad:'linear-gradient(180deg,#78909C 0%,#90A4AE 40%,#B0BEC5 70%,#CFD8DC 100%)',emoji:'🏭'},
  };
  // 레거시 이모지 → bg키 호환
  const V33_BG_LEGACY={'🌊':'bg-ocean','🌸':'bg-cherry','🏔️':'bg-mountain','🌌':'bg-night','🏭':'bg-factory','🏢':'bg-office','🌃':'bg-city','🏖️':'bg-beach'};

  // 현재 캐릭터 상태
  const v33CharState={
    char:'🐧',
    hat:'',
    side:'',
    effect:'',
    bg:'bg-office',
    nick:'프로큐어히어로'
  };

  function renderV33Character(){
    const charRoom=$('#charRoom');
    if(!charRoom) return;
    const bgKey=V33_BG_LEGACY[v33CharState.bg]||v33CharState.bg||'bg-office';
    const bgInfo=V33_BG_MAP[bgKey]||V33_BG_MAP['bg-office'];
    charRoom.innerHTML=`
      <div class="v33-char-bg" style="background:${bgInfo.grad}">
        <span class="v33-bg-emoji">${bgInfo.emoji}</span>
      </div>
      <div class="v33-char-fg">
        <div class="v33-char-figure">
          ${v33CharState.hat?`<div class="v33-char-hat">${v33CharState.hat}</div>`:''}
          <span class="v33-char-main">${v33CharState.char}</span>
          ${v33CharState.side?`<div class="v33-char-side">${v33CharState.side}</div>`:''}
          ${v33CharState.effect?`<div class="v33-char-effect">${v33CharState.effect}</div>`:''}
        </div>
        <div class="v33-char-nick" id="charNick">${esc(v33CharState.nick)}</div>
        <div class="v33-char-lv">구매Pro · 1,720pt</div>
      </div>
    `;
    charRoom.classList.add('v33-char-stage');
  }

  function setupV33CharacterPicker(){
    // 기존 char-room 컨테이너 처리
    const charRoom=$('#charRoom');
    if(!charRoom) return;

    // 캐릭터 픽커 영역 재구성
    const pickerWrap=charRoom.parentElement.querySelector('.v33-char-picker') ||
                     charRoom.parentElement.querySelector('[style*="margin-top:4px"]');
    if(pickerWrap && !pickerWrap.dataset.v33){
      pickerWrap.dataset.v33='1';
      pickerWrap.className='v33-char-picker';
      pickerWrap.innerHTML=V33_CHARS.map((c,i)=>
        `<button class="char-sel${i===0?' active':''}" onclick="v33PickChar(this,'${c.emoji}','${esc(c.name)}')" title="${esc(c.name)}">${c.emoji}</button>`
      ).join('');

      // 픽커 위 라벨도 깔끔하게
      const label=charRoom.parentElement.querySelector('[style*="font-size:10px"]');
      if(label && label.textContent.includes('캐릭터 선택')){
        label.innerHTML='🎨 캐릭터 선택 <span style="color:var(--text-4);font-weight:400">(클릭하여 변경)</span>';
      }

      // 안내 문구 추가
      if(!charRoom.parentElement.querySelector('.v33-char-info')){
        const info=document.createElement('div');
        info.className='v33-char-info';
        info.innerHTML='💡 인벤토리에서 모자·배경·이펙트를 클릭하면 즉시 장착됩니다';
        pickerWrap.parentElement.insertBefore(info, pickerWrap.nextSibling);
      }
    }
    renderV33Character();
  }

  // 캐릭터 픽
  window.v33PickChar=function(btn,emoji,name){
    $$('.char-sel').forEach(b=>b.classList.remove('active'));
    btn?.classList.add('active');
    v33CharState.char=emoji;
    renderV33Character();
    // dock badge도 동기화
    const dockBadge=$('#dockBadge');
    if(dockBadge) dockBadge.textContent=emoji;
    say(`${name} 선택!`,'✨',1500);
  };

  // 아이템 장착 v2 - 카테고리별 + 배경 그라디언트 지원
  window.v33EquipItem=function(slot,emoji){
    if(!slot||!emoji) return;
    const HATS=['🎩','👑','🎀','🎓','⛑️','🏆','🪖','👒','🎅','✨'];
    const FACES=['🕶️','👓','😷','🎭','🤿','🥽','🤓','🥸'];
    const PETS=['🐱','🐶','🐦','🐉','🦄','🦋','🐢','🤖','👾','🐲'];
    const EFFECTS=['⭐','💫','🔥','❄️','🎵','💎','🌟','⚡','🌈','🎇','☄️','🌠'];
    const BGS=Object.keys(V33_BG_MAP); // bg-office, bg-ocean, etc.
    const LEGACY_BGS=['🌊','🌸','🏔️','🌌','🏭','🏢','🌃','🏖️'];

    const isBg=BGS.includes(emoji)||LEGACY_BGS.includes(emoji);

    if(HATS.includes(emoji)) v33CharState.hat=emoji;
    else if(FACES.includes(emoji)) v33CharState.face=emoji;
    else if(PETS.includes(emoji)) v33CharState.side=emoji;
    else if(EFFECTS.includes(emoji)) v33CharState.effect=emoji;
    else if(isBg){ v33CharState.bg=V33_BG_LEGACY[emoji]||emoji; }
    else v33CharState.side=emoji; // 기타 아이템은 사이드에

    // 슬롯 equipped 상태 갱신
    if(slot){
      $$('.inv-slot').forEach(s=>{
        if(!s.classList.contains('empty')){
          const e=s.textContent.trim();
          if(HATS.includes(emoji)&&HATS.includes(e)) s.classList.remove('equipped');
          else if(FACES.includes(emoji)&&FACES.includes(e)) s.classList.remove('equipped');
          else if(PETS.includes(emoji)&&PETS.includes(e)) s.classList.remove('equipped');
          else if(EFFECTS.includes(emoji)&&EFFECTS.includes(e)) s.classList.remove('equipped');
          else if(isBg&&(BGS.includes(e)||LEGACY_BGS.includes(e))) s.classList.remove('equipped');
        }
      });
      slot.classList.add('equipped');
    }
    renderV33Character();
    const label = emoji.startsWith('bg-') ? (V33_BG_MAP[emoji]?.emoji||'🖼️')+' 배경 변경!' : emoji+' 장착!';
    say(label,'✨',1200);
  };

  // 기존 equipItem과 pickChar를 v33으로 라우팅
  function patchCharFunctions(){
    const origEquip=window.equipItem;
    window.equipItem=function(slot,emoji){
      try{window.v33EquipItem(slot,emoji);}catch(e){
        if(origEquip) origEquip.call(this,slot,emoji);
      }
    };
    const origPick=window.pickChar;
    window.pickChar=function(btn,emoji){
      try{
        const charObj=V33_CHARS.find(c=>c.emoji===emoji)||{name:btn?.title||'캐릭터'};
        window.v33PickChar(btn,emoji,charObj.name);
      }catch(e){
        if(origPick) origPick.call(this,btn,emoji);
      }
    };
    // buyItem 오버라이드: bg-* 키 처리 + confirm → toast 확인창
    const origBuy=window.buyItem;
    window.buyItem=function(el,emoji,name,price){
      if(el.classList.contains('owned')){
        // 이미 보유한 배경/아이템: 즉시 장착 + 미리보기 갱신
        v33EquipItem(el,emoji);
        el.classList.add('equipped');
        updateShopPreview();
        return;
      }
      if(!confirm(name+' '+price+'pt로 구매하시겠습니까?')) return;
      el.classList.add('owned');
      const prEl=el.querySelector('.shop-pr'); if(prEl) prEl.textContent='✓ 보유';
      // 구매 즉시 장착 (싸이월드 스타일)
      v33EquipItem(el,emoji);
      updateShopPreview();
      // 인벤토리 빈 슬롯에 추가
      const emptySlot=document.querySelector('#ct-char .inv-slot.empty');
      if(emptySlot){
        emptySlot.classList.remove('empty');
        // bg 아이템은 표시 이모지 사용
        const dispEmoji=emoji.startsWith('bg-')?(V33_BG_MAP[emoji]?.emoji||'🖼️'):emoji;
        emptySlot.textContent=dispEmoji;
        emptySlot.dataset.itemKey=emoji; // 실제 키 보존
        emptySlot.title=name;
        emptySlot.onclick=function(){ window.equipItem(this,emoji); updateShopPreview(); };
      }
      if(window.toast) window.toast(name+' 구매 및 장착 완료!','🎉',2200);
    };

    // 상점 캐릭터 미리보기 갱신
    function updateShopPreview(){
      const preview=document.getElementById('shopCharPreview');
      if(preview) preview.textContent = v33CharState.char || '🐧';
    }
  }

  // 인벤토리 슬롯도 안전한 이모지로 업데이트
  function patchInventory(){
    const invGrid=$('#ct-char .inv-grid');
    if(!invGrid || invGrid.dataset.v33) return;
    invGrid.dataset.v33='1';
    // 안전한 기본 인벤토리 구성
    const defaultItems=[
      {emoji:'🎩',name:'신사 모자',equipped:false},
      {emoji:'👑',name:'왕관',equipped:false},
      {emoji:'🎓',name:'학사모',equipped:false},
      {emoji:'🐱',name:'고양이 친구',equipped:false},
      {emoji:'🐉',name:'드래곤 친구',equipped:false},
      {emoji:'⭐',name:'별빛 이펙트',equipped:false},
      {emoji:'🔥',name:'불꽃 오라',equipped:false},
      {emoji:'🌊',name:'파도 배경',equipped:false},
      {emoji:'🌸',name:'벚꽃 배경',equipped:false},
      {emoji:'🏔️',name:'설악산 배경',equipped:false},
      {emoji:'💎',name:'다이아 이펙트',equipped:false},
    ];
    invGrid.innerHTML=defaultItems.map(it=>
      `<div class="inv-slot${it.equipped?' equipped':''}" title="${esc(it.name)}" onclick="v33EquipItem(this,'${it.emoji}')">${it.emoji}</div>`
    ).join('') + '<div class="inv-slot empty"></div><div class="inv-slot empty"></div>';
  }

  /* ────────────────────────────────────────────────
   * Boot
   * ──────────────────────────────────────────────── */
  function boot(){
    unifyCommunityName();
    reorderCommunityHeader();
    patchV29Detail();
    patchCharFunctions();

    // 캐릭터 탭 열릴 때 패치
    const origCommTab=window.commTab;
    if(origCommTab){
      window.commTab=function(btn,id){
        origCommTab.apply(this,arguments);
        if(id==='ct-char'){
          setTimeout(()=>{
            setupV33CharacterPicker();
            patchInventory();
          },50);
        }
        // 상점 탭 열릴 때: 인벤토리에서 장착된 아이템 표시
        if(id==='ct-shop'){
          setTimeout(()=>{ renderV33Character(); },80);
        }
      };
    }

    // 커뮤니티 오픈 시 통일 적용
    const origOpenComm=window.openComm;
    if(origOpenComm && !window.__v33OpenWrapped){
      window.__v33OpenWrapped=true;
      window.openComm=function(tab){
        origOpenComm.apply(this,arguments);
        setTimeout(()=>{
          unifyCommunityName();
          reorderCommunityHeader();
          if(tab==='char'){
            setupV33CharacterPicker();
            patchInventory();
          }
          if(tab==='shop'){
            renderV33Character();
          }
        },120);
      };
    }

    // 주기적으로 어색한 위치의 v28 힌트 제거 보장
    setInterval(()=>{
      $('#v28CommHint')?.remove();
      // unifyCommunityName() 제거 — §14 interval과 충돌하여 팝업 제목이 계속 바뀌는 버그 원인
    },2000);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();


(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const say=(m,i='✅',d=2200)=>{try{(window.toast||window.say||console.log)(m,i,d)}catch(e){console.log(i,m)}};

/* ═══════════════════════════════════════
 * ① 구매지식 커뮤니티 이름/헤더 통일
 * ═══════════════════════════════════════ */
const COMM_TITLE='구매지식 커뮤니티';
const COMM_ICON='💡';

function patchCommHeader(){
  const hd=$('.comm-hd'); if(!hd) return;
  // 기존 레거시 버튼 및 힌트 제거
  $$('.v30-modal-tools,.v27-comm-toolbar,#v27CommMax,#v28CommHint').forEach(e=>e.remove());

  // h2 타이틀은 V36 HTML 원본 유지 (덮어쓰지 않음) — title-changing 버그 방지
  // const h2=hd.querySelector('h2');
  // if(h2) h2.innerHTML=`${COMM_ICON} ${COMM_TITLE}`;  // ← 제거됨

  // 새 컨트롤 버튼이 없으면 삽입
  if(!hd.querySelector('.v34-hd-tools')){
    const tools=document.createElement('div');
    tools.className='v34-hd-tools';
    tools.innerHTML=`
      <button class="v34-ctrl-btn" id="v34MaxBtn" title="창 크게/작게" onclick="v34ToggleMax()">⛶</button>
      <button class="v34-ctrl-btn close" title="닫기" onclick="closeComm()">✕</button>
    `;
    hd.appendChild(tools);
  }
}

/* ═══════════════════════════════════════
 * ② 커뮤니티 창 크기 조절 (새 구현)
 * ═══════════════════════════════════════ */
let isMaximized=false;
window.v34ToggleMax=function(){
  const ov=$('.comm-ov'); if(!ov) return;
  isMaximized=!isMaximized;
  ov.classList.toggle('v34-max',isMaximized);
  // 기존 class 정리
  ov.classList.remove('v30-full','v27-full');
  const box=$('.comm-box'); if(box){
    box.classList.remove('v30-full','v27-full','v29-wide','v27-wide');
  }
  const btn=$('#v34MaxBtn');
  if(btn){
    btn.textContent=isMaximized?'↙':'⛶';
    btn.title=isMaximized?'창 작게':'창 크게';
    btn.classList.toggle('maximized',isMaximized);
  }
};
// 기존 toggleCommFullV27 재라우팅
window.toggleCommFullV27=window.v34ToggleMax;

/* ═══════════════════════════════════════
 * ③ 업무 FLOW 워크플로우 배너 (p-req 상단)
 * ═══════════════════════════════════════ */
const FLOW_STEPS=[
  {id:'upload', icon:'📁', title:'파일 업로드', sub:'팀 담당자', cnt:7, unit:'건 업로드됨', cls:'done'},
  {id:'team',   icon:'✅', title:'팀 승인',     sub:'팀 Admin',    cnt:5, unit:'건 대기 중', cls:'pending'},
  {id:'sys',    icon:'🛡️', title:'시스템 승인', sub:'시스템 Admin',cnt:2, unit:'건 검토 중', cls:'active'},
  {id:'ai',     icon:'🧠', title:'AI DB 반영',  sub:'자동 임베딩', cnt:14,unit:'건 반영완료', cls:'done'},
];

function buildFlowBanner(){
  return `<div class="v34-flow-banner">
    ${FLOW_STEPS.map((s,i)=>`
      <div class="v34-flow-step ${s.cls}">
        <div class="v34-flow-step-num">${i+1}</div>
        <div class="v34-flow-step-ic">${s.icon}</div>
        <div class="v34-flow-step-title">${s.title}</div>
        <div class="v34-flow-step-sub">${s.sub}</div>
        <div class="v34-flow-step-cnt">${s.cnt}</div>
        <div class="v34-flow-step-unit">${s.unit}</div>
      </div>
    `).join('')}
  </div>`;
}

/* ═══════════════════════════════════════
 * ④ 팀 Admin 패널 재설계 (p-req)
 * ═══════════════════════════════════════ */
const TEAMS_DATA=[
  {
    name:'구매전략팀', admin:'이준혁 책임',
    files:[
      {name:'해외법인 구매 승인 프로세스.docx', type:'docx', uploader:'이준혁', date:'02.07', step:'team-wait', reason:'해외 구매건 승인 검토'},
      {name:'조달청 물품구매계약 특수조건.pdf', type:'pdf', uploader:'박성민', date:'02.08', step:'team-wait', reason:'공공입찰 비교 참조'},
    ]
  },
  {
    name:'반도체구매팀', admin:'최유진 매니저',
    files:[
      {name:'반도체 수출규제 국가별 현황.xlsx', type:'xlsx', uploader:'최유진', date:'02.08', step:'team-ok', reason:'수출 리스크 점검'},
      {name:'TSMC 납기 관리 가이드 v2.pdf', type:'pdf', uploader:'최유진', date:'02.06', step:'sys-wait', reason:'반도체 납기 대응'},
    ]
  },
  {
    name:'구매품질기획팀', admin:'정현수 책임',
    files:[
      {name:'공정거래법 하도급 관련 조항.pdf', type:'pdf', uploader:'정현수', date:'02.07', step:'ai-done', reason:'규정 업데이트'},
      {name:'5스타 평가 기준 개정안 2025.pdf', type:'pdf', uploader:'정현수', date:'02.09', step:'team-ok', reason:'평가 기준 최신화'},
    ]
  },
  {
    name:'PT제어부품구매팀', admin:'한도윤 매니저',
    files:[
      {name:'전동화 부품 단가 벤치마크.xlsx', type:'xlsx', uploader:'한도윤', date:'02.08', step:'team-wait', reason:'PT 부품 단가 비교'},
    ]
  },
  {
    name:'일반자재구매팀', admin:'장민우 책임',
    files:[
      {name:'MRO 카탈로그 2026 개정판.pdf', type:'pdf', uploader:'장민우', date:'02.05', step:'sys-ok', reason:'MRO 품목 업데이트'},
    ]
  }
];

const STEP_LABELS={
  'upload':   {label:'업로드됨',   cls:'upload',    action:['팀 승인 요청']},
  'team-wait':{label:'팀 검토 중', cls:'team-wait', action:['승인','보완 요청']},
  'team-ok':  {label:'팀 승인 완료',cls:'team-ok',  action:['시스템 전송']},
  'sys-wait': {label:'시스템 검토 중',cls:'sys-wait',action:[]},
  'sys-ok':   {label:'시스템 승인',cls:'sys-ok',    action:['AI 반영 처리']},
  'ai-done':  {label:'AI 반영완료',cls:'ai-done',   action:[]},
};

function fileIcon(type){
  const m={pdf:'📄',xlsx:'📊',docx:'📘',pptx:'📑',hwp:'📝'};
  return `<div class="v34-file-ic ${type}">${m[type]||'📄'}</div>`;
}

function stepBadge(step){
  const s=STEP_LABELS[step]||{label:step,cls:'upload'};
  return `<span class="v34-step-badge ${s.cls}">${s.label}</span>`;
}

function stepActions(step, teamIdx, fileIdx){
  const s=STEP_LABELS[step]; if(!s||!s.action.length) return '';
  return s.action.map(a=>{
    let cls='',onclick='';
    if(a==='승인'){cls='ok';onclick=`v34TeamApprove(${teamIdx},${fileIdx},this)`}
    else if(a==='보완 요청'){cls='no';onclick=`v34TeamReject(${teamIdx},${fileIdx},this)`}
    else if(a==='시스템 전송'){cls='send';onclick=`v34SendToSystem(${teamIdx},${fileIdx},this)`}
    else if(a==='팀 승인 요청'){cls='';onclick=`say('팀 관리자에게 검토 요청을 발송했습니다.','📤')`}
    else if(a==='AI 반영 처리'){cls='ok';onclick=`say('AI 임베딩 대기열에 추가했습니다.','🧠')`}
    return `<button class="v34-inline-btn ${cls}" onclick="${onclick}">${a}</button>`;
  }).join('');
}

let activeTeamIdx=0;
function renderTeamAdmin(teamIdx){
  if(typeof teamIdx==='number') activeTeamIdx=teamIdx;
  const panelEl=$('#p-req'); if(!panelEl) return;
  const t=TEAMS_DATA[activeTeamIdx];
  const pendingCount=t.files.filter(f=>f.step==='team-wait').length;
  const sentCount=t.files.filter(f=>['sys-wait','sys-ok','ai-done'].includes(f.step)).length;

  panelEl.innerHTML=`
    ${buildFlowBanner()}

    <div class="v34-req-layout">
      <!-- 팀 네비게이션 -->
      <div class="v34-team-nav">
        <div class="v34-team-nav-title">팀 선택</div>
        ${TEAMS_DATA.map((team,i)=>{
          const tw=team.files.filter(f=>f.step==='team-wait').length;
          const ts=team.files.filter(f=>['sys-wait','sys-ok','ai-done'].includes(f.step)).length;
          let cntHtml='';
          if(tw>0) cntHtml=`<span class="v34-tb-cnt pending">${tw}</span>`;
          else if(ts>0) cntHtml=`<span class="v34-tb-cnt sent">${ts}↑</span>`;
          else cntHtml=`<span class="v34-tb-cnt done">✓</span>`;
          return `<button class="v34-team-btn ${i===activeTeamIdx?'on':''}" onclick="v34SelectTeam(${i})">
            <span>📂 ${esc(team.name)}</span>${cntHtml}
          </button>`;
        }).join('')}
        <div style="border-top:1px solid var(--border-1);margin:10px 0 8px"></div>
        <div class="v34-team-nav-title">전체 현황</div>
        <div style="padding:6px 10px;font-size:11px;color:var(--text-3);line-height:1.8">
          <div>📁 총 파일 ${TEAMS_DATA.reduce((a,t)=>a+t.files.length,0)}건</div>
          <div style="color:var(--a)">🕐 팀 검토 대기 ${TEAMS_DATA.reduce((a,t)=>a+t.files.filter(f=>f.step==='team-wait').length,0)}건</div>
          <div style="color:var(--v)">🛡️ 시스템 검토 ${TEAMS_DATA.reduce((a,t)=>a+t.files.filter(f=>f.step==='sys-wait').length,0)}건</div>
          <div style="color:var(--g)">✅ 반영완료 ${TEAMS_DATA.reduce((a,t)=>a+t.files.filter(f=>f.step==='ai-done').length,0)}건</div>
        </div>
      </div>

      <!-- 파일 목록 -->
      <div class="v34-req-main">
        <div class="v34-req-header">
          <div>
            <div class="v34-req-title">📂 ${esc(t.name)}</div>
            <div style="font-size:11px;color:var(--text-3);margin-top:2px">팀 Admin: ${esc(t.admin)} · 총 ${t.files.length}건</div>
          </div>
          <div class="v34-req-actions">
            <button class="v34-req-action-btn secondary" onclick="v34UploadForTeam(${activeTeamIdx})">📎 파일 추가</button>
            ${pendingCount>0?`<button class="v34-req-action-btn primary" onclick="v34BatchApproveTeam(${activeTeamIdx})">✅ 전체 승인 (${pendingCount}건)</button>`:''}
            ${sentCount>0?`<div class="v34-sent-check">🛡️ 시스템에 ${sentCount}건 전송됨</div>`:''}
          </div>
        </div>

        <!-- 업로드 영역 -->
        <div class="v34-upload-zone" id="v34UploadZone${activeTeamIdx}" onclick="v34UploadForTeam(${activeTeamIdx})"
          ondragover="this.classList.add('drag');event.preventDefault()"
          ondragleave="this.classList.remove('drag')"
          ondrop="this.classList.remove('drag');event.preventDefault();v34UploadForTeam(${activeTeamIdx})">
          <div class="v34-upload-ic">☁️</div>
          <div class="v34-upload-title">파일을 드래그하거나 클릭하여 업로드</div>
          <div class="v34-upload-sub">PDF, DOCX, XLSX, HWP · 최대 50MB · 업로드 후 팀 Admin 검토 요청</div>
        </div>

        <div class="v34-section-label">파일 목록 — 단계별 현황</div>

        ${t.files.map((f,i)=>`
          <div class="v34-file-card" id="v34fc-${activeTeamIdx}-${i}" data-step="${f.step}">
            ${fileIcon(f.type)}
            <div class="v34-file-info">
              <div class="v34-file-name" title="${esc(f.name)}">${esc(f.name)}</div>
              <div class="v34-file-meta">
                <span>👤 ${esc(f.uploader)}</span>
                <span>📅 ${f.date}</span>
                <span>📝 ${esc(f.reason)}</span>
              </div>
            </div>
            <div class="v34-file-status">
              ${stepBadge(f.step)}
              <div class="v34-file-action">
                ${stepActions(f.step, activeTeamIdx, i)}
              </div>
            </div>
          </div>
        `).join('')}

        ${t.files.length===0?`<div class="v34-empty"><div class="v34-empty-ic">📁</div><div>아직 업로드된 파일이 없습니다.<br>위의 업로드 영역에서 파일을 추가하세요.</div></div>`:''}

        <div style="margin-top:16px;padding:12px 16px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;font-size:11px;color:var(--text-3);line-height:1.7">
          <b style="color:var(--text-2)">업무 흐름 안내</b><br>
          파일 업로드 → <span style="color:var(--a);font-weight:700">팀 Admin 승인</span> → <span style="color:var(--v);font-weight:700">시스템 Admin 최종 승인</span> → <span style="color:var(--g);font-weight:700">AI 지식 DB 자동 반영</span><br>
          <span style="font-size:10px;color:var(--text-4)">* 팀 승인 후 "시스템 전송" 버튼으로 최종 검토를 요청합니다. 시스템 Admin이 폴더 배정 후 AI 임베딩을 시작합니다.</span>
        </div>
      </div>
    </div>
  `;
}

window.v34SelectTeam=function(idx){activeTeamIdx=idx;renderTeamAdmin(idx)};
window.v34TeamApprove=function(ti,fi,btn){
  TEAMS_DATA[ti].files[fi].step='team-ok';
  say('✅ 승인 처리했습니다. "시스템 전송" 버튼으로 시스템 Admin에게 전송하세요.','✅',3000);
  renderTeamAdmin();
  const old=$('.atb.on')?.getAttribute('onclick');
  if(!old) updatePendingCount&&updatePendingCount();
};
window.v34TeamReject=function(ti,fi,btn){
  TEAMS_DATA[ti].files[fi].step='upload';
  say('보완 요청을 전송했습니다. 업로더에게 알림이 발송됩니다.','❌',2500);
  renderTeamAdmin();
};
window.v34SendToSystem=function(ti,fi,btn){
  TEAMS_DATA[ti].files[fi].step='sys-wait';
  say(`🛡️ 시스템 Admin에게 전송했습니다. 최종 승인 후 AI DB에 반영됩니다.`,'🛡️',3000);
  renderTeamAdmin();
};
window.v34BatchApproveTeam=function(ti){
  TEAMS_DATA[ti].files.forEach(f=>{if(f.step==='team-wait')f.step='team-ok'});
  say('선택 팀 파일을 전체 승인했습니다. 시스템 전송 준비가 완료됩니다.','✅',2500);
  renderTeamAdmin();
};
window.v34UploadForTeam=function(ti){
  const nms=['구매전략_보고서_2026.pdf','협력사_평가기준_v3.xlsx','수의계약_가이드_최종.docx','품질검수_체크리스트.pdf','입찰운영_개정안.pdf'];
  const types=['pdf','xlsx','docx','pdf','pdf'];
  const idx=Math.floor(Math.random()*nms.length);
  TEAMS_DATA[ti].files.push({
    name:nms[idx], type:types[idx], uploader:'프로큐어히어로',
    date:'방금', step:'team-wait', reason:'신규 업로드'
  });
  say(`${nms[idx]} 업로드 완료. 팀 Admin 검토 대기 중입니다.`,'☁️',2500);
  renderTeamAdmin();
};

/* ═══════════════════════════════════════
 * ⑤ 시스템 Admin 최종 승인 패널 (p-verify 교체)
 * ═══════════════════════════════════════ */
function renderSystemAdminVerify(){
  const el=$('#p-verify'); if(!el) return;
  const sysFiles=TEAMS_DATA.flatMap((t,ti)=>
    t.files.filter(f=>f.step==='sys-wait'||f.step==='sys-ok')
           .map(f=>({...f,teamName:t.name,ti,fi:t.files.indexOf(f)}))
  );

  el.innerHTML=`
    ${buildFlowBanner()}
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
      <div>
        <div style="font-size:15px;font-weight:700;color:var(--text-1)">🛡️ 시스템 Admin 최종 승인</div>
        <div style="font-size:11px;color:var(--text-3);margin-top:2px">팀 승인 완료 파일을 최종 검토 후 AI 지식 DB에 등재합니다</div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="v34-req-action-btn secondary">🔄 목록 새로고침</button>
        <button class="v34-req-action-btn primary" onclick="v34SystemBatchApprove()">🛡️ 전체 최종 승인</button>
      </div>
    </div>

    <div class="v34-section-label">시스템 검토 대기 파일 (${sysFiles.length}건)</div>

    ${sysFiles.length===0?`<div class="v34-empty"><div class="v34-empty-ic">🎉</div><div>현재 검토 대기 파일이 없습니다.<br>팀 Admin이 승인 후 전송하면 여기에 표시됩니다.</div></div>`:
    sysFiles.map((f,i)=>`
      <div class="v34-file-card" id="v34sf-${i}" data-step="${f.step}">
        ${fileIcon(f.type)}
        <div class="v34-file-info">
          <div class="v34-file-name">${esc(f.name)}</div>
          <div class="v34-file-meta">
            <span>📂 ${esc(f.teamName)}</span>
            <span>👤 ${esc(f.uploader)}</span>
            <span>📅 ${f.date}</span>
            <span>📝 ${esc(f.reason)}</span>
          </div>
        </div>
        <div class="v34-file-status">
          ${stepBadge(f.step)}
          <div class="v34-file-action">
            ${f.step==='sys-wait'?`
              <button class="v34-inline-btn" style="font-size:10px;color:var(--text-3)" onclick="v34SysPreview(${i})">📋 미리보기</button>
              <button class="v34-inline-btn" style="font-size:10px" onclick="v34SysRejectItem(${i})">보완 요청</button>
              <button class="v34-inline-btn ok" onclick="v34SysApproveItem(${i})">최종 승인 →AI</button>
            `:`<span style="font-size:10px;color:var(--g)">✓ 승인완료 · AI 반영 중</span>`}
          </div>
        </div>
      </div>
    `).join('')}

    <div style="margin-top:16px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;padding:12px 16px">
      <div style="font-size:11px;font-weight:700;color:var(--text-2);margin-bottom:6px">🧠 커뮤니티 AI 지식 후보 — 별도 검증 큐</div>
      <div style="font-size:11px;color:var(--text-3);line-height:1.7">채택 + 추천 10개 이상인 커뮤니티 답변이 자동으로 올라옵니다. 승인 시 RAG DB에 반영되며 작성자에게 +100pt가 지급됩니다.</div>
      <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">
        <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:8px;padding:10px;flex:1;min-width:220px">
          <div style="font-size:11px;font-weight:700;color:var(--text-1);margin-bottom:4px">Q. 탄력적입찰에서 1회차 유찰 시 처리 절차</div>
          <div style="font-size:10px;color:var(--text-3)">프로큐어마스터 · 추천 47 · 채택됨 · 정확도: 높음</div>
          <div style="display:flex;gap:6px;margin-top:8px"><button class="v34-inline-btn ok" onclick="say('AI 학습 DB에 반영했습니다.','🧠',2500);this.closest('[style*=background]').style.opacity='.4'">AI 등재 승인</button><button class="v34-inline-btn no" onclick="say('보완 요청을 전송했습니다.','❌')">보완 요청</button></div>
        </div>
        <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:8px;padding:10px;flex:1;min-width:220px">
          <div style="font-size:11px;font-weight:700;color:var(--text-1);margin-bottom:4px">Q. VAATZ 해외 발주 환율 기준일</div>
          <div style="font-size:10px;color:var(--text-3)">VAATZ달인 · 추천 22 · 채택됨 · 정확도: 높음</div>
          <div style="display:flex;gap:6px;margin-top:8px"><button class="v34-inline-btn ok" onclick="say('AI 학습 DB에 반영했습니다.','🧠',2500);this.closest('[style*=background]').style.opacity='.4'">AI 등재 승인</button><button class="v34-inline-btn no" onclick="say('보완 요청을 전송했습니다.','❌')">보완 요청</button></div>
        </div>
      </div>
    </div>
  `;
}

window.v34SystemBatchApprove=function(){
  TEAMS_DATA.forEach(t=>t.files.forEach(f=>{if(f.step==='sys-wait')f.step='ai-done'}));
  say('전체 최종 승인 완료. AI 임베딩 대기열에 추가했습니다.','🧠',3000);
  renderSystemAdminVerify();
};
window.v34SysApproveItem=function(i){
  const sysFiles=TEAMS_DATA.flatMap(t=>t.files.filter(f=>f.step==='sys-wait'||f.step==='sys-ok'));
  if(sysFiles[i]){sysFiles[i].step='ai-done';}
  say('최종 승인 완료. AI 임베딩을 시작합니다.','🧠',2500);
  renderSystemAdminVerify();
};
window.v34SysRejectItem=function(i){
  const sysFiles=TEAMS_DATA.flatMap(t=>t.files.filter(f=>f.step==='sys-wait'));
  if(sysFiles[i]){sysFiles[i].step='upload';}
  say('보완 요청을 발송했습니다. 팀 Admin에게 알림이 전달됩니다.','❌',2500);
  renderSystemAdminVerify();
};
window.v34SysPreview=function(i){say('문서 미리보기는 답변 근거 패널에서 확인 가능합니다.','📋',2000)};

/* ═══════════════════════════════════════
 * Boot
 * ═══════════════════════════════════════ */
function boot(){
  // 커뮤니티 오픈 시 헤더 패치
  const origOpenComm=window.openComm;
  if(origOpenComm&&!window.__v34CommWrapped){
    window.__v34CommWrapped=true;
    window.openComm=function(tab){
      origOpenComm.apply(this,arguments);
      setTimeout(()=>{patchCommHeader();if(isMaximized){$('.comm-ov')?.classList.add('v34-max');}},50);
    };
  }
  // Admin 탭 오픈 시 패치
  const origAt=window.at||window.openAdminTab;
  function patchAdminTab(id){
    if(id==='p-req') setTimeout(renderTeamAdmin,30);
    if(id==='p-verify') setTimeout(renderSystemAdminVerify,30);
  }
  if(origAt&&!window.__v34AtWrapped){
    window.__v34AtWrapped=true;
    const origAtFn=window.at;
    if(origAtFn) window.at=function(btn,id){origAtFn(btn,id);patchAdminTab(id)};
    if(window.openAdminTab){const origOAT=window.openAdminTab;window.openAdminTab=function(id){origOAT(id);patchAdminTab(id)}}
  }
  // 주기적 헤더 도구 보장 (제목 변경 없이 .v34-hd-tools 버튼 삽입만)
  setInterval(()=>{
    const hd=$('.comm-hd');
    if(hd){
      // h2 텍스트 변경 제거 — §12 interval과 충돌하여 팝업 제목이 계속 바뀌는 버그 원인
      if(!hd.querySelector('.v34-hd-tools')) patchCommHeader();
    }
  },1500);
  // 초기 Admin 패널 렌더
  setTimeout(()=>{renderTeamAdmin();renderSystemAdminVerify();},200);
}

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
else boot();

})();


(function(){
'use strict';

/* ═══════════════════════════════════════════
 * 1. EMOJI CHARACTER SYSTEM
 * ═══════════════════════════════════════════ */
window._v35Emoji = '🚗';

function setEmojiOnBuddy(el, emoji) {
  let ov = el.querySelector('.v35-emoji-overlay');
  if (!ov) {
    ov = document.createElement('span');
    ov.className = 'v35-emoji-overlay';
    el.appendChild(ov);
  }
  ov.textContent = emoji;
}

function syncAllChar(emoji) {
  window._v35Emoji = emoji;
  document.querySelectorAll('.buddy-3d').forEach(el => setEmojiOnBuddy(el, emoji));
  // floatCharBody는 SVG 캐릭터를 포함하므로 덮어쓰지 않음
  // charMain, floatShow만 업데이트
  ['charMain','floatShow'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = emoji;
  });
  // floatCharBody에는 오버레이로만 표시
  const fcb = document.getElementById('floatCharBody');
  if (fcb) {
    let ov = fcb.querySelector('.v35-emoji-overlay');
    if (!ov) {
      ov = document.createElement('span');
      ov.className = 'v35-emoji-overlay';
      ov.style.cssText = 'position:absolute;top:-8px;right:-8px;font-size:16px;z-index:5;pointer-events:none;';
      fcb.style.position = 'relative';
      fcb.appendChild(ov);
    }
    ov.textContent = emoji;
  }
}

window.pickChar = function(btn, emoji) {
  document.querySelectorAll('.char-sel').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  syncAllChar(emoji);
  if (window.toast) window.toast((btn && btn.title ? btn.title : emoji) + ' 선택!', '✨', 1200);
};

/* ═══════════════════════════════════════════
 * 2. LARGE MODAL MAXIMIZE BUTTONS
 * ═══════════════════════════════════════════ */
function addV35MaxBtn(hd, modal) {
  if (!hd || !modal) return;
  if (hd.querySelector('.v35-max-btn,.v30-max-btn,.v27-max-btn')) return;
  const btn = document.createElement('button');
  btn.className = 'v35-max-btn';
  btn.title = '창 크게/작게';
  btn.innerHTML = '⛶';
  btn.onclick = function() {
    const isMax = modal.classList.toggle('full');
    btn.innerHTML = isMax ? '↙' : '⛶';
    btn.title = isMax ? '창 작게' : '창 크게';
  };
  const close = hd.querySelector('.large-close,.adm-x');
  if (close && close.parentElement === hd) hd.insertBefore(btn, close);
  else hd.appendChild(btn);
}

function patchLargeModals() {
  document.querySelectorAll('.large-modal .large-hd').forEach(hd => {
    addV35MaxBtn(hd, hd.closest('.large-modal'));
  });
}

/* ═══════════════════════════════════════════
 * 3. 4-LEVEL TREE EXPLORER
 * ═══════════════════════════════════════════ */
const V35_TREE = [
  {name:'구매전략팀',icon:'🏢',admin:'이준혁 책임',folders:[
    {name:'구매업무규정',subs:[
      {name:'입찰·계약',files:[
        {name:'입찰운영 업무표준_001.pdf',type:'pdf',step:'ai-done',up:'이준혁',dt:'02.07'},
        {name:'수의계약 운영지침_002.pdf',type:'pdf',step:'sys-wait',up:'박성민',dt:'02.08'},
        {name:'계약관리 규정_003.docx',type:'docx',step:'team-ok',up:'이준혁',dt:'02.09'}
      ]},
      {name:'특수·해외',files:[
        {name:'해외법인 구매 승인 프로세스.docx',type:'docx',step:'team-wait',up:'이준혁',dt:'02.07'},
        {name:'조달청 물품구매계약 특수조건.pdf',type:'pdf',step:'team-wait',up:'박성민',dt:'02.08'}
      ]}
    ]},
    {name:'전략 리포트',subs:[
      {name:'규제 동향',files:[
        {name:'반도체 수출규제 국가별 현황.docx',type:'docx',step:'ai-done',up:'이준혁',dt:'01.28'}
      ]}
    ]}
  ]},
  {name:'기술구매팀',icon:'🔧',admin:'김민아 매니저',folders:[
    {name:'협력사 관리',subs:[
      {name:'품질 기준',files:[
        {name:'협력사 품질 5스타 기준_001.xlsx',type:'xlsx',step:'ai-done',up:'김민아',dt:'02.01'},
        {name:'업체 평가 데이터셋_002.csv',type:'csv',step:'sys-ok',up:'최종훈',dt:'02.05'}
      ]},
      {name:'납기·검수',files:[
        {name:'납기 리스크 대응 매뉴얼.docx',type:'docx',step:'team-ok',up:'김민아',dt:'02.10'},
        {name:'검수확인 업무표준.pdf',type:'pdf',step:'team-wait',up:'정현수',dt:'02.11'}
      ]}
    ]},
    {name:'전동화 부품',subs:[
      {name:'단가·원가',files:[
        {name:'전동화 부품 단가 벤치마크.xlsx',type:'xlsx',step:'sys-wait',up:'이서연',dt:'02.03'}
      ]}
    ]}
  ]},
  {name:'글로벌구매팀',icon:'🌐',admin:'박준영 책임',folders:[
    {name:'글로벌 가이드',subs:[
      {name:'VAATZ 운영',files:[
        {name:'VAATZ 발주 생성 매뉴얼_001.pdf',type:'pdf',step:'ai-done',up:'박준영',dt:'01.20'},
        {name:'구매용어 표준정의집.docx',type:'docx',step:'ai-done',up:'임지현',dt:'01.25'}
      ]}
    ]}
  ]},
  {name:'품질자재팀',icon:'⭐',admin:'정수현 책임매니저',folders:[
    {name:'품질 문서',subs:[
      {name:'기준·표준',files:[
        {name:'협력사 품질 5스타 기준_Q001.xlsx',type:'xlsx',step:'team-ok',up:'정수현',dt:'02.06'},
        {name:'원가 산정 기준표.xlsx',type:'xlsx',step:'ai-done',up:'이지훈',dt:'01.30'}
      ]}
    ]}
  ]},
  {name:'일반자재구매팀',icon:'📦',admin:'이소라 매니저',folders:[
    {name:'MRO 가이드',subs:[
      {name:'구매 절차',files:[
        {name:'일반자재 MRO 구매 가이드.pdf',type:'pdf',step:'sys-wait',up:'이소라',dt:'02.04'},
        {name:'수의계약 운영지침_MRO.pdf',type:'pdf',step:'team-wait',up:'유경민',dt:'02.12'}
      ]}
    ]}
  ]},
  {name:'원가관리팀',icon:'💰',admin:'오민재 책임매니저',folders:[
    {name:'원가 DB',subs:[
      {name:'단가·환율',files:[
        {name:'원가 산정 기준표_2026.xlsx',type:'xlsx',step:'team-ok',up:'오민재',dt:'02.09'},
        {name:'전동화 부품 단가 벤치마크.xlsx',type:'xlsx',step:'team-wait',up:'강현규',dt:'02.13'}
      ]}
    ]}
  ]}
];

const STEP_ACT = {'team-wait':1,'team-ok':2,'sys-wait':2,'sys-ok':3,'ai-done':4};
const STEP_LBL = ['업로드','팀검토','시스템','AI반영'];
const FTYPE_IC = {pdf:'📄',docx:'📝',xlsx:'📊',csv:'📋',ppt:'📑',hwp:'📃'};

function mkStepFlow(step) {
  const active = STEP_ACT[step] !== undefined ? STEP_ACT[step] : 0;
  return '<span class="v35-flow">' + STEP_LBL.map(function(lbl, i) {
    var cls = active >= 4 ? 'done' : (i < active ? 'done' : (i === active ? 'active' : 'pend'));
    var ic = cls === 'done' ? '✓' : (cls === 'active' ? '●' : '○');
    return '<span class="v35-fs ' + cls + '">' + ic + lbl + '</span>' + (i < 3 ? '<span class="v35-fa">›</span>' : '');
  }).join('') + '</span>';
}

function mkFileActions(step, id) {
  if (step === 'team-wait') return '<button class="v35-act-btn p" onclick="v35Act(\'' + id + '\',\'team-ok\')">팀 승인</button>';
  if (step === 'team-ok')   return '<button class="v35-act-btn p" onclick="v35Act(\'' + id + '\',\'sys-wait\')">시스템 전송</button>';
  if (step === 'sys-wait')  return '<button class="v35-act-btn p" onclick="v35Act(\'' + id + '\',\'sys-ok\')">최종 승인</button>';
  if (step === 'sys-ok')    return '<button class="v35-act-btn p" onclick="v35Act(\'' + id + '\',\'ai-done\')">AI 반영</button>';
  return '<span style="font-size:10px;color:var(--g)">✓ 완료</span>';
}

window.v35Act = function(id, newStep) {
  var parts = id.split('_');
  var ti = +parts[0], fi = +parts[1], si = +parts[2], ii = +parts[3];
  var file = V35_TREE[ti] && V35_TREE[ti].folders[fi] && V35_TREE[ti].folders[fi].subs[si] && V35_TREE[ti].folders[fi].subs[si].files[ii];
  if (!file) return;
  file.step = newStep;
  v35RenderTree(window._v35TeamIdx || 0);
  var msgs = {'team-ok':'팀 승인 완료','sys-wait':'시스템 Admin에 전송됨','sys-ok':'최종 승인 완료','ai-done':'AI DB에 반영됐습니다'};
  if (window.say) window.say(msgs[newStep] || '처리됐습니다', '✅', 2000);
  else if (window.toast) window.toast(msgs[newStep] || '처리됐습니다', '✅', 2000);
};

window._v35TeamIdx = 0;
window._v35Open = {};

function buildTree(ti) {
  var team = V35_TREE[ti];
  if (!team) return '';
  var h = '';
  team.folders.forEach(function(folder, fi) {
    var fk = ti + '_' + fi;
    var isOpen = window._v35Open[fk] !== undefined ? window._v35Open[fk] : fi === 0;
    var pending = folder.subs.reduce(function(a, s) { return a + s.files.filter(function(f) { return f.step === 'team-wait'; }).length; }, 0);
    var total = folder.subs.reduce(function(a, s) { return a + s.files.length; }, 0);
    var badge = pending > 0 ? '<span class="v35-tn-badge">' + pending + ' 대기</span>' : '<span class="v35-tn-badge" style="background:var(--bg-3);color:var(--text-3)">' + total + '</span>';
    h += '<div class="v35-tn' + (isOpen ? ' open' : '') + '" id="v35n_' + fk + '">' +
      '<div class="v35-tn-row" onclick="v35Toggle(\'' + fk + '\')">' +
        '<span class="v35-tn-arr">▶</span><span class="v35-tn-ic">📂</span>' +
        '<span class="v35-tn-label">' + folder.name + '</span>' + badge +
      '</div><div class="v35-tn-children">';
    folder.subs.forEach(function(sub, si) {
      var sk = ti + '_' + fi + '_' + si;
      var isSubOpen = window._v35Open[sk] !== undefined ? window._v35Open[sk] : (fi === 0 && si === 0);
      h += '<div class="v35-tn' + (isSubOpen ? ' open' : '') + '" id="v35n_' + sk + '">' +
        '<div class="v35-tn-row" onclick="v35Toggle(\'' + sk + '\')">' +
          '<span class="v35-tn-arr">▶</span><span class="v35-tn-ic">📁</span>' +
          '<span class="v35-tn-label">' + sub.name + '</span>' +
          '<span class="v35-tn-badge" style="background:var(--bg-3);color:var(--text-3)">' + sub.files.length + '</span>' +
        '</div><div class="v35-tn-children">';
      sub.files.forEach(function(file, ii) {
        var fid = ti + '_' + fi + '_' + si + '_' + ii;
        h += '<div class="v35-file-row">' +
          '<span style="width:14px;text-align:center;flex-shrink:0;font-size:12px">' + (FTYPE_IC[file.type] || '📄') + '</span>' +
          '<span class="v35-file-name" title="' + file.name + '">' + file.name + '</span>' +
          mkStepFlow(file.step) +
          '<div class="v35-fa-act">' + mkFileActions(file.step, fid) + '</div>' +
        '</div>';
      });
      h += '<div class="v35-upload-hint" onclick="if(window.say)window.say(\'파일 업로드 다이얼로그가 표시됩니다.\',\'📁\',1800)">＋ 파일 업로드</div>';
      h += '</div></div>';
    });
    h += '</div></div>';
  });
  return h;
}

window.v35Toggle = function(key) {
  var el = document.getElementById('v35n_' + key);
  if (!el) return;
  var isOpen = el.classList.toggle('open');
  window._v35Open[key] = isOpen;
};

window.v35BatchApprove = function(ti) {
  var cnt = 0;
  V35_TREE[ti] && V35_TREE[ti].folders.forEach(function(f) {
    f.subs.forEach(function(s) {
      s.files.forEach(function(file) {
        if (file.step === 'team-wait') { file.step = 'team-ok'; cnt++; }
      });
    });
  });
  v35RenderTree(ti);
  var msg = cnt + '건 팀 승인 완료. 시스템 전송 버튼으로 다음 단계를 진행하세요.';
  if (window.say) window.say(msg, '✅', 3000);
  else if (window.toast) window.toast(msg, '✅', 3000);
};

function v35RenderTree(ti) {
  var panel = document.getElementById('p-req');
  if (!panel) return;
  var layout = panel.querySelector('.v34-req-layout');
  if (!layout) return;
  var main = layout.querySelector('.v34-req-main');
  if (!main) return;
  window._v35TeamIdx = ti;
  var team = V35_TREE[ti];
  if (!team) return;
  var total = team.folders.reduce(function(a, f) { return a + f.subs.reduce(function(b, s) { return b + s.files.length; }, 0); }, 0);
  var pending = team.folders.reduce(function(a, f) { return a + f.subs.reduce(function(b, s) { return b + s.files.filter(function(ff) { return ff.step === 'team-wait'; }).length; }, 0); }, 0);
  main.innerHTML =
    '<div class="v34-req-header">' +
      '<div>' +
        '<div class="v34-req-title">' + team.icon + ' ' + team.name + '</div>' +
        '<div style="font-size:11px;color:var(--text-3);margin-top:2px">Admin: ' + team.admin + ' · 총 ' + total + '건' +
          (pending > 0 ? ' · <span style="color:var(--a)">' + pending + '건 팀 검토 대기</span>' : '') +
        '</div>' +
      '</div>' +
      '<div class="v34-req-actions">' +
        '<button class="v34-req-action-btn secondary" onclick="if(window.say)window.say(\'새 폴더 기능은 실제 구현 시 적용됩니다.\',\'📂\',1800)">📂 폴더 추가</button>' +
        (pending > 0 ? '<button class="v34-req-action-btn primary" onclick="v35BatchApprove(' + ti + ')">✅ 전체 팀 승인 (' + pending + '건)</button>' : '') +
      '</div>' +
    '</div>' +
    '<div class="v35-tree-wrap">' +
      '<div class="v35-tree-search">' +
        '<span style="font-size:12px;color:var(--text-4)">🔍</span>' +
        '<input placeholder="파일명 검색..." oninput="v35Search(this.value)">' +
        '<span style="font-size:9.5px;color:var(--text-4);white-space:nowrap">업로드 → 팀검토 → 시스템 → AI반영</span>' +
      '</div>' +
      '<div id="v35-tree">' + buildTree(ti) + '</div>' +
    '</div>';
}

window.v35Search = function(q) {
  var lq = q.toLowerCase();
  document.querySelectorAll('.v35-file-row').forEach(function(el) {
    var nm = (el.querySelector('.v35-file-name') || {}).textContent || '';
    el.style.display = q ? (nm.toLowerCase().includes(lq) ? '' : 'none') : '';
  });
};

/* Wrap v34SelectTeam to inject tree after render */
var _origST = window.v34SelectTeam;
window.v34SelectTeam = function(idx) {
  if (_origST) _origST(idx);
  window._v35TeamIdx = idx;
  setTimeout(function() { v35RenderTree(idx); }, 80);
};

/* MutationObserver on #p-req — re-inject tree after renderTeamAdmin runs */
(function() {
  var panel = document.getElementById('p-req');
  if (!panel) return;
  var _timer = null;
  new MutationObserver(function() {
    if (panel.querySelector('.v34-req-layout') && !panel.querySelector('#v35-tree')) {
      clearTimeout(_timer);
      _timer = setTimeout(function() { v35RenderTree(window._v35TeamIdx || 0); }, 60);
    }
  }).observe(panel, { childList: true });
})();

/* ═══════════════════════════════════════════
 * 4. SECURITY COMBO CONTROL
 * ═══════════════════════════════════════════ */
function buildSecCombo(curSec, uid) {
  var opts = ['리더 전용', '일반 공개', '지정 사용자'];
  return '<div class="v35-sec-combo" data-sec="' + curSec + '">' +
    opts.map(function(opt) {
      var on = opt === curSec ? ' on' : '';
      return '<label class="v35-sco' + on + '" onclick="v35SecPick(this,\'' + opt + '\',\'' + uid + '\')">' +
        '<input type="radio" name="sec_' + uid + '" value="' + opt + '"' + (opt === curSec ? ' checked' : '') + '>' +
        '<span class="v35-radio"></span>' + opt + '</label>';
    }).join('') +
    '<div class="v35-upick" id="vup_' + uid + '" style="display:' + (curSec === '지정 사용자' ? 'block' : 'none') + '">' +
      '<div class="v35-uprow">' +
        '<input class="v35-uinput" id="vupi_' + uid + '" placeholder="사번 또는 이름">' +
        '<button class="v35-uadd" onclick="v35AddTag(\'' + uid + '\')">추가</button>' +
      '</div>' +
      '<div class="v35-utags" id="vupt_' + uid + '"></div>' +
    '</div>' +
  '</div>';
}

window.v35SecPick = function(lbl, val, uid) {
  var combo = lbl.closest('.v35-sec-combo');
  if (!combo) return;
  combo.querySelectorAll('.v35-sco').forEach(function(el) { el.classList.remove('on'); });
  lbl.classList.add('on');
  combo.dataset.sec = val;
  var pk = document.getElementById('vup_' + uid);
  if (pk) pk.style.display = val === '지정 사용자' ? 'block' : 'none';
};

window.v35AddTag = function(uid) {
  var inp = document.getElementById('vupi_' + uid);
  var tags = document.getElementById('vupt_' + uid);
  if (!inp || !tags) return;
  var val = inp.value.trim();
  if (!val) return;
  var tag = document.createElement('span');
  tag.className = 'v35-utag';
  tag.innerHTML = val + '<button onclick="this.parentElement.remove()" title="제거">×</button>';
  tags.appendChild(tag);
  inp.value = ''; inp.focus();
};

function upgradeSecSelects() {
  var panel = document.getElementById('p-final');
  if (!panel) return;
  var uid = 0;
  panel.querySelectorAll('.setting-box').forEach(function(box) {
    var lbl = box.querySelector('.setting-label');
    if (!lbl || lbl.textContent.indexOf('보안') === -1) return;
    if (box.querySelector('.v35-sec-combo')) return;
    var sel = box.querySelector('select');
    var curSec = '리더 전용';
    if (sel) {
      curSec = (sel.value || (sel.options[0] && sel.options[0].text) || '리더 전용').trim();
      sel.style.display = 'none';
    }
    var div = document.createElement('div');
    div.innerHTML = buildSecCombo(curSec, 'fin' + uid++);
    box.appendChild(div.firstElementChild);
  });
}

/* Wrap openAdminTab to upgrade security selects when p-final opens */
var _origOAT = window.openAdminTab;
window.openAdminTab = function(id) {
  if (_origOAT) _origOAT(id);
  if (id === 'p-final') setTimeout(upgradeSecSelects, 150);
};

/* ═══════════════════════════════════════════
 * INIT
 * ═══════════════════════════════════════════ */
function v35Init() {
  /* 1. Emoji overlays */
  syncAllChar(window._v35Emoji);

  /* 2. Maximize buttons — patch all large-modals immediately */
  patchLargeModals();

  /* 3. Tree — initial inject after renderTeamAdmin runs */
  setTimeout(function() { v35RenderTree(window._v35TeamIdx || 0); }, 500);

  /* 4. Security combos on p-final if already rendered */
  setTimeout(upgradeSecSelects, 700);

  /* Periodic refresh */
  setInterval(function() {
    syncAllChar(window._v35Emoji);
    patchLargeModals();
  }, 2500);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', v35Init);
} else {
  setTimeout(v35Init, 350);
}

})();

/* ═══════════════════════════════════════════
 * VAATZ Admin Enhancement Pack
 * ─ Admin maximize, user edit modal,
 *   float-char reposition, Aa disable
 * ═══════════════════════════════════════════ */
(function(){
  /* 1. Admin maximize toggle */
  window.toggleAdmMaximize = function(){
    var box = document.getElementById('admBox');
    if(!box) return;
    var isMax = box.classList.toggle('maximized');
    var btn = document.getElementById('admMaxBtn');
    if(btn){ btn.innerHTML = isMax ? '↙' : '⛶'; btn.title = isMax ? '원래 크기' : '화면 확대'; }
  };

  /* 2. Float-char right-panel awareness */
  function updateFloatCharPos(){
    var rp = document.getElementById('rp');
    var fc = document.getElementById('floatChar');
    if(!fc) return;
    if(rp && rp.classList.contains('sh')){
      var rpW = rp.offsetWidth || 340;
      fc.style.setProperty('right', (rpW + 20) + 'px', 'important');
    } else {
      fc.style.setProperty('right', '20px', 'important');
    }
  }
  var origRpT = window.rpT;
  window.rpT = function(){
    if(origRpT) origRpT.apply(this, arguments);
    var rp = document.getElementById('rp');
    if(rp && !rp.classList.contains('sh')){
      rp.style.width = '';
      rp.style.minWidth = '';
    }
    setTimeout(updateFloatCharPos, 200);
  };
  var origRpSwitchTab = window.rpSwitchTab;
  window.rpSwitchTab = function(tab){
    if(origRpSwitchTab) origRpSwitchTab.apply(this, arguments);
    setTimeout(updateFloatCharPos, 100);
  };

  /* 3. User edit modal */
  window.openUserEdit = function(row, name, role, position, team){
    var modal = document.getElementById('userEditModal');
    if(!modal){
      modal = document.createElement('div');
      modal.id = 'userEditModal';
      modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center';
      modal.onclick = function(e){ if(e.target===modal) modal.remove(); };
      document.body.appendChild(modal);
    }
    modal.innerHTML = '<div style="background:var(--bg-1);border-radius:16px;padding:24px;width:420px;border:1px solid var(--border-1)">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">' +
        '<h3 style="font-size:14px;font-weight:700;color:var(--text-1)">사용자 권한 변경</h3>' +
        '<button style="background:none;border:none;font-size:16px;cursor:pointer;color:var(--text-3)" onclick="document.getElementById(\'userEditModal\').remove()">✕</button>' +
      '</div>' +
      '<div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--bg-2);border-radius:10px;margin-bottom:16px">' +
        '<div style="width:36px;height:36px;border-radius:10px;background:var(--accent-g);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:white">'+ (name?name[0]:'?') +'</div>' +
        '<div><div style="font-size:13px;font-weight:600;color:var(--text-1)">'+ name +'</div><div style="font-size:10px;color:var(--text-4)">'+ position +' · '+ team +'</div></div>' +
      '</div>' +
      '<div style="margin-bottom:12px">' +
        '<label style="font-size:11px;font-weight:600;color:var(--text-3);display:block;margin-bottom:6px">권한 역할</label>' +
        '<select id="userEditRole" style="width:100%;padding:9px 12px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:8px;color:var(--text-1);font-size:12px">' +
          '<option value="시스템관리자"'+(role==='시스템관리자'?' selected':'')+'>🔐 시스템관리자</option>' +
          '<option value="Admin 담당자"'+(role==='Admin 담당자'?' selected':'')+'>🛡 Admin 담당자</option>' +
          '<option value="팀장"'+(role==='팀장'?' selected':'')+'>👑 팀장 (높음 열람)</option>' +
          '<option value="팀관리자"'+(role==='팀관리자'?' selected':'')+'>📋 팀관리자</option>' +
          '<option value="일반"'+(role==='일반'?' selected':'')+'>👤 일반 구성원</option>' +
          '<option value="외부"'+'>🏢 외부 협력사</option>' +
        '</select>' +
      '</div>' +
      '<div style="margin-bottom:16px">' +
        '<label style="font-size:11px;font-weight:600;color:var(--text-3);display:block;margin-bottom:6px">보안 등급 접근</label>' +
        '<div style="display:flex;gap:6px">' +
          '<label style="display:flex;align-items:center;gap:5px;font-size:11px;cursor:pointer"><input type="checkbox" checked id="ue_h"> <span class="bd bd-h" style="font-size:9px">높음</span></label>' +
          '<label style="display:flex;align-items:center;gap:5px;font-size:11px;cursor:pointer"><input type="checkbox" checked id="ue_m"> <span class="bd bd-md" style="font-size:9px">중간</span></label>' +
          '<label style="display:flex;align-items:center;gap:5px;font-size:11px;cursor:pointer"><input type="checkbox" checked id="ue_l"> <span class="bd bd-l" style="font-size:9px">낮음</span></label>' +
        '</div>' +
      '</div>' +
      '<div style="display:flex;gap:8px;justify-content:flex-end">' +
        '<button class="btn btn-c" onclick="document.getElementById(\'userEditModal\').remove()">취소</button>' +
        '<button class="btn btn-p" onclick="saveUserEdit(\'' + name + '\')">변경하기</button>' +
      '</div>' +
    '</div>';
    modal.style.display = 'flex';
  };

  window.saveUserEdit = function(name){
    var role = document.getElementById('userEditRole')?.value || '';
    document.getElementById('userEditModal')?.remove();
    if(window.toast) window.toast(name + ' 권한이 ' + role + '(으)로 변경되었습니다.', '✅', 2500);
  };

  window.openAddUserModal = function(){
    if(window.toast) window.toast('사용자 추가 기능: SSO 연동 후 사용 가능합니다.', '👥', 2500);
  };

  /* 4. Final filter */
  window.setFinalFilter = function(btn, filter){
    document.querySelectorAll('.final-filter-btn').forEach(b => b.classList.remove('on'));
    if(btn) btn.classList.add('on');
    document.querySelectorAll('.final-doc-row').forEach(row => {
      if(filter === 'assigned') row.style.display = row.classList.contains('assigned') ? '' : 'none';
      else if(filter === 'unassigned') row.style.display = !row.classList.contains('assigned') ? '' : 'none';
      else row.style.display = '';
    });
  };

  /* 4b. Final doc preview modal */
  var _finalPreviewData = {
    'pdf': {
      title: '공정거래법 하도급 관련 조항',
      subtitle: '법무팀 공식 문서 · v1.2 · 구매품질기획팀',
      type: '📄 PDF',
      chunks: 48,
      embed: '2026-01-15',
      body: `<p>본 문서는 <span class="fp-highlight">공정거래법 제32조(하도급 거래 공정화)</span> 및 관련 조항을 정리한 구매 실무 참조 자료입니다.</p>
<p><strong>1. 하도급 대금 지급 규정</strong><br>수급사업자에게 목적물 수령일로부터 <span class="fp-highlight">60일 이내</span>에 하도급 대금을 지급해야 합니다. 어음 교부 시에는 어음 만기 기간이 90일을 초과할 수 없습니다.</p>
<p><strong>2. 부당 단가 인하 금지</strong><br>정당한 사유 없이 당초 약정 단가를 인하하는 행위는 금지됩니다. 원재료 가격 상승 등 불가피한 사유 발생 시에는 협의를 통해 단가를 조정할 수 있습니다.</p>
<p><strong>3. 기술 자료 유용 금지</strong><br>수급사업자로부터 제공받은 기술 자료를 <span class="fp-highlight">정당한 이유 없이 사용하거나 제3자에게 제공하는 행위</span>는 엄격히 금지됩니다.</p>
<p><strong>4. 서면 교부 의무</strong><br>하도급 계약 체결 시에는 반드시 계약서를 교부해야 하며, 구두 계약은 분쟁 발생 시 효력이 인정되지 않을 수 있습니다.</p>`
    },
    'xlsx': {
      title: '전동화 부품 단가 벤치마크',
      subtitle: 'PT제어부품구매팀 · 2026 Q1 자료 · v2.0',
      type: '📊 Excel',
      chunks: 31,
      embed: '2026-02-08',
      body: `<p>본 자료는 <span class="fp-highlight">전동화 핵심 부품 12종의 벤치마크 단가</span>를 정리한 구매 의사결정 참조 자료입니다.</p>
<table><thead><tr><th>부품명</th><th>현재 단가</th><th>벤치마크</th><th>차이율</th><th>비고</th></tr></thead>
<tbody>
<tr><td>인버터 모듈 (150kW)</td><td class="fp-highlight">₩4,280,000</td><td>₩3,950,000</td><td style="color:var(--r)">+8.4%</td><td>재협상 필요</td></tr>
<tr><td>BMS 컨트롤러</td><td>₩1,150,000</td><td>₩1,180,000</td><td style="color:var(--g)">-2.5%</td><td>적정</td></tr>
<tr><td>모터 하우징 (알루미늄)</td><td class="fp-highlight">₩680,000</td><td>₩590,000</td><td style="color:var(--r)">+15.3%</td><td>대체 공급사 검토</td></tr>
<tr><td>전력반도체 (SiC MOSFET)</td><td>₩92,000</td><td>₩88,000</td><td style="color:var(--a)">+4.5%</td><td>공급 부족</td></tr>
<tr><td>냉각 플레이트</td><td>₩320,000</td><td>₩315,000</td><td style="color:var(--g)">+1.6%</td><td>적정</td></tr>
</tbody></table>
<p style="margin-top:14px;font-size:11.5px;color:var(--text-4)">* 벤치마크 기준: 동종 업계 3개사 평균 / 2026년 1월 기준 / 환율 USD 1,320원 적용</p>`
    }
  };

  window.openFinalPreview = function(name, meta, sec, type){
    var modal = document.getElementById('finalPreviewModal');
    if(!modal) return;
    var data = _finalPreviewData[type] || _finalPreviewData['pdf'];
    var secCls = sec === '높음' ? 'sec-h' : sec === '중간' ? 'sec-m' : 'sec-l';
    // Populate header
    var fpIcon = document.getElementById('fpIcon');
    var fpTitle = document.getElementById('fpTitle');
    var fpMeta = document.getElementById('fpMeta');
    var fpSec = document.getElementById('fpSec');
    if(fpIcon) fpIcon.textContent = type === 'xlsx' ? '📊' : '📄';
    if(fpTitle) fpTitle.textContent = name;
    if(fpMeta) fpMeta.textContent = meta + ' · 팀 Admin 승인 완료';
    if(fpSec){
      fpSec.textContent = '🔒 보안 ' + sec;
      fpSec.className = 'final-prev-sec-badge ' + secCls;
    }
    // Populate body
    var fpBody = document.getElementById('fpBody');
    if(fpBody){
      fpBody.innerHTML =
        '<div class="fp-info-grid">' +
          '<div class="fp-info-card"><div class="fp-info-label">파일 형식</div><div class="fp-info-value">' + data.type + '</div></div>' +
          '<div class="fp-info-card"><div class="fp-info-label">청크 수</div><div class="fp-info-value">' + data.chunks + '개</div></div>' +
          '<div class="fp-info-card"><div class="fp-info-label">임베딩 예정</div><div class="fp-info-value">' + data.embed + '</div></div>' +
        '</div>' +
        '<div class="fp-doc-content">' +
          '<div class="fp-doc-title">' + data.title + '</div>' +
          '<div class="fp-doc-subtitle">' + data.subtitle + '</div>' +
          '<div class="fp-doc-body">' + data.body + '</div>' +
        '</div>' +
        '<div class="fp-note">💡 <strong>AI 인용 표시:</strong> 노란색 하이라이트는 AI 답변 생성에 직접 활용될 가능성이 높은 핵심 내용입니다. 승인 시 선택된 AI 모드에 독립 반영됩니다.</div>';
    }
    modal.classList.add('sh');
    document.body.style.overflow = 'hidden';
  };

  window.closeFinalPreview = function(){
    var modal = document.getElementById('finalPreviewModal');
    if(modal) modal.classList.remove('sh');
    document.body.style.overflow = '';
  };

  /* 5. Disable Aa font shortcut permanently */
  var _origInstallFont = window.installFontShortcut;
  window.installFontShortcut = function(){ /* disabled */ };
  setTimeout(function(){
    var el = document.getElementById('v27FontShortcut');
    if(el) el.remove();
  }, 500);

  /* 6. Init on load */
  var _admInit = function(){
    updateFloatCharPos();
    /* Override rp toggle to reposition float-char */
    var rp = document.getElementById('rp');
    if(rp){
      var obs = new MutationObserver(updateFloatCharPos);
      obs.observe(rp, {attributes:true, attributeFilter:['class']});
    }
  };
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _admInit);
  else setTimeout(_admInit, 400);

  /* 7. Float-char 캐릭터 sync 패치 */
  var _patchFloatCharSync = function(){
    /* v33PickChar 호출 시 floatCharBody도 업데이트 */
    var origV33Pick = window.v33PickChar;
    if(origV33Pick && !window.__floatSynced){
      window.__floatSynced = true;
      window.v33PickChar = function(btn, emoji, name){
        if(origV33Pick) origV33Pick.apply(this, arguments);
        /* floatCharBody SVG를 이모지로 교체 */
        var fcb = document.getElementById('floatCharBody');
        if(fcb){
          fcb.innerHTML = '<span style="font-size:56px;line-height:80px;display:block;text-align:center;width:64px;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.3))">' + emoji + '</span>';
        }
        var fs = document.getElementById('floatShow');
        if(fs) fs.innerHTML = '<span style="font-size:44px;line-height:64px;display:block;text-align:center;width:52px">' + emoji + '</span>';
      };
    }
  };
  setTimeout(_patchFloatCharSync, 600);
})();

/* ═══════════════════════════════════════════
 * VAATZ Q&A v36 — 지식IN 스타일 재설계
 * 자연스러운 Q&A 스레드 형태
 * ═══════════════════════════════════════════ */
(function(){
'use strict';
var $ = function(s, r){ return (r||document).querySelector(s); };
function esc(s){ return String(s||'').replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]; }); }
function say(m, i, d){ try{ (window.toast||window.say||console.log)(m, i||'✅', d||1800); } catch(e){ console.log(m); } }

var catIcons = {'전체':'📚','입찰':'🏷️','계약':'📋','VAATZ':'🖥️','5스타':'⭐','원가':'💰','일반자재':'📦','해외구매':'🌐','협력사':'🤝'};
var cats = ['전체','입찰','계약','VAATZ','5스타','원가','일반자재','해외구매','협력사'];

var questions = [
  {id:1, cat:'입찰', title:'탄력적입찰에서 1회차 유찰 시 처리 절차가 궁금합니다',
   body:'구매업무규정 제23조에 따른 재공고 요건과 수의계약 전환 기준이 궁금합니다. VAATZ에서 유찰처리 메뉴는 어디서 찾나요?',
   tags:['탄력적입찰','유찰','수의계약'], author:'계약초보', time:'3일 전', votes:47, views:312, lv:2, adopted:true,
   answers:[
     {id:11, author:'프로큐어마스터', role:'CPO', lv:4, time:'3일 전', votes:42, adopted:true,
      body:'구매업무규정 제23조 4항에 따르면 1회차 유찰 시 참여 업체 확대 또는 수의계약 전환이 가능합니다.\n\n실무적으로는 구매위원회 사전 승인을 받고 진행해야 하며, VAATZ에서는 [입찰관리 → 유찰처리] 메뉴에서 처리합니다. 참여 업체 확대 후 재공고 기간은 최소 5영업일이 필요합니다.'},
     {id:12, author:'입찰달인', role:'책임매니저', lv:3, time:'2일 전', votes:15, adopted:false,
      body:'추가로 수의계약 전환 시에는 긴급성 사유서를 첨부해야 합니다. 5천만원 이상은 구매위원회 승인 필요합니다.'},
   ]},
  {id:2, cat:'원가', title:'원가모드에서 단가 이력과 환율 기준을 같이 볼 수 있나요?',
   body:'원가 관련 질의 시 어떤 DB와 문서를 연결해야 하는지 궁금합니다.',
   tags:['원가모드','단가','환율'], author:'원가분석러', time:'2시간 전', votes:34, views:178, lv:2, adopted:false,
   answers:[
     {id:21, author:'VAATZ달인', role:'수석바이어', lv:3, time:'1시간 전', votes:12, adopted:false,
      body:'원가모드는 현재 단가 이력 DB 연동 중입니다. 설정 > AI 모드 > 원가 에서 VAATZ 마스터 데이터 연결을 활성화하면 가능합니다.'},
   ]},
  {id:3, cat:'5스타', title:'5스타 4→5등급 승급 시 IATF 16949가 필수인가요?',
   body:'2026년 기준으로 필수 요건인지, 기존 업체의 유예기간이 있는지 확인하고 싶습니다.',
   tags:['5스타','IATF16949','협력사'], author:'품질매니저', time:'1일 전', votes:18, views:95, lv:1, adopted:false,
   answers:[]},
  {id:4, cat:'VAATZ', title:'VAATZ 해외 발주 환율은 발주 시점과 결제 시점 중 어느 것이 기준인가요?',
   body:'글로벌 구매 모듈에서 환율 자동 적용 기준과 예외 처리 방법이 궁금합니다.',
   tags:['VAATZ','환율','해외구매'], author:'해외구매담당', time:'오늘', votes:22, views:143, lv:2, adopted:true,
   answers:[
     {id:41, author:'글로벌구매Pro', role:'책임매니저', lv:3, time:'오늘', votes:19, adopted:true,
      body:'VAATZ 글로벌 구매 모듈에서 환율은 매일 09시 기준으로 자동 갱신됩니다.\n\n발주 시점 기준이며, 결제 시점 환율 차이는 [글로벌구매 → 환율관리 → 차이 정산] 메뉴에서 처리합니다.'},
   ]},
  {id:5, cat:'일반자재', title:'MRO 반복 구매 시 경매입찰 생략 기준이 있나요?',
   body:'반복 구매 품목의 계약 활용 가능 여부와 예외 승인 조건이 궁금합니다.',
   tags:['MRO','반복구매','경매입찰'], author:'MRO담당', time:'20분 전', votes:9, views:41, lv:1, adopted:false,
   answers:[]},
  {id:6, cat:'협력사', title:'협력사 평가 결과를 입찰 참여 조건에 자동 반영할 수 있나요?',
   body:'5스타 등급과 납품 품질 이슈를 VAATZ 입찰 초대 조건에 반영하는 방법이 궁금합니다.',
   tags:['협력사','입찰초대','5스타'], author:'품질지킴이', time:'어제', votes:16, views:88, lv:1, adopted:false,
   answers:[]},
];

var qaS = { cat:'전체', view:'list', selId:null, q:'' };

function filtered(){
  return questions.filter(function(q){
    if(qaS.cat !== '전체' && q.cat !== qaS.cat) return false;
    if(qaS.q){
      var kw = qaS.q.toLowerCase();
      if(!(q.title + ' ' + q.body + ' ' + q.tags.join(' ')).toLowerCase().includes(kw)) return false;
    }
    return true;
  });
}

function qa36MiniChar(lv){
  var bodyC=['','#4A8EF0','#26A69A','#FFA726','#AB47BC','#EF5350'][lv]||'#4A8EF0';
  return '<div class="qa36-char-fig" onclick="event.stopPropagation();openComm(\'char\')" title="캐릭터 꾸미기">' +
    '<svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">' +
      '<ellipse cx="40" cy="98" rx="14" ry="2.5" fill="rgba(0,0,0,0.10)"/>' +
      '<rect x="25" y="60" width="30" height="29" rx="9" fill="' + bodyC + '"/>' +
      '<rect x="11" y="63" width="13" height="7" rx="3.5" fill="' + bodyC + '"/>' +
      '<rect x="56" y="63" width="13" height="7" rx="3.5" fill="' + bodyC + '"/>' +
      '<rect x="28" y="88" width="10" height="9" rx="4" fill="#1A48A8"/>' +
      '<rect x="42" y="88" width="10" height="9" rx="4" fill="#1A48A8"/>' +
      '<ellipse cx="33" cy="97" rx="6" ry="2.5" fill="#111"/>' +
      '<ellipse cx="47" cy="97" rx="6" ry="2.5" fill="#111"/>' +
      '<text x="40" y="77" text-anchor="middle" font-size="5" font-weight="800" fill="rgba(255,255,255,0.88)" font-family="sans-serif">VAATZ</text>' +
      '<rect x="34" y="53" width="12" height="8" rx="4" fill="#FFCC99"/>' +
      '<ellipse cx="40" cy="38" rx="20" ry="18" fill="#FFCC99"/>' +
      '<path d="M20 34 Q20 14 40 13 Q60 14 60 34 Q56 19 40 19 Q24 19 20 34Z" fill="#3A1A05"/>' +
      '<ellipse cx="30" cy="38" rx="6" ry="6.5" fill="white"/>' +
      '<ellipse cx="50" cy="38" rx="6" ry="6.5" fill="white"/>' +
      '<circle cx="31" cy="38" r="3.5" fill="#1A3A80"/>' +
      '<circle cx="51" cy="38" r="3.5" fill="#1A3A80"/>' +
      '<circle cx="32" cy="36" r="1" fill="white"/>' +
      '<circle cx="52" cy="36" r="1" fill="white"/>' +
      '<path d="M33 49 Q40 54 47 49" stroke="#C07040" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
    '</svg>' +
    '<span class="qa36-char-lv-tag lv-' + lv + '">Lv.' + lv + '</span>' +
  '</div>';
}

function renderList(ct){
  var list = filtered();
  var hot = questions.slice().sort(function(a,b){ return b.votes-a.votes; }).slice(0,3);
  var showHot = qaS.cat==='전체' && !qaS.q;
  ct.innerHTML = '<div class="qa36-wrap">' +
    '<div class="qa36-header">' +
      '<div><div class="qa36-title">💡 구매 커뮤니티 Q&A</div><div class="qa36-sub">실무 노하우를 함께 나눕니다 · 채택 답변은 AI 학습 후보로 자동 추천됩니다</div></div>' +
      '<button class="qa36-ask-btn" onclick="qa36OpenAsk()">✏️ 질문하기</button>' +
    '</div>' +
    '<div class="qa36-toolbar"><div class="qa36-search"><span style="color:var(--text-4);font-size:13px">🔍</span><input placeholder="질문·태그 검색..." value="' + esc(qaS.q) + '" oninput="qa36Search(this.value)"></div></div>' +
    '<div class="qa36-cats">' +
      cats.map(function(c){ return '<button class="qa36-cat' + (qaS.cat===c?' on':'') + '" onclick="qa36SetCat(\'' + c + '\')">' + (catIcons[c]||'') + ' ' + c + '</button>'; }).join('') +
    '</div>' +
    (showHot ?
      '<div class="qa36-hot-strip">' +
        '<div class="qa36-hot-label">🔥 HOT 글</div>' +
        hot.map(function(q, i){
          return '<div class="qa36-hot-card" onclick="qa36Select(' + q.id + ')">' +
            '<span class="qa36-hot-rank">' + (i+1) + '</span>' +
            '<div class="qa36-hot-info">' +
              '<div class="qa36-hot-title">' + esc(q.title) + '</div>' +
              '<div class="qa36-hot-meta">' + (catIcons[q.cat]||'') + ' ' + esc(q.cat) + ' · 👁 ' + (q.views||0) + ' · 답변 ' + q.answers.length + ' · <b>▲ ' + q.votes + '</b></div>' +
            '</div>' +
          '</div>';
        }).join('') +
      '</div>'
    : '') +
    '<div class="qa36-list">' +
      (list.length === 0
        ? '<div class="qa36-empty">검색 결과가 없습니다.</div>'
        : list.map(function(q){
            return '<div class="qa36-card' + (q.adopted?' adopted':'') + '" onclick="qa36Select(' + q.id + ')">' +
              '<div class="qa36-card-left">' +
                '<div class="qa36-ans-cnt' + (q.answers.length>0?' has-ans':'') + '"><span>' + q.answers.length + '</span><span>답변</span></div>' +
              '</div>' +
              '<div class="qa36-card-body">' +
                '<div class="qa36-card-title">' +
                  (q.adopted ? '<span class="qa36-badge adopted">✓ 채택</span>' : '') +
                  (q.answers.length===0 ? '<span class="qa36-badge wait">답변대기</span>' : '') +
                  esc(q.title) +
                '</div>' +
                '<div class="qa36-card-preview">' + esc(q.body.substring(0,90)) + (q.body.length>90?'...':'') + '</div>' +
                '<div class="qa36-card-meta">' +
                  '<span class="qa36-cat-tag">' + (catIcons[q.cat]||'') + ' ' + esc(q.cat) + '</span>' +
                  '<span>👤 ' + esc(q.author) + '</span>' +
                  '<span>' + q.time + '</span>' +
                  q.tags.map(function(t){ return '<span class="qa36-tag">#' + esc(t) + '</span>'; }).join('') +
                  '<span class="qa36-view-badge">👁 ' + (q.views||0) + '</span>' +
                  '<span class="qa36-vote-badge">▲ ' + q.votes + '</span>' +
                '</div>' +
              '</div>' +
            '</div>';
          }).join('')
      ) +
    '</div></div>';
}

function renderDetail(ct){
  var q = questions.find(function(x){ return x.id === qaS.selId; });
  if(!q){ qaS.view='list'; renderList(ct); return; }

  var sortedAns = q.answers.slice().sort(function(a,b){ return (b.adopted - a.adopted) || b.votes - a.votes; });

  ct.innerHTML = '<div class="qa36-wrap">' +
    '<button class="qa36-back" onclick="qa36Back()">← 목록으로</button>' +

    '<div class="qa36-q-card">' +
      '<div class="qa36-q-layout">' +
        '<div class="qa36-q-content">' +
          '<div class="qa36-q-meta">' +
            '<span class="qa36-cat-tag">' + (catIcons[q.cat]||'') + ' ' + esc(q.cat) + '</span>' +
            '<span class="qa36-q-author">👤 ' + esc(q.author) + '</span>' +
            '<span>' + q.time + '</span>' +
            q.tags.map(function(t){ return '<span class="qa36-tag">#' + esc(t) + '</span>'; }).join('') +
          '</div>' +
          '<div class="qa36-q-title">' + esc(q.title) + '</div>' +
          '<div class="qa36-q-body">' + esc(q.body) + '</div>' +
          '<div class="qa36-q-foot">' +
            '<span class="qa36-view-count">👁 조회 ' + (q.views||0) + '</span>' +
            '<button class="qa36-vote-btn" onclick="qa36VoteQ(' + q.id + ',this)">👍 추천 ' + q.votes + '</button>' +
          '</div>' +
        '</div>' +
        '<div class="qa36-char-col">' + qa36MiniChar(q.lv||1) + '</div>' +
      '</div>' +
    '</div>' +

    '<div class="qa36-ans-section">' +
      '<div class="qa36-ans-hd">답변 ' + q.answers.length + '개</div>' +
      (q.answers.length === 0
        ? '<div class="qa36-empty">아직 답변이 없습니다.<br>첫 번째 답변을 작성해보세요!</div>'
        : sortedAns.map(function(a){
            return '<div class="qa36-ans-card' + (a.adopted?' adopted':'') + '">' +
              (a.adopted ? '<div class="qa36-ans-adopted-badge">✓ 채택 답변</div>' : '') +
              '<div class="qa36-ans-layout">' +
                '<div class="qa36-ans-content">' +
                  '<div class="qa36-ans-meta">' +
                    '<div class="qa36-ans-author">' +
                      '<span class="qa36-ans-lv lv-' + a.lv + '">Lv.' + a.lv + '</span>' +
                      '<span class="qa36-ans-nm">' + esc(a.author) + '</span>' +
                      '<span class="qa36-ans-role">' + esc(a.role) + '</span>' +
                    '</div>' +
                    '<span class="qa36-ans-time">' + a.time + '</span>' +
                  '</div>' +
                  '<div class="qa36-ans-body">' + esc(a.body) + '</div>' +
                  '<div class="qa36-ans-foot">' +
                    '<button class="qa36-vote-btn" onclick="qa36VoteA(' + q.id + ',' + a.id + ',this)">👍 ' + a.votes + '</button>' +
                  '</div>' +
                '</div>' +
                '<div class="qa36-char-col">' + qa36MiniChar(a.lv) + '</div>' +
              '</div>' +
            '</div>';
          }).join('')
      ) +
    '</div>' +

    '<div class="qa36-reply-box">' +
      '<div class="qa36-reply-title">✏️ 답변 작성</div>' +
      '<textarea id="qa36ReplyText" class="qa36-reply-ta" placeholder="답변을 작성해주세요. 관련 규정, VAATZ 메뉴 경로, 실무 예시를 함께 적으면 좋습니다."></textarea>' +
      '<div class="qa36-reply-foot"><button class="qa36-submit-btn" onclick="qa36PostAnswer(' + q.id + ')">답변 등록</button></div>' +
    '</div>' +
  '</div>';
}

function renderQA(){
  var ct = document.getElementById('ct-qa');
  if(!ct) return;
  if(qaS.view === 'detail' && qaS.selId) renderDetail(ct);
  else renderList(ct);
}

/* ── Public API ── */
window.qa36Select = function(id){
  var q = questions.find(function(x){ return x.id===id; });
  if(q) q.views = (q.views||0) + 1;
  qaS.view='detail'; qaS.selId=id; renderQA();
};
window.qa36Back   = function(){ qaS.view='list'; qaS.selId=null; renderQA(); };
window.qa36SetCat = function(c){ qaS.cat=c; qaS.view='list'; qaS.selId=null; renderQA(); };
window.qa36Search = function(v){
  qaS.q = v;
  clearTimeout(window.__qa36s);
  window.__qa36s = setTimeout(function(){ if(qaS.view==='list') renderQA(); }, 130);
};
window.qa36VoteQ = function(id, btn){
  var q = questions.find(function(x){ return x.id===id; });
  if(!q) return;
  q.votes++;
  if(btn) btn.textContent = '👍 추천 ' + q.votes;
  say('추천했습니다!','👍',1200);
};
window.qa36VoteA = function(qid, aid, btn){
  var q = questions.find(function(x){ return x.id===qid; });
  if(!q) return;
  var a = q.answers.find(function(x){ return x.id===aid; });
  if(!a) return;
  a.votes++;
  if(btn) btn.textContent = '👍 ' + a.votes;
  say('추천했습니다!','👍',1200);
};
window.qa36PostAnswer = function(qid){
  var q = questions.find(function(x){ return x.id===qid; });
  var ta = document.getElementById('qa36ReplyText');
  if(!q || !ta || !ta.value.trim()){ say('답변 내용을 입력해주세요.','⚠️',1500); return; }
  q.answers.push({
    id: Date.now(), author:'프로큐어히어로', role:'책임매니저', lv:2,
    time:'방금', votes:0, adopted:false, body: ta.value.trim()
  });
  say('답변이 등록되었습니다.','✅',1800);
  renderDetail(document.getElementById('ct-qa'));
};
window.qa36OpenAsk = function(){
  if(document.getElementById('qa36AskModal')) return;
  var html = '<div class="rq-m" id="qa36AskModal" onclick="if(event.target===this)qa36CloseAsk()" style="z-index:3500">' +
    '<div class="rq-b" style="width:min(540px,96vw)">' +
      '<div class="rq-h" style="display:flex;justify-content:space-between;align-items:center">✏️ 질문 등록<button class="adm-x" onclick="qa36CloseAsk()">✕</button></div>' +
      '<div style="display:flex;flex-direction:column;gap:12px;padding:4px 0">' +
        '<div><label style="font-size:11px;font-weight:600;color:var(--text-3);display:block;margin-bottom:5px">카테고리</label>' +
          '<select id="qa36AskCat" class="frm-i" style="width:100%" onchange="var ci=document.getElementById(\'qa36CatCustom\');if(ci)ci.style.display=this.value===\'__custom__\'?\'block\':\'none\'">' +
            cats.filter(function(c){ return c!=='전체'; }).map(function(c){ return '<option value="'+c+'">'+c+'</option>'; }).join('') +
            '<option value="__custom__">✏️ 직접 입력...</option>' +
          '</select>' +
          '<input id="qa36CatCustom" class="frm-i" placeholder="카테고리 직접 입력" style="width:100%;display:none;margin-top:6px"></div>' +
        '<div><label style="font-size:11px;font-weight:600;color:var(--text-3);display:block;margin-bottom:5px">제목</label><input id="qa36AskTitle" class="frm-i" placeholder="질문을 한 줄로 요약해주세요" style="width:100%"></div>' +
        '<div><label style="font-size:11px;font-weight:600;color:var(--text-3);display:block;margin-bottom:5px">상세 내용</label><textarea id="qa36AskBody" class="frm-i" style="width:100%;min-height:100px;resize:vertical" placeholder="상황, 관련 문서, VAATZ 메뉴, 원하는 답변 형태를 적어주세요"></textarea></div>' +
        '<div><label style="font-size:11px;font-weight:600;color:var(--text-3);display:block;margin-bottom:5px">태그 (쉼표 구분)</label><input id="qa36AskTags" class="frm-i" placeholder="탄력적입찰, 수의계약" style="width:100%"></div>' +
      '</div>' +
      '<div class="frm-a" style="margin-top:14px">' +
        '<button class="btn btn-c" onclick="qa36CloseAsk()">취소</button>' +
        '<button class="btn btn-p" onclick="qa36SubmitAsk()">질문 등록</button>' +
      '</div>' +
    '</div></div>';
  document.body.insertAdjacentHTML('beforeend', html);
  document.getElementById('qa36AskModal').style.display = 'flex';
  setTimeout(function(){ document.getElementById('qa36AskTitle')?.focus(); }, 80);
};
window.qa36CloseAsk = function(){ document.getElementById('qa36AskModal')?.remove(); };
window.qa36SubmitAsk = function(){
  var catRaw = document.getElementById('qa36AskCat')?.value;
  var cat = catRaw === '__custom__' ? (document.getElementById('qa36CatCustom')?.value.trim() || '기타') : catRaw;
  var title = document.getElementById('qa36AskTitle')?.value.trim();
  var body = document.getElementById('qa36AskBody')?.value.trim();
  var tagsRaw = document.getElementById('qa36AskTags')?.value || '';
  if(!title || !body){ say('제목과 내용을 입력해주세요.','⚠️',1500); return; }
  var tags = tagsRaw ? tagsRaw.split(',').map(function(t){ return t.replace(/#/g,'').trim(); }).filter(Boolean) : [];
  questions.unshift({ id:Date.now(), cat:cat||'전체', title:title, body:body, tags:tags,
    author:'프로큐어히어로', time:'방금', votes:0, adopted:false, answers:[] });
  window.qa36CloseAsk();
  qaS.cat='전체'; qaS.view='list';
  renderQA();
  say('질문이 등록되었습니다.','✅',1800);
};

/* ── V36 Community: renderCommunityV* 통합 ── */
window.renderCommunityV29 = function(){
  var box = document.querySelector('.comm-box');
  if(box){ box.classList.add('v29-wide'); box.classList.remove('v27-wide','v26-wide'); }
  renderQA();
};
window.renderCommunityV26 = window.renderCommunityV29;
window.renderCommunityV27 = window.renderCommunityV29;

/* ── V36 Community: openComm/closeComm/commTab 완전 교체 (이전 9개 레이어 충돌 제거) ── */
/* Phase 2: React Context 상태 동기화 브릿지 추가 */
window.openComm = function(tab) {
  /* Phase 2 bridge: React communityOpen 상태 동기 */
  if(typeof window.__reactOpenComm === 'function') window.__reactOpenComm(tab || 'qa');
  var ov = document.getElementById('commOv');
  if(!ov) return;
  ov.classList.add('sh');
  var tabMap = {qa:'ct-qa', hof:'ct-hof', lv:'ct-lv', char:'ct-char', shop:'ct-shop'};
  var tabId = tabMap[tab] || 'ct-qa';
  ['ct-qa','ct-hof','ct-lv','ct-char','ct-shop'].forEach(function(t){
    var el = document.getElementById(t);
    if(el) el.style.display = (t === tabId ? 'block' : 'none');
  });
  document.querySelectorAll('.comm-tab').forEach(function(b){
    var oc = b.getAttribute('onclick') || '';
    b.classList.toggle('on', oc.indexOf(tabId) !== -1);
  });
  if(tabId === 'ct-qa') setTimeout(function(){ renderQA(); }, 20);
  else if(tabId === 'ct-char') { try{ window.setupV33CharacterPicker && window.setupV33CharacterPicker(); }catch(e){} }
  else if(tabId === 'ct-shop') { try{ window.renderV33ShopItems && window.renderV33ShopItems(); }catch(e){} }
};

window.closeComm = function() {
  /* Phase 2 bridge: React communityOpen 상태 동기 */
  if(typeof window.__reactCloseComm === 'function') window.__reactCloseComm();
  var ov = document.getElementById('commOv');
  if(ov) ov.classList.remove('sh');
};

window.commTab = function(btn, id) {
  if(btn){
    document.querySelectorAll('.comm-tab').forEach(function(b){ b.classList.remove('on'); });
    btn.classList.add('on');
  }
  ['ct-qa','ct-hof','ct-lv','ct-char','ct-shop'].forEach(function(t){
    var el = document.getElementById(t);
    if(el) el.style.display = (t === id ? 'block' : 'none');
  });
  if(id === 'ct-qa') setTimeout(function(){ renderQA(); }, 20);
  else if(id === 'ct-char') { try{ window.setupV33CharacterPicker && window.setupV33CharacterPicker(); }catch(e){} }
  else if(id === 'ct-shop') { try{ window.renderV33ShopItems && window.renderV33ShopItems(); }catch(e){} }
};

/* ─── hofTab: 명예의 전당 기간 탭 전환 ─── */
window.hofTab = function(period) {
  var now = new Date();
  var yr = now.getFullYear();
  var mo = now.getMonth() + 1;
  var weekNum = Math.ceil(now.getDate() / 7);
  var labels = {
    week:  '📅 ' + yr + '년 ' + mo + '월 ' + weekNum + '주차',
    month: '📆 ' + yr + '년 ' + mo + '월',
    year:  '🏆 ' + yr + '년 연간 랭킹'
  };
  ['week','month','year'].forEach(function(p) {
    var btn = document.getElementById('hof-tab-' + p);
    if(!btn) return;
    if(p === period) {
      btn.style.background = 'var(--accent)';
      btn.style.color = '#fff';
      btn.style.boxShadow = '0 2px 8px rgba(75,142,240,0.35)';
    } else {
      btn.style.background = 'transparent';
      btn.style.color = 'var(--text-3)';
      btn.style.boxShadow = 'none';
    }
  });
  var lbl = document.getElementById('hofPeriodLabel');
  if(lbl) lbl.textContent = labels[period] || '';
};

/* boot */
if(document.readyState === 'loading')
  document.addEventListener('DOMContentLoaded', function(){ setTimeout(renderQA, 300); });
else
  setTimeout(renderQA, 300);

})();

/* ═══════════════════════════════════════════════════════════════
 * §14  UI REFINEMENTS — home accordion, final-list actions,
 *       character level-100 system, equip toggle
 * ═══════════════════════════════════════════════════════════════ */
(function(){
'use strict';
var say=function(m,i,d){try{(window.toast||window.safeToast||console.log)(m,i,d)}catch(e){}};

/* ── 1. 운영 홈 스텝 아코디언 ────────────────────────────────── */
window.homeDetailToggle = function(todoEl, detailId){
  var detail = document.getElementById(detailId);
  if(!detail) return;
  var isOpen = detail.style.display === 'block';
  ['homeDetail1','homeDetail2','homeDetail3','homeDetail4'].forEach(function(id){
    if(id === detailId) return;
    var d = document.getElementById(id);
    if(!d) return;
    d.style.display = 'none';
    var prev = d.previousElementSibling;
    var chev = prev && prev.querySelector('.adm-todo-chevron');
    if(chev) chev.style.transform = '';
  });
  var chevron = todoEl.querySelector('.adm-todo-chevron');
  if(isOpen){
    detail.style.display = 'none';
    if(chevron) chevron.style.transform = '';
  } else {
    detail.style.display = 'block';
    if(chevron) chevron.style.transform = 'rotate(180deg)';
  }
};

/* ── 2. 최종 리스트 이전 단계 / 삭제 ─────────────────────────── */
window.revertFinalDoc = function(btn){
  var row = btn.closest('.final-doc-row');
  var name = row && row.querySelector('.final-doc-name');
  say((name?name.textContent:'문서')+'이(가) 팀 검토 단계로 반려되었습니다.','↩️',2500);
  if(row){ row.style.opacity='0.4'; row.style.pointerEvents='none'; }
};

window.deleteFinalDoc = function(btn){
  var row = btn.closest('.final-doc-row');
  var name = row && row.querySelector('.final-doc-name');
  if(!confirm((name?name.textContent:'이 문서')+'을(를) 삭제하시겠습니까?')) return;
  if(row) row.remove();
  say('문서가 삭제되었습니다.','🗑',2000);
};

window.listDeleteDoc = function(btn){
  var card = btn.closest('.req-card');
  var name = card && card.querySelector('.req-title');
  if(!confirm((name?name.textContent:'이 문서')+'을(를) 삭제하시겠습니까?')) return;
  if(card) card.remove();
  say('문서가 삭제되었습니다.','🗑',2000);
};

window.listRevertDoc = function(btn){
  var card = btn.closest('.req-card');
  var name = card && card.querySelector('.req-title');
  say((name?name.textContent:'문서')+'이(가) 검토 단계로 반려되었습니다.','↩️',2500);
  if(card){
    card.classList.remove('done');
    var badge = card.querySelector('.bd-g');
    if(badge) badge.remove();
    var acts = card.querySelector('.req-acts');
    if(acts) acts.innerHTML = '<button class="abtn ok" onclick="appReq(this)">승인</button><button class="abtn" style="color:var(--a)" onclick="rejReq(this)">보완 요청</button><button class="abtn no" onclick="listDeleteDoc(this)">🗑 삭제</button>';
  }
};

/* ── 3. 캐릭터 레벨 100 시스템 ──────────────────────────────── */
var CHAR_LEVELS = [
  {min:100,title:'VAATZ 챔피언'},{min:90,title:'구매 신화'},{min:80,title:'구매 레전드'},
  {min:70,title:'구매 그랜드마스터'},{min:60,title:'구매 리더'},{min:50,title:'구매 에이스'},
  {min:40,title:'구매 전문가'},{min:30,title:'구매 마스터'},{min:20,title:'구매 전략가'},
  {min:10,title:'구매 탐험가'},{min:1,title:'구매 신입'}
];

function calcLevel(xp){
  var lvl = Math.min(100, Math.floor(Math.sqrt(Math.max(0,xp)/10))+1);
  var title = '구매 신입';
  for(var i=0;i<CHAR_LEVELS.length;i++){
    if(lvl>=CHAR_LEVELS[i].min){title=CHAR_LEVELS[i].title;break;}
  }
  var next=Math.pow(lvl,2)*10, prev=Math.pow(Math.max(0,lvl-1),2)*10;
  var pct=lvl>=100?100:Math.round((xp-prev)/(next-prev)*100);
  return {level:lvl,title:title,pct:Math.max(0,Math.min(100,pct)),xp:xp,toNext:lvl<100?next-xp:0};
}

function applyLevelBadge(){
  var lvDiv = document.querySelector('#charRoom .v33-char-lv');
  if(!lvDiv) return;
  var info = calcLevel(1720);
  lvDiv.innerHTML=
    '<div style="display:flex;align-items:center;gap:6px;justify-content:center;margin-top:4px">'+
      '<span style="background:var(--accent);color:#fff;font-size:10px;font-weight:900;padding:2px 8px;border-radius:999px;font-family:Outfit,sans-serif">Lv.'+info.level+'</span>'+
      '<span style="font-size:11px;color:var(--text-2);font-weight:700">'+info.title+'</span>'+
    '</div>'+
    '<div style="margin:6px auto 0;width:140px;height:5px;background:var(--bg-4);border-radius:999px;overflow:hidden">'+
      '<div style="width:'+info.pct+'%;height:100%;background:var(--accent);border-radius:999px;transition:.4s"></div>'+
    '</div>'+
    '<div style="font-size:10px;color:var(--text-4);margin-top:3px;text-align:center">'+
      info.xp+'pt · '+(info.level<100?'다음 레벨까지 '+info.toNext+'pt':'MAX 달성!')+
    '</div>';
}

function setupLevelObserver(){
  if(window.__s14LvObs) return;
  var charRoom = document.getElementById('charRoom');
  if(!charRoom) return;
  window.__s14LvObs = true;
  applyLevelBadge();
  new MutationObserver(function(){ applyLevelBadge(); }).observe(charRoom, {childList:true});
}

/* ── 4. 캐릭터 아이템 탈착(unequip) ────────────────────────── */
function setupUnequip(){
  if(window.__s14Uneq) return;
  window.__s14Uneq = true;
  var HATS=['🎩','👑','🎀','🎓','⛑️','🏆','🪖','👒','🎅','✨'];
  var PETS=['🐱','🐶','🐦','🐉','🦄','🦋','🐢','🤖','👾','🐲'];
  var EFFECTS=['⭐','💫','🔥','❄️','🎵','💎','🌟','⚡','🌈','🎇','☄️','🌠'];
  document.addEventListener('click',function(e){
    var slot=e.target.closest('.inv-slot');
    if(!slot||slot.classList.contains('empty')) return;
    if(!slot.closest('#ct-char')) return;
    if(!slot.classList.contains('equipped')) return;
    slot.classList.remove('equipped');
    var emojiEl=slot.querySelector('span,.inv-slot-ic');
    var emoji=(emojiEl?emojiEl.textContent:slot.textContent).trim().split('\n')[0].trim();
    var cr=document.getElementById('charRoom');
    if(cr){
      if(HATS.includes(emoji)) cr.querySelectorAll('.v33-char-hat').forEach(function(el){el.remove();});
      else if(PETS.includes(emoji)) cr.querySelectorAll('.v33-char-side').forEach(function(el){el.remove();});
      else if(EFFECTS.includes(emoji)) cr.querySelectorAll('.v33-char-effect').forEach(function(el){el.remove();});
    }
    say(emoji+' 탈착했습니다.','✓',1200);
    e.stopPropagation();
  },true);
}

/* ── 5. 스타일 정돈 ─────────────────────────────────────────── */
if(!document.getElementById('s14-style')){
  var st=document.createElement('style');
  st.id='s14-style';
  st.textContent=[
    '.src-chips{display:flex;flex-wrap:wrap;gap:6px;padding:10px 14px!important;border-bottom:1px solid var(--border-1)}',
    '.src-chip{border-radius:999px!important;padding:5px 11px!important;font-size:12px!important;font-weight:700!important;display:inline-flex;align-items:center;gap:5px}',
    '.src-vw{padding:12px 14px!important}',
    '.src-page{border-radius:12px!important;padding:22px 24px 18px!important;font-size:13.5px!important;line-height:1.85!important}',
    '.src-page-ti{font-size:17px!important;font-weight:800!important;margin-bottom:8px!important}',
    '.src-pgnav{background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px!important;padding:7px 10px!important;margin-bottom:10px}',
    '.src-doc-meta{background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px!important;padding:10px 12px!important;margin-bottom:10px}',
    'mark,.src-hi,.src-mark{background:rgba(255,220,80,.22)!important;border-radius:3px!important;padding:0 2px!important}',
    '.adm-todo-chevron{display:inline-block;transition:transform .2s}',
    '.adm-todo-detail{animation:s14FadeIn .18s ease}',
    '@keyframes s14FadeIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}',
  ].join('\n');
  document.head.appendChild(st);
}

/* Boot */
function boot14(){
  setupLevelObserver();
  setupUnequip();
  if(window.commTab && !window.__s14CommWrapped){
    window.__s14CommWrapped = true;
    var _oc = window.commTab;
    window.commTab = function(btn,id){
      _oc.apply(this,arguments);
      if(id==='ct-char') setTimeout(function(){ setupLevelObserver(); applyLevelBadge(); },150);
    };
  }
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot14);
else setTimeout(boot14,0);

})();

/* ═══════════════════════════════════════════════════════════════
 * §15  WEB SEARCH — webOn 활성화 시 실시간 검색 결과 삽입
 * ═══════════════════════════════════════════════════════════════ */
(function(){
'use strict';

var RESULTS = {
  bid: [
    {title:'탄력입찰·경매입찰 비교 가이드 2025',url:'g2b.go.kr/bid-guide',date:'2025.11',
     snip:'탄력입찰은 기준가 ±15% 조정 가능, 경매입찰은 최저가 경쟁 방식. VAATZ에서는 요청 등록 시 방식을 선택합니다.'},
    {title:'공공조달 입찰 표준 절차서',url:'procurement.go.kr/std',date:'2025.09',
     snip:'입찰 공고→접수→개찰→낙찰→계약 순으로 진행. 전자입찰 기준 평균 처리 시간 24시간 이내.'},
    {title:'입찰 운영 업무표준 STD-PUR-012',url:'vaatz.co.kr/std-pur-012',date:'2025.10',
     snip:'VAATZ 내 입찰 모듈: 벤더 자동 초청 → 조건 평가 → 방식별 점수 산출 → 최종 낙찰 결정.'}
  ],
  contract: [
    {title:'계약 표준 조항 해설집 2025',url:'moef.go.kr/contract-guide',date:'2025.08',
     snip:'표준계약 필수 조항: 납품 일정, 품질보증, 하자책임 기간(12개월 기본), 계약 해지 조건.'},
    {title:'공급업체 등급 평가 운영 지침',url:'vaatz.co.kr/vendor-eval',date:'2025.12',
     snip:'A등급 기준: 품질 90점 이상, 납기 준수율 95% 이상, 3회 이상 정상 납품 이력 필요.'},
    {title:'하도급 거래 공정화 지침',url:'ftc.go.kr/subcontract',date:'2025.07',
     snip:'하도급 대금 지급 기한 60일, 부당 단가 인하 금지, 기술 자료 보호 의무 안내.'}
  ],
  default: [
    {title:'구매업무 표준 프로세스 가이드 2026',url:'vaatz.co.kr/process-guide',date:'2026.01',
     snip:'구매 요청→승인→발주→검수→대금 지급까지 전 과정을 단계별로 정리한 표준 가이드입니다.'},
    {title:'VAATZ AI 활용 구매 효율화 사례집',url:'vaatz.co.kr/ai-cases',date:'2026.02',
     snip:'RAG 엔진 기반 벤더 비교 분석, 계약 조항 자동 검토, 가격 트렌드 분석 적용 사례.'},
    {title:'공정거래위원회 하도급 거래 가이드라인',url:'ftc.go.kr/subcontract',date:'2025.07',
     snip:'하도급 대금 지급 기한 60일, 부당 단가 인하 금지, 기술 자료 보호 의무 규정 안내.'}
  ]
};

function pickResults(q){
  q=(q||'').toLowerCase();
  if(/입찰|경매|경쟁|탄력|낙찰/.test(q)) return RESULTS.bid;
  if(/계약|납품|공급|벤더|업체/.test(q)) return RESULTS.contract;
  return RESULTS.default;
}

function buildCard(q, items){
  var rows=items.map(function(r,i){
    return '<div style="padding:9px 0;'+(i<items.length-1?'border-bottom:1px solid var(--border-1)':'')+'">'+
      '<div style="font-size:9px;color:var(--text-4);margin-bottom:3px">'+r.url+' · '+r.date+'</div>'+
      '<div style="font-size:12.5px;font-weight:700;color:var(--accent);line-height:1.4;margin-bottom:3px">'+r.title+'</div>'+
      '<div style="font-size:11.5px;color:var(--text-3);line-height:1.6">'+r.snip+'</div>'+
    '</div>';
  }).join('');
  return '<div class="ws-card" style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:12px;padding:12px 14px;margin-bottom:12px">'+
    '<div style="display:flex;align-items:center;gap:7px;margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--border-1)">'+
      '<span style="font-size:14px">🌐</span>'+
      '<span style="font-size:12px;font-weight:800;color:var(--text-1)">웹 검색 결과</span>'+
      '<span style="font-size:10px;font-weight:600;color:var(--accent);background:var(--accent-dim);padding:1px 8px;border-radius:999px;margin-left:auto">'+items.length+'개 출처</span>'+
    '</div>'+rows+'</div>';
}

function injectCard(query){
  var chatArea=document.querySelector('#v-ch .cc');
  if(!chatArea) return;
  var done=false;
  var obs=new MutationObserver(function(){
    if(done) return;
    var txEls=document.querySelectorAll('.msg-a .ai-tx');
    if(!txEls.length) return;
    var lastTx=txEls[txEls.length-1];
    var ab=lastTx&&lastTx.parentElement;
    if(ab&&!ab.querySelector('.ws-card')){
      done=true;
      var card=document.createElement('div');
      card.innerHTML=buildCard(query,pickResults(query));
      ab.insertBefore(card.firstElementChild,lastTx);
      obs.disconnect();
    }
  });
  obs.observe(chatArea,{childList:true,subtree:true});
  setTimeout(function(){obs.disconnect();},8000);
}

if(!window.__s15Web){
  window.__s15Web=true;
  var ta=document.querySelector('.ir textarea');
  var sb=document.querySelector('.sd');
  function onSend(){
    if(!window.webOn) return;
    var q=ta?ta.value.trim():'';
    if(q) injectCard(q);
  }
  if(ta) ta.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey)onSend();},true);
  if(sb) sb.addEventListener('click',onSend,true);
}

})();

/* ─── 팀별 목록 flat-list UI ────────────────────────────────── */
(function(){
if(document.getElementById('list-flat-style')) return;
var s=document.createElement('style'); s.id='list-flat-style';
s.textContent=[
  '.list-team-label{display:flex;align-items:center;font-size:11px;font-weight:700;color:var(--text-2);padding:10px 0 5px;border-top:1px solid var(--border-1);margin-top:2px}',
  '.list-team-label:first-child{border-top:none;margin-top:0;padding-top:0}',
  '.list-doc-row{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:8px;background:var(--bg-2);border:1px solid var(--border-1);margin-bottom:5px}',
  '.list-doc-row.done{opacity:.75;background:var(--bg-3)}',
  '.list-doc-main{flex:1;min-width:0}',
  '.list-doc-title{font-size:12.5px;font-weight:600;color:var(--text-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
  '.list-doc-meta{font-size:10px;color:var(--text-4);margin-top:2px}',
  '.list-doc-acts{display:flex;align-items:center;gap:4px;flex-shrink:0}',
  '.list-doc-acts .abtn{padding:3px 8px;font-size:10px}',
].join('\n');
document.head.appendChild(s);

window.listSetTeam = function(btn, team){
  document.querySelectorAll('#listTeamTabs .v25-chip').forEach(function(b){ b.classList.remove('on'); });
  btn.classList.add('on');
  var labels = document.querySelectorAll('#listDocArea .list-team-label');
  var rows = document.querySelectorAll('#listDocArea .list-doc-row');
  labels.forEach(function(el){
    el.style.display = (team==='전체'||el.dataset.team===team) ? '' : 'none';
  });
  rows.forEach(function(el){
    el.style.display = (team==='전체'||el.dataset.team===team) ? '' : 'none';
  });
};
window.listFilterAll = function(){
  document.querySelectorAll('#listDocArea .list-doc-row').forEach(function(r){ r.style.display=''; });
  document.querySelectorAll('#listDocArea .list-team-label').forEach(function(l){ l.style.display=''; });
};
window.listFilterPending = function(){
  document.querySelectorAll('#listDocArea .list-doc-row').forEach(function(r){
    r.style.display = r.classList.contains('done') ? 'none' : '';
  });
  document.querySelectorAll('#listDocArea .list-team-label').forEach(function(l){ l.style.display=''; });
};
})();

/* ═══════════════════════════════════════════════════════════════
 * §16  COMMUNITY ENHANCE + 자동차 레벨 테마
 *       HOT 실시간랭킹 · 카테고리 심플 · 채택 명예 · Lv.100 자동차
 * ═══════════════════════════════════════════════════════════════ */
(function(){
'use strict';

/* ── 1. 자동차 레벨 타이틀 (Lv.1~100) ───────────────────────── */
var AUTO_LV = [
  {min:100,title:'⚡ VAATZ 챔피언',       col:'#E8A000'},
  {min:95, title:'🏎️ F1 구매 파일럿',     col:'#FF6B35'},
  {min:90, title:'🚗 원가혁신 아이콘',     col:'#E74C3C'},
  {min:85, title:'🏭 공급망 아키텍트',     col:'#9B59B6'},
  {min:80, title:'🌐 글로벌 수석바이어',   col:'#8E44AD'},
  {min:75, title:'🔧 기술구매 전문가',     col:'#2980B9'},
  {min:70, title:'🤝 협력사 총지휘관',     col:'#1ABC9C'},
  {min:65, title:'📊 입찰 전략가',         col:'#27AE60'},
  {min:60, title:'🚀 구매 에이스',         col:'#2ECC71'},
  {min:55, title:'⚙️ 선임 바이어',         col:'#3498DB'},
  {min:50, title:'🔩 공급망 수호자',       col:'#16A085'},
  {min:45, title:'📦 부품 스페셜리스트',   col:'#138D75'},
  {min:40, title:'🏷️ 단가 분석가',        col:'#E67E22'},
  {min:35, title:'🔍 협력사 탐정',         col:'#D35400'},
  {min:30, title:'📋 계약 매니저',         col:'#7F8C8D'},
  {min:25, title:'🚙 주임 바이어',         col:'#6C757D'},
  {min:20, title:'🔑 구매 어시스턴트',     col:'#95A5A6'},
  {min:15, title:'📝 신입 바이어',         col:'#ABB4BD'},
  {min:10, title:'🔧 부품 탐험가',         col:'#BDC3C7'},
  {min:5,  title:'🌱 구매 새싹',           col:'#CED4DA'},
  {min:1,  title:'🐣 견습 바이어',         col:'#D8DEE4'},
];

function getAutoLvInfo(xp){
  var lvl=Math.min(100,Math.floor(Math.sqrt(Math.max(0,xp)/10))+1);
  var found=AUTO_LV[AUTO_LV.length-1];
  for(var i=0;i<AUTO_LV.length;i++){ if(lvl>=AUTO_LV[i].min){found=AUTO_LV[i];break;} }
  var next=Math.pow(lvl,2)*10, prev=Math.pow(Math.max(0,lvl-1),2)*10;
  var pct=lvl>=100?100:Math.round((xp-prev)/(next-prev)*100);
  return {lvl:lvl,title:found.title,col:found.col,pct:Math.max(0,Math.min(100,pct)),xp:xp,toNext:lvl<100?next-xp:0};
}

function applyAutoLvBadge(){
  var lv=document.querySelector('#charRoom .v33-char-lv');
  if(!lv) return;
  var i=getAutoLvInfo(1720);
  lv.innerHTML=
    '<div style="display:flex;align-items:center;gap:6px;justify-content:center;margin-top:4px">'+
      '<span style="background:'+i.col+';color:#fff;font-size:10px;font-weight:900;padding:2px 10px;border-radius:999px;letter-spacing:.3px">Lv.'+i.lvl+'</span>'+
      '<span style="font-size:11.5px;color:var(--text-1);font-weight:800">'+i.title+'</span>'+
    '</div>'+
    '<div style="margin:7px auto 0;width:150px;height:6px;background:var(--bg-4);border-radius:999px;overflow:hidden">'+
      '<div style="width:'+i.pct+'%;height:100%;background:'+i.col+';border-radius:999px;transition:.6s ease"></div>'+
    '</div>'+
    '<div style="font-size:10px;color:var(--text-4);margin-top:4px;text-align:center">'+
      i.xp+'pt · '+(i.lvl<100?'다음 레벨까지 '+i.toNext+'pt':'🏆 MAX 달성!')+
    '</div>';
}

(function watchChar(){
  var cr=document.getElementById('charRoom');
  if(!cr){setTimeout(watchChar,500);return;}
  new MutationObserver(function(){setTimeout(applyAutoLvBadge,8);}).observe(cr,{childList:true});
  setTimeout(applyAutoLvBadge,120);
})();


/* ── 2. 스타일 ──────────────────────────────────────────────── */
if(!document.getElementById('s16-style')){
  var st=document.createElement('style');
  st.id='s16-style';
  st.textContent=[
    '.s16-live{font-size:8px;font-weight:800;color:#fff;background:#E74C3C;padding:2px 7px;border-radius:999px;animation:s16pulse 1.4s infinite}',
    '@keyframes s16pulse{0%,100%{opacity:1}50%{opacity:.45}}',
    '.s16-hot-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}',
    '.s16-hot-title{display:flex;align-items:center;gap:7px;font-size:13px;font-weight:900;color:var(--text-1)}',
    '.s16-hot-time{font-size:9px;color:var(--text-4)}',
    '.s16-h1{background:linear-gradient(135deg,#FFFAE6,#FFF8DC)!important;border:2px solid #FFD700!important;border-radius:14px!important;padding:14px!important;transition:transform .15s}',
    '.s16-h1:hover{transform:translateY(-2px)}',
    '.s16-h2{background:linear-gradient(135deg,#F8F9FA,#ECECEC)!important;border:2px solid #C0C0C0!important;border-radius:10px!important;padding:10px 12px!important}',
    '.s16-h3{background:linear-gradient(135deg,#FFF5EC,#FFE4CC)!important;border:2px solid #CD7F32!important;border-radius:10px!important;padding:10px 12px!important}',
    '.s16-trend{font-size:9px;font-weight:700;padding:2px 7px;border-radius:999px;display:inline-block;margin-right:5px;vertical-align:middle}',
    '.qa36-cat[data-s16h]{display:none!important}',
    '.s16-honor-banner{background:linear-gradient(90deg,#FFD700,#FFA500);color:#7A3B00;font-size:11px;font-weight:800;padding:8px 14px;border-radius:10px;margin-bottom:10px;display:flex;align-items:center;gap:7px}',
    '.s16-honor-badge{font-size:9px;font-weight:700;background:#FFD700;color:#7A3B00;padding:1px 8px;border-radius:999px;margin-left:5px;vertical-align:middle}',
    '.qa36-ans-card.adopted{border:2px solid #FFD700!important;background:linear-gradient(180deg,#FFFAE6 0%,var(--bg-2) 60%)!important}',
  ].join('\n');
  document.head.appendChild(st);
}


/* ── 3. Q&A 커뮤니티 향상 ───────────────────────────────────── */
var KEEP_CATS=['전체','입찰','계약','VAATZ','협력사'];
var MEDALS=['🥇','🥈','🥉'];
var TRENDS=['⚡ 급상승','🔥 HOT','✨ 주목'];
var TCOL=['#FFD700','#E74C3C','#CD7F32'];
var TTXT=['#7A3B00','#fff','#fff'];

function enhanceQA(ct){
  if(!ct) return;
  simplifyCats(ct);
  hotRanking(ct);
  honorAdopted(ct);
}

function simplifyCats(ct){
  ct.querySelectorAll('.qa36-cat').forEach(function(btn){
    var m=(btn.getAttribute('onclick')||'').match(/qa36SetCat\('([^']+)'\)/);
    var cat=m?m[1]:'';
    if(!KEEP_CATS.includes(cat)) btn.dataset.s16h='1';
  });
}

function hotRanking(ct){
  var strip=ct.querySelector('.qa36-hot-strip');
  if(!strip||strip.dataset.s16r) return;
  strip.dataset.s16r='1';
  var label=strip.querySelector('.qa36-hot-label');
  if(label){
    var now=new Date();
    label.outerHTML='<div class="s16-hot-hd">'+
      '<div class="s16-hot-title"><span style="font-size:16px">🔥</span><span>HOT 실시간 순위</span><span class="s16-live">LIVE</span></div>'+
      '<span class="s16-hot-time">'+now.getHours()+'시 '+now.getMinutes()+'분 기준</span>'+
    '</div>';
  }
  strip.querySelectorAll('.qa36-hot-card').forEach(function(card,i){
    var cls=['s16-h1','s16-h2','s16-h3'][i]||'s16-h3';
    card.classList.add(cls);
    var rank=card.querySelector('.qa36-hot-rank');
    if(rank){ rank.style.cssText='font-size:'+(i===0?'24px':'18px')+';line-height:1;background:none;border:none;min-width:auto;padding:0;margin-right:10px;flex-shrink:0'; rank.textContent=MEDALS[i]||(i+1); }
    var meta=card.querySelector('.qa36-hot-meta');
    if(meta&&!meta.querySelector('.s16-trend')){
      var sp=document.createElement('span');
      sp.className='s16-trend'; sp.style.background=TCOL[i]; sp.style.color=TTXT[i]; sp.textContent=TRENDS[i]||'✨ 주목';
      meta.insertBefore(sp,meta.firstChild);
    }
  });
}

function honorAdopted(ct){
  ct.querySelectorAll('.qa36-ans-card.adopted').forEach(function(card){
    if(card.dataset.s16h) return;
    card.dataset.s16h='1';
    var badge=card.querySelector('.qa36-ans-adopted-badge');
    if(badge){ badge.className='s16-honor-banner'; badge.innerHTML='<span style="font-size:16px">🏆</span><span>채택 명예 답변 · 작성자에게 <b>+30pt</b> 지급 완료</span>'; }
    var nm=card.querySelector('.qa36-ans-nm');
    if(nm&&!nm.parentElement.querySelector('.s16-honor-badge')){
      var hb=document.createElement('span'); hb.className='s16-honor-badge'; hb.textContent='🏅 채택 답변자'; nm.after(hb);
    }
  });
}

(function watchQA(){
  var ct=document.getElementById('ct-qa');
  if(!ct){setTimeout(watchQA,500);return;}
  enhanceQA(ct);
  new MutationObserver(function(){enhanceQA(ct);}).observe(ct,{childList:true});
})();

})();

/* ═══════════════════════════════════════════════════════════════
 * §17  싸이월드 감성 미니룸 — 인벤토리 카테고리 탭 + 소품 배치
 * ═══════════════════════════════════════════════════════════════ */
(function(){
'use strict';

/* ── 스타일 ─────────────────────────────────────────────────── */
if(!document.getElementById('s17-style')){
  var st=document.createElement('style');
  st.id='s17-style';
  st.textContent=[
    /* 인벤토리 슬롯 크기 */
    '#ct-char .inv-slot{width:100%;aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:20px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:7px;cursor:pointer;transition:.12s;user-select:none}',
    '#ct-char .inv-slot:hover{border-color:var(--accent);background:var(--accent-dim);transform:scale(1.08)}',
    '#ct-char .inv-slot.equipped{border-color:var(--accent)!important;background:var(--accent-dim)!important;box-shadow:0 0 0 2px var(--accent-bd)}',
    '#ct-char .inv-slot.empty{background:var(--bg-4)!important;border-style:dashed!important;cursor:default;pointer-events:none}',
    '#ct-char .inv-slot[data-hidden]{display:none!important}',
    /* 카테고리 탭 활성 스타일 (JS 토글용) */
    '#ct-char .v17-cat.on{background:var(--accent)!important;color:#fff!important;border-color:var(--accent)!important}',
    /* 미니룸 소품 버튼 활성 */
    '.room-deco-btn.on{border-color:var(--accent)!important;background:var(--accent-dim)!important}',
    '.room-deco-btn:hover{border-color:var(--accent);transform:scale(1.1)}',
    /* v33 char stage 보정 */
    '#charRoom.v33-char-stage .v33-char-bg{position:absolute;inset:0}',
    '#charRoom.v33-char-stage .v33-char-fg{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:14px}',
    '#charRoom.v33-char-stage .v33-char-figure{position:relative;display:inline-flex;align-items:flex-end;justify-content:center}',
    '#charRoom.v33-char-stage .v33-char-main{font-size:56px;line-height:1;animation:charFloat 3s ease-in-out infinite;display:block}',
    '#charRoom.v33-char-stage .v33-char-hat{position:absolute;top:-22px;left:50%;transform:translateX(-50%);font-size:26px;line-height:1;z-index:2}',
    '#charRoom.v33-char-stage .v33-char-side{position:absolute;bottom:4px;right:-28px;font-size:22px;animation:charFloat 2.8s ease-in-out infinite .4s}',
    '#charRoom.v33-char-stage .v33-char-effect{position:absolute;top:-10px;left:-14px;font-size:16px;animation:effectFloat 3s ease-in-out infinite;z-index:3}',
    '#charRoom.v33-char-stage .v33-char-nick{font-size:12px;font-weight:700;color:#fff;text-shadow:0 1px 6px rgba(0,0,0,.7);margin-top:6px;position:relative;z-index:2}',
    '#charRoom.v33-char-stage .v33-char-lv{font-size:9px;color:rgba(255,255,255,.75);margin-top:2px;position:relative;z-index:2}',
    /* bg emoji 위치 */
    '#charRoom.v33-char-stage .v33-bg-emoji{position:absolute;bottom:8px;right:10px;font-size:36px;opacity:.25;z-index:0}',
    /* 미니룸 데코 오버레이 */
    '#s17-deco-layer{position:absolute;inset:0;pointer-events:none;z-index:1}',
    '.s17-deco-item{position:absolute;font-size:22px;opacity:.65;pointer-events:none;animation:effectFloat 4s ease-in-out infinite}',
  ].join('\n');
  document.head.appendChild(st);
}

/* ── 인벤토리 카테고리 필터 ─────────────────────────────────── */
window.v17Cat=function(btn, cat){
  document.querySelectorAll('#invCatTabs .v17-cat').forEach(function(b){
    b.classList.remove('on');
    b.style.background='transparent'; b.style.color='var(--text-3)'; b.style.borderColor='var(--border-2)';
  });
  btn.classList.add('on');
  btn.style.background='var(--accent)'; btn.style.color='#fff'; btn.style.borderColor='var(--accent)';
  document.querySelectorAll('#invGrid .inv-slot').forEach(function(slot){
    if(slot.classList.contains('empty')){ slot.removeAttribute('data-hidden'); return; }
    if(cat==='all') slot.removeAttribute('data-hidden');
    else if(slot.dataset.cat===cat) slot.removeAttribute('data-hidden');
    else slot.dataset.hidden='1';
  });
};

/* ── 미니룸 소품 배치 ───────────────────────────────────────── */
var DECO_POSITIONS=[
  {left:'6px',bottom:'8px'},{left:'30px',bottom:'6px'},{right:'30px',bottom:'8px'},
  {right:'6px',bottom:'6px'},{left:'14px',top:'12px'},{right:'14px',top:'12px'},
  {left:'50%',bottom:'4px',transform:'translateX(-50%)'},{left:'20px',top:'30px'},
  {right:'20px',top:'30px'},{left:'44px',bottom:'10px'}
];
var v17DecoState=[];

window.v17PlaceDeco=function(btn, emoji){
  var cr=document.getElementById('charRoom');
  if(!cr) return;
  var layer=cr.querySelector('#s17-deco-layer');
  if(!layer){ layer=document.createElement('div'); layer.id='s17-deco-layer'; cr.appendChild(layer); }

  // toggle: already placed → remove
  var existing=Array.from(layer.children).find(function(el){ return el.dataset.emoji===emoji; });
  if(existing){ existing.remove(); btn.classList.remove('on'); v17DecoState=v17DecoState.filter(function(e){ return e!==emoji; }); return; }

  var idx=v17DecoState.length % DECO_POSITIONS.length;
  var pos=DECO_POSITIONS[idx];
  var el=document.createElement('span');
  el.className='s17-deco-item'; el.dataset.emoji=emoji; el.textContent=emoji;
  Object.keys(pos).forEach(function(k){ el.style[k]=pos[k]; });
  el.style.animationDelay=(idx*0.3)+'s';
  layer.appendChild(el);
  btn.classList.add('on');
  v17DecoState.push(emoji);
};

window.v17ClearDeco=function(){
  var cr=document.getElementById('charRoom');
  if(!cr) return;
  var layer=cr.querySelector('#s17-deco-layer');
  if(layer) layer.innerHTML='';
  document.querySelectorAll('.room-deco-btn').forEach(function(b){ b.classList.remove('on'); });
  v17DecoState=[];
};

/* ── patchInventory 업그레이드: §13의 덮어쓰기를 막기 위해 ───── */
// §13 patchInventory()가 먼저 실행되므로 우리는 MutationObserver로 ct-char 열릴 때 재구성
(function watchCharTab(){
  var ctChar=document.getElementById('ct-char');
  if(!ctChar){ setTimeout(watchCharTab, 400); return; }
  var prevDisplay='none';
  new MutationObserver(function(){
    var cur=ctChar.style.display||'';
    if(cur!=='none' && prevDisplay==='none'){
      // 탭이 열렸다 → inv-slot에 data-cat 보존 확인
      ensureInvCats();
    }
    prevDisplay=cur;
  }).observe(ctChar, {attributes:true, attributeFilter:['style']});
})();

function ensureInvCats(){
  // §13 patchInventory가 data-cat 없이 슬롯을 재생성했을 수 있음
  var grid=document.getElementById('invGrid');
  if(!grid) return;
  var CAT_MAP={
    '🎩':'hat','👑':'hat','🎓':'hat','⛑️':'hat','🪖':'hat','👒':'hat','🎀':'hat','🎅':'hat','✨':'hat',
    '🐱':'pet','🐉':'pet','🐶':'pet','🤖':'pet','🦄':'pet','🐦':'pet','🐢':'pet','👾':'pet','🦋':'pet',
    '⭐':'fx','🔥':'fx','💎':'fx','⚡':'fx','🌈':'fx','💫':'fx','🌟':'fx','🎇':'fx','☄️':'fx','🌠':'fx',
    'bg-ocean':'bg','bg-cherry':'bg','bg-city':'bg','bg-office':'bg','bg-factory':'bg',
    'bg-beach':'bg','bg-night':'bg','bg-mountain':'bg','bg-galaxy':'bg',
    '🌊':'bg','🌸':'bg','🏢':'bg','🏭':'bg','🌃':'bg','🏔️':'bg','🏖️':'bg','🌌':'bg',
  };
  grid.querySelectorAll('.inv-slot:not(.empty)').forEach(function(slot){
    if(!slot.dataset.cat){
      var key=(slot.dataset.itemKey||slot.textContent.trim());
      slot.dataset.cat=CAT_MAP[key]||'other';
    }
  });
}

})();
