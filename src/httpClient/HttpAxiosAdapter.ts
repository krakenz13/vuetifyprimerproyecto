import { AxiosRequestConfig, AxiosResponse } from 'axios';
import clientHTTP from './Api';

class HttpAxiosAdapter {

  constructor() {}

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await clientHTTP.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await clientHTTP.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await clientHTTP.put<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await clientHTTP.delete<T>(url, config);
    return response.data;
  }
}

export default HttpAxiosAdapter;