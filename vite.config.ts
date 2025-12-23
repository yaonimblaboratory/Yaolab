import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Base './' ensures that assets are loaded relative to the index.html,
  // which works perfectly for GitHub Pages project sites.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
