import { Movie } from '../movie';
import { Observable } from "rxjs";
import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id: number;
  movie: Movie;
  movies: Observable<Movie[]>;

  constructor(
  		private route: ActivatedRoute,
  		private router: Router,
    	private movieService: MovieService) { }

  ngOnInit() {
    this.movie = new Movie();

    this.id = this.route.snapshot.params['id'];

	  /* Load main movie data */    
    this.movieService.getMovie(this.id)
      .subscribe(data => {
        console.log(data)
        this.movie = data;
      }, error => console.log(error));

     /* Load related movies */
    this.movies = this.movieService.getMovies();
  }
}