import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function Coordinations() {
    const gradientColors = ['#4750AB', '#5E80EB'];

    const gradientStyle: React.CSSProperties = {
        background: `linear-gradient(to right, ${gradientColors.join(', ')})`,
        height: '50vh',
        display: 'flex',
        flexDirection: 'column' as const, // Используем 'as const' для явного указания типа
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
    };

    return (
        <div style={gradientStyle}>
            <Typography variant='h4' style={{ fontWeight: 600 }}>
                IP Address Tracker
            </Typography>
            <TextField label="Search for any IP address or domain" id="fullWidth" style={{ marginTop: '20px',
            backgroundColor:'#fff', borderRadius:'10px'
            }}/>
        </div>
    );
}
