const data = {
  path1: "mdpr\\readme1.md",
  pathAbsolute1:
    "D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\readme1.md",
  path2: "mdpr\\mdpr1",
  pathAbsolute2:
    "D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1",
  path3: "mdpr\\mdpr2",
  pathAbsolute3: "error1",

  path4:
    "D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme3.md",
  arrayPath: [
    "D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme3.md",
  ],

  path5: "D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr",
  arrayPath1: [
    "D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme2.md",
    "D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme3.md",
    "D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\readme1.md",
  ],
  path6:
    "D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\holaMundo.txt",
  arrayPath2: "error2",
  arrayObjRead: [
    {
      file: 'D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme3.md', 
      read: '# hola readme 3\r\n' +
        '# hola readme 33333333\r\n' +
        '\r\n' +
        '[Markdown](https://es.wikipedia.org/wiki/Markdown).\r\n' +
        '\r\n' +
        '[Node.js](https://nodejs.org/).\r\n' +
        '[Node.js](https://nodejs.org/).\r\n' +
        '[Node.js](https://nodejs.org/).\r\n' +
        '[error](http://www.abab.com.pe/aldo-bruno).'
    }
  ],
  arrayObjByLink: [
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme3.md'  
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme3.md'  
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme3.md'  
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme3.md'  
    },
    {
      href: 'http://www.abab.com.pe/aldo-bruno',
      text: 'error',
      file: 'D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme3.md'  
    }
  ],
  arraStatusByHref: [
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme3.md',
      status: 200,
      statusText: 'ok'
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme3.md',
      status: 200,
      statusText: 'ok'
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme3.md',
      status: 200,
      statusText: 'ok'
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme3.md',
      status: 200,
      statusText: 'ok'
    },
    {
      href: 'http://www.abab.com.pe/aldo-bruno',
      text: 'error',
      file: 'D:\\Aprendizaje continuo\\Laboratoria\\1. Proyectos\\mdlinks\\mdpr\\mdpr1\\readme3.md',
      status: 404,
      statusText: 'fail'
    }
  ]
  
};

export default data;
