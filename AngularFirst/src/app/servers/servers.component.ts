import { Component, OnInit } from '@angular/core';

//1.selector tag olarak kullanılır en cok tek kullanılan şekil
//2.selector div olarak kullanılır
//3.selector div classı olarak kullanılır
@Component({
  selector: 'app-servers',
  //selector:'[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created! ';
  serverName= 'Testserver';
  serverCreated= false;
  servers = ['TestServer', 'Testeserver 2'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated=true;
    this.serverCreationStatus = 'Server was created ! Server name is : '+ this.serverName;
    //ngFor ile diziye server ekliyor
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
