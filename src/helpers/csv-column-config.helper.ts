import { FileColumnsModel } from './../models/columns.model';

/**
 * columns model for different providers
 */
export const providers = {
  'default': [
    FileColumnsModel.uuid,
    FileColumnsModel.vin,
    FileColumnsModel.make,
    FileColumnsModel.model,
    FileColumnsModel.mileage,
    FileColumnsModel.year,
    FileColumnsModel.price,
    FileColumnsModel.zipCode,
    FileColumnsModel.createDate,
    FileColumnsModel.updateDate,
  ],
  'provider 1': [
    FileColumnsModel.uuid,
    FileColumnsModel.vin,
    FileColumnsModel.make,
    FileColumnsModel.model,
    FileColumnsModel.mileage,
    FileColumnsModel.year,
    FileColumnsModel.price,
    FileColumnsModel.zipCode,
    FileColumnsModel.createDate,
    FileColumnsModel.updateDate,
  ],
  'provider 2': [
    FileColumnsModel.uuid,
    FileColumnsModel.vin,
    FileColumnsModel.make,
    FileColumnsModel.model,
    FileColumnsModel.mileage,
    FileColumnsModel.year,
    FileColumnsModel.price,
    FileColumnsModel.zipCode,
    FileColumnsModel.createDate
  ]
};