import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInfo } from '../common/auth-info';
import { Axios } from 'axios';
import { Song } from '../common/song';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomSongService {
  authInfo:AuthInfo;
  
  constructor(private httpClient:HttpClient) { }

  /*
  async getRandomSongs(){
    this.authInfo = JSON.parse(localStorage.getItem("authInfo"));
    let url = `${this.authInfo.p}://${this.authInfo.url}/rest/getRandomSongs?u=${this.authInfo.u}&v=1.16.1&c=subCorrect_v.0.0.1&f=json&s=${this.authInfo.s}&t=${this.authInfo.t}`
    return this.httpClient.get(url).subscribe(
      (res) =>{
        console.log(res);
      },
      (error) =>{
        console.log(error);
      }
    )
  }
 */
  
  async getRandomSongs():Promise<any>{
    let res = null;
    this.authInfo = JSON.parse(localStorage.getItem("authInfo"));
    let url = `${this.authInfo.p}://${this.authInfo.url}/rest/getRandomSongs?u=${this.authInfo.u}&v=1.16.1&c=subCorrect_v.0.0.1&f=json&s=${this.authInfo.s}&t=${this.authInfo.t}`
    try{
      res = await this.httpClient.get(url).toPromise();

    }
    catch(error){
      console.log(error);
    }
    console.log(res);
    return res;

  }
  
}



