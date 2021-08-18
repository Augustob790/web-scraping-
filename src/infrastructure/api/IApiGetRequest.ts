import { ApiResponse } from '../../types/ApiResponse';

export interface IApiGetRequest {
  getRequest(): Promise<ApiResponse>;
}
