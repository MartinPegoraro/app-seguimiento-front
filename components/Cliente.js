import React, { useEffect, useState, useCallback } from 'react'
import { Box, Button, Grid, Typography, IconButton, Avatar, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import UndoIcon from '@mui/icons-material/Undo';
import Link from 'next/link';
import ModalChangeClient from './ModalChangeClient';
import { apiRest } from '@/pages/api/api';

export default function Cliente() {
    const [open, setOpen] = useState(false)
    const [client, setClient] = useState()
    const [existOrder, setExistOrder] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const router = useRouter()

    const handleDelete = async () => {
        const res = await apiRest.deleteOneClient(client.id)
        if (res.status === 201) {
            router.push('/home-admin')
        }
    }

    const fetchData = useCallback(async () => {
        const idUser = parseInt(router.query.id)
        const res = await apiRest.getOneClient(idUser)
        const resOrder = await apiRest.getOrders()
        resOrder.map((order) => {
            if (order?.clienteId === res?.id && order?.camionId === undefined) {
                setExistOrder(true)
            }
        })
        setClient(res)
    }, [router])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <Box sx={{ width: '100%', height: '100vh', position: 'relative', display: 'inline-block', }}>
            <ModalChangeClient
                open={open}
                handleClose={handleClose}
                client={client}
            />
            <Grid container>
                <Grid item xs={3}>
                    <Box bgcolor='#0c5eaf' style={{ justifyContent: 'flex-start' }}>
                        <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', marginTop: '3px', marginBottom: '3px', padding: '10px' }}>Opciones</Typography>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <Box bgcolor='#1976d2' style={{ justifyContent: 'flex-start', }}>
                        <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', marginTop: '3px', marginBottom: '3px', padding: '10px' }}>Usuario {client?.id} </Typography>
                    </Box>
                </Grid>

            </Grid>
            <Grid container>
                <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'beige', height: '100vh' }}>
                    <Button className='boxContainerCliente' onClick={handleOpen} style={{ justifyContent: 'flex-start' }}>
                        <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Modificar Datos del Cliente</Typography>
                    </Button>
                    {existOrder ?
                        <Button className='boxContainerCliente' onClick={handleDelete} style={{ justifyContent: 'flex-start' }}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Eliminar cliente</Typography>
                        </Button>
                        :
                        <Button disabled className='boxContainerCliente' onClick={handleDelete} style={{ justifyContent: 'flex-start' }}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Eliminar cliente (pedido/s en camion)</Typography>
                        </Button>
                    }
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
                            <Typography >Nombre del cliente:</Typography>
                        </Box>
                        <Box sx={{ pb: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                            <Typography sx={{ width: '60%', border: '1px solid black', bgcolor: 'rgb(248, 248, 173)' }}>{client?.nombre}</Typography>
                        </Box>
                        <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                            <Typography >Apellido del cliente:</Typography>
                        </Box>
                        <Box sx={{ pb: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                            <Typography sx={{ width: '60%', border: '1px solid black', bgcolor: 'rgb(248, 248, 173)' }}>{client?.apellido}</Typography>
                        </Box>
                        <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                            <Typography >Direccion del cliente:</Typography>
                        </Box>
                        <Box sx={{ pb: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                            <Typography sx={{ width: '60%', border: '1px solid black', bgcolor: 'rgb(248, 248, 173)' }}>{client?.direccion}</Typography>
                        </Box>
                        <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                            <Typography >Email de contacto:</Typography>
                        </Box>
                        <Box sx={{ pb: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                            <Typography sx={{ width: '60%', border: '1px solid black', bgcolor: 'rgb(248, 248, 173)' }}>{client?.email}</Typography>
                        </Box>

                    </Box>

                </Grid>
            </Grid >
        </Box >
    )
}
