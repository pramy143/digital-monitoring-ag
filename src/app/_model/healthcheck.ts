export interface Healthcheck {
    id: number;
    region: string;
    apiName: string;
    apiServiceURL: string;
    statusAsOn: string;
    status: string;
    description: string;
    environment: string;

}
