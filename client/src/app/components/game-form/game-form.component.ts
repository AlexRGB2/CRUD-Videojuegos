import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from '../../models/Game';
import { GamesService } from 'src/app/services/games.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css'],
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date(),
  };

  constructor(
    private gameService: GamesService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  edit: boolean = false;

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params['id']) {
      this.gameService.getGame(params['id']).subscribe(
        (resp) => {
          this.game = resp;
          this.edit = true;
        },
        (err) => console.error(err)
      );
    }
  }

  saveNewGame() {
    delete this.game.created_at;

    this.gameService.saveGame(this.game).subscribe(
      (resp) => {
        this.router.navigate(['/games']);
      },
      (err) => console.error(err)
    );
  }

  updateGame() {
    delete this.game.created_at;
    let number: number = Number(this.game.id);

    this.gameService.updateGame(number, this.game).subscribe(
      (resp) => {
        this.router.navigate(['/games']);
      },
      (err) => console.log(err)
    );
  }
}
