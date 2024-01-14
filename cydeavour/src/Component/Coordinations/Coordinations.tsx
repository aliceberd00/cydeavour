import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Box} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import {ICoordinationsProps, ITypes} from "../../types/types";
// import SearchIcon from '@mui/icons-material/Search';


const Coordinations: React.FC<ICoordinationsProps> = ({  ip, country, city, postal, utc, isp ,
                                                 }) => {
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
                        <Typography variant='h5' style={{color:'#000'}}>{ip}</Typography>
                        </div>
                        <div style={dividerStyle}></div>
                        <div>
                        <Typography>IP Location</Typography>
                        <Typography variant='h5' style={{color:'#000'}}>{country},{city}, {postal}</Typography>
                        </div>
                        <div style={dividerStyle}></div>
                        <div>
                        <Typography>IP Timezone</Typography>
                        <Typography variant='h5' style={{color:'#000'}}>UTC: {utc}</Typography>
                        </div>
                        <div style={dividerStyle}></div>
                        <div>
                        <Typography>ISP</Typography>
                        <Typography variant='h5' style={{color:'#000'}}>{isp}</Typography>
                        </div>
                    </CardContent>
                </Box>
        </div>
    );
}
export default Coordinations