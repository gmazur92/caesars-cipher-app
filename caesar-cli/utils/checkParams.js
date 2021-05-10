import { handleError } from '../error/errorHandler.js';
import path from 'path';

export const checkParams = (params) => {
  const acceptedActionParams = [ 'encode', 'decode' ];
  const {shift, action, input, output} = params;

  if(!shift) {
    handleError('Shift parameter is required', 9);
  }
  if (isNaN(shift)) {
    handleError('Shift parameter is not an integer type', 9);
  }
  if (!action) {
    handleError('Action parameter is required', 9);
  }
  if (!acceptedActionParams.includes(action)) {
    handleError('Please provide an accepted action type: encode or decode', 9);
  }
  if (input && output) {
    const inputFilePath = path.resolve(input);
    const outputFilePath = path.resolve(output);
    if (inputFilePath === outputFilePath) {
      handleError('Input and Output files can\'t be the same', 1);
    }
  }
};
