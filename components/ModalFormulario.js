import { Modal, Box, Typography, TextField, Button, Grid, Divider } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react'

const ModalFormulario = ({ open, handleClose }) => {
    const [formData, setFormData] = useState({ user: '', password: '' })

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormData({
            ...formData,
            [name]: value
        })

    }

    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'white',
                        boxShadow: 24,
                        p: 2,
                        maxWidth: 400,
                        width: '100%',
                        outline: 'none',
                        borderRadius: 4,
                        textAlign: 'center',
                        background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(61,69,255,1) 89%)'
                    }}
                >
                    <AccountCircleIcon sx={{ width: '15vh', height: '15vh', color: 'white' }} />
                    <Grid container spacing={2} direction="column">
                        <Grid item sx={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
                            <PersonIcon fontSize='large' />
                            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                            <TextField
                                onChange={onInputChange}
                                name='user'
                                value={formData.user}
                                label="Usuario"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item sx={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
                            <VpnKeyIcon fontSize='large' />
                            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                            <TextField
                                onChange={onInputChange}
                                name='password'
                                value={formData.password}
                                label="Contraseña"
                                type="password"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Iniciar sesión
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}

module.exports = ModalFormulario