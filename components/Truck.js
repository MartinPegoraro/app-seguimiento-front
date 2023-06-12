import React, { useEffect, useState, useCallback } from 'react'
import { Box, Button, Grid, Typography, IconButton, Avatar, TextField, Tooltip, Alert } from '@mui/material';
import { Router, useRouter } from 'next/router';
import UndoIcon from '@mui/icons-material/Undo';
import Link from 'next/link';
import ModalChangeClient from './ModalChangeClient';
import { apiRest } from '@/pages/api/api';
import ModalCreateState from './ModalCreateState';

export default function Truck() {
    const [truck, setTruck] = useState()
    const [open, setOpen] = useState(false)

    // const [alert, setAlert] = useState(false)

    const router = useRouter()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleDelete = async () => {
        const res = await apiRest.deleteOneTruck(truck?.id)
        if (res?.status === 200) {
            router.push({ pathname: `/home-admin` })
        }
    }

    const handleChangeDone = async (id) => {
        const state = { entregado: true }
        const res = await apiRest.updateOrderDone(id, state)
        if (res.status === 200 || res.status === 201) {

        }
    }

    const handleOneOrders = (id) => {
        router.push(`/home-admin/pedido/${id}`)
    }

    const fetchData = useCallback(async () => {
        const idUser = parseInt(router?.query?.id)
        const res = await apiRest.getOneTruck(idUser)
        setTruck(res)
    }, [router])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <Box sx={{ width: '100%', height: '100vh', position: 'relative', display: 'inline-block', }}>
            <ModalCreateState
                open={open}
                handleClose={handleClose}
                orders={truck?.pedidos}
            />
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
                    <Button className='boxContainerCliente' style={{ justifyContent: 'flex-start' }} onClick={handleOpen}>
                        <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Agregar Lugar</Typography>
                    </Button>
                    {truck?.pedidos?.length === 0 || undefined
                        ?
                        <Button className='boxContainerCliente' style={{ justifyContent: 'flex-start' }} onClick={handleDelete}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Eliminar camion</Typography>
                        </Button>
                        :
                        <Tooltip title="Esta es la información del botón" arrow>
                            <Button className='boxContainerCliente' disabled style={{ justifyContent: 'flex-start' }}>
                                <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Eliminar camion (contiene pedidos) </Typography>
                            </Button>
                        </Tooltip>
                    }
                </Grid>
                <Grid item xs={9} sx={{ backgroundImage: 'url("/img/camion.jpg")', backgroundSize: 'cover', }}>
                    <Grid container>
                        {truck?.pedidos?.map((pedido, index) => {
                            return (
                                < Grid key={index} item xs={4} >
                                    <Button className='truck' variant='outlined' onClick={() => handleOneOrders(pedido.id)} sx={{ flexDirection: 'column', justifyContent: 'flex-start', width: '80%', height: '20vh', m: 5, mb: 0.5, p: 2 }}>
                                        <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>NroPedido: {pedido?.nroPedido}</Typography>
                                        <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Nombre Cliente: {pedido?.clienteNombre}</Typography>
                                        <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Destino: {pedido?.destino}</Typography>
                                        <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Fecha estimada de llegada: {pedido?.fechaEstimada}</Typography>
                                    </Button>
                                    <Button onClick={() => handleChangeDone(pedido.id)} variant='contained' sx={{
                                        width: '50%', height: '2vh', m: 12, mt: 0, p: 2, bgcolor: 'white', color: 'black',
                                        '&:hover': {
                                            bgcolor: 'rgb(0, 34, 128)',
                                            color: 'white'
                                        },
                                    }} >Entregado</Button>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>

            </Grid >
        </Box >
    )
}
