import { Modal, Typography, Box, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import { truckApi } from '@/pages/api/truck';
import { useState } from 'react';

const ModalCreateUser = ({ handleCloseModal, openModal }) => {
    const [formData, setFormData] = useState({ nombre: '', apellido: '', direccion: '', email: '' })
    const [email, setEmail] = useState('');

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const isEmailValid = () => {
        // Expresión regular para validar un correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleCreateClient = async () => {
        const res = await truckApi.createOneClient(formData)
        console.log(res?.status);
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
                        required
                        id="outlined-required"
                    />
                    {/* <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='phone'
                        label='Telefono'
                        value={formData.phone}
                        size='small'
                        required
                        id="outlined-required"
                    /> */}
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