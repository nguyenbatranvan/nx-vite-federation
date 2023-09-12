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

interface IConfig {
  config: UserConfigExport;
  cacheName: string;
  plugins: PluginOption[];
  federationOts: VitePluginFederationOptions
}

export const ViteBaseConfig = (payload: Partial<IConfig>): UserConfigExport => {
  const {config, cacheName, plugins, federationOts} = payload;
  return merge<UserConfigExport, UserConfigExport>({
    cacheDir: join(`../../../.vite_cache/.vite/${cacheName}`),
    resolve: resolveVite,
    plugins: [...plugins || [],
      nodePolyfills({
        exclude: ['fs'],
        globals: {
          Buffer: true, // can also be 'build', 'dev', or false
          global: true,
          process: true,
        },
        protocolImports: true,
      }),
      react({}),
      federation(merge<VitePluginFederationOptions, VitePluginFederationOptions>({
        shared: {
          ...generateFdFromBase(),
          react: {
            version: '18.2.0',
            packagePath: getPackagePath("/node_modules/react/index.js")
          },
          'react-dom': {},
          zustand: {},
          'react/jsx-runtime': {
            packagePath: getPackagePath("/node_modules/react/jsx-runtime.js"),
            version: '18.2.0',
          },
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
