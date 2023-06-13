import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { anuncio } from 'src/anuncio';


@Injectable({
  providedIn: 'root'
})
export class AnuncioserviceService {

  url = 'https://localhost:3000/Anuncios'

  constructor(private http : HttpClient) { }

  Cadastro(Anuncios : anuncio): Observable<anuncio>{
    return this.http.post<anuncio>(this.url, Anuncios);
  }

  

}
