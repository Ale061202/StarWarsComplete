import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VehicleResponse } from '../interfaces/vehicles.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) {

  }
  getVehicles(page: number): Observable<VehicleResponse> {
    return this.http.get<VehicleResponse>(`${environment.apiBaseUrl}/vehicles?page=${page}`);
  }
}
