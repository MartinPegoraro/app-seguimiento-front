import React from 'react'
import Container from '@mui/material/Container';


export default function Layout({ children }) {
    return (
        <Container disableGutters={true}
            sx={{
                minHeight: '100vh',
                maxHeight: "100vh",
                minWidth: '100vw',
                maxWidth: "100vw"
            }}
        >
            {children}
        </Container>
    )
}
