import {PluginOption, UserConfigExport} from "vite";
import {merge} from "lodash";
import {join} from "path";
import {nodePolyfills} from "vite-plugin-node-polyfills";
import react from "@vitejs/plugin-react-swc";
import {VitePluginFederationOptions} from "./types";
import federation from '@originjs/vite-plugin-federation'
import {getPackagePath, resolveVite} from "../shared/utils/src";
import DynamicPublicDirectory from "vite-multiple-assets";
import {generateFdFromBase} from "../shared/utils/src/lib/generate-fd-from-base";
import checker from "vite-plugin-checker";
// @ts-ignore
import data from "../../package.json"

const {dependencies} = data;

//
// const excludes=['react-router-dom','@mantine/core','@emotion/styled','@emotion/react','antd']
// const sharedDev={};
// for(let key in dependencies){
//   sharedDev[key]=dependencies[key];
// }
//
// for(let item in excludes){
//   delete sharedDev[excludes[item]]
// }
interface IConfig {
  config: UserConfigExport;
  cacheName: string;
  plugins: PluginOption[];
  federationOts: VitePluginFederationOptions
}

export default function I18nHotReload(): PluginOption {
  return {
    name: 'i18n-hot-reload',
    apply: 'build',
    watchChange:(a,b)=>{
    }

  }
}


const appName = process.env.LERNA_PACKAGE_NAME;
export const ViteBaseConfig = (payload: Partial<IConfig>): UserConfigExport => {
  const {config, cacheName, plugins, federationOts} = payload;
  return merge<UserConfigExport, UserConfigExport>({
    cacheDir: join(`../../../.vite_cache/.vite/${cacheName}`),
    resolve: resolveVite,
    plugins: [...plugins || [],
      checker({
        typescript: {
          root: `${process.cwd()}/apps/${appName}`,
          tsconfigPath: 'tsconfig.app.json'
        },
      }),
      // visualizer({
      //   open: true,
      //   gzipSize: true,
      //   template: "treemap",
      //   brotliSize: true,
      //   filename: `dist/apps/${appName}/stats.html`
      // }),
      I18nHotReload(),
      nodePolyfills({
        exclude: ['fs'],
        globals: {
          Buffer: true, // can also be 'build', 'dev', or false
          global: true,
          process: true,
        },
        protocolImports: true,
      }),
      react(),
      federation(merge<VitePluginFederationOptions, VitePluginFederationOptions>({
        shared: {
          react: {
            version: dependencies['react'],
          },
          'react-dom': {
            version: dependencies['react-dom']
          },
          zustand: {
            version: dependencies['zustand']
          },
          'react/jsx-runtime': {
            version: dependencies['react'],
          },
          ...generateFdFromBase(),
        }
      }, federationOts || {})),
      DynamicPublicDirectory(["libs/shared/assets"]),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,

      cssCodeSplit: false,
      rollupOptions: {
        output: {
          format: 'esm'
        }
      }
    },
  }, config || {})
}
