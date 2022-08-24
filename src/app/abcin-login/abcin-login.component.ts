import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abcin-login',
  templateUrl: './abcin-login.component.html',
  styleUrls: ['./abcin-login.component.css']
})
export class AbcinLoginComponent implements OnInit {

  
    abcinLogin = new FormGroup({
      firstName : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      lastName : new FormControl('', [Validators.required, Validators.email]),
      newValue : new FormControl('', [Validators.required])
    });

    public LoginForm: FormGroup | undefined

  constructor() { }

  ngOnInit(): void {
  }

onSubmit(){
  console.warn(this.abcinLogin.value);
}

}
