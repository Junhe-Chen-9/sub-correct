import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInfo } from 'src/app/common/auth-info';
import { Song } from 'src/app/common/song';
import { RandomSongService } from 'src/app/service/random-song.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {
  songs:Song[];
  authInfo:AuthInfo;


  constructor(private router:Router,private randomSongService:RandomSongService) {}
  ngOnInit(): void {
    this.authInfo = JSON.parse(localStorage.getItem("authInfo"));
    if(this.authInfo == null){
      this.router.navigateByUrl("/login");
    }
    
  }
  async random(){
    let response = await this.randomSongService.getRandomSongs();
    console.log(response['subsonic-response']);
    this.songs = response['subsonic-response'].randomSongs.song;
    console.log(this.songs);
  }
  async stream(){
    
  }

}
