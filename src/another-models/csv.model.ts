import mongoose, { Schema, Document } from 'mongoose';

const CsvSchema: Schema = new Schema({
  UUID: {
    type: String,
    default: 'data not provided'
  },
  VIN: {
    type: String,
    default: 'data not provided'
  },
  Make: {
    type: String,
    default: 'data not provided'
  },
  Model: {
    type: String,
    default: 'data not provided'
  },
  Mileage: {
    type: String,
    default: 'data not provided'
  },
  Year: {
    type: String,
    default: 'data not provided'
  },
  Price: {
    type: String,
    default: 'data not provided'
  },
  'Zip Code': {
    type: String,
    default: 'data not provided'
  },
  'Create Date': {
    type: String,
    default: 'data not provided'
  },
  'Update Date': {
    type: String,
    default: 'data not provided'
  }
});

export default mongoose.model('Csv', CsvSchema);
