import axios from 'axios';
import { ApiResponse } from '../../types/ApiResponse';
import { IApiDeleteNotebook } from './IApiDeleteNotebook';

class AxiosDeleteNotebook implements IApiDeleteNotebook {
  private url = 'http://localhost:9000/v1/';

  async remove(id: number): Promise<ApiResponse> {
    const resultDelete = await axios
      .delete(`${this.url}notebook/${id}/remove`)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });

    const responseRemove: ApiResponse = {
      body: resultDelete,
    };

    return responseRemove;
  }
}

export default AxiosDeleteNotebook;
