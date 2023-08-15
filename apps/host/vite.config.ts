/// <reference types="vitest" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";
import {join} from "path"
import {getPackagePath, resolveVite} from "../../libs/shared/utils/src";
import DynamicPublicDirectory from "vite-multiple-assets";


// console.log(join(process.cwd(),'/libs/shared/state/src/index.ts'))
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
  preview: {
    port: 3000
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
          version: '18.2.0',
          packagePath: getPackagePath("/node_modules/react/index.js")
        },
        'react-dom': {
          version: '18.2.0',
          packagePath: getPackagePath("/node_modules/react-dom/index.js")
        },
        zustand: {},
        'react/jsx-runtime': {
          packagePath: getPackagePath("/node_modules/react/jsx-runtime.js"),
          version: '18.2.0'
        },
        'shared-state': {
          version: '0.0.0',
          packagePath: getPackagePath("/libs/shared/state/src/index.ts")
        }
      }
    }),
    react({})
  ],
  build: {
    modulePreload: true,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  }
});
