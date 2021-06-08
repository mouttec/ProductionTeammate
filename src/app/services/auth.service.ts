import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    redirectUrl: string;
    baseUrl = '../backend/api/teammate';
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) { }
  public userlogin(usernameTeammate: any, password: any): any {
    return this.httpClient.post<any>(this.baseUrl + '/loginTeammate.php', { usernameTeammate, password})
    .pipe(map(Teammates  => {
      this.setToken(Teammates.usernameTeammate);
      this.getLoggedInName.emit(true);
      return Teammates;
    }));
  }

  // token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }



}
