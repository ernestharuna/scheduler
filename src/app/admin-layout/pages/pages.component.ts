import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  
  displayView = false;

  toggleView(){
      this.displayView = !this.displayView;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
