import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInfo } from 'src/app/common/auth-info';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  authInfo:AuthInfo;
  
  constructor(private router:Router) {}
  ngOnInit(): void {
    this.authInfo = JSON.parse(localStorage.getItem("authInfo"));
    if(this.authInfo == null){
      this.router.navigateByUrl("/login");
    }
  }

}
