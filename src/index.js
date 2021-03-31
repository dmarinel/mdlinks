import { getPathAbsoluteValidate, getArrayPathArchive, readPathFile } from "./api.js";

let pathTest = "mdpr\\mdpr1\\readme2.md";

export const mdLinks = (inputPath, option = { validate: false }) => {

    let pathAbsolute = getPathAbsoluteValidate(inputPath)
    

    if (pathAbsolute === "error1") {
      console.log(`This path does not exist`);
      return "This path does not exist"
    }else{
      let arrayArchive = getArrayPathArchive(pathAbsolute)
      if (arrayArchive === "error2") {
        console.log("This archive isn't a markdown");
        return "This archive isn't a markdown"
      } else{
        let getFile = readPathFile(arrayArchive)
      }
    }



};

mdLinks(pathTest);
