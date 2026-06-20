import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react','react-dom','react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-lottie': ['lottie-react'],
        }
      }
    }
  },
  plugins: [react()],
})
