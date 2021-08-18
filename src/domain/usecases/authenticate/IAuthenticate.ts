import { ApiResponse } from '../../../types/ApiResponse';
import { AuthParams } from '../../../types/AuthParams';

export interface IAuthenticate {
  auth(params: AuthParams): Promise<ApiResponse>;
}
