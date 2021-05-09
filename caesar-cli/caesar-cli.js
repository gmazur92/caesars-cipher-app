import { Command } from 'commander/esm.mjs';
import { checkParams } from './utils/checkParams.js';
import { doPipeline } from './utils/pipeline.js';

const program = new Command();

program.storeOptionsAsProperties(false).
  option('-a, --action <type>', 'Choose the action: encode or decode').
  option('-s, --shift <type>', 'Enter a shift: encode or decode').
  option('-i, --input <type>', 'Enter the input file').
  option('-o, --output <type>', 'Enter the output file').
  action(
    () => {
      const params = program.opts()
      checkParams(params);
      doPipeline(params);
    },
  ).

  parse(process.argv);
