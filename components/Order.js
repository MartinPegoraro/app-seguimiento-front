import React, { useEffect, useState, useCallback } from 'react'
import { Box, Button, Grid, Typography, IconButton, Avatar, TextField, DialogContent, Dialog, DialogTitle, DialogContentText, DialogActions } from '@mui/material';
import { useRouter } from 'next/router';
import UndoIcon from '@mui/icons-material/Undo';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import Link from 'next/link';
import ModalChangeOrders from './ModalChangeOrders';
import { apiRest } from '@/pages/api/api';

export default function Order() {
    const [open, setOpen] = useState(false)
    const [order, setOrder] = useState()
    const [clients, setClients] = useState()
    const [trucks, setTrucks] = useState()
    const [openAlert, setOpenAlert] = useState(false)
    const [openConfirm, setOpenConfirm] = useState(false)


    const handleCloseConfirm = () => {
        setOpenConfirm(false);
    };

    const handleGoBack = () => {
        window.history.back()
    };

    const handleOpenAlert = () => {
        setOpenAlert(true)
    }

    const handleCloseAlert = () => {
        setOpenAlert(false)
    }


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const router = useRouter()


    const handleConfirm = (id) => {
        setOpenConfirm(true)
    }


    const handleDelete = async () => {
        const res = await apiRest.deleteOneOrder(order?.id)
        if (res.status === 201 || res.status === 200) {
            handleCloseConfirm()
            router.push({ pathname: `/home-admin` })
        }

    }

    const fetchData = useCallback(async () => {
        if (router.query.id) {
            const idUser = parseInt(router.query.id)
            const res = await apiRest.getOneOrders(idUser)
            const resClient = await apiRest.getClient()
            const resTrucks = await apiRest.getTruck()
            setTrucks(resTrucks)
            setClients(resClient)
            setOrder(res)
        }
    }, [router.query.id])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <>
            <Box sx={{ width: '100%', height: '100vh', position: 'relative', display: 'inline-block', }}>
                <ModalChangeOrders
                    open={open}
                    handleClose={handleClose}
                    order={order}
                    clients={clients}
                    trucks={trucks}
                />

                <Dialog
                    open={openAlert}
                    onClose={handleCloseAlert}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Seguro que desea eliminar el pedido que se encuentra dentro de un camion?"}
                    </DialogTitle>

                    <DialogActions>
                        <Button onClick={handleCloseAlert}>cancelar</Button>
                        <Button onClick={handleCloseAlert} autoFocus>
                            Eliminar
                        </Button>
                    </DialogActions>
                </Dialog>

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
                    {!order?.entregado
                        ?
                        <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'beige', height: '100vh' }}>
                            <Button className='boxContainerCliente' onClick={handleOpen} style={{ justifyContent: 'flex-start' }}>
                                <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Modificar Datos del Pedido</Typography>
                            </Button>
                            <Button className='boxContainerCliente' onClick={handleConfirm} style={{ justifyContent: 'flex-start' }}>
                                <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Eliminar Pedido</Typography>
                            </Button>
                            <Button onClick={handleGoBack} style={{ justifyContent: 'flex-start' }}>
                                <UndoIcon />
                                <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Volver Atras</Typography>
                            </Button>
                        </Grid>
                        :
                        <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'beige', height: '100vh' }}>


                            <Button onClick={handleGoBack} style={{ justifyContent: 'flex-start' }}>
                                <UndoIcon />
                                <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Volver Atras</Typography>
                            </Button>
                        </Grid>

                    }
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
                                {!order?.camionId
                                    ?
                                    <Typography sx={{ width: '60%', border: '1px solid black', bgcolor: 'rgb(248, 248, 173)' }}>Pedido Entregado</Typography>

                                    :
                                    <Typography sx={{ width: '60%', border: '1px solid black', bgcolor: 'rgb(248, 248, 173)' }}>{order?.camionId}</Typography>
                                }
                            </Box>
                            <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <Typography >Fecha estimada de llegada:</Typography>
                            </Box>
                            <Box sx={{ pb: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <Typography sx={{ width: '60%', border: '1px solid black', bgcolor: 'rgb(248, 248, 173)' }}>{order?.fechaEstimada}</Typography>
                            </Box>
                            <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <Typography >Descripcion del pedido:</Typography>
                            </Box>
                            <Box sx={{ pb: 2, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                <Typography sx={{ width: '60%', border: '1px solid black', bgcolor: 'rgb(248, 248, 173)' }}>{order?.descripcion}</Typography>
                            </Box>

                        </Box>

                    </Grid>
                </Grid >
                {/* ALERTA DE CONFIRMACION */}
                <Dialog
                    open={openConfirm}
                    onClose={handleCloseConfirm}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <Box sx={{ border: '2px solid red' }}>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 5 }}>
                            <ErrorOutlineIcon sx={{ width: '15vh', height: '15vh', color: 'red' }} />
                        </div>

                        <DialogTitle id="alert-dialog-title" >
                            Esta seguro que desea eliminar el pedido?
                        </DialogTitle>
                        <DialogActions sx={{ justifyContent: 'center' }}>
                            <Button variant='contained' onClick={handleCloseConfirm} sx={{ bgcolor: 'red', color: 'white', '&:hover': { bgcolor: '#FF1E1E' } }}>Cancelar</Button>
                            <Button variant='contained' onClick={handleDelete} sx={{ bgcolor: 'green', color: 'white', '&:hover': { bgcolor: '#096203' } }} autoFocus>
                                Confirmar
                            </Button>
                        </DialogActions>
                    </Box>
                </Dialog>
            </Box >
        </>
    )
}
