import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  public obtenerUsuarios() {
    let params = new HttpParams().append('page', '1');
    params = params.append('per_page', '10');

    return this.http.get('https://reqres1.in/api/user', { params })
      .pipe(
        map((resp: any) => resp.data),
      );
  }
  // return this.http.get('https://jsonplaceholder.typicode.com/users');
}
