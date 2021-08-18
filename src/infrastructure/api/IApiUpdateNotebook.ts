import { ApiResponse } from '../../types/ApiResponse';
import { Notebook } from '../../types/Notebook';

export interface IApiUpdateNotebook {
  update(id: number, notebook: Notebook): Promise<ApiResponse>;
}
