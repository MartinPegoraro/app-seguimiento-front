import { apiRest } from '@/pages/api/api';
import { Modal, Typography, Box, TextField, Button, Grid, Tooltip, Select, MenuItem, FormControl, InputLabel, Autocomplete } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useState } from 'react';
import ModalCreateUser from './ModalCreateUser';



const ModalCreateOrder = ({ handleCloseModalCreateOrder, openModalCreateOrder, camiones, clientes }) => {
    const [formData, setFormData] = useState({ fechaSalida: '', fechaEstimada: '', destino: '', camion: { id: '' }, cliente: { id: '' }, entregado: false })

    const [selectedOptionTruck, setSelectedOptionTruck] = useState('');
    const [selectedOptionClient, setSelectedOptionClient] = useState('');
    const [openModal, setOpenModal] = useState(false)


    const handleInputChange = (event, value) => {
        setSelectedOptionClient(value);
        setFormData({ ...formData, cliente: { id: value ? value.id : '' } });
    };

    const handleChange = (event) => {
        setSelectedOptionTruck(event.target.value);
        setFormData({ ...formData, camion: { id: event.target.value } })
    };
    // const handleInputChange = (event) => {
    //     setSelectedOptionClient(event.target.value);
    //     setFormData({ ...formData, cliente: { id: event.target.value } })
    // };

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleOpenModal = () => {
        setOpenModal(true)
        handleCloseModalCreateOrder()
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }



    const handleSubmit = async () => {
        const res = await apiRest.createOneOrder(formData)
        if (res?.status === 201) {
            handleCloseModalCreateOrder()
        }
    }
    return (
        <>
            <ModalCreateUser
                handleCloseModal={handleCloseModal}
                openModal={openModal}
            />
            <Modal
                open={openModalCreateOrder}
                onClose={handleCloseModalCreateOrder}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box className='boxModalCreateUser'>
                    <Button sx={{ display: 'block' }} onClick={() => handleCloseModalCreateOrder()}>
                        <ArrowBackIcon />
                    </Button>
                    <Typography>Crear un nuevo pedido para un cliente</Typography>
                    <Box sx={{ textAlign: 'center' }}>


                        <Typography>Cliente</Typography>
                        <Autocomplete

                            sx={{ width: '57%', margin: 1 }}
                            options={clientes}
                            getOptionLabel={(cliente) => cliente ? `${cliente.nombre} ${cliente.apellido}` : ''}
                            value={selectedOptionClient}
                            onChange={handleInputChange}
                            renderInput={(params) => (
                                <TextField {...params} label='Cliente' />
                            )}
                        />


                        <Tooltip title="Crear nuevo cliente" arrow >
                            <Button onClick={handleOpenModal} sx={{ mt: 1, padding: 2 }}>
                                <PersonAddIcon />
                            </Button>
                        </Tooltip>
                    </Box>
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='destino'
                        label='destino'
                        value={formData.destino}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <FormControl sx={{ m: 1, width: '70%' }}>
                        <InputLabel id="select-label">Selecciona un camion</InputLabel>
                        <Select
                            labelId="select-label"
                            value={selectedOptionTruck}
                            name='camion_id'
                            onChange={handleChange}
                        >
                            {camiones?.map((camion, index) => {
                                return (

                                    <MenuItem key={index} value={camion.id}>{camion.marca}</MenuItem>
                                )
                            })}

                        </Select>
                    </FormControl>

                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        type='date'
                        name='fechaSalida'
                        value={formData.fechaSalida}
                        size='small'
                        required
                        id="outlined-required"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="Fecha de salida"
                    />

                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        type='date'
                        name='fechaEstimada'
                        value={formData.fechaEstimada}
                        size='small'
                        required
                        id="outlined-required"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="Fecha estimada de llegada"
                    />

                    <Grid container sx={{ justifyContent: 'center' }}>
                        <Grid item>
                            <Button variant='contained' sx={{ display: 'block' }} onClick={handleSubmit}>
                                <Typography sx={{ textTransform: 'capitalize' }}> Crear Pedido</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal >
        </>
    )
}

export default ModalCreateOrder