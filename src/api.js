import { resolve, extname, isAbsolute } from "path";
import { readdirSync, existsSync, statSync, readFileSync } from "fs";

export const getPathAbsoluteValidate = (inputPath) => {
  if (isAbsolute(inputPath)) {
    if (inputPath[0] === "/") {
      let pathStr = inputPath.substr(1);
      let getPathAbsolute = resolve(pathStr);
      console.log(getPathAbsolute);
      let pathAbsoluteValidate = existsSync(getPathAbsolute)
        ? getPath
        : "error1";
        console.log(pathAbsoluteValidate);
      return pathAbsoluteValidate;
    }
  } else {
    let getPathAbsolute = resolve(inputPath);
    let pathAbsoluteValidate = existsSync(getPathAbsolute)
      ? getPathAbsolute
      : "error1";
      console.log(pathAbsoluteValidate);
    return pathAbsoluteValidate;
  }
};

export const getArrayPathArchive= (pathAbsolute) => {
  console.log(`line27`);
  console.log(pathAbsolute);
  let arrayArchiveMd = [];
  let stats = statSync(pathAbsolute);
  let stats2 = stats.isDirectory();
  console.log(stats2);
  if (stats2) {
    let list = readdirSync(pathAbsolute);
    // console.log(list);
    // console.log(pathAbsolute);
    list.forEach((file) => {
      let path2 = resolve(`${pathAbsolute}/${file}`);
      let stats = statSync(path2);
      if (stats && stats.isDirectory()) {
        arrayArchiveMd = arrayArchiveMd.concat(isPathDirectory(path2));
      } else {
        if (extname(path2) === ".md") {
          arrayArchiveMd.push(path2);
        }
      }
    });
    console.log("line45");
    console.log(arrayArchiveMd);
    return arrayArchiveMd;
  } else {
    if (extname(pathAbsolute) ===".md") {
      arrayArchiveMd.push(pathAbsolute);
      console.log("line50");
      console.log(arrayArchiveMd);
      return arrayArchiveMd;
    }else{
      // console.log("This archive isn't a markdown");
      return "error2"
    }
  }
};

export const readPathFile = (pathFile) => {
  return pathFile.map((element) =>
    readFileSync(element, { encoding: "utf-8", flag: "r" })
  );
};
