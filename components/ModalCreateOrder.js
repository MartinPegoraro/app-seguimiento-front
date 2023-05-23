import { truckApi } from '@/pages/api/truck';
import { Modal, Typography, Box, TextField, Button, Grid, Select, MenuItem, FormControl, InputLabel, Autocomplete } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useState } from 'react';
import ModalCreateUser from './ModalCreateUSer';



const ModalCreateOrder = ({ handleCloseModalCreateOrder, openModalCreateOrder, camiones, clientes }) => {
    const [formData, setFormData] = useState({ fecha_salida: '', fecha_estimada: '', destino: '', camion: { id: '' }, cliente: { id: '' }, entregado: false })

    const [selectedOptionTruck, setSelectedOptionTruck] = useState('');
    const [selectedOptionClient, setSelectedOptionClient] = useState('');
    const [openModal, setOpenModal] = useState(false)

    const handleChange = (event) => {
        setSelectedOptionTruck(event.target.value);
        setFormData({ ...formData, camion: { id: event.target.value } })
    };
    const handleChangeClient = (event) => {
        setSelectedOptionClient(event.target.value);
        setFormData({ ...formData, cliente: { id: event.target.value } })
    };

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

    // ---------------------------------------------AUTOCOMPLETAR----------------------------------------------------
    // const handleAutocompleteChange = (event, value) => {
    //     setSelectedOption(value);
    //     // Lógica para rellenar los demás campos con los datos restantes
    //     const selectedData = usuarios.find((option) => option?.nombre === value?.nombre);
    //     console.log(envent, value);
    //     console.log(selectedData);
    //     if (selectedData) {
    //         console.log('1');
    //         setOtherField1(selectedData);
    //     } else {
    //         console.log('2');
    //         setOtherField1('');
    //     }
    // };


    const handleSubmit = () => {
        console.log(formData);
        const res = truckApi.createOneOrder(formData)
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
                    <Box sx={{ maxWidth: '70%', textAlign: 'center' }}>

                        <Grid container >
                            <Grid item xs={8}>
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel id="select-label">Selecciona un cliente</InputLabel>
                                    <Select
                                        labelId="select-label"
                                        value={selectedOptionClient}
                                        name='cliente_id'
                                        onChange={handleChangeClient}
                                    >
                                        {clientes?.map((cliente, index) => {
                                            return (

                                                <MenuItem key={index} value={cliente.id}>{cliente.nombre}</MenuItem>
                                            )
                                        })}

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={handleOpenModal}>
                                    <PersonAddIcon />
                                </Button>
                            </Grid>
                        </Grid>
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
                        name='fecha_salida'
                        value={formData.fecha_salida}
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
                        name='fecha_estimada'
                        value={formData.fecha_estimada}
                        size='small'
                        required
                        id="outlined-required"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="Fecha estimada de llegada"
                    />

                    {/* <FormControl sx={{ m: 1, width: '70%' }}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={clientes}
                            getOptionLabel={(cliente) => cliente?.nombre}
                            renderInput={(params) => <TextField {...params} label="Selecciona un cliente" />}
                        />
                    </FormControl> */}

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