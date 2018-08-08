import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movie:MovieService) { }

  ngOnInit() {
  }

}
