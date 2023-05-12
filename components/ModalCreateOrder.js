import { Modal, Typography, Box, TextField, Button, Grid, Select, MenuItem, FormControl, InputLabel, Autocomplete } from '@mui/material';
import { useState } from 'react';

const ModalCreateOrder = ({ handleCloseModalCreateOrder, openModalCreateOrder, camiones, usuarios }) => {
    const [formData, setFormData] = useState({ startDate: '', estimatedDate: '', destination: '', idProduct: '', idClient: '', idTruck: '' })

    const [selectedOptionTruck, setSelectedOptionTruck] = useState('');
    const [selectedOptionClient, setSelectedOptionClient] = useState('');

    // const [selectedOption, setSelectedOption] = useState('');
    // const [otherField1, setOtherField1] = useState('');

    const handleChange = (event) => {
        setSelectedOptionTruck(event.target.value);
        setFormData({ ...formData, idTruck: event.target.value })
    };
    const handleChangeClient = (event) => {
        setSelectedOptionClient(event.target.value);
        setFormData({ ...formData, idClient: event.target.value })
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
                    {/* <Autocomplete
                        freeSolo
                        options={usuarios}
                        getOptionLabel={(user) => user.nombre}
                        value={formData.idClient}
                        onChange={handleAutocompleteChange}
                        renderInput={(params) => (
                            <TextField {...params} label="Autocompletado" variant="outlined" />
                        )}
                    />
                        <TextField
                            sx={{ m: 1, width: '70%' }}
                            onChange={onInputChange}
                            name='estimatedDate'
                            label={otherField1.apeellido}
                            value={otherField1.apeellido}
                            size='small'
                            required
                            id="outlined-required"
                        /> */}
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='startDate'
                        label='fecha de salida'
                        value={formData.startDate}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='startDate'
                        label='fecha de salida'
                        value={formData.startDate}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='estimatedDate'
                        label='fecha estimada'
                        value={formData.estimatedDate}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <TextField
                        sx={{ m: 1, width: '70%' }}
                        onChange={onInputChange}
                        name='destination'
                        label='destino'
                        value={formData.destination}
                        size='small'
                        required
                        id="outlined-required"
                    />
                    <FormControl sx={{ m: 1, width: '70%' }}>
                        <InputLabel id="select-label">Selecciona un camion</InputLabel>
                        <Select
                            labelId="select-label"
                            value={selectedOptionTruck}
                            name='idTruck'
                            onChange={handleChange}
                        >
                            {camiones.map((truck, index) => {
                                return (

                                    <MenuItem key={index} value={truck.camion}>camion {truck.camion}</MenuItem>
                                )
                            })}

                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '70%' }}>
                        <InputLabel id="select-label">Selecciona un cliente</InputLabel>
                        <Select
                            labelId="select-label"
                            value={selectedOptionClient}
                            name='idClient'
                            onChange={handleChangeClient}
                        >
                            {usuarios.map((user, index) => {
                                return (

                                    <MenuItem key={index} value={user.nombre}>cliente {user.nombre}</MenuItem>
                                )
                            })}

                        </Select>
                    </FormControl>
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