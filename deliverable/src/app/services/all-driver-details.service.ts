import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AllDriverDetailsService {
  constructor(private http: HttpClient) {}

  getDrivers(): Observable<any> {
    return this.http.get(API + '/user/allDriverInfo');
  }

  deleteDriver(driverId: number): Observable<any> {
    return this.http.delete(API + '/user/delete/' + driverId);
  }

  editDriver(
    id: number,
    newEmail: string,
    newPhonenumber: string
  ): Observable<any> {
    return this.http.post(
      API + '/user/edit',
      {
        id,
        newEmail,
        newPhonenumber,
      },
      httpOptions
    );
  }
}
