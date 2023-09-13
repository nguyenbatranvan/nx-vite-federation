const {spawn} = require('node:child_process');
const chalk = require('chalk');
const fs = require('node:fs');
const {join} = require("path");
const __remotes = [];

function getDeepRemotes(remotes) {
  try {
    for (const item in remotes) {
      try {

        console.log('err', remotes[item])
        __remotes.push(remotes[item]);
        const jsonRemote = JSON.parse(fs.readFileSync(join(__dirname, '../apps/' + remotes[item] + '/federation.json')))
        if (jsonRemote.remotes && jsonRemote.remotes.length) {
          __remotes.push(...jsonRemote.remotes);
          getDeepRemotes(jsonRemote.remotes)
        } else {
        }
      }
      catch (e){

      }
    }

  } catch (e) {
    console.log(chalk.yellow(e.message))
  }
}

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
const {remotes, app} = args
// const target = args['t'] || 'serve';
const target = 'preview';
if (!app) {
  console.log(chalk.red('requires a app, example:'), chalk.bgCyan.white('npm run federation app=host'));
  return;
}
if (target !== 'preview' && target !== 'serve') {
  console.log(chalk.red('Invalid target! Target is "serve"|"preview". Example:'),
    chalk.bgCyan.white('npm run federation app=host t=preview'));
  return;
}

if (remotes === '*' || !remotes) {
  const json = JSON.parse(fs.readFileSync(join(__dirname, '../apps/' + app + '/federation.json')));
  getDeepRemotes()
  getDeepRemotes(json.remotes);
  spawn('nx', [target, app], {stdio: 'inherit', shell: true});
  [...new Set(__remotes)].forEach(item => {
    spawn('nx', ['preview', item], {stdio: 'inherit', shell: true});
  })
} else {
  getDeepRemotes(remotes.split(','))
  spawn('nx', [target, app], {stdio: 'inherit', shell: true});
  [...new Set(__remotes)].forEach(item => {
    spawn('nx', ['preview', item.trim()], {stdio: 'inherit', shell: true});
  })
}
