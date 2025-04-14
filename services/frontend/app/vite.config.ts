import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // expose to the host machine
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // important for Docker on Mac/Windows
    },
  },
})
