import { apiRest } from '@/pages/api/api'
import { Modal, Box, TextField, Button } from '@mui/material'
import React, { useState } from 'react'

const ModalChangeClient = ({ open, handleClose, client }) => {
    const [dataClient, setDataClient] = useState({ id: '', nombre: '', apellido: '', direccion: '', email: '' })
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setDataClient({
            ...dataClient,
            [name]: value
        });
    }

    const handleModifClient = async () => {
        const dataFinalClient = {
            id: client?.id,
            nombre: !dataClient.nombre ? client.nombre : dataClient.nombre,
            apellido: !dataClient.apellido ? client.apellido : dataClient.apellido,
            direccion: !dataClient.direccion ? client.direccion : dataClient.direccion,
            email: !dataClient.email ? client.email : dataClient.email
        }
        const res = await apiRest.updateOneClient(dataFinalClient)
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box className='boxModalCreateUser'>
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='nombre'
                        label={client?.nombre}
                        value={dataClient.nombre}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='apellido'
                        label={client?.apellido}
                        value={dataClient.apellido}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='direccion'
                        label={client?.direccion}
                        value={dataClient.direccion}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='email'
                        label={client?.email}
                        value={dataClient.email}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <Button variant='contained' sx={{ width: '40%' }} onClick={handleModifClient}>Modificiar</Button>
                </Box>
            </Modal>
        </>
    )
}

export default ModalChangeClient