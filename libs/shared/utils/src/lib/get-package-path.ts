import {join} from "path";
import process from "process";

export const getPackagePath = (path: string): string => {
  return join(process.cwd(), path)

}
