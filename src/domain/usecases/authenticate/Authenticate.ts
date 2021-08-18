import { IAuthenticate } from './IAuthenticate';
import { IApiPostRequest } from '../../../infrastructure/api/IApiPostRequest';
import { AuthParams } from '../../../types/AuthParams';
import { ApiResponse } from '../../../types/ApiResponse';

class Authenticate implements IAuthenticate {
  constructor(private apiRequest: IApiPostRequest) {}

  async auth(params: AuthParams): Promise<ApiResponse> {
    return this.apiRequest.postRequest(params);
  }
}

export default Authenticate;
