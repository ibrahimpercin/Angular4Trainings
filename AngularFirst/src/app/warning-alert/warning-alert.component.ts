import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>This is warning your are in danger</p>
  `,
  styles: [`
    p{
      font-size: 16px;
      padding : 16px;
      background-color: mistyrose;
      border : 1px solid red;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
