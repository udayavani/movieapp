import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-detail-component',
  templateUrl: './movie-detail-component.html',
  styleUrls: ['./movie-detail-component.css']
})
export class MovieDetailComponent implements OnInit {
  movieDetails: {};
    // {title: 'One', cols: 6, rows: 2, color: 'lightblue'}
  id: number;
  private sub: any;
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.loadMovieDetails(this.id);
  }
  loadMovieDetails(id): void {

    this.movieService.getMovieDetails(id)
      .subscribe((data: any) => {
          console.log('success11111', data);
          this.movieDetails = data;
        },
        (error: any) => {
          console.log('error', error);
        });
  }

}
