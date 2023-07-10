/// <reference types="vitest" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";
import {join} from "path"
import path from "path";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import data from "../../tsconfig.base.json";

const paths = data.compilerOptions.paths;

const resolve = {
  alias: Object.keys(paths).map(key => {
    if (key.includes("*")) {
      return {
        find: key.split("*")[0], replacement: path.join(process.cwd(), paths[key][0].split("*")[0])
      };
    }
    return {
      find: key, replacement: path.join(process.cwd(), paths[key][0])
    };
  })
};
export default defineConfig({
  resolve,
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
      // remotes: {
      //   remoteApp: {
      //     external: `Promise.resolve(window.remoteURL)`,
      //     from: 'vite',
      //     externalType: 'promise',
      //   }
      // },
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
