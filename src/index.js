import {
  getPathAbsoluteValidate,
  getArrayPathFileMd,
  readPathFile,
  getLinkByFile,
  getOptionByValidate,
} from "./api.js";

import {getReportMdlinks} from "./cliMethods.js"

let pathTest = "./mdpr\\mdpr1\\readme3.md";
// D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1

export const mdLinks = (inputPath, option = { validate: false }) => {
  return new Promise((resolve, reject) => {

    const pathAbsolute = getPathAbsoluteValidate(inputPath);

    if (pathAbsolute === "error1") {
      console.log(`This path does not exist`);
      reject (new Error("This path does not exist"));
    } else {
      const arrayArchive = getArrayPathFileMd(pathAbsolute);

      if (arrayArchive === "error2") {
        console.log("This archive isn't a markdown");
        reject (new Error("This archive isn't a markdown"));
      } else {
        const informationPathMd = getLinkByFile(readPathFile(arrayArchive));
        getOptionByValidate(informationPathMd, option)
          .then((res) => {
            // console.log(`line33`);
            // console.log(res);
            // getReportMdlinks(res)
            resolve(res)
            
          })
          .catch((e) => {
            console.error(e);
          });
      }
    }
  });
};

// console.log(`Index-line42`)

mdLinks(pathTest, { validate: true }).then(resolve=> resolve
  // console.log(resolve)
  )
