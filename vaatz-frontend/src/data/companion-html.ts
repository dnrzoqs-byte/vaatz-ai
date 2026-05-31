export const companionHtml = `<div class="float-char" id="floatChar">
<div class="float-char-body" id="floatCharBody"><svg class="fc-svg" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="skinG" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#FFE8CC"/><stop offset="60%" stop-color="#FFCC99"/><stop offset="100%" stop-color="#F0A870"/></radialGradient><radialGradient id="hairG" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#5C3D1E"/><stop offset="100%" stop-color="#1A0A00"/></radialGradient><linearGradient id="bodyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6BB3FF"/><stop offset="50%" stop-color="#4A8EF0"/><stop offset="100%" stop-color="#2060C8"/></linearGradient><radialGradient id="eyeG" cx="35%" cy="35%" r="50%"><stop offset="0%" stop-color="#4A7FD4"/><stop offset="100%" stop-color="#1A3A80"/></radialGradient></defs><!-- 그림자 --><ellipse cx="40" cy="98" rx="18" ry="3" fill="rgba(0,0,0,0.15)"/><!-- 몸통 --><rect x="22" y="60" width="36" height="32" rx="10" fill="url(#bodyG)"/><rect x="22" y="60" width="36" height="8" rx="5" fill="rgba(255,255,255,0.15)"/><!-- VAATZ 배지 --><rect x="30" y="67" width="20" height="10" rx="3" fill="rgba(255,255,255,0.2)"/><text x="40" y="75.5" text-anchor="middle" font-size="5.5" font-weight="800" fill="white" font-family="sans-serif">VAATZ</text><!-- 팔 (왼) --><rect x="10" y="62" width="13" height="8" rx="4" fill="url(#bodyG)"/><ellipse cx="10" cy="66" rx="5" ry="5.5" fill="url(#skinG)"/><!-- 팔 (오) --><rect x="57" y="62" width="13" height="8" rx="4" fill="url(#bodyG)"/><ellipse cx="70" cy="66" rx="5" ry="5.5" fill="url(#skinG)"/><!-- 다리 --><rect x="26" y="89" width="11" height="10" rx="5" fill="#1A48A8"/><rect x="43" y="89" width="11" height="10" rx="5" fill="#1A48A8"/><!-- 신발 --><ellipse cx="31.5" cy="99" rx="7" ry="3.5" fill="#111"/><ellipse cx="48.5" cy="99" rx="7" ry="3.5" fill="#111"/><!-- 목 --><rect x="34" y="53" width="12" height="9" rx="4" fill="url(#skinG)"/><!-- 머리 --><ellipse cx="40" cy="40" rx="22" ry="20" fill="url(#skinG)"/><!-- 머리카락 --><path d="M18 36 Q18 14 40 13 Q62 14 62 36 Q58 20 40 19 Q22 20 18 36Z" fill="url(#hairG)"/><path d="M18 36 Q16 30 18 24 Q20 18 28 15 L26 22 Q20 26 18 36Z" fill="url(#hairG)"/><path d="M62 36 Q64 30 62 24 Q60 18 52 15 L54 22 Q60 26 62 36Z" fill="url(#hairG)"/><!-- 귀 --><ellipse cx="18" cy="40" rx="4" ry="5" fill="url(#skinG)"/><ellipse cx="62" cy="40" rx="4" ry="5" fill="url(#skinG)"/><!-- 눈 흰자 --><ellipse cx="30" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="50" cy="40" rx="7" ry="7.5" fill="white"/><!-- 눈동자 --><ellipse cx="30" cy="41" rx="5" ry="5.5" fill="url(#eyeG)"/><ellipse cx="50" cy="41" rx="5" ry="5.5" fill="url(#eyeG)"/><!-- 동공 --><circle cx="31" cy="40" r="2.5" fill="#0A1840"/><circle cx="51" cy="40" r="2.5" fill="#0A1840"/><!-- 눈 하이라이트 --><circle cx="32" cy="38.5" r="1.2" fill="white"/><circle cx="52" cy="38.5" r="1.2" fill="white"/><circle cx="30.5" cy="41" r="0.6" fill="rgba(255,255,255,0.7)"/>  <circle cx="50.5" cy="41" r="0.6" fill="rgba(255,255,255,0.7)"/><!-- 눈썹 --><path d="M24 33 Q30 30 36 33" stroke="#3A2010" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M44 33 Q50 30 56 33" stroke="#3A2010" stroke-width="1.8" fill="none" stroke-linecap="round"/><!-- 볼 홍조 --><ellipse cx="22" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><ellipse cx="58" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><!-- 코 --><path d="M38 46 Q40 48 42 46" stroke="rgba(180,100,70,0.5)" stroke-width="1.2" fill="none" stroke-linecap="round"/><!-- 미소 --><path d="M33 52 Q40 57 47 52" stroke="#C07040" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg></div>
<span class="float-char-lv">구매Pro</span>
<div class="float-char-bubble" id="charBubble">오늘도 화이팅! 💪<br>구매 지식 나누러 가요~</div>
<div class="float-char-menu" id="charMenu">
<button onclick="openComm('char');closeCharMenu()">🧸 캐릭터 꾸미기</button>
<button onclick="openComm('shop');closeCharMenu()">🛒 캐릭터 상점</button>
<button onclick="openComm('qa');closeCharMenu()">💡 Q&A 참여하기</button>
<button onclick="openComm('hof');closeCharMenu()">🏆 명예의 전당</button>
<button onclick="editBubbleMsg()">💬 말풍선 변경</button>
<button onclick="hideFloatChar()" style="color:var(--text-4);font-size:10px">숨기기</button>
</div>
</div>
<div class="float-show-btn" id="floatShow" onclick="showFloatChar()"><svg class="fc-svg" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="skinG2" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#FFE8CC"/><stop offset="60%" stop-color="#FFCC99"/><stop offset="100%" stop-color="#F0A870"/></radialGradient><linearGradient id="bodyG2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6BB3FF"/><stop offset="100%" stop-color="#2060C8"/></linearGradient></defs><ellipse cx="40" cy="98" rx="18" ry="3" fill="rgba(0,0,0,0.15)"/><rect x="22" y="60" width="36" height="32" rx="10" fill="url(#bodyG2)"/><ellipse cx="40" cy="40" rx="22" ry="20" fill="url(#skinG2)"/><path d="M18 36 Q18 14 40 13 Q62 14 62 36 Q58 20 40 19 Q22 20 18 36Z" fill="#2A1005"/><ellipse cx="30" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="50" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="30" cy="41" rx="5" ry="5.5" fill="#2A5EC8"/><ellipse cx="50" cy="41" rx="5" ry="5.5" fill="#2A5EC8"/><circle cx="31" cy="40" r="2.5" fill="#0A1840"/><circle cx="51" cy="40" r="2.5" fill="#0A1840"/><circle cx="32" cy="38.5" r="1.2" fill="white"/><circle cx="52" cy="38.5" r="1.2" fill="white"/><ellipse cx="22" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><ellipse cx="58" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><path d="M33 52 Q40 57 47 52" stroke="#C07040" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg></div>

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
      <div class="buddy-3d" aria-label="VAATZ Buddy"><svg class="buddy-svg" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="bSkinG" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#FFE8CC"/><stop offset="60%" stop-color="#FFCC99"/><stop offset="100%" stop-color="#F0A870"/></radialGradient><radialGradient id="bHairG" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#5C3D1E"/><stop offset="100%" stop-color="#1A0A00"/></radialGradient><linearGradient id="bBodyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6BB3FF"/><stop offset="50%" stop-color="#4A8EF0"/><stop offset="100%" stop-color="#2060C8"/></linearGradient><radialGradient id="bEyeG" cx="35%" cy="35%" r="50%"><stop offset="0%" stop-color="#4A7FD4"/><stop offset="100%" stop-color="#1A3A80"/></radialGradient></defs><ellipse cx="40" cy="98" rx="18" ry="3" fill="rgba(0,0,0,0.15)"/><rect x="22" y="60" width="36" height="32" rx="10" fill="url(#bBodyG)"/><rect x="22" y="60" width="36" height="8" rx="5" fill="rgba(255,255,255,0.15)"/><rect x="30" y="67" width="20" height="10" rx="3" fill="rgba(255,255,255,0.2)"/><text x="40" y="75.5" text-anchor="middle" font-size="5.5" font-weight="800" fill="white" font-family="sans-serif">VAATZ</text><rect x="10" y="62" width="13" height="8" rx="4" fill="url(#bBodyG)"/><ellipse cx="10" cy="66" rx="5" ry="5.5" fill="url(#bSkinG)"/><rect x="57" y="62" width="13" height="8" rx="4" fill="url(#bBodyG)"/><ellipse cx="70" cy="66" rx="5" ry="5.5" fill="url(#bSkinG)"/><rect x="26" y="89" width="11" height="10" rx="5" fill="#1A48A8"/><rect x="43" y="89" width="11" height="10" rx="5" fill="#1A48A8"/><ellipse cx="31.5" cy="99" rx="7" ry="3.5" fill="#111"/><ellipse cx="48.5" cy="99" rx="7" ry="3.5" fill="#111"/><rect x="34" y="53" width="12" height="9" rx="4" fill="url(#bSkinG)"/><ellipse cx="40" cy="40" rx="22" ry="20" fill="url(#bSkinG)"/><path d="M18 36 Q18 14 40 13 Q62 14 62 36 Q58 20 40 19 Q22 20 18 36Z" fill="url(#bHairG)"/><path d="M18 36 Q16 30 18 24 Q20 18 28 15 L26 22 Q20 26 18 36Z" fill="url(#bHairG)"/><path d="M62 36 Q64 30 62 24 Q60 18 52 15 L54 22 Q60 26 62 36Z" fill="url(#bHairG)"/><ellipse cx="18" cy="40" rx="4" ry="5" fill="url(#bSkinG)"/><ellipse cx="62" cy="40" rx="4" ry="5" fill="url(#bSkinG)"/><ellipse cx="30" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="50" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="30" cy="41" rx="5" ry="5.5" fill="url(#bEyeG)"/><ellipse cx="50" cy="41" rx="5" ry="5.5" fill="url(#bEyeG)"/><circle cx="31" cy="40" r="2.5" fill="#0A1840"/><circle cx="51" cy="40" r="2.5" fill="#0A1840"/><circle cx="32" cy="38.5" r="1.2" fill="white"/><circle cx="52" cy="38.5" r="1.2" fill="white"/><circle cx="30.5" cy="41" r="0.6" fill="rgba(255,255,255,0.7)"/><circle cx="50.5" cy="41" r="0.6" fill="rgba(255,255,255,0.7)"/><path d="M24 33 Q30 30 36 33" stroke="#3A2010" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M44 33 Q50 30 56 33" stroke="#3A2010" stroke-width="1.8" fill="none" stroke-linecap="round"/><ellipse cx="22" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><ellipse cx="58" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><path d="M38 46 Q40 48 42 46" stroke="rgba(180,100,70,0.5)" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M33 52 Q40 57 47 52" stroke="#C07040" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg></div>
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

<style id="v27-final-touch-css">
.v27-font-shortcut{background:var(--accent-dim)!important;color:var(--accent)!important;border-color:var(--accent-bd)!important;font-weight:900!important}
.v27-font-shortcut strong{font-family:'Outfit',sans-serif;font-size:14px}
</style>

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

<style id="v29-css">
:root{--v29-scale:1.12}html[data-font-size=small]{--v29-scale:1.00!important;--v26-text-scale:1.06!important}html[data-font-size=standard]{--v29-scale:1.12!important;--v26-text-scale:1.18!important}html[data-font-size=large]{--v29-scale:1.26!important;--v26-text-scale:1.34!important}body,.app,.mn,.sb,.adm,.comm-box,.rp{font-size:calc(14px*var(--v29-scale))!important}.sb-i,.tb-b,.sc-btn,.msg-b,.ai-tx,.ct td,.ct th,.itb,.ih,.disc,.rp-tab,.src-doc-nm,.src-pgnav,.companion-action,.v29-btn,.v29-q-title,.v29-q-body,.v29-detail-body,.at2 td,.at2 th{font-size:calc(13px*var(--v29-scale))!important}.ai-tx{line-height:1.92!important}.tb{height:auto;min-height:74px;display:flex;flex-direction:column;padding:0 20px;background:var(--bg-1)}.tb-topline{display:flex;align-items:center;justify-content:space-between;width:100%;min-height:54px}.tb-l,.tb-r{height:auto;align-items:center}.tb-l>.sc-sw{display:flex!important}.tb-l>.sc-sw .sc-btn{padding:6px 12px!important}.web-tg-mini{display:none!important}.v29-notice{display:flex;align-items:center;gap:10px;width:100%;min-height:34px;padding:6px 2px 10px;border-top:1px solid var(--border-1);color:var(--text-2);font-size:calc(12px*var(--v29-scale));overflow:hidden}.v29-notice-badge{flex:0 0 auto;padding:4px 9px;border-radius:999px;background:var(--accent-dim);color:var(--accent);font-weight:900}.v29-notice-track{display:flex;gap:18px;white-space:nowrap;animation:v29Ticker 30s linear infinite}.v29-notice:hover .v29-notice-track{animation-play-state:paused}.v29-notice-item b{color:var(--text-1)}@keyframes v29Ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.v26-chat-controls{display:none!important}.v29-chat-tools{display:grid;grid-template-columns:minmax(240px,1fr) auto;gap:10px;padding:11px 12px 10px;border-bottom:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1));border-radius:var(--r-lg) var(--r-lg) 0 0;position:relative}.v29-mode-current{width:100%;display:flex;align-items:center;gap:10px;border:1px solid var(--border-2);background:var(--bg-3);border-radius:13px;padding:10px 12px;color:var(--text-1);font-family:inherit;cursor:pointer;text-align:left}.v29-mode-current:hover{border-color:var(--accent-bd);background:var(--accent-dim)}.v29-mode-icon{width:34px;height:34px;border-radius:11px;display:flex;align-items:center;justify-content:center;background:var(--accent-dim);color:var(--accent);font-size:18px;flex:0 0 auto}.v29-mode-copy{min-width:0;flex:1}.v29-mode-title{font-size:calc(14px*var(--v29-scale));font-weight:950}.v29-mode-desc{font-size:calc(11px*var(--v29-scale));color:var(--text-3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.v29-mode-menu{position:absolute;left:0;right:0;bottom:calc(100% + 8px);background:var(--bg-1);border:1px solid var(--border-2);border-radius:16px;padding:8px;box-shadow:0 18px 48px rgba(0,0,0,.45);z-index:50;display:none}.v29-mode-menu.sh{display:grid;grid-template-columns:1fr 1fr;gap:7px}.v29-mode-option{border:1px solid var(--border-1);background:var(--bg-2);border-radius:13px;padding:11px;cursor:pointer;color:var(--text-2);text-align:left;font-family:inherit}.v29-mode-option:hover,.v29-mode-option.on{border-color:var(--accent-bd);background:var(--accent-dim);color:var(--accent)}.v29-mode-option .t{font-size:calc(13px*var(--v29-scale));font-weight:950}.v29-mode-option .d{font-size:calc(10.8px*var(--v29-scale));line-height:1.45;color:var(--text-3);margin-top:4px}.v29-size-panel{display:flex;align-items:center;gap:4px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:13px;padding:5px}.v29-size-panel .lb{font-size:calc(10px*var(--v29-scale));color:var(--text-4);font-weight:900;margin:0 4px}.v29-size-btn{border:0;background:transparent;color:var(--text-3);border-radius:9px;padding:7px 9px;font-size:calc(12px*var(--v29-scale));font-weight:850;cursor:pointer;font-family:inherit}.v29-size-btn:hover,.v29-size-btn.on{background:var(--bg-5);color:var(--text-1)}
.rp{transition:width .18s ease,min-width .18s ease,opacity .14s ease!important}.rp.sh{width:min(720px,48vw)!important;min-width:min(720px,48vw)!important}.rp:not(.sh){width:0!important;min-width:0!important;opacity:0!important;border-left:0!important}.rp.source-full{position:fixed!important;top:0!important;right:0!important;bottom:0!important;width:min(1180px,92vw)!important;min-width:min(1180px,92vw)!important;z-index:1200!important;border-left:1px solid var(--border-2)!important;box-shadow:-18px 0 64px rgba(0,0,0,.55)!important}.src-vw{flex:1!important;min-height:0!important;overflow:hidden!important;padding:0!important}.v29-source-shell{height:100%;display:grid;grid-template-rows:auto 1fr;background:var(--bg-1)}.v29-src-meta{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 18px;border-bottom:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1))}.v29-src-name{font-size:calc(15px*var(--v29-scale));font-weight:950;color:var(--text-1)}.v29-src-path{font-size:calc(11px*var(--v29-scale));color:var(--text-4);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:520px}.v29-src-actions{display:flex;gap:6px;align-items:center}.v29-btn{border:1px solid var(--border-2);background:var(--bg-3);color:var(--text-2);border-radius:10px;padding:8px 10px;font-size:calc(12px*var(--v29-scale));font-weight:850;font-family:inherit;cursor:pointer}.v29-btn:hover{border-color:var(--accent-bd);background:var(--accent-dim);color:var(--accent)}.v29-src-body{min-height:0;display:grid;grid-template-columns:160px 1fr}.v29-page-list{border-right:1px solid var(--border-1);background:var(--bg-2);overflow:auto;padding:12px 8px}.v29-page-link{width:100%;display:flex;flex-direction:column;gap:3px;border:1px solid transparent;background:transparent;color:var(--text-3);border-radius:11px;padding:10px;cursor:pointer;text-align:left;font-family:inherit;margin-bottom:6px}.v29-page-link:hover,.v29-page-link.on{background:var(--accent-dim);border-color:var(--accent-bd);color:var(--accent)}.v29-page-link .p{font-size:calc(12px*var(--v29-scale));font-weight:950}.v29-page-link .t{font-size:calc(10.5px*var(--v29-scale));line-height:1.35}.v29-doc-scroll{min-height:0;overflow:auto;padding:20px 24px 42px;scroll-behavior:smooth}.v29-page-card{background:var(--bg-1);border:1px solid var(--border-2);border-radius:18px;padding:24px;margin:0 auto 22px;max-width:860px;box-shadow:0 12px 34px rgba(0,0,0,.18)}.v29-page-card.active{box-shadow:0 0 0 2px var(--accent-bd),0 18px 48px rgba(75,142,240,.12)}.v29-page-top{display:flex;justify-content:space-between;gap:8px;border-bottom:1px solid var(--border-1);padding-bottom:12px;margin-bottom:14px;color:var(--text-3);font-size:calc(12px*var(--v29-scale))}.v29-page-title{font-size:calc(18px*var(--v29-scale));font-weight:950;color:var(--text-1);margin-bottom:6px}.v29-page-sub{font-size:calc(12px*var(--v29-scale));color:var(--text-4);margin-bottom:16px}.v29-page-card p,.v29-page-card li{font-size:calc(14px*var(--v29-scale));line-height:1.82;color:var(--text-2)}.v29-page-card h4{font-size:calc(15px*var(--v29-scale));color:var(--text-1);margin:14px 0 8px}.v29-page-card table{width:100%;border-collapse:collapse;margin-top:10px}.v29-page-card td,.v29-page-card th{border:1px solid var(--border-1);padding:8px 10px;font-size:calc(12.5px*var(--v29-scale));color:var(--text-2)}.src-hi.primary,.src-hi{background:rgba(255,217,61,.32)!important;color:var(--text-1)!important;border-radius:4px;padding:1px 3px;box-shadow:0 0 0 3px rgba(255,217,61,.10)!important}.v29-highlight-note{max-width:860px;margin:0 auto 20px;padding:12px 14px;border:1px solid rgba(255,217,61,.25);background:rgba(255,217,61,.08);border-radius:14px;color:var(--text-2);font-size:calc(12px*var(--v29-scale));line-height:1.55}
.comm-box.v29-wide{width:min(1620px,98vw)!important;height:96vh!important;max-height:96vh!important;border-radius:20px!important}.comm-box.v29-wide .comm-body{padding:0!important;overflow:hidden!important}.comm-box.v29-wide .comm-tabs{display:none!important}.v29-comm{height:100%;display:grid;grid-template-columns:260px minmax(560px,1fr) minmax(430px,520px);min-height:0;background:var(--bg-1)}.v29-comm-left,.v29-comm-main,.v29-comm-detail{min-height:0;overflow:auto}.v29-comm-left{border-right:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1));padding:20px 16px}.v29-comm-main{padding:20px 22px}.v29-comm-detail{border-left:1px solid var(--border-1);background:linear-gradient(180deg,var(--bg-2),var(--bg-1));padding:20px}.v29-comm-title{font-size:calc(24px*var(--v29-scale));font-weight:950;line-height:1.22;color:var(--text-1);letter-spacing:-.04em}.v29-comm-sub{font-size:calc(13px*var(--v29-scale));color:var(--text-3);line-height:1.6;margin-top:6px}.v29-quick-stats{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:16px 0}.v29-quick-stat{background:var(--bg-1);border:1px solid var(--border-1);border-radius:14px;padding:12px}.v29-quick-stat .v{font-family:'Outfit';font-size:calc(20px*var(--v29-scale));font-weight:950;color:var(--text-1)}.v29-quick-stat .l{font-size:calc(11px*var(--v29-scale));color:var(--text-4);margin-top:2px}.v29-section-label{font-size:calc(11px*var(--v29-scale));font-weight:950;letter-spacing:.08em;color:var(--text-4);text-transform:uppercase;margin:18px 4px 8px}.v29-cat{width:100%;display:flex;align-items:center;justify-content:space-between;gap:8px;border:0;background:transparent;color:var(--text-3);border-radius:12px;padding:10px 12px;font-size:calc(13px*var(--v29-scale));font-weight:850;cursor:pointer;font-family:inherit}.v29-cat:hover,.v29-cat.on{background:var(--accent-dim);color:var(--accent)}.v29-tags{display:flex;gap:6px;flex-wrap:wrap}.v29-tag{display:inline-flex;align-items:center;border:1px solid var(--border-1);background:var(--bg-1);color:var(--text-3);border-radius:999px;padding:6px 9px;font-size:calc(11px*var(--v29-scale));font-weight:800;cursor:pointer;font-family:inherit}.v29-tag:hover,.v29-tag.on{background:var(--accent-dim);border-color:var(--accent-bd);color:var(--accent)}.v29-comm-hero{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;background:linear-gradient(135deg,var(--bg-2),var(--bg-1));border:1px solid var(--border-1);border-radius:20px;padding:20px;margin-bottom:14px}.v29-search{display:flex;align-items:center;gap:10px;background:var(--bg-1);border:1px solid var(--border-2);border-radius:14px;padding:12px 14px;margin-top:14px}.v29-search input{flex:1;background:transparent;border:0;outline:0;color:var(--text-1);font-size:calc(14px*var(--v29-scale));font-family:inherit}.v29-q-list{display:flex;flex-direction:column;gap:10px}.v29-hot-strip{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin-bottom:14px}.v29-hot-card{border:1px solid var(--accent-bd);background:linear-gradient(135deg,var(--accent-dim),var(--bg-2));border-radius:16px;padding:13px;cursor:pointer}.v29-hot-label{font-size:calc(10px*var(--v29-scale));font-weight:950;color:var(--accent);margin-bottom:5px}.v29-hot-title{font-size:calc(13px*var(--v29-scale));font-weight:950;color:var(--text-1);line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.v29-hot-meta{font-size:calc(10.5px*var(--v29-scale));color:var(--text-4);margin-top:7px}.v29-q-card{background:var(--bg-2);border:1px solid var(--border-1);border-radius:17px;padding:16px;cursor:pointer;transition:border-color .12s ease,background .12s ease}.v29-q-card:hover,.v29-q-card.on{border-color:var(--accent-bd);background:linear-gradient(135deg,rgba(75,142,240,.07),var(--bg-2))}.v29-q-head{display:flex;align-items:center;gap:8px;margin-bottom:8px}.v29-status{display:inline-flex;align-items:center;border-radius:999px;padding:4px 8px;font-size:calc(10.5px*var(--v29-scale));font-weight:950}.v29-status.hot{background:var(--r-dim);color:var(--r)}.v29-status.adopted,.v29-status.live{background:var(--g-dim);color:var(--g)}.v29-status.wait{background:var(--a-dim);color:var(--a)}.v29-status.new{background:var(--accent-dim);color:var(--accent)}.v29-q-title{font-size:calc(17px*var(--v29-scale));font-weight:950;line-height:1.42;color:var(--text-1);margin-bottom:7px}.v29-q-body{font-size:calc(13.5px*var(--v29-scale));line-height:1.7;color:var(--text-2);margin-bottom:10px}.v29-q-meta{display:flex;align-items:center;gap:9px;flex-wrap:wrap;color:var(--text-4);font-size:calc(11.5px*var(--v29-scale))}.v29-like-small{display:inline-flex;align-items:center;gap:4px;color:var(--text-3);font-weight:850}.v29-detail-card{background:var(--bg-1);border:1px solid var(--border-1);border-radius:18px;padding:20px}.v29-detail-title{font-size:calc(22px*var(--v29-scale));font-weight:950;line-height:1.34;color:var(--text-1);margin:8px 0}.v29-detail-body{font-size:calc(14.5px*var(--v29-scale));line-height:1.85;color:var(--text-2)}.v29-answer{background:var(--bg-2);border:1px solid var(--border-1);border-radius:16px;padding:15px;margin-top:12px}.v29-answer-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px}.v29-answer-author{font-size:calc(13px*var(--v29-scale));font-weight:950;color:var(--text-1)}.v29-answer-body{font-size:calc(13.5px*var(--v29-scale));line-height:1.78;color:var(--text-2)}.v29-action-row{display:flex;gap:7px;flex-wrap:wrap;margin-top:12px}.v29-reply textarea{width:100%;min-height:112px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:14px;color:var(--text-1);font-size:calc(14px*var(--v29-scale));line-height:1.7;padding:13px;font-family:inherit;resize:vertical;outline:0}.v29-loop{background:linear-gradient(135deg,var(--accent-dim),var(--bg-1));border:1px solid var(--accent-bd);border-radius:18px;padding:15px;margin-bottom:14px}.v29-loop .t{font-size:calc(14px*var(--v29-scale));font-weight:950;color:var(--text-1)}.v29-loop .d{font-size:calc(12px*var(--v29-scale));color:var(--text-3);line-height:1.6;margin-top:4px}
#v28BuddyNudge,#v27BuddySpeech{display:none!important}.companion-hub{z-index:950!important;right:22px!important;left:auto!important;bottom:24px!important;transition:transform .18s ease!important}.companion-hub.v27-left,.companion-hub.v27-right{right:22px!important;left:auto!important}.companion-card{border-radius:22px!important;border:1px solid rgba(75,142,240,.24)!important;background:rgba(12,15,21,.96)!important;box-shadow:0 18px 56px rgba(0,0,0,.44),0 0 0 1px rgba(255,255,255,.03)!important}.companion-main{padding:14px!important;background:radial-gradient(circle at 18% 8%,rgba(106,161,247,.28),transparent 45%),linear-gradient(135deg,rgba(75,142,240,.16),rgba(78,173,123,.08))!important}.companion-name{font-size:calc(14px*var(--v29-scale))!important;font-weight:950!important}.companion-msg{font-size:calc(11.5px*var(--v29-scale))!important;line-height:1.5!important}.companion-main>.buddy-3d{width:96px!important;height:96px!important;flex-basis:96px!important;margin:-14px 4px -10px -6px!important;animation:v29BuddyIdle 3.8s ease-in-out infinite;filter:drop-shadow(0 15px 22px rgba(75,142,240,.25))!important}.buddy-body{background:linear-gradient(145deg,#79B2FF,#2E6BD7 62%,#1B3F83)!important}.buddy-face{background:linear-gradient(145deg,#FFE1B8,#EBAA77)!important}.buddy-hair{background:linear-gradient(145deg,#1B2433,#39445A)!important}.buddy-arm.r{animation:v29Wave 2.8s ease-in-out infinite;transform-origin:left center}.buddy-badge{background:linear-gradient(135deg,var(--accent),#6AA1F7)!important;color:#fff!important;border:0!important;font-size:10px!important;font-weight:950}.v29-buddy-bubble{position:absolute;right:6px;bottom:calc(100% + 12px);max-width:380px;background:var(--bg-1);border:1px solid var(--border-2);border-radius:18px 18px 4px 18px;padding:13px 15px;font-size:calc(12.5px*var(--v29-scale));color:var(--text-2);line-height:1.58;box-shadow:0 16px 42px rgba(0,0,0,.42);display:none;z-index:40}.v29-buddy-bubble.sh{display:block;animation:fu .15s var(--ease)}.v29-buddy-bubble b{color:var(--text-1)}.companion-panel{gap:8px!important;padding:12px!important}.companion-action{font-size:calc(11.5px*var(--v29-scale))!important;padding:10px 9px!important}.companion-hub.v29-hop .buddy-3d{animation:v29BuddyHop .55s ease!important}@keyframes v29BuddyIdle{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-6px) rotate(-1.5deg)}}@keyframes v29Wave{0%,100%{transform:rotate(24deg)}45%{transform:rotate(-8deg)}}@keyframes v29BuddyHop{0%,100%{transform:translateY(0)}45%{transform:translateY(-18px)}}
@media(max-width:1350px){.v29-comm{grid-template-columns:230px minmax(460px,1fr)}.v29-comm-detail{grid-column:1/-1;border-left:0;border-top:1px solid var(--border-1);max-height:45vh}.v29-hot-strip{grid-template-columns:1fr}.rp.sh{width:560px!important;min-width:560px!important}}@media(max-width:900px){.tb{padding:0 12px}.tb-topline{height:auto;min-height:54px;flex-direction:column;align-items:stretch;padding:8px 0}.tb-l,.tb-r{height:auto;justify-content:space-between}.v29-chat-tools{grid-template-columns:1fr}.v29-mode-menu.sh{grid-template-columns:1fr}.v29-comm{grid-template-columns:1fr}.comm-box.v29-wide{width:100vw!important;height:100vh!important;max-height:100vh!important;border-radius:0!important}.rp.sh,.rp.source-full{position:fixed!important;top:0!important;right:0!important;bottom:0!important;width:100vw!important;min-width:100vw!important;z-index:1200!important}.v29-src-body{grid-template-columns:1fr}.v29-page-list{display:flex;gap:6px;overflow-x:auto;border-right:0;border-bottom:1px solid var(--border-1)}.v29-page-link{min-width:130px}.companion-hub{right:12px!important;bottom:12px!important;width:min(360px,calc(100vw - 24px))!important}}
</style>

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

/* ── 캐릭터 비주얼 개선 v39 (#8) ── */
.companion-card{
  box-shadow:0 20px 60px rgba(0,0,0,.5),0 0 0 1px rgba(106,161,247,.22),0 0 30px -6px rgba(75,142,240,.5)!important;
}
.v29-buddy-bubble,.float-char-bubble{backdrop-filter:blur(8px)!important}
.float-char-lv{
  background:linear-gradient(135deg,var(--accent),#6AA1F7)!important;color:#fff!important;
  font-weight:800!important;box-shadow:0 4px 14px rgba(75,142,240,.4)!important;border:0!important;
}
.companion-hub:hover .companion-main>.buddy-3d{filter:drop-shadow(0 16px 24px rgba(75,142,240,.42)) brightness(1.05)!important}
.float-char:hover .float-char-body{filter:drop-shadow(0 10px 18px rgba(75,142,240,.4)) brightness(1.05)}
</style>

<!-- ═══════════════════════════════════════════════════════════
     v34 FINAL POLISH
     ① 폰트 완전 고정  ② 구매지식 커뮤니티 통일
     ③ 커뮤니티 창 크기 조절 재구현
     ④ 업무 FLOW 재설계 (파일업로드→팀승인→시스템승인→AI반영)
     ⑤ 팀 Admin 폴더 관리 UI 재설계
     ═══════════════════════════════════════════════════════════ -->
`
