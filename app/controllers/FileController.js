import logger from '../util/logger';
import file from 'fs';

export default class FileController {
  constructor() {
  }

  writeDown(steamUserId) {
    return new Promise((resolve, reject) => {
      file.appendFile('/tmp/whitelist.cfg', steamUserId + '\r\n', function (err) {
        if (err) return console.log(err);
        return console.log('The steam user id has been succesfully written.');
      });
    });
  }
}
