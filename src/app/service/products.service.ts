import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string = 'http://localhost:8080/api/v1/productos';

  constructor( private http: HttpClient ) { }

  getProducts(): Observable<any>{
    return this.http.get(this.url)
      .pipe(res => res);
  }

  // obternerList(Observable<any>: res){
  //   console.log(res);
  //   return res;
  // }


}
