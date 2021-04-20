

import data from "./data";
import {
  getPathAbsoluteValidate,
  getArrayPathFileMd,
  readPathFile,
  getLinkByFile
} from "../src/api";



describe("GetPathAbsoluteValidate is a function", () => {
  test("should be a function", () => {
    expect(typeof getPathAbsoluteValidate).toBe("function");
  });
  test("get path Absolute of archive", () => {
    expect(getPathAbsoluteValidate(data.path1)).toEqual(data.pathAbsolute1);
  });

  test("get path Absolute of directory", () => {
    expect(getPathAbsoluteValidate(data.path2)).toEqual(data.pathAbsolute2);
  });

  test("Get error when path doesn't exist ", () => {
    expect(getPathAbsoluteValidate(data.path3)).toEqual(data.pathAbsolute3);
  });
});

describe("getArrayPathFile is a function", () => {
  test("should be a function", () => {
    expect(typeof getArrayPathFileMd).toBe("function");
  });

  test("Get array when path is archive .md", () => {
    expect(getArrayPathFileMd(data.path4)).toEqual(data.arrayPath);
  });

  test("Get array when path is directory", () => {
    expect(getArrayPathFileMd(data.path5)).toEqual(data.arrayPath1);
  });

  test("Get error when This archive isn't a markdown", () => {
    expect(getArrayPathFileMd(data.path6)).toEqual(data.arrayPath2);
  });
});

describe("readPathFile is a function", () => {
  test("should be a function", () => {
    expect(typeof readPathFile).toBe("function");
  });
  test("Read path of archive .md ", () => {
    expect(readPathFile(data.arrayPath)).toEqual(data.arrayObjRead);
  });
});

describe("getLinkByFile is a function", () => {
  test("should be a function", () => {
    expect(typeof getLinkByFile).toBe("function");
  });
  test("Read path of archive .md ", () => {
    expect(getLinkByFile(data.arrayObjRead)).toEqual(data.arrayObjByLink);
  });
});



