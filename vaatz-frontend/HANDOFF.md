# VAATZ Frontend — 인수인계 문서

## 프로젝트 개요
- **위치:** `C:\Users\dwkim\vaatz-frontend`
- **배포:** Vercel, GitHub repo `https://github.com/dnrzoqs-byte/vaatz-ai.git` main 브랜치 자동배포
- **스택:** React (Vite), TypeScript, plain CSS

---

## 핵심 파일 구조 (중요)

| 파일 | 역할 | 수정 여부 |
|------|------|-----------|
| `public/vaatz-init.js` | **유일한 런타임 JS** — 모든 JS 로직 여기에 | JS 수정 시 이 파일만 |
| `src/overrides.css` | 런타임 CSS (main.tsx에서 import됨) | CSS 수정 시 이 파일만 |
| `src/vaatz-html.ts` | 정적 HTML 구조 (dangerouslySetInnerHTML로 주입) | HTML 구조 수정 시 |
| `src/App.tsx` | React 진입점, `/vaatz-init.js` script 태그로 로드 | 건드리지 않음 |
| `src/scripts/vaatz-init.ts` | **데드파일** — 절대 수정 금지, 실행 안 됨 | |

**중요:** `App.tsx` 22번째 줄에서 `script.src = '/vaatz-init.js'`로 public 폴더 파일을 직접 로드함. `src/scripts/vaatz-init.ts`는 번들되지 않아 브라우저에서 실행되지 않음.

---

## vaatz-init.js 구조 개요

```
~line 1       : 전역 유틸리티, 테마, 토스트 등
~line 2223    : modeInfo 객체 (통합모드/생산자재/일반자재/원가모드)
~line 2245    : installChatTools — 채팅 UI 빌더
~line 2025    : v26 openComm 레이어 (구버전, V36에 의해 덮어쓰여짐)
~line 2144    : v27 openComm 레이어 (구버전, V36에 의해 덮어쓰여짐)
~line 2261    : v29 openComm 레이어 (구버전, V36에 의해 덮어쓰여짐)
~line 3089    : v33 openComm — char/shop 탭 전용 (setupV33CharacterPicker, renderV33ShopItems)
~line 3500    : v34 openComm 레이어 (구버전, V36에 의해 덮어쓰여짐)
~line 4182    : ▶ V36 Q&A IIFE 블록 시작
~line 4191    : questions[] 배열 (id, cat, title, body, tags, author, lv, views, votes, answers, adopted)
~line 4229    : qaS 상태 (cat, view, selId, q)
~line 4270    : renderList(ct) — QA 목록 렌더링
~line 4327    : renderDetail(ct) — QA 상세 렌더링
~line 4393    : renderQA() — dispatcher, #ct-qa 타겟
~line 4401    : 공개 API (qa36Select, qa36Back, qa36SetCat 등)
~line 4482    : ▶ V36 최종 통합 레이어 (openComm/closeComm/commTab 완전 교체)
```

---

## V36 커뮤니티 통합 (최근 완료)

### 문제
9개 레이어(v26~v36)가 `window.openComm`을 순차적으로 덮어쓰며 각자 setTimeout을 걸어 경쟁 조건(race condition) 발생. 커뮤니티 열 때 구버전 UI가 덮어쓰는 현상 있었음.

### 해결 (vaatz-init.js 4482~4532번째 줄)
V36 IIFE 마지막에 `window.openComm`, `window.closeComm`, `window.commTab`을 최종 권위 버전으로 완전 교체:

```javascript
window.openComm = function(tab) {
  // 오버레이 show + 탭 전환 + 각 탭별 렌더러 호출
  // QA탭 → renderQA(), char탭 → setupV33CharacterPicker(), shop탭 → renderV33ShopItems()
};
window.closeComm = function() { /* 오버레이 hide */ };
window.commTab = function(btn, id) { /* 탭 버튼 on/off + 패널 전환 */ };
```

`renderCommunityV26/V27/V29`도 모두 V36 `renderQA()`로 리다이렉트됨.

---

## overrides.css 주요 섹션

| 라인 | 내용 |
|------|------|
| ~507-645 | float-char 마스코트 CSS — 우측 패널 열릴 때 `pointer-events: none` |
| ~1949-2020 | 우측 패널 스크롤 flex 체인 (rp-tabs, v29-source-shell, v29-src-body, v29-doc-scroll) |
| ~2021-2038 | 모드 배지 CSS (v29-mode-current, v29-mode-title, v29-mode-desc, data-mode 색상) |

---

## vaatz-html.ts 주요 구조

- **좌측 사이드바:** `.sb-nav` — "AI 질의응답" 메뉴 항목 제거됨
- **상단 바:** `.tb-t` — "VAATZ AI"로 변경됨
- **커뮤니티 오버레이:** `#commOv` > `.comm-box` > `.comm-tabs` + `.comm-body`
  - 탭 패널: `#ct-qa`, `#ct-hof`, `#ct-lv`, `#ct-char`, `#ct-shop`
- **인라인 스타일:** `<style id="v34-css">` — `.comm-box { width: min(1560px,calc(100vw-48px)); height: calc(100vh-48px) }`

---

## 커밋/배포 방법

```powershell
# JS 수정 후
git add public/vaatz-init.js
git commit -m "설명"
git push origin main   # Vercel 자동배포 트리거

# CSS 수정 후
git add src/overrides.css

# HTML 수정 후
git add src/vaatz-html.ts
```

---

## 주의사항
- `src/scripts/vaatz-init.ts` 절대 수정 금지 (번들 안 됨, 실행 안 됨)
- PowerShell에서 git commit 메시지는 `@'...'@` here-string 사용 (bash의 `cat <<'EOF'` 사용 불가)
- `.comm-box` CSS를 overrides.css에서 `!important`로 크기 지정하면 v34-css와 충돌함 — v34-css가 권위
