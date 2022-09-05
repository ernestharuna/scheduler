import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abcin-login',
  templateUrl: './abcin-login.component.html',
  styleUrls: ['./abcin-login.component.css']
})
export class AbcinLoginComponent implements OnInit {

  abcinLogin = new FormGroup({
      name : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      password : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.abcinLogin.value);
  }

  get name(){
    return this.abcinLogin.get('name');
  }

  get password(){
    return this.abcinLogin.get('password');
  }

}


