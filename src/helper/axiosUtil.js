import axios from 'axios';
// import Cookies from 'js-cookie';
// import apiKey from './apiKey';

const client = axios.create({ baseURL: 'http://localhost:3000' });
// const token = apiKey || Cookies.get('bzKey');

export default function request(options) {
  // client.defaults.headers.common.Authorization = `Token ${token}`;

  const onSuccess = (response) => response;
  const onError = (error) => error;
  return client(options).then(onSuccess).catch(onError);
}
