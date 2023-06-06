import { Box, Modal, Button, Typography, TextField, Grid } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import React, { useState } from 'react'
import { apiRest } from '@/pages/api/api';

const ModalCreateTruck = ({ handleCloseModalTruck, openModalTruck }) => {
    const [formData, setFormData] = useState({ marca: '', patente: '' })

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async () => {

        const res = await apiRest.createOneTruck(formData)
        console.log(res?.status);
        if (res?.status === 201) {
            handleCloseModalTruck()
            setFormData('')
            location.reload()
        }
    }
    return (
        <>
            <Modal
                open={openModalTruck}
                onClose={handleCloseModalTruck}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box className='boxModalTruck'>
                    <Button sx={{ display: 'block' }} onClick={() => { handleCloseModalTruck(), setFormData('') }}>
                        <ArrowBackIcon />
                    </Button>
                    <Typography>Nuevo Camion</Typography>
                    <Box>
                        <TextField
                            onChange={onInputChange}
                            value={formData.marca}
                            sx={{ m: 1, width: '60%' }}
                            name='marca'
                            label='Marca'
                            size='small'
                            required
                            id="outlined-required"
                        />
                        <TextField
                            onChange={onInputChange}
                            value={formData.patente}
                            sx={{ m: 1, width: '60%' }}
                            name='patente'
                            label='Patente'
                            size='small'
                            required
                            id="outlined-required"
                        />

                    </Box>
                    <Grid container sx={{ justifyContent: 'center' }}>
                        <Grid item>
                            <Button variant='contained' onClick={handleSubmit} >
                                <Typography sx={{ textTransform: 'capitalize', mr: 1 }}> Crear Camion </Typography>
                                <LocalShippingIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}

export default ModalCreateTruck
