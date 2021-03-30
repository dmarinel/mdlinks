import { getPathAbsoluteValidate, isPathDirectory, readPathFile } from "./api.js";
let pathTest = "mdpr\\mdpr1\\readme3.md";

export const mdLinks = (inputPath, option = { validate: false }) => {
    let pathAbsolute = getPathAbsoluteValidate(inputPath)
    // console.log(pathAbsolute);
    
    if (pathAbsolute === "This path isn't exist") {
      console.log(`error`);
    }else{
      let isDirectoryPath = isPathDirectory(pathAbsolute)
      let getFile = readPathFile(isDirectoryPath)
      console.log(getFile);
      return isDirectoryPath
    }


    
    

};

mdLinks(pathTest);
