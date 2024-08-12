import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, shareReplay} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  private server = environment.apiUrl;


  post<T>(endpoint: string, body: any): Observable<T> {
    let Headers_Object = new HttpHeaders().append("Authorization", "Bearer " + localStorage.getItem('token'))
    let response = this.httpClient.post<T>(this.server + endpoint, body, {headers: Headers_Object}).pipe(
      shareReplay(1)
    )
    response.subscribe({
      error: (err) => {
        //showError(err.error.message)
        if (err.status == 401) {
          localStorage.clear()
          this.router.navigate(['/login'])
        }
      }
    })
    return response
  }

  get<T>(endpoint: string): Observable<T> {
    let Headers_Object = new HttpHeaders().append("Authorization", "Bearer " + localStorage.getItem('token'))
    let response = this.httpClient.get<T>(this.server + endpoint, {headers: Headers_Object}).pipe(
      shareReplay(1)
    )
    response.subscribe({
      error: (err) => {
        //showError(err.error.message)
        if (err.status == 401) {
          localStorage.clear()
          this.router.navigate(['/login'])
        }
      }
    })
    return response
  }
}
