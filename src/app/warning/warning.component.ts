import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'app-warning',
  template : `<app-success></app-success>
  <app-success></app-success>`,
  styleUrls: ['./warning.component.css']
  

  
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
