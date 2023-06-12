import { apiRest } from '@/pages/api/api'
import { Modal, Box, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel, Autocomplete } from '@mui/material'
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

    const handleModifOrder = async () => {
        const dataFinalOrder = {
            destino: !dataOrder.destino ? order.destino : dataOrder.destino,
            cliente: { id: !dataOrder.cliente.id ? order.clienteId : dataOrder.cliente.id },
            camion: { id: !dataOrder.camion.id ? order.camionId : dataOrder.camion.id },
            fechaEstimada: !dataOrder.fechaEstimada ? order.fechaEstimada : dataOrder.fechaEstimada,
        }
        console.log(dataFinalOrder);
        const res = await apiRest.updateOneOrder(order?.id, dataFinalOrder)
        console.log(res?.status);
        if (res.status === 200 || res.status === 201) {
            console.log('124asdfgasdft');
            handleClose()
        }
    }

    const handleInputChange = (event, value) => {
        setSelectedOptionClient(value);
        setDataOrder({ ...dataOrder, cliente: { id: value ? value.id : '' } });
    };
    const handleInputChangeTruck = (event, value) => {
        setSelectedOptionTruck(value);
        setDataOrder({ ...dataOrder, camion: { id: value ? value.id : '' } });
    };

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
                    <Autocomplete

                        sx={{ width: '70%', margin: 'auto', }}
                        options={clients}
                        getOptionLabel={(cliente) => cliente ? `${cliente.nombre} ${cliente.apellido}` : ''}
                        value={selectedOptionClient}
                        onChange={handleInputChange}
                        renderInput={(params) => (
                            <TextField {...params} label={order?.clienteNombre} />
                        )}
                    />

                    <Typography>Camion</Typography>
                    <Autocomplete

                        sx={{ width: '70%', margin: 'auto', }}
                        options={trucks}
                        getOptionLabel={(camion) => camion ? `${camion.marca}` : ''}
                        value={selectedOptionTruck}
                        onChange={handleInputChangeTruck}
                        renderInput={(params) => (
                            <TextField {...params} label={order?.camionId} />
                        )}
                    />


                    {/* <Typography>Camion</Typography>
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
                    </FormControl> */}

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

