import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { User } from 'src/model/user';
import { UserService } from './user.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const url = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged: boolean = false;
  isAdmin: boolean = false;
  user: User = new User();

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService) { }


  userLogout(): void {
    this.isLogged = false;
    this.isAdmin = false;
    this.user = new User();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}