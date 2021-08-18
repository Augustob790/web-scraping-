import axios from 'axios';
import { ApiResponse } from '../../types/ApiResponse';
import { Notebook } from '../../types/Notebook';
import { IApiUpdateNotebook } from './IApiUpdateNotebook';

class AxiosUpdateNotebook implements IApiUpdateNotebook {
  private url = 'http://localhost:9000/v1/notebook/';

  async update(id: number, notebook: Notebook): Promise<ApiResponse> {
    const resultUpdate = await axios
      .put(`${this.url}${id}`, notebook)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });

    const responseUpdate: ApiResponse = {
      body: resultUpdate,
    };

    return responseUpdate;
  }
}

export default AxiosUpdateNotebook;
