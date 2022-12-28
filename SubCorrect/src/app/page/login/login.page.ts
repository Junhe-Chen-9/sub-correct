import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signInFormGroup: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.signInFormGroup = this.formBuilder.group({
      
      username: new FormControl('', [Validators.required]),


    });
  }
  auth(){
    
  }

}
