export const vaatzHtml = `<div class="toast-wrap" id="toastWrap"></div>
<div class="app">
<div class="sb">
<div class="sb-hd">
<div class="brand"><div class="brand-m" onclick="sv('wl')" style="cursor:pointer" title="홈으로"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="white" opacity=".9"/></svg></div><div><div class="brand-n">VAATZ AI</div><div class="brand-s">Hyundai · Kia Procurement</div></div></div>
<button class="new-c" onclick="sv('wl')">＋ 새 대화</button>
</div>
<div class="sb-nav"><div class="sb-lb">메뉴</div>
<button class="sb-i on"><span class="sb-ic">💬</span>AI 질의응답</button>
</div>
<div class="sb-nav"><div class="sb-lb">구매 DB</div>
<button class="sb-i" onclick="openDB('term')"><span class="sb-ic">📖</span>용어사전</button>
<button class="sb-i" onclick="openDB('std')"><span class="sb-ic">📋</span>업무표준</button>
<button class="sb-i" onclick="openDB('star')"><span class="sb-ic">⭐</span>품질 5스타</button>
<button class="sb-i" onclick="openDB('bid')"><span class="sb-ic">🏷️</span>입찰관리</button>
</div>
<div class="sb-nav"><div class="sb-lb">요청</div>
<button class="sb-i" onclick="reqOpen()"><span class="sb-ic">📤</span>데이터 업로드 요청</button>
<button class="sb-i" onclick="openHistory()"><span class="sb-ic">📜</span>이력 관리</button></div>

<div class="sb-nav"><div class="sb-lb">최근 대화</div></div>
<div class="sb-hist">
<div class="hi on" onclick="sv('ch')"><div class="hi-t">탄력적입찰 vs 경매입찰</div><div class="hi-m">오늘 15:42</div></div>
<div class="hi"><div class="hi-t">품질 5스타 평가기준</div><div class="hi-m">오늘 13:10</div></div>
<div class="hi"><div class="hi-t">VAATZ 구매요청 생성</div><div class="hi-m">오늘 10:28</div></div>
<div class="hi"><div class="hi-t">수의계약 사유서 작성</div><div class="hi-m">어제</div></div>
<div class="hi"><div class="hi-t">해외구매 환율 적용</div><div class="hi-m">2월 5일</div></div>
</div>
<div class="sb-ft">
<button class="sb-i" onclick="oa()"><span class="sb-ic">🔐</span>Admin</button>
<div style="display:flex;align-items:center;gap:6px">
<div class="sb-u" onclick="openMypage()" style="flex:1"><div class="sb-av">김</div><div><div class="sb-un">김현대 책임매니저</div><div class="sb-ur">구매디지털추진팀</div></div></div>
<button class="theme-mini-btn" onclick="event.stopPropagation();toggleTheme()" id="themeBtn">🌙</button>
</div>
</div>
</div>

<div class="mn">
<div class="tb">
<div class="tb-l">
    <div class="tb-t">AI 질의응답</div>
    <div class="sc-sw">
        <button class="sc-btn on" onclick="scT(this,'all')">구매지식</button>
        <button class="sc-btn" onclick="scT(this,'my')">내 파일</button>
    </div>
    <div class="web-tg-mini"><span style="font-size:10px">🌐</span><div class="web-tg" id="webTg" onclick="toggleWeb()"></div></div>
</div>
<div class="tb-r">
    <div class="noti-wrap">
      <button class="noti-btn" onclick="toggleNoti()" id="notiBtn">🔔<span class="noti-badge" id="notiBadge">3</span></button>
      <div class="noti-panel" id="notiPanel">
        <div class="noti-hd"><span class="noti-hd-t">🔔 알림</span><button class="noti-clear" onclick="clearNoti()">모두 읽음</button></div>
        <div class="noti-list" id="notiList">
          <div class="noti-item unread" onclick="handleNotiClick('req')"><span class="noti-item-ic">📤</span><div class="noti-item-body"><div class="noti-item-title">새 업로드 요청</div><div class="noti-item-desc">박성민 매니저가 구매전략팀에 문서 업로드를 요청했습니다.</div><div class="noti-item-time">5분 전</div></div></div>
          <div class="noti-item unread" onclick="handleNotiClick('req')"><span class="noti-item-ic">✅</span><div class="noti-item-body"><div class="noti-item-title">요청 승인 완료</div><div class="noti-item-desc">공정거래법 하도급 관련 조항이 승인되어 지식 베이스에 반영됩니다.</div><div class="noti-item-time">1시간 전</div></div></div>
          <div class="noti-item unread" onclick="handleNotiClick('sys')"><span class="noti-item-ic">🔧</span><div class="noti-item-body"><div class="noti-item-title">시스템 공지</div><div class="noti-item-desc">Learning Lounge 데이터 동기화가 68% 진행 중입니다.</div><div class="noti-item-time">2시간 전</div></div></div>
          <div class="noti-item" onclick="handleNotiClick('req')"><span class="noti-item-ic">❌</span><div class="noti-item-body"><div class="noti-item-title">요청 보완 요청</div><div class="noti-item-desc">해외구매 환율 보고서가 보안 등급 미달로 보완 요청되었습니다.</div><div class="noti-item-time">어제</div></div></div>
        </div>
      </div>
    </div>
</div>
</div>

<div class="mn-body">
<div class="mn-chat">
<div id="v-wl" class="cs" style="display:none"><div class="cc"><div class="wl">
<div class="wl-m"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="white" opacity=".9"/></svg></div>
<div class="wl-ti">VAATZ AI</div>
<div class="wl-d">구매업무규정, 업무표준, VAATZ 매뉴얼, 품질 5스타 기준 기반<br>정확한 근거와 함께 답변합니다.</div>
<div class="wg">
<div class="wc" onclick="sv('ch')"><div class="wc-i">📋</div><div class="wc-t">구매 절차</div><div class="wc-d">탄력적·경매입찰, 수의계약 등</div></div>
<div class="wc" onclick="sv('ch')"><div class="wc-i">⭐</div><div class="wc-t">품질 5스타</div><div class="wc-d">등급 기준, 평가항목, 승급 조건</div></div>
<div class="wc" onclick="sv('ch')"><div class="wc-i">🖥️</div><div class="wc-t">VAATZ 가이드</div><div class="wc-d">구매요청, 발주, 검수 화면 조작</div></div>
<div class="wc" onclick="rpT()"><div class="wc-i">📂</div><div class="wc-t">내 파일</div><div class="wc-d">개인 문서 업로드 및 관리</div></div>
</div>
<div class="wt">
<button class="wt-i" onclick="sv('ch')">"탄력적입찰이 뭔가요?"</button>
<button class="wt-i" onclick="sv('ch')">"5스타 평가기준"</button>
<button class="wt-i" onclick="sv('ch')">"VAATZ 발주 생성"</button>
</div>
</div></div></div>
<div id="v-ch" class="cs"><div class="cc">
<div class="msg msg-u"><div class="msg-b">탄력적입찰과 경매입찰의 차이점을 알려주세요. VAATZ에서 어떻게 진행하나요?</div></div>
<div class="msg msg-a">
<div class="aa"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="white" opacity=".9"/></svg></div>
<div class="ab">
<div class="ah"><span class="an">VAATZ AI</span><span class="at0">RAG · 5개 문서 인용</span><span class="at0" style="background:var(--g-dim);color:var(--g)">● 신뢰도 94%</span></div>

<!-- v20: Enhanced RAG Pipeline -->
<div class="rag-pipeline">
  <div class="rag-hd">
    <div class="rag-hd-l"><div class="rag-hd-ic">🧠</div>검색 및 답변 생성 프로세스</div>
    <div class="rag-conf"><div class="rag-conf-dot"></div>HIGH CONFIDENCE <span class="rag-conf-v">94%</span></div>
  </div>
  <div class="rag-steps">
    <div class="rag-step"><div class="rag-step-ic">✓</div><div class="rag-step-tx">질의 임베딩 — <b>입찰 · 탄력적 · 경매 · VAATZ</b> 키워드 추출</div><div class="rag-step-mt">128-dim · 38ms</div></div>
    <div class="rag-step"><div class="rag-step-ic">✓</div><div class="rag-step-tx">권한 필터링 — <b>구매디지털추진팀 책임매니저</b> (높음·중간·낮음 모두 열람)</div><div class="rag-step-mt">3 levels</div></div>
    <div class="rag-step"><div class="rag-step-ic">✓</div><div class="rag-step-tx">Vector 검색 — 구매업무규정·업무표준·VAATZ 매뉴얼 DB에서 <b>18개 청크</b> 발견</div><div class="rag-step-mt">cosine ≥ 0.74</div></div>
    <div class="rag-step"><div class="rag-step-ic">✓</div><div class="rag-step-tx">Re-ranking — 상위 <b>5개 핵심 청크</b> 선별 후 답변 생성</div><div class="rag-step-mt">cross-encoder</div></div>
  </div>
  <div class="rag-chunks">
    <span class="rag-chunk" onclick="openSourceFromCitation(1)">규정 §23 <span class="rag-chunk-sc">0.94</span></span>
    <span class="rag-chunk" onclick="openSourceFromCitation(2)">STD-PUR-012 §3.2 <span class="rag-chunk-sc">0.91</span></span>
    <span class="rag-chunk" onclick="openSourceFromCitation(3)">경매가이드 §2.1 <span class="rag-chunk-sc">0.88</span></span>
    <span class="rag-chunk" onclick="openSourceFromCitation(4)">VAATZ Ch.5 <span class="rag-chunk-sc">0.86</span></span>
    <span class="rag-chunk" onclick="openSourceFromCitation(5)">5스타 §3 <span class="rag-chunk-sc">0.79</span></span>
  </div>
</div>

<div class="ai-tx">
<p><strong>탄력적입찰</strong>과 <strong>경매입찰</strong>은 현대·기아 구매에서 활용하는 대표적 경쟁 입찰 방식입니다.<span class="cr" onclick="openSourceFromCitation(1)">1<span class="cr-tip"><div class="cr-tip-doc">📄 구매업무규정 제23조<span class="cr-tip-pg">p.34</span></div><div class="cr-tip-tx">"제23조(경쟁 입찰 방식) 본 규정에 따른 경쟁 입찰은 탄력적입찰과 경매입찰을 원칙으로 한다."</div></span></span></p>
<div class="ib"><div class="ib-t">탄력적입찰 (Flexible Bidding)</div><div class="ib-b">입찰 참여 업체들이 <strong>타 업체의 순위만 확인</strong>(가격 비공개)하면서 복수 회차에 걸쳐 가격을 수정·제출합니다. 규격이 표준화된 일반 자재·부품 구매에 적용하며, 통상 2~3회차 진행됩니다.<span class="cr" onclick="openSourceFromCitation(1)">1<span class="cr-tip"><div class="cr-tip-doc">📄 구매업무규정 제23조<span class="cr-tip-pg">p.35</span></div><div class="cr-tip-tx">"탄력적입찰은 참여 업체에 자신의 순위만을 공개하며, 2회차 이상 가격 제출을 통해 최저 가격을 도출하는 방식이다."</div></span></span><span class="cr" onclick="openSourceFromCitation(2)">2<span class="cr-tip"><div class="cr-tip-doc">📘 입찰운영 업무표준 STD-PUR-012<span class="cr-tip-pg">p.14</span></div><div class="cr-tip-tx">"3.2 탄력적입찰 절차: 1회차 제출 후 순위만 공개, 미낙찰 시 2~3회차까지 가격 수정 제출이 가능하다."</div></span></span></div></div>
<div class="ib w"><div class="ib-t">경매입찰 (Reverse Auction)</div><div class="ib-b"><strong>최저 입찰가를 실시간 공개</strong>하며 정해진 시간 동안 가격을 계속 낮춰 제출하는 역경매 방식입니다. 범용 자재·MRO·물류비에 적용하며, 1억원 이상 건에 권장됩니다.<span class="cr" onclick="openSourceFromCitation(1)">1<span class="cr-tip"><div class="cr-tip-doc">📄 구매업무규정 제23조<span class="cr-tip-pg">p.36</span></div><div class="cr-tip-tx">"경매입찰은 입찰 진행 중 모든 참여자에게 현재 최저가를 실시간 공개하며, 마감 시간 내 무제한 가격 수정이 가능하다."</div></span></span><span class="cr" onclick="openSourceFromCitation(3)">3<span class="cr-tip"><div class="cr-tip-doc">📄 경매입찰 가이드라인 v2.1<span class="cr-tip-pg">p.9</span></div><div class="cr-tip-tx">"2.1 적용범위: 범용 자재, MRO, 물류비 등 시장 가격이 형성된 품목 중 계약 금액 1억원 이상 건에 권장한다."</div></span></span></div></div>
<p><strong>주요 차이점</strong></p>
<table class="ct"><thead><tr><th>구분</th><th>탄력적입찰</th><th>경매입찰</th></tr></thead><tbody>
<tr><td>가격 공개</td><td>순위만</td><td>최저가 실시간</td></tr>
<tr><td>입찰 회차</td><td>2~3회</td><td>시간 내 무제한</td></tr>
<tr><td>경쟁 강도</td><td>중간</td><td>높음</td></tr>
<tr><td>주요 품목</td><td>일반 자재·부품</td><td>범용·MRO·물류</td></tr>
<tr><td>금액 기준</td><td>3천만원 이상</td><td>1억원 이상 권장</td></tr>
</tbody></table>
<p><strong>VAATZ 진행 절차</strong></p>
<div class="pr">
<div class="ps"><div class="pn">1</div><div class="pb"><div class="pt">입찰 공고 등록</div><div class="pd">입찰 유형 선택, 품목·수량·납기·참여업체 등록<span class="cr" onclick="openSourceFromCitation(4)">4<span class="cr-tip"><div class="cr-tip-doc">🖥️ VAATZ 입찰모듈 매뉴얼<span class="cr-tip-pg">p.42</span></div><div class="cr-tip-tx">"Ch.5 입찰등록: 구매관리 > 입찰등록에서 입찰 유형(탄력적/경매)을 선택하고 필수 항목을 입력한다."</div></span></span></div><div class="psy">VAATZ → 구매관리 → 입찰등록</div></div></div>
<div class="ps"><div class="pn">2</div><div class="pb"><div class="pt">업체 초대 · 사양서 배포</div><div class="pd">5스타 등급 기준 참여 업체 자동 필터링, 사양서 발송<span class="cr" onclick="openSourceFromCitation(2)">2<span class="cr-tip"><div class="cr-tip-doc">📘 입찰운영 업무표준 STD-PUR-012<span class="cr-tip-pg">p.15</span></div><div class="cr-tip-tx">"참여 업체는 시스템에 등록된 5스타 등급 기준에 따라 자동 필터링되며, 사양서는 일괄 발송된다."</div></span></span><span class="cr" onclick="openSourceFromCitation(5)">5<span class="cr-tip"><div class="cr-tip-doc">📊 품질 5스타 운영기준<span class="cr-tip-pg">p.7</span></div><div class="cr-tip-tx">"제7조(참여자격) 입찰 참여 업체는 직전 분기 평가 기준 3스타 이상이어야 한다."</div></span></span></div><div class="psy">VAATZ → 입찰관리 → 업체초대</div></div></div>
<div class="ps"><div class="pn">3</div><div class="pb"><div class="pt">실시간 입찰</div><div class="pd">탄력적은 회차별 순위, 경매는 최저가 실시간 공개. 마감 5분전 입찰 시 자동 연장<span class="cr" onclick="openSourceFromCitation(1)">1<span class="cr-tip"><div class="cr-tip-doc">📄 구매업무규정 제23조<span class="cr-tip-pg">p.37</span></div><div class="cr-tip-tx">"입찰 마감 5분 전 가격 제출이 발생한 경우, 마감 시간은 자동으로 5분 연장된다."</div></span></span></div><div class="psy">VAATZ → 입찰관리 → 입찰현황</div></div></div>
<div class="ps"><div class="pn">4</div><div class="pb"><div class="pt">낙찰 · 발주</div><div class="pd">결과 확정 → 구매위원회 승인 → 발주. 낙찰 업체 5스타 등급 자동 조회<span class="cr" onclick="openSourceFromCitation(3)">3<span class="cr-tip"><div class="cr-tip-doc">📄 경매입찰 가이드라인 v2.1<span class="cr-tip-pg">p.13</span></div><div class="cr-tip-tx">"낙찰 결과는 구매위원회 승인 후 VAATZ 발주생성 화면으로 자동 연계된다."</div></span></span><span class="cr" onclick="openSourceFromCitation(5)">5<span class="cr-tip"><div class="cr-tip-doc">📊 품질 5스타 운영기준<span class="cr-tip-pg">p.9</span></div><div class="cr-tip-tx">"낙찰 시점의 5스타 등급 정보가 VAATZ 발주 화면에 자동 표시된다."</div></span></span></div><div class="psy">VAATZ → 구매관리 → 발주생성</div></div></div>
</div>
<div class="ib i"><div class="ib-t">품질 5스타 연계</div><div class="ib-b">3스타 이상 업체만 입찰 참여 가능, 5스타 업체는 수의계약 우선 협상 대상<span class="cr" onclick="openSourceFromCitation(5)">5<span class="cr-tip"><div class="cr-tip-doc">📊 품질 5스타 운영기준<span class="cr-tip-pg">p.11</span></div><div class="cr-tip-tx">"5스타 등급 업체는 동일 품목 수의계약 시 우선 협상 대상으로 선정된다."</div></span></span>
<div class="sb2"><div class="sc"><div class="sv">★5</div><div class="sl">최우수</div></div><div class="sc"><div class="sv">★4</div><div class="sl">우수</div></div><div class="sc"><div class="sv">★3</div><div class="sl">양호</div></div><div class="sc"><div class="sv">★2</div><div class="sl">보통</div></div><div class="sc"><div class="sv">★1</div><div class="sl">미흡</div></div></div>
</div></div>
</div>

<!-- v20: Enhanced Source References -->
<div class="sr2"><div class="sr2-h" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'"><div class="sr2-hl"><div class="sr2-hl-ic">📎</div>참조 문서</div><div class="sr2-hr"><span class="sr2-cnt">5</span><span>· 클릭하여 원문 확인</span></div></div>
<div class="sr2-list">
<div class="sr2-c" onclick="openSourceFromCitation(1)"><div class="sr2-c-n">1</div><div class="sr2-c-i"><div class="sr2-c-nm">구매업무규정 제23조 <span class="sr2-c-tp t-pdf">PDF</span></div><div class="sr2-c-mt"><span>제4장 입찰 · p.34~38</span><span class="sr2-c-rel">관련도 0.94</span></div></div><span class="sr2-c-go">→</span></div>
<div class="sr2-c" onclick="openSourceFromCitation(2)"><div class="sr2-c-n">2</div><div class="sr2-c-i"><div class="sr2-c-nm">입찰운영 업무표준 STD-PUR-012 <span class="sr2-c-tp t-doc">DOCX</span></div><div class="sr2-c-mt"><span>3.2 탄력적입찰 절차 · p.12~18</span><span class="sr2-c-rel">관련도 0.91</span></div></div><span class="sr2-c-go">→</span></div>
<div class="sr2-c" onclick="openSourceFromCitation(3)"><div class="sr2-c-n">3</div><div class="sr2-c-i"><div class="sr2-c-nm">경매입찰 가이드라인 v2.1 <span class="sr2-c-tp t-pdf">PDF</span></div><div class="sr2-c-mt"><span>2.1 적용범위 · p.8~15</span><span class="sr2-c-rel">관련도 0.88</span></div></div><span class="sr2-c-go">→</span></div>
<div class="sr2-c" onclick="openSourceFromCitation(4)"><div class="sr2-c-n">4</div><div class="sr2-c-i"><div class="sr2-c-nm">VAATZ 입찰모듈 매뉴얼 <span class="sr2-c-tp t-ppt">PPT</span></div><div class="sr2-c-mt"><span>Ch.5 입찰등록 · p.42~58</span><span class="sr2-c-rel">관련도 0.86</span></div></div><span class="sr2-c-go">→</span></div>
<div class="sr2-c" onclick="openSourceFromCitation(5)"><div class="sr2-c-n">5</div><div class="sr2-c-i"><div class="sr2-c-nm">품질 5스타 운영기준 <span class="sr2-c-tp t-xls">XLSX</span></div><div class="sr2-c-mt"><span>제3조 등급 · 제7조 참여자격 · p.3~12</span><span class="sr2-c-rel">관련도 0.79</span></div></div><span class="sr2-c-go">→</span></div>
</div></div>

<div class="ai-ac"><button class="ai-a">👍 도움됨</button><button class="ai-a">👎 부정확</button><button class="ai-a">📋 복사</button><button class="ai-a">📤 공유</button><button class="ai-a">🔄 재생성</button></div>
</div></div>
<div class="fu0"><button class="fu-c">📝 입찰 공고 템플릿</button><button class="fu-c">⭐ 5스타 평가항목 상세</button><button class="fu-c">🖥️ VAATZ 경매 화면 가이드</button></div>
</div></div>

<div class="iw"><div class="ibx"><div class="ir"><textarea rows="1" placeholder="구매업무에 대해 물어보세요..."></textarea><button class="sd"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 11L12 6L17 11M12 18V7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>
<div class="ib3"><div class="itl"><button class="itb">📎 파일첨부</button><button class="itb">📷 이미지</button><span class="web-ind" id="webInd">🌐 외부지식 활용 중</span></div><span class="ih">Enter 전송</span></div></div>
<div class="disc">⚠️ AI 답변은 참고용이며, 규정 원문을 확인하세요. · <span style="color:var(--text-4)">Ctrl+K 빠른 입력</span></div></div>
</div><!-- /mn-chat -->

<div class="rp sh" id="rp">
<div class="rp-rs" id="rpResize"></div>
<div class="rp-h"><div class="rp-t" id="rpTitle">📂 작업 패널</div><button class="rp-c" onclick="rpT()">✕</button></div>
<div class="rp-tabs">
  <button class="rp-tab" id="rpTabMy" onclick="rpSwitchTab('my')"><span>📂</span>내 파일 <span class="rp-tab-count" id="rpCnt">5</span></button>
  <button class="rp-tab on" id="rpTabSrc" onclick="rpSwitchTab('src')"><span>🔍</span>답변 근거 <span class="rp-tab-count" id="rpSrcCnt">5</span><span class="rp-tab-dot" id="rpSrcDot"></span></button>
</div>

<!-- 내 파일 Tab -->
<div class="rp-tab-pane" id="rpPaneMy">
<div class="rp-bar"><button class="rp-btn0" onclick="newFolder()">📁 새 폴더</button><button class="rp-btn0 x" onclick="delSelected()">🗑 선택 삭제</button></div>
<div class="rp-b">
  <div class="rp-up"><div class="upl-z" id="dropZone" onclick="simUpload()"><span class="upl-i">☁️</span><div class="upl-t">클릭 또는 파일 드래그</div><div class="upl-s">PDF, DOCX, XLSX · 최대 10MB</div></div></div>
  <div class="fl-sec" id="fileSec">
    <div class="fl-tl">개인 폴더</div>
    <div class="ft-f"><div class="ft-fh" onclick="tf(this)" ondragover="fDragOver(event,this)" ondragleave="fDragLeave(this)" ondrop="fDrop(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="ft-ar op">▶</span><span class="ft-ic">📁</span><span class="ft-nm">프로젝트 Alpha</span></div>
    <div class="ft-ds" style="max-height:200px">
      <div class="fl-file" draggable="true" ondragstart="fDragStart(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="fl-file-ic">📄</span><div class="fl-file-info"><div class="fl-file-nm">25년_상반기_전략.pdf</div><div class="fl-file-meta">2.4 MB · 오늘</div></div></div>
      <div class="fl-file" draggable="true" ondragstart="fDragStart(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="fl-file-ic">📊</span><div class="fl-file-info"><div class="fl-file-nm">업체_평가_데이터.xlsx</div><div class="fl-file-meta">856 KB · 어제</div></div></div>
    </div></div>
    <div class="ft-f"><div class="ft-fh" onclick="tf(this)" ondragover="fDragOver(event,this)" ondragleave="fDragLeave(this)" ondrop="fDrop(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="ft-ar">▶</span><span class="ft-ic">📁</span><span class="ft-nm">참고 자료</span></div>
    <div class="ft-ds cl" style="max-height:0">
      <div class="fl-file" draggable="true" ondragstart="fDragStart(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="fl-file-ic">📘</span><div class="fl-file-info"><div class="fl-file-nm">개인_메모.txt</div><div class="fl-file-meta">12 KB · 2월 5일</div></div></div>
    </div></div>
    <div class="fl-tl" style="margin-top:10px">미분류 파일 <span style="font-size:8px;color:var(--text-4);font-weight:400;letter-spacing:0">폴더로 드래그하여 정리</span></div>
    <div id="uncategorized">
      <div class="fl-file" draggable="true" ondragstart="fDragStart(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="fl-file-ic">📄</span><div class="fl-file-info"><div class="fl-file-nm">회의록_260208.docx</div><div class="fl-file-meta">340 KB · 오늘</div></div></div>
      <div class="fl-file" draggable="true" ondragstart="fDragStart(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="fl-file-ic">📄</span><div class="fl-file-info"><div class="fl-file-nm">입찰비교_분석표.pdf</div><div class="fl-file-meta">1.2 MB · 오늘</div></div></div>
    </div>
  </div>
</div>
<div class="rp-ft"><span id="rpStats">총 5개</span><span style="color:var(--accent);cursor:pointer" onclick="newFolder()">+ 새 폴더</span></div>
<div class="comm-mini">
<div class="comm-mini-hd"><span>🔥 인기 질문</span><button class="comm-mini-more" onclick="openComm('qa')">커뮤니티 →</button></div>
<div class="comm-mini-item" onclick="openComm('qa')"><span class="comm-mini-hot">🔥</span><span class="comm-mini-title">탄력적입찰 유찰 시 처리 절차</span><span class="comm-mini-tag" style="background:var(--accent-dim);color:var(--accent)">채택</span><span class="comm-mini-votes">47</span></div>
<div class="comm-mini-item" onclick="openComm('qa')"><span class="comm-mini-hot">✨</span><span class="comm-mini-title">5스타 4→5등급 승급 심사항목</span><span class="comm-mini-tag" style="background:var(--g-dim);color:var(--g)">NEW</span><span class="comm-mini-votes">23</span></div>
<div class="comm-mini-item" onclick="openComm('qa')"><span class="comm-mini-hot">💬</span><span class="comm-mini-title">해외 발주 시 환율 적용 방법</span><span class="comm-mini-tag" style="background:var(--bg-3);color:var(--text-3)">VAATZ</span><span class="comm-mini-votes">15</span></div>
<div class="comm-mini-item" onclick="openComm('qa')"><span class="comm-mini-hot">📝</span><span class="comm-mini-title">수의계약 긴급 사유서 승인 기준</span><span class="comm-mini-tag" style="background:var(--a-dim);color:var(--a)">대기</span><span class="comm-mini-votes">8</span></div>
</div>
</div>

<!-- 답변 근거 Tab (NEW v20) -->
<div class="rp-tab-pane on" id="rpPaneSrc">
<div class="src-hd">
  <div class="src-hd-q">현재 답변의 출처 문서</div>
  <div class="src-hd-qt" id="srcHdQ">탄력적입찰과 경매입찰의 차이점을 알려주세요. VAATZ에서 어떻게 진행하나요?</div>
</div>
<div class="src-chips" id="srcChips"></div>
<div class="src-vw" id="srcVw"></div>
</div>
</div>
</div><!-- /mn-body -->
</div><!-- /mn -->
</div><!-- /app -->

<div class="mp-ov" id="mpOv" onclick="if(event.target===this)closeMypage()">
<div class="mp-box">
<div class="mp-hd"><h2>👤 마이페이지</h2><button class="adm-x" onclick="closeMypage()">✕</button></div>
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
<div class="adm">
<div class="adm-h"><h2>🔐 Admin 관리</h2><button class="adm-x" onclick="ca()">✕</button></div>
<div class="adm-t">
<button class="atb on" onclick="at(this,'p-req')">📋 승인 대기 <span style="background:var(--accent);color:white;font-size:9px;padding:1px 4px;border-radius:4px;margin-left:4px">2</span></button>
<button class="atb" onclick="at(this,'p-doc')">📁 지식 베이스</button>
<button class="atb" onclick="at(this,'p-usr')">👥 사용자 관리</button>
<button class="atb" onclick="at(this,'p-adm')">🛡 권한 · 조직</button>
<button class="atb" onclick="at(this,'p-int')">🔗 데이터 연계</button>
<button class="atb" onclick="at(this,'p-mon')">📊 사용 현황</button>
<button class="atb" onclick="at(this,'p-verify')">🧠 AI 답변 검증</button>
<button class="atb" onclick="at(this,'p-sec')">🔐 보안 설정</button>
</div>

<div class="adm-b" id="p-req" style="display:none">
<!-- v20: Approval Pipeline Visualization -->
<div class="appv-flow">
  <div class="appv-flow-hd">
    <div class="appv-flow-ti">통합 지식 베이스 반영 흐름</div>
    <div class="appv-flow-sub">팀 업로드 → 팀 Admin → 시스템 Admin → AI 학습 반영</div>
  </div>
  <div class="appv-pipe">
    <div class="appv-stage stg-pending">
      <div class="appv-stage-lb">① 팀 업로드</div>
      <div class="appv-stage-nm">팀원 업로드 요청</div>
      <div class="appv-stage-mt"><div><span class="appv-stage-cnt c-a">5</span><span class="appv-stage-unit">건 대기</span></div></div>
    </div>
    <div class="appv-arrow"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div class="appv-stage stg-review">
      <div class="appv-stage-lb">② 팀 Admin</div>
      <div class="appv-stage-nm">1차 검토 (담당자)</div>
      <div class="appv-stage-mt"><div><span class="appv-stage-cnt c-b">3</span><span class="appv-stage-unit">건 검토 중</span></div></div>
    </div>
    <div class="appv-arrow"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div class="appv-stage stg-final">
      <div class="appv-stage-lb">③ 시스템 Admin</div>
      <div class="appv-stage-nm">최종 승인 · 폴더 배정</div>
      <div class="appv-stage-mt"><div><span class="appv-stage-cnt c-v">2</span><span class="appv-stage-unit">건 폴더 미지정</span></div></div>
    </div>
    <div class="appv-arrow"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div class="appv-stage stg-done">
      <div class="appv-stage-lb">④ 통합 지식</div>
      <div class="appv-stage-nm">AI 임베딩 · 검색 활성화</div>
      <div class="appv-stage-mt"><div><span class="appv-stage-cnt c-g">14</span><span class="appv-stage-unit">건 AI 검색 반영완료</span></div></div>
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

<div class="adm-b" id="p-usr">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
<div style="font-size:13px;font-weight:600">사용자 관리 <span style="color:var(--text-4);font-size:11px;font-weight:400">48명 · 8개 팀</span></div>
<div style="display:flex;gap:4px"><button class="tb-b" style="font-size:11px">＋ 팀 추가</button><button class="tb-b" style="font-size:11px">＋ 사용자 추가</button></div>
</div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px">팀별 <b style="color:var(--text-2)">팀장 + 팀관리자</b> 2인만 Admin 권한 부여. 일반 구성원은 SSO 인증으로 시스템 접속만 가능.</div>

<!-- 시스템관리자 -->
<div class="org-team" style="border-color:var(--accent-bd)">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar op" style="font-size:10px;color:var(--text-4)">▶</span><span style="font-size:14px">🔐</span><div class="org-team-nm">시스템관리자</div><span class="bd bd-a" style="font-size:9px">전체 권한</span></div>
<div class="org-team-bd" style="max-height:200px">
<div class="org-m"><div class="org-m-av" style="background:var(--accent-g)">김</div><div class="org-m-info"><div class="org-m-nm">김현대 <span class="bd bd-a" style="font-size:8px">시스템관리자</span></div><div class="org-m-role">책임매니저 · 구매디지털추진팀</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">높음</span><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
</div></div>

<!-- 구매전략팀 -->
<div class="org-team">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar op" style="font-size:10px;color:var(--text-4)">▶</span><span style="font-size:14px">📂</span><div class="org-team-nm">구매전략팀</div><span class="org-team-cnt">6명</span><span class="bd bd-md" style="font-size:9px;margin-left:4px">중간+낮음</span></div>
<div class="org-team-bd" style="max-height:400px">
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">김</div><div class="org-m-info"><div class="org-m-nm">김전략 <span class="bd bd-m" style="font-size:8px">팀장</span></div><div class="org-m-role">팀장 · 구매전략팀</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">높음</span><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div class="org-m"><div class="org-m-av" style="background:var(--bg-5)">이</div><div class="org-m-info"><div class="org-m-nm">이준혁 <span class="bd bd-m" style="font-size:8px">팀관리자</span></div><div class="org-m-role">책임매니저 · 구매전략팀</div></div><div class="org-m-scope"><span class="bd bd-md" style="font-size:8px">중간</span><span class="bd bd-l" style="font-size:8px">낮음</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
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
<div style="display:flex;gap:4px"><button class="tb-b" style="font-size:11px">📂 폴더 추가</button><button class="tb-b" style="font-size:11px">📤 문서 업로드</button><button class="tb-b" style="font-size:11px;color:var(--r)" onclick="alert('삭제할 문서를 선택해주세요.')">🗑 선택 삭제</button></div>
</div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px">요청관리에서 승인된 문서는 「미분류」에 저장됩니다. <b style="color:var(--text-2)">시스템 Admin만</b> 폴더 이동·삭제 가능합니다. 문서를 클릭하면 접근 권한을 설정할 수 있습니다.</div>

<!-- 미분류 (승인 후 대기) -->
<div class="doc-uncat">
<div class="doc-uncat-title">📥 미분류 <span style="font-size:9px;background:var(--a-dim);color:var(--a);padding:1px 5px;border-radius:3px;font-weight:600">2건</span> <span style="font-size:9px;color:var(--text-4);margin-left:4px">승인된 문서 — 폴더 배정 대기</span></div>
<div class="doc-uncat-item"><span style="font-size:12px">📄</span><div class="doc-uncat-nm">공정거래법 하도급 관련 조항.pdf</div><div class="doc-uncat-meta">정현수 · 구매품질기획 · 02.07</div><div class="doc-uncat-acts"><select class="doc-mv-btn" onchange="if(this.value){alert(this.value+' 폴더로 이동합니다.');this.closest('.doc-uncat-item').style.opacity='.3'}"><option value="">이동 →</option><option value="구매업무규정">구매업무규정</option><option value="입찰관리">입찰관리</option><option value="VAATZ 매뉴얼">VAATZ 매뉴얼</option><option value="품질 5스타">품질 5스타</option><option value="용어사전 · 양식">용어사전 · 양식</option></select></div></div>
<div class="doc-uncat-item"><span style="font-size:12px">📄</span><div class="doc-uncat-nm">전동화 부품 단가 벤치마크.xlsx</div><div class="doc-uncat-meta">한도윤 · PT제어부품 · 02.08</div><div class="doc-uncat-acts"><select class="doc-mv-btn" onchange="if(this.value){alert(this.value+' 폴더로 이동합니다.');this.closest('.doc-uncat-item').style.opacity='.3'}"><option value="">이동 →</option><option value="구매업무규정">구매업무규정</option><option value="입찰관리">입찰관리</option><option value="VAATZ 매뉴얼">VAATZ 매뉴얼</option><option value="품질 5스타">품질 5스타</option><option value="용어사전 · 양식">용어사전 · 양식</option></select></div></div>
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
</div>

</div></div>



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
`;