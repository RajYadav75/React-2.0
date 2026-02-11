import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  darkMode: true,
  content:["./src/**/*.{js,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1F509A',
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
