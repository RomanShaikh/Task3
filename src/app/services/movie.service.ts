import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


interface ResponseForMovie{
  title:string;
  year:string;
  reted:string;
  released:string;
  genre:string;
  director:string;
  actors:string;
  awards:string;
  poster:string;
  boxOffice:string;
  
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieData:any;

  constructor(private _http:HttpClient) {
    this.movieData={};
   }

   getMovieData(name:string){
     let encodedName=encodeURIComponent(name);
     this._http.get<ResponseForMovie>(`http://localhost:3000/movie/${encodedName}`).subscribe((res)=>{
       console.log(res);
       this.movieData.title=res.title;
       this.movieData.year=res.year;
       this.movieData.reted=res.reted;
       this.movieData.released=res.released;
       this.movieData.genre=res.genre;
       this.movieData.director=res.director;
       this.movieData.actors=res.actors;
       this.movieData.awards=res.awards;
       this.movieData.poster=res.poster;
       this.movieData.boxOffice=res.boxOffice;
     })
   }
}
