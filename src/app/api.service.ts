import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facility } from './facility'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://localhost:8080/api';
  public firstPage: string = "";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";
  
  constructor(private httpClient: HttpClient) { }
  
  public createFacility(facility: Facility) {
    return this.httpClient.post(`${this.apiURL}/facilities/`, facility);
  }
  
  public updateFacility(facility: Facility) {
    return this.httpClient.put(`${this.apiURL}/facilities/${facility.id}`, facility)
  }
  
  public deleteFacility(id: number) {
    return this.httpClient.delete(`${this.apiURL}/facilities/${id}`)
  }
  
  public getFacilityById(id: number) {
    return this.httpClient.get(`${this.apiURL}/facilities/${id}`);
  }
  
  public getFacilities(url?: string) {
    return this.httpClient.get<Facility[]>(`${this.apiURL}/facilities`);
  }
  
}
