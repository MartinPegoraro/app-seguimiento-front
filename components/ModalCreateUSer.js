import { Modal, Typography, Box, TextField, Button, Grid } from '@mui/material';
import { useState } from 'react';

const ModalCreateUser = ({ handleCloseModal, openModal }) => {
    const [formData, setFormData] = useState({ lastName: '', firstName: '', email: '', phone: '', address: '' })

    const onInputChange = ({ target }) => {
        console.log(target);
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value
        });
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
                        name='firstName'
                        label='Nombre'
                        value={formData.firstName}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='lastName'
                        label='Apellido'
                        value={formData.lastName}
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
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='phone'
                        label='Telefono'
                        value={formData.phone}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='address'
                        label='Direccion'
                        value={formData.address}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <Grid container sx={{ justifyContent: 'center' }}>
                        <Grid item>
                            <Button variant='contained' sx={{ display: 'block' }}>
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