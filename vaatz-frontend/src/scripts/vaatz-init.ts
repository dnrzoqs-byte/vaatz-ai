/* eslint-disable */
// @ts-nocheck
export function initVaatz() {
// ═══════════════════════════════════════════
// VAATZ AI v11 — Stabilized Prototype Script
// ═══════════════════════════════════════════

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

// ─── Navigation ───
let currentView='ch';
function sv(v){
  currentView=v;
  document.getElementById('v-wl').style.display=v==='wl'?'block':'none';
  document.getElementById('v-ch').style.display=v==='ch'?'block':'none';
  document.querySelectorAll('.pfb').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.pfb')[v==='wl'?0:1].classList.add('on');
  // Update sidebar
  document.querySelectorAll('.sb-nav .sb-i').forEach(x=>x.classList.remove('on'));
  document.querySelector('.sb-nav .sb-i').classList.add('on');
}

function oa(){document.getElementById('ao').classList.add('sh');document.body.style.overflow='hidden'}
function ca(){document.getElementById('ao').classList.remove('sh');document.body.style.overflow=''}
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
  if(cs) cs.scrollTop=cs.scrollHeight;
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

// ─── History item click ───
const chatConversations = {
  '탄력적입찰 vs 경매입찰': {
    user: '탄력적입찰과 경매입찰의 차이점을 알려주세요. VAATZ에서 어떻게 진행하나요?',
    existing: true
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
function reqOpen(){document.getElementById('rqM').classList.add('sh')}
function reqClose(){document.getElementById('rqM').classList.remove('sh');document.getElementById('reqFileList').innerHTML=''}
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
  document.getElementById('dbOv').classList.add('sh');
  switchDBTab(null,tab);
  const si=document.getElementById('dbSearchInput');
  if(si){si.value='';si.focus()}
}
function closeDB(){document.getElementById('dbOv').classList.remove('sh')}
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
function openMypage(){document.getElementById('mpOv').classList.add('sh');document.body.style.overflow='hidden'}
function closeMypage(){document.getElementById('mpOv').classList.remove('sh');document.body.style.overflow=''}
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


<!-- ═══ COMMUNITY ═══ -->
<div class="comm-ov" id="commOv" onclick="if(event.target===this)closeComm()">
<div class="comm-box">
<div class="comm-hd"><h2 style="display:flex;align-items:center;gap:8px"><span style="background:var(--accent-g);-webkit-background-clip:text;-webkit-text-fill-color:transparent">💡 구매 지식 커뮤니티</span></h2><button class="adm-x" onclick="closeComm()">✕</button></div>
<div class="comm-tabs" style="background:var(--bg-2)">
<button class="comm-tab on" onclick="commTab(this,'ct-qa')">💬 Q&A</button>
<button class="comm-tab" onclick="commTab(this,'ct-hof')">🏆 명예의 전당</button>
<button class="comm-tab" onclick="commTab(this,'ct-lv')">📊 내 레벨</button>
<button class="comm-tab" onclick="commTab(this,'ct-char')">👤 내 캐릭터</button>
<button class="comm-tab" onclick="commTab(this,'ct-shop')">🛒 상점</button>
</div>
<div class="comm-body">

<!-- Q&A -->
<div id="ct-qa">
<div class="comm-toolbar">
<div class="comm-search"><span style="font-size:11px;color:var(--text-4)">🔍</span><input placeholder="질문 검색..." type="text"></div>
<div style="display:flex;align-items:center;gap:8px">
<div class="comm-nick-display">닉네임: <strong id="commNickDisplay">프로큐어히어로</strong></div>
<button class="comm-ask" onclick="openQuestionWrite()">✏️ 질문하기</button>
</div>
</div>
<div class="qa-list" id="qaList">
<div class="qa-card adopted" onclick="showQADetail(1)">
<div class="qa-top"><div class="qa-votes"><button class="qa-v-btn on" onclick="event.stopPropagation();voteQ(this)">▲</button><span class="qa-v-n">47</span><button class="qa-v-btn" onclick="event.stopPropagation()">▼</button></div>
<div class="qa-info"><div class="qa-title"><span class="qa-tag adopted">✓ 채택</span><span class="qa-tag ai-db">🧠 AI DB</span>탄력적입찰에서 1회차 유찰 시 처리 절차가 궁금합니다</div>
<div class="qa-preview">구매업무규정 제23조 4항에 따르면 1회차 유찰 시 참여 업체 확대 또는 수의계약 전환이 가능합니다. 실무적으로는 구매위원회 사전 승인을 받고...</div>
<div class="qa-meta"><span class="qa-cat">입찰</span><span style="color:var(--g)">💬 8</span><div class="qa-author"><div class="qa-char-av"><svg viewBox="0 0 80 110" fill="none"><circle cx="40" cy="25" r="14" fill="#FFD8B1"/><circle cx="34" cy="23" r="2" fill="#333"/><circle cx="46" cy="23" r="2" fill="#333"/><path d="M35 29 Q40 33 45 29" stroke="#E8967A" stroke-width="1.5" fill="none" stroke-linecap="round"/><ellipse cx="40" cy="18" rx="18" ry="16" fill="#8B4513"/><path d="M24 42 L22 80 H58 L56 42 Q40 38 24 42Z" fill="#4EAD7B"/></svg><span class="mini-acc mini-hat">👑</span></div><span>프로큐어마스터</span><span class="lv lv-4">Lv.4</span></div><span>3일 전</span></div>
</div></div></div>

<div class="qa-card" onclick="showQADetail(2)">
<div class="qa-top"><div class="qa-votes"><button class="qa-v-btn" onclick="event.stopPropagation();voteQ(this)">▲</button><span class="qa-v-n">23</span><button class="qa-v-btn" onclick="event.stopPropagation()">▼</button></div>
<div class="qa-info"><div class="qa-title"><span class="qa-tag new0">NEW</span>5스타 4→5등급 승급 시 현장 심사 항목이 변경되었나요?</div>
<div class="qa-preview">25년 1월부터 신규 평가 기준이 적용되어 IATF 16949이 필수 항목으로 추가되었습니다...</div>
<div class="qa-meta"><span class="qa-cat">5스타</span><span style="color:var(--g)">💬 5</span><div class="qa-author"><div class="qa-char-av"><svg viewBox="0 0 80 110" fill="none"><circle cx="40" cy="25" r="14" fill="#FFD8B1"/><circle cx="34" cy="23" r="2" fill="#333"/><circle cx="46" cy="23" r="2" fill="#333"/><path d="M35 29 Q40 33 45 29" stroke="#E8967A" stroke-width="1.5" fill="none" stroke-linecap="round"/><ellipse cx="40" cy="18" rx="18" ry="16" fill="#2D3748"/><path d="M24 42 L22 80 H58 L56 42 Q40 38 24 42Z" fill="#4B8EF0"/></svg><span class="mini-acc mini-hat">🎓</span></div><span>품질지킴이</span><span class="lv lv-3">Lv.3</span></div><span>1일 전</span></div>
</div></div></div>

<div class="qa-card" onclick="showQADetail(3)">
<div class="qa-top"><div class="qa-votes"><button class="qa-v-btn" onclick="event.stopPropagation();voteQ(this)">▲</button><span class="qa-v-n">15</span><button class="qa-v-btn" onclick="event.stopPropagation()">▼</button></div>
<div class="qa-info"><div class="qa-title">VAATZ에서 해외 발주 시 환율 자동 적용 방법</div>
<div class="qa-preview">VAATZ 글로벌 구매 모듈에서 환율은 매일 09시 기준으로 자동 갱신됩니다...</div>
<div class="qa-meta"><span class="qa-cat">VAATZ</span><span style="color:var(--g)">💬 3</span><div class="qa-author"><div class="qa-char-av"><svg viewBox="0 0 80 110" fill="none"><circle cx="40" cy="25" r="14" fill="#FFD8B1"/><circle cx="34" cy="23" r="2" fill="#333"/><circle cx="46" cy="23" r="2" fill="#333"/><path d="M35 29 Q40 33 45 29" stroke="#E8967A" stroke-width="1.5" fill="none" stroke-linecap="round"/><ellipse cx="40" cy="18" rx="18" ry="16" fill="#1A365D"/><path d="M24 42 L22 80 H58 L56 42 Q40 38 24 42Z" fill="#8678BF"/></svg><span class="mini-acc mini-hat">🕶️</span></div><span>VAATZ달인</span><span class="lv lv-2">Lv.2</span></div><span>오늘</span></div>
</div></div></div>

<div class="qa-card" onclick="showQADetail(4)">
<div class="qa-top"><div class="qa-votes"><button class="qa-v-btn" onclick="event.stopPropagation();voteQ(this)">▲</button><span class="qa-v-n">8</span><button class="qa-v-btn" onclick="event.stopPropagation()">▼</button></div>
<div class="qa-info"><div class="qa-title"><span class="qa-tag hot">HOT</span>수의계약 긴급 사유서 승인 기준이 어떻게 되나요?</div>
<div class="qa-preview">긴급 수의계약은 계약금액 5천만원 이하일 때 팀장 전결, 5천만원 초과 시 구매위원회 승인이 필요합니다...</div>
<div class="qa-meta"><span class="qa-cat">계약</span><span style="color:var(--g)">💬 2</span><div class="qa-author"><div class="qa-char-av"><svg viewBox="0 0 80 110" fill="none"><circle cx="40" cy="25" r="14" fill="#FFD8B1"/><circle cx="34" cy="23" r="2" fill="#333"/><circle cx="46" cy="23" r="2" fill="#333"/><path d="M35 29 Q40 33 45 29" stroke="#E8967A" stroke-width="1.5" fill="none" stroke-linecap="round"/><ellipse cx="40" cy="18" rx="18" ry="16" fill="#553C2E"/><path d="M24 42 L22 80 H58 L56 42 Q40 38 24 42Z" fill="#52A0A8"/></svg></div><span>계약초보</span><span class="lv">Lv.1</span></div><span>오늘</span></div>
</div></div></div>
</div>
<div style="text-align:center;padding:14px;font-size:10px;color:var(--text-4)">추천 10회 이상 + 채택된 답변 → 관리자 검증 후 AI 학습 DB에 반영 · 작성자에게 100pt 보너스 지급</div>

<!-- Q&A Detail View (hidden by default) -->
<div id="qaDetailView" style="display:none">
<button style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--accent);cursor:pointer;margin-bottom:14px;padding:4px 0;border:none;background:none;font-family:inherit" onclick="backToQAList()">← 목록으로 돌아가기</button>

<div id="qaDetailContent">
<!-- Filled dynamically -->
</div>

<!-- Write Answer -->
<div style="margin-top:16px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;padding:16px">
<div style="font-size:12px;font-weight:600;margin-bottom:8px;display:flex;align-items:center;gap:6px">✏️ 답변 작성 <span style="font-size:10px;color:var(--text-3);font-weight:400">· 채택 시 +30pt, AI 학습 반영 시 +100pt</span></div>
<textarea id="answerTextarea" style="width:100%;background:var(--bg-3);border:1px solid var(--border-1);border-radius:8px;padding:12px;color:var(--text-1);font-size:13px;font-family:inherit;resize:vertical;outline:none;min-height:80px;line-height:1.7" placeholder="답변을 작성해 주세요. 관련 규정이나 근거를 함께 적어주시면 채택 확률이 높아집니다."></textarea>
<div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
<button class="btn btn-p" onclick="submitAnswer()">답변 등록</button>
</div>
</div>
</div>
</div>

<!-- Hall of Fame -->
<div id="ct-hof" style="display:none">
<div class="hof-month"><span style="font-size:13px;font-weight:600">2026년 2월</span><select><option>2026년 2월</option><option>2026년 1월</option><option>2025년 12월</option></select></div>
<div class="hof-podium">
<div class="hof-p silver"><div class="hof-rank">2nd</div><div class="hof-av">품</div><div class="hof-name">품질지킴이</div><div class="hof-sub">수석바이어</div><div class="hof-score">2,840</div><div class="hof-label">포인트</div></div>
<div class="hof-p gold"><div class="hof-rank">🥇</div><div class="hof-av" style="color:var(--accent)">P</div><div class="hof-name">프로큐어마스터</div><div class="hof-sub">CPO</div><div class="hof-score">3,520</div><div class="hof-label">포인트</div></div>
<div class="hof-p bronze"><div class="hof-rank">3rd</div><div class="hof-av">V</div><div class="hof-name">VAATZ달인</div><div class="hof-sub">구매Pro</div><div class="hof-score">1,960</div><div class="hof-label">포인트</div></div>
</div>
<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">전체 랭킹</div>
<div class="lb-row" style="background:var(--bg-2)"><div class="lb-rank" style="color:var(--a)">1</div><div class="lb-av">P</div><div class="lb-info"><div class="lb-name">프로큐어마스터 <span class="lv lv-5">Lv.5</span></div><div class="lb-sub2">채택 24회 · AI 반영 5회</div></div><div class="lb-pts">3,520</div></div>
<div class="lb-row"><div class="lb-rank">2</div><div class="lb-av">품</div><div class="lb-info"><div class="lb-name">품질지킴이 <span class="lv lv-4">Lv.4</span></div><div class="lb-sub2">채택 18회 · AI 반영 3회</div></div><div class="lb-pts">2,840</div></div>
<div class="lb-row"><div class="lb-rank">3</div><div class="lb-av">V</div><div class="lb-info"><div class="lb-name">VAATZ달인 <span class="lv lv-3">Lv.3</span></div><div class="lb-sub2">채택 12회</div></div><div class="lb-pts">1,960</div></div>
<div class="lb-row"><div class="lb-rank">4</div><div class="lb-av">프</div><div class="lb-info"><div class="lb-name">프로큐어히어로 <span class="lv lv-3">Lv.3</span></div><div class="lb-sub2">채택 10회 · AI 반영 3회</div></div><div class="lb-pts">1,720</div></div>
<div class="lb-row"><div class="lb-rank">5</div><div class="lb-av">반</div><div class="lb-info"><div class="lb-name">반도체사냥꾼 <span class="lv lv-2">Lv.2</span></div><div class="lb-sub2">채택 7회</div></div><div class="lb-pts">1,280</div></div>
<div class="lb-row"><div class="lb-rank">6</div><div class="lb-av">샤</div><div class="lb-info"><div class="lb-name">샤시마이스터 <span class="lv lv-2">Lv.2</span></div><div class="lb-sub2">채택 5회</div></div><div class="lb-pts">980</div></div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:8px;padding:10px 14px;margin-top:14px;font-size:10px;color:var(--text-3);line-height:1.6">
<b style="color:var(--text-1)">선정 기준</b>: 채택 ×50pt + 추천 ×10pt + AI 학습 반영 ×100pt · 매월 자동 집계
</div>
</div>

<!-- My Level -->
<div id="ct-lv" style="display:none">
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:8px;padding:14px">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px"><div style="font-size:13px;font-weight:600;display:flex;align-items:center;gap:6px"><span class="lv lv-3">구매Pro</span> 프로큐어히어로</div><span style="font-size:11px;color:var(--text-3)">다음 직급: Lv.4 과장까지 280pt</span></div>
<div style="height:8px;background:var(--bg-4);border-radius:4px;overflow:hidden"><div style="height:100%;width:72%;border-radius:4px;background:var(--accent-g);transition:width .5s"></div></div>
<div style="font-size:10px;color:var(--text-4);margin-top:5px">1,720 / 2,000pt</div>
</div>
<div class="char-stat-row" style="margin-top:12px">
<div class="char-stat"><div class="char-stat-v">34</div><div class="char-stat-l">작성 답변</div></div>
<div class="char-stat"><div class="char-stat-v" style="color:var(--accent)">10</div><div class="char-stat-l">채택</div></div>
<div class="char-stat"><div class="char-stat-v">127</div><div class="char-stat-l">받은 추천</div></div>
</div>
<div style="font-size:11px;font-weight:600;margin:12px 0 8px">레벨 체계</div>
<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:4px">
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:8px;text-align:center"><div style="font-size:16px">📋</div><div style="font-size:8px;font-weight:600;margin-top:2px">Lv.1 사원</div><div style="font-size:7px;color:var(--text-4)">0pt</div></div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:8px;text-align:center"><div style="font-size:16px">🔍</div><div style="font-size:8px;font-weight:600;margin-top:2px">Lv.2 주임</div><div style="font-size:7px;color:var(--text-4)">500pt</div></div>
<div style="background:var(--accent-dim);border:1px solid var(--accent-bd);border-radius:6px;padding:8px;text-align:center"><div style="font-size:16px">📊</div><div style="font-size:8px;font-weight:600;margin-top:2px;color:var(--accent)">Lv.3 대리 ←</div><div style="font-size:7px;color:var(--text-4)">1,000pt</div></div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:8px;text-align:center"><div style="font-size:16px">💼</div><div style="font-size:8px;font-weight:600;margin-top:2px">Lv.4 과장</div><div style="font-size:7px;color:var(--text-4)">2,000pt</div></div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:8px;text-align:center"><div style="font-size:16px">🏢</div><div style="font-size:8px;font-weight:600;margin-top:2px">Lv.5 차장</div><div style="font-size:7px;color:var(--text-4)">3,000pt</div></div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:8px;text-align:center"><div style="font-size:16px">👔</div><div style="font-size:8px;font-weight:600;margin-top:2px">Lv.6 CPO</div><div style="font-size:7px;color:var(--text-4)">5,000pt</div></div>
</div>
</div>

<!-- Character -->
<div id="ct-char" style="display:none">
<div class="char-wrap">
<div class="char-left">
<div class="char-room" id="charRoom">
<div id="charBg" style="position:absolute;inset:0;opacity:.10;font-size:80px;display:flex;align-items:center;justify-content:center;pointer-events:none">🌊</div>
<div class="char-body" id="charBody">
<div class="char-emoji" id="charMain">🚗</div>
<div class="char-acc-top" id="accHat">🎩</div>
<div class="char-acc-face" id="accFace"></div>
<div class="char-acc-side" id="accPet"></div>
</div>
<div id="charEffect" style="position:absolute;top:20px;left:30px;z-index:1;font-size:14px;animation:effectFloat 3s ease-in-out infinite;pointer-events:none"></div>
<div class="char-nick" id="charNick" style="position:relative;z-index:2">프로큐어히어로</div>
<div class="char-lv" style="position:relative;z-index:2">구매Pro · 1,720pt</div>
</div>
<div style="margin-top:8px;font-size:10px;font-weight:600;color:var(--text-3)">캐릭터 선택</div>
<div style="display:flex;gap:3px;margin-top:4px;flex-wrap:wrap">
<button class="char-sel active" onclick="pickChar(this,'🚗')" title="현대 블루카">🚗</button>
<button class="char-sel" onclick="pickChar(this,'🏎️')" title="기아 레이서">🏎️</button>
<button class="char-sel" onclick="pickChar(this,'👨‍💼')" title="남성 바이어">👨‍💼</button>
<button class="char-sel" onclick="pickChar(this,'👩‍💼')" title="여성 바이어">👩‍💼</button>
<button class="char-sel" onclick="pickChar(this,'🧑‍🔧')" title="엔지니어">🧑‍🔧</button>
<button class="char-sel" onclick="pickChar(this,'👩‍🔬')" title="품질 연구원">👩‍🔬</button>
<button class="char-sel" onclick="pickChar(this,'🐻')" title="바츠곰">🐻</button>
<button class="char-sel" onclick="pickChar(this,'🦁')" title="협상사자">🦁</button>
<button class="char-sel" onclick="pickChar(this,'🦊')" title="계약여우">🦊</button>
<button class="char-sel" onclick="pickChar(this,'🐯')" title="품질호랑이">🐯</button>
</div>
</div>
<div class="char-right">
<div class="char-sec">
<div class="char-sec-t">🎒 내 인벤토리</div>
<div class="inv-grid">
<div class="inv-slot equipped" title="기본 정장" onclick="equipItem(this,'💼')">💼</div>
<div class="inv-slot" title="신사 모자" onclick="equipItem(this,'🎩')">🎩</div>
<div class="inv-slot" title="파도 배경" onclick="equipItem(this,'🌊')">🌊</div>
<div class="inv-slot empty"></div>
<div class="inv-slot empty"></div>
<div class="inv-slot empty"></div>
<div class="inv-slot empty"></div>
<div class="inv-slot empty"></div>
</div>
</div>
<div class="char-sec">
<div class="char-sec-t">📊 포인트 현황</div>
<div style="display:flex;gap:8px;margin-bottom:12px">
<div style="flex:1;background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:10px;text-align:center"><div style="font-family:Outfit;font-size:20px;font-weight:700;color:var(--accent)">1,720</div><div style="font-size:9px;color:var(--text-4)">총 적립</div></div>
<div style="flex:1;background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:10px;text-align:center"><div style="font-family:Outfit;font-size:20px;font-weight:700;color:var(--g)">520</div><div style="font-size:9px;color:var(--text-4)">사용 가능</div></div>
<div style="flex:1;background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:10px;text-align:center"><div style="font-family:Outfit;font-size:20px;font-weight:700;color:var(--a)">1,200</div><div style="font-size:9px;color:var(--text-4)">사용함</div></div>
</div>
</div>
<div class="char-sec">
<div class="char-sec-t">💰 포인트 획득 방법</div>
<table style="width:100%;border-collapse:collapse;font-size:11px">
<tr style="border-bottom:1px solid var(--border-1)"><td style="padding:5px 8px;color:var(--text-2)">질문 작성</td><td style="padding:5px 8px;font-weight:600;color:var(--accent);font-family:'JetBrains Mono',monospace;text-align:right">+3pt</td><td style="padding:5px 8px;font-size:9px;color:var(--text-4)">1일 5회</td></tr>
<tr style="border-bottom:1px solid var(--border-1)"><td style="padding:5px 8px;color:var(--text-2)">답변 작성</td><td style="padding:5px 8px;font-weight:600;color:var(--accent);font-family:'JetBrains Mono',monospace;text-align:right">+5pt</td><td style="padding:5px 8px;font-size:9px;color:var(--text-4)">1일 10회</td></tr>
<tr style="border-bottom:1px solid var(--border-1)"><td style="padding:5px 8px;color:var(--text-2)">추천 받기</td><td style="padding:5px 8px;font-weight:600;color:var(--accent);font-family:'JetBrains Mono',monospace;text-align:right">+3pt</td><td style="padding:5px 8px;font-size:9px;color:var(--text-4)">무제한</td></tr>
<tr style="border-bottom:1px solid var(--border-1)"><td style="padding:5px 8px;color:var(--text-2)"><b>답변 채택</b></td><td style="padding:5px 8px;font-weight:600;color:var(--g);font-family:'JetBrains Mono',monospace;text-align:right">+30pt</td><td style="padding:5px 8px;font-size:9px;color:var(--text-4)">무제한</td></tr>
<tr style="border-bottom:1px solid var(--border-1)"><td style="padding:5px 8px;color:var(--text-2)"><b>AI 학습 반영</b></td><td style="padding:5px 8px;font-weight:600;color:var(--a);font-family:'JetBrains Mono',monospace;text-align:right">+100pt</td><td style="padding:5px 8px;font-size:9px;color:var(--text-4)">관리자 승인</td></tr>
<tr><td style="padding:5px 8px;color:var(--text-2)">데이터 업로드 승인</td><td style="padding:5px 8px;font-weight:600;color:var(--accent);font-family:'JetBrains Mono',monospace;text-align:right">+20pt</td><td style="padding:5px 8px;font-size:9px;color:var(--text-4)">무제한</td></tr>
</table>
<div style="margin-top:8px;font-size:9px;color:var(--text-4);line-height:1.5;padding:6px 8px;background:var(--bg-2);border-radius:4px">⚠️ 일일 획득 상한: 최대 80pt/일 (AI 학습 반영 보너스 제외). 어뷰징 방지를 위해 동일 질문 반복 시 포인트가 지급되지 않습니다.</div>
</div>
</div>
</div>
</div>

<!-- Shop — Expanded with Categories -->
<div id="ct-shop" style="display:none">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px"><div style="font-size:13px;font-weight:600">🛒 캐릭터 상점</div><div style="font-size:12px;font-weight:600;color:var(--accent);font-family:Outfit">💰 520pt 보유</div></div>
<div style="font-size:10px;color:var(--text-3);margin-bottom:14px;line-height:1.5;background:var(--bg-2);padding:8px 12px;border-radius:6px;border:1px solid var(--border-1)">💡 아이템을 조합해 나만의 캐릭터를 꾸며보세요! 레벨이 높을수록 프리미엄 아이템을 구매할 수 있습니다.</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">🚗 마이카 (프로필 뱃지)</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item owned"><div class="shop-ic">🚌</div><div class="shop-nm">통근버스</div><div class="shop-pr">✓ 기본</div></div>
<div class="shop-item" onclick="buyItem(this,'🛵','스쿠터',80)"><div class="shop-ic">🛵</div><div class="shop-nm">스쿠터</div><div class="shop-pr">80pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🚗','캐스퍼',200)"><div class="shop-ic">🚗</div><div class="shop-nm">캐스퍼</div><div class="shop-pr">200pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🚙','투싼',400)"><div class="shop-ic">🚙</div><div class="shop-nm">투싼</div><div class="shop-pr">400pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🏎️','아이오닉6',700)"><div class="shop-ic">🏎️</div><div class="shop-nm">아이오닉 6</div><div class="shop-pr">700pt</div><div class="shop-lv-req">Lv.3+</div></div>
<div class="shop-item" onclick="buyItem(this,'🚘','팰리세이드',1200)"><div class="shop-ic">🚘</div><div class="shop-nm">팰리세이드</div><div class="shop-pr">1,200pt</div><div class="shop-lv-req">Lv.4+</div></div>
<div class="shop-item" onclick="buyItem(this,'🏁','제네시스G80',2000)"><div class="shop-ic">🏁</div><div class="shop-nm">G80</div><div class="shop-pr">2,000pt</div><div class="shop-lv-req">Lv.5+</div></div>
<div class="shop-item" onclick="buyItem(this,'👑','GV90',3500)"><div class="shop-ic">👑</div><div class="shop-nm">GV90</div><div class="shop-pr">3,500pt</div><div class="shop-lv-req">CPO</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">👔 오피스 룩</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item owned"><div class="shop-ic">💼</div><div class="shop-nm">기본 정장</div><div class="shop-pr">✓ 기본</div></div>
<div class="shop-item" onclick="buyItem(this,'👕','비즈캐주얼',100)"><div class="shop-ic">👕</div><div class="shop-nm">비즈캐주얼</div><div class="shop-pr">100pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🧥','트렌치코트',300)"><div class="shop-ic">🧥</div><div class="shop-nm">트렌치코트</div><div class="shop-pr">300pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🦺','현장조끼',200)"><div class="shop-ic">🦺</div><div class="shop-nm">현장 조끼</div><div class="shop-pr">200pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🎖️','임원정장',1500)"><div class="shop-ic">🎖️</div><div class="shop-nm">임원 정장</div><div class="shop-pr">1,500pt</div><div class="shop-lv-req">Lv.5+</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">🎩 모자 · 헤어</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item owned"><div class="shop-ic">🎩</div><div class="shop-nm">신사 모자</div><div class="shop-pr">✓ 보유</div></div>
<div class="shop-item" onclick="buyItem(this,'⛑️','안전모',120)"><div class="shop-ic">⛑️</div><div class="shop-nm">안전모</div><div class="shop-pr">120pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🎓','MBA학사모',250)"><div class="shop-ic">🎓</div><div class="shop-nm">MBA 학사모</div><div class="shop-pr">250pt</div></div>
<div class="shop-item" onclick="buyItem(this,'👑','왕관',800)"><div class="shop-ic">👑</div><div class="shop-nm">왕관</div><div class="shop-pr">800pt</div><div class="shop-lv-req">Lv.4+</div></div>
<div class="shop-item" onclick="buyItem(this,'🏆','트로피관',1500)"><div class="shop-ic">🏆</div><div class="shop-nm">트로피 관</div><div class="shop-pr">1,500pt</div><div class="shop-lv-req">Lv.5+</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">👓 데스크 악세서리</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item" onclick="buyItem(this,'🕶️','선글라스',150)"><div class="shop-ic">🕶️</div><div class="shop-nm">선글라스</div><div class="shop-pr">150pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🎧','에어팟',200)"><div class="shop-ic">🎧</div><div class="shop-nm">에어팟맥스</div><div class="shop-pr">200pt</div></div>
<div class="shop-item" onclick="buyItem(this,'📱','Z플립',300)"><div class="shop-ic">📱</div><div class="shop-nm">Z플립</div><div class="shop-pr">300pt</div></div>
<div class="shop-item" onclick="buyItem(this,'💻','노트북',500)"><div class="shop-ic">💻</div><div class="shop-nm">노트북</div><div class="shop-pr">500pt</div><div class="shop-lv-req">Lv.3+</div></div>
<div class="shop-item" onclick="buyItem(this,'🏌️','골프채',1000)"><div class="shop-ic">🏌️</div><div class="shop-nm">골프채</div><div class="shop-pr">1,000pt</div><div class="shop-lv-req">Lv.4+</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">🌈 배경</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item owned"><div class="shop-ic">🏢</div><div class="shop-nm">오피스</div><div class="shop-pr">✓ 기본</div></div>
<div class="shop-item" onclick="buyItem(this,'🏭','울산공장',200)"><div class="shop-ic">🏭</div><div class="shop-nm">울산공장</div><div class="shop-pr">200pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🌸','벚꽃길',250)"><div class="shop-ic">🌸</div><div class="shop-nm">벚꽃길</div><div class="shop-pr">250pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🏔️','설악산',350)"><div class="shop-ic">🏔️</div><div class="shop-nm">설악산</div><div class="shop-pr">350pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🌌','뉘르부르크링',800)"><div class="shop-ic">🌌</div><div class="shop-nm">뉘르부르크링</div><div class="shop-pr">800pt</div><div class="shop-lv-req">Lv.4+</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">✨ 이펙트</div>
<div class="shop-grid">
<div class="shop-item" onclick="buyItem(this,'⭐','별반짝',100)"><div class="shop-ic">⭐</div><div class="shop-nm">별 반짝</div><div class="shop-pr">100pt</div></div>
<div class="shop-item" onclick="buyItem(this,'💫','유성',250)"><div class="shop-ic">💫</div><div class="shop-nm">유성</div><div class="shop-pr">250pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🔥','불꽃오라',400)"><div class="shop-ic">🔥</div><div class="shop-nm">불꽃 오라</div><div class="shop-pr">400pt</div><div class="shop-lv-req">Lv.3+</div></div>
<div class="shop-item" onclick="buyItem(this,'💎','다이아',600)"><div class="shop-ic">💎</div><div class="shop-nm">다이아</div><div class="shop-pr">600pt</div><div class="shop-lv-req">Lv.4+</div></div>
<div class="shop-item" onclick="buyItem(this,'🌟','후광',1000)"><div class="shop-ic">🌟</div><div class="shop-nm">후광</div><div class="shop-pr">1,000pt</div><div class="shop-lv-req">Lv.5+</div></div>
</div>
</div>
</div>
</div></div>

