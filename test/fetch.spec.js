import data from "./data";
import { getStatusByHref } from "../src/api";

// jest.mock("node-fetch")

describe("getStatusByHref is a function", () => {
  test("should be a function", () => {
    expect(typeof getStatusByHref).toBe("function");
  });

  test("status 200 y 404", () => {
    getStatusByHref(data.arrayObjByLink).then((value) => {
      expect(value).toEqual(data.arraStatusByHref);
    });
  });
});
