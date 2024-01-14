import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Coordinations from "./Component/Coordinations/Coordinations";
import {ITypes} from "./types/types";
import {getCoordination} from "./asynAction/getCoordination";


function App() {
    const [allData, setAllData] = useState<ITypes>()

     useEffect(() => {
            const fetchData = async () => {
                const data = await getCoordination();
                setAllData(data)
            }
            fetchData()
        },[]);

        console.log(allData)

    return (
        <>
            <Coordinations
                ip={allData?.ip}
                country={allData?.country}
                city={allData?.city}
                postal={allData?.postal}
                utc={allData?.timezone?.utc}
                isp={allData?.connection?.isp}
            />
        </>
    );
}

export default App;
