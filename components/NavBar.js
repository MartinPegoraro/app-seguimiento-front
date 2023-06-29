import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Typography, IconButton, Avatar, TextField } from '@mui/material';
import Image from 'next/image';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import Link from 'next/link';
import ModalFormulario from './ModalFormulario';
export default function NavBar({ setState }) {
    const [route, setRoute] = useState()
    const [open, setOpen] = useState(false)

    const scrollToBottom = (state) => {
        const element = document.documentElement; // Obtener el elemento raíz del documento
        element.scrollIntoView({ behavior: 'smooth', block: 'end' }); // Hacer scroll hacia el final de la página suavemente
        setState(state)
    };

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const axiosData = async () => {
        setRoute(window.history.state.as)
    }

    useEffect(() => {
        axiosData()
    }, [])

    return (
        <>

            <Box sx={{ width: '100%', border: '1px solid black', borderRadius: 1, bgcolor: 'white' }}>
                <Grid container>
                    <Grid item xs={3} sx={{ position: 'relative' }}>
                        <Image
                            className='logo'
                            src="/img/logo4png.png"
                            alt='img'
                            fill
                        />
                    </Grid>
                    {
                        !route?.startsWith('/admin') ?
                            <Grid item xs={5} sx={{ textAlign: 'right' }}>
                                <Button className='buttonInfo' onClick={() => scrollToBottom(1)} size='small' sx={{ my: 1.7, mr: 2, borderRadius: 5 }} >
                                    <DesignServicesIcon />
                                    <Typography variant="caption" sx={{ textTransform: 'capitalize' }}>Servicios </Typography>
                                </Button>
                                <Button className='buttonInfo' onClick={() => scrollToBottom(2)} size='small' sx={{ my: 1.7, mr: 2, borderRadius: 5 }}>
                                    <InfoIcon />
                                    <Typography variant="caption" sx={{ textTransform: 'capitalize' }}>Acerca de nosotros </Typography>
                                </Button>
                                <Button className='buttonInfo' onClick={() => scrollToBottom(3)} size='small' sx={{ my: 1.7, mr: 2, borderRadius: 5 }} >
                                    <CallIcon />
                                    <Typography variant="caption" sx={{ textTransform: 'capitalize' }}>Contacto </Typography>
                                </Button>
                            </Grid>
                            :
                            <Grid item xs={5} sx={{ textAlign: 'right' }}>

                            </Grid>

                    }
                    {route === '/admin' ?
                        <Grid item xs={4} sx={{ textAlign: 'right' }}>
                            {/* <Link href={'/admin/home-admin'}> */}
                            <Button variant="contained" size='small' onClick={handleOpen} sx={{ my: 2, mr: 2, borderRadius: 5 }}> ingresar </Button>
                            {/* </Link> */}
                        </Grid>
                        : route?.startsWith('/admin/') &&
                        <Grid item xs={4} sx={{ textAlign: 'right' }}>
                            {/* <Link href={'/admin/home-admin'}> */}
                            <Button variant="contained" size='small' onClick={handleOpen} sx={{ my: 2, mr: 2, borderRadius: 5 }}> Logout </Button>
                            {/* </Link> */}
                        </Grid>
                    }
                </Grid>
            </Box>
            <ModalFormulario
                open={open}
                handleClose={handleClose}
            />
        </>
    )
}
