import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/luis-ramirez-portfolio/', // This fixes your image asset paths for GitHub Pages!
})