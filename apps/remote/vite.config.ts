/// <reference types="vitest" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import federation from '@originjs/vite-plugin-federation'
import {join} from "path";
import * as process from "process";

const jsxRuntimePath = join(process.cwd(), '/node_modules/react/jsx-runtime.js')
export default defineConfig({
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
    federation({
      name: 'remote-host',
      filename: "remoteEntry.js",
      exposes: {
        "./AppHost": join(__dirname, "/src/app/app")
      },
      shared: {
        // '@mantine/core': {},
        // '@mantine/hooks': {},
        // '@mantine/utils': {},
        // '@mantine/styles': {},
        'react/jsx-runtime': {
          packagePath: jsxRuntimePath,
        },
        react: {
          version: '18.2.0'
        },
        'react-dom': {},
        zustand:{
        }
      }
    }),
    viteTsConfigPaths({
      root: '../../',
    }),
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
