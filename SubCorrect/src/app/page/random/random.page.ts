import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInfo } from 'src/app/common/auth-info';
import { RandomSongService } from 'src/app/service/random-song.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  authInfo:AuthInfo;

  constructor(private router:Router,private randomSongService:RandomSongService) {}
  ngOnInit(): void {
    this.authInfo = JSON.parse(localStorage.getItem("authInfo"));
    if(this.authInfo == null){
      this.router.navigateByUrl("/login");
    }
    
  }
  async random(){
    let temp = await this.randomSongService.getRandomSongs();
    
  }

}
