import { Box, Grid, Typography } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import React from 'react'

export default function SearchOrder() {
    const data = [
        {
            fecha: [
                {
                    fecha: 'fecha 1'
                },
                {
                    fecha: 'fecha 2'
                },
                {
                    fecha: 'fecha 3'
                },

            ],
            ultUbicacion: ['San martin de los andes', 'Concordia', 'Santa cruz'],
            estado: ['No entregado', 'No entregado', 'Entregado']

        },

    ]
    return (
        <>
            <Box className='container'>
                <Grid container >
                    <Grid item xs={9}>
                        <Typography variant="h5" sx={{ textAlign: 'right', color: '#1976d2' }}>Track & Trace - Envio exclusivo</Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: 'left', pt: 0.5, pl: 1, width: '100%', height: '100%' }}>
                        <LocalShippingIcon className='icon-icon' sx={{}} />
                    </Grid>
                </Grid>
                <Box sx={{ mt: 2, border: '1px solid black', width: '100%', height: 300, borderRadius: 2 }}>
                    <Typography variant="subtitle1" sx={{ p: 1, bgcolor: '#1976d2', borderTopLeftRadius: 6.5, borderTopRightRadius: 6.5 }}>Estos son los resultados de la consulta: 1244536</Typography>
                    <Grid container sx={{ borderBottom: '1px solid grey' }}>
                        <Grid item xs={4} >

                            <Typography>
                                Fecha
                            </Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography >
                                ultima Ubicacion
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            estado
                        </Grid>
                    </Grid>
                    {data.map((dato, index) => {
                        return (
                            <Grid container key={index}>
                                <Grid item xs={4} sx={{ display: 'block' }}>
                                    <Typography >
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography >
                                        {dato.ultUbicacion}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography >
                                        {dato.estado}
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
