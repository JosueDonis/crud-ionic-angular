import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAuth } from '../../interfaces/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authSubject: BehaviorSubject<any>;
  public auth: Observable<any>;
  constructor(public httpClient: HttpClient) {
    try {
      const session: any = localStorage.getItem('session')
        ? localStorage.getItem('session')
        : '';
      this.authSubject = new BehaviorSubject<any>(JSON.parse(session) || null);
      this.auth = this.authSubject.asObservable();
    } catch (error) {
      this.authSubject = new BehaviorSubject<any>(null);
      this.auth = this.authSubject.asObservable();
    }
  }

  login(username?: string | undefined, password?: string | undefined) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(
      `${environment.api}/login`,
      {
        username,
        password,
      },
      { headers }
    );
  }

  setAuth(auth: IAuth) {
    localStorage.setItem('session', JSON.stringify(auth));
    this.authSubject.next(auth);
  }

  get authValue(): IAuth {
    return this.authSubject.value;
  }

  get isAuthenticated(): boolean {
    return this.authSubject.value !== null;
  }
}
