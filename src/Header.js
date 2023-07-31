import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Header() {  
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h4" color="inherit" noWrap>Unity Careers
                    </Typography>
            
                </Toolbar>
            </AppBar>
            <Container sx={{ py: 2, display: 'flex', justifyContent: 'space-between'}} maxWidth="md">
                <Box sx={{ bgcolor: 'background.paper', pt: 6, pb: 6 }} >
                    <Container maxWidth="md">
                        <Typography component="h2" variant="h4" align="center" color="text.primary" gutterBottom >
                        Together, we empower real-time creativity around the world.
                        </Typography>
                    </Container>
                </Box>
            </Container>
        </>
    )
}