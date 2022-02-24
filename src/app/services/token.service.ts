import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokenKey = environment.tokenKey
  userKey = environment.userKey

  constructor() { }

  signOut(): void{
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(this.tokenKey)
    window.sessionStorage.setItem(this.tokenKey, token)
  }

  public getToken(): string | null {
    const token = window.sessionStorage.getItem(this.tokenKey)
    if(token) {
      return token
    } else {
      return null
    }
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(this.userKey)
    window.sessionStorage.setItem(this.userKey, user)
  }

  public getUserid(): any {
    const user = window.sessionStorage.getItem(this.userKey)
    if(user) {
      console.log(user)
      return JSON.parse(user)
    }
    return {}
  }
}
