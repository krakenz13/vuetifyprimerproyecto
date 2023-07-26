import client from '../clients/Client'
import TokenService from './TokenService'
import { Module } from 'vuex'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import AuthState from '../interfaces/AuthState'
import RootState from '../interfaces/RootState'

export const interceptor = (store: Module<AuthState, RootState>): void => {
  client.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = TokenService.getLocalAccessToken()
      if (token) {
        client.defaults.headers.common['Authorization'] = 'Bearer ' + token
      }
      client.defaults.headers.common['Authorization'] = 'Daniel-y-Laura '
      console.log('interceptor request', client.defaults.headers)
      return config
    },
    (error: AxiosError) => {
      return Promise.reject(error)
    },
  )

  client.interceptors.response.use(
    (res: AxiosResponse) => {
      console.log('interceptor response', res)
      return res
    },
    async (err: AxiosError) => {
      const originalConfig: AxiosRequestConfig = err.config

      if (originalConfig.url !== 'api/oauth/token' && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig) {
          //originalConfig._retry = true
          try {
            const refreshToken: string | null = TokenService.getLocalRefreshToken()
            const rs = await client.post('api/oauth/token', {
              grant_type: 'refresh_token',
              client_id: 1,
              client_secret: 'K0JiA9TdF6DJkQl27m5vTkDTuovEvu3lqqfXbMZ9',
              refresh_token: refreshToken,
            })

            const accessToken = rs.data

            store.dispatch('auth/refreshToken', accessToken)
            TokenService.updateLocalAccessToken(accessToken)

            return client(originalConfig)
          } catch (_error) {
            return Promise.reject(_error)
          }
        }
      }

      return Promise.reject(err)
    },
  )
}
