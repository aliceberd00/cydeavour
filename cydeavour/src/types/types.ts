
export interface IConnection{
    asn?: number | undefined,
    org?: string | undefined,
    isp?: string | undefined,
    domain?: string | undefined,
}

export interface ITimezone{
    id: string,
    abbr: string,
    is_dst: boolean,
    offset: number,
    utc: string,
    current_time: string
}

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
}
