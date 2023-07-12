/// <reference types="vitest" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation'
import {join} from "path";
import * as process from "process";
import {resolveVite} from "../../libs/shared/utils/src/index";
import DynamicPublicDirectory from "vite-multiple-assets";

const jsxRuntimePath = join(process.cwd(), '/node_modules/react/jsx-runtime.js')
export default defineConfig({
  resolve: resolveVite,
  cacheDir: join('../../../.vite_cache/.vite/remote'),
  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    DynamicPublicDirectory(["libs/shared/assets"]),
    federation({
      name: 'remote-host',
      filename: "remoteEntry.js",
      exposes: {
        "./AppHost": join(__dirname, "/src/app/app")
      },
      remotes: {
        // remoteShared:{
        //   external: `Promise.resolve(window.remoteSharedURL)`,
        //   from: 'vite',
        //   externalType: 'promise',
        // }
        remoteShared: {
          external: `Promise.resolve(window.remoteSharedURL)`,
          from: 'vite',
          externalType: 'promise',
        }
      },
      shared: {
        'react/jsx-runtime': {
          packagePath: jsxRuntimePath,
        },
        react: {},
        'react-dom': {},
        zustand: {}
      }
    }),
    // viteTsConfigPaths({
    //   root: '../../',
    // }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  // test: {
  //   globals: true,
  //   cache: {
  //     dir: '../../node_modules/.vitest',
  //   },
  //   environment: 'jsdom',
  //   include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  // },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
