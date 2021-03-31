import data from "./data";
import { getPathAbsoluteValidate, getArrayPathFileMd } from "../src/api";

describe("GetPathAbsoluteValidate is a function", () => {
  it("should be a function", () => {
    expect(typeof getPathAbsoluteValidate).toBe("function");
  });
  it("get path Absolute of archive", () => {
    expect(getPathAbsoluteValidate(data.path1)).toEqual(data.pathAbsolute1);
  });

  it("get path Absolute of directory", () => {
    expect(getPathAbsoluteValidate(data.path2)).toEqual(data.pathAbsolute2);
  });

  it("Get error when archive doesn't exist ", () => {
    expect(getPathAbsoluteValidate(data.path3)).toEqual(data.pathAbsolute3);
  });
});
