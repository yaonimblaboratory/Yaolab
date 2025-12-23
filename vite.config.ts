
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using './' makes the build relative, so it works regardless of the repo name
  // and avoids issues with the "Sync" tool trying to guess your URL.
  base: './', 
});
