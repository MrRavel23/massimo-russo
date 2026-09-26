import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // The site is served from the root of massimorussopianist.com, so builds need no subpath prefix.
  base: '/',
  server: {
    host: '127.0.0.1',
    // Dev preview reads the seed content and images from ../studio/seed
    fs: { allow: ['..'] },
  },
})
