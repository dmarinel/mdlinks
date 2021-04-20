
export  const getReportMdlinks = (arrayMdlink) =>{
    
    const resultMdlink = {}
    
    const uniqueHref = [...new Set(arrayMdlink.map(e=>e.href))].length
   
    const brokenHref = arrayMdlink.filter(e=>{

      if (e.statusText ==="fail") {
        // console.log(e.href);
        return e.href
      }
    }).length

    resultMdlink.total = arrayMdlink.length 
    resultMdlink.unique = uniqueHref
    resultMdlink.broken = brokenHref

    // console.log(resultMdlink);
    return resultMdlink
}

