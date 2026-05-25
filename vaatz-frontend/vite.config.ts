import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',   // 상대경로 → 파일을 로컬에서 직접 열어도 동작
})
