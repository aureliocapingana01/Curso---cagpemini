import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent {
  sobrenome= "Capingana"

  mostrarNomeCompleto(nomeCompleto: any){
    alert(`O meu nome completo é: ${nomeCompleto}`)
  }
  
}
