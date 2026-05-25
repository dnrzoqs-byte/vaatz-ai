import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react'
import type { AiMode, CommTab, AdminTab, ToastItem, RightPanelTab } from '../types'

// ─── 전역 앱 상태 타입 ────────────────────────────────────
interface AppState {
  // 테마
  theme: 'dark' | 'light'
  // AI 모드
  currentMode: AiMode
  // 현재 뷰 (welcome / chat)
  currentView: 'wl' | 'ch'
  // 커뮤니티 모달
  communityOpen: boolean
  communityTab: CommTab
  // Admin 패널
  adminOpen: boolean
  adminTab: AdminTab
  // 마이페이지
  mypageOpen: boolean
  // 데이터 업로드 요청 모달
  requestOpen: boolean
  // DB 브라우저 오버레이
  dbOpen: boolean
  // 우측 패널
  rightPanelOpen: boolean
  rightPanelTab: RightPanelTab
  // 토스트
  toasts: ToastItem[]
  // 알림 배지 수
  notiBadge: number
}

// ─── 컨텍스트 액션 타입 ───────────────────────────────────
interface AppActions {
  toggleTheme: () => void
  setMode: (mode: AiMode) => void
  setView: (view: 'wl' | 'ch') => void
  openComm: (tab?: CommTab) => void
  closeComm: () => void
  setCommTab: (tab: CommTab) => void
  openAdmin: (tab?: AdminTab) => void
  closeAdmin: () => void
  setAdminTab: (tab: AdminTab) => void
  openMypage: () => void
  closeMypage: () => void
  openRequest: () => void
  closeRequest: () => void
  openDB: () => void
  closeDB: () => void
  openRightPanel: (tab?: RightPanelTab) => void
  closeRightPanel: () => void
  setRightPanelTab: (tab: RightPanelTab) => void
  toast: (message: string, icon?: string, duration?: number) => void
  dismissToast: (id: string) => void
  clearNoti: () => void
}

type AppContextType = AppState & AppActions

// ─── 기본값 ───────────────────────────────────────────────
const defaultState: AppState = {
  theme: 'dark',
  currentMode: '통합모드',
  currentView: 'ch',
  communityOpen: false,
  communityTab: 'qa',
  adminOpen: false,
  adminTab: 'p-home',
  mypageOpen: false,
  requestOpen: false,
  dbOpen: false,
  rightPanelOpen: false,
  rightPanelTab: 'src',
  toasts: [],
  notiBadge: 3,
}

// ─── Context 생성 ─────────────────────────────────────────
const AppContext = createContext<AppContextType | null>(null)

