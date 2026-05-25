export const communityModalHtml = `<div class="comm-ov" id="commOv" onclick="if(event.target===this)closeComm()">
<div class="comm-box">
<div class="comm-hd"><h2 style="display:flex;align-items:center;gap:8px"><span style="background:var(--accent-g);-webkit-background-clip:text;-webkit-text-fill-color:transparent">💡 구매 커뮤니티</span></h2><button class="adm-x" onclick="closeComm()">✕</button></div>
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

<!-- 기간 탭 -->
<div style="display:flex;gap:4px;margin-bottom:14px;background:var(--bg-3);padding:3px;border-radius:10px;border:1px solid var(--border-1)">
  <button id="hof-tab-week" onclick="hofTab('week')" style="flex:1;padding:6px 0;font-size:11px;font-weight:600;border-radius:7px;border:none;cursor:pointer;font-family:inherit;background:var(--accent);color:#fff;transition:all .15s">📅 이번 주</button>
  <button id="hof-tab-month" onclick="hofTab('month')" style="flex:1;padding:6px 0;font-size:11px;font-weight:600;border-radius:7px;border:none;cursor:pointer;font-family:inherit;background:transparent;color:var(--text-3);transition:all .15s">📆 이번 달</button>
  <button id="hof-tab-year" onclick="hofTab('year')" style="flex:1;padding:6px 0;font-size:11px;font-weight:600;border-radius:7px;border:none;cursor:pointer;font-family:inherit;background:transparent;color:var(--text-3);transition:all .15s">🏆 올해</button>
</div>

<!-- 기간 라벨 -->
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
  <span id="hofPeriodLabel" style="font-size:12px;font-weight:700;color:var(--text-2)">📅 2026년 5월 4주차</span>
  <span style="font-size:10px;color:var(--text-4)">집계: 매주 월요일 00시</span>
</div>

<!-- 포디엄 -->
<div class="hof-podium">
<div class="hof-p silver"><div class="hof-rank">2nd</div><div class="hof-av hof-av-svg"><svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="hSkin2" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#FFE8CC"/><stop offset="100%" stop-color="#F0A870"/></radialGradient><linearGradient id="hBody2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4EAD7B"/><stop offset="100%" stop-color="#2E8A55"/></linearGradient></defs><rect x="22" y="60" width="36" height="28" rx="9" fill="url(#hBody2)"/><ellipse cx="40" cy="40" rx="22" ry="20" fill="url(#hSkin2)"/><path d="M18 36 Q18 14 40 13 Q62 14 62 36 Q58 20 40 19 Q22 20 18 36Z" fill="#2D3748"/><ellipse cx="30" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="50" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="30" cy="41" rx="5" ry="5.5" fill="#3A8A6E"/><ellipse cx="50" cy="41" rx="5" ry="5.5" fill="#3A8A6E"/><circle cx="31" cy="40" r="2.5" fill="#0A2810"/><circle cx="51" cy="40" r="2.5" fill="#0A2810"/><circle cx="32" cy="38.5" r="1.2" fill="white"/><circle cx="52" cy="38.5" r="1.2" fill="white"/><ellipse cx="22" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><ellipse cx="58" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><path d="M33 52 Q40 57 47 52" stroke="#C07040" stroke-width="1.8" fill="none" stroke-linecap="round"/><text x="40" y="8" text-anchor="middle" font-size="12">🥈</text></svg></div><div class="hof-name">품질지킴이</div><div class="hof-sub">수석바이어</div><div class="hof-score">2,840</div><div class="hof-label">포인트</div></div>
<div class="hof-p gold"><div class="hof-rank">🥇</div><div class="hof-av hof-av-svg"><svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="hSkin1" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#FFE8CC"/><stop offset="100%" stop-color="#F0A870"/></radialGradient><linearGradient id="hBody1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6BB3FF"/><stop offset="100%" stop-color="#2060C8"/></linearGradient></defs><rect x="22" y="60" width="36" height="28" rx="9" fill="url(#hBody1)"/><ellipse cx="40" cy="40" rx="22" ry="20" fill="url(#hSkin1)"/><path d="M18 36 Q18 14 40 13 Q62 14 62 36 Q58 20 40 19 Q22 20 18 36Z" fill="#8B4513"/><ellipse cx="30" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="50" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="30" cy="41" rx="5" ry="5.5" fill="#4A7FD4"/><ellipse cx="50" cy="41" rx="5" ry="5.5" fill="#4A7FD4"/><circle cx="31" cy="40" r="2.5" fill="#0A1840"/><circle cx="51" cy="40" r="2.5" fill="#0A1840"/><circle cx="32" cy="38.5" r="1.2" fill="white"/><circle cx="52" cy="38.5" r="1.2" fill="white"/><ellipse cx="22" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><ellipse cx="58" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><path d="M33 52 Q40 57 47 52" stroke="#C07040" stroke-width="1.8" fill="none" stroke-linecap="round"/><text x="40" y="8" text-anchor="middle" font-size="12">👑</text></svg></div><div class="hof-name">프로큐어마스터</div><div class="hof-sub">CPO</div><div class="hof-score">3,520</div><div class="hof-label">포인트</div></div>
<div class="hof-p bronze"><div class="hof-rank">3rd</div><div class="hof-av hof-av-svg"><svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="hSkin3" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#FFE8CC"/><stop offset="100%" stop-color="#F0A870"/></radialGradient><linearGradient id="hBody3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8678BF"/><stop offset="100%" stop-color="#5040A0"/></linearGradient></defs><rect x="22" y="60" width="36" height="28" rx="9" fill="url(#hBody3)"/><ellipse cx="40" cy="40" rx="22" ry="20" fill="url(#hSkin3)"/><path d="M18 36 Q18 14 40 13 Q62 14 62 36 Q58 20 40 19 Q22 20 18 36Z" fill="#1A365D"/><ellipse cx="30" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="50" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="30" cy="41" rx="5" ry="5.5" fill="#7060C0"/><ellipse cx="50" cy="41" rx="5" ry="5.5" fill="#7060C0"/><circle cx="31" cy="40" r="2.5" fill="#201040"/><circle cx="51" cy="40" r="2.5" fill="#201040"/><circle cx="32" cy="38.5" r="1.2" fill="white"/><circle cx="52" cy="38.5" r="1.2" fill="white"/><ellipse cx="22" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><ellipse cx="58" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><path d="M33 52 Q40 57 47 52" stroke="#C07040" stroke-width="1.8" fill="none" stroke-linecap="round"/><text x="40" y="8" text-anchor="middle" font-size="12">🥉</text></svg></div><div class="hof-name">VAATZ달인</div><div class="hof-sub">구매Pro</div><div class="hof-score">1,960</div><div class="hof-label">포인트</div></div>
</div>

<!-- 개인 랭킹 -->
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;margin-top:4px">
  <div style="font-size:11px;font-weight:700;color:var(--text-1)">🏅 개인 랭킹</div>
  <div style="font-size:9px;color:var(--text-4)">채택×50 + 추천×10 + AI반영×100</div>
</div>
<div class="lb-row" style="background:linear-gradient(90deg,rgba(194,155,66,.12),transparent);border:1px solid rgba(194,155,66,.25)"><div class="lb-rank" style="color:var(--a);font-weight:900;font-size:15px">1</div><div class="lb-av" style="background:linear-gradient(135deg,#C29B42,#E8C060);color:#fff">P</div><div class="lb-info"><div class="lb-name">프로큐어마스터 <span class="lv lv-5">Lv.5</span></div><div class="lb-sub2">채택 24회 · AI 반영 5회 · 🔥 7일 연속</div></div><div class="lb-pts" style="color:var(--a)">3,520</div></div>
<div class="lb-row"><div class="lb-rank">2</div><div class="lb-av" style="background:var(--bg-5)">품</div><div class="lb-info"><div class="lb-name">품질지킴이 <span class="lv lv-4">Lv.4</span></div><div class="lb-sub2">채택 18회 · AI 반영 3회</div></div><div class="lb-pts">2,840</div></div>
<div class="lb-row"><div class="lb-rank">3</div><div class="lb-av" style="background:var(--bg-5)">V</div><div class="lb-info"><div class="lb-name">VAATZ달인 <span class="lv lv-3">Lv.3</span></div><div class="lb-sub2">채택 12회</div></div><div class="lb-pts">1,960</div></div>
<div class="lb-row" style="background:var(--accent-dim);border:1px solid var(--accent-bd)"><div class="lb-rank" style="color:var(--accent)">4</div><div class="lb-av" style="background:var(--accent-g);color:#fff">프</div><div class="lb-info"><div class="lb-name">프로큐어히어로 <span class="lv lv-3">Lv.3</span> <span style="font-size:9px;color:var(--accent)">← 나</span></div><div class="lb-sub2">채택 10회 · AI 반영 3회</div></div><div class="lb-pts" style="color:var(--accent)">1,720</div></div>
<div class="lb-row"><div class="lb-rank">5</div><div class="lb-av" style="background:var(--bg-5)">반</div><div class="lb-info"><div class="lb-name">반도체사냥꾼 <span class="lv lv-2">Lv.2</span></div><div class="lb-sub2">채택 7회</div></div><div class="lb-pts">1,280</div></div>
<div class="lb-row"><div class="lb-rank">6</div><div class="lb-av" style="background:var(--bg-5)">샤</div><div class="lb-info"><div class="lb-name">샤시마이스터 <span class="lv lv-2">Lv.2</span></div><div class="lb-sub2">채택 5회</div></div><div class="lb-pts">980</div></div>

<!-- 팀별 활용 랭킹 -->
<div style="margin-top:16px">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
    <div style="font-size:11px;font-weight:700;color:var(--text-1)">🏢 팀별 활용 랭킹</div>
    <div style="font-size:9px;color:var(--text-4)">질문+답변+채택 총합 기준</div>
  </div>
  <div style="display:flex;flex-direction:column;gap:5px">
    <div style="background:linear-gradient(90deg,rgba(75,142,240,.13),transparent);border:1px solid var(--accent-bd);border-radius:9px;padding:8px 12px;display:flex;align-items:center;gap:10px">
      <div style="font-size:13px;font-weight:900;color:var(--accent);min-width:20px">1</div>
      <div style="font-size:18px">📦</div>
      <div style="flex:1"><div style="font-size:12px;font-weight:700;color:var(--text-1)">일반자재구매팀</div><div style="font-size:9px;color:var(--text-4)">질문 48 · 답변 112 · 채택 23</div></div>
      <div style="text-align:right"><div style="font-size:12px;font-weight:800;color:var(--accent);font-family:Outfit">183</div><div style="font-size:8px;color:var(--text-4)">활동pts</div></div>
      <div style="width:64px;height:7px;background:var(--bg-4);border-radius:3px;overflow:hidden"><div style="height:100%;width:100%;background:var(--accent);border-radius:3px"></div></div>
    </div>
    <div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:9px;padding:8px 12px;display:flex;align-items:center;gap:10px">
      <div style="font-size:13px;font-weight:900;color:var(--text-3);min-width:20px">2</div>
      <div style="font-size:18px">🚘</div>
      <div style="flex:1"><div style="font-size:12px;font-weight:700;color:var(--text-1)">샤시부품구매1팀</div><div style="font-size:9px;color:var(--text-4)">질문 35 · 답변 87 · 채택 18</div></div>
      <div style="text-align:right"><div style="font-size:12px;font-weight:800;color:var(--text-2);font-family:Outfit">140</div><div style="font-size:8px;color:var(--text-4)">활동pts</div></div>
      <div style="width:64px;height:7px;background:var(--bg-4);border-radius:3px;overflow:hidden"><div style="height:100%;width:76%;background:var(--text-4);border-radius:3px"></div></div>
    </div>
    <div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:9px;padding:8px 12px;display:flex;align-items:center;gap:10px">
      <div style="font-size:13px;font-weight:900;color:var(--text-3);min-width:20px">3</div>
      <div style="font-size:18px">💾</div>
      <div style="flex:1"><div style="font-size:12px;font-weight:700;color:var(--text-1)">반도체구매팀</div><div style="font-size:9px;color:var(--text-4)">질문 29 · 답변 71 · 채택 14</div></div>
      <div style="text-align:right"><div style="font-size:12px;font-weight:800;color:var(--text-2);font-family:Outfit">114</div><div style="font-size:8px;color:var(--text-4)">활동pts</div></div>
      <div style="width:64px;height:7px;background:var(--bg-4);border-radius:3px;overflow:hidden"><div style="height:100%;width:62%;background:var(--text-4);border-radius:3px"></div></div>
    </div>
    <div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:9px;padding:8px 12px;display:flex;align-items:center;gap:10px">
      <div style="font-size:13px;font-weight:900;color:var(--text-3);min-width:20px">4</div>
      <div style="font-size:18px">📁</div>
      <div style="flex:1"><div style="font-size:12px;font-weight:700;color:var(--text-1)">구매전략팀</div><div style="font-size:9px;color:var(--text-4)">질문 22 · 답변 58 · 채택 11</div></div>
      <div style="text-align:right"><div style="font-size:12px;font-weight:800;color:var(--text-2);font-family:Outfit">91</div><div style="font-size:8px;color:var(--text-4)">활동pts</div></div>
      <div style="width:64px;height:7px;background:var(--bg-4);border-radius:3px;overflow:hidden"><div style="height:100%;width:50%;background:var(--text-4);border-radius:3px"></div></div>
    </div>
    <div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:9px;padding:8px 12px;display:flex;align-items:center;gap:10px">
      <div style="font-size:13px;font-weight:900;color:var(--text-3);min-width:20px">5</div>
      <div style="font-size:18px">⭐</div>
      <div style="flex:1"><div style="font-size:12px;font-weight:700;color:var(--text-1)">구매품질기획팀</div><div style="font-size:9px;color:var(--text-4)">질문 18 · 답변 44 · 채택 9</div></div>
      <div style="text-align:right"><div style="font-size:12px;font-weight:800;color:var(--text-2);font-family:Outfit">71</div><div style="font-size:8px;color:var(--text-4)">활동pts</div></div>
      <div style="width:64px;height:7px;background:var(--bg-4);border-radius:3px;overflow:hidden"><div style="height:100%;width:39%;background:var(--text-4);border-radius:3px"></div></div>
    </div>
  </div>
  <div style="font-size:9px;color:var(--text-4);margin-top:7px;text-align:center">💡 팀 활용도 높을수록 AI 지식 DB 품질이 향상됩니다</div>
</div>

</div>

<!-- My Level -->
<div id="ct-lv" style="display:none">

<!-- ① 현재 레벨 히어로 카드 -->
<div style="background:linear-gradient(135deg,#0D1B3E 0%,#1a2744 60%,#243560 100%);border:2px solid rgba(75,142,240,.35);border-radius:16px;padding:20px 18px;margin-bottom:12px;position:relative;overflow:hidden">
  <!-- 배경 장식 -->
  <div style="position:absolute;right:-10px;top:-10px;font-size:100px;opacity:.06;pointer-events:none;user-select:none;line-height:1">🔧</div>
  <!-- 레벨 + 이름 -->
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
    <div style="width:64px;height:64px;border-radius:16px;background:rgba(75,142,240,.18);border:2px solid rgba(75,142,240,.4);display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0;box-shadow:0 4px 16px rgba(75,142,240,.25)">🔧</div>
    <div style="flex:1">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
        <span style="background:rgba(189,195,199,.25);color:#BDC3C7;font-size:11px;font-weight:900;padding:3px 10px;border-radius:999px;letter-spacing:.3px">Lv.14</span>
        <span style="font-size:16px;font-weight:800;color:#E4E7ED">부품 탐험가</span>
      </div>
      <div style="font-size:11px;color:rgba(164,174,196,.7)">다음: <b style="color:#BDC3C7">Lv.15 신입 바이어</b>까지 <span style="color:#4B8EF0;font-weight:700">−240pt</span></div>
    </div>
  </div>
  <!-- 큰 프로그레스바 -->
  <div style="margin-bottom:8px">
    <div style="display:flex;justify-content:space-between;font-size:10px;color:rgba(164,174,196,.6);margin-bottom:5px">
      <span>Lv.14 진행도</span><span style="color:#4B8EF0;font-weight:700">1,720 / 1,960pt</span>
    </div>
    <div style="height:12px;background:rgba(255,255,255,.08);border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,.06)">
      <div style="height:100%;width:62%;border-radius:6px;background:linear-gradient(90deg,#4B8EF0,#6BB3FF);transition:width .8s ease;box-shadow:0 0 10px rgba(75,142,240,.5)"></div>
    </div>
    <div style="font-size:9px;color:rgba(164,174,196,.5);margin-top:4px;text-align:right">전체 누적: 1,720pt · Lv.100 달성 시 ⚡ VAATZ 챔피언</div>
  </div>
  <!-- 스탯 3개 -->
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:2px">
    <div style="text-align:center;background:rgba(255,255,255,.06);border-radius:8px;padding:8px 4px">
      <div style="font-size:22px;font-weight:800;color:#E4E7ED;font-family:Outfit,sans-serif;line-height:1.1">34</div>
      <div style="font-size:9px;color:rgba(164,174,196,.6);margin-top:2px">작성 답변</div>
    </div>
    <div style="text-align:center;background:rgba(75,142,240,.12);border-radius:8px;padding:8px 4px;border:1px solid rgba(75,142,240,.2)">
      <div style="font-size:22px;font-weight:800;color:#4B8EF0;font-family:Outfit,sans-serif;line-height:1.1">10</div>
      <div style="font-size:9px;color:rgba(164,174,196,.6);margin-top:2px">채택 🎯</div>
    </div>
    <div style="text-align:center;background:rgba(255,255,255,.06);border-radius:8px;padding:8px 4px">
      <div style="font-size:22px;font-weight:800;color:#E4E7ED;font-family:Outfit,sans-serif;line-height:1.1">127</div>
      <div style="font-size:9px;color:rgba(164,174,196,.6);margin-top:2px">받은 추천</div>
    </div>
  </div>
</div>

<!-- ② 오늘의 미션 / 연속 달성 스트릭 -->
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
  <div style="background:var(--bg-2);border:1px solid var(--border-2);border-radius:12px;padding:12px">
    <div style="font-size:10px;font-weight:700;color:var(--text-2);margin-bottom:8px;display:flex;align-items:center;gap:5px">🔥 연속 활동 스트릭</div>
    <div style="display:flex;gap:4px;margin-bottom:6px">
      <div style="flex:1;height:28px;background:var(--accent-dim);border:1px solid var(--accent-bd);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px">월</div>
      <div style="flex:1;height:28px;background:var(--accent-dim);border:1px solid var(--accent-bd);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px">화</div>
      <div style="flex:1;height:28px;background:var(--accent-dim);border:1px solid var(--accent-bd);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px">수</div>
      <div style="flex:1;height:28px;background:var(--accent-dim);border:1px solid var(--accent-bd);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px">목</div>
      <div style="flex:1;height:28px;background:var(--accent-dim);border:1px solid var(--accent-bd);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px">금</div>
      <div style="flex:1;height:28px;background:var(--bg-4);border:1px solid var(--border-1);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;opacity:.5">토</div>
      <div style="flex:1;height:28px;background:var(--bg-4);border:1px solid var(--border-1);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;opacity:.5">일</div>
    </div>
    <div style="font-size:11px;font-weight:700;color:var(--accent)">🔥 5일 연속 활동 중!</div>
    <div style="font-size:9px;color:var(--text-4);margin-top:1px">7일 달성 시 +50pt 보너스</div>
  </div>
  <div style="background:var(--bg-2);border:1px solid var(--border-2);border-radius:12px;padding:12px">
    <div style="font-size:10px;font-weight:700;color:var(--text-2);margin-bottom:8px">🎯 오늘의 미션</div>
    <div style="display:flex;flex-direction:column;gap:5px">
      <div style="display:flex;align-items:center;gap:6px;font-size:10px">
        <div style="width:14px;height:14px;border-radius:4px;background:var(--g-dim);border:1px solid var(--g);display:flex;align-items:center;justify-content:center;font-size:8px;color:var(--g);flex-shrink:0">✓</div>
        <span style="color:var(--text-3);text-decoration:line-through">답변 1개 작성</span>
        <span style="margin-left:auto;color:var(--g);font-size:9px;font-weight:700">+5pt</span>
      </div>
      <div style="display:flex;align-items:center;gap:6px;font-size:10px">
        <div style="width:14px;height:14px;border-radius:4px;background:var(--g-dim);border:1px solid var(--g);display:flex;align-items:center;justify-content:center;font-size:8px;color:var(--g);flex-shrink:0">✓</div>
        <span style="color:var(--text-3);text-decoration:line-through">추천 3회 하기</span>
        <span style="margin-left:auto;color:var(--g);font-size:9px;font-weight:700">+3pt</span>
      </div>
      <div style="display:flex;align-items:center;gap:6px;font-size:10px">
        <div style="width:14px;height:14px;border-radius:4px;background:var(--bg-4);border:1px solid var(--border-2);flex-shrink:0"></div>
        <span style="color:var(--text-2)">질문 1개 작성</span>
        <span style="margin-left:auto;color:var(--accent);font-size:9px;font-weight:700">+3pt</span>
      </div>
    </div>
  </div>
</div>

<!-- ③ 자동차 레벨 로드맵 (2열, 더 크게) -->
<div style="font-size:11px;font-weight:700;color:var(--text-1);margin-bottom:8px;display:flex;align-items:center;justify-content:space-between">
  <span>🚗 자동차 레벨 로드맵</span>
  <span style="font-size:9px;font-weight:400;color:var(--text-4)">Lv.1~100 · 21단계</span>
</div>
<div style="max-height:280px;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:10px;padding-right:2px">
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">🐣</span><div><div style="font-size:10px;font-weight:700;color:#D8DEE4">Lv.1~4</div><div style="font-size:9px;color:var(--text-4)">견습 바이어</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">🌱</span><div><div style="font-size:10px;font-weight:700;color:#CED4DA">Lv.5~9</div><div style="font-size:9px;color:var(--text-4)">구매 새싹</div></div></div>
  <div style="background:var(--accent-dim);border:2px solid var(--accent-bd);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px;grid-column:span 2"><span style="font-size:26px">🔧</span><div><div style="font-size:11px;font-weight:800;color:var(--accent)">Lv.10~14 ← 현재 위치</div><div style="font-size:10px;color:var(--accent);opacity:.8">부품 탐험가</div></div><div style="margin-left:auto;background:var(--accent);color:#fff;font-size:9px;font-weight:700;padding:3px 8px;border-radius:99px">NOW</div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">📝</span><div><div style="font-size:10px;font-weight:700;color:#ABB4BD">Lv.15~19</div><div style="font-size:9px;color:var(--text-4)">신입 바이어</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">🔑</span><div><div style="font-size:10px;font-weight:700;color:#95A5A6">Lv.20~24</div><div style="font-size:9px;color:var(--text-4)">구매 어시스턴트</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">🚙</span><div><div style="font-size:10px;font-weight:700;color:#6C757D">Lv.25~29</div><div style="font-size:9px;color:var(--text-4)">주임 바이어</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">📋</span><div><div style="font-size:10px;font-weight:700;color:#7F8C8D">Lv.30~34</div><div style="font-size:9px;color:var(--text-4)">계약 매니저</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">🔍</span><div><div style="font-size:10px;font-weight:700;color:#D35400">Lv.35~39</div><div style="font-size:9px;color:var(--text-4)">협력사 탐정</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">🏷️</span><div><div style="font-size:10px;font-weight:700;color:#E67E22">Lv.40~44</div><div style="font-size:9px;color:var(--text-4)">단가 분석가</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">📦</span><div><div style="font-size:10px;font-weight:700;color:#138D75">Lv.45~49</div><div style="font-size:9px;color:var(--text-4)">부품 스페셜리스트</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">🔩</span><div><div style="font-size:10px;font-weight:700;color:#16A085">Lv.50~54</div><div style="font-size:9px;color:var(--text-4)">공급망 수호자</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">⚙️</span><div><div style="font-size:10px;font-weight:700;color:#3498DB">Lv.55~59</div><div style="font-size:9px;color:var(--text-4)">선임 바이어</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">🚀</span><div><div style="font-size:10px;font-weight:700;color:#2ECC71">Lv.60~64</div><div style="font-size:9px;color:var(--text-4)">구매 에이스</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">📊</span><div><div style="font-size:10px;font-weight:700;color:#27AE60">Lv.65~69</div><div style="font-size:9px;color:var(--text-4)">입찰 전략가</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">🤝</span><div><div style="font-size:10px;font-weight:700;color:#1ABC9C">Lv.70~74</div><div style="font-size:9px;color:var(--text-4)">협력사 총지휘관</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">🌐</span><div><div style="font-size:10px;font-weight:700;color:#8E44AD">Lv.80~84</div><div style="font-size:9px;color:var(--text-4)">글로벌 수석바이어</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">🏭</span><div><div style="font-size:10px;font-weight:700;color:#9B59B6">Lv.85~89</div><div style="font-size:9px;color:var(--text-4)">공급망 아키텍트</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">🚗</span><div><div style="font-size:10px;font-weight:700;color:#E74C3C">Lv.90~94</div><div style="font-size:9px;color:var(--text-4)">원가혁신 아이콘</div></div></div>
  <div style="background:var(--bg-3);border:1px solid var(--border-1);border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px"><span style="font-size:22px">🏎️</span><div><div style="font-size:10px;font-weight:700;color:#FF6B35">Lv.95~99</div><div style="font-size:9px;color:var(--text-4)">F1 구매 파일럿</div></div></div>
  <div style="background:linear-gradient(135deg,#2A1F00,#1A1200);border:2px solid #E8A000;border-radius:9px;padding:8px 10px;display:flex;align-items:center;gap:8px;grid-column:span 2"><span style="font-size:26px">⚡</span><div><div style="font-size:11px;font-weight:900;color:#E8A000">Lv.100 · VAATZ 챔피언</div><div style="font-size:9px;color:#FFD060">최고 등급 달성 · 특별 칭호 + 아이템 지급</div></div></div>
</div>

<!-- ④ 획득 배지 + 포인트 현황 -->
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
  <div style="background:var(--bg-2);border:1px solid var(--border-2);border-radius:10px;padding:10px">
    <div style="font-size:10px;font-weight:700;color:var(--text-2);margin-bottom:6px">🏅 획득 배지 <span style="font-weight:400;color:var(--text-4)">4/12</span></div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px">
      <div style="text-align:center" title="답변 채택 10회"><div style="font-size:22px">🏆</div><div style="font-size:7px;color:var(--text-4)">채택왕</div></div>
      <div style="text-align:center" title="질문 100개 작성"><div style="font-size:22px">📋</div><div style="font-size:7px;color:var(--text-4)">질문러</div></div>
      <div style="text-align:center" title="추천 100개 달성"><div style="font-size:22px">⭐</div><div style="font-size:7px;color:var(--text-4)">인기인</div></div>
      <div style="text-align:center" title="AI 학습 반영 1회"><div style="font-size:22px">🤖</div><div style="font-size:7px;color:var(--text-4)">AI기여</div></div>
      <div style="text-align:center;opacity:.25" title="미달성"><div style="font-size:22px">🔒</div><div style="font-size:7px;color:var(--text-4)">미달성</div></div>
      <div style="text-align:center;opacity:.25" title="미달성"><div style="font-size:22px">🔒</div><div style="font-size:7px;color:var(--text-4)">미달성</div></div>
      <div style="text-align:center;opacity:.25" title="미달성"><div style="font-size:22px">🔒</div><div style="font-size:7px;color:var(--text-4)">미달성</div></div>
      <div style="text-align:center;opacity:.25" title="미달성"><div style="font-size:22px">🔒</div><div style="font-size:7px;color:var(--text-4)">미달성</div></div>
    </div>
  </div>
  <div style="background:var(--bg-2);border:1px solid var(--border-2);border-radius:10px;padding:10px">
    <div style="font-size:10px;font-weight:700;color:var(--text-2);margin-bottom:6px">💰 포인트 현황</div>
    <div style="display:flex;flex-direction:column;gap:5px">
      <div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--bg-3);border-radius:6px;font-size:10px"><span style="color:var(--text-2)">총 적립</span><span style="font-weight:700;color:var(--text-1);font-family:Outfit">1,720</span></div>
      <div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--bg-3);border-radius:6px;font-size:10px"><span style="color:var(--text-2)">사용 가능</span><span style="font-weight:700;color:var(--g);font-family:Outfit">520</span></div>
      <div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--bg-3);border-radius:6px;font-size:10px"><span style="color:var(--text-2)">사용됨</span><span style="font-weight:700;color:var(--text-3);font-family:Outfit">1,200</span></div>
    </div>
  </div>
</div>

<!-- ⑤ 포인트 획득 방법 -->
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;padding:10px">
  <div style="font-size:10px;font-weight:700;color:var(--text-2);margin-bottom:6px">💡 포인트 획득 방법</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:10px">
    <div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--bg-3);border-radius:5px"><span style="color:var(--text-2)">질문 작성</span><span style="font-weight:700;color:var(--accent)">+3pt</span></div>
    <div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--bg-3);border-radius:5px"><span style="color:var(--text-2)">답변 작성</span><span style="font-weight:700;color:var(--accent)">+5pt</span></div>
    <div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--bg-3);border-radius:5px"><span style="color:var(--text-2)">추천 받기</span><span style="font-weight:700;color:var(--accent)">+3pt</span></div>
    <div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--bg-3);border-radius:5px"><span style="color:var(--text-2)">답변 채택</span><span style="font-weight:700;color:var(--g)">+30pt</span></div>
    <div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--bg-3);border-radius:5px"><span style="color:var(--text-2)">AI 학습 반영</span><span style="font-weight:700;color:var(--a)">+100pt</span></div>
    <div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--bg-3);border-radius:5px"><span style="color:var(--text-2)">업로드 승인</span><span style="font-weight:700;color:var(--accent)">+20pt</span></div>
  </div>
  <div style="margin-top:6px;font-size:8px;color:var(--text-4)">⚠️ 일일 획득 상한 80pt · 어뷰징 시 미지급</div>
</div>

</div>

<!-- Character — 싸이월드 감성 미니룸 -->
<div id="ct-char" style="display:none">

<!-- ① 미니룸 + 캐릭터 스테이지 -->
<div id="charRoom" style="position:relative;width:100%;height:220px;border-radius:12px;overflow:hidden;background:linear-gradient(180deg,#1a2744 0%,#243560 50%,#1E3A5F 100%);margin-bottom:10px;cursor:pointer" title="클릭하여 배경 변경">
  <!-- 배경 데코 레이어 (§17 JS가 덮어씀) -->
  <div class="v33-char-bg" style="position:absolute;inset:0;background:linear-gradient(180deg,#1a2744,#243560)">
    <span class="v33-bg-emoji" style="position:absolute;bottom:8px;right:10px;font-size:36px;opacity:.25">🏭</span>
    <!-- 미니룸 소품 데코 (싸이월드 감성) -->
    <span style="position:absolute;left:8px;bottom:10px;font-size:22px;opacity:.55">🛋️</span>
    <span style="position:absolute;left:36px;bottom:8px;font-size:18px;opacity:.45">🌿</span>
    <span style="position:absolute;right:36px;bottom:8px;font-size:20px;opacity:.50">🖥️</span>
    <span style="position:absolute;left:12px;top:14px;font-size:16px;opacity:.35">🎵</span>
    <span style="position:absolute;right:14px;top:12px;font-size:16px;opacity:.35">⭐</span>
    <!-- 창문 효과 -->
    <div style="position:absolute;top:10px;left:50%;transform:translateX(-50%);width:60px;height:36px;border:2px solid rgba(255,255,255,.15);border-radius:6px;background:rgba(100,160,255,.08);display:flex;align-items:center;justify-content:center;font-size:18px;opacity:.6">🌙</div>
  </div>
  <!-- 캐릭터 fg (§13 renderV33Character 가 채움) -->
  <div class="v33-char-fg" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:14px">
    <div class="v33-char-figure" style="position:relative;display:inline-flex;align-items:flex-end;justify-content:center">
      <span class="v33-char-main" style="font-size:56px;line-height:1;animation:charFloat 3s ease-in-out infinite;display:block">🐧</span>
    </div>
    <div class="v33-char-nick" id="charNick" style="font-size:12px;font-weight:700;color:#fff;text-shadow:0 1px 6px rgba(0,0,0,.7);margin-top:4px">프로큐어히어로</div>
    <div class="v33-char-lv" style="font-size:10px;color:rgba(255,255,255,.75);margin-top:2px">Lv.14 · 1,720pt</div>
  </div>
</div>

<!-- ② 캐릭터 선택 + 커스터마이징 행 -->
<div style="display:flex;gap:8px;margin-bottom:10px">
  <!-- 캐릭터 픽커 -->
  <div style="flex:1;background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;padding:10px">
    <div style="font-size:10px;font-weight:700;color:var(--text-3);letter-spacing:0.02em;margin-bottom:7px">🎨 캐릭터 선택</div>
    <div class="v33-char-picker" style="display:grid;grid-template-columns:repeat(6,1fr);gap:5px">
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
      <button class="char-sel" onclick="pickChar(this,'🐧')" title="펭귄 바이어">🐧</button>
      <button class="char-sel" onclick="pickChar(this,'🦅')" title="독수리 CPO">🦅</button>
    </div>
  </div>
  <!-- 포인트 미니 -->
  <div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;padding:10px;min-width:84px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px">
    <div style="font-family:Outfit;font-size:20px;font-weight:700;color:var(--accent);line-height:1">520</div>
    <div style="font-size:9.5px;color:var(--text-4);line-height:1.2;text-align:center">사용 가능 pt</div>
    <button style="font-size:9.5px;padding:4px 10px;background:var(--accent);color:#fff;border:none;border-radius:6px;cursor:pointer;font-family:inherit;font-weight:600;white-space:nowrap" onclick="if(window.commTab)commTab(document.querySelectorAll('.comm-tab')[4],'ct-shop')">🛒 상점</button>
  </div>
</div>

<!-- ③ 인벤토리 (카테고리 탭 포함) -->
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;padding:8px;margin-bottom:8px">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
    <div style="font-size:10.5px;font-weight:700;color:var(--text-2);letter-spacing:-0.01em">🎒 내 인벤토리</div>
    <div id="invCatTabs" style="display:flex;gap:4px">
      <button class="v17-cat on" onclick="v17Cat(this,'all')" style="font-size:9.5px;padding:3px 9px;border-radius:999px;border:1px solid var(--accent);background:var(--accent);color:#fff;cursor:pointer;font-family:inherit;line-height:1.4">전체</button>
      <button class="v17-cat" onclick="v17Cat(this,'hat')" style="font-size:9.5px;padding:3px 9px;border-radius:999px;border:1px solid var(--border-2);background:transparent;color:var(--text-3);cursor:pointer;font-family:inherit;line-height:1.4">🎩 모자</button>
      <button class="v17-cat" onclick="v17Cat(this,'pet')" style="font-size:9.5px;padding:3px 9px;border-radius:999px;border:1px solid var(--border-2);background:transparent;color:var(--text-3);cursor:pointer;font-family:inherit;line-height:1.4">🐾 펫</button>
      <button class="v17-cat" onclick="v17Cat(this,'fx')" style="font-size:9.5px;padding:3px 9px;border-radius:999px;border:1px solid var(--border-2);background:transparent;color:var(--text-3);cursor:pointer;font-family:inherit;line-height:1.4">✨ 이펙트</button>
      <button class="v17-cat" onclick="v17Cat(this,'bg')" style="font-size:9.5px;padding:3px 9px;border-radius:999px;border:1px solid var(--border-2);background:transparent;color:var(--text-3);cursor:pointer;font-family:inherit;line-height:1.4">🖼️ 배경</button>
    </div>
  </div>
  <div class="inv-grid" id="invGrid" style="display:grid;grid-template-columns:repeat(6,1fr);gap:5px">
    <div class="inv-slot" data-cat="hat" title="신사 모자" onclick="v33EquipItem(this,'🎩')">🎩</div>
    <div class="inv-slot" data-cat="hat" title="왕관" onclick="v33EquipItem(this,'👑')">👑</div>
    <div class="inv-slot" data-cat="hat" title="학사모" onclick="v33EquipItem(this,'🎓')">🎓</div>
    <div class="inv-slot" data-cat="hat" title="안전모" onclick="v33EquipItem(this,'⛑️')">⛑️</div>
    <div class="inv-slot" data-cat="pet" title="고양이 친구" onclick="v33EquipItem(this,'🐱')">🐱</div>
    <div class="inv-slot" data-cat="pet" title="드래곤" onclick="v33EquipItem(this,'🐉')">🐉</div>
    <div class="inv-slot" data-cat="pet" title="강아지" onclick="v33EquipItem(this,'🐶')">🐶</div>
    <div class="inv-slot" data-cat="pet" title="로봇" onclick="v33EquipItem(this,'🤖')">🤖</div>
    <div class="inv-slot" data-cat="fx" title="별빛 이펙트" onclick="v33EquipItem(this,'⭐')">⭐</div>
    <div class="inv-slot" data-cat="fx" title="불꽃 오라" onclick="v33EquipItem(this,'🔥')">🔥</div>
    <div class="inv-slot" data-cat="fx" title="다이아 이펙트" onclick="v33EquipItem(this,'💎')">💎</div>
    <div class="inv-slot" data-cat="fx" title="번개 이펙트" onclick="v33EquipItem(this,'⚡')">⚡</div>
    <div class="inv-slot" data-cat="fx" title="무지개" onclick="v33EquipItem(this,'🌈')">🌈</div>
    <div class="inv-slot" data-cat="bg" title="파도 배경" onclick="v33EquipItem(this,'bg-ocean')">🌊</div>
    <div class="inv-slot" data-cat="bg" title="벚꽃 배경" onclick="v33EquipItem(this,'bg-cherry')">🌸</div>
    <div class="inv-slot" data-cat="bg" title="야간 도시" onclick="v33EquipItem(this,'bg-city')">🌃</div>
    <div class="inv-slot" data-cat="bg" title="오피스 배경" onclick="v33EquipItem(this,'bg-office')">🏢</div>
    <div class="inv-slot" data-cat="bg" title="공장 배경" onclick="v33EquipItem(this,'bg-factory')">🏭</div>
    <div class="inv-slot empty"></div>
    <div class="inv-slot empty"></div>
  </div>
  <div style="font-size:9.5px;color:var(--text-4);margin-top:7px;line-height:1.45">💡 클릭하면 즉시 장착 · 상점에서 더 많은 아이템 구매 가능</div>
</div>

<!-- ④ 미니룸 소품 꾸미기 (싸이월드 핵심!) -->
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;padding:8px;margin-bottom:8px">
  <div style="font-size:10.5px;font-weight:700;color:var(--text-2);letter-spacing:-0.01em;margin-bottom:8px">🛋️ 미니룸 소품 <span style="font-size:9.5px;font-weight:400;color:var(--text-4)">방에 배치되는 인테리어 아이템</span></div>
  <div style="display:grid;grid-template-columns:repeat(8,1fr);gap:4px" id="roomDecoGrid">
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🛋️')" title="소파" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🛋️</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🖥️')" title="컴퓨터" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🖥️</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🌿')" title="화분" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🌿</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🪴')" title="관엽식물" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🪴</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🎵')" title="음악노트" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🎵</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🏆')" title="트로피" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🏆</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'📚')" title="책장" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">📚</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'☕')" title="커피" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">☕</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🎮')" title="게임기" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🎮</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🚗')" title="미니카" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🚗</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🏎️')" title="레이싱카" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🏎️</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🪑')" title="의자" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🪑</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🖼️')" title="그림" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🖼️</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🎸')" title="기타" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🎸</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🌙')" title="달" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🌙</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'❄️')" title="눈꽃" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">❄️</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🌊')" title="파도" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🌊</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🎪')" title="서커스" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🎪</button>
    <button class="room-deco-btn" onclick="v17PlaceDeco(this,'🦋')" title="나비" style="font-size:18px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;transition:.1s">🦋</button>
    <button class="room-deco-btn v17-clear-btn" onclick="v17ClearDeco()" title="소품 초기화" style="font-size:14px;background:var(--bg-3);border:1px solid var(--border-1);border-radius:6px;padding:4px;cursor:pointer;color:var(--text-4)">✕</button>
  </div>
</div>

<!-- ⑤ 포인트 현황 (컴팩트) -->
<div style="display:flex;gap:6px;margin-bottom:10px">
  <div style="flex:1;background:var(--bg-2);border:1px solid var(--border-1);border-radius:8px;padding:10px 8px;text-align:center"><div style="font-family:Outfit;font-size:18px;font-weight:700;color:var(--accent);line-height:1.2">1,720</div><div style="font-size:9px;color:var(--text-4);margin-top:3px">총 적립</div></div>
  <div style="flex:1;background:var(--bg-2);border:1px solid var(--border-1);border-radius:8px;padding:10px 8px;text-align:center"><div style="font-family:Outfit;font-size:18px;font-weight:700;color:var(--g);line-height:1.2">520</div><div style="font-size:9px;color:var(--text-4);margin-top:3px">사용 가능</div></div>
  <div style="flex:1;background:var(--bg-2);border:1px solid var(--border-1);border-radius:8px;padding:10px 8px;text-align:center"><div style="font-family:Outfit;font-size:18px;font-weight:700;color:var(--a);line-height:1.2">1,200</div><div style="font-size:9px;color:var(--text-4);margin-top:3px">사용함</div></div>
</div>

<!-- ⑥ 포인트 획득 방법 (컴팩트) -->
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:10px;padding:10px">
  <div style="font-size:10.5px;font-weight:700;color:var(--text-2);letter-spacing:-0.01em;margin-bottom:8px">💰 포인트 획득 방법</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;font-size:10.5px">
    <div style="display:flex;justify-content:space-between;align-items:center;padding:5px 10px;background:var(--bg-3);border-radius:6px"><span style="color:var(--text-2)">질문 작성</span><span style="font-weight:700;color:var(--accent)">+3pt</span></div>
    <div style="display:flex;justify-content:space-between;align-items:center;padding:5px 10px;background:var(--bg-3);border-radius:6px"><span style="color:var(--text-2)">답변 작성</span><span style="font-weight:700;color:var(--accent)">+5pt</span></div>
    <div style="display:flex;justify-content:space-between;align-items:center;padding:5px 10px;background:var(--bg-3);border-radius:6px"><span style="color:var(--text-2)">추천 받기</span><span style="font-weight:700;color:var(--accent)">+3pt</span></div>
    <div style="display:flex;justify-content:space-between;align-items:center;padding:5px 10px;background:var(--bg-3);border-radius:6px"><span style="color:var(--text-2)">답변 채택</span><span style="font-weight:700;color:var(--g)">+30pt</span></div>
    <div style="display:flex;justify-content:space-between;align-items:center;padding:5px 10px;background:var(--bg-3);border-radius:6px"><span style="color:var(--text-2)">AI 학습 반영</span><span style="font-weight:700;color:var(--a)">+100pt</span></div>
    <div style="display:flex;justify-content:space-between;align-items:center;padding:5px 10px;background:var(--bg-3);border-radius:6px"><span style="color:var(--text-2)">업로드 승인</span><span style="font-weight:700;color:var(--accent)">+20pt</span></div>
  </div>
  <div style="margin-top:7px;font-size:9.5px;color:var(--text-4);line-height:1.45">⚠️ 일일 획득 상한 80pt · 어뷰징 시 미지급</div>
</div>

</div>

<!-- Shop — Expanded v2 with full accessories + backgrounds -->
<div id="ct-shop" style="display:none">
<div style="display:flex;gap:12px;margin-bottom:14px">
  <!-- 미니 캐릭터 프리뷰 -->
  <div style="flex-shrink:0;width:148px;background:linear-gradient(180deg,var(--bg-3),var(--bg-2));border:1px solid var(--border-2);border-radius:14px;padding:14px 10px 10px;display:flex;flex-direction:column;align-items:center;gap:8px">
    <div id="shopCharPreview" style="font-size:76px;line-height:1;animation:charFloat 3s ease-in-out infinite;filter:drop-shadow(0 4px 12px rgba(75,142,240,0.3))">🐧</div>
    <div style="font-size:9px;color:var(--text-4);font-weight:600;letter-spacing:0.5px;text-transform:uppercase">미리보기</div>
    <div style="font-size:10px;font-weight:600;color:var(--accent);font-family:Outfit">💰 520pt</div>
    <button style="font-size:9px;padding:4px 8px;background:var(--bg-3);border:1px solid var(--border-2);border-radius:6px;color:var(--text-2);cursor:pointer;font-family:inherit" onclick="if(window.commTab)commTab(document.querySelectorAll('.comm-tab')[3],'ct-char')">👤 캐릭터 꾸미기</button>
  </div>
  <!-- 헤더 텍스트 -->
  <div style="flex:1">
    <div style="font-size:14px;font-weight:700;margin-bottom:4px">🛒 캐릭터 상점</div>
    <div style="font-size:10.5px;color:var(--text-3);line-height:1.6;background:var(--bg-2);padding:8px 12px;border-radius:8px;border:1px solid var(--border-1)">💡 아이템을 구매하면 <b style="color:var(--text-2)">👤 캐릭터</b> 탭 인벤토리에 추가됩니다. 구매 후 캐릭터 탭에서 클릭하면 즉시 장착!</div>
  </div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">🎩 모자 · 헤어</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item owned"><div class="shop-ic">🎩</div><div class="shop-nm">신사 모자</div><div class="shop-pr">✓ 보유</div></div>
<div class="shop-item" onclick="buyItem(this,'⛑️','안전모',100)"><div class="shop-ic">⛑️</div><div class="shop-nm">안전모</div><div class="shop-pr">100pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🎓','학사모',200)"><div class="shop-ic">🎓</div><div class="shop-nm">학사모</div><div class="shop-pr">200pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🪖','밀리터리캡',180)"><div class="shop-ic">🪖</div><div class="shop-nm">밀리터리캡</div><div class="shop-pr">180pt</div></div>
<div class="shop-item" onclick="buyItem(this,'👒','밀짚모자',150)"><div class="shop-ic">👒</div><div class="shop-nm">밀짚모자</div><div class="shop-pr">150pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🎀','리본머리핀',120)"><div class="shop-ic">🎀</div><div class="shop-nm">리본핀</div><div class="shop-pr">120pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🎅','산타모자',300)"><div class="shop-ic">🎅</div><div class="shop-nm">산타모자</div><div class="shop-pr">300pt</div></div>
<div class="shop-item" onclick="buyItem(this,'👑','왕관',800)"><div class="shop-ic">👑</div><div class="shop-nm">왕관</div><div class="shop-pr">800pt</div><div class="shop-lv-req">Lv.4+</div></div>
<div class="shop-item" onclick="buyItem(this,'🏆','트로피관',1500)"><div class="shop-ic">🏆</div><div class="shop-nm">트로피관</div><div class="shop-pr">1,500pt</div><div class="shop-lv-req">Lv.5+</div></div>
<div class="shop-item" onclick="buyItem(this,'✨','별왕관',2500)"><div class="shop-ic">✨</div><div class="shop-nm">별왕관</div><div class="shop-pr">2,500pt</div><div class="shop-lv-req">CPO</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">👓 얼굴 악세서리</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item" onclick="buyItem(this,'🕶️','선글라스',150)"><div class="shop-ic">🕶️</div><div class="shop-nm">선글라스</div><div class="shop-pr">150pt</div></div>
<div class="shop-item" onclick="buyItem(this,'👓','뿔테안경',120)"><div class="shop-ic">👓</div><div class="shop-nm">뿔테안경</div><div class="shop-pr">120pt</div></div>
<div class="shop-item" onclick="buyItem(this,'😷','마스크',80)"><div class="shop-ic">😷</div><div class="shop-nm">마스크</div><div class="shop-pr">80pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🎭','가면',300)"><div class="shop-ic">🎭</div><div class="shop-nm">파티가면</div><div class="shop-pr">300pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🤿','스쿠버마스크',400)"><div class="shop-ic">🤿</div><div class="shop-nm">스쿠버마스크</div><div class="shop-pr">400pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🥽','고글',200)"><div class="shop-ic">🥽</div><div class="shop-nm">안전고글</div><div class="shop-pr">200pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🤓','똑똑안경',350)"><div class="shop-ic">🤓</div><div class="shop-nm">똑똑안경</div><div class="shop-pr">350pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🥸','변장세트',600)"><div class="shop-ic">🥸</div><div class="shop-nm">변장세트</div><div class="shop-pr">600pt</div><div class="shop-lv-req">Lv.3+</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">🐾 반려동물 · 사이드킥</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item" onclick="buyItem(this,'🐱','냥이',120)"><div class="shop-ic">🐱</div><div class="shop-nm">냥이</div><div class="shop-pr">120pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🐶','강아지',120)"><div class="shop-ic">🐶</div><div class="shop-nm">강아지</div><div class="shop-pr">120pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🐦','파랑새',150)"><div class="shop-ic">🐦</div><div class="shop-nm">파랑새</div><div class="shop-pr">150pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🐉','미니드래곤',400)"><div class="shop-ic">🐉</div><div class="shop-nm">미니드래곤</div><div class="shop-pr">400pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🦄','유니콘',500)"><div class="shop-ic">🦄</div><div class="shop-nm">유니콘</div><div class="shop-pr">500pt</div><div class="shop-lv-req">Lv.3+</div></div>
<div class="shop-item" onclick="buyItem(this,'🦋','나비',200)"><div class="shop-ic">🦋</div><div class="shop-nm">나비</div><div class="shop-pr">200pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🐢','장수거북',180)"><div class="shop-ic">🐢</div><div class="shop-nm">장수거북</div><div class="shop-pr">180pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🤖','AI로봇',700)"><div class="shop-ic">🤖</div><div class="shop-nm">AI로봇</div><div class="shop-pr">700pt</div><div class="shop-lv-req">Lv.4+</div></div>
<div class="shop-item" onclick="buyItem(this,'👾','픽셀몬',1000)"><div class="shop-ic">👾</div><div class="shop-nm">픽셀몬</div><div class="shop-pr">1,000pt</div><div class="shop-lv-req">Lv.5+</div></div>
<div class="shop-item" onclick="buyItem(this,'🐲','황금룡',2000)"><div class="shop-ic">🐲</div><div class="shop-nm">황금룡</div><div class="shop-pr">2,000pt</div><div class="shop-lv-req">CPO</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">🎒 데스크 소품</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item" onclick="buyItem(this,'🎧','에어팟맥스',200)"><div class="shop-ic">🎧</div><div class="shop-nm">에어팟맥스</div><div class="shop-pr">200pt</div></div>
<div class="shop-item" onclick="buyItem(this,'📱','Z플립',300)"><div class="shop-ic">📱</div><div class="shop-nm">Z플립</div><div class="shop-pr">300pt</div></div>
<div class="shop-item" onclick="buyItem(this,'💻','노트북',400)"><div class="shop-ic">💻</div><div class="shop-nm">노트북</div><div class="shop-pr">400pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🖊️','명품펜',150)"><div class="shop-ic">🖊️</div><div class="shop-nm">명품펜</div><div class="shop-pr">150pt</div></div>
<div class="shop-item" onclick="buyItem(this,'☕','커피잔',80)"><div class="shop-ic">☕</div><div class="shop-nm">아메리카노</div><div class="shop-pr">80pt</div></div>
<div class="shop-item" onclick="buyItem(this,'📊','분석차트',250)"><div class="shop-ic">📊</div><div class="shop-nm">분석차트</div><div class="shop-pr">250pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🏌️','골프채',900)"><div class="shop-ic">🏌️</div><div class="shop-nm">골프채</div><div class="shop-pr">900pt</div><div class="shop-lv-req">Lv.4+</div></div>
<div class="shop-item" onclick="buyItem(this,'🎸','일렉기타',700)"><div class="shop-ic">🎸</div><div class="shop-nm">일렉기타</div><div class="shop-pr">700pt</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">🌈 배경 테마</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item owned" data-bg="office" onclick="equipItem(this,'bg-office')"><div class="shop-ic">🏢</div><div class="shop-nm">오피스</div><div class="shop-pr">✓ 기본</div></div>
<div class="shop-item" data-bg="ocean" onclick="buyItem(this,'bg-ocean','오션블루',200)"><div class="shop-ic">🌊</div><div class="shop-nm">오션블루</div><div class="shop-pr">200pt</div></div>
<div class="shop-item" data-bg="cherry" onclick="buyItem(this,'bg-cherry','벚꽃길',250)"><div class="shop-ic">🌸</div><div class="shop-nm">벚꽃길</div><div class="shop-pr">250pt</div></div>
<div class="shop-item" data-bg="mountain" onclick="buyItem(this,'bg-mountain','설악산',300)"><div class="shop-ic">🏔️</div><div class="shop-nm">설악산</div><div class="shop-pr">300pt</div></div>
<div class="shop-item" data-bg="beach" onclick="buyItem(this,'bg-beach','해변',320)"><div class="shop-ic">🏖️</div><div class="shop-nm">해변</div><div class="shop-pr">320pt</div></div>
<div class="shop-item" data-bg="forest" onclick="buyItem(this,'bg-forest','비밀의숲',350)"><div class="shop-ic">🌿</div><div class="shop-nm">비밀의 숲</div><div class="shop-pr">350pt</div></div>
<div class="shop-item" data-bg="city" onclick="buyItem(this,'bg-city','야경도시',500)"><div class="shop-ic">🌃</div><div class="shop-nm">야경 도시</div><div class="shop-pr">500pt</div><div class="shop-lv-req">Lv.3+</div></div>
<div class="shop-item" data-bg="sunset" onclick="buyItem(this,'bg-sunset','노을',400)"><div class="shop-ic">🌅</div><div class="shop-nm">황금 노을</div><div class="shop-pr">400pt</div></div>
<div class="shop-item" data-bg="snow" onclick="buyItem(this,'bg-snow','설원',450)"><div class="shop-ic">❄️</div><div class="shop-nm">설원</div><div class="shop-pr">450pt</div></div>
<div class="shop-item" data-bg="night" onclick="buyItem(this,'bg-night','별밤',600)"><div class="shop-ic">🌌</div><div class="shop-nm">별밤</div><div class="shop-pr">600pt</div><div class="shop-lv-req">Lv.3+</div></div>
<div class="shop-item" data-bg="galaxy" onclick="buyItem(this,'bg-galaxy','은하수',900)"><div class="shop-ic">🪐</div><div class="shop-nm">은하수</div><div class="shop-pr">900pt</div><div class="shop-lv-req">Lv.4+</div></div>
<div class="shop-item" data-bg="factory" onclick="buyItem(this,'bg-factory','현장',250)"><div class="shop-ic">🏭</div><div class="shop-nm">현장</div><div class="shop-pr">250pt</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">✨ 이펙트 · 오라</div>
<div class="shop-grid" style="margin-bottom:14px">
<div class="shop-item" onclick="buyItem(this,'⭐','별반짝',100)"><div class="shop-ic">⭐</div><div class="shop-nm">별 반짝</div><div class="shop-pr">100pt</div></div>
<div class="shop-item" onclick="buyItem(this,'💫','유성',200)"><div class="shop-ic">💫</div><div class="shop-nm">유성</div><div class="shop-pr">200pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🔥','불꽃오라',400)"><div class="shop-ic">🔥</div><div class="shop-nm">불꽃 오라</div><div class="shop-pr">400pt</div><div class="shop-lv-req">Lv.3+</div></div>
<div class="shop-item" onclick="buyItem(this,'❄️','냉기오라',400)"><div class="shop-ic">❄️</div><div class="shop-nm">냉기 오라</div><div class="shop-pr">400pt</div><div class="shop-lv-req">Lv.3+</div></div>
<div class="shop-item" onclick="buyItem(this,'💎','다이아오라',600)"><div class="shop-ic">💎</div><div class="shop-nm">다이아</div><div class="shop-pr">600pt</div><div class="shop-lv-req">Lv.4+</div></div>
<div class="shop-item" onclick="buyItem(this,'🎵','음표',300)"><div class="shop-ic">🎵</div><div class="shop-nm">음표</div><div class="shop-pr">300pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🌟','후광',1000)"><div class="shop-ic">🌟</div><div class="shop-nm">후광</div><div class="shop-pr">1,000pt</div><div class="shop-lv-req">Lv.5+</div></div>
<div class="shop-item" onclick="buyItem(this,'⚡','번개',350)"><div class="shop-ic">⚡</div><div class="shop-nm">번개</div><div class="shop-pr">350pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🌈','무지개',500)"><div class="shop-ic">🌈</div><div class="shop-nm">무지개</div><div class="shop-pr">500pt</div><div class="shop-lv-req">Lv.3+</div></div>
<div class="shop-item" onclick="buyItem(this,'🎇','폭죽',600)"><div class="shop-ic">🎇</div><div class="shop-nm">폭죽</div><div class="shop-pr">600pt</div><div class="shop-lv-req">Lv.4+</div></div>
<div class="shop-item" onclick="buyItem(this,'☄️','혜성',800)"><div class="shop-ic">☄️</div><div class="shop-nm">혜성</div><div class="shop-pr">800pt</div><div class="shop-lv-req">Lv.5+</div></div>
<div class="shop-item" onclick="buyItem(this,'🌠','별똥별',1200)"><div class="shop-ic">🌠</div><div class="shop-nm">별똥별</div><div class="shop-pr">1,200pt</div><div class="shop-lv-req">CPO</div></div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-2);margin-bottom:6px">🚗 마이카 뱃지</div>
<div class="shop-grid">
<div class="shop-item owned"><div class="shop-ic">🚌</div><div class="shop-nm">통근버스</div><div class="shop-pr">✓ 기본</div></div>
<div class="shop-item" onclick="buyItem(this,'🛵','스쿠터',80)"><div class="shop-ic">🛵</div><div class="shop-nm">스쿠터</div><div class="shop-pr">80pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🚗','캐스퍼',200)"><div class="shop-ic">🚗</div><div class="shop-nm">캐스퍼</div><div class="shop-pr">200pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🚙','투싼',400)"><div class="shop-ic">🚙</div><div class="shop-nm">투싼</div><div class="shop-pr">400pt</div></div>
<div class="shop-item" onclick="buyItem(this,'🏎️','아이오닉6',700)"><div class="shop-ic">🏎️</div><div class="shop-nm">아이오닉 6</div><div class="shop-pr">700pt</div><div class="shop-lv-req">Lv.3+</div></div>
<div class="shop-item" onclick="buyItem(this,'🚘','팰리세이드',1200)"><div class="shop-ic">🚘</div><div class="shop-nm">팰리세이드</div><div class="shop-pr">1,200pt</div><div class="shop-lv-req">Lv.4+</div></div>
<div class="shop-item" onclick="buyItem(this,'🏁','G80',2000)"><div class="shop-ic">🏁</div><div class="shop-nm">제네시스 G80</div><div class="shop-pr">2,000pt</div><div class="shop-lv-req">Lv.5+</div></div>
<div class="shop-item" onclick="buyItem(this,'🥇','GV90',3500)"><div class="shop-ic">🥇</div><div class="shop-nm">GV90</div><div class="shop-pr">3,500pt</div><div class="shop-lv-req">CPO</div></div>
</div>
</div>
</div>
</div></div>`