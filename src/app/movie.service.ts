import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovie(id: number): Observable<any> {
    return this.http.get('../../assets/testdata/movie_' + id + '.json');
  }

  getMovies(): Observable<any> {
    return this.http.get('../../assets/testdata/movies.json');
  }

}