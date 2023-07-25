import axios, { AxiosInstance } from 'axios'

const client: AxiosInstance = axios.create({
  baseURL: 'http://localhost/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default client
