/// <reference types="vitest" />
import {defineConfig} from 'vite';
import {ViteBaseConfig} from "../../libs/vite/vite-base";

export default defineConfig(ViteBaseConfig({
  config: {
    server: {
      strictPort: false,
      port: 3000,
      fs: {
        strict: true
      }
    },
    preview: {
      port: 3000
    },
  },
  cacheName: 'host',
  federationOts: {
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
  }
}))

