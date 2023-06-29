import { Grid, Typography, List, ListItem, Box } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';

export default function Footer({ state }) {
    const [highlighted, setHighlighted] = useState(null);

    useEffect(() => {
        if (state === 1) {
            setHighlighted('servicios');
            setTimeout(() => {
                setHighlighted(null);
            }, 3000);
        } else if (state === 2) {
            setHighlighted('nosotros');
            setTimeout(() => {
                setHighlighted(null);
            }, 3000);
        } else if (state === 3) {
            setHighlighted('ayuda');
            setTimeout(() => {
                setHighlighted(null);
            }, 3000);
        }
    }, [state]);


    return (
        <>

            <Grid container sx={{ bgcolor: 'rgb(142, 178, 251)', pl: 2, pr: 2, pt: 2 }}>
                <Grid item xs={4}>
                    <Typography sx={{ textAlign: 'center', color: highlighted === 'servicios' ? 'red' : 'black' }}>Servicios</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ textAlign: 'center', color: highlighted === 'nosotros' ? 'red' : 'black' }}>Nosotros</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ textAlign: 'center', color: highlighted === 'ayuda' ? 'red' : 'black' }}>Ayuda</Typography>
                </Grid>
            </Grid>

            <Grid container sx={{ bgcolor: 'rgb(142, 178, 251)', pl: 2, pr: 2 }}>
                <Grid item xs={4} sx={{ pl: 1, pr: 1 }}>
                    <Typography sx={{ textAlign: 'center', p: 2 }}>
                        En nuestra empresa de logística, entendemos que la eficiencia y la puntualidad son fundamentales para el éxito de tu negocio. Por eso, ofrecemos una amplia gama de servicios diseñados para cubrir todas tus necesidades logísticas de manera integral.
                        <br />
                    </Typography>
                    <Typography sx={{ p: 2 }}>Los servicios que ofrecemos son:</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <List >
                            <ListItem>Transporte y Distribución.</ListItem>
                            <ListItem>Almacenamiento y Gestión de Inventarios.</ListItem>
                            <ListItem>Gestión de Pedidos y Fulfillment.</ListItem>
                            <ListItem>Servicio al Cliente y Seguimiento.</ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ textAlign: 'center', p: 2 }}>
                        En TRANSPORTENETA, nos enorgullece ser líderes en la industria de la logística. Con años de experiencia y un equipo altamente capacitado, nos hemos convertido en el socio confiable para empresas de diferentes sectores que buscan soluciones logísticas integrales y eficientes.
                        <br />
                        Nuestra misión es brindar servicios logísticos de calidad, adaptados a las necesidades específicas de cada cliente. Nos enfocamos en ofrecer soluciones a medida, utilizando tecnología de vanguardia y procesos eficientes para garantizar la máxima satisfacción.
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ textAlign: 'center', p: 2 }}>
                        Preguntas frecuentes
                        <br />
                        <br />
                        Celular: 3644 723456
                        <br />
                        <br />
                        Correo: mileteAmo@gmail.com
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}
