import data from "./data"
import {getPathAbsoluteValidate} from '../src/api'


describe("Obtain path absolute", () =>{
  test("get path Absolute", ()=>{
    expect(getPathAbsoluteValidate(data.path)).toBe(data.pathAbsolute)
  })

})
