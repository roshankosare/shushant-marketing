import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensures all assets use relative paths for direct hosting on GitHub Pages (even in subpaths)
  base: '',
});
