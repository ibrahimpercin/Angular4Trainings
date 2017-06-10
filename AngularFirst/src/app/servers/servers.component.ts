import { Component, OnInit } from '@angular/core';

//1.selector tag olarak kullanılır en cok tek kullanılan şekil
//2.selector div olarak kullanılır
//3.selector div classı olarak kullanılır
@Component({
  selector: 'app-servers',
  //selector:'[app-servers]',
  //selector: '.app-servers',
  template: `
  <app-server></app-server>
  <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
