/// <reference types="vitest" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";
import {join} from "path"
import {resolveVite} from "../../libs/shared/utils/src/index";
export default defineConfig({
  resolve:resolveVite,
  cacheDir: join('../../../.vite_cache/.vite/host'),
  server: {
    strictPort: false,
    port: 3000,
    host: 'localhost',
    fs: {
      strict: true
    }
  },
  plugins: [
    // viteTsConfigPaths({
    //   root: '../../',
    // }),

    federation({
      name: 'app',
      remotes: {
        remoteApp: {
          external: `Promise.resolve(window.remoteURL)`,
          from: 'vite',
          externalType: 'promise',
        },
        remoteShared:{
          external: `Promise.resolve(window.remoteSharedURL)`,
          from: 'vite',
          externalType: 'promise',
        }
      },
      // remotes: [
      //   {
      //     remoteApp: {
      //       external: `http://localhost:4300/assets/remoteEntry.js`,
      //       from: 'vite',
      //       externalType: 'url',
      //     },
      //   }
      // ],
      // remotes: {
      //   remoteApp: 'http://localhost:4300/assets/remoteEntry.js',
      // },
      shared: {
        react: {
          version: '^18.2.0',
          requiredVersion: '^18.2.0'
        },
        'react-dom': {
          version: '^18.2.0'
        },
        zustand:{
          version:'^4.3.9'
        }
      }
    }),
    react()
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  }
});
