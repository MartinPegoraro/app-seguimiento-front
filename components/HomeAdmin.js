import React, { useState } from 'react'
import { Box, Button, Grid, Typography, IconButton, Avatar, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Image from 'next/image';
import ModalCreateUser from './ModalCreateUser'
import ModalCreateOrder from './ModalCreateOrder';
import { apiRest } from '@/pages/api/api';
import { useEffect } from 'react';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import ModalCreateTruck from './ModalCreateTruck';

export default function HomeAdmin() {
    const [state, setState] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [camiones, setCamiones] = useState()
    const [pedidos, setPedidos] = useState()
    const [clientes, setClientes] = useState()
    const [openModalCreateOrder, setOpenModalCreateOrder] = useState(false)
    const [openModalTruck, setOpenModalTruck] = useState(false)
    const [statePedido, setStatePedido] = useState('nroPedido')


    const handleOpenModalTruck = () => {
        setOpenModalTruck(true)
    }

    const handleCloseModalTruck = () => {
        setOpenModalTruck(false)
    }

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
            pathname: `/home-admin/camion/[id]`,
            query: { id: camion.id }
        })
    }

    const handleClient = (cliente) => {
        router.push({
            pathname: `home-admin/cliente/[id]`,
            query: { id: cliente.id }
        })
    }

    const axiosData = async () => {
        const restOrders = await apiRest.getOrders()
        const resTruck = await apiRest.getTruck()
        const resClient = await apiRest.getClient()
        setCamiones(resTruck)
        setClientes(resClient)
        setPedidos(restOrders)
    }
    console.log(pedidos);

    useEffect(() => {
        axiosData()
    }, [])
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

            <ModalCreateTruck
                handleCloseModalTruck={handleCloseModalTruck}
                openModalTruck={openModalTruck}
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
                        : state === 'usuario'
                            ?
                            <Grid item xs={9}>
                                <Box bgcolor='#1976d2' style={{ justifyContent: 'flex-start', }}>
                                    <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', marginTop: '3px', marginBottom: '3px', padding: '10px' }}>Clientes</Typography>
                                </Box>
                            </Grid>
                            :
                            <Grid item xs={9}>
                                <Box bgcolor='#1976d2' style={{ justifyContent: 'flex-start', }}>
                                    <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', marginTop: '3px', marginBottom: '3px', padding: '10px' }}>Pedidos</Typography>
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
                        <Button className='boxContainerHomeAdmin' style={{ justifyContent: 'flex-start' }} onClick={() => setState('pedido')}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize' }}>Ver Pedidos</Typography>
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
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Camion: {camion.id}</Typography>
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
                                    <Button className='truck' variant='outlined' sx={{ height: '15vh', width: '80%', m: 5 }} onClick={handleOpenModalTruck}>
                                        <AddCircleIcon />
                                        <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Agregar nuevo camion</Typography>

                                    </Button>
                                </Grid>
                            </Grid>
                            : state === 'usuario'
                                ?
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
                                :
                                <Box>
                                    <Button onClick={() => setStatePedido('enCamion')}>en camion</Button>
                                    <Button onClick={() => setStatePedido('nroPedido')}>por n° pedido</Button>
                                    <Button onClick={() => setStatePedido('finalizado')}>Entregados</Button>
                                    <Button onClick={() => setStatePedido('clienteNombre')}>Cliente</Button>
                                    <Button onClick={() => setStatePedido('todos')}>todos</Button>
                                    {
                                        statePedido === 'clienteNombre'
                                            ?
                                            <Grid container>
                                                {pedidos //ordena por nombre
                                                    ?.sort((a, b) => a.clienteNombre.localeCompare(b.clienteNombre))
                                                    .map((pedido, index) => {
                                                        return (
                                                            < Grid key={index} item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <Button className='truck' variant='outlined' onClick={() => handleClient(pedido)} sx={{ flexDirection: 'column', justifyContent: 'flex-start', width: '80%', height: '20vh', m: 5, p: 2 }}>
                                                                    <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>ID: {pedido.id}</Typography>
                                                                    <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>cliente Nombre: {pedido.clienteNombre}</Typography>
                                                                    <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Destino: {pedido.destino} </Typography>
                                                                    <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>nroPedido: {pedido.nroPedido}</Typography>
                                                                </Button>
                                                            </Grid>
                                                        )
                                                    })
                                                }

                                            </Grid>
                                            : statePedido === 'nroPedido'
                                                ?
                                                <Grid container>
                                                    {pedidos //ordena por nombre
                                                        ?.sort((a, b) => a.nroPedido - b.nroPedido)
                                                        .map((pedido, index) => {
                                                            return (
                                                                < Grid key={index} item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Button className='truck' variant='outlined' onClick={() => handleClient(pedido)} sx={{ flexDirection: 'column', justifyContent: 'flex-start', width: '80%', height: '20vh', m: 5, p: 2 }}>
                                                                        <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>ID: {pedido.id}</Typography>
                                                                        <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>cliente Nombre: {pedido.clienteNombre}</Typography>
                                                                        <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Destino: {pedido.destino} </Typography>
                                                                        <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>nroPedido: {pedido.nroPedido}</Typography>
                                                                    </Button>
                                                                </Grid>
                                                            )
                                                        })
                                                    }

                                                </Grid>
                                                : statePedido === 'enCamion'
                                                    ?
                                                    <Grid container>
                                                        {pedidos //ordena por nombre
                                                            // ?.filter((a) => a.camionId || undefined)
                                                            ?.filter((a) => a.entregado === false)
                                                            .map((pedido, index) => {
                                                                return (
                                                                    < Grid key={index} item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <Button className='truck' variant='outlined' onClick={() => handleClient(pedido)} sx={{ flexDirection: 'column', justifyContent: 'flex-start', width: '80%', height: '20vh', m: 5, p: 2 }}>
                                                                            <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>ID: {pedido.id}</Typography>
                                                                            <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>cliente Nombre: {pedido.clienteNombre}</Typography>
                                                                            <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Destino: {pedido.destino} </Typography>
                                                                            <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>nroPedido: {pedido.nroPedido}</Typography>
                                                                        </Button>
                                                                    </Grid>
                                                                )
                                                            })
                                                        }

                                                    </Grid>
                                                    : statePedido === 'finalizado'
                                                        ?
                                                        <Grid container>
                                                            {pedidos //ordena por nombre
                                                                ?.filter((a) => a.entregado === true)
                                                                .map((pedido, index) => {
                                                                    return (
                                                                        < Grid key={index} item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <Button className='truck' variant='outlined' onClick={() => handleClient(pedido)} sx={{ flexDirection: 'column', justifyContent: 'flex-start', width: '80%', height: '20vh', m: 5, p: 2 }}>
                                                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>ID: {pedido.id}</Typography>
                                                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>cliente Nombre: {pedido.clienteNombre}</Typography>
                                                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Destino: {pedido.destino} </Typography>
                                                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>nroPedido: {pedido.nroPedido}</Typography>
                                                                            </Button>
                                                                        </Grid>
                                                                    )
                                                                })
                                                            }

                                                        </Grid>
                                                        : statePedido === 'todos'
                                                        &&
                                                        <Grid container>
                                                            {pedidos
                                                                .map((pedido, index) => {
                                                                    return (
                                                                        < Grid key={index} item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <Button className='truck' variant='outlined' onClick={() => handleClient(pedido)} sx={{ flexDirection: 'column', justifyContent: 'flex-start', width: '80%', height: '20vh', m: 5, p: 2 }}>
                                                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>ID: {pedido.id}</Typography>
                                                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>cliente Nombre: {pedido.clienteNombre}</Typography>
                                                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Destino: {pedido.destino} </Typography>
                                                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>nroPedido: {pedido.nroPedido}</Typography>
                                                                            </Button>
                                                                        </Grid>
                                                                    )
                                                                })
                                                            }

                                                        </Grid>
                                    }
                                </Box>
                        }
                    </Grid>
                </Grid >
            </Box >
        </>

    )
}
