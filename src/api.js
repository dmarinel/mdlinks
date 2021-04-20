import { resolve, extname, isAbsolute } from "path";
import { readdirSync, existsSync, statSync, readFileSync } from "fs";
import fetch from "node-fetch";

export const getPathAbsoluteValidate = (inputPath) => {
  if (isAbsolute(inputPath)) {
    if (inputPath[0] === "/") {
      let pathStr = inputPath.substr(1);
      let getPathAbsolute = resolve(pathStr);
      // console.log(getPathAbsolute);
      let pathAbsoluteValidate = existsSync(getPathAbsolute)
        ? getPathAbsolute
        : "error1";
      // console.log(pathAbsoluteValidate);
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
  // console.log("line 29");
  // console.log(pathAbsolute);

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
    // console.log(`linea52`);
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
      // console.log("error2");
      return "error2";
    }
  }
};

export const readPathFile = (arrayPathFile) => {
  // console.log('line65');
  // console.log(arrayPathFile);

  const readFile = arrayPathFile.map((path) => {
    let pathFileMd = path;
    let readFileMd = readFileSync(path, { encoding: "utf-8", flag: "r" });
    const obj = {
      file: pathFileMd,
      read: readFileMd,
    };
    // console.log(`line74`);
    // console.log(obj);
    return obj;
  });
  // console.log(`linea78`);
  // console.log(readFile);
  return readFile;
};

export const getLinkByFile = (arrayFiles) => {
  // console.log(`linea91`);
  // console.log(arrayFiles);

  const infoPath = arrayFiles.map((e) => {
    const file = e.file;
    // console.log(e.file);
    let searchNameLinksMd = /\[([\w\s|.\d]+)\]\(((?:\/|https?:\/\/)[\w./?=#&_%~,.:-]+)\)/gm;

    const getTextLink = e.read.match(searchNameLinksMd);
    const getLink1 = getTextLink.map((e) => {
      const obj1 = {
        href: e.split("(")[1].split(")")[0],
        text: e.split("]")[0].split("[")[1],
        file: file,
      };
      // console.log(obj1);
      return obj1;
    });

    // console.log(`line105`);
    // console.log(getLink1);

    return getLink1;
  });
  // console.log(`linea115`);
  // console.log(infoPath.flat());
  return infoPath.flat();
};

export const getStatusByHref = (array) => {
  // console.log(`Api line122`);
  // console.log(array);

  const data = array.map((link) =>
    fetch(link.href)
      .then((response) => {
        link.status = response.status;
        link.statusText = response.status === 200 ? "ok" : "fail";
        
        return link;
      })
      .catch((error) => {
        console.log(error);
      })
  );
    
    // console.log(data);
  return Promise.all(data);
};

export const getOptionByValidate = (informationPath, option) => {
  console.log(`line112`);
  console.log(informationPath);
  // console.log(option.validate)
  if (option.validate === false) {
    // console.log(`line123`);
    // console.log(informationPath);

    return Promise.resolve(informationPath);
  } else {
    // console.log(`validate es true `);
    return getStatusByHref(informationPath);
  }
};
