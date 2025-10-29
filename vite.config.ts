import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative asset paths for static hosting so assets resolve correctly.
  base: './',
  plugins: [react()],
})