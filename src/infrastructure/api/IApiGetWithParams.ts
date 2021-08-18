import { ApiResponse } from '../../types/ApiResponse';

export interface IApiGetWithParams {
  getWithParams(id: number): Promise<ApiResponse>;
}
