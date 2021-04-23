import { Seguimiento } from '../model/seguimiento';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {

  constructor(private http: HttpClient) { }

  getSeguimiento(){
    return this.http.get<Seguimiento[]>(environment.apiURL+'/seguimiento/all')
  }

  newSeguimiento(newSeguimiento: Seguimiento){
    return this.http.post(environment.apiURL + '/seguimiento/new', newSeguimiento);
  }

  deleteSeguimientos(){
    return this.http.delete(environment.apiURL + '/seguimiento/drop');
  }

  deleteSeguimiento(name: string){
    return this.http.delete<Seguimiento[]>(environment.apiURL+'/seguimiento/drop/' + name)
  }

}
