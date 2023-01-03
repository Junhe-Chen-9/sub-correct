import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInfo } from '../common/auth-info';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  authInfo: AuthInfo;

  constructor(private httpClient:HttpClient) { }

  async streamSong(id:String):Promise<any>{
    let res = null;
    this.authInfo = JSON.parse(localStorage.getItem("authInfo"));
    let url = `${this.authInfo.p}://${this.authInfo.url}/rest/stream?u=${this.authInfo.u}&v=1.16.1&c=subCorrect_v.0.0.1&f=json&s=${this.authInfo.s}&t=${this.authInfo.t}&id=${id}&format=mp3`
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
