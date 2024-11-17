// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from "vite-plugin-env-compatible"

export default defineConfig({
  // envPrefix:"REACT_APP_",
  plugins: [
    envCompatible(),
    react()],
  
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
