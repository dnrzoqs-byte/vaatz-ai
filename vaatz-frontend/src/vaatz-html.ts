export const vaatzHtml = `<div class="sb">
<div class="sb-hd">
<div class="brand"><div class="brand-m" onclick="sv('wl')" style="cursor:pointer" title="?덉쑝濡?><svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="white" opacity=".9"/></svg></div><div><div class="brand-n">VAATZ AI</div><div class="brand-s">Hyundai 쨌 Kia Procurement</div></div></div>
<button class="new-c" onclick="sv('wl')">竊??????/button>
</div>
<div class="sb-nav"><div class="sb-lb">硫붾돱</div>
<button class="sb-i on"><span class="sb-ic">?뮠</span>AI 吏덉쓽?묐떟</button>
</div>
<div class="sb-nav"><div class="sb-lb">援щℓ DB</div>
<button class="sb-i" onclick="openDB('term')"><span class="sb-ic">?뱰</span>?⑹뼱?ъ쟾</button>
<button class="sb-i" onclick="openDB('std')"><span class="sb-ic">?뱥</span>?낅Т?쒖?</button>
<button class="sb-i" onclick="openDB('star')"><span class="sb-ic">狩?/span>?덉쭏 5?ㅽ?</button>
<button class="sb-i" onclick="openDB('bid')"><span class="sb-ic">?뤇截?/span>?낆같愿由?/button>
</div>
<div class="sb-nav"><div class="sb-lb">?붿껌</div>
<button class="sb-i" onclick="reqOpen()"><span class="sb-ic">?뱾</span>?곗씠???낅줈???붿껌</button>
<button class="sb-i" onclick="openHistory()"><span class="sb-ic">?뱶</span>?대젰 愿由?/button></div>

<div class="sb-nav"><div class="sb-lb">理쒓렐 ???/div></div>
<div class="sb-hist">
<div class="hi on" onclick="sv('ch')"><div class="hi-t">?꾨젰?곸엯李?vs 寃쎈ℓ?낆같</div><div class="hi-m">?ㅻ뒛 15:42</div></div>
<div class="hi"><div class="hi-t">?덉쭏 5?ㅽ? ?됯?湲곗?</div><div class="hi-m">?ㅻ뒛 13:10</div></div>
<div class="hi"><div class="hi-t">VAATZ 援щℓ?붿껌 ?앹꽦</div><div class="hi-m">?ㅻ뒛 10:28</div></div>
<div class="hi"><div class="hi-t">?섏쓽怨꾩빟 ?ъ쑀???묒꽦</div><div class="hi-m">?댁젣</div></div>
<div class="hi"><div class="hi-t">?댁쇅援щℓ ?섏쑉 ?곸슜</div><div class="hi-m">2??5??/div></div>
</div>
<div class="sb-ft">
<button class="sb-i" onclick="oa()"><span class="sb-ic">?뵍</span>Admin</button>
<div style="display:flex;align-items:center;gap:6px">
<div class="sb-u" onclick="openMypage()" style="flex:1"><div class="sb-av">源</div><div><div class="sb-un">源?꾨? 梨낆엫留ㅻ땲?</div><div class="sb-ur">援щℓ?붿??몄텛吏꾪?</div></div></div>
<button class="theme-mini-btn" onclick="event.stopPropagation();toggleTheme()" id="themeBtn">?뙔</button>
</div>
</div>
</div>

<div class="mn">
<div class="tb">
<div class="tb-l">
    <div class="tb-t">AI 吏덉쓽?묐떟</div>
    <div class="sc-sw">
        <button class="sc-btn on" onclick="scT(this,'all')">援щℓ吏??/button>
        <button class="sc-btn" onclick="scT(this,'my')">???뚯씪</button>
    </div>
    <div class="web-tg-mini"><span style="font-size:10px">?뙋</span><div class="web-tg" id="webTg" onclick="toggleWeb()"></div></div>
</div>
<div class="tb-r">
    <div class="noti-wrap">
      <button class="noti-btn" onclick="toggleNoti()" id="notiBtn">?뵒<span class="noti-badge" id="notiBadge">3</span></button>
      <div class="noti-panel" id="notiPanel">
        <div class="noti-hd"><span class="noti-hd-t">?뵒 ?뚮┝</span><button class="noti-clear" onclick="clearNoti()">紐⑤몢 ?쎌쓬</button></div>
        <div class="noti-list" id="notiList">
          <div class="noti-item unread" onclick="handleNotiClick('req')"><span class="noti-item-ic">?뱾</span><div class="noti-item-body"><div class="noti-item-title">???낅줈???붿껌</div><div class="noti-item-desc">諛뺤꽦誘?留ㅻ땲?媛 援щℓ?꾨왂???臾몄꽌 ?낅줈?쒕? ?붿껌?덉뒿?덈떎.</div><div class="noti-item-time">5遺???/div></div></div>
          <div class="noti-item unread" onclick="handleNotiClick('req')"><span class="noti-item-ic">??/span><div class="noti-item-body"><div class="noti-item-title">?붿껌 ?뱀씤 ?꾨즺</div><div class="noti-item-desc">怨듭젙嫄곕옒踰??섎룄湲?愿??議고빆???뱀씤?섏뼱 吏??踰좎씠?ㅼ뿉 諛섏쁺?⑸땲??</div><div class="noti-item-time">1?쒓컙 ??/div></div></div>
          <div class="noti-item unread" onclick="handleNotiClick('sys')"><span class="noti-item-ic">?뵩</span><div class="noti-item-body"><div class="noti-item-title">?쒖뒪??怨듭?</div><div class="noti-item-desc">Learning Lounge ?곗씠???숆린?붽? 68% 吏꾪뻾 以묒엯?덈떎.</div><div class="noti-item-time">2?쒓컙 ??/div></div></div>
          <div class="noti-item" onclick="handleNotiClick('req')"><span class="noti-item-ic">??/span><div class="noti-item-body"><div class="noti-item-title">?붿껌 蹂댁셿 ?붿껌</div><div class="noti-item-desc">?댁쇅援щℓ ?섏쑉 蹂닿퀬?쒓? 蹂댁븞 ?깃툒 誘몃떖濡?蹂댁셿 ?붿껌?섏뿀?듬땲??</div><div class="noti-item-time">?댁젣</div></div></div>
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
<div class="wl-d">援щℓ?낅Т洹쒖젙, ?낅Т?쒖?, VAATZ 留ㅻ돱?? ?덉쭏 5?ㅽ? 湲곗? 湲곕컲<br>?뺥솗??洹쇨굅? ?④퍡 ?듬??⑸땲??</div>
<div class="wg">
<div class="wc" onclick="sv('ch')"><div class="wc-i">?뱥</div><div class="wc-t">援щℓ ?덉감</div><div class="wc-d">?꾨젰?겶룰꼍留ㅼ엯李? ?섏쓽怨꾩빟 ??/div></div>
<div class="wc" onclick="sv('ch')"><div class="wc-i">狩?/div><div class="wc-t">?덉쭏 5?ㅽ?</div><div class="wc-d">?깃툒 湲곗?, ?됯???ぉ, ?밴툒 議곌굔</div></div>
<div class="wc" onclick="sv('ch')"><div class="wc-i">?뼢截?/div><div class="wc-t">VAATZ 媛?대뱶</div><div class="wc-d">援щℓ?붿껌, 諛쒖＜, 寃???붾㈃ 議곗옉</div></div>
<div class="wc" onclick="rpT()"><div class="wc-i">?뱛</div><div class="wc-t">???뚯씪</div><div class="wc-d">媛쒖씤 臾몄꽌 ?낅줈??諛?愿由?/div></div>
</div>
<div class="wt">
<button class="wt-i" onclick="sv('ch')">"?꾨젰?곸엯李곗씠 萸붽???"</button>
<button class="wt-i" onclick="sv('ch')">"5?ㅽ? ?됯?湲곗?"</button>
<button class="wt-i" onclick="sv('ch')">"VAATZ 諛쒖＜ ?앹꽦"</button>
</div>
</div></div></div>
<div id="v-ch" class="cs"><div class="cc">
<div class="msg msg-u"><div class="msg-b">?꾨젰?곸엯李곌낵 寃쎈ℓ?낆같??李⑥씠?먯쓣 ?뚮젮二쇱꽭?? VAATZ?먯꽌 ?대뼸寃?吏꾪뻾?섎굹??</div></div>
<div class="msg msg-a">
<div class="aa"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="white" opacity=".9"/></svg></div>
<div class="ab">
<div class="ah"><span class="an">VAATZ AI</span><span class="at0">RAG 쨌 5媛?臾몄꽌 ?몄슜</span><span class="at0" style="background:var(--g-dim);color:var(--g)">???좊ː??94%</span></div>

<!-- v20: Enhanced RAG Pipeline -->
<div class="rag-pipeline">
  <div class="rag-hd">
    <div class="rag-hd-l"><div class="rag-hd-ic">?쭬</div>寃??諛??듬? ?앹꽦 ?꾨줈?몄뒪</div>
    <div class="rag-conf"><div class="rag-conf-dot"></div>HIGH CONFIDENCE <span class="rag-conf-v">94%</span></div>
  </div>
  <div class="rag-steps">
    <div class="rag-step"><div class="rag-step-ic">??/div><div class="rag-step-tx">吏덉쓽 ?꾨쿋????<b>?낆같 쨌 ?꾨젰??쨌 寃쎈ℓ 쨌 VAATZ</b> ?ㅼ썙??異붿텧</div><div class="rag-step-mt">128-dim 쨌 38ms</div></div>
    <div class="rag-step"><div class="rag-step-ic">??/div><div class="rag-step-tx">沅뚰븳 ?꾪꽣留???<b>援щℓ?붿??몄텛吏꾪? 梨낆엫留ㅻ땲?</b> (?믪쓬쨌以묎컙쨌??쓬 紐⑤몢 ?대엺)</div><div class="rag-step-mt">3 levels</div></div>
    <div class="rag-step"><div class="rag-step-ic">??/div><div class="rag-step-tx">Vector 寃????援щℓ?낅Т洹쒖젙쨌?낅Т?쒖?쨌VAATZ 留ㅻ돱??DB?먯꽌 <b>18媛?泥?겕</b> 諛쒓껄</div><div class="rag-step-mt">cosine ??0.74</div></div>
    <div class="rag-step"><div class="rag-step-ic">??/div><div class="rag-step-tx">Re-ranking ???곸쐞 <b>5媛??듭떖 泥?겕</b> ?좊퀎 ???듬? ?앹꽦</div><div class="rag-step-mt">cross-encoder</div></div>
  </div>
  <div class="rag-chunks">
    <span class="rag-chunk" onclick="openSourceFromCitation(1)">洹쒖젙 짠23 <span class="rag-chunk-sc">0.94</span></span>
    <span class="rag-chunk" onclick="openSourceFromCitation(2)">STD-PUR-012 짠3.2 <span class="rag-chunk-sc">0.91</span></span>
    <span class="rag-chunk" onclick="openSourceFromCitation(3)">寃쎈ℓ媛?대뱶 짠2.1 <span class="rag-chunk-sc">0.88</span></span>
    <span class="rag-chunk" onclick="openSourceFromCitation(4)">VAATZ Ch.5 <span class="rag-chunk-sc">0.86</span></span>
    <span class="rag-chunk" onclick="openSourceFromCitation(5)">5?ㅽ? 짠3 <span class="rag-chunk-sc">0.79</span></span>
  </div>
</div>

<div class="ai-tx">
<p><strong>?꾨젰?곸엯李?/strong>怨?<strong>寃쎈ℓ?낆같</strong>? ?꾨?쨌湲곗븘 援щℓ?먯꽌 ?쒖슜?섎뒗 ??쒖쟻 寃쎌웳 ?낆같 諛⑹떇?낅땲??<span class="cr" onclick="openSourceFromCitation(1)">1<span class="cr-tip"><div class="cr-tip-doc">?뱞 援щℓ?낅Т洹쒖젙 ??3議?span class="cr-tip-pg">p.34</span></div><div class="cr-tip-tx">"??3議?寃쎌웳 ?낆같 諛⑹떇) 蹂?洹쒖젙???곕Ⅸ 寃쎌웳 ?낆같? ?꾨젰?곸엯李곌낵 寃쎈ℓ?낆같???먯튃?쇰줈 ?쒕떎."</div></span></span></p>
<div class="ib"><div class="ib-t">?꾨젰?곸엯李?(Flexible Bidding)</div><div class="ib-b">?낆같 李몄뿬 ?낆껜?ㅼ씠 <strong>? ?낆껜???쒖쐞留??뺤씤</strong>(媛寃?鍮꾧났媛??섎㈃??蹂듭닔 ?뚯감??嫄몄퀜 媛寃⑹쓣 ?섏젙쨌?쒖텧?⑸땲?? 洹쒓꺽???쒖??붾맂 ?쇰컲 ?먯옱쨌遺??援щℓ???곸슜?섎ŉ, ?듭긽 2~3?뚯감 吏꾪뻾?⑸땲??<span class="cr" onclick="openSourceFromCitation(1)">1<span class="cr-tip"><div class="cr-tip-doc">?뱞 援щℓ?낅Т洹쒖젙 ??3議?span class="cr-tip-pg">p.35</span></div><div class="cr-tip-tx">"?꾨젰?곸엯李곗? 李몄뿬 ?낆껜???먯떊???쒖쐞留뚯쓣 怨듦컻?섎ŉ, 2?뚯감 ?댁긽 媛寃??쒖텧???듯빐 理쒖? 媛寃⑹쓣 ?꾩텧?섎뒗 諛⑹떇?대떎."</div></span></span><span class="cr" onclick="openSourceFromCitation(2)">2<span class="cr-tip"><div class="cr-tip-doc">?뱲 ?낆같?댁쁺 ?낅Т?쒖? STD-PUR-012<span class="cr-tip-pg">p.14</span></div><div class="cr-tip-tx">"3.2 ?꾨젰?곸엯李??덉감: 1?뚯감 ?쒖텧 ???쒖쐞留?怨듦컻, 誘몃굺李???2~3?뚯감源뚯? 媛寃??섏젙 ?쒖텧??媛?ν븯??"</div></span></span></div></div>
<div class="ib w"><div class="ib-t">寃쎈ℓ?낆같 (Reverse Auction)</div><div class="ib-b"><strong>理쒖? ?낆같媛瑜??ㅼ떆媛?怨듦컻</strong>?섎ŉ ?뺥빐吏??쒓컙 ?숈븞 媛寃⑹쓣 怨꾩냽 ??떠 ?쒖텧?섎뒗 ??꼍留?諛⑹떇?낅땲?? 踰붿슜 ?먯옱쨌MRO쨌臾쇰쪟鍮꾩뿉 ?곸슜?섎ŉ, 1?듭썝 ?댁긽 嫄댁뿉 沅뚯옣?⑸땲??<span class="cr" onclick="openSourceFromCitation(1)">1<span class="cr-tip"><div class="cr-tip-doc">?뱞 援щℓ?낅Т洹쒖젙 ??3議?span class="cr-tip-pg">p.36</span></div><div class="cr-tip-tx">"寃쎈ℓ?낆같? ?낆같 吏꾪뻾 以?紐⑤뱺 李몄뿬?먯뿉寃??꾩옱 理쒖?媛瑜??ㅼ떆媛?怨듦컻?섎ŉ, 留덇컧 ?쒓컙 ??臾댁젣??媛寃??섏젙??媛?ν븯??"</div></span></span><span class="cr" onclick="openSourceFromCitation(3)">3<span class="cr-tip"><div class="cr-tip-doc">?뱞 寃쎈ℓ?낆같 媛?대뱶?쇱씤 v2.1<span class="cr-tip-pg">p.9</span></div><div class="cr-tip-tx">"2.1 ?곸슜踰붿쐞: 踰붿슜 ?먯옱, MRO, 臾쇰쪟鍮????쒖옣 媛寃⑹씠 ?뺤꽦???덈ぉ 以?怨꾩빟 湲덉븸 1?듭썝 ?댁긽 嫄댁뿉 沅뚯옣?쒕떎."</div></span></span></div></div>
<p><strong>二쇱슂 李⑥씠??/strong></p>
<table class="ct"><thead><tr><th>援щ텇</th><th>?꾨젰?곸엯李?/th><th>寃쎈ℓ?낆같</th></tr></thead><tbody>
<tr><td>媛寃?怨듦컻</td><td>?쒖쐞留?/td><td>理쒖?媛 ?ㅼ떆媛?/td></tr>
<tr><td>?낆같 ?뚯감</td><td>2~3??/td><td>?쒓컙 ??臾댁젣??/td></tr>
<tr><td>寃쎌웳 媛뺣룄</td><td>以묎컙</td><td>?믪쓬</td></tr>
<tr><td>二쇱슂 ?덈ぉ</td><td>?쇰컲 ?먯옱쨌遺??/td><td>踰붿슜쨌MRO쨌臾쇰쪟</td></tr>
<tr><td>湲덉븸 湲곗?</td><td>3泥쒕쭔???댁긽</td><td>1?듭썝 ?댁긽 沅뚯옣</td></tr>
</tbody></table>
<p><strong>VAATZ 吏꾪뻾 ?덉감</strong></p>
<div class="pr">
<div class="ps"><div class="pn">1</div><div class="pb"><div class="pt">?낆같 怨듦퀬 ?깅줉</div><div class="pd">?낆같 ?좏삎 ?좏깮, ?덈ぉ쨌?섎웾쨌?⑷린쨌李몄뿬?낆껜 ?깅줉<span class="cr" onclick="openSourceFromCitation(4)">4<span class="cr-tip"><div class="cr-tip-doc">?뼢截?VAATZ ?낆같紐⑤뱢 留ㅻ돱??span class="cr-tip-pg">p.42</span></div><div class="cr-tip-tx">"Ch.5 ?낆같?깅줉: 援щℓ愿由?> ?낆같?깅줉?먯꽌 ?낆같 ?좏삎(?꾨젰??寃쎈ℓ)???좏깮?섍퀬 ?꾩닔 ??ぉ???낅젰?쒕떎."</div></span></span></div><div class="psy">VAATZ ??援щℓ愿由????낆같?깅줉</div></div></div>
<div class="ps"><div class="pn">2</div><div class="pb"><div class="pt">?낆껜 珥덈? 쨌 ?ъ뼇??諛고룷</div><div class="pd">5?ㅽ? ?깃툒 湲곗? 李몄뿬 ?낆껜 ?먮룞 ?꾪꽣留? ?ъ뼇??諛쒖넚<span class="cr" onclick="openSourceFromCitation(2)">2<span class="cr-tip"><div class="cr-tip-doc">?뱲 ?낆같?댁쁺 ?낅Т?쒖? STD-PUR-012<span class="cr-tip-pg">p.15</span></div><div class="cr-tip-tx">"李몄뿬 ?낆껜???쒖뒪?쒖뿉 ?깅줉??5?ㅽ? ?깃툒 湲곗????곕씪 ?먮룞 ?꾪꽣留곷릺硫? ?ъ뼇?쒕뒗 ?쇨큵 諛쒖넚?쒕떎."</div></span></span><span class="cr" onclick="openSourceFromCitation(5)">5<span class="cr-tip"><div class="cr-tip-doc">?뱤 ?덉쭏 5?ㅽ? ?댁쁺湲곗?<span class="cr-tip-pg">p.7</span></div><div class="cr-tip-tx">"??議?李몄뿬?먭꺽) ?낆같 李몄뿬 ?낆껜??吏곸쟾 遺꾧린 ?됯? 湲곗? 3?ㅽ? ?댁긽?댁뼱???쒕떎."</div></span></span></div><div class="psy">VAATZ ???낆같愿由????낆껜珥덈?</div></div></div>
<div class="ps"><div class="pn">3</div><div class="pb"><div class="pt">?ㅼ떆媛??낆같</div><div class="pd">?꾨젰?곸? ?뚯감蹂??쒖쐞, 寃쎈ℓ??理쒖?媛 ?ㅼ떆媛?怨듦컻. 留덇컧 5遺꾩쟾 ?낆같 ???먮룞 ?곗옣<span class="cr" onclick="openSourceFromCitation(1)">1<span class="cr-tip"><div class="cr-tip-doc">?뱞 援щℓ?낅Т洹쒖젙 ??3議?span class="cr-tip-pg">p.37</span></div><div class="cr-tip-tx">"?낆같 留덇컧 5遺???媛寃??쒖텧??諛쒖깮??寃쎌슦, 留덇컧 ?쒓컙? ?먮룞?쇰줈 5遺??곗옣?쒕떎."</div></span></span></div><div class="psy">VAATZ ???낆같愿由????낆같?꾪솴</div></div></div>
<div class="ps"><div class="pn">4</div><div class="pb"><div class="pt">?숈같 쨌 諛쒖＜</div><div class="pd">寃곌낵 ?뺤젙 ??援щℓ?꾩썝???뱀씤 ??諛쒖＜. ?숈같 ?낆껜 5?ㅽ? ?깃툒 ?먮룞 議고쉶<span class="cr" onclick="openSourceFromCitation(3)">3<span class="cr-tip"><div class="cr-tip-doc">?뱞 寃쎈ℓ?낆같 媛?대뱶?쇱씤 v2.1<span class="cr-tip-pg">p.13</span></div><div class="cr-tip-tx">"?숈같 寃곌낵??援щℓ?꾩썝???뱀씤 ??VAATZ 諛쒖＜?앹꽦 ?붾㈃?쇰줈 ?먮룞 ?곌퀎?쒕떎."</div></span></span><span class="cr" onclick="openSourceFromCitation(5)">5<span class="cr-tip"><div class="cr-tip-doc">?뱤 ?덉쭏 5?ㅽ? ?댁쁺湲곗?<span class="cr-tip-pg">p.9</span></div><div class="cr-tip-tx">"?숈같 ?쒖젏??5?ㅽ? ?깃툒 ?뺣낫媛 VAATZ 諛쒖＜ ?붾㈃???먮룞 ?쒖떆?쒕떎."</div></span></span></div><div class="psy">VAATZ ??援щℓ愿由???諛쒖＜?앹꽦</div></div></div>
</div>
<div class="ib i"><div class="ib-t">?덉쭏 5?ㅽ? ?곌퀎</div><div class="ib-b">3?ㅽ? ?댁긽 ?낆껜留??낆같 李몄뿬 媛?? 5?ㅽ? ?낆껜???섏쓽怨꾩빟 ?곗꽑 ?묒긽 ???span class="cr" onclick="openSourceFromCitation(5)">5<span class="cr-tip"><div class="cr-tip-doc">?뱤 ?덉쭏 5?ㅽ? ?댁쁺湲곗?<span class="cr-tip-pg">p.11</span></div><div class="cr-tip-tx">"5?ㅽ? ?깃툒 ?낆껜???숈씪 ?덈ぉ ?섏쓽怨꾩빟 ???곗꽑 ?묒긽 ??곸쑝濡??좎젙?쒕떎."</div></span></span>
<div class="sb2"><div class="sc"><div class="sv">??</div><div class="sl">理쒖슦??/div></div><div class="sc"><div class="sv">??</div><div class="sl">?곗닔</div></div><div class="sc"><div class="sv">??</div><div class="sl">?묓샇</div></div><div class="sc"><div class="sv">??</div><div class="sl">蹂댄넻</div></div><div class="sc"><div class="sv">??</div><div class="sl">誘명씉</div></div></div>
</div></div>
</div>

<!-- v20: Enhanced Source References -->
<div class="sr2"><div class="sr2-h" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'"><div class="sr2-hl"><div class="sr2-hl-ic">?뱨</div>李몄“ 臾몄꽌</div><div class="sr2-hr"><span class="sr2-cnt">5</span><span>쨌 ?대┃?섏뿬 ?먮Ц ?뺤씤</span></div></div>
<div class="sr2-list">
<div class="sr2-c" onclick="openSourceFromCitation(1)"><div class="sr2-c-n">1</div><div class="sr2-c-i"><div class="sr2-c-nm">援щℓ?낅Т洹쒖젙 ??3議?<span class="sr2-c-tp t-pdf">PDF</span></div><div class="sr2-c-mt"><span>?????낆같 쨌 p.34~38</span><span class="sr2-c-rel">愿?⑤룄 0.94</span></div></div><span class="sr2-c-go">??/span></div>
<div class="sr2-c" onclick="openSourceFromCitation(2)"><div class="sr2-c-n">2</div><div class="sr2-c-i"><div class="sr2-c-nm">?낆같?댁쁺 ?낅Т?쒖? STD-PUR-012 <span class="sr2-c-tp t-doc">DOCX</span></div><div class="sr2-c-mt"><span>3.2 ?꾨젰?곸엯李??덉감 쨌 p.12~18</span><span class="sr2-c-rel">愿?⑤룄 0.91</span></div></div><span class="sr2-c-go">??/span></div>
<div class="sr2-c" onclick="openSourceFromCitation(3)"><div class="sr2-c-n">3</div><div class="sr2-c-i"><div class="sr2-c-nm">寃쎈ℓ?낆같 媛?대뱶?쇱씤 v2.1 <span class="sr2-c-tp t-pdf">PDF</span></div><div class="sr2-c-mt"><span>2.1 ?곸슜踰붿쐞 쨌 p.8~15</span><span class="sr2-c-rel">愿?⑤룄 0.88</span></div></div><span class="sr2-c-go">??/span></div>
<div class="sr2-c" onclick="openSourceFromCitation(4)"><div class="sr2-c-n">4</div><div class="sr2-c-i"><div class="sr2-c-nm">VAATZ ?낆같紐⑤뱢 留ㅻ돱??<span class="sr2-c-tp t-ppt">PPT</span></div><div class="sr2-c-mt"><span>Ch.5 ?낆같?깅줉 쨌 p.42~58</span><span class="sr2-c-rel">愿?⑤룄 0.86</span></div></div><span class="sr2-c-go">??/span></div>
<div class="sr2-c" onclick="openSourceFromCitation(5)"><div class="sr2-c-n">5</div><div class="sr2-c-i"><div class="sr2-c-nm">?덉쭏 5?ㅽ? ?댁쁺湲곗? <span class="sr2-c-tp t-xls">XLSX</span></div><div class="sr2-c-mt"><span>??議??깃툒 쨌 ??議?李몄뿬?먭꺽 쨌 p.3~12</span><span class="sr2-c-rel">愿?⑤룄 0.79</span></div></div><span class="sr2-c-go">??/span></div>
</div></div>

<div class="ai-ac"><button class="ai-a">?몟 ?꾩???/button><button class="ai-a">?몠 遺?뺥솗</button><button class="ai-a">?뱥 蹂듭궗</button><button class="ai-a">?뱾 怨듭쑀</button><button class="ai-a">?봽 ?ъ깮??/button></div>
</div></div>
<div class="fu0"><button class="fu-c">?뱷 ?낆같 怨듦퀬 ?쒗뵆由?/button><button class="fu-c">狩?5?ㅽ? ?됯???ぉ ?곸꽭</button><button class="fu-c">?뼢截?VAATZ 寃쎈ℓ ?붾㈃ 媛?대뱶</button></div>
</div></div>

<div class="iw"><div class="ibx"><div class="ir"><textarea rows="1" placeholder="援щℓ?낅Т?????臾쇱뼱蹂댁꽭??.."></textarea><button class="sd"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 11L12 6L17 11M12 18V7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>
<div class="ib3"><div class="itl"><button class="itb">?뱨 ?뚯씪泥⑤?</button><button class="itb">?벜 ?대?吏</button><span class="web-ind" id="webInd">?뙋 ?몃?吏???쒖슜 以?/span></div><span class="ih">Enter ?꾩넚</span></div></div>
<div class="disc">?좑툘 AI ?듬?? 李멸퀬?⑹씠硫? 洹쒖젙 ?먮Ц???뺤씤?섏꽭?? 쨌 <span style="color:var(--text-4)">Ctrl+K 鍮좊Ⅸ ?낅젰</span></div></div>
</div><!-- /mn-chat -->

<div class="rp sh" id="rp">
<div class="rp-rs" id="rpResize"></div>
<div class="rp-h"><div class="rp-t" id="rpTitle">?뱛 ?묒뾽 ?⑤꼸</div><button class="rp-c" onclick="rpT()">??/button></div>
<div class="rp-tabs">
  <button class="rp-tab" id="rpTabMy" onclick="rpSwitchTab('my')"><span>?뱛</span>???뚯씪 <span class="rp-tab-count" id="rpCnt">5</span></button>
  <button class="rp-tab on" id="rpTabSrc" onclick="rpSwitchTab('src')"><span>?뵇</span>?듬? 洹쇨굅 <span class="rp-tab-count" id="rpSrcCnt">5</span><span class="rp-tab-dot" id="rpSrcDot"></span></button>
</div>

<!-- ???뚯씪 Tab -->
<div class="rp-tab-pane" id="rpPaneMy">
<div class="rp-bar"><button class="rp-btn0" onclick="newFolder()">?뱚 ???대뜑</button><button class="rp-btn0 x" onclick="delSelected()">?뿊 ?좏깮 ??젣</button></div>
<div class="rp-b">
  <div class="rp-up"><div class="upl-z" id="dropZone" onclick="simUpload()"><span class="upl-i">?곻툘</span><div class="upl-t">?대┃ ?먮뒗 ?뚯씪 ?쒕옒洹?/div><div class="upl-s">PDF, DOCX, XLSX 쨌 理쒕? 10MB</div></div></div>
  <div class="fl-sec" id="fileSec">
    <div class="fl-tl">媛쒖씤 ?대뜑</div>
    <div class="ft-f"><div class="ft-fh" onclick="tf(this)" ondragover="fDragOver(event,this)" ondragleave="fDragLeave(this)" ondrop="fDrop(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="ft-ar op">??/span><span class="ft-ic">?뱚</span><span class="ft-nm">?꾨줈?앺듃 Alpha</span></div>
    <div class="ft-ds" style="max-height:200px">
      <div class="fl-file" draggable="true" ondragstart="fDragStart(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="fl-file-ic">?뱞</span><div class="fl-file-info"><div class="fl-file-nm">25???곷컲湲??꾨왂.pdf</div><div class="fl-file-meta">2.4 MB 쨌 ?ㅻ뒛</div></div></div>
      <div class="fl-file" draggable="true" ondragstart="fDragStart(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="fl-file-ic">?뱤</span><div class="fl-file-info"><div class="fl-file-nm">?낆껜_?됯?_?곗씠??xlsx</div><div class="fl-file-meta">856 KB 쨌 ?댁젣</div></div></div>
    </div></div>
    <div class="ft-f"><div class="ft-fh" onclick="tf(this)" ondragover="fDragOver(event,this)" ondragleave="fDragLeave(this)" ondrop="fDrop(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="ft-ar">??/span><span class="ft-ic">?뱚</span><span class="ft-nm">李멸퀬 ?먮즺</span></div>
    <div class="ft-ds cl" style="max-height:0">
      <div class="fl-file" draggable="true" ondragstart="fDragStart(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="fl-file-ic">?뱲</span><div class="fl-file-info"><div class="fl-file-nm">媛쒖씤_硫붾え.txt</div><div class="fl-file-meta">12 KB 쨌 2??5??/div></div></div>
    </div></div>
    <div class="fl-tl" style="margin-top:10px">誘몃텇瑜??뚯씪 <span style="font-size:8px;color:var(--text-4);font-weight:400;letter-spacing:0">?대뜑濡??쒕옒洹명븯???뺣━</span></div>
    <div id="uncategorized">
      <div class="fl-file" draggable="true" ondragstart="fDragStart(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="fl-file-ic">?뱞</span><div class="fl-file-info"><div class="fl-file-nm">?뚯쓽濡?260208.docx</div><div class="fl-file-meta">340 KB 쨌 ?ㅻ뒛</div></div></div>
      <div class="fl-file" draggable="true" ondragstart="fDragStart(event,this)"><input type="checkbox" class="fl-chk" onclick="event.stopPropagation()"><span class="fl-file-ic">?뱞</span><div class="fl-file-info"><div class="fl-file-nm">?낆같鍮꾧탳_遺꾩꽍??pdf</div><div class="fl-file-meta">1.2 MB 쨌 ?ㅻ뒛</div></div></div>
    </div>
  </div>
</div>
<div class="rp-ft"><span id="rpStats">珥?5媛?/span><span style="color:var(--accent);cursor:pointer" onclick="newFolder()">+ ???대뜑</span></div>
<div class="comm-mini">
<div class="comm-mini-hd"><span>?뵦 ?멸린 吏덈Ц</span><button class="comm-mini-more" onclick="openComm('qa')">而ㅻ??덊떚 ??/button></div>
<div class="comm-mini-item" onclick="openComm('qa')"><span class="comm-mini-hot">?뵦</span><span class="comm-mini-title">?꾨젰?곸엯李??좎같 ??泥섎━ ?덉감</span><span class="comm-mini-tag" style="background:var(--accent-dim);color:var(--accent)">梨꾪깮</span><span class="comm-mini-votes">47</span></div>
<div class="comm-mini-item" onclick="openComm('qa')"><span class="comm-mini-hot">??/span><span class="comm-mini-title">5?ㅽ? 4???깃툒 ?밴툒 ?ъ궗??ぉ</span><span class="comm-mini-tag" style="background:var(--g-dim);color:var(--g)">NEW</span><span class="comm-mini-votes">23</span></div>
<div class="comm-mini-item" onclick="openComm('qa')"><span class="comm-mini-hot">?뮠</span><span class="comm-mini-title">?댁쇅 諛쒖＜ ???섏쑉 ?곸슜 諛⑸쾿</span><span class="comm-mini-tag" style="background:var(--bg-3);color:var(--text-3)">VAATZ</span><span class="comm-mini-votes">15</span></div>
<div class="comm-mini-item" onclick="openComm('qa')"><span class="comm-mini-hot">?뱷</span><span class="comm-mini-title">?섏쓽怨꾩빟 湲닿툒 ?ъ쑀???뱀씤 湲곗?</span><span class="comm-mini-tag" style="background:var(--a-dim);color:var(--a)">?湲?/span><span class="comm-mini-votes">8</span></div>
</div>
</div>

<!-- ?듬? 洹쇨굅 Tab (NEW v20) -->
<div class="rp-tab-pane on" id="rpPaneSrc">
<div class="src-hd">
  <div class="src-hd-q">?꾩옱 ?듬???異쒖쿂 臾몄꽌</div>
  <div class="src-hd-qt" id="srcHdQ">?꾨젰?곸엯李곌낵 寃쎈ℓ?낆같??李⑥씠?먯쓣 ?뚮젮二쇱꽭?? VAATZ?먯꽌 ?대뼸寃?吏꾪뻾?섎굹??</div>
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
<div class="mp-hd"><h2>?뫀 留덉씠?섏씠吏</h2><button class="adm-x" onclick="closeMypage()">??/button></div>
<div class="mp-profile">
<div class="mp-av">源</div>
<div class="mp-info">
<div class="mp-name">源?꾨? 梨낆엫留ㅻ땲?</div>
<div class="mp-role">援щℓ?붿??몄텛吏꾪? 쨌 ?쒖뒪?쒓?由ъ옄</div>
<div class="mp-stats">
<div class="mp-stat"><div class="mp-stat-v">127</div><div class="mp-stat-l">珥?吏덉쓽</div></div>
<div class="mp-stat"><div class="mp-stat-v">6</div><div class="mp-stat-l">?낅줈??/div></div>
<div class="mp-stat"><div class="mp-stat-v">12</div><div class="mp-stat-l">?뱀씤 泥섎━</div></div>
</div>
</div>
</div>
<div class="mp-tabs">
<button class="mp-tab on" onclick="mpTab(this,'mp-t1')">?뱥 ?붿껌 ?덉뒪?좊━</button>
<button class="mp-tab" onclick="mpTab(this,'mp-t2')">?뵒 ?뚮┝ ?댁뿭</button>
<button class="mp-tab" onclick="mpTab(this,'mp-t3')">?숋툘 ?ㅼ젙</button>
</div>
<div class="mp-body">
<div id="mp-t1">
<div class="mp-section">
<div class="mp-section-t">?닿? ?쒖텧???낅줈???붿껌</div>
<div class="mp-req-item"><span>?뱞</span><span class="mp-req-item-title">VAATZ 留덉뒪???곗씠??愿由?留ㅻ돱??/span><span class="bd bd-g" style="font-size:9px">?뱀씤??/span></div>
<div class="mp-req-item"><span>?뱞</span><span class="mp-req-item-title">援щℓ?⑹뼱 ?쒖??뺤쓽吏?2025</span><span class="bd bd-g" style="font-size:9px">?뱀씤??/span></div>
<div class="mp-req-item"><span>?뱞</span><span class="mp-req-item-title">?낆같?댁쁺 媛쒖꽑??蹂닿퀬??/span><span class="bd bd-md" style="font-size:9px">?湲곗쨷</span></div>
</div>
</div>
<div id="mp-t2" style="display:none">
<div class="mp-section">
<div class="mp-section-t">理쒓렐 ?뚮┝</div>
<div class="mp-req-item"><span>?뱾</span><span class="mp-req-item-title">諛뺤꽦誘?留ㅻ땲? ??援щℓ?꾨왂? ?낅줈???붿껌</span><span style="font-size:9px;color:var(--text-4)">5遺???/span></div>
<div class="mp-req-item"><span>??/span><span class="mp-req-item-title">怨듭젙嫄곕옒踰??섎룄湲?議고빆 ???뱀씤 ?꾨즺</span><span style="font-size:9px;color:var(--text-4)">1?쒓컙 ??/span></div>
<div class="mp-req-item"><span>?뵩</span><span class="mp-req-item-title">Learning Lounge ?숆린??吏꾪뻾 以?(68%)</span><span style="font-size:9px;color:var(--text-4)">2?쒓컙 ??/span></div>
<div class="mp-req-item"><span>??/span><span class="mp-req-item-title">?댁쇅援щℓ ?섏쑉 蹂닿퀬????蹂댁셿 ?붿껌</span><span style="font-size:9px;color:var(--text-4)">?댁젣</span></div>
</div>
</div>
<div id="mp-t3" style="display:none">
<div class="mp-section">
<div class="mp-section-t">而ㅻ??덊떚 ?됰꽕??/div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:8px;padding:14px;margin-bottom:14px">
<div style="font-size:11px;color:var(--text-3);margin-bottom:8px;line-height:1.5">而ㅻ??덊떚 Q&A?먯꽌 ?ъ슜???됰꽕?꾩엯?덈떎. ?쒕쾲 ?ㅼ젙?섎㈃ ?ш린?쒕쭔 蹂寃쏀븷 ???덉뒿?덈떎.</div>
<div style="display:flex;gap:8px;align-items:center">
<input type="text" id="mpNickInput" value="?꾨줈?먯뼱?덉뼱濡? style="flex:1;background:var(--bg-3);border:1px solid var(--border-2);padding:8px 12px;border-radius:6px;color:var(--text-1);font-size:13px;font-family:inherit;outline:none">
<button onclick="saveNickname()" style="background:var(--accent);color:white;border:none;padding:8px 16px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;font-family:inherit;white-space:nowrap">?됰꽕?????/button>
</div>
</div>
</div>
<div class="mp-section">
<div class="mp-section-t">?섍꼍 ?ㅼ젙</div>
<div class="mp-setting-row"><div><div class="mp-setting-label">?몃?吏??湲곕낯媛?/div><div class="mp-setting-desc">??????쒖옉 ???몃?吏???먮룞 ?쒖꽦??/div></div><div class="tg" onclick="this.classList.toggle('on')"></div></div>
<div class="mp-setting-row"><div><div class="mp-setting-label">?뚮┝ ?섏떊</div><div class="mp-setting-desc">?붿껌 ?뱀씤/蹂댁셿 ?붿껌, ?쒖뒪??怨듭? ?뚮┝</div></div><div class="tg on" onclick="this.classList.toggle('on')"></div></div>
<div class="mp-setting-row"><div><div class="mp-setting-label">?대찓???뚮┝</div><div class="mp-setting-desc">以묒슂 ?뚮┝???대찓?쇰줈??諛쒖넚</div></div><div class="tg" onclick="this.classList.toggle('on')"></div></div>
<div class="mp-setting-row"><div><div class="mp-setting-label">AI ?묐떟 ?ㅽ???/div><div class="mp-setting-desc">?곸꽭???듬? / 媛꾧껐???듬?</div></div>
<div class="sc-sw" style="font-size:10px"><button class="sc-btn on" onclick="this.parentElement.querySelectorAll('.sc-btn').forEach(b=>b.classList.remove('on'));this.classList.add('on')">?곸꽭</button><button class="sc-btn" onclick="this.parentElement.querySelectorAll('.sc-btn').forEach(b=>b.classList.remove('on'));this.classList.add('on')">媛꾧껐</button></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="rq-m" id="rqM">
<div class="rq-b">
    <div class="rq-h">?뱾 怨듭떇 ?곗씠???낅줈???붿껌</div>
    <div class="rq-d">AI 吏??踰좎씠?ㅼ뿉 諛섏쁺??怨듭떇 ?곗씠?곕? ?낅줈?쒗븯怨? ?대떦 ????뱀씤???붿껌?⑸땲??<br>?뱀씤 ???꾩껜 ?ъ슜?먯뿉寃??쒓났?⑸땲??</div>
    <div class="frm-g">
        <label class="frm-l">?곗씠?곕챸 / 臾몄꽌紐?/label>
        <input type="text" class="frm-i" placeholder="?? 2026???곷컲湲?援щℓ?꾨왂 蹂닿퀬??>
    </div>
    <div class="frm-g">
        <label class="frm-l">?뚯씪 泥⑤?</label>
        <div class="upl-req-z" id="reqDropZone" onclick="simReqUpload()">
            <span class="upl-i">?뱨</span>
            <div class="upl-t">?대┃?섏뿬 ?뚯씪 ?좏깮 ?먮뒗 ?쒕옒洹?/div>
            <div class="upl-s">PDF, DOCX, XLSX, HWP 쨌 理쒕? 50MB</div>
        </div>
        <div id="reqFileList" class="req-file-list"></div>
    </div>
    <div class="frm-g">
        <label class="frm-l">?뱀씤 ?붿껌 ?</label>
        <select class="frm-i frm-sel" id="reqTeamSel">
            <option value="">????좏깮?섏꽭??/option>
            <option value="援щℓ?꾨왂?">援щℓ?꾨왂?</option>
            <option value="諛섎룄泥닿뎄留ㅽ?">諛섎룄泥닿뎄留ㅽ?</option>
            <option value="援щℓ?덉쭏湲고쉷?">援щℓ?덉쭏湲고쉷?</option>
            <option value="PT?쒖뼱遺?덇뎄留ㅽ?">PT?쒖뼱遺?덇뎄留ㅽ?</option>
            <option value="援щℓ?붿??몄텛吏꾪?">援щℓ?붿??몄텛吏꾪?</option>
            <option value="援щℓ??웾媛쒕컻?">援щℓ??웾媛쒕컻?</option>
            <option value="?ㅼ떆遺?덇뎄留??">?ㅼ떆遺?덇뎄留??</option>
        </select>
    </div>
    <div class="frm-g">
        <label class="frm-l">?붿껌 ?ъ쑀</label>
        <input type="text" class="frm-i" placeholder="?? ?좉퇋 怨꾩빟 寃????李몄“ ?꾩슂">
    </div>
    <div class="frm-a">
        <button class="btn btn-c" onclick="reqClose()">痍⑥냼</button>
        <button class="btn btn-p" onclick="submitReq()">?뱾 ?낅줈???붿껌</button>
    </div>
</div>
</div>

<div class="ov" id="ao">
<div class="adm">
<div class="adm-h"><h2>?뵍 Admin 愿由?/h2><button class="adm-x" onclick="ca()">??/button></div>
<div class="adm-t">
<button class="atb on" onclick="at(this,'p-req')">?뱥 ?뱀씤 ?湲?<span style="background:var(--accent);color:white;font-size:9px;padding:1px 4px;border-radius:4px;margin-left:4px">2</span></button>
<button class="atb" onclick="at(this,'p-doc')">?뱚 吏??踰좎씠??/button>
<button class="atb" onclick="at(this,'p-usr')">?뫁 ?ъ슜??愿由?/button>
<button class="atb" onclick="at(this,'p-adm')">?썳 沅뚰븳 쨌 議곗쭅</button>
<button class="atb" onclick="at(this,'p-int')">?뵕 ?곗씠???곌퀎</button>
<button class="atb" onclick="at(this,'p-mon')">?뱤 ?ъ슜 ?꾪솴</button>
<button class="atb" onclick="at(this,'p-verify')">?쭬 AI ?듬? 寃利?/button>
<button class="atb" onclick="at(this,'p-sec')">?뵍 蹂댁븞 ?ㅼ젙</button>
</div>

<div class="adm-b" id="p-req" style="display:none">
<!-- v20: Approval Pipeline Visualization -->
<div class="appv-flow">
  <div class="appv-flow-hd">
    <div class="appv-flow-ti">?듯빀 吏??踰좎씠??諛섏쁺 ?먮쫫</div>
    <div class="appv-flow-sub">? ?낅줈????? Admin ???쒖뒪??Admin ??AI ?숈뒿 諛섏쁺</div>
  </div>
  <div class="appv-pipe">
    <div class="appv-stage stg-pending">
      <div class="appv-stage-lb">??? ?낅줈??/div>
      <div class="appv-stage-nm">????낅줈???붿껌</div>
      <div class="appv-stage-mt"><div><span class="appv-stage-cnt c-a">5</span><span class="appv-stage-unit">嫄??湲?/span></div></div>
    </div>
    <div class="appv-arrow"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div class="appv-stage stg-review">
      <div class="appv-stage-lb">??? Admin</div>
      <div class="appv-stage-nm">1李?寃??(?대떦??</div>
      <div class="appv-stage-mt"><div><span class="appv-stage-cnt c-b">3</span><span class="appv-stage-unit">嫄?寃??以?/span></div></div>
    </div>
    <div class="appv-arrow"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div class="appv-stage stg-final">
      <div class="appv-stage-lb">???쒖뒪??Admin</div>
      <div class="appv-stage-nm">理쒖쥌 ?뱀씤 쨌 ?대뜑 諛곗젙</div>
      <div class="appv-stage-mt"><div><span class="appv-stage-cnt c-v">2</span><span class="appv-stage-unit">嫄??대뜑 誘몄???/span></div></div>
    </div>
    <div class="appv-arrow"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div class="appv-stage stg-done">
      <div class="appv-stage-lb">???듯빀 吏??/div>
      <div class="appv-stage-nm">AI ?꾨쿋??쨌 寃???쒖꽦??/div>
      <div class="appv-stage-mt"><div><span class="appv-stage-cnt c-g">14</span><span class="appv-stage-unit">嫄?AI 寃??諛섏쁺?꾨즺</span></div></div>
    </div>
  </div>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div style="font-size:13px;font-weight:600">怨듭떇 ?곗씠???낅줈???붿껌</div><div style="display:flex;gap:6px;align-items:center"><span style="font-size:11px;color:var(--text-3)">?湲?<b style="color:var(--a)">5嫄?/b></span><button class="tb-b" style="font-size:11px" onclick="batchApprove()">???좏깮 ?쇨큵 ?뱀씤</button><button class="tb-b" style="font-size:11px" onclick="batchReject()">???좏깮 蹂댁셿 ?붿껌</button></div></div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px">媛????Admin ?대떦?먭? ?뱀씤/蹂댁셿 ?붿껌?⑸땲?? ?뱀씤??臾몄꽌???뚮?遺꾨쪟?띾줈 ?대룞 ???쒖뒪??Admin???대뜑瑜?吏?뺥빀?덈떎.</div>
<div class="ft-f" style="margin-bottom:4px"><div class="ft-fh" onclick="tf(this)" style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px"><input type="checkbox" class="fl-chk team-chk" style="opacity:1" onclick="event.stopPropagation()"><span class="ft-ar op">??/span><span class="ft-ic">?뱛</span><span class="ft-nm">援щℓ?꾨왂?</span><span style="font-size:9px;color:var(--text-4);margin-left:4px">?대떦: 源?꾨?</span><span style="font-size:10px;background:var(--a-dim);color:var(--a);padding:1px 6px;border-radius:4px;font-weight:600;margin-left:auto;margin-right:6px">?湲?2</span></div><div class="ft-ds" style="max-height:400px;padding-left:10px">
<div class="req-card"><input type="checkbox" class="fl-chk req-chk" style="opacity:1" onclick="event.stopPropagation()"><div class="req-body"><div class="req-title">議곕떖泥?臾쇳뭹援щℓ怨꾩빟 ?뱀닔議곌굔</div><div class="req-meta">諛뺤꽦誘?留ㅻ땲? 쨌 怨듦났 ?낆같 嫄?鍮꾧탳 쨌 02.08 쨌 ?뱨 臾쇳뭹援щℓ怨꾩빟_?뱀닔議곌굔.pdf</div></div><div class="req-acts"><button class="abtn ok" onclick="appReq(this)">?뱀씤</button><button class="abtn no" onclick="rejReq(this)">蹂댁셿 ?붿껌</button></div></div>
<div class="req-card"><input type="checkbox" class="fl-chk req-chk" style="opacity:1" onclick="event.stopPropagation()"><div class="req-body"><div class="req-title">?댁쇅踰뺤씤 援щℓ ?뱀씤 ?꾨줈?몄뒪</div><div class="req-meta">?댁???梨낆엫留ㅻ땲? 쨌 ?댁쇅 援щℓ嫄??뱀씤 쨌 02.07 쨌 ?뱨 ?댁쇅援щℓ_?뱀씤_?꾨줈?몄뒪.docx</div></div><div class="req-acts"><button class="abtn ok" onclick="appReq(this)">?뱀씤</button><button class="abtn no" onclick="rejReq(this)">蹂댁셿 ?붿껌</button></div></div>
</div></div>
<div class="ft-f" style="margin-bottom:4px"><div class="ft-fh" onclick="tf(this)" style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px"><input type="checkbox" class="fl-chk team-chk" style="opacity:1" onclick="event.stopPropagation()"><span class="ft-ar">??/span><span class="ft-ic">?뱛</span><span class="ft-nm">諛섎룄泥닿뎄留ㅽ?</span><span style="font-size:9px;color:var(--text-4);margin-left:4px">?대떦: 源?꾨?</span><span style="font-size:10px;background:var(--a-dim);color:var(--a);padding:1px 6px;border-radius:4px;font-weight:600;margin-left:auto;margin-right:6px">?湲?2</span></div><div class="ft-ds cl" style="max-height:0;padding-left:10px">
<div class="req-card"><input type="checkbox" class="fl-chk req-chk" style="opacity:1" onclick="event.stopPropagation()"><div class="req-body"><div class="req-title">諛섎룄泥??섏텧洹쒖젣 援??蹂??꾪솴</div><div class="req-meta">理쒖쑀吏?留ㅻ땲? 쨌 ?섏텧 由ъ뒪???먭? 쨌 02.08 쨌 ?뱨 ?섏텧洹쒖젣_?꾪솴_2026.xlsx</div></div><div class="req-acts"><button class="abtn ok" onclick="appReq(this)">?뱀씤</button><button class="abtn no" onclick="rejReq(this)">蹂댁셿 ?붿껌</button></div></div>
<div class="req-card"><input type="checkbox" class="fl-chk req-chk" style="opacity:1" onclick="event.stopPropagation()"><div class="req-body"><div class="req-title">TSMC ?⑷린 愿由?媛?대뱶</div><div class="req-meta">理쒖쑀吏?留ㅻ땲? 쨌 諛섎룄泥??⑷린 ???쨌 02.06 쨌 ?뱨 TSMC_?⑷린愿由?v2.pdf</div></div><div class="req-acts"><button class="abtn ok" onclick="appReq(this)">?뱀씤</button><button class="abtn no" onclick="rejReq(this)">蹂댁셿 ?붿껌</button></div></div>
</div></div>
<div class="ft-f" style="margin-bottom:4px"><div class="ft-fh" onclick="tf(this)" style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px"><input type="checkbox" class="fl-chk team-chk" style="opacity:1" onclick="event.stopPropagation()"><span class="ft-ar">??/span><span class="ft-ic">?뱛</span><span class="ft-nm">援щℓ?덉쭏湲고쉷?</span><span style="font-size:9px;color:var(--text-4);margin-left:4px">?대떦: ?뺥쁽??/span><span style="font-size:10px;background:var(--g-dim);color:var(--g);padding:1px 6px;border-radius:4px;font-weight:600;margin-left:auto;margin-right:6px">?꾨즺 1</span></div><div class="ft-ds cl" style="max-height:0;padding-left:10px">
<div class="req-card done"><input type="checkbox" class="fl-chk req-chk" style="opacity:1" onclick="event.stopPropagation()"><div class="req-body"><div class="req-title">怨듭젙嫄곕옒踰??섎룄湲?愿??議고빆</div><div class="req-meta">?뺥쁽??梨낆엫留ㅻ땲? 쨌 02.07</div></div><span class="bd bd-g">?뱀씤??/span></div>
</div></div>
<div class="ft-f" style="margin-bottom:4px"><div class="ft-fh" onclick="tf(this)" style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:6px"><input type="checkbox" class="fl-chk team-chk" style="opacity:1" onclick="event.stopPropagation()"><span class="ft-ar">??/span><span class="ft-ic">?뱛</span><span class="ft-nm">PT?쒖뼱遺?덇뎄留ㅽ?</span><span style="font-size:9px;color:var(--text-4);margin-left:4px">?대떦: 源?꾨?</span><span style="font-size:10px;background:var(--a-dim);color:var(--a);padding:1px 6px;border-radius:4px;font-weight:600;margin-left:auto;margin-right:6px">?湲?1</span></div><div class="ft-ds cl" style="max-height:0;padding-left:10px">
<div class="req-card"><input type="checkbox" class="fl-chk req-chk" style="opacity:1" onclick="event.stopPropagation()"><div class="req-body"><div class="req-title">?꾨룞??遺???④? 踰ㅼ튂留덊겕</div><div class="req-meta">?쒕룄??留ㅻ땲? 쨌 PT 遺???④? 쨌 02.08 쨌 ?뱨 ?꾨룞?붾????④?鍮꾧탳.xlsx</div></div><div class="req-acts"><button class="abtn ok" onclick="appReq(this)">?뱀씤</button><button class="abtn no" onclick="rejReq(this)">蹂댁셿 ?붿껌</button></div></div>
</div></div>
</div>

<div class="adm-b" id="p-usr">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
<div style="font-size:13px;font-weight:600">?ъ슜??愿由?<span style="color:var(--text-4);font-size:11px;font-weight:400">48紐?쨌 8媛??</span></div>
<div style="display:flex;gap:4px"><button class="tb-b" style="font-size:11px">竊?? 異붽?</button><button class="tb-b" style="font-size:11px">竊??ъ슜??異붽?</button></div>
</div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px">?蹂?<b style="color:var(--text-2)">???+ ?愿由ъ옄</b> 2?몃쭔 Admin 沅뚰븳 遺?? ?쇰컲 援ъ꽦?먯? SSO ?몄쬆?쇰줈 ?쒖뒪???묒냽留?媛??</div>

<!-- ?쒖뒪?쒓?由ъ옄 -->
<div class="org-team" style="border-color:var(--accent-bd)">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar op" style="font-size:10px;color:var(--text-4)">??/span><span style="font-size:14px">?뵍</span><div class="org-team-nm">?쒖뒪?쒓?由ъ옄</div><span class="bd bd-a" style="font-size:9px">?꾩껜 沅뚰븳</span></div>
<div class="org-team-bd" style="max-height:200px">
<div class="org-m"><div class="org-m-av" style="background:var(--accent-g)">源</div><div class="org-m-info"><div class="org-m-nm">源?꾨? <span class="bd bd-a" style="font-size:8px">?쒖뒪?쒓?由ъ옄</span></div><div class="org-m-role">梨낆엫留ㅻ땲? 쨌 援щℓ?붿??몄텛吏꾪?</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">?믪쓬</span><span class="bd bd-md" style="font-size:8px">以묎컙</span><span class="bd bd-l" style="font-size:8px">??쓬</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
</div></div>

<!-- 援щℓ?꾨왂? -->
<div class="org-team">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar op" style="font-size:10px;color:var(--text-4)">??/span><span style="font-size:14px">?뱛</span><div class="org-team-nm">援щℓ?꾨왂?</div><span class="org-team-cnt">6紐?/span><span class="bd bd-md" style="font-size:9px;margin-left:4px">以묎컙+??쓬</span></div>
<div class="org-team-bd" style="max-height:400px">
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">源</div><div class="org-m-info"><div class="org-m-nm">源?꾨왂 <span class="bd bd-m" style="font-size:8px">???/span></div><div class="org-m-role">???쨌 援щℓ?꾨왂?</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">?믪쓬</span><span class="bd bd-md" style="font-size:8px">以묎컙</span><span class="bd bd-l" style="font-size:8px">??쓬</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div class="org-m"><div class="org-m-av" style="background:var(--bg-5)">??/div><div class="org-m-info"><div class="org-m-nm">?댁???<span class="bd bd-m" style="font-size:8px">?愿由ъ옄</span></div><div class="org-m-role">梨낆엫留ㅻ땲? 쨌 援щℓ?꾨왂?</div></div><div class="org-m-scope"><span class="bd bd-md" style="font-size:8px">以묎컙</span><span class="bd bd-l" style="font-size:8px">??쓬</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div style="padding:3px 10px;font-size:9px;color:var(--text-4);font-style:italic;border-top:1px solid var(--border-1);margin-top:4px">?쇰컲 援ъ꽦??4紐???SSO ?묒냽 (Admin 沅뚰븳 ?놁쓬)</div>
</div></div>

<!-- 諛섎룄泥닿뎄留ㅽ? -->
<div class="org-team">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar" style="font-size:10px;color:var(--text-4)">??/span><span style="font-size:14px">?뱛</span><div class="org-team-nm">諛섎룄泥닿뎄留ㅽ?</div><span class="org-team-cnt">5紐?/span><span class="bd bd-md" style="font-size:9px;margin-left:4px">以묎컙+??쓬</span></div>
<div class="org-team-bd ft-ds cl" style="max-height:0">
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">??/div><div class="org-m-info"><div class="org-m-nm">?λ컲??<span class="bd bd-m" style="font-size:8px">???/span></div><div class="org-m-role">???쨌 諛섎룄泥닿뎄留ㅽ?</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">?믪쓬</span><span class="bd bd-md" style="font-size:8px">以묎컙</span><span class="bd bd-l" style="font-size:8px">??쓬</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div class="org-m"><div class="org-m-av" style="background:var(--bg-5)">理?/div><div class="org-m-info"><div class="org-m-nm">理쒖쑀吏?<span class="bd bd-m" style="font-size:8px">?愿由ъ옄</span></div><div class="org-m-role">留ㅻ땲? 쨌 諛섎룄泥닿뎄留ㅽ?</div></div><div class="org-m-scope"><span class="bd bd-md" style="font-size:8px">以묎컙</span><span class="bd bd-l" style="font-size:8px">??쓬</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div style="padding:3px 10px;font-size:9px;color:var(--text-4);font-style:italic;border-top:1px solid var(--border-1);margin-top:4px">?쇰컲 援ъ꽦????SSO ?묒냽 (Admin 沅뚰븳 ?놁쓬)</div>
</div></div>

<!-- 援щℓ?덉쭏湲고쉷? -->
<div class="org-team">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar" style="font-size:10px;color:var(--text-4)">??/span><span style="font-size:14px">?뱛</span><div class="org-team-nm">援щℓ?덉쭏湲고쉷?</div><span class="org-team-cnt">4紐?/span><span class="bd bd-md" style="font-size:9px;margin-left:4px">以묎컙+??쓬</span></div>
<div class="org-team-bd ft-ds cl" style="max-height:0">
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">??/div><div class="org-m-info"><div class="org-m-nm">?ㅽ뭹吏?<span class="bd bd-m" style="font-size:8px">???/span></div><div class="org-m-role">???쨌 援щℓ?덉쭏湲고쉷?</div></div><div class="org-m-scope"><span class="bd bd-md" style="font-size:8px">以묎컙</span><span class="bd bd-l" style="font-size:8px">??쓬</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div class="org-m"><div class="org-m-av" style="background:var(--bg-5)">??/div><div class="org-m-info"><div class="org-m-nm">?뺥쁽??<span class="bd bd-m" style="font-size:8px">?愿由ъ옄</span></div><div class="org-m-role">梨낆엫留ㅻ땲? 쨌 援щℓ?덉쭏湲고쉷?</div></div><div class="org-m-scope"><span class="bd bd-md" style="font-size:8px">以묎컙</span><span class="bd bd-l" style="font-size:8px">??쓬</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div style="padding:3px 10px;font-size:9px;color:var(--text-4);font-style:italic;border-top:1px solid var(--border-1);margin-top:4px">?쇰컲 援ъ꽦????SSO ?묒냽 (Admin 沅뚰븳 ?놁쓬)</div>
</div></div>

<!-- PT?쒖뼱遺?덇뎄留ㅽ? -->
<div class="org-team">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar" style="font-size:10px;color:var(--text-4)">??/span><span style="font-size:14px">?뱛</span><div class="org-team-nm">PT?쒖뼱遺?덇뎄留ㅽ?</div><span class="org-team-cnt">5紐?/span><span class="bd bd-md" style="font-size:9px;margin-left:4px">以묎컙+??쓬</span></div>
<div class="org-team-bd ft-ds cl" style="max-height:0">
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">??/div><div class="org-m-info"><div class="org-m-nm">?좎젣??<span class="bd bd-m" style="font-size:8px">???/span></div><div class="org-m-role">???쨌 PT?쒖뼱遺?덇뎄留ㅽ?</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">?믪쓬</span><span class="bd bd-md" style="font-size:8px">以묎컙</span><span class="bd bd-l" style="font-size:8px">??쓬</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div class="org-m"><div class="org-m-av" style="background:var(--bg-5)">??/div><div class="org-m-info"><div class="org-m-nm">?쒕룄??<span class="bd bd-m" style="font-size:8px">?愿由ъ옄</span></div><div class="org-m-role">留ㅻ땲? 쨌 PT?쒖뼱遺?덇뎄留ㅽ?</div></div><div class="org-m-scope"><span class="bd bd-md" style="font-size:8px">以묎컙</span><span class="bd bd-l" style="font-size:8px">??쓬</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div style="padding:4px 10px;font-size:10px;color:var(--text-4)">????3紐?/div>
</div></div>

<!-- 援щℓ??웾媛쒕컻?, ?ㅼ떆遺?? ?섏옣?쒖뒪??異뺤빟 -->
<div class="org-team">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar" style="font-size:10px;color:var(--text-4)">??/span><span style="font-size:14px">?뱛</span><div class="org-team-nm">援щℓ??웾媛쒕컻?</div><span class="org-team-cnt">4紐?/span><span class="bd bd-md" style="font-size:9px;margin-left:4px">以묎컙+??쓬</span></div>
<div class="org-team-bd ft-ds cl" style="max-height:0">
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">源</div><div class="org-m-info"><div class="org-m-nm">源??웾 <span class="bd bd-m" style="font-size:8px">???/span></div><div class="org-m-role">???쨌 援щℓ??웾媛쒕컻?</div></div><div class="org-m-scope"><span class="bd bd-md" style="font-size:8px">以묎컙</span><span class="bd bd-l" style="font-size:8px">??쓬</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div style="padding:3px 10px;font-size:9px;color:var(--text-4);font-style:italic;border-top:1px solid var(--border-1);margin-top:4px">?쇰컲 援ъ꽦??3紐???SSO ?묒냽 (Admin 沅뚰븳 ?놁쓬)</div>
</div></div>

<!-- ?꾩썝 -->
<div class="org-team" style="border-color:rgba(194,155,66,0.3)">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar op" style="font-size:10px;color:var(--text-4)">??/span><span style="font-size:14px">?몦</span><div class="org-team-nm">?꾩썝</div><span class="org-team-cnt">3紐?/span><span class="bd bd-h" style="font-size:9px;margin-left:4px">紐⑤뱺 ?믪쓬 ?대엺</span></div>
<div class="org-team-bd" style="max-height:300px">
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">??/div><div class="org-m-info"><div class="org-m-nm">?닿뎄留?<span class="bd bd-m" style="font-size:8px">援щℓ?대떦 ?곷Т</span></div><div class="org-m-role">?곷Т蹂?쨌 援щℓ蹂몃?</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">?믪쓬 ?꾩껜</span><span class="bd bd-md" style="font-size:8px">以묎컙</span><span class="bd bd-l" style="font-size:8px">??쓬</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">諛?/div><div class="org-m-info"><div class="org-m-nm">諛뺤쟾??<span class="bd bd-m" style="font-size:8px">?꾨왂援щℓ ?댁궗</span></div><div class="org-m-role">?댁궗 쨌 ?꾨왂援щℓ??/div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">?믪쓬 ?꾩껜</span><span class="bd bd-md" style="font-size:8px">以묎컙</span><span class="bd bd-l" style="font-size:8px">??쓬</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div class="org-m"><div class="org-m-av" style="background:linear-gradient(135deg,#C29B42,#D4B05E)">理?/div><div class="org-m-info"><div class="org-m-nm">理쒕낯遺 <span class="bd bd-m" style="font-size:8px">援щℓ蹂몃???/span></div><div class="org-m-role">?꾨Т 쨌 援щℓ蹂몃?</div></div><div class="org-m-scope"><span class="bd bd-h" style="font-size:8px">?믪쓬 ?꾩껜</span><span class="bd bd-md" style="font-size:8px">以묎컙</span><span class="bd bd-l" style="font-size:8px">??쓬</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
</div></div>

<!-- ?몃? ?묐젰??-->
<div class="org-team" style="border-color:var(--border-2);opacity:.7">
<div class="org-team-hd" onclick="tf(this)"><span class="ft-ar" style="font-size:10px;color:var(--text-4)">??/span><span style="font-size:14px">?룫</span><div class="org-team-nm">?몃? ?묐젰??/div><span class="org-team-cnt">3紐?/span><span class="bd bd-l" style="font-size:9px;margin-left:4px">??쓬留?/span></div>
<div class="org-team-bd ft-ds cl" style="max-height:0">
<div class="org-m"><div class="org-m-av" style="background:var(--bg-5)">??/div><div class="org-m-info"><div class="org-m-nm">?ν삊??<span class="bd bd-e" style="font-size:8px">?몃?</span></div><div class="org-m-role">?묐젰??A</div></div><div class="org-m-scope"><span class="bd bd-l" style="font-size:8px">??쓬</span></div><div class="org-act"><div class="tg on" onclick="this.classList.toggle('on')"></div></div></div>
<div style="padding:4px 10px;font-size:10px;color:var(--text-4)">????2紐?/div>
</div></div>

<div style="padding:8px 10px;font-size:10px;color:var(--text-4);line-height:1.6">
?뮕 <b style="color:var(--text-3)">沅뚰븳 遺???뺤콉</b>: <span class="bd bd-h" style="font-size:9px">?믪쓬</span> ?깃툒? ?뚯씪 ?대떦??Admin)媛 ?대떦 ?????μ쓣 吏?뺥븯??遺?ы빀?덈떎. ? 異붽? ???대떦 ?????μ씠 ?먮룞?쇰줈 ?믪쓬 ?묎렐 ??곸뿉 ?깅줉?섎ŉ, ?ν썑 ?몄궗?뺣낫 ?곕룞?쇰줈 ?먮룞 ?낅뜲?댄듃?⑸땲??
</div>
</div>

<div class="adm-b" id="p-doc" style="display:none">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
<div style="font-size:13px;font-weight:600">臾몄꽌 愿由?<span style="color:var(--text-4);font-size:11px;font-weight:400">??Admin ?꾩슜 쨌 ?대뜑 ?묎렐沅뚰븳 愿由?/span></div>
<div style="display:flex;gap:4px"><button class="tb-b" style="font-size:11px">?뱛 ?대뜑 異붽?</button><button class="tb-b" style="font-size:11px">?뱾 臾몄꽌 ?낅줈??/button><button class="tb-b" style="font-size:11px;color:var(--r)" onclick="alert('??젣??臾몄꽌瑜??좏깮?댁＜?몄슂.')">?뿊 ?좏깮 ??젣</button></div>
</div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px">?붿껌愿由ъ뿉???뱀씤??臾몄꽌???뚮?遺꾨쪟?띿뿉 ??λ맗?덈떎. <b style="color:var(--text-2)">?쒖뒪??Admin留?/b> ?대뜑 ?대룞쨌??젣 媛?ν빀?덈떎. 臾몄꽌瑜??대┃?섎㈃ ?묎렐 沅뚰븳???ㅼ젙?????덉뒿?덈떎.</div>

<!-- 誘몃텇瑜?(?뱀씤 ???湲? -->
<div class="doc-uncat">
<div class="doc-uncat-title">?뱿 誘몃텇瑜?<span style="font-size:9px;background:var(--a-dim);color:var(--a);padding:1px 5px;border-radius:3px;font-weight:600">2嫄?/span> <span style="font-size:9px;color:var(--text-4);margin-left:4px">?뱀씤??臾몄꽌 ???대뜑 諛곗젙 ?湲?/span></div>
<div class="doc-uncat-item"><span style="font-size:12px">?뱞</span><div class="doc-uncat-nm">怨듭젙嫄곕옒踰??섎룄湲?愿??議고빆.pdf</div><div class="doc-uncat-meta">?뺥쁽??쨌 援щℓ?덉쭏湲고쉷 쨌 02.07</div><div class="doc-uncat-acts"><select class="doc-mv-btn" onchange="if(this.value){alert(this.value+' ?대뜑濡??대룞?⑸땲??');this.closest('.doc-uncat-item').style.opacity='.3'}"><option value="">?대룞 ??/option><option value="援щℓ?낅Т洹쒖젙">援щℓ?낅Т洹쒖젙</option><option value="?낆같愿由?>?낆같愿由?/option><option value="VAATZ 留ㅻ돱??>VAATZ 留ㅻ돱??/option><option value="?덉쭏 5?ㅽ?">?덉쭏 5?ㅽ?</option><option value="?⑹뼱?ъ쟾 쨌 ?묒떇">?⑹뼱?ъ쟾 쨌 ?묒떇</option></select></div></div>
<div class="doc-uncat-item"><span style="font-size:12px">?뱞</span><div class="doc-uncat-nm">?꾨룞??遺???④? 踰ㅼ튂留덊겕.xlsx</div><div class="doc-uncat-meta">?쒕룄??쨌 PT?쒖뼱遺??쨌 02.08</div><div class="doc-uncat-acts"><select class="doc-mv-btn" onchange="if(this.value){alert(this.value+' ?대뜑濡??대룞?⑸땲??');this.closest('.doc-uncat-item').style.opacity='.3'}"><option value="">?대룞 ??/option><option value="援щℓ?낅Т洹쒖젙">援щℓ?낅Т洹쒖젙</option><option value="?낆같愿由?>?낆같愿由?/option><option value="VAATZ 留ㅻ돱??>VAATZ 留ㅻ돱??/option><option value="?덉쭏 5?ㅽ?">?덉쭏 5?ㅽ?</option><option value="?⑹뼱?ъ쟾 쨌 ?묒떇">?⑹뼱?ъ쟾 쨌 ?묒떇</option></select></div></div>
</div>

<div style="margin-top:14px">
<!-- 援щℓ?낅Т洹쒖젙 ?대뜑 -->
<div class="ft-f"><div class="ft-fh" onclick="tf(this)"><span class="ft-ar op">??/span><span class="ft-ic">?뱛</span><span class="ft-nm">援щℓ?낅Т洹쒖젙</span><span class="ft-ct">3嫄?/span><span class="ft-fh-admin">?뵏 ?대떦: 源?꾨?</span></div>
<div class="ft-ds" style="max-height:2000px">
<!-- ?믪쓬: 援щℓ?낅Т洹쒖젙 (?꾨Ц) -->
<div class="ft-d" onclick="td('dap1')"><div class="ft-dl"><span class="ft-di">?뱯</span><div style="flex:1;min-width:0"><span class="ft-dn">援щℓ?낅Т洹쒖젙 (?꾨Ц)</span><div class="ft-d-info">源?꾨? 쨌 援щℓ?붿??몄텛吏?쨌 2025.01.15</div></div></div><div class="ft-dr"><span class="emb emb-ok">??/span><span class="bd bd-h">?믪쓬</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('??젣?섏떆寃좎뒿?덇퉴?'))this.closest('.ft-d').style.display='none'">?뿊</button></div></div>
<div class="dap" id="dap1" style="display:none"><div class="dap-bd">
<div class="dap-sec"><div class="dap-lb"><span class="bd bd-h" style="font-size:9px;margin-right:4px">?믪쓬</span> ??κ툒 ?대엺 ??? 異붽? ??????먮룞 吏??<button class="add-t">竊?? 異붽?</button></div><div class="tc"><div class="tch">援щℓ?꾨왂? (源?꾨왂 ??? <span class="rx" onclick="this.parentElement.remove()">??/span></div><div class="tch">援щℓ湲고쉷? (諛뺢린????? <span class="rx" onclick="this.parentElement.remove()">??/span></div><div class="tch">援щℓ?붿??몄텛吏꾪? (源?꾨?) <span class="rx" onclick="this.parentElement.remove()">??/span></div></div></div>
<div class="dap-sec"><div class="dap-lb">媛쒖씤 ?덉쇅 ?묎렐 <button class="add-t">竊?媛쒖씤</button></div>
<div class="ind-r"><div class="ind-u"><div class="ind-av">??/div><span class="ind-nm">?뺥쁽??/span><span class="ind-dp">援щℓ?덉쭏湲고쉷</span></div><div style="display:flex;align-items:center;gap:6px"><span class="ind-rs">5?ㅽ? ?됯? ?곌퀎</span><button class="ind-rm" onclick="this.closest('.ind-r').remove()">??/button></div></div>
</div>
<div class="dap-sec"><div class="dap-lb">?뚯씪 ?대떦??(理쒖쥌 沅뚰븳 吏??</div>
<div class="ind-r"><div class="ind-u"><div class="ind-av" style="background:var(--accent)">源</div><span class="ind-nm">源?꾨?</span><span class="ind-dp">?쒖뒪?쒓?由ъ옄</span></div><div style="display:flex;align-items:center;gap:6px"><span class="ind-rs" style="background:var(--accent-dim);color:var(--accent)">?뚯씪 ?대떦??/span></div></div>
</div>
</div></div>
<!-- ?믪쓬: ?섏쓽怨꾩빟 ?댁쁺吏移?-->
<div class="ft-d" onclick="td('dap1b')"><div class="ft-dl"><span class="ft-di">?뱯</span><div style="flex:1;min-width:0"><span class="ft-dn">?섏쓽怨꾩빟 ?댁쁺吏移?v3.0</span><div class="ft-d-info">?댁???쨌 援щℓ?꾨왂 쨌 2025.02.01</div></div></div><div class="ft-dr"><span class="emb emb-wip">??/span><span class="bd bd-h">?믪쓬</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('??젣?섏떆寃좎뒿?덇퉴?'))this.closest('.ft-d').style.display='none'">?뿊</button></div></div>
<div class="dap" id="dap1b" style="display:none"><div class="dap-bd">
<div class="dap-sec"><div class="dap-lb"><span class="bd bd-h" style="font-size:9px;margin-right:4px">?믪쓬</span> ??κ툒 ?대엺 <button class="add-t">竊?? 異붽?</button></div><div class="tc"><div class="tch">援щℓ?꾨왂? (源?꾨왂 ??? <span class="rx" onclick="this.parentElement.remove()">??/span></div></div></div>
<div class="dap-sec"><div class="dap-lb">媛쒖씤 ?덉쇅 ?묎렐 <button class="add-t">竊?媛쒖씤</button></div><div style="font-size:10px;color:var(--text-4);padding:4px">吏?뺣맂 媛쒖씤 ?놁쓬</div></div>
<div class="dap-sec"><div class="dap-lb">?뚯씪 ?대떦??/div>
<div class="ind-r"><div class="ind-u"><div class="ind-av" style="background:var(--accent)">源</div><span class="ind-nm">源?꾨?</span><span class="ind-dp">?쒖뒪?쒓?由ъ옄</span></div><div style="display:flex;align-items:center;gap:6px"><span class="ind-rs" style="background:var(--accent-dim);color:var(--accent)">?뚯씪 ?대떦??/span></div></div></div>
</div></div>
<!-- 以묎컙: 怨꾩빟愿由?洹쒖젙 -->
<div class="ft-d" onclick="td('dap1c')"><div class="ft-dl"><span class="ft-di">?뱲</span><div style="flex:1;min-width:0"><span class="ft-dn">怨꾩빟愿由?洹쒖젙</span><div class="ft-d-info">?댁???쨌 援щℓ?꾨왂 쨌 2025.01.20</div></div></div><div class="ft-dr"><span class="emb emb-ok">??/span><span class="bd bd-md">以묎컙</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('??젣?섏떆寃좎뒿?덇퉴?'))this.closest('.ft-d').style.display='none'">?뿊</button></div></div>
<div class="dap" id="dap1c" style="display:none"><div class="dap-bd">
<div class="dap-sec"><div class="dap-lb"><span class="bd bd-md" style="font-size:9px;margin-right:4px">以묎컙</span> ?덉슜 ? (? ?꾩썝 ?대엺) <button class="add-t">竊?? 異붽?</button></div><div class="tc"><div class="tch">援щℓ?꾨왂? <span class="rx" onclick="this.parentElement.remove()">??/span></div><div class="tch">援щℓ湲고쉷? <span class="rx" onclick="this.parentElement.remove()">??/span></div><div class="tch">援щℓ?붿??몄텛吏꾪? <span class="rx" onclick="this.parentElement.remove()">??/span></div><div class="tch">援щℓ?덉쭏湲고쉷? <span class="rx" onclick="this.parentElement.remove()">??/span></div></div></div>
<div class="dap-sec"><div class="dap-lb">媛쒖씤 ?덉쇅 ?묎렐 <button class="add-t">竊?媛쒖씤</button></div><div style="font-size:10px;color:var(--text-4);padding:4px">吏?뺣맂 媛쒖씤 ?놁쓬</div></div>
<div class="dap-sec"><div class="dap-lb">?뚯씪 ?대떦??/div>
<div class="ind-r"><div class="ind-u"><div class="ind-av" style="background:var(--accent)">源</div><span class="ind-nm">源?꾨?</span><span class="ind-dp">?쒖뒪?쒓?由ъ옄</span></div><div style="display:flex;align-items:center;gap:6px"><span class="ind-rs" style="background:var(--accent-dim);color:var(--accent)">?뚯씪 ?대떦??/span></div></div></div>
</div></div>
</div></div>

<!-- ?낆같愿由??대뜑 -->
<div class="ft-f"><div class="ft-fh" onclick="tf(this)"><span class="ft-ar op">??/span><span class="ft-ic">?뱛</span><span class="ft-nm">?낆같愿由?/span><span class="ft-ct">2嫄?/span><span class="ft-fh-admin">?뵏 ?대떦: 源?꾨?</span></div>
<div class="ft-ds" style="max-height:1500px">
<!-- 以묎컙: ?낆같?댁쁺 ?낅Т?쒖? -->
<div class="ft-d" onclick="td('dap2a')"><div class="ft-dl"><span class="ft-di">?뱲</span><div style="flex:1;min-width:0"><span class="ft-dn">?낆같?댁쁺 ?낅Т?쒖? STD-PUR-012</span><div class="ft-d-info">源?꾨? 쨌 ?붿??몄텛吏?쨌 2025.01.10</div></div></div><div class="ft-dr"><span class="emb emb-ok">??/span><span class="bd bd-md">以묎컙</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('??젣?섏떆寃좎뒿?덇퉴?'))this.closest('.ft-d').style.display='none'">?뿊</button></div></div>
<div class="dap" id="dap2a" style="display:none"><div class="dap-bd">
<div class="dap-sec"><div class="dap-lb"><span class="bd bd-md" style="font-size:9px;margin-right:4px">以묎컙</span> ?덉슜 ? <button class="add-t">竊?? 異붽?</button></div><div class="tc"><div class="tch">援щℓ?꾨왂? <span class="rx" onclick="this.parentElement.remove()">??/span></div><div class="tch">諛섎룄泥닿뎄留ㅽ? <span class="rx" onclick="this.parentElement.remove()">??/span></div><div class="tch">PT?쒖뼱遺?덇뎄留ㅽ? <span class="rx" onclick="this.parentElement.remove()">??/span></div></div></div>
<div class="dap-sec"><div class="dap-lb">媛쒖씤 ?덉쇅 ?묎렐 <button class="add-t">竊?媛쒖씤</button></div>
<div class="ind-r"><div class="ind-u"><div class="ind-av">??/div><span class="ind-nm">?ㅼ꽌??/span><span class="ind-dp">援щℓ??웾媛쒕컻</span></div><div style="display:flex;align-items:center;gap:6px"><span class="ind-rs">援먯쑁 肄섑뀗痢??쒖옉</span><button class="ind-rm" onclick="this.closest('.ind-r').remove()">??/button></div></div></div>
<div class="dap-sec"><div class="dap-lb">?뚯씪 ?대떦??/div>
<div class="ind-r"><div class="ind-u"><div class="ind-av" style="background:var(--accent)">源</div><span class="ind-nm">源?꾨?</span><span class="ind-dp">?쒖뒪?쒓?由ъ옄</span></div><div style="display:flex;align-items:center;gap:6px"><span class="ind-rs" style="background:var(--accent-dim);color:var(--accent)">?뚯씪 ?대떦??/span></div></div></div>
</div></div>
<div class="ft-d"><div class="ft-dl"><span class="ft-di">?뱯</span><div style="flex:1;min-width:0"><span class="ft-dn">寃쎈ℓ?낆같 媛?대뱶?쇱씤 v2.1</span><div class="ft-d-info">源?꾨? 쨌 ?붿??몄텛吏?쨌 2025.01.12</div></div></div><div class="ft-dr"><span class="emb emb-ok">??/span><span class="bd bd-l">??쓬</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('??젣?섏떆寃좎뒿?덇퉴?'))this.closest('.ft-d').style.display='none'">?뿊</button></div></div>
</div></div>

<!-- VAATZ 留ㅻ돱??-->
<div class="ft-f"><div class="ft-fh" onclick="tf(this)"><span class="ft-ar">??/span><span class="ft-ic">?뱛</span><span class="ft-nm">VAATZ 留ㅻ돱??/span><span class="ft-ct">3嫄?/span><span class="ft-fh-admin">?뵏 ?대떦: 源?꾨?</span></div>
<div class="ft-ds cl" style="max-height:0">
<div class="ft-d"><div class="ft-dl"><span class="ft-di">?뼢截?/span><div style="flex:1;min-width:0"><span class="ft-dn">VAATZ ?낆같紐⑤뱢 留ㅻ돱??/span><div class="ft-d-info">源?꾨? 쨌 ?붿??몄텛吏?쨌 2025.01.08</div></div></div><div class="ft-dr"><span class="emb emb-ok">??/span><span class="bd bd-l">??쓬</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('??젣?섏떆寃좎뒿?덇퉴?'))this.closest('.ft-d').style.display='none'">?뿊</button></div></div>
<div class="ft-d"><div class="ft-dl"><span class="ft-di">?뼢截?/span><div style="flex:1;min-width:0"><span class="ft-dn">VAATZ 諛쒖＜/寃??留ㅻ돱??/span><div class="ft-d-info">源?꾨? 쨌 ?붿??몄텛吏?쨌 2025.01.08</div></div></div><div class="ft-dr"><span class="emb emb-ok">??/span><span class="bd bd-l">??쓬</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('??젣?섏떆寃좎뒿?덇퉴?'))this.closest('.ft-d').style.display='none'">?뿊</button></div></div>
<div class="ft-d"><div class="ft-dl"><span class="ft-di">?뼢截?/span><div style="flex:1;min-width:0"><span class="ft-dn">VAATZ 留덉뒪???곗씠??愿由?/span><div class="ft-d-info">源?꾨? 쨌 ?붿??몄텛吏?쨌 2025.02.05</div></div></div><div class="ft-dr"><span class="emb emb-wip">??/span><span class="bd bd-l">??쓬</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('??젣?섏떆寃좎뒿?덇퉴?'))this.closest('.ft-d').style.display='none'">?뿊</button></div></div>
</div></div>

<!-- ?덉쭏 5?ㅽ? -->
<div class="ft-f"><div class="ft-fh" onclick="tf(this)"><span class="ft-ar">??/span><span class="ft-ic">?뱛</span><span class="ft-nm">?덉쭏 5?ㅽ?</span><span class="ft-ct">2嫄?/span><span class="ft-fh-admin">?뵏 ?대떦: ?뺥쁽??/span></div>
<div class="ft-ds cl" style="max-height:0">
<div class="ft-d" onclick="td('dap4a')"><div class="ft-dl"><span class="ft-di">?뱱</span><div style="flex:1;min-width:0"><span class="ft-dn">?묐젰???덉쭏 5?ㅽ? ?댁쁺湲곗?</span><div class="ft-d-info">?뺥쁽??쨌 援щℓ?덉쭏湲고쉷 쨌 2025.01.05</div></div></div><div class="ft-dr"><span class="emb emb-ok">??/span><span class="bd bd-md">以묎컙</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('??젣?섏떆寃좎뒿?덇퉴?'))this.closest('.ft-d').style.display='none'">?뿊</button></div></div>
<div class="dap" id="dap4a" style="display:none"><div class="dap-bd">
<div class="dap-sec"><div class="dap-lb"><span class="bd bd-md" style="font-size:9px;margin-right:4px">以묎컙</span> ?덉슜 ? <button class="add-t">竊?? 異붽?</button></div><div class="tc"><div class="tch">援щℓ?덉쭏湲고쉷? <span class="rx" onclick="this.parentElement.remove()">??/span></div><div class="tch">援щℓ?꾨왂? <span class="rx" onclick="this.parentElement.remove()">??/span></div></div></div>
<div class="dap-sec"><div class="dap-lb">媛쒖씤 ?덉쇅 ?묎렐 <button class="add-t">竊?媛쒖씤</button></div><div style="font-size:10px;color:var(--text-4);padding:4px">吏?뺣맂 媛쒖씤 ?놁쓬</div></div>
<div class="dap-sec"><div class="dap-lb">?뚯씪 ?대떦??/div>
<div class="ind-r"><div class="ind-u"><div class="ind-av" style="background:var(--v)">??/div><span class="ind-nm">?뺥쁽??/span><span class="ind-dp">援щℓ?덉쭏湲고쉷</span></div><div style="display:flex;align-items:center;gap:6px"><span class="ind-rs" style="background:var(--accent-dim);color:var(--accent)">?뚯씪 ?대떦??/span></div></div></div>
</div></div>
<div class="ft-d"><div class="ft-dl"><span class="ft-di">?뱱</span><div style="flex:1;min-width:0"><span class="ft-dn">5?ㅽ? ?됯? 泥댄겕由ъ뒪??/span><div class="ft-d-info">?뺥쁽??쨌 援щℓ?덉쭏湲고쉷 쨌 2025.01.05</div></div></div><div class="ft-dr"><span class="emb emb-ok">??/span><span class="bd bd-l">??쓬</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('??젣?섏떆寃좎뒿?덇퉴?'))this.closest('.ft-d').style.display='none'">?뿊</button></div></div>
</div></div>

<!-- ?⑹뼱?ъ쟾 쨌 ?묒떇 -->
<div class="ft-f"><div class="ft-fh" onclick="tf(this)"><span class="ft-ar">??/span><span class="ft-ic">?뱛</span><span class="ft-nm">?⑹뼱?ъ쟾 쨌 ?묒떇</span><span class="ft-ct">4嫄?/span><span class="ft-fh-admin">?뵏 ?대떦: 源?꾨?</span></div>
<div class="ft-ds cl" style="max-height:0">
<div class="ft-d"><div class="ft-dl"><span class="ft-di">?뱲</span><div style="flex:1;min-width:0"><span class="ft-dn">援щℓ?⑹뼱 ?쒖??뺤쓽吏?2025</span><div class="ft-d-info">源?꾨? 쨌 ?붿??몄텛吏?쨌 2025.02.03</div></div></div><div class="ft-dr"><span class="emb emb-wip">??/span><span class="bd bd-l">??쓬</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('??젣?섏떆寃좎뒿?덇퉴?'))this.closest('.ft-d').style.display='none'">?뿊</button></div></div>
<div class="ft-d"><div class="ft-dl"><span class="ft-di">?뱞</span><div style="flex:1;min-width:0"><span class="ft-dn">援щℓ?붿껌???묒떇</span><div class="ft-d-info">源?꾨? 쨌 ?붿??몄텛吏?쨌 2025.01.02</div></div></div><div class="ft-dr"><span class="emb emb-ok">??/span><span class="bd bd-l">??쓬</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('??젣?섏떆寃좎뒿?덇퉴?'))this.closest('.ft-d').style.display='none'">?뿊</button></div></div>
<div class="ft-d"><div class="ft-dl"><span class="ft-di">?뱞</span><div style="flex:1;min-width:0"><span class="ft-dn">?섏쓽怨꾩빟 ?ъ쑀???묒떇</span><div class="ft-d-info">源?꾨? 쨌 ?붿??몄텛吏?쨌 2025.01.02</div></div></div><div class="ft-dr"><span class="emb emb-ok">??/span><span class="bd bd-l">??쓬</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('??젣?섏떆寃좎뒿?덇퉴?'))this.closest('.ft-d').style.display='none'">?뿊</button></div></div>
<div class="ft-d"><div class="ft-dl"><span class="ft-di">?뱞</span><div style="flex:1;min-width:0"><span class="ft-dn">寃?섑솗?몄꽌 ?묒떇</span><div class="ft-d-info">源?꾨? 쨌 ?붿??몄텛吏?쨌 2025.01.02</div></div></div><div class="ft-dr"><span class="emb emb-ok">??/span><span class="bd bd-l">??쓬</span><button class="ft-d-del" onclick="event.stopPropagation();if(confirm('??젣?섏떆寃좎뒿?덇퉴?'))this.closest('.ft-d').style.display='none'">?뿊</button></div></div>
</div></div>
</div>
</div>

<div class="adm-b" id="p-adm" style="display:none">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
<div style="font-size:13px;font-weight:600">Admin ?대떦??愿由?<span style="color:var(--text-4);font-size:11px;font-weight:400">???쒖뒪?쒓?由ъ옄 ?꾩슜</span></div>
<button class="tb-b" style="font-size:11px">竊??대떦??異붽?</button>
</div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px">Admin ?대떦?먮뒗 諛곗젙???/?대뜑??<b style="color:var(--text-2)">?붿껌愿由?/b>(?뱀씤/蹂댁셿 ?붿껌)? <b style="color:var(--text-2)">臾몄꽌愿由?/b>(?異붽?/媛쒖씤異붽?)瑜??섑뻾?⑸땲?? ?쒖뒪?쒓?由ъ옄媛 ?대떦?먮? 吏?빧룻빐?쒗빀?덈떎.</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px">
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:var(--r-sm);padding:12px">
<div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-4);margin-bottom:4px">珥??대떦??/div>
<div style="font-size:22px;font-weight:700;font-family:'Outfit',sans-serif;color:var(--accent)">3<span style="font-size:11px;font-weight:400;color:var(--text-4);margin-left:4px">紐??쒖꽦</span></div>
</div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:var(--r-sm);padding:12px">
<div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-4);margin-bottom:4px">愿由??곸뿭</div>
<div style="font-size:22px;font-weight:700;font-family:'Outfit',sans-serif;color:var(--text-1)">8<span style="font-size:11px;font-weight:400;color:var(--text-4);margin-left:4px">媛?? 而ㅻ쾭</span></div>
</div>
</div>

<!-- ?대떦??紐⑸줉 -->
<div style="margin-bottom:8px">
<div style="background:var(--bg-2);border:1px solid var(--accent-bd);border-radius:var(--r-sm);padding:14px;margin-bottom:6px">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
<div style="width:32px;height:32px;border-radius:8px;background:var(--accent-g);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:white">源</div>
<div style="flex:1"><div style="font-size:13px;font-weight:600;color:var(--text-1)">源?꾨? <span class="bd bd-a" style="font-size:8px">?쒖뒪?쒓?由ъ옄</span></div><div style="font-size:10px;color:var(--text-3)">梨낆엫留ㅻ땲? 쨌 援щℓ?붿??몄텛吏꾪?</div></div>
<div class="tg on" onclick="this.classList.toggle('on')"></div>
</div>
<div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-4);margin-bottom:6px">?대떦 ?곸뿭 (?붿껌愿由?+ 臾몄꽌愿由?</div>
<div style="display:flex;flex-wrap:wrap;gap:4px">
<div class="tch tch-lock">援щℓ?붿??몄텛吏꾪? <span class="lock-ic">?뵏</span></div>
<div class="tch">援щℓ?꾨왂? <span class="rx" onclick="this.parentElement.remove()">??/span></div>
<div class="tch">諛섎룄泥닿뎄留ㅽ? <span class="rx" onclick="this.parentElement.remove()">??/span></div>
<div class="tch">PT?쒖뼱遺?덇뎄留ㅽ? <span class="rx" onclick="this.parentElement.remove()">??/span></div>
<div class="tch">援щℓ??웾媛쒕컻? <span class="rx" onclick="this.parentElement.remove()">??/span></div>
<div class="tch" style="border-style:dashed;border-color:var(--accent-bd);color:var(--accent)">?뱚 援щℓ?낅Т洹쒖젙</div>
<div class="tch" style="border-style:dashed;border-color:var(--accent-bd);color:var(--accent)">?뱚 ?낆같愿由?/div>
<div class="tch" style="border-style:dashed;border-color:var(--accent-bd);color:var(--accent)">?뱚 VAATZ 留ㅻ돱??/div>
<div class="tch" style="border-style:dashed;border-color:var(--accent-bd);color:var(--accent)">?뱚 ?⑹뼱?ъ쟾쨌?묒떇</div>
<button class="add-t" style="padding:3px 8px;font-size:10px">竊??곸뿭 異붽?</button>
</div>
<div style="font-size:10px;color:var(--text-4);margin-top:8px">沅뚰븳: ?붿껌 ?뱀씤/蹂댁셿 ?붿껌 쨌 臾몄꽌 ?/媛쒖씤 ?묎렐 異붽? 쨌 ?뚯씪 ?대떦??吏??쨌 <span style="color:var(--r)">?대뜑 ?대룞/??젣 遺덇?</span></div>
</div>

<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:var(--r-sm);padding:14px;margin-bottom:6px">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
<div style="width:32px;height:32px;border-radius:8px;background:var(--v);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:white">??/div>
<div style="flex:1"><div style="font-size:13px;font-weight:600;color:var(--text-1)">?뺥쁽??<span class="bd bd-m" style="font-size:8px">Admin ?대떦??/span></div><div style="font-size:10px;color:var(--text-3)">梨낆엫留ㅻ땲? 쨌 援щℓ?덉쭏湲고쉷?</div></div>
<div class="tg on" onclick="this.classList.toggle('on')"></div>
</div>
<div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-4);margin-bottom:6px">?대떦 ?곸뿭</div>
<div style="display:flex;flex-wrap:wrap;gap:4px">
<div class="tch tch-lock">援щℓ?덉쭏湲고쉷? <span class="lock-ic">?뵏</span></div>
<div class="tch" style="border-style:dashed;border-color:var(--accent-bd);color:var(--accent)">?뱚 ?덉쭏 5?ㅽ?</div>
<button class="add-t" style="padding:3px 8px;font-size:10px">竊??곸뿭 異붽?</button>
</div>
<div style="font-size:10px;color:var(--text-4);margin-top:8px">沅뚰븳: ?덉쭏 5?ㅽ? 臾몄꽌 ?묎렐 愿由?쨌 援щℓ?덉쭏湲고쉷 ?붿껌 ?뱀씤/蹂댁셿 ?붿껌</div>
</div>

<div style="background:var(--bg-2);border:1px solid var(--border-1);border-radius:var(--r-sm);padding:14px;margin-bottom:6px">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
<div style="width:32px;height:32px;border-radius:8px;background:var(--t);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:white">??/div>
<div style="flex:1"><div style="font-size:13px;font-weight:600;color:var(--text-1)">?댁???<span class="bd bd-m" style="font-size:8px">Admin ?대떦??/span></div><div style="font-size:10px;color:var(--text-3)">梨낆엫留ㅻ땲? 쨌 援щℓ?꾨왂?</div></div>
<div class="tg on" onclick="this.classList.toggle('on')"></div>
</div>
<div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-4);margin-bottom:6px">?대떦 ?곸뿭</div>
<div style="display:flex;flex-wrap:wrap;gap:4px">
<div class="tch tch-lock">援щℓ?꾨왂? <span class="lock-ic">?뵏</span></div>
<div class="tch">?ㅼ떆遺?덇뎄留?? <span class="rx" onclick="this.parentElement.remove()">??/span></div>
<div class="tch">?섏옣?쒖뒪?쒕??덇컻諛쒗? <span class="rx" onclick="this.parentElement.remove()">??/span></div>
<button class="add-t" style="padding:3px 8px;font-size:10px">竊??곸뿭 異붽?</button>
</div>
<div style="font-size:10px;color:var(--text-4);margin-top:8px">沅뚰븳: ?대떦 ? ?붿껌 ?뱀씤/蹂댁셿 ?붿껌 쨌 臾몄꽌 ?/媛쒖씤 ?묎렐 愿由?/div>
</div>
</div>

<div style="padding:10px 12px;background:var(--bg-2);border:1px solid var(--border-1);border-radius:var(--r-sm);font-size:10px;line-height:1.7">
<div style="font-weight:600;color:var(--text-2);margin-bottom:4px">??沅뚰븳 ?뺤콉 ?붿빟</div>
<div style="color:var(--text-3)">
??<b style="color:var(--accent)">?쒖뒪?쒓?由ъ옄</b>: 紐⑤뱺 沅뚰븳 (?대떦??吏???댁젣, ?대뜑 ?앹꽦/?대룞/??젣, ?꾩껜 蹂댁븞 愿由?<br>
??<b style="color:var(--a)">Admin ?대떦??/b>: 諛곗젙??????붿껌 ?뱀씤/蹂댁셿 ?붿껌 + 諛곗젙???대뜑???異붽?/媛쒖씤異붽?/?뚯씪 ?대떦??吏??br>
???뵏 <b style="color:var(--text-2)">蹂몄씤 ?뚯냽 ? ?먮룞 怨좎젙</b>: 媛??대떦?먯쓽 ?뚯냽 ?? ?먮룞 諛곗젙?섎ŉ ?댁젣 遺덇?<br>
??<span style="color:var(--r)">?쒗븳</span>: Admin ?대떦?먮뒗 ?대뜑 ?앹꽦쨌?대룞쨌??젣 遺덇?, ?ㅻⅨ ?대떦???곸뿭 ?묎렐 遺덇?
</div>
</div>
</div>

<div class="adm-b" id="p-int" style="display:none">
<div style="font-size:13px;font-weight:600;margin-bottom:3px;font-family:'Noto Sans KR',sans-serif">?щ궡 ?쒖뒪???곗씠???곌퀎</div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px;font-family:'Noto Sans KR',sans-serif">API瑜??듯빐 ?щ궡 ?쒖뒪???곗씠?곕? ?먮룞?쇰줈 媛?몄? AI ?듬????쒖슜?⑸땲??</div>
<div class="int-sum">
<div class="int-sum-i"><div class="int-sum-d dg"></div><span class="int-sum-n">3</span> ?곌껐??/div>
<div class="int-sum-i"><div class="int-sum-d dy"></div><span class="int-sum-n">1</span> ?숆린??以?/div>
<div class="int-sum-i"><div class="int-sum-d dd"></div><span class="int-sum-n">1</span> ?곌껐 ?湲?/div>
<div style="margin-left:auto"><button class="tb-b" style="font-size:11px">竊??쒖뒪???곌껐 異붽?</button></div>
</div>
<div class="int-grid">
<div class="int-card c-on"><div class="int-top"><div class="int-left"><div class="int-ic ic1">?뱰</div><div><div class="int-nm" style="font-family:'Noto Sans KR',sans-serif">Autopedia</div><div class="int-ds" style="font-family:'Noto Sans KR',sans-serif">?낅Т?⑹뼱 ?ъ쟾 ?쒖뒪??/div></div></div><div class="int-st st-on"><div class="st-dot"></div>?곌껐??/div></div><div class="int-dets"><div><div class="int-det-l">?곕룞 ?곗씠??/div><div class="int-det-v">?⑹뼱 4,832嫄?/div></div><div><div class="int-det-l">留덉?留??숆린??/div><div class="int-det-v">10遺???/div></div><div><div class="int-det-l">?숆린??二쇨린</div><div class="int-det-v">1?쒓컙留덈떎</div></div><div><div class="int-det-l">API ?묐떟</div><div class="int-det-v">142ms ??/div></div></div><div class="int-ft"><button class="int-btn">?봽 ?섎룞 ?숆린??/button><span class="int-log">理쒓렐 7???ㅻ쪟 0嫄?/span></div></div>
<div class="int-card c-on"><div class="int-top"><div class="int-left"><div class="int-ic ic2">?뱥</div><div><div class="int-nm" style="font-family:'Noto Sans KR',sans-serif">?щ궡 ?낅Т?쒖?</div><div class="int-ds" style="font-family:'Noto Sans KR',sans-serif">?낅Т?쒖? 愿由??쒖뒪??(BPS)</div></div></div><div class="int-st st-on"><div class="st-dot"></div>?곌껐??/div></div><div class="int-dets"><div><div class="int-det-l">?곕룞 ?곗씠??/div><div class="int-det-v">?쒖?臾몄꽌 312嫄?/div></div><div><div class="int-det-l">留덉?留??숆린??/div><div class="int-det-v">32遺???/div></div><div><div class="int-det-l">?숆린??二쇨린</div><div class="int-det-v">6?쒓컙留덈떎</div></div><div><div class="int-det-l">API ?묐떟</div><div class="int-det-v">238ms ??/div></div></div><div class="int-ft"><button class="int-btn">?봽 ?섎룞 ?숆린??/button><span class="int-log">理쒓렐 7???ㅻ쪟 0嫄?/span></div></div>
<div class="int-card c-sync"><div class="int-top"><div class="int-left"><div class="int-ic ic3">?럳</div><div><div class="int-nm" style="font-family:'Noto Sans KR',sans-serif">Learning Lounge</div><div class="int-ds" style="font-family:'Noto Sans KR',sans-serif">?щ궡 援먯쑁 ?쒖뒪??/div></div></div><div class="int-st st-sy"><div class="st-dot"></div>?숆린??以?/div></div><div class="int-dets"><div><div class="int-det-l">?곕룞 ?곗씠??/div><div class="int-det-v">援먯쑁怨쇱젙 186嫄?/div></div><div><div class="int-det-l">吏꾪뻾瑜?/div><div class="int-det-v">68% 吏꾪뻾 以?/div></div><div><div class="int-det-l">?숆린??二쇨린</div><div class="int-det-v">留ㅼ씪 02:00</div></div><div><div class="int-det-l">API ?묐떟</div><div class="int-det-v">420ms</div></div></div><div class="int-ft"><button class="int-btn dis">???숆린??吏꾪뻾 以?..</button><span class="int-log">理쒓렐 7???ㅻ쪟 2嫄?/span></div></div>
<div class="int-card c-on"><div class="int-top"><div class="int-left"><div class="int-ic ic4">?룫</div><div><div class="int-nm" style="font-family:'Noto Sans KR',sans-serif">?щ궡 蹂듭?</div><div class="int-ds" style="font-family:'Noto Sans KR',sans-serif">蹂듬━?꾩깮 ?ы꽭</div></div></div><div class="int-st st-on"><div class="st-dot"></div>?곌껐??/div></div><div class="int-dets"><div><div class="int-det-l">?곕룞 ?곗씠??/div><div class="int-det-v">蹂듭??쒕룄 94嫄?/div></div><div><div class="int-det-l">留덉?留??숆린??/div><div class="int-det-v">1?쒓컙 ??/div></div><div><div class="int-det-l">?숆린??二쇨린</div><div class="int-det-v">留ㅼ씪 06:00</div></div><div><div class="int-det-l">API ?묐떟</div><div class="int-det-v">189ms ??/div></div></div><div class="int-ft"><button class="int-btn">?봽 ?섎룞 ?숆린??/button><span class="int-log">理쒓렐 7???ㅻ쪟 0嫄?/span></div></div>
<div class="int-card c-wait"><div class="int-top"><div class="int-left"><div class="int-ic ic5">?뼢截?/div><div><div class="int-nm" style="font-family:'Noto Sans KR',sans-serif">VAATZ 留덉뒪???곗씠??/div><div class="int-ds" style="font-family:'Noto Sans KR',sans-serif">援щℓ ?쒖뒪???낆껜쨌?덈ぉ 留덉뒪??/div></div></div><div class="int-st st-wt"><div class="st-dot"></div>?곌껐 ?湲?/div></div><div class="int-dets"><div><div class="int-det-l">?곕룞 ?덉젙</div><div class="int-det-v">?낆껜쨌?덈ぉ 留덉뒪??/div></div><div><div class="int-det-l">?덉젙??/div><div class="int-det-v">2025.03.01</div></div><div><div class="int-det-l">?대떦</div><div class="int-det-v">援щℓ?붿??몄텛吏꾪?</div></div><div><div class="int-det-l">吏꾪뻾 ?곹깭</div><div class="int-det-v">API 媛쒕컻 以?/div></div></div><div class="int-ft"><button class="int-btn">?숋툘 ?곌껐 ?ㅼ젙</button><span class="int-log">API ?ㅽ럺 ?묒쓽 ?꾨즺</span></div></div>
<div class="int-card c-on"><div class="int-top"><div class="int-left"><div class="int-ic ic6">?뱾</div><div><div class="int-nm" style="font-family:'Noto Sans KR',sans-serif">VAATZ ?섎룞 ?곗씠??/div><div class="int-ds" style="font-family:'Noto Sans KR',sans-serif">?쒖뒪??Admin 吏곸젒 ?깅줉 쨌 留ㅻ돱???묒떇/?섎룞 ?곗씠??/div></div></div><div class="int-st st-on"><div class="st-dot"></div>?쒖꽦</div></div><div class="int-dets"><div><div class="int-det-l">?깅줉 臾몄꽌</div><div class="int-det-v">14嫄?/div></div><div><div class="int-det-l">?꾨쿋???꾨즺</div><div class="int-det-v">11嫄?(79%)</div></div><div><div class="int-det-l">留덉?留??낅줈??/div><div class="int-det-v">?ㅻ뒛 09:30</div></div><div><div class="int-det-l">珥??⑸웾</div><div class="int-det-v">48.2 MB</div></div></div>
<div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border-1)">
<div style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-4);margin-bottom:6px">?ъ슜?먮퀎 ?낅줈???꾪솴</div>
<div style="display:flex;flex-direction:column;gap:3px">
<div style="display:flex;align-items:center;gap:6px;font-size:11px"><div style="width:56px;color:var(--text-2);font-weight:500">源?꾨?</div><div style="flex:1;height:4px;background:var(--bg-4);border-radius:2px;overflow:hidden"><div style="width:43%;height:100%;background:var(--accent);border-radius:2px"></div></div><span style="font-size:10px;color:var(--text-3);font-family:'JetBrains Mono',monospace;width:24px;text-align:right">6嫄?/span></div>
<div style="display:flex;align-items:center;gap:6px;font-size:11px"><div style="width:56px;color:var(--text-2);font-weight:500">?댁???/div><div style="flex:1;height:4px;background:var(--bg-4);border-radius:2px;overflow:hidden"><div style="width:21%;height:100%;background:var(--g);border-radius:2px"></div></div><span style="font-size:10px;color:var(--text-3);font-family:'JetBrains Mono',monospace;width:24px;text-align:right">3嫄?/span></div>
<div style="display:flex;align-items:center;gap:6px;font-size:11px"><div style="width:56px;color:var(--text-2);font-weight:500">?뺥쁽??/div><div style="flex:1;height:4px;background:var(--bg-4);border-radius:2px;overflow:hidden"><div style="width:14%;height:100%;background:var(--a);border-radius:2px"></div></div><span style="font-size:10px;color:var(--text-3);font-family:'JetBrains Mono',monospace;width:24px;text-align:right">2嫄?/span></div>
<div style="display:flex;align-items:center;gap:6px;font-size:11px"><div style="width:56px;color:var(--text-2);font-weight:500">?쒕룄??/div><div style="flex:1;height:4px;background:var(--bg-4);border-radius:2px;overflow:hidden"><div style="width:7%;height:100%;background:var(--v);border-radius:2px"></div></div><span style="font-size:10px;color:var(--text-3);font-family:'JetBrains Mono',monospace;width:24px;text-align:right">1嫄?/span></div>
<div style="display:flex;align-items:center;gap:6px;font-size:11px"><div style="width:56px;color:var(--text-2);font-weight:500">理쒖쑀吏?/div><div style="flex:1;height:4px;background:var(--bg-4);border-radius:2px;overflow:hidden"><div style="width:7%;height:100%;background:var(--t);border-radius:2px"></div></div><span style="font-size:10px;color:var(--text-3);font-family:'JetBrains Mono',monospace;width:24px;text-align:right">1嫄?/span></div>
<div style="display:flex;align-items:center;gap:6px;font-size:11px"><div style="width:56px;color:var(--text-2);font-weight:500">諛뺤꽦誘?/div><div style="flex:1;height:4px;background:var(--bg-4);border-radius:2px;overflow:hidden"><div style="width:7%;height:100%;background:var(--text-3);border-radius:2px"></div></div><span style="font-size:10px;color:var(--text-3);font-family:'JetBrains Mono',monospace;width:24px;text-align:right">1嫄?/span></div>
</div>
</div>
<div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border-1)">
<div style="font-size:10px;font-weight:600;color:var(--text-2);margin-bottom:6px">?뱾 VAATZ ?섎룞 ?곗씠??吏곸젒 ?낅줈??/div>
<div style="border:1px dashed var(--border-3);border-radius:8px;padding:14px;text-align:center;background:var(--bg-3);cursor:pointer;transition:all .2s" onclick="toast('?뚯씪 ?낅줈???쒕??덉씠?? ?좏깮???뚯씪???꾨쿋???湲곗뿴??異붽??⑸땲??','?뱾',2500)" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border-3)'">
<div style="font-size:20px;margin-bottom:4px">?곻툘</div>
<div style="font-size:11px;color:var(--text-2)">?대┃?섏뿬 ?뚯씪 ?낅줈??/div>
<div style="font-size:9px;color:var(--text-4);margin-top:2px">PDF, DOCX, XLSX, CSV 쨌 理쒕? 50MB 쨌 ?낅줈?????먮룞 ?꾨쿋??/div>
</div>
</div>
<div class="int-ft"><button class="int-btn">?뱚 臾몄꽌 愿由щ줈 ?대룞</button><span class="int-log">?꾨쿋???湲?3嫄?/span></div></div>
</div>
</div>

<div class="adm-b" id="p-mon" style="display:none">

<!-- v20: Enhanced Hero Dashboard -->
<div class="adm-hero">
  <div class="hero-c h-1">
    <div class="hero-lb">RAG ?듬? ?좊ː??(?대쾲 ???됯퇏)</div>
    <div class="hero-v">94.2<span class="hero-v-u">%</span></div>
    <div class="hero-trend up">??2.3% ??洹쇨굅 留ㅽ븨瑜?媛쒖꽑</div>
    <div class="hero-spark"><div class="hero-spark-b" style="height:48%"></div><div class="hero-spark-b" style="height:52%"></div><div class="hero-spark-b" style="height:55%"></div><div class="hero-spark-b" style="height:60%"></div><div class="hero-spark-b" style="height:66%"></div><div class="hero-spark-b" style="height:74%"></div><div class="hero-spark-b" style="height:80%"></div><div class="hero-spark-b" style="height:88%"></div><div class="hero-spark-b" style="height:94%"></div></div>
  </div>
  <div class="hero-c h-2">
    <div class="hero-lb">?대쾲 ??珥?吏덉쓽</div>
    <div class="hero-v">2,847</div>
    <div class="hero-trend up">??12.4%</div>
    <div class="hero-spark"><div class="hero-spark-b" style="height:30%"></div><div class="hero-spark-b" style="height:42%"></div><div class="hero-spark-b" style="height:38%"></div><div class="hero-spark-b" style="height:55%"></div><div class="hero-spark-b" style="height:62%"></div><div class="hero-spark-b" style="height:58%"></div><div class="hero-spark-b" style="height:75%"></div><div class="hero-spark-b" style="height:82%"></div><div class="hero-spark-b" style="height:96%"></div></div>
  </div>
  <div class="hero-c h-3">
    <div class="hero-lb">?됯퇏 ?묐떟 ?쒓컙</div>
    <div class="hero-v">1.8<span class="hero-v-u">珥?/span></div>
    <div class="hero-trend nt">??蹂???놁쓬</div>
    <div class="hero-spark"><div class="hero-spark-b" style="height:60%"></div><div class="hero-spark-b" style="height:55%"></div><div class="hero-spark-b" style="height:62%"></div><div class="hero-spark-b" style="height:58%"></div><div class="hero-spark-b" style="height:50%"></div><div class="hero-spark-b" style="height:54%"></div><div class="hero-spark-b" style="height:48%"></div><div class="hero-spark-b" style="height:52%"></div><div class="hero-spark-b" style="height:50%"></div></div>
  </div>
  <div class="hero-c h-4">
    <div class="hero-lb">?쒖꽦 ?ъ슜??(?붽컙)</div>
    <div class="hero-v">48<span class="hero-v-u">紐?/span></div>
    <div class="hero-trend up">??8紐?onboarding</div>
    <div class="hero-spark"><div class="hero-spark-b" style="height:35%"></div><div class="hero-spark-b" style="height:42%"></div><div class="hero-spark-b" style="height:48%"></div><div class="hero-spark-b" style="height:55%"></div><div class="hero-spark-b" style="height:65%"></div><div class="hero-spark-b" style="height:72%"></div><div class="hero-spark-b" style="height:80%"></div><div class="hero-spark-b" style="height:88%"></div><div class="hero-spark-b" style="height:96%"></div></div>
  </div>
</div>

<div class="mon-section">
<div class="mon-title"><span>?렞</span> ?듬? ?덉쭏 ?먮룞 ?먭?</div>
<div class="qg">
<div class="qc">
<div class="qc-top"><span class="qc-label">洹쇨굅 ?뺥솗??/span><span class="qc-val" style="color:var(--g)">94.2%</span></div>
<div class="pgb"><div class="pgb-f pgb-g" style="width:94%"></div></div>
<div class="qc-desc">AI ?듬???李몄“ 臾몄꽌? ?쇱튂?섎뒗 鍮꾩쑉<br>??95% ?댁긽?대㈃ ?덉젙 ?섏?</div>
</div>
<div class="qc">
<div class="qc-top"><span class="qc-label">?ㅻ떟 ?섏떖 嫄댁닔</span><span class="qc-val" style="color:var(--a)">14嫄?/span></div>
<div class="pgb"><div class="pgb-f pgb-a" style="width:12%"></div></div>
<div class="qc-desc">洹쇨굅 臾몄꽌? ?댁슜???ㅻⅨ ?듬? ?먮룞 媛먯?<br>??愿由ъ옄 寃?????뺤젙/?댁젣</div>
</div>
<div class="qc">
<div class="qc-top"><span class="qc-label">異쒖쿂 留ㅽ븨 ?깃났</span><span class="qc-val" style="color:var(--g)">97.8%</span></div>
<div class="pgb"><div class="pgb-f pgb-g" style="width:97.8%"></div></div>
<div class="qc-desc">?듬? ?댁슜???뺥솗??異쒖쿂瑜??곌껐??鍮꾩쑉<br>??異쒖쿂 ?녿뒗 ?듬? ?먮룞 寃쎄퀬</div>
</div>
</div>
</div>

<div class="mon-section">
<div class="mon-title"><span>?뱤</span> ?ъ슜?먮뱾??留롮씠 臾삳뒗 二쇱젣 TOP 8</div>
<div class="topic-bar">
<div class="topic-row"><span class="topic-label">?낆같 ?덉감</span><div class="topic-fill-bg"><div class="topic-fill" style="width:100%"></div></div><span class="topic-val">312</span></div>
<div class="topic-row"><span class="topic-label">VAATZ ?ъ슜踰?/span><div class="topic-fill-bg"><div class="topic-fill" style="width:92%"></div></div><span class="topic-val">287</span></div>
<div class="topic-row"><span class="topic-label">5?ㅽ? ?됯?</span><div class="topic-fill-bg"><div class="topic-fill" style="width:63%"></div></div><span class="topic-val">198</span></div>
<div class="topic-row"><span class="topic-label">?섏쓽怨꾩빟</span><div class="topic-fill-bg"><div class="topic-fill" style="width:50%"></div></div><span class="topic-val">156</span></div>
<div class="topic-row"><span class="topic-label">?⑹뼱 ?뺤쓽</span><div class="topic-fill-bg"><div class="topic-fill" style="width:43%"></div></div><span class="topic-val">134</span></div>
<div class="topic-row"><span class="topic-label">寃?샕룸궔??/span><div class="topic-fill-bg"><div class="topic-fill" style="width:36%"></div></div><span class="topic-val">112</span></div>
<div class="topic-row"><span class="topic-label">怨꾩빟???묒꽦</span><div class="topic-fill-bg"><div class="topic-fill" style="width:31%"></div></div><span class="topic-val">98</span></div>
<div class="topic-row"><span class="topic-label">?섏쑉쨌?댁쇅援щℓ</span><div class="topic-fill-bg"><div class="topic-fill" style="width:24%"></div></div><span class="topic-val">76</span></div>
</div>
</div>

<div class="mon-section">
<div class="mon-title"><span>?좑툘</span> 媛쒖꽑???꾩슂??遺遺?/div>
<div class="action-list">
<div class="action-i">
<div class="action-icon urgent">?뵶</div>
<div class="action-body">
<div class="action-title">"?댁쇅踰뺤씤 援щℓ ?뱀씤 泥닿퀎" 愿??吏덉쓽 18嫄????듬? 遺덇?</div>
<div class="action-desc">?깅줉??臾몄꽌???대떦 ?댁슜???놁뼱 ?듬??섏? 紐삵뻽?듬땲?? ?댁쇅踰뺤씤 援щℓ洹쒖젙 臾몄꽌瑜?異붽??섎㈃ ?닿껐?⑸땲??</div>
<span class="action-tag tag-r">臾몄꽌 異붽? ?꾩슂</span>
</div>
</div>
<div class="action-i">
<div class="action-icon improve">?윞</div>
<div class="action-body">
<div class="action-title">"VAATZ 留덇컧泥섎━" 愿???듬? 留뚯”??62%濡???쓬</div>
<div class="action-desc">?꾩옱 ?깅줉??留ㅻ돱?쇱씠 援щ쾭??2024.09)?대씪 理쒖떊 ?붾㈃怨??щ씪 遺덈쭔議깆씠 諛쒖깮?섍퀬 ?덉뒿?덈떎.</div>
<span class="action-tag tag-a">臾몄꽌 ?낅뜲?댄듃 ?꾩슂</span>
</div>
</div>
<div class="action-i">
<div class="action-icon improve">?윞</div>
<div class="action-body">
<div class="action-title">"寃쎈ℓ?낆같 理쒖냼 湲덉븸" ?듬??먯꽌 ?ㅻ떟 ?섏떖 1嫄?/div>
<div class="action-desc">AI媛 "5泥쒕쭔???대씪 ?듬??덉쑝?? 洹쒖젙 ?먮Ц? "1?듭썝"?낅땲?? ?먮룞 媛먯??섏뼱 ?섏젙 ?꾨즺.</div>
<span class="action-tag tag-a">?먮룞 蹂댁젙??/span>
</div>
</div>
<div class="action-i">
<div class="action-icon info0">?뵷</div>
<div class="action-body">
<div class="action-title">"?꾨젰?곸엯李? 吏덉쓽 ?대쾲 二?湲됱쬆 (+180%)</div>
<div class="action-desc">?좉퇋 媛?대뱶?쇱씤 諛고룷 ?댄썑 愿?ъ씠 ?믪븘吏怨??덉뒿?덈떎. 愿??臾몄꽌媛 異⑸텇???깅줉?섏뼱 ?뺤긽 ?듬? 以?</div>
<span class="action-tag tag-b">?뺤긽 ??紐⑤땲?곕쭅 以?/span>
</div>
</div>
</div>
</div>

<div class="mon-section">
<div class="mon-title"><span>?뱥</span> 理쒓렐 吏덉쓽 濡쒓렇</div>
<table class="at2"><thead><tr><th>?쒓컙</th><th>?ъ슜??/th><th>?뚯냽?</th><th>吏덉쓽</th><th>李몄“</th><th>?덉쭏</th><th>?쇰뱶諛?/th></tr></thead><tbody>
<tr><td>15:42</td><td>源?꾨?</td><td>?붿??몄텛吏?/td><td style="color:var(--text-1)">?꾨젰?곸엯李?vs 寃쎈ℓ?낆같</td><td>5嫄?/td><td><div class="qs"><div class="qs-bar"><div class="qs-fill" style="width:92%;background:var(--g)"></div></div>92</div></td><td>?몟</td></tr>
<tr><td>15:18</td><td>?댁???/td><td>援щℓ?꾨왂</td><td style="color:var(--text-1)">VAATZ 諛쒖＜ ?꾩닔 ??ぉ</td><td>2嫄?/td><td><div class="qs"><div class="qs-bar"><div class="qs-fill" style="width:88%;background:var(--g)"></div></div>88</div></td><td>?몟</td></tr>
<tr><td>14:55</td><td>?뺥쁽??/td><td>援щℓ?덉쭏湲고쉷</td><td style="color:var(--text-1)">5?ㅽ? 4?? ?밴툒 議곌굔</td><td>3嫄?/td><td><div class="qs"><div class="qs-bar"><div class="qs-fill" style="width:95%;background:var(--g)"></div></div>95</div></td><td>?몟</td></tr>
<tr><td>14:30</td><td>?쒕룄??/td><td>PT?쒖뼱遺??/td><td style="color:var(--text-1)">臾쇰쪟鍮?寃쎈ℓ?낆같 湲곗?</td><td>4嫄?/td><td><div class="qs"><div class="qs-bar"><div class="qs-fill" style="width:74%;background:var(--a)"></div></div>74</div></td><td>??/td></tr>
<tr><td>14:02</td><td>理쒖쑀吏?/td><td>諛섎룄泥닿뎄留?/td><td style="color:var(--text-1)">諛섎룄泥?湲닿툒援щℓ ?덉감</td><td>3嫄?/td><td><div class="qs"><div class="qs-bar"><div class="qs-fill" style="width:85%;background:var(--g)"></div></div>85</div></td><td>?몟</td></tr>
</tbody></table>
</div>
</div>

<div class="adm-b" id="p-verify" style="display:none">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div style="font-size:13px;font-weight:600">?쭬 而ㅻ??덊떚 ?듬? ??AI ?숈뒿 寃利?/div><span style="font-size:11px;color:var(--text-3)">寃利??湲?<b style="color:var(--a)">3嫄?/b></span></div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px;line-height:1.6">梨꾪깮 + 異붿쿇 10媛??댁긽??而ㅻ??덊떚 ?듬????먮룞?쇰줈 ?щ씪?듬땲?? ?뱀씤 ??AI ?숈뒿 DB??諛섏쁺?섎ŉ ?묒꽦?먯뿉寃?100pt 蹂대꼫?ㅺ? 吏湲됰맗?덈떎.</div>
<div class="verify-card"><div class="verify-top"><div class="verify-q">Q. ?꾨젰?곸엯李곗뿉??1?뚯감 ?좎같 ??泥섎━ ?덉감</div><div class="verify-acts"><button class="abtn ok" onclick="this.closest('.verify-card').style.opacity='.4';toast('AI ?숈뒿 DB??諛섏쁺?섏뿀?듬땲??','?쭬',2500)">???뱀씤</button><button class="abtn no">蹂댁셿 ?붿껌</button></div></div><div class="verify-a">援щℓ?낅Т洹쒖젙 ??3議?4??뿉 ?곕Ⅴ硫?1?뚯감 ?좎같 ??李몄뿬 ?낆껜 ?뺣? ?먮뒗 ?섏쓽怨꾩빟 ?꾪솚??媛?ν빀?덈떎. ?ㅻТ?곸쑝濡쒕뒗 援щℓ?꾩썝???ъ쟾 ?뱀씤??諛쏄퀬 2?뚯감瑜?吏꾪뻾?섎릺, ?낆껜 ?섍? 遺議깊븷 寃쎌슦 ?섏쓽怨꾩빟 ?덉감濡??꾪솚?⑸땲??</div><div class="verify-meta"><span>?묒꽦?? ?꾨줈?먯뼱留덉뒪??(Lv.4)</span><span>쨌</span><span>異붿쿇 47</span><span>쨌</span><span>梨꾪깮??/span><span>쨌</span><span style="color:var(--accent)">?뺥솗?? ?믪쓬</span></div></div>
<div class="verify-card"><div class="verify-top"><div class="verify-q">Q. 5?ㅽ? 4???깃툒 ?밴툒 ??IATF 16949 ?꾩닔 ?щ?</div><div class="verify-acts"><button class="abtn ok" onclick="this.closest('.verify-card').style.opacity='.4';toast('AI ?숈뒿 DB??諛섏쁺?섏뿀?듬땲??','?쭬',2500)">???뱀씤</button><button class="abtn no">蹂댁셿 ?붿껌</button></div></div><div class="verify-a">25??1?붾????좉퇋 ?됯? 湲곗????곸슜?섏뼱 ?덉쭏 寃쎌쁺 ?쒖뒪???몄쬆(IATF 16949)??5?ㅽ? ?밴툒 ?꾩닔 ?붽굔?쇰줈 異붽??섏뿀?듬땲?? 湲곗〈 4?ㅽ? ?낆껜??26??6?붽퉴吏 ?좎삁湲곌컙???곸슜?⑸땲??</div><div class="verify-meta"><span>?묒꽦?? ?덉쭏吏?댁씠 (Lv.3)</span><span>쨌</span><span>異붿쿇 23</span><span>쨌</span><span>梨꾪깮??/span><span>쨌</span><span style="color:var(--a)">?뺥솗?? 寃???꾩슂</span></div></div>
<div class="verify-card"><div class="verify-top"><div class="verify-q">Q. VAATZ?먯꽌 ?댁쇅 諛쒖＜ ???섏쑉 ?먮룞 ?곸슜 ?ㅼ젙踰?/div><div class="verify-acts"><button class="abtn ok" onclick="this.closest('.verify-card').style.opacity='.4';toast('AI ?숈뒿 DB??諛섏쁺?섏뿀?듬땲??','?쭬',2500)">???뱀씤</button><button class="abtn no">蹂댁셿 ?붿껌</button></div></div><div class="verify-a">VAATZ 湲濡쒕쾶 援щℓ 紐⑤뱢 ???섍꼍?ㅼ젙 ???섏쑉愿由ъ뿉???먮룞 媛깆떊??ON?쇰줈 ?ㅼ젙?⑸땲?? 湲곗? ?쒖젏? 留ㅼ씪 09:00 ?쒓뎅???怨좎떆 留ㅻℓ湲곗??⑥씠硫? ?뱀젙 ?듯솕???섎룞 ?ㅼ젙??媛?ν빀?덈떎.</div><div class="verify-meta"><span>?묒꽦?? VAATZ?ъ씤 (Lv.2)</span><span>쨌</span><span>異붿쿇 15</span><span>쨌</span><span>梨꾪깮??/span><span>쨌</span><span style="color:var(--accent)">?뺥솗?? ?믪쓬</span></div></div>
</div>

<div class="adm-b" id="p-sec" style="display:none">
<div style="font-size:13px;font-weight:600;margin-bottom:4px">蹂댁븞 ?깃툒蹂??묎렐 留ㅽ듃由?뒪</div>
<div style="font-size:11px;color:var(--text-3);margin-bottom:14px">?믪쓬 ?깃툒? ??κ툒 ?댁긽 吏곸콉?먮쭔 ?대엺 媛?? 以묎컙 ?깃툒? ?덉슜??? ?⑥쐞濡??묎렐. ??쓬? ?꾩껜 怨듦컻.</div>
<table class="at2"><thead><tr><th>蹂댁븞 ?깃툒</th><th>?쒖뒪?쒓?由ъ옄</th><th>??κ툒 (吏곸콉??</th><th>?愿由ъ옄</th><th>?쇰컲 (?덉슜?)</th><th>?쇰컲 (鍮꾪뿀??</th><th>?몃?</th></tr></thead><tbody>
<tr><td><span class="bd bd-h">?믪쓬</span><div style="font-size:9px;color:var(--text-4);margin-top:2px">????댁긽 吏곴툒??/div></td><td style="color:var(--g)">??/td><td style="color:var(--g)">???뚯씪 ?대떦??吏????/td><td style="color:var(--r)">??/td><td style="color:var(--r)">??/td><td style="color:var(--r)">??/td><td style="color:var(--r)">??/td></tr>
<tr><td><span class="bd bd-md">以묎컙</span><div style="font-size:9px;color:var(--text-4);margin-top:2px">?덉슜 ? ?⑥쐞</div></td><td style="color:var(--g)">??/td><td style="color:var(--g)">??/td><td style="color:var(--g)">??/td><td style="color:var(--g)">??/td><td style="color:var(--r)">??/td><td style="color:var(--r)">??/td></tr>
<tr><td><span class="bd bd-l">??쓬</span><div style="font-size:9px;color:var(--text-4);margin-top:2px">?꾩껜 怨듦컻</div></td><td style="color:var(--g)">??/td><td style="color:var(--g)">??/td><td style="color:var(--g)">??/td><td style="color:var(--g)">??/td><td style="color:var(--g)">??/td><td style="color:var(--g)">??吏?뺤떆</td></tr>
</tbody></table>

<div style="margin-top:16px;font-size:13px;font-weight:600;margin-bottom:10px">?뱥 ?깃툒蹂??곸꽭 ?뺤콉</div>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:16px">
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-top:2px solid var(--r);border-radius:var(--r-sm);padding:14px">
<div style="font-size:12px;font-weight:600;color:var(--r);margin-bottom:6px">?뵶 ?믪쓬</div>
<div style="font-size:11px;color:var(--text-2);line-height:1.7">
??<b>??κ툒 ?댁긽</b> 吏곸콉?먮쭔 ?대엺<br>
???뚯씪 ?대떦??Admin)媛 ? 異붽? ??<b>?대떦 ? ????먮룞 吏??/b><br>
???몄궗?뺣낫 ?곕룞?쇰줈 ???蹂寃????먮룞 ?낅뜲?댄듃<br>
???? 援щℓ?낅Т洹쒖젙, ?먭? 愿???먮즺
</div></div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-top:2px solid var(--a);border-radius:var(--r-sm);padding:14px">
<div style="font-size:12px;font-weight:600;color:var(--a);margin-bottom:6px">?윞 以묎컙</div>
<div style="font-size:11px;color:var(--text-2);line-height:1.7">
??<b>?덉슜??? ?꾩썝</b> ?대엺 媛??br>
???愿由ъ옄 + ?쇰컲 ???紐⑤몢 ?묎렐<br>
??? ?⑥쐞濡?沅뚰븳 遺???뚯닔<br>
???? ?낅Т?쒖?, 5?ㅽ? ?댁쁺湲곗?
</div></div>
<div style="background:var(--bg-2);border:1px solid var(--border-1);border-top:2px solid var(--g);border-radius:var(--r-sm);padding:14px">
<div style="font-size:12px;font-weight:600;color:var(--g);margin-bottom:6px">?윟 ??쓬</div>
<div style="font-size:11px;color:var(--text-2);line-height:1.7">
??<b>?꾩껜 ?ъ슜??/b> ?대엺 媛??br>
???몃? ?묐젰?щ뒗 蹂꾨룄 吏????br>
??怨듦컻 留ㅻ돱?? ?묒떇 ??br>
???? VAATZ 留ㅻ돱?? ?묒떇
</div></div>
</div>

<div class="sec-n"><div class="sec-nt">?좑툘 RAG 蹂댁븞 ?뺤콉</div><div class="sec-nb">
??寃?????ъ슜??吏곴툒 + ?뚯냽 ? 湲곗? 臾몄꽌 ?먮룞 ?꾪꽣留?br>
??<b>?믪쓬</b> ?깃툒: ??κ툒 吏곸콉 ?щ?瑜??몄궗?뺣낫濡??먮룞 ?뺤씤 ???대엺 ?덉슜<br>
??<b>以묎컙</b> ?깃툒: ?뚯냽 ? 留ㅼ묶 ???먮룞 ?덉슜, ? ?? ?뚯씪 ?대떦?먭? ?섎룞 異붽?<br>
??沅뚰븳 諛?臾몄꽌??LLM???꾨떖?섏? ?딆븘 ?좎텧 ?먯쿇 李⑤떒<br>
??紐⑤뱺 吏덉쓽쨌?묐떟 媛먯궗 濡쒓렇 90??蹂닿?<br>
???ㅻ떟 ?섏떖 嫄??먮룞 媛먯? ??愿由ъ옄 利됱떆 ?뚮┝
</div></div>
</div>

</div></div>



<!-- Question Write Modal -->
<div class="rq-m" id="qWriteM" onclick="if(event.target===this)closeQuestionWrite()">
<div class="rq-b" style="width:520px">
<div class="rq-h">?륅툘 ??吏덈Ц ?묒꽦</div>
<div class="rq-d">援щℓ?낅Т 愿??沅곴툑???먯쓣 ?숇즺?ㅼ뿉寃?臾쇱뼱蹂댁꽭?? 梨꾪깮???듬?? AI ?숈뒿??諛섏쁺?????덉뒿?덈떎.</div>
<div class="frm-g">
<label class="frm-l">移댄뀒怨좊━</label>
<select class="frm-i frm-sel" id="qCatSel">
<option value="">移댄뀒怨좊━ ?좏깮</option>
<option value="?낆같">?낆같</option>
<option value="怨꾩빟">怨꾩빟</option>
<option value="5?ㅽ?">5?ㅽ?</option>
<option value="VAATZ">VAATZ</option>
<option value="?쇰컲">?쇰컲</option>
</select>
</div>
<div class="frm-g">
<label class="frm-l">吏덈Ц ?쒕ぉ</label>
<input type="text" class="frm-i" id="qTitleInput" placeholder="吏덈Ц????以꾨줈 ?붿빟?댁＜?몄슂">
</div>
<div class="frm-g">
<label class="frm-l">?곸꽭 ?댁슜</label>
<textarea class="frm-i" id="qBodyInput" rows="5" placeholder="吏덈Ц??諛곌꼍, ?곹솴, 沅곴툑???댁슜???곸꽭???곸뼱二쇱꽭??.." style="resize:vertical;line-height:1.7"></textarea>
</div>
<div style="display:flex;align-items:center;gap:6px;margin-bottom:12px;font-size:11px;color:var(--text-3)">
<span>?묒꽦??</span>
<strong style="color:var(--text-1)" id="qWriteNick">?꾨줈?먯뼱?덉뼱濡?/strong>
<span class="lv lv-3">Lv.3</span>
<span style="font-size:9px;color:var(--text-4)">쨌 ?됰꽕?꾩? 留덉씠?섏씠吏?먯꽌 蹂寃?/span>
</div>
<div class="frm-a">
<button class="btn btn-c" onclick="closeQuestionWrite()">痍⑥냼</button>
<button class="btn btn-p" onclick="submitQuestion()">?륅툘 吏덈Ц ?깅줉 (+3pt)</button>
</div>
</div>
</div>

<!-- DB Browser Overlay -->
<div class="db-ov" id="dbOv" onclick="if(event.target===this)closeDB()">
<div class="db-box">
<div class="db-hd"><h3 id="dbTitle">?뱰 ?⑹뼱?ъ쟾</h3><button class="adm-x" onclick="closeDB()">??/button></div>
<div class="db-tabs" id="dbTabs">
<button class="db-tab on" onclick="switchDBTab(this,'term')">?뱰 ?⑹뼱?ъ쟾</button>
<button class="db-tab" onclick="switchDBTab(this,'std')">?뱥 ?낅Т?쒖?</button>
<button class="db-tab" onclick="switchDBTab(this,'star')">狩??덉쭏 5?ㅽ?</button>
<button class="db-tab" onclick="switchDBTab(this,'bid')">?뤇截??낆같愿由?/button>
</div>
<div id="dbContent">
<div class="db-search"><input type="text" id="dbSearchInput" placeholder="寃?됱뼱瑜??낅젰?섏꽭??.." oninput="filterDB(this.value)"></div>
<div class="db-list" id="db-term">
<div class="db-item"><div class="db-item-ic">?뱰</div><div><div class="db-item-nm">?꾨젰?곸엯李?(Flexible Bidding)</div><div class="db-item-desc">? ?낆껜???쒖쐞留??뺤씤?섎ŉ 蹂듭닔 ?뚯감??嫄몄퀜 媛寃⑹쓣 ?섏젙쨌?쒖텧?섎뒗 諛⑹떇</div></div><span class="db-item-tag" style="background:var(--accent-dim);color:var(--accent)">?낆같</span></div>
<div class="db-item"><div class="db-item-ic">?뱰</div><div><div class="db-item-nm">寃쎈ℓ?낆같 (Reverse Auction)</div><div class="db-item-desc">理쒖? ?낆같媛瑜??ㅼ떆媛?怨듦컻?섎ŉ ?뺥빐吏??쒓컙 ?숈븞 媛寃⑹쓣 ??떠 ?쒖텧</div></div><span class="db-item-tag" style="background:var(--accent-dim);color:var(--accent)">?낆같</span></div>
<div class="db-item"><div class="db-item-ic">?뱰</div><div><div class="db-item-nm">?섏쓽怨꾩빟</div><div class="db-item-desc">寃쎌웳 ?낆같??嫄곗튂吏 ?딄퀬 ?뱀젙 ?낆껜? 吏곸젒 怨꾩빟??泥닿껐?섎뒗 諛⑹떇</div></div><span class="db-item-tag" style="background:var(--a-dim);color:var(--a)">怨꾩빟</span></div>
<div class="db-item"><div class="db-item-ic">?뱰</div><div><div class="db-item-nm">?덉쭏 5?ㅽ?</div><div class="db-item-desc">?묐젰???덉쭏 ??웾??1~5?ㅽ?濡??됯??섎뒗 ?깃툒 泥닿퀎</div></div><span class="db-item-tag" style="background:var(--g-dim);color:var(--g)">?덉쭏</span></div>
<div class="db-item"><div class="db-item-ic">?뱰</div><div><div class="db-item-nm">MRO (Maintenance, Repair, Operations)</div><div class="db-item-desc">?앹궛??吏곸젒 ?ъ엯?섏? ?딅뒗 ?좎?蹂댁닔쨌?뚮え???먯옱</div></div><span class="db-item-tag" style="background:var(--v-dim);color:var(--v)">?먯옱</span></div>
</div>
<div class="db-list" id="db-std" style="display:none">
<div class="db-item"><div class="db-item-ic">?뱥</div><div><div class="db-item-nm">?낆같?댁쁺 ?낅Т?쒖? STD-PUR-012</div><div class="db-item-desc">?꾨젰?곸엯李걔룰꼍留ㅼ엯李??덉감 ?쒖? 媛?대뱶</div></div><span class="db-item-tag" style="background:var(--accent-dim);color:var(--accent)">PDF</span></div>
<div class="db-item"><div class="db-item-ic">?뱥</div><div><div class="db-item-nm">援щℓ?붿껌 泥섎━ ?쒖? STD-PUR-003</div><div class="db-item-desc">VAATZ 援щℓ?붿껌 ?앹꽦遺???뱀씤源뚯? ?꾨줈?몄뒪</div></div><span class="db-item-tag" style="background:var(--accent-dim);color:var(--accent)">PDF</span></div>
<div class="db-item"><div class="db-item-ic">?뱥</div><div><div class="db-item-nm">寃?섑솗???낅Т?쒖? STD-PUR-021</div><div class="db-item-desc">?⑺뭹 寃???덉감, 遺덈웾 泥섎━ 湲곗?</div></div><span class="db-item-tag" style="background:var(--accent-dim);color:var(--accent)">PDF</span></div>
</div>
<div class="db-list" id="db-star" style="display:none">
<div class="db-item"><div class="db-item-ic">狩?/div><div><div class="db-item-nm">?덉쭏 5?ㅽ? ?댁쁺湲곗?</div><div class="db-item-desc">?깃툒 ?곗젙, ?밴툒쨌媛뺣벑 湲곗?, ?몄꽱?곕툕 泥닿퀎</div></div><span class="db-item-tag" style="background:var(--g-dim);color:var(--g)">洹쒖젙</span></div>
<div class="db-item"><div class="db-item-ic">狩?/div><div><div class="db-item-nm">5?ㅽ? ?됯? 泥댄겕由ъ뒪??/div><div class="db-item-desc">?됯? ??ぉ 42媛? ?먯닔 諛곗젏, ?깃툒 ?섏궛??/div></div><span class="db-item-tag" style="background:var(--g-dim);color:var(--g)">XLS</span></div>
</div>
<div class="db-list" id="db-bid" style="display:none">
<div class="db-item"><div class="db-item-ic">?뤇截?/div><div><div class="db-item-nm">寃쎈ℓ?낆같 媛?대뱶?쇱씤 v2.1</div><div class="db-item-desc">?곸슜踰붿쐞, 湲덉븸湲곗?, ?곗옣洹쒖튃 ???곸꽭 ?댁쁺吏移?/div></div><span class="db-item-tag" style="background:var(--a-dim);color:var(--a)">媛?대뱶</span></div>
<div class="db-item"><div class="db-item-ic">?뤇截?/div><div><div class="db-item-nm">?낆같怨듦퀬 ?쒗뵆由?/div><div class="db-item-desc">怨듦퀬臾??쒖? ?묒떇, ?꾩닔 湲곗옱?ы빆 泥댄겕由ъ뒪??/div></div><span class="db-item-tag" style="background:var(--a-dim);color:var(--a)">?묒떇</span></div>
</div>
</div>
</div></div>

<script>
// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??// VAATZ AI v11 ??Stabilized Prototype Script`;