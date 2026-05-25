// ─── AI 모드 ───────────────────────────────────────────
export type AiMode = '통합모드' | '생산자재 모드' | '일반자재 모드' | '원가모드'

export const AI_MODES: AiMode[] = ['통합모드', '생산자재 모드', '일반자재 모드', '원가모드']

export interface ModeInfo {
  icon: string
  label: string
  desc: string
}

export const MODE_INFO: Record<AiMode, ModeInfo> = {
  '통합모드':     { icon: '🌐', label: '전체 구매 지식', desc: '승인된 구매 규정·업무표준·VAATZ 지식 전체를 검색합니다.' },
  '생산자재 모드': { icon: '🏭', label: '생산자재 중심',  desc: '부품·협력사·품질·생산 구매 관련 DB를 우선 검색합니다.' },
  '일반자재 모드': { icon: '📦', label: '일반자재 중심',  desc: 'MRO·사무/설비·일반자재 계약 지식을 우선 검색합니다.' },
  '원가모드':     { icon: '💰', label: '원가/단가 중심',  desc: '원가성 데이터와 단가 이력은 권한 확인 후 검색합니다.' },
}

// ─── 커뮤니티 Q&A ─────────────────────────────────────
export type QAStatus = 'HOT' | '채택' | '답변대기' | 'NEW' | '해결중'
export type QACat = '전체' | '입찰' | '계약' | 'VAATZ' | '5스타' | '원가' | '일반자재' | '해외구매' | '협력사'

export interface QAItem {
  id: number
  cat: string
  status: QAStatus
  votes: number
  answers: number
  title: string
  body: string
  tags: string[]
  author: string
  time: string
  candidate: boolean
  adopted?: boolean
}

// ─── 커뮤니티 탭 ──────────────────────────────────────
export type CommTab = 'qa' | 'hof' | 'lv' | 'char' | 'shop'

// ─── Admin 탭 ─────────────────────────────────────────
export type AdminTab =
  | 'p-home' | 'p-req' | 'p-final' | 'p-verify'
  | 'p-doc' | 'p-aidb' | 'p-usr' | 'p-int' | 'p-mon' | 'p-sec'

// ─── 알림 ─────────────────────────────────────────────
export interface Notification {
  id: string
  icon: string
  title: string
  desc: string
  time: string
  read: boolean
  action?: 'req' | 'sys'
}

// ─── 토스트 ───────────────────────────────────────────
export interface ToastItem {
  id: string
  message: string
  icon: string
  duration: number
}

// ─── 채팅 히스토리 항목 ───────────────────────────────
export interface ChatHistoryItem {
  id: string
  title: string
  date: string
  active?: boolean
}

// ─── 소스 문서 ────────────────────────────────────────
export interface SourceDoc {
  id: number
  name: string
  type: string
  typeLabel: string
  path: string
  owner: string
  version: string
  security: string
  securityLabel: string
  pages: SourcePage[]
}

export interface SourcePage {
  no: number | string
  total?: number
  title: string
  sub?: string
  body: string
  slide?: boolean
  excel?: boolean
}

// ─── 캐릭터 상태 ──────────────────────────────────────
export interface CharacterState {
  emoji: string
  hat: string
  face: string
  pet: string
  bg: string
  points: number
  level: number
}

// ─── 우측 패널 탭 ─────────────────────────────────────
export type RightPanelTab = 'src' | 'my'