<!-- Community Side Buttons -->
<div class="comm-side">
<div class="comm-side-btn" onclick="openComm('qa')" title="지식 Q&A"><span>💡</span><span>Q&A</span></div>
<div class="comm-side-btn" onclick="openComm('hof')" title="명예의 전당"><span>🏆</span><span>랭킹</span></div>
<div class="comm-side-btn" onclick="openComm('char')" title="내 캐릭터"><span>🧸</span><span>캐릭터</span></div>
</div>

<!-- Floating Character (draggable) -->
<div class="float-char" id="floatChar">
<div class="float-char-body" id="floatCharBody">🚗</div>
<span class="float-char-lv">구매Pro</span>
<div class="float-char-bubble" id="charBubble">오늘도 화이팅! 💪<br>구매 지식 나누러 가요~</div>
<div class="float-char-menu" id="charMenu">
<button onclick="openComm('char');closeCharMenu()">🧸 캐릭터 꾸미기</button>
<button onclick="openComm('qa');closeCharMenu()">💡 Q&A 참여하기</button>
<button onclick="openComm('hof');closeCharMenu()">🏆 명예의 전당</button>
<button onclick="editBubbleMsg()">💬 말풍선 변경</button>
<button onclick="hideFloatChar()" style="color:var(--text-4);font-size:10px">숨기기</button>
</div>
</div>
<div class="float-show-btn" id="floatShow" onclick="showFloatChar()">🚗</div>


<!-- v23: large operational modals + companion hub -->
<div class="large-modal" id="teamFolderModal" onclick="if(event.target===this)closeTeamFolderModal()">
  <div class="large-box">
    <div class="large-hd">
      <div><div class="large-title" id="teamFolderTitle">📁 팀별 폴더</div><div class="large-sub" id="teamFolderSub">팀 문서 전체 리스트를 크게 확인하고 등록 요청됨할 수 있습니다.</div></div>
      <button class="large-close" onclick="closeTeamFolderModal()">✕</button>
    </div>
    <div class="large-toolbar">
      <label style="font-size:11px;color:var(--text-4);display:flex;align-items:center;gap:6px"><input type="checkbox" class="check-lg" id="teamSelectAll" onchange="toggleTeamDocAll(this)"> 전체 선택</label>
      <div class="large-search"><span>🔍</span><input id="teamDocSearch" placeholder="문서명, 담당자, 모드, 보안등급 검색" oninput="renderTeamDocRows()"></div>
      <select class="frm-i frm-sel" id="teamDocStatusFilter" style="width:130px" onchange="renderTeamDocRows()"><option value="">전체 상태</option><option>작성·보완중</option><option>등록 요청됨</option><option>보완 요청</option><option>AI 검색 반영완료</option></select>
      <button class="v23-btn primary" onclick="submitSelectedTeamDocs()">🚀 선택 등록 요청됨</button>
    </div>
    <div class="large-body"><table class="large-table"><thead><tr><th></th><th>문서명</th><th>유형</th><th>보안</th><th>AI 모드</th><th>버전</th><th>담당자</th><th>상태</th><th style="text-align:right">작업</th></tr></thead><tbody id="teamDocRows"></tbody></table></div>
  </div>
</div>

<div class="large-modal" id="historyModal" onclick="if(event.target===this)closeHistoryModal()">
  <div class="large-box" style="width:min(760px,92vw)">
    <div class="large-hd"><div><div class="large-title">📜 이력 관리</div><div class="large-sub">질의, 업로드, 승인, AI 반영 이력을 한곳에서 확인합니다.</div></div><button class="large-close" onclick="closeHistoryModal()">✕</button></div>
    <div class="large-toolbar"><div class="large-search"><span>🔍</span><input placeholder="이력 검색"></div><button class="v23-btn">내보내기</button></div>
    <div class="large-body"><div class="v23-history-list" id="historyList"></div></div>
  </div>
</div>

<div class="companion-hub" id="companionHub">
  <div class="companion-card" id="companionCard">
    <div class="companion-main" onclick="toggleCompanionHub()">
      <div class="buddy-3d" aria-label="VAATZ Buddy"><div class="buddy-hat" id="dockHat">🎩</div><div class="buddy-hair"></div><div class="buddy-face"></div><div class="buddy-eye l"></div><div class="buddy-eye r"></div><div class="buddy-smile"></div><div class="buddy-arm l"></div><div class="buddy-arm r"></div><div class="buddy-body"></div><div class="buddy-wheel l"></div><div class="buddy-wheel r"></div><div class="buddy-badge" id="dockBadge">AI</div></div>
      <div class="companion-text"><div class="companion-name">VAATZ Buddy</div><div class="companion-msg" id="companionMsg">문서 승인·DB 연계·AI 모드를 빠르게 관리하세요.</div></div>
      <div class="companion-toggle">⌃</div>
    </div>
    <div class="companion-panel">
      <button class="companion-action" onclick="oa();openAdminTab('p-team')">📁 팀 폴더</button>
      <button class="companion-action" onclick="oa();openAdminTab('p-final')">✅ 최종 승인</button>
      <button class="companion-action" onclick="oa();openAdminTab('p-datamart')">🔗 데이터마트</button>
      <button class="companion-action" onclick="oa();openAdminTab('p-mode')">🧭 AI 모드</button>
      <button class="companion-action" onclick="openMypage()">👤 마이페이지</button>
      <button class="companion-action" onclick="openComm('char')">🧸 캐릭터</button>
    </div>
  </div>
</div>



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
        rows.push({id:`${ti+1}-${i+1}`, team:t.name, name:`${name}_${String(i+1).padStart(3,'0')}.${type.toLowerCase()}`, type, sec, mode, version:`v${1+(i%4)}.${i%10}`, owner:i%3===0?t.owner:(i%3===1?'팀 Admin':'팀원 업로드'), date:`2026.05.${String(1+(i%22)).padStart(2,'0')}`, status, chunks:80+(i*7)%420});
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
      <div class="v23-process">
        <div class="v23-step" onclick="openAdminTab('p-team')"><div class="v23-step-num">1</div><div class="v23-step-title">팀별 폴더 관리</div><div class="v23-step-desc">각 팀 Admin이 문서를 업로드·수정·버전관리합니다. 항목이 많기 때문에 팀 카드 클릭 시 큰 팝업 리스트로 확인합니다.</div><div class="v23-step-foot"><span class="v23-pill amber">${teams.length}개 팀</span><span>열기 →</span></div></div>
        <div class="v23-arrow">→</div>
        <div class="v23-step" onclick="openAdminTab('p-final')"><div class="v23-step-num">2</div><div class="v23-step-title">System Admin 최종 승인</div><div class="v23-step-desc">구매디지털추진팀 Admin이 보안등급, AI 모드, 통합 폴더를 지정하고 최종 승인합니다.</div><div class="v23-step-foot"><span class="v23-pill blue">${totalFinal}건 대기</span><span>승인 →</span></div></div>
        <div class="v23-arrow">→</div>
        <div class="v23-step" onclick="openAdminTab('p-list')"><div class="v23-step-num">3</div><div class="v23-step-title">최종 리스트 관리</div><div class="v23-step-desc">승인된 문서는 최종 지식 리스트에서 버전, 모드, 보안, 임베딩 상태를 운영합니다.</div><div class="v23-step-foot"><span class="v23-pill green">${published}건 활성</span><span>관리 →</span></div></div>
      </div>
      <div class="v23-workgrid"><div class="v23-panel"><div class="v23-panel-h"><div class="v23-panel-title">🚨 오늘 처리할 일</div><button class="v23-btn" onclick="openAdminTab('p-final')">전체 보기</button></div><div class="v23-panel-body"><div class="v23-mini-list">${teamDocs.filter(d=>d.status==='등록 요청됨').slice(0,5).map(d=>`<div class="v23-mini-row"><div class="v23-mini-icon">${d.type==='PPT'?'📊':d.type==='XLSX'?'📈':'📄'}</div><div class="v23-mini-main"><div class="v23-mini-title">${esc(d.name)}</div><div class="v23-mini-meta"><span>${esc(d.team)}</span><span>${esc(d.mode)}</span><span>${esc(d.sec)}</span></div></div><button class="v23-btn primary" onclick="openAdminTab('p-final')">검토</button></div>`).join('')}</div></div></div><div class="v23-panel"><div class="v23-panel-h"><div class="v23-panel-title">🔗 정형 데이터 배치 상태</div><button class="v23-btn" onclick="openAdminTab('p-datamart')">모니터링</button></div><div class="v23-panel-body"><div class="v23-mini-list"><div class="v23-mini-row"><div class="v23-mini-icon">🖥️</div><div class="v23-mini-main"><div class="v23-mini-title">VAATZ 업체·품목 마스터</div><div class="v23-mini-meta"><span>05:10 성공</span><span>+14,230 rows</span></div></div><span class="v23-pill green">정상</span></div><div class="v23-mini-row"><div class="v23-mini-icon">📖</div><div class="v23-mini-main"><div class="v23-mini-title">Autopedia 용어 DB</div><div class="v23-mini-meta"><span>06:00 성공</span><span>4,832 terms</span></div></div><span class="v23-pill green">정상</span></div><div class="v23-mini-row"><div class="v23-mini-icon">💰</div><div class="v23-mini-main"><div class="v23-mini-title">원가 DB 일 배치</div><div class="v23-mini-meta"><span>07:30 일부 실패</span><span>12 rows error</span></div></div><span class="v23-pill amber">확인</span></div></div></div></div></div>
    `);

    addAdmSection('p-team', `
      <div class="v23-admin-title"><div><div class="v23-title-main">팀별 폴더 관리</div><div class="v23-title-sub">팀별 문서가 많아도 카드로 현황만 보고, 클릭하면 큰 팝업에서 리스트를 검색·필터·최종요청할 수 있습니다.</div></div><div class="v23-actions"><button class="v23-btn">＋ 팀 폴더 추가</button><button class="v23-btn primary" onclick="openTeamFolderModal('구매전략팀')">📋 샘플 폴더 열기</button></div></div>
      <div class="team-folder-grid">${teams.map(t=>`<div class="team-folder-card"><div class="team-folder-top"><div class="team-folder-ic">${t.icon}</div><span class="v23-pill ${t.health==='정상'?'green':t.health==='보안주의'?'red':'amber'}">${t.health}</span></div><div class="team-folder-name">${t.name}</div><div class="team-folder-owner">Admin: ${t.owner}</div><div class="team-folder-stats"><div class="team-stat"><div class="team-stat-v">${t.docs}</div><div class="team-stat-l">전체</div></div><div class="team-stat"><div class="team-stat-v" style="color:var(--a)">${t.finalReq}</div><div class="team-stat-l">최종요청</div></div><div class="team-stat"><div class="team-stat-v" style="color:var(--g)">${t.published}</div><div class="team-stat-l">반영완료</div></div></div><div class="team-folder-actions"><button class="v23-btn" onclick="openTeamFolderModal('${t.name}')">크게 보기</button><button class="v23-btn primary" onclick="openTeamFolderModal('${t.name}','request')">등록 요청됨</button></div></div>`).join('')}</div>
    `);

    const finalDocs=teamDocs.filter(d=>d.status==='등록 요청됨').slice(0,10);
    addAdmSection('p-final', `
      <div class="v23-admin-title"><div><div class="v23-title-main">System Admin 최종 승인</div><div class="v23-title-sub">팀 Admin이 올린 등록 요청됨만 모아 검토합니다. 여기서 통합 폴더, 보안등급, AI 모드를 확정하면 최종 리스트로 이동합니다.</div></div><div class="v23-actions"><button class="v23-btn warn">보완 요청 사유 템플릿</button><button class="v23-btn primary" onclick="approveAllVisibleFinals()">✅ 화면 내 일괄 승인</button></div></div>
      <div class="final-layout"><div>${finalDocs.map((d,i)=>`<div class="approval-card" data-final-id="${d.id}"><div class="approval-card-top"><div><div class="approval-doc">${esc(d.name)}</div><div class="approval-meta">${esc(d.team)} · ${esc(d.owner)} · ${d.date} · ${d.chunks} chunks 예상</div></div>${statusPill(d.status)}</div><div class="approval-settings"><div class="setting-box"><div class="setting-label">통합 폴더</div><select><option>구매업무규정</option><option>입찰관리</option><option>VAATZ 매뉴얼</option><option>품질 5스타</option><option>원가/단가</option></select></div><div class="setting-box"><div class="setting-label">보안등급</div><select><option>${d.sec}</option><option>리더 전용</option><option>일반 공개</option><option>지정 사용자</option></select></div><div class="setting-box"><div class="setting-label">AI 모드</div><select><option>${d.mode}</option>${modeList.map(m=>`<option>${m}</option>`).join('')}</select></div></div><div style="display:flex;gap:6px;margin-top:10px;justify-content:flex-end"><button class="v23-btn" onclick="previewFinalDoc('${d.id}')">원문 보기</button><button class="v23-btn danger" onclick="rejectFinalDoc(this)">보완 요청</button><button class="v23-btn primary" onclick="approveFinalDoc(this)">최종 승인</button></div></div>`).join('')}</div><div class="final-preview"><div class="v23-panel-title" style="margin-bottom:10px">🔎 검토 미리보기</div><div class="preview-doc-page" id="finalPreview"><h4>문서 미리보기</h4><p>왼쪽 문서의 <span class="preview-highlight">원문 보기</span>를 클릭하면 여기에 요약·하이라이트·중복 문서 여부가 표시됩니다.</p><p>최종 승인 전 확인 항목: 최신 버전 여부, 중복 등록 여부, 보안등급, AI 모드 매핑, 임베딩 제외 문구.</p></div><div class="mode-note">Tip. 최종 승인 시 문서가 최종 리스트로 이동하고, 선택한 AI 모드의 RAG Index에 반영됩니다.</div></div></div>
    `);

    const publishedDocs=teamDocs.filter(d=>d.status==='AI 검색 반영완료').slice(0,36);
    addAdmSection('p-list', `
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
 function boot(){let nav=$('.sb-nav'); if(nav&&!$('#v25CommunityEntry'))nav.insertAdjacentHTML('beforeend','<button class="sb-i v25-community-entry" id="v25CommunityEntry" onclick="openComm(\'qa\')"><span class="sb-ic">💡</span>구매본부 지식커뮤니티</button>');let tb=$('.tb-r'); if(tb&&!$('#v25TopCommunityBtn'))tb.insertAdjacentHTML('afterbegin','<button class="tb-b" id="v25TopCommunityBtn" onclick="openComm(\'qa\')">💡 지식커뮤니티</button>');renderQna();renderAdminV25();improveCompanion();memoModal();$$('.ai-ac').forEach(ac=>{if(!ac.querySelector('.saved-answer-btn'))ac.insertAdjacentHTML('beforeend','<button class="ai-a saved-answer-btn" onclick="openMemoModal()">⭐ 메모 저장</button>')})}
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



