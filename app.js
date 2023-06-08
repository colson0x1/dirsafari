#!/usr/bin/env node

const fs = require('fs');
const util = require('util');
const importChalk = async () => {
  try {
    const chalk = await import('chalk');
    return chalk.default;
  } catch (error) {
    console.error('Failed to import chalk:', error);
    process.exit(1);
  }
};
const path = require('path');

// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
const { lstat } = fs.promises;
const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  const statPromises = filenames.map((filename) => {
    return lstat(path.join(targetDir, filename));
  });

  const allStats = await Promise.all(statPromises);
  const chalk = await importChalk();

  const folderColor = chalk.hex('#4285F4');
  const fileColor = chalk.hex('#FFA500');

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(fileColor(filenames[index]));
    } else {
      console.log(folderColor.bold(filenames[index]));
    }
  }
});

// Method #1
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }
//
//       resolve(stats);
//     });
//   });
// };
