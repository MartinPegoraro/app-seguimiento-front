import React, { useEffect, useState, useCallback } from 'react'
import { Box, Button, Grid, Typography, IconButton, Avatar, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import UndoIcon from '@mui/icons-material/Undo';
import Link from 'next/link';
import ModalChangeOrders from './ModalChangeOrders';
import { truckApi } from '@/pages/api/truck';

const pedido = {
    "id": 6,
    "nroPedido": "5546435",
    "createAt": "2023-05-16",
    "destino": "Mendoza",
    "fechaSalida": "16/05/2023",
    "fechaEstimada": "19/05/2023",
    "entregado": false,
    "clienteNombre": "Freddy Ferreira",
    "clienteId": 1,
    "camionId": 2

}

export default function Order() {
    const [open, setOpen] = useState(false)
    const [order, setOrder] = useState()
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const router = useRouter()

    const handleDelete = async () => {
        const res = await truckApi.deleteOneOrder(order.id)
        if (res.status === '201') {
            router.push('/home-admin')
        }
    }

    const fetchData = useCallback(async () => {
        const idUser = parseInt(router.query.id)
        const res = await truckApi.getOneOrders(idUser)
        // setOrder(res)
        setOrder(pedido)
    }, [router])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    console.log(order);
    return (
        <>
            <Box sx={{ width: '100%', height: '100vh', position: 'relative', display: 'inline-block', }}>
                <ModalChangeOrders
                    open={open}
                    handleClose={handleClose}
                    order={order}
                />
                <Grid container>
                    <Grid item xs={3}>
                        <Box bgcolor='#0c5eaf' style={{ justifyContent: 'flex-start' }}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', marginTop: '3px', marginBottom: '3px', padding: '10px' }}>Opciones</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box bgcolor='#1976d2' style={{ justifyContent: 'flex-start', }}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', marginTop: '3px', marginBottom: '3px', padding: '10px' }}>Usuario {order?.id} </Typography>
                        </Box>
                    </Grid>

                </Grid>
                <Grid container>
                    <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'beige', height: '100vh' }}>
                        <Button className='boxContainerCliente' onClick={handleOpen} style={{ justifyContent: 'flex-start' }}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Modificar Datos del Pedido</Typography>
                        </Button>
                        <Button className='boxContainerCliente' onClick={handleDelete} style={{ justifyContent: 'flex-start' }}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Eliminar Pedido</Typography>
                        </Button>
                        <Link className='boxContainerCliente' href={'/home-admin'}>
                            <Button style={{ justifyContent: 'flex-start' }}>
                                <UndoIcon />
                                <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Volver Atras</Typography>
                            </Button>
                        </Link>
                    </Grid>
                    {/* <Grid item xs={9} sx={{ backgroundImage: 'url("/img/camion.jpg")', backgroundSize: 'cover', }}> */}
                    <Grid item xs={9} sx={{ backgroundImage: 'url("/img/camion.jpg")', px: 10, pt: 2, }}>
                        <Box sx={{ border: '1px solid black', bgcolor: 'beige', textAlign: 'center', justifyContent: 'center' }}>
                            <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <Typography >Numero de Pedido:</Typography>
                            </Box>
                            <Box sx={{ pb: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <Typography sx={{ width: '60%', border: '1px solid black', bgcolor: 'rgb(248, 248, 173)' }}>{order?.nroPedido}</Typography>
                            </Box>
                            <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <Typography >Destino:</Typography>
                            </Box>
                            <Box sx={{ pb: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <Typography sx={{ width: '60%', border: '1px solid black', bgcolor: 'rgb(248, 248, 173)' }}>{order?.destino}</Typography>
                            </Box>
                            <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <Typography >Nombre del Cliente:</Typography>
                            </Box>
                            <Box sx={{ pb: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <Typography sx={{ width: '60%', border: '1px solid black', bgcolor: 'rgb(248, 248, 173)' }}>{order?.clienteNombre}</Typography>
                            </Box>
                            <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <Typography >Nro de Camion en el que se encuentra:</Typography>
                            </Box>
                            <Box sx={{ pb: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <Typography sx={{ width: '60%', border: '1px solid black', bgcolor: 'rgb(248, 248, 173)' }}>{order?.camionId}</Typography>
                            </Box>
                            <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <Typography >Fecha estimada de llegada:</Typography>
                            </Box>
                            <Box sx={{ pb: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <Typography sx={{ width: '60%', border: '1px solid black', bgcolor: 'rgb(248, 248, 173)' }}>{order?.fechaEstimada}</Typography>
                            </Box>

                        </Box>

                    </Grid>
                </Grid >
            </Box >
        </>
    )
}
