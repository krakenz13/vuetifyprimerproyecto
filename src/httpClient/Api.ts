import axios, { AxiosInstance } from 'axios';

const clientHTTP: AxiosInstance = axios.create({
  baseURL: 'http://localhost/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default clientHTTP;
