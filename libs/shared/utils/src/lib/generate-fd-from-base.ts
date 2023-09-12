import {getPackagePath} from "./get-package-path";
// @ts-ignore
import data from "../../../../../tsconfig.base.json";

const paths = data.compilerOptions.paths
export function generateFdFromBase() {
  const json = {};
  for (let key in paths) {
    json[key] = {
      version: '0.0.0',
      packagePath: getPackagePath(paths[key][0])
    }
  }
  delete json['@module-fd/shared/models']
  return json;
}

