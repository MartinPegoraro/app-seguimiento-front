import axios from "axios";

const apiTruck = axios.create({ baseURL: 'https://transporte-production.up.railway.app/api/' })
const apiOrder = axios.create({ baseURL: 'https://transporte-production.up.railway.app/api/' })
const apiClient = axios.create({ baseURL: 'https://transporte-production.up.railway.app/api/' })


export { apiTruck, apiOrder, apiClient }