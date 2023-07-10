const {spawn} = require('node:child_process');
const chalk = require('chalk');
const fs = require('node:fs');
const {join} = require("path");
console.log(__dirname)

function getArgs() {
  const args = {};
  process.argv
    .slice(2, process.argv.length)
    .forEach(arg => {
      const longArg = arg.split('=');
      args[longArg[0]] = longArg.length > 1 ? longArg[1] : true;
    });
  return args;
}

const args = getArgs();


let cmd = 'npm';
if (process.platform === 'win32') {
  cmd = 'npm.cmd';    // https://github.com/nodejs/node/issues/3675
}
const projects = args['remotes']
const app = args['app'];
// if (!projects) {
//   console.log(chalk.red('requires a project, example:'), chalk.bgCyan.white('npm run federation project=remote'));
//   return;
// }
if (!app) {
  console.log(chalk.red('requires a app, example:'), chalk.bgCyan.white('npm run federation app=host'));
  return;
}
if (projects === '*' || !projects) {
  const json = JSON.parse(fs.readFileSync(join(__dirname, '../apps/' + app + '/federation.json')));
  const remotes = json.remotes;
  spawn('nx', ['serve', app], {stdio: 'inherit'});
  remotes.forEach(item => {
    spawn('nx', ['preview', item], {stdio: 'inherit'});
  })
} else {
  spawn('nx', ['serve', app], {stdio: 'inherit'});
  projects.split(',').forEach(item => {
    spawn('nx', ['preview', item.trim()], {stdio: 'inherit'});
  })
}
