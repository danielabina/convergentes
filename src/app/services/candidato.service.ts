import { Injectable } from '@angular/core';
import { Candidato } from '../models/candidato';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CandidatoService {
  private baseUrlget = 'http://localhost:8080/api/candidatos';
  private baseUrlpost = 'http://localhost:8080/api/candidato';
  private baseUrlput= 'http://localhost:8080/api/candidato';
  private baseUrldelete = 'http://localhost:8080/api/candidato';
 

  constructor(private http: HttpClient) { }
 

  get() {
    this.http.get(this.baseUrlget).subscribe(data => {
      console.log(data);
      return data;
    });
  }

  getById(id: number) {
    this.http.get(this.baseUrlget + '/' + id).subscribe(data => {
      console.log(data);
      return data;
    });
  }
  
  post(obj: Candidato) {
    return this.http.post<Candidato>(this.baseUrlposts, Candidato);
  
  }
  
  put(obj: Candidato) {
    this.http.put(this.baseUrlput , obj);
  }

  delete(id: number) {
    this.http.delete(this.baseUrldelete + '/' + id);
  }
}
