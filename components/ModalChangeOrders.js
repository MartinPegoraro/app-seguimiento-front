import { truckApi } from '@/pages/api/truck'
import { Modal, Box, TextField, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
export default function ModalChangeOrders({ open, handleClose, order }) {
    const [dataOrder, setDataOrder] = useState({ id: '', destino: '', clienteNombre: '', camionId: '', fechaEstimada: '' })

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setDataOrder({
            ...dataOrder,
            [name]: value
        });
    }

    const handleModifOrder = async () => {
        const dataFinalOrder = {
            id: order?.id,
            destino: !dataOrder.destino ? order.destino : dataOrder.destino,
            clienteNombre: !dataOrder.clienteNombre ? order.clienteNombre : dataOrder.clienteNombre,
            camionId: !dataOrder.camionId ? order.camionId : dataOrder.camionId,
            fechaEstimada: !dataOrder.fechaEstimada ? order.fechaEstimada : dataOrder.fechaEstimada
        }
        console.log(dataFinalOrder);
        // const res = await truckApi.updateOneClient()
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box className='boxModalCreateUser'>
                    <Typography>Destino</Typography>
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='destino'
                        label={order?.destino}
                        value={dataOrder.destino}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <Typography>Cliente</Typography>
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='clienteNombre'
                        label={order?.clienteNombre}
                        value={dataOrder.clienteNombre}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <Typography>Camion</Typography>
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='camionId'
                        label={order?.camionId}
                        value={dataOrder.camionId}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <Typography>Fecha estimada de llegada</Typography>
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        type='date'
                        name='fechaEstimada'
                        value={dataOrder.fechaEstimada}
                        size='small'
                        required
                        id="outlined-required"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label={order?.fechaEstimada}
                    />
                    <Button variant='contained' sx={{ width: '40%' }} onClick={handleModifOrder}>Modificiar</Button>
                </Box>
            </Modal>
        </>
    )
}

