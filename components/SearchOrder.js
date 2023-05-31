import { Box, Grid, Typography } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import React from 'react'

const pedidos =
    [
        {
            "id": 1,
            "nroPedido": "1234",
            "createAt": "2023-05-16",
            "fechaSalida": "16/05/2023",
            "fechaEstimada": "19/05/2023",
            "entregado": false,
            "estado": "preparando",
            "clienteNombre": "Ariana Melisa Kremar",
            "clienteId": 2
        },
        {
            "id": 6,
            "nroPedido": "5546435",
            "createAt": "2023-05-16",
            "fechaSalida": "16/05/2023",
            "fechaEstimada": "19/05/2023",
            "entregado": false,
            "estado": "en camion",
            "clienteNombre": "Freddy Ferreira",
            "clienteId": 1
        },
        {
            "id": 7,
            "nroPedido": "111",
            "createAt": "2023-05-16",
            "fechaSalida": "16/05/2023",
            "fechaEstimada": "19/05/2023",
            "entregado": false,
            "estado": "en camion",
            "clienteNombre": "Ariana Melisa Kremar",
            "clienteId": 2
        },
    ]

export default function SearchOrder() {

    return (
        <>
            <Box className='container'>
                <Grid container sx={{ width: '90%', ml: '5%' }}>
                    <Grid item xs={9}>
                        <Typography variant="h5" sx={{ textAlign: 'right', color: '#1976d2' }}>Track & Trace - Envio exclusivo</Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: 'left', pt: 0.5, pl: 1, width: '100%', height: '100%' }}>
                        <LocalShippingIcon className='icon-icon' sx={{}} />
                    </Grid>
                </Grid>
                <Box sx={{ mt: 2, width: '90%', height: 300, borderRadius: 2, ml: '5%' }}>
                    <Typography variant="subtitle1" sx={{ p: 1, bgcolor: '#1976d2', borderTopLeftRadius: 6.5, borderTopRightRadius: 6.5 }}>Estos son los resultados de la consulta: 1244536</Typography>
                    <Grid container>
                        <Grid item xs={4} sx={{ pl: 1, border: '0.5px solid black', }}>
                            <Typography>
                                ID Pedido
                            </Typography>

                        </Grid>
                        <Grid item xs={4} sx={{ pl: 1, border: '0.5px solid black', }}>
                            <Typography>
                                Nombre del cliente
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ pl: 1, border: '0.5px solid black', }}>
                            Fecha estimada de entrega
                        </Grid>
                    </Grid>
                    {pedidos.map((pedido, index) => {
                        return (
                            <Grid container key={index}>
                                <Grid item xs={4} sx={{ display: 'block', pl: 2, borderRight: '1px solid black', borderLeft: '1px solid black', borderBottomLeftRadius: index === pedidos.length - 1 ? 5 : 'none', borderBottom: index === pedidos.length - 1 ? '1px solid black' : 'none' }}>
                                    <Typography >
                                        {pedido.id}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} sx={{ pl: 2, borderRight: '1px solid black', borderLeft: '1px solid black', borderBottom: index === pedidos.length - 1 ? '1px solid black' : 'none' }}>
                                    <Typography>
                                        {pedido.clienteNombre}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} sx={{ pl: 2, borderRight: '1px solid black', borderLeft: '1px solid black', borderBottomRightRadius: index === pedidos.length - 1 ? 5 : 'none', borderBottom: index === pedidos.length - 1 ? '1px solid black' : 'none' }}>
                                    <Typography >
                                        {pedido.fechaEstimada}
                                    </Typography>
                                </Grid>
                            </Grid>
                        )
                    })
                    }
                </Box>
            </Box>
        </>
    )
}
