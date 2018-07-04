import { Injectable } from '@angular/core';
// import { Http, RequestOptions } from '@angular/http';
import { Empresa } from '../models/empresa';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmpresaService {
  private baseUrl = 'http://localhost:50128/api/empresas';

  constructor(private http: HttpClient) { }

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
  
  post(obj: Empresa) {
    console.log(obj);
    this.http.post(this.baseUrl, obj, httpOptions);
  }
  
  put(obj: Empresa) {
    this.http.put(this.baseUrl, obj);
  }

  delete(id: number) {
    this.http.delete(this.baseUrl + '/' + id);
  }
}
