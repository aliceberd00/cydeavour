import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Box} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material/Search';
export default function Coordinations() {
    const gradientColors = ['#4750AB', '#5E80EB'];

    const gradientStyle: React.CSSProperties = {
        background: `linear-gradient(to right, ${gradientColors.join(', ')})`,
        height: '50vh',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
    };


    const dividerStyle: React.CSSProperties = {
        content: "''",
        width: '1px',
        backgroundColor: '#ccc',
        height: '40px', // Высота линии (можете настроить по своему вкусу)
        margin: '0 10px', // Отступы от линии до текстовых блоков
    };

    return (
        <div style={gradientStyle}>
            <Typography variant='h4' style={{ fontWeight: 600 }}>
                IP Address Tracker
            </Typography>
            <TextField
                label='Search for any IP address or domain'
                id='fullWidth'
                style={{
                    marginTop: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                }}
            />
                <Box sx={{ minWidth: 275, backgroundColor:'#fff', marginTop:'20px', borderRadius:'10px',
                    color: '#989898', }}>
                    <CardContent style={{display: 'flex'}}>
                        <div>
                        <Typography>IP Address</Typography>
                        <Typography variant='h5' style={{color:'#000'}}>192.212.174.101</Typography>
                        </div>
                        <div style={dividerStyle}></div>
                        <div>
                        <Typography>IP Location</Typography>
                        <Typography variant='h5' style={{color:'#000'}}>Brooklyn, NY, 10001</Typography>
                        </div>
                        <div style={dividerStyle}></div>
                        <div>
                        <Typography>IP Timezone</Typography>
                        <Typography variant='h5' style={{color:'#000'}}>UTC -05:00</Typography>
                        </div>
                        <div style={dividerStyle}></div>
                        <div>
                        <Typography>ISP</Typography>
                        <Typography variant='h5' style={{color:'#000'}}>SpaceX, StarLink</Typography>
                        </div>
                    </CardContent>
                </Box>
            {/*<Card style={cardStyle}>*/}
            {/*    <div>*/}
            {/*        <Typography>IP Address</Typography>*/}
            {/*        <div style={dividerStyle}></div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <Typography>Location</Typography>*/}
            {/*        <div style={dividerStyle}></div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <Typography>Timezone</Typography>*/}
            {/*        <div style={dividerStyle}></div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <Typography>ISP</Typography>*/}
            {/*    </div>*/}
            {/*</Card>*/}
        </div>
    );
}
