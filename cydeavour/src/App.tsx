import React, {useEffect, useState} from 'react';
import './App.css';
import Coordinations from "./Component/Coordinations/Coordinations";
import {ITypes} from "./types/types";
import {getCoordination} from "./asynAction/getCoordination";
import Map from "./Component/Map/Map";

function App() {
    const [allData, setAllData] = useState<ITypes>()

     useEffect(() => {
            const fetchData = async () => {
                const data = await getCoordination("");
                setAllData(data)
            }
            fetchData()
        },[]);

    return (
        <>
            <Coordinations
                ip={allData?.ip}
                country={allData?.country}
                city={allData?.city}
                postal={allData?.postal}
                utc={allData?.timezone?.utc}
                isp={allData?.connection?.isp}
                allData={allData}
                setAllData={setAllData}
            />
            <Map latitude={allData?.latitude} longitude={allData?.longitude}/>
        </>
    );
}

export default App;
