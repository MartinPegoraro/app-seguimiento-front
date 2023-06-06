import React, { useState } from 'react'
import { Box, Button, Grid, Typography, IconButton, Avatar, TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import { useRouter } from 'next/router';
import { apiRest } from '@/pages/api/api';

export default function HomePage() {

    const [codSearch, setCodSearch] = useState({ trakingCod: '' })

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setCodSearch({
            ...codSearch,
            [name]: value
        })
    }
    const router = useRouter()

    const handleSearch = async () => {
        const res = await apiRest.getOneOrdersCliente(codSearch.trakingCod)
        console.log(res);

        if (res.status === 200) {

            router.push(`/search/${res.data.id}`)
        }
        // console.log(codSearch);
    }

    return (
        <>
            <Box sx={{ width: '100%', height: 500, border: '1px solid black', position: 'relative', display: 'inline-block' }}>
                <Image
                    className='imgHome'
                    fill
                    src='/img/imghome1.jpg'
                    alt='img'
                />

                <Box sx={{ position: 'absolute', height: '100%', width: '40%', pt: 20, pl: 10 }}>
                    <Typography sx={{ fontWeight: 'bold', mb: 2, pl: 5 }} >¿Querés saber por dónde se encuentra tu envío?</Typography>
                    <Grid container>
                        <Grid item xs={10}>
                            <TextField fullWidth
                                onChange={onInputChange}
                                name='trakingCod'
                                value={codSearch.trakingCod}
                                placeholder="Ingrese aqui su codigo de envio"
                                variant="outlined"
                                size='small'
                                sx={{ bgcolor: 'white', borderRadius: 1 }} />
                        </Grid>
                        <Grid item xs={2}>
                            <Button className='buttonSearch' variant='contained' sx={{ height: '100%' }} onClick={handleSearch} >
                                <SearchIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
            <Grid container >
                <Grid item xs={4} sx={{ top: -30, height: 200, border: '1px solid black', position: 'relative', border: '0px' }}>
                    <img
                        className='imgHome2'
                        width='100%'
                        height='100%'
                        src='/img/camion.jpg'
                        alt='img'
                    />
                </Grid>
                <Grid item xs={4} sx={{ top: -30, width: '100%', height: 200, border: '1px solid black', position: 'relative', border: '0px' }}>
                    <img
                        className='imgHome2'
                        width='100%'
                        height='100%'
                        src='/img/camion.png'
                        alt='img'
                    />
                </Grid>
                <Grid item xs={4} sx={{ top: -30, width: '100%', height: 200, border: '1px solid black', position: 'relative', border: '0px' }}>
                    <img
                        className='imgHome2'
                        width='100%'
                        height='100%'
                        src='/img/camion3.jpg'
                        alt='img'
                    />
                </Grid>
            </Grid>
        </>
    )
}