<!-- ═══════════════════════════════════════════
     VAATZ AI v26 — Usability, Community, Mode, Data Ops Refinement
     ═══════════════════════════════════════════ -->
<style id="v26-style">
/* v26: reduce visual clutter, improve readability, and keep existing concept */
.tb .ai-mode-switch{display:none!important}
html{--v26-text-scale:1;--v26-fast:.14s;--v26-card-pad:16px;scroll-behavior:smooth}
html[data-font-size="small"]{--v26-text-scale:.94}
html[data-font-size="standard"]{--v26-text-scale:1.04}
html[data-font-size="large"]{--v26-text-scale:1.15}
body{font-size:calc(14px * var(--v26-text-scale))}
.ai-tx{font-size:calc(14.8px * var(--v26-text-scale))!important;line-height:1.9!important}.msg-b{font-size:calc(14.8px * var(--v26-text-scale))!important}.tb-b,.sc-btn,.sb-i,.hi-t,.frm-i,.frm-sel,.v25-btn,.v23-btn,.itb{font-size:calc(12px * var(--v26-text-scale))!important}.tb-t,.brand-n{font-size:calc(15px * var(--v26-text-scale))!important}.v23-title-main,.v25-manager-title,.large-title{font-size:calc(16px * var(--v26-text-scale))!important}.v25-doc-title,.approval-doc,.v23-mini-title{font-size:calc(13.6px * var(--v26-text-scale))!important}.v25-table td,.large-table td,.at2 td{font-size:calc(12.8px * var(--v26-text-scale))!important}.v25-table th,.large-table th,.at2 th{font-size:calc(10.4px * var(--v26-text-scale))!important}

/* Faster, less janky transitions */
.ov,.mp-ov,.comm-ov,.db-ov,.rq-m,.v25-memo-modal,.large-modal{backdrop-filter:blur(4px)!important}.adm,.mp-box,.comm-box,.db-box,.rq-b,.large-box,.v25-memo-box{animation-duration:.16s!important}.wc,.v25-answer,.qa-card,.v25-source,.v26-q-card,.v26-pack-card,.team-folder-card,.v23-step{transition:transform var(--v26-fast) var(--ease),border-color var(--v26-fast),background var(--v26-fast),box-shadow var(--v26-fast)!important}.wc:hover,.v26-q-card:hover,.v26-pack-card:hover,.team-folder-card:hover{transform:translateY(-1px)!important}.spark,.hero-spark,.float-char-body,.char-widget-inner{animation-play-state:paused!important}.v26-contain{contain:content}.comm-body,.adm-b,.large-body,.v25-table-wrap,.final-table-wrap{overscroll-behavior:contain}

/* Chat input control row */
.v26-chat-controls{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:9px 12px 7px;border-bottom:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1));border-radius:var(--r-lg) var(--r-lg) 0 0;flex-wrap:wrap}
.v26-control-group{display:flex;align-items:center;gap:6px;min-width:0}.v26-control-label{font-size:10px;font-weight:900;letter-spacing:.7px;text-transform:uppercase;color:var(--text-4);white-space:nowrap}.v26-chipset{display:flex;align-items:center;gap:4px;flex-wrap:wrap}.v26-mode-btn,.v26-size-btn{border:1px solid var(--border-1);background:var(--bg-3);color:var(--text-3);border-radius:8px;padding:6px 10px;font-size:12px;font-weight:800;cursor:pointer;font-family:inherit;transition:all .12s var(--ease);white-space:nowrap}.v26-mode-btn:hover,.v26-size-btn:hover{border-color:var(--accent-bd);color:var(--text-1);background:var(--bg-4)}.v26-mode-btn.on{background:var(--accent-dim);border-color:var(--accent-bd);color:var(--accent);box-shadow:inset 0 0 0 1px var(--accent-bd)}.v26-mode-btn[data-mode*="생산"].on{background:var(--g-dim);border-color:rgba(78,173,123,.32);color:var(--g)}.v26-mode-btn[data-mode*="일반"].on{background:var(--t-dim);border-color:rgba(82,160,168,.32);color:var(--t)}.v26-mode-btn[data-mode*="원가"].on{background:var(--r-dim);border-color:rgba(191,88,88,.32);color:var(--r)}.v26-size-btn.on{background:var(--bg-5);color:var(--text-1);border-color:var(--border-3)}

/* Community: true large workspace */
.comm-ov.sh{align-items:center;justify-content:center}.comm-box.v26-wide{width:min(1520px,97vw)!important;height:min(94vh,980px)!important;max-height:94vh!important;border-radius:18px!important;display:flex;flex-direction:column}.comm-box.v26-wide .comm-hd{padding:16px 22px}.comm-box.v26-wide .comm-body{padding:0!important;overflow:hidden}.comm-box.v26-wide .comm-tabs{padding:0 22px}.v26-community{height:100%;display:grid;grid-template-columns:230px minmax(430px,1fr) 420px;gap:0;background:var(--bg-1)}.v26-community-side{border-right:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1));padding:18px 14px;overflow:auto}.v26-community-main{padding:18px;overflow:auto}.v26-community-detail{border-left:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1));padding:18px;overflow:auto}.v26-community-title{font-size:22px;font-weight:900;color:var(--text-1);letter-spacing:-.5px;margin-bottom:4px}.v26-community-sub{font-size:13px;color:var(--text-3);line-height:1.55}.v26-q-stats{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:16px 0}.v26-q-stat{background:var(--bg-1);border:1px solid var(--border-1);border-radius:12px;padding:12px}.v26-q-stat .v{font-family:'Outfit';font-size:22px;font-weight:900;color:var(--text-1)}.v26-q-stat .l{font-size:11px;color:var(--text-4);margin-top:2px}.v26-cat-title{font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.9px;color:var(--text-4);margin:16px 4px 8px}.v26-cat-btn{width:100%;display:flex;align-items:center;justify-content:space-between;gap:8px;border:0;background:transparent;color:var(--text-3);padding:10px 11px;border-radius:10px;font-size:13px;font-weight:800;cursor:pointer;text-align:left}.v26-cat-btn:hover,.v26-cat-btn.on{background:var(--accent-dim);color:var(--accent)}.v26-tag-cloud{display:flex;gap:6px;flex-wrap:wrap}.v26-tag{border:1px solid var(--border-1);background:var(--bg-1);color:var(--text-3);border-radius:99px;padding:6px 9px;font-size:12px;font-weight:700;cursor:pointer}.v26-tag:hover,.v26-tag.on{border-color:var(--accent-bd);color:var(--accent);background:var(--accent-dim)}.v26-q-hero{display:grid;grid-template-columns:1fr auto;gap:14px;align-items:center;background:linear-gradient(135deg,var(--bg-2),var(--bg-1));border:1px solid var(--border-1);border-radius:16px;padding:18px;margin-bottom:14px}.v26-q-searchbar{display:flex;align-items:center;gap:9px;background:var(--bg-1);border:1px solid var(--border-2);border-radius:12px;padding:11px 13px;margin-top:12px}.v26-q-searchbar input{background:transparent;border:0;outline:0;color:var(--text-1);font-size:15px;flex:1;font-family:inherit}.v26-q-actions{display:flex;gap:8px;align-items:center}.v26-primary{border:0;background:var(--accent-g);color:white;border-radius:11px;padding:10px 15px;font-size:13px;font-weight:900;cursor:pointer;font-family:inherit}.v26-secondary{border:1px solid var(--border-2);background:var(--bg-3);color:var(--text-2);border-radius:11px;padding:10px 13px;font-size:13px;font-weight:800;cursor:pointer;font-family:inherit}.v26-filter-row{display:flex;gap:8px;align-items:center;margin-bottom:12px;flex-wrap:wrap}.v26-select{background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;color:var(--text-2);font-size:13px;padding:9px 11px;font-family:inherit}.v26-q-list{display:flex;flex-direction:column;gap:10px}.v26-q-card{background:var(--bg-2);border:1px solid var(--border-1);border-radius:16px;padding:16px;cursor:pointer}.v26-q-card.on{border-color:var(--accent-bd);background:linear-gradient(135deg,var(--accent-dim),var(--bg-2))}.v26-q-top{display:flex;align-items:flex-start;gap:12px}.v26-vote{min-width:50px;text-align:center;background:var(--bg-1);border:1px solid var(--border-1);border-radius:12px;padding:9px 6px}.v26-vote .n{font-family:'Outfit';font-size:22px;font-weight:900;color:var(--accent)}.v26-vote .l{font-size:10px;color:var(--text-4);margin-top:1px}.v26-q-title{font-size:17px;font-weight:900;color:var(--text-1);line-height:1.45;margin-bottom:7px}.v26-q-body{font-size:14px;color:var(--text-2);line-height:1.75;margin-bottom:10px}.v26-q-meta{display:flex;align-items:center;gap:7px;flex-wrap:wrap;font-size:12px;color:var(--text-4)}.v26-q-pill{display:inline-flex;align-items:center;gap:4px;border-radius:99px;padding:4px 8px;font-size:11px;font-weight:900}.v26-q-pill.blue{background:var(--accent-dim);color:var(--accent)}.v26-q-pill.green{background:var(--g-dim);color:var(--g)}.v26-q-pill.amber{background:var(--a-dim);color:var(--a)}.v26-q-pill.red{background:var(--r-dim);color:var(--r)}.v26-detail-card{background:var(--bg-1);border:1px solid var(--border-1);border-radius:16px;padding:18px}.v26-buddy-mini{display:flex;align-items:center;gap:13px;background:linear-gradient(135deg,var(--accent-dim),var(--bg-1));border:1px solid var(--accent-bd);border-radius:16px;padding:14px;margin-bottom:14px}.v26-buddy-face{width:64px;height:64px;border-radius:20px;background:radial-gradient(circle at 35% 20%,#7FB2FF,#3768B7 70%);position:relative;box-shadow:0 14px 28px rgba(75,142,240,.18)}.v26-buddy-face:before{content:'👨‍💼';position:absolute;font-size:32px;left:15px;top:12px}.v26-buddy-text .t{font-size:15px;font-weight:900}.v26-buddy-text .d{font-size:12px;color:var(--text-3);line-height:1.55;margin-top:3px}.v26-answer{border-top:1px solid var(--border-1);padding-top:13px;margin-top:13px}.v26-answer-title{font-size:13px;font-weight:900;color:var(--text-1);margin-bottom:6px}.v26-answer-body{font-size:13.5px;color:var(--text-2);line-height:1.75}.v26-reply-box textarea{width:100%;min-height:92px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:12px;color:var(--text-1);padding:12px;font-family:inherit;font-size:14px;line-height:1.65;outline:0;resize:vertical}.v26-empty{background:var(--bg-1);border:1px dashed var(--border-2);border-radius:16px;padding:24px;text-align:center;color:var(--text-3);line-height:1.7}

/* Ask modal with direct category and tags */
.v26-ask-modal{position:fixed;inset:0;background:rgba(0,0,0,.55);backdrop-filter:blur(4px);z-index:500;display:none;align-items:center;justify-content:center}.v26-ask-modal.sh{display:flex}.v26-ask-box{width:min(720px,94vw);background:var(--bg-1);border:1px solid var(--border-2);border-radius:18px;box-shadow:0 24px 72px rgba(0,0,0,.42);overflow:hidden}.v26-ask-h{display:flex;align-items:center;justify-content:space-between;padding:18px 22px;border-bottom:1px solid var(--border-1)}.v26-ask-title{font-size:18px;font-weight:900;color:var(--text-1)}.v26-ask-body{padding:20px 22px}.v26-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.v26-field{margin-bottom:14px}.v26-field label{display:block;font-size:12px;font-weight:900;color:var(--text-3);margin-bottom:7px}.v26-field input,.v26-field textarea{width:100%;background:var(--bg-2);border:1px solid var(--border-1);border-radius:11px;color:var(--text-1);padding:11px 12px;font-family:inherit;font-size:14px;outline:0}.v26-field textarea{min-height:140px;line-height:1.65;resize:vertical}.v26-tag-editor{display:flex;align-items:center;gap:6px;flex-wrap:wrap;background:var(--bg-2);border:1px solid var(--border-1);border-radius:11px;padding:7px}.v26-tag-editor input{border:0;background:transparent;padding:5px;min-width:150px;flex:1}.v26-tag-item{display:inline-flex;align-items:center;gap:5px;border-radius:99px;background:var(--accent-dim);color:var(--accent);padding:6px 8px;font-size:12px;font-weight:800}.v26-tag-item button{border:0;background:transparent;color:var(--accent);cursor:pointer}.v26-ask-foot{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:16px 22px;border-top:1px solid var(--border-1);background:var(--bg-2)}

/* Admin data management v26 */
.v26-admin-hero{display:grid;grid-template-columns:1.05fr .95fr;gap:14px;margin-bottom:14px}.v26-admin-card{background:linear-gradient(180deg,var(--bg-2),var(--bg-1));border:1px solid var(--border-1);border-radius:16px;padding:18px}.v26-admin-card h3{font-size:17px;margin-bottom:7px}.v26-admin-card p{font-size:13px;color:var(--text-3);line-height:1.65}.v26-mini-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:14px}.v26-mini-kpi{background:var(--bg-2);border:1px solid var(--border-1);border-radius:12px;padding:12px}.v26-mini-kpi .v{font-family:'Outfit';font-size:22px;font-weight:900;color:var(--text-1)}.v26-mini-kpi .l{font-size:11px;color:var(--text-4);margin-top:2px}.v26-pack-layout{display:grid;grid-template-columns:260px 1fr 340px;gap:12px}.v26-mode-nav{background:var(--bg-2);border:1px solid var(--border-1);border-radius:16px;padding:12px}.v26-mode-nav button{width:100%;display:flex;justify-content:space-between;gap:8px;align-items:center;border:0;background:transparent;color:var(--text-3);padding:12px;border-radius:11px;cursor:pointer;font-size:13px;font-weight:900;text-align:left}.v26-mode-nav button:hover,.v26-mode-nav button.on{background:var(--accent-dim);color:var(--accent)}.v26-pack-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.v26-pack-card{background:var(--bg-2);border:1px solid var(--border-1);border-radius:16px;padding:15px}.v26-pack-head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}.v26-pack-title{font-size:15px;font-weight:900;color:var(--text-1)}.v26-pack-sub{font-size:12px;color:var(--text-3);line-height:1.5;margin-top:3px}.v26-pack-meta{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:12px}.v26-pack-meta div{background:var(--bg-1);border:1px solid var(--border-1);border-radius:9px;padding:8px;text-align:center}.v26-pack-meta b{font-size:15px;color:var(--text-1)}.v26-pack-meta span{display:block;font-size:10px;color:var(--text-4);margin-top:1px}.v26-toggle{width:42px;height:23px;border-radius:99px;background:var(--bg-5);border:1px solid var(--border-2);position:relative;cursor:pointer;transition:.15s}.v26-toggle:after{content:'';width:17px;height:17px;position:absolute;top:2px;left:3px;border-radius:50%;background:#fff;transition:.15s}.v26-toggle.on{background:var(--accent);border-color:var(--accent)}.v26-toggle.on:after{left:20px}.v26-exception-panel{background:linear-gradient(180deg,var(--bg-2),var(--bg-1));border:1px solid var(--border-1);border-radius:16px;padding:15px}.v26-ex-list{display:flex;flex-direction:column;gap:8px;max-height:460px;overflow:auto;margin-top:10px}.v26-ex-row{background:var(--bg-1);border:1px solid var(--border-1);border-radius:12px;padding:11px}.v26-ex-row .name{font-size:13px;font-weight:900;color:var(--text-1);margin-bottom:4px}.v26-ex-row .meta{font-size:11px;color:var(--text-4);line-height:1.45}.v26-folder-board{display:grid;grid-template-columns:260px 1fr;gap:12px}.v26-folder-side{background:var(--bg-2);border:1px solid var(--border-1);border-radius:16px;padding:12px}.v26-folder-side button{width:100%;display:flex;justify-content:space-between;align-items:center;border:0;background:transparent;color:var(--text-3);padding:11px;border-radius:10px;font-size:13px;font-weight:900;cursor:pointer}.v26-folder-side button.on,.v26-folder-side button:hover{background:var(--accent-dim);color:var(--accent)}.v26-folder-main{background:var(--bg-2);border:1px solid var(--border-1);border-radius:16px;overflow:hidden}.v26-folder-main-h{display:flex;align-items:center;justify-content:space-between;padding:15px 17px;border-bottom:1px solid var(--border-1)}.v26-doc-list{padding:10px 14px;max-height:560px;overflow:auto}.v26-doc-row{display:grid;grid-template-columns:1fr 140px 170px 110px;gap:10px;align-items:center;background:var(--bg-1);border:1px solid var(--border-1);border-radius:12px;padding:12px;margin-bottom:8px}.v26-doc-row .n{font-size:14px;font-weight:900;color:var(--text-1)}.v26-doc-row .m{font-size:11px;color:var(--text-4);margin-top:3px}.v26-mart-grid{display:grid;grid-template-columns:320px 1fr;gap:14px}.v26-health-list{display:flex;flex-direction:column;gap:8px}.v26-health-card{background:var(--bg-2);border:1px solid var(--border-1);border-radius:14px;padding:13px;cursor:pointer}.v26-health-card.on,.v26-health-card:hover{border-color:var(--accent-bd);background:var(--accent-dim)}.v26-health-title{display:flex;justify-content:space-between;gap:8px;font-size:14px;font-weight:900;color:var(--text-1);margin-bottom:4px}.v26-health-meta{font-size:11.5px;color:var(--text-3);line-height:1.55}.v26-mart-detail{background:linear-gradient(180deg,var(--bg-2),var(--bg-1));border:1px solid var(--border-1);border-radius:16px;padding:18px}.v26-pipeline{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin:14px 0}.v26-pipe-step{background:var(--bg-1);border:1px solid var(--border-1);border-radius:12px;padding:12px;text-align:center}.v26-pipe-dot{width:18px;height:18px;border-radius:50%;margin:0 auto 8px;background:var(--g)}.v26-pipe-dot.warn{background:var(--a)}.v26-pipe-dot.err{background:var(--r)}.v26-pipe-step .t{font-size:12px;font-weight:900}.v26-pipe-step .d{font-size:10px;color:var(--text-4);margin-top:3px}.v26-ops-guide{background:linear-gradient(135deg,var(--accent-dim),var(--bg-2));border:1px solid var(--accent-bd);border-radius:16px;padding:15px;margin-top:12px}.v26-ops-guide h4{font-size:14px;margin-bottom:8px}.v26-ops-guide ul{padding-left:18px;color:var(--text-2);font-size:12.5px;line-height:1.7}

@media(max-width:1280px){.v26-community{grid-template-columns:205px minmax(360px,1fr);}.v26-community-detail{grid-column:1/-1;border-left:0;border-top:1px solid var(--border-1);max-height:360px}.v26-pack-layout{grid-template-columns:1fr}.v26-pack-grid{grid-template-columns:1fr}.v26-admin-hero{grid-template-columns:1fr}.v26-mart-grid{grid-template-columns:1fr}.v26-folder-board{grid-template-columns:1fr}.v26-doc-row{grid-template-columns:1fr}}
@media(max-width:820px){.v26-chat-controls{align-items:flex-start}.v26-control-group{width:100%;justify-content:space-between}.v26-community{grid-template-columns:1fr}.v26-community-side,.v26-community-detail{border:0;border-bottom:1px solid var(--border-1)}.comm-box.v26-wide{width:100vw!important;height:100vh!important;max-height:100vh!important;border-radius:0!important}.v26-q-hero{grid-template-columns:1fr}.v26-mini-kpis{grid-template-columns:1fr 1fr}.v26-pack-meta{grid-template-columns:1fr}.v26-pipeline{grid-template-columns:1fr}}
</style>

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



<!-- ═══════════════════════════════════════════════════════════
     v27 UX HARDENING — readability, full popups, community loop,
     simple permission model, stable companion
     ═══════════════════════════════════════════════════════════ -->
<style id="v27-polish-css">
/* v27 global readability: keep the concept, make it easier to read */
html[data-font-size="small"]{--v26-text-scale:1.00!important}
html[data-font-size="standard"]{--v26-text-scale:1.12!important}
html[data-font-size="large"]{--v26-text-scale:1.26!important}
body{font-size:calc(14.5px * var(--v26-text-scale))!important}
.ai-tx{font-size:calc(15.6px * var(--v26-text-scale))!important;line-height:1.92!important}
.msg-b{font-size:calc(15.2px * var(--v26-text-scale))!important;line-height:1.78!important}
.v26-control-label,.sb-lb,.v25-table th,.large-table th,.at2 th{letter-spacing:.45px!important}
.v26-mode-btn,.v26-size-btn{font-size:calc(12.5px * var(--v26-text-scale))!important;padding:7px 12px!important}
.v26-chat-controls{padding:10px 13px 9px!important;gap:14px!important}
.rp-tab,.rp-t,.src-chip,.src-hd-qt,.src-doc-nm,.src-pgnav,.v25-btn,.v23-btn,.companion-action{font-size:calc(12.5px * var(--v26-text-scale))!important}

/* Popup usability */
.large-modal{padding:18px!important;align-items:center!important;justify-content:center!important}
.large-box{width:min(1480px,98vw)!important;height:min(94vh,1040px)!important;max-height:94vh!important;border-radius:18px!important;display:flex!important;flex-direction:column!important}
.large-modal.full{padding:0!important}
.large-modal.full .large-box{width:100vw!important;height:100vh!important;max-height:100vh!important;border-radius:0!important;border-left:0!important;border-right:0!important}
.large-hd{padding:18px 24px!important;gap:14px!important;flex-shrink:0!important}
.large-title{font-size:calc(19px * var(--v26-text-scale))!important;white-space:normal!important;line-height:1.35!important}
.large-sub{font-size:calc(12.5px * var(--v26-text-scale))!important;line-height:1.55!important;max-width:980px!important}
.large-toolbar{padding:14px 24px!important;gap:10px!important;flex-wrap:wrap!important;flex-shrink:0!important}
.large-search{min-width:min(520px,100%)!important;flex:1 1 420px!important;padding:10px 13px!important}
.large-search input{font-size:calc(14px * var(--v26-text-scale))!important}
.large-body{padding:16px 24px 22px!important;overflow:auto!important;min-height:0!important;flex:1!important}
.large-table{min-width:1180px!important;border-spacing:0 8px!important}
.large-table td{padding:13px 12px!important;line-height:1.5!important;font-size:calc(13.8px * var(--v26-text-scale))!important;white-space:normal!important}
.large-table th{padding:0 12px 6px!important;font-size:calc(11px * var(--v26-text-scale))!important;white-space:nowrap!important}
.doc-name-strong,.v25-doc-title{font-size:calc(14.8px * var(--v26-text-scale))!important;line-height:1.38!important}
.doc-subtle,.v25-doc-path{font-size:calc(11.5px * var(--v26-text-scale))!important;line-height:1.45!important}
.v25-folder-layout{display:grid!important;grid-template-columns:280px minmax(0,1fr)!important;gap:16px!important;min-height:0!important;height:100%!important}
.v25-folder-tree{position:sticky!important;top:0!important;align-self:start!important;max-height:calc(94vh - 235px)!important;overflow:auto!important}
.large-modal.full .v25-folder-tree{max-height:calc(100vh - 235px)!important}
.v25-folder{font-size:calc(13px * var(--v26-text-scale))!important;padding:12px 12px!important}
.large-table-wrap{overflow:auto!important;max-height:100%!important;min-width:0!important}
.v27-modal-actions{display:flex;align-items:center;gap:8px;flex-shrink:0}.v27-icon-btn{width:34px;height:34px;border-radius:9px;border:1px solid var(--border-1);background:var(--bg-3);color:var(--text-3);cursor:pointer;font-family:inherit;font-weight:900;display:flex;align-items:center;justify-content:center}.v27-icon-btn:hover{background:var(--accent-dim);border-color:var(--accent-bd);color:var(--accent)}

/* Clearer workflow states */
.v27-state{display:inline-flex;align-items:center;gap:6px;border-radius:999px;padding:5px 9px;font-size:12px;font-weight:900;white-space:nowrap}.v27-state.draft{background:var(--a-dim);color:var(--a)}.v27-state.requested{background:var(--accent-dim);color:var(--accent)}.v27-state.review{background:var(--v-dim);color:var(--v)}.v27-state.returned{background:var(--r-dim);color:var(--r)}.v27-state.live{background:var(--g-dim);color:var(--g)}
.v27-stage-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:14px}.v27-stage-card{background:var(--bg-2);border:1px solid var(--border-1);border-radius:14px;padding:13px}.v27-stage-card .n{font-family:'Outfit';font-size:22px;font-weight:900;color:var(--text-1)}.v27-stage-card .l{font-size:12px;color:var(--text-3);line-height:1.45;margin-top:2px}

