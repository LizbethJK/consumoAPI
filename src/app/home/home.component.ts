import { Component, Input, OnInit, Output, Pipe } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { ObjToArrayPipe } from './objToArray.pipe';
import { ShowMovieComponent } from '../show-movie/show-movie.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any [] = []; 
  data2:any [] = []; 
  elementos:any[]=[];
  link ="https://image.tmdb.org/t/p/w500/"; 
  constructor(private apiService:ApiService){} //apiService:ApiService
  
  ngOnInit(): void{
  this.llenarData(); 
  }

public llenarData (){
this.apiService.getData().subscribe(data => {
  this.data = data.results;
  this.enviarDato();
})
}
public enviarDato() {
  this.data2 = this.data;
  console.log(this.data2);
  return this.data2;
}
    
}
