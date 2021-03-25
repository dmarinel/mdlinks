import {getPathAbsolute} from "./api.js"
let pathTest = "/mdpr/readme.md"



export const mdLinks = (inputPath , option = {validate: false}) => {
    return console.log(getPathAbsolute(inputPath));
}

mdLinks(pathTest)