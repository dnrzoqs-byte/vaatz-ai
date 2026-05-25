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
<div class="hof-month"><span style="font-size:13px;font-weight:600">2026년 2월</span><select><option>2026년 2월</option><option>2026년 1월</option><option>2025년 12월</option></select></div>
<div class="hof-podium">
<div class="hof-p silver"><div class="hof-rank">2nd</div><div class="hof-av hof-av-svg"><svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="hSkin2" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#FFE8CC"/><stop offset="100%" stop-color="#F0A870"/></radialGradient><linearGradient id="hBody2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4EAD7B"/><stop offset="100%" stop-color="#2E8A55"/></linearGradient></defs><rect x="22" y="60" width="36" height="28" rx="9" fill="url(#hBody2)"/><ellipse cx="40" cy="40" rx="22" ry="20" fill="url(#hSkin2)"/><path d="M18 36 Q18 14 40 13 Q62 14 62 36 Q58 20 40 19 Q22 20 18 36Z" fill="#2D3748"/><ellipse cx="30" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="50" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="30" cy="41" rx="5" ry="5.5" fill="#3A8A6E"/><ellipse cx="50" cy="41" rx="5" ry="5.5" fill="#3A8A6E"/><circle cx="31" cy="40" r="2.5" fill="#0A2810"/><circle cx="51" cy="40" r="2.5" fill="#0A2810"/><circle cx="32" cy="38.5" r="1.2" fill="white"/><circle cx="52" cy="38.5" r="1.2" fill="white"/><ellipse cx="22" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><ellipse cx="58" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><path d="M33 52 Q40 57 47 52" stroke="#C07040" stroke-width="1.8" fill="none" stroke-linecap="round"/><text x="40" y="8" text-anchor="middle" font-size="12">🥈</text></svg></div><div class="hof-name">품질지킴이</div><div class="hof-sub">수석바이어</div><div class="hof-score">2,840</div><div class="hof-label">포인트</div></div>
<div class="hof-p gold"><div class="hof-rank">🥇</div><div class="hof-av hof-av-svg"><svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="hSkin1" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#FFE8CC"/><stop offset="100%" stop-color="#F0A870"/></radialGradient><linearGradient id="hBody1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6BB3FF"/><stop offset="100%" stop-color="#2060C8"/></linearGradient></defs><rect x="22" y="60" width="36" height="28" rx="9" fill="url(#hBody1)"/><ellipse cx="40" cy="40" rx="22" ry="20" fill="url(#hSkin1)"/><path d="M18 36 Q18 14 40 13 Q62 14 62 36 Q58 20 40 19 Q22 20 18 36Z" fill="#8B4513"/><ellipse cx="30" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="50" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="30" cy="41" rx="5" ry="5.5" fill="#4A7FD4"/><ellipse cx="50" cy="41" rx="5" ry="5.5" fill="#4A7FD4"/><circle cx="31" cy="40" r="2.5" fill="#0A1840"/><circle cx="51" cy="40" r="2.5" fill="#0A1840"/><circle cx="32" cy="38.5" r="1.2" fill="white"/><circle cx="52" cy="38.5" r="1.2" fill="white"/><ellipse cx="22" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><ellipse cx="58" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><path d="M33 52 Q40 57 47 52" stroke="#C07040" stroke-width="1.8" fill="none" stroke-linecap="round"/><text x="40" y="8" text-anchor="middle" font-size="12">👑</text></svg></div><div class="hof-name">프로큐어마스터</div><div class="hof-sub">CPO</div><div class="hof-score">3,520</div><div class="hof-label">포인트</div></div>
<div class="hof-p bronze"><div class="hof-rank">3rd</div><div class="hof-av hof-av-svg"><svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="hSkin3" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#FFE8CC"/><stop offset="100%" stop-color="#F0A870"/></radialGradient><linearGradient id="hBody3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8678BF"/><stop offset="100%" stop-color="#5040A0"/></linearGradient></defs><rect x="22" y="60" width="36" height="28" rx="9" fill="url(#hBody3)"/><ellipse cx="40" cy="40" rx="22" ry="20" fill="url(#hSkin3)"/><path d="M18 36 Q18 14 40 13 Q62 14 62 36 Q58 20 40 19 Q22 20 18 36Z" fill="#1A365D"/><ellipse cx="30" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="50" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="30" cy="41" rx="5" ry="5.5" fill="#7060C0"/><ellipse cx="50" cy="41" rx="5" ry="5.5" fill="#7060C0"/><circle cx="31" cy="40" r="2.5" fill="#201040"/><circle cx="51" cy="40" r="2.5" fill="#201040"/><circle cx="32" cy="38.5" r="1.2" fill="white"/><circle cx="52" cy="38.5" r="1.2" fill="white"/><ellipse cx="22" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><ellipse cx="58" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><path d="M33 52 Q40 57 47 52" stroke="#C07040" stroke-width="1.8" fill="none" stroke-linecap="round"/><text x="40" y="8" text-anchor="middle" font-size="12">🥉</text></svg></div><div class="hof-name">VAATZ달인</div><div class="hof-sub">구매Pro</div><div class="hof-score">1,960</div><div class="hof-label">포인트</div></div>
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
<svg class="char-main-svg" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="cSkinG" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#FFE8CC"/><stop offset="60%" stop-color="#FFCC99"/><stop offset="100%" stop-color="#F0A870"/></radialGradient><radialGradient id="cHairG" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#5C3D1E"/><stop offset="100%" stop-color="#1A0A00"/></radialGradient><linearGradient id="cBodyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6BB3FF"/><stop offset="50%" stop-color="#4A8EF0"/><stop offset="100%" stop-color="#2060C8"/></linearGradient><radialGradient id="cEyeG" cx="35%" cy="35%" r="50%"><stop offset="0%" stop-color="#4A7FD4"/><stop offset="100%" stop-color="#1A3A80"/></radialGradient></defs><ellipse cx="40" cy="98" rx="18" ry="3" fill="rgba(0,0,0,0.15)"/><rect x="22" y="60" width="36" height="32" rx="10" fill="url(#cBodyG)"/><rect x="22" y="60" width="36" height="8" rx="5" fill="rgba(255,255,255,0.15)"/><rect x="30" y="67" width="20" height="10" rx="3" fill="rgba(255,255,255,0.2)"/><text x="40" y="75.5" text-anchor="middle" font-size="5.5" font-weight="800" fill="white" font-family="sans-serif">VAATZ</text><rect x="10" y="62" width="13" height="8" rx="4" fill="url(#cBodyG)"/><ellipse cx="10" cy="66" rx="5" ry="5.5" fill="url(#cSkinG)"/><rect x="57" y="62" width="13" height="8" rx="4" fill="url(#cBodyG)"/><ellipse cx="70" cy="66" rx="5" ry="5.5" fill="url(#cSkinG)"/><rect x="26" y="89" width="11" height="10" rx="5" fill="#1A48A8"/><rect x="43" y="89" width="11" height="10" rx="5" fill="#1A48A8"/><ellipse cx="31.5" cy="99" rx="7" ry="3.5" fill="#111"/><ellipse cx="48.5" cy="99" rx="7" ry="3.5" fill="#111"/><rect x="34" y="53" width="12" height="9" rx="4" fill="url(#cSkinG)"/><ellipse cx="40" cy="40" rx="22" ry="20" fill="url(#cSkinG)"/><path d="M18 36 Q18 14 40 13 Q62 14 62 36 Q58 20 40 19 Q22 20 18 36Z" fill="url(#cHairG)"/><path d="M18 36 Q16 30 18 24 Q20 18 28 15 L26 22 Q20 26 18 36Z" fill="url(#cHairG)"/><path d="M62 36 Q64 30 62 24 Q60 18 52 15 L54 22 Q60 26 62 36Z" fill="url(#cHairG)"/><ellipse cx="18" cy="40" rx="4" ry="5" fill="url(#cSkinG)"/><ellipse cx="62" cy="40" rx="4" ry="5" fill="url(#cSkinG)"/><ellipse cx="30" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="50" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="30" cy="41" rx="5" ry="5.5" fill="url(#cEyeG)"/><ellipse cx="50" cy="41" rx="5" ry="5.5" fill="url(#cEyeG)"/><circle cx="31" cy="40" r="2.5" fill="#0A1840"/><circle cx="51" cy="40" r="2.5" fill="#0A1840"/><circle cx="32" cy="38.5" r="1.2" fill="white"/><circle cx="52" cy="38.5" r="1.2" fill="white"/><circle cx="30.5" cy="41" r="0.6" fill="rgba(255,255,255,0.7)"/><circle cx="50.5" cy="41" r="0.6" fill="rgba(255,255,255,0.7)"/><path d="M24 33 Q30 30 36 33" stroke="#3A2010" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M44 33 Q50 30 56 33" stroke="#3A2010" stroke-width="1.8" fill="none" stroke-linecap="round"/><ellipse cx="22" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><ellipse cx="58" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><path d="M38 46 Q40 48 42 46" stroke="rgba(180,100,70,0.5)" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M33 52 Q40 57 47 52" stroke="#C07040" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>
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

<!-- Shop — Expanded v2 with full accessories + backgrounds -->
<div id="ct-shop" style="display:none">
<div style="display:flex;gap:12px;margin-bottom:14px">
  <!-- 미니 캐릭터 프리뷰 -->
  <div style="flex-shrink:0;width:110px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:12px;padding:10px;display:flex;flex-direction:column;align-items:center;gap:6px">
    <div id="shopCharPreview" style="font-size:48px;line-height:1;animation:charFloat 3s ease-in-out infinite">🐧</div>
    <div style="font-size:9px;color:var(--text-4);font-weight:600">미리보기</div>
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