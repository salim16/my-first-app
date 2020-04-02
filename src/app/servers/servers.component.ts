import { Component, OnInit } from '@angular/core';
import { Server } from '../server/server.model';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverIdCounter: number = 0;
  serverName: string = '';
  serverCreationStatus: string = 'No server was created!';
  userName: string = '';
  serverCreated: boolean = false;
  servers: Array<Server> = [];
  showSecret: boolean = false;
  // log: String[] = new Array();
  log: Date[] = Array();

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  getAllowNewServer() {
    return this.allowNewServer;
  }

  onCreateServer() {
    this.serverCreated = true;
    // Initially setting the server status to offline, not of the actual Server component 
    // but of the server object.
    // The server status gets updated while actual Server component is created during
    // iterating of for loop
    this.servers.push(new Server(++this.serverIdCounter, this.serverName, 'offline'));
    this.serverCreationStatus = 'Server was created!, Name was: ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  isUserNameFilled() {
    return this.userName === '';
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
