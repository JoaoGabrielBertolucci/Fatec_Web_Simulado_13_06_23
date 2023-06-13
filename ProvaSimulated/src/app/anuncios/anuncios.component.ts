import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { anuncio } from 'src/anuncio';
import { FormBuilder } from '@angular/forms';
import { AnuncioserviceService } from '../anuncioservice.service';


@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  Anunciante: anuncio[] = [];
  formGroupAnunciante: FormGroup;

  constructor (private AnuncioserviceService: AnuncioserviceService, 
              private formBuilder: FormBuilder){

              this.formGroupAnunciante = formBuilder.group({
               
                Empresa_Nome: [''],
                telefone:  [''],
                email:  [''],

                img:  [''],
    
                cep:  [''],

              })   
  }

  
  CadastroAnuncio(){
    this.AnuncioserviceService.Cadastro(this.formGroupAnunciante.value).subscribe(
      {
        next : data => {
          this.Anunciante.push(data);
          this.formGroupAnunciante.reset();
        }
      }
    );
  
  }


}


