import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from '../model/auth/authentication-request';
import { AuthenticationResponse } from '../model/auth/authentication-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = '/auth';

  constructor(private apiService: ApiService) {}

  public login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.apiService.post<AuthenticationResponse>(`${this.endpoint}/authenticate`, authenticationRequest);
  }
}
