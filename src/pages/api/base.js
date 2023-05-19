import axios from "axios";

const apiTruck = axios.create({ baseURL: 'http://192.168.0.12:8080/api/' })
const apiOrder = axios.create({ baseURL: 'http://192.168.0.12:8080/api/' })
const apiClient = axios.create({ baseURL: 'http://192.168.0.12:8080/api/' })


export { apiTruck, apiOrder, apiClient }