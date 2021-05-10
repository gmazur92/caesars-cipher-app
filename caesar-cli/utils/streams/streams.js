import path from 'path';
import fs from 'fs';
import { handleError } from '../../error/errorHandler.js';
import { caesarCipher } from '../caesarCipher.js';
import { Transform } from 'stream';

export const readStream = (file) => {
  let emptyFile = true;
  const fullFilePath = path.resolve(file);
  const rs = fs.createReadStream(fullFilePath, {flags: 'r'});
  rs.once('data', () => {
    emptyFile = false;
  });

  rs.on('end', () => {
    if (emptyFile) {
      handleError('Input file is empty', 9);
    }
  });
  rs.on('error', (err) => {
    if (err) {
      handleError('Either the file does not exist or there is a permission problem', 9);
    }
  });
  return rs;
};

export const writeStream = (file) => {
  const fullFilePath = path.resolve(file);
  const ws = fs.createWriteStream(fullFilePath, {flags: fs.constants.O_WRONLY | fs.constants.O_APPEND});
  ws.on('error', (err) => {
    if (err) {
      handleError('Either the file does not exist or there is a permission problem', 9);
    }
  });
  return ws;
};

export const transformStream = (action, shift) => {
  return new Transform({
    transform(chunk, _, cb) {
      this.push(caesarCipher(chunk.toString(), shift, action));
      this.push('\n');
      cb();
    },
  });
};
