import { resolve, extname, isAbsolute } from "path";
import { readdirSync, existsSync, statSync, readFileSync } from "fs";

export const getPathAbsoluteValidate = (inputPath) => {

  if (isAbsolute(inputPath)) {

    if (inputPath[0] === "/") {
      let pathStr = inputPath.substr(1);
      let getPathAbsolute = resolve(pathStr);
      // console.log(getPathAbsolute);
      let pathAbsoluteValidate = existsSync(getPathAbsolute)
        ? getPathAbsolute
        : "error1";
      console.log(pathAbsoluteValidate);
      return pathAbsoluteValidate;
    }
  } else {
    let getPathAbsolute = resolve(inputPath);
    let pathAbsoluteValidate = existsSync(getPathAbsolute)
      ? getPathAbsolute
      : "error1";
    // console.log(pathAbsoluteValidate);
    return pathAbsoluteValidate;
  }
};

export const getArrayPathFileMd = (pathAbsolute) => {
  let arrayFileMd = [];
  let isPathDirectory = statSync(pathAbsolute).isDirectory();
  // console.log(isPathDirectory);

  if (isPathDirectory) {
    let filesList = readdirSync(pathAbsolute);
    // console.log(`line33`);
    // console.table(filesList);
    filesList.forEach((file) => {
      let pathFile = resolve(`${pathAbsolute}/${file}`);
      // console.log(pathFile);
      let stat = statSync(pathFile)
      if (stat && stat.isDirectory()) {
        arrayFileMd = arrayFileMd.concat(getArrayPathFileMd(pathFile));
      } else {
        if (extname(pathFile) === ".md") {
          arrayFileMd.push(pathFile);
        }
      }
    });
    console.log(arrayFileMd);
    return arrayFileMd;
  } else {
    // This is case is archive .md
    if (extname(pathAbsolute) === ".md") {
      arrayFileMd.push(pathAbsolute);
      return arrayFileMd;
    } else {
      // error:"This archive isn't a markdown");
      return "error2";
    }
  }
};

export const readPathFile = (pathFile) => {
  return pathFile.map((element) =>
    readFileSync(element, { encoding: "utf-8", flag: "r" })
  );
};

export const getLinkFile = (arrayFiles) =>{
  let searchLinksMd = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]+)+\/?/gm
  const links = arrayFiles.map(e=>e.match(searchLinksMd))

  console.log(`linea72`);
  console.log(links);
  // const array = []
  
}