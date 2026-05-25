export const inlineStylesHtml = `<style id="v34-css">
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
/* 커뮤니티 탭바 - 캐릭터/상점 접근을 위해 표시 유지 */
.comm-box .comm-tabs{
  display:flex!important;
  padding:0 16px!important;
  gap:0!important;
  background:var(--bg-1)!important;
  border-bottom:1px solid var(--border-1)!important;
  overflow-x:auto!important;
  scrollbar-width:none!important;
}
.comm-box .comm-tabs::-webkit-scrollbar{display:none!important}
.comm-tab{
  border:none!important;background:none!important;
  color:var(--text-3)!important;font-size:11.5px!important;
  font-weight:600!important;padding:10px 14px!important;
  cursor:pointer!important;white-space:nowrap!important;
  border-bottom:2px solid transparent!important;
  transition:all .15s!important;font-family:inherit!important;
}
.comm-tab:hover{color:var(--text-1)!important}
.comm-tab.on{color:var(--accent)!important;border-bottom-color:var(--accent)!important;background:none!important}
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
.comm-hd .adm-x{display:flex!important} /* 닫기 버튼 표시 */
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

`
