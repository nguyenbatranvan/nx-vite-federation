import {defineConfig} from 'vite';
import {join} from "path";
import {ViteBaseConfig} from "../../libs/vite/vite-base";
export default defineConfig(ViteBaseConfig({
  cacheName:'remote',
  config:{
    server: {
      port: 4200,
    },
    preview: {
      port: 4300,
    },
  },
  federationOts:{
    name: 'remote-host',
    filename: "remoteEntry.js",
    exposes: {
      "./AppHost": join(__dirname, "/src/app/app")
    },
  }
}))
// export default defineConfig({
//   resolve: resolveVite,
//   cacheDir: join('../../../.vite_cache/.vite/remote'),
//   server: {
//     port: 4200,
//   },
//   preview: {
//     port: 4300,
//   },
//   plugins: [
//     nodePolyfills({
//       exclude:['fs'],
//       globals: {
//         Buffer: true, // can also be 'build', 'dev', or false
//         global: true,
//         process: true,
//       },
//       protocolImports: true,
//     }),
//     react({}),
//     DynamicPublicDirectory(["libs/shared/assets"]),
//     federation({
//       name: 'remote-host',
//       filename: "remoteEntry.js",
//       exposes: {
//         "./AppHost": join(__dirname, "/src/app/app")
//       },
//       shared: {
//         ...generateFdFromBase(),
//         'react/jsx-runtime': {},
//         react: {},
//         'react-dom': {},
//         zustand: {}
//       }
//     }),
//   ],
//
//
//   build: {
//     modulePreload: false,
//     target: "esnext",
//     minify: false,
//     cssCodeSplit: false,
//     rollupOptions: {
//       output: {
//         format: 'esm'
//       }
//     }
//   },
// })
