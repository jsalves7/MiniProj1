import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { viteSingleFile } from 'vite-plugin-singlefile';

// viteSingleFile junta JS e CSS no index.html, para que dist/index.html abra a partir do disco (file://).
export default defineConfig({
  plugins: [vue(), viteSingleFile()],
  test: { include: ['tests/**/*.test.ts'] },
});
