import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = enviroment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll<T>(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${endpoint}`);
  }

  getOne<T>(endpoint: string, id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}/${id}`);
  }
}
