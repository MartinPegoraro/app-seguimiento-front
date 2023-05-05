import { Box, Grid, Typography } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import React from 'react'

export default function SearchOrder() {
    return (
        <>
            <Box className='container'>
                <Grid container >
                    <Grid item xs={9}>
                        <Typography variant="h5" sx={{ textAlign: 'right', color: '#1976d2' }}>Track & Trace - Envio exclusivo</Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: 'left', pt: 0.5, pl: 1, width: '100%', height: '100%' }}>
                        <LocalShippingIcon className='icon-icon' sx={{}} />
                    </Grid>
                </Grid>
                <Box sx={{ mt: 2, border: '1px solid black', width: '100%', height: 300, borderRadius: 2 }}>
                    <Typography variant="subtitle1" sx={{ bgcolor: '#1976d2', borderTopLeftRadius: 6.5, borderTopRightRadius: 6.5 }}>Estos son los resultados de la consulta: 1244536</Typography>

                </Box>
            </Box>
        </>
    )
}
