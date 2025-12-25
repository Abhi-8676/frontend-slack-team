import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress the "use client" directive warnings from react-router
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && 
            warning.message.includes('"use client"')) {
          return
        }
        warn(warning)
      }
    }
  },
  optimizeDeps: {
    exclude: ['react-router-dom']
  }
})