import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  tomesRecentUrl = 'http://localhost:8080/tomes/recents';

  mangaUrl = 'http://localhost:8080/manga/1'

  constructor(private http: HttpClient) { } 

  getData(): Observable<any[]> {
    console.log(this.http.get<any[]>(this.tomesRecentUrl))
    return this.http.get<any[]>(this.tomesRecentUrl)
  }
}
