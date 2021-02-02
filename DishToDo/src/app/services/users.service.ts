import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from "../models/user.model";
import { map, catchError } from 'rxjs/operators';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private headers: HttpHeaders;
  data = [];

  constructor(private http: HttpClient) {
    // this.headers = new HttpHeaders({
    //     'Access-Control-Allow-Headers': 'Content-Type',
    //     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE',
    //     'Content-Type': 'application/json; charset=utf-8',
    //     'Access-Control-Allow-Origin':'*'});
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl + 'users');
  }

  get(id): Observable<any> {
    return this.http.get(baseUrl + 'users/get/_id=' + id);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl + 'users/create', data);
  }

  delete(id): Observable<any> {
    return this.http.delete(baseUrl + 'users/delete/_id=' + id, { headers: this.headers });
  }
}
