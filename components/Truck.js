import React, { useEffect, useState, useCallback } from 'react'
import { Box, Button, Grid, Typography, IconButton, Avatar, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import UndoIcon from '@mui/icons-material/Undo';
import Link from 'next/link';
import ModalChangeClient from './ModalChangeClient';
import { truckApi } from '@/pages/api/truck';

export default function Truck() {
    const [truck, setTruck] = useState()

    const router = useRouter()

    const fetchData = useCallback(async () => {
        const idUser = parseInt(router.query.id)
        const res = await truckApi.getOneTruck(idUser)
        console.log(res);
        setTruck(res)
    }, [router])

    useEffect(() => {
        fetchData()
    }, [fetchData])
    console.log(truck?.pedidos);
    return (
        <Box sx={{ width: '100%', height: '100vh', position: 'relative', display: 'inline-block', }}>

            <Grid container>
                <Grid item xs={3}>
                    <Box bgcolor='#0c5eaf' style={{ justifyContent: 'flex-start' }}>
                        <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', marginTop: '3px', marginBottom: '3px', padding: '10px' }}>Opciones</Typography>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <Box bgcolor='#1976d2' style={{ justifyContent: 'flex-start', }}>
                        <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', marginTop: '3px', marginBottom: '3px', padding: '10px' }}>Camion {truck?.marca} {truck?.patente} </Typography>
                    </Box>
                </Grid>

            </Grid>
            <Grid container>
                <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'beige', height: '100vh' }}>
                    <Link className='boxContainerCliente' href={'/home-admin'}>
                        <Button style={{ justifyContent: 'flex-start' }}>
                            <UndoIcon />
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Volver Atras</Typography>
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={9} sx={{ backgroundImage: 'url("/img/camion.jpg")', backgroundSize: 'cover', }}>
                    <Grid container>

                        {truck?.pedidos?.map((pedido, index) => {
                            return (
                                < Grid key={index} item xs={4} >
                                    <Button className='truck' variant='outlined' sx={{ flexDirection: 'column', justifyContent: 'flex-start', width: '80%', height: '20vh', m: 5, p: 2 }}>
                                        <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>NroPedido: {pedido?.nroPedido}</Typography>
                                        <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Nombre Cliente: {pedido?.clienteNombre}</Typography>
                                        <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Destino: {pedido?.destino}</Typography>
                                        <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Fecha estimada de llegada: {pedido?.fechaEstimada}</Typography>
                                    </Button>
                                    <Button>Entregado</Button>
                                </Grid>
                            )
                        })}
                    </Grid>


                </Grid>
            </Grid >
        </Box >
    )
}
