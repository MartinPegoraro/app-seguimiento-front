import React, { useState } from 'react'
import { Box, Button, Grid, Typography, IconButton, Avatar, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Image from 'next/image';
import ModalCreateUser from './ModalCreateUSer'
import ModalCreateOrder from './ModalCreateOrder';

const usuarios = [
    {
        usuario: '1',
        nombre: 'martin',
        apeellido: 'pegoraro',
        dni: 38195849,
        correo: 'martinp@gmail.com'
    },
    {
        usuario: '2',
        nombre: 'freddy',
        apeellido: 'ferreira',
        dni: 40329475,
        correo: 'freddy@gmail.com'
    },

]

const camiones = [
    {
        camion: '1',
        patente: 'asd125',
        repartidor: 'martin',
        nroDePedidos: 5
    },
    {
        camion: '2',
        patente: 'asdgfdg',
        repartidor: 'freddy',
        nroDePedidos: 6
    },
    {
        camion: '3',
        patente: 'asdfdgh',
        repartidor: 'makako',
        nroDePedidos: 4
    },

]
export default function HomeAdmin() {
    const [state, setState] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [openModalCreateOrder, setOpenModalCreateOrder] = useState(false)


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
    return (
        <>
            <ModalCreateOrder
                handleCloseModalCreateOrder={handleCloseModalCreateOrder}
                openModalCreateOrder={openModalCreateOrder}
                camiones={camiones}
                usuarios={usuarios}
            />
            <ModalCreateUser
                handleCloseModal={handleCloseModal}
                openModal={openModal}

            />
            <Box sx={{ width: '100%', height: '100vh', position: 'relative', display: 'inline-block', }}>
                {/* <Image
            src='/img/fondoCamion.jpg'
            alt='img'
        
        /> */}
                <Grid container>
                    <Grid item xs={3}>
                        <Box bgcolor='#0c5eaf' style={{ justifyContent: 'flex-start' }}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', marginTop: '3px', marginBottom: '3px', padding: '10px' }}>Opciones</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box bgcolor='#1976d2' style={{ justifyContent: 'flex-start', }}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize', marginTop: '3px', marginBottom: '3px', padding: '10px' }}>Camiones</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'beige', height: '100vh' }}>
                        <Button className='boxContainerHomeAdmin' style={{ justifyContent: 'flex-start' }} onClick={handleOpenModalCreateOrder}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize' }}>Crear Pedido</Typography>
                        </Button>
                        <Button className='boxContainerHomeAdmin' style={{ justifyContent: 'flex-start' }} onClick={handleOpenModal}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize' }}>Crear Usuario</Typography>
                        </Button>
                        <Button className='boxContainerHomeAdmin' style={{ justifyContent: 'flex-start' }} onClick={() => setState('usuario')}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize' }}>Ver usuarios</Typography>
                        </Button>
                        <Button className='boxContainerHomeAdmin' style={{ justifyContent: 'flex-start' }} onClick={() => setState('camion')}>
                            <Typography variant='subtitle2' sx={{ textTransform: 'capitalize' }}>Camiones</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={9} sx={{ backgroundImage: 'url("/img/camion.jpg")', backgroundSize: 'cover', }}>
                        {state === 'camion' ?
                            <Grid container>
                                {camiones.map((camion, index) => {
                                    return (
                                        < Grid key={index} item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Button className='truck' variant='outlined' sx={{ flexDirection: 'column', justifyContent: 'flex-start', width: '80%', height: '15vh', m: 5, p: 2 }}>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Camion: {camion.camion}</Typography>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Patente: {camion.patente}</Typography>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Repartidor{camion.repartidor} </Typography>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Nro de pedidos: {camion.nroDePedidos}</Typography>
                                            </Button>
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
                                {usuarios.map((user, index) => {
                                    return (
                                        < Grid key={index} item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Button className='truck' variant='outlined' sx={{ flexDirection: 'column', justifyContent: 'flex-start', width: '80%', height: '20vh', m: 5, p: 2 }}>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Usuario: {user.usuario}</Typography>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Nombre: {user.nombre}</Typography>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Apellido{user.apeellido} </Typography>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>DNI: {user.dni}</Typography>
                                                <Typography variant="caption" sx={{ textTransform: 'capitalize', }}>Corre: {user.correo}</Typography>

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
