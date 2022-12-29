import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthRequest } from 'src/app/common/auth-request';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signInFormGroup: FormGroup;

  constructor(private formBuilder:FormBuilder, private authService:AuthService) { }

  ngOnInit() {
    this.signInFormGroup = this.formBuilder.group({
      protocol: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      serverUrl: new FormControl('')
    });
  }
  auth(){
    // this handles the login
    let request = new AuthRequest;
    request = this.signInFormGroup.value;
    //console.log(request);
    
    // go to service to handle the authentication
    this.authService.authenticate(request);
  }

}
