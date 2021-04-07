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
      let stat = statSync(pathFile);
      if (stat && stat.isDirectory()) {
        arrayFileMd = arrayFileMd.concat(getArrayPathFileMd(pathFile));
      } else {
        if (extname(pathFile) === ".md") {
          arrayFileMd.push(pathFile);
        }
      }
    });
    // console.log(`linea49`);
    // console.log(arrayFileMd);
    return arrayFileMd;
  } else {
    // This is case is archive .md
    if (extname(pathAbsolute) === ".md") {
      arrayFileMd.push(pathAbsolute);
      // console.log(`line55`);
      // console.log(arrayFileMd);
      return arrayFileMd;
    } else {
      // error:"This archive isn't a markdown");
      return "error2";
    }
  }
};

export const readPathFile = (arrayPathFile) => {
  console.log('line65');
  console.log(arrayPathFile);

  const read = arrayPathFile.map((element) => {

    let pathFile = element;
    let readFile = readFileSync(element, { encoding: "utf-8", flag: "r" });
    const obj = {
      file: pathFile,
      read: readFile,
    }
    // console.log(`line74`);
    // console.log(obj);
    return obj
  });
  // console.log(`linea78`);
  // console.log(read);
  return read;
};

export const getLinkFile = (arrayFiles) => {
  console.log(`line81`);
  console.log(arrayFiles);

   arrayFiles.forEach((e) => {
    const file = e.file
    // console.log(e.file);
    let searchNameLinksMd = /\[([\w\s|.\d]+)\]\(((?:\/|https?:\/\/)[\w./?=#&_%~,.:-]+)\)/gm;

    const getTextLink = e.read.match(searchNameLinksMd);
    const getLink1 = getTextLink.map((e) => {
      const obj1 = {
        url:e.split("(")[1].split(")")[0],
        text: e.split("]")[0].split("[")[1],
        file:file
      }
      // console.log(obj1);
      return obj1
    });

    console.log(`line101`);
    console.log(getLink1);
    return getLink1
  }
  );
};
