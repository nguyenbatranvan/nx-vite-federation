/// <reference types="vitest" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";
import {join} from "path"
import {resolveVite} from "../../libs/shared/utils/src";
import process from "process";
import DynamicPublicDirectory from "vite-multiple-assets";

const jsxRuntimePath = join(process.cwd(), '/node_modules/react/jsx-runtime.js')
export default defineConfig({
  resolve: resolveVite,
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
    DynamicPublicDirectory(["libs/shared/assets"]),
    federation({
      name: 'app',
      remotes: {
        remoteApp: {
          external: `Promise.resolve(window.remoteURL)`,
          from: 'vite',
          externalType: 'promise',
        },
        remoteShared: {
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
        },
        'react-dom': {
        },
        zustand: {
        }
      }
    }),
    react({
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  }
});
