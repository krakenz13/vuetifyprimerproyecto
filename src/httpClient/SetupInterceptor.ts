import clientHTTP from './Api';
import TokenService from './TokenService';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
// patron adaptador de la  api  y token refresh
const setup = (store: any): void => {
    clientHTTP.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = TokenService.getLocalAccessToken();
      if (token) {
        clientHTTP.defaults.headers.common['Authorization'] = 'Bearer ' + token; // for Spring Boot back-end
        // config.headers['x-atokenccess-'] = token; // for Node.js Express back-end
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  clientHTTP.interceptors.response.use(
    (res: AxiosResponse) => {
      return res;
    },
    async (err: AxiosError) => {
      const originalConfig = err.config;

      if (originalConfig.url !== 'api/oauth/token' && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig) {
          //originalConfig = true;

          try {
            let refreshToken = TokenService.getLocalRefreshToken();
            const rs = await clientHTTP.post('api/oauth/token', {
              grant_type: 'refresh_token',
              client_id: 1,
              client_secret: 'K0JiA9TdF6DJkQl27m5vTkDTuovEvu3lqqfXbMZ9',
              refresh_token: refreshToken
            });

            const accessToken = rs.data;

            store.dispatch('auth/refreshToken', accessToken);
            TokenService.updateLocalAccessToken(accessToken);

            return clientHTTP(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );
};

export default setup;
