import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbclick',
  templateUrl: './dbclick.component.html',
  styleUrls: ['./dbclick.component.css']
})
export class DbclickComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  click($event) {
    console.log($event);
    console.log('click');
  }

  dbclick() {
    console.log('dbclick');
  }

}