// ─── Provider ────────────────────────────────────────────
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(() => {
    // localStorage에서 저장된 값 복구
    try {
      const savedTheme = (localStorage.getItem('vaatz-theme') || 'dark') as 'dark' | 'light'
      const savedMode = (localStorage.getItem('vaatz-current-mode') || '통합모드') as AiMode
      return { ...defaultState, theme: savedTheme, currentMode: savedMode }
    } catch {
      return defaultState
    }
  })

  // HTML 요소에 data-theme 반영
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme)
    try { localStorage.setItem('vaatz-theme', state.theme) } catch {}
  }, [state.theme])

  // 모드 변경 시 저장
  useEffect(() => {
    try { localStorage.setItem('vaatz-current-mode', state.currentMode) } catch {}
    // 기존 vaatz-init.js와 호환 브릿지
    ;(window as any).currentAIMode = state.currentMode
  }, [state.currentMode])

  // ─── 기존 vanilla JS와의 호환 브릿지 ──────────────────────
  // vaatz-init.js가 window.openComm 등을 참조하므로, React 함수를 window에 연결
  const stateRef = useRef(state)
  stateRef.current = state

  useEffect(() => {
    const w = window as any
    w.__reactOpenComm     = (tab?: CommTab)    => setState(s => ({ ...s, communityOpen: true,  communityTab: tab || s.communityTab }))
    w.__reactCloseComm    = ()                 => setState(s => ({ ...s, communityOpen: false }))
    w.__reactOpenAdmin    = (tab?: AdminTab)   => setState(s => ({ ...s, adminOpen: true, adminTab: tab || 'p-home' }))
    w.__reactCloseAdmin   = ()                 => setState(s => ({ ...s, adminOpen: false }))
    w.__reactOpenMypage   = ()                 => setState(s => ({ ...s, mypageOpen: true }))
    w.__reactCloseMypage  = ()                 => setState(s => ({ ...s, mypageOpen: false }))
    w.__reactOpenRequest  = ()                 => setState(s => ({ ...s, requestOpen: true }))
    w.__reactCloseRequest = ()                 => setState(s => ({ ...s, requestOpen: false }))
    w.__reactOpenDB       = ()                 => setState(s => ({ ...s, dbOpen: true }))
    w.__reactCloseDB      = ()                 => setState(s => ({ ...s, dbOpen: false }))
    w.__reactOpenRP       = (tab?: RightPanelTab) => setState(s => ({ ...s, rightPanelOpen: true, rightPanelTab: tab || 'src' }))
    w.__reactCloseRP      = ()                 => setState(s => ({ ...s, rightPanelOpen: false }))
    w.__reactSetView      = (view: 'wl'|'ch')  => setState(s => ({ ...s, currentView: view }))
    w.__reactToast     = (msg: string, icon?: string, dur?: number) => {
      const id = Math.random().toString(36).slice(2)
      setState(s => ({ ...s, toasts: [...s.toasts, { id, message: msg, icon: icon || '✅', duration: dur || 3500 }] }))
      setTimeout(() => setState(s => ({ ...s, toasts: s.toasts.filter(t => t.id !== id) })), dur || 3500)
    }
  }, [])

  // ─── 액션 정의 ────────────────────────────────────────────
  const toggleTheme = useCallback(() => {
    setState(s => ({ ...s, theme: s.theme === 'dark' ? 'light' : 'dark' }))
  }, [])

  const setMode = useCallback((mode: AiMode) => {
    setState(s => ({ ...s, currentMode: mode }))
  }, [])

  const setView = useCallback((view: 'wl' | 'ch') => {
    setState(s => ({ ...s, currentView: view }))
  }, [])

  const openComm = useCallback((tab?: CommTab) => {
    setState(s => ({ ...s, communityOpen: true, communityTab: tab || s.communityTab }))
  }, [])

  const closeComm = useCallback(() => {
    setState(s => ({ ...s, communityOpen: false }))
  }, [])

  const setCommTab = useCallback((tab: CommTab) => {
    setState(s => ({ ...s, communityTab: tab }))
  }, [])

  const openAdmin = useCallback((tab?: AdminTab) => {
    setState(s => ({ ...s, adminOpen: true, adminTab: tab || 'p-home' }))
  }, [])

  const closeAdmin = useCallback(() => {
    setState(s => ({ ...s, adminOpen: false }))
  }, [])

  const setAdminTab = useCallback((tab: AdminTab) => {
    setState(s => ({ ...s, adminTab: tab }))
  }, [])

  const openMypage = useCallback(() => {
    setState(s => ({ ...s, mypageOpen: true }))
  }, [])

  const closeMypage = useCallback(() => {
    setState(s => ({ ...s, mypageOpen: false }))
  }, [])

  const openRequest = useCallback(() => {
    setState(s => ({ ...s, requestOpen: true }))
  }, [])

  const closeRequest = useCallback(() => {
    setState(s => ({ ...s, requestOpen: false }))
  }, [])

  const openDB = useCallback(() => {
    setState(s => ({ ...s, dbOpen: true }))
  }, [])

  const closeDB = useCallback(() => {
    setState(s => ({ ...s, dbOpen: false }))
  }, [])

  const openRightPanel = useCallback((tab?: RightPanelTab) => {
    setState(s => ({ ...s, rightPanelOpen: true, rightPanelTab: tab || 'src' }))
  }, [])

  const closeRightPanel = useCallback(() => {
    setState(s => ({ ...s, rightPanelOpen: false }))
  }, [])

  const setRightPanelTab = useCallback((tab: RightPanelTab) => {
    setState(s => ({ ...s, rightPanelTab: tab }))
  }, [])

  const toast = useCallback((message: string, icon = '✅', duration = 3500) => {
    const id = Math.random().toString(36).slice(2)
    setState(s => ({ ...s, toasts: [...s.toasts, { id, message, icon, duration }] }))
    setTimeout(() => {
      setState(s => ({ ...s, toasts: s.toasts.filter(t => t.id !== id) }))
    }, duration)
  }, [])

  const dismissToast = useCallback((id: string) => {
    setState(s => ({ ...s, toasts: s.toasts.filter(t => t.id !== id) }))
  }, [])

  const clearNoti = useCallback(() => {
    setState(s => ({ ...s, notiBadge: 0 }))
  }, [])

  return (
    <AppContext.Provider value={{
      ...state,
      toggleTheme, setMode, setView,
      openComm, closeComm, setCommTab,
      openAdmin, closeAdmin, setAdminTab,
      openMypage, closeMypage,
      openRequest, closeRequest,
      openDB, closeDB,
      openRightPanel, closeRightPanel, setRightPanelTab,
      toast, dismissToast, clearNoti,
    }}>
      {children}
    </AppContext.Provider>
  )
}

// ─── Hook ─────────────────────────────────────────────────
export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
