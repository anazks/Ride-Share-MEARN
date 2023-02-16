import axios from 'axios';
import { baseURL } from './Static';

const instance = axios.create({
    baseURL: baseURL,
  });

export default instance;