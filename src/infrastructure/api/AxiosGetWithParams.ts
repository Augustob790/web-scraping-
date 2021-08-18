import axios from 'axios';
import { ApiResponse } from '../../types/ApiResponse';
import { IApiGetWithParams } from './IApiGetWithParams';

class AxiosGetWithParams implements IApiGetWithParams {
  private url = 'http://localhost:9000/v1/crawler/findById/';

  async getWithParams(id: number): Promise<ApiResponse> {
    const response = await axios
      .get(`${this.url}${id}`)
      .then((data) => {
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

export default AxiosGetWithParams;
