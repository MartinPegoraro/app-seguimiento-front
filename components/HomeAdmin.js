import React from 'react'
import { Box, Button, Grid, Typography, IconButton, Avatar, TextField } from '@mui/material';
import Image from 'next/image';

export default function HomeAdmin() {
    return (
        <>
            <Box sx={{ width: '100%', height: '100vh', position: 'relative', display: 'inline-block', }}>
                <Image
                    fill
                    src='/img/fondoCamion.jpg'
                    alt='img'
                />

                <Grid container sx={{ p: 10, pt: 15 }}>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant='contained' sx={{ height: 200, width: 200, border: '1px solid black', borderRadius: '50%' }}>
                            <Typography > Crear nuevo Viaje</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant='contained' sx={{ height: 200, width: 200, border: '1px solid black', borderRadius: '50%' }}>
                            <Typography >Buscar recorrido de un viaje </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant='contained' sx={{ height: 200, width: 200, border: '1px solid black', borderRadius: '50%' }}>
                            <Typography >Buscar un paquete</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container sx={{ p: 8 }}>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant='contained' sx={{ height: 200, width: 200, border: '1px solid black', borderRadius: '50%', bgcolor: '#7a0492' }}>
                            <Typography > Crear Nuevo usuario</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant='contained' sx={{ height: 200, width: 200, border: '1px solid black', borderRadius: '50%' }}>
                            <Typography >Modificar datos del cliente </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant='contained' sx={{ height: 200, width: 200, border: '1px solid black', borderRadius: '50%' }}>
                            <Typography >Modificar datos de un viaje</Typography>
                        </Button>
                    </Grid>
                </Grid>


            </Box>
        </>

    )
}
