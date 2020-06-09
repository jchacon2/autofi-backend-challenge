import { ApiResponseModel } from './../models/index';

export function apiResponseWrapper(d: any, s: boolean, m: string) {
  var apiResponse = new ApiResponseModel();
  apiResponse.data = d;
  apiResponse.success = s;
  apiResponse.message = m;
  return apiResponse;
}