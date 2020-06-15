import { ApiResponseModel } from './../models/index';

/**
 * 
 * @param d data to return
 * @param s status of the process (true = success / false = failed)
 * @param m message to display to the user
 */
export function apiResponseWrapper(d: any, s: boolean, m: string) {
  var apiResponse = new ApiResponseModel();
  apiResponse.data = d;
  apiResponse.success = s;
  apiResponse.message = m;
  return apiResponse;
}