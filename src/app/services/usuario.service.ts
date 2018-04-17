import { Injectable } from '@angular/core';
import { User} from '../model/User';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserConfig } from '../app.config.user';
import { ResultMessage } from '../model/result-message';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class UsuarioService {

  private resourceUrl: string;

  constructor( private http: HttpClient ) {
    this.resourceUrl = UserConfig.httpResource.solicitudes;
  }
/*
  getAll(): Observable<Persona[]> {
    return this.http.get<ResultMessage>(`${this.resourceUrl}`, httpOptions).map(response => response['data']);
  }
*/
  get(nombres:string): Observable<any> {
    return this.http.get<ResultMessage>(`${this.resourceUrl}/${nombres}`, httpOptions).map(response=> response);
  }
/*
  create(persona: Persona): Observable<Persona> {
    return this.http.post<ResultMessage>(`${this.resourceUrl}`, persona, httpOptions)
    .map(response => {
      this.showMessage(response);
      return response['data'];
    });
  }

  update(persona: Persona): Observable<Persona> {
    return this.http.put<ResultMessage>(`${this.resourceUrl}/${persona.id}`, persona, httpOptions)
    .map(response => {
      this.showMessage(response);
      return response['data'];
    });
  }

  delete(id: number): Observable<Persona> {
    return this.http.delete<ResultMessage>(`${this.resourceUrl}/${id}`, httpOptions)
    .map(response => {
      this.showMessage(response);
      return response['data'];
    });
  }
*/
  private showMessage(response) {
    alert(response.message);
  }

}
