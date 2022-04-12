import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Movie } from 'src/app/models/movie';
import { FilmService } from 'src/app/service/film.service';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  sub! :Subscription
  film!: Movie[]

  constructor(private filmSrv:FilmService, private authSrv:AuthService) { }

  ngOnInit(): void {
    this.sub = this.filmSrv.caricaFilm().subscribe(films =>{
      this.film = films
    })
  }

}
