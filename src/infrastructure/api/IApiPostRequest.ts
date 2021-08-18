import { ApiResponse } from '../../types/ApiResponse';
import { AuthParams } from '../../types/AuthParams';

export interface IApiPostRequest {
  postRequest(params: AuthParams): Promise<ApiResponse>;
}
