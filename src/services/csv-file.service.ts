import csvParser, { CsvParser } from 'csv-parser';
import * as fs from 'fs';
import { FileColumnsModel } from './../models/index';
import Csv from './../another-models/csv.model';
import { uuid } from 'uuidv4';
import { providers, apiResponseWrapper } from './../helpers/index';

function sanitizeCsv(row, columns) {
  for(const key in row) {
    if (!columns.includes(key)) {
      delete row[key];
    }
  }

  columns.forEach((column) => {
    if (!Object.prototype.hasOwnProperty.call(row, column)) {
      row[column] = 'data not provided';
    }
  });
  return row;
}

function processRecord(record, columns) {
  const r = sanitizeCsv(record, columns);
  r['UUID'] = uuid();
  return r;
}

function insertRecordsToDatabase (data) {
  console.log('data: ', data);
  const response = {
    data: data.map((r) => { return { 'UUID': r.UUID, 'VIN': r.VIN } }),
    records: data.length
  };
  // Csv.insertMany(data);
  return apiResponseWrapper(response, true, null);
}

function getProviderColumns(providerName: string) {
  const providerColumns = providers[providerName];
  const columns = providerColumns ? providerColumns : providers['default'];
  return columns;
}



export function processCsv(providerName: string, filePath: string) {
  const columns = getProviderColumns(providerName);
  const response = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
    .on('error', reject)
    .pipe(csvParser())
    .on('data', record => {
      const row = processRecord(record, columns);
      response.push(row);
    })
    .on('end', () => {
      console.log('process finished...');
      resolve(insertRecordsToDatabase(response));
    });
  });
}



// export function validateCsvData