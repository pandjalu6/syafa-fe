import axios from 'axios';
import { apiEndpoint } from './global';

export const getServices = () => axios.get(`${apiEndpoint}/services`);

export const getGalery = () => axios.get(`${apiEndpoint}/galery`);

export const order = (data) => axios.post(`${apiEndpoint}/orders/order`, data)