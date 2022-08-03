import { Component, OnInit } from '@angular/core';
import { PlayerList } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  PlayersList: PlayerList[] = [];
  value: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  playerData(){

    // this.value = 'string';

  }

  // const inputText = document.querySelector('#txt');
  // const myButton = document.querySelector('.btn-list');
  // const list = document.querySelector('.container');

  // myButton.addEventListener('click', (e) => {
  //   if(inputText.value !=""){
  //     e.preventDefault();

  //     const myLi = documenent.createElement('li');
  //     myLi.innerHTML = inputText.value;
  //     ListComponent.appendChild(myLi)
  //   }
  // })
}

