#!/usr/bin/env node
// const serve = require("local-api");
// serve();

import {program} from 'commander';
import {serveCommand} from './commands/serve';

program.addCommand(serveCommand);

program.parse(process.argv);
