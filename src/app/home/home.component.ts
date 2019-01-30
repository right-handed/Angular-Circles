import { Component, OnInit } from '@angular/core';
import {CIRCLES} from '../circles-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    circles = CIRCLES;

  constructor() { }

  ngOnInit() {
  }

}