/* Source evidence panel: bigger and can be expanded */
.rp.sh{width:540px!important;min-width:540px!important;box-shadow:-8px 0 34px rgba(0,0,0,.20)!important}
.rp.source-full{position:fixed!important;right:0!important;top:0!important;bottom:0!important;height:100vh!important;width:min(940px,94vw)!important;min-width:min(940px,94vw)!important;z-index:960!important;border-left:1px solid var(--border-2)!important;box-shadow:-24px 0 90px rgba(0,0,0,.55)!important}
.src-hd{padding:16px 18px 13px!important}.src-hd-q{font-size:12px!important}.src-hd-qt{font-size:14px!important;line-height:1.6!important}
.src-chips{padding:12px 16px!important;gap:7px!important}.src-chip{padding:7px 11px!important;border-radius:16px!important}
.src-vw{padding:16px 18px 20px!important}.src-doc-meta{margin-bottom:12px!important}.src-doc-type{width:32px!important;height:32px!important;font-size:11px!important;border-radius:8px!important}.src-doc-nm{font-size:14px!important}.src-doc-pa{font-size:11px!important}.src-doc-sec{font-size:11px!important;padding:4px 8px!important}
.src-pgnav{padding:10px 12px!important;font-size:12px!important;border-radius:10px!important}.src-pgnav-btn{width:28px!important;height:28px!important;font-size:13px!important}.src-pgnav-cnt{font-size:12px!important;min-width:72px!important}
.src-page{font-size:14px!important;line-height:1.95!important;padding:34px 36px 30px!important;min-height:560px!important;border-radius:10px!important}.src-page-ti{font-size:20px!important;line-height:1.35!important}.src-page-sub{font-size:13px!important}.src-page h4{font-size:16px!important}.src-page table{font-size:13px!important}.src-page table th,.src-page table td{padding:8px 10px!important}.src-slide{padding:32px 38px!important;min-height:420px!important}.src-slide-ti{font-size:22px!important}.src-slide-sub{font-size:14px!important}.src-slide p,.src-slide li{font-size:14px!important;line-height:1.7!important}
@media(max-width:1180px){.rp.sh{width:460px!important;min-width:460px!important}.v25-folder-layout{grid-template-columns:1fr!important}.v25-folder-tree{position:relative!important;max-height:220px!important}.large-table{min-width:1050px!important}}
@media(max-width:760px){.rp.sh{position:fixed!important;right:0!important;top:0!important;bottom:0!important;width:100vw!important;min-width:100vw!important;z-index:960!important}.large-modal{padding:0!important}.large-box{width:100vw!important;height:100vh!important;max-height:100vh!important;border-radius:0!important}.large-toolbar{align-items:stretch!important}.large-search{min-width:100%!important}.v27-stage-strip{grid-template-columns:1fr 1fr!important}}

/* Community: larger, clearer, more social */
.comm-box.v27-wide,.comm-box.v26-wide{width:min(1760px,98.5vw)!important;height:96vh!important;max-height:96vh!important;border-radius:20px!important}.comm-box.v27-full{width:100vw!important;height:100vh!important;max-height:100vh!important;border-radius:0!important}.comm-box.v27-wide .comm-body,.comm-box.v27-full .comm-body{padding:0!important;overflow:hidden!important}.comm-box.v27-wide .comm-hd,.comm-box.v27-full .comm-hd{padding:16px 24px!important;gap:12px!important}.v27-comm-toolbar{display:flex;align-items:center;gap:8px;margin-left:auto}.v27-comm-shell{height:100%;display:grid;grid-template-columns:280px minmax(540px,1fr) minmax(460px,560px);background:var(--bg-1);min-height:0}.v27-comm-left,.v27-comm-main,.v27-comm-detail{min-height:0;overflow:auto}.v27-comm-left{border-right:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1));padding:20px 16px}.v27-comm-main{padding:20px 22px}.v27-comm-detail{border-left:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1));padding:20px}
.v27-comm-title{font-size:26px;font-weight:950;letter-spacing:-.6px;color:var(--text-1);line-height:1.25}.v27-comm-sub{font-size:14px;color:var(--text-3);line-height:1.65;margin-top:5px}.v27-search{display:flex;align-items:center;gap:10px;background:var(--bg-1);border:1px solid var(--border-2);border-radius:14px;padding:13px 15px;margin-top:16px}.v27-search input{flex:1;background:none;border:0;outline:0;color:var(--text-1);font-size:16px;font-family:inherit}.v27-stats{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin:18px 0}.v27-stat{background:var(--bg-1);border:1px solid var(--border-1);border-radius:14px;padding:14px}.v27-stat .v{font-family:'Outfit';font-size:26px;font-weight:950;color:var(--text-1)}.v27-stat .l{font-size:12px;color:var(--text-4);margin-top:2px}.v27-filter-title{font-size:12px;font-weight:950;color:var(--text-4);text-transform:uppercase;letter-spacing:.9px;margin:18px 4px 8px}.v27-cat{width:100%;display:flex;justify-content:space-between;gap:8px;border:0;background:transparent;color:var(--text-3);border-radius:12px;padding:12px;font-size:14px;font-weight:850;cursor:pointer}.v27-cat:hover,.v27-cat.on{background:var(--accent-dim);color:var(--accent)}.v27-tag-cloud{display:flex;gap:7px;flex-wrap:wrap}.v27-tag{border:1px solid var(--border-1);background:var(--bg-1);color:var(--text-3);border-radius:999px;padding:7px 10px;font-size:12.5px;font-weight:800;cursor:pointer}.v27-tag:hover,.v27-tag.on{background:var(--accent-dim);border-color:var(--accent-bd);color:var(--accent)}.v27-list-head{display:flex;align-items:center;justify-content:space-between;gap:12px;background:linear-gradient(135deg,var(--bg-2),var(--bg-1));border:1px solid var(--border-1);border-radius:18px;padding:18px;margin-bottom:14px}.v27-list-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.v27-btn{border:1px solid var(--border-2);background:var(--bg-3);color:var(--text-2);border-radius:11px;padding:10px 14px;font-size:14px;font-weight:850;font-family:inherit;cursor:pointer}.v27-btn:hover{border-color:var(--accent-bd);background:var(--accent-dim);color:var(--accent)}.v27-btn.primary{border:0;background:var(--accent-g);color:#fff}.v27-q-list{display:flex;flex-direction:column;gap:11px}.v27-q-card{background:var(--bg-2);border:1px solid var(--border-1);border-radius:18px;padding:17px;cursor:pointer;transition:.12s}.v27-q-card:hover{border-color:var(--border-3);transform:translateY(-1px)}.v27-q-card.on{border-color:var(--accent-bd);background:linear-gradient(135deg,var(--accent-dim),var(--bg-2))}.v27-q-row{display:flex;gap:14px}.v27-vote-box{width:62px;flex:0 0 62px;border:1px solid var(--border-1);background:var(--bg-1);border-radius:14px;text-align:center;padding:10px 6px}.v27-vote-box .n{font-family:'Outfit';font-size:25px;font-weight:950;color:var(--accent)}.v27-vote-box .l{font-size:11px;color:var(--text-4)}.v27-q-title{font-size:19px;font-weight:950;color:var(--text-1);line-height:1.42;margin-bottom:7px}.v27-q-body{font-size:15px;color:var(--text-2);line-height:1.72;margin-bottom:11px}.v27-meta{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:13px;color:var(--text-4)}.v27-pill{display:inline-flex;align-items:center;gap:5px;border-radius:999px;padding:5px 9px;font-size:12px;font-weight:900}.v27-pill.green{background:var(--g-dim);color:var(--g)}.v27-pill.blue{background:var(--accent-dim);color:var(--accent)}.v27-pill.amber{background:var(--a-dim);color:var(--a)}.v27-pill.red{background:var(--r-dim);color:var(--r)}.v27-pill.violet{background:var(--v-dim);color:var(--v)}.v27-detail-card{background:var(--bg-1);border:1px solid var(--border-1);border-radius:18px;padding:20px}.v27-detail-title{font-size:22px;font-weight:950;line-height:1.35;margin:10px 0;color:var(--text-1)}.v27-detail-body{font-size:15.5px;color:var(--text-2);line-height:1.85}.v27-answer{border:1px solid var(--border-1);background:var(--bg-2);border-radius:16px;padding:16px;margin-top:12px}.v27-answer-h{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px}.v27-answer-author{font-size:14px;font-weight:950;color:var(--text-1)}.v27-answer-body{font-size:15px;color:var(--text-2);line-height:1.78}.v27-answer-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.v27-reply textarea{width:100%;min-height:130px;resize:vertical;background:var(--bg-2);border:1px solid var(--border-1);border-radius:14px;color:var(--text-1);font-size:15px;line-height:1.7;padding:14px;font-family:inherit;outline:0}.v27-loop-card{display:flex;gap:12px;align-items:flex-start;background:linear-gradient(135deg,var(--accent-dim),var(--bg-1));border:1px solid var(--accent-bd);border-radius:18px;padding:16px;margin-bottom:16px}.v27-loop-ic{width:58px;height:58px;border-radius:18px;background:radial-gradient(circle at 35% 22%,#7FB2FF,#3768B7 70%);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0}.v27-loop-title{font-size:16px;font-weight:950;color:var(--text-1)}.v27-loop-desc{font-size:13.5px;color:var(--text-3);line-height:1.6;margin-top:4px}.v27-empty{border:1px dashed var(--border-2);background:var(--bg-1);border-radius:18px;padding:28px;text-align:center;color:var(--text-3);font-size:15px;line-height:1.7}
@media(max-width:1300px){.v27-comm-shell{grid-template-columns:245px minmax(420px,1fr)}.v27-comm-detail{grid-column:1/-1;border-left:0;border-top:1px solid var(--border-1);max-height:44vh}.comm-box.v27-wide .comm-body{overflow:auto!important}.v27-comm-shell{height:auto;min-height:100%;}.v27-comm-left{max-height:none}.v27-comm-main{max-height:none}}
@media(max-width:900px){.v27-comm-shell{grid-template-columns:1fr}.v27-comm-left,.v27-comm-detail{border:0;border-bottom:1px solid var(--border-1)}.v27-list-head{flex-direction:column;align-items:stretch}.v27-q-row{flex-direction:column}.v27-vote-box{width:100%;display:flex;justify-content:space-between;align-items:center}}

/* Ask modal v27 */
.v27-ask-modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.58);backdrop-filter:blur(5px);z-index:980;padding:20px}.v27-ask-modal.sh{display:flex}.v27-ask-box{width:min(850px,96vw);max-height:92vh;background:var(--bg-1);border:1px solid var(--border-2);border-radius:20px;box-shadow:0 28px 90px rgba(0,0,0,.55);overflow:hidden;display:flex;flex-direction:column}.v27-ask-h{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:20px 24px;border-bottom:1px solid var(--border-1);background:linear-gradient(135deg,var(--bg-2),var(--bg-1))}.v27-ask-title{font-size:22px;font-weight:950;color:var(--text-1)}.v27-ask-body{padding:22px 24px;overflow:auto}.v27-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.v27-field{margin-bottom:16px}.v27-field label{display:block;font-size:13px;font-weight:950;color:var(--text-3);margin-bottom:8px}.v27-field input,.v27-field textarea{width:100%;background:var(--bg-2);border:1px solid var(--border-1);border-radius:13px;color:var(--text-1);font-family:inherit;font-size:15px;padding:13px 14px;outline:0}.v27-field textarea{min-height:170px;resize:vertical;line-height:1.7}.v27-tag-editor{display:flex;align-items:center;gap:7px;flex-wrap:wrap;background:var(--bg-2);border:1px solid var(--border-1);border-radius:13px;padding:8px}.v27-tag-editor input{border:0;background:transparent;padding:6px;min-width:160px;flex:1}.v27-tag-item{display:inline-flex;align-items:center;gap:6px;border-radius:999px;background:var(--accent-dim);color:var(--accent);padding:7px 10px;font-size:13px;font-weight:900}.v27-tag-item button{border:0;background:transparent;color:var(--accent);cursor:pointer}.v27-ask-foot{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 24px;border-top:1px solid var(--border-1);background:var(--bg-2)}

/* Simple user/permission admin */
.v27-permission{display:grid;grid-template-columns:1.05fr .95fr;gap:14px}.v27-perm-card{background:var(--bg-2);border:1px solid var(--border-1);border-radius:18px;padding:18px}.v27-perm-card h3{font-size:18px;color:var(--text-1);margin-bottom:6px}.v27-perm-card p{font-size:14px;color:var(--text-3);line-height:1.65}.v27-role-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0}.v27-role{background:var(--bg-1);border:1px solid var(--border-1);border-radius:15px;padding:15px}.v27-role .ic{font-size:24px;margin-bottom:8px}.v27-role .t{font-size:15px;font-weight:950;color:var(--text-1)}.v27-role .d{font-size:12.5px;color:var(--text-3);line-height:1.55;margin-top:4px}.v27-admin-row{display:grid;grid-template-columns:150px 1fr 150px 120px;gap:10px;align-items:center;background:var(--bg-1);border:1px solid var(--border-1);border-radius:13px;padding:12px;margin-bottom:8px}.v27-admin-row .team{font-size:14px;font-weight:950;color:var(--text-1)}.v27-admin-row .user{font-size:14px;color:var(--text-2)}.v27-admin-row .sync{font-size:12px;color:var(--text-4)}.v27-matrix{width:100%;border-collapse:separate;border-spacing:0 8px}.v27-matrix th{font-size:12px;color:var(--text-4);text-align:left;padding:0 10px}.v27-matrix td{background:var(--bg-1);border-top:1px solid var(--border-1);border-bottom:1px solid var(--border-1);padding:13px 10px;font-size:14px;color:var(--text-2)}.v27-matrix td:first-child{border-left:1px solid var(--border-1);border-radius:12px 0 0 12px;font-weight:900;color:var(--text-1)}.v27-matrix td:last-child{border-right:1px solid var(--border-1);border-radius:0 12px 12px 0}
@media(max-width:1100px){.v27-permission,.v26-admin-hero,.v26-pack-layout{grid-template-columns:1fr!important}.v27-role-grid{grid-template-columns:1fr}.v27-admin-row{grid-template-columns:1fr}}

/* Mode/data management made simpler */
.v27-mode-console{display:grid;grid-template-columns:290px 1fr;gap:14px}.v27-mode-side{background:var(--bg-2);border:1px solid var(--border-1);border-radius:18px;padding:12px}.v27-mode-select{width:100%;display:flex;justify-content:space-between;align-items:center;gap:8px;border:0;background:transparent;color:var(--text-3);border-radius:13px;padding:13px;cursor:pointer;font-size:14px;font-weight:950}.v27-mode-select:hover,.v27-mode-select.on{background:var(--accent-dim);color:var(--accent)}.v27-pack-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.v27-pack{background:var(--bg-2);border:1px solid var(--border-1);border-radius:16px;padding:15px}.v27-pack-top{display:flex;justify-content:space-between;gap:10px;align-items:flex-start}.v27-pack-title{font-size:15px;font-weight:950;color:var(--text-1);line-height:1.4}.v27-pack-meta{font-size:12.5px;color:var(--text-3);line-height:1.55;margin-top:5px}.v27-toggle{width:42px;height:23px;border-radius:999px;background:var(--bg-5);position:relative;cursor:pointer;flex:0 0 auto}.v27-toggle:after{content:'';position:absolute;width:17px;height:17px;border-radius:50%;background:#fff;left:3px;top:3px;transition:.14s}.v27-toggle.on{background:var(--accent)}.v27-toggle.on:after{left:22px}.v27-exception{background:var(--bg-1);border:1px solid var(--border-1);border-radius:14px;padding:13px;margin-top:12px}.v27-exception-title{font-size:13px;font-weight:950;color:var(--text-1);margin-bottom:7px}.v27-flow-simple{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin:14px 0}.v27-flow-node{background:var(--bg-2);border:1px solid var(--border-1);border-radius:14px;padding:14px;text-align:center;position:relative}.v27-flow-node:not(:last-child):after{content:'→';position:absolute;right:-11px;top:50%;transform:translateY(-50%);color:var(--text-4);font-weight:950}.v27-flow-node .ic{font-size:22px}.v27-flow-node .t{font-size:13px;font-weight:950;color:var(--text-1);margin-top:6px}.v27-source-health{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.v27-health-card{background:var(--bg-2);border:1px solid var(--border-1);border-radius:16px;padding:15px}.v27-health-title{font-size:15px;font-weight:950;color:var(--text-1);display:flex;justify-content:space-between;gap:8px}.v27-health-desc{font-size:12.5px;color:var(--text-3);line-height:1.55;margin-top:6px}.v27-health-bar{height:8px;background:var(--bg-4);border-radius:999px;overflow:hidden;margin-top:10px}.v27-health-bar span{display:block;height:100%;background:var(--g);border-radius:999px}.v27-health-bar.warn span{background:var(--a)}
@media(max-width:1100px){.v27-mode-console{grid-template-columns:1fr}.v27-pack-list,.v27-source-health,.v27-flow-simple{grid-template-columns:1fr}.v27-flow-node:after{display:none}}

/* Companion: stable, visible, playful */
.companion-card{overflow:visible!important}.companion-main{overflow:visible!important;position:relative!important;border-radius:18px!important}.companion-main>.buddy-3d{width:82px!important;height:82px!important;flex-basis:82px!important;margin:-8px 0 -4px -2px!important;overflow:visible!important}.buddy-3d{overflow:visible!important}.buddy-hat{top:-5px!important;z-index:5!important}.buddy-face,.buddy-body,.buddy-hair,.buddy-arm,.buddy-wheel,.buddy-eye,.buddy-smile,.buddy-badge{z-index:2}.companion-hub{transition:left .8s var(--ease),right .8s var(--ease),bottom .8s var(--ease),transform .2s var(--ease)!important}.companion-hub.v27-walk{animation:v27BuddyBob 3.2s ease-in-out infinite}.companion-hub.v27-left{right:auto!important;left:22px!important}.companion-hub.v27-right{left:auto!important;right:22px!important}.v27-buddy-speech{position:absolute;right:6px;bottom:calc(100% + 12px);max-width:310px;background:var(--bg-1);border:1px solid var(--border-2);border-radius:16px 16px 4px 16px;padding:12px 14px;font-size:13px;color:var(--text-2);line-height:1.55;box-shadow:0 14px 38px rgba(0,0,0,.35);display:none;z-index:20}.v27-buddy-speech.sh{display:block;animation:fu .18s var(--ease)}.v27-buddy-speech:after{content:'';position:absolute;right:28px;bottom:-7px;width:14px;height:14px;background:var(--bg-1);border-right:1px solid var(--border-2);border-bottom:1px solid var(--border-2);transform:rotate(45deg)}@keyframes v27BuddyBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.mp-character-hero{overflow:visible!important;min-height:150px!important}.mp-character-hero .buddy-3d{width:124px!important;height:124px!important;flex-basis:124px!important;transform:none!important;margin:0 8px!important}.mp-character-title{font-size:22px!important}.mp-character-desc{font-size:14px!important}#ct-char .char-room{overflow:visible!important;min-height:360px!important}.v23-char-scene{height:260px!important;width:240px!important}.v23-char-scene .buddy-3d{left:78px!important;top:55px!important;transform:scale(1.75)!important}.v23-char-scene .buddy-3d:hover{transform:scale(1.82) translateY(-4px)!important}.shop-item,.inv-slot,.char-sel{touch-action:manipulation!important}.shop-grid{grid-template-columns:repeat(auto-fill,minmax(106px,1fr))!important}.shop-item{min-height:102px!important;padding:13px 10px!important}.shop-ic{font-size:30px!important}.shop-nm{font-size:12px!important}.shop-pr{font-size:12px!important}
</style>

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


<style id="v27-final-touch-css">
.v27-font-shortcut{background:var(--accent-dim)!important;color:var(--accent)!important;border-color:var(--accent-bd)!important;font-weight:900!important}
.v27-font-shortcut strong{font-family:'Outfit',sans-serif;font-size:14px}
</style>
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


<style id="v28-final-polish">
/* v28 final polish: readability, modal sizing, source evidence, community and character stability */
:root{--v28-radius:18px;--v28-fast:.12s;}
html[data-font-size="small"]{--v26-text-scale:1.04!important}
html[data-font-size="standard"]{--v26-text-scale:1.16!important}
html[data-font-size="large"]{--v26-text-scale:1.32!important}
body,.ai-tx,.ct td,.at2 td,.v27-q-body,.v27-detail-body{font-size:calc(14px * var(--v26-text-scale,1))}
.tb-t,.brand-n,.adm-h h2{letter-spacing:-.02em}.tb{min-height:58px}.sc-sw{display:none!important}
/* Popup: bigger, scroll-safe, fullscreen-ready */
.large-modal{padding:16px!important;overflow:hidden!important}.large-modal.sh{display:flex!important}.large-box{width:min(1480px,98vw)!important;max-height:96vh!important;height:min(900px,96vh)!important;border-radius:20px!important}.large-modal.full .large-box{width:100vw!important;height:100vh!important;max-height:100vh!important;border-radius:0!important;border-left:0!important;border-right:0!important}.large-hd{padding:18px 24px!important}.large-title{font-size:calc(18px * var(--v26-text-scale,1))!important}.large-sub{font-size:calc(12.5px * var(--v26-text-scale,1))!important}.large-toolbar{flex-wrap:wrap!important;padding:13px 24px!important}.large-body{flex:1!important;min-height:0!important;overflow:auto!important;padding:16px 24px 24px!important}.large-table-wrap{overflow:auto!important;max-height:calc(96vh - 270px)!important;border-radius:14px!important}.large-modal.full .large-table-wrap{max-height:calc(100vh - 260px)!important}.large-table{min-width:1180px!important}.large-table td{font-size:calc(13.2px * var(--v26-text-scale,1))!important;line-height:1.5!important}.large-table th{font-size:calc(11px * var(--v26-text-scale,1))!important}.v27-stage-strip{grid-template-columns:repeat(5,minmax(0,1fr))!important}.v27-stage-card{min-height:92px!important}.v27-stage-card .l{font-size:calc(12.2px * var(--v26-text-scale,1))!important}.v27-state{font-size:calc(12px * var(--v26-text-scale,1))!important}
/* Evidence panel: stronger presence */
.rp.sh{width:min(640px,42vw)!important;min-width:min(640px,42vw)!important}.rp.source-full{width:min(1040px,96vw)!important;min-width:min(1040px,96vw)!important}.rp-h{min-height:56px!important}.rp-t{font-size:calc(15px * var(--v26-text-scale,1))!important}.src-page{box-shadow:0 12px 36px rgba(0,0,0,.22)!important}.src-mark,.src-hi,mark{box-shadow:0 0 0 3px rgba(255,223,92,.12)!important}.sr-c,.cr{cursor:pointer!important}
/* Community: fullscreen-like reading space */
.comm-box.v27-wide{width:min(1880px,99vw)!important;height:97vh!important;max-height:97vh!important}.comm-box.v27-full{width:100vw!important;height:100vh!important;max-height:100vh!important}.v27-comm-shell{grid-template-columns:300px minmax(620px,1fr) minmax(520px,620px)!important}.v27-comm-main,.v27-comm-left,.v27-comm-detail{scrollbar-gutter:stable!important}.v27-q-card{padding:19px!important}.v27-q-title{font-size:calc(19px * var(--v26-text-scale,1))!important}.v27-q-body{font-size:calc(15px * var(--v26-text-scale,1))!important}.v27-detail-title{font-size:calc(23px * var(--v26-text-scale,1))!important}.v27-answer-body{font-size:calc(15px * var(--v26-text-scale,1))!important}.v27-loop-card{position:sticky;top:0;z-index:3;background:linear-gradient(135deg,var(--accent-dim),var(--bg-1))!important;backdrop-filter:blur(8px)}
/* Character: no clipping, clickable, playful */
.companion-hub{z-index:900!important;max-width:360px!important}.companion-card,.companion-main,.buddy-3d,.mp-character-hero,.char-room,.v23-char-scene{overflow:visible!important}.companion-main>.buddy-3d{width:92px!important;height:92px!important;flex-basis:92px!important;margin:-12px 2px -8px -4px!important}.buddy-hat{top:-7px!important}.buddy-badge{z-index:6!important}.v27-buddy-speech{font-size:calc(13px * var(--v26-text-scale,1))!important;max-width:360px!important}.mp-character-hero .buddy-3d{width:142px!important;height:142px!important;flex-basis:142px!important}.v23-char-scene .buddy-3d{transform:scale(1.85)!important}.v23-char-scene .buddy-3d:hover{transform:scale(1.92) translateY(-4px)!important}.shop-item,.inv-slot,.char-sel,.companion-action,.v27-btn{cursor:pointer!important;user-select:none!important}.shop-item:active,.companion-action:active,.v27-btn:active{transform:scale(.985)!important}
/* Permissions & data readability */
.v27-role .t,.v27-pack-title,.v27-health-title{font-size:calc(15px * var(--v26-text-scale,1))!important}.v27-perm-card p,.v27-pack-meta,.v27-health-desc{font-size:calc(12.8px * var(--v26-text-scale,1))!important}.v27-admin-row{grid-template-columns:180px minmax(180px,1fr) 160px 120px!important}.mode-note{font-size:calc(12px * var(--v26-text-scale,1))!important;line-height:1.65!important}
@media(max-width:1400px){.v27-comm-shell{grid-template-columns:260px minmax(440px,1fr)!important}.v27-comm-detail{grid-column:1/-1!important;max-height:46vh!important}.rp.sh{width:520px!important;min-width:520px!important}}
@media(max-width:900px){.large-modal{padding:0!important}.large-box{width:100vw!important;height:100vh!important;max-height:100vh!important;border-radius:0!important}.v27-stage-strip{grid-template-columns:1fr 1fr!important}.v27-comm-shell{grid-template-columns:1fr!important}.comm-box.v27-wide{width:100vw!important;height:100vh!important;max-height:100vh!important;border-radius:0!important}.rp.sh{width:100vw!important;min-width:100vw!important;position:fixed!important;top:0!important;bottom:0!important;right:0!important;z-index:960!important}.companion-hub{right:12px!important;bottom:12px!important;width:min(340px,calc(100vw - 24px))!important}}
</style>
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
  function boot(){normText();installModalTools();installCommunityTools();installEvidenceClick();installBuddyFallback();patchMypageChar();setInterval(()=>{normText();installEvidenceClick();patchMypageChar();},2500)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot); else boot();
})();

