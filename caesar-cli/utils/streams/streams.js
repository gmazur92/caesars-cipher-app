import path from 'path';
import fs from 'fs';
import { handleError } from '../../error/errorHandler.js';
import { caesarCipher } from '../caesarCipher.js';
import { Transform } from 'stream';

export const readStream = (file) => {
  if (!file) {
    return process.stdin;
  }
  let emptyFile = true;
  const fullFilePath = path.resolve(file);
  const rs = fs.createReadStream(fullFilePath, 'utf-8');

  rs.once('data', () => {
    emptyFile = false;
  });

  rs.on('end', () => {
    if (emptyFile) {
      handleError('Input file is empty', 9);
    }
  });

  rs.on('error', (err) => {
    handleError(err, 1);
  });
  return rs;
};

export const writeStream = (file) => {
  if (!file) {
    return process.stdout;
  }

  const fullFilePath = path.resolve(file);
  const ws = fs.createWriteStream(fullFilePath, {flags: 'a'});

  ws.on('error', (err) => {
    handleError(err, 1);
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
