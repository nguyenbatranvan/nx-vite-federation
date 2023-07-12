/// <reference types="vitest" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import federation from "@originjs/vite-plugin-federation"
import {join} from "path";
import process from "process";
const jsxRuntimePath = join(process.cwd(), '/node_modules/react/jsx-runtime.js')
export default defineConfig({
  cacheDir: '../../../vite_cache/.vite/remote-shared',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 5001,
    host: 'localhost',
  },

  plugins: [
    react({
      jsxRuntime:'classic'
    }),
    federation({
      name: 'remote-shared',
      filename: 'remoteEntry.js',
      exposes: {
        "./Hooks": join(__dirname, "/src/hooks/index")
      },
      shared: {
        'react/jsx-runtime': {
          packagePath: jsxRuntimePath,
        },
        zustand: {
          import: false
        },
        react: {
          import:false
        },
        "react-dom": {
          import:false
        }
      }
    }),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
