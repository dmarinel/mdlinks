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
    console.log(`linea49`);
    console.log(arrayFileMd);
    return arrayFileMd;
  } else {
    // This is case is archive .md
    if (extname(pathAbsolute) === ".md") {
      arrayFileMd.push(pathAbsolute);
      console.log(`line55`);
      console.log(arrayFileMd);
      return arrayFileMd;
    } else {
      // error:"This archive isn't a markdown");
      return "error2";
    }
  }
};

export const readPathFile = (pathFile) => {
  const array = []
   const read = pathFile.map((element) =>{
     let pathFile = element
     let readFile = readFileSync(element, { encoding: "utf-8", flag: "r" })
    
     array.push({
       file:pathFile,
       read: readFile
     })
   }
  );
  return array
};

export const getLinkFile = (arrayFiles) =>{

  const newArray = []
  const links = arrayFiles.map(e=>{
    let searchNameLinksMd = /\[([\w\s|.\d]+)\]\(((?:\/|https?:\/\/)[\w./?=#&_%~,.:-]+)\)/mg

    const getLink = e.read.match(searchNameLinksMd)
    const getLink1 = getLink.map(e=>{
      return  e.split("(")[1].split(")")[0]
    })
    // console.log(`line92`);
    //   console.log(getLink1);

    const readFile = e.file
    newArray.push({
      file: readFile,
      link: getLink1
    })
    // console.log(`line86`);
    // console.log(getLink);
  })
  console.log(`line101`);
    console.log(newArray);
  
}