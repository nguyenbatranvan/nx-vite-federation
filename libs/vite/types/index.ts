import { RenderedChunk } from 'rollup'

export interface VitePluginFederationOptions {
  exposes?: Exposes
  filename?: string
  transformFileTypes?: string[]
  name?: string
  remoteType?:
    | 'var'
    | 'module'
    | 'assign'
    | 'this'
    | 'window'
    | 'self'
    | 'global'
    | 'commonjs'
    | 'commonjs2'
    | 'commonjs-module'
    | 'amd'
    | 'amd-require'
    | 'umd'
    | 'umd2'
    | 'jsonp'
    | 'system'
    | 'promise'
    | 'import'
    | 'script'
    | 'node-commonjs'
  remotes?: Remotes
  shareScope?: string
  shared?: Shared
  mode?: string
}

type Exposes = (string | ExposesObject)[] | ExposesObject

type Remotes = (string | RemotesObject)[] | RemotesObject

type Shared = (string | SharedObject)[] | SharedObject

type ConfigTypeSet = ExposesConfig | RemotesConfig | SharedConfig

declare interface SharedRuntimeInfo {
  id: string
  dependencies: string[]
  fileName: string
  fileDir: string
  filePath: string
  chunk: RenderedChunk
}
declare interface ExposesObject {
  [index: string]: ExposesConfig | string | string[]
}
declare interface ExposesConfig {
  import: string
  name?: string
}
declare interface LibraryOptions {
  auxiliaryComment?: string | LibraryCustomUmdCommentObject
  export?: string | string[]
  name?: string | string[] | LibraryCustomUmdObject
  type: string
  umdNamedDefine?: boolean
}
declare interface LibraryCustomUmdCommentObject {
  amd?: string
  commonjs?: string
  commonjs2?: string
  root?: string
}
declare interface LibraryCustomUmdObject {
  amd?: string
  commonjs?: string
  root?: string | string[]
}
declare interface RemotesObject {
  [index: string]: string | RemotesConfig | string[] | Promise<any>
}
declare interface RemotesConfig {
  external: string
  externalType: 'url' | 'promise'
  shareScope?: string
  format?: 'esm' | 'systemjs' | 'var'
  from?: 'vite' | 'webpack'
}
declare interface SharedObject {
  [index: string]: string | SharedConfig
}
declare interface SharedConfig {
  import?: boolean
  packagePath?: string | undefined
  requiredVersion?: string | false
  shareScope?: string
  version?: string | false
  generate?: boolean
}
