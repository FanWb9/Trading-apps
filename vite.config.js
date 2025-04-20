import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // pastikan outputnya di folder dist
  },
  base: '/', // pastikan base path-nya sesuai jika di-root
})
