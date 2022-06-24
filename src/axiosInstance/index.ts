import axios, { AxiosRequestConfig } from 'axios';

import { User } from 'src/type/types';
import { baseUrl } from './constants';

export function getJWTHeader(user: User): Record<string, string> {
  return { Authorization: `Bearer ${user.token}` };
}

const config: AxiosRequestConfig = { baseURL: baseUrl };
export const axiosInstance = axios.create(config);
