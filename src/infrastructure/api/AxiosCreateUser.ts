import axios from 'axios';
import { ApiResponse } from '../../types/ApiResponse';
import { RegisterParams } from '../../types/RegisterParams';

class AxiosCreateuser {
  private url = 'http://localhost:9000/v1/user';

  async createUser(registerParams: RegisterParams): Promise<ApiResponse> {
    const resultCreateuser = await axios
      .post(this.url, registerParams)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error.response;
      });

    const responseCreateuser: ApiResponse = {
      body: resultCreateuser,
    };

    return responseCreateuser;
  }
}

export default AxiosCreateuser;
