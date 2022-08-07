import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Aurélio"
  dataNascimento = "2000-10-22"
  urlImg = "/assets/aurelio.jpg"

  mostrarDataNascimento() {
    alert(`A data de Nascimento do Aurélio é : ${this.dataNascimento}`)
  }

}
