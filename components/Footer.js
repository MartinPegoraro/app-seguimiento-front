import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <>
            <Grid container sx={{ bgcolor: 'rgb(142, 178, 251)', pl: 2, pr: 2, pt: 2 }}>
                <Grid item xs={4}>
                    <Typography sx={{ textAlign: 'center' }}>Servicios</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ textAlign: 'center' }}>Nosotros</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ textAlign: 'center' }}>Ayuda</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ bgcolor: 'rgb(142, 178, 251)', pl: 2, pr: 2 }}>
                <Grid item xs={4} sx={{ pl: 1, pr: 1 }}>
                    <Typography sx={{ textAlign: 'center', p: 2 }}>
                        En nuestra empresa de logística, entendemos que la eficiencia y la puntualidad son fundamentales para el éxito de tu negocio. Por eso, ofrecemos una amplia gama de servicios diseñados para cubrir todas tus necesidades logísticas de manera integral.
                        <br />
                        <br />
                        Los servicos que ofrecemos son:
                        <br />
                        <br />

                        <ul className='ul'>
                            <li>
                                Transporte y Distribución.
                            </li>
                            <li>
                                Almacenamiento y Gestión de Inventarios.
                            </li>
                            <li>
                                Gestión de Pedidos y Fulfillment.
                            </li>
                            <li>
                                Servicio al Cliente y Seguimiento.
                            </li>
                        </ul>
                        <br />
                    </Typography>

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
