import { Modal, Typography, Box, TextField, Button, Grid, Select, MenuItem, FormControl, InputLabel, Autocomplete } from '@mui/material';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ModalCreateOrder = ({ handleCloseModalCreateOrder, openModalCreateOrder, camiones, clientes }) => {
    const [formData, setFormData] = useState({ fecha_salida: '', fecha_estimada: '', destino: '', camion_id: '', cliente_id: '' })

    const [selectedOptionTruck, setSelectedOptionTruck] = useState('');
    const [selectedOptionClient, setSelectedOptionClient] = useState('');

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChangeDate = (date) => {
        setSelectedDate(date);
    };
    // const handleAutocompleteChange = (event, value) => {
    //     setSelectedOption(value);
    // };

    const handleDateChange = (date) => {
        setSelectedDateStart(date);
    };

    const handleChange = (event) => {
        setSelectedOptionTruck(event.target.value);
        setFormData({ ...formData, camion_id: event.target.value })
    };
    const handleChangeClient = (event) => {
        setSelectedOptionClient(event.target.value);
        setFormData({ ...formData, cliente_id: event.target.value })
    };

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value
        });
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
    }
    return (
        <>
            <Modal
                open={openModalCreateOrder}
                onClose={handleCloseModalCreateOrder}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='boxModalCreateUser'>
                    <Typography>Crear un nuevo pedido para un cliente</Typography>

                    <DatePicker
                        className='datePiker'
                        placeholderText='12/05/2023'
                        selected={selectedDate}
                        onChange={handleDateChangeDate}
                        dateFormat="dd/MM/yyyy"
                    // Resto de las props que desees utilizar
                    />
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='fecha_salida'
                        label='fecha de salida'
                        value={formData.fecha_salida}
                        size='small'
                        required
                        id="outlined-required"
                    />

                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='fecha_estimada'
                        label='fecha estimada'
                        value={formData.fecha_estimada}
                        size='small'
                        required
                        id="outlined-required"
                    />
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