export const modalsHtml = `<div class="mp-ov" id="mpOv" onclick="if(event.target===this)closeMypage()">
<div class="mp-box">
<div class="mp-hd"><h2>마이페이지</h2><button class="adm-x" onclick="closeMypage()">✕</button></div>
<div class="mp-profile">
<div class="mp-av">김</div>
<div class="mp-info">
<div class="mp-name">김현대 책임매니저</div>
<div class="mp-role">구매디지털추진팀 · 시스템관리자</div>
<div class="mp-stats">
<div class="mp-stat"><div class="mp-stat-v">127</div><div class="mp-stat-l">총 질의</div></div>
<div class="mp-stat"><div class="mp-stat-v">6</div><div class="mp-stat-l">업로드</div></div>
<div class="mp-stat"><div class="mp-stat-v">12</div><div class="mp-stat-l">승인 처리</div></div>
</div>
</div>
</div>
<div class="mp-tabs">
<button class="mp-tab on" onclick="mpTab(this,'mp-t1')">📋 요청 히스토리</button>
<button class="mp-tab" onclick="mpTab(this,'mp-t2')">🔔 알림 내역</button>
<button class="mp-tab" onclick="mpTab(this,'mp-t3')">⚙️ 설정</button>
</div>
<div class="mp-body">
<div id="mp-t1">
<div class="mp-section">
<div class="mp-section-t">내가 제출한 업로드 요청</div>
<div class="mp-req-item"><span>📄</span><span class="mp-req-item-title">VAATZ 마스터 데이터 관리 매뉴얼</span><span class="bd bd-g" style="font-size:9px">승인됨</span></div>
<div class="mp-req-item"><span>📄</span><span class="mp-req-item-title">구매용어 표준정의집 2025</span><span class="bd bd-g" style="font-size:9px">승인됨</span></div>
<div class="mp-req-item"><span>📄</span><span class="mp-req-item-title">입찰운영 개선안 보고서</span><span class="bd bd-md" style="font-size:9px">대기중</span></div>
</div>
</div>
<div id="mp-t2" style="display:none">
<div class="mp-section">
<div class="mp-section-t">최근 알림</div>
<div class="mp-req-item"><span>📤</span><span class="mp-req-item-title">박성민 매니저 — 구매전략팀 업로드 요청</span><span style="font-size:9px;color:var(--text-4)">5분 전</span></div>
<div class="mp-req-item"><span>✅</span><span class="mp-req-item-title">공정거래법 하도급 조항 — 승인 완료</span><span style="font-size:9px;color:var(--text-4)">1시간 전</span></div>
<div class="mp-req-item"><span>🔧</span><span class="mp-req-item-title">Learning Lounge 동기화 진행 중 (68%)</span><span style="font-size:9px;color:var(--text-4)">2시간 전</span></div>
<div class="mp-req-item"><span>❌</span><span class="mp-req-item-title">해외구매 환율 보고서 — 보완 요청</span><span style="font-size:9px;color:var(--text-4)">어제</span></div>
</div>
</div>
<div id="mp-t3" style="display:none">
<div class="mp-section">
<div class="mp-section-t">커뮤니티 닉네임</div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:8px;padding:14px;margin-bottom:14px">
<div style="font-size:11px;color:var(--text-3);margin-bottom:8px;line-height:1.5">커뮤니티 Q&A에서 사용할 닉네임입니다. 한번 설정하면 여기서만 변경할 수 있습니다.</div>
<div style="display:flex;gap:8px;align-items:center">
<input type="text" id="mpNickInput" value="프로큐어히어로" style="flex:1;background:var(--bg-3);border:1px solid var(--border-2);padding:8px 12px;border-radius:6px;color:var(--text-1);font-size:13px;font-family:inherit;outline:none">
<button onclick="saveNickname()" style="background:var(--accent);color:white;border:none;padding:8px 16px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;font-family:inherit;white-space:nowrap">닉네임 저장</button>
</div>
</div>
</div>
<div class="mp-section">
<div class="mp-section-t">환경 설정</div>
<div class="mp-setting-row"><div><div class="mp-setting-label">외부지식 기본값</div><div class="mp-setting-desc">새 대화 시작 시 외부지식 자동 활성화</div></div><div class="tg" onclick="this.classList.toggle('on')"></div></div>
<div class="mp-setting-row"><div><div class="mp-setting-label">알림 수신</div><div class="mp-setting-desc">요청 승인/보완 요청, 시스템 공지 알림</div></div><div class="tg on" onclick="this.classList.toggle('on')"></div></div>
<div class="mp-setting-row"><div><div class="mp-setting-label">이메일 알림</div><div class="mp-setting-desc">중요 알림을 이메일로도 발송</div></div><div class="tg" onclick="this.classList.toggle('on')"></div></div>
<div class="mp-setting-row"><div><div class="mp-setting-label">AI 응답 스타일</div><div class="mp-setting-desc">상세한 답변 / 간결한 답변</div></div>
<div class="sc-sw" style="font-size:10px"><button class="sc-btn on" onclick="this.parentElement.querySelectorAll('.sc-btn').forEach(b=>b.classList.remove('on'));this.classList.add('on')">상세</button><button class="sc-btn" onclick="this.parentElement.querySelectorAll('.sc-btn').forEach(b=>b.classList.remove('on'));this.classList.add('on')">간결</button></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="rq-m" id="rqM">
<div class="rq-b">
    <div class="rq-h">📤 공식 데이터 업로드 요청</div>
    <div class="rq-d">AI 지식 베이스에 반영할 공식 데이터를 업로드하고, 해당 팀에 승인을 요청합니다.<br>승인 후 전체 사용자에게 제공됩니다.</div>
    <div class="frm-g">
        <label class="frm-l">데이터명 / 문서명</label>
        <input type="text" class="frm-i" placeholder="예: 2026년 상반기 구매전략 보고서">
    </div>
    <div class="frm-g">
        <label class="frm-l">파일 첨부</label>
        <div class="upl-req-z" id="reqDropZone" onclick="simReqUpload()">
            <span class="upl-i">📎</span>
            <div class="upl-t">클릭하여 파일 선택 또는 드래그</div>
            <div class="upl-s">PDF, DOCX, XLSX, HWP · 최대 50MB</div>
        </div>
        <div id="reqFileList" class="req-file-list"></div>
    </div>
    <div class="frm-g">
        <label class="frm-l">승인 요청 팀</label>
        <select class="frm-i frm-sel" id="reqTeamSel">
            <option value="">팀을 선택하세요</option>
            <option value="구매전략팀">구매전략팀</option>
            <option value="반도체구매팀">반도체구매팀</option>
            <option value="구매품질기획팀">구매품질기획팀</option>
            <option value="PT제어부품구매팀">PT제어부품구매팀</option>
            <option value="구매디지털추진팀">구매디지털추진팀</option>
            <option value="구매역량개발팀">구매역량개발팀</option>
            <option value="샤시부품구매1팀">샤시부품구매1팀</option>
        </select>
    </div>
    <div class="frm-g">
        <label class="frm-l">요청 사유</label>
        <input type="text" class="frm-i" placeholder="예: 신규 계약 검토 시 참조 필요">
    </div>
    <div class="frm-a">
        <button class="btn btn-c" onclick="reqClose()">취소</button>
        <button class="btn btn-p" onclick="submitReq()">📤 업로드 요청</button>
    </div>
</div>
</div>

<div class="ov" id="ao">
<div class="adm" id="admBox">
<div class="adm-h">
  <h2>⚙️ Admin 관리</h2>
  <div style="display:flex;gap:6px;align-items:center">
    <button class="adm-x" id="admMaxBtn" onclick="toggleAdmMaximize()" title="화면 확대">⛶</button>
    <button class="adm-x" onclick="ca()">✕</button>
  </div>
</div>
<div class="adm-t">
  <div class="adm-t-section-label">── 승인 프로세스</div>
  <button class="atb on" onclick="at(this,'p-home')">🏠 운영 홈</button>
  <button class="atb atb-flow" onclick="at(this,'p-req')">📤 팀 문서 검토 <span class="adm-badge">5</span></button>
  <button class="atb atb-flow" onclick="at(this,'p-final')">✅ 최종 승인 <span class="adm-badge adm-badge-g">2</span></button>
  <button class="atb atb-flow" onclick="at(this,'p-verify')">🧠 AI 검증 <span class="adm-badge" style="background:var(--accent)">3</span></button>
  <div class="adm-t-section-label">── 시스템 관리</div>
  <button class="atb" onclick="at(this,'p-doc')">📁 지식 베이스</button>
  <button class="atb" onclick="at(this,'p-aidb')">🎛 AI 모드 DB</button>
  <button class="atb" onclick="at(this,'p-usr')">👥 사용자 · 권한</button>
  <button class="atb" onclick="at(this,'p-int')">🔗 데이터 연계</button>
  <button class="atb" onclick="at(this,'p-mon')">📊 모니터링</button>
  <button class="atb" onclick="at(this,'p-sec')">🔐 보안 · 정책</button>
</div>

<!-- ════ 운영 홈 ════ -->
<div class="adm-b" id="p-home">
<div class="adm-home-grid">
  <div class="adm-kpi-row">
    <div class="adm-kpi adm-kpi-link" onclick="goTab('p-req')" title="팀 문서 검토로 이동"><div class="adm-kpi-v" style="color:var(--a)">5</div><div class="adm-kpi-l">검토 대기 <span class="adm-kpi-arrow">→</span></div><div class="adm-kpi-sub">팀 문서 요청</div></div>
    <div class="adm-kpi adm-kpi-link" onclick="goTab('p-final')" title="최종 승인으로 이동"><div class="adm-kpi-v" style="color:var(--accent)">2</div><div class="adm-kpi-l">최종 승인 대기 <span class="adm-kpi-arrow">→</span></div><div class="adm-kpi-sub">폴더 배정 필요</div></div>
    <div class="adm-kpi adm-kpi-link" onclick="goTab('p-doc')" title="지식 베이스로 이동"><div class="adm-kpi-v" style="color:var(--g)">14</div><div class="adm-kpi-l">AI 반영 완료 <span class="adm-kpi-arrow">→</span></div><div class="adm-kpi-sub">이번 달</div></div>
    <div class="adm-kpi adm-kpi-link" onclick="goTab('p-mon')" title="모니터링으로 이동"><div class="adm-kpi-v" style="color:var(--v)">94.2%</div><div class="adm-kpi-l">답변 신뢰도 <span class="adm-kpi-arrow">→</span></div><div class="adm-kpi-sub">이번 달 평균</div></div>
    <div class="adm-kpi adm-kpi-link" onclick="goTab('p-mon')" title="모니터링으로 이동"><div class="adm-kpi-v">2,847</div><div class="adm-kpi-l">총 질의 <span class="adm-kpi-arrow">→</span></div><div class="adm-kpi-sub">이번 달</div></div>
    <div class="adm-kpi adm-kpi-link" onclick="goTab('p-usr')" title="사용자 관리로 이동"><div class="adm-kpi-v">48<span style="font-size:14px">명</span></div><div class="adm-kpi-l">활성 사용자 <span class="adm-kpi-arrow">→</span></div><div class="adm-kpi-sub">월간</div></div>
  </div>

  <div class="adm-home-row">
    <div class="adm-home-card" style="flex:1">
      <div class="adm-home-card-t">📋 즉시 처리 필요</div>
      <div class="adm-todo-list">
        <div class="adm-todo urgent" onclick="at(document.querySelector('[onclick*=p-req]'),'p-req')">
          <span class="adm-todo-dot r"></span>
          <div class="adm-todo-body"><div class="adm-todo-title">구매전략팀 요청 2건 검토 대기</div><div class="adm-todo-meta">박성민 · 조달청 물품계약 외 1건 · 3일 경과</div></div>
          <span class="adm-todo-badge" style="background:var(--r-dim);color:var(--r)">긴급</span>
        </div>
        <div class="adm-todo" onclick="at(document.querySelector('[onclick*=p-final]'),'p-final')">
          <span class="adm-todo-dot a"></span>
          <div class="adm-todo-body"><div class="adm-todo-title">최종 승인 대기 2건 — 폴더 미배정</div><div class="adm-todo-meta">공정거래법 조항, 전동화 단가 벤치마크</div></div>
          <span class="adm-todo-badge" style="background:var(--a-dim);color:var(--a)">대기</span>
        </div>
        <div class="adm-todo" onclick="at(document.querySelector('[onclick*=p-verify]'),'p-verify')">
          <span class="adm-todo-dot b"></span>
          <div class="adm-todo-body"><div class="adm-todo-title">커뮤니티 AI 검증 후보 3건</div><div class="adm-todo-meta">채택 + 추천 10개 이상 · 승인 시 AI DB 반영</div></div>
          <span class="adm-todo-badge" style="background:var(--accent-dim);color:var(--accent)">검증</span>
        </div>
        <div class="adm-todo" onclick="at(document.querySelector('[onclick*=p-int]'),'p-int')">
          <span class="adm-todo-dot g"></span>
          <div class="adm-todo-body"><div class="adm-todo-title">Learning Lounge 동기화 68% 진행 중</div><div class="adm-todo-meta">오류 2건 감지 — 확인 권장</div></div>
          <span class="adm-todo-badge" style="background:var(--g-dim);color:var(--g)">진행중</span>
        </div>
      </div>
    </div>

    <div class="adm-home-card" style="width:280px;flex-shrink:0">
      <div class="adm-home-card-t">📣 공지사항 관리 <span style="font-size:9px;color:var(--text-4);font-weight:400">Admin 전용</span></div>
      <div id="adminNoticeList" style="margin-bottom:10px">
        <div class="adm-notice-item pinned"><span class="adm-notice-pin">📌 고정</span><div class="adm-notice-text">VAATZ AI 지식베이스 v2.0 오픈</div><div class="adm-notice-date">2026.02.10</div></div>
        <div class="adm-notice-item"><span style="font-size:11px">🔔</span><div class="adm-notice-text">정기 데이터 동기화 완료</div><div class="adm-notice-date">2026.02.08</div></div>
      </div>
      <button class="btn btn-p" style="width:100%;font-size:11px" onclick="openNoticeEditor()">＋ 공지 등록 · 관리</button>
    </div>
  </div>

  <div class="adm-home-card">
    <div class="adm-home-card-t">🔄 최근 활동 로그</div>
    <table class="at2" style="width:100%"><thead><tr><th>시간</th><th>구분</th><th>내용</th><th>처리자</th><th>상태</th></tr></thead><tbody>
    <tr><td>15:42</td><td><span class="adm-type-badge req">요청</span></td><td>전동화 부품 단가 벤치마크.xlsx — PT제어부품구매팀</td><td>한도윤</td><td><span class="bd bd-a">검토 중</span></td></tr>
    <tr><td>14:30</td><td><span class="adm-type-badge doc">문서</span></td><td>공정거래법 하도급 관련 조항 — 최종 승인 대기</td><td>정현수</td><td><span class="bd bd-a">대기</span></td></tr>
    <tr><td>13:18</td><td><span class="adm-type-badge ai">AI</span></td><td>탄력적입찰 Q&A 채택 답변 → AI 학습 후보 등록</td><td>시스템</td><td><span class="bd bd-b">검증 대기</span></td></tr>
    <tr><td>11:05</td><td><span class="adm-type-badge ok">승인</span></td><td>조달청 물품구매계약 특수조건 — 미분류 이동 완료</td><td>김현대</td><td><span class="bd bd-g">완료</span></td></tr>
    <tr><td>09:30</td><td><span class="adm-type-badge doc">문서</span></td><td>반도체 수출규제 현황 2026 — 임베딩 완료</td><td>시스템</td><td><span class="bd bd-g">AI 반영</span></td></tr>
    </tbody></table>
  </div>
</div>
</div>

<!-- ════ 최종 승인 탭 ════ -->
<div class="adm-b" id="p-final" style="display:none">
<!-- 파이프라인 미니뷰 -->
<div class="adm-pipeline compact">
  <div class="adm-pipe-step active"><div class="adm-pipe-circle" style="background:var(--a)">3</div><div class="adm-pipe-body"><div class="adm-pipe-label">최종 승인 단계</div><div class="adm-pipe-badge" style="background:var(--a-dim);color:var(--a)">현재 위치</div></div></div>
  <div class="adm-pipe-arrow">▶</div>
  <div class="adm-pipe-step"><div class="adm-pipe-circle" style="background:var(--g)">4</div><div class="adm-pipe-body"><div class="adm-pipe-label">AI 임베딩</div><div class="adm-pipe-badge" style="background:var(--g-dim);color:var(--g)">완료 11건</div></div></div>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;margin:12px 0 8px">
  <div style="display:flex;gap:6px">
    <button class="final-filter-btn on" onclick="setFinalFilter(this,'all')">전체 <span style="background:var(--a-dim);color:var(--a);padding:0 5px;border-radius:8px;font-size:9px">2</span></button>
    <button class="final-filter-btn" onclick="setFinalFilter(this,'unassigned')">미배정 <span style="background:var(--a-dim);color:var(--a);padding:0 5px;border-radius:8px;font-size:9px">2</span></button>
    <button class="final-filter-btn" onclick="setFinalFilter(this,'assigned')">배정완료 <span style="background:var(--g-dim);color:var(--g);padding:0 5px;border-radius:8px;font-size:9px">0</span></button>
  </div>
  <div style="display:flex;gap:6px">
    <button class="tb-b" onclick="batchFolderAssign()">📂 선택 일괄 배정</button>
    <button class="tb-b" style="color:var(--r)" onclick="batchRejectFinal()">❌ 반려</button>
  </div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-3);margin:14px 0 6px">📥 폴더 미지정 문서 <span style="background:var(--a-dim);color:var(--a);padding:1px 7px;border-radius:4px;font-size:10px">2건</span></div>
<div class="final-doc-list">
  <div class="final-doc-row">
    <input type="checkbox" class="fl-chk">
    <div class="final-doc-icon">📄</div>
    <div class="final-doc-info">
      <div class="final-doc-name">공정거래법 하도급 관련 조항.pdf</div>
      <div class="final-doc-meta">정현수 · 구매품질기획팀 · 팀 Admin 승인 완료 · 02.07</div>
    </div>
    <div class="final-doc-sec"><span class="bd bd-md">중간</span></div>
    <select class="frm-i frm-sel final-folder-sel" onchange="if(this.value){this.closest('.final-doc-row').classList.add('assigned');toast(this.value+' 폴더로 배정됩니다.','📂',2000)}">
      <option value="">폴더 선택 →</option>
      <option>구매업무규정</option><option>입찰관리</option><option>VAATZ 매뉴얼</option><option>품질 5스타</option><option>용어사전 · 양식</option>
    </select>
    <button class="abtn" style="color:var(--accent)" onclick="openFinalPreview('공정거래법 하도급 관련 조항.pdf','정현수 · 구매품질기획팀 · 02.07','중간','pdf')">📋 미리보기</button>
    <button class="abtn no" onclick="toast('반려 사유를 입력해주세요.','⚠️',2500)">반려</button>
  </div>
  <div class="final-doc-row">
    <input type="checkbox" class="fl-chk">
    <div class="final-doc-icon">📊</div>
    <div class="final-doc-info">
      <div class="final-doc-name">전동화 부품 단가 벤치마크.xlsx</div>
      <div class="final-doc-meta">한도윤 · PT제어부품구매팀 · 팀 Admin 승인 완료 · 02.08</div>
    </div>
    <div class="final-doc-sec"><span class="bd bd-h">높음</span></div>
    <select class="frm-i frm-sel final-folder-sel" onchange="if(this.value){this.closest('.final-doc-row').classList.add('assigned');toast(this.value+' 폴더로 배정됩니다.','📂',2000)}">
      <option value="">폴더 선택 →</option>
      <option>구매업무규정</option><option>입찰관리</option><option>VAATZ 매뉴얼</option><option>품질 5스타</option><option>용어사전 · 양식</option>
    </select>
    <button class="abtn" style="color:var(--accent)" onclick="openFinalPreview('전동화 부품 단가 벤치마크.xlsx','한도윤 · PT제어부품구매팀 · 02.08','높음','xlsx')">📋 미리보기</button>
    <button class="abtn no" onclick="toast('반려 사유를 입력해주세요.','⚠️',2500)">반려</button>
  </div>
</div>

<div style="font-size:11px;font-weight:600;color:var(--text-3);margin:18px 0 6px">📁 폴더별 AI 반영 현황 <span style="font-size:10px;color:var(--text-4);font-weight:400">— 클릭하면 문서 목록 확인</span></div>
<div class="final-folder-grid">
  <div class="final-folder-card" onclick="toast('구매업무규정 폴더 — 문서 4건 AI 반영 완료','📁',2000)"><div class="final-folder-icon">📂</div><div class="final-folder-name">구매업무규정</div><div class="final-folder-cnt"><span style="color:var(--g)">4건</span> 반영</div></div>
  <div class="final-folder-card" onclick="toast('입찰관리 폴더 — 문서 3건 AI 반영 완료','📁',2000)"><div class="final-folder-icon">📂</div><div class="final-folder-name">입찰관리</div><div class="final-folder-cnt"><span style="color:var(--g)">3건</span> 반영</div></div>
  <div class="final-folder-card" onclick="toast('VAATZ 매뉴얼 폴더 — 문서 2건 AI 반영 완료','📁',2000)"><div class="final-folder-icon">📂</div><div class="final-folder-name">VAATZ 매뉴얼</div><div class="final-folder-cnt"><span style="color:var(--g)">2건</span> 반영</div></div>
  <div class="final-folder-card" onclick="toast('품질 5스타 폴더 — 문서 3건 AI 반영 완료','📁',2000)"><div class="final-folder-icon">📂</div><div class="final-folder-name">품질 5스타</div><div class="final-folder-cnt"><span style="color:var(--g)">3건</span> 반영</div></div>
  <div class="final-folder-card" onclick="toast('용어사전·양식 폴더 — 문서 2건 AI 반영 완료','📁',2000)"><div class="final-folder-icon">📂</div><div class="final-folder-name">용어사전 · 양식</div><div class="final-folder-cnt"><span style="color:var(--g)">2건</span> 반영</div></div>
  <div class="final-folder-card add-folder" onclick="toast('폴더 추가 기능은 시스템 Admin만 사용할 수 있습니다.','📁',2500)"><div class="final-folder-icon">＋</div><div class="final-folder-name" style="color:var(--accent)">폴더 추가</div></div>
</div>
</div>

<!-- ════ 최종 승인 문서 미리보기 모달 ════ -->
<div class="final-prev-ov" id="finalPreviewModal" onclick="if(event.target===this)closeFinalPreview()">
  <div class="final-prev-box">
    <div class="final-prev-hd">
      <div class="final-prev-hd-l">
        <div class="final-prev-icon" id="fpIcon">📄</div>
        <div>
          <div class="final-prev-title" id="fpTitle">문서명</div>
          <div class="final-prev-meta" id="fpMeta">메타정보</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="final-prev-sec-badge" id="fpSec">보안</span>
        <button class="final-prev-close" onclick="closeFinalPreview()">✕</button>
      </div>
    </div>
    <div class="final-prev-body" id="fpBody"></div>
    <div class="final-prev-foot">
      <div style="font-size:11px;color:var(--text-4)">팀 Admin 검토 완료 · VAATZ AI 시스템</div>
      <div style="display:flex;gap:8px">
        <button class="abtn no" onclick="closeFinalPreview();toast('반려 사유를 입력해주세요.','⚠️',2500)">❌ 반려</button>
        <button class="abtn ok" style="padding:6px 18px;font-weight:700" onclick="closeFinalPreview();toast('최종 승인 완료 — AI 임베딩 대기열로 이동합니다.','✅',2500)">✅ 최종 승인</button>
      </div>
    </div>
  </div>
</div>

<!-- ════ 팀 문서 검토 ════ -->
<div class="adm-b" id="p-req" style="display:none">
<!-- 업무 파이프라인 -->
<div class="adm-pipeline">
  <div class="adm-pipe-step active">
    <div class="adm-pipe-circle" style="background:var(--a)">1</div>
    <div class="adm-pipe-body">
      <div class="adm-pipe-icon">📤</div>
      <div class="adm-pipe-label">팀원 업로드</div>
      <div class="adm-pipe-badge" style="background:var(--a-dim);color:var(--a)">5건 대기</div>
    </div>
  </div>
  <div class="adm-pipe-arrow">▶</div>
  <div class="adm-pipe-step">
    <div class="adm-pipe-circle" style="background:var(--accent)">2</div>
    <div class="adm-pipe-body">
      <div class="adm-pipe-icon">👤</div>
      <div class="adm-pipe-label">팀 Admin 검토</div>
      <div class="adm-pipe-badge" style="background:var(--accent-dim);color:var(--accent)">3건 진행중</div>
    </div>
  </div>
  <div class="adm-pipe-arrow">▶</div>
  <div class="adm-pipe-step" onclick="goTab('p-final')" style="cursor:pointer" title="최종 승인 탭으로 이동">
    <div class="adm-pipe-circle" style="background:var(--v)">3</div>
    <div class="adm-pipe-body">
      <div class="adm-pipe-icon">✅</div>
      <div class="adm-pipe-label">최종 승인 · 배정</div>
      <div class="adm-pipe-badge" style="background:var(--v-dim);color:var(--v)">2건 대기 →</div>
    </div>
  </div>
  <div class="adm-pipe-arrow">▶</div>
  <div class="adm-pipe-step">
    <div class="adm-pipe-circle" style="background:var(--g)">4</div>
    <div class="adm-pipe-body">
      <div class="adm-pipe-icon">🧠</div>
      <div class="adm-pipe-label">AI 임베딩 반영</div>
      <div class="adm-pipe-badge" style="background:var(--g-dim);color:var(--g)">14건 완료</div>
    </div>
  </div>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div style="font-size:13px;font-weight:600">공식 데이터 업로드 요청</div><div style="display:flex;gap:6px;align-items:center"><span style="font-size:11px;color:var(--text-3)">대기 <b style="color:var(--a)">5건</b></span><button class="tb-b" style="font-size:11px" onclick="batchApprove()">✅ 선택 일괄 승인</button><button class="tb-b" style="font-size:11px" onclick="batchReject()">❌ 선택 보완 요청</button></div></div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px">각 팀의 Admin 담당자가 승인/보완 요청합니다. 승인된 문서는 「미분류」로 이동 → 시스템 Admin이 폴더를 지정합니다.</div>
<div class="ft-f" style="margin-bottom:4px"><div class="ft-fh" onclick="tf(this)" style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px"><input type="checkbox" class="fl-chk team-chk" style="opacity:1" onclick="event.stopPropagation()"><span class="ft-ar op">▶</span><span class="ft-ic">📂</span><span class="ft-nm">구매전략팀</span><span style="font-size:9px;color:var(--text-4);margin-left:4px">담당: 김현대</span><span style="font-size:10px;background:var(--a-dim);color:var(--a);padding:1px 6px;border-radius:4px;font-weight:600;margin-left:auto;margin-right:6px">대기 2</span></div><div class="ft-ds" style="max-height:400px;padding-left:10px">
<div class="req-card"><input type="checkbox" class="fl-chk req-chk" style="opacity:1" onclick="event.stopPropagation()"><div class="req-body"><div class="req-title">조달청 물품구매계약 특수조건</div><div class="req-meta">박성민 매니저 · 공공 입찰 건 비교 · 02.08 · 📎 물품구매계약_특수조건.pdf</div></div><div class="req-acts"><button class="abtn ok" onclick="appReq(this)">승인</button><button class="abtn no" onclick="rejReq(this)">보완 요청</button></div></div>
<div class="req-card"><input type="checkbox" class="fl-chk req-chk" style="opacity:1" onclick="event.stopPropagation()"><div class="req-body"><div class="req-title">해외법인 구매 승인 프로세스</div><div class="req-meta">이준혁 책임매니저 · 해외 구매건 승인 · 02.07 · 📎 해외구매_승인_프로세스.docx</div></div><div class="req-acts"><button class="abtn ok" onclick="appReq(this)">승인</button><button class="abtn no" onclick="rejReq(this)">보완 요청</button></div></div>
</div></div>
<div class="ft-f" style="margin-bottom:4px"><div class="ft-fh" onclick="tf(this)" style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px"><input type="checkbox" class="fl-chk team-chk" style="opacity:1" onclick="event.stopPropagation()"><span class="ft-ar">▶</span><span class="ft-ic">📂</span><span class="ft-nm">반도체구매팀</span><span style="font-size:9px;color:var(--text-4);margin-left:4px">담당: 김현대</span><span style="font-size:10px;background:var(--a-dim);color:var(--a);padding:1px 6px;border-radius:4px;font-weight:600;margin-left:auto;margin-right:6px">대기 2</span></div><div class="ft-ds cl" style="max-height:0;padding-left:10px">
<div class="req-card"><input type="checkbox" class="fl-chk req-chk" style="opacity:1" onclick="event.stopPropagation()"><div class="req-body"><div class="req-title">반도체 수출규제 국가별 현황</div><div class="req-meta">최유진 매니저 · 수출 리스크 점검 · 02.08 · 📎 수출규제_현황_2026.xlsx</div></div><div class="req-acts"><button class="abtn ok" onclick="appReq(this)">승인</button><button class="abtn no" onclick="rejReq(this)">보완 요청</button></div></div>
<div class="req-card"><input type="checkbox" class="fl-chk req-chk" style="opacity:1" onclick="event.stopPropagation()"><div class="req-body"><div class="req-title">TSMC 납기 관리 가이드</div><div class="req-meta">최유진 매니저 · 반도체 납기 대응 · 02.06 · 📎 TSMC_납기관리_v2.pdf</div></div><div class="req-acts"><button class="abtn ok" onclick="appReq(this)">승인</button><button class="abtn no" onclick="rejReq(this)">보완 요청</button></div></div>
</div></div>
<div class="ft-f" style="margin-bottom:4px"><div class="ft-fh" onclick="tf(this)" style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px"><input type="checkbox" class="fl-chk team-chk" style="opacity:1" onclick="event.stopPropagation()"><span class="ft-ar">▶</span><span class="ft-ic">📂</span><span class="ft-nm">구매품질기획팀</span><span style="font-size:9px;color:var(--text-4);margin-left:4px">담당: 정현수</span><span style="font-size:10px;background:var(--g-dim);color:var(--g);padding:1px 6px;border-radius:4px;font-weight:600;margin-left:auto;margin-right:6px">완료 1</span></div><div class="ft-ds cl" style="max-height:0;padding-left:10px">
<div class="req-card done"><input type="checkbox" class="fl-chk req-chk" style="opacity:1" onclick="event.stopPropagation()"><div class="req-body"><div class="req-title">공정거래법 하도급 관련 조항</div><div class="req-meta">정현수 책임매니저 · 02.07</div></div><span class="bd bd-g">승인됨</span></div>
</div></div>
<div class="ft-f" style="margin-bottom:4px"><div class="ft-fh" onclick="tf(this)" style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px"><input type="checkbox" class="fl-chk team-chk" style="opacity:1" onclick="event.stopPropagation()"><span class="ft-ar">▶</span><span class="ft-ic">📂</span><span class="ft-nm">PT제어부품구매팀</span><span style="font-size:9px;color:var(--text-4);margin-left:4px">담당: 김현대</span><span style="font-size:10px;background:var(--a-dim);color:var(--a);padding:1px 6px;border-radius:4px;font-weight:600;margin-left:auto;margin-right:6px">대기 1</span></div><div class="ft-ds cl" style="max-height:0;padding-left:10px">
<div class="req-card"><input type="checkbox" class="fl-chk req-chk" style="opacity:1" onclick="event.stopPropagation()"><div class="req-body"><div class="req-title">전동화 부품 단가 벤치마크</div><div class="req-meta">한도윤 매니저 · PT 부품 단가 · 02.08 · 📎 전동화부품_단가비교.xlsx</div></div><div class="req-acts"><button class="abtn ok" onclick="appReq(this)">승인</button><button class="abtn no" onclick="rejReq(this)">보완 요청</button></div></div>
</div></div>
</div>

<div class="adm-b" id="p-usr" style="display:none">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
<div style="font-size:13px;font-weight:600">사용자 · 권한 관리 <span style="color:var(--text-4);font-size:11px;font-weight:400">48명 · 8개 팀</span></div>
<div style="display:flex;gap:4px">
  <button class="tb-b" style="font-size:11px" onclick="toast('팀 추가 기능은 시스템관리자만 사용할 수 있습니다.','🔐',2000)">＋ 팀 추가</button>
  <button class="tb-b" style="font-size:11px" onclick="openAddUserModal()">＋ 사용자 추가</button>
</div>
</div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px">팀별 <b style="color:var(--text-2)">팀장 + 팀관리자</b> 2인만 Admin 권한 부여. 일반 구성원은 SSO 인증으로 시스템 접속만 가능. <span style="color:var(--accent)">이름 클릭 → 권한 변경</span></div>

<!-- 시스템관리자 -->
<div class="org-team" style="border-color:var(--accent-bd)">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar op" style="font-size:10px;color:var(--text-4)">▶</span><span style="font-size:14px">🔐</span><div class="org-team-nm">시스템관리자</div><span class="bd bd-a" style="font-size:9px">전체 권한</span></div>
<div class="org-team-bd" style="max-height:200px">
<div class="org-m" onclick="openUserEdit(this,'김현대','시스템관리자','책임매니저','구매디지털추진팀')"><div class="org-m-av" style="background:var(--accent-g)">김</div><div class="org-m-info"><div class="org-m-nm">김현대 <span class="bd bd-a" style="font-size:8px">시스템관리자</span></div><div class="org-m-role">책임매니저 · 구매디지털추진팀</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">높음</span><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><button class="req-flow-go" onclick="event.stopPropagation();openUserEdit(this.closest('.org-m'),'김현대','시스템관리자','책임매니저','구매디지털추진팀')">변경</button></div></div>
</div></div>

<!-- 구매전략팀 -->
<div class="org-team">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar op" style="font-size:10px;color:var(--text-4)">▶</span><span style="font-size:14px">📂</span><div class="org-team-nm">구매전략팀</div><span class="org-team-cnt">6명</span><span class="bd bd-md" style="font-size:9px;margin-left:4px">중간+낮음</span></div>
<div class="org-team-bd" style="max-height:400px">
<div class="org-m" onclick="openUserEdit(this,'김전략','팀장','팀장','구매전략팀')"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">김</div><div class="org-m-info"><div class="org-m-nm">김전략 <span class="bd bd-m" style="font-size:8px">팀장</span></div><div class="org-m-role">팀장 · 구매전략팀</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">높음</span><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><button class="req-flow-go" onclick="event.stopPropagation();openUserEdit(this.closest('.org-m'),'김전략','팀장','팀장','구매전략팀')">변경</button></div></div>
<div class="org-m" onclick="openUserEdit(this,'이준혁','팀관리자','책임매니저','구매전략팀')"><div class="org-m-av" style="background:var(--bg-5)">이</div><div class="org-m-info"><div class="org-m-nm">이준혁 <span class="bd bd-m" style="font-size:8px">팀관리자</span></div><div class="org-m-role">책임매니저 · 구매전략팀</div></div><div class="org-m-scope"><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><button class="req-flow-go" onclick="event.stopPropagation();openUserEdit(this.closest('.org-m'),'이준혁','팀관리자','책임매니저','구매전략팀')">변경</button></div></div>
<div style="padding:3px 10px;font-size:9px;color:var(--text-4);font-style:italic;border-top:1px solid var(--border-1);margin-top:4px">일반 구성원 4명 — SSO 접속 (Admin 권한 없음)</div>
</div></div>

<!-- 반도체구매팀 -->
<div class="org-team">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar" style="font-size:10px;color:var(--text-4)">▶</span><span style="font-size:14px">📂</span><div class="org-team-nm">반도체구매팀</div><span class="org-team-cnt">5명</span><span class="bd bd-md" style="font-size:9px;margin-left:4px">중간+낮음</span></div>
<div class="org-team-bd ft-ds cl" style="max-height:0">
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">장</div><div class="org-m-info"><div class="org-m-nm">장반도 <span class="bd bd-m" style="font-size:8px">팀장</span></div><div class="org-m-role">팀장 · 반도체구매팀</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">높음</span><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div class="org-m"><div class="org-m-av" style="background:var(--bg-5)">최</div><div class="org-m-info"><div class="org-m-nm">최유진 <span class="bd bd-m" style="font-size:8px">팀관리자</span></div><div class="org-m-role">매니저 · 반도체구매팀</div></div><div class="org-m-scope"><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div style="padding:3px 10px;font-size:9px;color:var(--text-4);font-style:italic;border-top:1px solid var(--border-1);margin-top:4px">일반 구성원 — SSO 접속 (Admin 권한 없음)</div>
</div></div>

<!-- 구매품질기획팀 -->
<div class="org-team">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar" style="font-size:10px;color:var(--text-4)">▶</span><span style="font-size:14px">📂</span><div class="org-team-nm">구매품질기획팀</div><span class="org-team-cnt">4명</span><span class="bd bd-md" style="font-size:9px;margin-left:4px">중간+낮음</span></div>
<div class="org-team-bd ft-ds cl" style="max-height:0">
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">오</div><div class="org-m-info"><div class="org-m-nm">오품질 <span class="bd bd-m" style="font-size:8px">팀장</span></div><div class="org-m-role">팀장 · 구매품질기획팀</div></div><div class="org-m-scope"><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div class="org-m"><div class="org-m-av" style="background:var(--bg-5)">정</div><div class="org-m-info"><div class="org-m-nm">정현수 <span class="bd bd-m" style="font-size:8px">팀관리자</span></div><div class="org-m-role">책임매니저 · 구매품질기획팀</div></div><div class="org-m-scope"><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div style="padding:3px 10px;font-size:9px;color:var(--text-4);font-style:italic;border-top:1px solid var(--border-1);margin-top:4px">일반 구성원 — SSO 접속 (Admin 권한 없음)</div>
</div></div>

<!-- PT제어부품구매팀 -->
<div class="org-team">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar" style="font-size:10px;color:var(--text-4)">▶</span><span style="font-size:14px">📂</span><div class="org-team-nm">PT제어부품구매팀</div><span class="org-team-cnt">5명</span><span class="bd bd-md" style="font-size:9px;margin-left:4px">중간+낮음</span></div>
<div class="org-team-bd ft-ds cl" style="max-height:0">
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">유</div><div class="org-m-info"><div class="org-m-nm">유제어 <span class="bd bd-m" style="font-size:8px">팀장</span></div><div class="org-m-role">팀장 · PT제어부품구매팀</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">높음</span><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div class="org-m"><div class="org-m-av" style="background:var(--bg-5)">한</div><div class="org-m-info"><div class="org-m-nm">한도윤 <span class="bd bd-m" style="font-size:8px">팀관리자</span></div><div class="org-m-role">매니저 · PT제어부품구매팀</div></div><div class="org-m-scope"><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div style="padding:4px 10px;font-size:10px;color:var(--text-4)">… 외 3명</div>
</div></div>

<!-- 구매역량개발팀, 샤시부품, 의장시스템 축약 -->
<div class="org-team">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar" style="font-size:10px;color:var(--text-4)">▶</span><span style="font-size:14px">📂</span><div class="org-team-nm">구매역량개발팀</div><span class="org-team-cnt">4명</span><span class="bd bd-md" style="font-size:9px;margin-left:4px">중간+낮음</span></div>
<div class="org-team-bd ft-ds cl" style="max-height:0">
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">김</div><div class="org-m-info"><div class="org-m-nm">김역량 <span class="bd bd-m" style="font-size:8px">팀장</span></div><div class="org-m-role">팀장 · 구매역량개발팀</div></div><div class="org-m-scope"><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div style="padding:3px 10px;font-size:9px;color:var(--text-4);font-style:italic;border-top:1px solid var(--border-1);margin-top:4px">일반 구성원 3명 — SSO 접속 (Admin 권한 없음)</div>
</div></div>

<!-- 임원 -->
<div class="org-team" style="border-color:rgba(194,155,66,0.3)">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar op" style="font-size:10px;color:var(--text-4)">▶</span><span style="font-size:14px">👔</span><div class="org-team-nm">임원</div><span class="org-team-cnt">3명</span><span class="bd bd-h" style="font-size:9px;margin-left:4px">모든 높음 열람</span></div>
<div class="org-team-bd" style="max-height:300px">
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">이</div><div class="org-m-info"><div class="org-m-nm">이구매 <span class="bd bd-m" style="font-size:8px">구매담당 상무</span></div><div class="org-m-role">상무보 · 구매본부</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">높음 전체</span><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">박</div><div class="org-m-info"><div class="org-m-nm">박전략 <span class="bd bd-m" style="font-size:8px">전략구매 이사</span></div><div class="org-m-role">이사 · 전략구매실</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">높음 전체</span><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">최</div><div class="org-m-info"><div class="org-m-nm">최본부 <span class="bd bd-m" style="font-size:8px">구매본부장</span></div><div class="org-m-role">전무 · 구매본부</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">높음 전체</span><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
</div></div>

<!-- 외부 협력사 -->
<div class="org-team" style="border-color:var(--border-2);opacity:.7">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar" style="font-size:10px;color:var(--text-4)">▶</span><span style="font-size:14px">🏢</span><div class="org-team-nm">외부 협력사</div><span class="org-team-cnt">3명</span><span class="bd bd-l" style="font-size:9px;margin-left:4px">낮음만</span></div>
<div class="org-team-bd ft-ds cl" style="max-height:0">
<div class="org-m"><div class="org-m-av" style="background:var(--bg-5)">장</div><div class="org-m-info"><div class="org-m-nm">장협력 <span class="bd bd-e" style="font-size:8px">외부</span></div><div class="org-m-role">협력사 A</div></div><div class="org-m-scope"><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div style="padding:4px 10px;font-size:10px;color:var(--text-4)">… 외 2명</div>
</div></div>

<div style="padding:8px 10px;font-size:10px;color:var(--text-4);line-height:1.6">
💡 <b style="color:var(--text-3)">권한 부여 정책</b>: <span class="bd bd-h" style="font-size:9px">높음</span> 등급은 파일 담당자(Admin)가 해당 팀의 팀장을 지정하여 부여합니다. 팀 추가 시 해당 팀의 팀장이 자동으로 높음 접근 대상에 등록되며, 향후 인사정보 연동으로 자동 업데이트됩니다.
</div>
</div>

<div class="adm-b" id="p-doc" style="display:none">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
<div style="font-size:13px;font-weight:600">문서 관리 <span style="color:var(--text-4);font-size:11px;font-weight:400">— Admin 전용 · 폴더 접근권한 관리</span></div>
<div style="display:flex;gap:4px"><button class="tb-b" style="font-size:11px">📂 폴더 추가</button><button class="tb-b" style="font-size:11px">📤 문서 업로드</button><button class="tb-b" style="font-size:11px;color:var(--r)" onclick="toast('삭제할 문서를 선택해주세요.','⚠️',2500)">🗑 선택 삭제</button></div>
</div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px">요청관리에서 승인된 문서는 「미분류」에 저장됩니다. <b style="color:var(--text-2)">시스템 Admin만</b> 폴더 이동·삭제 가능합니다. 문서를 클릭하면 접근 권한을 설정할 수 있습니다.</div>

<!-- 미분류 (승인 후 대기) -->
<div class="doc-uncat">
<div class="doc-uncat-title">📥 미분류 <span style="font-size:9px;background:var(--a-dim);color:var(--a);padding:1px 5px;border-radius:3px;font-weight:600">2건</span> <span style="font-size:9px;color:var(--text-4);margin-left:4px">승인된 문서 — 폴더 배정 대기</span></div>
<div class="doc-uncat-item"><span style="font-size:12px">📄</span><div class="doc-uncat-nm">공정거래법 하도급 관련 조항.pdf</div><div class="doc-uncat-meta">정현수 · 구매품질기획 · 02.07</div><div class="doc-uncat-acts"><select class="doc-mv-btn" onchange="if(this.value){toast(this.value+' 폴더로 이동합니다.','📂',2000);this.closest('.doc-uncat-item').style.opacity='.3'}"><option value="">이동 →</option><option value="구매업무규정">구매업무규정</option><option value="입찰관리">입찰관리</option><option value="VAATZ 매뉴얼">VAATZ 매뉴얼</option><option value="품질 5스타">품질 5스타</option><option value="용어사전 · 양식">용어사전 · 양식</option></select></div></div>
<div class="doc-uncat-item"><span style="font-size:12px">📄</span><div class="doc-uncat-nm">전동화 부품 단가 벤치마크.xlsx</div><div class="doc-uncat-meta">한도윤 · PT제어부품 · 02.08</div><div class="doc-uncat-acts"><select class="doc-mv-btn" onchange="if(this.value){toast(this.value+' 폴더로 이동합니다.','📂',2000);this.closest('.doc-uncat-item').style.opacity='.3'}"><option value="">이동 →</option><option value="구매업무규정">구매업무규정</option><option value="입찰관리">입찰관리</option><option value="VAATZ 매뉴얼">VAATZ 매뉴얼</option><option value="품질 5스타">품질 5스타</option><option value="용어사전 · 양식">용어사전 · 양식</option></select></div></div>
</div>

<div style="margin-top:14px">
<!-- 구매업무규정 폴더 -->
<div class="ft-f"><div class="ft-fh" onclick="tf(this)"><span class="ft-ar op">▶</span><span class="ft-ic">📂</span><span class="ft-nm">구매업무규정</span><span class="ft-ct">3건</span><span class="ft-fh-admin">🔒 담당: 김현대</span></div>
<div class="ft-ds" style="max-height:2000px">
<!-- 높음: 구매업무규정 (전문) -->
<div class="ft-d" onclick="td('dap1')"><div class="ft-dl"><span class="ft-di">📕</span><div style="flex:1;min-width:0"><span class="ft-dn">구매업무규정 (전문)</span><div class="ft-d-info">김현대 · 구매디지털추진 · 2025.01.15</div></div></div><div class="ft-dr"><span class="emb emb-ok">✓</span><span class="bd bd-h">높음</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('삭제하시겠습니까?'))this.closest('.ft-d').style.display='none'">🗑</button></div></div>
<div class="dap" id="dap1" style="display:none"><div class="dap-bd">
<div class="dap-sec"><div class="dap-lb"><span class="bd bd-h" style="font-size:9px;margin-right:4px">높음</span> 팀장급 열람 — 팀 추가 시 팀장 자동 지정 <button class="add-t">＋ 팀 추가</button></div><div class="tc"><div class="tch">구매전략팀 (김전략 팀장) <span class="rx" onclick="this.parentElement.remove()">✕</span></div><div class="tch">구매기획팀 (박기획 팀장) <span class="rx" onclick="this.parentElement.remove()">✕</span></div><div class="tch">구매디지털추진팀 (김현대) <span class="rx" onclick="this.parentElement.remove()">✕</span></div></div></div>
<div class="dap-sec"><div class="dap-lb">개인 예외 접근 <button class="add-t">＋ 개인</button></div>
<div class="ind-r"><div class="ind-u"><div class="ind-av">정</div><span class="ind-nm">정현수</span><span class="ind-dp">구매품질기획</span></div><div style="display:flex;align-items:center;gap:6px"><span class="ind-rs">5스타 평가 연계</span><button class="ind-rm" onclick="this.closest('.ind-r').remove()">✕</button></div></div>
</div>
<div class="dap-sec"><div class="dap-lb">파일 담당자 (최종 권한 지정)</div>
<div class="ind-r"><div class="ind-u"><div class="ind-av" style="background:var(--accent)">김</div><span class="ind-nm">김현대</span><span class="ind-dp">시스템관리자</span></div><div style="display:flex;align-items:center;gap:6px"><span class="ind-rs" style="background:var(--accent-dim);color:var(--accent)">파일 담당자</span></div></div>
</div>
</div></div>
<!-- 높음: 수의계약 운영지침 -->
<div class="ft-d" onclick="td('dap1b')"><div class="ft-dl"><span class="ft-di">📕</span><div style="flex:1;min-width:0"><span class="ft-dn">수의계약 운영지침 v3.0</span><div class="ft-d-info">이준혁 · 구매전략 · 2025.02.01</div></div></div><div class="ft-dr"><span class="emb emb-wip">⏳</span><span class="bd bd-h">높음</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('삭제하시겠습니까?'))this.closest('.ft-d').style.display='none'">🗑</button></div></div>
<div class="dap" id="dap1b" style="display:none"><div class="dap-bd">
<div class="dap-sec"><div class="dap-lb"><span class="bd bd-h" style="font-size:9px;margin-right:4px">높음</span> 팀장급 열람 <button class="add-t">＋ 팀 추가</button></div><div class="tc"><div class="tch">구매전략팀 (김전략 팀장) <span class="rx" onclick="this.parentElement.remove()">✕</span></div></div></div>
<div class="dap-sec"><div class="dap-lb">개인 예외 접근 <button class="add-t">＋ 개인</button></div><div style="font-size:10px;color:var(--text-4);padding:4px">지정된 개인 없음</div></div>
<div class="dap-sec"><div class="dap-lb">파일 담당자</div>
<div class="ind-r"><div class="ind-u"><div class="ind-av" style="background:var(--accent)">김</div><span class="ind-nm">김현대</span><span class="ind-dp">시스템관리자</span></div><div style="display:flex;align-items:center;gap:6px"><span class="ind-rs" style="background:var(--accent-dim);color:var(--accent)">파일 담당자</span></div></div></div>
</div></div>
<!-- 중간: 계약관리 규정 -->
<div class="ft-d" onclick="td('dap1c')"><div class="ft-dl"><span class="ft-di">📘</span><div style="flex:1;min-width:0"><span class="ft-dn">계약관리 규정</span><div class="ft-d-info">이준혁 · 구매전략 · 2025.01.20</div></div></div><div class="ft-dr"><span class="emb emb-ok">✓</span><span class="bd bd-md">중간</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('삭제하시겠습니까?'))this.closest('.ft-d').style.display='none'">🗑</button></div></div>
<div class="dap" id="dap1c" style="display:none"><div class="dap-bd">
<div class="dap-sec"><div class="dap-lb"><span class="bd bd-md" style="font-size:9px;margin-right:4px">중간</span> 허용 팀 (팀 전원 열람) <button class="add-t">＋ 팀 추가</button></div><div class="tc"><div class="tch">구매전략팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div><div class="tch">구매기획팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div><div class="tch">구매디지털추진팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div><div class="tch">구매품질기획팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div></div></div>
<div class="dap-sec"><div class="dap-lb">개인 예외 접근 <button class="add-t">＋ 개인</button></div><div style="font-size:10px;color:var(--text-4);padding:4px">지정된 개인 없음</div></div>
<div class="dap-sec"><div class="dap-lb">파일 담당자</div>
<div class="ind-r"><div class="ind-u"><div class="ind-av" style="background:var(--accent)">김</div><span class="ind-nm">김현대</span><span class="ind-dp">시스템관리자</span></div><div style="display:flex;align-items:center;gap:6px"><span class="ind-rs" style="background:var(--accent-dim);color:var(--accent)">파일 담당자</span></div></div></div>
</div></div>
</div></div>

<!-- 입찰관리 폴더 -->
<div class="ft-f"><div class="ft-fh" onclick="tf(this)"><span class="ft-ar op">▶</span><span class="ft-ic">📂</span><span class="ft-nm">입찰관리</span><span class="ft-ct">2건</span><span class="ft-fh-admin">🔒 담당: 김현대</span></div>
<div class="ft-ds" style="max-height:1500px">
<!-- 중간: 입찰운영 업무표준 -->
<div class="ft-d" onclick="td('dap2a')"><div class="ft-dl"><span class="ft-di">📘</span><div style="flex:1;min-width:0"><span class="ft-dn">입찰운영 업무표준 STD-PUR-012</span><div class="ft-d-info">김현대 · 디지털추진 · 2025.01.10</div></div></div><div class="ft-dr"><span class="emb emb-ok">✓</span><span class="bd bd-md">중간</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('삭제하시겠습니까?'))this.closest('.ft-d').style.display='none'">🗑</button></div></div>
<div class="dap" id="dap2a" style="display:none"><div class="dap-bd">
<div class="dap-sec"><div class="dap-lb"><span class="bd bd-md" style="font-size:9px;margin-right:4px">중간</span> 허용 팀 <button class="add-t">＋ 팀 추가</button></div><div class="tc"><div class="tch">구매전략팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div><div class="tch">반도체구매팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div><div class="tch">PT제어부품구매팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div></div></div>
<div class="dap-sec"><div class="dap-lb">개인 예외 접근 <button class="add-t">＋ 개인</button></div>
<div class="ind-r"><div class="ind-u"><div class="ind-av">윤</div><span class="ind-nm">윤서연</span><span class="ind-dp">구매역량개발</span></div><div style="display:flex;align-items:center;gap:6px"><span class="ind-rs">교육 콘텐츠 제작</span><button class="ind-rm" onclick="this.closest('.ind-r').remove()">✕</button></div></div></div>
<div class="dap-sec"><div class="dap-lb">파일 담당자</div>
<div class="ind-r"><div class="ind-u"><div class="ind-av" style="background:var(--accent)">김</div><span class="ind-nm">김현대</span><span class="ind-dp">시스템관리자</span></div><div style="display:flex;align-items:center;gap:6px"><span class="ind-rs" style="background:var(--accent-dim);color:var(--accent)">파일 담당자</span></div></div></div>
</div></div>
<div class="ft-d"><div class="ft-dl"><span class="ft-di">📕</span><div style="flex:1;min-width:0"><span class="ft-dn">경매입찰 가이드라인 v2.1</span><div class="ft-d-info">김현대 · 디지털추진 · 2025.01.12</div></div></div><div class="ft-dr"><span class="emb emb-ok">✓</span><span class="bd bd-l">낮음</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('삭제하시겠습니까?'))this.closest('.ft-d').style.display='none'">🗑</button></div></div>
</div></div>

<!-- VAATZ 매뉴얼 -->
<div class="ft-f"><div class="ft-fh" onclick="tf(this)"><span class="ft-ar">▶</span><span class="ft-ic">📂</span><span class="ft-nm">VAATZ 매뉴얼</span><span class="ft-ct">3건</span><span class="ft-fh-admin">🔒 담당: 김현대</span></div>
<div class="ft-ds cl" style="max-height:0">
<div class="ft-d"><div class="ft-dl"><span class="ft-di">🖥️</span><div style="flex:1;min-width:0"><span class="ft-dn">VAATZ 입찰모듈 매뉴얼</span><div class="ft-d-info">김현대 · 디지털추진 · 2025.01.08</div></div></div><div class="ft-dr"><span class="emb emb-ok">✓</span><span class="bd bd-l">낮음</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('삭제하시겠습니까?'))this.closest('.ft-d').style.display='none'">🗑</button></div></div>
<div class="ft-d"><div class="ft-dl"><span class="ft-di">🖥️</span><div style="flex:1;min-width:0"><span class="ft-dn">VAATZ 발주/검수 매뉴얼</span><div class="ft-d-info">김현대 · 디지털추진 · 2025.01.08</div></div></div><div class="ft-dr"><span class="emb emb-ok">✓</span><span class="bd bd-l">낮음</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('삭제하시겠습니까?'))this.closest('.ft-d').style.display='none'">🗑</button></div></div>
<div class="ft-d"><div class="ft-dl"><span class="ft-di">🖥️</span><div style="flex:1;min-width:0"><span class="ft-dn">VAATZ 마스터 데이터 관리</span><div class="ft-d-info">김현대 · 디지털추진 · 2025.02.05</div></div></div><div class="ft-dr"><span class="emb emb-wip">⏳</span><span class="bd bd-l">낮음</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('삭제하시겠습니까?'))this.closest('.ft-d').style.display='none'">🗑</button></div></div>
</div></div>

<!-- 품질 5스타 -->
<div class="ft-f"><div class="ft-fh" onclick="tf(this)"><span class="ft-ar">▶</span><span class="ft-ic">📂</span><span class="ft-nm">품질 5스타</span><span class="ft-ct">2건</span><span class="ft-fh-admin">🔒 담당: 정현수</span></div>
<div class="ft-ds cl" style="max-height:0">
<div class="ft-d" onclick="td('dap4a')"><div class="ft-dl"><span class="ft-di">📗</span><div style="flex:1;min-width:0"><span class="ft-dn">협력사 품질 5스타 운영기준</span><div class="ft-d-info">정현수 · 구매품질기획 · 2025.01.05</div></div></div><div class="ft-dr"><span class="emb emb-ok">✓</span><span class="bd bd-md">중간</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('삭제하시겠습니까?'))this.closest('.ft-d').style.display='none'">🗑</button></div></div>
<div class="dap" id="dap4a" style="display:none"><div class="dap-bd">
<div class="dap-sec"><div class="dap-lb"><span class="bd bd-md" style="font-size:9px;margin-right:4px">중간</span> 허용 팀 <button class="add-t">＋ 팀 추가</button></div><div class="tc"><div class="tch">구매품질기획팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div><div class="tch">구매전략팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div></div></div>
<div class="dap-sec"><div class="dap-lb">개인 예외 접근 <button class="add-t">＋ 개인</button></div><div style="font-size:10px;color:var(--text-4);padding:4px">지정된 개인 없음</div></div>
<div class="dap-sec"><div class="dap-lb">파일 담당자</div>
<div class="ind-r"><div class="ind-u"><div class="ind-av" style="background:var(--v)">정</div><span class="ind-nm">정현수</span><span class="ind-dp">구매품질기획</span></div><div style="display:flex;align-items:center;gap:6px"><span class="ind-rs" style="background:var(--accent-dim);color:var(--accent)">파일 담당자</span></div></div></div>
</div></div>
<div class="ft-d"><div class="ft-dl"><span class="ft-di">📗</span><div style="flex:1;min-width:0"><span class="ft-dn">5스타 평가 체크리스트</span><div class="ft-d-info">정현수 · 구매품질기획 · 2025.01.05</div></div></div><div class="ft-dr"><span class="emb emb-ok">✓</span><span class="bd bd-l">낮음</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('삭제하시겠습니까?'))this.closest('.ft-d').style.display='none'">🗑</button></div></div>
</div></div>

<!-- 용어사전 · 양식 -->
<div class="ft-f"><div class="ft-fh" onclick="tf(this)"><span class="ft-ar">▶</span><span class="ft-ic">📂</span><span class="ft-nm">용어사전 · 양식</span><span class="ft-ct">4건</span><span class="ft-fh-admin">🔒 담당: 김현대</span></div>
<div class="ft-ds cl" style="max-height:0">
<div class="ft-d"><div class="ft-dl"><span class="ft-di">📘</span><div style="flex:1;min-width:0"><span class="ft-dn">구매용어 표준정의집 2025</span><div class="ft-d-info">김현대 · 디지털추진 · 2025.02.03</div></div></div><div class="ft-dr"><span class="emb emb-wip">⏳</span><span class="bd bd-l">낮음</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('삭제하시겠습니까?'))this.closest('.ft-d').style.display='none'">🗑</button></div></div>
<div class="ft-d"><div class="ft-dl"><span class="ft-di">📄</span><div style="flex:1;min-width:0"><span class="ft-dn">구매요청서 양식</span><div class="ft-d-info">김현대 · 디지털추진 · 2025.01.02</div></div></div><div class="ft-dr"><span class="emb emb-ok">✓</span><span class="bd bd-l">낮음</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('삭제하시겠습니까?'))this.closest('.ft-d').style.display='none'">🗑</button></div></div>
<div class="ft-d"><div class="ft-dl"><span class="ft-di">📄</span><div style="flex:1;min-width:0"><span class="ft-dn">수의계약 사유서 양식</span><div class="ft-d-info">김현대 · 디지털추진 · 2025.01.02</div></div></div><div class="ft-dr"><span class="emb emb-ok">✓</span><span class="bd bd-l">낮음</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('삭제하시겠습니까?'))this.closest('.ft-d').style.display='none'">🗑</button></div></div>
<div class="ft-d"><div class="ft-dl"><span class="ft-di">📄</span><div style="flex:1;min-width:0"><span class="ft-dn">검수확인서 양식</span><div class="ft-d-info">김현대 · 디지털추진 · 2025.01.02</div></div></div><div class="ft-dr"><span class="emb emb-ok">✓</span><span class="bd bd-l">낮음</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('삭제하시겠습니까?'))this.closest('.ft-d').style.display='none'">🗑</button></div></div>
</div></div>
</div>
</div>

<div class="adm-b" id="p-adm" style="display:none">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
<div style="font-size:13px;font-weight:600">Admin 담당자 관리 <span style="color:var(--text-4);font-size:11px;font-weight:400">— 시스템관리자 전용</span></div>
<button class="tb-b" style="font-size:11px">＋ 담당자 추가</button>
</div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px">Admin 담당자는 배정된 팀/폴더의 <b style="color:var(--text-2)">요청관리</b>(승인/보완 요청)와 <b style="color:var(--text-2)">문서관리</b>(팀추가/개인추가)를 수행합니다. 시스템관리자가 담당자를 지정·해제합니다.</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px">
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:var(--r-sm);padding:12px">
<div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-4);margin-bottom:4px">총 담당자</div>
<div style="font-size:22px;font-weight:700;font-family:'Outfit',sans-serif;color:var(--accent)">3<span style="font-size:11px;font-weight:400;color:var(--text-4);margin-left:4px">명 활성</span></div>
</div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:var(--r-sm);padding:12px">
<div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-4);margin-bottom:4px">관리 영역</div>
<div style="font-size:22px;font-weight:700;font-family:'Outfit',sans-serif;color:var(--text-1)">8<span style="font-size:11px;font-weight:400;color:var(--text-4);margin-left:4px">개 팀 커버</span></div>
</div>
</div>

<!-- 담당자 목록 -->
<div style="margin-bottom:8px">
<div style="background:var(--bg-2);border:1px solid var(--accent-bd);border-radius:var(--r-sm);padding:14px;margin-bottom:6px">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
<div style="width:32px;height:32px;border-radius:8px;background:var(--accent-g);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:white">김</div>
<div style="flex:1"><div style="font-size:13px;font-weight:600;color:var(--text-1)">김현대 <span class="bd bd-a" style="font-size:8px">시스템관리자</span></div><div style="font-size:10px;color:var(--text-3)">책임매니저 · 구매디지털추진팀</div></div>
<div class="tg on" onclick="this.classList.toggle('on')"></div>
</div>
<div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-4);margin-bottom:6px">담당 영역 (요청관리 + 문서관리)</div>
<div style="display:flex;flex-wrap:wrap;gap:4px">
<div class="tch tch-lock">구매디지털추진팀 <span class="lock-ic">🔒</span></div>
<div class="tch">구매전략팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div>
<div class="tch">반도체구매팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div>
<div class="tch">PT제어부품구매팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div>
<div class="tch">구매역량개발팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div>
<div class="tch" style="border-style:dashed;border-color:var(--accent-bd);color:var(--accent)">📁 구매업무규정</div>
<div class="tch" style="border-style:dashed;border-color:var(--accent-bd);color:var(--accent)">📁 입찰관리</div>
<div class="tch" style="border-style:dashed;border-color:var(--accent-bd);color:var(--accent)">📁 VAATZ 매뉴얼</div>
<div class="tch" style="border-style:dashed;border-color:var(--accent-bd);color:var(--accent)">📁 용어사전·양식</div>
<button class="add-t" style="padding:3px 8px;font-size:10px">＋ 영역 추가</button>
</div>
<div style="font-size:10px;color:var(--text-4);margin-top:8px">권한: 요청 승인/보완 요청 · 문서 팀/개인 접근 추가 · 파일 담당자 지정 · <span style="color:var(--r)">폴더 이동/삭제 불가</span></div>
</div>

<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:var(--r-sm);padding:14px;margin-bottom:6px">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
<div style="width:32px;height:32px;border-radius:8px;background:var(--v);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:white">정</div>
<div style="flex:1"><div style="font-size:13px;font-weight:600;color:var(--text-1)">정현수 <span class="bd bd-m" style="font-size:8px">Admin 담당자</span></div><div style="font-size:10px;color:var(--text-3)">책임매니저 · 구매품질기획팀</div></div>
<div class="tg on" onclick="this.classList.toggle('on')"></div>
</div>
<div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-4);margin-bottom:6px">담당 영역</div>
<div style="display:flex;flex-wrap:wrap;gap:4px">
<div class="tch tch-lock">구매품질기획팀 <span class="lock-ic">🔒</span></div>
<div class="tch" style="border-style:dashed;border-color:var(--accent-bd);color:var(--accent)">📁 품질 5스타</div>
<button class="add-t" style="padding:3px 8px;font-size:10px">＋ 영역 추가</button>
</div>
<div style="font-size:10px;color:var(--text-4);margin-top:8px">권한: 품질 5스타 문서 접근 관리 · 구매품질기획 요청 승인/보완 요청</div>
</div>

<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:var(--r-sm);padding:14px;margin-bottom:6px">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
<div style="width:32px;height:32px;border-radius:8px;background:var(--t);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:white">이</div>
<div style="flex:1"><div style="font-size:13px;font-weight:600;color:var(--text-1)">이준혁 <span class="bd bd-m" style="font-size:8px">Admin 담당자</span></div><div style="font-size:10px;color:var(--text-3)">책임매니저 · 구매전략팀</div></div>
<div class="tg on" onclick="this.classList.toggle('on')"></div>
</div>
<div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-4);margin-bottom:6px">담당 영역</div>
<div style="display:flex;flex-wrap:wrap;gap:4px">
<div class="tch tch-lock">구매전략팀 <span class="lock-ic">🔒</span></div>
<div class="tch">샤시부품구매1팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div>
<div class="tch">의장시스템부품개발팀 <span class="rx" onclick="this.parentElement.remove()">✕</span></div>
<button class="add-t" style="padding:3px 8px;font-size:10px">＋ 영역 추가</button>
</div>
<div style="font-size:10px;color:var(--text-4);margin-top:8px">권한: 해당 팀 요청 승인/보완 요청 · 문서 팀/개인 접근 관리</div>
</div>
</div>

<div style="padding:10px 12px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:var(--r-sm);font-size:10px;line-height:1.7">
<div style="font-weight:600;color:var(--text-2);margin-bottom:4px">⚡ 권한 정책 요약</div>
<div style="color:var(--text-3)">
• <b style="color:var(--accent)">시스템관리자</b>: 모든 권한 (담당자 지정/해제, 폴더 생성/이동/삭제, 전체 보안 관리)<br>
• <b style="color:var(--a)">Admin 담당자</b>: 배정된 팀의 요청 승인/보완 요청 + 배정된 폴더의 팀추가/개인추가/파일 담당자 지정<br>
• 🔒 <b style="color:var(--text-2)">본인 소속 팀 자동 고정</b>: 각 담당자의 소속 팀은 자동 배정되며 해제 불가<br>
• <span style="color:var(--r)">제한</span>: Admin 담당자는 폴더 생성·이동·삭제 불가, 다른 담당자 영역 접근 불가
</div>
</div>
</div>

<div class="adm-b" id="p-int" style="display:none">
<div style="font-size:13px;font-weight:600;margin-bottom:3px;font-family:'Noto Sans KR',sans-serif">사내 시스템 데이터 연계</div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px;font-family:'Noto Sans KR',sans-serif">API를 통해 사내 시스템 데이터를 자동으로 가져와 AI 답변에 활용합니다.</div>
<div class="int-sum">
<div class="int-sum-i"><div class="int-sum-d dg"></div><span class="int-sum-n">3</span> 연결됨</div>
<div class="int-sum-i"><div class="int-sum-d dy"></div><span class="int-sum-n">1</span> 동기화 중</div>
<div class="int-sum-i"><div class="int-sum-d dd"></div><span class="int-sum-n">1</span> 연결 대기</div>
<div style="margin-left:auto"><button class="tb-b" style="font-size:11px">＋ 시스템 연결 추가</button></div>
</div>
<div class="int-grid">
<div class="int-card c-on"><div class="int-top"><div class="int-left"><div class="int-ic ic1">📖</div><div><div class="int-nm" style="font-family:'Noto Sans KR',sans-serif">Autopedia</div><div class="int-ds" style="font-family:'Noto Sans KR',sans-serif">업무용어 사전 시스템</div></div></div><div class="int-st st-on"><div class="st-dot"></div>연결됨</div></div><div class="int-dets"><div><div class="int-det-l">연동 데이터</div><div class="int-det-v">용어 4,832건</div></div><div><div class="int-det-l">마지막 동기화</div><div class="int-det-v">10분 전</div></div><div><div class="int-det-l">동기화 주기</div><div class="int-det-v">1시간마다</div></div><div><div class="int-det-l">API 응답</div><div class="int-det-v">142ms ✓</div></div></div><div class="int-ft"><button class="int-btn">🔄 수동 동기화</button><span class="int-log">최근 7일 오류 0건</span></div></div>
<div class="int-card c-on"><div class="int-top"><div class="int-left"><div class="int-ic ic2">📋</div><div><div class="int-nm" style="font-family:'Noto Sans KR',sans-serif">사내 업무표준</div><div class="int-ds" style="font-family:'Noto Sans KR',sans-serif">업무표준 관리 시스템 (BPS)</div></div></div><div class="int-st st-on"><div class="st-dot"></div>연결됨</div></div><div class="int-dets"><div><div class="int-det-l">연동 데이터</div><div class="int-det-v">표준문서 312건</div></div><div><div class="int-det-l">마지막 동기화</div><div class="int-det-v">32분 전</div></div><div><div class="int-det-l">동기화 주기</div><div class="int-det-v">6시간마다</div></div><div><div class="int-det-l">API 응답</div><div class="int-det-v">238ms ✓</div></div></div><div class="int-ft"><button class="int-btn">🔄 수동 동기화</button><span class="int-log">최근 7일 오류 0건</span></div></div>
<div class="int-card c-sync"><div class="int-top"><div class="int-left"><div class="int-ic ic3">🎓</div><div><div class="int-nm" style="font-family:'Noto Sans KR',sans-serif">Learning Lounge</div><div class="int-ds" style="font-family:'Noto Sans KR',sans-serif">사내 교육 시스템</div></div></div><div class="int-st st-sy"><div class="st-dot"></div>동기화 중</div></div><div class="int-dets"><div><div class="int-det-l">연동 데이터</div><div class="int-det-v">교육과정 186건</div></div><div><div class="int-det-l">진행률</div><div class="int-det-v">68% 진행 중</div></div><div><div class="int-det-l">동기화 주기</div><div class="int-det-v">매일 02:00</div></div><div><div class="int-det-l">API 응답</div><div class="int-det-v">420ms</div></div></div><div class="int-ft"><button class="int-btn dis">⏳ 동기화 진행 중...</button><span class="int-log">최근 7일 오류 2건</span></div></div>
<div class="int-card c-on"><div class="int-top"><div class="int-left"><div class="int-ic ic4">🏢</div><div><div class="int-nm" style="font-family:'Noto Sans KR',sans-serif">사내 복지</div><div class="int-ds" style="font-family:'Noto Sans KR',sans-serif">복리후생 포털</div></div></div><div class="int-st st-on"><div class="st-dot"></div>연결됨</div></div><div class="int-dets"><div><div class="int-det-l">연동 데이터</div><div class="int-det-v">복지제도 94건</div></div><div><div class="int-det-l">마지막 동기화</div><div class="int-det-v">1시간 전</div></div><div><div class="int-det-l">동기화 주기</div><div class="int-det-v">매일 06:00</div></div><div><div class="int-det-l">API 응답</div><div class="int-det-v">189ms ✓</div></div></div><div class="int-ft"><button class="int-btn">🔄 수동 동기화</button><span class="int-log">최근 7일 오류 0건</span></div></div>
<div class="int-card c-wait"><div class="int-top"><div class="int-left"><div class="int-ic ic5">🖥️</div><div><div class="int-nm" style="font-family:'Noto Sans KR',sans-serif">VAATZ 마스터 데이터</div><div class="int-ds" style="font-family:'Noto Sans KR',sans-serif">구매 시스템 업체·품목 마스터</div></div></div><div class="int-st st-wt"><div class="st-dot"></div>연결 대기</div></div><div class="int-dets"><div><div class="int-det-l">연동 예정</div><div class="int-det-v">업체·품목 마스터</div></div><div><div class="int-det-l">예정일</div><div class="int-det-v">2025.03.01</div></div><div><div class="int-det-l">담당</div><div class="int-det-v">구매디지털추진팀</div></div><div><div class="int-det-l">진행 상태</div><div class="int-det-v">API 개발 중</div></div></div><div class="int-ft"><button class="int-btn">⚙️ 연결 설정</button><span class="int-log">API 스펙 협의 완료</span></div></div>
<div class="int-card c-on"><div class="int-top"><div class="int-left"><div class="int-ic ic6">📤</div><div><div class="int-nm" style="font-family:'Noto Sans KR',sans-serif">VAATZ 수동 데이터</div><div class="int-ds" style="font-family:'Noto Sans KR',sans-serif">시스템 Admin 직접 등록 · 매뉴얼/양식/수동 데이터</div></div></div><div class="int-st st-on"><div class="st-dot"></div>활성</div></div><div class="int-dets"><div><div class="int-det-l">등록 문서</div><div class="int-det-v">14건</div></div><div><div class="int-det-l">임베딩 완료</div><div class="int-det-v">11건 (79%)</div></div><div><div class="int-det-l">마지막 업로드</div><div class="int-det-v">오늘 09:30</div></div><div><div class="int-det-l">총 용량</div><div class="int-det-v">48.2 MB</div></div></div>
<div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border-1)">
<div style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-4);margin-bottom:6px">사용자별 업로드 현황</div>
<div style="display:flex;flex-direction:column;gap:3px">
<div style="display:flex;align-items:center;gap:6px;font-size:11px"><div style="width:56px;color:var(--text-2);font-weight:500">김현대</div><div style="flex:1;height:4px;background:var(--bg-4);border-radius:2px;overflow:hidden"><div style="width:43%;height:100%;background:var(--accent);border-radius:2px"></div></div><span style="font-size:10px;color:var(--text-3);font-family:'JetBrains Mono',monospace;width:24px;text-align:right">6건</span></div>
<div style="display:flex;align-items:center;gap:6px;font-size:11px"><div style="width:56px;color:var(--text-2);font-weight:500">이준혁</div><div style="flex:1;height:4px;background:var(--bg-4);border-radius:2px;overflow:hidden"><div style="width:21%;height:100%;background:var(--g);border-radius:2px"></div></div><span style="font-size:10px;color:var(--text-3);font-family:'JetBrains Mono',monospace;width:24px;text-align:right">3건</span></div>
<div style="display:flex;align-items:center;gap:6px;font-size:11px"><div style="width:56px;color:var(--text-2);font-weight:500">정현수</div><div style="flex:1;height:4px;background:var(--bg-4);border-radius:2px;overflow:hidden"><div style="width:14%;height:100%;background:var(--a);border-radius:2px"></div></div><span style="font-size:10px;color:var(--text-3);font-family:'JetBrains Mono',monospace;width:24px;text-align:right">2건</span></div>
<div style="display:flex;align-items:center;gap:6px;font-size:11px"><div style="width:56px;color:var(--text-2);font-weight:500">한도윤</div><div style="flex:1;height:4px;background:var(--bg-4);border-radius:2px;overflow:hidden"><div style="width:7%;height:100%;background:var(--v);border-radius:2px"></div></div><span style="font-size:10px;color:var(--text-3);font-family:'JetBrains Mono',monospace;width:24px;text-align:right">1건</span></div>
<div style="display:flex;align-items:center;gap:6px;font-size:11px"><div style="width:56px;color:var(--text-2);font-weight:500">최유진</div><div style="flex:1;height:4px;background:var(--bg-4);border-radius:2px;overflow:hidden"><div style="width:7%;height:100%;background:var(--t);border-radius:2px"></div></div><span style="font-size:10px;color:var(--text-3);font-family:'JetBrains Mono',monospace;width:24px;text-align:right">1건</span></div>
<div style="display:flex;align-items:center;gap:6px;font-size:11px"><div style="width:56px;color:var(--text-2);font-weight:500">박성민</div><div style="flex:1;height:4px;background:var(--bg-4);border-radius:2px;overflow:hidden"><div style="width:7%;height:100%;background:var(--text-3);border-radius:2px"></div></div><span style="font-size:10px;color:var(--text-3);font-family:'JetBrains Mono',monospace;width:24px;text-align:right">1건</span></div>
</div>
</div>
<div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border-1)">
<div style="font-size:10px;font-weight:600;color:var(--text-2);margin-bottom:6px">📤 VAATZ 수동 데이터 직접 업로드</div>
<div style="border:1px dashed var(--border-3);border-radius:8px;padding:14px;text-align:center;background:var(--bg-3);cursor:pointer;transition:all .2s" onclick="toast('파일 업로드 시뮬레이션: 선택한 파일이 임베딩 대기열에 추가됩니다.','📤',2500)" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border-3)'">
<div style="font-size:20px;margin-bottom:4px">☁️</div>
<div style="font-size:11px;color:var(--text-2)">클릭하여 파일 업로드</div>
<div style="font-size:9px;color:var(--text-4);margin-top:2px">PDF, DOCX, XLSX, CSV · 최대 50MB · 업로드 후 자동 임베딩</div>
</div>
</div>
<div class="int-ft"><button class="int-btn">📁 문서 관리로 이동</button><span class="int-log">임베딩 대기 3건</span></div></div>
</div>
</div>

<div class="adm-b" id="p-mon" style="display:none">

<!-- v20: Enhanced Hero Dashboard -->
<div class="adm-hero">
  <div class="hero-c h-1">
    <div class="hero-lb">RAG 답변 신뢰도 (이번 달 평균)</div>
    <div class="hero-v">94.2<span class="hero-v-u">%</span></div>
    <div class="hero-trend up">▲ 2.3% — 근거 매핑률 개선</div>
    <div class="hero-spark"><div class="hero-spark-b" style="height:48%"></div><div class="hero-spark-b" style="height:52%"></div><div class="hero-spark-b" style="height:55%"></div><div class="hero-spark-b" style="height:60%"></div><div class="hero-spark-b" style="height:66%"></div><div class="hero-spark-b" style="height:74%"></div><div class="hero-spark-b" style="height:80%"></div><div class="hero-spark-b" style="height:88%"></div><div class="hero-spark-b" style="height:94%"></div></div>
  </div>
  <div class="hero-c h-2">
    <div class="hero-lb">이번 달 총 질의</div>
    <div class="hero-v">2,847</div>
    <div class="hero-trend up">▲ 12.4%</div>
    <div class="hero-spark"><div class="hero-spark-b" style="height:30%"></div><div class="hero-spark-b" style="height:42%"></div><div class="hero-spark-b" style="height:38%"></div><div class="hero-spark-b" style="height:55%"></div><div class="hero-spark-b" style="height:62%"></div><div class="hero-spark-b" style="height:58%"></div><div class="hero-spark-b" style="height:75%"></div><div class="hero-spark-b" style="height:82%"></div><div class="hero-spark-b" style="height:96%"></div></div>
  </div>
  <div class="hero-c h-3">
    <div class="hero-lb">평균 응답 시간</div>
    <div class="hero-v">1.8<span class="hero-v-u">초</span></div>
    <div class="hero-trend nt">— 변동 없음</div>
    <div class="hero-spark"><div class="hero-spark-b" style="height:60%"></div><div class="hero-spark-b" style="height:55%"></div><div class="hero-spark-b" style="height:62%"></div><div class="hero-spark-b" style="height:58%"></div><div class="hero-spark-b" style="height:50%"></div><div class="hero-spark-b" style="height:54%"></div><div class="hero-spark-b" style="height:48%"></div><div class="hero-spark-b" style="height:52%"></div><div class="hero-spark-b" style="height:50%"></div></div>
  </div>
  <div class="hero-c h-4">
    <div class="hero-lb">활성 사용자 (월간)</div>
    <div class="hero-v">48<span class="hero-v-u">명</span></div>
    <div class="hero-trend up">▲ 8명 onboarding</div>
    <div class="hero-spark"><div class="hero-spark-b" style="height:35%"></div><div class="hero-spark-b" style="height:42%"></div><div class="hero-spark-b" style="height:48%"></div><div class="hero-spark-b" style="height:55%"></div><div class="hero-spark-b" style="height:65%"></div><div class="hero-spark-b" style="height:72%"></div><div class="hero-spark-b" style="height:80%"></div><div class="hero-spark-b" style="height:88%"></div><div class="hero-spark-b" style="height:96%"></div></div>
  </div>
</div>

<div class="mon-section">
<div class="mon-title"><span>🎯</span> 답변 품질 자동 점검</div>
<div class="qg">
<div class="qc">
<div class="qc-top"><span class="qc-label">근거 정확도</span><span class="qc-val" style="color:var(--g)">94.2%</span></div>
<div class="pgb"><div class="pgb-f pgb-g" style="width:94%"></div></div>
<div class="qc-desc">AI 답변이 참조 문서와 일치하는 비율<br>→ 95% 이상이면 안정 수준</div>
</div>
<div class="qc">
<div class="qc-top"><span class="qc-label">오답 의심 건수</span><span class="qc-val" style="color:var(--a)">14건</span></div>
<div class="pgb"><div class="pgb-f pgb-a" style="width:12%"></div></div>
<div class="qc-desc">근거 문서와 내용이 다른 답변 자동 감지<br>→ 관리자 검토 후 확정/해제</div>
</div>
<div class="qc">
<div class="qc-top"><span class="qc-label">출처 매핑 성공</span><span class="qc-val" style="color:var(--g)">97.8%</span></div>
<div class="pgb"><div class="pgb-f pgb-g" style="width:97.8%"></div></div>
<div class="qc-desc">답변 내용에 정확한 출처를 연결한 비율<br>→ 출처 없는 답변 자동 경고</div>
</div>
</div>
</div>

<div class="mon-section">
<div class="mon-title"><span>📊</span> 사용자들이 많이 묻는 주제 TOP 8</div>
<div class="topic-bar">
<div class="topic-row"><span class="topic-label">입찰 절차</span><div class="topic-fill-bg"><div class="topic-fill" style="width:100%"></div></div><span class="topic-val">312</span></div>
<div class="topic-row"><span class="topic-label">VAATZ 사용법</span><div class="topic-fill-bg"><div class="topic-fill" style="width:92%"></div></div><span class="topic-val">287</span></div>
<div class="topic-row"><span class="topic-label">5스타 평가</span><div class="topic-fill-bg"><div class="topic-fill" style="width:63%"></div></div><span class="topic-val">198</span></div>
<div class="topic-row"><span class="topic-label">수의계약</span><div class="topic-fill-bg"><div class="topic-fill" style="width:50%"></div></div><span class="topic-val">156</span></div>
<div class="topic-row"><span class="topic-label">용어 정의</span><div class="topic-fill-bg"><div class="topic-fill" style="width:43%"></div></div><span class="topic-val">134</span></div>
<div class="topic-row"><span class="topic-label">검수·납품</span><div class="topic-fill-bg"><div class="topic-fill" style="width:36%"></div></div><span class="topic-val">112</span></div>
<div class="topic-row"><span class="topic-label">계약서 작성</span><div class="topic-fill-bg"><div class="topic-fill" style="width:31%"></div></div><span class="topic-val">98</span></div>
<div class="topic-row"><span class="topic-label">환율·해외구매</span><div class="topic-fill-bg"><div class="topic-fill" style="width:24%"></div></div><span class="topic-val">76</span></div>
</div>
</div>

<div class="mon-section">
<div class="mon-title"><span>⚠️</span> 개선이 필요한 부분</div>
<div class="action-list">
<div class="action-i">
<div class="action-icon urgent">🔴</div>
<div class="action-body">
<div class="action-title">"해외법인 구매 승인 체계" 관련 질의 18건 — 답변 불가</div>
<div class="action-desc">등록된 문서에 해당 내용이 없어 답변하지 못했습니다. 해외법인 구매규정 문서를 추가하면 해결됩니다.</div>
<span class="action-tag tag-r">문서 추가 필요</span>
</div>
</div>
<div class="action-i">
<div class="action-icon improve">🟡</div>
<div class="action-body">
<div class="action-title">"VAATZ 마감처리" 관련 답변 만족도 62%로 낮음</div>
<div class="action-desc">현재 등록된 매뉴얼이 구버전(2024.09)이라 최신 화면과 달라 불만족이 발생하고 있습니다.</div>
<span class="action-tag tag-a">문서 업데이트 필요</span>
</div>
</div>
<div class="action-i">
<div class="action-icon improve">🟡</div>
<div class="action-body">
<div class="action-title">"경매입찰 최소 금액" 답변에서 오답 의심 1건</div>
<div class="action-desc">AI가 "5천만원"이라 답변했으나, 규정 원문은 "1억원"입니다. 자동 감지되어 수정 완료.</div>
<span class="action-tag tag-a">자동 보정됨</span>
</div>
</div>
<div class="action-i">
<div class="action-icon info0">🔵</div>
<div class="action-body">
<div class="action-title">"탄력적입찰" 질의 이번 주 급증 (+180%)</div>
<div class="action-desc">신규 가이드라인 배포 이후 관심이 높아지고 있습니다. 관련 문서가 충분히 등록되어 정상 답변 중.</div>
<span class="action-tag tag-b">정상 — 모니터링 중</span>
</div>
</div>
</div>
</div>

<div class="mon-section">
<div class="mon-title"><span>📋</span> 최근 질의 로그</div>
<table class="at2"><thead><tr><th>시간</th><th>사용자</th><th>소속팀</th><th>질의</th><th>참조</th><th>품질</th><th>피드백</th></tr></thead><tbody>
<tr><td>15:42</td><td>김현대</td><td>디지털추진</td><td style="color:var(--text-1)">탄력적입찰 vs 경매입찰</td><td>5건</td><td><div class="qs"><div class="qs-bar"><div class="qs-fill" style="width:92%;background:var(--g)"></div></div>92</div></td><td>👍</td></tr>
<tr><td>15:18</td><td>이준혁</td><td>구매전략</td><td style="color:var(--text-1)">VAATZ 발주 필수 항목</td><td>2건</td><td><div class="qs"><div class="qs-bar"><div class="qs-fill" style="width:88%;background:var(--g)"></div></div>88</div></td><td>👍</td></tr>
<tr><td>14:55</td><td>정현수</td><td>구매품질기획</td><td style="color:var(--text-1)">5스타 4→5 승급 조건</td><td>3건</td><td><div class="qs"><div class="qs-bar"><div class="qs-fill" style="width:95%;background:var(--g)"></div></div>95</div></td><td>👍</td></tr>
<tr><td>14:30</td><td>한도윤</td><td>PT제어부품</td><td style="color:var(--text-1)">물류비 경매입찰 기준</td><td>4건</td><td><div class="qs"><div class="qs-bar"><div class="qs-fill" style="width:74%;background:var(--a)"></div></div>74</div></td><td>—</td></tr>
<tr><td>14:02</td><td>최유진</td><td>반도체구매</td><td style="color:var(--text-1)">반도체 긴급구매 절차</td><td>3건</td><td><div class="qs"><div class="qs-bar"><div class="qs-fill" style="width:85%;background:var(--g)"></div></div>85</div></td><td>👍</td></tr>
</tbody></table>
</div>
</div>

<div class="adm-b" id="p-verify" style="display:none">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div style="font-size:13px;font-weight:600">🧠 커뮤니티 답변 → AI 학습 검증</div><span style="font-size:11px;color:var(--text-3)">검증 대기 <b style="color:var(--a)">3건</b></span></div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px;line-height:1.6">채택 + 추천 10개 이상인 커뮤니티 답변이 자동으로 올라옵니다. 승인 시 AI 학습 DB에 반영되며 작성자에게 100pt 보너스가 지급됩니다.</div>
<div class="verify-card"><div class="verify-top"><div class="verify-q">Q. 탄력적입찰에서 1회차 유찰 시 처리 절차</div><div class="verify-acts"><button class="abtn ok" onclick="this.closest('.verify-card').style.opacity='.4';toast('AI 학습 DB에 반영되었습니다.','🧠',2500)">✅ 승인</button><button class="abtn no">보완 요청</button></div></div><div class="verify-a">구매업무규정 제23조 4항에 따르면 1회차 유찰 시 참여 업체 확대 또는 수의계약 전환이 가능합니다. 실무적으로는 구매위원회 사전 승인을 받고 2회차를 진행하되, 업체 수가 부족할 경우 수의계약 절차로 전환합니다.</div><div class="verify-meta"><span>작성자: 프로큐어마스터 (Lv.4)</span><span>·</span><span>추천 47</span><span>·</span><span>채택됨</span><span>·</span><span style="color:var(--accent)">정확도: 높음</span></div></div>
<div class="verify-card"><div class="verify-top"><div class="verify-q">Q. 5스타 4→5등급 승급 시 IATF 16949 필수 여부</div><div class="verify-acts"><button class="abtn ok" onclick="this.closest('.verify-card').style.opacity='.4';toast('AI 학습 DB에 반영되었습니다.','🧠',2500)">✅ 승인</button><button class="abtn no">보완 요청</button></div></div><div class="verify-a">25년 1월부터 신규 평가 기준이 적용되어 품질 경영 시스템 인증(IATF 16949)이 5스타 승급 필수 요건으로 추가되었습니다. 기존 4스타 업체는 26년 6월까지 유예기간이 적용됩니다.</div><div class="verify-meta"><span>작성자: 품질지킴이 (Lv.3)</span><span>·</span><span>추천 23</span><span>·</span><span>채택됨</span><span>·</span><span style="color:var(--a)">정확도: 검토 필요</span></div></div>
<div class="verify-card"><div class="verify-top"><div class="verify-q">Q. VAATZ에서 해외 발주 시 환율 자동 적용 설정법</div><div class="verify-acts"><button class="abtn ok" onclick="this.closest('.verify-card').style.opacity='.4';toast('AI 학습 DB에 반영되었습니다.','🧠',2500)">✅ 승인</button><button class="abtn no">보완 요청</button></div></div><div class="verify-a">VAATZ 글로벌 구매 모듈 → 환경설정 → 환율관리에서 자동 갱신을 ON으로 설정합니다. 기준 시점은 매일 09:00 한국은행 고시 매매기준율이며, 특정 통화는 수동 설정도 가능합니다.</div><div class="verify-meta"><span>작성자: VAATZ달인 (Lv.2)</span><span>·</span><span>추천 15</span><span>·</span><span>채택됨</span><span>·</span><span style="color:var(--accent)">정확도: 높음</span></div></div>
</div>

<div class="adm-b" id="p-sec" style="display:none">
<div style="font-size:13px;font-weight:600;margin-bottom:4px">보안 등급별 접근 매트릭스</div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px">높음 등급은 팀장급 이상 직책자만 열람 가능. 중간 등급은 허용된 팀 단위로 접근. 낮음은 전체 공개.</div>
<table class="at2"><thead><tr><th>보안 등급</th><th>시스템관리자</th><th>팀장급 (직책자)</th><th>팀관리자</th><th>일반 (허용팀)</th><th>일반 (비허용)</th><th>외부</th></tr></thead><tbody>
<tr><td><span class="bd bd-h">높음</span><div style="font-size:9px;color:var(--text-4);margin-top:2px">팀장 이상 직급자</div></td><td style="color:var(--g)">✅</td><td style="color:var(--g)">✅ 파일 담당자 지정 시</td><td style="color:var(--r)">❌</td><td style="color:var(--r)">❌</td><td style="color:var(--r)">❌</td><td style="color:var(--r)">❌</td></tr>
<tr><td><span class="bd bd-md">중간</span><div style="font-size:9px;color:var(--text-4);margin-top:2px">허용 팀 단위</div></td><td style="color:var(--g)">✅</td><td style="color:var(--g)">✅</td><td style="color:var(--g)">✅</td><td style="color:var(--g)">✅</td><td style="color:var(--r)">❌</td><td style="color:var(--r)">❌</td></tr>
<tr><td><span class="bd bd-l">낮음</span><div style="font-size:9px;color:var(--text-4);margin-top:2px">전체 공개</div></td><td style="color:var(--g)">✅</td><td style="color:var(--g)">✅</td><td style="color:var(--g)">✅</td><td style="color:var(--g)">✅</td><td style="color:var(--g)">✅</td><td style="color:var(--g)">✅ 지정시</td></tr>
</tbody></table>

<div style="margin-top:16px;font-size:13px;font-weight:600;margin-bottom:10px">📋 등급별 상세 정책</div>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:16px">
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-top:2px solid var(--r);border-radius:var(--r-sm);padding:14px">
<div style="font-size:12px;font-weight:600;color:var(--r);margin-bottom:6px">🔴 높음</div>
<div style="font-size:11px;color:var(--text-2);line-height:1.7">
• <b>팀장급 이상</b> 직책자만 열람<br>
• 파일 담당자(Admin)가 팀 추가 시 <b>해당 팀 팀장 자동 지정</b><br>
• 인사정보 연동으로 팀장 변경 시 자동 업데이트<br>
• 예: 구매업무규정, 원가 관련 자료
</div></div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-top:2px solid var(--a);border-radius:var(--r-sm);padding:14px">
<div style="font-size:12px;font-weight:600;color:var(--a);margin-bottom:6px">🟡 중간</div>
<div style="font-size:11px;color:var(--text-2);line-height:1.7">
• <b>허용된 팀 전원</b> 열람 가능<br>
• 팀관리자 + 일반 팀원 모두 접근<br>
• 팀 단위로 권한 부여/회수<br>
• 예: 업무표준, 5스타 운영기준
</div></div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-top:2px solid var(--g);border-radius:var(--r-sm);padding:14px">
<div style="font-size:12px;font-weight:600;color:var(--g);margin-bottom:6px">🟢 낮음</div>
<div style="font-size:11px;color:var(--text-2);line-height:1.7">
• <b>전체 사용자</b> 열람 가능<br>
• 외부 협력사는 별도 지정 시<br>
• 공개 매뉴얼, 양식 등<br>
• 예: VAATZ 매뉴얼, 양식
</div></div>
</div>

<div class="sec-n"><div class="sec-nt">⚠️ RAG 보안 정책</div><div class="sec-nb">
• 검색 시 사용자 직급 + 소속 팀 기준 문서 자동 필터링<br>
• <b>높음</b> 등급: 팀장급 직책 여부를 인사정보로 자동 확인 후 열람 허용<br>
• <b>중간</b> 등급: 소속 팀 매칭 시 자동 허용, 타 팀은 파일 담당자가 수동 추가<br>
• 권한 밖 문서는 LLM에 전달되지 않아 유출 원천 차단<br>
• 모든 질의·응답 감사 로그 90일 보관<br>
• 오답 의심 건 자동 감지 시 관리자 즉시 알림
</div></div>

<div style="margin-top:16px;font-size:13px;font-weight:600;margin-bottom:10px">📜 문서 관리 정책</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:var(--r-sm);padding:14px">
  <div style="font-size:11px;font-weight:600;color:var(--text-1);margin-bottom:8px">📋 보안 등급 분류 기준</div>
  <div style="font-size:10.5px;color:var(--text-2);line-height:1.8">
    <div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:4px"><span class="bd bd-h" style="font-size:9px;flex-shrink:0">높음</span><span>원가·단가, 계약조건, 임원 결재 내역, 공급사 협상 자료</span></div>
    <div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:4px"><span class="bd bd-md" style="font-size:9px;flex-shrink:0">중간</span><span>업무규정, 입찰운영 표준, 5스타 평가 기준, 내부 절차서</span></div>
    <div style="display:flex;gap:8px;align-items:flex-start"><span class="bd bd-l" style="font-size:9px;flex-shrink:0">낮음</span><span>VAATZ 매뉴얼, 공개 양식, 구매용어사전, 교육 자료</span></div>
  </div>
</div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:var(--r-sm);padding:14px">
  <div style="font-size:11px;font-weight:600;color:var(--text-1);margin-bottom:8px">🗂 문서 수명 주기</div>
  <div style="font-size:10.5px;color:var(--text-2);line-height:1.8">
    • <b>유효기간</b>: 등록 후 2년 → 갱신 검토 알림 자동 발송<br>
    • <b>자동 비활성화</b>: 갱신 없이 6개월 초과 시 AI 검색에서 제외<br>
    • <b>삭제 정책</b>: 시스템관리자만 영구 삭제 가능, 90일 휴지통 보관<br>
    • <b>버전 관리</b>: 동일 문서 재업로드 시 이전 버전 자동 아카이브
  </div>
</div>
</div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:var(--r-sm);padding:12px;font-size:10.5px;color:var(--text-2);line-height:1.8">
<div style="font-weight:600;color:var(--text-1);margin-bottom:6px">🔄 보안 등급 변경 절차</div>
• 등급 상향: 파일 담당자 신청 → 시스템관리자 최종 승인 필요<br>
• 등급 하향: 파일 담당자가 자체 변경 가능 (로그 기록됨)<br>
• 자동 등급: 특정 키워드 감지 시 AI가 등급 변경 제안 → 관리자 확정
</div>
</div>

</div></div>

<!-- ════ AI 모드별 DB 관리 ════ -->
<div class="adm-b" id="p-aidb" style="display:none">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
  <div>
    <div style="font-size:13px;font-weight:600">🎛 AI 모드별 DB 관리</div>
    <div style="font-size:11px;color:var(--text-3);margin-top:2px">각 AI 모드가 참조하는 문서 폴더와 데이터 소스를 모드별로 설정합니다.</div>
  </div>
  <button class="tb-b" onclick="toast('AI 모드 일괄 동기화를 시작합니다.','🔄',2000)">🔄 전체 동기화</button>
</div>

<div class="aidb-mode-grid">
  <!-- 일반 모드 -->
  <div class="aidb-mode-card">
    <div class="aidb-mode-hd">
      <div class="aidb-mode-icon" style="background:var(--accent-dim)">🤖</div>
      <div><div class="aidb-mode-nm">일반 모드</div><div class="aidb-mode-desc">구매업무 전반 Q&A</div></div>
      <div class="tg on" style="margin-left:auto" onclick="this.classList.toggle('on')"></div>
    </div>
    <div class="aidb-source-list">
      <div class="aidb-src-row"><span class="aidb-src-ic">📂</span><span class="aidb-src-nm">구매업무규정</span><span class="aidb-src-cnt">3건</span><span class="aidb-src-ok">✓</span></div>
      <div class="aidb-src-row"><span class="aidb-src-ic">📂</span><span class="aidb-src-nm">입찰관리</span><span class="aidb-src-cnt">2건</span><span class="aidb-src-ok">✓</span></div>
      <div class="aidb-src-row"><span class="aidb-src-ic">📂</span><span class="aidb-src-nm">VAATZ 매뉴얼</span><span class="aidb-src-cnt">3건</span><span class="aidb-src-ok">✓</span></div>
      <div class="aidb-src-row"><span class="aidb-src-ic">📂</span><span class="aidb-src-nm">용어사전·양식</span><span class="aidb-src-cnt">4건</span><span class="aidb-src-ok">✓</span></div>
      <div class="aidb-src-row"><span class="aidb-src-ic">📖</span><span class="aidb-src-nm">Autopedia</span><span class="aidb-src-cnt">4,832건</span><span class="aidb-src-ok">✓</span></div>
    </div>
    <div class="aidb-mode-ft"><span style="color:var(--g)">활성 12건</span> · 마지막 동기화 10분 전<button class="req-flow-go" onclick="toast('일반 모드 동기화 완료','🔄',1800)">동기화</button></div>
  </div>

  <!-- 원가 모드 -->
  <div class="aidb-mode-card">
    <div class="aidb-mode-hd">
      <div class="aidb-mode-icon" style="background:var(--a-dim)">💰</div>
      <div><div class="aidb-mode-nm">원가 모드</div><div class="aidb-mode-desc">단가·원가 분석 특화</div></div>
      <div class="tg on" style="margin-left:auto" onclick="this.classList.toggle('on')"></div>
    </div>
    <div class="aidb-source-list">
      <div class="aidb-src-row"><span class="aidb-src-ic">📂</span><span class="aidb-src-nm">구매업무규정 <span class="bd bd-h" style="font-size:8px">높음</span></span><span class="aidb-src-cnt">3건</span><span class="aidb-src-ok">✓</span></div>
      <div class="aidb-src-row"><span class="aidb-src-ic">🖥️</span><span class="aidb-src-nm">VAATZ 마스터 데이터</span><span class="aidb-src-cnt">연결 대기</span><span style="color:var(--a);font-size:11px">⏳</span></div>
      <div class="aidb-src-row aidb-src-add" onclick="toast('원가 모드에 연결할 데이터 소스를 선택해주세요.','📂',2000)"><span>＋ 데이터 소스 추가</span></div>
    </div>
    <div class="aidb-mode-ft"><span style="color:var(--a)">부분 활성</span> · VAATZ 마스터 데이터 연결 후 완성<button class="req-flow-go" onclick="at(document.querySelector('[onclick*=p-int]'),'p-int')">연결 설정 →</button></div>
  </div>

  <!-- 5스타 모드 -->
  <div class="aidb-mode-card">
    <div class="aidb-mode-hd">
      <div class="aidb-mode-icon" style="background:var(--g-dim)">⭐</div>
      <div><div class="aidb-mode-nm">5스타 모드</div><div class="aidb-mode-desc">품질 평가 특화</div></div>
      <div class="tg on" style="margin-left:auto" onclick="this.classList.toggle('on')"></div>
    </div>
    <div class="aidb-source-list">
      <div class="aidb-src-row"><span class="aidb-src-ic">📂</span><span class="aidb-src-nm">품질 5스타</span><span class="aidb-src-cnt">2건</span><span class="aidb-src-ok">✓</span></div>
      <div class="aidb-src-row"><span class="aidb-src-ic">📋</span><span class="aidb-src-nm">사내 업무표준</span><span class="aidb-src-cnt">312건</span><span class="aidb-src-ok">✓</span></div>
    </div>
    <div class="aidb-mode-ft"><span style="color:var(--g)">활성 2건</span> · 마지막 동기화 32분 전<button class="req-flow-go" onclick="toast('5스타 모드 동기화 완료','🔄',1800)">동기화</button></div>
  </div>

  <!-- 법규 모드 -->
  <div class="aidb-mode-card">
    <div class="aidb-mode-hd">
      <div class="aidb-mode-icon" style="background:var(--v-dim)">⚖️</div>
      <div><div class="aidb-mode-nm">법규 모드</div><div class="aidb-mode-desc">공정거래·규정 특화</div></div>
      <div class="tg" style="margin-left:auto" onclick="this.classList.toggle('on')"></div>
    </div>
    <div class="aidb-source-list">
      <div class="aidb-src-row"><span class="aidb-src-ic">📂</span><span class="aidb-src-nm">구매업무규정</span><span class="aidb-src-cnt">3건</span><span class="aidb-src-ok">✓</span></div>
      <div class="aidb-src-row aidb-src-add" onclick="toast('법규 모드에 연결할 데이터 소스를 선택해주세요.','📂',2000)"><span>＋ 공정거래/법규 자료 추가</span></div>
    </div>
    <div class="aidb-mode-ft"><span style="color:var(--text-4)">비활성화</span> · 토글로 활성화 가능<button class="req-flow-go">설정</button></div>
  </div>
</div>

<div style="margin-top:14px;padding:10px 14px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:8px;font-size:10.5px;color:var(--text-3);line-height:1.7">
💡 <b style="color:var(--text-2)">운영 팁</b>: 각 모드에 등록된 문서만 AI 검색에 활용됩니다. 동기화는 데이터 소스에 새 문서가 추가될 때마다 자동으로 진행됩니다. 모드 비활성화 시 해당 모드로 전환이 불가합니다.
</div>
</div>

<!-- Question Write Modal -->
<div class="rq-m" id="qWriteM" onclick="if(event.target===this)closeQuestionWrite()">
<div class="rq-b" style="width:520px">
<div class="rq-h">✏️ 새 질문 작성</div>
<div class="rq-d">구매업무 관련 궁금한 점을 동료들에게 물어보세요. 채택된 답변은 AI 학습에 반영될 수 있습니다.</div>
<div class="frm-g">
<label class="frm-l">카테고리</label>
<select class="frm-i frm-sel" id="qCatSel">
<option value="">카테고리 선택</option>
<option value="입찰">입찰</option>
<option value="계약">계약</option>
<option value="5스타">5스타</option>
<option value="VAATZ">VAATZ</option>
<option value="일반">일반</option>
</select>
</div>
<div class="frm-g">
<label class="frm-l">질문 제목</label>
<input type="text" class="frm-i" id="qTitleInput" placeholder="질문을 한 줄로 요약해주세요">
</div>
<div class="frm-g">
<label class="frm-l">상세 내용</label>
<textarea class="frm-i" id="qBodyInput" rows="5" placeholder="질문의 배경, 상황, 궁금한 내용을 상세히 적어주세요..." style="resize:vertical;line-height:1.7"></textarea>
</div>
<div style="display:flex;align-items:center;gap:6px;margin-bottom:12px;font-size:11px;color:var(--text-3)">
<span>작성자:</span>
<strong style="color:var(--text-1)" id="qWriteNick">프로큐어히어로</strong>
<span class="lv lv-3">Lv.3</span>
<span style="font-size:9px;color:var(--text-4)">· 닉네임은 마이페이지에서 변경</span>
</div>
<div class="frm-a">
<button class="btn btn-c" onclick="closeQuestionWrite()">취소</button>
<button class="btn btn-p" onclick="submitQuestion()">✏️ 질문 등록 (+3pt)</button>
</div>
</div>
</div>

<!-- DB Browser Overlay -->
<div class="db-ov" id="dbOv" onclick="if(event.target===this)closeDB()">
<div class="db-box">
<div class="db-hd"><h3 id="dbTitle">📖 용어사전</h3><button class="adm-x" onclick="closeDB()">✕</button></div>
<div class="db-tabs" id="dbTabs">
<button class="db-tab on" onclick="switchDBTab(this,'term')">📖 용어사전</button>
<button class="db-tab" onclick="switchDBTab(this,'std')">📋 업무표준</button>
<button class="db-tab" onclick="switchDBTab(this,'star')">⭐ 품질 5스타</button>
<button class="db-tab" onclick="switchDBTab(this,'bid')">🏷️ 입찰관리</button>
</div>
<div id="dbContent">
<div class="db-search"><input type="text" id="dbSearchInput" placeholder="검색어를 입력하세요..." oninput="filterDB(this.value)"></div>
<div class="db-list" id="db-term">
<div class="db-item"><div class="db-item-ic">📖</div><div><div class="db-item-nm">탄력적입찰 (Flexible Bidding)</div><div class="db-item-desc">타 업체의 순위만 확인하며 복수 회차에 걸쳐 가격을 수정·제출하는 방식</div></div><span class="db-item-tag" style="background:var(--accent-dim);color:var(--accent)">입찰</span></div>
<div class="db-item"><div class="db-item-ic">📖</div><div><div class="db-item-nm">경매입찰 (Reverse Auction)</div><div class="db-item-desc">최저 입찰가를 실시간 공개하며 정해진 시간 동안 가격을 낮춰 제출</div></div><span class="db-item-tag" style="background:var(--accent-dim);color:var(--accent)">입찰</span></div>
<div class="db-item"><div class="db-item-ic">📖</div><div><div class="db-item-nm">수의계약</div><div class="db-item-desc">경쟁 입찰을 거치지 않고 특정 업체와 직접 계약을 체결하는 방식</div></div><span class="db-item-tag" style="background:var(--a-dim);color:var(--a)">계약</span></div>
<div class="db-item"><div class="db-item-ic">📖</div><div><div class="db-item-nm">품질 5스타</div><div class="db-item-desc">협력사 품질 역량을 1~5스타로 평가하는 등급 체계</div></div><span class="db-item-tag" style="background:var(--g-dim);color:var(--g)">품질</span></div>
<div class="db-item"><div class="db-item-ic">📖</div><div><div class="db-item-nm">MRO (Maintenance, Repair, Operations)</div><div class="db-item-desc">생산에 직접 투입되지 않는 유지보수·소모성 자재</div></div><span class="db-item-tag" style="background:var(--v-dim);color:var(--v)">자재</span></div>
</div>
<div class="db-list" id="db-std" style="display:none">
<div class="db-item"><div class="db-item-ic">📋</div><div><div class="db-item-nm">입찰운영 업무표준 STD-PUR-012</div><div class="db-item-desc">탄력적입찰·경매입찰 절차 표준 가이드</div></div><span class="db-item-tag" style="background:var(--accent-dim);color:var(--accent)">PDF</span></div>
<div class="db-item"><div class="db-item-ic">📋</div><div><div class="db-item-nm">구매요청 처리 표준 STD-PUR-003</div><div class="db-item-desc">VAATZ 구매요청 생성부터 승인까지 프로세스</div></div><span class="db-item-tag" style="background:var(--accent-dim);color:var(--accent)">PDF</span></div>
<div class="db-item"><div class="db-item-ic">📋</div><div><div class="db-item-nm">검수확인 업무표준 STD-PUR-021</div><div class="db-item-desc">납품 검수 절차, 불량 처리 기준</div></div><span class="db-item-tag" style="background:var(--accent-dim);color:var(--accent)">PDF</span></div>
</div>
<div class="db-list" id="db-star" style="display:none">
<div class="db-item"><div class="db-item-ic">⭐</div><div><div class="db-item-nm">품질 5스타 운영기준</div><div class="db-item-desc">등급 산정, 승급·강등 기준, 인센티브 체계</div></div><span class="db-item-tag" style="background:var(--g-dim);color:var(--g)">규정</span></div>
<div class="db-item"><div class="db-item-ic">⭐</div><div><div class="db-item-nm">5스타 평가 체크리스트</div><div class="db-item-desc">평가 항목 42개, 점수 배점, 등급 환산표</div></div><span class="db-item-tag" style="background:var(--g-dim);color:var(--g)">XLS</span></div>
</div>
<div class="db-list" id="db-bid" style="display:none">
<div class="db-item"><div class="db-item-ic">🏷️</div><div><div class="db-item-nm">경매입찰 가이드라인 v2.1</div><div class="db-item-desc">적용범위, 금액기준, 연장규칙 등 상세 운영지침</div></div><span class="db-item-tag" style="background:var(--a-dim);color:var(--a)">가이드</span></div>
<div class="db-item"><div class="db-item-ic">🏷️</div><div><div class="db-item-nm">입찰공고 템플릿</div><div class="db-item-desc">공고문 표준 양식, 필수 기재사항 체크리스트</div></div><span class="db-item-tag" style="background:var(--a-dim);color:var(--a)">양식</span></div>
</div>
</div>
</div></div>

<!-- ═══ COMMUNITY ═══ -->
<div class="comm-ov" id="commOv" onclick="if(event.target===this)closeComm()">
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
</div></div>

<!-- Community Side Buttons -->
<div class="comm-side">
<div class="comm-side-btn" onclick="openComm('qa')" title="구매 커뮤니티 Q&A"><span>💡</span><span>Q&A</span></div>
</div>

<!-- Floating Character (draggable) -->`
