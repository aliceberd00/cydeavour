import React from 'react';
import { ICoordinationsProps } from "../../types/types";
import GoogleMapReact from "google-map-react";
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { googleMapKey } from "../../globalConfig";




const Map: React.FC<ICoordinationsProps> = ({ longitude, latitude }) => {
    const mapContainerStyle = {
        width: '100vw',
        height: '50vh',
    };
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: googleMapKey,
        // libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }
    if (latitude != undefined && longitude != undefined){
        const center = {
            lat: latitude,
            lng: longitude,
        }

        return (
            <>
                <div style={{ height: '70vh', width: '100%' }}>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={10}
                        center={center}
                        // bootstrapURLKeys={{ key: googleMapKey }}
                        // defaultCenter={defaultProps.center}
                        // defaultZoom={defaultProps.zoom}
                    >
                        <MarkerF
                            position={center}
                            // title={'Hello World!'}
                        />
                    </GoogleMap>
                </div>
            </>
        );
    }
    else {
        return (
            <></>
        )
    }


}

export default Map;
