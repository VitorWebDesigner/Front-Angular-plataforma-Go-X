import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conteudos-extras',
  templateUrl: './conteudos-extras.component.html',
  styleUrls: ['./conteudos-extras.component.scss']
})
export class ConteudosExtrasComponent {
  @Input() tipoConteudo: 'links' | 'modulos' = 'links';
  
  titulo: string = '';
  
  ngOnInit() {
    this.titulo = this.tipoConteudo === 'links' ? 'Atalho para conteúdos extra' : 'Lista de conteúdos';
  }
}