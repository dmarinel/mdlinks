
const getReportMdlink = (arrayMdlink) =>{
    // console.log(`cli-line40`);
    // console.log(arrayMdlink);
    const resultMdlink = {}
    
    const uniqueHref = [...new Set(arrayMdlink.map(e=>e.href))].length
   
    const brokenHref = arrayMdlink.filter(e=>{
      if (e.statusText ==="fail") {
        return e.href
      }
    }).length

    resultMdlink.total = arrayMdlink.length 
    resultMdlink.unique = uniqueHref
    resultMdlink.broken = brokenHref
    
    console.log(resultMdlink);
    return resultMdlink
}

