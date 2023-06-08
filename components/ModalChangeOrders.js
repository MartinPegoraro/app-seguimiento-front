import { apiRest } from '@/pages/api/api'
import { Modal, Box, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import React, { useState } from 'react'
export default function ModalChangeOrders({ open, handleClose, order, clients, trucks }) {
    const [dataOrder, setDataOrder] = useState({ id: '', destino: '', camion: { id: '' }, cliente: { id: '' }, fechaEstimada: '' })
    const [selectedOptionTruck, setSelectedOptionTruck] = useState('');
    const [selectedOptionClient, setSelectedOptionClient] = useState('');

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setDataOrder({
            ...dataOrder,
            [name]: value
        });
    }

    const handleChange = (event) => {
        setSelectedOptionTruck(event.target.value);
        setDataOrder({ ...dataOrder, camion: { id: event.target.value } })
    };

    const handleChangeClient = (event) => {
        setSelectedOptionClient(event.target.value);
        setDataOrder({ ...dataOrder, cliente: { id: event.target.value } })
    };


    const handleModifOrder = async () => {
        const dataFinalOrder = {
            destino: !dataOrder.destino ? order.destino : dataOrder.destino,
            cliente: { id: !dataOrder.cliente.id ? order.clienteId : dataOrder.cliente.id },
            camion: { id: !dataOrder.camion.id ? order.camionId : dataOrder.camion.id },
            fechaEstimada: !dataOrder.fechaEstimada ? order.fechaEstimada : dataOrder.fechaEstimada,
        }
        const res = await apiRest.updateOneOrder(order?.id, dataFinalOrder)
        console.log(res?.status);
        if (res.status === 200 || res.status === 201) {
            console.log('124asdfgasdft');
            handleClose()
        }
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
                    <FormControl sx={{ m: 1, width: '70%' }}>
                        <InputLabel id="select-label">{order?.clienteNombre}</InputLabel>
                        <Select
                            labelId="select-label"
                            value={selectedOptionClient}
                            name='cliente_id'
                            onChange={handleChangeClient}
                        >
                            {clients?.map((cliente, index) => {
                                return (
                                    <MenuItem key={index} value={cliente.id}>{cliente.nombre} {cliente.apellido}</MenuItem>
                                )
                            })}

                        </Select>
                    </FormControl>

                    <Typography>Camion</Typography>
                    <FormControl sx={{ m: 1, width: '70%' }}>
                        <InputLabel id="select-label">Camion {order?.camionId}</InputLabel>
                        <Select
                            labelId="select-label"
                            value={selectedOptionTruck}
                            name='camion_id'
                            onChange={handleChange}
                        >
                            {trucks?.map((camion, index) => {
                                return (
                                    <MenuItem key={index} value={camion.id}>{camion.marca}</MenuItem>
                                )
                            })}

                        </Select>
                    </FormControl>

                    <Typography>Fecha estimada de llegada</Typography>
                    <TextField
                        label={order?.fechaEstimada}
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
                    />
                    <Button variant='contained' sx={{ width: '40%' }} onClick={handleModifOrder}>Modificiar</Button>
                </Box>
            </Modal>
        </>
    )
}