<style id="v29-css">
:root{--v29-scale:1.12}html[data-font-size=small]{--v29-scale:1.00!important;--v26-text-scale:1.06!important}html[data-font-size=standard]{--v29-scale:1.12!important;--v26-text-scale:1.18!important}html[data-font-size=large]{--v29-scale:1.26!important;--v26-text-scale:1.34!important}body,.app,.mn,.sb,.adm,.comm-box,.rp{font-size:calc(14px*var(--v29-scale))!important}.sb-i,.tb-b,.sc-btn,.msg-b,.ai-tx,.ct td,.ct th,.itb,.ih,.disc,.rp-tab,.src-doc-nm,.src-pgnav,.companion-action,.v29-btn,.v29-q-title,.v29-q-body,.v29-detail-body,.at2 td,.at2 th{font-size:calc(13px*var(--v29-scale))!important}.ai-tx{line-height:1.92!important}.tb{height:auto;min-height:74px;display:flex;flex-direction:column;padding:0 20px;background:var(--bg-1)}.tb-topline{display:flex;align-items:center;justify-content:space-between;width:100%;min-height:54px}.tb-l,.tb-r{height:auto;align-items:center}.tb-l>.sc-sw{display:flex!important}.tb-l>.sc-sw .sc-btn{padding:6px 12px!important}.web-tg-mini{display:none!important}.v29-notice{display:flex;align-items:center;gap:10px;width:100%;min-height:34px;padding:6px 2px 10px;border-top:1px solid var(--border-1);color:var(--text-2);font-size:calc(12px*var(--v29-scale));overflow:hidden}.v29-notice-badge{flex:0 0 auto;padding:4px 9px;border-radius:999px;background:var(--accent-dim);color:var(--accent);font-weight:900}.v29-notice-track{display:flex;gap:18px;white-space:nowrap;animation:v29Ticker 30s linear infinite}.v29-notice:hover .v29-notice-track{animation-play-state:paused}.v29-notice-item b{color:var(--text-1)}@keyframes v29Ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.v26-chat-controls{display:none!important}.v29-chat-tools{display:grid;grid-template-columns:minmax(240px,1fr) auto;gap:10px;padding:11px 12px 10px;border-bottom:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1));border-radius:var(--r-lg) var(--r-lg) 0 0;position:relative}.v29-mode-current{width:100%;display:flex;align-items:center;gap:10px;border:1px solid var(--border-2);background:var(--bg-3);border-radius:13px;padding:10px 12px;color:var(--text-1);font-family:inherit;cursor:pointer;text-align:left}.v29-mode-current:hover{border-color:var(--accent-bd);background:var(--accent-dim)}.v29-mode-icon{width:34px;height:34px;border-radius:11px;display:flex;align-items:center;justify-content:center;background:var(--accent-dim);color:var(--accent);font-size:18px;flex:0 0 auto}.v29-mode-copy{min-width:0;flex:1}.v29-mode-title{font-size:calc(14px*var(--v29-scale));font-weight:950}.v29-mode-desc{font-size:calc(11px*var(--v29-scale));color:var(--text-3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.v29-mode-menu{position:absolute;left:0;right:0;bottom:calc(100% + 8px);background:var(--bg-1);border:1px solid var(--border-2);border-radius:16px;padding:8px;box-shadow:0 18px 48px rgba(0,0,0,.45);z-index:50;display:none}.v29-mode-menu.sh{display:grid;grid-template-columns:1fr 1fr;gap:7px}.v29-mode-option{border:1px solid var(--border-1);background:var(--bg-2);border-radius:13px;padding:11px;cursor:pointer;color:var(--text-2);text-align:left;font-family:inherit}.v29-mode-option:hover,.v29-mode-option.on{border-color:var(--accent-bd);background:var(--accent-dim);color:var(--accent)}.v29-mode-option .t{font-size:calc(13px*var(--v29-scale));font-weight:950}.v29-mode-option .d{font-size:calc(10.8px*var(--v29-scale));line-height:1.45;color:var(--text-3);margin-top:4px}.v29-size-panel{display:flex;align-items:center;gap:4px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:13px;padding:5px}.v29-size-panel .lb{font-size:calc(10px*var(--v29-scale));color:var(--text-4);font-weight:900;margin:0 4px}.v29-size-btn{border:0;background:transparent;color:var(--text-3);border-radius:9px;padding:7px 9px;font-size:calc(12px*var(--v29-scale));font-weight:850;cursor:pointer;font-family:inherit}.v29-size-btn:hover,.v29-size-btn.on{background:var(--bg-5);color:var(--text-1)}
.rp{transition:width .18s ease,min-width .18s ease,opacity .14s ease!important}.rp.sh{width:min(720px,48vw)!important;min-width:min(720px,48vw)!important}.rp:not(.sh){width:0!important;min-width:0!important;opacity:0!important;border-left:0!important}.rp.source-full{position:fixed!important;top:0!important;right:0!important;bottom:0!important;width:min(1180px,92vw)!important;min-width:min(1180px,92vw)!important;z-index:1200!important;border-left:1px solid var(--border-2)!important;box-shadow:-18px 0 64px rgba(0,0,0,.55)!important}.src-vw{flex:1!important;min-height:0!important;overflow:hidden!important;padding:0!important}.v29-source-shell{height:100%;display:grid;grid-template-rows:auto 1fr;background:var(--bg-1)}.v29-src-meta{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 18px;border-bottom:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1))}.v29-src-name{font-size:calc(15px*var(--v29-scale));font-weight:950;color:var(--text-1)}.v29-src-path{font-size:calc(11px*var(--v29-scale));color:var(--text-4);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:520px}.v29-src-actions{display:flex;gap:6px;align-items:center}.v29-btn{border:1px solid var(--border-2);background:var(--bg-3);color:var(--text-2);border-radius:10px;padding:8px 10px;font-size:calc(12px*var(--v29-scale));font-weight:850;font-family:inherit;cursor:pointer}.v29-btn:hover{border-color:var(--accent-bd);background:var(--accent-dim);color:var(--accent)}.v29-src-body{min-height:0;display:grid;grid-template-columns:160px 1fr}.v29-page-list{border-right:1px solid var(--border-1);background:var(--bg-2);overflow:auto;padding:12px 8px}.v29-page-link{width:100%;display:flex;flex-direction:column;gap:3px;border:1px solid transparent;background:transparent;color:var(--text-3);border-radius:11px;padding:10px;cursor:pointer;text-align:left;font-family:inherit;margin-bottom:6px}.v29-page-link:hover,.v29-page-link.on{background:var(--accent-dim);border-color:var(--accent-bd);color:var(--accent)}.v29-page-link .p{font-size:calc(12px*var(--v29-scale));font-weight:950}.v29-page-link .t{font-size:calc(10.5px*var(--v29-scale));line-height:1.35}.v29-doc-scroll{min-height:0;overflow:auto;padding:20px 24px 42px;scroll-behavior:smooth}.v29-page-card{background:var(--bg-1);border:1px solid var(--border-2);border-radius:18px;padding:24px;margin:0 auto 22px;max-width:860px;box-shadow:0 12px 34px rgba(0,0,0,.18)}.v29-page-card.active{box-shadow:0 0 0 2px var(--accent-bd),0 18px 48px rgba(75,142,240,.12)}.v29-page-top{display:flex;justify-content:space-between;gap:8px;border-bottom:1px solid var(--border-1);padding-bottom:12px;margin-bottom:14px;color:var(--text-3);font-size:calc(12px*var(--v29-scale))}.v29-page-title{font-size:calc(18px*var(--v29-scale));font-weight:950;color:var(--text-1);margin-bottom:6px}.v29-page-sub{font-size:calc(12px*var(--v29-scale));color:var(--text-4);margin-bottom:16px}.v29-page-card p,.v29-page-card li{font-size:calc(14px*var(--v29-scale));line-height:1.82;color:var(--text-2)}.v29-page-card h4{font-size:calc(15px*var(--v29-scale));color:var(--text-1);margin:14px 0 8px}.v29-page-card table{width:100%;border-collapse:collapse;margin-top:10px}.v29-page-card td,.v29-page-card th{border:1px solid var(--border-1);padding:8px 10px;font-size:calc(12.5px*var(--v29-scale));color:var(--text-2)}.src-hi.primary,.src-hi{background:rgba(255,217,61,.32)!important;color:var(--text-1)!important;border-radius:4px;padding:1px 3px;box-shadow:0 0 0 3px rgba(255,217,61,.10)!important}.v29-highlight-note{max-width:860px;margin:0 auto 20px;padding:12px 14px;border:1px solid rgba(255,217,61,.25);background:rgba(255,217,61,.08);border-radius:14px;color:var(--text-2);font-size:calc(12px*var(--v29-scale));line-height:1.55}
.comm-box.v29-wide{width:min(1620px,98vw)!important;height:96vh!important;max-height:96vh!important;border-radius:20px!important}.comm-box.v29-wide .comm-body{padding:0!important;overflow:hidden!important}.comm-box.v29-wide .comm-tabs{display:none!important}.v29-comm{height:100%;display:grid;grid-template-columns:260px minmax(560px,1fr) minmax(430px,520px);min-height:0;background:var(--bg-1)}.v29-comm-left,.v29-comm-main,.v29-comm-detail{min-height:0;overflow:auto}.v29-comm-left{border-right:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1));padding:20px 16px}.v29-comm-main{padding:20px 22px}.v29-comm-detail{border-left:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1));padding:20px}.v29-comm-title{font-size:calc(24px*var(--v29-scale));font-weight:950;line-height:1.22;color:var(--text-1);letter-spacing:-.04em}.v29-comm-sub{font-size:calc(13px*var(--v29-scale));color:var(--text-3);line-height:1.6;margin-top:6px}.v29-quick-stats{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:16px 0}.v29-quick-stat{background:var(--bg-1);border:1px solid var(--border-1);border-radius:14px;padding:12px}.v29-quick-stat .v{font-family:'Outfit';font-size:calc(20px*var(--v29-scale));font-weight:950;color:var(--text-1)}.v29-quick-stat .l{font-size:calc(11px*var(--v29-scale));color:var(--text-4);margin-top:2px}.v29-section-label{font-size:calc(11px*var(--v29-scale));font-weight:950;letter-spacing:.08em;color:var(--text-4);text-transform:uppercase;margin:18px 4px 8px}.v29-cat{width:100%;display:flex;align-items:center;justify-content:space-between;gap:8px;border:0;background:transparent;color:var(--text-3);border-radius:12px;padding:10px 12px;font-size:calc(13px*var(--v29-scale));font-weight:850;cursor:pointer;font-family:inherit}.v29-cat:hover,.v29-cat.on{background:var(--accent-dim);color:var(--accent)}.v29-tags{display:flex;gap:6px;flex-wrap:wrap}.v29-tag{display:inline-flex;align-items:center;border:1px solid var(--border-1);background:var(--bg-1);color:var(--text-3);border-radius:999px;padding:6px 9px;font-size:calc(11px*var(--v29-scale));font-weight:800;cursor:pointer;font-family:inherit}.v29-tag:hover,.v29-tag.on{background:var(--accent-dim);border-color:var(--accent-bd);color:var(--accent)}.v29-comm-hero{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;background:linear-gradient(135deg,var(--bg-2),var(--bg-1));border:1px solid var(--border-1);border-radius:20px;padding:20px;margin-bottom:14px}.v29-search{display:flex;align-items:center;gap:10px;background:var(--bg-1);border:1px solid var(--border-2);border-radius:14px;padding:12px 14px;margin-top:14px}.v29-search input{flex:1;background:transparent;border:0;outline:0;color:var(--text-1);font-size:calc(14px*var(--v29-scale));font-family:inherit}.v29-q-list{display:flex;flex-direction:column;gap:10px}.v29-hot-strip{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin-bottom:14px}.v29-hot-card{border:1px solid var(--accent-bd);background:linear-gradient(135deg,var(--accent-dim),var(--bg-2));border-radius:16px;padding:13px;cursor:pointer}.v29-hot-label{font-size:calc(10px*var(--v29-scale));font-weight:950;color:var(--accent);margin-bottom:5px}.v29-hot-title{font-size:calc(13px*var(--v29-scale));font-weight:950;color:var(--text-1);line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.v29-hot-meta{font-size:calc(10.5px*var(--v29-scale));color:var(--text-4);margin-top:7px}.v29-q-card{background:var(--bg-2);border:1px solid var(--border-1);border-radius:17px;padding:16px;cursor:pointer;transition:border-color .12s ease,background .12s ease}.v29-q-card:hover,.v29-q-card.on{border-color:var(--accent-bd);background:linear-gradient(135deg,rgba(75,142,240,.07),var(--bg-2))}.v29-q-head{display:flex;align-items:center;gap:8px;margin-bottom:8px}.v29-status{display:inline-flex;align-items:center;border-radius:999px;padding:4px 8px;font-size:calc(10.5px*var(--v29-scale));font-weight:950}.v29-status.hot{background:var(--r-dim);color:var(--r)}.v29-status.adopted,.v29-status.live{background:var(--g-dim);color:var(--g)}.v29-status.wait{background:var(--a-dim);color:var(--a)}.v29-status.new{background:var(--accent-dim);color:var(--accent)}.v29-q-title{font-size:calc(17px*var(--v29-scale));font-weight:950;line-height:1.42;color:var(--text-1);margin-bottom:7px}.v29-q-body{font-size:calc(13.5px*var(--v29-scale));line-height:1.7;color:var(--text-2);margin-bottom:10px}.v29-q-meta{display:flex;align-items:center;gap:9px;flex-wrap:wrap;color:var(--text-4);font-size:calc(11.5px*var(--v29-scale))}.v29-like-small{display:inline-flex;align-items:center;gap:4px;color:var(--text-3);font-weight:850}.v29-detail-card{background:var(--bg-1);border:1px solid var(--border-1);border-radius:18px;padding:20px}.v29-detail-title{font-size:calc(22px*var(--v29-scale));font-weight:950;line-height:1.34;color:var(--text-1);margin:8px 0}.v29-detail-body{font-size:calc(14.5px*var(--v29-scale));line-height:1.85;color:var(--text-2)}.v29-answer{background:var(--bg-2);border:1px solid var(--border-1);border-radius:16px;padding:15px;margin-top:12px}.v29-answer-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px}.v29-answer-author{font-size:calc(13px*var(--v29-scale));font-weight:950;color:var(--text-1)}.v29-answer-body{font-size:calc(13.5px*var(--v29-scale));line-height:1.78;color:var(--text-2)}.v29-action-row{display:flex;gap:7px;flex-wrap:wrap;margin-top:12px}.v29-reply textarea{width:100%;min-height:112px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:14px;color:var(--text-1);font-size:calc(14px*var(--v29-scale));line-height:1.7;padding:13px;font-family:inherit;resize:vertical;outline:0}.v29-loop{background:linear-gradient(135deg,var(--accent-dim),var(--bg-1));border:1px solid var(--accent-bd);border-radius:18px;padding:15px;margin-bottom:14px}.v29-loop .t{font-size:calc(14px*var(--v29-scale));font-weight:950;color:var(--text-1)}.v29-loop .d{font-size:calc(12px*var(--v29-scale));color:var(--text-3);line-height:1.6;margin-top:4px}
#v28BuddyNudge,#v27BuddySpeech{display:none!important}.companion-hub{z-index:950!important;right:22px!important;left:auto!important;bottom:24px!important;transition:transform .18s ease!important}.companion-hub.v27-left,.companion-hub.v27-right{right:22px!important;left:auto!important}.companion-card{border-radius:22px!important;border:1px solid rgba(75,142,240,.24)!important;background:rgba(12,15,21,.96)!important;box-shadow:0 18px 56px rgba(0,0,0,.44),0 0 0 1px rgba(255,255,255,.03)!important}.companion-main{padding:14px!important;background:radial-gradient(circle at 18% 8%,rgba(106,161,247,.28),transparent 45%),linear-gradient(135deg,rgba(75,142,240,.16),rgba(78,173,123,.08))!important}.companion-name{font-size:calc(14px*var(--v29-scale))!important;font-weight:950!important}.companion-msg{font-size:calc(11.5px*var(--v29-scale))!important;line-height:1.5!important}.companion-main>.buddy-3d{width:96px!important;height:96px!important;flex-basis:96px!important;margin:-14px 4px -10px -6px!important;animation:v29BuddyIdle 3.8s ease-in-out infinite;filter:drop-shadow(0 15px 22px rgba(75,142,240,.25))!important}.buddy-body{background:linear-gradient(145deg,#79B2FF,#2E6BD7 62%,#1B3F83)!important}.buddy-face{background:linear-gradient(145deg,#FFE1B8,#EBAA77)!important}.buddy-hair{background:linear-gradient(145deg,#1B2433,#39445A)!important}.buddy-arm.r{animation:v29Wave 2.8s ease-in-out infinite;transform-origin:left center}.buddy-badge{background:linear-gradient(135deg,var(--accent),#6AA1F7)!important;color:#fff!important;border:0!important;font-size:10px!important;font-weight:950}.v29-buddy-bubble{position:absolute;right:6px;bottom:calc(100% + 12px);max-width:380px;background:var(--bg-1);border:1px solid var(--border-2);border-radius:18px 18px 4px 18px;padding:13px 15px;font-size:calc(12.5px*var(--v29-scale));color:var(--text-2);line-height:1.58;box-shadow:0 16px 42px rgba(0,0,0,.42);display:none;z-index:40}.v29-buddy-bubble.sh{display:block;animation:fu .15s var(--ease)}.v29-buddy-bubble b{color:var(--text-1)}.companion-panel{gap:8px!important;padding:12px!important}.companion-action{font-size:calc(11.5px*var(--v29-scale))!important;padding:10px 9px!important}.companion-hub.v29-hop .buddy-3d{animation:v29BuddyHop .55s ease!important}@keyframes v29BuddyIdle{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-6px) rotate(-1.5deg)}}@keyframes v29Wave{0%,100%{transform:rotate(24deg)}45%{transform:rotate(-8deg)}}@keyframes v29BuddyHop{0%,100%{transform:translateY(0)}45%{transform:translateY(-18px)}}
@media(max-width:1350px){.v29-comm{grid-template-columns:230px minmax(460px,1fr)}.v29-comm-detail{grid-column:1/-1;border-left:0;border-top:1px solid var(--border-1);max-height:45vh}.v29-hot-strip{grid-template-columns:1fr}.rp.sh{width:560px!important;min-width:560px!important}}@media(max-width:900px){.tb{padding:0 12px}.tb-topline{height:auto;min-height:54px;flex-direction:column;align-items:stretch;padding:8px 0}.tb-l,.tb-r{height:auto;justify-content:space-between}.v29-chat-tools{grid-template-columns:1fr}.v29-mode-menu.sh{grid-template-columns:1fr}.v29-comm{grid-template-columns:1fr}.comm-box.v29-wide{width:100vw!important;height:100vh!important;max-height:100vh!important;border-radius:0!important}.rp.sh,.rp.source-full{position:fixed!important;top:0!important;right:0!important;bottom:0!important;width:100vw!important;min-width:100vw!important;z-index:1200!important}.v29-src-body{grid-template-columns:1fr}.v29-page-list{display:flex;gap:6px;overflow-x:auto;border-right:0;border-bottom:1px solid var(--border-1)}.v29-page-link{min-width:130px}.companion-hub{right:12px!important;bottom:12px!important;width:min(360px,calc(100vw - 24px))!important}}
</style>
(function(){
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const say=(m,i='✅',d=2200)=>{try{(window.toast||window.say||console.log)(m,i,d)}catch(e){console.log(i,m)}};
const MODES=['통합모드','생산자재 모드','일반자재 모드','원가모드'];
const modeInfo={'통합모드':['🌐','전체 구매 지식','승인된 구매 규정·업무표준·VAATZ 지식 전체를 검색합니다.'],'생산자재 모드':['🏭','생산자재 중심','부품·협력사·품질·생산 구매 관련 DB를 우선 검색합니다.'],'일반자재 모드':['📦','일반자재 중심','MRO·사무/설비·일반자재 계약 지식을 우선 검색합니다.'],'원가모드':['💰','원가/단가 중심','원가성 데이터와 단가 이력은 권한 확인 후 검색합니다.']};
function ls(k,f){try{return localStorage.getItem(k)||f}catch(e){return f}}function sls(k,v){try{localStorage.setItem(k,v)}catch(e){}}
let currentMode=ls('vaatz-current-mode','통합모드'),uiSize=ls('vaatz-font-size','standard');
function wrapTopbar(){const tb=$('.tb');if(!tb||$('.tb-topline'))return;const kids=Array.from(tb.children),line=document.createElement('div');line.className='tb-topline';kids.forEach(k=>line.appendChild(k));tb.appendChild(line)}
function installNotice(){wrapTopbar();const tb=$('.tb');if(!tb||$('#v29Notice'))return;const n=document.createElement('div');n.id='v29Notice';n.className='v29-notice';n.innerHTML='<span class="v29-notice-badge">📢 공지</span><div class="v29-notice-track"><span class="v29-notice-item"><b>시스템 업데이트</b> 답변 근거 뷰어가 스크롤형으로 개선되었습니다.</span><span class="v29-notice-item"><b>데이터마트</b> 원가 DB 일부 row 확인 필요 · System Admin 검토 중</span><span class="v29-notice-item"><b>커뮤니티</b> 채택 답변은 검증 후 AI 지식 후보로 반영됩니다.</span><span class="v29-notice-item"><b>시스템 업데이트</b> 답변 근거 뷰어가 스크롤형으로 개선되었습니다.</span><span class="v29-notice-item"><b>데이터마트</b> 원가 DB 일부 row 확인 필요 · System Admin 검토 중</span></div>';tb.appendChild(n)}
function updateScope(type){$$('.tb-l .sc-btn').forEach(b=>{const isMy=b.textContent.includes('내 파일');b.classList.toggle('on',type==='my'?isMy:!isMy)})}
window.rpT=function(force,tab){const rp=$('#rp');if(!rp)return;const open=typeof force==='boolean'?force:!rp.classList.contains('sh');rp.classList.toggle('sh',open);if(!open){rp.classList.remove('source-full');updateScope('all');return}if(tab&&window.rpSwitchTab)window.rpSwitchTab(tab);updateScope($('#rpTabMy')?.classList.contains('on')?'my':'all')};
window.scT=function(btn,type){if(btn){btn.parentElement?.querySelectorAll('.sc-btn').forEach(b=>b.classList.remove('on'));btn.classList.add('on')}const rp=$('#rp');if(type==='my'){const already=rp?.classList.contains('sh')&&$('#rpTabMy')?.classList.contains('on');if(already){rpT(false);return}rpT(true,'my');say('내 파일 패널을 열었습니다. 다시 누르거나 X로 닫을 수 있습니다.','📂',1500)}else{rpT(false);say('검색 범위: 구매지식으로 설정했습니다.','📚',1500)}};
function installChatTools(){const box=$('.ibx');if(!box||$('#v29ChatTools'))return;$$('.v26-chat-controls').forEach(x=>x.remove());const row=document.createElement('div');row.id='v29ChatTools';row.className='v29-chat-tools';row.innerHTML=`<div class="v29-mode-select"><button class="v29-mode-current" id="v29ModeCurrent" onclick="toggleModeMenuV29(event)"><span class="v29-mode-icon" id="v29ModeIcon">${modeInfo[currentMode][0]}</span><span class="v29-mode-copy"><span class="v29-mode-title" id="v29ModeTitle">${currentMode}</span><span class="v29-mode-desc" id="v29ModeDesc">${modeInfo[currentMode][2]}</span></span><span>⌃</span></button><div class="v29-mode-menu" id="v29ModeMenu">${MODES.map(m=>`<button class="v29-mode-option ${m===currentMode?'on':''}" data-mode="${m}" onclick="setChatModeV29('${m}')"><div class="t">${modeInfo[m][0]} ${m}</div><div class="d">${modeInfo[m][2]}</div></button>`).join('')}</div></div><div class="v29-size-panel"><span class="lb">화면</span>${[['small','작게'],['standard','표준'],['large','크게']].map(x=>`<button class="v29-size-btn ${x[0]===uiSize?'on':''}" data-size="${x[0]}" onclick="setFontSizeV29('${x[0]}')">${x[1]}</button>`).join('')}</div>`;box.insertBefore(row,box.firstChild);applyFontSize()}
window.toggleModeMenuV29=e=>{e&&e.stopPropagation();$('#v29ModeMenu')?.classList.toggle('sh')};
window.setChatModeV29=mode=>{currentMode=mode;sls('vaatz-current-mode',mode);window.currentAIMode=mode;try{window.setChatModeV26&&window.setChatModeV26(mode)}catch(e){};$('#v29ModeIcon')&&( $('#v29ModeIcon').textContent=modeInfo[mode][0]);$('#v29ModeTitle')&&( $('#v29ModeTitle').textContent=mode);$('#v29ModeDesc')&&( $('#v29ModeDesc').textContent=modeInfo[mode][2]);$$('.v29-mode-option').forEach(b=>b.classList.toggle('on',b.dataset.mode===mode));$('#v29ModeMenu')?.classList.remove('sh');say(`${mode}로 전환했습니다.`,'🧭',1600)};
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


<style id="v30-refinement-css">
/* v30 refinement: moderate sizing, fullscreen popups, simpler community priority */
:root{--v30-ui-scale:1;--v30-density:1;}
html[data-font-size="small"]{--v29-scale:.94!important;--v26-text-scale:.96!important;--v30-ui-scale:.94!important;--v30-density:.96!important;}
html[data-font-size="standard"]{--v29-scale:1!important;--v26-text-scale:1!important;--v30-ui-scale:1!important;--v30-density:1!important;}
html[data-font-size="large"]{--v29-scale:1.08!important;--v26-text-scale:1.08!important;--v30-ui-scale:1.08!important;--v30-density:1.04!important;}
body,.app,.mn,.sb,.adm,.comm-box,.rp{font-size:calc(14px * var(--v30-ui-scale))!important;}
.sb-i,.tb-b,.sc-btn,.msg-b,.ai-tx,.ct td,.ct th,.itb,.ih,.disc,.rp-tab,.src-doc-nm,.src-pgnav,.companion-action,.v29-btn,.at2 td,.at2 th{font-size:calc(13px * var(--v30-ui-scale))!important;}
.ai-tx{font-size:calc(14px * var(--v30-ui-scale))!important;line-height:1.86!important;}
.msg-b{font-size:calc(14px * var(--v30-ui-scale))!important;}
.v29-notice{font-size:calc(11.5px * var(--v30-ui-scale))!important;min-height:31px!important;padding:5px 2px 8px!important;}
.v29-notice-badge{padding:3px 8px!important;}
.v29-chat-tools{padding:9px 10px!important;gap:8px!important;}
.v29-mode-current{padding:8px 10px!important;border-radius:12px!important;}
.v29-mode-icon{width:30px!important;height:30px!important;border-radius:10px!important;font-size:16px!important;}
.v29-mode-title{font-size:calc(13px * var(--v30-ui-scale))!important;}
.v29-mode-desc{font-size:calc(10.5px * var(--v30-ui-scale))!important;}
.v29-size-btn{font-size:calc(11.5px * var(--v30-ui-scale))!important;padding:6px 8px!important;}
.v29-size-panel .lb{font-size:calc(9.5px * var(--v30-ui-scale))!important;}
/* Community: calmer hierarchy and HOT-first reading */
.comm-box.v29-wide{width:min(1580px,97vw)!important;height:94vh!important;max-height:94vh!important;border-radius:18px!important;}
.comm-box.v27-full,.comm-box.v30-full{width:100vw!important;height:100vh!important;max-height:100vh!important;border-radius:0!important;}
.comm-box.v27-full .comm-body,.comm-box.v30-full .comm-body{height:calc(100vh - 56px)!important;}
.v29-comm{grid-template-columns:238px minmax(520px,1fr) minmax(390px,470px)!important;}
.v29-comm-left{padding:17px 14px!important;}
.v29-comm-main{padding:17px 19px!important;}
.v29-comm-detail{padding:17px!important;}
.v29-comm-title{font-size:calc(20px * var(--v30-ui-scale))!important;line-height:1.25!important;letter-spacing:-.03em!important;}
.v29-comm-sub{font-size:calc(12px * var(--v30-ui-scale))!important;line-height:1.55!important;}
.v29-quick-stats{gap:7px!important;margin:13px 0!important;}
.v29-quick-stat{padding:10px!important;border-radius:13px!important;}
.v29-quick-stat .v{font-size:calc(17px * var(--v30-ui-scale))!important;}
.v29-quick-stat .l{font-size:calc(10px * var(--v30-ui-scale))!important;}
.v29-section-label{font-size:calc(10px * var(--v30-ui-scale))!important;margin:14px 4px 7px!important;}
.v29-cat{font-size:calc(12px * var(--v30-ui-scale))!important;padding:8px 10px!important;border-radius:10px!important;}
.v29-tag{font-size:calc(10.5px * var(--v30-ui-scale))!important;padding:5px 8px!important;}
.v29-comm-hero{padding:16px!important;border-radius:17px!important;margin-bottom:12px!important;}
.v29-search{padding:10px 12px!important;margin-top:12px!important;border-radius:12px!important;}
.v29-search input{font-size:calc(13px * var(--v30-ui-scale))!important;}
.v29-hot-strip{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important;margin-bottom:12px!important;}
.v29-hot-card{padding:12px!important;border-radius:14px!important;border-color:rgba(75,142,240,.22)!important;background:linear-gradient(135deg,rgba(75,142,240,.085),var(--bg-2))!important;}
.v29-hot-label{font-size:calc(9.5px * var(--v30-ui-scale))!important;margin-bottom:5px!important;}
.v29-hot-title{font-size:calc(12.5px * var(--v30-ui-scale))!important;line-height:1.45!important;}
.v29-hot-meta{font-size:calc(10px * var(--v30-ui-scale))!important;color:var(--text-4)!important;}
.v29-q-list{gap:8px!important;}
.v29-q-card{padding:14px!important;border-radius:15px!important;display:flex!important;flex-direction:column!important;gap:7px!important;}
.v29-q-card:hover{transform:none!important;}
.v29-q-title{font-size:calc(15px * var(--v30-ui-scale))!important;line-height:1.42!important;margin:0!important;order:1;}
.v29-q-body{font-size:calc(12.5px * var(--v30-ui-scale))!important;line-height:1.63!important;margin:0!important;order:2;}
.v29-q-head{order:3!important;margin:2px 0 0!important;padding-top:8px!important;border-top:1px solid var(--border-1)!important;}
.v29-q-meta{font-size:calc(10.8px * var(--v30-ui-scale))!important;gap:7px!important;order:3!important;color:var(--text-4)!important;}
.v29-like-small{font-size:calc(10px * var(--v30-ui-scale))!important;color:var(--text-4)!important;font-weight:700!important;opacity:.82!important;}
.v29-status{font-size:calc(9.8px * var(--v30-ui-scale))!important;padding:3px 7px!important;}
.v29-detail-card{padding:17px!important;border-radius:16px!important;}
.v29-detail-title{font-size:calc(18px * var(--v30-ui-scale))!important;line-height:1.38!important;}
.v29-detail-body{font-size:calc(13px * var(--v30-ui-scale))!important;line-height:1.76!important;}
.v29-answer{padding:13px!important;border-radius:14px!important;}
.v29-answer-author,.v29-answer-body{font-size:calc(12.5px * var(--v30-ui-scale))!important;}
.v29-reply textarea{font-size:calc(12.8px * var(--v30-ui-scale))!important;min-height:96px!important;}
.v29-loop{padding:13px!important;border-radius:15px!important;}
.v29-loop .t{font-size:calc(13px * var(--v30-ui-scale))!important;}
.v29-loop .d{font-size:calc(11.5px * var(--v30-ui-scale))!important;}
/* Popup fullscreen controls */
.v30-modal-tools{display:flex!important;align-items:center!important;gap:6px!important;margin-left:auto!important;}#v27CommMax{display:none!important}.v27-comm-toolbar{display:none!important;}
.v30-max-btn,.v27-icon-btn{width:30px!important;height:30px!important;border-radius:8px!important;border:1px solid var(--border-1)!important;background:var(--bg-3)!important;color:var(--text-3)!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;cursor:pointer!important;font-size:13px!important;font-family:inherit!important;}
.v30-max-btn:hover,.v27-icon-btn:hover{background:var(--accent-dim)!important;color:var(--accent)!important;border-color:var(--accent-bd)!important;}
.ov.v30-full .adm,.db-ov.v30-full .db-box,.mp-ov.v30-full .mp-box,.rq-m.v30-full .rq-b,.v26-ask-modal.v30-full .v26-ask-box,.v27-ask-modal.v30-full .v27-ask-box,.comm-ov.v30-full .comm-box{width:100vw!important;height:100vh!important;max-height:100vh!important;border-radius:0!important;}
.ov.v30-full .adm-b,.db-ov.v30-full .db-box,.mp-ov.v30-full .mp-body,.rq-m.v30-full .rq-b,.v26-ask-modal.v30-full .v26-ask-box,.v27-ask-modal.v30-full .v27-ask-box{max-height:100vh!important;}
.rq-m.v30-full .rq-b,.v26-ask-modal.v30-full .v26-ask-box,.v27-ask-modal.v30-full .v27-ask-box{display:flex!important;flex-direction:column!important;overflow:hidden!important;}
.v26-ask-modal.v30-full .v26-ask-body,.v27-ask-modal.v30-full .v27-ask-body{overflow:auto!important;flex:1!important;}
.db-ov.v30-full .db-list,.mp-ov.v30-full .mp-body{overflow:auto!important;}
/* Companion subtle polish */
.companion-main>.buddy-3d{width:88px!important;height:88px!important;flex-basis:88px!important;}
.companion-name{font-size:calc(13px * var(--v30-ui-scale))!important;}
.companion-msg{font-size:calc(10.8px * var(--v30-ui-scale))!important;}
.companion-action{font-size:calc(10.8px * var(--v30-ui-scale))!important;padding:8px 8px!important;}
@media(max-width:1350px){.v29-comm{grid-template-columns:220px minmax(430px,1fr)!important}.v29-comm-detail{grid-column:1/-1!important;border-left:0!important;border-top:1px solid var(--border-1)!important;max-height:42vh!important}.v29-hot-strip{grid-template-columns:1fr!important}}
@media(max-width:900px){.v29-comm{grid-template-columns:1fr!important}.v29-comm-left,.v29-comm-detail{border:0!important;border-bottom:1px solid var(--border-1)!important}.v29-hot-strip{grid-template-columns:1fr!important}.comm-box.v29-wide{width:100vw!important;height:100vh!important;max-height:100vh!important;border-radius:0!important}}
</style>


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



<!-- v31 final polish: restrained typography + simpler HOT-first community -->
<style id="v31-final-polish-css">
:root{--v31-scale:1}
html[data-font-size="small"]{--v29-scale:.92!important;--v26-text-scale:.94!important;--v30-ui-scale:.93!important;--v31-scale:.94!important}
html[data-font-size="standard"]{--v29-scale:.98!important;--v26-text-scale:1!important;--v30-ui-scale:.98!important;--v31-scale:1!important}
html[data-font-size="large"]{--v29-scale:1.06!important;--v26-text-scale:1.08!important;--v30-ui-scale:1.06!important;--v31-scale:1.08!important}
body,.app,.mn,.sb,.adm,.comm-box,.rp{font-size:calc(13px*var(--v31-scale))!important}
.ai-tx{font-size:calc(13.6px*var(--v31-scale))!important;line-height:1.82!important}.msg-b{font-size:calc(13.4px*var(--v31-scale))!important}.tb-b,.sb-i,.sc-btn,.itb,.v29-btn,.companion-action{font-size:calc(12px*var(--v31-scale))!important}.at2 td,.ct td,.v25-table td,.large-table td{font-size:calc(12.2px*var(--v31-scale))!important}.at2 th,.ct th,.v25-table th,.large-table th{font-size:calc(10px*var(--v31-scale))!important}
.v29-notice{font-size:calc(11px*var(--v31-scale))!important;min-height:30px!important}.v29-size-btn{font-size:calc(10.5px*var(--v31-scale))!important}.v29-mode-title{font-size:calc(12.5px*var(--v31-scale))!important}.v29-mode-desc{font-size:calc(10px*var(--v31-scale))!important}

/* 구매 커뮤니티를 덜 복잡하게: 좌측 통계 제거, HOT 우선, 추천/답변은 카드 하단 보조 정보 */
.comm-box.v29-wide{width:min(1480px,96vw)!important;height:92vh!important;max-height:92vh!important}.v29-comm{grid-template-columns:216px minmax(510px,1fr) minmax(380px,455px)!important}.v29-quick-stats{display:none!important}.v29-comm-left{padding:18px 14px!important}.v29-comm-title{font-size:calc(18px*var(--v31-scale))!important;line-height:1.3!important}.v29-comm-sub{font-size:calc(11.2px*var(--v31-scale))!important;color:var(--text-3)!important}.v29-section-label{font-size:calc(9.6px*var(--v31-scale))!important;margin:17px 4px 8px!important}.v29-cat{font-size:calc(11.6px*var(--v31-scale))!important;padding:8px 10px!important}.v29-tag{font-size:calc(10px*var(--v31-scale))!important;padding:4px 7px!important}
.v29-comm-hero{padding:14px 15px!important;border-radius:15px!important;margin-bottom:12px!important;background:linear-gradient(135deg,rgba(75,142,240,.07),var(--bg-2))!important}.v29-comm-hero .v29-comm-title{font-size:calc(17px*var(--v31-scale))!important}.v29-search{padding:9px 11px!important;margin-top:11px!important}.v29-search input{font-size:calc(12px*var(--v31-scale))!important}
.v31-hot-heading{display:flex;align-items:center;justify-content:space-between;margin:0 1px 8px 1px;color:var(--text-1);font-size:calc(12px*var(--v31-scale));font-weight:900}.v31-hot-heading span{font-size:calc(10px*var(--v31-scale));font-weight:700;color:var(--text-4)}
.v29-hot-strip{gap:8px!important;margin-bottom:14px!important}.v29-hot-card{padding:11px 12px!important;border-radius:13px!important;background:linear-gradient(135deg,rgba(75,142,240,.10),var(--bg-2))!important;border-color:rgba(75,142,240,.20)!important}.v29-hot-label{font-size:calc(9px*var(--v31-scale))!important;margin-bottom:4px!important}.v29-hot-title{font-size:calc(12px*var(--v31-scale))!important;line-height:1.45!important}.v29-hot-meta{font-size:calc(9.5px*var(--v31-scale))!important;color:var(--text-4)!important;text-align:right!important}
.v29-q-card{padding:14px 15px!important;border-radius:14px!important;gap:6px!important}.v29-q-title{font-size:calc(14px*var(--v31-scale))!important;line-height:1.45!important}.v29-q-body{font-size:calc(11.7px*var(--v31-scale))!important;line-height:1.62!important}.v29-q-head{order:3!important;margin:3px 0 0!important;border-top:1px solid var(--border-1)!important;padding-top:8px!important}.v29-q-head .v29-like-small{display:none!important}.v29-q-meta{order:4!important;font-size:calc(10px*var(--v31-scale))!important;gap:6px!important;color:var(--text-4)!important}.v29-q-meta .v29-like-small,.v31-card-stat{display:inline-flex!important;align-items:center;gap:3px;color:var(--text-4)!important;font-weight:700!important;background:transparent!important;border:1px solid var(--border-1)!important;border-radius:999px!important;padding:2px 6px!important;font-size:calc(9.8px*var(--v31-scale))!important}.v29-status{font-size:calc(9.3px*var(--v31-scale))!important;padding:3px 7px!important}.v29-detail-title{font-size:calc(17px*var(--v31-scale))!important}.v29-detail-body{font-size:calc(12.4px*var(--v31-scale))!important}.v29-answer-body{font-size:calc(12px*var(--v31-scale))!important}.v29-reply textarea{font-size:calc(12px*var(--v31-scale))!important}
.v30-max-btn,.v30-window-btn{width:30px!important;height:30px!important;border-radius:8px!important}
@media(max-width:1350px){.v29-comm{grid-template-columns:210px minmax(420px,1fr)!important}.v29-comm-detail{grid-column:1/-1!important;max-height:42vh!important}.v29-hot-strip{grid-template-columns:1fr!important}}
</style>
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

<!-- ═══════════════════════════════════════════════════════════
     v32 UNIFIED FIX — 커뮤니티 UX 통합 개선
     ═══════════════════════════════════════════════════════════ -->
<style id="v32-community-fix">
/* v27 vote-box 제거 (제목 우선 레이아웃 강제) */
.v27-vote-box{display:none!important}
.v27-q-row{display:block!important;gap:0!important}
.v27-q-title{font-size:14.5px!important;font-weight:800!important;line-height:1.45!important}
.v27-q-body{font-size:12px!important;margin-bottom:8px!important}

/* v26 vote 제거 */
.v26-vote,.v26-q-top>.v26-vote{display:none!important}
.v26-q-top{display:block!important}

/* v29 카드 — 더 나은 HOT 표기 */
.v29-q-card{transition:all .16s var(--ease)!important}
.v29-q-title{font-size:14.5px!important;font-weight:800!important;line-height:1.44!important;color:var(--text-1)!important}
.v29-q-card:hover .v29-q-title{color:var(--accent)!important}
.v29-q-body{font-size:12px!important;line-height:1.6!important;color:var(--text-3)!important}

/* 상태 배지 → 타이틀 위 배치 */
.v29-q-card{display:flex!important;flex-direction:column!important}
.v29-q-head{order:1!important;margin-bottom:5px!important}
.v29-q-title{order:2!important}
.v29-q-body{order:3!important}
.v29-q-meta{order:4!important;display:flex!important;gap:8px!important;flex-wrap:wrap!important}

/* HOT 표시 강화 */
.v29-status.hot{background:rgba(255,59,48,.14)!important;color:#FF3B30!important;font-weight:900!important}
.v29-status.hot::before{content:'🔥 '}
.v29-status.live,.v29-status.adopted{background:var(--g-dim)!important;color:var(--g)!important}
.v29-status.adopted::before{content:'✓ '}
.v29-status.new{background:var(--accent-dim)!important;color:var(--accent)!important}
.v29-status.new::before{content:'✨ '}
.v29-status.wait{background:var(--a-dim)!important;color:var(--a)!important}
.v29-status.wait::before{content:'🙋 '}

/* 좋아요 표기 — 마지막, 작게 */
.v29-q-meta>.v29-like-small{order:99!important;color:var(--text-4)!important;font-size:11px!important}

/* HOT 스트립 개선 */
.v29-hot-card{transition:all .15s var(--ease)!important;position:relative!important}
.v29-hot-card:hover{transform:translateY(-2px)!important;box-shadow:0 6px 20px rgba(75,142,240,.15)!important}
.v29-hot-label{font-size:10px!important;font-weight:900!important;letter-spacing:.3px!important}
.v29-hot-title{font-size:13px!important;font-weight:800!important;line-height:1.45!important}

/* 정렬 바 — v29 리스트 위 */
.v32-sort-bar{display:flex;align-items:center;gap:6px;margin-bottom:12px;padding:8px 0;border-bottom:1px solid var(--border-1)}
.v32-sort-bar .v32-sort-label{font-size:10px;font-weight:700;color:var(--text-4);text-transform:uppercase;letter-spacing:.5px;margin-right:2px}
.v32-sort-btn{border:1px solid var(--border-1);background:var(--bg-1);color:var(--text-3);border-radius:99px;padding:5px 12px;font-size:11.5px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .12s;white-space:nowrap}
.v32-sort-btn:hover{border-color:var(--border-2);color:var(--text-2);background:var(--bg-2)}
.v32-sort-btn.on{background:var(--accent-dim);border-color:var(--accent-bd);color:var(--accent)}
.v32-sort-btn.hot-btn.on{background:rgba(255,59,48,.1);border-color:rgba(255,59,48,.3);color:#FF3B30}

/* 카드 카운터 표기 개선 — 아이콘 + 숫자 */
.v32-stat-pill{display:inline-flex;align-items:center;gap:3px;font-size:11px;color:var(--text-4);background:var(--bg-3);border:1px solid var(--border-1);border-radius:99px;padding:2px 8px;font-family:'JetBrains Mono',monospace;font-weight:600}
.v32-stat-pill.votes{color:var(--accent);background:var(--accent-dim);border-color:var(--accent-bd)}

/* 커뮤니티 미니 패널 — v32 업데이트 */
.comm-mini-hd span{font-weight:700;font-size:11px}
.comm-mini-more{font-size:10px;font-weight:600;color:var(--accent);background:var(--accent-dim);border:none;border-radius:4px;padding:2px 7px;cursor:pointer}
.comm-mini-more:hover{background:rgba(75,142,240,.2)}

/* v29 사이드바 제목 개선 */
.v29-comm-title{letter-spacing:-.04em!important}
.v29-comm-hero{align-items:flex-start!important}

/* 동기화 플래시 방지 */
#ct-qa{transition:opacity .15s}

/* v31 카드 크기 재조정 */
.v29-q-card{padding:14px 16px!important;border-radius:14px!important}

/* 상단 공지 바 개선 */
.v29-notice{min-height:28px!important;background:linear-gradient(90deg,var(--accent-dim),transparent)!important}
</style>

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

<!-- ═══════════════════════════════════════════════════════════
     v33 UNIFIED REFINEMENT — 컨셉 통일·창 컨트롤·권한 분리·예시 케이스·캐릭터
     ═══════════════════════════════════════════════════════════ -->
<style id="v33-refinement-css">
/* ── 1) 컨셉/아이콘 통일: 💡 구매본부 지식 커뮤니티 ── */
.comm-hd h2{display:flex!important;align-items:center!important;gap:8px!important}

/* ── 2) v28의 어색한 헤더 힌트 메시지 숨김 (description 영역으로 재배치) ── */
#v28CommHint{display:none!important}

/* ── 우측 상단 창 컨트롤(최대화/닫기) 고정 정렬 ── */
.comm-hd,.adm-h,.db-hd,.mp-hd,.large-hd,.v26-ask-h{
  display:flex!important;align-items:center!important;
  justify-content:space-between!important;
  position:relative!important;
}
.v30-modal-tools{
  display:inline-flex!important;align-items:center!important;
  gap:6px!important;margin-left:auto!important;
  flex-shrink:0!important;order:99!important;
}
.v30-max-btn,.adm-x,.large-close,.db-hd .rp-c,.mp-hd .adm-x,.comm-hd .adm-x{
  width:32px!important;height:32px!important;border-radius:8px!important;
  border:1px solid var(--border-1)!important;background:var(--bg-3)!important;
  color:var(--text-3)!important;font-size:14px!important;
  display:inline-flex!important;align-items:center!important;justify-content:center!important;
  cursor:pointer!important;flex-shrink:0!important;font-family:inherit!important;
  transition:all .12s var(--ease)!important;
}
.v30-max-btn:hover,.adm-x:hover,.large-close:hover{
  background:var(--accent-dim)!important;color:var(--accent)!important;
  border-color:var(--accent-bd)!important;
}
.adm-x:hover{background:var(--r-dim)!important;color:var(--r)!important;border-color:rgba(191,88,88,.3)!important}
/* 헤더에 닫기/최대화 우측 정렬 보장 (가장 마지막 자식) */
.comm-hd>.adm-x,.adm-h>.adm-x,.db-hd>.adm-x,.mp-hd>.adm-x{
  order:100!important;margin-left:8px!important;
}

/* ── 3) 일반 사용자에게 "AI 검증 후보" 버튼은 숨김 (Admin 전용) ── */
html:not([data-user-role="admin"]) .v29-action-row button[onclick*="v29Nominate"],
html:not([data-user-role="admin"]) button[onclick*="v27Nominate"]{
  display:none!important;
}
/* Admin이면 버튼 표시 */
html[data-user-role="admin"] .v29-action-row button[onclick*="v29Nominate"]{
  display:inline-flex!important;
}
/* "AI 검증 후보" 뱃지는 정보용으로 항상 표시 (자동 분류 상태) */
.v33-auto-flow{
  background:linear-gradient(135deg,var(--accent-dim),var(--bg-2))!important;
  border:1px solid var(--accent-bd)!important;border-radius:12px!important;
  padding:10px 14px!important;margin-bottom:12px!important;
  font-size:calc(11.5px*var(--v31-scale,1))!important;line-height:1.6!important;
  color:var(--text-2)!important;display:flex!important;
  align-items:flex-start!important;gap:10px!important;
}
.v33-auto-flow-ic{flex-shrink:0;font-size:16px;line-height:1.2}
.v33-auto-flow b{color:var(--text-1);font-weight:850}
.v33-auto-flow .v33-flow-steps{
  display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:6px;
  font-size:calc(10.5px*var(--v31-scale,1));color:var(--text-3);
}
.v33-flow-steps span.s{
  display:inline-flex;align-items:center;gap:3px;
  background:var(--bg-1);border:1px solid var(--border-1);
  border-radius:99px;padding:3px 8px;font-weight:700;color:var(--text-2);
}
.v33-flow-steps span.arr{color:var(--text-4);font-weight:900}

/* ── 4) 예시 답변 본문 가독성 ── */
.v33-example-answer{
  background:var(--bg-2)!important;border:1px solid var(--border-1)!important;
  border-left:3px solid var(--g)!important;border-radius:12px!important;
  padding:14px 16px!important;margin-top:10px!important;
  font-size:calc(13px*var(--v31-scale,1))!important;line-height:1.85!important;
  color:var(--text-2)!important;
}
.v33-example-answer b,.v33-example-answer strong{color:var(--text-1);font-weight:850}
.v33-example-answer ul,.v33-example-answer ol{margin:6px 0 6px 22px}
.v33-example-answer li{margin-bottom:3px}
.v33-example-answer .v33-src{
  margin-top:10px;padding-top:10px;border-top:1px dashed var(--border-1);
  font-size:calc(10.5px*var(--v31-scale,1));color:var(--text-4);
}
.v33-example-answer .v33-src b{color:var(--text-3);font-weight:700;margin-right:4px}
.v33-example-answer .v33-src-chip{
  display:inline-block;background:var(--bg-3);border:1px solid var(--border-1);
  border-radius:4px;padding:1px 6px;margin:2px 4px 2px 0;
  font-size:calc(10px*var(--v31-scale,1));color:var(--text-3);
  font-family:'JetBrains Mono',monospace;
}

/* ── 5) 캐릭터 영역 ── */
.v33-char-stage{
  position:relative;width:100%;min-height:280px;
  background:radial-gradient(circle at 50% 22%,rgba(75,142,240,.18),transparent 55%),
             linear-gradient(180deg,var(--bg-2),var(--bg-1));
  border:1px solid var(--border-1);border-radius:18px;
  display:flex;flex-direction:column;align-items:center;justify-content:flex-end;
  padding:24px 16px 16px;overflow:visible;
}
.v33-char-figure{
  font-size:96px;line-height:1;margin-bottom:14px;
  animation:v33CharBob 3.2s ease-in-out infinite;
  filter:drop-shadow(0 10px 18px rgba(0,0,0,.25));
  position:relative;display:inline-block;
  transition:transform .2s var(--ease);
}
.v33-char-figure:hover{transform:scale(1.08) translateY(-4px)}
.v33-char-hat{
  position:absolute;top:-18px;left:50%;transform:translateX(-50%);
  font-size:38px;z-index:3;line-height:1;
}
.v33-char-side{
  position:absolute;right:-26px;bottom:8px;font-size:32px;z-index:3;line-height:1;
}
.v33-char-effect{
  position:absolute;top:-8px;right:-18px;font-size:22px;z-index:3;
  animation:v33CharSpark 1.8s ease-in-out infinite;
}
@keyframes v33CharBob{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-8px) rotate(-2deg)}}
@keyframes v33CharSpark{0%,100%{opacity:.55;transform:scale(.9) rotate(0)}50%{opacity:1;transform:scale(1.15) rotate(15deg)}}
.v33-char-nick{
  font-size:15px;font-weight:850;color:var(--text-1);
  margin-bottom:2px;text-align:center;
}
.v33-char-lv{
  font-size:11px;color:var(--text-3);text-align:center;
  font-family:'JetBrains Mono',monospace;
}
.v33-char-bg{
  position:absolute;inset:0;font-size:140px;opacity:.10;
  display:flex;align-items:center;justify-content:center;
  pointer-events:none;z-index:0;
}
.v33-char-fg{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center}
.v33-char-picker{
  display:grid!important;grid-template-columns:repeat(8,1fr)!important;
  gap:6px!important;margin-top:12px!important;
}
.v33-char-picker .char-sel{
  width:auto!important;height:42px!important;font-size:22px!important;
  border-radius:8px!important;
}
.v33-char-info{
  font-size:10px;color:var(--text-4);text-align:center;
  margin-top:6px;line-height:1.5;
}
</style>

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

  // 현재 캐릭터 상태
  const v33CharState={
    char:'🐧',
    hat:'',
    side:'',
    effect:'',
    bg:'🏢',
    nick:'프로큐어히어로'
  };

  function renderV33Character(){
    const charRoom=$('#charRoom');
    if(!charRoom) return;
    // 모든 자식 제거 후 새로 렌더
    charRoom.innerHTML=`
      <div class="v33-char-bg">${v33CharState.bg||'🏢'}</div>
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

  // 아이템 장착 - 카테고리별로 시각적으로 적용
  window.v33EquipItem=function(slot,emoji){
    if(!slot||!emoji) return;
    const HATS=['🎩','👑','🎀','🎓','⛑️','🏆','🪖','👒'];
    const PETS=['🐱','🐶','🐦','🐉','🦄','🦋','🐢'];
    const EFFECTS=['⭐','💫','🔥','❄️','🎵','✨','💎','🌟'];
    const BGS=['🌊','🌸','🏔️','🌌','🏭','🏢','🌃','🏖️'];

    if(HATS.includes(emoji)) v33CharState.hat=emoji;
    else if(PETS.includes(emoji)) v33CharState.side=emoji;
    else if(EFFECTS.includes(emoji)) v33CharState.effect=emoji;
    else if(BGS.includes(emoji)) v33CharState.bg=emoji;
    else v33CharState.side=emoji; // 기본은 사이드에 표시

    // 슬롯 시각적 active 상태
    if(slot){
      // 같은 카테고리 슬롯의 active 제거
      $$('.inv-slot').forEach(s=>{
        if(!s.classList.contains('empty')){
          const e=s.textContent.trim();
          if(HATS.includes(emoji) && HATS.includes(e)) s.classList.remove('equipped');
          else if(PETS.includes(emoji) && PETS.includes(e)) s.classList.remove('equipped');
          else if(EFFECTS.includes(emoji) && EFFECTS.includes(e)) s.classList.remove('equipped');
          else if(BGS.includes(emoji) && BGS.includes(e)) s.classList.remove('equipped');
        }
      });
      slot.classList.add('equipped');
    }
    renderV33Character();
    say(`${emoji} 장착!`,'✨',1200);
  };

  // 기존 equipItem과 pickChar를 v33으로 라우팅
  function patchCharFunctions(){
    const origEquip=window.equipItem;
    window.equipItem=function(slot,emoji){
      if(slot&&slot.title) slot.title=slot.title; // noop
      try{v33EquipItem(slot,emoji);}catch(e){
        if(origEquip) origEquip.call(this,slot,emoji);
      }
    };
    const origPick=window.pickChar;
    window.pickChar=function(btn,emoji){
      try{
        const charObj=V33_CHARS.find(c=>c.emoji===emoji)||{name:btn?.title||'캐릭터'};
        v33PickChar(btn,emoji,charObj.name);
      }catch(e){
        if(origPick) origPick.call(this,btn,emoji);
      }
    };
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
        },120);
      };
    }

    // 주기적으로 어색한 위치의 v28 힌트 제거 보장
    setInterval(()=>{
      $('#v28CommHint')?.remove();
      unifyCommunityName();
    },2000);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();

<!-- ═══════════════════════════════════════════════════════════
     v34 FINAL POLISH
     ① 폰트 완전 고정  ② 구매지식 커뮤니티 통일
     ③ 커뮤니티 창 크기 조절 재구현
     ④ 업무 FLOW 재설계 (파일업로드→팀승인→시스템승인→AI반영)
     ⑤ 팀 Admin 폴더 관리 UI 재설계
     ═══════════════════════════════════════════════════════════ -->

<style id="v34-css">
/* ── 기본 리셋: 커뮤니티 전체 폰트 고정 ── */
.comm-ov, .comm-box, .comm-box *{
  font-family:'Noto Sans KR','DM Sans',sans-serif!important;
  -webkit-font-smoothing:antialiased!important;
  text-rendering:optimizeLegibility!important;
}
.comm-box .v29-comm-title,
.comm-box .v25-qtitle,
.comm-box .v27-comm-title,
.comm-hd h2{
  font-family:'Outfit','Noto Sans KR',sans-serif!important;
  letter-spacing:-0.04em!important;
  font-weight:900!important;
}
/* calc 변수 폰트 강제 고정 */
.comm-box .v29-q-title{font-size:14px!important;font-weight:700!important;line-height:1.48!important}
.comm-box .v29-q-body{font-size:12px!important;line-height:1.65!important}
.comm-box .v29-comm-title{font-size:18px!important;line-height:1.28!important}
.comm-box .v29-comm-sub{font-size:12px!important;line-height:1.6!important}
.comm-box .v29-cat{font-size:12px!important;padding:8px 10px!important}
.comm-box .v29-detail-title{font-size:17px!important;font-weight:800!important;line-height:1.36!important}
.comm-box .v29-detail-body{font-size:13px!important;line-height:1.82!important}
.comm-box .v29-answer-author{font-size:12px!important;font-weight:700!important}
.comm-box .v29-answer-body{font-size:12.5px!important;line-height:1.75!important}
.comm-box .v29-status{font-size:10px!important;padding:3px 8px!important}
.comm-box .v29-btn{font-size:11.5px!important;padding:7px 10px!important}
.comm-box .v29-hot-title{font-size:12.5px!important;font-weight:800!important}
.comm-box .v29-tag{font-size:10.5px!important}
.comm-box .v29-search input{font-size:13px!important}
.comm-box .post-title,.comm-box .v25-detail-title{font-size:14px!important;font-weight:700!important}
.comm-box .post-preview{font-size:12px!important;line-height:1.6!important}
.comm-hd h2 span{font-size:16px!important;font-weight:900!important}

/* ── 헤더: 창 컨트롤 확실히 우측 배치 ── */
.comm-hd{
  display:flex!important;align-items:center!important;
  padding:14px 20px!important;gap:10px!important;
  background:var(--bg-1)!important;
  border-bottom:1px solid var(--border-1)!important;
  min-height:54px!important;
}
.comm-hd h2{flex:1!important;margin:0!important;font-size:16px!important}
.v34-hd-tools{
  display:flex!important;align-items:center!important;gap:6px!important;
  flex-shrink:0!important;
}
.v34-ctrl-btn{
  width:32px!important;height:32px!important;
  border-radius:8px!important;border:1px solid var(--border-1)!important;
  background:var(--bg-3)!important;color:var(--text-3)!important;
  font-size:14px!important;cursor:pointer!important;
  display:inline-flex!important;align-items:center!important;justify-content:center!important;
  transition:all .12s!important;flex-shrink:0!important;font-family:inherit!important;
  outline:none!important;
}
.v34-ctrl-btn:hover{background:var(--accent-dim)!important;color:var(--accent)!important;border-color:var(--accent-bd)!important}
.v34-ctrl-btn.close:hover{background:var(--r-dim)!important;color:var(--r)!important;border-color:rgba(191,88,88,.3)!important}
/* 기존 v30 max btn 숨기고 v34로 통일 */
.v30-modal-tools,.v27-comm-toolbar{display:none!important}

/* ── 커뮤니티 오버레이 & 창 크기 ── */
.comm-ov{
  position:fixed!important;inset:0!important;
  background:rgba(0,0,0,.58)!important;
  backdrop-filter:blur(8px)!important;
  z-index:210!important;display:none!important;
  align-items:center!important;justify-content:center!important;
  padding:24px!important;
}
.comm-ov.sh{display:flex!important;animation:oi .22s var(--ease)!important}
.comm-box{
  background:var(--bg-1)!important;
  border:1px solid var(--border-2)!important;
  border-radius:18px!important;
  box-shadow:0 24px 72px rgba(0,0,0,.45)!important;
  overflow:hidden!important;
  display:flex!important;flex-direction:column!important;
  /* 기본 크기 */
  width:min(1560px,calc(100vw - 48px))!important;
  height:calc(100vh - 48px)!important;
  max-height:calc(100vh - 48px)!important;
  transition:width .25s var(--ease),height .25s var(--ease),border-radius .2s!important;
}
/* 전체화면 */
.comm-ov.v34-max{padding:0!important}
.comm-ov.v34-max .comm-box{
  width:100vw!important;height:100vh!important;
  max-height:100vh!important;border-radius:0!important;
}
/* 커뮤니티 탭바 - 팝업 내 없애도 됨 (v29 uses 3-column) */
.comm-box .comm-tabs{display:none!important}
.comm-box .comm-body{
  flex:1!important;overflow:hidden!important;
  min-height:0!important;padding:0!important;
}
/* 3칼럼 그리드 정상화 */
.comm-box .v29-comm{
  height:100%!important;display:grid!important;
  grid-template-columns:220px minmax(460px,1fr) minmax(360px,440px)!important;
  min-height:0!important;
}
.comm-box .v29-comm-left{
  overflow-y:auto!important;padding:16px 14px!important;
  border-right:1px solid var(--border-1)!important;
}
.comm-box .v29-comm-main{overflow-y:auto!important;padding:16px 18px!important}
.comm-box .v29-comm-detail{
  overflow-y:auto!important;padding:16px!important;
  border-left:1px solid var(--border-1)!important;
}
@media(max-width:1300px){
  .comm-box .v29-comm{grid-template-columns:190px minmax(400px,1fr) minmax(300px,380px)!important}
}
@media(max-width:1100px){
  .comm-ov{padding:12px!important}
  .comm-box .v29-comm{grid-template-columns:180px 1fr!important}
  .comm-box .v29-comm-detail{grid-column:1/-1!important;border-left:none!important;border-top:1px solid var(--border-1)!important;max-height:42vh!important}
}
@media(max-width:800px){
  .comm-ov{padding:0!important}
  .comm-box{width:100vw!important;height:100vh!important;border-radius:0!important}
  .comm-box .v29-comm{grid-template-columns:1fr!important}
  .comm-box .v29-comm-left,.comm-box .v29-comm-detail{display:none!important}
}

/* ── 업무 FLOW 워크플로우 배너 ── */
.v34-flow-banner{
  display:flex;align-items:stretch;gap:0;
  background:var(--bg-1);border:1px solid var(--border-1);
  border-radius:14px;overflow:hidden;margin-bottom:16px;
}
.v34-flow-step{
  flex:1;display:flex;flex-direction:column;align-items:center;
  padding:14px 10px;text-align:center;position:relative;
  border-right:1px solid var(--border-1);
  transition:background .15s;cursor:default;
}
.v34-flow-step:last-child{border-right:none}
.v34-flow-step.active{background:linear-gradient(180deg,var(--accent-dim),var(--bg-1))}
.v34-flow-step.done{background:linear-gradient(180deg,var(--g-dim),var(--bg-1))}
.v34-flow-step.pending{background:linear-gradient(180deg,rgba(194,155,66,.08),var(--bg-1))}
.v34-flow-step-num{
  width:28px;height:28px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-family:'Outfit',sans-serif;font-size:12px;font-weight:800;
  margin-bottom:8px;
}
.v34-flow-step.active .v34-flow-step-num{background:var(--accent);color:white}
.v34-flow-step.done .v34-flow-step-num{background:var(--g);color:white}
.v34-flow-step.pending .v34-flow-step-num{background:var(--a-dim);color:var(--a);border:1px solid rgba(194,155,66,.3)}
.v34-flow-step:not(.active):not(.done):not(.pending) .v34-flow-step-num{background:var(--bg-3);color:var(--text-4);border:1px solid var(--border-1)}
.v34-flow-step-ic{font-size:20px;margin-bottom:6px}
.v34-flow-step-title{font-size:11px;font-weight:700;color:var(--text-1);margin-bottom:2px}
.v34-flow-step-sub{font-size:9.5px;color:var(--text-4);line-height:1.4}
.v34-flow-step-cnt{
  margin-top:8px;font-family:'Outfit',sans-serif;
  font-size:17px;font-weight:800;line-height:1;
}
.v34-flow-step.active .v34-flow-step-cnt{color:var(--accent)}
.v34-flow-step.done .v34-flow-step-cnt{color:var(--g)}
.v34-flow-step.pending .v34-flow-step-cnt{color:var(--a)}
.v34-flow-step-unit{font-size:9px;color:var(--text-4);margin-top:2px}
/* 화살표 오버레이 */
.v34-flow-step:not(:last-child)::after{
  content:'›';position:absolute;right:-8px;top:50%;transform:translateY(-50%);
  font-size:18px;font-weight:900;color:var(--text-4);z-index:2;
}

/* ── 팀 Admin 패널 재설계 ── */
.v34-req-layout{display:grid;grid-template-columns:200px 1fr;gap:0;height:100%;min-height:400px;border:1px solid var(--border-1);border-radius:12px;overflow:hidden}
.v34-team-nav{background:var(--bg-2);border-right:1px solid var(--border-1);overflow-y:auto;padding:8px}
.v34-team-nav-title{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--text-4);padding:4px 8px 8px}
.v34-team-btn{
  width:100%;display:flex;align-items:center;gap:8px;
  padding:9px 10px;border-radius:8px;cursor:pointer;
  border:none;background:transparent;text-align:left;
  font-family:'Noto Sans KR',sans-serif;font-size:12px;
  color:var(--text-2);transition:all .12s;
}
.v34-team-btn:hover{background:var(--bg-3);color:var(--text-1)}
.v34-team-btn.on{background:var(--accent-dim);color:var(--accent);font-weight:600}
.v34-team-btn .v34-tb-cnt{
  margin-left:auto;font-size:9px;font-weight:700;
  padding:1px 6px;border-radius:99px;flex-shrink:0;
}
.v34-team-btn .v34-tb-cnt.pending{background:var(--a-dim);color:var(--a)}
.v34-team-btn .v34-tb-cnt.done{background:var(--g-dim);color:var(--g)}
.v34-team-btn .v34-tb-cnt.sent{background:var(--accent-dim);color:var(--accent)}
.v34-req-main{overflow-y:auto;padding:16px}
.v34-req-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:10px}
.v34-req-title{font-size:15px;font-weight:700;color:var(--text-1)}
.v34-req-actions{display:flex;gap:6px}
.v34-req-action-btn{
  display:flex;align-items:center;gap:5px;
  padding:7px 14px;border-radius:8px;font-size:12px;font-weight:600;
  border:none;cursor:pointer;font-family:'Noto Sans KR',sans-serif;
  transition:all .12s;
}
.v34-req-action-btn.primary{background:var(--accent);color:white}
.v34-req-action-btn.primary:hover{background:var(--accent-h)}
.v34-req-action-btn.secondary{background:var(--bg-3);color:var(--text-2);border:1px solid var(--border-1)}
.v34-req-action-btn.secondary:hover{background:var(--bg-4)}
.v34-req-action-btn.danger{background:var(--r-dim);color:var(--r);border:1px solid rgba(191,88,88,.2)}
.v34-req-action-btn.danger:hover{background:rgba(191,88,88,.18)}
.v34-req-action-btn.send{background:linear-gradient(135deg,#4B8EF0,#6AA1F7);color:white}
.v34-req-action-btn.send:hover{opacity:.9}
/* 파일 카드 */
.v34-file-card{
  display:flex;align-items:center;gap:12px;
  padding:12px 14px;background:var(--bg-2);
  border:1px solid var(--border-1);border-radius:10px;
  margin-bottom:8px;transition:all .15s;
}
.v34-file-card:hover{border-color:var(--border-2);background:var(--bg-3)}
.v34-file-card.selected{border-color:var(--accent-bd);background:var(--accent-dim)}
.v34-file-ic{
  width:36px;height:36px;border-radius:8px;
  display:flex;align-items:center;justify-content:center;
  font-size:16px;flex-shrink:0;
}
.v34-file-ic.pdf{background:rgba(191,88,88,.12);color:var(--r)}
.v34-file-ic.xlsx{background:rgba(78,173,123,.12);color:var(--g)}
.v34-file-ic.docx{background:var(--accent-dim);color:var(--accent)}
.v34-file-ic.pptx{background:rgba(194,155,66,.1);color:var(--a)}
.v34-file-info{flex:1;min-width:0}
.v34-file-name{font-size:12.5px;font-weight:600;color:var(--text-1);margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.v34-file-meta{font-size:10px;color:var(--text-4);display:flex;gap:8px;flex-wrap:wrap}
.v34-file-status{flex-shrink:0;display:flex;align-items:center;gap:8px}
/* 스텝 배지 */
.v34-step-badge{
  display:inline-flex;align-items:center;gap:4px;
  padding:4px 9px;border-radius:99px;font-size:10px;font-weight:700;
  white-space:nowrap;
}
.v34-step-badge.upload{background:var(--bg-4);color:var(--text-3)}
.v34-step-badge.team-wait{background:var(--a-dim);color:var(--a)}
.v34-step-badge.team-ok{background:rgba(75,142,240,.12);color:var(--accent)}
.v34-step-badge.sys-wait{background:rgba(134,120,191,.12);color:var(--v)}
.v34-step-badge.sys-ok{background:var(--g-dim);color:var(--g)}
.v34-step-badge.ai-done{background:var(--g-dim);color:var(--g)}
/* 인라인 액션 */
.v34-file-action{
  display:flex;gap:4px;align-items:center;flex-shrink:0;
}
.v34-inline-btn{
  padding:4px 9px;border-radius:6px;font-size:10px;font-weight:600;
  border:1px solid var(--border-1);background:var(--bg-1);
  color:var(--text-2);cursor:pointer;font-family:'Noto Sans KR',sans-serif;
  transition:all .12s;white-space:nowrap;
}
.v34-inline-btn:hover{border-color:var(--border-2);color:var(--text-1);background:var(--bg-3)}
.v34-inline-btn.ok:hover{border-color:var(--g);color:var(--g);background:var(--g-dim)}
.v34-inline-btn.no:hover{border-color:var(--r);color:var(--r);background:var(--r-dim)}
.v34-inline-btn.send:hover{border-color:var(--accent-bd);color:var(--accent);background:var(--accent-dim)}
/* 업로드 존 */
.v34-upload-zone{
  border:2px dashed var(--border-2);border-radius:12px;
  padding:24px;text-align:center;cursor:pointer;
  transition:all .2s;background:var(--bg-2);margin-bottom:16px;
}
.v34-upload-zone:hover,.v34-upload-zone.drag{
  border-color:var(--accent);background:var(--accent-dim);
}
.v34-upload-ic{font-size:28px;margin-bottom:8px}
.v34-upload-title{font-size:13px;font-weight:600;color:var(--text-2);margin-bottom:4px}
.v34-upload-sub{font-size:10px;color:var(--text-4)}
/* 구분선 */
.v34-section-label{
  font-size:9.5px;font-weight:700;text-transform:uppercase;
  letter-spacing:.8px;color:var(--text-4);margin:16px 0 8px;
  display:flex;align-items:center;gap:8px;
}
.v34-section-label::after{content:'';flex:1;height:1px;background:var(--border-1)}
/* 배치 전송 배너 */
.v34-send-banner{
  display:flex;align-items:center;justify-content:space-between;
  padding:12px 16px;background:linear-gradient(135deg,var(--accent-dim),var(--bg-2));
  border:1px solid var(--accent-bd);border-radius:10px;margin-bottom:12px;
}
.v34-send-banner-text{font-size:12px;color:var(--text-2);line-height:1.5}
.v34-send-banner-text b{color:var(--text-1)}
/* 시스템 전송 확인 배지 */
.v34-sent-check{
  display:inline-flex;align-items:center;gap:4px;
  padding:3px 8px;border-radius:99px;font-size:10px;font-weight:700;
  background:linear-gradient(135deg,var(--accent-dim),var(--bg-3));
  color:var(--accent);border:1px solid var(--accent-bd);
}
/* 빈 상태 */
.v34-empty{
  display:flex;flex-direction:column;align-items:center;
  justify-content:center;padding:40px 20px;text-align:center;
  color:var(--text-4);font-size:12px;gap:8px;
}
.v34-empty-ic{font-size:32px;opacity:.6}
/* 전체화면 버튼 상태 */
.v34-ctrl-btn.maximized{
  background:var(--accent-dim)!important;
  color:var(--accent)!important;
  border-color:var(--accent-bd)!important;
}

/* ── 구매지식 커뮤니티 서체 통일 ── */
.comm-hd h2{
  font-size:16px!important;
  background:var(--accent-g)!important;
  -webkit-background-clip:text!important;
  -webkit-text-fill-color:transparent!important;
  font-family:'Outfit','Noto Sans KR',sans-serif!important;
  font-weight:900!important;letter-spacing:-0.04em!important;
}

/* 기존 v28/v29/v30 max 버튼, 힌트 완전 제거 */
#v28CommHint,.v30-modal-tools,.v27-comm-toolbar,#v27CommMax{display:none!important}
.comm-hd .adm-x{display:none!important} /* v34 ctrl btn으로 대체 */
</style>

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
  // 기존 버튼 및 힌트 제거
  $$('.v30-modal-tools,.v27-comm-toolbar,#v27CommMax,#v28CommHint').forEach(e=>e.remove());

  // h2 텍스트 통일
  const h2=hd.querySelector('h2');
  if(h2) h2.innerHTML=`${COMM_ICON} ${COMM_TITLE}`;

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

  // 좌측 사이드바 타이틀 통일
  $$('.v29-comm-left .v29-comm-title').forEach(el=>{
    if(/구매|커뮤니티/.test(el.textContent)) el.innerHTML=`${COMM_ICON} 구매지식<br>커뮤니티`;
  });
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
  // 주기적 이름 패치 (기존 v29/v31이 덮어쓰지 못하도록)
  setInterval(()=>{
    const hd=$('.comm-hd');
    if(hd){
      const h2=hd.querySelector('h2');
      if(h2&&!h2.textContent.includes(COMM_TITLE)) h2.innerHTML=`${COMM_ICON} ${COMM_TITLE}`;
      if(!hd.querySelector('.v34-hd-tools')) patchCommHeader();
    }
  },1500);
  // 초기 Admin 패널 렌더
  setTimeout(()=>{renderTeamAdmin();renderSystemAdminVerify();},200);
}

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
else boot();

})();

<!-- ═══════════════════════════════════════════════════════════════
     v35 FIX — 5 improvements: Emoji char · Max buttons · 4-level tree
               Security combo · AI chat polish
     ═══════════════════════════════════════════════════════════════ -->
<style id="v35-fix">
/* ═══════ 1. EMOJI CHARACTER ═══════ */
.v35-emoji-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:38px;z-index:10;pointer-events:none;line-height:1}
.companion-main .buddy-3d .v35-emoji-overlay{font-size:42px}
.mp-character-hero .buddy-3d .v35-emoji-overlay{font-size:58px}
.v23-char-scene .buddy-3d .v35-emoji-overlay{font-size:68px}
.buddy-body,.buddy-face,.buddy-hair,.buddy-eye,.buddy-smile,.buddy-arm,.buddy-wheel{display:none!important}
.buddy-badge{z-index:15!important}
.buddy-3d{overflow:visible!important}
.companion-main>.buddy-3d{background:linear-gradient(135deg,var(--accent-dim),var(--bg-2));border:1px solid var(--accent-bd);border-radius:50%}

/* ═══════ 2. MODAL MAXIMIZE ═══════ */
.large-modal.full .large-box{width:100vw!important;height:100vh!important;max-height:100vh!important;border-radius:0!important}
.v35-max-btn{width:28px;height:28px;border-radius:7px;border:1px solid var(--border-1);background:var(--bg-3);color:var(--text-3);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;transition:.15s;flex-shrink:0}
.v35-max-btn:hover{background:var(--bg-4);color:var(--text-1)}

/* ═══════ 3. 4-LEVEL TREE EXPLORER ═══════ */
.v35-tree-wrap{padding:0 12px 16px}
.v35-tree-search{display:flex;align-items:center;gap:7px;padding:7px 10px;margin-bottom:10px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:8px}
.v35-tree-search input{flex:1;border:none;background:none;outline:none;font-size:12px;color:var(--text-1)}
.v35-tree-search input::placeholder{color:var(--text-4)}
.v35-tree{font-size:12.5px}
.v35-tn{user-select:none}
.v35-tn-row{display:flex;align-items:center;gap:5px;padding:5px 6px;border-radius:6px;cursor:pointer;color:var(--text-2);transition:background .1s}
.v35-tn-row:hover{background:var(--bg-2)}
.v35-tn-arr{font-size:9px;color:var(--text-4);width:12px;text-align:center;flex-shrink:0;transition:transform .15s}
.v35-tn.open>.v35-tn-row>.v35-tn-arr{transform:rotate(90deg)}
.v35-tn-ic{width:16px;text-align:center;flex-shrink:0}
.v35-tn-label{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.v35-tn-badge{font-size:10px;padding:1px 6px;border-radius:9px;flex-shrink:0;background:var(--accent-dim);color:var(--accent)}
.v35-tn-children{margin-left:18px;border-left:1px solid var(--border-1);padding-left:8px;display:none}
.v35-tn.open>.v35-tn-children{display:block}
.v35-file-row{display:flex;align-items:center;gap:6px;padding:4px 6px;border-radius:6px;transition:background .1s}
.v35-file-row:hover{background:var(--bg-2)}
.v35-file-name{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;color:var(--text-2)}
.v35-flow{display:flex;align-items:center;flex-shrink:0}
.v35-fs{display:flex;align-items:center;gap:2px;font-size:10px;padding:2px 5px;border-radius:3px;white-space:nowrap}
.v35-fs.done{color:var(--g)}
.v35-fs.active{background:var(--accent-dim);color:var(--accent);font-weight:700}
.v35-fs.pend{color:var(--text-4)}
.v35-fa{color:var(--text-4);font-size:9px;margin:0 1px}
.v35-fa-act{display:none;gap:4px;flex-shrink:0}
.v35-file-row:hover .v35-fa-act{display:flex}
.v35-act-btn{font-size:10px;padding:2px 7px;border-radius:4px;border:1px solid var(--border-1);background:var(--bg-2);cursor:pointer;color:var(--text-2);white-space:nowrap}
.v35-act-btn.p{background:var(--accent-dim);border-color:var(--accent-bd);color:var(--accent)}
.v35-upload-hint{display:flex;align-items:center;gap:5px;padding:6px;margin:3px 0;font-size:11px;color:var(--text-4);border:1.5px dashed var(--border-1);border-radius:6px;cursor:pointer;transition:all .15s}
.v35-upload-hint:hover{border-color:var(--accent-bd);color:var(--accent)}

/* ═══════ 4. SECURITY COMBO ═══════ */
.v35-sec-combo{display:flex;flex-direction:column;gap:3px}
.v35-sco{display:flex;align-items:center;gap:7px;padding:4px 8px;border-radius:5px;cursor:pointer;font-size:12px;color:var(--text-2);transition:background .1s;user-select:none}
.v35-sco:hover{background:var(--bg-3)}
.v35-sco.on{color:var(--accent);font-weight:600}
.v35-sco input[type=radio]{display:none}
.v35-radio{width:13px;height:13px;border-radius:50%;flex-shrink:0;border:2px solid var(--border-1);display:flex;align-items:center;justify-content:center;transition:.15s}
.v35-sco.on .v35-radio{border-color:var(--accent);background:var(--accent)}
.v35-sco.on .v35-radio::after{content:'';width:4px;height:4px;border-radius:50%;background:#fff}
.v35-upick{margin:5px 0 3px 8px;padding:8px 10px;background:var(--bg-2);border:1px solid var(--accent-bd);border-radius:7px}
.v35-uprow{display:flex;gap:6px;margin-bottom:5px}
.v35-uinput{flex:1;font-size:11px;padding:3px 8px;border:1px solid var(--border-1);border-radius:5px;background:var(--bg-1);color:var(--text-1);outline:none}
.v35-uinput:focus{border-color:var(--accent-bd)}
.v35-uadd{font-size:11px;padding:3px 9px;border-radius:5px;background:var(--accent-dim);border:1px solid var(--accent-bd);color:var(--accent);cursor:pointer}
.v35-utags{display:flex;flex-wrap:wrap;gap:4px;min-height:18px}
.v35-utag{display:flex;align-items:center;gap:3px;font-size:10px;padding:2px 8px;border-radius:10px;background:var(--accent-dim);color:var(--accent);border:1px solid var(--accent-bd)}
.v35-utag button{border:none;background:none;cursor:pointer;color:var(--accent);padding:0;font-size:11px;line-height:1}

/* ═══════ 5. AI CHAT POLISH ═══════ */
.rag-pipeline{margin:8px 0 10px!important;background:var(--bg-2)!important;border:1px solid var(--border-1)!important;border-left:3px solid var(--accent)!important;border-radius:8px!important;overflow:hidden!important}
.rag-hd{display:flex!important;align-items:center!important;justify-content:space-between!important;padding:6px 10px!important;background:var(--bg-3)!important;cursor:pointer!important}
.rag-hd-l{display:flex;align-items:center;gap:6px;font-weight:600;color:var(--text-2);font-size:11px}
.rag-hd-ic{font-size:13px}
.rag-conf{display:flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;color:var(--g)}
.rag-conf-dot{width:6px;height:6px;border-radius:50%;background:var(--g);animation:v35pulse 2s infinite}
.rag-conf-v{color:var(--g)}
@keyframes v35pulse{0%,100%{opacity:1}50%{opacity:.35}}
.rag-steps{display:flex!important;align-items:center!important;gap:0!important;padding:5px 10px!important;overflow-x:auto;scrollbar-width:none}
.rag-steps::-webkit-scrollbar{display:none}
.rag-step{display:flex!important;align-items:center!important;gap:3px!important;white-space:nowrap!important;font-size:10.5px!important;color:var(--text-3)!important;flex-shrink:0!important;padding:2px 0!important}
.rag-step:not(:last-child)::after{content:'→';margin:0 6px;color:var(--text-4);font-size:9.5px}
.rag-step-ic{color:var(--g);font-size:11px;font-weight:700}
.rag-step-tx{color:var(--text-2)}
.rag-step-mt{font-size:9.5px;color:var(--text-4);background:var(--bg-3);padding:1px 5px;border-radius:3px}
.sr2{margin:8px 0!important;border:1px solid var(--border-1)!important;border-radius:8px!important;overflow:hidden!important;background:var(--bg-2)!important}
.sr2-h{display:flex!important;align-items:center!important;justify-content:space-between!important;padding:7px 10px!important;background:var(--bg-3)!important;cursor:pointer!important;font-size:11.5px!important}
.sr2-hl{display:flex;align-items:center;gap:6px;font-weight:600;color:var(--text-2)}
.sr2-hl-ic{font-size:13px}
.sr2-hr{display:flex;align-items:center;gap:5px;font-size:10.5px;color:var(--text-4)}
.sr2-cnt{background:var(--accent-dim);color:var(--accent);font-size:10px;font-weight:700;padding:1px 6px;border-radius:10px}
.sr2-list{padding:6px 8px;display:flex;flex-direction:column;gap:4px}
.sr2-c{display:flex!important;align-items:center!important;gap:8px!important;padding:7px 10px!important;border-radius:7px!important;cursor:pointer!important;border:1px solid var(--border-1)!important;background:var(--bg-1)!important;transition:all .15s!important}
.sr2-c:hover{border-color:var(--accent-bd)!important;background:var(--accent-dim)!important}
.sr2-c-n{width:19px;height:19px;border-radius:50%;flex-shrink:0;background:var(--accent-dim);color:var(--accent);font-size:10.5px;font-weight:700;display:flex;align-items:center;justify-content:center}
.sr2-c-i{flex:1;min-width:0}
.sr2-c-nm{font-size:12px;color:var(--text-1);font-weight:500;margin-bottom:2px}
.sr2-c-mt{display:flex;align-items:center;gap:8px;font-size:10.5px;color:var(--text-4)}
.sr2-c-rel{background:rgba(52,199,89,.12);color:var(--g);padding:1px 5px;border-radius:3px;font-size:10px;font-weight:600}
.sr2-c-tp{font-size:9.5px;padding:1px 5px;border-radius:3px;font-weight:700;margin-left:4px}
.sr2-c-go{color:var(--text-4);font-size:13px;flex-shrink:0}
.ai-ac{display:flex!important;gap:5px!important;margin-top:10px!important;flex-wrap:wrap!important}
.ai-a{display:inline-flex!important;align-items:center!important;gap:4px!important;font-size:11.5px!important;padding:5px 11px!important;border-radius:18px!important;border:1.5px solid var(--border-1)!important;background:var(--bg-2)!important;cursor:pointer!important;color:var(--text-3)!important;font-weight:500!important;transition:all .15s!important}
.ai-a:hover{border-color:var(--accent-bd)!important;color:var(--accent)!important;background:var(--accent-dim)!important}
.ai-a.active{background:var(--accent-dim)!important;border-color:var(--accent-bd)!important;color:var(--accent)!important;font-weight:600!important}
.ai-a:nth-child(2).active{background:rgba(239,68,68,.08)!important;border-color:rgba(239,68,68,.3)!important;color:#ef4444!important}
.msg-a .ab{background:var(--bg-2)!important;border:1px solid var(--border-1)!important;border-radius:0 12px 12px 12px!important;padding:12px 14px!important}
.ah{display:flex!important;align-items:center!important;gap:6px!important;margin-bottom:8px!important;font-size:11px!important}
.an{font-weight:700;color:var(--accent)!important}
.at0{font-size:10px!important;padding:2px 7px!important;border-radius:10px!important;font-weight:500!important}
.ai-tx{font-size:13.5px!important;line-height:1.65!important;color:var(--text-1)!important}
</style>

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
  ['charMain','floatCharBody','floatShow'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = emoji;
  });
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
}