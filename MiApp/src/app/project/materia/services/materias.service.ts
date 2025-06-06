import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(private httpclient: HttpClient) { }

  obtenerMaterias(): Promise<any> {
   
    const url = environment.apiUrl + '/materia';    
    return new Promise((resolve, reject) => {
      this.httpclient.get(url).toPromise()
      .then( (success: any) => {
        resolve(success.materias);
      })
      .catch((error) => {
        let message: string;
        message = error.message;
        reject(message);
      });
    });
  }
}
