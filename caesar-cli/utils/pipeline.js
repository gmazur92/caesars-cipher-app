import { pipeline } from 'stream';
import { handleError } from '../error/errorHandler.js';
import * as stream from './streams/streams.js'

export const doPipeline = (params) => {
  {
    pipeline(
      stream.readStream(params.input),
      stream.transformStream(params.action, params.shift),
      stream.writeStream(params.output),
      err => {
        if (err)
          handleError(err, 1);
      },
    );
  }
};
