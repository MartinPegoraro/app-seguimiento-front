import { Box, Grid, Typography, SvgIcon, Chip } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LensIcon from '@mui/icons-material/Lens';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import React from 'react'

const pedidos = {
    "id": 1,
    "nroPedido": "0000926400237LI054A1201",
    "createAt": "2023-05-16",
    "fechaSalida": "16/05/2023",
    "fechaEstimada": "19/05/2023",
    "entregado": true,
    "estado": "preparando",
    "clienteNombre": "Ariana Melisa Kremar",
    "clienteId": 2,
    "lugar": [
        "En Planta",
        "corriente",
        "Santa Silvina",
        "Entre Rios",
        "Chubut",

    ]
}


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

                <Grid container justifyContent="center" alignItems="center" sx={{ width: '90%', ml: '5%' }}>
                    <Grid item xs={0.5}>
                        <div class="circuloInicio"></div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class="linea-horizontalInicio"></div>
                    </Grid>
                    <Grid item xs={0.5}>
                        {pedidos.lugar.length > 2 ?
                            <div class="circuloInicio"></div>
                            :
                            <div class="circulo"></div>
                        }
                    </Grid>
                    <Grid item xs={1}>
                        {pedidos.lugar.length > 2 ?
                            <div class="linea-horizontalInicio"></div>
                            :
                            <div class="linea-horizontal"></div>
                        }
                    </Grid>
                    <Grid item xs={0.5}>
                        {pedidos.entregado ?
                            <div class="circuloInicio"></div>
                            :
                            <div class="circulo"></div>
                        }
                    </Grid>
                </Grid>


                <Grid container justifyContent="center" alignItems="center" sx={{ width: '90%', ml: '5%' }}>
                    <Grid item xs={0.5}>
                        <p>inicio</p>

                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={0.5}>
                        <p>viajando</p>
                    </Grid>
                    <Grid item xs={1.2}>

                    </Grid>
                    <Grid item xs={0.5}>
                        <p>llego</p>
                    </Grid>
                </Grid>




                <Box sx={{ mt: 2, pb: 2, width: '90%', minHeight: 300, borderRadius: 2, ml: '5%' }}>
                    <Typography variant="subtitle1" sx={{ p: 1, bgcolor: '#1976d2', borderTopLeftRadius: 6.5, borderTopRightRadius: 6.5 }}>Este es el resultado de la consulta:
                        <Typography variant="span" sx={{ bgcolor: 'rgb(0, 191, 255)', borderRadius: 1, ml: 0.5 }}> {pedidos.nroPedido}</Typography>
                    </Typography>
                    <Grid container>

                        <Grid item xs={5} sx={{ p: 1, border: '0.5px solid black', borderBottom: 0, bgcolor: 'rgb(222, 222, 222)', borderBottom: '1px solid rgba(0, 0, 0, 0.5)' }}>
                            <Typography sx={{ textAlign: 'center' }}>
                                Donde se encuentra?
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ p: 1, border: '0.5px solid black', borderBottom: 0, bgcolor: 'rgb(222, 222, 222)', borderBottom: '1px solid rgba(0, 0, 0, 0.5)' }}>
                            <Typography sx={{ textAlign: 'center' }}>
                                Fecha estimada
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sx={{ p: 1, border: '0.5px solid black', borderBottom: 0, bgcolor: 'rgb(222, 222, 222)', borderBottom: '1px solid rgba(0, 0, 0, 0.5)' }}>
                            <Typography sx={{ textAlign: 'center' }}>
                                Estado
                            </Typography>
                        </Grid>
                    </Grid>
                    {...pedidos.lugar.map((lugar, index) => {
                        return (
                            <Grid container key={index}>

                                <Grid item xs={5} sx={{ borderRight: '0.5px solid black', borderLeft: '0.5px solid black', borderBottom: index === pedidos.lugar.length - 1 ? '0.5px solid black' : 'none', backgroundColor: index % 2 === 0 ? 'rgb(229, 219, 255)' : 'transparent' }}>
                                    <Typography sx={{ textAlign: 'center' }}>
                                        {lugar}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} sx={{ borderRight: '0.5px solid black', borderLeft: '0.5px solid black', borderBottomRightRadius: index === pedidos.lugar.length - 1 ? 5 : 'none', borderBottom: index === pedidos.lugar.length - 1 ? '0.5px solid black' : 'none', backgroundColor: index % 2 === 0 ? 'rgb(229, 219, 255)' : 'transparent' }}>
                                    <Typography sx={{ textAlign: 'center' }}>
                                        {pedidos.fechaEstimada}
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} sx={{ display: 'block', borderRight: '0.5px solid black', borderLeft: '0.5px solid black', borderBottomLeftRadius: index === pedidos.lugar.length - 1 ? 5 : 'none', borderBottom: index === pedidos.lugar.length - 1 ? '0.5px solid black' : 'none', backgroundColor: index % 2 === 0 ? 'rgb(229, 219, 255)' : 'transparent' }}>
                                    <Typography sx={{ textAlign: 'center' }} >
                                        {pedidos.entregado && index === pedidos.lugar.length - 1 ? 'Entregado' : 'En viaje'}
                                    </Typography>
                                </Grid>
                            </Grid>
                        )
                    })}

                </Box>
            </Box>
        </>
    )
}
