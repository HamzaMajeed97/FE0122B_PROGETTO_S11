import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment';
import { Favorite } from '../models/favorite';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

caricaFilm(){
  return this.http.get<Movie[]>(`${environment.apiBaseUrl}/movie/popular`)
}



caricaPreferiti(id:number){
  return this.http.get<Favorite[]>(`${environment.apiBaseUrl}/favorites?userId=${id}`)
}



 rimuoviPreferiti(id:number){
  return this.http.delete<Favorite>(`${environment.apiBaseUrl}/favorites/${id}`);
 }


}
