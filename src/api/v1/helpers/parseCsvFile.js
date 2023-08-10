import fs from 'fs';
import csvParser from 'csv-parser';

const parseCsvFile = (csvFilePath) => {
  let results = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csvParser({}))
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

export default parseCsvFile;
