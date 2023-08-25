import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public urlApi = 'https://api.themoviedb.org/3/movie/now_playing?api_key=642f0342b27053efe0d8f5cfcaa1a036';
  constructor(private http: HttpClient) { }
  
  
  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

}
