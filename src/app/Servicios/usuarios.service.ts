import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlApi= 'https://jsonplaceholder.typicode.com/users'
  constructor(
    private http: HttpClient
  ) {
   console.log('Service usuarios');
  }

  getUsuarios(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    
    return this.http.get(this.urlApi, {
      headers: header
    });
  }
}
