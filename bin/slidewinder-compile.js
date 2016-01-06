#!/usr/bin/env node
;
var program, sw;

program = require('commander');

sw = require('../lib/slidewinder_lib.js');

program.option('-i, --input <file>', 'Input specification file to compile').option('-o, --output <file>', 'Path to save output (will create directory)').parse(process.argv);

program.specification = sw.yamlToSpec(program.input);

sw.compile(program.specification, program.output);

process.exit();