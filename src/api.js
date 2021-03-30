import { resolve, extname, isAbsolute } from "path";
import { readdirSync, existsSync, statSync, readFileSync } from "fs";

export const getPathAbsoluteValidate = (inputPath) => {
  if (isAbsolute(inputPath)) {
    if (inputPath[0] === "/") {
      let pathStr = inputPath.substr(1);
      let getPathAbsolute = resolve(pathStr);
      let pathAbsoluteValidate = existsSync(getPathAbsolute)
        ? getPath
        : "This path isn't exist";
      return pathAbsoluteValidate;
    }
  } else {
    let getPathAbsolute = resolve(inputPath);
    let pathAbsoluteValidate = existsSync(getPathAbsolute)
      ? getPathAbsolute
      : "This path isn't exist";
    return pathAbsoluteValidate;
  }
};


export const isPathDirectory = (pathAb) => {
  let total = [];
  let stats1 = statSync(pathAb);
  let stats2 = stats1.isDirectory();
  if (stats2) {
    let list = readdirSync(pathAb);
    // console.log(list);
    // console.log(pathAb);
    list.forEach((file) => {
      let path2 = resolve(`${pathAb}/${file}`);
      let stats = statSync(path2);
      if (stats && stats.isDirectory()) {
        total = total.concat(isPathDirectory(path2));
      } else {
        if (path.extname(path2) === ".md") {
          total.push(path2);
        }
      }
    });
    // console.log(total);
    return total;
  } else {
    if (extname(pathAb)) {
      total.push(pathAb);
      // console.log(total);
      return total;
    }
  }
};

export const readPathFile = (pathFile) => {
  return pathFile.map((element) =>
    readFileSync(element, { encoding: "utf-8", flag: "r" })
  );
};
