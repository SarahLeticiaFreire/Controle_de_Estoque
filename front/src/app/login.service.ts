// login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://example.com/api'; // Substitua pelo URL da sua API

  constructor(private http: HttpClient) {}

  login(loginForm: { username: string, password: string }): Observable<any> {
    // Lógica para autenticar o login na sua API
    return this.http.post(${this.apiUrl}/login, loginForm);
  }
}