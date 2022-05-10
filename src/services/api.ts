import axios from "axios";

import {API_URL_BASE} from '@env';
const api = axios.create({  
    baseURL: API_URL_BASE, 
}); 
 
export default api;    