import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  loginDetails = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required, Validators.minLength(3)])
  })
  
  ngOnInit(): void {

  }

  constructor() { }

  onClick(){
    console.warn(this.loginDetails.value);
  }

  get name(){
    return this.loginDetails.get('name');
  }

}


