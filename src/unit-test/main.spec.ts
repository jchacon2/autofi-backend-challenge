import { FileColumnsModel } from './../models/index';
import { processRecord } from './../services/index';

const DEFAULT_COLUMNS = Object.values(FileColumnsModel);

it('should remove extra column', () => {
  const modelWithExtraColumn = {
    VIN: '1234',
    Make: 'Toyota',
    Model: 'Corolla',
    Mileage: '1234',
    Year: '2020',
    Price: '20k',
    'Zip Code': '1234',
    'Create Date': '03/25/1995',
    'Update Date': '03/25/1995',
    'Extra Column': 'extra-column'
  };
  const record = processRecord(modelWithExtraColumn, DEFAULT_COLUMNS);
  expect(record).not.toHaveProperty('Extra Column');
});

it('should create missing column with default value', () => {
  const modelWithoutUpdateDateColumn = {
    VIN: '1234',
    Make: 'Toyota',
    Model: 'Corolla',
    Mileage: '1234',
    Year: '2020',
    Price: '20k',
    'Zip Code': '1234',
    'Create Date': '03/25/1995'
  };
  const record = processRecord(modelWithoutUpdateDateColumn, DEFAULT_COLUMNS);
  expect(record['Update Date']).toEqual('data not provided');
});