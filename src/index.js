import {
  getPathAbsoluteValidate,
  getArrayPathFileMd,
  readPathFile,
  getLinkFile
} from "./api.js";

let pathTest = "mdpr";
// D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1

export const mdLinks = (inputPath, option = { validate: false }) => {
  const pathAbsolute = getPathAbsoluteValidate(inputPath);

  if (pathAbsolute === "error1") {
    console.log(`This path does not exist`);
    return "This path does not exist";
  } else {
    const arrayArchive = getArrayPathFileMd(pathAbsolute);

    if (arrayArchive === "error2") {
      console.log("This archive isn't a markdown");
      return "This archive isn't a markdown";
    } else {
      const  getFile = readPathFile(arrayArchive);
      getLinkFile(getFile)

    }
  }
};

mdLinks(pathTest);
