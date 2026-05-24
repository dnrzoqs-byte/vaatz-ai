export const vaatzHtml = `
<div class="toast-wrap" id="toastWrap"></div>
<div class="app">
<div class="sb">
<div class="sb-hd">
<div class="brand"><div class="brand-m" onclick="sv('wl')" style="cursor:pointer" title="홈으로"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="white" opacity=".9"/></svg></div><div><div class="brand-n">VAATZ AI</div><div class="brand-s">Hyundai · Kia Procurement</div></div></div>
<button class="new-c" onclick="sv('wl')">＋ 새 대화</button>
</div>
<div class="sb-nav"><div class="sb-lb">메뉴</div>
<button class="sb-i on"><span class="sb-ic sb-ic-chat"></span>AI 질의응답</button>
</div>
<div class="sb-nav"><div class="sb-lb">구매 DB</div>
<button class="sb-i" onclick="openDB('term')"><span class="sb-ic sb-ic-book"></span>용어사전</button>
<button class="sb-i" onclick="openDB('std')"><span class="sb-ic sb-ic-list"></span>업무표준</button>
<button class="sb-i" onclick="openDB('star')"><span class="sb-ic sb-ic-star"></span>품질 5스타</button>
<button class="sb-i" onclick="openDB('bid')"><span class="sb-ic sb-ic-tag"></span>입찰관리</button>
</div>
<div class="sb-nav"><div class="sb-lb">요청</div>
<button class="sb-i" onclick="reqOpen()"><span class="sb-ic sb-ic-upload"></span>데이터 업로드 요청</button>
<button class="sb-i" onclick="openHistory()"><span class="sb-ic sb-ic-history"></span>이력 관리</button></div>

<div class="sb-nav"><div class="sb-lb">최근 대화</div></div>
<div class="sb-hist">
<div class="hi on" onclick="sv('ch')"><div class="hi-t">탄력적입찰 vs 경매입찰</div><div class="hi-m">오늘 15:42</div></div>
<div class="hi"><div class="hi-t">품질 5스타 평가기준</div><div class="hi-m">오늘 13:10</div></div>
<div class="hi"><div class="hi-t">VAATZ 구매요청 생성</div><div class="hi-m">오늘 10:28</div></div>
<div class="hi"><div class="hi-t">수의계약 사유서 작성</div><div class="hi-m">어제</div></div>
<div class="hi"><div class="hi-t">해외구매 환율 적용</div><div class="hi-m">2월 5일</div></div>
</div>
<div class="sb-ft">
<button class="sb-i" onclick="oa()"><span class="sb-ic sb-ic-lock"></span>Admin</button>
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
      <button class="noti-btn" onclick="toggleNoti()" id="notiBtn"><span class="icon-bell"></span><span class="noti-badge" id="notiBadge">3</span></button>
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
    <div class="adm-kpi"><div class="adm-kpi-v" style="color:var(--a)">5</div><div class="adm-kpi-l">검토 대기</div><div class="adm-kpi-sub">팀 문서 요청</div></div>
    <div class="adm-kpi"><div class="adm-kpi-v" style="color:var(--accent)">2</div><div class="adm-kpi-l">최종 승인 대기</div><div class="adm-kpi-sub">폴더 배정 필요</div></div>
    <div class="adm-kpi"><div class="adm-kpi-v" style="color:var(--g)">14</div><div class="adm-kpi-l">AI 반영 완료</div><div class="adm-kpi-sub">이번 달</div></div>
    <div class="adm-kpi"><div class="adm-kpi-v" style="color:var(--v)">94.2%</div><div class="adm-kpi-l">답변 신뢰도</div><div class="adm-kpi-sub">이번 달 평균</div></div>
    <div class="adm-kpi"><div class="adm-kpi-v">2,847</div><div class="adm-kpi-l">총 질의</div><div class="adm-kpi-sub">이번 달</div></div>
    <div class="adm-kpi"><div class="adm-kpi-v">48<span style="font-size:14px">명</span></div><div class="adm-kpi-l">활성 사용자</div><div class="adm-kpi-sub">월간</div></div>
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
  <div class="adm-pipe-step" onclick="at(document.querySelector('[onclick*=p-final]'),'p-final')" style="cursor:pointer">
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

<div class="adm-b" id="p-usr">
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
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px"><div style="font-size:13px;font-weight:600">🛒 캐릭터 상점</div><div style="font-size:12px;font-weight:600;color:var(--accent);font-family:Outfit">💰 520pt 보유</div></div>
<div style="font-size:10px;color:var(--text-3);margin-bottom:12px;line-height:1.5;background:var(--bg-2);padding:8px 12px;border-radius:6px;border:1px solid var(--border-1)">💡 아이템을 조합해 나만의 캐릭터를 꾸며보세요! 구매·장착 후 즉시 캐릭터에 반영됩니다.</div>

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
<div class="comm-side-btn" onclick="openComm('qa')" title="지식 Q&A"><span>💡</span><span>Q&A</span></div>
<div class="comm-side-btn" onclick="openComm('hof')" title="명예의 전당"><span>🏆</span><span>랭킹</span></div>
<div class="comm-side-btn" onclick="openComm('char')" title="내 캐릭터"><span>🧸</span><span>캐릭터</span></div>
</div>

<!-- Floating Character (draggable) -->
<div class="float-char" id="floatChar">
<div class="float-char-body" id="floatCharBody"><svg class="fc-svg" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="skinG" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#FFE8CC"/><stop offset="60%" stop-color="#FFCC99"/><stop offset="100%" stop-color="#F0A870"/></radialGradient><radialGradient id="hairG" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#5C3D1E"/><stop offset="100%" stop-color="#1A0A00"/></radialGradient><linearGradient id="bodyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6BB3FF"/><stop offset="50%" stop-color="#4A8EF0"/><stop offset="100%" stop-color="#2060C8"/></linearGradient><radialGradient id="eyeG" cx="35%" cy="35%" r="50%"><stop offset="0%" stop-color="#4A7FD4"/><stop offset="100%" stop-color="#1A3A80"/></radialGradient></defs><!-- 그림자 --><ellipse cx="40" cy="98" rx="18" ry="3" fill="rgba(0,0,0,0.15)"/><!-- 몸통 --><rect x="22" y="60" width="36" height="32" rx="10" fill="url(#bodyG)"/><rect x="22" y="60" width="36" height="8" rx="5" fill="rgba(255,255,255,0.15)"/><!-- VAATZ 배지 --><rect x="30" y="67" width="20" height="10" rx="3" fill="rgba(255,255,255,0.2)"/><text x="40" y="75.5" text-anchor="middle" font-size="5.5" font-weight="800" fill="white" font-family="sans-serif">VAATZ</text><!-- 팔 (왼) --><rect x="10" y="62" width="13" height="8" rx="4" fill="url(#bodyG)"/><ellipse cx="10" cy="66" rx="5" ry="5.5" fill="url(#skinG)"/><!-- 팔 (오) --><rect x="57" y="62" width="13" height="8" rx="4" fill="url(#bodyG)"/><ellipse cx="70" cy="66" rx="5" ry="5.5" fill="url(#skinG)"/><!-- 다리 --><rect x="26" y="89" width="11" height="10" rx="5" fill="#1A48A8"/><rect x="43" y="89" width="11" height="10" rx="5" fill="#1A48A8"/><!-- 신발 --><ellipse cx="31.5" cy="99" rx="7" ry="3.5" fill="#111"/><ellipse cx="48.5" cy="99" rx="7" ry="3.5" fill="#111"/><!-- 목 --><rect x="34" y="53" width="12" height="9" rx="4" fill="url(#skinG)"/><!-- 머리 --><ellipse cx="40" cy="40" rx="22" ry="20" fill="url(#skinG)"/><!-- 머리카락 --><path d="M18 36 Q18 14 40 13 Q62 14 62 36 Q58 20 40 19 Q22 20 18 36Z" fill="url(#hairG)"/><path d="M18 36 Q16 30 18 24 Q20 18 28 15 L26 22 Q20 26 18 36Z" fill="url(#hairG)"/><path d="M62 36 Q64 30 62 24 Q60 18 52 15 L54 22 Q60 26 62 36Z" fill="url(#hairG)"/><!-- 귀 --><ellipse cx="18" cy="40" rx="4" ry="5" fill="url(#skinG)"/><ellipse cx="62" cy="40" rx="4" ry="5" fill="url(#skinG)"/><!-- 눈 흰자 --><ellipse cx="30" cy="40" rx="7" ry="7.5" fill="white"/><ellipse cx="50" cy="40" rx="7" ry="7.5" fill="white"/><!-- 눈동자 --><ellipse cx="30" cy="41" rx="5" ry="5.5" fill="url(#eyeG)"/><ellipse cx="50" cy="41" rx="5" ry="5.5" fill="url(#eyeG)"/><!-- 동공 --><circle cx="31" cy="40" r="2.5" fill="#0A1840"/><circle cx="51" cy="40" r="2.5" fill="#0A1840"/><!-- 눈 하이라이트 --><circle cx="32" cy="38.5" r="1.2" fill="white"/><circle cx="52" cy="38.5" r="1.2" fill="white"/><circle cx="30.5" cy="41" r="0.6" fill="rgba(255,255,255,0.7)"/>  <circle cx="50.5" cy="41" r="0.6" fill="rgba(255,255,255,0.7)"/><!-- 눈썹 --><path d="M24 33 Q30 30 36 33" stroke="#3A2010" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M44 33 Q50 30 56 33" stroke="#3A2010" stroke-width="1.8" fill="none" stroke-linecap="round"/><!-- 볼 홍조 --><ellipse cx="22" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><ellipse cx="58" cy="47" rx="5.5" ry="3.5" fill="rgba(255,140,120,0.35)"/><!-- 코 --><path d="M38 46 Q40 48 42 46" stroke="rgba(180,100,70,0.5)" stroke-width="1.2" fill="none" stroke-linecap="round"/><!-- 미소 --><path d="M33 52 Q40 57 47 52" stroke="#C07040" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg></div>
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
</style>

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

`;