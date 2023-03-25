import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "João";
  dataNascimento = "1995-01-01";
  urlImagem = "/assets/o-que-e-paisagem.jpg";

  mostrarDataNascimento(){
    alert(`A data em que esta fotografia foi tirada foi: ${this.dataNascimento}`);
  }
}
