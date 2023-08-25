import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ObjToArrayPipe } from '../home/objToArray.pipe';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit  {
  @Input() dataEntrante:any;

   id: any []=[]; 
   id2: any []=[]; 

  constructor(private apiService:ApiService){
    }

  
  ngOnInit(): void{
   
      }      
}
