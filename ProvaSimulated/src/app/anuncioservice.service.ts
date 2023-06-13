import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnuncioserviceService {

  url = 'https://localhost:8080/anuncios'



  constructor() { }

  

}
