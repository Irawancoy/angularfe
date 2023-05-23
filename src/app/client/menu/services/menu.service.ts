import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiUrl = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('ctoken')}`,
    }),
  };

  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get(`${this.apiUrl}/client/menu`, this.httpOptions);
  }
  getMenuById(id: any) {
    return this.http.get(`${this.apiUrl}/client/menu/${id}`, this.httpOptions);
  }
}
