import { Component} from '@angular/core';
import { Celular } from '../types/celuar';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    { id: 1, nome: "sansung s20 FE", descricao: "tecnologia em sua mãos", esgotado: false}, 

    { id: 2, nome: "sansung s20",esgotado: false},

    { id: 3, nome: "Moto g30", descricao: "A nova geração ", esgotado: true}
  ]
}
