import {getPathAbsoluteValidate} from "./api.js"
let pathTest = "readme2.md"


export const mdLinks = (inputPath , option = {validate: false}) => {
    return console.log(getPathAbsoluteValidate(inputPath));
}

mdLinks(pathTest)