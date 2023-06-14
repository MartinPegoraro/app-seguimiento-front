import { apiRest } from '@/pages/api/api';
import { Modal, Box, TextField, Button, Typography, Autocomplete } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';

const ModalCreateState = ({ open, handleClose, orders }) => {

    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);

    const handleInputChange = async (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);

        // Realizar una solicitud a la API de datos abiertos del Gobierno de Argentina
        // para obtener las ciudades que coincidan con el valor de entrada
        const localidad = await axios.get(`https://apis.datos.gob.ar/georef/api/municipios?nombre=${inputValue}`)
            .then((response) => {
                const cities = response.data.municipios.map((city) => {
                    return city.nombre + ', ' + city.provincia.nombre
                });

                setOptions(cities);
            })
            .catch((error) => {
                console.error(error);
                setOptions([]);
            });


    };

    const handleSubmitState = () => {
        console.log(value);
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

                    <Autocomplete
                        sx={{ m: 2 }}
                        options={options}
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        isOptionEqualToValue={(option, value) => option.nombre === value.nombre}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Ciudad"
                                onChange={handleInputChange}
                            />
                        )}
                    />

                    <Button variant='contained' sx={{ display: 'block', margin: 'auto' }} onClick={handleSubmitState}>Enviar</Button>
                </Box>
            </Modal>
        </>
    )
}

export default ModalCreateState