import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private http: HttpClient) { }

  getCoffeeList(){
    return this.http.get<[]>('https://random-data-api.com/api/coffee/random_coffee', {
      params: {
        size: 50
      }
    })
  }
}
