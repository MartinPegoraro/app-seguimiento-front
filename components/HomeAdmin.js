import React, { useState } from 'react'
import { Box, Button, Grid, Typography, IconButton, Avatar, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Image from 'next/image';
import ModalCreateUser from './ModalCreateUSer'
import ModalCreateOrder from './ModalCreateOrder';
import { truckApi } from '@/pages/api/truck';
import { useEffect } from 'react';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';


export default function HomeAdmin() {
    const [state, setState] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [camiones, setCamiones] = useState()
    const [pedidos, setPedidos] = useState()
    const [clientes, setClientes] = useState()
    const [openModalCreateOrder, setOpenModalCreateOrder] = useState(false)
    // const []

    const router = useRouter()

    const handleOpenModalCreateOrder = () => {
        setOpenModalCreateOrder(true)
    }

    const handleCloseModalCreateOrder = () => {
        setOpenModalCreateOrder(false)
    }

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleTruck = (camion) => {
        router.push({
            pathname: `/home-admin/pedido/[id]`,
            query: { id: camion.camion }
        })
    }

    const handleClient = (cliente) => {
        router.push({
            pathname: `home-admin/cliente/[id]`,
            query: { id: cliente.id }
        })
    }

    const axiosData = async () => {
        const restOrders = await truckApi.getOrders()
        const resTruck = await truckApi.getTruck()
        const resClient = await truckApi.getClient()
        setCamiones(resTruck)
        setClientes(resClient)
        setPedidos(restOrders)
    }

    useEffect(() => {
        axiosData()
    }, [])
    console.log(clientes);
    return (
        <>
            <ModalCreateOrder
                handleCloseModalCreateOrder={handleCloseModalCreateOrder}
                openModalCreateOrder={openModalCreateOrder}
                camiones={camiones}
                clientes={clientes}
            />
            <ModalCreateUser
                handleCloseModal={handleCloseModal}
                openModal={openModal}

            />
            <Box sx={{ width: '100%', height: '100vh', position: 'relative', display: 'inline-block', }}>

                <Grid container>
                    <Grid item xs={3}>
                        <Box bgcolor='#0c5eaf' style={{ justifyContent: 'flex-start' }}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', marginTop: '3px', marginBottom: '3px', padding: '10px' }}>Opciones</Typography>
                        </Box>
                    </Grid>
                    {state === 'camion'
                        ?
                        <Grid item xs={9}>
                            <Box bgcolor='#1976d2' style={{ justifyContent: 'flex-start', }}>
                                <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', marginTop: '3px', marginBottom: '3px', padding: '10px' }}>Camiones</Typography>
                            </Box>
                        </Grid>
                        :
                        <Grid item xs={9}>
                            <Box bgcolor='#1976d2' style={{ justifyContent: 'flex-start', }}>
                                <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', marginTop: '3px', marginBottom: '3px', padding: '10px' }}>Clientes</Typography>
                            </Box>
                        </Grid>
                    }
                </Grid>
                <Grid container>
                    <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'beige', height: '100vh' }}>
                        <Button className='boxContainerHomeAdmin' style={{ justifyContent: 'flex-start' }} onClick={handleOpenModalCreateOrder}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize' }}>Crear Pedido</Typography>
                        </Button>
                        <Button className='boxContainerHomeAdmin' style={{ justifyContent: 'flex-start' }} onClick={handleOpenModal}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize' }}>Crear Cliente</Typography>
                        </Button>
                        <Button className='boxContainerHomeAdmin' style={{ justifyContent: 'flex-start' }} onClick={() => setState('usuario')}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize' }}>Ver Cliente</Typography>
                        </Button>
                        <Button className='boxContainerHomeAdmin' style={{ justifyContent: 'flex-start' }} onClick={() => setState('camion')}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize' }}>Camiones</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={9} sx={{ backgroundImage: 'url("/img/camion.jpg")', backgroundSize: 'cover', }}>
                        {state === 'camion' ?
                            <Grid container>
                                {camiones?.map((camion, index) => {
                                    return (
                                        < Grid key={index} item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            {/* <Link href={{ pathname: `/home-admin/pedido/[id]`, query: { id: '1' } }}> */}
                                            <Button className='truck' variant='outlined' onClick={() => handleTruck(camion)} sx={{ flexDirection: 'column', justifyContent: 'flex-start', width: '80%', height: '15vh', m: 5, p: 2 }} >
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Camion: {camion.camion}</Typography>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Patente: {camion.patente}</Typography>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Marca: {camion.marca} </Typography>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Nro de pedidos: {camion?.pedidos?.length || 0} </Typography>
                                            </Button>
                                            {/* </Link> */}
                                        </Grid>
                                    )
                                })
                                }
                                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button className='truck' variant='outlined' sx={{ height: '15vh', width: '80%', m: 5 }}>
                                        <AddCircleIcon />
                                        <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Agregar nuevo camion</Typography>

                                    </Button>
                                </Grid>
                            </Grid>
                            :
                            <Grid container>
                                {clientes?.map((cliente, index) => {
                                    return (
                                        < Grid key={index} item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Button className='truck' variant='outlined' onClick={() => handleClient(cliente)} sx={{ flexDirection: 'column', justifyContent: 'flex-start', width: '80%', height: '20vh', m: 5, p: 2 }}>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Usuario: {cliente.id}</Typography>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Nombre: {cliente.nombre}</Typography>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Apellido: {cliente.apellido} </Typography>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Direccion: {cliente.direccion}</Typography>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Corre: {cliente.email}</Typography>

                                            </Button>
                                        </Grid>
                                    )
                                })
                                }

                            </Grid>
                        }
                    </Grid>
                </Grid >
            </Box >
        </>

    )
}
