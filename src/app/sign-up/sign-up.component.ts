import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm:any

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "clubName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "clubEmailAddress": new FormControl(null, Validators.required),
      "clubId": new FormControl(null, Validators.required),
      "clubPhone": new FormControl(null, Validators.required),
      "clubPlayers-Number": new FormControl('', Validators.required)
    });
  }
 
submitData(){
  console.log(this.signupForm.value);
}

get clubName(){
  return this.signupForm.get('clubName');
}

}
