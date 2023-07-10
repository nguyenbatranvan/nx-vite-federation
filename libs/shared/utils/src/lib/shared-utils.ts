import path from "path";
import process from "process";
// @ts-ignore
import data from "../../../../../tsconfig.base.json";

const paths = data.compilerOptions.paths;

export const resolveVite= {
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
}
