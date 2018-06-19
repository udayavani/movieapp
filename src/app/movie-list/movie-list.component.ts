import { Component, OnInit } from '@angular/core';
import { MovieService} from '../movie.service';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  ratioGutter = 1;
  fitListHeight = '400px';
  results: {title: string, overview: string, release_date: string, popularity: string, cols: number, rows: number, color: string}[] = [
    // {title: 'One', cols: 6, rows: 2, color: 'lightblue'}
  ];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNowPlaying();
  }

  onTabChange(event: MatTabChangeEvent) {

    if(event.index === 1) {
      this.loadUpcoming();
    } else {
      this.loadNowPlaying();
    }
  }

  loadUpcoming(): void {

    this.movieService.getUpcomingMovies()
      .subscribe((data: any) => {
          console.log('success', data.results);
          this.results = data.results;
        },
        (error: any) => {
          console.log('error', error);
        });

  }

  loadNowPlaying(): void {

    this.movieService.getNowPlayingMovies()
      .subscribe((data: any) => {
          console.log('success', data.results);
          this.results = data.results;
        },
        (error: any) => {
          console.log('error', error);
        });
  }

}
