import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Times } from '../times/Times';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:3000/times';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Times[]> {
    return this.http.get<Times[]>(this.apiUrl);
  }
}
