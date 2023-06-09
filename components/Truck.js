import React, { useEffect, useState, useCallback } from 'react'
import {
    Box,
    Button,
    Grid,
    Typography,
    IconButton, Avatar,
    TextField,
    Tooltip,
    Alert,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Router, useRouter } from 'next/router';
import UndoIcon from '@mui/icons-material/Undo';
import Link from 'next/link';
import ModalChangeClient from './ModalChangeClient';
import { apiRest } from '@/pages/api/api';
import ModalCreateState from './ModalCreateState';

export default function Truck() {
    const [truck, setTruck] = useState()
    const [open, setOpen] = useState(false)
    const [openConfirm, setOpenConfirm] = useState(false)
    const [idOrder, setIdOrder] = useState(false)

    const router = useRouter()

    const handleCloseConfirm = () => {
        setOpenConfirm(false);
    };

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleDelete = async () => {
        const res = await apiRest.deleteOneTruck(truck?.id)
        if (res?.status === 200 || res.status === 201) {
            router.push({ pathname: `/home-admin` })
        }
    }

    const handleChangeDone = (id) => {
        setOpenConfirm(true)
        setIdOrder(id)
    }

    const handleConfirm = async () => {
        const state = { entregado: true }
        const res = await apiRest.updateOrderDone(idOrder, state)
        if (res.status === 200 || res.status === 201) {
            handleCloseConfirm()
            location.reload()
        }
    }

    const handleOneOrders = (id) => {
        router.push(`/home-admin/pedido/${id}`)
    }

    const fetchData = useCallback(async () => {
        if (router.query.id) {
            const idUser = parseInt(router?.query?.id)
            const res = await apiRest.getOneTruck(idUser)
            setTruck(res)
        }
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
                            <span >
                                <Button className='boxContainerCliente' disabled style={{ justifyContent: 'flex-start', width: '100%' }}>
                                    <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', textAlign: 'center' }}>Eliminar camion (contiene pedidos) </Typography>
                                </Button>
                            </span>
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
                        Esta seguro que se entrego el pedido?
                    </DialogTitle>
                    <DialogActions sx={{ justifyContent: 'center' }}>
                        <Button variant='contained' onClick={handleCloseConfirm} sx={{ bgcolor: 'red', color: 'white', '&:hover': { bgcolor: '#FF1E1E' } }}>Cancelar</Button>
                        <Button variant='contained' onClick={handleConfirm} sx={{ bgcolor: 'green', color: 'white', '&:hover': { bgcolor: '#096203' } }} autoFocus>
                            Confirmar
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>


        </Box >
    )
}
