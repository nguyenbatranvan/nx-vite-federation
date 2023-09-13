import {defineConfig} from 'vite';
import {ViteBaseConfig} from "../../libs/vite/vite-base";
import {join} from "path";

export default defineConfig(ViteBaseConfig({
  cacheName: 'remote-cart',
  config: {
    preview: {
      port: 4201
    }
  },
  federationOts: {
    name: 'remote-cart',
    filename: "remoteEntry.js",
    exposes: {
      "./AppCart": join(__dirname, "/src/app/app")
    },
  }
}));
