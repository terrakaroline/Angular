import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicosl',
  templateUrl: './exemplo-servicosl.component.html',
  styleUrls: ['./exemplo-servicosl.component.css']
})
export class ExemploServicoslComponent {
  nome = "";
  
  constructor(private logger: LoggerService){

  }

  adicionarNome(){
    this.logger.logar(`O nome ${this.nome} foi adicionado`);
  }
}
