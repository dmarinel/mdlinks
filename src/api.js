import path from "path";
import fs from "fs"

export const getPathAbsoluteValidate = (inputPath) => 
{
 console.log(fs.existsSync(inputPath));
  if(path.isAbsolute(inputPath)){
    // return inputPath
    if (inputPath[0]==="/") {
      const str = inputPath.substr(1)
      return path.resolve(str)
    }
  }else{
    return path.resolve(inputPath)
  }
  
  
}
  // path.isAbsolute(inputPath) ? inputPath : path.resolve(inputPath);
