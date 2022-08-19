import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  displayValue = true;

  toggleDispplay(){
    this.displayValue = !this.displayValue;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
