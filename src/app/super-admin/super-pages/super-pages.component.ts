import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-pages',
  templateUrl: './super-pages.component.html',
  styleUrls: ['./super-pages.component.css']
})
export class SuperPagesComponent implements OnInit {

  displayView = false;

  toggleView(){
      this.displayView = !this.displayView;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
