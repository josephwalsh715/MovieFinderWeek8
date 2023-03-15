import { Component } from '@angular/core';
import { OmdbApiService } from 'src/app/services/omdb-api.service';
import { IOMDBResponse } from 'src/app/omdbresponse';

@Component({
  selector: 'app-searchtitle',
  templateUrl: './searchtitle.component.html',
  styleUrls: ['./searchtitle.component.css']
})
export class SearchtitleComponent {

constructor(private _omdbService:OmdbApiService){}

  title = 'Movie Finder';
  movieData:IOMDBResponse | undefined;
  errorMessge:any;
  name = 'Joe Walsh';
  studentNo = 'S00222915';

  

  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData=movieData;
        console.log("Director name : " + this.movieData.Director)
      }
    )
    return false;
  }
}


