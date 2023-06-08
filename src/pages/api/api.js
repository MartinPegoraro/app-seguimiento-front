import { apiTruck, apiOrder, apiClient } from "./base";

export const apiRest = {

    // CRUD DE CAMIONES ------------------------------------------------------
    createOneTruck: async (formData) => {
        try {
            const response = await apiTruck.post('camiones', formData)
            return response
        } catch (error) {
            console.log(error);
        }
    },

    getTruck: async () => {
        try {
            const response = await apiTruck.get('camiones')
            return response.data

        } catch (error) {
            console.log(error);

        }
    },
    getOneTruck: async (id) => {
        try {
            const response = await apiTruck.get(`camiones/${id}`)
            return response.data

        } catch (error) {
            console.log(error);

        }
    },

    deleteOneTruck: async (id) => {
        try {
            const response = await apiTruck.delete(`camiones/${id}`)
            return response

        } catch (error) {
            console.log(error);

        }
    },

    //   CURD DE CLIENTES ------------------------------------------------
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
            return response.data

        } catch (error) {
            console.log(error);

        }
    },

    deleteOneClient: async (id) => {
        try {
            const response = await apiClient.delete(`clientes/${id}`)
            return response
        } catch (error) {
            console.log(error);
        }
    },
    updateOneClient: async (id, data) => {
        try {
            console.log(id, data);
            const response = await apiClient.put(`clientes/${id}`, data)
            console.log(response);
            return response
        } catch (error) {
            console.log(error);

        }
    },

    //    CRUD DE PEDIDOSS ---------------------------------------------------------
    createOneOrder: async (formData) => {
        try {
            const response = await apiOrder.post(`pedidos`, formData)
            return response

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
    getOneOrders: async (id) => {
        try {
            const response = await apiOrder.get(`pedidos/${id}`)
            return response.data
        } catch (error) {
            console.log(error);
        }
    },
    getOneOrdersCliente: async (id) => {
        try {
            const response = await apiOrder.get(`pedidos/${id}`)
            return response
        } catch (error) {
            console.log(error);
        }
    },
    deleteOneOrder: async (id) => {
        try {
            const response = await apiOrder.delete(`pedidos/${id}`)
            return response
        } catch (error) {
            console.log(error);
        }
    },
    updateOneOrder: async (id, data) => {
        try {
            console.log(id, data);
            const response = await apiOrder.put(`pedidos/${id}`, data)
            console.log(response);
            return response
        } catch (error) {
            console.log(error);

        }
    },
    updateOrderDone: async (id, data) => {
        try {
            console.log(id, data);
            const response = await apiOrder.put(`pedidos/${id}/entregado`, data)
            console.log(response);
            return response
        } catch (error) {
            console.log(error);

        }
    },

}