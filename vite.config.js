import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss() 
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          vendor: ['react', 'react-dom'],

          // Routing
          router: ['react-router-dom'],

          // Three.js & 3D
          three: ['three', '@react-three/fiber', '@react-three/drei'],

          // Animation libraries
          animation: ['gsap'],

          // Icons
          icons: ['lucide-react'],
        },
      }
    }
  },
  base: '/aboutme/',
})
