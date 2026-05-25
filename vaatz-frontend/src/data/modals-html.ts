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

<!-- Community Side Buttons -->
<div class="comm-side">
<div class="comm-side-btn" onclick="openComm('qa')" title="구매 커뮤니티 Q&A"><span>💡</span><span>Q&A</span></div>
</div>

<!-- Floating Character (draggable) -->`