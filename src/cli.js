#!/usr/bin/env node

import chalk from "chalk";

import { getReportMdlinks } from "./cliMethods.js";
import { mdLinks } from "./index.js";

const [, , ...args] = process.argv;

const getInfoLink = (link) => {
  // console.log(`line7`);
  //   console.log(args.length);
  if (args.length === 1) {
    mdLinks(link, { validate: false }).then((e) => {
      e.forEach((data) => {
        console.log(
          chalk`{gray ${data.file}}  {cyan ${data.href} } {blue ${data.text}}`
        );
      });
    });
  }
};
getInfoLink(args[0]);

const getLinkValidate = (link, cliValidate) => {
  // console.log(link , cliValidate);
  if (args.length === 2) {
    if (cliValidate === "--validate") {
      mdLinks(link, { validate: true }).then((res) => {
        res.forEach((data) => {
          console.log(
            chalk`{blueBright ${data.file}} {cyanBright ${data.href}} {greenBright ${data.statusText}} {yellowBright ${data.status}}`
          );
        });
        // console.log(e)
      });
    } else if (cliValidate === "--stats") {
      mdLinks(link, { validate: true }).then((e) => {
        const reportStats = getReportMdlinks(e);
        // console.log(chalk `Total: { bgMagenta ${reportStats.total}}`);
        console.log( chalk `Total: {magentaBright ${reportStats.total}} \nUnique:{greenBright ${reportStats.unique}}`
        );
      });
    } else {
      console.log(chalk.redBright(`Write this \n1. name.md \n2. name.md --stats \n3. name.md --validate \n4. name.md --stats --validate`));
      
    }
  }
};

getLinkValidate(args[0], args[1]);

const getReportCli = (link, cliStats, cliValidate) => {
  //  console.log(links, cliStats, cliValidate);
  if (args.length === 3) {
    if (cliStats === "--stats" && cliValidate === "--validate") {
      mdLinks(link, { validate: true }).then((e) => {
        const report = getReportMdlinks(e);
        console.log(chalk `Total: {magentaBright ${report.total}}`);
        console.log(chalk`Unique: {greenBright ${report.unique}}`);
        console.log(chalk `Broquen: { redBright ${report.broken}}`);
      });
    } else {
      console.log(chalk.redBright(`Write this \n1. name.md \n2. name.md --stats \n3. name.md --validate \n4. name.md --stats --validate`));
    }
  }
  
};

getReportCli(args[0], args[1], args[2]);
