export class Server {
    public serverId : number;
    public serverName : string;
    public serverStatus : string;

    constructor(serverId: number, serverName: string, serverStatus: string) {
        this.serverId = serverId;
        this.serverName = serverName;
        this.serverStatus = serverStatus;
    }
}