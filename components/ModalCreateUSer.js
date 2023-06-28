import { Modal, Typography, Box, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { apiRest } from '@/pages/api/api';
import { useState } from 'react';

const ModalCreateUser = ({ handleCloseModal, openModal }) => {
    const [formData, setFormData] = useState({ nombre: '', apellido: '', direccion: '', email: '' })
    const [error, setError] = useState(false);


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const isEmailValid = (email) => {
        // Expresión regular para validar un correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleCreateClient = async () => {
        if (!isEmailValid(formData.email)) {
            setError(true);
            return;
        }
        const res = await apiRest.createOneClient(formData)
        if (res?.status === 201) {
            handleCloseModal()
        }
    }
    return (
        <>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='boxModalCreateUser'>
                    <Button sx={{ display: 'block' }} onClick={() => handleCloseModal()}>
                        <ArrowBackIcon />
                    </Button>
                    <Typography>Crear un nuevo contacto</Typography>
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='nombre'
                        label='Nombre'
                        value={formData.nombre}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='apellido'
                        label='Apellido'
                        value={formData.apellido}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='email'
                        label='Correo'
                        value={formData.email}
                        size='small'
                        error={error}
                        helperText={error ? 'Ingrese un correo electrónico válido' : ''}
                        required
                        id="outlined-required"
                    />
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='direccion'
                        label='Direccion'
                        value={formData.direccion}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <Grid container sx={{ justifyContent: 'center' }}>
                        <Grid item>
                            <Button variant='contained' sx={{ display: 'block' }} onClick={handleCreateClient}>
                                <Typography sx={{ textTransform: 'capitalize' }}> Crear usuario </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                </Box>
            </Modal >
        </>
    )
}

export default ModalCreateUser