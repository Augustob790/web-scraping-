import axios from 'axios';
import { ApiResponse } from '../../types/ApiResponse';
import { IApiGetRequest } from './IApiGetRequest';

class AxiosGetRequest implements IApiGetRequest {
  private api = 'http://localhost:9000/v1/notebook';

  async getRequest(): Promise<ApiResponse> {
    const response = await axios
      .get(this.api)
      .then((data) => 
      {
        console.log(data)
        return data;
      })
      .catch((error) => {
        return error;
      });

    const apiResponse: ApiResponse = {
      body: response,
    };

    return apiResponse;
  }
}

export default AxiosGetRequest;
