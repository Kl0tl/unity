#! /usr/bin/env node

'use strict';

var clc = require('cli-color');
var optimist = require('optimist');

var pkg = require('../package.json');

var unity = require('../index');

var argv = optimist.argv;

var doc = [
  pkg.description,,

  'Usage:',,

  '  ' + clc.cyan('unity'),,

  'Options:',,

  '  ' + clc.magenta('-h --help') + '     Show this.',
  '  ' + clc.magenta('-v --version') + '  Show version number.',,
].join('\n');

if (argv.h || argv.help) {
  writeDocToStdout();
} else if (argv.v || argv.version) {
  writeVersionToStdout();
} else {
  process.stdout.write(unity() + '\n');
}

function writeDocToStdout() {
  process.stdout.write('\n' + doc + '\n');
}

function writeVersionToStdout() {
  process.stdout.write(pkg.version + '\n');
}
