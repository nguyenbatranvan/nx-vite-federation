/// <reference types="vitest" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
// import viteTsConfigPaths from 'vite-tsconfig-paths';
import federation from "@originjs/vite-plugin-federation";
import {join} from "path"
import path from "path";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({

  cacheDir:   join('../../@fs' + path.dirname(__filename), '/83748/.vite'),
  server: {
    strictPort: false,
    port: 3000,
    host: 'localhost',
    fs:{
      strict:true
    }
  },
  plugins: [
//    viteTsConfigPaths({
    //      root: '../../',
    //    }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    }),
    federation({
      name: 'app',
      // remotes: [
      //   {
      //     remoteApp: {
      //       external: `http://localhost:4300/assets/remoteEntry.js`,
      //       from: 'vite',
      //       externalType: 'url',
      //     },
      //   }
      // ],
      remotes: {
        remoteApp: 'http://localhost:4300/assets/remoteEntry.js',
      },
      shared: {
        react: {
          version: '^18.2.0',
          requiredVersion:'^18.2.0'
        },
        'react-dom': {
          version:'^18.2.0'
        }
      }
    }),
    react(),

  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },
  build: {
      modulePreload: true,
    target: "esnext",
      minify: false,
      cssCodeSplit: false,
  },
  // test: {
  //   globals: true,
  //   cache: {
  //     dir: '../../node_modules/.vitest',
  //   },
  //   environment: 'jsdom',
  //   include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  // },
});
