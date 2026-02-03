import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Replace 'kozlarektrener' with your actual repository name if deploying to a project page
  // e.g., base: '/repo-name/'
  // If deploying to username.github.io, use base: '/'
  base: '/kozlarektrener/',
})
