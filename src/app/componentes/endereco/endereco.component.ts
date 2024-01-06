import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnderecoService } from '../../servicos/endereco.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.css'
})
export class EnderecoComponent {

  // Variável CEP
  cep:string = '';

  // Construtor
  constructor(private servico:EnderecoService){}

  // Função para obter o endereço
  obterEndereco():void{
    this.servico.retornarEndereco(this.cep)
    .subscribe(retorno => {console.log(retorno)})
  }

}
