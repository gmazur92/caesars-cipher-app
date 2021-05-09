import { handleError } from '../error/errorHandler.js';
import path from 'path';
import fs from 'fs';

export const checkParams = (params) => {
  const acceptedActionParams = [ 'encode', 'decode' ];
  const {shift, action, input, output} = params;

  if(!shift) {
    handleError('Shift parameter should be provided', 9);
  }
  if (isNaN(shift)) {
    handleError('Shift parameter is not an integer type', 9);
  }
  if (!action) {
    handleError('Action parameter should be provided', 9);
  }
  if (!acceptedActionParams.includes(action)) {
    handleError('Please provide accepted action type - encode or decode', 9);
  }
  if (input) {
    const fullFilePath = path.resolve(input);
    try {
      fs.accessSync(fullFilePath, fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
      handleError('Input file doesn\'t exist', 9);
    }
  }
  if (output) {
    const fullFilePath = path.resolve(output);
    try {
      fs.accessSync(fullFilePath, fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
      handleError('Output file doesn\'t exist', 9);
    }
  }
  if (input && output) {
    const inputFilePath = path.resolve(input);
    const outputFilePath = path.resolve(output);
    if (inputFilePath === outputFilePath) {
      handleError('Input and Output files can\'t be the same', 9);
    }
  }
};
