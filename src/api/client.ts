import axios from 'axios';

const client = axios.create({
  baseURL: 'http://192.168.147.206:8989',
});

export default client;
