import { env } from 'node:process'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: env.GITHUB_ACTIONS === 'true' ? '/pizzeria/' : '/',
  plugins: [react()],
})
