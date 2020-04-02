import { Component, Input } from '@angular/core';
import { Server } from './server.model';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color : white;
        }
    `]
})
export class ServerComponent {
    serverStatus: string = "offline";
    @Input() server: Server;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';     
    }

    ngOnInit() {
        this.server.serverStatus = this.serverStatus;
    }

    getServerStatus() {
        return this.server.serverStatus;
    }

    getColor() {
        return this.server.serverStatus === 'online' ? 'green' : 'red';
    }
}