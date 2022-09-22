import { Component, HostBinding, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  games: any = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.getGames();
  }

  deleteGame(id: string){
    console.log(id);
    this.gamesService.deleteGame(id).subscribe(
      resp => {
        console.log(resp)
        this.getGames();
      },
      err => console.error(err)
    );
  }

  getGames(){
    this.gamesService.getGames().subscribe(
      resp => {this.games = resp},
      err => console.error(err)
    );
  }
}
