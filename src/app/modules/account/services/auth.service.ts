import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string;
  private tokenKey: string;

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.apiUrl;
    this.tokenKey = environment.tokenKey;
  }

  signin(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password,
    };
    console.log('Mon body : ', body);
    return this.http.post(`${this.apiUrl}/api/auth/signin`, body).pipe(
      map((x: any) => {
        console.log('Service : ', x.accessToken);
        // Modification à faire ici
        localStorage.setItem(this.tokenKey, x.accessToken);
        return x; // permet de renvoyer la réponse à l'initiateur (page Signin) après le traitement du map
      })
    );
  }

  signup(newUser: User): Observable<any> {
    console.log('New User: ', newUser);
    return this.http.post(`${this.apiUrl}/api/auth/signup`, newUser);
  }

  fetchAvatar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/avatar`);
  }
}
