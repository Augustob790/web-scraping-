import { ApiResponse } from '../../types/ApiResponse';

export interface IApiDeleteNotebook {
  remove(id: number): Promise<ApiResponse>;
}
