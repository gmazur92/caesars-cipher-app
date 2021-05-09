import { pipeline } from 'stream';
import { handleError } from '../error/errorHandler.js';
import * as stream from './streams/streams.js';

export const doPipeline = (params) => {
  {
    pipeline(
      params.input ? stream.readStream(params.input) : process.stdin,
      stream.transformStream(params.action, params.shift),
      params.output ? stream.writeStream(params.output) : process.stdout,
      err => {
        if (err)
        handleError(err, 1);
      },
    );
  }
};
