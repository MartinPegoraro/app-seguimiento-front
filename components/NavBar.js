import React from 'react'
import { Box, Button, Grid, Typography, IconButton, Avatar, TextField } from '@mui/material';
import Image from 'next/image';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import Link from 'next/link';
export default function NavBar({ state }) {
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
                    <Grid item xs={5} sx={{ textAlign: 'right' }}>
                        <Button className='buttonInfo' size='small' sx={{ my: 1.7, mr: 2, borderRadius: 5 }} >
                            <DesignServicesIcon />
                            <Typography variant="caption" sx={{ textTransform: 'capitalize' }}>Servicios </Typography>
                        </Button>
                        <Button className='buttonInfo' size='small' sx={{ my: 1.7, mr: 2, borderRadius: 5 }}>
                            <InfoIcon />
                            <Typography variant="caption" sx={{ textTransform: 'capitalize' }}>Acerca de nosotros </Typography>
                        </Button>
                        <Button className='buttonInfo' size='small' sx={{ my: 1.7, mr: 2, borderRadius: 5 }} >
                            <CallIcon />
                            <Typography variant="caption" sx={{ textTransform: 'capitalize' }}>Contacto </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={4} sx={{ textAlign: 'right' }}>
                        <Link href={'/home-admin'}>
                            <Button variant="contained" size='small' sx={{ my: 2, mr: 2, borderRadius: 5 }}> ingresar </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
