import { Component, OnInit } from '@angular/core';
import { PlayerService, VideoAula } from '../../services/player.service';

@Component({
  selector: 'app-info-aula',
  templateUrl: './info-aula.component.html',
  styleUrls: ['./info-aula.component.scss']
})
export class InfoAulaComponent implements OnInit {
  aulaAtual!: VideoAula;
  
  constructor(private playerService: PlayerService) { }
  
  ngOnInit(): void {
    this.playerService.getAulaAtual().subscribe(aula => {
      this.aulaAtual = aula;
    });
  }
  
  marcarComoConcluida(): void {
    this.playerService.marcarComoConcluida(this.aulaAtual.id);
  }
  
  proximaAula(): void {
    this.playerService.proximaAula();
  }
  
  aulaAnterior(): void {
    this.playerService.aulaAnterior();
  }
}