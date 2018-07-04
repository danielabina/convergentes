import { Injectable } from '@angular/core';
import { Vaga } from '../models/vaga';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  private baseUrl = 'http://localhost:50128/api/vagas';

  constructor(private http: Http) { }

  get() {
    this.http.get(this.baseUrl).subscribe(data => {
      console.log(data);
      return data;
    });
  }

  getById(id) {
    this.http.get(this.baseUrl + '/' + id).subscribe(data => {
      console.log(data);
      return data;
    });
  }
  
  post(obj: Vaga) {
    this.http.post(this.baseUrl, obj);
  }
  
  put(obj: Vaga) {
    this.http.put(this.baseUrl, obj);
  }

  delete(id: number) {
    this.http.delete(this.baseUrl + '/' + id);
  }
}
