import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Footer() {  
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://careers.unity.com/">
                Unity Careers
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
