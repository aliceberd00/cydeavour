import {Dispatch, SetStateAction} from "react";

export interface ITypes {
    ip?: string | undefined,
    country?: string | undefined,
    city?: string | undefined,
    postal?: string | undefined,
    latitude?: number | undefined,
    longitude?: number | undefined,
    timezone?: {
        utc: string | undefined,
    },
    connection?: {
        isp: string | undefined,
    }
}

export interface ICoordinationsProps {
    ip?: string | undefined,
    country?: string | undefined,
    city?: string | undefined,
    postal?: string | undefined,
    latitude?: number | undefined,
    longitude?: number | undefined,
    utc?: string | undefined,
    isp?: string | undefined,
    allData?: ITypes,
    setAllData: Dispatch<SetStateAction<ITypes | undefined>>
}

export interface IMapProps {
    latitude?: number | undefined,
    longitude?: number | undefined,
}