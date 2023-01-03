import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInfo } from 'src/app/common/auth-info';
import { Song } from 'src/app/common/song';
import { Track } from 'src/app/common/track';
import { RandomSongService } from 'src/app/service/random-song.service';
import { Howl } from 'howler';
import { SongsService } from 'src/app/service/songs.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {
  songs:Song[];
  authInfo:AuthInfo;

  
  

  constructor(private router:Router,private randomSongService:RandomSongService,private songsService:SongsService) {}
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


  // implements the music player 

  
  activeSong: Song = null;
  player : Howl = null;
  start(song: Song){
    var blob = null;
    this.songsService.streamSong(song.id).then(
      (data) => {
        blob = new Blob([data]);
      }
    ).catch((error) =>{

      console.log(error)}
      );

    this.player = new Howl({
      src : blob
    });
    console.log(blob);
    this.player.play();

  }
  togglePlayer( pause) {

  }
  next(){

  }
  prev(){

  }
  seek(){

  }
  updateProgress(){

  }

}
