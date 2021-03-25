import path from "path";

export const getPathAbsolute = (inputPath) =>
  path.isAbsolute(inputPath) ? inputPath : path.resolve(inputPath);
