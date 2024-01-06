import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../modelos/Endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  // Constructor
  constructor(private http:HttpClient) { }

  // Método para retornar o endereço
  retornarEndereco(cep:string):Observable<Endereco>{
    return this.http.get<Endereco>(`http://viacep.com.br/ws/${cep}/json/`)
  }
}
