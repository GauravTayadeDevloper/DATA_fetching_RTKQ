import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DATA_fetching_RTKQ/',
  build: {
    outDir: 'dist' 
  }
});
