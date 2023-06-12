import { apiRest } from '@/pages/api/api';
import { Modal, Box, TextField, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const ModalCreateState = ({ open, handleClose, orders }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleCreateState = () => {
        const state = {
            estado: value
        }
        const respuesta = orders.map(async (pedido) => {
            const res = await apiRest.createStateOrder(pedido.id, state)

        })
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='boxModalCreateOrder'>
                    <Typography sx={{ width: '100%', my: 1, fontSize: '1.5rem' }}>Donde se encuentra?</Typography>
                    <TextField
                        sx={{ width: '100%', my: 1, fontSize: '1.5rem' }}
                        label="Lugar donde se encuentra"
                        value={value}
                        onChange={handleChange}
                    />
                    <Button variant='contained' sx={{ display: 'block', margin: 'auto' }} onClick={handleCreateState}>Enviar</Button>
                </Box>
            </Modal>
        </>
    )
}

export default ModalCreateState