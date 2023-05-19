import { apiTruck, apiOrder, apiClient } from "./base";

export const truckApi = {
    getTruck: async () => {
        try {
            const response = await apiTruck.get('camiones')
            return response.data

        } catch (error) {
            console.log(error);

        }
    },
    getOrders: async () => {
        try {
            const response = await apiOrder.get('pedidos')
            return response.data

        } catch (error) {
            console.log(error);

        }
    },
    getClient: async () => {
        try {
            const response = await apiClient.get('clientes')
            return response.data
        } catch (error) {
            console.log(error);

        }
    },
    createOneClient: async (data) => {
        try {
            const response = await apiClient.post('clientes', data)
            return response

        } catch (error) {
            console.log(error);

        }
    },
    getOneClient: async (id) => {
        try {
            const response = await apiClient.get(`clientes/${id}`)
            console.log(response.data);
            return response.data

        } catch (error) {
            console.log(error);

        }
    },
    updateOneClient: async (id) => {
        try {
            // const response = await apiClient.patch(`clientes/${id}`)
            // console.log(response.data);
            // return response.data

        } catch (error) {
            console.log(error);

        }
    },
}