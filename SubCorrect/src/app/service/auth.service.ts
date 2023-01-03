import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthRequest } from '../common/auth-request';
import { Md5 } from 'ts-md5'
import { AuthInfo } from '../common/auth-info';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  md5 = new Md5();

  constructor(private http: HttpClient, private router:Router) { }

  authenticate(request:AuthRequest){
    // get all the informations
    let serverUrl = request.serverUrl;
    let username = request.username;
    let password = request.password;
    let protocol = request.protocol;

    // generating salt 6 character long
    let salt = Math.random().toString(36).substring(2,8);
    let md5password = this.md5.appendStr(password+salt).end();
    console.log(salt);
    console.log(md5password);

    let url = `${protocol}://${serverUrl}/rest/ping?u=${username}&v=1.16.1&c=subCorrect_v.0.0.1&f=json&s=${salt}&t=${md5password}`

    // we need to make this promise based 
    const promise = this.http.get(url).subscribe(
      (res) => {
        // there is a result
        console.log(res);

        // store the auth res
        let cred = new AuthInfo();
        cred.c = "subCorrect_v.0.0.1";
        cred.url = serverUrl;
        cred.u = username;
        cred.f = "json";
        cred.v ="1.16.1";
        cred.s = salt;
        cred.t = md5password.toString();
        cred.p = protocol;
        //console.log(md5password);
        //console.log(cred.t);
        localStorage.setItem("authInfo",JSON.stringify(cred));
        localStorage.setItem("token",`ping?u=${username}&v=1.16.1&c=subCorrect_v.0.0.1&f=json&s=${salt}&t=${md5password}`);
        this.router.navigateByUrl('/home');
        

      },
      (error) => {
        console.log("error!!!!!!!");
        console.log(error);
      }
    )

    // now finished
    console.log("async api call completed");

  }



}
