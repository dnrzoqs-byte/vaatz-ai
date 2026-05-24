/* eslint-disable */
// @ts-nocheck
export function initVaatz() {
// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??
// ??? Toast System (replaces all alert()) ???
function toast(msg, icon='??, duration=3500){
  const wrap=document.getElementById('toastWrap');
  const el=document.createElement('div');
  el.className='toast';
  el.innerHTML=`<span class="toast-icon">${icon}</span><span class="toast-body">${msg}</span><button class="toast-close" onclick="dismissToast(this.parentElement)">??/button>`;
  wrap.appendChild(el);
  setTimeout(()=>dismissToast(el), duration);
}
function dismissToast(el){
  if(!el||el.classList.contains('out'))return;
  el.classList.add('out');
  setTimeout(()=>el.remove(), 260);
}

// ??? Navigation ???
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

// ??? Folder Toggle (robust) ???
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

// ??? Doc Access Panel ???
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

// ??? Modal backdrop close ???
document.getElementById('ao').addEventListener('click',e=>{if(e.target===e.currentTarget)ca()});

// ??? Scope + Right Panel ???
function scT(b,type){
  document.querySelectorAll('.sc-btn').forEach(btn=>btn.classList.remove('on'));
  b.classList.add('on');
  if(type==='my'){
    if(!document.getElementById('rp').classList.contains('sh')) rpT();
    toast('?뵇 寃??踰붿쐞: ???뚯씪濡?蹂寃쎈맖','?뱛',2500);
  } else {
    toast('?뵇 寃??踰붿쐞: ?꾩껜 吏?앹쑝濡?蹂寃쎈맖','?뙋',2500);
  }
}
function rpT(){
  const rp=document.getElementById('rp');
  const btn=document.getElementById('rp-btn');
  rp.classList.toggle('sh');
  btn.classList.toggle('act');
}

// ??? Chat Functionality ???
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
    <div class="ab"><div class="ah"><span class="an">VAATZ AI</span><span class="at0">RAG 쨌 寃??以?/span>${webOn?'<span class="at0" style="background:var(--accent-dim);color:var(--accent)">?뙋 ?몃?吏??/span>':''}</div>
    <div class="sp"><div class="sp-r ok"><span class="sp-ck">??/span>援щℓ?낅Т洹쒖젙 DB 寃???꾨즺</div><div class="sp-r ok"><span class="sp-ck">??/span>沅뚰븳 ?뺤씤 ?꾨즺</div></div>
    <div class="ai-tx"><p>?대떦 吏덉쓽??????듬??낅땲?? ?닿쾬? ?꾨줈?좏????쒕??덉씠?섏씠硫? ?ㅼ젣 RAG ?붿쭊???곌껐?섎㈃ 援щℓ?낅Т洹쒖젙, ?낅Т?쒖?, VAATZ 留ㅻ돱???깆쓣 湲곕컲?쇰줈 ?뺥솗??洹쇨굅? ?④퍡 ?듬????앹꽦?⑸땲??</p><p>?ㅼ젣 援ы쁽 ?쒖뿉??愿??臾몄꽌??異쒖쿂媛 <span class="cr">1</span><span class="cr">2</span> ?뺥깭濡??쒖떆?섎ŉ, ?섎떒??李몄“ 臾몄꽌 紐⑸줉???④퍡 ?쒓났?⑸땲??</p></div>
    <div class="ai-ac"><button class="ai-a" onclick="this.classList.toggle('active')">?몟 ?꾩???/button><button class="ai-a" onclick="this.classList.toggle('active')">?몠 遺?뺥솗</button><button class="ai-a" onclick="copyAnswer(this)">?뱥 蹂듭궗</button><button class="ai-a">?봽 ?ъ깮??/button></div></div>`;
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
  navigator.clipboard.writeText(txt).then(()=>toast('?듬????대┰蹂대뱶??蹂듭궗?섏뿀?듬땲??','?뱥',2000));
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
  hi.innerHTML=`<div class="hi-t">${escHtml(title)}</div><div class="hi-m">?ㅻ뒛 ${time}</div>`;
  hist.insertBefore(hi,hist.firstChild);
}

// ??? History item click ???
const chatConversations = {
  '?꾨젰?곸엯李?vs 寃쎈ℓ?낆같': {
    user: '?꾨젰?곸엯李곌낵 寃쎈ℓ?낆같??李⑥씠?먯쓣 ?뚮젮二쇱꽭?? VAATZ?먯꽌 ?대뼸寃?吏꾪뻾?섎굹??',
    existing: true
  },
  '?덉쭏 5?ㅽ? ?됯?湲곗?': {
    user: '?덉쭏 5?ㅽ? ?됯?湲곗????꾩껜?곸쑝濡??ㅻ챸?댁＜?몄슂. ?깃툒蹂?湲곗???沅곴툑?⑸땲??',
    ai: '<p><strong>?덉쭏 5?ㅽ? ?쒕룄</strong>???묐젰?ъ쓽 ?덉쭏 ??웾??5?④퀎(1~5?깃툒)濡??됯??섎뒗 ?꾨?쨌湲곗븘 怨좎쑀???묐젰???덉쭏 愿由?泥닿퀎?낅땲??</p><p><strong>?깃툒蹂?湲곗?:</strong></p><p>1?깃툒 (湲곕낯): ?덉쭏寃쎌쁺?쒖뒪??誘몃낫???먮뒗 ?좉퇋 ?깅줉 ?낆껜. 湲곕낯 ?⑺뭹 ?먭꺽留?異⑹”.<br>2?깃툒 (?묓샇): ISO 9001 ?몄쬆 蹂댁쑀, 理쒓렐 1?꾧컙 以묐? ?덉쭏 ?ш퀬 0嫄?<br>3?깃툒 (?곗닔): ISO 9001 + ?먯껜 ?덉쭏 媛쒖꽑 ?꾨줈洹몃옩 ?댁쁺, 怨듭젙?λ젰吏??Cpk) 1.33 ?댁긽.<br>4?깃툒 (?곸썡): IATF 16949 沅뚯옣, SPC 愿由?泥닿퀎 援ъ텞, ?꾨뱶 ?대젅?꾨쪧 0.05% ?댄븯.<br>5?깃툒 (理쒖슦??: IATF 16949 ?꾩닔, 臾닿껐???⑹엯 ?ㅼ쟻 ?곗냽 2?? ?꾩옣 ?ъ궗 ?듦낵 ?꾩닔.</p>',
    sources: ['?덉쭏_5?ㅽ?_?댁쁺湲곗?_v4.pdf', '?묐젰???됯?_媛?대뱶_2025.xlsx', '5?ㅽ?_?꾩옣?ъ궗_泥댄겕由ъ뒪??pdf']
  },
  'VAATZ 援щℓ?붿껌 ?앹꽦': {
    user: 'VAATZ?먯꽌 援щℓ?붿껌?쒕? ?앹꽦?섎뒗 諛⑸쾿???뚮젮二쇱꽭??',
    ai: '<p>VAATZ?먯꽌 援щℓ?붿껌?쒕? ?앹꽦?섎뒗 ?덉감瑜??덈궡???쒕━寃좎뒿?덈떎.</p><p><strong>1?④퀎: 援щℓ?붿껌 硫붾돱 吏꾩엯</strong><br>VAATZ 硫붿씤?붾㈃ ??援щℓ愿由???援щℓ?붿껌 ??[?좉퇋 ?붿껌] 踰꾪듉 ?대┃</p><p><strong>2?④퀎: 湲곕낯 ?뺣낫 ?낅젰</strong><br>?붿껌 ?좏삎(?쇰컲援щℓ/湲닿툒援щℓ), ?뚯슂 遺?? ?⑷린 ?щ쭩?? ?덉궛 肄붾뱶瑜??낅젰?⑸땲?? ?덉궛 肄붾뱶??SAP ?곕룞?쇰줈 ?먮룞 寃利앸맗?덈떎.</p><p><strong>3?④퀎: ?덈ぉ ?뺣낫 ?깅줉</strong><br>?덈ぉ肄붾뱶(?먯옱肄붾뱶)濡?寃?됲븯嫄곕굹 吏곸젒 ?낅젰?⑸땲?? ?섎웾, ?⑥쐞, ?щ쭩 ?④?瑜?湲곗옱?⑸땲?? BOM ?곕룞 ?덈ぉ? ?먮룞?쇰줈 洹쒓꺽???낅젰?⑸땲??</p><p><strong>4?④퀎: 泥⑤? ?쒕쪟</strong><br>寃ъ쟻?? 湲곗닠 ?ъ뼇?????꾩슂 ?쒕쪟瑜?泥⑤??⑸땲?? 5泥쒕쭔??珥덇낵 嫄댁? 鍮꾧탳寃ъ쟻??3???댁긽)媛 ?꾩닔?낅땲??</p><p><strong>5?④퀎: 寃곗옱 ?붿껌</strong><br>[寃곗옱 ?붿껌] 踰꾪듉???대┃?섎㈃ 寃곗옱 ?쇱씤???먮룞 ?ㅼ젙?⑸땲?? ??????ㅼ옣 ??蹂몃????쒖쑝濡?寃곗옱?⑸땲??湲덉븸蹂??꾧껐 湲곗? ?곸슜).</p>',
    sources: ['VAATZ_?ъ슜?먮ℓ?댁뼹_v7.pdf', '援щℓ?붿껌_泥섎━湲곗?_2025.pdf']
  },
  '?섏쓽怨꾩빟 ?ъ쑀???묒꽦': {
    user: '?섏쓽怨꾩빟 ?ъ쑀???묒꽦踰뺢낵 ?꾩닔 ?ы븿 ??ぉ???뚮젮二쇱꽭??',
    ai: '<p><strong>?섏쓽怨꾩빟 ?ъ쑀??/strong>??寃쎌웳?낆같 ?놁씠 ?뱀젙 ?낆껜? 吏곸젒 怨꾩빟??泥닿껐????洹??뺣떦?깆쓣 ?낆쬆?섍린 ?꾪빐 ?묒꽦?섎뒗 臾몄꽌?낅땲??</p><p><strong>?꾩닔 ?ы븿 ??ぉ:</strong></p><p>??<strong>怨꾩빟 媛쒖슂</strong>: 怨꾩빟 嫄대챸, ?덉긽 湲덉븸, 怨꾩빟 湲곌컙, ????낆껜紐?諛??ъ뾽?먮쾲??br>??<strong>?섏쓽怨꾩빟 ?ъ쑀</strong>: 援щℓ?낅Т洹쒖젙 ??1議곗뿉 ?대떦?섎뒗 ?ъ쑀瑜?援ъ껜?곸쑝濡?湲곗옱<br> - ?뱁뿀沅? ?ㅼ슜?좎븞沅????낆젏??沅뚮━瑜?蹂댁쑀??寃쎌슦<br> - ?쒓툒???앹궛 李⑥쭏 諛⑹?瑜??꾪빐 湲닿툒 議곕떖???꾩슂??寃쎌슦<br> - 湲곗〈 ?ㅻ퉬????명솚?깆씠 ?꾩닔?곸씤 寃쎌슦<br>??<strong>?낆껜 ?곴꺽??/strong>: ?대떦 ?낆껜媛 ?곹빀??洹쇨굅 (5?ㅽ? ?깃툒, 怨쇨굅 ?⑺뭹 ?ㅼ쟻 ??<br>??<strong>媛寃??곸젙??/strong>: ?쒖옣媛 鍮꾧탳?? 怨쇨굅 嫄곕옒 ?④? ?鍮?蹂?숇쪧, ?먭? 遺꾩꽍??/p><p>?묒떇? VAATZ ??怨꾩빟愿由????묒떇?⑥뿉??<strong>"FM-PU-042 ?섏쓽怨꾩빟?ъ쑀??</strong>瑜??ㅼ슫諛쏆쑝?????덉뒿?덈떎.</p>',
    sources: ['援щℓ?낅Т洹쒖젙_??1議?pdf', '?섏쓽怨꾩빟_?ъ쑀???묒떇(FM-PU-042).docx', '怨꾩빟愿由??낅Т?쒖?.pdf']
  },
  '?댁쇅援щℓ ?섏쑉 ?곸슜': {
    user: '?댁쇅援щℓ ???섏쑉 ?곸슜 湲곗?怨??섏쑉 蹂??由ъ뒪??愿由?諛⑸쾿???뚮젮二쇱꽭??',
    ai: '<p><strong>?댁쇅援щℓ ?섏쑉 ?곸슜 湲곗?</strong>? 援щℓ?낅Т洹쒖젙 ??5議?諛?湲濡쒕쾶 援щℓ ?댁쁺吏移⑥뿉 ?곕씪 ?ㅼ쓬怨?媛숈씠 ?댁쁺?⑸땲??</p><p><strong>?섏쑉 ?곸슜 ?먯튃:</strong><br>諛쒖＜???앹꽦 ?쒖젏???쒓뎅???怨좎떆 留ㅻℓ湲곗????ㅼ쟾 9??湲곗?)???먮룞 ?곸슜?⑸땲?? VAATZ 湲濡쒕쾶 援щℓ 紐⑤뱢?먯꽌 ?ㅼ떆媛꾩쑝濡?諛섏쁺?섎ŉ, 寃곗젣 ?쒖젏 ?섏쑉怨쇱쓽 李⑥씠??遺꾧린蹂??뺤궛 ?꾨줈?몄뒪?먯꽌 議곗젙?⑸땲??</p><p><strong>?섏쑉 蹂??由ъ뒪??愿由?</strong></p><p>??<strong>?섑뿤吏</strong>: 嫄대떦 10?듭썝 珥덇낵 ?댁쇅援щℓ 嫄댁? ?щТ?怨??묒쓽?섏뿬 ?좊Ъ??怨꾩빟 泥닿껐 沅뚯옣<br>??<strong>媛寃?議곗젙 議고빆</strong>: ?κ린 怨꾩빟(1???댁긽) ???섏쑉 蹂?숉룺 짹5% 珥덇낵 ??媛寃??ы삊??議고빆 ?쎌엯<br>??<strong>?듯솕 遺꾩궛</strong>: ?⑥씪 ?듯솕 ?섏〈?꾧? 珥??댁쇅援щℓ??60%瑜?珥덇낵?섏? ?딅룄濡?愿由?/p><p>?먯꽭???댁슜? 湲濡쒕쾶 援щℓ ?댁쁺吏移??????섏쑉愿由?遺遺꾩쓣 李멸퀬?섏떆湲?諛붾엻?덈떎.</p>',
    sources: ['湲濡쒕쾶_援щℓ_?댁쁺吏移?v3.pdf', '援щℓ?낅Т洹쒖젙_??5議?pdf', '?섏쑉由ъ뒪??愿由щℓ?댁뼹.pdf']
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
        srcHtml = '<div class="sr2"><div class="sr2-h" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display===\'none\'?\'block\':\'none\'"><div class="sr2-hl"><div class="sr2-hl-ic">?뱨</div>李몄“ 臾몄꽌</div><div class="sr2-hr"><span class="sr2-cnt">'+conv.sources.length+'</span><span>쨌 ?대┃?섏뿬 ?먮Ц ?뺤씤</span></div></div><div class="sr2-list">';
        conv.sources.forEach(function(s,i){
          var ext = s.split('.').pop().toLowerCase();
          var typeCls = {pdf:'t-pdf',xlsx:'t-xls',docx:'t-doc',hwp:'t-doc',pptx:'t-ppt'}[ext]||'t-pdf';
          var typeLbl = ext.toUpperCase();
          var rel = (0.95 - i*0.06).toFixed(2);
          srcHtml += '<div class="sr2-c" onclick="openSourceFromCitation('+((i%5)+1)+')"><div class="sr2-c-n">'+(i+1)+'</div><div class="sr2-c-i"><div class="sr2-c-nm">'+s+' <span class="sr2-c-tp '+typeCls+'">'+typeLbl+'</span></div><div class="sr2-c-mt"><span>李몄“ ?섏씠吏</span><span class="sr2-c-rel">愿?⑤룄 '+rel+'</span></div></div><span class="sr2-c-go">??/span></div>';
        });
        srcHtml += '</div></div>';
      }
      // Build a simple RAG pipeline for history items too
      var ragHtml = '<div class="rag-pipeline"><div class="rag-hd"><div class="rag-hd-l"><div class="rag-hd-ic">?쭬</div>寃??諛??듬? ?앹꽦 ?꾨줈?몄뒪</div><div class="rag-conf"><div class="rag-conf-dot"></div>CONFIDENCE <span class="rag-conf-v">'+(90-(conv.sources||[]).length)+'%</span></div></div><div class="rag-steps"><div class="rag-step"><div class="rag-step-ic">??/div><div class="rag-step-tx">吏덉쓽 ?꾨쿋?????ㅼ썙??異붿텧</div><div class="rag-step-mt">128-dim</div></div><div class="rag-step"><div class="rag-step-ic">??/div><div class="rag-step-tx">沅뚰븳 ?뺤씤 ???꾩껜 ?대엺</div><div class="rag-step-mt">3 levels</div></div><div class="rag-step"><div class="rag-step-ic">??/div><div class="rag-step-tx">Vector 寃????<b>'+((conv.sources||[]).length)+'媛??듭떖 泥?겕</b> ?좊퀎</div><div class="rag-step-mt">cosine ??0.74</div></div></div></div>';
      aMsg.innerHTML = '<div class="aa"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="white" opacity=".9"/></svg></div><div class="ab"><div class="ah"><span class="an">VAATZ AI</span><span class="at0">RAG 쨌 '+((conv.sources||[]).length)+'媛?臾몄꽌 ?몄슜</span><span class="at0" style="background:var(--g-dim);color:var(--g)">???좊ː??'+(90-(conv.sources||[]).length)+'%</span></div>'+ragHtml+'<div class="ai-tx">'+conv.ai+'</div>'+srcHtml+'<div class="ai-ac"><button class="ai-a" onclick="this.classList.toggle(\'active\')">?몟 ?꾩???/button><button class="ai-a" onclick="this.classList.toggle(\'active\')">?몠 遺?뺥솗</button><button class="ai-a" onclick="copyAnswer(this)">?뱥 蹂듭궗</button><button class="ai-a">?봽 ?ъ깮??/button></div></div>';
      cc.appendChild(aMsg);
      scrollChat();
    } else {
      sv('ch');
    }
  });
});

// ??? Follow-up questions ???
document.querySelectorAll('.fu-c').forEach(btn=>{
  btn.addEventListener('click',function(){
    textarea.value=this.textContent.replace(/^[^\s]+\s/,'');
    autoResize(textarea);
    updateSendBtn();
    textarea.focus();
  });
});

// ??? Welcome card quick actions ???
document.querySelectorAll('.wt-i').forEach(btn=>{
  btn.addEventListener('click',function(){
    sv('ch');
    textarea.value=this.textContent.replace(/"/g,'');
    autoResize(textarea);
    updateSendBtn();
    textarea.focus();
  });
});

// ??? Data Upload Request Modal ???
function reqOpen(){document.getElementById('rqM').classList.add('sh')}
function reqClose(){document.getElementById('rqM').classList.remove('sh');document.getElementById('reqFileList').innerHTML=''}
function simReqUpload(){
  const nms=['援щℓ?꾨왂_蹂닿퀬??2026.pdf','?묐젰???됯?湲곗?_v3.xlsx','?섏쓽怨꾩빟_媛?대뱶_理쒖쥌.docx','?덉쭏寃??泥댄겕由ъ뒪??hwp','?낆같?댁쁺_媛쒖젙??pdf'];
  const n=nms[Math.floor(Math.random()*nms.length)];
  const s=(Math.random()*8+0.5).toFixed(1);
  const list=document.getElementById('reqFileList');
  const el=document.createElement('div');
  el.className='req-file-item';
  el.innerHTML='<span>?뱞 '+n+' ('+s+' MB)</span><button class="req-file-rm" onclick="this.parentElement.remove()">??/button>';
  el.style.opacity='0';
  list.appendChild(el);
  requestAnimationFrame(()=>{el.style.transition='all .25s';el.style.opacity='1'});
}
function submitReq(){
  const team=document.getElementById('reqTeamSel').value;
  if(!team){toast('?뱀씤 ?붿껌 ????좏깮?댁＜?몄슂.','?좑툘',3000);return}
  const files=document.querySelectorAll('#reqFileList .req-file-item');
  if(!files.length){toast('?낅줈?쒗븷 ?뚯씪??泥⑤??댁＜?몄슂.','?좑툘',3000);return}
  toast(`${team}???낅줈???붿껌???꾩넚?섏뿀?듬땲?? 愿由ъ옄 ?뱀씤 ??吏??踰좎씠?ㅼ뿉 諛섏쁺?⑸땲??`,'??);
  reqClose();
}

// ??? DB Browser ???
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
    if(t.textContent.includes({term:'?⑹뼱',std:'?낅Т',star:'5?ㅽ?',bid:'?낆같'}[tab]||''))t.classList.add('on');
  });
  ['term','std','star','bid'].forEach(t=>{
    const e=document.getElementById('db-'+t);
    if(e)e.style.display=t===tab?'flex':'none';
  });
  const titles={term:'?뱰 ?⑹뼱?ъ쟾',std:'?뱥 ?낅Т?쒖?',star:'狩??덉쭏 5?ㅽ?',bid:'?뤇截??낆같愿由?};
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

// ??? Sidebar menu active ???
document.querySelectorAll('.sb-nav .sb-i').forEach(b=>{
  b.addEventListener('click',function(){
    document.querySelectorAll('.sb-nav .sb-i').forEach(x=>x.classList.remove('on'));
    this.classList.add('on');
  });
});

// ??? File Drag & Drop ???
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
    toast('?뚯씪???대뜑濡??대룞?섏뿀?듬땲??','?뱚',2000);
  }
  dragEl=null;
}
document.addEventListener('dragend',()=>{if(dragEl){dragEl.classList.remove('dragging');dragEl=null}});

// ??? Upload Sim ???
function simUpload(){
  const nms=['寃ъ쟻??20260208.pdf','?⑺뭹?ㅼ쟻_?붿빟.xlsx','怨꾩빟??珥덉븞.docx','?덉쭏蹂닿퀬??Q1.pdf','?묐젰??紐⑸줉.xlsx','諛쒖＜??template.docx'];
  const icons={'pdf':'?뱞','xlsx':'?뱤','docx':'?뱲','hwp':'?뱷'};
  const n=nms[Math.floor(Math.random()*nms.length)];
  const ext=n.split('.').pop();
  const ic=icons[ext]||'?뱞';
  const s=(Math.random()*3+.1).toFixed(1);
  const el=document.createElement('div');
  el.className='fl-file highlight-new';
  el.draggable=true;
  el.setAttribute('ondragstart','fDragStart(event,this)');
  el.innerHTML=`<input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="fl-file-ic">${ic}</span><div class="fl-file-info"><div class="fl-file-nm">${n}</div><div class="fl-file-meta">${s} MB 쨌 諛⑷툑</div></div>`;
  el.style.opacity='0';
  document.getElementById('uncategorized').appendChild(el);
  requestAnimationFrame(()=>{el.style.transition='all .25s';el.style.opacity='1'});
  updFC();
  toast(`${n} ?낅줈???꾨즺`,'?곻툘',2500);
}

// ??? Folder + Delete ???
function newFolder(){
  const n=prompt('???대뜑 ?대쫫:');
  if(!n) return;
  const id='f'+Date.now();
  const h=`<div class="ft-f"><div class="ft-fh" onclick="tf(this)" ondragover="fDragOver(event,this)" ondragleave="fDragLeave(this)" ondrop="fDrop(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="ft-ar op">??/span><span class="ft-ic">?뱚</span><span class="ft-nm">${escHtml(n)}</span></div><div class="ft-ds" id="${id}" style="max-height:200px"></div></div>`;
  const sec=document.getElementById('fileSec');
  const u=sec.querySelector('#uncategorized');
  u.insertAdjacentHTML('beforebegin',h);
  bindFolderCheckboxes();
  toast(`?뱚 "${n}" ?대뜑媛 ?앹꽦?섏뿀?듬땲??`,'?뱚',2500);
}
function delSelected(){
  const ch=document.querySelectorAll('#rp .fl-chk:checked');
  if(!ch.length){toast('??젣????ぉ???좏깮?댁＜?몄슂.','?좑툘',2500);return}
  if(!confirm(ch.length+'媛???ぉ????젣?섏떆寃좎뒿?덇퉴?')) return;
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
  setTimeout(()=>{updFC();toast(`${count}媛???ぉ????젣?섏뿀?듬땲??`,'?뿊截?,2500)},250);
}
function updFC(){
  const n=document.querySelectorAll('#rp .fl-file').length;
  const e=document.getElementById('rpCnt');
  if(e) e.textContent=n;
  const s=document.getElementById('rpStats');
  if(s) s.textContent='珥?'+n+'媛?;
}

// ??? Folder checkbox ??auto-check children ???
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

// ??? Admin team checkbox ??auto-check children ???
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

// ??? Request approve/reject ???
function appReq(b){
  const c=b.closest('.req-card');
  c.classList.add('done');
  c.querySelector('.req-acts').innerHTML='<span class="bd bd-g">???뱀씤??/span>';
  updatePendingCount();
  toast('?붿껌???뱀씤?섏뿀?듬땲??','??,2000);
}
function rejReq(b){
  const c=b.closest('.req-card');
  c.classList.add('done');
  c.querySelector('.req-acts').innerHTML='<span class="bd bd-h">蹂댁셿 ?붿껌??/span>';
  updatePendingCount();
  toast('?붿껌??蹂댁셿 ?붿껌?섏뿀?듬땲??','??,2000);
}

function batchApprove(){
  const teamChks=document.querySelectorAll('.team-chk:checked');
  const reqChks=document.querySelectorAll('.req-chk:checked');
  if(!teamChks.length&&!reqChks.length){toast('?뱀씤??? ?먮뒗 ?붿껌???좏깮?댁＜?몄슂.','?좑툘',2500);return}
  let count=0;
  teamChks.forEach(c=>{
    const f=c.closest('.ft-f');
    if(f){
      f.querySelectorAll('.req-card:not(.done)').forEach(cd=>{
        cd.classList.add('done');count++;
        const a=cd.querySelector('.req-acts');
        if(a)a.innerHTML='<span class="bd bd-g">???뱀씤??/span>';
      });
      c.checked=false;
    }
  });
  reqChks.forEach(c=>{
    const card=c.closest('.req-card');
    if(card&&!card.classList.contains('done')){
      card.classList.add('done');count++;
      const a=card.querySelector('.req-acts');
      if(a)a.innerHTML='<span class="bd bd-g">???뱀씤??/span>';
    }
    c.checked=false;
  });
  if(count>0){toast(`${count}嫄??쇨큵 ?뱀씤 ?꾨즺`,'??);updatePendingCount()}
}

function batchReject(){
  const teamChks=document.querySelectorAll('.team-chk:checked');
  const reqChks=document.querySelectorAll('.req-chk:checked');
  if(!teamChks.length&&!reqChks.length){toast('蹂댁셿 ?붿껌??? ?먮뒗 ?붿껌???좏깮?댁＜?몄슂.','?좑툘',2500);return}
  if(!confirm('?좏깮???붿껌???쇨큵 蹂댁셿 ?붿껌?섏떆寃좎뒿?덇퉴?')) return;
  let count=0;
  teamChks.forEach(c=>{
    const f=c.closest('.ft-f');
    if(f){
      f.querySelectorAll('.req-card:not(.done)').forEach(cd=>{
        cd.classList.add('done');count++;
        const a=cd.querySelector('.req-acts');
        if(a)a.innerHTML='<span class="bd bd-h">蹂댁셿 ?붿껌??/span>';
      });
      c.checked=false;
    }
  });
  reqChks.forEach(c=>{
    const card=c.closest('.req-card');
    if(card&&!card.classList.contains('done')){
      card.classList.add('done');count++;
      const a=card.querySelector('.req-acts');
      if(a)a.innerHTML='<span class="bd bd-h">蹂댁셿 ?붿껌??/span>';
    }
    c.checked=false;
  });
  if(count>0){toast(`${count}嫄??쇨큵 蹂댁셿 ?붿껌 ?꾨즺`,'??);updatePendingCount()}
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
      if(p>0){badge.style.background='var(--a-dim)';badge.style.color='var(--a)';badge.textContent='?湲?'+p;}
      else{badge.style.background='var(--g-dim)';badge.style.color='var(--g)';badge.textContent='?꾨즺';}
    }
  });
}

// ??? Drop zones ???
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

// ??? Keyboard Shortcuts ???
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

// ??? Feedback buttons (toggle active) ???
document.querySelectorAll('.ai-a').forEach(btn=>{
  if(btn.textContent.includes('?꾩???)||btn.textContent.includes('遺?뺥솗')){
    btn.addEventListener('click',function(){
      const sibling=this.parentElement.querySelectorAll('.ai-a');
      if(this.textContent.includes('?꾩???)){
        sibling[1]?.classList.remove('active');
      } else if(this.textContent.includes('遺?뺥솗')){
        sibling[0]?.classList.remove('active');
      }
      this.classList.toggle('active');
      if(this.classList.contains('active')){
        toast(this.textContent.includes('?꾩???)?'?쇰뱶諛?媛먯궗?⑸땲??':'媛쒖꽑??李멸퀬?섍쿋?듬땲??','?뱷',2000);
      }
    });
  }
});

// ??? Toggle switches (prevent propagation issues) ???
document.querySelectorAll('.tg').forEach(tg=>{
  tg.addEventListener('click',function(e){
    e.stopPropagation();
    this.classList.toggle('on');
  });
});

// ??? Proto bar sync ???
document.querySelectorAll('.pfb').forEach((b,i)=>{
  b.addEventListener('click',function(){
    if(i===0) sv('wl');
    else if(i===1) sv('ch');
    else if(i===2) oa();
  });
});

// ??? v11: Notification System ???
function toggleNoti(){
  const p=document.getElementById('notiPanel');
  p.classList.toggle('sh');
}
function clearNoti(){
  document.querySelectorAll('.noti-item.unread').forEach(i=>i.classList.remove('unread'));
  document.getElementById('notiBadge').textContent='';
  toast('紐⑤뱺 ?뚮┝???쎌쓬 泥섎━?덉뒿?덈떎.','?뵒',2000);
}
function handleNotiClick(type){
  const item=event.currentTarget;
  item.classList.remove('unread');
  updateNotiBadge();
  document.getElementById('notiPanel').classList.remove('sh');
  if(type==='req'){oa();setTimeout(()=>{const t=document.querySelector('.atb');if(t)at(t,'p-req')},100)}
  else if(type==='sys'){oa();setTimeout(()=>{const tabs=document.querySelectorAll('.atb');tabs.forEach(t=>{if(t.textContent.includes('?곗씠??))at(t,'p-int')})},100)}
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
  el.innerHTML=`<span class="noti-item-ic">${icon}</span><div class="noti-item-body"><div class="noti-item-title">${title}</div><div class="noti-item-desc">${desc}</div><div class="noti-item-time">諛⑷툑</div></div>`;
  list.insertBefore(el,list.firstChild);
  updateNotiBadge();
}

// ??? v11: External Knowledge Toggle ???
let webOn=false;
function toggleWeb(){
  webOn=!webOn;
  document.getElementById('webTg').classList.toggle('on',webOn);
  document.getElementById('webInd').classList.toggle('sh',webOn);
  toast(webOn?'?뙋 ?몃?吏???쒖슜 ON ????寃??寃곌낵瑜?AI ?묐떟??諛섏쁺?⑸땲??':'?뵏 ?몃?吏??OFF ???대? ?곗씠?곕쭔 ?ъ슜?⑸땲??',webOn?'?뙋':'?뵏',2500);
}

// ??? v11: Mypage ???
function openMypage(){document.getElementById('mpOv').classList.add('sh');document.body.style.overflow='hidden'}
function closeMypage(){document.getElementById('mpOv').classList.remove('sh');document.body.style.overflow=''}
function mpTab(btn,id){
  document.querySelectorAll('.mp-tab').forEach(t=>t.classList.remove('on'));
  btn.classList.add('on');
  ['mp-t1','mp-t2','mp-t3'].forEach(t=>{const e=document.getElementById(t);if(e)e.style.display=t===id?'block':'none'});
}

// ??? v11: Enhanced approve/reject with notifications ???
const origAppReq=appReq;
appReq=function(b){
  origAppReq(b);
  const title=b.closest('.req-card').querySelector('.req-title')?.textContent||'臾몄꽌';
  addNoti('??,'?뱀씤 ?꾨즺',title+'??媛) ?뱀씤?섏뼱 吏??踰좎씠?ㅼ뿉 諛섏쁺?⑸땲??');
};
const origRejReq=rejReq;
rejReq=function(b){
  origRejReq(b);
  const title=b.closest('.req-card').querySelector('.req-title')?.textContent||'臾몄꽌';
  addNoti('??,'?붿껌 蹂댁셿 ?붿껌',title+'??媛) 蹂댁셿 ?붿껌?섏뿀?듬땲??');
};


// ??? Theme Toggle ???
function toggleTheme(){
  const html=document.documentElement;
  const cur=html.getAttribute('data-theme')||'dark';
  const next=cur==='dark'?'light':'dark';
  html.setAttribute('data-theme',next);
  document.getElementById('themeT').textContent=next==='dark'?'?뙔':'?截?;
  toast(next==='light'?'?截??쇱씠??紐⑤뱶濡??꾪솚?덉뒿?덈떎.':'?뙔 ?ㅽ겕 紐⑤뱶濡??꾪솚?덉뒿?덈떎.',next==='light'?'?截?:'?뙔',2000);
}

// ??? Community ???
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

// ??? Character ???
const accSlots = {hat:'accHat',face:'accFace',hand:'accHand',pet:'accPet',effect:'charEffect',bg:'charBg'};
const hatItems = ['?렔','?몣','??','?럳','?묕툘'];
const faceItems = ['?빒截?,'?몥','?샆','?렚','?ㅏ'];
const petItems = ['?맩','?맯','?맔','?릧','?쫫'];
const effectItems = ['狩?,'?뮟','?뵦','?꾬툘','?렦'];
const bgItems = ['?뙄','?뙵','?룘截?,'?뙆','?룺'];

function equipItem(slot,emoji){
  // Category-aware equip
  const cats={hat:hatItems,face:faceItems,pet:petItems,effect:effectItems,bg:bgItems};
  let cat=null;
  for(const[k,arr]of Object.entries(cats)){if(arr.includes(emoji)){cat=k;break}}
  if(cat){document.querySelectorAll('.inv-slot').forEach(s=>{const e=s.textContent.trim();if(cats[cat].includes(e))s.classList.remove('equipped')})}
  slot.classList.add('equipped');
  const targets={hat:'accHat',face:'accFace',pet:'accPet',effect:'charEffect',bg:'charBg'};
  if(cat&&targets[cat]){const el=document.getElementById(targets[cat]);if(el){el.textContent=emoji;el.style.display='block'}}
  toast(emoji+' ?μ갑!','??,1200);
}
function buyItem(el,emoji,name,price){
  if(el.classList.contains('owned'))return;
  if(confirm(name+'??瑜? '+price+'pt濡?援щℓ?섏떆寃좎뒿?덇퉴?')){
    el.classList.add('owned');
    el.querySelector('.shop-pr').textContent='??蹂댁쑀';
    // Add to inventory
    var emptySlot = document.querySelector('.inv-slot.empty');
    if(emptySlot){
      emptySlot.classList.remove('empty');
      emptySlot.textContent = emoji;
      emptySlot.title = name;
      emptySlot.onclick = function(){ equipItem(this,emoji) };
    }
    toast(name+' 援щℓ ?꾨즺! ?몃깽?좊━?먯꽌 ?μ갑?섏꽭??','?럦',2000);
  }
}

// ??? Floating Character (draggable) ???
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
  const msg=prompt('?ㅻ뒛???쒕쭏?붾? ?낅젰?섏꽭??','?ㅻ뒛???붿씠?? ?뮞');
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
  toast(btn.title+' ?좏깮!','??,1200);
}
// Show bubble on load
const bubbleMsgs=['?ㅻ뒛???붿씠?? ?뮞','援щℓ 吏???섎늻??媛??','?듬? ?묒꽦?섎㈃ +15pt! ?뱷','?대쾲 ??紐낆삁???꾨떦 ?꾩쟾! ?룇','?ㅻ뒛 而⑤뵒??理쒓퀬? ?삃'];
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
  if(tb)tb.textContent=cur==='light'?'?截?:'?뙔';
};

// ??? Initial state ???
scrollChat();

// ??? Nickname Management (fixed in mypage) ???
let userNickname = '?꾨줈?먯뼱?덉뼱濡?;
function saveNickname(){
  const input = document.getElementById('mpNickInput');
  const val = input.value.trim();
  if(!val){toast('?됰꽕?꾩쓣 ?낅젰?댁＜?몄슂.','?좑툘',2500);return}
  if(val.length > 12){toast('?됰꽕?꾩? 12???대궡濡??ㅼ젙?댁＜?몄슂.','?좑툘',2500);return}
  userNickname = val;
  document.getElementById('charNick').textContent = val;
  const commNick = document.getElementById('commNickDisplay');
  if(commNick) commNick.textContent = val;
  const qWriteNick = document.getElementById('qWriteNick');
  if(qWriteNick) qWriteNick.textContent = val;
  toast('?됰꽕?꾩씠 "'+val+'"(??濡?蹂寃쎈릺?덉뒿?덈떎.','??,2500);
}
function setNick(v){
  userNickname = v;
  document.getElementById('charNick').textContent = v;
}

// ??? Q&A Detail View ???
const qaData = {
  1: {
    title:'?꾨젰?곸엯李곗뿉??1?뚯감 ?좎같 ??泥섎━ ?덉감媛 沅곴툑?⑸땲??,
    body:'?덈뀞?섏꽭?? ?낆같 ?낅Т 以??꾨젰?곸엯李?1?뚯감?먯꽌 ?좎같??諛쒖깮?덉쓣 ???대뼡 ?덉감瑜?諛잛븘???섎뒗吏 沅곴툑?⑸땲?? 援щℓ?낅Т洹쒖젙 ?대뵒??愿???댁슜???덈굹?? ?섏쓽怨꾩빟?쇰줈 ?꾪솚?섎젮硫??대뼡 議곌굔???꾩슂?쒖????뚮젮二쇱떆硫?媛먯궗?섍쿋?듬땲??',
    cat:'?낆같',author:'怨꾩빟珥덈낫',authorLv:'Lv.1',time:'3????,hair:'#553C2E',suit:'#52A0A8',hat:'',
    answers:[
      {author:'?꾨줈?먯뼱留덉뒪??,authorLv:'Lv.4',hair:'#8B4513',suit:'#4EAD7B',hat:'?몣',body:'援щℓ?낅Т洹쒖젙 ??3議?4??뿉 ?곕Ⅴ硫?1?뚯감 ?좎같 ??李몄뿬 ?낆껜 ?뺣? ?먮뒗 ?섏쓽怨꾩빟 ?꾪솚??媛?ν빀?덈떎. ?ㅻТ?곸쑝濡쒕뒗 援щℓ?꾩썝???ъ쟾 ?뱀씤??諛쏄퀬 2?뚯감瑜?吏꾪뻾?섎릺, ?낆껜 ?섍? 遺議깊븷 寃쎌슦 ?섏쓽怨꾩빟 ?덉감濡??꾪솚?⑸땲?? ?섏쓽怨꾩빟 ?꾪솚 ?쒖뿉???좎같 ?ъ쑀?쒖? ?④퍡 3?ㅽ? ?댁긽 ?낆껜 以??곴꺽 ?꾨낫 由ъ뒪?몃? 泥⑤??댁빞 ?⑸땲??',votes:47,adopted:true,aiDb:true},
      {author:'VAATZ?ъ씤',authorLv:'Lv.2',hair:'#1A365D',suit:'#8678BF',hat:'?빒截?,body:'異붽?濡?VAATZ?먯꽌???낆같愿由????좎같泥섎━ 硫붾돱?먯꽌 "?ш났怨? ?먮뒗 "?섏쓽?꾪솚" 踰꾪듉???대┃?섎㈃ ?⑸땲?? ?ш났怨??쒖뿉??湲곗〈 李몄뿬?낆껜???먮룞 ?뚮┝??諛쒖넚?⑸땲??',votes:12,adopted:false}
    ]
  },
  2: {
    title:'5?ㅽ? 4???깃툒 ?밴툒 ???꾩옣 ?ъ궗 ??ぉ??蹂寃쎈릺?덈굹??',
    body:'25??1?붾???5?ㅽ? ?됯? 湲곗???媛쒖젙?섏뿀?ㅺ퀬 ?ㅼ뿀?붾뜲, 4?깃툒?먯꽌 5?깃툒?쇰줈 ?밴툒?????덈줈???꾩닔 ?붽굔??異붽??섏뿀?붿? 沅곴툑?⑸땲?? IATF 16949 ?몄쬆???꾩닔媛 ?섏뿀?ㅻ뒗 ?댁빞湲곕룄 ?덈뒗???뺤씤 遺?곷뱶由쎈땲??',
    cat:'5?ㅽ?',author:'?덉쭏留ㅻ땲?',authorLv:'Lv.2',time:'1????,hair:'#2C1810',suit:'#C29B42',hat:'',
    answers:[
      {author:'?덉쭏吏?댁씠',authorLv:'Lv.3',hair:'#2D3748',suit:'#4B8EF0',hat:'?럳',body:'?? 25??1?붾????좉퇋 ?됯? 湲곗????곸슜?섏뼱 ?덉쭏寃쎌쁺?쒖뒪???몄쬆(IATF 16949)??5?깃툒 ?밴툒 ?꾩닔 ?붽굔?쇰줈 異붽??섏뿀?듬땲?? 湲곗〈 4?깃툒 ?낆껜??26??6?붽퉴吏 ?좎삁湲곌컙???곸슜?⑸땲?? 愿???댁슜? ?묐젰???덉쭏 5?ㅽ? ?댁쁺湲곗? 媛쒖젙????議곕? 李멸퀬?섏꽭??',votes:23,adopted:false}
    ]
  },
  3: {
    title:'VAATZ?먯꽌 ?댁쇅 諛쒖＜ ???섏쑉 ?먮룞 ?곸슜 諛⑸쾿',
    body:'?댁쇅 援щℓ瑜?吏꾪뻾????VAATZ ?쒖뒪?쒖뿉???섏쑉???대뼸寃??곸슜?섎뒗吏 ?뚭퀬 ?띠뒿?덈떎. 諛쒖＜ ?쒖젏???섏쑉?몄?, ?꾨땲硫?寃곗젣 ?쒖젏 ?섏쑉?몄? ?쇰룞???⑸땲??',
    cat:'VAATZ',author:'?댁쇅援щℓ?대떦',authorLv:'Lv.2',time:'?ㅻ뒛',hair:'#1A365D',suit:'#8678BF',hat:'?빒截?,
    answers:[
      {author:'VAATZ?ъ씤',authorLv:'Lv.2',hair:'#1A365D',suit:'#8678BF',hat:'?빒截?,body:'VAATZ 湲濡쒕쾶 援щℓ 紐⑤뱢?먯꽌 ?섏쑉? 留ㅼ씪 ?ㅼ쟾 9??湲곗??쇰줈 ?쒓뎅???怨좎떆 留ㅻℓ湲곗??⑥쓣 ?먮룞 ?섏떊?섏뿬 ?곸슜?⑸땲?? 諛쒖＜???앹꽦 ?쒖젏???뱀씪 ?섏쑉???먮룞?쇰줈 諛섏쁺?⑸땲??',votes:15,adopted:false},
      {author:'?꾨줈?먯뼱留덉뒪??,authorLv:'Lv.4',hair:'#8B4513',suit:'#4EAD7B',hat:'?몣',body:'蹂댁땐?섎㈃, ?섎룞 ?섏쑉 ?낅젰? ?뱀닔 ?듯솕(AED, THB ?? 嫄곕옒 ?쒖뿉留??꾩슂?⑸땲?? 湲濡쒕쾶 援щℓ ???섏쑉愿由?硫붾돱?먯꽌 ?듯솕蹂??섎룞 ?낅젰??媛?ν븯硫? ????뱀씤???꾩슂?⑸땲??',votes:8,adopted:false}
    ]
  },
  4: {
    title:'?섏쓽怨꾩빟 湲닿툒 ?ъ쑀???뱀씤 湲곗????대뼸寃??섎굹??',
    body:'湲닿툒 ?섏쓽怨꾩빟??吏꾪뻾?댁빞 ?섎뒗 ?곹솴?몃뜲, ?ъ쑀???묒꽦 ???대뼡 湲곗??쇰줈 ?뱀씤???대（?댁??붿? 沅곴툑?⑸땲?? 湲덉븸 湲곗?蹂??꾧껐 沅뚰븳???대뼸寃??섎굹??',
    cat:'怨꾩빟',author:'怨꾩빟珥덈낫',authorLv:'Lv.1',time:'?ㅻ뒛',hair:'#553C2E',suit:'#52A0A8',hat:'',
    answers:[
      {author:'?꾨줈?먯뼱?덉뼱濡?,authorLv:'Lv.3',hair:'#4A3728',suit:'#4B8EF0',hat:'?렔',body:'湲닿툒 ?섏쓽怨꾩빟 ?뱀씤 湲곗?: 5泥쒕쭔???댄븯 ????꾧껐, 5泥쒕쭔??1???ㅼ옣 ?뱀씤, 1??珥덇낵 援щℓ?꾩썝???ъ쓽 ?꾩슂. ?ъ쑀???묒떇? VAATZ ??怨꾩빟愿由????묒떇 ?ㅼ슫濡쒕뱶?먯꽌 "湲닿툒?섏쓽 ?ъ쑀??FM-PU-042)"瑜?諛쏆쑝?????덉뒿?덈떎.',votes:8,adopted:false}
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
    var adoptedBadge = a.adopted ? '<div style="position:absolute;top:10px;right:12px;font-size:9px;font-weight:700;color:var(--accent);background:var(--accent-dim);padding:2px 8px;border-radius:4px">??梨꾪깮???듬?</div>' : '';
    var aiDbBadge = a.aiDb ? '<div style="position:absolute;top:10px;right:'+(a.adopted?'100':'12')+'px;font-size:9px;font-weight:700;color:var(--v);background:var(--v-dim);padding:2px 8px;border-radius:4px">?쭬 AI DB 諛섏쁺</div>' : '';
    var adoptBtn = !a.adopted ? '<button style="background:var(--accent-dim);border:1px solid var(--accent-bd);color:var(--accent);padding:4px 10px;border-radius:5px;font-size:10px;cursor:pointer;font-family:inherit" onclick="adoptAnswer(this)">??梨꾪깮?섍린</button>' : '';
    answersHtml += '<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;padding:16px;margin-bottom:8px;position:relative;'+adoptedStyle+'">'+adoptedBadge+aiDbBadge+'<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><div class="qa-char-av">'+miniCharSvg(a.hair,a.suit)+(a.hat?'<span class="mini-acc mini-hat">'+a.hat+'</span>':'')+'</div><div style="font-size:12px;font-weight:600">'+a.author+' <span class="lv">'+a.authorLv+'</span></div></div><div style="font-size:13px;color:var(--text-2);line-height:1.8;margin-bottom:10px">'+a.body+'</div><div style="display:flex;gap:6px;align-items:center"><button style="background:var(--bg-3);border:1px solid var(--border-1);color:var(--text-3);padding:4px 10px;border-radius:5px;font-size:10px;cursor:pointer;font-family:inherit" onclick="voteUp(this)">?몟 異붿쿇 '+String(a.votes)+'</button>'+adoptBtn+'</div></div>';
  });
  
  document.getElementById('qaDetailContent').innerHTML = '<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;padding:18px;margin-bottom:16px"><div style="display:flex;gap:6px;margin-bottom:8px"><span class="qa-cat">'+data.cat+'</span></div><div style="font-size:16px;font-weight:700;margin-bottom:10px;line-height:1.5">'+data.title+'</div><div style="font-size:13px;color:var(--text-2);line-height:1.8;margin-bottom:12px">'+data.body+'</div><div style="display:flex;align-items:center;gap:10px;font-size:10px;color:var(--text-4)"><div class="qa-author"><div class="qa-char-av">'+miniCharSvg(data.hair,data.suit)+(data.hat?'<span class="mini-acc mini-hat">'+data.hat+'</span>':'')+'</div><span>'+data.author+'</span><span class="lv">'+data.authorLv+'</span></div><span>'+data.time+'</span></div></div><div style="font-size:12px;font-weight:600;margin-bottom:10px;display:flex;align-items:center;gap:5px">?뮠 ?듬? '+data.answers.length+'媛?/div>'+answersHtml;
}

function backToQAList(){
  document.getElementById('qaList').style.display = 'flex';
  document.querySelector('.comm-toolbar').style.display = 'flex';
  var tipEl = document.querySelector('#ct-qa > div[style*="text-align"]');
  if(tipEl) tipEl.style.display = '';
  document.getElementById('qaDetailView').style.display = 'none';
}

function adoptAnswer(btn){
  btn.outerHTML = '<span style="font-size:10px;font-weight:700;color:var(--accent);background:var(--accent-dim);padding:3px 10px;border-radius:5px">??梨꾪깮 ?꾨즺</span>';
  toast('?듬???梨꾪깮?덉뒿?덈떎! ?묒꽦?먯뿉寃?+30pt媛 吏湲됰맗?덈떎.','??,3000);
}
function voteUp(btn){btn.style.color='var(--accent)';btn.style.borderColor='var(--accent-bd)'}

function submitAnswer(){
  const textarea = document.getElementById('answerTextarea');
  const text = textarea.value.trim();
  if(!text){toast('?듬? ?댁슜???낅젰?댁＜?몄슂.','?좑툘',2500);return}
  toast('?듬????깅줉?섏뿀?듬땲?? +5pt ?띾뱷','??,3000);
  textarea.value = '';
}

// ??? Question Write ???
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
  if(!cat){toast('移댄뀒怨좊━瑜??좏깮?댁＜?몄슂.','?좑툘',2500);return}
  if(!title){toast('吏덈Ц ?쒕ぉ???낅젰?댁＜?몄슂.','?좑툘',2500);return}
  if(!body){toast('?곸꽭 ?댁슜???낅젰?댁＜?몄슂.','?좑툘',2500);return}
  
  // Add new card to list
  const list = document.getElementById('qaList');
  const card = document.createElement('div');
  card.className = 'qa-card highlight-new';
  card.innerHTML = `<div class="qa-top"><div class="qa-votes"><button class="qa-v-btn" onclick="event.stopPropagation();voteQ(this)">??/button><span class="qa-v-n">0</span><button class="qa-v-btn" onclick="event.stopPropagation()">??/button></div>
  <div class="qa-info"><div class="qa-title"><span class="qa-tag new0">NEW</span>${escHtml(title)}</div>
  <div class="qa-preview">${escHtml(body.substring(0,100))}...</div>
  <div class="qa-meta"><span class="qa-cat">${cat}</span><span style="color:var(--g)">?뮠 0</span><div class="qa-author"><div class="qa-author-av">${userNickname[0]}</div><span>${userNickname}</span><span class="lv lv-3">Lv.3</span></div><span>諛⑷툑</span></div></div></div>`;
  list.insertBefore(card, list.firstChild);
  
  closeQuestionWrite();
  document.getElementById('qCatSel').value = '';
  document.getElementById('qTitleInput').value = '';
  document.getElementById('qBodyInput').value = '';
  toast('吏덈Ц???깅줉?섏뿀?듬땲?? +3pt ?띾뱷','??,3000);
}

// ??? History Modal (?대젰愿由? ???
function openHistory(){
  toast('?뱶 ?대젰 愿由?湲곕뒫? ?ν썑 ?낅뜲?댄듃?먯꽌 ?쒓났?⑸땲?? ?꾩옱???쇱そ ?ъ씠?쒕컮??理쒓렐 ???紐⑸줉?먯꽌 ?댁쟾 ??붾? ?뺤씤?섏떎 ???덉뒿?덈떎.','?뱶',4000);
}

// ??? Character Widget Bubble Rotation (v20: reuse bubbleMsgs) ???
let bubbleIdx = 0;
setInterval(function(){
  const bubble = document.querySelector('.char-widget-bubble');
  if(bubble){
    bubbleIdx = (bubbleIdx + 1) % bubbleMsgs.length;
    bubble.textContent = bubbleMsgs[bubbleIdx];
  }
}, 8000);


// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??// ?먥븧??v20: RAG SOURCE HIGHLIGHT VIEWER ??Core Logic       ?먥븧??// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??
// Mock document data ??each citation maps to a document with rendered "page" content
// In production, this would be PDF.js page rendering + bbox-based highlight overlay
const sourceDocs = {
  1: {
    name: '援щℓ?낅Т洹쒖젙 ??3議?,
    type: 'pdf',
    typeLabel: 'PDF',
    path: '/援щℓ?꾨왂/洹쒖젙/援щℓ?낅Т洹쒖젙_v8.2.pdf',
    security: 'h',
    securityLabel: '?믪쓬',
    owner: '源?꾨? 쨌 援щℓ?붿??몄텛吏꾪?',
    version: 'v8.2',
    embedded: '2025.01.15',
    pages: [
      {
        no: 34, total: 156,
        title: '??3議?(寃쎌웳 ?낆같??諛⑹떇)',
        sub: '?????낆같 쨌 ????寃쎌웳 ?낆같',
        highlights: ['primary-1'],
        body: `
          <p><strong>??3議?(寃쎌웳 ?낆같??諛⑹떇)</strong></p>
          <p><span class="src-hi primary" data-h="primary-1"><span class="src-hi-mk">??/span>蹂?洹쒖젙???곕Ⅸ 寃쎌웳 ?낆같? ?꾨젰?곸엯李곌낵 寃쎈ℓ?낆같???먯튃?쇰줈 ?쒕떎.</span> ?ㅻ쭔, ?ㅼ쓬 媛??몄쓽 ?대뒓 ?섎굹???대떦?섎뒗 寃쎌슦 蹂몃????뱀씤???살뼱 ?ㅻⅨ 諛⑹떇???곸슜?????덈떎.</p>
          <ol>
            <li>援?? ?먮뒗 吏諛⑹옄移섎떒泥닿? ?뺥븳 ?쒖? ?덉감瑜??곕씪???섎뒗 寃쎌슦</li>
            <li>援?젣 ?낆같 ?덉감瑜??곸슜?댁빞 ?섎뒗 寃쎌슦</li>
            <li>湲닿툒 議곕떖???붽뎄?섏뼱 蹂꾨룄 ?덉감媛 遺덇??쇳븳 寃쎌슦</li>
          </ol>
          <h4>1. ?꾨젰?곸엯李?/h4>
          <p><span class="src-hi" data-h="h2">?꾨젰?곸엯李곗? 李몄뿬 ?낆껜???먯떊???쒖쐞留뚯쓣 怨듦컻?섎ŉ, 2?뚯감 ?댁긽 媛寃??쒖텧???듯빐 理쒖? 媛寃⑹쓣 ?꾩텧?섎뒗 諛⑹떇?대떎.</span> 蹂?諛⑹떇? 洹쒓꺽???쒖??붾맂 ?쇰컲 ?먯옱 諛?遺??援щℓ???곸슜?쒕떎.</p>
          <h4>2. 寃쎈ℓ?낆같</h4>
          <p>寃쎈ℓ?낆같? ?낆같 吏꾪뻾 以?紐⑤뱺 李몄뿬?먯뿉寃??꾩옱 理쒖?媛瑜??ㅼ떆媛?怨듦컻?섎ŉ, 留덇컧 ?쒓컙 ??臾댁젣??媛寃??섏젙??媛?ν븯??</p>
        `
      },
      {
        no: 35, total: 156, title: '??3議?(怨꾩냽) ???꾨젰?곸엯李?,
        sub: '?????낆같 쨌 ????寃쎌웳 ?낆같',
        highlights: ['primary-1'],
        body: `
          <p>???? <strong>?꾨젰?곸엯李곗쓽 ?댁쁺 ?덉감</strong></p>
          <p><span class="src-hi primary" data-h="primary-1"><span class="src-hi-mk">??/span>?꾨젰?곸엯李곗? 李몄뿬 ?낆껜???먯떊???쒖쐞留뚯쓣 怨듦컻?섎ŉ, 2?뚯감 ?댁긽 媛寃??쒖텧???듯빐 理쒖? 媛寃⑹쓣 ?꾩텧?섎뒗 諛⑹떇?대떎.</span> ?듭긽 2~3?뚯감 吏꾪뻾?섎ŉ, 1?뚯감 醫낅즺 ???쒖쐞 怨듦컻? ?④퍡 ?ㅼ쓬 ?뚯감 留덇컧 ?쒓컙???듭??쒕떎.</p>
          <h4>?곸슜 湲곗?</h4>
          <ul>
            <li>洹쒓꺽???쒖??붾맂 ?쇰컲 ?먯옱 諛?遺??/li>
            <li>?덉젙 媛寃??곗젙??媛?ν븳 ?덈ぉ</li>
            <li>怨꾩빟 湲덉븸 3泥쒕쭔???댁긽</li>
          </ul>
          <h4>?뚯감 援ъ꽦</h4>
          <table><thead><tr><th>?뚯감</th><th>怨듦컻 ?뺣낫</th><th>?쒖텧 媛???잛닔</th></tr></thead>
          <tbody>
          <tr><td>1?뚯감</td><td>?놁쓬</td><td>1??/td></tr>
          <tr><td>2?뚯감</td><td>蹂몄씤 ?쒖쐞</td><td>1??/td></tr>
          <tr><td>3?뚯감</td><td>蹂몄씤 ?쒖쐞 + 1?꾩???李⑥씠</td><td>1??/td></tr>
          </tbody></table>
        `
      },
      {
        no: 36, total: 156, title: '??3議?(怨꾩냽) ??寃쎈ℓ?낆같',
        sub: '?????낆같 쨌 ????寃쎌웳 ?낆같',
        highlights: ['primary-1'],
        body: `
          <p>???? <strong>寃쎈ℓ?낆같???댁쁺 ?덉감</strong></p>
          <p><span class="src-hi primary" data-h="primary-1"><span class="src-hi-mk">??/span>寃쎈ℓ?낆같? ?낆같 吏꾪뻾 以?紐⑤뱺 李몄뿬?먯뿉寃??꾩옱 理쒖?媛瑜??ㅼ떆媛?怨듦컻?섎ŉ, 留덇컧 ?쒓컙 ??臾댁젣??媛寃??섏젙??媛?ν븯??</span> 蹂?諛⑹떇? 踰붿슜 ?먯옱쨌MRO쨌臾쇰쪟鍮????쒖옣 媛寃⑹씠 ?뺤꽦???덈ぉ???곸슜?쒕떎.</p>
          <h4>?곸슜 沅뚯옣 湲곗?</h4>
          <ul>
            <li>怨꾩빟 湲덉븸 1?듭썝 ?댁긽 嫄?/li>
            <li>3媛쒖궗 ?댁긽???곴꺽 ?낆껜 ?뺣낫 媛????/li>
            <li>?쒗뭹 ?ъ뼇???숈씪?섏뿬 媛寃???李⑤퀎???붿냼媛 ?곸? 寃쎌슦</li>
          </ul>
          <p>蹂?諛⑹떇? ?④? ?명븯 ?④낵媛 ?щ굹, 怨쇰룄??媛寃??섎씫???곕Ⅸ ?덉쭏 由ъ뒪??寃?좉? ?섎컲?섏뼱???쒕떎.</p>
        `
      },
      {
        no: 37, total: 156, title: '??3議?(怨꾩냽) ???낆같 ?곗옣 洹쒖젙',
        sub: '?????낆같 쨌 ????寃쎌웳 ?낆같',
        highlights: ['primary-1'],
        body: `
          <p>???? <strong>?낆같 留덇컧 ?쒓컙 ?먮룞 ?곗옣</strong></p>
          <p><span class="src-hi primary" data-h="primary-1"><span class="src-hi-mk">??/span>?낆같 留덇컧 5遺???媛寃??쒖텧??諛쒖깮??寃쎌슦, 留덇컧 ?쒓컙? ?먮룞?쇰줈 5遺??곗옣?쒕떎.</span> ?곗옣? 異붽? ?낆같???놁쓣 ?뚭퉴吏 諛섎났?섎ŉ, 理쒕? 6?뚭퉴吏 ?꾩쟻 30遺??곗옣??媛?ν븯??</p>
          <h4>?먮룞 ?곗옣 洹쒖튃</h4>
          <ul>
            <li>5遺????낆같 諛쒖깮 ??+5遺??먮룞 ?곗옣</li>
            <li>?곗옣 ???ㅼ떆 5遺????낆같 諛쒖깮 ???ъ뿰??/li>
            <li>?꾩쟻 理쒕? 6??(30遺? 源뚯?</li>
            <li>?댄썑 ?낆같? 留덇컧 ??臾댄슚 泥섎━</li>
          </ul>
          <p>蹂?洹쒖젙? 留됲뙋 ?낆같 吏묒쨷 ?꾩긽???꾪솕?섍퀬 異⑸텇??寃쎌웳???대（?댁??꾨줉 ?섍린 ?꾪븳 ?μ튂?대떎.</p>
        `
      }
    ],
    quotes: { 'primary-1': 'p.34' }
  },
  2: {
    name: '?낆같?댁쁺 ?낅Т?쒖? STD-PUR-012',
    type: 'doc',
    typeLabel: 'DOCX',
    path: '/怨듯넻/?낅Т?쒖?/STD-PUR-012_v4.docx',
    security: 'm',
    securityLabel: '以묎컙',
    owner: '源?꾨? 쨌 援щℓ?붿??몄텛吏꾪?',
    version: 'v4.0',
    embedded: '2025.01.10',
    pages: [
      {
        no: 14, total: 32, title: '3.2 ?꾨젰?곸엯李??덉감',
        sub: '?????낆같 ?댁쁺 쨌 STD-PUR-012',
        highlights: ['primary-1'],
        body: `
          <p><strong>3.2 ?꾨젰?곸엯李??덉감</strong></p>
          <p><span class="src-hi primary" data-h="primary-1">3.2.1 1?뚯감 ?쒖텧 ???쒖쐞留?怨듦컻, 誘몃굺李???2~3?뚯감源뚯? 媛寃??섏젙 ?쒖텧??媛?ν븯??</span> 媛??뚯감 留덇컧? ?쒖뒪?쒖뿉 ?섑빐 ?먮룞 ?듬낫?섎ŉ, ?뚯감蹂?留덇컧 ?쒓컙? ?듭긽 24?쒓컙 ?⑥쐞濡??ㅼ젙?쒕떎.</p>
          <h4>3.2.2 ?쒖뒪???먮쫫</h4>
          <ol>
            <li>?낆같 怨듦퀬 ?깅줉 ??VAATZ 援щℓ愿由?硫붾돱 ?ъ슜</li>
            <li>李몄뿬 ?낆껜 ?먮룞 珥덈? ??5?ㅽ? ?깃툒 ?꾪꽣留?/li>
            <li>1?뚯감 ?쒖텧 ???쒖쐞 怨듦컻</li>
            <li>2?뚯감 ?쒖텧 ???쒖쐞 ?ш났媛?/li>
            <li>3?뚯감 ?쒖텧 (?꾩슂 ?? ???숈같</li>
          </ol>
          <h4>3.2.3 ?뚯감 媛?媛꾧꺽</h4>
          <p>媛??뚯감 醫낅즺 ???ㅼ쓬 ?뚯감 ?쒖옉 ?꾧퉴吏 理쒖냼 4?쒓컙???湲??쒓컙???붾떎. ?대뒗 李몄뿬 ?낆껜媛 媛寃??ш????쒓컙???뺣낫?섍린 ?꾪븿?대떎.</p>
        `
      },
      {
        no: 15, total: 32, title: '3.2 ?꾨젰?곸엯李??덉감 (怨꾩냽)',
        sub: '?????낆같 ?댁쁺 쨌 STD-PUR-012',
        highlights: ['primary-1'],
        body: `
          <p><strong>3.2.4 李몄뿬 ?낆껜 ?좎젙</strong></p>
          <p><span class="src-hi primary" data-h="primary-1">李몄뿬 ?낆껜???쒖뒪?쒖뿉 ?깅줉??5?ㅽ? ?깃툒 湲곗????곕씪 ?먮룞 ?꾪꽣留곷릺硫? ?ъ뼇?쒕뒗 ?쇨큵 諛쒖넚?쒕떎.</span> 諛쒖넚 ?쒖젏??媛??낆껜???먮룞?쇰줈 ?낆같 ?뚮┝ ?대찓?쇱씠 ?꾩넚?쒕떎.</p>
          <h4>3.2.5 ?ъ뼇??諛고룷</h4>
          <ul>
            <li>?낆껜 珥덈? ???ъ뼇???먮룞 泥⑤?</li>
            <li>蹂寃??ы빆 諛쒖깮 ??紐⑤뱺 李몄뿬 ?낆껜???쇨큵 ?щ같??/li>
            <li>?낆껜蹂??ㅼ슫濡쒕뱶 ?대젰 ?먮룞 湲곕줉</li>
          </ul>
          <p>?ъ뼇??蹂寃쎌씠 諛쒖깮??寃쎌슦, 1?뚯감??泥섏쓬遺???ㅼ떆 ?쒖옉?쒕떎.</p>
        `
      }
    ],
    quotes: { 'primary-1': 'p.14' }
  },
  3: {
    name: '寃쎈ℓ?낆같 媛?대뱶?쇱씤 v2.1',
    type: 'pdf',
    typeLabel: 'PDF',
    path: '/怨듯넻/媛?대뱶/寃쎈ℓ?낆같_媛?대뱶_v2.1.pdf',
    security: 'm',
    securityLabel: '以묎컙',
    owner: '?댁???쨌 援щℓ?꾨왂?',
    version: 'v2.1',
    embedded: '2025.02.01',
    pages: [
      {
        no: 9, total: 28, title: '2.1 ?곸슜踰붿쐞',
        sub: '????寃쎈ℓ?낆같 ?댁쁺 湲곗?',
        highlights: ['primary-1'],
        body: `
          <p><strong>2.1 ?곸슜踰붿쐞</strong></p>
          <p><span class="src-hi primary" data-h="primary-1">2.1.1 踰붿슜 ?먯옱, MRO, 臾쇰쪟鍮????쒖옣 媛寃⑹씠 ?뺤꽦???덈ぉ 以?怨꾩빟 湲덉븸 1?듭썝 ?댁긽 嫄댁뿉 沅뚯옣?쒕떎.</span> ?ㅻ쭔, ?ㅼ쓬 ??ぉ? ?곸슜?먯꽌 ?쒖쇅?쒕떎.</p>
          <h4>2.1.2 ?곸슜 ?쒖쇅 ??ぉ</h4>
          <ul>
            <li>?꾨왂 遺??(諛섎룄泥? 紐⑦꽣, 諛고꽣由?? ??</li>
            <li>?덉쭏쨌湲곗닠 李⑤퀎?붽? ?듭떖???듭떖 湲곗닠 遺??/li>
            <li>?뱁뿀쨌?ㅼ슜?좎븞 ???낆젏 沅뚮━媛 ?곸슜???덈ぉ</li>
            <li>湲닿툒 議곕떖???꾩슂???덉쟾쨌?섍꼍 愿???먯옱</li>
          </ul>
          <h4>2.1.3 沅뚯옣 ?곸슜 ?덈ぉ</h4>
          <table><thead><tr><th>援щ텇</th><th>?덉떆 ?덈ぉ</th></tr></thead>
          <tbody>
          <tr><td>踰붿슜 ?먯옱</td><td>媛뺥뙋, ?뚮（誘몃뒆, ?뚮씪?ㅽ떛 ?좊┸</td></tr>
          <tr><td>MRO</td><td>怨듦뎄, ?뚮え???먯옱, ?щТ?⑺뭹</td></tr>
          <tr><td>臾쇰쪟鍮?/td><td>援?궡???댁넚, 蹂닿?, ?듦?</td></tr>
          </tbody></table>
        `
      },
      {
        no: 13, total: 28, title: '3.2 ?숈같 ??泥섎━',
        sub: '?????숈같 諛?諛쒖＜',
        highlights: ['primary-1'],
        body: `
          <p><strong>3.2 ?숈같 ??泥섎━</strong></p>
          <p><span class="src-hi primary" data-h="primary-1">3.2.1 ?숈같 寃곌낵??援щℓ?꾩썝???뱀씤 ??VAATZ 諛쒖＜?앹꽦 ?붾㈃?쇰줈 ?먮룞 ?곌퀎?쒕떎.</span> ?뱀씤 沅뚰븳? 湲덉븸 湲곗????곕씪 寃곗젙?쒕떎.</p>
          <h4>3.2.2 湲덉븸蹂??뱀씤 沅뚰븳</h4>
          <ul>
            <li>1?듭썝 ?댄븯: ????꾧껐</li>
            <li>1?듭썝 珥덇낵 ~ 5?듭썝: ?ㅼ옣 ?뱀씤</li>
            <li>5?듭썝 珥덇낵: 援щℓ?꾩썝???ъ쓽</li>
          </ul>
          <p>?뱀씤 ??VAATZ ?쒖뒪?쒖뿉???먮룞?쇰줈 諛쒖＜?쒓? ?앹꽦?섎ŉ, ?숈같 ?낆껜??PO 踰덊샇? ?④퍡 ?듬낫?쒕떎.</p>
        `
      }
    ],
    quotes: { 'primary-1': 'p.9' }
  },
  4: {
    name: 'VAATZ ?낆같紐⑤뱢 留ㅻ돱??,
    type: 'ppt',
    typeLabel: 'PPT',
    path: '/怨듯넻/留ㅻ돱??VAATZ_?낆같紐⑤뱢_留ㅻ돱??v3.pptx',
    security: 'l',
    securityLabel: '??쓬',
    owner: '源?꾨? 쨌 援щℓ?붿??몄텛吏꾪?',
    version: 'v3.1',
    embedded: '2025.01.20',
    pages: [
      {
        no: 42, total: 78, title: 'Ch.5 ?낆같 ?깅줉 ??硫붾돱 吏꾩엯',
        sub: '?????낆같 ?깅줉',
        slide: true,
        highlights: ['primary-1'],
        body: `
          <div class="src-slide">
            <div class="src-slide-no">Slide 42 / 78</div>
            <div class="src-slide-ti">5.1 ?낆같 ?깅줉 硫붾돱 吏꾩엯</div>
            <div class="src-slide-sub">VAATZ ??援щℓ愿由????낆같?깅줉</div>
            <ul>
              <li>?낆같 ?좏삎 ?좏깮 (?꾨젰??/ 寃쎈ℓ)</li>
              <li>?덈ぉ, ?섎웾, ?⑷린 ?꾩닔 ?낅젰</li>
              <li>李몄뿬 ?낆껜 ?먮룞 異붿쿇 (5?ㅽ? ?깃툒 湲곗?)</li>
              <li>?ъ뼇??泥⑤? (PDF, DWG, STEP)</li>
            </ul>
            <div class="src-slide-box"><span class="src-hi primary" data-h="primary-1">Ch.5 ?낆같?깅줉: 援щℓ愿由?> ?낆같?깅줉?먯꽌 ?낆같 ?좏삎(?꾨젰??寃쎈ℓ)???좏깮?섍퀬 ?꾩닔 ??ぉ???낅젰?쒕떎.</span></div>
          </div>
        `
      }
    ],
    quotes: { 'primary-1': 'Slide 42' }
  },
  5: {
    name: '?덉쭏 5?ㅽ? ?댁쁺湲곗?',
    type: 'xls',
    typeLabel: 'XLSX',
    path: '/?덉쭏/洹쒖젙/5?ㅽ?_?댁쁺湲곗?_v4.xlsx',
    security: 'm',
    securityLabel: '以묎컙',
    owner: '?뺥쁽??쨌 援щℓ?덉쭏湲고쉷?',
    version: 'v4.0',
    embedded: '2025.01.05',
    pages: [
      {
        no: 7, total: 24, title: '??議??낆같 李몄뿬 ?먭꺽',
        sub: '?쒗듃: ?깃툒蹂?沅뚰븳 쨌 ??議??곸뿭',
        excel: true,
        highlights: ['primary-1'],
        body: `
          <div class="src-xls">
            <table>
              <thead>
                <tr><th class="col-hd"></th><th class="col-hd">A</th><th class="col-hd">B</th><th class="col-hd">C</th><th class="col-hd">D</th></tr>
              </thead>
              <tbody>
                <tr><td class="row-hd">1</td><th colspan="4">??議?(?낆같 李몄뿬 ?먭꺽) ??5?ㅽ? ?깃툒 湲곗?</th></tr>
                <tr><td class="row-hd">2</td><th>?깃툒</th><th>?낆같 李몄뿬</th><th>?섏쓽怨꾩빟</th><th>鍮꾧퀬</th></tr>
                <tr><td class="row-hd">3</td><td>?? 理쒖슦??/td><td>??媛??/td><td>???곗꽑 ?묒긽 ???/td><td>???덈ぉ</td></tr>
                <tr><td class="row-hd">4</td><td>?? ?곗닔</td><td>??媛??/td><td>??媛??/td><td>???덈ぉ</td></tr>
                <tr><td class="row-hd">5</td><td>?? ?묓샇</td><td>??媛??/td><td>???쒗븳??/td><td>?쇰컲 ?덈ぉ</td></tr>
                <tr><td class="row-hd">6</td><td>?? 蹂댄넻</td><td>횞 遺덇?</td><td>횞 遺덇?</td><td>愿李????/td></tr>
                <tr><td class="row-hd">7</td><td>?? 誘명씉</td><td>횞 遺덇?</td><td>횞 遺덇?</td><td>媛쒖꽑 沅뚭퀬</td></tr>
                <tr><td class="row-hd">8</td><td colspan="4" class="hi"><span class="src-hi primary" data-h="primary-1">??議?李몄뿬?먭꺽) ?낆같 李몄뿬 ?낆껜??吏곸쟾 遺꾧린 ?됯? 湲곗? 3?ㅽ? ?댁긽?댁뼱???쒕떎.</span></td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        no: 9, total: 24, title: '??議?諛쒖＜ ???깃툒 ?곌퀎',
        sub: '?쒗듃: 諛쒖＜_?곌퀎',
        excel: true,
        highlights: ['primary-1'],
        body: `
          <div class="src-xls">
            <table>
              <thead><tr><th class="col-hd"></th><th class="col-hd">A</th><th class="col-hd">B</th></tr></thead>
              <tbody>
                <tr><td class="row-hd">1</td><th colspan="2">??議?(諛쒖＜ ???깃툒 ?뺣낫 ?쒖떆)</th></tr>
                <tr><td class="row-hd">2</td><td colspan="2" class="hi"><span class="src-hi primary" data-h="primary-1">?숈같 ?쒖젏??5?ㅽ? ?깃툒 ?뺣낫媛 VAATZ 諛쒖＜ ?붾㈃???먮룞 ?쒖떆?쒕떎.</span></td></tr>
                <tr><td class="row-hd">3</td><td>?쒖떆 ??ぉ</td><td>?깃툒, 吏곸쟾 遺꾧린 ?됯??? ?됯??? 醫낇빀 ?먯닔</td></tr>
                <tr><td class="row-hd">4</td><td>?낅뜲?댄듃 二쇨린</td><td>遺꾧린蹂?(3, 6, 9, 12??泥レ㎏ 二?</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        no: 11, total: 24, title: '??1議??섏쓽怨꾩빟 ?곗꽑 ?묒긽',
        sub: '?쒗듃: ?섏쓽怨꾩빟_?곌퀎',
        excel: true,
        highlights: ['primary-1'],
        body: `
          <div class="src-xls">
            <table>
              <thead><tr><th class="col-hd"></th><th class="col-hd">A</th><th class="col-hd">B</th></tr></thead>
              <tbody>
                <tr><td class="row-hd">1</td><th colspan="2">??1議?(?섏쓽怨꾩빟 ?곗꽑 ?묒긽沅?</th></tr>
                <tr><td class="row-hd">2</td><td colspan="2" class="hi"><span class="src-hi primary" data-h="primary-1">5?ㅽ? ?깃툒 ?낆껜???숈씪 ?덈ぉ ?섏쓽怨꾩빟 ???곗꽑 ?묒긽 ??곸쑝濡??좎젙?쒕떎.</span></td></tr>
                <tr><td class="row-hd">3</td><td>???/td><td>?? 理쒖슦???깃툒 ?낆껜</td></tr>
                <tr><td class="row-hd">4</td><td>?곸슜 踰붿쐞</td><td>理쒓렐 12媛쒖썡 ???⑺뭹 ?ㅼ쟻???덈뒗 ?숈씪 ?덈ぉ</td></tr>
                <tr><td class="row-hd">5</td><td>媛寃?湲곗?</td><td>?꾪쉶 ?④? 짹5% ?대궡</td></tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    quotes: { 'primary-1': 'p.7' }
  }
};

// Per-citation page index ??which page to open when clicking [N]
const citationPageMap = {
  1: 0,  // citation [1] ??page 34 (index 0)
  2: 0,  // citation [2] ??STD-PUR-012 p.14
  3: 0,  // citation [3] ??p.9
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
    document.getElementById('rpTitle').textContent='?뱛 ?묒뾽 ?⑤꼸 쨌 ???뚯씪';
  } else {
    document.getElementById('rpTabSrc').classList.add('on');
    document.getElementById('rpPaneSrc').classList.add('on');
    document.getElementById('rpTitle').textContent='?뵇 ?묒뾽 ?⑤꼸 쨌 ?듬? 洹쇨굅';
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
         <div class="src-page-hd"><span>${escHtml(doc.name)} 쨌 ${doc.version}</span><span>${page.no} / ${page.total}</span></div>
         <div class="src-page-ti">${escHtml(page.title)}</div>
         <div class="src-page-sub">${escHtml(page.sub)}</div>
         ${page.body}
         <div class="src-page-ft"><span>${escHtml(doc.path)}</span><span>VAATZ AI 쨌 ${doc.embedded} ?몃뜳??/span></div>
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
      <div class="src-doc-sec ${secCls}">?뵏 ${doc.securityLabel}</div>
    </div>
    <div class="src-pgnav">
      <div class="src-pgnav-c">
        <button class="src-pgnav-btn" ${currentSourcePage===0?'disabled':''} onclick="navSourcePage(-1)">??/button>
        <span class="src-pgnav-cnt">${isSlide?'?щ씪?대뱶 ':isExcel?'?쒗듃 ':'p. '}${page.no}/${page.total}</span>
        <button class="src-pgnav-btn" ${currentSourcePage>=doc.pages.length-1?'disabled':''} onclick="navSourcePage(1)">??/button>
      </div>
      <div class="src-pgnav-zoom" style="display:flex;gap:4px;align-items:center">
        <span style="font-size:9px;color:var(--text-4);font-family:'JetBrains Mono',monospace">${doc.owner.split(' 쨌 ')[1]||doc.owner}</span>
        <button class="src-pgnav-btn" title="?먮Ц ?ㅼ슫濡쒕뱶">搜?/button>
      </div>
    </div>
    ${pageBody}
    <div style="margin-top:10px;padding:8px 10px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;font-size:10px;color:var(--text-4);display:flex;align-items:center;gap:6px">
      <span style="background:#FFD93D;color:#1A1D23;font-weight:700;font-size:9px;padding:1px 4px;border-radius:2px">HIGHLIGHT</span>
      <span>?몃????쒖떆??AI媛 ?듬? ?앹꽦??吏곸젒 ?몄슜???먮Ц 遺遺꾩엯?덈떎.</span>
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

// Patch scope toggle: "???뚯씪" mode ??switch to my files tab
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

// Resize handle for right panel ??improved UX
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
        <div class="ah"><span class="an">VAATZ AI</span><span class="at0">RAG 쨌 3媛?臾몄꽌 ?몄슜</span><span class="at0" style="background:var(--g-dim);color:var(--g)">???좊ː??87%</span>${webOn?'<span class="at0" style="background:var(--accent-dim);color:var(--accent)">?뙋 ?몃?吏??/span>':''}</div>
        <div class="rag-pipeline">
          <div class="rag-hd">
            <div class="rag-hd-l"><div class="rag-hd-ic">?쭬</div>寃??諛??듬? ?앹꽦 ?꾨줈?몄뒪</div>
            <div class="rag-conf"><div class="rag-conf-dot"></div>CONFIDENCE <span class="rag-conf-v">87%</span></div>
          </div>
          <div class="rag-steps">
            <div class="rag-step"><div class="rag-step-ic">??/div><div class="rag-step-tx">吏덉쓽 ?꾨쿋????<b>?ㅼ썙??異붿텧</b></div><div class="rag-step-mt">128-dim 쨌 42ms</div></div>
            <div class="rag-step"><div class="rag-step-ic">??/div><div class="rag-step-tx">沅뚰븳 ?꾪꽣留???<b>梨낆엫留ㅻ땲? ?깃툒</b></div><div class="rag-step-mt">3 levels</div></div>
            <div class="rag-step"><div class="rag-step-ic">??/div><div class="rag-step-tx">Vector 寃????<b>12媛?泥?겕</b> 諛쒓껄 ???곸쐞 3媛??좊퀎</div><div class="rag-step-mt">cosine ??0.71</div></div>
          </div>
        </div>
        <div class="ai-tx">
          <p>?대떦 吏덉쓽??????듬??낅땲?? ?대뒗 ?꾨줈?좏????쒕??덉씠?섏씠硫? ?ㅼ젣 RAG ?붿쭊???곌껐?섎㈃ 援щℓ?낅Т洹쒖젙, ?낅Т?쒖?, VAATZ 留ㅻ돱???깆쓣 湲곕컲?쇰줈 ?뺥솗??洹쇨굅? ?④퍡 ?듬????앹꽦?⑸땲??</p>
          <p>?ㅼ젣 援ы쁽 ?쒖뿉??愿??臾몄꽌??異쒖쿂媛 <span class="cr" onclick="openSourceFromCitation(1)">1</span><span class="cr" onclick="openSourceFromCitation(2)">2</span> ?뺥깭濡??쒖떆?섎ŉ, 媛??몄슜???대┃?섎㈃ ?곗륫 ?⑤꼸???먮Ц ?섏씠吏媛 ?몃????섏씠?쇱씠?몄? ?④퍡 ?쒖떆?⑸땲??</p>
        </div>
        <div class="sr2"><div class="sr2-h" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'"><div class="sr2-hl"><div class="sr2-hl-ic">?뱨</div>李몄“ 臾몄꽌</div><div class="sr2-hr"><span class="sr2-cnt">3</span><span>쨌 ?대┃?섏뿬 ?먮Ц ?뺤씤</span></div></div>
        <div class="sr2-list">
          <div class="sr2-c" onclick="openSourceFromCitation(1)"><div class="sr2-c-n">1</div><div class="sr2-c-i"><div class="sr2-c-nm">援щℓ?낅Т洹쒖젙 ??3議?<span class="sr2-c-tp t-pdf">PDF</span></div><div class="sr2-c-mt"><span>?????낆같 쨌 p.34~38</span><span class="sr2-c-rel">愿?⑤룄 0.88</span></div></div><span class="sr2-c-go">??/span></div>
          <div class="sr2-c" onclick="openSourceFromCitation(2)"><div class="sr2-c-n">2</div><div class="sr2-c-i"><div class="sr2-c-nm">?낆같?댁쁺 ?낅Т?쒖? STD-PUR-012 <span class="sr2-c-tp t-doc">DOCX</span></div><div class="sr2-c-mt"><span>3.2 ??쨌 p.12~18</span><span class="sr2-c-rel">愿?⑤룄 0.82</span></div></div><span class="sr2-c-go">??/span></div>
        </div></div>
        <div class="ai-ac"><button class="ai-a" onclick="this.classList.toggle('active')">?몟 ?꾩???/button><button class="ai-a" onclick="this.classList.toggle('active')">?몠 遺?뺥솗</button><button class="ai-a" onclick="copyAnswer(this)">?뱥 蹂듭궗</button><button class="ai-a">?봽 ?ъ깮??/button></div>
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


<!-- ?먥븧??COMMUNITY ?먥븧??-->
<div class="comm-ov" id="commOv" onclick="if(event.target===this)closeComm()">
<div class="comm-box">
<div class="comm-hd"><h2 style="display:flex;align-items:center;gap:8px"><span style="background:var(--accent-g);-webkit-background-clip:text;-webkit-text-fill-color:transparent">?뮕 援щℓ 吏??而ㅻ??덊떚</span></h2><button class="adm-x" onclick="closeComm()">??/button></div>
<div class="comm-tabs" style="background:var(--bg-2)">
<button class="comm-tab on" onclick="commTab(this,'ct-qa')">?뮠 Q&A</button>
<button class="comm-tab" onclick="commTab(this,'ct-hof')">?룇 紐낆삁???꾨떦</button>
<button class="comm-tab" onclick="commTab(this,'ct-lv')">?뱤 ???덈꺼</button>
<button class="comm-tab" onclick="commTab(this,'ct-char')">?뫀 ??罹먮┃??/button>
<button class="comm-tab" onclick="commTab(this,'ct-shop')">?썟 ?곸젏</button>
</div>
<div class="comm-body">

<!-- Q&A -->
<div id="ct-qa">
<div class="comm-toolbar">
<div class="comm-search"><span style="font-size:11px;color:var(--text-4)">?뵇</span><input placeholder="吏덈Ц 寃??.." type="text"></div>
<div style="display:flex;align-items:center;gap:8px">
<div class="comm-nick-display">?됰꽕?? <strong id="commNickDisplay">?꾨줈?먯뼱?덉뼱濡?/strong></div>
<button class="comm-ask" onclick="openQuestionWrite()">?륅툘 吏덈Ц?섍린</button>
</div>
</div>
<div class="qa-list" id="qaList">
<div class="qa-card adopted" onclick="showQADetail(1)">
<div class="qa-top"><div class="qa-votes"><button class="qa-v-btn on" onclick="event.stopPropagation();voteQ(this)">??/button><span class="qa-v-n">47</span><button class="qa-v-btn" onclick="event.stopPropagation()">??/button></div>
<div class="qa-info"><div class="qa-title"><span class="qa-tag adopted">??梨꾪깮</span><span class="qa-tag ai-db">?쭬 AI DB</span>?꾨젰?곸엯李곗뿉??1?뚯감 ?좎같 ??泥섎━ ?덉감媛 沅곴툑?⑸땲??/div>
<div class="qa-preview">援щℓ?낅Т洹쒖젙 ??3議?4??뿉 ?곕Ⅴ硫?1?뚯감 ?좎같 ??李몄뿬 ?낆껜 ?뺣? ?먮뒗 ?섏쓽怨꾩빟 ?꾪솚??媛?ν빀?덈떎. ?ㅻТ?곸쑝濡쒕뒗 援щℓ?꾩썝???ъ쟾 ?뱀씤??諛쏄퀬...</div>
<div class="qa-meta"><span class="qa-cat">?낆같</span><span style="color:var(--g)">?뮠 8</span><div class="qa-author"><div class="qa-char-av"><svg viewBox="0 0 80 110" fill="none"><circle cx="40" cy="25" r="14" fill="#FFD8B1"/><circle cx="34" cy="23" r="2" fill="#333"/><circle cx="46" cy="23" r="2" fill="#333"/><path d="M35 29 Q40 33 45 29" stroke="#E8967A" stroke-width="1.5" fill="none" stroke-linecap="round"/><ellipse cx="40" cy="18" rx="18" ry="16" fill="#8B4513"/><path d="M24 42 L22 80 H58 L56 42 Q40 38 24 42Z" fill="#4EAD7B"/></svg><span class="mini-acc mini-hat">?몣</span></div><span>?꾨줈?먯뼱留덉뒪??/span><span class="lv lv-4">Lv.4</span></div><span>3????/span></div>
</div></div></div>

<div class="qa-card" onclick="showQADetail(2)">
<div class="qa-top"><div class="qa-votes"><button class="qa-v-btn" onclick="event.stopPropagation();voteQ(this)">??/button><span class="qa-v-n">23</span><button class="qa-v-btn" onclick="event.stopPropagation()">??/button></div>
<div class="qa-info"><div class="qa-title"><span class="qa-tag new0">NEW</span>5?ㅽ? 4???깃툒 ?밴툒 ???꾩옣 ?ъ궗 ??ぉ??蹂寃쎈릺?덈굹??</div>
<div class="qa-preview">25??1?붾????좉퇋 ?됯? 湲곗????곸슜?섏뼱 IATF 16949???꾩닔 ??ぉ?쇰줈 異붽??섏뿀?듬땲??..</div>
<div class="qa-meta"><span class="qa-cat">5?ㅽ?</span><span style="color:var(--g)">?뮠 5</span><div class="qa-author"><div class="qa-char-av"><svg viewBox="0 0 80 110" fill="none"><circle cx="40" cy="25" r="14" fill="#FFD8B1"/><circle cx="34" cy="23" r="2" fill="#333"/><circle cx="46" cy="23" r="2" fill="#333"/><path d="M35 29 Q40 33 45 29" stroke="#E8967A" stroke-width="1.5" fill="none" stroke-linecap="round"/><ellipse cx="40" cy="18" rx="18" ry="16" fill="#2D3748"/><path d="M24 42 L22 80 H58 L56 42 Q40 38 24 42Z" fill="#4B8EF0"/></svg><span class="mini-acc mini-hat">?럳</span></div><span>?덉쭏吏?댁씠</span><span class="lv lv-3">Lv.3</span></div><span>1????/span></div>
</div></div></div>

<div class="qa-card" onclick="showQADetail(3)">
<div class="qa-top"><div class="qa-votes"><button class="qa-v-btn" onclick="event.stopPropagation();voteQ(this)">??/button><span class="qa-v-n">15</span><button class="qa-v-btn" onclick="event.stopPropagation()">??/button></div>
<div class="qa-info"><div class="qa-title">VAATZ?먯꽌 ?댁쇅 諛쒖＜ ???섏쑉 ?먮룞 ?곸슜 諛⑸쾿</div>
<div class="qa-preview">VAATZ 湲濡쒕쾶 援щℓ 紐⑤뱢?먯꽌 ?섏쑉? 留ㅼ씪 09??湲곗??쇰줈 ?먮룞 媛깆떊?⑸땲??..</div>
<div class="qa-meta"><span class="qa-cat">VAATZ</span><span style="color:var(--g)">?뮠 3</span><div class="qa-author"><div class="qa-char-av"><svg viewBox="0 0 80 110" fill="none"><circle cx="40" cy="25" r="14" fill="#FFD8B1"/><circle cx="34" cy="23" r="2" fill="#333"/><circle cx="46" cy="23" r="2" fill="#333"/><path d="M35 29 Q40 33 45 29" stroke="#E8967A" stroke-width="1.5" fill="none" stroke-linecap="round"/><ellipse cx="40" cy="18" rx="18" ry="16" fill="#1A365D"/><path d="M24 42 L22 80 H58 L56 42 Q40 38 24 42Z" fill="#8678BF"/></svg><span class="mini-acc mini-hat">?빒截?/span></div><span>VAATZ?ъ씤</span><span class="lv lv-2">Lv.2</span></div><span>?ㅻ뒛</span></div>
</div></div></div>

<div class="qa-card" onclick="showQADetail(4)">
<div class="qa-top"><div class="qa-votes"><button class="qa-v-btn" onclick="event.stopPropagation();voteQ(this)">??/button><span class="qa-v-n">8</span><button class="qa-v-btn" onclick="event.stopPropagation()">??/button></div>
<div class="qa-info"><div class="qa-title"><span class="qa-tag hot">HOT</span>?섏쓽怨꾩빟 湲닿툒 ?ъ쑀???뱀씤 湲곗????대뼸寃??섎굹??</div>
<div class="qa-preview">湲닿툒 ?섏쓽怨꾩빟? 怨꾩빟湲덉븸 5泥쒕쭔???댄븯????????꾧껐, 5泥쒕쭔??珥덇낵 ??援щℓ?꾩썝???뱀씤???꾩슂?⑸땲??..</div>
<div class="qa-meta"><span class="qa-cat">怨꾩빟</span><span style="color:var(--g)">?뮠 2</span><div class="qa-author"><div class="qa-char-av"><svg viewBox="0 0 80 110" fill="none"><circle cx="40" cy="25" r="14" fill="#FFD8B1"/><circle cx="34" cy="23" r="2" fill="#333"/><circle cx="46" cy="23" r="2" fill="#333"/><path d="M35 29 Q40 33 45 29" stroke="#E8967A" stroke-width="1.5" fill="none" stroke-linecap="round"/><ellipse cx="40" cy="18" rx="18" ry="16" fill="#553C2E"/><path d="M24 42 L22 80 H58 L56 42 Q40 38 24 42Z" fill="#52A0A8"/></svg></div><span>怨꾩빟珥덈낫</span><span class="lv">Lv.1</span></div><span>?ㅻ뒛</span></div>
</div></div></div>
</div>
<div style="text-align:center;padding:14px;font-size:10px;color:var(--text-4)">異붿쿇 10???댁긽 + 梨꾪깮???듬? ??愿由ъ옄 寃利???AI ?숈뒿 DB??諛섏쁺 쨌 ?묒꽦?먯뿉寃?100pt 蹂대꼫??吏湲?/div>

<!-- Q&A Detail View (hidden by default) -->
<div id="qaDetailView" style="display:none">
<button style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--accent);cursor:pointer;margin-bottom:14px;padding:4px 0;border:none;background:none;font-family:inherit" onclick="backToQAList()">??紐⑸줉?쇰줈 ?뚯븘媛湲?/button>

<div id="qaDetailContent">
<!-- Filled dynamically -->
</div>

<!-- Write Answer -->
<div style="margin-top:16px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;padding:16px">
<div style="font-size:12px;font-weight:600;margin-bottom:8px;display:flex;align-items:center;gap:6px">?륅툘 ?듬? ?묒꽦 <span style="font-size:10px;color:var(--text-3);font-weight:400">쨌 梨꾪깮 ??+30pt, AI ?숈뒿 諛섏쁺 ??+100pt</span></div>
<textarea id="answerTextarea" style="width:100%;background:var(--bg-3);border:1px solid var(--border-1);border-radius:8px;padding:12px;color:var(--text-1);font-size:13px;font-family:inherit;resize:vertical;outline:none;min-height:80px;line-height:1.7" placeholder="?듬????묒꽦??二쇱꽭?? 愿??洹쒖젙?대굹 洹쇨굅瑜??④퍡 ?곸뼱二쇱떆硫?梨꾪깮 ?뺣쪧???믪븘吏묐땲??"></textarea>
<div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
<button class="btn btn-p" onclick="submitAnswer()">?듬? ?깅줉</button>
</div>
</div>
</div>
</div>

<!-- Hall of Fame -->
<div id="ct-hof" style="display:none">
<div class="hof-month"><span style="font-size:13px;font-weight:600">2026??2??/span><select><option>2026??2??/option><option>2026??1??/option><option>2025??12??/option></select></div>
<div class="hof-podium">
<div class="hof-p silver"><div class="hof-rank">2nd</div><div class="hof-av">??/div><div class="hof-name">?덉쭏吏?댁씠</div><div class="hof-sub">?섏꽍諛붿씠??/div><div class="hof-score">2,840</div><div class="hof-label">?ъ씤??/div></div>
<div class="hof-p gold"><div class="hof-rank">?쪍</div><div class="hof-av" style="color:var(--accent)">P</div><div class="hof-name">?꾨줈?먯뼱留덉뒪??/div><div class="hof-sub">CPO</div><div class="hof-score">3,520</div><div class="hof-label">?ъ씤??/div></div>
<div class="hof-p bronze"><div class="hof-rank">3rd</div><div class="hof-av">V</div><div class="hof-name">VAATZ?ъ씤</div><div class="hof-sub">援щℓPro</div><div class="hof-score">1,960</div><div class="hof-label">?ъ씤??/div></div>
</div>
<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">?꾩껜 ??궧</div>
<div class="lb-row" style="background:var(--bg-2)"><div class="lb-rank" style="color:var(--a)">1</div><div class="lb-av">P</div><div class="lb-info"><div class="lb-name">?꾨줈?먯뼱留덉뒪??<span class="lv lv-5">Lv.5</span></div><div class="lb-sub2">梨꾪깮 24??쨌 AI 諛섏쁺 5??/div></div><div class="lb-pts">3,520</div></div>
<div class="lb-row"><div class="lb-rank">2</div><div class="lb-av">??/div><div class="lb-info"><div class="lb-name">?덉쭏吏?댁씠 <span class="lv lv-4">Lv.4</span></div><div class="lb-sub2">梨꾪깮 18??쨌 AI 諛섏쁺 3??/div></div><div class="lb-pts">2,840</div></div>
<div class="lb-row"><div class="lb-rank">3</div><div class="lb-av">V</div><div class="lb-info"><div class="lb-name">VAATZ?ъ씤 <span class="lv lv-3">Lv.3</span></div><div class="lb-sub2">梨꾪깮 12??/div></div><div class="lb-pts">1,960</div></div>
<div class="lb-row"><div class="lb-rank">4</div><div class="lb-av">??/div><div class="lb-info"><div class="lb-name">?꾨줈?먯뼱?덉뼱濡?<span class="lv lv-3">Lv.3</span></div><div class="lb-sub2">梨꾪깮 10??쨌 AI 諛섏쁺 3??/div></div><div class="lb-pts">1,720</div></div>
<div class="lb-row"><div class="lb-rank">5</div><div class="lb-av">諛?/div><div class="lb-info"><div class="lb-name">諛섎룄泥댁궗?κ씔 <span class="lv lv-2">Lv.2</span></div><div class="lb-sub2">梨꾪깮 7??/div></div><div class="lb-pts">1,280</div></div>
<div class="lb-row"><div class="lb-rank">6</div><div class="lb-av">??/div><div class="lb-info"><div class="lb-name">?ㅼ떆留덉씠?ㅽ꽣 <span class="lv lv-2">Lv.2</span></div><div class="lb-sub2">梨꾪깮 5??/div></div><div class="lb-pts">980</div></div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:8px;padding:10px 14px;margin-top:14px;font-size:10px;color:var(--text-3);line-height:1.6">
<b style="color:var(--text-1)">?좎젙 湲곗?</b>: 梨꾪깮 횞50pt + 異붿쿇 횞10pt + AI ?숈뒿 諛섏쁺 횞100pt 쨌 留ㅼ썡 ?먮룞 吏묎퀎
</div>
</div>

<!-- My Level -->
<div id="ct-lv" style="display:none">
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:8px;padding:14px">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px"><div style="font-size:13px;font-weight:600;display:flex;align-items:center;gap:6px"><span class="lv lv-3">援щℓPro</span> ?꾨줈?먯뼱?덉뼱濡?/div><span style="font-size:11px;color:var(--text-3)">?ㅼ쓬 吏곴툒: Lv.4 怨쇱옣源뚯? 280pt</span></div>
<div style="height:8px;background:var(--bg-4);border-radius:4px;overflow:hidden"><div style="height:100%;width:72%;border-radius:4px;background:var(--accent-g);transition:width .5s"></div></div>
<div style="font-size:10px;color:var(--text-4);margin-top:5px">1,720 / 2,000pt</div>
</div>
<div class="char-stat-row" style="margin-top:12px">
<div class="char-stat"><div class="char-stat-v">34</div><div class="char-stat-l">?묒꽦 ?듬?</div></div>
<div class="char-stat"><div class="char-stat-v" style="color:var(--accent)">10</div><div class="char-stat-l">梨꾪깮</div></div>
<div class="char-stat"><div class="char-stat-v">127</div><div class="char-stat-l">諛쏆? 異붿쿇</div></div>
</div>
<div style="font-size:11px;font-weight:600;margin:12px 0 8px">?덈꺼 泥닿퀎</div>
<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:4px">
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:8px;text-align:center"><div style="font-size:16px">?뱥</div><div style="font-size:8px;font-weight:600;margin-top:2px">Lv.1 ?ъ썝</div><div style="font-size:7px;color:var(--text-4)">0pt</div></div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:8px;text-align:center"><div style="font-size:16px">?뵇</div><div style="font-size:8px;font-weight:600;margin-top:2px">Lv.2 二쇱엫</div><div style="font-size:7px;color:var(--text-4)">500pt</div></div>
<div style="background:var(--accent-dim);border:1px solid var(--accent-bd);border-radius:6px;padding:8px;text-align:center"><div style="font-size:16px">?뱤</div><div style="font-size:8px;font-weight:600;margin-top:2px;color:var(--accent)">Lv.3 ?由???/div><div style="font-size:7px;color:var(--text-4)">1,000pt</div></div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:8px;text-align:center"><div style="font-size:16px">?뮳</div><div style="font-size:8px;font-weight:600;margin-top:2px">Lv.4 怨쇱옣</div><div style="font-size:7px;color:var(--text-4)">2,000pt</div></div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:8px;text-align:center"><div style="font-size:16px">?룫</div><div style="font-size:8px;font-weight:600;margin-top:2px">Lv.5 李⑥옣</div><div style="font-size:7px;color:var(--text-4)">3,000pt</div></div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:8px;text-align:center"><div style="font-size:16px">?몦</div><div style="font-size:8px;font-weight:600;margin-top:2px">Lv.6 CPO</div><div style="font-size:7px;color:var(--text-4)">5,000pt</div></div>
</div>
</div>

<!-- Character -->
<div id="ct-char" style="display:none">
<div class="char-wrap">
<div class="char-left">
<div class="char-room" id="charRoom">
<div id="charBg" style="position:absolute;inset:0;opacity:.10;font-size:80px;display:flex;align-items:center;justify-content:center;pointer-events:none">?뙄</div>
<div class="char-body" id="charBody">
<div class="char-emoji" id="charMain">?슅</div>
<div class="char-acc-top" id="accHat">?렔</div>
<div class="char-acc-face" id="accFace"></div>
<div class="char-acc-side" id="accPet"></div>
</div>
<div id="charEffect" style="position:absolute;top:20px;left:30px;z-index:1;font-size:14px;animation:effectFloat 3s ease-in-out infinite;pointer-events:none"></div>
<div class="char-nick" id="charNick" style="position:relative;z-index:2">?꾨줈?먯뼱?덉뼱濡?/div>
<div class="char-lv" style="position:relative;z-index:2">援щℓPro 쨌 1,720pt</div>
</div>
<div style="margin-top:8px;font-size:10px;font-weight:600;color:var(--text-3)">罹먮┃???좏깮</div>
<div style="display:flex;gap:3px;margin-top:4px;flex-wrap:wrap">
<button class="char-sel active" onclick="pickChar(this,'?슅')" title="?꾨? 釉붾（移?>?슅</button>
<button class="char-sel" onclick="pickChar(this,'?룑截?)" title="湲곗븘 ?덉씠??>?룑截?/button>
<button class="char-sel" onclick="pickChar(this,'?뫅?랅윊?)" title="?⑥꽦 諛붿씠??>?뫅?랅윊?/button>
<button class="char-sel" onclick="pickChar(this,'?뫆?랅윊?)" title="?ъ꽦 諛붿씠??>?뫆?랅윊?/button>
<button class="char-sel" onclick="pickChar(this,'?쭛?랅윍?)" title="?붿??덉뼱">?쭛?랅윍?/button>
<button class="char-sel" onclick="pickChar(this,'?뫆?랅윍?)" title="?덉쭏 ?곌뎄??>?뫆?랅윍?/button>
<button class="char-sel" onclick="pickChar(this,'?맶')" title="諛붿툩怨?>?맶</button>
<button class="char-sel" onclick="pickChar(this,'?쫨')" title="?묒긽?ъ옄">?쫨</button>
<button class="char-sel" onclick="pickChar(this,'?쫲')" title="怨꾩빟?ъ슦">?쫲</button>
<button class="char-sel" onclick="pickChar(this,'?맦')" title="?덉쭏?몃옉??>?맦</button>
</div>
</div>
<div class="char-right">
<div class="char-sec">
<div class="char-sec-t">?럲 ???몃깽?좊━</div>
<div class="inv-grid">
<div class="inv-slot equipped" title="湲곕낯 ?뺤옣" onclick="equipItem(this,'?뮳')">?뮳</div>
<div class="inv-slot" title="?좎궗 紐⑥옄" onclick="equipItem(this,'?렔')">?렔</div>
<div class="inv-slot" title="?뚮룄 諛곌꼍" onclick="equipItem(this,'?뙄')">?뙄</div>
<div class="inv-slot empty"></div>
<div class="inv-slot empty"></div>
<div class="inv-slot empty"></div>
<div class="inv-slot empty"></div>
<div class="inv-slot empty"></div>
</div>
</div>
<div class="char-sec">
<div class="char-sec-t">?뱤 ?ъ씤???꾪솴</div>
<div style="display:flex;gap:8px;margin-bottom:12px">
<div style="flex:1;background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:10px;text-align:center"><div style="font-family:Outfit;font-size:20px;font-weight:700;color:var(--accent)">1,720</div><div style="font-size:9px;color:var(--text-4)">珥??곷┰</div></div>
<div style="flex:1;background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:10px;text-align:center"><div style="font-family:Outfit;font-size:20px;font-weight:700;color:var(--g)">520</div><div style="font-size:9px;color:var(--text-4)">?ъ슜 媛??/div></div>
<div style="flex:1;background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px;padding:10px;text-align:center"><div style="font-family:Outfit;font-size:20px;font-weight:700;color:var(--a)">1,200</div><div style="font-size:9px;color:var(--text-4)">?ъ슜??/div></div>
</div>
</div>
<div class="char-sec">
<div class="char-sec-t">?뮥 ?ъ씤???띾뱷 諛⑸쾿</div>
<table style="width:100%;border-collapse:collapse;font-size:11px">
<tr style="border-bottom:1px solid var(--border-1)"><td style="padding:5px 8px;color:var(--text-2)">吏덈Ц ?묒꽦</td><td style="padding:5px 8px;font-weight:600;color:var(--accent);font-family:'JetBrains Mono',monospace;text-align:right">+3pt</td><td style="padding:5px 8px;font-size:9px;color:var(--text-4)">1??5??/td></tr>
<tr style="border-bottom:1px solid var(--border-1)"><td style="padding:5px 8px;color:var(--text-2)">?듬? ?묒꽦</td><td style="padding:5px 8px;font-weight:600;color:var(--accent);font-family:'JetBrains Mono',monospace;text-align:right">+5pt</td><td style="padding:5px 8px;font-size:9px;color:var(--text-4)">1??10??/td></tr>
<tr style="border-bottom:1px solid var(--border-1)"><td style="padding:5px 8px;color:var(--text-2)">異붿쿇 諛쏄린</td><td style="padding:5px 8px;font-weight:600;color:var(--accent);font-family:'JetBrains Mono',monospace;text-align:right">+3pt</td><td style="padding:5px 8px;font-size:9px;color:var(--text-4)">臾댁젣??/td></tr>
<tr style="border-bottom:1px solid var(--border-1)"><td style="padding:5px 8px;color:var(--text-2)"><b>?듬? 梨꾪깮</b></td><td style="padding:5px 8px;font-weight:600;color:var(--g);font-family:'JetBrains Mono',monospace;text-align:right">+30pt</td><td style="padding:5px 8px;font-size:9px;color:var(--text-4)">臾댁젣??/td></tr>
<tr style="border-bottom:1px solid var(--border-1)"><td style="padding:5px 8px;color:var(--text-2)"><b>AI ?숈뒿 諛섏쁺</b></td><td style="padding:5px 8px;font-weight:600;color:var(--a);font-family:'JetBrains Mono',monospace;text-align:right">+100pt</td><td style="padding:5px 8px;font-size:9px;color:var(--text-4)">愿由ъ옄 ?뱀씤</td></tr>
<tr><td style="padding:5px 8px;color:var(--text-2)">?곗씠???낅줈???뱀씤</td><td style="padding:5px 8px;font-weight:600;color:var(--accent);font-family:'JetBrains Mono',monospace;text-align:right">+20pt</td><td style="padding:5px 8px;font-size:9px;color:var(--text-4)">臾댁젣??/td></tr>
</table>
<div style="margin-top:8px;font-size:9px;color:var(--text-4);line-height:1.5;padding:6px 8px;background:var(--bg-2);border-radius:4px">?좑툘 ?쇱씪 ?띾뱷 ?곹븳: 理쒕? 80pt/??(AI ?숈뒿 諛섏쁺 蹂대꼫???쒖쇅). ?대럭吏?諛⑹?瑜??꾪빐 ?숈씪 吏덈Ц 諛섎났 ???ъ씤?멸? 吏湲됰릺吏 ?딆뒿?덈떎.</div>
</div>
</div>
</div>
</div>

<!-- Shop ??Expanded with Categories -->
<div id="ct-shop" style="display:none">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px"><div style="font-size:13px;font-weight:600">?썟 罹먮┃???곸젏</div><div style="font-size:12px;font-weight:600;color:var(--accent);font-family:Outfit">?뮥 520pt 蹂댁쑀</div></div>
<div style="font-size:10px;color:var(--text-3);margin-bottom:14px;line-height:1.5;background:var(--bg-2);padding:8px 12px;border-radius:6px;border:1px solid var(--border-1)">?뮕 ?꾩씠?쒖쓣 議고빀???섎쭔??罹먮┃?곕? 袁몃ŉ蹂댁꽭?? ?덈꺼???믪쓣?섎줉 ?꾨━誘몄뾼 ?꾩씠?쒖쓣 援щℓ?????덉뒿?덈떎.</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">?슅 留덉씠移?(?꾨줈??諭껋?)</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item owned"><div class="shop-ic">?쉶</div><div class="shop-nm">?듦렐踰꾩뒪</div><div class="shop-pr">??湲곕낯</div></div>
<div class="shop-item" onclick="buyItem(this,'?쎎','?ㅼ퓼??,80)"><div class="shop-ic">?쎎</div><div class="shop-nm">?ㅼ퓼??/div><div class="shop-pr">80pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?슅','罹먯뒪??,200)"><div class="shop-ic">?슅</div><div class="shop-nm">罹먯뒪??/div><div class="shop-pr">200pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?슇','?ъ떬',400)"><div class="shop-ic">?슇</div><div class="shop-nm">?ъ떬</div><div class="shop-pr">400pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?룑截?,'?꾩씠?ㅻ땳6',700)"><div class="shop-ic">?룑截?/div><div class="shop-nm">?꾩씠?ㅻ땳 6</div><div class="shop-pr">700pt</div><div class="shop-lv-req">Lv.3+</div></div>
<div class="shop-item" onclick="buyItem(this,'?슆','?곕━?몄씠??,1200)"><div class="shop-ic">?슆</div><div class="shop-nm">?곕━?몄씠??/div><div class="shop-pr">1,200pt</div><div class="shop-lv-req">Lv.4+</div></div>
<div class="shop-item" onclick="buyItem(this,'?뢾','?쒕꽕?쒖뒪G80',2000)"><div class="shop-ic">?뢾</div><div class="shop-nm">G80</div><div class="shop-pr">2,000pt</div><div class="shop-lv-req">Lv.5+</div></div>
<div class="shop-item" onclick="buyItem(this,'?몣','GV90',3500)"><div class="shop-ic">?몣</div><div class="shop-nm">GV90</div><div class="shop-pr">3,500pt</div><div class="shop-lv-req">CPO</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">?몦 ?ㅽ뵾??猷?/div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item owned"><div class="shop-ic">?뮳</div><div class="shop-nm">湲곕낯 ?뺤옣</div><div class="shop-pr">??湲곕낯</div></div>
<div class="shop-item" onclick="buyItem(this,'?몧','鍮꾩쫰罹먯＜??,100)"><div class="shop-ic">?몧</div><div class="shop-nm">鍮꾩쫰罹먯＜??/div><div class="shop-pr">100pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?㎘','?몃젋移섏퐫??,300)"><div class="shop-ic">?㎘</div><div class="shop-nm">?몃젋移섏퐫??/div><div class="shop-pr">300pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?┷','?꾩옣議곕겮',200)"><div class="shop-ic">?┷</div><div class="shop-nm">?꾩옣 議곕겮</div><div class="shop-pr">200pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?럷截?,'?꾩썝?뺤옣',1500)"><div class="shop-ic">?럷截?/div><div class="shop-nm">?꾩썝 ?뺤옣</div><div class="shop-pr">1,500pt</div><div class="shop-lv-req">Lv.5+</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">?렔 紐⑥옄 쨌 ?ㅼ뼱</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item owned"><div class="shop-ic">?렔</div><div class="shop-nm">?좎궗 紐⑥옄</div><div class="shop-pr">??蹂댁쑀</div></div>
<div class="shop-item" onclick="buyItem(this,'?묕툘','?덉쟾紐?,120)"><div class="shop-ic">?묕툘</div><div class="shop-nm">?덉쟾紐?/div><div class="shop-pr">120pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?럳','MBA?숈궗紐?,250)"><div class="shop-ic">?럳</div><div class="shop-nm">MBA ?숈궗紐?/div><div class="shop-pr">250pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?몣','?뺢?',800)"><div class="shop-ic">?몣</div><div class="shop-nm">?뺢?</div><div class="shop-pr">800pt</div><div class="shop-lv-req">Lv.4+</div></div>
<div class="shop-item" onclick="buyItem(this,'?룇','?몃줈?쇨?',1500)"><div class="shop-ic">?룇</div><div class="shop-nm">?몃줈??愿</div><div class="shop-pr">1,500pt</div><div class="shop-lv-req">Lv.5+</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">?몥 ?곗뒪???낆꽭?쒕━</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item" onclick="buyItem(this,'?빒截?,'?좉??쇱뒪',150)"><div class="shop-ic">?빒截?/div><div class="shop-nm">?좉??쇱뒪</div><div class="shop-pr">150pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?렒','?먯뼱??,200)"><div class="shop-ic">?렒</div><div class="shop-nm">?먯뼱?잙㎘??/div><div class="shop-pr">200pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?벑','Z?뚮┰',300)"><div class="shop-ic">?벑</div><div class="shop-nm">Z?뚮┰</div><div class="shop-pr">300pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?뮲','?명듃遺?,500)"><div class="shop-ic">?뮲</div><div class="shop-nm">?명듃遺?/div><div class="shop-pr">500pt</div><div class="shop-lv-req">Lv.3+</div></div>
<div class="shop-item" onclick="buyItem(this,'?룎截?,'怨⑦봽梨?,1000)"><div class="shop-ic">?룎截?/div><div class="shop-nm">怨⑦봽梨?/div><div class="shop-pr">1,000pt</div><div class="shop-lv-req">Lv.4+</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">?뙂 諛곌꼍</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item owned"><div class="shop-ic">?룫</div><div class="shop-nm">?ㅽ뵾??/div><div class="shop-pr">??湲곕낯</div></div>
<div class="shop-item" onclick="buyItem(this,'?룺','?몄궛怨듭옣',200)"><div class="shop-ic">?룺</div><div class="shop-nm">?몄궛怨듭옣</div><div class="shop-pr">200pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?뙵','踰싰퐙湲?,250)"><div class="shop-ic">?뙵</div><div class="shop-nm">踰싰퐙湲?/div><div class="shop-pr">250pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?룘截?,'?ㅼ븙??,350)"><div class="shop-ic">?룘截?/div><div class="shop-nm">?ㅼ븙??/div><div class="shop-pr">350pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?뙆','?섎Ⅴ遺瑜댄겕留?,800)"><div class="shop-ic">?뙆</div><div class="shop-nm">?섎Ⅴ遺瑜댄겕留?/div><div class="shop-pr">800pt</div><div class="shop-lv-req">Lv.4+</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">???댄럺??/div>
<div class="shop-grid">
<div class="shop-item" onclick="buyItem(this,'狩?,'蹂꾨컲吏?,100)"><div class="shop-ic">狩?/div><div class="shop-nm">蹂?諛섏쭩</div><div class="shop-pr">100pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?뮟','?좎꽦',250)"><div class="shop-ic">?뮟</div><div class="shop-nm">?좎꽦</div><div class="shop-pr">250pt</div></div>
<div class="shop-item" onclick="buyItem(this,'?뵦','遺덇퐙?ㅻ씪',400)"><div class="shop-ic">?뵦</div><div class="shop-nm">遺덇퐙 ?ㅻ씪</div><div class="shop-pr">400pt</div><div class="shop-lv-req">Lv.3+</div></div>
<div class="shop-item" onclick="buyItem(this,'?뭿','?ㅼ씠??,600)"><div class="shop-ic">?뭿</div><div class="shop-nm">?ㅼ씠??/div><div class="shop-pr">600pt</div><div class="shop-lv-req">Lv.4+</div></div>
<div class="shop-item" onclick="buyItem(this,'?뙚','?꾧킅',1000)"><div class="shop-ic">?뙚</div><div class="shop-nm">?꾧킅</div><div class="shop-pr">1,000pt</div><div class="shop-lv-req">Lv.5+</div></div>
</div>
</div>
</div>
</div></div>

<!-- Community Side Buttons -->
<div class="comm-side">
<div class="comm-side-btn" onclick="openComm('qa')" title="吏??Q&A"><span>?뮕</span><span>Q&A</span></div>
<div class="comm-side-btn" onclick="openComm('hof')" title="紐낆삁???꾨떦"><span>?룇</span><span>??궧</span></div>
<div class="comm-side-btn" onclick="openComm('char')" title="??罹먮┃??><span>?㎏</span><span>罹먮┃??/span></div>
</div>

<!-- Floating Character (draggable) -->
<div class="float-char" id="floatChar">
<div class="float-char-body" id="floatCharBody">?슅</div>
<span class="float-char-lv">援щℓPro</span>
<div class="float-char-bubble" id="charBubble">?ㅻ뒛???붿씠?? ?뮞<br>援щℓ 吏???섎늻??媛??</div>
<div class="float-char-menu" id="charMenu">
<button onclick="openComm('char');closeCharMenu()">?㎏ 罹먮┃??袁몃?湲?/button>
<button onclick="openComm('qa');closeCharMenu()">?뮕 Q&A 李몄뿬?섍린</button>
<button onclick="openComm('hof');closeCharMenu()">?룇 紐낆삁???꾨떦</button>
<button onclick="editBubbleMsg()">?뮠 留먰뭾??蹂寃?/button>
<button onclick="hideFloatChar()" style="color:var(--text-4);font-size:10px">?④린湲?/button>
</div>
</div>
<div class="float-show-btn" id="floatShow" onclick="showFloatChar()">?슅</div>


<!-- v23: large operational modals + companion hub -->
<div class="large-modal" id="teamFolderModal" onclick="if(event.target===this)closeTeamFolderModal()">
  <div class="large-box">
    <div class="large-hd">
      <div><div class="large-title" id="teamFolderTitle">?뱚 ?蹂??대뜑</div><div class="large-sub" id="teamFolderSub">? 臾몄꽌 ?꾩껜 由ъ뒪?몃? ?ш쾶 ?뺤씤?섍퀬 ?깅줉 ?붿껌?⑦븷 ???덉뒿?덈떎.</div></div>
      <button class="large-close" onclick="closeTeamFolderModal()">??/button>
    </div>
    <div class="large-toolbar">
      <label style="font-size:11px;color:var(--text-4);display:flex;align-items:center;gap:6px"><input type="checkbox" class="check-lg" id="teamSelectAll" onchange="toggleTeamDocAll(this)"> ?꾩껜 ?좏깮</label>
      <div class="large-search"><span>?뵇</span><input id="teamDocSearch" placeholder="臾몄꽌紐? ?대떦?? 紐⑤뱶, 蹂댁븞?깃툒 寃?? oninput="renderTeamDocRows()"></div>
      <select class="frm-i frm-sel" id="teamDocStatusFilter" style="width:130px" onchange="renderTeamDocRows()"><option value="">?꾩껜 ?곹깭</option><option>?묒꽦쨌蹂댁셿以?/option><option>?깅줉 ?붿껌??/option><option>蹂댁셿 ?붿껌</option><option>AI 寃??諛섏쁺?꾨즺</option></select>
      <button class="v23-btn primary" onclick="submitSelectedTeamDocs()">?? ?좏깮 ?깅줉 ?붿껌??/button>
    </div>
    <div class="large-body"><table class="large-table"><thead><tr><th></th><th>臾몄꽌紐?/th><th>?좏삎</th><th>蹂댁븞</th><th>AI 紐⑤뱶</th><th>踰꾩쟾</th><th>?대떦??/th><th>?곹깭</th><th style="text-align:right">?묒뾽</th></tr></thead><tbody id="teamDocRows"></tbody></table></div>
  </div>
</div>

<div class="large-modal" id="historyModal" onclick="if(event.target===this)closeHistoryModal()">
  <div class="large-box" style="width:min(760px,92vw)">
    <div class="large-hd"><div><div class="large-title">?뱶 ?대젰 愿由?/div><div class="large-sub">吏덉쓽, ?낅줈?? ?뱀씤, AI 諛섏쁺 ?대젰???쒓납?먯꽌 ?뺤씤?⑸땲??</div></div><button class="large-close" onclick="closeHistoryModal()">??/button></div>
    <div class="large-toolbar"><div class="large-search"><span>?뵇</span><input placeholder="?대젰 寃??></div><button class="v23-btn">?대낫?닿린</button></div>
    <div class="large-body"><div class="v23-history-list" id="historyList"></div></div>
  </div>
</div>

<div class="companion-hub" id="companionHub">
  <div class="companion-card" id="companionCard">
    <div class="companion-main" onclick="toggleCompanionHub()">
      <div class="buddy-3d" aria-label="VAATZ Buddy"><div class="buddy-hat" id="dockHat">?렔</div><div class="buddy-hair"></div><div class="buddy-face"></div><div class="buddy-eye l"></div><div class="buddy-eye r"></div><div class="buddy-smile"></div><div class="buddy-arm l"></div><div class="buddy-arm r"></div><div class="buddy-body"></div><div class="buddy-wheel l"></div><div class="buddy-wheel r"></div><div class="buddy-badge" id="dockBadge">AI</div></div>
      <div class="companion-text"><div class="companion-name">VAATZ Buddy</div><div class="companion-msg" id="companionMsg">臾몄꽌 ?뱀씤쨌DB ?곌퀎쨌AI 紐⑤뱶瑜?鍮좊Ⅴ寃?愿由ы븯?몄슂.</div></div>
      <div class="companion-toggle">??/div>
    </div>
    <div class="companion-panel">
      <button class="companion-action" onclick="oa();openAdminTab('p-team')">?뱚 ? ?대뜑</button>
      <button class="companion-action" onclick="oa();openAdminTab('p-final')">??理쒖쥌 ?뱀씤</button>
      <button class="companion-action" onclick="oa();openAdminTab('p-datamart')">?뵕 ?곗씠?곕쭏??/button>
      <button class="companion-action" onclick="oa();openAdminTab('p-mode')">?㎛ AI 紐⑤뱶</button>
      <button class="companion-action" onclick="openMypage()">?뫀 留덉씠?섏씠吏</button>
      <button class="companion-action" onclick="openComm('char')">?㎏ 罹먮┃??/button>
    </div>
  </div>
</div>



/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??   v23 COMPLETE POLISH ??Safe overrides + UX rebuild
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??*/
(function(){
  const $ = (sel, root=document)=>root.querySelector(sel);
  const $$ = (sel, root=document)=>Array.from(root.querySelectorAll(sel));
  const esc = (s)=>String(s??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const safeToast = (m,i='??,d=2600)=>{ try{ toast(m,i,d); }catch(e){ console.log(i,m); } };

  const teams = [
    {name:'援щℓ?꾨왂?', icon:'?뱚', owner:'?댁???梨낆엫留ㅻ땲?', docs:142, managing:116, finalReq:8, published:18, health:'?뺤긽'},
    {name:'諛섎룄泥닿뎄留ㅽ?', icon:'?뮶', owner:'理쒖쑀吏?留ㅻ땲?', docs:96, managing:77, finalReq:7, published:12, health:'寃?좎쨷'},
    {name:'援щℓ?덉쭏湲고쉷?', icon:'狩?, owner:'?뺥쁽??梨낆엫留ㅻ땲?', docs:88, managing:70, finalReq:4, published:14, health:'?뺤긽'},
    {name:'PT?쒖뼱遺?덇뎄留ㅽ?', icon:'?숋툘', owner:'?쒕룄??留ㅻ땲?', docs:74, managing:61, finalReq:5, published:8, health:'?뺤긽'},
    {name:'援щℓ??웾媛쒕컻?', icon:'?럳', owner:'?ㅼ꽌??留ㅻ땲?', docs:53, managing:44, finalReq:2, published:7, health:'蹂닿컯?꾩슂'},
    {name:'?ㅼ떆遺?덇뎄留??', icon:'?슆', owner:'諛뺤꽦誘?留ㅻ땲?', docs:64, managing:52, finalReq:3, published:9, health:'?뺤긽'},
    {name:'?섏옣?쒖뒪?쒕??덇컻諛쒗?', icon:'?㎥', owner:'?λ???梨낆엫留ㅻ땲?', docs:59, managing:47, finalReq:3, published:9, health:'?뺤긽'},
    {name:'?쇰컲?먯옱援щℓ?', icon:'?벀', owner:'?댁냼??留ㅻ땲?', docs:112, managing:89, finalReq:9, published:14, health:'寃?좎쨷'},
    {name:'?먭?愿由ы?', icon:'?뮥', owner:'?ㅻ???梨낆엫留ㅻ땲?', docs:48, managing:38, finalReq:6, published:4, health:'蹂댁븞二쇱쓽'}
  ];
  const typeList=['PDF','PPT','DOCX','XLSX','CSV'];
  const secList=['由щ뜑 ?꾩슜','?쇰컲 怨듦컻','吏???ъ슜??];
  const modeList=['?듯빀紐⑤뱶','?앹궛?먯옱 紐⑤뱶','?쇰컲?먯옱 紐⑤뱶','?먭?紐⑤뱶'];
  const statusList=['?묒꽦쨌蹂댁셿以?,'?깅줉 ?붿껌??,'蹂댁셿 ?붿껌','AI 寃??諛섏쁺?꾨즺'];
  const docNames=['?낆같?댁쁺 ?낅Т?쒖?','?섏쓽怨꾩빟 ?댁쁺吏移?,'?묐젰???덉쭏 5?ㅽ? 湲곗?','?꾨룞??遺???④? 踰ㅼ튂留덊겕','VAATZ 諛쒖＜ ?앹꽦 留ㅻ돱??,'?댁쇅踰뺤씤 援щℓ ?뱀씤 ?꾨줈?몄뒪','議곕떖泥?臾쇳뭹援щℓ怨꾩빟 ?뱀닔議곌굔','諛섎룄泥??섏텧洹쒖젣 援??蹂??꾪솴','?먭? ?곗젙 湲곗???,'?쇰컲?먯옱 MRO 援щℓ 媛?대뱶','?⑷린 由ъ뒪?????留ㅻ돱??,'寃?섑솗???낅Т?쒖?','?낆껜 ?됯? ?곗씠?곗뀑','援щℓ?⑹뼱 ?쒖??뺤쓽吏?,'怨꾩빟愿由?洹쒖젙'];
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
        let status='?묒꽦쨌蹂댁셿以?;
        if(i < t.finalReq) status='?깅줉 ?붿껌??;
        if(i >= t.docs - t.published) status='AI 寃??諛섏쁺?꾨즺';
        if(i===13 && ti%2===1) status='蹂댁셿 ?붿껌';
        rows.push({id:`${ti+1}-${i+1}`, team:t.name, name:`${name}_${String(i+1).padStart(3,'0')}.${type.toLowerCase()}`, type, sec, mode, version:`v${1+(i%4)}.${i%10}`, owner:i%3===0?t.owner:(i%3===1?'? Admin':'????낅줈??), date:`2026.05.${String(1+(i%22)).padStart(2,'0')}`, status, chunks:80+(i*7)%420});
      }
    });
    return rows;
  }
  teamDocs = makeDocs();

  function modeCls(mode){ if(mode.includes('?앹궛'))return'mode-prod'; if(mode.includes('?쇰컲'))return'mode-general'; if(mode.includes('?먭?'))return'mode-cost'; return'mode-all'; }
  function statusPill(status){ const cls=status==='AI 寃??諛섏쁺?꾨즺'?'green':status==='?깅줉 ?붿껌???'blue':status==='蹂댁셿 ?붿껌'?'red':'amber'; return `<span class="v23-pill ${cls}">${status}</span>`; }
  function secPill(sec){ const cls=sec==='由щ뜑 ?꾩슜'?'red':sec==='吏???ъ슜???'violet':'green'; return `<span class="v23-pill ${cls}">${sec}</span>`; }
  function modeBadge(mode){ return `<span class="mode-badge ${modeCls(mode)}">${mode}</span>`; }

  window.toggleTheme=function(){
    const html=document.documentElement; const cur=html.getAttribute('data-theme')||'dark'; const next=cur==='dark'?'light':'dark';
    html.setAttribute('data-theme', next); const tb=$('#themeBtn'); if(tb) tb.textContent=next==='light'?'?截?:'?뙔';
    safeToast(next==='light'?'?쇱씠??紐⑤뱶濡??꾪솚?덉뒿?덈떎.':'?ㅽ겕 紐⑤뱶濡??꾪솚?덉뒿?덈떎.', next==='light'?'?截?:'?뙔',1800);
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
    if(!$('.admin-top-pill')){ const tbR=$('.tb-r'); if(tbR) tbR.insertAdjacentHTML('afterbegin','<button class="tb-b admin-top-pill" onclick="oa();openAdminTab(\'p-req\')">?뵍 ADMIN</button>'); }
    if(!$('.ai-mode-switch')){
      const target=$('.sc-sw',tbL);
      const html=`<div class="ai-mode-switch" id="topModeSwitch"><span class="ai-mode-label">AI Mode</span>${modeList.map((m,i)=>`<button class="ai-mode-btn ${i===0?'on':''}" data-mode="${m}">${m.replace(' 紐⑤뱶','')}</button>`).join('')}</div>`;
      (target||tbL).insertAdjacentHTML(target?'afterend':'beforeend',html);
    }
  }
  document.addEventListener('click',e=>{
    const modeBtn=e.target.closest('.ai-mode-btn');
    if(modeBtn){ $$('.ai-mode-btn').forEach(b=>b.classList.remove('on')); modeBtn.classList.add('on'); safeToast(`${modeBtn.dataset.mode}濡??꾪솚?덉뒿?덈떎. ?묎렐 媛?ν븳 DB留?寃?됰맗?덈떎.`,'?㎛',2200); }
  });

  function buildAdminTabs(){
    const tab=$('.adm-t'); if(!tab) return;
    tab.innerHTML=`
      <button class="atb on" onclick="at(this,'p-req')">?룧 ?댁쁺 ??/button>
      <button class="atb" onclick="at(this,'p-team')">?뱚 ?蹂??대뜑</button>
      <button class="atb" onclick="at(this,'p-final')">??理쒖쥌 ?뱀씤</button>
      <button class="atb" onclick="at(this,'p-list')">?뱴 理쒖쥌 由ъ뒪??/button>
      <button class="atb" onclick="at(this,'p-datamart')">?뵕 ?곗씠?곕쭏??/button>
      <button class="atb" onclick="at(this,'p-mode')">?㎛ AI 紐⑤뱶쨌DB</button>
      <button class="atb" onclick="at(this,'p-usr')">?뫁 ?ъ슜?먃룰텒??/button>
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
      <div class="v23-admin-title"><div><div class="v23-title-main">VAATZ AI 吏???댁쁺 ??/div><div class="v23-title-sub">蹂듭옟???몃━ ???3?④퀎 ?댁쁺 ?먮쫫?쇰줈 愿由ы빀?덈떎. ?蹂??대뜑?먯꽌 愿由ы븯怨? ?깅줉 ?붿껌????System Admin???뱀씤?섎㈃ 理쒖쥌 由ъ뒪?몄? AI 紐⑤뱶??諛섏쁺?⑸땲??</div></div><div class="v23-actions"><button class="v23-btn" onclick="openAdminTab('p-team')">?뱚 ? ?대뜑 蹂닿린</button><button class="v23-btn primary" onclick="openAdminTab('p-final')">??理쒖쥌 ?뱀씤 泥섎━</button></div></div>
      <div class="v23-hero-grid">
        <div class="v23-kpi"><div class="v23-kpi-label">鍮꾩젙??臾몄꽌 珥앸웾</div><div class="v23-kpi-value">${totalDocs}<span>嫄?/span></div><div class="v23-kpi-desc">?蹂?PDF/PPT/DOCX/XLSX 臾몄꽌???꾩껜</div><div class="spark"><i style="height:35%"></i><i style="height:45%"></i><i style="height:62%"></i><i style="height:51%"></i><i style="height:72%"></i><i style="height:85%"></i></div></div>
        <div class="v23-kpi amber"><div class="v23-kpi-label">理쒖쥌 ?뱀씤 ?湲?/div><div class="v23-kpi-value">${totalFinal}<span>嫄?/span></div><div class="v23-kpi-desc">? Admin???깅줉 ?붿껌?⑦븳 臾몄꽌</div><div class="spark"><i style="height:55%"></i><i style="height:72%"></i><i style="height:48%"></i><i style="height:62%"></i><i style="height:81%"></i></div></div>
        <div class="v23-kpi green"><div class="v23-kpi-label">AI AI 寃??諛섏쁺?꾨즺</div><div class="v23-kpi-value">${published}<span>嫄?/span></div><div class="v23-kpi-desc">?꾨쿋???꾨즺 諛?寃???쒖꽦??/div><div class="spark"><i style="height:42%"></i><i style="height:54%"></i><i style="height:68%"></i><i style="height:79%"></i><i style="height:88%"></i></div></div>
        <div class="v23-kpi violet"><div class="v23-kpi-label">?뺥삎 I/F</div><div class="v23-kpi-value">7<span>媛?/span></div><div class="v23-kpi-desc">VAATZ DB, Autopedia, ? 遺臾?諛곗튂</div><div class="spark"><i style="height:60%"></i><i style="height:60%"></i><i style="height:60%"></i><i style="height:40%"></i><i style="height:80%"></i></div></div>
      </div>
      <div class="v23-process">
        <div class="v23-step" onclick="openAdminTab('p-team')"><div class="v23-step-num">1</div><div class="v23-step-title">?蹂??대뜑 愿由?/div><div class="v23-step-desc">媛?? Admin??臾몄꽌瑜??낅줈?쑣룹닔?빧룸쾭?꾧?由ы빀?덈떎. ??ぉ??留롪린 ?뚮Ц??? 移대뱶 ?대┃ ?????앹뾽 由ъ뒪?몃줈 ?뺤씤?⑸땲??</div><div class="v23-step-foot"><span class="v23-pill amber">${teams.length}媛??</span><span>?닿린 ??/span></div></div>
        <div class="v23-arrow">??/div>
        <div class="v23-step" onclick="openAdminTab('p-final')"><div class="v23-step-num">2</div><div class="v23-step-title">System Admin 理쒖쥌 ?뱀씤</div><div class="v23-step-desc">援щℓ?붿??몄텛吏꾪? Admin??蹂댁븞?깃툒, AI 紐⑤뱶, ?듯빀 ?대뜑瑜?吏?뺥븯怨?理쒖쥌 ?뱀씤?⑸땲??</div><div class="v23-step-foot"><span class="v23-pill blue">${totalFinal}嫄??湲?/span><span>?뱀씤 ??/span></div></div>
        <div class="v23-arrow">??/div>
        <div class="v23-step" onclick="openAdminTab('p-list')"><div class="v23-step-num">3</div><div class="v23-step-title">理쒖쥌 由ъ뒪??愿由?/div><div class="v23-step-desc">?뱀씤??臾몄꽌??理쒖쥌 吏??由ъ뒪?몄뿉??踰꾩쟾, 紐⑤뱶, 蹂댁븞, ?꾨쿋???곹깭瑜??댁쁺?⑸땲??</div><div class="v23-step-foot"><span class="v23-pill green">${published}嫄??쒖꽦</span><span>愿由???/span></div></div>
      </div>
      <div class="v23-workgrid"><div class="v23-panel"><div class="v23-panel-h"><div class="v23-panel-title">?슚 ?ㅻ뒛 泥섎━????/div><button class="v23-btn" onclick="openAdminTab('p-final')">?꾩껜 蹂닿린</button></div><div class="v23-panel-body"><div class="v23-mini-list">${teamDocs.filter(d=>d.status==='?깅줉 ?붿껌??).slice(0,5).map(d=>`<div class="v23-mini-row"><div class="v23-mini-icon">${d.type==='PPT'?'?뱤':d.type==='XLSX'?'?뱢':'?뱞'}</div><div class="v23-mini-main"><div class="v23-mini-title">${esc(d.name)}</div><div class="v23-mini-meta"><span>${esc(d.team)}</span><span>${esc(d.mode)}</span><span>${esc(d.sec)}</span></div></div><button class="v23-btn primary" onclick="openAdminTab('p-final')">寃??/button></div>`).join('')}</div></div></div><div class="v23-panel"><div class="v23-panel-h"><div class="v23-panel-title">?뵕 ?뺥삎 ?곗씠??諛곗튂 ?곹깭</div><button class="v23-btn" onclick="openAdminTab('p-datamart')">紐⑤땲?곕쭅</button></div><div class="v23-panel-body"><div class="v23-mini-list"><div class="v23-mini-row"><div class="v23-mini-icon">?뼢截?/div><div class="v23-mini-main"><div class="v23-mini-title">VAATZ ?낆껜쨌?덈ぉ 留덉뒪??/div><div class="v23-mini-meta"><span>05:10 ?깃났</span><span>+14,230 rows</span></div></div><span class="v23-pill green">?뺤긽</span></div><div class="v23-mini-row"><div class="v23-mini-icon">?뱰</div><div class="v23-mini-main"><div class="v23-mini-title">Autopedia ?⑹뼱 DB</div><div class="v23-mini-meta"><span>06:00 ?깃났</span><span>4,832 terms</span></div></div><span class="v23-pill green">?뺤긽</span></div><div class="v23-mini-row"><div class="v23-mini-icon">?뮥</div><div class="v23-mini-main"><div class="v23-mini-title">?먭? DB ??諛곗튂</div><div class="v23-mini-meta"><span>07:30 ?쇰? ?ㅽ뙣</span><span>12 rows error</span></div></div><span class="v23-pill amber">?뺤씤</span></div></div></div></div></div>
    `);

    addAdmSection('p-team', `
      <div class="v23-admin-title"><div><div class="v23-title-main">?蹂??대뜑 愿由?/div><div class="v23-title-sub">?蹂?臾몄꽌媛 留롮븘??移대뱶濡??꾪솴留?蹂닿퀬, ?대┃?섎㈃ ???앹뾽?먯꽌 由ъ뒪?몃? 寃?됀룻븘?걔룹턀醫낆슂泥?븷 ???덉뒿?덈떎.</div></div><div class="v23-actions"><button class="v23-btn">竊?? ?대뜑 異붽?</button><button class="v23-btn primary" onclick="openTeamFolderModal('援щℓ?꾨왂?')">?뱥 ?섑뵆 ?대뜑 ?닿린</button></div></div>
      <div class="team-folder-grid">${teams.map(t=>`<div class="team-folder-card"><div class="team-folder-top"><div class="team-folder-ic">${t.icon}</div><span class="v23-pill ${t.health==='?뺤긽'?'green':t.health==='蹂댁븞二쇱쓽'?'red':'amber'}">${t.health}</span></div><div class="team-folder-name">${t.name}</div><div class="team-folder-owner">Admin: ${t.owner}</div><div class="team-folder-stats"><div class="team-stat"><div class="team-stat-v">${t.docs}</div><div class="team-stat-l">?꾩껜</div></div><div class="team-stat"><div class="team-stat-v" style="color:var(--a)">${t.finalReq}</div><div class="team-stat-l">理쒖쥌?붿껌</div></div><div class="team-stat"><div class="team-stat-v" style="color:var(--g)">${t.published}</div><div class="team-stat-l">諛섏쁺?꾨즺</div></div></div><div class="team-folder-actions"><button class="v23-btn" onclick="openTeamFolderModal('${t.name}')">?ш쾶 蹂닿린</button><button class="v23-btn primary" onclick="openTeamFolderModal('${t.name}','request')">?깅줉 ?붿껌??/button></div></div>`).join('')}</div>
    `);

    const finalDocs=teamDocs.filter(d=>d.status==='?깅줉 ?붿껌??).slice(0,10);
    addAdmSection('p-final', `
      <div class="v23-admin-title"><div><div class="v23-title-main">System Admin 理쒖쥌 ?뱀씤</div><div class="v23-title-sub">? Admin???щ┛ ?깅줉 ?붿껌?⑤쭔 紐⑥븘 寃?좏빀?덈떎. ?ш린???듯빀 ?대뜑, 蹂댁븞?깃툒, AI 紐⑤뱶瑜??뺤젙?섎㈃ 理쒖쥌 由ъ뒪?몃줈 ?대룞?⑸땲??</div></div><div class="v23-actions"><button class="v23-btn warn">蹂댁셿 ?붿껌 ?ъ쑀 ?쒗뵆由?/button><button class="v23-btn primary" onclick="approveAllVisibleFinals()">???붾㈃ ???쇨큵 ?뱀씤</button></div></div>
      <div class="final-layout"><div>${finalDocs.map((d,i)=>`<div class="approval-card" data-final-id="${d.id}"><div class="approval-card-top"><div><div class="approval-doc">${esc(d.name)}</div><div class="approval-meta">${esc(d.team)} 쨌 ${esc(d.owner)} 쨌 ${d.date} 쨌 ${d.chunks} chunks ?덉긽</div></div>${statusPill(d.status)}</div><div class="approval-settings"><div class="setting-box"><div class="setting-label">?듯빀 ?대뜑</div><select><option>援щℓ?낅Т洹쒖젙</option><option>?낆같愿由?/option><option>VAATZ 留ㅻ돱??/option><option>?덉쭏 5?ㅽ?</option><option>?먭?/?④?</option></select></div><div class="setting-box"><div class="setting-label">蹂댁븞?깃툒</div><select><option>${d.sec}</option><option>由щ뜑 ?꾩슜</option><option>?쇰컲 怨듦컻</option><option>吏???ъ슜??/option></select></div><div class="setting-box"><div class="setting-label">AI 紐⑤뱶</div><select><option>${d.mode}</option>${modeList.map(m=>`<option>${m}</option>`).join('')}</select></div></div><div style="display:flex;gap:6px;margin-top:10px;justify-content:flex-end"><button class="v23-btn" onclick="previewFinalDoc('${d.id}')">?먮Ц 蹂닿린</button><button class="v23-btn danger" onclick="rejectFinalDoc(this)">蹂댁셿 ?붿껌</button><button class="v23-btn primary" onclick="approveFinalDoc(this)">理쒖쥌 ?뱀씤</button></div></div>`).join('')}</div><div class="final-preview"><div class="v23-panel-title" style="margin-bottom:10px">?뵊 寃??誘몃━蹂닿린</div><div class="preview-doc-page" id="finalPreview"><h4>臾몄꽌 誘몃━蹂닿린</h4><p>?쇱そ 臾몄꽌??<span class="preview-highlight">?먮Ц 蹂닿린</span>瑜??대┃?섎㈃ ?ш린???붿빟쨌?섏씠?쇱씠?맞룹쨷蹂?臾몄꽌 ?щ?媛 ?쒖떆?⑸땲??</p><p>理쒖쥌 ?뱀씤 ???뺤씤 ??ぉ: 理쒖떊 踰꾩쟾 ?щ?, 以묐났 ?깅줉 ?щ?, 蹂댁븞?깃툒, AI 紐⑤뱶 留ㅽ븨, ?꾨쿋???쒖쇅 臾멸뎄.</p></div><div class="mode-note">Tip. 理쒖쥌 ?뱀씤 ??臾몄꽌媛 理쒖쥌 由ъ뒪?몃줈 ?대룞?섍퀬, ?좏깮??AI 紐⑤뱶??RAG Index??諛섏쁺?⑸땲??</div></div></div>
    `);

    const publishedDocs=teamDocs.filter(d=>d.status==='AI 寃??諛섏쁺?꾨즺').slice(0,36);
    addAdmSection('p-list', `
      <div class="v23-admin-title"><div><div class="v23-title-main">理쒖쥌 由ъ뒪??愿由?/div><div class="v23-title-sub">?ㅼ젣 AI媛 寃?됲븯??理쒖쥌 吏??紐⑸줉?낅땲?? 臾몄꽌 踰꾩쟾쨌蹂댁븞?깃툒쨌AI 紐⑤뱶쨌?꾨쿋???곹깭瑜?愿由ы빀?덈떎.</div></div><div class="v23-actions"><button class="v23-btn">CSV ?대낫?닿린</button><button class="v23-btn primary">竊??섎룞 ?깅줉</button></div></div>
      <div class="final-list-filter"><input id="finalListSearch" placeholder="理쒖쥌 臾몄꽌 寃?? oninput="filterFinalList()"><select id="finalModeFilter" onchange="filterFinalList()"><option value="">?꾩껜 紐⑤뱶</option>${modeList.map(m=>`<option>${m}</option>`).join('')}</select><select id="finalSecFilter" onchange="filterFinalList()"><option value="">?꾩껜 蹂댁븞</option>${secList.map(s=>`<option>${s}</option>`).join('')}</select></div>
      <div class="final-table-wrap"><table class="large-table" id="finalDocTable"><thead><tr><th>臾몄꽌紐?/th><th>?</th><th>?좏삎</th><th>蹂댁븞</th><th>AI 紐⑤뱶</th><th>踰꾩쟾</th><th>?꾨쿋??/th><th style="text-align:right">?묒뾽</th></tr></thead><tbody>${publishedDocs.map(d=>`<tr data-mode="${d.mode}" data-sec="${d.sec}" data-text="${(d.name+d.team+d.mode+d.sec).toLowerCase()}"><td><div class="doc-name-strong">${esc(d.name)}</div><div class="doc-subtle">理쒖쥌 諛섏쁺??${d.date} 쨌 ${d.chunks} chunks</div></td><td>${esc(d.team)}</td><td>${d.type}</td><td>${secPill(d.sec)}</td><td>${modeBadge(d.mode)}</td><td>${d.version}</td><td><span class="v23-pill green">?쒖꽦</span></td><td><div class="row-actions"><button class="v23-btn" onclick="previewPublishedDoc(this)">?곸꽭</button><button class="v23-btn">?ъ깋??/button></div></td></tr>`).join('')}</tbody></table></div>
    `);

    addAdmSection('p-datamart', `
      <div class="v23-admin-title"><div><div class="v23-title-main">?뺥삎 ?곗씠?곕쭏??I/F 紐⑤땲?곕쭅</div><div class="v23-title-sub">VAATZ DB, Autopedia, ? 遺臾??쒖뒪?쒖? ?곗씠?곕쭏?몄뿉????諛곗튂濡??섏쭛?섍퀬 RAG Index??諛섏쁺?⑸땲??</div></div><div class="v23-actions"><button class="v23-btn">諛곗튂 罹섎┛??/button><button class="v23-btn primary" onclick="safeV23Toast('?꾩껜 I/F ?곹깭瑜??ъ젏寃?덉뒿?덈떎.','?봽')">?꾩껜 ?ъ젏寃</button></div></div>
      <div class="datamart-grid"><div class="if-card"><div class="if-head"><div><div class="if-name">VAATZ ?낆껜쨌?덈ぉ 留덉뒪??/div><div class="if-desc">?낆껜, ?덈ぉ, 諛쒖＜, 寃?? ?⑺뭹 ?ㅼ쟻</div></div><span class="v23-pill green">?뺤긽</span></div><div class="if-metrics"><div class="if-metric"><div class="if-metric-v">1.42M</div><div class="if-metric-l">ROWS</div></div><div class="if-metric"><div class="if-metric-v">05:10</div><div class="if-metric-l">LAST</div></div><div class="if-metric"><div class="if-metric-v">0</div><div class="if-metric-l">ERROR</div></div></div></div><div class="if-card"><div class="if-head"><div><div class="if-name">Autopedia</div><div class="if-desc">援щℓ/?앹궛/?덉쭏 ?⑹뼱 ?ъ쟾</div></div><span class="v23-pill green">?뺤긽</span></div><div class="if-metrics"><div class="if-metric"><div class="if-metric-v">4,832</div><div class="if-metric-l">TERMS</div></div><div class="if-metric"><div class="if-metric-v">06:00</div><div class="if-metric-l">LAST</div></div><div class="if-metric"><div class="if-metric-v">0</div><div class="if-metric-l">ERROR</div></div></div></div><div class="if-card warn"><div class="if-head"><div><div class="if-name">?먭? DB</div><div class="if-desc">?먭? ?뚯씠釉? ?④? ?대젰, ?섏쑉 湲곗?</div></div><span class="v23-pill amber">遺遺??ㅽ뙣</span></div><div class="if-metrics"><div class="if-metric"><div class="if-metric-v">324K</div><div class="if-metric-l">ROWS</div></div><div class="if-metric"><div class="if-metric-v">07:30</div><div class="if-metric-l">LAST</div></div><div class="if-metric"><div class="if-metric-v">12</div><div class="if-metric-l">ERROR</div></div></div></div><div class="if-card"><div class="if-head"><div><div class="if-name">? 遺臾??쒖뒪??/div><div class="if-desc">?덉쭏, ?앹궛, 臾쇰쪟 遺臾??곌퀎 ?뚯씠釉?/div></div><span class="v23-pill green">?뺤긽</span></div><div class="if-metrics"><div class="if-metric"><div class="if-metric-v">8</div><div class="if-metric-l">SOURCES</div></div><div class="if-metric"><div class="if-metric-v">04:20</div><div class="if-metric-l">LAST</div></div><div class="if-metric"><div class="if-metric-v">0</div><div class="if-metric-l">ERROR</div></div></div></div></div>
      <div class="batch-timeline"><div class="v23-panel-title" style="margin-bottom:8px">????諛곗튂 ?뚯씠?꾨씪??/div><div class="batch-row" style="color:var(--text-4);font-weight:800;text-transform:uppercase"><div>?묒뾽</div><div>吏꾪뻾瑜?/div><div>?쒖옉</div><div>醫낅즺</div><div>?곹깭</div></div>${[['VAATZ_MART_DAILY','100%','05:00','05:10','?뺤긽','green'],['AUTOPEDIA_TERM_SYNC','100%','06:00','06:02','?뺤긽','green'],['COST_DB_DAILY','92%','07:00','07:30','遺遺??ㅽ뙣','warn'],['RAG_INDEX_REFRESH','68%','08:00','吏꾪뻾以?,'吏꾪뻾以?,'warn'],['PERMISSION_SNAPSHOT','100%','03:00','03:04','?뺤긽','green']].map(r=>`<div class="batch-row"><div>${r[0]}</div><div><div class="progress-line ${r[5]}"><span style="width:${r[1]}"></span></div></div><div>${r[2]}</div><div>${r[3]}</div><div><span class="v23-pill ${r[5]==='green'?'green':'amber'}">${r[4]}</span></div></div>`).join('')}</div>
    `);

    addAdmSection('p-mode', `
      <div class="v23-admin-title"><div><div class="v23-title-main">AI 紐⑤뱶 쨌 DB 留ㅽ븨 愿由?/div><div class="v23-title-sub">鍮꾩젙??臾몄꽌? ?뺥삎 ?곗씠???뚯뒪瑜?媛?AI 紐⑤뱶???쒕옒洹명빐???곌껐?⑸땲?? ?댄썑 ?/?ъ슜?먮퀎 ?묎렐 ?덉슜源뚯? ?듭젣?????덉뒿?덈떎.</div></div><div class="v23-actions"><button class="v23-btn">沅뚰븳 誘몃━蹂닿린</button><button class="v23-btn primary" onclick="safeV23Toast('AI 紐⑤뱶 留ㅽ븨 ?뺤콉????ν뻽?듬땲??','?㎛')">留ㅽ븨 ???/button></div></div>
      <div class="mode-mapping"><div class="source-palette"><h4>?곌껐 媛?ν븳 ?곗씠???뚯뒪</h4>${['?뱞 援щℓ?낅Т洹쒖젙 PDF','?뱤 VAATZ ?낆같紐⑤뱢 PPT','?뱢 ?덉쭏 5?ㅽ? XLSX','?뼢截?VAATZ ?낆껜쨌?덈ぉ DB','?뱰 Autopedia ?⑹뼱 DB','?뮥 ?먭? DB','?룺 ?앹궛遺臾??덉쭏 DB','?벀 ?쇰컲?먯옱 MRO DB'].map((s,i)=>`<div class="mode-source" draggable="true" data-source="${s}"><span>${s.split(' ')[0]}</span><span>${s.replace(/^\S+\s/,'')}</span></div>`).join('')}<div class="mode-note">鍮꾩젙??臾몄꽌??System Admin 理쒖쥌 ?뱀씤 ?????붾젅?몄뿉 ?섑??⑸땲?? ?뺥삎 DB???곗씠?곕쭏??I/F ?깃났 ???곌껐 媛?ν빀?덈떎.</div></div><div class="mode-board">${modeList.map((m,i)=>`<div class="mode-col" data-mode="${m}"><div class="mode-col-head"><div class="mode-col-title">${m}</div><span class="v23-pill ${i===0?'blue':i===1?'green':i===2?'violet':'red'}">${i===0?'湲곕낯':i===1?'?앹궛':i===2?'?쇰컲':'蹂댁븞'}</span></div><div class="mapped-list">${(i===0?['?뱞 援щℓ?낅Т洹쒖젙 PDF','?뼢截?VAATZ ?낆껜쨌?덈ぉ DB','?뱰 Autopedia ?⑹뼱 DB']:i===1?['?룺 ?앹궛遺臾??덉쭏 DB','?뱢 ?덉쭏 5?ㅽ? XLSX']:i===2?['?벀 ?쇰컲?먯옱 MRO DB','?뱤 VAATZ ?낆같紐⑤뱢 PPT']:['?뮥 ?먭? DB']).map(x=>`<span class="mapped-chip">${x}<button onclick="this.parentElement.remove()">횞</button></span>`).join('')}</div><div class="mode-note">${m} ?묎렐? ?ъ슜??? 沅뚰븳怨?臾몄꽌 蹂댁븞?깃툒??紐⑤몢 ?듦낵?댁빞 ?쒖꽦?붾맗?덈떎.</div></div>`).join('')}</div></div>
    `);

    const pusr=$('#p-usr'); if(pusr){ pusr.style.display='none'; }
    $$('.adm-b').forEach(e=>{ if(!['p-req'].includes(e.id)) e.style.display='none'; });
    $('#p-req').style.display='block';
  }

  window.openTeamFolderModal=function(team, focus){
    currentTeam=team||teams[0].name;
    $('#teamFolderTitle').innerHTML=`?뱚 ${esc(currentTeam)} 臾몄꽌??;
    const t=teams.find(x=>x.name===currentTeam); $('#teamFolderSub').textContent=`Admin: ${t?.owner||'-'} 쨌 ?꾩껜 ${t?.docs||0}嫄?쨌 ?깅줉 ?붿껌??${t?.finalReq||0}嫄?쨌 ?대┃ ?놁씠 ??由ъ뒪?몄뿉??諛붾줈 愿由?;
    $('#teamDocSearch').value=''; $('#teamDocStatusFilter').value=focus==='request'?'?깅줉 ?붿껌??:''; $('#teamSelectAll').checked=false;
    renderTeamDocRows(); $('#teamFolderModal').classList.add('sh');
  };
  window.closeTeamFolderModal=function(){ $('#teamFolderModal').classList.remove('sh'); };
  window.renderTeamDocRows=function(){
    const q=($('#teamDocSearch')?.value||'').toLowerCase(); const st=$('#teamDocStatusFilter')?.value||''; const body=$('#teamDocRows'); if(!body)return;
    const rows=teamDocs.filter(d=>d.team===currentTeam && (!st||d.status===st) && (`${d.name} ${d.type} ${d.sec} ${d.mode} ${d.owner} ${d.status}`.toLowerCase().includes(q))).slice(0,160);
    body.innerHTML=rows.map(d=>`<tr><td><input type="checkbox" class="check-lg team-doc-check" data-id="${d.id}"></td><td><div class="doc-name-strong">${esc(d.name)}</div><div class="doc-subtle">${d.date} 쨌 ${d.chunks} chunks 쨌 ${esc(d.team)}</div></td><td>${d.type}</td><td>${secPill(d.sec)}</td><td>${modeBadge(d.mode)}</td><td>${d.version}</td><td>${esc(d.owner)}</td><td>${statusPill(d.status)}</td><td><div class="row-actions"><button class="v23-btn" onclick="previewTeamDoc('${d.id}')">誘몃━蹂닿린</button><button class="v23-btn primary" onclick="requestOneTeamDoc('${d.id}',this)">?깅줉 ?붿껌??/button></div></td></tr>`).join('') || `<tr><td colspan="9" style="text-align:center;padding:30px;color:var(--text-4)">寃??寃곌낵媛 ?놁뒿?덈떎.</td></tr>`;
  };
  window.toggleTeamDocAll=function(chk){ $$('.team-doc-check').forEach(c=>c.checked=chk.checked); };
  window.submitSelectedTeamDocs=function(){ const checked=$$('.team-doc-check:checked'); if(!checked.length){safeToast('?깅줉 ?붿껌?⑦븷 臾몄꽌瑜??좏깮?댁＜?몄슂.','?좑툘');return} checked.forEach(c=>{const d=teamDocs.find(x=>x.id===c.dataset.id); if(d)d.status='?깅줉 ?붿껌??}); safeToast(`${checked.length}嫄댁쓣 System Admin 理쒖쥌 ?뱀씤 ?湲곗뿴濡?蹂대깉?듬땲??`,'??'); renderTeamDocRows(); renderAdmin(); };
  window.requestOneTeamDoc=function(id,btn){ const d=teamDocs.find(x=>x.id===id); if(d){d.status='?깅줉 ?붿껌??; safeToast(`${d.name} ?깅줉 ?붿껌???꾨즺`,'??'); btn.closest('tr')?.querySelector('td:nth-child(8)') && (btn.closest('tr').querySelector('td:nth-child(8)').innerHTML=statusPill('?깅줉 ?붿껌??)); renderAdmin();} };
  window.previewTeamDoc=function(id){ const d=teamDocs.find(x=>x.id===id); if(!d)return; safeToast(`${d.name} 誘몃━蹂닿린: 蹂댁븞 ${d.sec}, ${d.mode}, ${d.chunks} chunks`,'?뵊',3200); };
  window.previewFinalDoc=function(id){ const d=teamDocs.find(x=>x.id===id); const p=$('#finalPreview'); if(!d||!p)return; p.innerHTML=`<h4>${esc(d.name)}</h4><p><b>?붿껌?:</b> ${esc(d.team)} 쨌 <b>?대떦:</b> ${esc(d.owner)}</p><p>??臾몄꽌??<span class="preview-highlight">${esc(d.mode)}</span>???곌껐???덉젙?대ŉ, 蹂댁븞?깃툒? <span class="preview-highlight">${esc(d.sec)}</span>?낅땲??</p><p>以묐났 臾몄꽌 寃??寃곌낵: ?좎궗??0.42 ?댄븯濡??좉퇋 諛섏쁺 媛?? ?덉긽 泥?겕 ?섎뒗 ${d.chunks}媛쒖엯?덈떎.</p>`; };
  window.approveFinalDoc=function(btn){ const card=btn.closest('.approval-card'); if(card){card.style.opacity='.38'; card.style.pointerEvents='none'} safeToast('理쒖쥌 ?뱀씤 ?꾨즺: 理쒖쥌 由ъ뒪?몄? ?좏깮 AI 紐⑤뱶 Index??諛섏쁺?⑸땲??','??); };
  window.rejectFinalDoc=function(btn){ const card=btn.closest('.approval-card'); if(card){card.style.opacity='.38'; card.style.pointerEvents='none'} safeToast('蹂댁셿 ?붿껌 泥섎━?덉뒿?덈떎. ? Admin?먭쾶 蹂댁셿 ?붿껌 ?뚮┝???꾩넚?⑸땲??','?⑼툘'); };
  window.approveAllVisibleFinals=function(){ $$('.approval-card').forEach(c=>{c.style.opacity='.38'; c.style.pointerEvents='none'}); safeToast('?붾㈃???쒖떆???깅줉 ?붿껌?⑥쓣 紐⑤몢 ?뱀씤?덉뒿?덈떎.','??); };
  window.filterFinalList=function(){ const q=($('#finalListSearch')?.value||'').toLowerCase(); const m=$('#finalModeFilter')?.value||''; const s=$('#finalSecFilter')?.value||''; $$('#finalDocTable tbody tr').forEach(tr=>{ const ok=(!q||tr.dataset.text.includes(q))&&(!m||tr.dataset.mode===m)&&(!s||tr.dataset.sec===s); tr.style.display=ok?'':'none'; }); };
  window.previewPublishedDoc=function(btn){ const tr=btn.closest('tr'); const name=tr?.querySelector('.doc-name-strong')?.textContent||'臾몄꽌'; safeToast(`${name} ?곸꽭 ?⑤꼸???댁뿀?듬땲?? ?ㅼ젣 援ы쁽 ???먮Ц/踰꾩쟾/?몃뜳??濡쒓렇濡??곌껐?⑸땲??`,'?뱴'); };
  window.safeV23Toast=safeToast;

  function enableModeDrag(){
    let dragText='';
    document.addEventListener('dragstart',e=>{ const src=e.target.closest('.mode-source'); if(src){dragText=src.dataset.source; e.dataTransfer.setData('text/plain',dragText); }});
    document.addEventListener('dragover',e=>{ const col=e.target.closest('.mode-col'); if(col){e.preventDefault(); col.classList.add('dragover'); }});
    document.addEventListener('dragleave',e=>{ const col=e.target.closest('.mode-col'); if(col) col.classList.remove('dragover'); });
    document.addEventListener('drop',e=>{ const col=e.target.closest('.mode-col'); if(!col)return; e.preventDefault(); col.classList.remove('dragover'); const text=e.dataTransfer.getData('text/plain')||dragText; if(!text)return; const list=col.querySelector('.mapped-list'); if(list && !list.textContent.includes(text)){ list.insertAdjacentHTML('beforeend',`<span class="mapped-chip">${esc(text)}<button onclick="this.parentElement.remove()">횞</button></span>`); safeToast(`${text} ??${col.dataset.mode}???곌껐?덉뒿?덈떎.`,'?㎛'); } });
  }

  function ensureMypageHero(){
    if($('#mpCharHero')) return;
    const profile=$('.mp-profile'); if(!profile)return;
    profile.insertAdjacentHTML('afterend', `<div class="mp-character-hero" id="mpCharHero"><div class="buddy-3d"><div class="buddy-hat" id="mpHeroHat">?렔</div><div class="buddy-hair"></div><div class="buddy-face"></div><div class="buddy-eye l"></div><div class="buddy-eye r"></div><div class="buddy-smile"></div><div class="buddy-arm l"></div><div class="buddy-arm r"></div><div class="buddy-body"></div><div class="buddy-wheel l"></div><div class="buddy-wheel r"></div><div class="buddy-badge">AI</div></div><div class="mp-character-info"><div class="mp-character-title">?꾨줈?먯뼱?덉뼱濡쒖쓽 VAATZ Buddy</div><div class="mp-character-desc">?낅Т 吏??湲곗뿬, 臾몄꽌 ?뱀씤, ?듬? 梨꾪깮 ?쒕룞???곕씪 ?깆옣?섎뒗 3D Companion?낅땲??</div><div class="mp-character-chips"><span class="v23-pill blue">Lv.3 援щℓPro</span><span class="v23-pill green">1,720pt</span><span class="v23-pill amber">?꾩씠??3媛??μ갑</span></div></div><button class="v23-btn primary" onclick="openComm('char')">袁몃?湲?/button></div>`);
  }
  const oldOpenMp=window.openMypage; window.openMypage=function(){ if(oldOpenMp) oldOpenMp(); else $('#mpOv')?.classList.add('sh'); ensureMypageHero(); };

  function renderCharacterScene(label='?슅'){
    const body=$('#charBody'); if(!body)return;
    body.innerHTML=`<div class="v23-char-scene"><div class="buddy-3d"><div class="buddy-hat" id="accHat">?렔</div><div class="buddy-hair"></div><div class="buddy-face"></div><div class="buddy-eye l"></div><div class="buddy-eye r"></div><div class="buddy-smile"></div><div class="buddy-arm l"></div><div class="buddy-arm r"></div><div class="buddy-body"></div><div class="buddy-wheel l"></div><div class="buddy-wheel r"></div><div class="buddy-badge" id="charMain">${label}</div><div id="accFace" style="position:absolute;left:20px;top:18px;font-size:15px;z-index:4"></div><div id="accPet" style="position:absolute;right:-8px;bottom:8px;font-size:22px;z-index:4"></div></div><div class="v23-char-label">?먮룞李?諛붿씠???섏씤??Companion</div></div>`;
  }
  window.pickChar=function(btn,emoji){ $$('.char-sel').forEach(b=>b.classList.remove('active')); btn?.classList.add('active'); renderCharacterScene(emoji); const badge=$('#dockBadge'); if(badge) badge.textContent=emoji; safeToast(`${btn?.title||'罹먮┃??} ?좏깮 ?꾨즺`,'??,1600); };
  window.equipItem=function(slot,emoji){ if(slot){ $$('.inv-slot').forEach(s=>{ if(!s.classList.contains('empty') && s.title===slot.title) s.classList.remove('equipped') }); slot.classList.add('equipped'); } const hat=$('#accHat'), dockHat=$('#dockHat'), mpHat=$('#mpHeroHat'); if(['?렔','?몣','??','?럳','?묕툘','?룇'].includes(emoji)){ if(hat)hat.textContent=emoji; if(dockHat)dockHat.textContent=emoji; if(mpHat)mpHat.textContent=emoji; } else if(['?맩','?맯','?맔','?릧','?쫫'].includes(emoji)){ const pet=$('#accPet'); if(pet)pet.textContent=emoji; } else { const face=$('#accFace'); if(face)face.textContent=emoji; } safeToast(`${emoji} ?꾩씠?쒖쓣 ?μ갑?덉뒿?덈떎.`,'??,1400); };
  window.buyItem=function(el,emoji,name,price){ if(!el||el.classList.contains('owned')){safeToast('?대? 蹂댁쑀???꾩씠?쒖엯?덈떎.','??);return} if(price>userPoints){ safeToast(`${name} 援щℓ ?ъ씤?멸? 遺議깊빀?덈떎. ?꾩옱 ${userPoints}pt`, '?뮥'); return; } userPoints-=price; el.classList.add('owned'); const pr=el.querySelector('.shop-pr'); if(pr) pr.textContent='??蹂댁쑀'; const empty=$('.inv-slot.empty'); if(empty){empty.classList.remove('empty'); empty.textContent=emoji; empty.title=name; empty.tabIndex=0; empty.onclick=function(){equipItem(this,emoji)};} $$('#ct-shop [style*="520pt"]').forEach(x=>x.innerHTML=`?뮥 ${userPoints}pt 蹂댁쑀`); safeToast(`${name} 援щℓ ?꾨즺. ?몃깽?좊━?먯꽌 ?μ갑?????덉뒿?덈떎.`,'?럦'); };

  function setupCompanion(){ const card=$('#companionCard'); if(!card)return; const msgs=['? ?대뜑?????앹뾽?쇰줈 愿由ы븯?몄슂.','理쒖쥌 ?뱀씤 ??AI 紐⑤뱶??諛붾줈 諛섏쁺?⑸땲??','?뺥삎 DB 諛곗튂 ?곹깭瑜?留ㅼ씪 ?뺤씤?섏꽭??','?몄슜 踰덊샇瑜??꾨Ⅴ硫??먮Ц ?섏씠?쇱씠?몃? 蹂????덉뼱??']; let i=0; setInterval(()=>{ const msg=$('#companionMsg'); if(msg){i=(i+1)%msgs.length; msg.textContent=msgs[i];}},7000); }
  window.toggleCompanionHub=function(){ companionOpen=!companionOpen; $('#companionCard')?.classList.toggle('open',companionOpen); };

  window.openHistory=function(){
    const rows=[['AI 吏덉쓽','?꾨젰?곸엯李?vs 寃쎈ℓ?낆같','?ㅻ뒛 15:42','李몄“ 5嫄?쨌 ?좊ː??94%'],['?낅줈???붿껌','?댁쇅踰뺤씤 援щℓ ?뱀씤 ?꾨줈?몄뒪','?ㅻ뒛 13:10','援щℓ?꾨왂? 理쒖쥌?붿껌'],['System ?뱀씤','怨듭젙嫄곕옒踰??섎룄湲?愿??議고빆','?댁젣','AI AI 寃??諛섏쁺?꾨즺'],['?곗씠?곕쭏??,'?먭? DB ??諛곗튂 遺遺??ㅽ뙣','?ㅻ뒛 07:30','12 rows ?ㅻ쪟'],['AI 紐⑤뱶 蹂寃?,'?먭?紐⑤뱶 DB 留ㅽ븨 ?섏젙','?댁젣','?먭? DB 異붽?']];
    $('#historyList').innerHTML=rows.map(r=>`<div class="history-row"><div class="v23-mini-icon">${r[0].includes('吏덉쓽')?'?뮠':r[0].includes('?낅줈??)?'?뱾':r[0].includes('?뱀씤')?'??:r[0].includes('?곗씠??)?'?뵕':'?㎛'}</div><div class="history-row-main"><div class="history-title">${r[1]}</div><div class="history-meta">${r[0]} 쨌 ${r[2]} 쨌 ${r[3]}</div></div><button class="v23-btn">?곸꽭</button></div>`).join(''); $('#historyModal').classList.add('sh');
  };
  window.closeHistoryModal=function(){ $('#historyModal').classList.remove('sh'); };

  document.addEventListener('click',e=>{
    const text=(e.target.textContent||'').trim();
    if(e.target.closest('.itb')){ const isFile=text.includes('?뚯씪'); const box=$('.ibx'); const old=$('.file-attach-preview'); if(old)old.remove(); box?.insertAdjacentHTML('beforeend',`<div class="file-attach-preview">${isFile?'?뱨':'?벜'} ${isFile?'援щℓ?먮즺_?섑뵆.pdf':'?꾩옣?ъ쭊_sample.png'} 泥⑤???<button class="rp-c" onclick="this.parentElement.remove()">??/button></div>`); safeToast(isFile?'?뚯씪??泥⑤??덉뒿?덈떎.':'?대?吏瑜?泥⑤??덉뒿?덈떎.',isFile?'?뱨':'?벜'); }
    if(e.target.closest('.ai-a')){ const btn=e.target.closest('.ai-a'); if(btn.textContent.includes('怨듭쑀')) safeToast('怨듭쑀 留곹겕媛 ?앹꽦?섏뿀?듬땲??','?뱾'); if(btn.textContent.includes('?ъ깮??)) safeToast('?숈씪 洹쇨굅 湲곕컲?쇰줈 ?듬????ъ깮?깊빀?덈떎.','?봽'); }
  });

  document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ $('#teamFolderModal')?.classList.remove('sh'); $('#historyModal')?.classList.remove('sh'); }});

  function boot(){ injectTopbar(); buildAdminTabs(); renderAdmin(); enableModeDrag(); setupCompanion(); renderCharacterScene('?슅'); ensureMypageHero(); window.at($('.atb.on'),'p-req'); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot); else boot();
})();



(function(){
 const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
 const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
 const say=(m,i='??,d=2400)=>{try{toast(m,i,d)}catch(e){console.log(i,m)}}; window.say=say; window.safeV25Toast=say;
 const modes=['?듯빀紐⑤뱶','?앹궛?먯옱 紐⑤뱶','?쇰컲?먯옱 紐⑤뱶','?먭?紐⑤뱶'];
 const folders=[['all','?뱴','?꾩껜 吏??],['rule','?뱯','援щℓ洹쒖젙쨌?쒕룄'],['bid','?뤇截?,'?낆같愿由?],['vaatz','?뼢截?,'VAATZ 留ㅻ돱??],['quality','狩?,'?덉쭏 5?ㅽ?'],['cost','?뮥','?먭?쨌?④?'],['mro','?벀','?쇰컲?먯옱쨌MRO']];
 const teams=['援щℓ?꾨왂?','諛섎룄泥닿뎄留ㅽ?','援щℓ?덉쭏湲고쉷?','PT?쒖뼱遺?덇뎄留ㅽ?','援щℓ??웾媛쒕컻?','?ㅼ떆遺?덇뎄留??','?쇰컲?먯옱援щℓ?','?먭?愿由ы?'];
 const names=['?낆같?댁쁺 ?낅Т?쒖?','援щℓ?낅Т洹쒖젙 ?꾨Ц','寃쎈ℓ?낆같 媛?대뱶?쇱씤','VAATZ ?낆같紐⑤뱢 留ㅻ돱??,'?덉쭏 5?ㅽ? ?댁쁺湲곗?','?꾨룞??遺???④? 踰ㅼ튂留덊겕','?댁쇅踰뺤씤 援щℓ ?뱀씤 ?꾨줈?몄뒪','?먭? ?곗젙 湲곗???,'?쇰컲?먯옱 MRO 援щℓ 媛?대뱶','?섏쓽怨꾩빟 ?ъ쑀???묒떇','寃?섑솗???낅Т?쒖?','?묐젰???됯? ?곗씠?곗뀑','援щℓ?⑹뼱 ?쒖??뺤쓽吏?,'諛섎룄泥??섏텧洹쒖젣 ?꾪솴','怨꾩빟愿由?洹쒖젙'];
 const fids=folders.slice(1).map(f=>f[0]), types=['PDF','PPT','DOCX','XLSX','CSV'], secs=['由щ뜑 ?꾩슜','?쇰컲 怨듦컻','吏???ъ슜??];
 let docs=[]; for(let i=0;i<120;i++){let folder=fids[i%fids.length], ms=[]; if(i%2===0)ms.push(modes[0]); if(['bid','quality','vaatz'].includes(folder)||i%5===0)ms.push(modes[1]); if(['mro','vaatz','rule'].includes(folder)||i%7===0)ms.push(modes[2]); if(['cost','rule'].includes(folder)||i%11===0)ms.push(modes[3]); docs.push({id:'D'+i,name:`${names[i%names.length]}_${String(i+1).padStart(3,'0')}.${types[i%types.length].toLowerCase()}`,team:teams[i%teams.length],folder,type:types[i%types.length],sec:secs[i%secs.length],modes:[...new Set(ms)],ver:`v${1+i%4}.${i%10}`,chunks:70+(i*13)%500,owner:i%3?'? Admin':'System Admin',status:i%13===0?'?깅줉 ?붿껌??:i%17===0?'蹂댁셿 ?붿껌':i%4===0?'?묒꽦쨌蹂댁셿以?:'AI 寃??諛섏쁺?꾨즺',date:`2026.05.${String(1+i%23).padStart(2,'0')}`})}
 let activeFolder='all', activeMode='?듯빀紐⑤뱶', activeTeam=teams[0], activeTeamFolder='all';
 const qa=[['?낆같','梨꾪깮',47,8,'?꾨젰?곸엯李곗뿉??1?뚯감 ?좎같 ??泥섎━ ?덉감媛 沅곴툑?⑸땲??,'?ш났怨좎? ?섏쓽怨꾩빟 ?꾪솚 湲곗?, VAATZ ?좎같泥섎━ 硫붾돱 ?ъ슜踰뺤쓣 ?뚭퀬 ?띠뒿?덈떎.'],['5?ㅽ?','?듬??湲?,23,5,'5?ㅽ? 4???깃툒 ?밴툒 ???꾩옣 ?ъ궗 ??ぉ??蹂寃쎈릺?덈굹??','IATF 16949 ?몄쬆 ?꾩닔 ?щ?? 湲곗〈 ?묐젰???좎삁湲곌컙??沅곴툑?⑸땲??'],['VAATZ','?닿껐以?,15,3,'VAATZ?먯꽌 ?댁쇅 諛쒖＜ ???섏쑉 ?먮룞 ?곸슜 諛⑸쾿','?댁쇅援щℓ 諛쒖＜ ?쒖젏 ?섏쑉怨?寃곗젣 ?쒖젏 ?섏쑉 湲곗????쇰룞?⑸땲??'],['怨꾩빟','HOT',31,6,'?섏쓽怨꾩빟 湲닿툒 ?ъ쑀???뱀씤 湲곗?怨??꾧껐沅뚯? ?대뼸寃??섎굹??','湲덉븸蹂??뱀씤沅뚯옄? 援щℓ?꾩썝???ъ쓽 議곌굔???뺣━?섍퀬 ?띠뒿?덈떎.'],['?먭?','NEW',12,1,'?먭?紐⑤뱶?먯꽌 ?④? ?대젰怨??섏쑉 湲곗???媛숈씠 議고쉶?????덈굹??','?먭? 愿??吏덉쓽 ???대뼡 DB瑜??곌껐?댁빞 ?섎뒗吏 沅곴툑?⑸땲??'],['?쇰컲?먯옱','?듬??湲?,9,0,'MRO ?덈ぉ 諛섎났 援щℓ ??寃쎈ℓ?낆같???앸왂?????덈뒗 湲곗????덈굹??','諛섎났 援щℓ ?덈ぉ???덉쇅 湲곗?怨?怨꾩빟 ?쒖슜 媛???щ?媛 沅곴툑?⑸땲??']].map((x,i)=>({id:i+1,cat:x[0],status:x[1],votes:x[2],answers:x[3],title:x[4],body:x[5],author:['怨꾩빟珥덈낫','?덉쭏留ㅻ땲?','?댁쇅援щℓ?대떦','怨꾩빟珥덈낫','?먭?遺꾩꽍??,'MRO?대떦'][i],time:i<2?'1????:i===5?'20遺???:'?ㅻ뒛'}));
 function countFolder(id){return id==='all'?docs.length:docs.filter(d=>d.folder===id).length}
 function pill(cls,t){return `<span class="v23-pill ${cls}">${t}</span>`} function secPill(t){return t==='由щ뜑 ?꾩슜'?pill('red',t):t==='吏???ъ슜???pill('violet',t):pill('green',t)} function statPill(t){return t==='AI 寃??諛섏쁺?꾨즺'?pill('green',t):t==='?깅줉 ?붿껌???pill('blue',t):t==='蹂댁셿 ?붿껌'?pill('red',t):pill('amber',t)}
 function modeBtns(d){return modes.map(m=>`<button class="v25-mode ${m.includes('?앹궛')?'prod':m.includes('?쇰컲')?'gen':m.includes('?먭?')?'cost':''} ${d.modes.includes(m)?'on':''}" onclick="toggleDocMode('${d.id}','${m}',this)">${m.replace(' 紐⑤뱶','')}</button>`).join('')}
 window.toggleDocMode=(id,m,btn)=>{let d=docs.find(x=>x.id===id); if(!d)return; if(d.modes.includes(m)){d.modes=d.modes.filter(x=>x!==m);btn?.classList.remove('on');say(`${m} ?곌껐???댁젣?덉뒿?덈떎.`,'?㎛')}else{d.modes.push(m);btn?.classList.add('on');say(`${m}???곌껐?덉뒿?덈떎.`,'?㎛')}};
 function qCard(q){
  const isHot=q.votes>=30||q.status==='HOT';
  const isNew=q.status==='NEW';
  const isAdopted=q.status==='梨꾪깮';
  const isWait=q.status==='?듬??湲?;
  const isAI=q.id===1;
  const views=Math.floor(q.votes*4.7+20);
  const extraBadge=isHot?`<span class="post-badge hot">?뵦 HOT</span>`
    :isNew?`<span class="post-badge new0">??NEW</span>`
    :isWait?`<span class="post-badge wait">?솇 ?듬??湲?/span>`:'';
  const adoptedBadge=isAdopted?`<span class="post-badge adopted">??梨꾪깮?꾨즺</span>`:'';
  const aiBadge=isAI?`<span class="post-badge ai0">?쭬 AI 諛섏쁺</span>`:'';
  const catBadge=`<span class="post-badge cat">${q.cat}</span>`;
  const hotClass=isHot&&q.votes>=40?' post-hot-banner':'';
  return `<div class="v25-card${hotClass}" data-cat="${q.cat}" data-status="${q.status}" data-text="${(q.title+q.body+q.cat).toLowerCase()}" onclick="showQADetail(${q.id})">
    <div class="post-badges">${extraBadge}${adoptedBadge}${aiBadge}${catBadge}</div>
    <div class="post-title">${esc(q.title)}</div>
    <div class="post-preview">${esc(q.body)}</div>
    <div class="post-footer">
      <div class="post-author"><div class="post-author-av">${q.author?q.author[0]:'?'}</div>${esc(q.author)} 쨌 ${q.authorLv||'Lv.1'} 쨌 ${q.time}</div>
      <div class="post-stats">
        <span class="post-stat">?뮠 ${q.answers}</span>
        <span class="post-stat">?몓 ${views}</span>
        <span class="post-stat ${isHot?'hot-fire':'votes'}">?몟 ${q.votes}</span>
      </div>
    </div>
  </div>`}
 function renderQna(){let ct=$('#ct-qa'); if(!ct)return; let cats=['?꾩껜','?낆같','怨꾩빟','5?ㅽ?','VAATZ','?먭?','?쇰컲?먯옱']; ct.innerHTML=`<div id="v25QaHub" class="v25-qwrap"><div class="v25-qhero"><div class="v25-qhero-main"><div class="v25-eyebrow">Procurement Knowledge Community</div><div class="v25-qtitle">援щℓ蹂몃? Q&A 吏?앹빱裕ㅻ땲??/div><div class="v25-qdesc">吏덈Ц쨌?듬?쨌梨꾪깮쨌AI ?숈뒿 諛섏쁺???섎굹濡??댁뼱吏묐땲?? 諛섎났 吏덉쓽??而ㅻ??덊떚?먯꽌 鍮좊Ⅴ寃??닿껐?섍퀬, 寃利??듬?? VAATZ AI 吏?앹쑝濡??밴꺽?⑸땲??</div><div class="v25-qactions"><button class="v25-btn primary" onclick="openQuestionWrite()">?륅툘 吏덈Ц?섍린</button><button class="v25-btn" onclick="filterQaV25('?듬??湲?)">?솇 ?듬? ?꾩슂??吏덈Ц</button><button class="v25-btn" onclick="openMemoModal()">?뱷 ??硫붾え</button></div></div><div class="v25-stats"><div class="v25-stat blue"><div class="v25-stat-v">1,248</div><div class="v25-stat-l">?꾩쟻 吏덈Ц</div><div class="v25-stat-d">?낆같쨌怨꾩빟쨌VAATZ 以묒떖</div></div><div class="v25-stat green"><div class="v25-stat-v">86%</div><div class="v25-stat-l">?닿껐瑜?/div><div class="v25-stat-d">梨꾪깮 ?듬? 湲곗?</div></div><div class="v25-stat amber"><div class="v25-stat-v">32</div><div class="v25-stat-l">?ㅻ뒛 ?쒕룞</div><div class="v25-stat-d">吏덈Ц 7 쨌 ?듬? 25</div></div><div class="v25-stat violet"><div class="v25-stat-v">58</div><div class="v25-stat-l">AI ?꾨낫</div><div class="v25-stat-d">寃利??湲??듬?</div></div></div></div><div class="v25-qtoolbar"><input type="hidden" id="qaCatHidden" value="?꾩껜"><div class="v25-search"><span>?뵇</span><input id="qaSearchV25" placeholder="吏덈Ц, ?듬?, 洹쒖젙紐? VAATZ 硫붾돱 寃?? oninput="filterQaV25()"></div>${['?꾩껜','?듬??湲?,'HOT','梨꾪깮'].map(x=>`<button class="v25-chip ${x==='?꾩껜'?'on':''}" data-qf="${x}" onclick="filterQaV25('${x}')">${x}</button>`).join('')}</div><div class="v25-qlayout"><div class="v25-qside"><div class="v25-box"><div class="v25-box-h">移댄뀒怨좊━</div><div class="v25-box-b">${cats.map(c=>`<button class="v25-cat ${c==='?꾩껜'?'on':''}" data-qf="${c}" onclick="filterQaV25('${c}')"><span>${c==='?꾩껜'?'?뱴':c==='?낆같'?'?뤇截?:c==='怨꾩빟'?'?뱷':c==='5?ㅽ?'?'狩?:c==='VAATZ'?'?뼢截?:c==='?먭?'?'?뮥':'?벀'} ${c}</span><em>${c==='?꾩껜'?qa.length:qa.filter(q=>q.cat===c).length}</em></button>`).join('')}</div></div></div><div><div class="qa-sort-bar"><span>?뺣젹</span><button class="sort-btn on" onclick="sortQaV25('default',this)">理쒖떊??/button><button class="sort-btn" onclick="sortQaV25('votes',this)">?뵦 ?멸린??/button><button class="sort-btn" onclick="sortQaV25('wait',this)">?솇 誘몄콈??/button></div><div class="v25-list" id="qaList">${qa.map(qCard).join('')}</div></div><div class="v25-qright"><div class="v25-box"><div class="v25-box-h">?ㅻ뒛 ?멸린 吏덈Ц</div><div class="v25-box-b">${qa.slice(0,4).map((q,i)=>`<div class="v25-rank" onclick="showQADetail(${q.id})"><div class="v25-rank-num">${i+1}</div><div><div class="v25-rank-title">${esc(q.title)}</div><div class="v25-rank-meta">異붿쿇 ${q.votes} 쨌 ?듬? ${q.answers}</div></div></div>`).join('')}</div></div><div class="v25-box"><div class="v25-box-h">AI 諛섏쁺 ?꾨낫</div><div class="v25-box-b" style="font-size:11.5px;color:var(--text-3);line-height:1.7">異붿쿇 10媛??댁긽 + 梨꾪깮 ?듬?? 愿由ъ옄 寃利??먮줈 ?대룞?⑸땲??<button class="v25-btn" style="width:100%;margin-top:10px" onclick="say('AI 諛섏쁺 ?꾨낫 紐⑸줉???댁뿀?듬땲??','?쭬')">?꾨낫 蹂닿린</button></div></div></div></div></div><div id="qaDetailView" class="v25-detail" style="display:none"><button class="v25-btn" onclick="backToQAList()">??紐⑸줉?쇰줈 ?뚯븘媛湲?/button><div id="qaDetailContent" style="margin-top:12px"></div><div class="v25-answer"><div style="font-size:13px;font-weight:900;color:var(--text-1);margin-bottom:8px">?륅툘 ?듬? ?묒꽦</div><textarea id="answerTextarea" style="width:100%;min-height:110px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:12px;color:var(--text-1);font-family:inherit;font-size:13px;line-height:1.7;padding:12px;resize:vertical;outline:0" placeholder="洹쇨굅 洹쒖젙, VAATZ 硫붾돱 寃쎈줈, ?ㅼ젣 泥섎━ 寃쏀뿕???④퍡 ?곸뼱二쇱꽭??"></textarea><div style="display:flex;justify-content:flex-end;margin-top:8px"><button class="v25-btn primary" onclick="submitAnswer()">?듬? ?깅줉</button></div></div></div>`}
 window.filterQaV25=function(f=''){
   let q=($('#qaSearchV25')?.value||'').toLowerCase();
   if(f){$('#qaCatHidden').value=f; $$('[data-qf]').forEach(b=>b.classList.toggle('on',b.dataset.qf===f));}
   let a=$('#qaCatHidden')?.value||'?꾩껜', status=['?듬??湲?,'HOT','梨꾪깮','NEW','?닿껐以?];
   $$('#qaList .v25-card').forEach(c=>{
     let ok=(a==='?꾩껜'||(status.includes(a)?c.dataset.status===a:c.dataset.cat===a))&&(!q||c.dataset.text.includes(q));
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
       const wa=a.dataset.status==='?듬??湲??0:1;
       const wb=b.dataset.status==='?듬??湲??0:1;
       return wa-wb;
     }
     return 0;
   });
   cards.forEach(c=>list.appendChild(c));
   say(type==='votes'?'?멸린?쒖쑝濡??뺣젹?덉뒿?덈떎.':'誘몄콈???듬? 吏덈Ц ?곗꽑 ?뺣젹?덉뒿?덈떎.','?봼');
 }
 window.showQADetail=function(id){let q=qa.find(x=>x.id===id); if(!q)return; $('#v25QaHub').style.display='none'; $('#qaDetailView').style.display='block'; $('#qaDetailContent').innerHTML=`<div class="v25-detail-card"><span class="v25-tag">${q.cat}</span><div class="v25-detail-title">${esc(q.title)}</div><div class="v25-detail-body">${esc(q.body)}</div><div class="v25-meta"><span>?뫀 ${q.author}</span><span>?몟 異붿쿇 ${q.votes}</span><span>?뮠 ?듬? ${q.answers}</span></div></div><div class="v25-answer ok"><span class="v25-tag ok">??梨꾪깮 ?듬?</span><div style="font-size:13px;color:var(--text-2);line-height:1.8;margin-top:10px">援щℓ?낅Т洹쒖젙怨?VAATZ 泥섎━ 寃쏀뿕??湲곗??쇰줈 蹂대㈃, ?곗꽑 ?ш났怨??먮뒗 李몄뿬?낆껜 ?뺣?瑜?寃?좏븯怨?湲닿툒?굿룹쟻寃⑹뾽泥?遺議깆씠 紐낇솗?????섏쓽怨꾩빟 ?꾪솚??寃?좏븯???먮쫫???곸젅?⑸땲??</div><div style="display:flex;gap:6px;margin-top:10px"><button class="v25-btn">?몟 異붿쿇 47</button><button class="v25-btn saved-answer-btn" onclick="saveAnswerToMemo(this)">狩?硫붾え ???/button></div></div>`}
 window.backToQAList=()=>{$('#v25QaHub').style.display='block';$('#qaDetailView').style.display='none'}; window.submitAnswer=()=>{let t=$('#answerTextarea'); if(!t?.value.trim())return say('?듬? ?댁슜???낅젰?댁＜?몄슂.','?좑툘'); t.value=''; say('?듬????깅줉?섏뿀?듬땲??','??)};
 function folderTree(fn){return `<div class="v25-folder-tree"><div class="v25-folder-head">?듯빀 吏???대뜑</div>${folders.map(f=>`<button class="v25-folder ${f[0]===activeFolder?'on':''}" onclick="${fn}('${f[0]}',this)"><span>${f[1]} ${f[2]}</span><span class="cnt">${countFolder(f[0])}</span></button>`).join('')}</div>`}
 function countFolder(id){return id==='all'?docs.length:docs.filter(d=>d.folder===id).length}
 function renderRows(sel='#v25Rows'){let q=($('#v25Search')?.value||'').toLowerCase(), sec=$('#v25Sec')?.value||'', mode=$('#v25Mode')?.value||'', status=$('#v25Status')?.value||''; let list=docs.filter(d=>(activeFolder==='all'||d.folder===activeFolder)&&(!q||(d.name+d.team+d.owner).toLowerCase().includes(q))&&(!sec||d.sec===sec)&&(!mode||d.modes.includes(mode))&&(!status||d.status===status)); let body=$(sel); if(!body)return; body.innerHTML=list.map(d=>`<tr><td><input type="checkbox" class="check-lg v25-check" data-id="${d.id}"></td><td><div class="v25-doc-title">${esc(d.name)}</div><div class="v25-doc-path">/${folders.find(f=>f[0]===d.folder)?.[2]} 쨌 ${d.chunks} chunks</div></td><td>${d.team}</td><td>${d.type}</td><td>${secPill(d.sec)}</td><td><div class="v25-mode-set">${modeBtns(d)}</div></td><td>${d.ver}</td><td>${statPill(d.status)}</td><td><button class="v25-btn" onclick="say('?곸꽭 ?⑤꼸???댁뿀?듬땲??','?뱴')">?곸꽭</button></td></tr>`).join('')||`<tr><td colspan="9" style="text-align:center;padding:30px;color:var(--text-4)">寃??寃곌낵媛 ?놁뒿?덈떎.</td></tr>`}
 window.v25SelectFolder=(id,btn)=>{activeFolder=id; $$('.v25-folder').forEach(b=>b.classList.remove('on'));btn?.classList.add('on');renderRows()}; window.v25Filter=()=>renderRows(); window.v25All=chk=>$$('.v25-check').forEach(c=>c.checked=chk.checked); window.v25BulkMode=m=>{let ids=$$('.v25-check:checked').map(c=>c.dataset.id); if(!ids.length)return say('癒쇱? 臾몄꽌瑜??좏깮?댁＜?몄슂.','?좑툘'); ids.forEach(id=>{let d=docs.find(x=>x.id===id); if(d&&!d.modes.includes(m))d.modes.push(m)}); renderRows(); say(`${ids.length}媛?臾몄꽌瑜?${m}??異붽??덉뒿?덈떎.`,'?㎛')}
 function renderFinalList(){let el=$('#p-list'); if(!el)return; el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">理쒖쥌 由ъ뒪??쨌 ?대뜑 湲곕컲 吏??愿由?/div><div class="v23-title-sub">?뚯씪??留롮븘???대뜑, 寃?? ?꾪꽣, ???紐⑤뱶 諛섏쁺?쇰줈 愿由ы빀?덈떎. ?섎굹???뚯씪? ?щ윭 AI 紐⑤뱶???낅┰?곸쑝濡??곌껐?????덉뒿?덈떎.</div></div><div class="v23-actions"><button class="v25-btn">CSV ?대낫?닿린</button><button class="v25-btn primary">竊??섎룞 ?깅줉</button></div></div><div class="v25-folder-layout">${folderTree('v25SelectFolder')}<div class="v25-manager"><div class="v25-manager-h"><div><div class="v25-manager-title">理쒖쥌 吏??紐⑸줉</div><div class="v25-manager-sub">紐⑤뱶 移⑹쓣 ?대┃?섎㈃ 臾몄꽌蹂?寃??紐⑤뱶瑜?ON/OFF ?⑸땲??</div></div><button class="v25-btn primary" onclick="say('蹂寃쎈맂 紐⑤뱶 留ㅽ븨 ?뺤콉????ν뻽?듬땲??','??)">蹂寃????/button></div><div class="v25-tools"><label style="font-size:11px;color:var(--text-3);display:flex;gap:6px"><input type="checkbox" class="check-lg" onchange="v25All(this)"> ?꾩껜</label><div class="v25-search"><span>?뵇</span><input id="v25Search" placeholder="臾몄꽌紐? ?, ?대떦??寃?? oninput="v25Filter()"></div><select class="v25-select" id="v25Sec" onchange="v25Filter()"><option value="">蹂댁븞 ?꾩껜</option>${secs.map(s=>`<option>${s}</option>`).join('')}</select><select class="v25-select" id="v25Mode" onchange="v25Filter()"><option value="">紐⑤뱶 ?꾩껜</option>${modes.map(m=>`<option>${m}</option>`).join('')}</select><select class="v25-select" id="v25Status" onchange="v25Filter()"><option value="">?곹깭 ?꾩껜</option><option>AI 寃??諛섏쁺?꾨즺</option><option>?묒꽦쨌蹂댁셿以?/option><option>?깅줉 ?붿껌??/option><option>蹂댁셿 ?붿껌</option></select></div><div class="v25-bulk"><b>????묒뾽</b><button class="v25-btn" onclick="v25BulkMode('?앹궛?먯옱 紐⑤뱶')">?앹궛?먯옱 異붽?</button><button class="v25-btn" onclick="v25BulkMode('?쇰컲?먯옱 紐⑤뱶')">?쇰컲?먯옱 異붽?</button><button class="v25-btn" onclick="v25BulkMode('?먭?紐⑤뱶')">?먭? 異붽?</button><span style="margin-left:auto">紐⑤뱶蹂?蹂듭닔 ?곌껐 媛??/span></div><div class="v25-table-wrap"><table class="v25-table"><thead><tr><th></th><th>臾몄꽌</th><th>?</th><th>?좏삎</th><th>蹂댁븞</th><th>AI 紐⑤뱶</th><th>踰꾩쟾</th><th>?곹깭</th><th>?묒뾽</th></tr></thead><tbody id="v25Rows"></tbody></table></div></div></div>`;activeFolder='all';renderRows()}
 function renderMode(){let el=$('#p-mode'); if(!el)return; el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">AI 紐⑤뱶 쨌 ??⑸웾 DB ?댁쁺 肄섏넄</div><div class="v23-title-sub">紐⑤뱶蹂꾨줈 寃??媛?ν븳 ?대뜑? ?곗씠???뚯뒪瑜??낅┰ ?댁쁺?⑸땲?? ?쒕옒洹몃낫???대뜑쨌寃?됀룸??됱꽑?씲룰퇋移?湲곕컲 愿由щ? ?곗꽑?⑸땲??</div></div><button class="v25-btn primary" onclick="say('AI 紐⑤뱶 ?뺤콉????ν뻽?듬땲??','?㎛')">?뺤콉 ???/button></div><div class="v25-mode-work"><div class="v25-mode-side"><div class="v25-folder-head">AI 紐⑤뱶</div>${modes.map((m,i)=>`<button class="v25-mode-tab ${m===activeMode?'on':''}" onclick="selectMode('${m}',this)"><span>${i===0?'?뙋':i===1?'?룺':i===2?'?벀':'?뮥'} ${m}</span><span>${docs.filter(d=>d.modes.includes(m)).length}</span></button>`).join('')}<div class="v25-rule" style="margin-top:10px"><div class="v25-rule-title">?댁쁺 ?먯튃</div><div style="font-size:11px;color:var(--text-3);line-height:1.65">???뚯씪? ?щ윭 紐⑤뱶???ㅼ뼱媛????덇퀬, 媛?紐⑤뱶???낅┰ ?됱씤쨌沅뚰븳쨌諛곗튂 ?뺤콉??媛吏묐땲??</div></div></div><div><div class="v25-kpis" id="modeKpi"></div><div class="v25-rule"><div class="v25-rule-title" id="modeRuleTitle">${activeMode} 洹쒖튃</div><div class="v25-rule-row"><span>?뺥삎 DB ?먮룞 諛섏쁺</span><div class="v25-toggle on" onclick="this.classList.toggle('on')"></div></div><div class="v25-rule-row"><span>鍮꾩젙??臾몄꽌 ?뱀씤 ???꾨낫 ?깅줉</span><div class="v25-toggle on" onclick="this.classList.toggle('on')"></div></div><div class="v25-rule-row"><span>吏???ъ슜??臾몄꽌 寃???덉슜</span><div class="v25-toggle ${activeMode==='?먭?紐⑤뱶'?'':'on'}" onclick="this.classList.toggle('on')"></div></div></div><div class="v25-manager"><div class="v25-manager-h"><div><div class="v25-manager-title" id="modeListTitle">${activeMode} ?곌껐 ?곗씠??/div><div class="v25-manager-sub">?꾩옱 紐⑤뱶???곌껐???곗씠?곕쭔 ?쒖떆?⑸땲?? ?대뜑 ?⑥쐞 ?쇨큵 ?곌껐??吏?먰빀?덈떎.</div></div><button class="v25-btn warn" onclick="say('?좏깮 ?대뜑瑜??꾩옱 紐⑤뱶???쇨큵 ?곌껐?덉뒿?덈떎.','?㎛')">?대뜑 ?쇨큵 ?곌껐</button></div><div class="v25-tools"><div class="v25-search"><span>?뵇</span><input id="modeSearch" placeholder="?꾩옱 紐⑤뱶 ??寃?? oninput="renderModeRows()"></div><select class="v25-select" id="modeFolder" onchange="renderModeRows()"><option value="">?대뜑 ?꾩껜</option>${folders.slice(1).map(f=>`<option value="${f[0]}">${f[2]}</option>`).join('')}</select></div><div class="v25-table-wrap"><table class="v25-table"><thead><tr><th>?뚯뒪</th><th>?대뜑</th><th>?좏삎</th><th>蹂댁븞</th><th>?곌껐 紐⑤뱶</th><th>?곹깭</th></tr></thead><tbody id="modeRows"></tbody></table></div></div></div></div>`;renderModeRows();updateModeKpi()}
 window.selectMode=(m,btn)=>{activeMode=m;$$('.v25-mode-tab').forEach(b=>b.classList.remove('on'));btn?.classList.add('on');$('#modeRuleTitle')&&($('#modeRuleTitle').textContent=m+' 洹쒖튃');$('#modeListTitle')&&($('#modeListTitle').textContent=m+' ?곌껐 ?곗씠??);renderModeRows();updateModeKpi()}; function updateModeKpi(){let l=docs.filter(d=>d.modes.includes(activeMode));$('#modeKpi')&&($('#modeKpi').innerHTML=`<div class="v25-kpi"><div class="v">${l.length}</div><div class="l">?곌껐 ?뚯뒪</div></div><div class="v25-kpi"><div class="v">${new Set(l.map(d=>d.folder)).size}</div><div class="l">?곌껐 ?대뜑</div></div><div class="v25-kpi"><div class="v">${l.filter(d=>d.status==='AI 寃??諛섏쁺?꾨즺').length}</div><div class="l">?됱씤 ?쒖꽦</div></div><div class="v25-kpi"><div class="v">${l.reduce((a,d)=>a+d.chunks,0).toLocaleString()}</div><div class="l">Chunks</div></div>`)}
 window.renderModeRows=()=>{let q=($('#modeSearch')?.value||'').toLowerCase(), f=$('#modeFolder')?.value||'';let l=docs.filter(d=>d.modes.includes(activeMode)&&(!q||(d.name+d.team).toLowerCase().includes(q))&&(!f||d.folder===f));$('#modeRows')&&($('#modeRows').innerHTML=l.map(d=>`<tr><td><div class="v25-doc-title">${esc(d.name)}</div><div class="v25-doc-path">${d.team} 쨌 ${d.chunks} chunks</div></td><td>${folders.find(x=>x[0]===d.folder)?.[1]} ${folders.find(x=>x[0]===d.folder)?.[2]}</td><td>${d.type}</td><td>${secPill(d.sec)}</td><td><div class="v25-mode-set">${modeBtns(d)}</div></td><td>${statPill(d.status)}</td></tr>`).join('')||`<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--text-4)">?곌껐 ?곗씠?곌? ?놁뒿?덈떎.</td></tr>`)};
 function renderDatamart(){let el=$('#p-datamart');if(!el)return;let sources=[['VAATZ ?낆껜쨌?덈ぉ 留덉뒪??,'?뺤긽','1.42M rows','05:10','?듯빀쨌?앹궛'],['Autopedia ?⑹뼱 DB','?뺤긽','4,832 terms','06:00','?듯빀쨌?쇰컲'],['?먭? DB','遺遺??ㅽ뙣','324K rows','07:30','?먭?'],['? 遺臾??덉쭏 DB','?뺤긽','8 sources','04:20','?앹궛'],['?쇰컲?먯옱 MRO DB','?뺤긽','92K rows','05:40','?쇰컲']];el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">?뺥삎 ?곗씠?곕쭏??I/F 紐⑤땲?곕쭅</div><div class="v23-title-sub">?곗씠?곌? ?대뵒???ㅼ뼱? ?대뼡 AI 紐⑤뱶??諛섏쁺?섎뒗吏 ?쒕늿???뺤씤?⑸땲?? ?ㅽ뙣 吏?먯? 諛붾줈 議곗튂?????덇쾶 ?쒖떆?⑸땲??</div></div><button class="v25-btn primary" onclick="say('?꾩껜 I/F ?곹깭瑜??ъ젏寃?덉뒿?덈떎.','?봽')">?꾩껜 ?ъ젏寃</button></div><div class="v25-mart-flow">${['Source','Data Mart','Transform','Index','AI Mode'].map((t,i)=>`<div class="v25-mart-step"><div class="num">${i+1}</div><div class="t">${t}</div><div class="d">${['VAATZ DB, Autopedia, ? 遺臾??쒖뒪??,'??諛곗튂 ?섏쭛쨌?뺥빀??寃利?,'RAG 寃?됱슜 ?ㅽ궎留?蹂??,'紐⑤뱶蹂?Vector / SQL Index 媛깆떊','沅뚰븳怨?紐⑤뱶 ?뺤콉?쇰줈 寃??][i]}</div></div>`).join('')}</div><div class="v25-mart-grid"><div>${sources.map((s,i)=>`<div class="v25-source ${i===0?'on':''}" onclick="selectMart('${esc(s[0])}',this)"><div class="v25-source-title"><span>${i===0?'?뼢截?:i===1?'?뱰':i===2?'?뮥':i===3?'?룺':'?벀'} ${s[0]}</span>${s[1]==='?뺤긽'?pill('green','?뺤긽'):pill('amber','?뺤씤')}</div><div class="v25-source-meta">${s[2]} 쨌 留덉?留?${s[3]} 쨌 ${s[4]}</div></div>`).join('')}</div><div class="v25-detail-panel" id="martDetail"></div></div>`;renderMart('VAATZ ?낆껜쨌?덈ぉ 留덉뒪??)}
 function renderMart(name){let ok=!name.includes('?먭?');$('#martDetail')&&($('#martDetail').innerHTML=`<div class="v23-panel-title" style="font-size:15px;margin-bottom:10px">${esc(name)} ?곸꽭</div><div class="v25-kpis"><div class="v25-kpi"><div class="v">${ok?'100':'92'}%</div><div class="l">?깃났瑜?/div></div><div class="v25-kpi"><div class="v">${ok?'0':'12'}</div><div class="l">?ㅻ쪟 row</div></div><div class="v25-kpi"><div class="v">${ok?'05:10':'07:30'}</div><div class="l">留덉?留?醫낅즺</div></div><div class="v25-kpi"><div class="v">${ok?'2':'1'}</div><div class="l">?곌껐 紐⑤뱶</div></div></div>${['?섏쭛','?뺥빀??寃利?,'RAG Index 諛섏쁺'].map((x,i)=>`<div class="v25-line"><div>${x}</div><div><div class="v25-progress ${!ok&&i===1?'warn':i===2?'warn':''}"><span style="width:${i===2?'68':(!ok&&i===1?'92':'100')}%"></span></div></div><span class="v23-pill ${(!ok&&i===1)||i===2?'amber':'green'}">${i===2?'吏꾪뻾以?:(!ok&&i===1?'遺遺??ㅽ뙣':'?꾨즺')}</span></div>`).join('')}${ok?'':`<div style="margin-top:12px;background:var(--a-dim);border:1px solid rgba(194,155,66,.25);border-radius:12px;padding:12px;font-size:12px;color:var(--a);line-height:1.6"><b>議곗튂 ?꾩슂:</b> ?먭? ?뚯씠釉?12媛?row?먯꽌 ?섏쑉 湲곗????꾨씫??媛먯??섏뿀?듬땲??</div>`}`)} window.selectMart=(n,card)=>{$$('.v25-source').forEach(c=>c.classList.remove('on'));card?.classList.add('on');renderMart(n)};
 function renderAdminV25(){renderFinalList();renderMode();renderDatamart()}
 window.openTeamFolderModal=function(team){activeTeam=team||activeTeam;activeTeamFolder='all';let m=$('#teamFolderModal');if(!m)return;m.innerHTML=`<div class="large-box" style="width:min(1220px,96vw)"><div class="large-hd"><div><div class="large-title">?뱚 ${activeTeam} 臾몄꽌??/div><div class="large-sub">?대뜑蹂꾨줈 臾몄꽌瑜?遺꾨쪟?섍퀬, ?좏깮 ??ぉ??System Admin 理쒖쥌 ?뱀씤?쇰줈 ?붿껌?⑸땲??</div></div><button class="large-close" onclick="closeTeamFolderModal()">??/button></div><div class="large-toolbar"><label style="font-size:11px;color:var(--text-4);display:flex;gap:6px"><input type="checkbox" class="check-lg" onchange="toggleTeamDocAll(this)"> ?꾩껜 ?좏깮</label><div class="large-search"><span>?뵇</span><input id="teamDocSearch" placeholder="臾몄꽌紐? ?대떦?? 紐⑤뱶, 蹂댁븞?깃툒 寃?? oninput="renderTeamDocRows()"></div><select class="frm-i frm-sel" id="teamDocStatusFilter" style="width:135px" onchange="renderTeamDocRows()"><option value="">?꾩껜 ?곹깭</option><option>?묒꽦쨌蹂댁셿以?/option><option>?깅줉 ?붿껌??/option><option>蹂댁셿 ?붿껌</option><option>AI 寃??諛섏쁺?꾨즺</option></select><button class="v25-btn primary" onclick="submitSelectedTeamDocs()">?? ?좏깮 ?깅줉 ?붿껌??/button></div><div class="large-body"><div class="v25-folder-layout"><div class="v25-folder-tree"><div class="v25-folder-head">${activeTeam} ?대뜑</div>${folders.map(f=>`<button class="v25-folder ${f[0]==='all'?'on':''}" onclick="selectTeamFolder('${f[0]}',this)"><span>${f[1]} ${f[2]}</span><span class="cnt">${f[0]==='all'?docs.filter(d=>d.team===activeTeam).length:docs.filter(d=>d.team===activeTeam&&d.folder===f[0]).length}</span></button>`).join('')}</div><div style="overflow:auto"><table class="large-table"><thead><tr><th></th><th>臾몄꽌紐?/th><th>?좏삎</th><th>蹂댁븞</th><th>AI 紐⑤뱶</th><th>踰꾩쟾</th><th>?대떦??/th><th>?곹깭</th><th>?묒뾽</th></tr></thead><tbody id="teamDocRows"></tbody></table></div></div></div></div>`;m.classList.add('sh');renderTeamRows()}
 function renderTeamRows(){let q=($('#teamDocSearch')?.value||'').toLowerCase(),st=$('#teamDocStatusFilter')?.value||'';let l=docs.filter(d=>d.team===activeTeam&&(activeTeamFolder==='all'||d.folder===activeTeamFolder)&&(!q||(d.name+d.owner+d.sec+d.modes.join(' ')).toLowerCase().includes(q))&&(!st||d.status===st));$('#teamDocRows')&&($('#teamDocRows').innerHTML=l.map(d=>`<tr><td><input type="checkbox" class="check-lg team-doc-check" data-id="${d.id}"></td><td><div class="v25-doc-title">${esc(d.name)}</div><div class="v25-doc-path">/${folders.find(f=>f[0]===d.folder)?.[2]} 쨌 ${d.chunks} chunks</div></td><td>${d.type}</td><td>${secPill(d.sec)}</td><td><div class="v25-mode-set">${modeBtns(d)}</div></td><td>${d.ver}</td><td>${d.owner}</td><td>${statPill(d.status)}</td><td><button class="v25-btn primary" onclick="requestOneTeamDoc('${d.id}')">?깅줉 ?붿껌??/button></td></tr>`).join(''))}
 window.selectTeamFolder=(id,btn)=>{activeTeamFolder=id;$$('#teamFolderModal .v25-folder').forEach(b=>b.classList.remove('on'));btn?.classList.add('on');renderTeamRows()};window.renderTeamDocRows=renderTeamRows;window.toggleTeamDocAll=chk=>$$('#teamFolderModal .team-doc-check').forEach(c=>c.checked=chk.checked);window.submitSelectedTeamDocs=()=>{let ids=$$('#teamFolderModal .team-doc-check:checked').map(c=>c.dataset.id);if(!ids.length)return say('?깅줉 ?붿껌?⑦븷 臾몄꽌瑜??좏깮?댁＜?몄슂.','?좑툘');ids.forEach(id=>{let d=docs.find(x=>x.id===id);if(d)d.status='?깅줉 ?붿껌??});renderTeamRows();say(`${ids.length}嫄댁쓣 理쒖쥌 ?뱀씤 ?湲곗뿴濡?蹂대깉?듬땲??`,'??')};window.requestOneTeamDoc=id=>{let d=docs.find(x=>x.id===id);if(d)d.status='?깅줉 ?붿껌??;renderTeamRows();say('?깅줉 ?붿껌???꾨즺','??')};
 function memoModal(){if($('#v25MemoModal'))return;document.body.insertAdjacentHTML('beforeend',`<div class="v25-memo-modal" id="v25MemoModal" onclick="if(event.target===this)closeMemoModal()"><div class="v25-memo-box"><div class="v25-memo-list"><div class="v25-memo-h"><span>?뱷 ??硫붾え</span><button class="v25-btn primary" onclick="newMemo()">竊?/button></div><div class="v25-memo-items"><div class="v25-memo-item on"><div class="v25-memo-title">?꾨젰?곸엯李??듭떖 ?뺣━</div><div class="v25-memo-meta">?ㅻ뒛 쨌 AI ?듬? ???/div></div><div class="v25-memo-item"><div class="v25-memo-title">?섏쓽怨꾩빟 泥댄겕由ъ뒪??/div><div class="v25-memo-meta">?댁젣 쨌 而ㅻ??덊떚 ?듬?</div></div></div></div><div class="v25-memo-editor"><div class="v25-memo-editor-h"><input id="v25MemoTitle" value="?꾨젰?곸엯李??듭떖 ?뺣━"><button class="large-close" onclick="closeMemoModal()">??/button></div><textarea id="v25MemoBody">???꾨젰?곸엯李? ?쒖쐞留?怨듦컻\n??寃쎈ℓ?낆같: 理쒖?媛 ?ㅼ떆媛?怨듦컻\n??5遺????쒖텧 ???먮룞 ?곗옣\n??3?ㅽ? ?댁긽 ?낆껜 李몄뿬 媛??/textarea><div class="v25-memo-foot"><span style="font-size:11px;color:var(--text-4)">AI ?듬?, ?먮Ц ?섏씠?쇱씠?? 而ㅻ??덊떚 ?듬?????ν븷 ???덉뒿?덈떎.</span><button class="v25-btn primary" onclick="saveMemo()">???/button></div></div></div></div>`)} window.openMemoModal=()=>{memoModal();$('#v25MemoModal').classList.add('sh')};window.closeMemoModal=()=>$('#v25MemoModal')?.classList.remove('sh');window.newMemo=()=>{$('#v25MemoTitle').value='??硫붾え';$('#v25MemoBody').value=''};window.saveMemo=()=>say('硫붾え媛 ??λ릺?덉뒿?덈떎.','??);window.saveAnswerToMemo=btn=>{openMemoModal();$('#v25MemoTitle').value='??ν븳 而ㅻ??덊떚 ?듬?';$('#v25MemoBody').value=btn.closest('.v25-answer')?.innerText||'??ν븳 ?듬?';say('?듬???硫붾え?μ뿉 遺덈윭?붿뒿?덈떎.','狩?)};
 function improveCompanion(){let p=$('#companionCard .companion-panel'); if(p){p.classList.add('v25-panel');p.innerHTML=`<button class="companion-action" onclick="openMemoModal()">?뱷 ??硫붾え</button><button class="companion-action" onclick="say('??ν븳 ?듬??⑥쓣 ?댁뿀?듬땲??','狩?)">狩???λ떟蹂</button><button class="companion-action" onclick="openComm('qa')">?뮕 而ㅻ??덊떚</button><button class="companion-action" onclick="openMypage()">?뫀 留덉씠?섏씠吏</button><button class="companion-action" onclick="openComm('char')">?㎏ 罹먮┃??/button><button class="companion-action" onclick="openHistory()">?뱶 湲곕줉??/button><div class="companion-admin-divider">Admin 沅뚰븳 ?ъ슜???꾩슜</div><button class="companion-action" onclick="oa();openAdminTab('p-final')">??理쒖쥌 ?뱀씤</button><button class="companion-action" onclick="oa();openAdminTab('p-mode')">?㎛ 紐⑤뱶愿由?/button>`}let main=$('#companionCard .companion-main'); if(main){main.classList.add('general'); let msg=$('#companionMsg'); if(msg)msg.textContent='硫붾え쨌而ㅻ??덊떚쨌罹먮┃?곕? 鍮좊Ⅴ寃??댁뼱蹂댁꽭??'}}
 const oldOpenComm=window.openComm; window.openComm=function(tab){oldOpenComm&&oldOpenComm(tab); if(tab==='qa'||!tab)renderQna()}; const oldOpenAdminTab=window.openAdminTab; window.openAdminTab=function(id){oldOpenAdminTab&&oldOpenAdminTab(id); setTimeout(()=>{renderAdminV25(); let b=[...$$('.atb')].find(x=>x.getAttribute('onclick')?.includes(id)); window.at&&window.at(b,id)},0)}; const oldSubmitQuestion=window.submitQuestion; window.submitQuestion=function(){let title=$('#qTitleInput')?.value.trim(),body=$('#qBodyInput')?.value.trim(),cat=$('#qCatSel')?.value||'?쇰컲'; if(!title||!body){oldSubmitQuestion&&oldSubmitQuestion();return}qa.unshift({id:Date.now(),cat,status:'NEW',votes:0,answers:0,title,body,author:'?꾨줈?먯뼱?덉뼱濡?,time:'諛⑷툑'});$('#qWriteM')?.classList.remove('sh');renderQna();say('吏덈Ц???깅줉?섏뿀?듬땲??','??)};
 function boot(){let nav=$('.sb-nav'); if(nav&&!$('#v25CommunityEntry'))nav.insertAdjacentHTML('beforeend','<button class="sb-i v25-community-entry" id="v25CommunityEntry" onclick="openComm(\'qa\')"><span class="sb-ic">?뮕</span>援щℓ蹂몃? 吏?앹빱裕ㅻ땲??/button>');let tb=$('.tb-r'); if(tb&&!$('#v25TopCommunityBtn'))tb.insertAdjacentHTML('afterbegin','<button class="tb-b" id="v25TopCommunityBtn" onclick="openComm(\'qa\')">?뮕 吏?앹빱裕ㅻ땲??/button>');renderQna();renderAdminV25();improveCompanion();memoModal();$$('.ai-ac').forEach(ac=>{if(!ac.querySelector('.saved-answer-btn'))ac.insertAdjacentHTML('beforeend','<button class="ai-a saved-answer-btn" onclick="openMemoModal()">狩?硫붾え ???/button>')})}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(boot,80));else setTimeout(boot,80);
})();



(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const modes=['?듯빀紐⑤뱶','?앹궛?먯옱 紐⑤뱶','?쇰컲?먯옱 紐⑤뱶','?먭?紐⑤뱶'];
  const finalDocs=[
    {id:'F-01',name:'?댁쇅踰뺤씤 援щℓ ?뱀씤 ?꾨줈?몄뒪.docx',team:'援щℓ?꾨왂?',type:'DOCX',sec:'吏???ъ슜??,folder:'援щℓ洹쒖젙쨌?쒕룄',modes:['?듯빀紐⑤뱶','?앹궛?먯옱 紐⑤뱶']},
    {id:'F-02',name:'?꾨룞??遺???④? 踰ㅼ튂留덊겕.xlsx',team:'PT?쒖뼱遺?덇뎄留ㅽ?',type:'XLSX',sec:'由щ뜑 ?꾩슜',folder:'?먭?쨌?④?',modes:['?앹궛?먯옱 紐⑤뱶','?먭?紐⑤뱶']},
    {id:'F-03',name:'諛섎룄泥??섏텧洹쒖젣 援??蹂??꾪솴.xlsx',team:'諛섎룄泥닿뎄留ㅽ?',type:'XLSX',sec:'吏???ъ슜??,folder:'援щℓ洹쒖젙쨌?쒕룄',modes:['?앹궛?먯옱 紐⑤뱶']},
    {id:'F-04',name:'?쇰컲?먯옱 MRO 援щℓ 媛?대뱶.pdf',team:'?쇰컲?먯옱援щℓ?',type:'PDF',sec:'?쇰컲 怨듦컻',folder:'?쇰컲?먯옱쨌MRO',modes:['?듯빀紐⑤뱶','?쇰컲?먯옱 紐⑤뱶']}
  ];
  function pill(c,t){return `<span class="v23-pill ${c}">${t}</span>`}
  function secPill(sec){return sec==='由щ뜑 ?꾩슜'?pill('red',sec):sec==='吏???ъ슜???pill('violet',sec):pill('green',sec)}
  function modeButtons(d){return modes.map(m=>`<button class="v25-mode ${m.includes('?앹궛')?'prod':m.includes('?쇰컲')?'gen':m.includes('?먭?')?'cost':''} ${d.modes.includes(m)?'on':''}" onclick="toggleFinalMode('${d.id}','${m}',this)">${m.replace(' 紐⑤뱶','')}</button>`).join('')}
  window.toggleFinalMode=function(id,m,btn){const d=finalDocs.find(x=>x.id===id); if(!d)return; if(d.modes.includes(m)){d.modes=d.modes.filter(x=>x!==m); btn?.classList.remove('on'); window.say&&say(`${d.name}?먯꽌 ${m} ?곌껐???댁젣?덉뒿?덈떎.`,'?㎛')}else{d.modes.push(m); btn?.classList.add('on'); window.say&&say(`${d.name}??${m}???곌껐?덉뒿?덈떎.`,'?㎛')}};
  window.previewV25Final=function(id){const d=finalDocs.find(x=>x.id===id); const p=$('#v25FinalPreview'); if(!d||!p)return; p.innerHTML=`<h4>${esc(d.name)}</h4><p><b>?붿껌?:</b> ${esc(d.team)} 쨌 <b>蹂댁븞:</b> ${esc(d.sec)}</p><p>?뱀씤 ??<span class="preview-highlight">${d.modes.join(', ')}</span>???낅┰?곸쑝濡?諛섏쁺?⑸땲??</p><p>以묐났 臾몄꽌 寃?? ?좎궗??0.38 ?댄븯, ?좉퇋 ?깅줉 媛?? ?덉긽 泥?겕 ??214媛?</p>`};
  window.approveV25Final=function(btn){const card=btn.closest('.v25-final-card'); if(card){card.style.opacity='.38';card.style.pointerEvents='none'} window.say&&say('理쒖쥌 ?뱀씤 ?꾨즺: ?좏깮??紐⑤뱶蹂?RAG Index???낅┰ 諛섏쁺?⑸땲??','??)};
  window.rejectV25Final=function(btn){const card=btn.closest('.v25-final-card'); if(card){card.style.opacity='.38';card.style.pointerEvents='none'} window.say&&say('蹂댁셿 ?붿껌 泥섎━?덉뒿?덈떎. ? Admin?먭쾶 蹂댁셿 ?붿껌 ?뚮┝??蹂대깉?듬땲??','?⑼툘')};
  function renderFinal(){const el=$('#p-final'); if(!el)return; el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">System Admin 理쒖쥌 ?뱀씤</div><div class="v23-title-sub">? Admin???깅줉 ?붿껌?⑦븳 臾몄꽌瑜?寃?좏빀?덈떎. ?ш린???듯빀 ?대뜑, 蹂댁븞?깃툒, 洹몃━怨??щ윭 AI 紐⑤뱶 ?곌껐 ?щ?瑜??낅┰?곸쑝濡??뺤젙?⑸땲??</div></div><div class="v23-actions"><button class="v25-btn warn">蹂댁셿 ?붿껌 ?ъ쑀 ?쒗뵆由?/button><button class="v25-btn primary" onclick="say('?붾㈃???뱀씤 ??곸쓣 ?쇨큵 ?뱀씤?덉뒿?덈떎.','??)">?붾㈃ ???쇨큵 ?뱀씤</button></div></div><div style="display:grid;grid-template-columns:1.25fr .85fr;gap:12px"><div class="v25-list">${finalDocs.map(d=>`<div class="v25-answer v25-final-card"><div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start"><div><div class="v25-doc-title" style="font-size:14px">${esc(d.name)}</div><div class="v25-doc-path">${esc(d.team)} 쨌 ${d.type} 쨌 ?깅줉 ?붿껌??쨌 ?덉긽 214 chunks</div></div>${secPill(d.sec)}</div><div class="v25-tools" style="padding:10px 0 0;border:0;background:transparent"><select class="v25-select"><option>${d.folder}</option><option>援щℓ洹쒖젙쨌?쒕룄</option><option>?낆같愿由?/option><option>VAATZ 留ㅻ돱??/option><option>?덉쭏 5?ㅽ?</option><option>?먭?쨌?④?</option><option>?쇰컲?먯옱쨌MRO</option></select><select class="v25-select"><option>${d.sec}</option><option>由щ뜑 ?꾩슜</option><option>?쇰컲 怨듦컻</option><option>吏???ъ슜??/option></select></div><div style="margin-top:10px"><div style="font-size:10px;color:var(--text-4);font-weight:900;text-transform:uppercase;letter-spacing:.7px;margin-bottom:6px">AI 紐⑤뱶 ?낅┰ 諛섏쁺</div><div class="v25-mode-set">${modeButtons(d)}</div></div><div style="display:flex;gap:6px;justify-content:flex-end;margin-top:12px"><button class="v25-btn" onclick="previewV25Final('${d.id}')">?먮Ц 蹂닿린</button><button class="v25-btn" onclick="rejectV25Final(this)">蹂댁셿 ?붿껌</button><button class="v25-btn primary" onclick="approveV25Final(this)">理쒖쥌 ?뱀씤</button></div></div>`).join('')}</div><div class="v25-detail-panel"><div class="v23-panel-title" style="font-size:15px;margin-bottom:10px">?뵊 ?뱀씤 誘몃━蹂닿린</div><div class="preview-doc-page" id="v25FinalPreview"><h4>臾몄꽌 誘몃━蹂닿린</h4><p>?쇱そ 臾몄꽌???먮Ц 蹂닿린瑜??대┃?섎㈃ ?붿빟, ?섏씠?쇱씠?? 以묐났 臾몄꽌 寃?? 紐⑤뱶 諛섏쁺 踰붿쐞媛 ?쒖떆?⑸땲??</p><p>以묒슂: ?섎굹??臾몄꽌???щ윭 AI 紐⑤뱶???ㅼ뼱媛????덉쑝硫? 媛?紐⑤뱶???됱씤? ?낅┰?곸쑝濡?媛깆떊?⑸땲??</p></div><div class="mode-note">Tip. ?먭?紐⑤뱶? 由щ뜑 ?꾩슜 臾몄꽌???뱀씤 濡쒓렇? ?묎렐 濡쒓렇瑜???湲멸쾶 蹂닿??섎뒗 ?뺤콉???곸슜?????덉뒿?덈떎.</div></div></div>`}
  const old=window.openAdminTab; window.openAdminTab=function(id){old&&old(id); setTimeout(()=>{if(id==='p-final')renderFinal()},20)};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(renderFinal,140));else setTimeout(renderFinal,140);
})();



<!-- ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??     VAATZ AI v26 ??Usability, Community, Mode, Data Ops Refinement
     ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??-->
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
.v26-control-group{display:flex;align-items:center;gap:6px;min-width:0}.v26-control-label{font-size:10px;font-weight:900;letter-spacing:.7px;text-transform:uppercase;color:var(--text-4);white-space:nowrap}.v26-chipset{display:flex;align-items:center;gap:4px;flex-wrap:wrap}.v26-mode-btn,.v26-size-btn{border:1px solid var(--border-1);background:var(--bg-3);color:var(--text-3);border-radius:8px;padding:6px 10px;font-size:12px;font-weight:800;cursor:pointer;font-family:inherit;transition:all .12s var(--ease);white-space:nowrap}.v26-mode-btn:hover,.v26-size-btn:hover{border-color:var(--accent-bd);color:var(--text-1);background:var(--bg-4)}.v26-mode-btn.on{background:var(--accent-dim);border-color:var(--accent-bd);color:var(--accent);box-shadow:inset 0 0 0 1px var(--accent-bd)}.v26-mode-btn[data-mode*="?앹궛"].on{background:var(--g-dim);border-color:rgba(78,173,123,.32);color:var(--g)}.v26-mode-btn[data-mode*="?쇰컲"].on{background:var(--t-dim);border-color:rgba(82,160,168,.32);color:var(--t)}.v26-mode-btn[data-mode*="?먭?"].on{background:var(--r-dim);border-color:rgba(191,88,88,.32);color:var(--r)}.v26-size-btn.on{background:var(--bg-5);color:var(--text-1);border-color:var(--border-3)}

/* Community: true large workspace */
.comm-ov.sh{align-items:center;justify-content:center}.comm-box.v26-wide{width:min(1520px,97vw)!important;height:min(94vh,980px)!important;max-height:94vh!important;border-radius:18px!important;display:flex;flex-direction:column}.comm-box.v26-wide .comm-hd{padding:16px 22px}.comm-box.v26-wide .comm-body{padding:0!important;overflow:hidden}.comm-box.v26-wide .comm-tabs{padding:0 22px}.v26-community{height:100%;display:grid;grid-template-columns:230px minmax(430px,1fr) 420px;gap:0;background:var(--bg-1)}.v26-community-side{border-right:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1));padding:18px 14px;overflow:auto}.v26-community-main{padding:18px;overflow:auto}.v26-community-detail{border-left:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1));padding:18px;overflow:auto}.v26-community-title{font-size:22px;font-weight:900;color:var(--text-1);letter-spacing:-.5px;margin-bottom:4px}.v26-community-sub{font-size:13px;color:var(--text-3);line-height:1.55}.v26-q-stats{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:16px 0}.v26-q-stat{background:var(--bg-1);border:1px solid var(--border-1);border-radius:12px;padding:12px}.v26-q-stat .v{font-family:'Outfit';font-size:22px;font-weight:900;color:var(--text-1)}.v26-q-stat .l{font-size:11px;color:var(--text-4);margin-top:2px}.v26-cat-title{font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.9px;color:var(--text-4);margin:16px 4px 8px}.v26-cat-btn{width:100%;display:flex;align-items:center;justify-content:space-between;gap:8px;border:0;background:transparent;color:var(--text-3);padding:10px 11px;border-radius:10px;font-size:13px;font-weight:800;cursor:pointer;text-align:left}.v26-cat-btn:hover,.v26-cat-btn.on{background:var(--accent-dim);color:var(--accent)}.v26-tag-cloud{display:flex;gap:6px;flex-wrap:wrap}.v26-tag{border:1px solid var(--border-1);background:var(--bg-1);color:var(--text-3);border-radius:99px;padding:6px 9px;font-size:12px;font-weight:700;cursor:pointer}.v26-tag:hover,.v26-tag.on{border-color:var(--accent-bd);color:var(--accent);background:var(--accent-dim)}.v26-q-hero{display:grid;grid-template-columns:1fr auto;gap:14px;align-items:center;background:linear-gradient(135deg,var(--bg-2),var(--bg-1));border:1px solid var(--border-1);border-radius:16px;padding:18px;margin-bottom:14px}.v26-q-searchbar{display:flex;align-items:center;gap:9px;background:var(--bg-1);border:1px solid var(--border-2);border-radius:12px;padding:11px 13px;margin-top:12px}.v26-q-searchbar input{background:transparent;border:0;outline:0;color:var(--text-1);font-size:15px;flex:1;font-family:inherit}.v26-q-actions{display:flex;gap:8px;align-items:center}.v26-primary{border:0;background:var(--accent-g);color:white;border-radius:11px;padding:10px 15px;font-size:13px;font-weight:900;cursor:pointer;font-family:inherit}.v26-secondary{border:1px solid var(--border-2);background:var(--bg-3);color:var(--text-2);border-radius:11px;padding:10px 13px;font-size:13px;font-weight:800;cursor:pointer;font-family:inherit}.v26-filter-row{display:flex;gap:8px;align-items:center;margin-bottom:12px;flex-wrap:wrap}.v26-select{background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;color:var(--text-2);font-size:13px;padding:9px 11px;font-family:inherit}.v26-q-list{display:flex;flex-direction:column;gap:10px}.v26-q-card{background:var(--bg-2);border:1px solid var(--border-1);border-radius:16px;padding:16px;cursor:pointer}.v26-q-card.on{border-color:var(--accent-bd);background:linear-gradient(135deg,var(--accent-dim),var(--bg-2))}.v26-q-top{display:flex;align-items:flex-start;gap:12px}.v26-vote{min-width:50px;text-align:center;background:var(--bg-1);border:1px solid var(--border-1);border-radius:12px;padding:9px 6px}.v26-vote .n{font-family:'Outfit';font-size:22px;font-weight:900;color:var(--accent)}.v26-vote .l{font-size:10px;color:var(--text-4);margin-top:1px}.v26-q-title{font-size:17px;font-weight:900;color:var(--text-1);line-height:1.45;margin-bottom:7px}.v26-q-body{font-size:14px;color:var(--text-2);line-height:1.75;margin-bottom:10px}.v26-q-meta{display:flex;align-items:center;gap:7px;flex-wrap:wrap;font-size:12px;color:var(--text-4)}.v26-q-pill{display:inline-flex;align-items:center;gap:4px;border-radius:99px;padding:4px 8px;font-size:11px;font-weight:900}.v26-q-pill.blue{background:var(--accent-dim);color:var(--accent)}.v26-q-pill.green{background:var(--g-dim);color:var(--g)}.v26-q-pill.amber{background:var(--a-dim);color:var(--a)}.v26-q-pill.red{background:var(--r-dim);color:var(--r)}.v26-detail-card{background:var(--bg-1);border:1px solid var(--border-1);border-radius:16px;padding:18px}.v26-buddy-mini{display:flex;align-items:center;gap:13px;background:linear-gradient(135deg,var(--accent-dim),var(--bg-1));border:1px solid var(--accent-bd);border-radius:16px;padding:14px;margin-bottom:14px}.v26-buddy-face{width:64px;height:64px;border-radius:20px;background:radial-gradient(circle at 35% 20%,#7FB2FF,#3768B7 70%);position:relative;box-shadow:0 14px 28px rgba(75,142,240,.18)}.v26-buddy-face:before{content:'?뫅?랅윊?;position:absolute;font-size:32px;left:15px;top:12px}.v26-buddy-text .t{font-size:15px;font-weight:900}.v26-buddy-text .d{font-size:12px;color:var(--text-3);line-height:1.55;margin-top:3px}.v26-answer{border-top:1px solid var(--border-1);padding-top:13px;margin-top:13px}.v26-answer-title{font-size:13px;font-weight:900;color:var(--text-1);margin-bottom:6px}.v26-answer-body{font-size:13.5px;color:var(--text-2);line-height:1.75}.v26-reply-box textarea{width:100%;min-height:92px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:12px;color:var(--text-1);padding:12px;font-family:inherit;font-size:14px;line-height:1.65;outline:0;resize:vertical}.v26-empty{background:var(--bg-1);border:1px dashed var(--border-2);border-radius:16px;padding:24px;text-align:center;color:var(--text-3);line-height:1.7}

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
  const say=(m,i='??,d=2200)=>{try{(window.toast||window.say||console.log)(m,i,d)}catch(e){console.log(i,m)}};
  const MODES=['?듯빀紐⑤뱶','?앹궛?먯옱 紐⑤뱶','?쇰컲?먯옱 紐⑤뱶','?먭?紐⑤뱶'];
  function safeLSGet(k,f){try{return localStorage.getItem(k)||f}catch(e){return f}}
  function safeLSSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  let currentMode=safeLSGet('vaatz-current-mode','?듯빀紐⑤뱶');
  let fontSize=safeLSGet('vaatz-font-size','standard');
  const categories=['?꾩껜','?낆같','怨꾩빟','VAATZ','5?ㅽ?','?먭?','?쇰컲?먯옱','?댁쇅援щℓ','?묐젰??,'洹쒖젙?댁꽍'];
  let communityState={cat:'?꾩껜',status:'?꾩껜',tag:'',query:'',selected:1};
  let askTags=[];
  const qa=[
    {id:1,cat:'?낆같',status:'梨꾪깮',votes:47,answers:8,title:'?꾨젰?곸엯李곗뿉??1?뚯감 ?좎같 ??泥섎━ ?덉감媛 沅곴툑?⑸땲??,body:'?ш났怨좎? ?섏쓽怨꾩빟 ?꾪솚 湲곗?, VAATZ ?좎같泥섎━ 硫붾돱 ?ъ슜踰뺤쓣 ?뚭퀬 ?띠뒿?덈떎.',tags:['?꾨젰?곸엯李?,'?좎같','VAATZ'],author:'怨꾩빟珥덈낫',time:'3????},
    {id:2,cat:'5?ㅽ?',status:'?듬??湲?,votes:23,answers:5,title:'5?ㅽ? 4???깃툒 ?밴툒 ???꾩옣 ?ъ궗 ??ぉ??蹂寃쎈릺?덈굹??',body:'IATF 16949 ?몄쬆 ?꾩닔 ?щ?? 湲곗〈 ?묐젰???좎삁湲곌컙??沅곴툑?⑸땲??',tags:['5?ㅽ?','IATF16949','?묐젰??],author:'?덉쭏留ㅻ땲?',time:'1????},
    {id:3,cat:'VAATZ',status:'?닿껐以?,votes:15,answers:3,title:'VAATZ?먯꽌 ?댁쇅 諛쒖＜ ???섏쑉 ?먮룞 ?곸슜 諛⑸쾿',body:'?댁쇅援щℓ 諛쒖＜ ?쒖젏 ?섏쑉怨?寃곗젣 ?쒖젏 ?섏쑉 湲곗????쇰룞?⑸땲??',tags:['?섏쑉','?댁쇅援щℓ','諛쒖＜'],author:'?댁쇅援щℓ?대떦',time:'?ㅻ뒛'},
    {id:4,cat:'怨꾩빟',status:'HOT',votes:31,answers:6,title:'?섏쓽怨꾩빟 湲닿툒 ?ъ쑀???뱀씤 湲곗?怨??꾧껐沅뚯? ?대뼸寃??섎굹??',body:'湲덉븸蹂??뱀씤沅뚯옄? 援щℓ?꾩썝???ъ쓽 議곌굔???뺣━?섍퀬 ?띠뒿?덈떎.',tags:['?섏쓽怨꾩빟','?꾧껐','?ъ쑀??],author:'怨꾩빟珥덈낫',time:'?ㅻ뒛'},
    {id:5,cat:'?먭?',status:'NEW',votes:12,answers:1,title:'?먭?紐⑤뱶?먯꽌 ?④? ?대젰怨??섏쑉 湲곗???媛숈씠 議고쉶?????덈굹??',body:'?먭? 愿??吏덉쓽 ???대뼡 DB瑜??곌껐?댁빞 ?섎뒗吏 沅곴툑?⑸땲??',tags:['?먭?紐⑤뱶','?④?','?섏쑉'],author:'?먭?遺꾩꽍??,time:'2?쒓컙 ??},
    {id:6,cat:'?쇰컲?먯옱',status:'?듬??湲?,votes:9,answers:0,title:'MRO ?덈ぉ 諛섎났 援щℓ ??寃쎈ℓ?낆같???앸왂?????덈뒗 湲곗????덈굹??',body:'諛섎났 援щℓ ?덈ぉ???덉쇅 湲곗?怨?怨꾩빟 ?쒖슜 媛???щ?媛 沅곴툑?⑸땲??',tags:['MRO','諛섎났援щℓ','寃쎈ℓ?낆같'],author:'MRO?대떦',time:'20遺???},
    {id:7,cat:'洹쒖젙?댁꽍',status:'?닿껐以?,votes:18,answers:2,title:'援щℓ?낅Т洹쒖젙 媛쒖젙 ?꾪썑 議고빆??異⑸룎?????대뼡 踰꾩쟾???곗꽑?섎굹??',body:'理쒓렐 媛쒖젙蹂멸낵 湲곗〈 ?낅Т?쒖? ?댁슜???ㅻⅤ寃?蹂댁씠??寃쎌슦 ?곗꽑?쒖쐞媛 沅곴툑?⑸땲??',tags:['洹쒖젙媛쒖젙','踰꾩쟾愿由?,'?낅Т?쒖?'],author:'洹쒖젙愿由ъ옄',time:'?ㅻ뒛'},
    {id:8,cat:'?묐젰??,status:'梨꾪깮',votes:38,answers:7,title:'?묐젰???됯? 寃곌낵瑜??낆같 李몄뿬 議곌굔???먮룞 諛섏쁺?????덈굹??',body:'5?ㅽ? ?깃툒怨?怨쇨굅 ?⑺뭹 ?덉쭏 ?댁뒋瑜?VAATZ ?낆같 珥덈? 議곌굔??諛섏쁺?섎뒗 諛⑸쾿??沅곴툑?⑸땲??',tags:['?묐젰??,'?낆같珥덈?','5?ㅽ?'],author:'?덉쭏吏?댁씠',time:'?댁젣'}
  ];
  const folders=[
    {id:'rule',icon:'?뱯',name:'援щℓ洹쒖젙쨌?쒕룄',docs:182,chunks:48230,owners:8,health:'?뺤긽'},
    {id:'bid',icon:'?뤇截?,name:'?낆같愿由?,docs:147,chunks:39220,owners:6,health:'?뺤긽'},
    {id:'vaatz',icon:'?뼢截?,name:'VAATZ 留ㅻ돱??,docs:96,chunks:21040,owners:4,health:'?뺤긽'},
    {id:'quality',icon:'狩?,name:'?덉쭏 5?ㅽ?',docs:74,chunks:16620,owners:3,health:'?뺤긽'},
    {id:'cost',icon:'?뮥',name:'?먭?쨌?④?',docs:128,chunks:52610,owners:5,health:'沅뚰븳二쇱쓽'},
    {id:'mro',icon:'?벀',name:'?쇰컲?먯옱쨌MRO',docs:153,chunks:30650,owners:7,health:'?뺤긽'},
    {id:'global',icon:'?뙋',name:'?댁쇅援щℓ',docs:63,chunks:14290,owners:2,health:'?먭?'}
  ];
  const modeConfig={
    '?듯빀紐⑤뱶':new Set(['rule','bid','vaatz','quality','mro','global']),
    '?앹궛?먯옱 紐⑤뱶':new Set(['rule','bid','quality','global']),
    '?쇰컲?먯옱 紐⑤뱶':new Set(['rule','vaatz','mro']),
    '?먭?紐⑤뱶':new Set(['cost','rule'])
  };
  const martSources=[
    {id:'vaatz',name:'VAATZ ?낆껜쨌?덈ぉ 留덉뒪??,type:'VAATZ DB',status:'?뺤긽',rows:'1,248,320',last:'05:10',next:'?댁씪 05:10',mode:'?듯빀쨌?앹궛?먯옱쨌?쇰컲?먯옱',err:0,icon:'?뼢截?},
    {id:'autopedia',name:'Autopedia ?⑹뼱 DB',type:'?몃? DB',status:'?뺤긽',rows:'4,832',last:'06:00',next:'?댁씪 06:00',mode:'?듯빀紐⑤뱶',err:0,icon:'?뱰'},
    {id:'cost',name:'?먭? DB ??諛곗튂',type:'? 遺臾??쒖뒪??,status:'?뺤씤?꾩슂',rows:'823,114',last:'07:30',next:'?댁씪 07:30',mode:'?먭?紐⑤뱶',err:12,icon:'?뮥'},
    {id:'quality',name:'?덉쭏/?대젅???곗씠??,type:'?덉쭏 ?쒖뒪??,status:'?뺤긽',rows:'326,842',last:'04:30',next:'?댁씪 04:30',mode:'?앹궛?먯옱쨌?듯빀',err:0,icon:'狩?},
    {id:'mro',name:'?쇰컲?먯옱 MRO 移댄깉濡쒓렇',type:'援щℓ 移댄깉濡쒓렇',status:'?뺤긽',rows:'68,201',last:'03:20',next:'?댁씪 03:20',mode:'?쇰컲?먯옱 紐⑤뱶',err:0,icon:'?벀'}
  ];
  let selectedMart='vaatz', selectedMode='?듯빀紐⑤뱶', selectedFolder='rule';

  function installChatControls(){
    $$('.ai-mode-switch').forEach(x=>x.remove());
    const box=$('.ibx'); if(!box||$('#v26ChatControls')) return;
    const row=document.createElement('div'); row.className='v26-chat-controls'; row.id='v26ChatControls';
    row.innerHTML=`<div class="v26-control-group"><span class="v26-control-label">AI 紐⑤뱶</span><div class="v26-chipset">${MODES.map(m=>`<button class="v26-mode-btn ${m===currentMode?'on':''}" data-mode="${m}" onclick="setChatModeV26('${m}')">${m.replace(' 紐⑤뱶','')}</button>`).join('')}</div></div><div class="v26-control-group"><span class="v26-control-label">湲??/span><div class="v26-chipset">${[['small','?묎쾶'],['standard','?쒖?'],['large','?ш쾶']].map(x=>`<button class="v26-size-btn ${x[0]===fontSize?'on':''}" data-size="${x[0]}" onclick="setFontSizeV26('${x[0]}')">${x[1]}</button>`).join('')}</div></div>`;
    box.insertBefore(row,box.firstChild);
    applyFontSize();
  }
  window.setChatModeV26=function(mode){currentMode=mode;safeLSSet('vaatz-current-mode',mode);$$('.v26-mode-btn').forEach(b=>b.classList.toggle('on',b.dataset.mode===mode));window.currentAIMode=mode;say(`${mode}濡??꾪솚?덉뒿?덈떎. ??紐⑤뱶???곌껐??DB? 臾몄꽌留??곗꽑 寃?됲빀?덈떎.`,'?㎛')};
  function applyFontSize(){document.documentElement.setAttribute('data-font-size',fontSize);$$('.v26-size-btn').forEach(b=>b.classList.toggle('on',b.dataset.size===fontSize));}
  window.setFontSizeV26=function(size){fontSize=size;safeLSSet('vaatz-font-size',size);applyFontSize();say(`湲???ш린: ${size==='large'?'?ш쾶':size==='small'?'?묎쾶':'?쒖?'}濡?蹂寃쏀뻽?듬땲??`,'Aa',1600)};

  function statusClass(st){return st==='梨꾪깮'?'green':st==='?듬??湲??'amber':st==='HOT'?'red':st==='NEW'?'blue':'blue'}
  function filteredQa(){return qa.filter(q=>(communityState.cat==='?꾩껜'||q.cat===communityState.cat)&& (communityState.status==='?꾩껜'||q.status===communityState.status) && (!communityState.tag||q.tags.includes(communityState.tag)) && (!communityState.query||`${q.title} ${q.body} ${q.tags.join(' ')} ${q.cat}`.toLowerCase().includes(communityState.query.toLowerCase())))}
  function allTags(){return [...new Set(qa.flatMap(q=>q.tags))].slice(0,18)}
  window.renderCommunityV26=function(){
    const box=$('.comm-box'); if(box) box.classList.add('v26-wide');
    const ct=$('#ct-qa'); if(!ct) return;
    const list=filteredQa(); const selected=qa.find(q=>q.id===communityState.selected)||list[0]||qa[0]; if(selected) communityState.selected=selected.id;
    ct.innerHTML=`<div class="v26-community v26-contain"><aside class="v26-community-side"><div class="v26-community-title">吏?앹빱裕ㅻ땲??/div><div class="v26-community-sub">援щℓ蹂몃? 援ъ꽦?먯씠 吏덈Ц?섍퀬, 梨꾪깮 ?듬?? AI ?숈뒿 ?꾨낫濡??щ씪媛묐땲??</div><div class="v26-q-stats"><div class="v26-q-stat"><div class="v">${qa.length.toLocaleString()}</div><div class="l">?꾩껜 吏덈Ц</div></div><div class="v26-q-stat"><div class="v">82%</div><div class="l">?닿껐瑜?/div></div><div class="v26-q-stat"><div class="v">18</div><div class="l">?ㅻ뒛 ?쒕룞</div></div><div class="v26-q-stat"><div class="v">11</div><div class="l">AI ?꾨낫</div></div></div><div class="v26-cat-title">移댄뀒怨좊━</div>${categories.map(c=>`<button class="v26-cat-btn ${communityState.cat===c?'on':''}" onclick="setQCatV26('${c}')"><span>${c==='?꾩껜'?'?뱴':c==='?낆같'?'?뤇截?:c==='怨꾩빟'?'?뱞':c==='VAATZ'?'?뼢截?:c==='5?ㅽ?'?'狩?:c==='?먭?'?'?뮥':c==='?쇰컲?먯옱'?'?벀':c==='?댁쇅援щℓ'?'?뙋':c==='?묐젰???'?쩃':'?뱲'} ${c}</span><span>${c==='?꾩껜'?qa.length:qa.filter(q=>q.cat===c).length}</span></button>`).join('')}<div class="v26-cat-title">?멸린 ?쒓렇</div><div class="v26-tag-cloud">${allTags().map(t=>`<button class="v26-tag ${communityState.tag===t?'on':''}" onclick="setQTagV26('${t}')">#${t}</button>`).join('')}</div></aside><main class="v26-community-main"><div class="v26-q-hero"><div><div class="v26-community-title">援щℓ蹂몃? Q&A</div><div class="v26-community-sub">洹쒖젙쨌VAATZ쨌?먭?쨌?묐젰??吏덈Ц??鍮좊Ⅴ寃?寃?됲븯怨??듬????④만 ???덉뒿?덈떎.</div><div class="v26-q-searchbar"><span>?뵇</span><input value="${esc(communityState.query)}" placeholder="吏덈Ц, ?듬?, ?쒓렇瑜?寃?됲븯?몄슂" oninput="searchQnaV26(this.value)"></div></div><div class="v26-q-actions"><button class="v26-secondary" onclick="setQStatusV26('?듬??湲?)">?듬??湲?/button><button class="v26-primary" onclick="openQuestionWriteV26()">竊?吏덈Ц?섍린</button></div></div><div class="v26-filter-row"><select class="v26-select" onchange="setQStatusV26(this.value)"><option ${communityState.status==='?꾩껜'?'selected':''}>?꾩껜</option><option ${communityState.status==='?듬??湲??'selected':''}>?듬??湲?/option><option ${communityState.status==='?닿껐以??'selected':''}>?닿껐以?/option><option ${communityState.status==='梨꾪깮'?'selected':''}>梨꾪깮</option><option ${communityState.status==='HOT'?'selected':''}>HOT</option><option ${communityState.status==='NEW'?'selected':''}>NEW</option></select><button class="v26-secondary" onclick="clearQFiltersV26()">?꾪꽣 珥덇린??/button><span style="margin-left:auto;color:var(--text-4);font-size:12px">${list.length}媛?吏덈Ц ?쒖떆</span></div><div class="v26-q-list">${list.map(q=>`<article class="v26-q-card ${q.id===communityState.selected?'on':''}" onclick="selectQuestionV26(${q.id})"><div class="v26-q-top"><div class="v26-vote"><div class="n">${q.votes}</div><div class="l">異붿쿇</div></div><div style="flex:1;min-width:0"><div class="v26-q-title">${esc(q.title)}</div><div class="v26-q-body">${esc(q.body)}</div><div class="v26-q-meta"><span class="v26-q-pill ${statusClass(q.status)}">${q.status}</span><span>?뮠 ${q.answers}</span><span>?뫀 ${esc(q.author)}</span><span>${q.time}</span>${q.tags.map(t=>`<span class="v26-tag" onclick="event.stopPropagation();setQTagV26('${t}')">#${esc(t)}</span>`).join('')}</div></div></div></article>`).join('')||`<div class="v26-empty">寃??寃곌낵媛 ?놁뒿?덈떎. ?꾪꽣瑜?珥덇린?뷀븯嫄곕굹 ??吏덈Ц???깅줉?대낫?몄슂.</div>`}</div></main><aside class="v26-community-detail">${renderQuestionDetail(selected)}</aside></div>`;
  };
  function renderQuestionDetail(q){if(!q)return `<div class="v26-empty">吏덈Ц???좏깮?섎㈃ ?곸꽭 ?댁슜???쒖떆?⑸땲??</div>`;return `<div class="v26-buddy-mini"><div class="v26-buddy-face"></div><div class="v26-buddy-text"><div class="t">VAATZ Buddy</div><div class="d">醫뗭? ?듬?? 梨꾪깮 ??AI ?숈뒿 ?꾨낫濡??먮룞 異붿쿇?⑸땲??</div></div></div><div class="v26-detail-card"><div class="v26-q-meta" style="margin-bottom:8px"><span class="v26-q-pill ${statusClass(q.status)}">${q.status}</span><span>${q.cat}</span>${q.tags.map(t=>`<span class="v26-tag" onclick="setQTagV26('${t}')">#${esc(t)}</span>`).join('')}</div><div class="v26-q-title">${esc(q.title)}</div><div class="v26-q-body">${esc(q.body)}</div><div class="v26-answer"><div class="v26-answer-title">梨꾪깮 ?듬? ?덉떆</div><div class="v26-answer-body">愿??洹쒖젙 議고빆怨?VAATZ 硫붾돱 寃쎈줈瑜??④퍡 ?곸쑝硫?梨꾪깮瑜좎씠 ?믪븘吏묐땲?? ?듬?? 異붿쿇 10媛??댁긽 ?먮뒗 吏덈Ц??梨꾪깮 ??AI ?숈뒿 寃利??꾨낫濡??대룞?⑸땲??</div><div style="display:flex;gap:8px;margin-top:10px"><button class="v26-secondary" onclick="saveCommunityNoteV26(${q.id})">狩?硫붾え ???/button><button class="v26-secondary" onclick="say('AI ?숈뒿 ?꾨낫濡?異붿쿇?덉뒿?덈떎.','?쭬')">?쭬 AI ?꾨낫 異붿쿇</button></div></div><div class="v26-answer"><div class="v26-answer-title">?듬? ?묒꽦</div><div class="v26-reply-box"><textarea id="v26ReplyText" placeholder="洹쇨굅 臾몄꽌, 洹쒖젙 議고빆, VAATZ 硫붾돱 寃쎈줈瑜??ы븿???듬??대낫?몄슂."></textarea><div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px"><button class="v26-secondary" onclick="say('?꾩떆 ??ν뻽?듬땲??','?뮶')">?꾩떆???/button><button class="v26-primary" onclick="postAnswerV26(${q.id})">?듬? ?깅줉</button></div></div></div></div>`}
  window.selectQuestionV26=id=>{communityState.selected=id;renderCommunityV26()};
  window.setQCatV26=cat=>{communityState.cat=cat;communityState.selected=(filteredQa()[0]||qa[0]).id;renderCommunityV26()};
  window.setQStatusV26=st=>{communityState.status=st;communityState.selected=(filteredQa()[0]||qa[0]).id;renderCommunityV26()};
  window.setQTagV26=tag=>{communityState.tag=communityState.tag===tag?'':tag;communityState.selected=(filteredQa()[0]||qa[0]).id;renderCommunityV26()};
  window.searchQnaV26=(v)=>{communityState.query=v; window.clearTimeout(window.__v26QTimer); window.__v26QTimer=setTimeout(renderCommunityV26,120)};
  window.clearQFiltersV26=()=>{communityState={cat:'?꾩껜',status:'?꾩껜',tag:'',query:'',selected:qa[0].id};renderCommunityV26()};
  window.postAnswerV26=id=>{const q=qa.find(x=>x.id===id); if(q){q.answers++;q.status='?닿껐以?;say('?듬????깅줉?섏뿀?듬땲?? 梨꾪깮?섎㈃ ?ъ씤?멸? 吏湲됰맗?덈떎.','??);renderCommunityV26()}};
  window.saveCommunityNoteV26=id=>{const q=qa.find(x=>x.id===id); if(window.openMemoModal){openMemoModal(); const t=$('#v25MemoTitle'), b=$('#v25MemoBody'); if(t)t.value='而ㅻ??덊떚 ??? '+q.title; if(b)b.value=`[${q.cat}] ${q.title}\n\n${q.body}\n\n?쒓렇: ${q.tags.map(x=>'#'+x).join(' ')}`;} else say('硫붾え????ν뻽?듬땲??','狩?)};

  function ensureAskModal(){if($('#v26AskModal')) return; document.body.insertAdjacentHTML('beforeend',`<div class="v26-ask-modal" id="v26AskModal" onclick="if(event.target===this)closeQuestionWriteV26()"><div class="v26-ask-box"><div class="v26-ask-h"><div><div class="v26-ask-title">吏덈Ц ?깅줉</div><div class="v26-community-sub">移댄뀒怨좊━瑜?吏곸젒 ?낅젰?섍퀬, 寃?됱씠 ?ъ슫 ?쒓렇瑜?遺숈뿬二쇱꽭??</div></div><button class="large-close" onclick="closeQuestionWriteV26()">??/button></div><div class="v26-ask-body"><div class="v26-form-grid"><div class="v26-field"><label>移댄뀒怨좊━</label><input id="v26AskCat" list="v26CatList" placeholder="?? ?낆같, ?먭?, ?좉퇋 移댄뀒怨좊━ 吏곸젒 ?낅젰"><datalist id="v26CatList">${categories.filter(x=>x!=='?꾩껜').map(c=>`<option value="${c}"></option>`).join('')}</datalist></div><div class="v26-field"><label>?쒓렇</label><div class="v26-tag-editor" id="v26TagEditor"><input id="v26TagInput" placeholder="Enter濡??쒓렇 異붽?" onkeydown="handleTagKeyV26(event)"></div></div></div><div class="v26-field"><label>吏덈Ц ?쒕ぉ</label><input id="v26AskTitle" placeholder="吏덈Ц????以꾨줈 ?붿빟?댁＜?몄슂"></div><div class="v26-field"><label>?곸꽭 ?댁슜</label><textarea id="v26AskBody" placeholder="?곹솴, 愿??臾몄꽌, VAATZ ?붾㈃, ?먰븯???듬? ?뺥깭瑜??곸뼱二쇱꽭??"></textarea></div></div><div class="v26-ask-foot"><span style="font-size:12px;color:var(--text-4)">醫뗭? ?쒓렇 ?? #?꾨젰?곸엯李?#?섏쓽怨꾩빟 #5?ㅽ? #?먭?紐⑤뱶</span><div style="display:flex;gap:8px"><button class="v26-secondary" onclick="closeQuestionWriteV26()">痍⑥냼</button><button class="v26-primary" onclick="submitQuestionV26()">?깅줉</button></div></div></div></div>`)}
  function renderAskTags(){const ed=$('#v26TagEditor'), input=$('#v26TagInput'); if(!ed||!input)return; ed.querySelectorAll('.v26-tag-item').forEach(x=>x.remove()); askTags.forEach(t=>ed.insertBefore(Object.assign(document.createElement('span'),{className:'v26-tag-item',innerHTML:`#${esc(t)} <button onclick="removeAskTagV26('${esc(t)}')">횞</button>`}),input));}
  window.openQuestionWriteV26=()=>{ensureAskModal();askTags=[];['v26AskCat','v26AskTitle','v26AskBody','v26TagInput'].forEach(id=>{const el=$('#'+id); if(el) el.value=''});renderAskTags();$('#v26AskModal').classList.add('sh');setTimeout(()=>$('#v26AskTitle')?.focus(),80)};
  window.closeQuestionWriteV26=()=>$('#v26AskModal')?.classList.remove('sh');
  window.handleTagKeyV26=e=>{if(e.key==='Enter'||e.key===',' ){e.preventDefault();const v=e.target.value.trim().replace(/^#/,'');if(v&&!askTags.includes(v))askTags.push(v);e.target.value='';renderAskTags();}};
  window.removeAskTagV26=t=>{askTags=askTags.filter(x=>x!==t);renderAskTags()};
  window.submitQuestionV26=()=>{const cat=$('#v26AskCat')?.value.trim()||'?쇰컲'; const title=$('#v26AskTitle')?.value.trim(); const body=$('#v26AskBody')?.value.trim(); const tagInput=$('#v26TagInput')?.value.trim().replace(/^#/,''); if(tagInput&&!askTags.includes(tagInput))askTags.push(tagInput); if(!title||!body){say('?쒕ぉ怨??곸꽭 ?댁슜???낅젰?댁＜?몄슂.','?좑툘');return} const id=Date.now(); qa.unshift({id,cat,status:'?듬??湲?,votes:0,answers:0,title,body,tags:askTags.length?askTags:[cat],author:'?꾨줈?먯뼱?덉뼱濡?,time:'諛⑷툑'}); communityState={cat:'?꾩껜',status:'?꾩껜',tag:'',query:'',selected:id}; closeQuestionWriteV26(); renderCommunityV26(); say('吏덈Ц???깅줉?섏뿀?듬땲??','??)};

  const oldOpenComm=window.openComm; window.openComm=function(tab='qa'){if(oldOpenComm)oldOpenComm(tab); if(tab==='qa'||!tab){setTimeout(renderCommunityV26,40)}};
  const oldCommTab=window.commTab; window.commTab=function(btn,id){if(oldCommTab)oldCommTab(btn,id); if(id==='ct-qa')setTimeout(renderCommunityV26,40)};
  const oldOpenQuestion=window.openQuestionWrite; window.openQuestionWrite=function(){openQuestionWriteV26()};

  function renderModeOps(){const el=$('#p-mode'); if(!el)return; const active=modeConfig[selectedMode]; const connected=folders.filter(f=>active.has(f.id)); const chunks=connected.reduce((a,f)=>a+f.chunks,0); el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">AI 紐⑤뱶 쨌 ?대뜑???댁쁺</div><div class="v23-title-sub">????뚯씪??媛쒕퀎 臾몄꽌媛 ?꾨땲???대뜑??洹쒖튃???⑥쐞濡??곌껐?섍퀬, ?덉쇅 ?뚯씪留?蹂꾨룄 愿由ы빀?덈떎.</div></div><button class="v26-primary" onclick="say('紐⑤뱶 ?뺤콉????ν뻽?듬땲??','?㎛')">?뺤콉 ???/button></div><div class="v26-admin-hero"><div class="v26-admin-card"><h3>${selectedMode}</h3><p>?꾩옱 紐⑤뱶??${connected.length}媛??대뜑?? ${connected.reduce((a,f)=>a+f.docs,0).toLocaleString()}媛?臾몄꽌, ${chunks.toLocaleString()} chunks瑜?寃????곸쑝濡??ъ슜?⑸땲??</p><div class="v26-mini-kpis"><div class="v26-mini-kpi"><div class="v">${connected.length}</div><div class="l">?곌껐 ?대뜑??/div></div><div class="v26-mini-kpi"><div class="v">${connected.reduce((a,f)=>a+f.docs,0)}</div><div class="l">臾몄꽌</div></div><div class="v26-mini-kpi"><div class="v">${chunks.toLocaleString()}</div><div class="l">Chunks</div></div><div class="v26-mini-kpi"><div class="v">${selectedMode==='?먭?紐⑤뱶'?4:9}</div><div class="l">?덉쇅 洹쒖튃</div></div></div></div><div class="v26-admin-card"><h3>異붿쿇 ?댁쁺 諛⑹떇</h3><p>??湲곕낯? ?대뜑???⑥쐞 ?곌껐 ???뱀젙 ?뚯씪留??덉쇅 異붽?/?쒖쇅 ??二?1???곹뼢??由ы룷?????먭?/由щ뜑 臾몄꽌???묎렐 濡쒓렇 媛뺥솕.</p><div class="v26-ops-guide"><h4>蹂듭옟??以꾩씠??湲곗?</h4><ul><li>?뚯씪蹂?愿由щ낫???쒗뤃?뷀뙥??湲곗??쇰줈 ?댁쁺</li><li>????섏젙? 寃??寃곌낵 ?좏깮 ???쇨큵 諛섏쁺</li><li>紐⑤뱶蹂??곹뼢?꾨뒗 chunks/臾몄꽌?섎줈 ?ъ쟾 ?뺤씤</li></ul></div></div></div><div class="v26-pack-layout"><div class="v26-mode-nav"><div class="v26-cat-title">AI 紐⑤뱶</div>${MODES.map(m=>`<button class="${m===selectedMode?'on':''}" onclick="selectModeOpsV26('${m}')"><span>${m==='?듯빀紐⑤뱶'?'?뙋':m.includes('?앹궛')?'?룺':m.includes('?쇰컲')?'?벀':'?뮥'} ${m}</span><span>${folders.filter(f=>modeConfig[m].has(f.id)).length}</span></button>`).join('')}</div><div><div class="v26-filter-row"><select class="v26-select" id="v26PackFilter" onchange="renderModeOpsV26()"><option value="">?꾩껜 ?대뜑??/option><option value="on">?곌껐??/option><option value="off">誘몄뿰寃?/option></select><button class="v26-secondary" onclick="say('沅뚯옣 ?대뜑?⑹쓣 ?먮룞 ?좏깮?덉뒿?덈떎.','??)">沅뚯옣???곸슜</button></div><div class="v26-pack-grid">${folders.filter(f=>{const v=$('#v26PackFilter')?.value||''; return !v || (v==='on'?active.has(f.id):!active.has(f.id))}).map(f=>`<div class="v26-pack-card"><div class="v26-pack-head"><div><div class="v26-pack-title">${f.icon} ${f.name}</div><div class="v26-pack-sub">${f.health} 쨌 Owner ${f.owners}紐?쨌 紐⑤뱶 ?곌껐 ???대떦 ?대뜑 ?꾩껜媛 寃???꾨낫媛 ?⑸땲??</div></div><div class="v26-toggle ${active.has(f.id)?'on':''}" onclick="togglePackV26('${f.id}',this)"></div></div><div class="v26-pack-meta"><div><b>${f.docs}</b><span>臾몄꽌</span></div><div><b>${f.chunks.toLocaleString()}</b><span>chunks</span></div><div><b>${f.owners}</b><span>owners</span></div></div></div>`).join('')}</div></div><div class="v26-exception-panel"><div class="v26-pack-title">?덉쇅 ?뚯씪 愿由?/div><div class="v26-pack-sub">?대뜑?⑹뿉 ?ы븿?섏?留??뱀젙 紐⑤뱶?먯꽌 ?쒖쇅?섍굅?? 諛섎?濡?媛쒕퀎 ?뚯씪留?異붽??⑸땲??</div><div class="v26-q-searchbar" style="margin-top:10px"><span>?뵇</span><input id="v26ExceptionSearch" placeholder="?덉쇅 ?뚯씪 寃?? oninput="renderModeOpsV26()"></div><div class="v26-ex-list">${folders.flatMap(f=>[0,1,2].map(i=>({folder:f,name:`${f.name} ?덉쇅臾몄꽌_${i+1}.pdf`,team:['援щℓ?꾨왂?','?먭?愿由ы?','?쇰컲?먯옱援щℓ?'][i%3]}))).filter(x=>!$('#v26ExceptionSearch')?.value||x.name.includes($('#v26ExceptionSearch').value)).slice(0,12).map(x=>`<div class="v26-ex-row"><div class="name">${esc(x.name)}</div><div class="meta">${x.team} 쨌 ${x.folder.name} 쨌 ${selectedMode}?먯꽌 ${active.has(x.folder.id)?'?ы븿':'?쒖쇅'} ?곹깭</div><div style="display:flex;gap:6px;margin-top:8px"><button class="v26-secondary" onclick="say('?덉쇅 洹쒖튃??諛섏쁺?덉뒿?덈떎.','?㎛')">?덉쇅 ?꾪솚</button><button class="v26-secondary" onclick="say('?먮Ц 誘몃━蹂닿린瑜??댁뿀?듬땲??','?뵊')">蹂닿린</button></div></div>`).join('')}</div></div></div>`}
  window.selectModeOpsV26=m=>{selectedMode=m;renderModeOps()};
  window.togglePackV26=(id,el)=>{const s=modeConfig[selectedMode]; s.has(id)?s.delete(id):s.add(id); el?.classList.toggle('on'); say('?대뜑???곌껐 ?뺤콉??蹂寃쏀뻽?듬땲?? ?????諛섏쁺?⑸땲??','?㎛'); renderModeOps()};
  window.renderModeOpsV26=renderModeOps;

  function renderListOps(){const el=$('#p-list'); if(!el)return; const f=folders.find(x=>x.id===selectedFolder)||folders[0]; const docRows=Array.from({length:Math.min(14,f.docs)},(_,i)=>({name:`${f.name} 臾몄꽌_${String(i+1).padStart(3,'0')}.${['pdf','ppt','docx','xlsx'][i%4]}`,team:['援щℓ?꾨왂?','?먭?愿由ы?','?쇰컲?먯옱援щℓ?','援щℓ?덉쭏湲고쉷?'][i%4],sec:['?쇰컲 怨듦컻','由щ뜑 ?꾩슜','吏???ъ슜??][i%3],modes:MODES.filter((_,idx)=>(i+idx)%2===0)})); el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">理쒖쥌 由ъ뒪??쨌 ?대뜑??愿由?/div><div class="v23-title-sub">臾몄꽌媛 留롮쓣?섎줉 理쒖쥌 吏?앹? ?대뜑??以묒떖?쇰줈 蹂닿퀬, ?곸꽭 臾몄꽌??寃??寃곌낵?먯꽌留?愿由ы빀?덈떎.</div></div><div class="v23-actions"><button class="v26-secondary">CSV</button><button class="v26-primary">竊??깅줉</button></div></div><div class="v26-folder-board"><div class="v26-folder-side"><div class="v26-cat-title">?듯빀 吏???대뜑</div>${folders.map(x=>`<button class="${x.id===selectedFolder?'on':''}" onclick="selectFinalFolderV26('${x.id}')"><span>${x.icon} ${x.name}</span><span>${x.docs}</span></button>`).join('')}</div><div class="v26-folder-main"><div class="v26-folder-main-h"><div><div class="v26-pack-title">${f.icon} ${f.name}</div><div class="v26-pack-sub">${f.docs}媛?臾몄꽌 쨌 ${f.chunks.toLocaleString()} chunks 쨌 ${f.owners}紐?Owner</div></div><div class="v26-filter-row"><input class="v26-select" style="width:230px" placeholder="?꾩옱 ?대뜑 ??寃?? oninput="filterFinalRowsV26(this.value)"><button class="v26-secondary" onclick="say('?좏깮 臾몄꽌瑜??쇨큵 ?ъ깋?명뻽?듬땲??','?봽')">?ъ깋??/button></div></div><div class="v26-doc-list" id="v26FinalRows">${docRows.map(d=>`<div class="v26-doc-row" data-text="${(d.name+d.team+d.sec+d.modes.join(' ')).toLowerCase()}"><div><div class="n">${esc(d.name)}</div><div class="m">${d.team} 쨌 v1.${Math.floor(Math.random()*9)} 쨌 ?쒖꽦</div></div><div>${secBadge(d.sec)}</div><div class="v26-tag-cloud">${d.modes.map(m=>`<span class="v26-tag">${m.replace(' 紐⑤뱶','')}</span>`).join('')}</div><button class="v26-secondary" onclick="say('?곸꽭 ?⑤꼸???댁뿀?듬땲??','?뱴')">?곸꽭</button></div>`).join('')}</div></div></div>`}
  function secBadge(s){return `<span class="v26-q-pill ${s==='由щ뜑 ?꾩슜'?'red':s==='吏???ъ슜???'blue':'green'}">${s}</span>`}
  window.selectFinalFolderV26=id=>{selectedFolder=id;renderListOps()};
  window.filterFinalRowsV26=q=>{$$('#v26FinalRows .v26-doc-row').forEach(r=>r.style.display=!q||r.dataset.text.includes(q.toLowerCase())?'grid':'none')};

  function renderMartOps(){const el=$('#p-datamart'); if(!el)return; const src=martSources.find(x=>x.id===selectedMart)||martSources[0]; const ok=src.status==='?뺤긽'; el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">?뺥삎 ?곗씠?곕쭏??쨌 吏곴???紐⑤땲?곕쭅</div><div class="v23-title-sub">Source ??Data Mart ??Transform ??Index ??AI Mode ?먮쫫???뚯뒪蹂꾨줈 ?뺤씤?⑸땲??</div></div><div class="v23-actions"><button class="v26-secondary" onclick="showOnlyIssueMartV26()">臾몄젣留?蹂닿린</button><button class="v26-primary" onclick="say('?꾩껜 諛곗튂瑜??ъ젏寃?덉뒿?덈떎.','?봽')">?꾩껜 ?ъ젏寃</button></div></div><div class="v26-admin-hero"><div class="v26-admin-card"><h3>?ㅻ뒛 諛곗튂 ?붿빟</h3><p>5媛?二쇱슂 ?뺥삎 ?곗씠??以?4媛??뺤긽, 1媛??뺤씤 ?꾩슂?낅땲?? ?먭? DB??12媛?row ?ㅻ쪟???먮낯 肄붾뱶媛??꾨씫?쇰줈 ?쒖떆?⑸땲??</p><div class="v26-mini-kpis"><div class="v26-mini-kpi"><div class="v">4</div><div class="l">?뺤긽</div></div><div class="v26-mini-kpi"><div class="v">1</div><div class="l">?뺤씤</div></div><div class="v26-mini-kpi"><div class="v">2.4M</div><div class="l">Rows</div></div><div class="v26-mini-kpi"><div class="v">05:10</div><div class="l">二쇱슂 諛곗튂</div></div></div></div><div class="v26-admin-card"><h3>?댁쁺?먭? 蹂?寃?/h3><p>?깃났/?ㅽ뙣留?蹂대뒗 ??? ?대뒓 AI 紐⑤뱶??諛섏쁺?먮뒗吏? Index源뚯? ?꾨떖?덈뒗吏瑜??④퍡 遊낅땲?? 臾몄젣 諛쒖깮 ???먮낯 Source ?대떦?먯? row ?ㅻ쪟瑜?諛붾줈 ?뺤씤?⑸땲??</p></div></div><div class="v26-mart-grid"><div class="v26-health-list" id="v26MartList">${martSources.map(s=>`<div class="v26-health-card ${s.id===selectedMart?'on':''}" data-status="${s.status}" onclick="selectMartV26('${s.id}')"><div class="v26-health-title"><span>${s.icon} ${s.name}</span><span class="v26-q-pill ${s.status==='?뺤긽'?'green':'amber'}">${s.status}</span></div><div class="v26-health-meta">${s.type} 쨌 ${s.rows} rows 쨌 ${s.last} ?꾨즺 쨌 ${s.mode}</div></div>`).join('')}</div><div class="v26-mart-detail"><div class="v26-pack-title">${src.icon} ${src.name}</div><div class="v26-pack-sub">${src.type} 쨌 留덉?留??꾨즺 ${src.last} 쨌 ?ㅼ쓬 ?ㅽ뻾 ${src.next} 쨌 ?곌껐 紐⑤뱶 ${src.mode}</div><div class="v26-pipeline">${['?섏쭛','寃利?,'蹂??,'Index','AI 諛섏쁺'].map((t,i)=>`<div class="v26-pipe-step"><div class="v26-pipe-dot ${!ok&&i===1?'warn':''}"></div><div class="t">${t}</div><div class="d">${!ok&&i===1?src.err+' rows ?뺤씤':'?뺤긽'}</div></div>`).join('')}</div><div class="v26-mini-kpis"><div class="v26-mini-kpi"><div class="v">${src.rows}</div><div class="l">Rows</div></div><div class="v26-mini-kpi"><div class="v">${src.err}</div><div class="l">?ㅻ쪟</div></div><div class="v26-mini-kpi"><div class="v">${src.last}</div><div class="l">?꾨즺</div></div><div class="v26-mini-kpi"><div class="v">${src.next}</div><div class="l">?ㅼ쓬</div></div></div><div class="v26-ops-guide"><h4>議곗튂 媛?대뱶</h4><ul><li>?ㅻ쪟 row媛 ?덉쑝硫??먮낯 ?대떦 ?쒖뒪?쒖뿉 ?ъ쟾???붿껌</li><li>Index ?④퀎 ?ㅽ뙣 ??紐⑤뱶蹂??됱씤留??ъ깮??/li><li>?먭?/由щ뜑 ?꾩슜 ?곗씠?곕뒗 沅뚰븳 ?쒕??덉씠????諛고룷</li></ul></div></div></div>`}
  window.selectMartV26=id=>{selectedMart=id;renderMartOps()};
  window.showOnlyIssueMartV26=()=>{$$('#v26MartList .v26-health-card').forEach(c=>c.style.display=c.dataset.status==='?뺤긽'?'none':'block')};

  const oldOpenAdminTab=window.openAdminTab; window.openAdminTab=function(id){if(oldOpenAdminTab)oldOpenAdminTab(id); setTimeout(()=>{if(id==='p-mode')renderModeOps(); if(id==='p-datamart')renderMartOps(); if(id==='p-list')renderListOps();},90)};
  const oldOa=window.oa; window.oa=function(){if(oldOa)oldOa(); setTimeout(()=>{const active=[...$$('.atb')].find(b=>b.classList.contains('on')); const id=(active?.getAttribute('onclick')||'').match(/'([^']+)'/)?.[1]||'p-req'; if(id==='p-mode')renderModeOps(); if(id==='p-datamart')renderMartOps(); if(id==='p-list')renderListOps();},120)};

  function boot(){document.documentElement.setAttribute('data-font-size',fontSize); installChatControls(); ensureAskModal(); const top=$('#topModeSwitch'); if(top)top.remove(); if($('#p-mode')&&$('.atb.on')?.getAttribute('onclick')?.includes('p-mode'))renderModeOps();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(boot,180)); else setTimeout(boot,180);
})();



<!-- ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??     v27 UX HARDENING ??readability, full popups, community loop,
     simple permission model, stable companion
     ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??-->
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
.v27-mode-console{display:grid;grid-template-columns:290px 1fr;gap:14px}.v27-mode-side{background:var(--bg-2);border:1px solid var(--border-1);border-radius:18px;padding:12px}.v27-mode-select{width:100%;display:flex;justify-content:space-between;align-items:center;gap:8px;border:0;background:transparent;color:var(--text-3);border-radius:13px;padding:13px;cursor:pointer;font-size:14px;font-weight:950}.v27-mode-select:hover,.v27-mode-select.on{background:var(--accent-dim);color:var(--accent)}.v27-pack-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.v27-pack{background:var(--bg-2);border:1px solid var(--border-1);border-radius:16px;padding:15px}.v27-pack-top{display:flex;justify-content:space-between;gap:10px;align-items:flex-start}.v27-pack-title{font-size:15px;font-weight:950;color:var(--text-1);line-height:1.4}.v27-pack-meta{font-size:12.5px;color:var(--text-3);line-height:1.55;margin-top:5px}.v27-toggle{width:42px;height:23px;border-radius:999px;background:var(--bg-5);position:relative;cursor:pointer;flex:0 0 auto}.v27-toggle:after{content:'';position:absolute;width:17px;height:17px;border-radius:50%;background:#fff;left:3px;top:3px;transition:.14s}.v27-toggle.on{background:var(--accent)}.v27-toggle.on:after{left:22px}.v27-exception{background:var(--bg-1);border:1px solid var(--border-1);border-radius:14px;padding:13px;margin-top:12px}.v27-exception-title{font-size:13px;font-weight:950;color:var(--text-1);margin-bottom:7px}.v27-flow-simple{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin:14px 0}.v27-flow-node{background:var(--bg-2);border:1px solid var(--border-1);border-radius:14px;padding:14px;text-align:center;position:relative}.v27-flow-node:not(:last-child):after{content:'??;position:absolute;right:-11px;top:50%;transform:translateY(-50%);color:var(--text-4);font-weight:950}.v27-flow-node .ic{font-size:22px}.v27-flow-node .t{font-size:13px;font-weight:950;color:var(--text-1);margin-top:6px}.v27-source-health{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.v27-health-card{background:var(--bg-2);border:1px solid var(--border-1);border-radius:16px;padding:15px}.v27-health-title{font-size:15px;font-weight:950;color:var(--text-1);display:flex;justify-content:space-between;gap:8px}.v27-health-desc{font-size:12.5px;color:var(--text-3);line-height:1.55;margin-top:6px}.v27-health-bar{height:8px;background:var(--bg-4);border-radius:999px;overflow:hidden;margin-top:10px}.v27-health-bar span{display:block;height:100%;background:var(--g);border-radius:999px}.v27-health-bar.warn span{background:var(--a)}
@media(max-width:1100px){.v27-mode-console{grid-template-columns:1fr}.v27-pack-list,.v27-source-health,.v27-flow-simple{grid-template-columns:1fr}.v27-flow-node:after{display:none}}

/* Companion: stable, visible, playful */
.companion-card{overflow:visible!important}.companion-main{overflow:visible!important;position:relative!important;border-radius:18px!important}.companion-main>.buddy-3d{width:82px!important;height:82px!important;flex-basis:82px!important;margin:-8px 0 -4px -2px!important;overflow:visible!important}.buddy-3d{overflow:visible!important}.buddy-hat{top:-5px!important;z-index:5!important}.buddy-face,.buddy-body,.buddy-hair,.buddy-arm,.buddy-wheel,.buddy-eye,.buddy-smile,.buddy-badge{z-index:2}.companion-hub{transition:left .8s var(--ease),right .8s var(--ease),bottom .8s var(--ease),transform .2s var(--ease)!important}.companion-hub.v27-walk{animation:v27BuddyBob 3.2s ease-in-out infinite}.companion-hub.v27-left{right:auto!important;left:22px!important}.companion-hub.v27-right{left:auto!important;right:22px!important}.v27-buddy-speech{position:absolute;right:6px;bottom:calc(100% + 12px);max-width:310px;background:var(--bg-1);border:1px solid var(--border-2);border-radius:16px 16px 4px 16px;padding:12px 14px;font-size:13px;color:var(--text-2);line-height:1.55;box-shadow:0 14px 38px rgba(0,0,0,.35);display:none;z-index:20}.v27-buddy-speech.sh{display:block;animation:fu .18s var(--ease)}.v27-buddy-speech:after{content:'';position:absolute;right:28px;bottom:-7px;width:14px;height:14px;background:var(--bg-1);border-right:1px solid var(--border-2);border-bottom:1px solid var(--border-2);transform:rotate(45deg)}@keyframes v27BuddyBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.mp-character-hero{overflow:visible!important;min-height:150px!important}.mp-character-hero .buddy-3d{width:124px!important;height:124px!important;flex-basis:124px!important;transform:none!important;margin:0 8px!important}.mp-character-title{font-size:22px!important}.mp-character-desc{font-size:14px!important}#ct-char .char-room{overflow:visible!important;min-height:360px!important}.v23-char-scene{height:260px!important;width:240px!important}.v23-char-scene .buddy-3d{left:78px!important;top:55px!important;transform:scale(1.75)!important}.v23-char-scene .buddy-3d:hover{transform:scale(1.82) translateY(-4px)!important}.shop-item,.inv-slot,.char-sel{touch-action:manipulation!important}.shop-grid{grid-template-columns:repeat(auto-fill,minmax(106px,1fr))!important}.shop-item{min-height:102px!important;padding:13px 10px!important}.shop-ic{font-size:30px!important}.shop-nm{font-size:12px!important}.shop-pr{font-size:12px!important}
</style>

(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const say=(m,i='??,d=2300)=>{try{(window.toast||window.say||console.log)(m,i,d)}catch(e){console.log(i,m)}};
  const stageLabel={
    '?묒꽦쨌蹂댁셿以?:'?묒꽦쨌蹂댁셿以?,'?깅줉 ?붿껌??:'?깅줉 ?붿껌??,'理쒖쥌?붿껌':'?뱀씤?붿껌','蹂댁셿 ?붿껌':'蹂댁셿 ?붿껌','AI 寃??諛섏쁺?꾨즺':'AI 寃??諛섏쁺?꾨즺','諛섏쁺?꾨즺':'AI寃?됰컲??,'?뱀씤??:'AI 寃??諛섏쁺?꾨즺'
  };
  function normalizeStatusText(root=document){
    try{
      const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){return /?묒꽦쨌蹂댁셿以??깅줉 ?붿껌??理쒖쥌?붿껌|蹂댁셿 ?붿껌|AI 寃??諛섏쁺?꾨즺|諛섏쁺?꾨즺/.test(node.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});
      const nodes=[]; while(walker.nextNode())nodes.push(walker.currentNode);
      nodes.forEach(n=>{Object.entries(stageLabel).forEach(([a,b])=>{n.nodeValue=n.nodeValue.split(a).join(b)})});
    }catch(e){}
  }
  function statePill(st){
    const map={
      '?묒꽦쨌蹂댁셿以?:['draft','?뱷'],'?깅줉 ?붿껌??:['requested','??'],'?쒖뒪??寃?좎쨷':['review','?뵊'],'蹂댁셿 ?붿껌':['returned','?⑼툘'],'AI 寃??諛섏쁺?꾨즺':['live','??]
    }; const [c,ic]=map[st]||['draft','??]; return `<span class="v27-state ${c}">${ic} ${st}</span>`;
  }
  function modeChips(modes){return modes.map(m=>`<span class="mode-badge ${m.includes('?앹궛')?'mode-prod':m.includes('?쇰컲')?'mode-general':m.includes('?먭?')?'mode-cost':'mode-all'}">${esc(m.replace(' 紐⑤뱶',''))}</span>`).join('')}

  /* Source panel fullscreen button */
  window.toggleSourceFullV27=function(){const rp=$('#rp'); if(!rp)return; rp.classList.toggle('source-full'); say(rp.classList.contains('source-full')?'?듬? 洹쇨굅瑜??ш쾶 遊낅땲??':'?듬? 洹쇨굅 ?⑤꼸 ?ш린瑜??먮옒?濡??뚮졇?듬땲??','?뵊',1600)};
  function installSourceTools(){
    const h=$('#rp .rp-h'); if(h&&!$('#sourceFullBtn')){
      const btn=document.createElement('button'); btn.id='sourceFullBtn'; btn.className='rp-c'; btn.title='洹쇨굅 ?⑤꼸 ?ш쾶 蹂닿린'; btn.innerHTML='??; btn.onclick=(e)=>{e.stopPropagation();toggleSourceFullV27()};
      const close=h.querySelector('.rp-c'); h.insertBefore(btn,close||null);
    }
  }

  /* Bigger popup fullscreen */
  window.toggleLargeModalMaxV27=function(id){const m=$(id); if(!m)return; m.classList.toggle('full'); const b=m.querySelector('.v27-max-btn'); if(b)b.textContent=m.classList.contains('full')?'??:'??;};

  /* Team folder modal rebuilt with clearer states */
  const teams=['援щℓ?꾨왂?','諛섎룄泥닿뎄留ㅽ?','援щℓ?덉쭏湲고쉷?','PT?쒖뼱遺?덇뎄留ㅽ?','援щℓ??웾媛쒕컻?','?ㅼ떆遺?덇뎄留??','?섏옣?쒖뒪?쒕??덇컻諛쒗?','?쇰컲?먯옱援щℓ?','?먭?愿由ы?'];
  const folders=[['all','?꾩껜 臾몄꽌','?뱴'],['policy','援щℓ洹쒖젙쨌?쒕룄','?뱯'],['bid','?낆같愿由?,'?뤇截?],['manual','VAATZ 留ㅻ돱??,'?뼢截?],['quality','?덉쭏 5?ㅽ?','狩?],['cost','?먭?쨌?④?','?뮥'],['mro','?쇰컲?먯옱쨌MRO','?벀'],['global','?댁쇅援щℓ','?뙋']];
  const names=['?낆같?댁쁺 ?낅Т?쒖?','援щℓ?낅Т洹쒖젙 ?꾨Ц','寃쎈ℓ?낆같 媛?대뱶?쇱씤','VAATZ ?낆같紐⑤뱢 留ㅻ돱??,'?덉쭏 5?ㅽ? ?댁쁺湲곗?','?꾨룞??遺???④? 踰ㅼ튂留덊겕','?댁쇅踰뺤씤 援щℓ ?뱀씤 ?꾨줈?몄뒪','?먭? ?곗젙 湲곗???,'?쇰컲?먯옱 MRO 援щℓ 媛?대뱶','?섏쓽怨꾩빟 ?ъ쑀???묒떇','寃?섑솗???낅Т?쒖?','?묐젰???됯? ?곗씠?곗뀑','援щℓ?⑹뼱 ?쒖??뺤쓽吏?,'諛섎룄泥??섏텧洹쒖젣 ?꾪솴','怨꾩빟愿由?洹쒖젙','ESG 援щℓ ?댁쁺 媛?대뱶','?⑷린 由ъ뒪?????留ㅻ돱??,'?묐젰???좉퇋 ?깅줉 ?덉감'];
  const modes=['?듯빀紐⑤뱶','?앹궛?먯옱 紐⑤뱶','?쇰컲?먯옱 紐⑤뱶','?먭?紐⑤뱶'];
  const secs=['由щ뜑 ?꾩슜','?쇰컲 怨듦컻','吏???ъ슜??];
  const types=['PDF','PPT','DOCX','XLSX'];
  let v27Team='援щℓ?꾨왂?', v27Folder='all';
  let v27Docs=[];
  function makeV27Docs(){
    let out=[]; teams.forEach((team,ti)=>{for(let i=0;i<92+(ti%4)*14;i++){
      let st='?묒꽦쨌蹂댁셿以?; if(i<6+ti%4)st='?깅줉 ?붿껌??; if(i%37===0)st='?쒖뒪??寃?좎쨷'; if(i%41===0)st='蹂댁셿 ?붿껌'; if(i>72+(ti%4)*10)st='AI 寃??諛섏쁺?꾨즺';
      const f=folders[1+((i+ti)% (folders.length-1))][0];
      const myModes=modes.filter((m,mi)=>(i+mi+ti)%3!==0); if(!myModes.length)myModes.push('?듯빀紐⑤뱶');
      out.push({id:`V27-${ti}-${i}`,team,folder:f,name:`${names[(i+ti)%names.length]}_${String(i+1).padStart(3,'0')}.${types[(i+ti)%types.length].toLowerCase()}`,type:types[(i+ti)%types.length],sec:secs[(i+ti)%secs.length],modes:myModes,version:`v${1+i%5}.${i%10}`,owner:i%4===0?'? Admin':i%4===1?'???寃??:'????낅줈??,date:`2026.05.${String(1+i%23).padStart(2,'0')}`,status:st,chunks:80+(i*13)%520});
    }}); return out;
  }
  v27Docs=makeV27Docs();
  function secPill(sec){let cls=sec==='由щ뜑 ?꾩슜'?'red':sec==='吏???ъ슜???'violet':'green'; return `<span class="v27-pill ${cls}">${esc(sec)}</span>`}
  function renderTeamRowsV27(){
    const q=($('#teamDocSearch')?.value||'').toLowerCase().trim(); const st=$('#teamDocStatusFilter')?.value||''; const sec=$('#teamDocSecFilter')?.value||'';
    let list=v27Docs.filter(d=>d.team===v27Team&&(v27Folder==='all'||d.folder===v27Folder)&&(!st||d.status===st)&&(!sec||d.sec===sec)&&(!q||`${d.name} ${d.owner} ${d.sec} ${d.modes.join(' ')} ${d.status}`.toLowerCase().includes(q)));
    const body=$('#teamDocRows'); if(!body)return; body.innerHTML=list.map(d=>`<tr><td><input type="checkbox" class="check-lg team-doc-check" data-id="${d.id}"></td><td><div class="v25-doc-title">${esc(d.name)}</div><div class="v25-doc-path">/${esc(folders.find(f=>f[0]===d.folder)?.[1||0]||d.folder)} 쨌 ${d.date} 쨌 ${d.chunks} chunks</div></td><td>${d.type}</td><td>${secPill(d.sec)}</td><td><div class="v25-mode-set">${modeChips(d.modes)}</div></td><td>${d.version}</td><td>${d.owner}</td><td>${statePill(d.status)}</td><td><div class="row-actions"><button class="v27-btn" onclick="previewTeamDocV27('${d.id}')">蹂닿린</button><button class="v27-btn primary" onclick="requestOneTeamDoc('${d.id}')">?뱀씤 ?붿껌</button></div></td></tr>`).join('')||`<tr><td colspan="9"><div class="v27-empty">議곌굔??留욌뒗 臾몄꽌媛 ?놁뒿?덈떎.</div></td></tr>`;
    const count=$('#teamDocCount'); if(count)count.textContent=`${list.length.toLocaleString()}嫄??쒖떆`;
    normalizeStatusText(body);
  }
  window.openTeamFolderModal=function(team){
    v27Team=team||v27Team; v27Folder='all'; const m=$('#teamFolderModal'); if(!m)return;
    const teamDocs=v27Docs.filter(d=>d.team===v27Team);
    m.classList.remove('full');
    m.innerHTML=`<div class="large-box"><div class="large-hd"><div><div class="large-title">?뱚 ${esc(v27Team)} 臾몄꽌??/div><div class="large-sub">臾몄꽌媛 留롮븘???대뜑쨌寃?됀룹긽???꾪꽣濡?醫곹?蹂닿퀬, ?꾩슂??臾몄꽌留?System Admin ?뱀씤 ?붿껌?쇰줈 蹂대깄?덈떎.</div></div><div class="v27-modal-actions"><button class="v27-icon-btn v27-max-btn" onclick="toggleLargeModalMaxV27('#teamFolderModal')" title="?꾩껜李?>??/button><button class="large-close" onclick="closeTeamFolderModal()">??/button></div></div><div class="large-toolbar"><label style="font-size:13px;color:var(--text-3);display:flex;gap:7px;align-items:center"><input type="checkbox" class="check-lg" onchange="toggleTeamDocAll(this)"> ?꾩껜 ?좏깮</label><div class="large-search"><span>?뵇</span><input id="teamDocSearch" placeholder="臾몄꽌紐? ?대떦?? 蹂댁븞?깃툒, AI 紐⑤뱶, ?곹깭 寃?? oninput="renderTeamDocRows()"></div><select class="frm-i frm-sel" id="teamDocStatusFilter" style="width:160px" onchange="renderTeamDocRows()"><option value="">?꾩껜 ?④퀎</option><option>?묒꽦쨌蹂댁셿以?/option><option>?깅줉 ?붿껌??/option><option>?쒖뒪??寃?좎쨷</option><option>蹂댁셿 ?붿껌</option><option>AI 寃??諛섏쁺?꾨즺</option></select><select class="frm-i frm-sel" id="teamDocSecFilter" style="width:150px" onchange="renderTeamDocRows()"><option value="">?꾩껜 蹂댁븞</option><option>由щ뜑 ?꾩슜</option><option>?쇰컲 怨듦컻</option><option>吏???ъ슜??/option></select><button class="v27-btn primary" onclick="submitSelectedTeamDocs()">?? ?좏깮 ?뱀씤 ?붿껌</button><span id="teamDocCount" style="margin-left:auto;color:var(--text-4);font-size:13px"></span></div><div class="large-body"><div class="v27-stage-strip"><div class="v27-stage-card"><div class="n">${teamDocs.filter(d=>d.status==='?묒꽦쨌蹂댁셿以?).length}</div><div class="l">?묒꽦쨌蹂댁셿以?br>?낅줈?쑣룸낫???④퀎</div></div><div class="v27-stage-card"><div class="n">${teamDocs.filter(d=>d.status==='?깅줉 ?붿껌??||d.status==='?쒖뒪??寃?좎쨷').length}</div><div class="l">System ?뱀씤 ?湲?br>援щℓ?붿??몄텛吏꾪? 寃??/div></div><div class="v27-stage-card"><div class="n">${teamDocs.filter(d=>d.status==='蹂댁셿 ?붿껌').length}</div><div class="l">蹂댁셿 ?붿껌<br>蹂댁븞쨌以묐났쨌踰꾩쟾 蹂댁셿</div></div><div class="v27-stage-card"><div class="n">${teamDocs.filter(d=>d.status==='AI 寃??諛섏쁺?꾨즺').length}</div><div class="l">AI 寃??諛섏쁺?꾨즺<br>RAG 寃???쒖꽦</div></div></div><div class="v25-folder-layout"><div class="v25-folder-tree"><div class="v25-folder-head">${esc(v27Team)} ?대뜑</div>${folders.map(f=>`<button class="v25-folder ${f[0]==='all'?'on':''}" onclick="selectTeamFolder('${f[0]}',this)"><span>${f[2]} ${f[1]}</span><span class="cnt">${f[0]==='all'?teamDocs.length:teamDocs.filter(d=>d.folder===f[0]).length}</span></button>`).join('')}<div class="mode-note" style="margin-top:12px">?곹깭 ?⑹뼱: ?묒꽦쨌蹂댁셿以????깅줉 ?붿껌?????쒖뒪??寃?좎쨷 ??AI 寃??諛섏쁺?꾨즺. 蹂댁셿 ?붿껌???쒕낫???붿껌?앹쑝濡??쒖떆?⑸땲??</div></div><div class="large-table-wrap"><table class="large-table"><thead><tr><th></th><th>臾몄꽌紐?/th><th>?좏삎</th><th>蹂댁븞</th><th>AI 紐⑤뱶</th><th>踰꾩쟾</th><th>?대떦??/th><th>?④퀎</th><th>?묒뾽</th></tr></thead><tbody id="teamDocRows"></tbody></table></div></div></div></div>`;
    m.classList.add('sh'); renderTeamRowsV27();
  };
  window.closeTeamFolderModal=()=>$('#teamFolderModal')?.classList.remove('sh');
  window.selectTeamFolder=(id,btn)=>{v27Folder=id;$$('#teamFolderModal .v25-folder').forEach(b=>b.classList.remove('on'));btn?.classList.add('on');renderTeamRowsV27();};
  window.renderTeamDocRows=renderTeamRowsV27;
  window.toggleTeamDocAll=chk=>$$('#teamFolderModal .team-doc-check').forEach(c=>c.checked=chk.checked);
  window.submitSelectedTeamDocs=()=>{const ids=$$('#teamFolderModal .team-doc-check:checked').map(c=>c.dataset.id); if(!ids.length)return say('?뱀씤 ?붿껌??臾몄꽌瑜??좏깮?댁＜?몄슂.','?좑툘'); ids.forEach(id=>{const d=v27Docs.find(x=>x.id===id); if(d)d.status='?깅줉 ?붿껌??}); renderTeamRowsV27(); say(`${ids.length}嫄댁쓣 System Admin ?뱀씤 ?湲곗뿴濡?蹂대깉?듬땲??`,'??')};
  window.requestOneTeamDoc=id=>{const d=v27Docs.find(x=>x.id===id); if(d)d.status='?깅줉 ?붿껌??; renderTeamRowsV27(); say('System Admin ?뱀씤 ?湲곗뿴濡?蹂대깉?듬땲??','??')};
  window.previewTeamDocV27=id=>{const d=v27Docs.find(x=>x.id===id); if(!d)return; say(`${d.name} ?먮Ц 誘몃━蹂닿린: 洹쇨굅 酉곗뼱 ?뺤떇?쇰줈 ?????덉뒿?덈떎.`,'?뱞',2600)};

  /* Community v27 */
  let v27Qa=[
    {id:1,cat:'?낆같',status:'梨꾪깮',likes:47,answers:8,title:'?꾨젰?곸엯李곗뿉??1?뚯감 ?좎같 ??泥섎━ ?덉감媛 沅곴툑?⑸땲??,body:'?낆같 1?뚯감 ?좎같 ???ш났怨좎? ?섏쓽怨꾩빟 ?꾪솚 湲곗????룰컝由쎈땲?? VAATZ 泥섎━ 硫붾돱???④퍡 ?뚭퀬 ?띠뒿?덈떎.',tags:['?꾨젰?곸엯李?,'?좎같','?섏쓽怨꾩빟'],author:'怨꾩빟珥덈낫',time:'3????,candidate:true},
    {id:2,cat:'5?ㅽ?',status:'?닿껐以?,likes:23,answers:5,title:'5?ㅽ? 4???깃툒 ?밴툒 ???꾩옣 ?ъ궗 ??ぉ??蹂寃쎈릺?덈굹??',body:'IATF 16949 ?몄쬆??5?ㅽ? ?밴툒 ?꾩닔?몄?, 湲곗〈 ?묐젰???좎삁湲곌컙???덈뒗吏 ?뺤씤?섍퀬 ?띠뒿?덈떎.',tags:['5?ㅽ?','IATF16949','?묐젰?ы룊媛'],author:'?덉쭏留ㅻ땲?',time:'1????,candidate:true},
    {id:3,cat:'?먭?',status:'?듬??湲?,likes:18,answers:2,title:'?먭?紐⑤뱶?먯꽌 ?④? 踰ㅼ튂留덊겕 ?먮즺???대뼡 沅뚰븳?쇰줈 寃?됰릺?섏슂?',body:'?먭???臾몄꽌媛 由щ뜑 ?꾩슜?몄? 吏???ъ슜??臾몄꽌?몄?, AI 紐⑤뱶蹂??묎렐 ?뺤콉??沅곴툑?⑸땲??',tags:['?먭?紐⑤뱶','蹂댁븞?깃툒','?④?'],author:'?먭?遺꾩꽍',time:'?ㅻ뒛',candidate:false},
    {id:4,cat:'VAATZ',status:'HOT',likes:31,answers:7,title:'VAATZ 諛쒖＜ ?앹꽦 ??怨듦툒???듬낫媛 ?꾨씫?????뺤씤??泥댄겕?ъ씤??,body:'諛쒖＜?쒕뒗 ?앹꽦?먮뒗???묐젰???뚮┝????媛붾떎??臾몄쓽媛 ?덉뒿?덈떎. 硫붾돱蹂??뺤씤 ?쒖꽌瑜??뚮젮二쇱꽭??',tags:['VAATZ','諛쒖＜','?묐젰?ъ븣由?],author:'VAATZ?ъ씤',time:'?ㅻ뒛',candidate:false},
    {id:5,cat:'?쇰컲?먯옱',status:'NEW',likes:9,answers:1,title:'MRO 移댄깉濡쒓렇 ?덈ぉ怨??섏쓽怨꾩빟 ?ъ쑀?쒓? 媛숈씠 ?꾩슂??寃쎌슦',body:'?쇰컲?먯옱 援щℓ?먯꽌 移댄깉濡쒓렇 ?덈ぉ?몃뜲 ?덉쇅?곸쑝濡??섏쓽怨꾩빟 ?ъ쑀?쒓? ?꾩슂???щ?媛 ?덈뒗吏 沅곴툑?⑸땲??',tags:['MRO','?쇰컲?먯옱','?섏쓽怨꾩빟'],author:'MRO?대떦',time:'諛⑷툑',candidate:false},
    {id:6,cat:'?댁쇅援щℓ',status:'?닿껐以?,likes:14,answers:3,title:'?댁쇅 諛쒖＜ ???섏쑉 ?곸슜 湲곗??쇨낵 ?뺤궛 諛⑹떇',body:'諛쒖＜??湲곗??몄? 寃?섏씪 湲곗??몄?, 李⑥븸 ?뺤궛? ?대뼡 ?꾨줈?몄뒪濡??섎뒗吏 ?뚭퀬 ?띠뒿?덈떎.',tags:['?댁쇅援щℓ','?섏쑉','?뺤궛'],author:'湲濡쒕쾶?뚯떛',time:'?ㅻ뒛',candidate:false}
  ];
  let commState={cat:'?꾩껜',status:'?꾩껜',tag:'',query:'',selected:1};
  const cats=['?꾩껜','?낆같','怨꾩빟','VAATZ','5?ㅽ?','?먭?','?쇰컲?먯옱','?댁쇅援щℓ','?묐젰??];
  function qTags(){return [...new Set(v27Qa.flatMap(q=>q.tags))].slice(0,22)}
  function qFiltered(){const q=commState.query.toLowerCase();return v27Qa.filter(x=>(commState.cat==='?꾩껜'||x.cat===commState.cat)&&(commState.status==='?꾩껜'||x.status===commState.status)&&(!commState.tag||x.tags.includes(commState.tag))&&(!q||`${x.title} ${x.body} ${x.tags.join(' ')} ${x.cat}`.toLowerCase().includes(q)))}
  function stCls(s){return s==='梨꾪깮'?'green':s==='?듬??湲??'amber':s==='HOT'?'red':s==='NEW'?'blue':'violet'}
  function renderDetail(q){if(!q)return `<div class="v27-empty">吏덈Ц???좏깮?섎㈃ ?곸꽭媛 ?쒖떆?⑸땲??</div>`;return `<div class="v27-loop-card"><div class="v27-loop-ic">?뮕</div><div><div class="v27-loop-title">吏???좎닚??/div><div class="v27-loop-desc">醫뗭븘??10媛??댁긽 + 梨꾪깮 ?듬?? ?쏛I ?숈뒿 寃利??꾨낫?앸줈 ?щ씪媛怨? System Admin 寃利???RAG DB??諛섏쁺?⑸땲??</div></div></div><div class="v27-detail-card"><div class="v27-meta"><span class="v27-pill ${stCls(q.status)}">${q.status}</span><span>${q.cat}</span>${q.tags.map(t=>`<button class="v27-tag" onclick="v27SetTag('${esc(t)}')">#${esc(t)}</button>`).join('')}</div><div class="v27-detail-title">${esc(q.title)}</div><div class="v27-detail-body">${esc(q.body)}</div><div class="v27-answer"><div class="v27-answer-h"><div class="v27-answer-author">?꾨줈?먯뼱留덉뒪??쨌 梨꾪깮 ?듬? ?덉떆</div><span class="v27-pill green">醫뗭븘??${q.likes}</span></div><div class="v27-answer-body">援щℓ?낅Т洹쒖젙怨?VAATZ 硫붾돱 寃쎈줈瑜??④퍡 ?뺤씤?섎㈃ 醫뗭뒿?덈떎. ?좎같 ?댄썑?먮뒗 ?ш났怨? 李몄뿬?낆껜 ?뺣?, ?섏쓽怨꾩빟 ?꾪솚??寃?좏븯怨? 湲덉븸 湲곗????곕씪 援щℓ?꾩썝???먮뒗 ???寃곗옱瑜?吏꾪뻾?⑸땲??</div><div class="v27-answer-actions"><button class="v27-btn" onclick="v27Like(${q.id})">?몟 醫뗭븘??/button><button class="v27-btn" onclick="v27SaveNote(${q.id})">狩?硫붾え ???/button><button class="v27-btn" onclick="v27Nominate(${q.id})">?쭬 AI 寃利??꾨낫</button></div></div><div class="v27-answer v27-reply"><div class="v27-answer-author" style="margin-bottom:8px">?듬? ?묒꽦</div><textarea id="v27Reply" placeholder="洹쇨굅 臾몄꽌, 洹쒖젙 議고빆, VAATZ 硫붾돱 寃쎈줈瑜??ы븿???듬??대낫?몄슂."></textarea><div class="v27-answer-actions" style="justify-content:flex-end"><button class="v27-btn" onclick="say('?꾩떆 ??ν뻽?듬땲??','?뮶')">?꾩떆???/button><button class="v27-btn primary" onclick="v27PostAnswer(${q.id})">?듬? ?깅줉</button></div></div></div>`}
  window.renderCommunityV27=function(){const box=$('.comm-box'); if(box){box.classList.add('v27-wide');box.classList.remove('v26-wide')} const ct=$('#ct-qa'); if(!ct)return; const list=qFiltered(); const selected=v27Qa.find(q=>q.id===commState.selected)||list[0]||v27Qa[0]; if(selected)commState.selected=selected.id; ct.innerHTML=`<div class="v27-comm-shell"><aside class="v27-comm-left"><div class="v27-comm-title">援щℓ蹂몃?<br>吏?앹빱裕ㅻ땲??/div><div class="v27-comm-sub">吏덈Ц쨌?듬?쨌梨꾪깮쨌AI 諛섏쁺源뚯? ?댁뼱吏??援щℓ 吏???덈툕?낅땲??</div><div class="v27-stats"><div class="v27-stat"><div class="v">${v27Qa.length}</div><div class="l">?섑뵆 吏덈Ц</div></div><div class="v27-stat"><div class="v">82%</div><div class="l">?닿껐瑜?/div></div><div class="v27-stat"><div class="v">${v27Qa.filter(q=>q.candidate).length}</div><div class="l">AI ?꾨낫</div></div><div class="v27-stat"><div class="v">18</div><div class="l">?ㅻ뒛 ?쒕룞</div></div></div><div class="v27-filter-title">移댄뀒怨좊━</div>${cats.map(c=>`<button class="v27-cat ${commState.cat===c?'on':''}" onclick="v27SetCat('${c}')"><span>${c==='?꾩껜'?'?뱴':c==='?낆같'?'?뤇截?:c==='VAATZ'?'?뼢截?:c==='5?ㅽ?'?'狩?:c==='?먭?'?'?뮥':c==='?쇰컲?먯옱'?'?벀':c==='?댁쇅援щℓ'?'?뙋':'?뱲'} ${c}</span><span>${c==='?꾩껜'?v27Qa.length:v27Qa.filter(q=>q.cat===c).length}</span></button>`).join('')}<div class="v27-filter-title">?멸린 ?쒓렇</div><div class="v27-tag-cloud">${qTags().map(t=>`<button class="v27-tag ${commState.tag===t?'on':''}" onclick="v27SetTag('${esc(t)}')">#${esc(t)}</button>`).join('')}</div></aside><main class="v27-comm-main"><div class="v27-list-head"><div><div class="v27-comm-title">Q&A ?먯깋</div><div class="v27-comm-sub">吏덈Ц, ?듬?, ?쒓렇瑜?寃?됲븯怨??듬??湲?吏덈Ц??諛붾줈 ?뺤씤?섏꽭??</div><div class="v27-search"><span>?뵇</span><input value="${esc(commState.query)}" placeholder="吏덈Ц쨌?듬?쨌?쒓렇 寃?? oninput="v27Search(this.value)"></div></div><div class="v27-list-actions"><button class="v27-btn" onclick="v27SetStatus('?듬??湲?)">?듬??湲?/button><button class="v27-btn" onclick="v27SetStatus('梨꾪깮')">梨꾪깮</button><button class="v27-btn" onclick="v27ClearFilters()">珥덇린??/button><button class="v27-btn primary" onclick="v27OpenAsk()">竊?吏덈Ц?섍린</button></div></div><div class="v27-meta" style="margin-bottom:12px"><select class="v26-select" onchange="v27SetStatus(this.value)"><option ${commState.status==='?꾩껜'?'selected':''}>?꾩껜</option><option ${commState.status==='?듬??湲??'selected':''}>?듬??湲?/option><option ${commState.status==='?닿껐以??'selected':''}>?닿껐以?/option><option ${commState.status==='梨꾪깮'?'selected':''}>梨꾪깮</option><option ${commState.status==='HOT'?'selected':''}>HOT</option><option ${commState.status==='NEW'?'selected':''}>NEW</option></select><span>${list.length}媛?吏덈Ц ?쒖떆</span></div><div class="v27-q-list">${list.map(q=>`<article class="v27-q-card ${q.id===commState.selected?'on':''}" onclick="v27SelectQ(${q.id})"><div class="v27-q-row"><div class="v27-vote-box"><div class="n">${q.likes}</div><div class="l">醫뗭븘??/div></div><div style="min-width:0;flex:1"><div class="v27-q-title">${esc(q.title)}</div><div class="v27-q-body">${esc(q.body)}</div><div class="v27-meta"><span class="v27-pill ${stCls(q.status)}">${q.status}</span><span>?뮠 ${q.answers}</span><span>?뫀 ${esc(q.author)}</span><span>${q.time}</span>${q.candidate?'<span class="v27-pill violet">AI ?꾨낫</span>':''}${q.tags.map(t=>`<button class="v27-tag" onclick="event.stopPropagation();v27SetTag('${esc(t)}')">#${esc(t)}</button>`).join('')}</div></div></div></article>`).join('')||'<div class="v27-empty">寃??寃곌낵媛 ?놁뒿?덈떎.</div>'}</div></main><aside class="v27-comm-detail">${renderDetail(selected)}</aside></div>`;normalizeStatusText(ct)};
  window.v27SelectQ=id=>{commState.selected=id;renderCommunityV27()}; window.v27SetCat=c=>{commState.cat=c;commState.selected=(qFiltered()[0]||v27Qa[0]).id;renderCommunityV27()}; window.v27SetStatus=s=>{commState.status=s;commState.selected=(qFiltered()[0]||v27Qa[0]).id;renderCommunityV27()}; window.v27SetTag=t=>{commState.tag=commState.tag===t?'':t;commState.selected=(qFiltered()[0]||v27Qa[0]).id;renderCommunityV27()}; window.v27Search=v=>{commState.query=v;clearTimeout(window.__v27q);window.__v27q=setTimeout(renderCommunityV27,100)}; window.v27ClearFilters=()=>{commState={cat:'?꾩껜',status:'?꾩껜',tag:'',query:'',selected:v27Qa[0].id};renderCommunityV27()}; window.v27Like=id=>{const q=v27Qa.find(x=>x.id===id); if(q)q.likes++; renderCommunityV27(); say('醫뗭븘?붾? 諛섏쁺?덉뒿?덈떎.','?몟',1300)}; window.v27Nominate=id=>{const q=v27Qa.find(x=>x.id===id); if(q)q.candidate=true; renderCommunityV27(); say('AI ?숈뒿 寃利??꾨낫濡??щ졇?듬땲?? System Admin 寃利???諛섏쁺?⑸땲??','?쭬',2600)}; window.v27PostAnswer=id=>{const q=v27Qa.find(x=>x.id===id); if(q){q.answers++;q.status='?닿껐以?;} renderCommunityV27(); say('?듬????깅줉?섏뿀?듬땲??','??)}; window.v27SaveNote=id=>{const q=v27Qa.find(x=>x.id===id); if(window.openMemoModal){openMemoModal();$('#v25MemoTitle').value='而ㅻ??덊떚 ??? '+q.title;$('#v25MemoBody').value=`[${q.cat}] ${q.title}\n\n${q.body}\n\n?쒓렇: ${q.tags.map(t=>'#'+t).join(' ')}`;}else say('硫붾え????ν뻽?듬땲??','狩?)};
  function installCommunityMax(){const hd=$('.comm-hd'); if(hd&&!$('#v27CommMax')){const bar=document.createElement('div');bar.className='v27-comm-toolbar';bar.innerHTML='<button class="v27-icon-btn" id="v27CommMax" title="而ㅻ??덊떚 ?꾩껜李? onclick="toggleCommFullV27()">??/button>';hd.appendChild(bar)}}
  window.toggleCommFullV27=()=>{const b=$('.comm-box'); if(!b)return; b.classList.toggle('v27-full'); $('#v27CommMax')&&($('#v27CommMax').textContent=b.classList.contains('v27-full')?'??:'??)};
  const oldOpenComm=window.openComm; window.openComm=function(tab){oldOpenComm&&oldOpenComm(tab); setTimeout(()=>{installCommunityMax(); if(tab==='qa'||!tab)renderCommunityV27();},30)};

  /* Ask modal with direct category + tags */
  let askTags=[];
  function renderAskTags(){const ed=$('#v27TagEditor'), input=$('#v27TagInput'); if(!ed||!input)return; ed.querySelectorAll('.v27-tag-item').forEach(e=>e.remove()); askTags.forEach(t=>{const sp=document.createElement('span');sp.className='v27-tag-item';sp.innerHTML=`#${esc(t)} <button onclick="v27RemoveAskTag('${esc(t)}')">횞</button>`;ed.insertBefore(sp,input)})}
  function ensureAsk(){if($('#v27AskModal'))return; document.body.insertAdjacentHTML('beforeend',`<div class="v27-ask-modal" id="v27AskModal" onclick="if(event.target===this)v27CloseAsk()"><div class="v27-ask-box"><div class="v27-ask-h"><div><div class="v27-ask-title">吏덈Ц ?깅줉</div><div class="v27-comm-sub">移댄뀒怨좊━??吏곸젒 ?낅젰?????덇퀬, ?쒓렇??Enter濡?異붽??⑸땲??</div></div><button class="large-close" onclick="v27CloseAsk()">??/button></div><div class="v27-ask-body"><div class="v27-form-grid"><div class="v27-field"><label>移댄뀒怨좊━</label><input id="v27AskCat" list="v27CatList" placeholder="?? ?낆같, ESG援щℓ, ?먭?, ?좉퇋 移댄뀒怨좊━"><datalist id="v27CatList">${cats.filter(c=>c!=='?꾩껜').map(c=>`<option value="${c}"></option>`).join('')}</datalist></div><div class="v27-field"><label>?쒓렇</label><div class="v27-tag-editor" id="v27TagEditor"><input id="v27TagInput" placeholder="?쒓렇 ?낅젰 ??Enter" onkeydown="v27HandleTagKey(event)"></div></div></div><div class="v27-field"><label>吏덈Ц ?쒕ぉ</label><input id="v27AskTitle" placeholder="吏덈Ц????以꾨줈 ?붿빟?댁＜?몄슂"></div><div class="v27-field"><label>?곸꽭 ?댁슜</label><textarea id="v27AskBody" placeholder="?곹솴, 愿??臾몄꽌, VAATZ ?붾㈃, ?먰븯???듬? ?뺥깭瑜??곸뼱二쇱꽭??"></textarea></div></div><div class="v27-ask-foot"><span style="font-size:13px;color:var(--text-4)">?? #?꾨젰?곸엯李?#?섏쓽怨꾩빟 #5?ㅽ? #?먭?紐⑤뱶</span><div style="display:flex;gap:8px"><button class="v27-btn" onclick="v27CloseAsk()">痍⑥냼</button><button class="v27-btn primary" onclick="v27SubmitAsk()">?깅줉</button></div></div></div></div>`)}
  window.v27OpenAsk=()=>{ensureAsk();askTags=[];['v27AskCat','v27AskTitle','v27AskBody','v27TagInput'].forEach(id=>{const el=$('#'+id);if(el)el.value=''});renderAskTags();$('#v27AskModal').classList.add('sh');setTimeout(()=>$('#v27AskTitle')?.focus(),80)}; window.v27CloseAsk=()=>$('#v27AskModal')?.classList.remove('sh'); window.v27HandleTagKey=e=>{if(e.key==='Enter'||e.key===','){e.preventDefault();const v=e.target.value.replace('#','').trim(); if(v&&!askTags.includes(v))askTags.push(v); e.target.value='';renderAskTags()}}; window.v27RemoveAskTag=t=>{askTags=askTags.filter(x=>x!==t);renderAskTags()}; window.v27SubmitAsk=()=>{const cat=$('#v27AskCat')?.value.trim()||'?쇰컲';const title=$('#v27AskTitle')?.value.trim();const body=$('#v27AskBody')?.value.trim(); if(!title||!body)return say('?쒕ぉ怨??곸꽭 ?댁슜???낅젰?댁＜?몄슂.','?좑툘'); if(!cats.includes(cat))cats.push(cat); v27Qa.unshift({id:Date.now(),cat,status:'NEW',likes:0,answers:0,title,body,tags:askTags.length?askTags:['吏덈Ц'],author:'?꾨줈?먯뼱?덉뼱濡?,time:'諛⑷툑',candidate:false});commState={cat:'?꾩껜',status:'?꾩껜',tag:'',query:'',selected:v27Qa[0].id};v27CloseAsk();renderCommunityV27();say('吏덈Ц???깅줉?섏뿀?듬땲??','??)};

  /* Simple user/permission admin */
  function renderPermissionsV27(){const el=$('#p-usr'); if(!el)return; el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">?ъ슜??쨌 沅뚰븳 愿由?/div><div class="v23-title-sub">?ъ슜??湲곕낯 ?뺣낫???щ쾲쨌吏곸콉쨌?뚯냽 湲곗??쇰줈 HR/議곗쭅 ?쒖뒪?쒖뿉??I/F ?섏떊?섍퀬, VAATZ AI?먯꽌???덉쇅 沅뚰븳怨?? Admin留?理쒖냼 愿由ы빀?덈떎.</div></div><div class="v23-actions"><button class="v27-btn">I/F ?숆린??濡쒓렇</button><button class="v27-btn primary">沅뚰븳 ?뺤콉 ???/button></div></div><div class="v27-role-grid"><div class="v27-role"><div class="ic">?뫁</div><div class="t">?쇰컲 ?ъ슜??/div><div class="d">紐⑤뱺 ?꾩쭅??湲곕낯 洹몃９. 吏곸젒 ?깅줉?섏? ?딄퀬 SSO/HR I/F濡??먮룞 諛섏쁺?⑸땲??</div><span class="v27-pill green" style="margin-top:10px">2,184紐?/span></div><div class="v27-role"><div class="ic">?쭛?랅윊?/div><div class="t">? Admin</div><div class="d">?蹂?1紐낅쭔 吏?? ? 臾몄꽌???낅줈?쑣룸낫?꽷룹듅???붿껌源뚯?留??대떦?⑸땲??</div><span class="v27-pill blue" style="margin-top:10px">9紐?/span></div><div class="v27-role"><div class="ic">?몦</div><div class="t">由щ뜑 洹몃９</div><div class="d">?꾩썝쨌????댁긽 吏곸콉?? 吏곸콉 湲곗??쇰줈 ?먮룞 ?먮퀎?섎ŉ 由щ뜑 ?꾩슜 臾몄꽌 ?묎렐???ъ슜?⑸땲??</div><span class="v27-pill violet" style="margin-top:10px">126紐?/span></div></div><div class="v27-permission"><div class="v27-perm-card"><h3>? Admin 諛곗젙</h3><p>?留덈떎 1紐낅쭔 愿由ы븯硫??⑸땲?? ????꾩썝 ?뺣낫??蹂꾨룄 沅뚰븳 ?깅줉???꾨땲??議곗쭅 I/F??吏곸콉媛믪쑝濡??먮룞 ?먮퀎?⑸땲??</p>${teams.slice(0,9).map((t,i)=>`<div class="v27-admin-row"><div class="team">${t}</div><div class="user">${['?댁???梨낆엫','理쒖쑀吏?留ㅻ땲?','?뺥쁽??梨낆엫','?쒕룄??留ㅻ땲?','?ㅼ꽌??留ㅻ땲?','諛뺤꽦誘?留ㅻ땲?','?λ???梨낆엫','?댁냼??留ㅻ땲?','?ㅻ???梨낆엫'][i]}</div><div class="sync">HR I/F ?뺤긽</div><button class="v27-btn">蹂寃?/button></div>`).join('')}</div><div class="v27-perm-card"><h3>蹂댁븞?깃툒 ?묎렐 ?뺤콉</h3><p>臾몄꽌蹂?蹂댁븞?깃툒? ?⑥닚?섍쾶 3媛쒕쭔 ?댁쁺?⑸땲?? 蹂듭옟??媛쒖씤 沅뚰븳? ?쒖????ъ슜?먥앹뿉???덉쇅濡쒕쭔 泥섎━?⑸땲??</p><table class="v27-matrix"><thead><tr><th>蹂댁븞?깃툒</th><th>?묎렐 湲곗?</th><th>愿由?諛⑹떇</th></tr></thead><tbody><tr><td>由щ뜑 ?꾩슜</td><td>?꾩썝쨌????댁긽 ?먮룞</td><td>吏곸콉 I/F 湲곕컲</td></tr><tr><td>?쇰컲 怨듦컻</td><td>援щℓ蹂몃? ?꾩껜</td><td>湲곕낯 ?덉슜</td></tr><tr><td>吏???ъ슜??/td><td>?뱀젙 ?ъ슜???</td><td>?덉쇅 紐⑸줉 愿由?/td></tr></tbody></table><div class="mode-note">沅뚯옣 ?댁쁺: ?遺遺꾩? ?쇰컲 怨듦컻, 誘쇨컧???뺤콉/?먭???臾몄꽌??由щ뜑 ?꾩슜, ?꾨줈?앺듃??臾몄꽌留?吏???ъ슜?먮줈 ?쒗븳?⑸땲??</div></div></div>`;normalizeStatusText(el)};

  /* AI mode management: folder-pack first */
  let activeMode='?듯빀紐⑤뱶';
  function renderModeV27(){const el=$('#p-mode'); if(!el)return; const packs=['援щℓ洹쒖젙쨌?쒕룄','?낆같愿由?,'VAATZ 留ㅻ돱??,'?덉쭏 5?ㅽ?','?먭?쨌?④?','?쇰컲?먯옱쨌MRO','?댁쇅援щℓ','?묐젰???곗씠??]; el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">AI 紐⑤뱶 쨌 DB 愿由?/div><div class="v23-title-sub">?뚯씪??留롮쓣 ?뚮뒗 媛쒕퀎 ?뚯씪蹂대떎 ?쒗뤃?뷀뙥???⑥쐞濡?紐⑤뱶???곌껐?섍퀬, ?덉쇅 ?뚯씪留?蹂꾨룄濡?愿由ы븯??諛⑹떇??媛???⑥닚?⑸땲??</div></div><div class="v23-actions"><button class="v27-btn">蹂寃??대젰</button><button class="v27-btn primary">?뺤콉 ???/button></div></div><div class="v27-mode-console"><aside class="v27-mode-side">${modes.map(m=>`<button class="v27-mode-select ${m===activeMode?'on':''}" onclick="v27SelectMode('${m}')"><span>${m}</span><span>${m==='?듯빀紐⑤뱶'?'8??:m.includes('?앹궛')?'5??:m.includes('?쇰컲')?'4??:'3??}</span></button>`).join('')}<div class="mode-note">梨꾪똿李쎌뿉???좏깮??紐⑤뱶???ш린?먯꽌 ?곌껐???대뜑?⑷낵 ?뺥삎 DB留??곗꽑 寃?됲빀?덈떎.</div></aside><main><div class="v27-stage-strip"><div class="v27-stage-card"><div class="n">${activeMode}</div><div class="l">?꾩옱 ?몄쭛 紐⑤뱶</div></div><div class="v27-stage-card"><div class="n">${activeMode==='?듯빀紐⑤뱶'?8:activeMode.includes('?앹궛')?5:activeMode.includes('?쇰컲')?4:3}</div><div class="l">?곌껐 ?대뜑??/div></div><div class="v27-stage-card"><div class="n">${activeMode.includes('?먭?')?12:activeMode.includes('?쇰컲')?8:5}</div><div class="l">?덉쇅 ?뚯씪</div></div><div class="v27-stage-card"><div class="n">${activeMode.includes('?먭?')?'由щ뜑':'?쇰컲'}</div><div class="l">湲곕낯 沅뚰븳</div></div></div><div class="v27-pack-list">${packs.map((p,i)=>{const on=activeMode==='?듯빀紐⑤뱶'||(activeMode.includes('?앹궛')&&['援щℓ洹쒖젙쨌?쒕룄','?낆같愿由?,'?덉쭏 5?ㅽ?','?먭?쨌?④?','?댁쇅援щℓ'].includes(p))||(activeMode.includes('?쇰컲')&&['援щℓ洹쒖젙쨌?쒕룄','VAATZ 留ㅻ돱??,'?쇰컲?먯옱쨌MRO','?묐젰???곗씠??].includes(p))||(activeMode.includes('?먭?')&&['援щℓ洹쒖젙쨌?쒕룄','?먭?쨌?④?','?묐젰???곗씠??].includes(p));return `<div class="v27-pack"><div class="v27-pack-top"><div><div class="v27-pack-title">?뱚 ${p}</div><div class="v27-pack-meta">${80+i*27}媛?臾몄꽌 쨌 ${((i+2)*8).toLocaleString()} chunks 쨌 Owner ${['援щℓ?꾨왂?','援щℓ?붿??몄텛吏꾪?','?먭?愿由ы?'][i%3]}</div></div><div class="v27-toggle ${on?'on':''}" onclick="this.classList.toggle('on');say('?대뜑???곌껐 ?곹깭瑜?蹂寃쏀뻽?듬땲??','?㎛')"></div></div></div>`}).join('')}</div><div class="v27-exception"><div class="v27-exception-title">?덉쇅 ?뚯씪 愿由?/div><div class="v27-pack-meta">?대뜑?⑹? ?곌껐?섎릺 ?뱀젙 ?뚯씪留??쒖쇅?섍굅?? 誘몄뿰寃??대뜑???뱀젙 臾몄꽌留?異붽??????덉뒿?덈떎. ????곗씠???댁쁺 ????諛⑹떇??媛??愿由ш? ?쎌뒿?덈떎.</div><div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap"><button class="v27-btn">竊??덉쇅 異붽?</button><button class="v27-btn">寃?됱쑝濡?李얘린</button><button class="v27-btn">CSV ?낅줈??/button></div></div></main></div>`};
  window.v27SelectMode=m=>{activeMode=m;renderModeV27()};

  /* Data mart simpler */
  function renderDatamartV27(){const el=$('#p-datamart'); if(!el)return; const srcs=[['VAATZ ?낆껜쨌?덈ぉ 留덉뒪??,'?뺤긽','100%','05:10','?듯빀/?앹궛'],['Autopedia ?⑹뼱 DB','?뺤긽','100%','06:00','??紐⑤뱶'],['?먭? DB ??諛곗튂','?뺤씤?꾩슂','92%','07:30','?먭?'],['?덉쭏/?대젅???곗씠??,'?뺤긽','99%','04:40','?앹궛'],['?쇰컲?먯옱 MRO 移댄깉濡쒓렇','?뺤긽','100%','05:45','?쇰컲']]; el.innerHTML=`<div class="v23-admin-title"><div><div class="v23-title-main">?곗씠?곕쭏??I/F 紐⑤땲?곕쭅</div><div class="v23-title-sub">?뺥삎 ?곗씠?곕뒗 Source ??Data Mart ??寃利???RAG Index ??AI 紐⑤뱶 諛섏쁺 ?먮쫫?쇰줈 ?⑥닚?섍쾶 紐⑤땲?곕쭅?⑸땲??</div></div><button class="v27-btn primary">?ㅻ뒛 諛곗튂 由ы룷??/button></div><div class="v27-flow-simple"><div class="v27-flow-node"><div class="ic">?뾼截?/div><div class="t">Source</div></div><div class="v27-flow-node"><div class="ic">?룷</div><div class="t">Data Mart</div></div><div class="v27-flow-node"><div class="ic">??/div><div class="t">寃利?/div></div><div class="v27-flow-node"><div class="ic">?쭬</div><div class="t">RAG Index</div></div><div class="v27-flow-node"><div class="ic">?㎛</div><div class="t">AI 紐⑤뱶</div></div></div><div class="v27-source-health">${srcs.map(s=>`<div class="v27-health-card"><div class="v27-health-title"><span>${s[0]}</span><span class="v27-pill ${s[1]==='?뺤긽'?'green':'amber'}">${s[1]}</span></div><div class="v27-health-desc">?깃났瑜?${s[2]} 쨌 留덉?留?醫낅즺 ${s[3]} 쨌 ?곌껐 紐⑤뱶 ${s[4]}</div><div class="v27-health-bar ${s[1]==='?뺤긽'?'':'warn'}"><span style="width:${s[2]}"></span></div><div style="display:flex;gap:8px;margin-top:12px"><button class="v27-btn">?곸꽭</button><button class="v27-btn">濡쒓렇</button></div></div>`).join('')}</div>`};

  /* Companion: speech, notices, stable character */
  function installBuddySpeech(){const hub=$('#companionHub'); if(!hub)return; if(!$('#v27BuddySpeech')){const sp=document.createElement('div');sp.id='v27BuddySpeech';sp.className='v27-buddy-speech';hub.appendChild(sp)} const panel=$('#companionCard .companion-panel'); if(panel&&!panel.querySelector('.v27-roam-btn')){panel.insertAdjacentHTML('afterbegin','<button class="companion-action v27-roam-btn" onclick="toggleBuddyRoamV27()">?맽 ?곗콉 ON/OFF</button><button class="companion-action" onclick="buddySayV27()">?뮠 ?쒕쭏??/button>')} }
  const buddyMsgs=['?ㅻ뒛 怨듭?: ?먭? DB ??諛곗튂 12嫄??뺤씤 ?꾩슂?댁슂.','醫뗭? ?듬?? 醫뗭븘??10媛??댁긽?대㈃ AI 寃利??꾨낫媛 ?⑸땲??','?몄슜 踰덊샇瑜??꾨Ⅴ硫??듬? 洹쇨굅 ?먮Ц???ш쾶 蹂????덉뼱??','?낅Т 以??듭떖 ?댁슜? 硫붾え????ν빐?먯꽭??','?ㅻ뒛??援щℓ 吏???덈꺼?? Lv.4源뚯? 280pt ?⑥븯?댁슂.']; let msgIdx=0; window.buddySayV27=function(txt){const sp=$('#v27BuddySpeech'); if(!sp)return; sp.textContent=txt||buddyMsgs[msgIdx++%buddyMsgs.length]; sp.classList.add('sh'); clearTimeout(window.__buddySpeech); window.__buddySpeech=setTimeout(()=>sp.classList.remove('sh'),5200)}; window.toggleBuddyRoamV27=function(){const hub=$('#companionHub'); if(!hub)return; hub.classList.toggle('v27-walk'); say(hub.classList.contains('v27-walk')?'Buddy媛 媛???붾㈃???곗콉?⑸땲??':'Buddy ?곗콉??硫덉톬?듬땲??','?맽',1600)};
  function startBuddy(){installBuddySpeech(); setTimeout(()=>buddySayV27('??怨듭?? 以묒슂???듬????쒓? ?뚮젮?쒕┫寃뚯슂.'),1500); setInterval(()=>{const hub=$('#companionHub'); if(!hub||$('#companionCard')?.classList.contains('open'))return; hub.classList.toggle('v27-left'); hub.classList.toggle('v27-right'); buddySayV27();},26000)}

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
    try{(window.toast||window.say||console.log)(`湲???ш린: ${next==='large'?'?ш쾶':next==='small'?'?묎쾶':'?쒖?'}`,'Aa',1500)}catch(e){}
  };
  function installFontShortcut(){const tb=$('.tb-r'); if(tb&&!$('#v27FontShortcut'))tb.insertAdjacentHTML('afterbegin','<button class="tb-b v27-font-shortcut" id="v27FontShortcut" onclick="cycleFontSizeV27()"><strong>Aa</strong> 湲??/button>')}
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
    '? 愿由ъ쨷':'?묒꽦쨌蹂댁셿以?,'? 寃?좎쨷':'?묒꽦쨌蹂댁셿以?,'理쒖쥌 ?뱀씤以?:'?쒖뒪??寃?좎쨷','理쒖쥌 ?붿껌':'?깅줉 ?붿껌??,'?뱀씤 ?붿껌??:'?깅줉 ?붿껌??,'System 寃?좎쨷':'?쒖뒪??寃?좎쨷','?섏젙 ?붿껌':'蹂댁셿 ?붿껌','諛섎젮':'蹂댁셿 ?붿껌','諛섏쁺 ?꾨즺':'AI 寃??諛섏쁺?꾨즺','AI 諛섏쁺?꾨즺':'AI 寃??諛섏쁺?꾨즺','AI諛섏쁺':'AI 寃??諛섏쁺'
  };
  function normText(root=document){try{const re=new RegExp(Object.keys(replacements).join('|'),'g');const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(n){return re.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});let nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(n=>{n.nodeValue=n.nodeValue.replace(re,m=>replacements[m]||m).replace(/AI 寃??AI 寃??g,'AI 寃??);});}catch(e){}}
  function installModalTools(){
    $$('.large-modal').forEach(m=>{if(m.dataset.v28Tools)return;m.dataset.v28Tools='1';m.addEventListener('dblclick',e=>{if(e.target.closest('.large-hd'))m.classList.toggle('full')});});
  }
  function installCommunityTools(){
    const box=$('.comm-box'); if(box&&!$('#v28CommHint')){const hint=document.createElement('div');hint.id='v28CommHint';hint.style.cssText='font-size:12px;color:var(--text-4);margin-left:8px';hint.textContent='醫뗭븘?붋룹콈?씲텮I 寃利??꾨낫瑜??듯빐 吏?앹씠 ?ㅼ떆 DB濡?諛섏쁺?⑸땲??';$('.comm-hd')?.appendChild(hint);}  
  }
  function installEvidenceClick(){
    $$('.sr-c,.cr').forEach(el=>{if(el.dataset.v28Bound)return;el.dataset.v28Bound='1';el.addEventListener('click',()=>{setTimeout(()=>{const rp=$('#rp'); if(rp){rp.classList.add('sh'); const h=$('#rp .rp-h'); if(h&&!$('#sourceFullBtn')){const b=document.createElement('button');b.id='sourceFullBtn';b.className='rp-c';b.textContent='??;b.title='洹쇨굅 ?ш쾶 蹂닿린';b.onclick=e=>{e.stopPropagation();rp.classList.toggle('source-full')};h.appendChild(b);}}},20)})});
  }
  function installBuddyFallback(){
    const hub=$('#companionHub'); if(!hub)return; hub.style.overflow='visible'; if(!$('#v28BuddyNudge')){const n=document.createElement('div');n.id='v28BuddyNudge';n.className='v27-buddy-speech';n.textContent='怨듭?? 以묒슂???듬?? ?쒓? ?뚮젮?쒕┫寃뚯슂.';hub.appendChild(n);} const say=()=>{const n=$('#v28BuddyNudge'); if(!n)return; const msgs=['?ㅻ뒛 怨듭?: ?좉퇋 援щℓ洹쒖젙 媛쒖젙?덉씠 ?깅줉?먯뼱??','醫뗭븘??10媛??댁긽 梨꾪깮 ?듬?? AI 寃利??꾨낫媛 ?⑸땲??','?몄슜 踰덊샇瑜??꾨Ⅴ硫?洹쇨굅 臾몄꽌瑜??ш쾶 蹂????덉뼱??','以묒슂???듬?? ??硫붾え????ν빐?먯꽭??'];n.textContent=msgs[Math.floor(Math.random()*msgs.length)];n.classList.add('sh');clearTimeout(window.__v28Buddy);window.__v28Buddy=setTimeout(()=>n.classList.remove('sh'),4500)}; if(!hub.dataset.v28Speech){hub.dataset.v28Speech='1';hub.addEventListener('click',()=>setTimeout(say,60));setTimeout(say,1200);setInterval(say,38000)}
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
const say=(m,i='??,d=2200)=>{try{(window.toast||window.say||console.log)(m,i,d)}catch(e){console.log(i,m)}};
const MODES=['?듯빀紐⑤뱶','?앹궛?먯옱 紐⑤뱶','?쇰컲?먯옱 紐⑤뱶','?먭?紐⑤뱶'];
const modeInfo={'?듯빀紐⑤뱶':['?뙋','?꾩껜 援щℓ 吏??,'?뱀씤??援щℓ 洹쒖젙쨌?낅Т?쒖?쨌VAATZ 吏???꾩껜瑜?寃?됲빀?덈떎.'],'?앹궛?먯옱 紐⑤뱶':['?룺','?앹궛?먯옱 以묒떖','遺?댟룻삊?μ궗쨌?덉쭏쨌?앹궛 援щℓ 愿??DB瑜??곗꽑 寃?됲빀?덈떎.'],'?쇰컲?먯옱 紐⑤뱶':['?벀','?쇰컲?먯옱 以묒떖','MRO쨌?щТ/?ㅻ퉬쨌?쇰컲?먯옱 怨꾩빟 吏?앹쓣 ?곗꽑 寃?됲빀?덈떎.'],'?먭?紐⑤뱶':['?뮥','?먭?/?④? 以묒떖','?먭????곗씠?곗? ?④? ?대젰? 沅뚰븳 ?뺤씤 ??寃?됲빀?덈떎.']};
function ls(k,f){try{return localStorage.getItem(k)||f}catch(e){return f}}function sls(k,v){try{localStorage.setItem(k,v)}catch(e){}}
let currentMode=ls('vaatz-current-mode','?듯빀紐⑤뱶'),uiSize=ls('vaatz-font-size','standard');
function wrapTopbar(){const tb=$('.tb');if(!tb||$('.tb-topline'))return;const kids=Array.from(tb.children),line=document.createElement('div');line.className='tb-topline';kids.forEach(k=>line.appendChild(k));tb.appendChild(line)}
function installNotice(){wrapTopbar();const tb=$('.tb');if(!tb||$('#v29Notice'))return;const n=document.createElement('div');n.id='v29Notice';n.className='v29-notice';n.innerHTML='<span class="v29-notice-badge">?뱼 怨듭?</span><div class="v29-notice-track"><span class="v29-notice-item"><b>?쒖뒪???낅뜲?댄듃</b> ?듬? 洹쇨굅 酉곗뼱媛 ?ㅽ겕濡ㅽ삎?쇰줈 媛쒖꽑?섏뿀?듬땲??</span><span class="v29-notice-item"><b>?곗씠?곕쭏??/b> ?먭? DB ?쇰? row ?뺤씤 ?꾩슂 쨌 System Admin 寃??以?/span><span class="v29-notice-item"><b>而ㅻ??덊떚</b> 梨꾪깮 ?듬?? 寃利???AI 吏???꾨낫濡?諛섏쁺?⑸땲??</span><span class="v29-notice-item"><b>?쒖뒪???낅뜲?댄듃</b> ?듬? 洹쇨굅 酉곗뼱媛 ?ㅽ겕濡ㅽ삎?쇰줈 媛쒖꽑?섏뿀?듬땲??</span><span class="v29-notice-item"><b>?곗씠?곕쭏??/b> ?먭? DB ?쇰? row ?뺤씤 ?꾩슂 쨌 System Admin 寃??以?/span></div>';tb.appendChild(n)}
function updateScope(type){$$('.tb-l .sc-btn').forEach(b=>{const isMy=b.textContent.includes('???뚯씪');b.classList.toggle('on',type==='my'?isMy:!isMy)})}
window.rpT=function(force,tab){const rp=$('#rp');if(!rp)return;const open=typeof force==='boolean'?force:!rp.classList.contains('sh');rp.classList.toggle('sh',open);if(!open){rp.classList.remove('source-full');updateScope('all');return}if(tab&&window.rpSwitchTab)window.rpSwitchTab(tab);updateScope($('#rpTabMy')?.classList.contains('on')?'my':'all')};
window.scT=function(btn,type){if(btn){btn.parentElement?.querySelectorAll('.sc-btn').forEach(b=>b.classList.remove('on'));btn.classList.add('on')}const rp=$('#rp');if(type==='my'){const already=rp?.classList.contains('sh')&&$('#rpTabMy')?.classList.contains('on');if(already){rpT(false);return}rpT(true,'my');say('???뚯씪 ?⑤꼸???댁뿀?듬땲?? ?ㅼ떆 ?꾨Ⅴ嫄곕굹 X濡??レ쓣 ???덉뒿?덈떎.','?뱛',1500)}else{rpT(false);say('寃??踰붿쐞: 援щℓ吏?앹쑝濡??ㅼ젙?덉뒿?덈떎.','?뱴',1500)}};
function installChatTools(){const box=$('.ibx');if(!box||$('#v29ChatTools'))return;$$('.v26-chat-controls').forEach(x=>x.remove());const row=document.createElement('div');row.id='v29ChatTools';row.className='v29-chat-tools';row.innerHTML=`<div class="v29-mode-select"><button class="v29-mode-current" id="v29ModeCurrent" onclick="toggleModeMenuV29(event)"><span class="v29-mode-icon" id="v29ModeIcon">${modeInfo[currentMode][0]}</span><span class="v29-mode-copy"><span class="v29-mode-title" id="v29ModeTitle">${currentMode}</span><span class="v29-mode-desc" id="v29ModeDesc">${modeInfo[currentMode][2]}</span></span><span>??/span></button><div class="v29-mode-menu" id="v29ModeMenu">${MODES.map(m=>`<button class="v29-mode-option ${m===currentMode?'on':''}" data-mode="${m}" onclick="setChatModeV29('${m}')"><div class="t">${modeInfo[m][0]} ${m}</div><div class="d">${modeInfo[m][2]}</div></button>`).join('')}</div></div><div class="v29-size-panel"><span class="lb">?붾㈃</span>${[['small','?묎쾶'],['standard','?쒖?'],['large','?ш쾶']].map(x=>`<button class="v29-size-btn ${x[0]===uiSize?'on':''}" data-size="${x[0]}" onclick="setFontSizeV29('${x[0]}')">${x[1]}</button>`).join('')}</div>`;box.insertBefore(row,box.firstChild);applyFontSize()}
window.toggleModeMenuV29=e=>{e&&e.stopPropagation();$('#v29ModeMenu')?.classList.toggle('sh')};
window.setChatModeV29=mode=>{currentMode=mode;sls('vaatz-current-mode',mode);window.currentAIMode=mode;try{window.setChatModeV26&&window.setChatModeV26(mode)}catch(e){};$('#v29ModeIcon')&&( $('#v29ModeIcon').textContent=modeInfo[mode][0]);$('#v29ModeTitle')&&( $('#v29ModeTitle').textContent=mode);$('#v29ModeDesc')&&( $('#v29ModeDesc').textContent=modeInfo[mode][2]);$$('.v29-mode-option').forEach(b=>b.classList.toggle('on',b.dataset.mode===mode));$('#v29ModeMenu')?.classList.remove('sh');say(`${mode}濡??꾪솚?덉뒿?덈떎.`,'?㎛',1600)};
function applyFontSize(){document.documentElement.setAttribute('data-font-size',uiSize);$$('.v29-size-btn').forEach(b=>b.classList.toggle('on',b.dataset.size===uiSize))}
window.setFontSizeV29=size=>{uiSize=size;sls('vaatz-font-size',size);applyFontSize();say(`?붾㈃ ?ш린: ${size==='large'?'?ш쾶':size==='small'?'?묎쾶':'?쒖?'}濡?蹂寃쏀뻽?듬땲??`,'Aa',1500)};window.setFontSizeV26=window.setFontSizeV29;document.addEventListener('click',e=>{if(!e.target.closest('#v29ChatTools'))$('#v29ModeMenu')?.classList.remove('sh')});
window.setSourcePageV29=i=>{try{currentSourcePage=i;renderSourcePage()}catch(e){}};
try{renderSourcePage=function(){if(typeof sourceDocs==='undefined')return;const doc=sourceDocs[currentSourceDoc],wrap=$('#srcVw');if(!doc||!wrap)return;const pages=doc.pages||[];if(currentSourcePage<0||currentSourcePage>=pages.length)currentSourcePage=0;const nav=pages.map((p,i)=>`<button class="v29-page-link ${i===currentSourcePage?'on':''}" onclick="setSourcePageV29(${i})"><span class="p">${p.slide?'Slide ':p.excel?'Sheet ':'p.'}${p.no}</span><span class="t">${esc(p.title)}</span></button>`).join('');const content=pages.map((p,i)=>{const body=p.slide||p.excel?p.body:`<div class="v29-page-top"><span>${esc(doc.name)} 쨌 ${esc(doc.version)}</span><span>${p.no} / ${p.total}</span></div><div class="v29-page-title">${esc(p.title)}</div><div class="v29-page-sub">${esc(p.sub)}</div>${p.body}`;return `<section class="v29-page-card ${i===currentSourcePage?'active':''}" id="v29SrcPage${i}">${body}</section>`}).join('');wrap.innerHTML=`<div class="v29-source-shell"><div class="v29-src-meta"><div style="min-width:0"><div class="v29-src-name"><span class="src-doc-type t-${doc.type}">${doc.typeLabel}</span> ${esc(doc.name)}</div><div class="v29-src-path">${esc(doc.path)} 쨌 ${esc(doc.owner)} 쨌 ${esc(doc.version)}</div></div><div class="v29-src-actions"><span class="src-doc-sec s-${doc.security}">?뵏 ${esc(doc.securityLabel)}</span><button class="v29-btn" onclick="toggleSourceFullV27&&toggleSourceFullV27()">???ш쾶</button><button class="v29-btn" onclick="say('?먮Ц ?ㅼ슫濡쒕뱶???ㅼ젣 ?쒖뒪???곕룞 ???쒓났?⑸땲??','搜?)">?ㅼ슫濡쒕뱶</button></div></div><div class="v29-src-body"><nav class="v29-page-list">${nav}</nav><main class="v29-doc-scroll">${content}<div class="v29-highlight-note"><b>HIGHLIGHT</b> ?몃????곸뿭? AI媛 ?듬? ?앹꽦??吏곸젒 ?몄슜???먮Ц?낅땲?? 醫뚯륫 ?섏씠吏 紐⑸줉???뚮윭 ?ㅻⅨ 洹쇨굅 ?섏씠吏瑜?諛붾줈 ?뺤씤?????덉뒿?덈떎.</div></main></div></div>`;setTimeout(()=>$('#v29SrcPage'+currentSourcePage)?.scrollIntoView({block:'start',behavior:'smooth'}),50)};openSourceFromCitation=function(citNum,evt){if(evt&&evt.stopPropagation)evt.stopPropagation();currentSourceDoc=Number(citNum)||1;currentSourcePage=(typeof citationPageMap!=='undefined'&&citationPageMap[currentSourceDoc])||0;const rp=$('#rp');if(rp){rp.classList.add('sh','src-active');setTimeout(()=>rp.classList.remove('src-active'),500)}if(window.rpSwitchTab)window.rpSwitchTab('src');if(window.renderSourceChips)window.renderSourceChips();renderSourcePage();updateScope('all')}}catch(e){console.warn('source override failed',e)}
const cats=['?꾩껜','?낆같','怨꾩빟','VAATZ','5?ㅽ?','?먭?','?쇰컲?먯옱','?댁쇅援щℓ','?묐젰??];let comm={cat:'?꾩껜',tag:'',query:'',selected:1},askTags=[];const qna=[{id:1,cat:'?낆같',status:'HOT',likes:47,answers:8,title:'?꾨젰?곸엯李?1?뚯감 ?좎같 ???ㅼ쓬 ?덉감媛 沅곴툑?⑸땲??,body:'?ш났怨? ?섏쓽怨꾩빟 ?꾪솚, VAATZ ?좎같泥섎━ 硫붾돱 湲곗?????踰덉뿉 ?뺣━?섍퀬 ?띠뒿?덈떎.',tags:['?꾨젰?곸엯李?,'?좎같','?섏쓽怨꾩빟'],author:'怨꾩빟珥덈낫',time:'3????,candidate:true,adopted:true},{id:2,cat:'?먭?',status:'HOT',likes:34,answers:5,title:'?먭?紐⑤뱶?먯꽌 ?④? ?대젰怨??섏쑉 湲곗???媛숈씠 蹂????덈굹??',body:'?먭? 愿??吏덉쓽 ???대뼡 DB? 臾몄꽌瑜??곌껐?댁빞 ?섎뒗吏 沅곴툑?⑸땲??',tags:['?먭?紐⑤뱶','?④?','?섏쑉'],author:'?먭?遺꾩꽍??,time:'2?쒓컙 ??,candidate:false},{id:3,cat:'5?ㅽ?',status:'?듬??湲?,likes:18,answers:0,title:'5?ㅽ? 4???깃툒 ?밴툒 ??IATF 16949媛 ?꾩닔?멸???',body:'2026??湲곗??쇰줈 ?꾩닔 ?붽굔?몄?, 湲곗〈 ?낆껜???좎삁湲곌컙???덈뒗吏 ?뺤씤?섍퀬 ?띠뒿?덈떎.',tags:['5?ㅽ?','IATF16949','?묐젰??],author:'?덉쭏留ㅻ땲?',time:'1????,candidate:false},{id:4,cat:'VAATZ',status:'梨꾪깮',likes:22,answers:3,title:'VAATZ ?댁쇅 諛쒖＜ ?섏쑉? 諛쒖＜ ?쒖젏怨?寃곗젣 ?쒖젏 以?臾댁뾿??湲곗??멸???',body:'湲濡쒕쾶 援щℓ 紐⑤뱢?먯꽌 ?섏쑉 ?먮룞 ?곸슜 湲곗?怨??덉쇅 泥섎━ 諛⑸쾿??沅곴툑?⑸땲??',tags:['VAATZ','?섏쑉','?댁쇅援щℓ'],author:'?댁쇅援щℓ?대떦',time:'?ㅻ뒛',candidate:true,adopted:true},{id:5,cat:'?쇰컲?먯옱',status:'?듬??湲?,likes:9,answers:0,title:'MRO 諛섎났 援щℓ ??寃쎈ℓ?낆같???앸왂?????덈뒗 湲곗????덈굹??',body:'諛섎났 援щℓ ?덈ぉ??怨꾩빟 ?쒖슜 媛???щ?? ?덉쇅 ?뱀씤 議곌굔??沅곴툑?⑸땲??',tags:['MRO','諛섎났援щℓ','寃쎈ℓ?낆같'],author:'MRO?대떦',time:'20遺???,candidate:false},{id:6,cat:'?묐젰??,status:'?닿껐以?,likes:16,answers:2,title:'?묐젰???됯? 寃곌낵瑜??낆같 李몄뿬 議곌굔???먮룞 諛섏쁺?????덈굹??',body:'5?ㅽ? ?깃툒怨??⑺뭹 ?덉쭏 ?댁뒋瑜?VAATZ ?낆같 珥덈? 議곌굔??諛섏쁺?섎뒗 諛⑸쾿??沅곴툑?⑸땲??',tags:['?묐젰??,'?낆같珥덈?','5?ㅽ?'],author:'?덉쭏吏?댁씠',time:'?댁젣',candidate:false}];
function allTags(){return[...new Set(qna.flatMap(q=>q.tags))].slice(0,16)}function stCls(st){return st==='HOT'?'hot':st==='梨꾪깮'?'adopted':st==='?듬??湲??'wait':st==='NEW'?'new':'live'}function filtered(){return qna.filter(q=>(comm.cat==='?꾩껜'||q.cat===comm.cat)&&(!comm.tag||q.tags.includes(comm.tag))&&(!comm.query||`${q.title} ${q.body} ${q.tags.join(' ')} ${q.cat}`.toLowerCase().includes(comm.query.toLowerCase()))).sort((a,b)=>(b.status==='HOT')-(a.status==='HOT')||b.likes-a.likes)}
function detail(q){if(!q)return'<div class="v27-empty">吏덈Ц???좏깮?섏꽭??</div>';return`<div class="v29-loop"><div class="t">吏???좎닚??/div><div class="d">梨꾪깮???듬?? System Admin 寃利???AI 吏???꾨낫濡?諛섏쁺?⑸땲?? 醫뗭븘?붾뒗 蹂댁“ ?좏샇濡쒕쭔 ?ъ슜?⑸땲??</div></div><div class="v29-detail-card"><div class="v29-detail-title">${esc(q.title)}</div><div class="v29-detail-body">${esc(q.body)}</div><div class="v29-q-meta v30-detail-meta" style="margin-top:14px"><span class="v29-status ${stCls(q.status)}">${q.status}</span><span>${q.cat}</span><span>?뫀 ${esc(q.author)}</span><span>${q.time}</span><span>?뮠 ${q.answers}</span><span>?몟 ${q.likes}</span>${q.tags.map(t=>`<button class="v29-tag" onclick="v29SetTag('${esc(t)}')">#${esc(t)}</button>`).join('')}</div><div class="v29-answer"><div class="v29-answer-head"><span class="v29-answer-author">梨꾪깮 ?듬? ?덉떆</span>${q.adopted?'<span class="v29-status adopted">梨꾪깮??/span>':''}</div><div class="v29-answer-body">愿??洹쒖젙 議고빆怨?VAATZ 硫붾돱 寃쎈줈瑜??④퍡 ?곸쑝硫??ㅻТ?먭? 諛붾줈 ?ъ슜?????덉뒿?덈떎. 寃利??꾨낫媛 ?섎㈃ System Admin???먮Ц 洹쇨굅瑜??뺤씤????RAG DB 諛섏쁺 ?щ?瑜?寃곗젙?⑸땲??</div><div class="v29-action-row"><button class="v29-btn" onclick="v29Like(${q.id})">醫뗭븘??/button><button class="v29-btn" onclick="v29SaveNote(${q.id})">硫붾え ???/button><button class="v29-btn" onclick="v29Nominate(${q.id})">AI 寃利??꾨낫</button></div></div><div class="v29-reply" style="margin-top:12px"><textarea id="v29Reply" placeholder="?듬????묒꽦?대낫?몄슂. 洹쒖젙 議고빆, VAATZ 硫붾돱 寃쎈줈, ?ㅻТ ?덉떆瑜??④퍡 ?곸쑝硫?醫뗭뒿?덈떎."></textarea><div class="v29-action-row"><button class="v29-btn" onclick="$('#v29Reply').value=''">珥덇린??/button><button class="v29-btn" onclick="v29PostAnswer(${q.id})">?듬? ?깅줉</button></div></div></div>`}
window.renderCommunityV29=function(){const box=$('.comm-box');if(box){box.classList.add('v29-wide');box.classList.remove('v27-wide','v26-wide')}const ct=$('#ct-qa');if(!ct)return;const list=filtered(),sel=qna.find(q=>q.id===comm.selected)||list[0]||qna[0];if(sel)comm.selected=sel.id;const hot=qna.slice().sort((a,b)=>(b.status==='HOT')-(a.status==='HOT')||b.likes-a.likes).slice(0,3);ct.innerHTML=`<div class="v29-comm v30-comm"><aside class="v29-comm-left"><div class="v29-comm-title">援щℓ蹂몃?<br>吏?앹빱裕ㅻ땲??/div><div class="v29-comm-sub">HOT 寃뚯떆湲??癒쇱? 蹂닿퀬, 吏덈Ц? 寃?됯낵 ?쒓렇濡?鍮좊Ⅴ寃?李얠뒿?덈떎.</div><div class="v29-quick-stats"><div class="v29-quick-stat"><div class="v">${qna.length}</div><div class="l">?꾩껜 吏덈Ц</div></div><div class="v29-quick-stat"><div class="v">${qna.filter(q=>q.status==='?듬??湲?).length}</div><div class="l">?듬??湲?/div></div><div class="v29-quick-stat"><div class="v">${qna.filter(q=>q.status==='HOT').length}</div><div class="l">HOT</div></div><div class="v29-quick-stat"><div class="v">${qna.filter(q=>q.candidate).length}</div><div class="l">AI ?꾨낫</div></div></div><div class="v29-section-label">移댄뀒怨좊━</div>${cats.map(c=>`<button class="v29-cat ${comm.cat===c?'on':''}" onclick="v29SetCat('${c}')"><span>${c==='?꾩껜'?'?뱴':c==='?낆같'?'?뤇截?:c==='VAATZ'?'?뼢截?:c==='5?ㅽ?'?'狩?:c==='?먭?'?'?뮥':c==='?쇰컲?먯옱'?'?벀':c==='?댁쇅援щℓ'?'?뙋':'?쩃'} ${c}</span><span>${c==='?꾩껜'?qna.length:qna.filter(q=>q.cat===c).length}</span></button>`).join('')}<div class="v29-section-label">?쒓렇</div><div class="v29-tags">${allTags().map(t=>`<button class="v29-tag ${comm.tag===t?'on':''}" onclick="v29SetTag('${esc(t)}')">#${esc(t)}</button>`).join('')}</div></aside><main class="v29-comm-main"><div class="v29-comm-hero v30-comm-hero"><div style="flex:1"><div class="v29-comm-title">HOT Q&A</div><div class="v29-comm-sub">?낅Т???먯＜ ?꾩??섎뒗 湲??癒쇱? 蹂댁뿬二쇨퀬, 異붿쿇 ?섎뒗 ?섎떒 蹂댁“ ?뺣낫濡쒕쭔 ?쒖떆?⑸땲??</div><div class="v29-search"><span>?뵇</span><input value="${esc(comm.query)}" placeholder="吏덈Ц쨌?듬?쨌?쒓렇 寃?? oninput="v29Search(this.value)"></div></div><button class="v29-btn" onclick="v29OpenAsk()">竊?吏덈Ц?섍린</button></div><div class="v29-hot-strip v30-hot-strip">${hot.map(q=>`<div class="v29-hot-card" onclick="v29Select(${q.id})"><div class="v29-hot-label">?뵦 ?낅Т HOT</div><div class="v29-hot-title">${esc(q.title)}</div><div class="v29-hot-meta">${q.cat} 쨌 ?듬? ${q.answers} 쨌 異붿쿇 ${q.likes}</div></div>`).join('')}</div><div class="v29-section-label v30-list-label">?꾩껜 吏덈Ц</div><div class="v29-q-list">${list.map(q=>`<article class="v29-q-card ${q.id===comm.selected?'on':''}" onclick="v29Select(${q.id})"><div class="v29-q-title">${esc(q.title)}</div><div class="v29-q-body">${esc(q.body)}</div><div class="v29-q-meta"><span class="v29-status ${stCls(q.status)}">${q.status}</span>${q.candidate?'<span class="v29-status new">AI ?꾨낫</span>':''}<span>${q.cat}</span><span>?뮠 ${q.answers}</span><span>?몟 ${q.likes}</span><span>?뫀 ${esc(q.author)}</span><span>${q.time}</span>${q.tags.map(t=>`<button class="v29-tag" onclick="event.stopPropagation();v29SetTag('${esc(t)}')">#${esc(t)}</button>`).join('')}</div></article>`).join('')||'<div class="v27-empty">寃??寃곌낵媛 ?놁뒿?덈떎.</div>'}</div></main><aside class="v29-comm-detail">${detail(sel)}</aside></div>`};

window.v29Select=id=>{comm.selected=id;renderCommunityV29()};window.v29SetCat=c=>{comm.cat=c;comm.selected=(filtered()[0]||qna[0]).id;renderCommunityV29()};window.v29SetTag=t=>{comm.tag=comm.tag===t?'':t;comm.selected=(filtered()[0]||qna[0]).id;renderCommunityV29()};window.v29Search=v=>{comm.query=v;clearTimeout(window.__v29s);window.__v29s=setTimeout(renderCommunityV29,80)};window.v29Like=id=>{const q=qna.find(x=>x.id===id);if(q)q.likes++;renderCommunityV29();say('醫뗭븘?붾? 諛섏쁺?덉뒿?덈떎.','?몟',1200)};window.v29Nominate=id=>{const q=qna.find(x=>x.id===id);if(q)q.candidate=true;renderCommunityV29();say('AI 寃利??꾨낫濡??щ졇?듬땲?? System Admin 寃利???諛섏쁺?⑸땲??','?쭬',2500)};window.v29PostAnswer=id=>{const q=qna.find(x=>x.id===id);if(q){q.answers++;q.status='?닿껐以?}renderCommunityV29();say('?듬????깅줉?섏뿀?듬땲??','??)};window.v29SaveNote=id=>{const q=qna.find(x=>x.id===id);try{window.openMemoModal&&openMemoModal();$('#v25MemoTitle')&&($('#v25MemoTitle').value='而ㅻ??덊떚 ??? '+q.title);$('#v25MemoBody')&&($('#v25MemoBody').value=`[${q.cat}] ${q.title}\n\n${q.body}\n\n?쒓렇: ${q.tags.map(t=>'#'+t).join(' ')}`)}catch(e){say('硫붾え????ν뻽?듬땲??','狩?)}};
function ensureAsk(){if($('#v29AskModal'))return;document.body.insertAdjacentHTML('beforeend',`<div class="v26-ask-modal" id="v29AskModal" onclick="if(event.target===this)v29CloseAsk()"><div class="v26-ask-box"><div class="v26-ask-h"><div><div class="v26-ask-title">吏덈Ц ?깅줉</div><div class="v29-comm-sub">移댄뀒怨좊━??吏곸젒 ?낅젰 媛?? ?쒓렇??Enter濡?異붽??⑸땲??</div></div><button class="large-close" onclick="v29CloseAsk()">??/button></div><div class="v26-ask-body"><div class="v26-form-grid"><div class="v26-field"><label>移댄뀒怨좊━</label><input id="v29AskCat" list="v29CatList" placeholder="?? ?낆같, ESG援щℓ, 湲濡쒕쾶?뚯떛"><datalist id="v29CatList">${cats.filter(c=>c!=='?꾩껜').map(c=>`<option value="${c}"></option>`).join('')}</datalist></div><div class="v26-field"><label>?쒓렇</label><div class="v26-tag-editor" id="v29TagEditor"><input id="v29TagInput" placeholder="?쒓렇 ?낅젰 ??Enter" onkeydown="v29TagKey(event)"></div></div></div><div class="v26-field"><label>吏덈Ц ?쒕ぉ</label><input id="v29AskTitle" placeholder="吏덈Ц????以꾨줈 ?붿빟?댁＜?몄슂"></div><div class="v26-field"><label>?곸꽭 ?댁슜</label><textarea id="v29AskBody" placeholder="?곹솴, 愿??臾몄꽌, VAATZ ?붾㈃, ?먰븯???듬? ?뺥깭瑜??곸뼱二쇱꽭??"></textarea></div></div><div class="v26-ask-foot"><span style="font-size:13px;color:var(--text-4)">?? #?꾨젰?곸엯李?#?먭?紐⑤뱶 #5?ㅽ?</span><div style="display:flex;gap:8px"><button class="v29-btn" onclick="v29CloseAsk()">痍⑥냼</button><button class="v29-btn" onclick="v29SubmitAsk()">?깅줉</button></div></div></div></div>`)}
function renderAskTags(){const ed=$('#v29TagEditor');if(!ed)return;ed.querySelectorAll('.v26-tag-item').forEach(x=>x.remove());const input=$('#v29TagInput');askTags.forEach(t=>{const chip=document.createElement('span');chip.className='v26-tag-item';chip.innerHTML=`#${esc(t)} <button onclick="v29RemoveTag('${esc(t)}')">횞</button>`;ed.insertBefore(chip,input)})}
window.v29OpenAsk=()=>{ensureAsk();askTags=[];['v29AskCat','v29AskTitle','v29AskBody','v29TagInput'].forEach(id=>{const el=$('#'+id);if(el)el.value=''});renderAskTags();$('#v29AskModal')?.classList.add('sh');setTimeout(()=>$('#v29AskTitle')?.focus(),80)};window.v29CloseAsk=()=>$('#v29AskModal')?.classList.remove('sh');window.v29TagKey=e=>{if(e.key==='Enter'||e.key===','){e.preventDefault();const v=e.target.value.replace('#','').trim();if(v&&!askTags.includes(v))askTags.push(v);e.target.value='';renderAskTags()}};window.v29RemoveTag=t=>{askTags=askTags.filter(x=>x!==t);renderAskTags()};window.v29SubmitAsk=()=>{const cat=$('#v29AskCat')?.value.trim()||'?쇰컲',title=$('#v29AskTitle')?.value.trim(),body=$('#v29AskBody')?.value.trim();if(!title||!body)return say('?쒕ぉ怨??곸꽭 ?댁슜???낅젰?댁＜?몄슂.','?좑툘');if(!cats.includes(cat))cats.push(cat);qna.unshift({id:Date.now(),cat,status:'NEW',likes:0,answers:0,title,body,tags:askTags.length?askTags:['吏덈Ц'],author:'?꾨줈?먯뼱?덉뼱濡?,time:'諛⑷툑',candidate:false});comm={cat:'?꾩껜',tag:'',query:'',selected:qna[0].id};v29CloseAsk();renderCommunityV29();say('吏덈Ц???깅줉?섏뿀?듬땲??','??)};
const oldOpenComm=window.openComm;window.openComm=function(tab){oldOpenComm&&oldOpenComm(tab);setTimeout(()=>{if(tab==='qa'||!tab)renderCommunityV29()},40)};
function installBuddy(){const hub=$('#companionHub'),card=$('#companionCard');if(!hub||!card)return;$('#v28BuddyNudge')?.remove();$('#v27BuddySpeech')?.remove();let b=$('#v29BuddyBubble');if(!b){b=document.createElement('div');b.id='v29BuddyBubble';b.className='v29-buddy-bubble';hub.appendChild(b)}const msg=$('#companionMsg');if(msg)msg.textContent='怨듭?쨌硫붾え쨌而ㅻ??덊떚瑜?鍮좊Ⅴ寃??꾩??쒕젮??';const name=$('.companion-name');if(name)name.textContent='VAATZ Buddy';const panel=$('.companion-panel',card);if(panel&&!panel.dataset.v29){panel.dataset.v29='1';panel.innerHTML=`<button class="companion-action" onclick="openMemoModal&&openMemoModal()">?뱷 ??硫붾え</button><button class="companion-action" onclick="openComm('qa')">?뵦 ??Q&A</button><button class="companion-action" onclick="v29BuddyTalk()">?뮠 怨듭? 蹂닿린</button><button class="companion-action" onclick="openMypage&&openMypage()">?뫀 留덉씠?섏씠吏</button><button class="companion-action" onclick="try{closeMypage&&closeMypage()}catch(e){};openComm('char')">?렓 袁몃?湲?/button><button class="companion-action" onclick="openHistory&&openHistory()">?뱶 湲곕줉??/button><div class="companion-admin-divider">Admin ?꾩슜</div><button class="companion-action" onclick="oa&&oa();openAdminTab&&openAdminTab('p-final')">??理쒖쥌 ?뱀씤</button><button class="companion-action" onclick="oa&&oa();openAdminTab&&openAdminTab('p-datamart')">?뾼截??곗씠?곕쭏??/button>`}if(!hub.dataset.v29){hub.dataset.v29='1';hub.addEventListener('mouseenter',()=>v29BuddyTalk('?꾩슂??湲곕뒫? ?瑜??뚮윭 ?댁뼱蹂댁꽭??'));setInterval(()=>{hub.classList.add('v29-hop');setTimeout(()=>hub.classList.remove('v29-hop'),650)},18000);setTimeout(()=>v29BuddyTalk('?ㅻ뒛 怨듭?: ?듬? 洹쇨굅 酉곗뼱媛 ???ш쾶 媛쒖꽑?먯뼱??'),1200)}}
const buddyMsgs=['<b>怨듭?</b> ?좉퇋 援щℓ洹쒖젙 媛쒖젙?덉씠 ?깅줉?먯뼱??','<b>??/b> ?몄슜 踰덊샇瑜??꾨Ⅴ硫?洹쇨굅 ?먮Ц???ㅽ겕濡ㅻ줈 蹂????덉뼱??','<b>而ㅻ??덊떚</b> HOT 吏덈Ц遺??癒쇱? ?뺤씤?대낫?몄슂.','<b>硫붾え</b> 以묒슂???듬?? ??硫붾え????ν빐?먯꽭??'];let bm=0;window.v29BuddyTalk=txt=>{const b=$('#v29BuddyBubble');if(!b)return;b.innerHTML=txt||buddyMsgs[bm++%buddyMsgs.length];b.classList.add('sh');clearTimeout(window.__v29bt);window.__v29bt=setTimeout(()=>b.classList.remove('sh'),5200)};
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
  function toast(msg,icon='??,dur=1500){try{(window.toast||window.say||console.log)(msg,icon,dur)}catch(e){console.log(icon,msg)}}
  function toggleMax(overlay){
    if(!overlay)return;
    overlay.classList.toggle('v30-full');
    const full=overlay.classList.contains('v30-full');
    overlay.querySelectorAll('.v30-max-btn').forEach(b=>{b.textContent=full?'??:'??; b.title=full?'?먮옒 ?ш린':'?꾩껜李?;});
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
    const btn=document.createElement('button');btn.type='button';btn.className='v30-max-btn';btn.title='?꾩껜李?;btn.textContent='??;
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
    toast(`?붾㈃ 諛곗쑉: ${size==='large'?'?ш쾶':size==='small'?'?묎쾶':'?쒖?'}`,'Aa',1200);
  };
  window.setFontSizeV26=window.setFontSizeV29;
  function boot(){
    installMaxButtons();
    const cur=document.documentElement.getAttribute('data-font-size') || (localStorage.getItem('vaatz-font-size')||'standard');
    document.documentElement.setAttribute('data-font-size',cur);
    $$('.v29-size-panel .lb').forEach(x=>x.textContent='諛곗쑉');
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

/* 援щℓ 而ㅻ??덊떚瑜???蹂듭옟?섍쾶: 醫뚯륫 ?듦퀎 ?쒓굅, HOT ?곗꽑, 異붿쿇/?듬?? 移대뱶 ?섎떒 蹂댁“ ?뺣낫 */
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
      const title=$('.v29-comm-title',hero); if(title)title.textContent='HOT 寃뚯떆湲 癒쇱? 蹂닿린';
      const sub=$('.v29-comm-sub',hero); if(sub)sub.textContent='?낅Т??諛붾줈 ?꾩? ?섎뒗 吏덈Ц??癒쇱? 蹂닿퀬, ?꾩슂??湲? 寃?됀룹뭅?뚭퀬由?룻깭洹몃줈 李얠뒿?덈떎.';
    }
    const hot=$('.v29-hot-strip',ct);
    if(hot&&!$('#v31HotHeading',ct)){
      const h=document.createElement('div');h.id='v31HotHeading';h.className='v31-hot-heading';h.innerHTML='?뵦 HOT 寃뚯떆湲 <span>異붿쿇?섎뒗 蹂댁“ ?뺣낫濡쒕쭔 ?쒖떆</span>';hot.parentNode.insertBefore(h,hot);
    }
    $$('.v29-q-card',ct).forEach(card=>{
      const head=$('.v29-q-head',card), meta=$('.v29-q-meta',card);
      if(!head||!meta)return;
      $$('.v29-like-small',head).forEach(s=>{s.classList.add('v31-card-stat');meta.appendChild(s);});
    });
    const sideTitle=$('.v29-comm-left .v29-comm-title',ct); if(sideTitle)sideTitle.innerHTML='援щℓ 吏??br>而ㅻ??덊떚';
    const sideSub=$('.v29-comm-left .v29-comm-sub',ct); if(sideSub)sideSub.textContent='HOT쨌移댄뀒怨좊━쨌?쒓렇 以묒떖?쇰줈 媛蹂띻쾶 ?먯깋?⑸땲??';
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

<!-- ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??     v32 UNIFIED FIX ??而ㅻ??덊떚 UX ?듯빀 媛쒖꽑
     ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??-->
<style id="v32-community-fix">
/* v27 vote-box ?쒓굅 (?쒕ぉ ?곗꽑 ?덉씠?꾩썐 媛뺤젣) */
.v27-vote-box{display:none!important}
.v27-q-row{display:block!important;gap:0!important}
.v27-q-title{font-size:14.5px!important;font-weight:800!important;line-height:1.45!important}
.v27-q-body{font-size:12px!important;margin-bottom:8px!important}

/* v26 vote ?쒓굅 */
.v26-vote,.v26-q-top>.v26-vote{display:none!important}
.v26-q-top{display:block!important}

/* v29 移대뱶 ?????섏? HOT ?쒓린 */
.v29-q-card{transition:all .16s var(--ease)!important}
.v29-q-title{font-size:14.5px!important;font-weight:800!important;line-height:1.44!important;color:var(--text-1)!important}
.v29-q-card:hover .v29-q-title{color:var(--accent)!important}
.v29-q-body{font-size:12px!important;line-height:1.6!important;color:var(--text-3)!important}

/* ?곹깭 諛곗? ????댄? ??諛곗튂 */
.v29-q-card{display:flex!important;flex-direction:column!important}
.v29-q-head{order:1!important;margin-bottom:5px!important}
.v29-q-title{order:2!important}
.v29-q-body{order:3!important}
.v29-q-meta{order:4!important;display:flex!important;gap:8px!important;flex-wrap:wrap!important}

/* HOT ?쒖떆 媛뺥솕 */
.v29-status.hot{background:rgba(255,59,48,.14)!important;color:#FF3B30!important;font-weight:900!important}
.v29-status.hot::before{content:'?뵦 '}
.v29-status.live,.v29-status.adopted{background:var(--g-dim)!important;color:var(--g)!important}
.v29-status.adopted::before{content:'??'}
.v29-status.new{background:var(--accent-dim)!important;color:var(--accent)!important}
.v29-status.new::before{content:'??'}
.v29-status.wait{background:var(--a-dim)!important;color:var(--a)!important}
.v29-status.wait::before{content:'?솇 '}

/* 醫뗭븘???쒓린 ??留덉?留? ?묎쾶 */
.v29-q-meta>.v29-like-small{order:99!important;color:var(--text-4)!important;font-size:11px!important}

/* HOT ?ㅽ듃由?媛쒖꽑 */
.v29-hot-card{transition:all .15s var(--ease)!important;position:relative!important}
.v29-hot-card:hover{transform:translateY(-2px)!important;box-shadow:0 6px 20px rgba(75,142,240,.15)!important}
.v29-hot-label{font-size:10px!important;font-weight:900!important;letter-spacing:.3px!important}
.v29-hot-title{font-size:13px!important;font-weight:800!important;line-height:1.45!important}

/* ?뺣젹 諛???v29 由ъ뒪????*/
.v32-sort-bar{display:flex;align-items:center;gap:6px;margin-bottom:12px;padding:8px 0;border-bottom:1px solid var(--border-1)}
.v32-sort-bar .v32-sort-label{font-size:10px;font-weight:700;color:var(--text-4);text-transform:uppercase;letter-spacing:.5px;margin-right:2px}
.v32-sort-btn{border:1px solid var(--border-1);background:var(--bg-1);color:var(--text-3);border-radius:99px;padding:5px 12px;font-size:11.5px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .12s;white-space:nowrap}
.v32-sort-btn:hover{border-color:var(--border-2);color:var(--text-2);background:var(--bg-2)}
.v32-sort-btn.on{background:var(--accent-dim);border-color:var(--accent-bd);color:var(--accent)}
.v32-sort-btn.hot-btn.on{background:rgba(255,59,48,.1);border-color:rgba(255,59,48,.3);color:#FF3B30}

/* 移대뱶 移댁슫???쒓린 媛쒖꽑 ???꾩씠肄?+ ?レ옄 */
.v32-stat-pill{display:inline-flex;align-items:center;gap:3px;font-size:11px;color:var(--text-4);background:var(--bg-3);border:1px solid var(--border-1);border-radius:99px;padding:2px 8px;font-family:'JetBrains Mono',monospace;font-weight:600}
.v32-stat-pill.votes{color:var(--accent);background:var(--accent-dim);border-color:var(--accent-bd)}

/* 而ㅻ??덊떚 誘몃땲 ?⑤꼸 ??v32 ?낅뜲?댄듃 */
.comm-mini-hd span{font-weight:700;font-size:11px}
.comm-mini-more{font-size:10px;font-weight:600;color:var(--accent);background:var(--accent-dim);border:none;border-radius:4px;padding:2px 7px;cursor:pointer}
.comm-mini-more:hover{background:rgba(75,142,240,.2)}

/* v29 ?ъ씠?쒕컮 ?쒕ぉ 媛쒖꽑 */
.v29-comm-title{letter-spacing:-.04em!important}
.v29-comm-hero{align-items:flex-start!important}

/* ?숆린???뚮옒??諛⑹? */
#ct-qa{transition:opacity .15s}

/* v31 移대뱶 ?ш린 ?ъ“??*/
.v29-q-card{padding:14px 16px!important;border-radius:14px!important}

/* ?곷떒 怨듭? 諛?媛쒖꽑 */
.v29-notice{min-height:28px!important;background:linear-gradient(90deg,var(--accent-dim),transparent)!important}
</style>

(function(){
  'use strict';
  const $=s=>document.querySelector(s);
  const $$=s=>Array.from(document.querySelectorAll(s));

  /* ?? ?뺣젹 諛붾? v29 而ㅻ??덊떚 由ъ뒪?몄뿉 二쇱엯 ?? */
  let v32SortMode='理쒖떊??;

  function injectSortBar(){
    const list=$('.v29-q-list');
    if(!list||list.parentElement.querySelector('.v32-sort-bar'))return;
    const bar=document.createElement('div');
    bar.className='v32-sort-bar';
    bar.innerHTML=`<span class="v32-sort-label">?뺣젹</span>
      <button class="v32-sort-btn on" onclick="v32Sort('理쒖떊??,this)">理쒖떊??/button>
      <button class="v32-sort-btn hot-btn" onclick="v32Sort('?멸린??,this)">?뵦 ?멸린??/button>
      <button class="v32-sort-btn" onclick="v32Sort('誘몄콈??,this)">?솇 誘몄콈???곗꽑</button>
      <span style="margin-left:auto;font-size:10px;color:var(--text-4)">${list.children.length}媛?吏덈Ц</span>`;
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
      if(mode==='?멸린??){
        const la=parseInt(a.querySelector('.v29-like-small')?.textContent||'0');
        const lb=parseInt(b.querySelector('.v29-like-small')?.textContent||'0');
        return lb-la;
      }
      if(mode==='誘몄콈??){
        const wa=a.querySelector('.v29-status.wait')?0:1;
        const wb=b.querySelector('.v29-status.wait')?0:1;
        return wa-wb;
      }
      return 0;
    });
    cards.forEach(c=>list.appendChild(c));
  };

  /* ?? v29 移대뱶??head ?붿냼 二쇱엯 (?곹깭諛곗?瑜???댄? ?꾨줈) ?? */
  function patchCards(){
    $$('.v29-q-card').forEach(card=>{
      if(card.dataset.v32)return;
      card.dataset.v32='1';
      // ?곹깭 諛곗?媛 ?대? head???덈뒗吏 ?뺤씤
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
      // 醫뗭븘???섎? 留덉?留됱쑝濡??대룞
      const meta=card.querySelector('.v29-q-meta');
      if(meta){
        const likeEl=meta.querySelector('.v29-like-small');
        if(likeEl)meta.appendChild(likeEl);
      }
    });
  }

  /* ?? 怨듭??ы빆 ?곗빱 ?낅뜲?댄듃 ?? */
  function patchNotice(){
    const track=$('.v29-notice-track');
    if(!track||track.dataset.v32)return;
    track.dataset.v32='1';
    const notices=[
      '<b>?뱦 二쇱슂 怨듭?:</b> 25??1遺꾧린 援щℓ?곸떊 KPI ?ъ꽦瑜?91.3% ?ъ꽦',
      '<b>?뵦 HOT 吏덈Ц:</b> ?꾨젰?곸엯李??좎같 ??泥섎━ ?덉감 ???듬? 梨꾪깮 ?꾨즺',
      '<b>???쒖뒪??</b> VAATZ 4.2 ?낅뜲?댄듃 ??諛쒖＜ ?붾㈃ UX 媛쒖꽑',
      '<b>?쭬 AI 吏??諛섏쁺:</b> 5?ㅽ? 4???깃툒 ?밴툒 湲곗? 理쒖떊???꾨즺',
      '<b>?뱾 ?낅줈??</b> 怨듭젙嫄곕옒踰??섎룄湲?議고빆 吏??踰좎씠??諛섏쁺 ?꾨즺'
    ];
    track.innerHTML=notices.map(n=>`<span class="v29-notice-item">${n}</span>`).join('') +
                   notices.map(n=>`<span class="v29-notice-item">${n}</span>`).join('');
  }

  /* ?? 而ㅻ??덊떚 ?ㅽ뵂 ??媛쒖꽑 ?곸슜 ?? */
  const origOpen=window.openComm;
  window.openComm=function(tab){
    if(origOpen)origOpen.apply(this,arguments);
    setTimeout(()=>{
      injectSortBar();
      patchCards();
      patchNotice();
    },120);
  };

  /* ?? renderCommunityV29 ?꾩쿂由??? */
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

  /* ?? 珥덇린 ?ㅽ뻾 ?? */
  function init(){
    patchNotice();
    // v27 vote box 利됱떆 ?④린湲?(DOM mutation observer濡??숈쟻 ?쒓굅)
    const style=document.createElement('style');
    style.textContent=`.v27-vote-box,.v26-vote{display:none!important}.v27-q-row,.v26-q-top{display:block!important}`;
    document.head.appendChild(style);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
  else init();
})();

<!-- ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??     v33 UNIFIED REFINEMENT ??而⑥뀎 ?듭씪쨌李?而⑦듃濡ㅒ룰텒??遺꾨━쨌?덉떆 耳?댁뒪쨌罹먮┃??     ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??-->
<style id="v33-refinement-css">
/* ?? 1) 而⑥뀎/?꾩씠肄??듭씪: ?뮕 援щℓ蹂몃? 吏??而ㅻ??덊떚 ?? */
.comm-hd h2{display:flex!important;align-items:center!important;gap:8px!important}

/* ?? 2) v28???댁깋???ㅻ뜑 ?뚰듃 硫붿떆吏 ?④? (description ?곸뿭?쇰줈 ?щ같移? ?? */
#v28CommHint{display:none!important}

/* ?? ?곗륫 ?곷떒 李?而⑦듃濡?理쒕????リ린) 怨좎젙 ?뺣젹 ?? */
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
/* ?ㅻ뜑???リ린/理쒕????곗륫 ?뺣젹 蹂댁옣 (媛??留덉?留??먯떇) */
.comm-hd>.adm-x,.adm-h>.adm-x,.db-hd>.adm-x,.mp-hd>.adm-x{
  order:100!important;margin-left:8px!important;
}

/* ?? 3) ?쇰컲 ?ъ슜?먯뿉寃?"AI 寃利??꾨낫" 踰꾪듉? ?④? (Admin ?꾩슜) ?? */
html:not([data-user-role="admin"]) .v29-action-row button[onclick*="v29Nominate"],
html:not([data-user-role="admin"]) button[onclick*="v27Nominate"]{
  display:none!important;
}
/* Admin?대㈃ 踰꾪듉 ?쒖떆 */
html[data-user-role="admin"] .v29-action-row button[onclick*="v29Nominate"]{
  display:inline-flex!important;
}
/* "AI 寃利??꾨낫" 諭껋????뺣낫?⑹쑝濡???긽 ?쒖떆 (?먮룞 遺꾨쪟 ?곹깭) */
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

/* ?? 4) ?덉떆 ?듬? 蹂몃Ц 媛?낆꽦 ?? */
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

/* ?? 5) 罹먮┃???곸뿭 ?? */
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
  const say=(m,i='??,d=2200)=>{try{(window.toast||window.say||console.log)(m,i,d)}catch(e){console.log(i,m)}};

  /* ????????????????????????????????????????????????
   * 1) 而⑥뀎/?꾩씠肄??듭씪: "?뮕 援щℓ蹂몃? 吏??而ㅻ??덊떚"
   * ???????????????????????????????????????????????? */
  const COMM_NAME='援щℓ蹂몃? 吏??而ㅻ??덊떚';
  const COMM_ICON='?뮕';

  function unifyCommunityName(){
    // ?ㅻ뜑 ??댄?
    const hdH2=$('.comm-hd h2');
    if(hdH2){
      hdH2.innerHTML=`<span style="background:var(--accent-g);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:900">${COMM_ICON} ${COMM_NAME}</span>`;
    }
    // v29 ?ъ씠?쒕컮 ??댄?
    $$('.v29-comm-left .v29-comm-title').forEach(el=>{
      // 硫붿씤 ????댄?留?蹂寃?(HOT Q&A 媛숈? sub-title? ?쒖쇅)
      if(el.textContent.includes('援щℓ') && el.textContent.includes('而ㅻ??덊떚')){
        el.innerHTML=`${COMM_ICON} 援щℓ蹂몃?<br>吏??而ㅻ??덊떚`;
      }
    });
    // ?곗륫 ?ъ씠?쒕컮 誘몃땲 ?⑤꼸
    const miniMore=$('.comm-mini-more');
    if(miniMore){miniMore.textContent=`${COMM_NAME} ??}
    // ?ъ씠???뚮줈??踰꾪듉 ?쇰꺼
    $$('.comm-side-btn').forEach(b=>{
      const titleAttr=b.getAttribute('title')||'';
      if(titleAttr.includes('Q&A') || titleAttr.includes('吏??)){
        b.setAttribute('title',`${COMM_NAME} - Q&A`);
      }
    });
  }

  /* ????????????????????????????????????????????????
   * 2) 李?而⑦듃濡?理쒕????リ린) ?곗륫 ?곷떒 ?듭씪
   *    + v28???댁깋???ㅻ뜑 ?뚰듃 ?쒓굅
   * ???????????????????????????????????????????????? */
  function reorderCommunityHeader(){
    const hd=$('.comm-hd');
    if(!hd) return;
    // v28 hint ?쒓굅 (?대? CSS?먯꽌 ?④? 泥섎━?섏?留? DOM?먯꽌???쒓굅)
    $('#v28CommHint')?.remove();

    // ?リ린 踰꾪듉怨?理쒕???踰꾪듉???곗륫???ㅻ룄濡??ъ젙??    const closeBtn=hd.querySelector('.adm-x');
    const tools=hd.querySelector('.v30-modal-tools');
    if(closeBtn && tools){
      // 理쒕???洹몃９???リ린 踰꾪듉 諛붾줈 ?욎뿉 ?꾩튂
      hd.appendChild(tools);
      hd.appendChild(closeBtn);
    }
  }

  /* ????????????????????????????????????????????????
   * 3) ADMIN/?쇰컲?ъ슜??沅뚰븳 遺꾨━
   *    - ?쇰컲 ?ъ슜?? 醫뗭븘??+ 硫붾え ??λ쭔 媛??   *    - "AI 寃利??꾨낫" ?깆옱 沅뚰븳? ?쒖뒪???대떦??   *    - ?먮룞 遺꾨쪟 ???쒖뒪???대떦??寃利???AI DB ?깆옱 ?먮쫫 ?덈궡
   * ???????????????????????????????????????????????? */
  // ?ъ슜??沅뚰븳 湲곕낯媛?= ?쇰컲 ?ъ슜??  document.documentElement.setAttribute('data-user-role','user');

  function buildAutoFlowBanner(){
    return `<div class="v33-auto-flow">
      <span class="v33-auto-flow-ic">?봽</span>
      <div>
        <b>吏???깆옱 ?먮룞???먮쫫</b> 쨌 醫뗭븘?붾뒗 ?듬? ?덉쭏??蹂댁“ ?좏샇濡쒕쭔 ?ъ슜?⑸땲??
        ?쇱젙 異붿쿇 ???댁긽 + 梨꾪깮 ?듬?? <b>?먮룞?쇰줈 遺꾨쪟?뚮줈 ?대룞</b>?섏뼱 ?쒖뒪???대떦??System Admin) 寃利???        AI 吏??DB??理쒖쥌 ?깆옱?⑸땲?? ?쇰컲 ?ъ슜?먮뒗 異붿쿇쨌硫붾え ??κ퉴吏留?媛?ν빀?덈떎.
        <div class="v33-flow-steps">
          <span class="s">??nbsp;吏덈Ц쨌?듬?</span>
          <span class="arr">??/span>
          <span class="s">??nbsp;?몟 異붿쿇</span>
          <span class="arr">??/span>
          <span class="s">??nbsp;??梨꾪깮</span>
          <span class="arr">??/span>
          <span class="s">??nbsp;?쨼 ?먮룞 遺꾨쪟</span>
          <span class="arr">??/span>
          <span class="s">??nbsp;?썳截?Admin 寃利?/span>
          <span class="arr">??/span>
          <span class="s">??nbsp;?쭬 AI DB ?깆옱</span>
        </div>
      </div>
    </div>`;
  }

  /* ????????????????????????????????????????????????
   * 4) 吏덈Ц蹂??덉떆 ?듬? 耳?댁뒪 ?뺤쓽
   * ???????????????????????????????????????????????? */
  const v33ExampleAnswers={
    1:{ // ?꾨젰?곸엯李?1?뚯감 ?좎같
      summary:'梨꾪깮???뺣떟 ?щ? ??援щℓ?낅Т洹쒖젙 ??3議?4??+ VAATZ ?좎같泥섎━ 硫붾돱 ?덉감',
      content:`<p><b>1?뚯감 ?좎같 ??泥섎━ ?덉감</b> (援щℓ?낅Т洹쒖젙 ??3議?4??</p>
        <ol>
          <li><b>?좎같 ?ъ쑀 ?뺤씤</b> ??李몄뿬 ?낆껜 遺議?3??誘몃쭔) / ?덇? 珥덇낵 / ?먭꺽 誘몃떖 ??援щ텇</li>
          <li><b>泥섎━ 諛⑺뼢 寃곗젙</b><ul>
            <li>?낆껜 ?뺣? ??<b>?ш났怨?/b>: 5?ㅽ? ?깃툒 湲곗? ?꾪솕 ?먮뒗 ?좉퇋 ?낆껜 珥덈?</li>
            <li><b>?섏쓽怨꾩빟 ?꾪솚</b>: ?곴꺽 ?낆껜 3??誘몃쭔 ?먮뒗 湲닿툒 議곕떖 ?ъ쑀 紐낇솗 ??/li>
          </ul></li>
          <li><b>援щℓ?꾩썝???ъ쟾 ?뱀씤</b> ??1?듭썝 珥덇낵 嫄댁? ?꾩닔, ?ъ쑀??泥⑤?</li>
          <li><b>VAATZ 泥섎━</b>: ?낆같愿由????좎같泥섎━ ??"?ш났怨? ?먮뒗 "?섏쓽?꾪솚" ?대┃<br>
          ??湲곗〈 李몄뿬?낆껜???먮룞 ?뚮┝ 諛쒖넚, 蹂寃??대젰 ?먮룞 湲곕줉</li>
        </ol>
        <p><b>?뮕 ?ㅻТ ??</b> ?섏쓽怨꾩빟 ?꾪솚 ?쒖뿉??<b>?좎같 ?ъ쑀??+ 3?ㅽ? ?댁긽 ?낆껜 以??곴꺽 ?꾨낫 由ъ뒪??/b>瑜?諛섎뱶??泥⑤??댁빞 ?⑸땲??</p>
        <div class="v33-src"><b>洹쇨굅 臾몄꽌</b>
          <span class="v33-src-chip">援щℓ?낅Т洹쒖젙 ??3議?/span>
          <span class="v33-src-chip">?낆같?댁쁺 STD-PUR-012</span>
          <span class="v33-src-chip">VAATZ ?낆같紐⑤뱢 留ㅻ돱??Ch.5</span>
        </div>`,
      author:'?꾨줈?먯뼱留덉뒪??,authorLv:'Lv.4',adopted:true
    },
    2:{ // 5?ㅽ? 4???깃툒
      summary:'梨꾪깮 ?듬? ??25??1??媛쒖젙 湲곗? + IATF 16949 ?몄쬆 ?꾩닔 ?щ?',
      content:`<p><b>25??1?붾???5?ㅽ? ?됯? 湲곗? 媛쒖젙??/b> ?곸슜</p>
        <ul>
          <li>?덉쭏寃쎌쁺?쒖뒪???몄쬆(<b>IATF 16949</b>)??<b>5?깃툒 ?밴툒 ?꾩닔 ?붽굔</b>?쇰줈 異붽?</li>
          <li>湲곗〈 4?깃툒 ?묐젰?щ뒗 <b>26??6?붽퉴吏 ?좎삁湲곌컙</b> ?곸슜</li>
          <li>?좎삁湲곌컙 ??誘몄씤利???4?깃툒 ?숆껐 (?ъ떖?????먮룞 4?깃툒 ?곸슜)</li>
        </ul>
        <p><b>?밴툒 ?꾩옣 ?ъ궗 異붽? ??ぉ (25??1??)</b></p>
        <ol>
          <li>?ㅻ쭏?명뙥?좊━ ?섏? 吏꾨떒 (?먮룞???붿??명솕 ?먯닔 70???댁긽)</li>
          <li>ESG ?됯? ?깃툒 (B ?댁긽)</li>
          <li>?꾩냼以묐┰ 濡쒕뱶留??쒖텧 (Scope 1쨌2 湲곗?)</li>
        </ol>
        <p><b>?뱥 ?좎껌 ?덉감:</b> VAATZ ???묐젰?ш?由???5?ㅽ??ъ궗 ???밴툒?좎껌 ???몄쬆??泥⑤? ??援щℓ?덉쭏湲고쉷? ?ъ궗 (??4~6二??뚯슂)</p>
        <div class="v33-src"><b>洹쇨굅 臾몄꽌</b>
          <span class="v33-src-chip">?덉쭏 5?ㅽ? ?댁쁺湲곗? v4.0</span>
          <span class="v33-src-chip">5?ㅽ? 媛쒖젙??25.01</span>
          <span class="v33-src-chip">IATF 16949 ?몄쬆 媛?대뱶</span>
        </div>`,
      author:'?덉쭏吏?댁씠',authorLv:'Lv.3',adopted:false
    },
    3:{ // ?먭?紐⑤뱶 ?④? ?대젰 + ?섏쑉
      summary:'?댁쁺 ?듬? ???먭?紐⑤뱶 沅뚰븳 援ъ“ + ?④?/?섏쑉 ?듯빀 議고쉶 諛⑸쾿',
      content:`<p><b>?먭?紐⑤뱶 寃??沅뚰븳 援ъ“</b></p>
        <ul>
          <li>?먭???臾몄꽌??湲곕낯 <b>由щ뜑 ?꾩슜</b> 蹂댁븞?깃툒 (??κ툒 ?댁긽 ?먮룞 ?묎렐)</li>
          <li>?쇰컲 ?ъ슜?먮뒗 <b>吏???ъ슜??沅뚰븳</b>??遺?щ맂 寃쎌슦?먮쭔 寃??媛??/li>
          <li>沅뚰븳 ?좎껌: VAATZ ??留덉씠?섏씠吏 ??沅뚰븳?좎껌 ???먭?紐⑤뱶 ?ъ슜 ?좎껌 ??????뱀씤</li>
        </ul>
        <p><b>?④? ?대젰 + ?섏쑉 ?듯빀 議고쉶</b></p>
        <ol>
          <li>梨꾪똿李?醫뚯륫 紐⑤뱶瑜?<b>"?먭?紐⑤뱶"</b>濡??꾪솚</li>
          <li>吏덉쓽 ?? <i>"AL-2024 紐⑤뜽 12媛쒖썡 ?④? 異붿씠? USD ?섏쑉 ?숈떆 議고쉶"</i></li>
          <li>AI媛 ?먭? DB + ?섏쑉 DB(?쒓뎅???留ㅻℓ湲곗???瑜??숈떆 寃?됲븯???듯빀 李⑦듃濡?諛섑솚</li>
        </ol>
        <p><b>?좑툘 二쇱쓽:</b> ?먭????곗씠?곕뒗 ?몃? 諛섏텧 湲덉?. 罹≪퀜/蹂듭궗 ???뚰꽣留덊겕媛 ?먮룞 ?쎌엯?⑸땲??</p>
        <div class="v33-src"><b>洹쇨굅 臾몄꽌</b>
          <span class="v33-src-chip">?먭? ?곗젙 湲곗???v2.3</span>
          <span class="v33-src-chip">VAATZ 沅뚰븳?뺤콉 STD-SEC-003</span>
          <span class="v33-src-chip">?쒓뎅????섏쑉 I/F 紐낆꽭</span>
        </div>`,
      author:'?먭?遺꾩꽍??,authorLv:'Lv.2',adopted:false
    },
    4:{ // VAATZ 諛쒖＜ ?뚮┝ ?꾨씫
      summary:'梨꾪깮 ?듬? ??VAATZ 諛쒖＜ ?뚮┝ 泥댄겕?ъ씤??5?④퀎',
      content:`<p><b>VAATZ 諛쒖＜ ?뚮┝ ?꾨씫 ??泥댄겕 ?쒖꽌</b></p>
        <ol>
          <li><b>諛쒖＜???곹깭 ?뺤씤</b><br>
          VAATZ ??諛쒖＜愿由???諛쒖＜議고쉶 ???대떦 PO 踰덊샇 ??"?듬낫?곹깭" ?뺤씤 (?뺤긽/?ㅽ뙣/?湲?</li>
          <li><b>?묐젰??留덉뒪???곕씫泥?/b><br>
          ?낆껜?뺣낫愿由????묐젰?????뚮┝ ?섏떊 ?대떦???대찓?셋룻빖?쒗룿 ?깅줉 ?щ? ?뺤씤</li>
          <li><b>?뚮┝ 梨꾨꼸 ?ㅼ젙</b><br>
          ?쒖뒪?쒖꽕?????뚮┝?ㅼ젙 ??諛쒖＜ ?뚮┝ 梨꾨꼸(?대찓??SMS/移댁뭅?ㅼ썙?? ON ?щ?</li>
          <li><b>?ㅽ뙵/?꾪꽣 ?뺤씤</b><br>
          諛쒖떊 ?꾨찓??<code>noreply@vaatz.co.kr</code> ?묐젰??硫붿씪?쒕쾭?먯꽌 李⑤떒 ?щ? ?뺤씤 ?붿껌</li>
          <li><b>?ъ쟾??泥섎━</b><br>
          諛쒖＜議고쉶 ???곗륫 "?뚮┝ ?ъ쟾?? 踰꾪듉 ?대┃ (1??理쒕? 3?뚭퉴吏 ?ъ떆??媛??</li>
        </ol>
        <p><b>?뵩 ?쒖뒪???μ븷 ?섏떖 ??</b> 援щℓ?붿??몄텛吏꾪?(<b>02-3464-XXXX</b>)??PO踰덊샇? ?④퍡 利됱떆 臾몄쓽</p>
        <div class="v33-src"><b>洹쇨굅 臾몄꽌</b>
          <span class="v33-src-chip">VAATZ 諛쒖＜紐⑤뱢 留ㅻ돱??/span>
          <span class="v33-src-chip">?묐젰???뚮┝ ?댁쁺吏移?/span>
          <span class="v33-src-chip">?쒖뒪???μ븷 ???SOP</span>
        </div>`,
      author:'VAATZ?ъ씤',authorLv:'Lv.2',adopted:true
    },
    5:{ // MRO 諛섎났 援щℓ 寃쎈ℓ?낆같 ?앸왂
      summary:'?댁쁺 ?듬? ??MRO 移댄깉濡쒓렇 + ?④?怨꾩빟 ?쒖슜 ?щ?',
      content:`<p><b>MRO 諛섎났 援щℓ ??寃쎈ℓ?낆같 ?앸왂 媛??議곌굔</b> (?쇰컲?먯옱 援щℓ 媛?대뱶 ??議?</p>
        <ul>
          <li>嫄대떦 湲덉븸 <b>3泥쒕쭔??誘몃쭔</b> + 吏곸쟾 12媛쒖썡 ???숈씪 ?덈ぉ 援щℓ ?ㅼ쟻 3???댁긽</li>
          <li>移댄깉濡쒓렇 ?깅줉 ?덈ぉ?대ŉ <b>?④?怨꾩빟(Frame Agreement)</b> 泥닿껐 ?낆껜 蹂댁쑀</li>
          <li>?덈ぉ ?ъ뼇 蹂寃쎌씠 ?녾퀬 ?쒖옣 媛寃?蹂?숈씠 짹5% ?대궡</li>
        </ul>
        <p><b>泥섎━ ?덉감</b></p>
        <ol>
          <li>VAATZ ???쇰컲?먯옱 ??MRO移댄깉濡쒓렇 ???덈ぉ ?좏깮</li>
          <li>"?④?怨꾩빟 ?쒖슜" ?좉? ON ???먮룞?쇰줈 湲곗〈 怨꾩빟 ?④? ?곸슜</li>
          <li>諛쒖＜???먮룞 ?앹꽦 ?????寃곗옱留뚯쑝濡?泥섎━ ?꾨즺</li>
        </ol>
        <p><b>?뱦 ?덉쇅 ?щ?:</b> 移댄깉濡쒓렇 ?덈ぉ?댁?留?<b>湲닿툒 ?ъ뼇 蹂寃?/b>???꾩슂??寃쎌슦???섏쓽怨꾩빟 ?ъ쑀???묒꽦 ?꾩닔 (FM-PU-042 ?묒떇 ?ъ슜)</p>
        <div class="v33-src"><b>洹쇨굅 臾몄꽌</b>
          <span class="v33-src-chip">?쇰컲?먯옱 MRO 援щℓ 媛?대뱶</span>
          <span class="v33-src-chip">?④?怨꾩빟 ?댁쁺?쒖? STD-PUR-018</span>
          <span class="v33-src-chip">FM-PU-042 ?섏쓽怨꾩빟 ?ъ쑀??/span>
        </div>`,
      author:'MRO?대떦',authorLv:'Lv.2',adopted:false
    },
    6:{ // ?묐젰???됯? 寃곌낵 ?낆같 ?먮룞 諛섏쁺
      summary:'?댁쁺 ?듬? ??5?ㅽ? ?깃툒 + ?덉쭏 ?댁뒋 ?먮룞 ?꾪꽣留??ㅼ젙',
      content:`<p><b>VAATZ ?낆같 珥덈? ?먮룞 ?꾪꽣留??ㅼ젙</b></p>
        <ol>
          <li>?낆같?깅줉 ??"李몄뿬?낆껜 ?먮룞異붿쿇" ?쒖꽦??/li>
          <li>?꾪꽣 議곌굔 ?ㅼ젙 (援щℓ?꾨왂? ?ъ쟾 ?묒쓽):
            <ul>
              <li><b>5?ㅽ? ?깃툒:</b> 3?ㅽ? ?댁긽 (湲곕낯媛? / ?꾨왂 遺?덉? 4?ㅽ? ?댁긽</li>
              <li><b>?덉쭏 ?댁뒋:</b> 理쒓렐 6媛쒖썡 ?대젅??3嫄?誘몃쭔 ?먮룞 ?꾪꽣</li>
              <li><b>?⑷린 以?섏쑉:</b> 95% ?댁긽</li>
              <li><b>?щТ 嫄댁쟾??</b> ?좎슜?됯? BBB ?댁긽</li>
            </ul>
          </li>
          <li>VAATZ媛 ?묐젰?ы룊媛 DB + ?덉쭏?댁뒋 DB + NICE ?좎슜?됯? I/F瑜??ㅼ떆媛?議고쉶?섏뿬 ?곴꺽 ?낆껜 由ъ뒪???앹꽦</li>
          <li>理쒖쥌 5~10媛??낆껜 ?먮룞 異붿쿇 ???대떦??寃????珥덈???諛쒖넚</li>
        </ol>
        <p><b>?슟 ?먮룞 ?쒖쇅 ???</b> ?곸뾽?뺤?쨌?섎룄湲됰쾿 ?꾨컲쨌怨꾩빟?댁? ?대젰 ?낆껜???쒖뒪?쒖씠 ?먮룞 李⑤떒?⑸땲??</p>
        <div class="v33-src"><b>洹쇨굅 臾몄꽌</b>
          <span class="v33-src-chip">?묐젰???됯? ?곗씠?곗뀑 v5</span>
          <span class="v33-src-chip">VAATZ ?낆같?먮룞??留ㅻ돱??/span>
          <span class="v33-src-chip">?덉쭏?대젅??愿由ъ?移?/span>
        </div>`,
      author:'?덉쭏吏?댁씠',authorLv:'Lv.3',adopted:false
    }
  };

  /* ????????????????????????????????????????????????
   * 4) v29 detail() ?⑥닔 ?ㅻ쾭?쇱씠?????덉떆 ?듬? ?ы븿
   * ???????????????????????????????????????????????? */
  function patchV29Detail(){
    // qna ?곗씠?곗뿉 ?묎렐?섍린 ?꾪빐 renderCommunityV29瑜??쒕쾲 ??媛먯뙂
    const oldRender=window.renderCommunityV29;
    if(!oldRender || window.__v33CommunityWrapped) return;
    window.__v33CommunityWrapped=true;

    window.renderCommunityV29=function(){
      oldRender.apply(this,arguments);
      // ?뚮뜑 吏곹썑 detail ?곸뿭???띾????덉떆 ?듬??쇰줈 援먯껜
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

    // ?꾩옱 ?좏깮??吏덈Ц ID 異붿텧
    const onCard=$('.v29-q-card.on');
    const titleEl=$('.v29-detail-title');
    if(!titleEl) return;

    // qna 諛곗뿴 ?먯껜瑜?李얠쓣 ???놁쑝誘濡??쒕ぉ?쇰줈 留ㅼ묶
    const titleText=titleEl.textContent.trim();
    let matchedId=null;
    const titleMap={
      '?꾨젰?곸엯李?:1,'1?뚯감 ?좎같':1,
      '5?ㅽ?':2,'IATF':2,'4??':2,'4 ??5':2,
      '?먭?紐⑤뱶':3,'?④?':3,
      'VAATZ ?댁쇅':4,'?섏쑉':titleText.includes('VAATZ')?4:null,
      'MRO':5,'諛섎났 援щℓ':5,'寃쎈ℓ?낆같???앸왂':5,
      '?묐젰???됯?':6,'?낆같 李몄뿬 議곌굔':6,'?낆같 珥덈?':6,
      '諛쒖＜':titleText.includes('?뚮┝')||titleText.includes('?듬낫')||titleText.includes('泥댄겕?ъ씤??)?4:null,
    };
    for(const k of Object.keys(titleMap)){
      if(titleText.includes(k) && titleMap[k]){matchedId=titleMap[k];break}
    }
    if(!matchedId){
      // ID濡??뺥솗 留ㅼ묶 (qna 諛곗뿴 ?쒖꽌)
      const allCards=$$('.v29-q-card');
      const idx=allCards.findIndex(c=>c.classList.contains('on'));
      if(idx>=0 && idx<6) matchedId=idx+1;
    }
    const example=v33ExampleAnswers[matchedId];
    if(!example) return;

    // 湲곗〈 ?듬? 諛뺤뒪 援먯껜 (.v29-answer 泥ル쾲吏?= ?덉떆 ?듬?)
    const answerBox=detail.querySelector('.v29-answer');
    if(!answerBox || answerBox.dataset.v33) return;
    answerBox.dataset.v33='1';

    // ?ㅻ뜑? ?≪뀡 踰꾪듉 ?곸뿭 蹂댁〈
    const head=answerBox.querySelector('.v29-answer-head');
    const actionRow=answerBox.querySelector('.v29-action-row');
    const bodyEl=answerBox.querySelector('.v29-answer-body');

    if(head){
      head.innerHTML=`<span class="v29-answer-author">??梨꾪깮 ?듬? ??${esc(example.author)} <span style="color:var(--text-4);font-weight:400;font-size:10px;margin-left:4px">${esc(example.authorLv)}</span></span>${example.adopted?'<span class="v29-status adopted">梨꾪깮??/span>':'<span class="v29-status new">寃?좎쨷</span>'}`;
    }
    if(bodyEl){
      bodyEl.innerHTML=`<div style="font-size:12px;color:var(--text-3);margin-bottom:8px;font-style:italic">${esc(example.summary)}</div><div class="v33-example-answer">${example.content}</div>`;
    }
    // ?≪뀡 踰꾪듉: ?쇰컲 ?ъ슜?먯뿉寃뚮뒗 AI 寃利??꾨낫 ?쒓굅
    if(actionRow){
      // 遺?쒕윭???쇰꺼濡?援먯껜
      const btns=actionRow.querySelectorAll('button');
      btns.forEach(b=>{
        const t=(b.textContent||'').trim();
        if(t.includes('醫뗭븘??)){b.innerHTML='?몟 醫뗭븘??}
        else if(t.includes('硫붾え ???)){b.innerHTML='狩?硫붾え ???}
        else if(t.includes('AI 寃利?)){
          // ?쇰컲 ?ъ슜?먮뒗 蹂댁씠吏 ?딄쾶 (CSS???숈씪?섍쾶 ?곸슜??
          b.style.display='none';
        }
      });
    }

    // ?듬? 諛뺤뒪 ?꾩뿉 ?먮룞???먮쫫 ?덈궡 諛곕꼫 異붽?
    const loopCard=detail.querySelector('.v29-loop');
    if(loopCard && !loopCard.dataset.v33){
      loopCard.dataset.v33='1';
      loopCard.outerHTML=buildAutoFlowBanner();
    }
  }

  /* ????????????????????????????????????????????????
   * 5) 罹먮┃???쒖뒪???ъ꽕怨?   *    - ?덉쟾?섍쾶 ?뚮뜑留곷릺???⑥씪 肄붾뱶?ъ씤???대え吏 ?ъ슜
   *    - 硫붿씤 ?붿뒪?뚮젅?닿? ?ㅼ젣濡?蹂寃쎈릺?꾨줉
   *    - 紐⑥옄/諛곌꼍/?댄럺?멸? ?쒓컖?곸쑝濡?遺꾨━?섏뼱 蹂댁씠?꾨줉
   * ???????????????????????????????????????????????? */
  const V33_CHARS=[
    {emoji:'?맕',name:'??톬 諛붿씠??},
    {emoji:'?맶',name:'怨곕룎???묒긽媛'},
    {emoji:'?쫲',name:'?ъ슦 遺꾩꽍媛'},
    {emoji:'?맦',name:'?몃옉???덉쭏愿由?},
    {emoji:'?쫨',name:'?ъ옄 由щ뜑'},
    {emoji:'?맻',name:'?먮떎 ?좎쨷??},
    {emoji:'?맧',name:'?좊겮 誘쇱꺽??},
    {emoji:'?맱',name:'媛쒓뎄由??꾩쟾媛'},
    {emoji:'?쫱',name:'遺?됱씠 ?꾨왂媛'},
    {emoji:'?맪',name:'?쒕옒怨?理쒓컯??},
    {emoji:'?쨼',name:'AI ?댁떆?ㅽ꽩??},
    {emoji:'狩?,name:'?ㅽ? ?뚮젅?댁뼱'},
    {emoji:'?렞',name:'?寃?留덉뒪??},
    {emoji:'??',name:'濡쒖폆 異붿쭊??},
    {emoji:'?뭿',name:'?ㅼ씠??肄붿뼱'},
    {emoji:'?룇',name:'梨뷀뵾??},
  ];

  // ?꾩옱 罹먮┃???곹깭
  const v33CharState={
    char:'?맕',
    hat:'',
    side:'',
    effect:'',
    bg:'?룫',
    nick:'?꾨줈?먯뼱?덉뼱濡?
  };

  function renderV33Character(){
    const charRoom=$('#charRoom');
    if(!charRoom) return;
    // 紐⑤뱺 ?먯떇 ?쒓굅 ???덈줈 ?뚮뜑
    charRoom.innerHTML=`
      <div class="v33-char-bg">${v33CharState.bg||'?룫'}</div>
      <div class="v33-char-fg">
        <div class="v33-char-figure">
          ${v33CharState.hat?`<div class="v33-char-hat">${v33CharState.hat}</div>`:''}
          <span class="v33-char-main">${v33CharState.char}</span>
          ${v33CharState.side?`<div class="v33-char-side">${v33CharState.side}</div>`:''}
          ${v33CharState.effect?`<div class="v33-char-effect">${v33CharState.effect}</div>`:''}
        </div>
        <div class="v33-char-nick" id="charNick">${esc(v33CharState.nick)}</div>
        <div class="v33-char-lv">援щℓPro 쨌 1,720pt</div>
      </div>
    `;
    charRoom.classList.add('v33-char-stage');
  }

  function setupV33CharacterPicker(){
    // 湲곗〈 char-room 而⑦뀒?대꼫 泥섎━
    const charRoom=$('#charRoom');
    if(!charRoom) return;

    // 罹먮┃???쎌빱 ?곸뿭 ?ш뎄??    const pickerWrap=charRoom.parentElement.querySelector('.v33-char-picker') ||
                     charRoom.parentElement.querySelector('[style*="margin-top:4px"]');
    if(pickerWrap && !pickerWrap.dataset.v33){
      pickerWrap.dataset.v33='1';
      pickerWrap.className='v33-char-picker';
      pickerWrap.innerHTML=V33_CHARS.map((c,i)=>
        `<button class="char-sel${i===0?' active':''}" onclick="v33PickChar(this,'${c.emoji}','${esc(c.name)}')" title="${esc(c.name)}">${c.emoji}</button>`
      ).join('');

      // ?쎌빱 ???쇰꺼??源붾걫?섍쾶
      const label=charRoom.parentElement.querySelector('[style*="font-size:10px"]');
      if(label && label.textContent.includes('罹먮┃???좏깮')){
        label.innerHTML='?렓 罹먮┃???좏깮 <span style="color:var(--text-4);font-weight:400">(?대┃?섏뿬 蹂寃?</span>';
      }

      // ?덈궡 臾멸뎄 異붽?
      if(!charRoom.parentElement.querySelector('.v33-char-info')){
        const info=document.createElement('div');
        info.className='v33-char-info';
        info.innerHTML='?뮕 ?몃깽?좊━?먯꽌 紐⑥옄쨌諛곌꼍쨌?댄럺?몃? ?대┃?섎㈃ 利됱떆 ?μ갑?⑸땲??;
        pickerWrap.parentElement.insertBefore(info, pickerWrap.nextSibling);
      }
    }
    renderV33Character();
  }

  // 罹먮┃????  window.v33PickChar=function(btn,emoji,name){
    $$('.char-sel').forEach(b=>b.classList.remove('active'));
    btn?.classList.add('active');
    v33CharState.char=emoji;
    renderV33Character();
    // dock badge???숆린??    const dockBadge=$('#dockBadge');
    if(dockBadge) dockBadge.textContent=emoji;
    say(`${name} ?좏깮!`,'??,1500);
  };

  // ?꾩씠???μ갑 - 移댄뀒怨좊━蹂꾨줈 ?쒓컖?곸쑝濡??곸슜
  window.v33EquipItem=function(slot,emoji){
    if(!slot||!emoji) return;
    const HATS=['?렔','?몣','??','?럳','?묕툘','?룇','?첉','?몤'];
    const PETS=['?맩','?맯','?맔','?릧','?쫫','?쫳','?맊'];
    const EFFECTS=['狩?,'?뮟','?뵦','?꾬툘','?렦','??,'?뭿','?뙚'];
    const BGS=['?뙄','?뙵','?룘截?,'?뙆','?룺','?룫','?똽','?룚截?];

    if(HATS.includes(emoji)) v33CharState.hat=emoji;
    else if(PETS.includes(emoji)) v33CharState.side=emoji;
    else if(EFFECTS.includes(emoji)) v33CharState.effect=emoji;
    else if(BGS.includes(emoji)) v33CharState.bg=emoji;
    else v33CharState.side=emoji; // 湲곕낯? ?ъ씠?쒖뿉 ?쒖떆

    // ?щ’ ?쒓컖??active ?곹깭
    if(slot){
      // 媛숈? 移댄뀒怨좊━ ?щ’??active ?쒓굅
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
    say(`${emoji} ?μ갑!`,'??,1200);
  };

  // 湲곗〈 equipItem怨?pickChar瑜?v33?쇰줈 ?쇱슦??  function patchCharFunctions(){
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
        const charObj=V33_CHARS.find(c=>c.emoji===emoji)||{name:btn?.title||'罹먮┃??};
        v33PickChar(btn,emoji,charObj.name);
      }catch(e){
        if(origPick) origPick.call(this,btn,emoji);
      }
    };
  }

  // ?몃깽?좊━ ?щ’???덉쟾???대え吏濡??낅뜲?댄듃
  function patchInventory(){
    const invGrid=$('#ct-char .inv-grid');
    if(!invGrid || invGrid.dataset.v33) return;
    invGrid.dataset.v33='1';
    // ?덉쟾??湲곕낯 ?몃깽?좊━ 援ъ꽦
    const defaultItems=[
      {emoji:'?렔',name:'?좎궗 紐⑥옄',equipped:false},
      {emoji:'?몣',name:'?뺢?',equipped:false},
      {emoji:'?럳',name:'?숈궗紐?,equipped:false},
      {emoji:'?맩',name:'怨좎뼇??移쒓뎄',equipped:false},
      {emoji:'?릧',name:'?쒕옒怨?移쒓뎄',equipped:false},
      {emoji:'狩?,name:'蹂꾨튆 ?댄럺??,equipped:false},
      {emoji:'?뵦',name:'遺덇퐙 ?ㅻ씪',equipped:false},
      {emoji:'?뙄',name:'?뚮룄 諛곌꼍',equipped:false},
      {emoji:'?뙵',name:'踰싰퐙 諛곌꼍',equipped:false},
      {emoji:'?룘截?,name:'?ㅼ븙??諛곌꼍',equipped:false},
      {emoji:'?뭿',name:'?ㅼ씠???댄럺??,equipped:false},
    ];
    invGrid.innerHTML=defaultItems.map(it=>
      `<div class="inv-slot${it.equipped?' equipped':''}" title="${esc(it.name)}" onclick="v33EquipItem(this,'${it.emoji}')">${it.emoji}</div>`
    ).join('') + '<div class="inv-slot empty"></div><div class="inv-slot empty"></div>';
  }

  /* ????????????????????????????????????????????????
   * Boot
   * ???????????????????????????????????????????????? */
  function boot(){
    unifyCommunityName();
    reorderCommunityHeader();
    patchV29Detail();
    patchCharFunctions();

    // 罹먮┃?????대┫ ???⑥튂
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

    // 而ㅻ??덊떚 ?ㅽ뵂 ???듭씪 ?곸슜
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

    // 二쇨린?곸쑝濡??댁깋???꾩튂??v28 ?뚰듃 ?쒓굅 蹂댁옣
    setInterval(()=>{
      $('#v28CommHint')?.remove();
      unifyCommunityName();
    },2000);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();

<!-- ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??     v34 FINAL POLISH
     ???고듃 ?꾩쟾 怨좎젙  ??援щℓ吏??而ㅻ??덊떚 ?듭씪
     ??而ㅻ??덊떚 李??ш린 議곗젅 ?ш뎄??     ???낅Т FLOW ?ъ꽕怨?(?뚯씪?낅줈?쒋넂??뱀씤?믪떆?ㅽ뀥?뱀씤?묨I諛섏쁺)
     ??? Admin ?대뜑 愿由?UI ?ъ꽕怨?     ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??-->

<style id="v34-css">
/* ?? 湲곕낯 由ъ뀑: 而ㅻ??덊떚 ?꾩껜 ?고듃 怨좎젙 ?? */
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
/* calc 蹂???고듃 媛뺤젣 怨좎젙 */
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

/* ?? ?ㅻ뜑: 李?而⑦듃濡??뺤떎???곗륫 諛곗튂 ?? */
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
/* 湲곗〈 v30 max btn ?④린怨?v34濡??듭씪 */
.v30-modal-tools,.v27-comm-toolbar{display:none!important}

/* ?? 而ㅻ??덊떚 ?ㅻ쾭?덉씠 & 李??ш린 ?? */
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
  /* 湲곕낯 ?ш린 */
  width:min(1560px,calc(100vw - 48px))!important;
  height:calc(100vh - 48px)!important;
  max-height:calc(100vh - 48px)!important;
  transition:width .25s var(--ease),height .25s var(--ease),border-radius .2s!important;
}
/* ?꾩껜?붾㈃ */
.comm-ov.v34-max{padding:0!important}
.comm-ov.v34-max .comm-box{
  width:100vw!important;height:100vh!important;
  max-height:100vh!important;border-radius:0!important;
}
/* 而ㅻ??덊떚 ??컮 - ?앹뾽 ???놁븷????(v29 uses 3-column) */
.comm-box .comm-tabs{display:none!important}
.comm-box .comm-body{
  flex:1!important;overflow:hidden!important;
  min-height:0!important;padding:0!important;
}
/* 3移쇰읆 洹몃━???뺤긽??*/
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

/* ?? ?낅Т FLOW ?뚰겕?뚮줈??諛곕꼫 ?? */
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
/* ?붿궡???ㅻ쾭?덉씠 */
.v34-flow-step:not(:last-child)::after{
  content:'??;position:absolute;right:-8px;top:50%;transform:translateY(-50%);
  font-size:18px;font-weight:900;color:var(--text-4);z-index:2;
}

/* ?? ? Admin ?⑤꼸 ?ъ꽕怨??? */
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
/* ?뚯씪 移대뱶 */
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
/* ?ㅽ뀦 諛곗? */
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
/* ?몃씪???≪뀡 */
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
/* ?낅줈??議?*/
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
/* 援щ텇??*/
.v34-section-label{
  font-size:9.5px;font-weight:700;text-transform:uppercase;
  letter-spacing:.8px;color:var(--text-4);margin:16px 0 8px;
  display:flex;align-items:center;gap:8px;
}
.v34-section-label::after{content:'';flex:1;height:1px;background:var(--border-1)}
/* 諛곗튂 ?꾩넚 諛곕꼫 */
.v34-send-banner{
  display:flex;align-items:center;justify-content:space-between;
  padding:12px 16px;background:linear-gradient(135deg,var(--accent-dim),var(--bg-2));
  border:1px solid var(--accent-bd);border-radius:10px;margin-bottom:12px;
}
.v34-send-banner-text{font-size:12px;color:var(--text-2);line-height:1.5}
.v34-send-banner-text b{color:var(--text-1)}
/* ?쒖뒪???꾩넚 ?뺤씤 諛곗? */
.v34-sent-check{
  display:inline-flex;align-items:center;gap:4px;
  padding:3px 8px;border-radius:99px;font-size:10px;font-weight:700;
  background:linear-gradient(135deg,var(--accent-dim),var(--bg-3));
  color:var(--accent);border:1px solid var(--accent-bd);
}
/* 鍮??곹깭 */
.v34-empty{
  display:flex;flex-direction:column;align-items:center;
  justify-content:center;padding:40px 20px;text-align:center;
  color:var(--text-4);font-size:12px;gap:8px;
}
.v34-empty-ic{font-size:32px;opacity:.6}
/* ?꾩껜?붾㈃ 踰꾪듉 ?곹깭 */
.v34-ctrl-btn.maximized{
  background:var(--accent-dim)!important;
  color:var(--accent)!important;
  border-color:var(--accent-bd)!important;
}

/* ?? 援щℓ吏??而ㅻ??덊떚 ?쒖껜 ?듭씪 ?? */
.comm-hd h2{
  font-size:16px!important;
  background:var(--accent-g)!important;
  -webkit-background-clip:text!important;
  -webkit-text-fill-color:transparent!important;
  font-family:'Outfit','Noto Sans KR',sans-serif!important;
  font-weight:900!important;letter-spacing:-0.04em!important;
}

/* 湲곗〈 v28/v29/v30 max 踰꾪듉, ?뚰듃 ?꾩쟾 ?쒓굅 */
#v28CommHint,.v30-modal-tools,.v27-comm-toolbar,#v27CommMax{display:none!important}
.comm-hd .adm-x{display:none!important} /* v34 ctrl btn?쇰줈 ?泥?*/
</style>

(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const say=(m,i='??,d=2200)=>{try{(window.toast||window.say||console.log)(m,i,d)}catch(e){console.log(i,m)}};

/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?? * ??援щℓ吏??而ㅻ??덊떚 ?대쫫/?ㅻ뜑 ?듭씪
 * ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??*/
const COMM_TITLE='援щℓ吏??而ㅻ??덊떚';
const COMM_ICON='?뮕';

function patchCommHeader(){
  const hd=$('.comm-hd'); if(!hd) return;
  // 湲곗〈 踰꾪듉 諛??뚰듃 ?쒓굅
  $$('.v30-modal-tools,.v27-comm-toolbar,#v27CommMax,#v28CommHint').forEach(e=>e.remove());

  // h2 ?띿뒪???듭씪
  const h2=hd.querySelector('h2');
  if(h2) h2.innerHTML=`${COMM_ICON} ${COMM_TITLE}`;

  // ??而⑦듃濡?踰꾪듉???놁쑝硫??쎌엯
  if(!hd.querySelector('.v34-hd-tools')){
    const tools=document.createElement('div');
    tools.className='v34-hd-tools';
    tools.innerHTML=`
      <button class="v34-ctrl-btn" id="v34MaxBtn" title="李??ш쾶/?묎쾶" onclick="v34ToggleMax()">??/button>
      <button class="v34-ctrl-btn close" title="?リ린" onclick="closeComm()">??/button>
    `;
    hd.appendChild(tools);
  }

  // 醫뚯륫 ?ъ씠?쒕컮 ??댄? ?듭씪
  $$('.v29-comm-left .v29-comm-title').forEach(el=>{
    if(/援щℓ|而ㅻ??덊떚/.test(el.textContent)) el.innerHTML=`${COMM_ICON} 援щℓ吏??br>而ㅻ??덊떚`;
  });
}

/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?? * ??而ㅻ??덊떚 李??ш린 議곗젅 (??援ы쁽)
 * ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??*/
let isMaximized=false;
window.v34ToggleMax=function(){
  const ov=$('.comm-ov'); if(!ov) return;
  isMaximized=!isMaximized;
  ov.classList.toggle('v34-max',isMaximized);
  // 湲곗〈 class ?뺣━
  ov.classList.remove('v30-full','v27-full');
  const box=$('.comm-box'); if(box){
    box.classList.remove('v30-full','v27-full','v29-wide','v27-wide');
  }
  const btn=$('#v34MaxBtn');
  if(btn){
    btn.textContent=isMaximized?'??:'??;
    btn.title=isMaximized?'李??묎쾶':'李??ш쾶';
    btn.classList.toggle('maximized',isMaximized);
  }
};
// 湲곗〈 toggleCommFullV27 ?щ씪?고똿
window.toggleCommFullV27=window.v34ToggleMax;

/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?? * ???낅Т FLOW ?뚰겕?뚮줈??諛곕꼫 (p-req ?곷떒)
 * ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??*/
const FLOW_STEPS=[
  {id:'upload', icon:'?뱚', title:'?뚯씪 ?낅줈??, sub:'? ?대떦??, cnt:7, unit:'嫄??낅줈?쒕맖', cls:'done'},
  {id:'team',   icon:'??, title:'? ?뱀씤',     sub:'? Admin',    cnt:5, unit:'嫄??湲?以?, cls:'pending'},
  {id:'sys',    icon:'?썳截?, title:'?쒖뒪???뱀씤', sub:'?쒖뒪??Admin',cnt:2, unit:'嫄?寃??以?, cls:'active'},
  {id:'ai',     icon:'?쭬', title:'AI DB 諛섏쁺',  sub:'?먮룞 ?꾨쿋??, cnt:14,unit:'嫄?諛섏쁺?꾨즺', cls:'done'},
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

/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?? * ??? Admin ?⑤꼸 ?ъ꽕怨?(p-req)
 * ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??*/
const TEAMS_DATA=[
  {
    name:'援щℓ?꾨왂?', admin:'?댁???梨낆엫',
    files:[
      {name:'?댁쇅踰뺤씤 援щℓ ?뱀씤 ?꾨줈?몄뒪.docx', type:'docx', uploader:'?댁???, date:'02.07', step:'team-wait', reason:'?댁쇅 援щℓ嫄??뱀씤 寃??},
      {name:'議곕떖泥?臾쇳뭹援щℓ怨꾩빟 ?뱀닔議곌굔.pdf', type:'pdf', uploader:'諛뺤꽦誘?, date:'02.08', step:'team-wait', reason:'怨듦났?낆같 鍮꾧탳 李몄“'},
    ]
  },
  {
    name:'諛섎룄泥닿뎄留ㅽ?', admin:'理쒖쑀吏?留ㅻ땲?',
    files:[
      {name:'諛섎룄泥??섏텧洹쒖젣 援??蹂??꾪솴.xlsx', type:'xlsx', uploader:'理쒖쑀吏?, date:'02.08', step:'team-ok', reason:'?섏텧 由ъ뒪???먭?'},
      {name:'TSMC ?⑷린 愿由?媛?대뱶 v2.pdf', type:'pdf', uploader:'理쒖쑀吏?, date:'02.06', step:'sys-wait', reason:'諛섎룄泥??⑷린 ???},
    ]
  },
  {
    name:'援щℓ?덉쭏湲고쉷?', admin:'?뺥쁽??梨낆엫',
    files:[
      {name:'怨듭젙嫄곕옒踰??섎룄湲?愿??議고빆.pdf', type:'pdf', uploader:'?뺥쁽??, date:'02.07', step:'ai-done', reason:'洹쒖젙 ?낅뜲?댄듃'},
      {name:'5?ㅽ? ?됯? 湲곗? 媛쒖젙??2025.pdf', type:'pdf', uploader:'?뺥쁽??, date:'02.09', step:'team-ok', reason:'?됯? 湲곗? 理쒖떊??},
    ]
  },
  {
    name:'PT?쒖뼱遺?덇뎄留ㅽ?', admin:'?쒕룄??留ㅻ땲?',
    files:[
      {name:'?꾨룞??遺???④? 踰ㅼ튂留덊겕.xlsx', type:'xlsx', uploader:'?쒕룄??, date:'02.08', step:'team-wait', reason:'PT 遺???④? 鍮꾧탳'},
    ]
  },
  {
    name:'?쇰컲?먯옱援щℓ?', admin:'?λ???梨낆엫',
    files:[
      {name:'MRO 移댄깉濡쒓렇 2026 媛쒖젙??pdf', type:'pdf', uploader:'?λ???, date:'02.05', step:'sys-ok', reason:'MRO ?덈ぉ ?낅뜲?댄듃'},
    ]
  }
];

const STEP_LABELS={
  'upload':   {label:'?낅줈?쒕맖',   cls:'upload',    action:['? ?뱀씤 ?붿껌']},
  'team-wait':{label:'? 寃??以?, cls:'team-wait', action:['?뱀씤','蹂댁셿 ?붿껌']},
  'team-ok':  {label:'? ?뱀씤 ?꾨즺',cls:'team-ok',  action:['?쒖뒪???꾩넚']},
  'sys-wait': {label:'?쒖뒪??寃??以?,cls:'sys-wait',action:[]},
  'sys-ok':   {label:'?쒖뒪???뱀씤',cls:'sys-ok',    action:['AI 諛섏쁺 泥섎━']},
  'ai-done':  {label:'AI 諛섏쁺?꾨즺',cls:'ai-done',   action:[]},
};

function fileIcon(type){
  const m={pdf:'?뱞',xlsx:'?뱤',docx:'?뱲',pptx:'?뱫',hwp:'?뱷'};
  return `<div class="v34-file-ic ${type}">${m[type]||'?뱞'}</div>`;
}

function stepBadge(step){
  const s=STEP_LABELS[step]||{label:step,cls:'upload'};
  return `<span class="v34-step-badge ${s.cls}">${s.label}</span>`;
}

function stepActions(step, teamIdx, fileIdx){
  const s=STEP_LABELS[step]; if(!s||!s.action.length) return '';
  return s.action.map(a=>{
    let cls='',onclick='';
    if(a==='?뱀씤'){cls='ok';onclick=`v34TeamApprove(${teamIdx},${fileIdx},this)`}
    else if(a==='蹂댁셿 ?붿껌'){cls='no';onclick=`v34TeamReject(${teamIdx},${fileIdx},this)`}
    else if(a==='?쒖뒪???꾩넚'){cls='send';onclick=`v34SendToSystem(${teamIdx},${fileIdx},this)`}
    else if(a==='? ?뱀씤 ?붿껌'){cls='';onclick=`say('? 愿由ъ옄?먭쾶 寃???붿껌??諛쒖넚?덉뒿?덈떎.','?뱾')`}
    else if(a==='AI 諛섏쁺 泥섎━'){cls='ok';onclick=`say('AI ?꾨쿋???湲곗뿴??異붽??덉뒿?덈떎.','?쭬')`}
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
      <!-- ? ?ㅻ퉬寃뚯씠??-->
      <div class="v34-team-nav">
        <div class="v34-team-nav-title">? ?좏깮</div>
        ${TEAMS_DATA.map((team,i)=>{
          const tw=team.files.filter(f=>f.step==='team-wait').length;
          const ts=team.files.filter(f=>['sys-wait','sys-ok','ai-done'].includes(f.step)).length;
          let cntHtml='';
          if(tw>0) cntHtml=`<span class="v34-tb-cnt pending">${tw}</span>`;
          else if(ts>0) cntHtml=`<span class="v34-tb-cnt sent">${ts}??/span>`;
          else cntHtml=`<span class="v34-tb-cnt done">??/span>`;
          return `<button class="v34-team-btn ${i===activeTeamIdx?'on':''}" onclick="v34SelectTeam(${i})">
            <span>?뱛 ${esc(team.name)}</span>${cntHtml}
          </button>`;
        }).join('')}
        <div style="border-top:1px solid var(--border-1);margin:10px 0 8px"></div>
        <div class="v34-team-nav-title">?꾩껜 ?꾪솴</div>
        <div style="padding:6px 10px;font-size:11px;color:var(--text-3);line-height:1.8">
          <div>?뱚 珥??뚯씪 ${TEAMS_DATA.reduce((a,t)=>a+t.files.length,0)}嫄?/div>
          <div style="color:var(--a)">?븧 ? 寃???湲?${TEAMS_DATA.reduce((a,t)=>a+t.files.filter(f=>f.step==='team-wait').length,0)}嫄?/div>
          <div style="color:var(--v)">?썳截??쒖뒪??寃??${TEAMS_DATA.reduce((a,t)=>a+t.files.filter(f=>f.step==='sys-wait').length,0)}嫄?/div>
          <div style="color:var(--g)">??諛섏쁺?꾨즺 ${TEAMS_DATA.reduce((a,t)=>a+t.files.filter(f=>f.step==='ai-done').length,0)}嫄?/div>
        </div>
      </div>

      <!-- ?뚯씪 紐⑸줉 -->
      <div class="v34-req-main">
        <div class="v34-req-header">
          <div>
            <div class="v34-req-title">?뱛 ${esc(t.name)}</div>
            <div style="font-size:11px;color:var(--text-3);margin-top:2px">? Admin: ${esc(t.admin)} 쨌 珥?${t.files.length}嫄?/div>
          </div>
          <div class="v34-req-actions">
            <button class="v34-req-action-btn secondary" onclick="v34UploadForTeam(${activeTeamIdx})">?뱨 ?뚯씪 異붽?</button>
            ${pendingCount>0?`<button class="v34-req-action-btn primary" onclick="v34BatchApproveTeam(${activeTeamIdx})">???꾩껜 ?뱀씤 (${pendingCount}嫄?</button>`:''}
            ${sentCount>0?`<div class="v34-sent-check">?썳截??쒖뒪?쒖뿉 ${sentCount}嫄??꾩넚??/div>`:''}
          </div>
        </div>

        <!-- ?낅줈???곸뿭 -->
        <div class="v34-upload-zone" id="v34UploadZone${activeTeamIdx}" onclick="v34UploadForTeam(${activeTeamIdx})"
          ondragover="this.classList.add('drag');event.preventDefault()"
          ondragleave="this.classList.remove('drag')"
          ondrop="this.classList.remove('drag');event.preventDefault();v34UploadForTeam(${activeTeamIdx})">
          <div class="v34-upload-ic">?곻툘</div>
          <div class="v34-upload-title">?뚯씪???쒕옒洹명븯嫄곕굹 ?대┃?섏뿬 ?낅줈??/div>
          <div class="v34-upload-sub">PDF, DOCX, XLSX, HWP 쨌 理쒕? 50MB 쨌 ?낅줈????? Admin 寃???붿껌</div>
        </div>

        <div class="v34-section-label">?뚯씪 紐⑸줉 ???④퀎蹂??꾪솴</div>

        ${t.files.map((f,i)=>`
          <div class="v34-file-card" id="v34fc-${activeTeamIdx}-${i}" data-step="${f.step}">
            ${fileIcon(f.type)}
            <div class="v34-file-info">
              <div class="v34-file-name" title="${esc(f.name)}">${esc(f.name)}</div>
              <div class="v34-file-meta">
                <span>?뫀 ${esc(f.uploader)}</span>
                <span>?뱟 ${f.date}</span>
                <span>?뱷 ${esc(f.reason)}</span>
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

        ${t.files.length===0?`<div class="v34-empty"><div class="v34-empty-ic">?뱚</div><div>?꾩쭅 ?낅줈?쒕맂 ?뚯씪???놁뒿?덈떎.<br>?꾩쓽 ?낅줈???곸뿭?먯꽌 ?뚯씪??異붽??섏꽭??</div></div>`:''}

        <div style="margin-top:16px;padding:12px 16px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;font-size:11px;color:var(--text-3);line-height:1.7">
          <b style="color:var(--text-2)">?낅Т ?먮쫫 ?덈궡</b><br>
          ?뚯씪 ?낅줈????<span style="color:var(--a);font-weight:700">? Admin ?뱀씤</span> ??<span style="color:var(--v);font-weight:700">?쒖뒪??Admin 理쒖쥌 ?뱀씤</span> ??<span style="color:var(--g);font-weight:700">AI 吏??DB ?먮룞 諛섏쁺</span><br>
          <span style="font-size:10px;color:var(--text-4)">* ? ?뱀씤 ??"?쒖뒪???꾩넚" 踰꾪듉?쇰줈 理쒖쥌 寃?좊? ?붿껌?⑸땲?? ?쒖뒪??Admin???대뜑 諛곗젙 ??AI ?꾨쿋?⑹쓣 ?쒖옉?⑸땲??</span>
        </div>
      </div>
    </div>
  `;
}

window.v34SelectTeam=function(idx){activeTeamIdx=idx;renderTeamAdmin(idx)};
window.v34TeamApprove=function(ti,fi,btn){
  TEAMS_DATA[ti].files[fi].step='team-ok';
  say('???뱀씤 泥섎━?덉뒿?덈떎. "?쒖뒪???꾩넚" 踰꾪듉?쇰줈 ?쒖뒪??Admin?먭쾶 ?꾩넚?섏꽭??','??,3000);
  renderTeamAdmin();
  const old=$('.atb.on')?.getAttribute('onclick');
  if(!old) updatePendingCount&&updatePendingCount();
};
window.v34TeamReject=function(ti,fi,btn){
  TEAMS_DATA[ti].files[fi].step='upload';
  say('蹂댁셿 ?붿껌???꾩넚?덉뒿?덈떎. ?낅줈?붿뿉寃??뚮┝??諛쒖넚?⑸땲??','??,2500);
  renderTeamAdmin();
};
window.v34SendToSystem=function(ti,fi,btn){
  TEAMS_DATA[ti].files[fi].step='sys-wait';
  say(`?썳截??쒖뒪??Admin?먭쾶 ?꾩넚?덉뒿?덈떎. 理쒖쥌 ?뱀씤 ??AI DB??諛섏쁺?⑸땲??`,'?썳截?,3000);
  renderTeamAdmin();
};
window.v34BatchApproveTeam=function(ti){
  TEAMS_DATA[ti].files.forEach(f=>{if(f.step==='team-wait')f.step='team-ok'});
  say('?좏깮 ? ?뚯씪???꾩껜 ?뱀씤?덉뒿?덈떎. ?쒖뒪???꾩넚 以鍮꾧? ?꾨즺?⑸땲??','??,2500);
  renderTeamAdmin();
};
window.v34UploadForTeam=function(ti){
  const nms=['援щℓ?꾨왂_蹂닿퀬??2026.pdf','?묐젰???됯?湲곗?_v3.xlsx','?섏쓽怨꾩빟_媛?대뱶_理쒖쥌.docx','?덉쭏寃??泥댄겕由ъ뒪??pdf','?낆같?댁쁺_媛쒖젙??pdf'];
  const types=['pdf','xlsx','docx','pdf','pdf'];
  const idx=Math.floor(Math.random()*nms.length);
  TEAMS_DATA[ti].files.push({
    name:nms[idx], type:types[idx], uploader:'?꾨줈?먯뼱?덉뼱濡?,
    date:'諛⑷툑', step:'team-wait', reason:'?좉퇋 ?낅줈??
  });
  say(`${nms[idx]} ?낅줈???꾨즺. ? Admin 寃???湲?以묒엯?덈떎.`,'?곻툘',2500);
  renderTeamAdmin();
};

/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?? * ???쒖뒪??Admin 理쒖쥌 ?뱀씤 ?⑤꼸 (p-verify 援먯껜)
 * ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??*/
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
        <div style="font-size:15px;font-weight:700;color:var(--text-1)">?썳截??쒖뒪??Admin 理쒖쥌 ?뱀씤</div>
        <div style="font-size:11px;color:var(--text-3);margin-top:2px">? ?뱀씤 ?꾨즺 ?뚯씪??理쒖쥌 寃????AI 吏??DB???깆옱?⑸땲??/div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="v34-req-action-btn secondary">?봽 紐⑸줉 ?덈줈怨좎묠</button>
        <button class="v34-req-action-btn primary" onclick="v34SystemBatchApprove()">?썳截??꾩껜 理쒖쥌 ?뱀씤</button>
      </div>
    </div>

    <div class="v34-section-label">?쒖뒪??寃???湲??뚯씪 (${sysFiles.length}嫄?</div>

    ${sysFiles.length===0?`<div class="v34-empty"><div class="v34-empty-ic">?럦</div><div>?꾩옱 寃???湲??뚯씪???놁뒿?덈떎.<br>? Admin???뱀씤 ???꾩넚?섎㈃ ?ш린???쒖떆?⑸땲??</div></div>`:
    sysFiles.map((f,i)=>`
      <div class="v34-file-card" id="v34sf-${i}" data-step="${f.step}">
        ${fileIcon(f.type)}
        <div class="v34-file-info">
          <div class="v34-file-name">${esc(f.name)}</div>
          <div class="v34-file-meta">
            <span>?뱛 ${esc(f.teamName)}</span>
            <span>?뫀 ${esc(f.uploader)}</span>
            <span>?뱟 ${f.date}</span>
            <span>?뱷 ${esc(f.reason)}</span>
          </div>
        </div>
        <div class="v34-file-status">
          ${stepBadge(f.step)}
          <div class="v34-file-action">
            ${f.step==='sys-wait'?`
              <button class="v34-inline-btn" style="font-size:10px;color:var(--text-3)" onclick="v34SysPreview(${i})">?뱥 誘몃━蹂닿린</button>
              <button class="v34-inline-btn" style="font-size:10px" onclick="v34SysRejectItem(${i})">蹂댁셿 ?붿껌</button>
              <button class="v34-inline-btn ok" onclick="v34SysApproveItem(${i})">理쒖쥌 ?뱀씤 ?묨I</button>
            `:`<span style="font-size:10px;color:var(--g)">???뱀씤?꾨즺 쨌 AI 諛섏쁺 以?/span>`}
          </div>
        </div>
      </div>
    `).join('')}

    <div style="margin-top:16px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;padding:12px 16px">
      <div style="font-size:11px;font-weight:700;color:var(--text-2);margin-bottom:6px">?쭬 而ㅻ??덊떚 AI 吏???꾨낫 ??蹂꾨룄 寃利???/div>
      <div style="font-size:11px;color:var(--text-3);line-height:1.7">梨꾪깮 + 異붿쿇 10媛??댁긽??而ㅻ??덊떚 ?듬????먮룞?쇰줈 ?щ씪?듬땲?? ?뱀씤 ??RAG DB??諛섏쁺?섎ŉ ?묒꽦?먯뿉寃?+100pt媛 吏湲됰맗?덈떎.</div>
      <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">
        <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:8px;padding:10px;flex:1;min-width:220px">
          <div style="font-size:11px;font-weight:700;color:var(--text-1);margin-bottom:4px">Q. ?꾨젰?곸엯李곗뿉??1?뚯감 ?좎같 ??泥섎━ ?덉감</div>
          <div style="font-size:10px;color:var(--text-3)">?꾨줈?먯뼱留덉뒪??쨌 異붿쿇 47 쨌 梨꾪깮??쨌 ?뺥솗?? ?믪쓬</div>
          <div style="display:flex;gap:6px;margin-top:8px"><button class="v34-inline-btn ok" onclick="say('AI ?숈뒿 DB??諛섏쁺?덉뒿?덈떎.','?쭬',2500);this.closest('[style*=background]').style.opacity='.4'">AI ?깆옱 ?뱀씤</button><button class="v34-inline-btn no" onclick="say('蹂댁셿 ?붿껌???꾩넚?덉뒿?덈떎.','??)">蹂댁셿 ?붿껌</button></div>
        </div>
        <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:8px;padding:10px;flex:1;min-width:220px">
          <div style="font-size:11px;font-weight:700;color:var(--text-1);margin-bottom:4px">Q. VAATZ ?댁쇅 諛쒖＜ ?섏쑉 湲곗???/div>
          <div style="font-size:10px;color:var(--text-3)">VAATZ?ъ씤 쨌 異붿쿇 22 쨌 梨꾪깮??쨌 ?뺥솗?? ?믪쓬</div>
          <div style="display:flex;gap:6px;margin-top:8px"><button class="v34-inline-btn ok" onclick="say('AI ?숈뒿 DB??諛섏쁺?덉뒿?덈떎.','?쭬',2500);this.closest('[style*=background]').style.opacity='.4'">AI ?깆옱 ?뱀씤</button><button class="v34-inline-btn no" onclick="say('蹂댁셿 ?붿껌???꾩넚?덉뒿?덈떎.','??)">蹂댁셿 ?붿껌</button></div>
        </div>
      </div>
    </div>
  `;
}

window.v34SystemBatchApprove=function(){
  TEAMS_DATA.forEach(t=>t.files.forEach(f=>{if(f.step==='sys-wait')f.step='ai-done'}));
  say('?꾩껜 理쒖쥌 ?뱀씤 ?꾨즺. AI ?꾨쿋???湲곗뿴??異붽??덉뒿?덈떎.','?쭬',3000);
  renderSystemAdminVerify();
};
window.v34SysApproveItem=function(i){
  const sysFiles=TEAMS_DATA.flatMap(t=>t.files.filter(f=>f.step==='sys-wait'||f.step==='sys-ok'));
  if(sysFiles[i]){sysFiles[i].step='ai-done';}
  say('理쒖쥌 ?뱀씤 ?꾨즺. AI ?꾨쿋?⑹쓣 ?쒖옉?⑸땲??','?쭬',2500);
  renderSystemAdminVerify();
};
window.v34SysRejectItem=function(i){
  const sysFiles=TEAMS_DATA.flatMap(t=>t.files.filter(f=>f.step==='sys-wait'));
  if(sysFiles[i]){sysFiles[i].step='upload';}
  say('蹂댁셿 ?붿껌??諛쒖넚?덉뒿?덈떎. ? Admin?먭쾶 ?뚮┝???꾨떖?⑸땲??','??,2500);
  renderSystemAdminVerify();
};
window.v34SysPreview=function(i){say('臾몄꽌 誘몃━蹂닿린???듬? 洹쇨굅 ?⑤꼸?먯꽌 ?뺤씤 媛?ν빀?덈떎.','?뱥',2000)};

/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?? * Boot
 * ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??*/
function boot(){
  // 而ㅻ??덊떚 ?ㅽ뵂 ???ㅻ뜑 ?⑥튂
  const origOpenComm=window.openComm;
  if(origOpenComm&&!window.__v34CommWrapped){
    window.__v34CommWrapped=true;
    window.openComm=function(tab){
      origOpenComm.apply(this,arguments);
      setTimeout(()=>{patchCommHeader();if(isMaximized){$('.comm-ov')?.classList.add('v34-max');}},50);
    };
  }
  // Admin ???ㅽ뵂 ???⑥튂
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
  // 二쇨린???대쫫 ?⑥튂 (湲곗〈 v29/v31????뼱?곗? 紐삵븯?꾨줉)
  setInterval(()=>{
    const hd=$('.comm-hd');
    if(hd){
      const h2=hd.querySelector('h2');
      if(h2&&!h2.textContent.includes(COMM_TITLE)) h2.innerHTML=`${COMM_ICON} ${COMM_TITLE}`;
      if(!hd.querySelector('.v34-hd-tools')) patchCommHeader();
    }
  },1500);
  // 珥덇린 Admin ?⑤꼸 ?뚮뜑
  setTimeout(()=>{renderTeamAdmin();renderSystemAdminVerify();},200);
}

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
else boot();

})();

<!-- ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??     v35 FIX ??5 improvements: Emoji char 쨌 Max buttons 쨌 4-level tree
               Security combo 쨌 AI chat polish
     ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??-->
<style id="v35-fix">
/* ?먥븧?먥븧?먥븧??1. EMOJI CHARACTER ?먥븧?먥븧?먥븧??*/
.v35-emoji-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:38px;z-index:10;pointer-events:none;line-height:1}
.companion-main .buddy-3d .v35-emoji-overlay{font-size:42px}
.mp-character-hero .buddy-3d .v35-emoji-overlay{font-size:58px}
.v23-char-scene .buddy-3d .v35-emoji-overlay{font-size:68px}
.buddy-body,.buddy-face,.buddy-hair,.buddy-eye,.buddy-smile,.buddy-arm,.buddy-wheel{display:none!important}
.buddy-badge{z-index:15!important}
.buddy-3d{overflow:visible!important}
.companion-main>.buddy-3d{background:linear-gradient(135deg,var(--accent-dim),var(--bg-2));border:1px solid var(--accent-bd);border-radius:50%}

/* ?먥븧?먥븧?먥븧??2. MODAL MAXIMIZE ?먥븧?먥븧?먥븧??*/
.large-modal.full .large-box{width:100vw!important;height:100vh!important;max-height:100vh!important;border-radius:0!important}
.v35-max-btn{width:28px;height:28px;border-radius:7px;border:1px solid var(--border-1);background:var(--bg-3);color:var(--text-3);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;transition:.15s;flex-shrink:0}
.v35-max-btn:hover{background:var(--bg-4);color:var(--text-1)}

/* ?먥븧?먥븧?먥븧??3. 4-LEVEL TREE EXPLORER ?먥븧?먥븧?먥븧??*/
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

/* ?먥븧?먥븧?먥븧??4. SECURITY COMBO ?먥븧?먥븧?먥븧??*/
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

/* ?먥븧?먥븧?먥븧??5. AI CHAT POLISH ?먥븧?먥븧?먥븧??*/
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
.rag-step:not(:last-child)::after{content:'??;margin:0 6px;color:var(--text-4);font-size:9.5px}
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

/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?? * 1. EMOJI CHARACTER SYSTEM
 * ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??*/
window._v35Emoji = '?슅';

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
  if (window.toast) window.toast((btn && btn.title ? btn.title : emoji) + ' ?좏깮!', '??, 1200);
};

/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?? * 2. LARGE MODAL MAXIMIZE BUTTONS
 * ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??*/
function addV35MaxBtn(hd, modal) {
  if (!hd || !modal) return;
  if (hd.querySelector('.v35-max-btn,.v30-max-btn,.v27-max-btn')) return;
  const btn = document.createElement('button');
  btn.className = 'v35-max-btn';
  btn.title = '李??ш쾶/?묎쾶';
  btn.innerHTML = '??;
  btn.onclick = function() {
    const isMax = modal.classList.toggle('full');
    btn.innerHTML = isMax ? '?? : '??;
    btn.title = isMax ? '李??묎쾶' : '李??ш쾶';
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

/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?? * 3. 4-LEVEL TREE EXPLORER
 * ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??*/
const V35_TREE = [
  {name:'援щℓ?꾨왂?',icon:'?룫',admin:'?댁???梨낆엫',folders:[
    {name:'援щℓ?낅Т洹쒖젙',subs:[
      {name:'?낆같쨌怨꾩빟',files:[
        {name:'?낆같?댁쁺 ?낅Т?쒖?_001.pdf',type:'pdf',step:'ai-done',up:'?댁???,dt:'02.07'},
        {name:'?섏쓽怨꾩빟 ?댁쁺吏移?002.pdf',type:'pdf',step:'sys-wait',up:'諛뺤꽦誘?,dt:'02.08'},
        {name:'怨꾩빟愿由?洹쒖젙_003.docx',type:'docx',step:'team-ok',up:'?댁???,dt:'02.09'}
      ]},
      {name:'?뱀닔쨌?댁쇅',files:[
        {name:'?댁쇅踰뺤씤 援щℓ ?뱀씤 ?꾨줈?몄뒪.docx',type:'docx',step:'team-wait',up:'?댁???,dt:'02.07'},
        {name:'議곕떖泥?臾쇳뭹援щℓ怨꾩빟 ?뱀닔議곌굔.pdf',type:'pdf',step:'team-wait',up:'諛뺤꽦誘?,dt:'02.08'}
      ]}
    ]},
    {name:'?꾨왂 由ы룷??,subs:[
      {name:'洹쒖젣 ?숉뼢',files:[
        {name:'諛섎룄泥??섏텧洹쒖젣 援??蹂??꾪솴.docx',type:'docx',step:'ai-done',up:'?댁???,dt:'01.28'}
      ]}
    ]}
  ]},
  {name:'湲곗닠援щℓ?',icon:'?뵩',admin:'源誘쇱븘 留ㅻ땲?',folders:[
    {name:'?묐젰??愿由?,subs:[
      {name:'?덉쭏 湲곗?',files:[
        {name:'?묐젰???덉쭏 5?ㅽ? 湲곗?_001.xlsx',type:'xlsx',step:'ai-done',up:'源誘쇱븘',dt:'02.01'},
        {name:'?낆껜 ?됯? ?곗씠?곗뀑_002.csv',type:'csv',step:'sys-ok',up:'理쒖쥌??,dt:'02.05'}
      ]},
      {name:'?⑷린쨌寃??,files:[
        {name:'?⑷린 由ъ뒪?????留ㅻ돱??docx',type:'docx',step:'team-ok',up:'源誘쇱븘',dt:'02.10'},
        {name:'寃?섑솗???낅Т?쒖?.pdf',type:'pdf',step:'team-wait',up:'?뺥쁽??,dt:'02.11'}
      ]}
    ]},
    {name:'?꾨룞??遺??,subs:[
      {name:'?④?쨌?먭?',files:[
        {name:'?꾨룞??遺???④? 踰ㅼ튂留덊겕.xlsx',type:'xlsx',step:'sys-wait',up:'?댁꽌??,dt:'02.03'}
      ]}
    ]}
  ]},
  {name:'湲濡쒕쾶援щℓ?',icon:'?뙋',admin:'諛뺤???梨낆엫',folders:[
    {name:'湲濡쒕쾶 媛?대뱶',subs:[
      {name:'VAATZ ?댁쁺',files:[
        {name:'VAATZ 諛쒖＜ ?앹꽦 留ㅻ돱??001.pdf',type:'pdf',step:'ai-done',up:'諛뺤???,dt:'01.20'},
        {name:'援щℓ?⑹뼱 ?쒖??뺤쓽吏?docx',type:'docx',step:'ai-done',up:'?꾩???,dt:'01.25'}
      ]}
    ]}
  ]},
  {name:'?덉쭏?먯옱?',icon:'狩?,admin:'?뺤닔??梨낆엫留ㅻ땲?',folders:[
    {name:'?덉쭏 臾몄꽌',subs:[
      {name:'湲곗?쨌?쒖?',files:[
        {name:'?묐젰???덉쭏 5?ㅽ? 湲곗?_Q001.xlsx',type:'xlsx',step:'team-ok',up:'?뺤닔??,dt:'02.06'},
        {name:'?먭? ?곗젙 湲곗???xlsx',type:'xlsx',step:'ai-done',up:'?댁???,dt:'01.30'}
      ]}
    ]}
  ]},
  {name:'?쇰컲?먯옱援щℓ?',icon:'?벀',admin:'?댁냼??留ㅻ땲?',folders:[
    {name:'MRO 媛?대뱶',subs:[
      {name:'援щℓ ?덉감',files:[
        {name:'?쇰컲?먯옱 MRO 援щℓ 媛?대뱶.pdf',type:'pdf',step:'sys-wait',up:'?댁냼??,dt:'02.04'},
        {name:'?섏쓽怨꾩빟 ?댁쁺吏移?MRO.pdf',type:'pdf',step:'team-wait',up:'?좉꼍誘?,dt:'02.12'}
      ]}
    ]}
  ]},
  {name:'?먭?愿由ы?',icon:'?뮥',admin:'?ㅻ???梨낆엫留ㅻ땲?',folders:[
    {name:'?먭? DB',subs:[
      {name:'?④?쨌?섏쑉',files:[
        {name:'?먭? ?곗젙 湲곗???2026.xlsx',type:'xlsx',step:'team-ok',up:'?ㅻ???,dt:'02.09'},
        {name:'?꾨룞??遺???④? 踰ㅼ튂留덊겕.xlsx',type:'xlsx',step:'team-wait',up:'媛뺥쁽洹?,dt:'02.13'}
      ]}
    ]}
  ]}
];

const STEP_ACT = {'team-wait':1,'team-ok':2,'sys-wait':2,'sys-ok':3,'ai-done':4};
const STEP_LBL = ['?낅줈??,'?寃??,'?쒖뒪??,'AI諛섏쁺'];
const FTYPE_IC = {pdf:'?뱞',docx:'?뱷',xlsx:'?뱤',csv:'?뱥',ppt:'?뱫',hwp:'?뱜'};

function mkStepFlow(step) {
  const active = STEP_ACT[step] !== undefined ? STEP_ACT[step] : 0;
  return '<span class="v35-flow">' + STEP_LBL.map(function(lbl, i) {
    var cls = active >= 4 ? 'done' : (i < active ? 'done' : (i === active ? 'active' : 'pend'));
    var ic = cls === 'done' ? '?? : (cls === 'active' ? '?? : '??);
    return '<span class="v35-fs ' + cls + '">' + ic + lbl + '</span>' + (i < 3 ? '<span class="v35-fa">??/span>' : '');
  }).join('') + '</span>';
}

function mkFileActions(step, id) {
  if (step === 'team-wait') return '<button class="v35-act-btn p" onclick="v35Act(\'' + id + '\',\'team-ok\')">? ?뱀씤</button>';
  if (step === 'team-ok')   return '<button class="v35-act-btn p" onclick="v35Act(\'' + id + '\',\'sys-wait\')">?쒖뒪???꾩넚</button>';
  if (step === 'sys-wait')  return '<button class="v35-act-btn p" onclick="v35Act(\'' + id + '\',\'sys-ok\')">理쒖쥌 ?뱀씤</button>';
  if (step === 'sys-ok')    return '<button class="v35-act-btn p" onclick="v35Act(\'' + id + '\',\'ai-done\')">AI 諛섏쁺</button>';
  return '<span style="font-size:10px;color:var(--g)">???꾨즺</span>';
}

window.v35Act = function(id, newStep) {
  var parts = id.split('_');
  var ti = +parts[0], fi = +parts[1], si = +parts[2], ii = +parts[3];
  var file = V35_TREE[ti] && V35_TREE[ti].folders[fi] && V35_TREE[ti].folders[fi].subs[si] && V35_TREE[ti].folders[fi].subs[si].files[ii];
  if (!file) return;
  file.step = newStep;
  v35RenderTree(window._v35TeamIdx || 0);
  var msgs = {'team-ok':'? ?뱀씤 ?꾨즺','sys-wait':'?쒖뒪??Admin???꾩넚??,'sys-ok':'理쒖쥌 ?뱀씤 ?꾨즺','ai-done':'AI DB??諛섏쁺?먯뒿?덈떎'};
  if (window.say) window.say(msgs[newStep] || '泥섎━?먯뒿?덈떎', '??, 2000);
  else if (window.toast) window.toast(msgs[newStep] || '泥섎━?먯뒿?덈떎', '??, 2000);
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
    var badge = pending > 0 ? '<span class="v35-tn-badge">' + pending + ' ?湲?/span>' : '<span class="v35-tn-badge" style="background:var(--bg-3);color:var(--text-3)">' + total + '</span>';
    h += '<div class="v35-tn' + (isOpen ? ' open' : '') + '" id="v35n_' + fk + '">' +
      '<div class="v35-tn-row" onclick="v35Toggle(\'' + fk + '\')">' +
        '<span class="v35-tn-arr">??/span><span class="v35-tn-ic">?뱛</span>' +
        '<span class="v35-tn-label">' + folder.name + '</span>' + badge +
      '</div><div class="v35-tn-children">';
    folder.subs.forEach(function(sub, si) {
      var sk = ti + '_' + fi + '_' + si;
      var isSubOpen = window._v35Open[sk] !== undefined ? window._v35Open[sk] : (fi === 0 && si === 0);
      h += '<div class="v35-tn' + (isSubOpen ? ' open' : '') + '" id="v35n_' + sk + '">' +
        '<div class="v35-tn-row" onclick="v35Toggle(\'' + sk + '\')">' +
          '<span class="v35-tn-arr">??/span><span class="v35-tn-ic">?뱚</span>' +
          '<span class="v35-tn-label">' + sub.name + '</span>' +
          '<span class="v35-tn-badge" style="background:var(--bg-3);color:var(--text-3)">' + sub.files.length + '</span>' +
        '</div><div class="v35-tn-children">';
      sub.files.forEach(function(file, ii) {
        var fid = ti + '_' + fi + '_' + si + '_' + ii;
        h += '<div class="v35-file-row">' +
          '<span style="width:14px;text-align:center;flex-shrink:0;font-size:12px">' + (FTYPE_IC[file.type] || '?뱞') + '</span>' +
          '<span class="v35-file-name" title="' + file.name + '">' + file.name + '</span>' +
          mkStepFlow(file.step) +
          '<div class="v35-fa-act">' + mkFileActions(file.step, fid) + '</div>' +
        '</div>';
      });
      h += '<div class="v35-upload-hint" onclick="if(window.say)window.say(\'?뚯씪 ?낅줈???ㅼ씠?쇰줈洹멸? ?쒖떆?⑸땲??\',\'?뱚\',1800)">竊??뚯씪 ?낅줈??/div>';
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
  var msg = cnt + '嫄?? ?뱀씤 ?꾨즺. ?쒖뒪???꾩넚 踰꾪듉?쇰줈 ?ㅼ쓬 ?④퀎瑜?吏꾪뻾?섏꽭??';
  if (window.say) window.say(msg, '??, 3000);
  else if (window.toast) window.toast(msg, '??, 3000);
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
        '<div style="font-size:11px;color:var(--text-3);margin-top:2px">Admin: ' + team.admin + ' 쨌 珥?' + total + '嫄? +
          (pending > 0 ? ' 쨌 <span style="color:var(--a)">' + pending + '嫄?? 寃???湲?/span>' : '') +
        '</div>' +
      '</div>' +
      '<div class="v34-req-actions">' +
        '<button class="v34-req-action-btn secondary" onclick="if(window.say)window.say(\'???대뜑 湲곕뒫? ?ㅼ젣 援ы쁽 ???곸슜?⑸땲??\',\'?뱛\',1800)">?뱛 ?대뜑 異붽?</button>' +
        (pending > 0 ? '<button class="v34-req-action-btn primary" onclick="v35BatchApprove(' + ti + ')">???꾩껜 ? ?뱀씤 (' + pending + '嫄?</button>' : '') +
      '</div>' +
    '</div>' +
    '<div class="v35-tree-wrap">' +
      '<div class="v35-tree-search">' +
        '<span style="font-size:12px;color:var(--text-4)">?뵇</span>' +
        '<input placeholder="?뚯씪紐?寃??.." oninput="v35Search(this.value)">' +
        '<span style="font-size:9.5px;color:var(--text-4);white-space:nowrap">?낅줈?????寃?????쒖뒪????AI諛섏쁺</span>' +
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

/* MutationObserver on #p-req ??re-inject tree after renderTeamAdmin runs */
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

/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?? * 4. SECURITY COMBO CONTROL
 * ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??*/
function buildSecCombo(curSec, uid) {
  var opts = ['由щ뜑 ?꾩슜', '?쇰컲 怨듦컻', '吏???ъ슜??];
  return '<div class="v35-sec-combo" data-sec="' + curSec + '">' +
    opts.map(function(opt) {
      var on = opt === curSec ? ' on' : '';
      return '<label class="v35-sco' + on + '" onclick="v35SecPick(this,\'' + opt + '\',\'' + uid + '\')">' +
        '<input type="radio" name="sec_' + uid + '" value="' + opt + '"' + (opt === curSec ? ' checked' : '') + '>' +
        '<span class="v35-radio"></span>' + opt + '</label>';
    }).join('') +
    '<div class="v35-upick" id="vup_' + uid + '" style="display:' + (curSec === '吏???ъ슜?? ? 'block' : 'none') + '">' +
      '<div class="v35-uprow">' +
        '<input class="v35-uinput" id="vupi_' + uid + '" placeholder="?щ쾲 ?먮뒗 ?대쫫">' +
        '<button class="v35-uadd" onclick="v35AddTag(\'' + uid + '\')">異붽?</button>' +
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
  if (pk) pk.style.display = val === '吏???ъ슜?? ? 'block' : 'none';
};

window.v35AddTag = function(uid) {
  var inp = document.getElementById('vupi_' + uid);
  var tags = document.getElementById('vupt_' + uid);
  if (!inp || !tags) return;
  var val = inp.value.trim();
  if (!val) return;
  var tag = document.createElement('span');
  tag.className = 'v35-utag';
  tag.innerHTML = val + '<button onclick="this.parentElement.remove()" title="?쒓굅">횞</button>';
  tags.appendChild(tag);
  inp.value = ''; inp.focus();
};

function upgradeSecSelects() {
  var panel = document.getElementById('p-final');
  if (!panel) return;
  var uid = 0;
  panel.querySelectorAll('.setting-box').forEach(function(box) {
    var lbl = box.querySelector('.setting-label');
    if (!lbl || lbl.textContent.indexOf('蹂댁븞') === -1) return;
    if (box.querySelector('.v35-sec-combo')) return;
    var sel = box.querySelector('select');
    var curSec = '由щ뜑 ?꾩슜';
    if (sel) {
      curSec = (sel.value || (sel.options[0] && sel.options[0].text) || '由щ뜑 ?꾩슜').trim();
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

/* ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?? * INIT
 * ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??*/
function v35Init() {
  /* 1. Emoji overlays */
  syncAllChar(window._v35Emoji);

  /* 2. Maximize buttons ??patch all large-modals immediately */
  patchLargeModals();

  /* 3. Tree ??initial inject after renderTeamAdmin runs */
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

</body>
</html>
}