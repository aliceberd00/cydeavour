import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Box} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import {ICoordinationsProps, ITypes} from "../../types/types";
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import {getCoordination} from "../../asynAction/getCoordination";

const Coordinations: React.FC<ICoordinationsProps> = ({
                                                          ip,
                                                          country,
                                                          city,
                                                          postal,
                                                          utc,
                                                          isp ,
                                                          longitude,
                                                          latitude,
                                                          allData,
                                                          setAllData
}) => {
    const gradientColors = ['#4750AB', '#5E80EB'];
    const [textIp, setTextIp] = useState<string>("")


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
    const handleChangeIp = (e: React.ChangeEvent<any>) => {
        if (e.target.value !== undefined){setTextIp(e.target.value)}
    }

    const handleButtonClick = async() => {
        const data = await getCoordination(textIp);
        setAllData(data)
    }

    return (
        <>
        <div style={gradientStyle}>
            <Typography variant='h4' style={{ fontWeight: 600 }}>
                IP Address Tracker
            </Typography>
            <Box>
                <TextField
                    label='Search for any IP address or domain'
                    // fullWidth
                    value={textIp}
                    style={{
                        marginTop: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                    }}
                    onChange={handleChangeIp}
                />
                <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={handleButtonClick}
                    style={{
                        marginTop: '25px',
                        // backgroundColor: '#fff',
                        borderRadius: '20px',
                    }}
                >
                    <SendIcon fontSize="small" />
                </IconButton>
            </Box>

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
        </>
    );
}
export default Coordinations