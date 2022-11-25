import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public httpClient: HttpClient) { }

  getUsers() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.httpClient.get(`${environment.api}/users?page=1&limit=50`, { headers });
  }

  getUser(id: string) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.httpClient.get(`${environment.api}/users/${id}`, { headers });
  }
}
