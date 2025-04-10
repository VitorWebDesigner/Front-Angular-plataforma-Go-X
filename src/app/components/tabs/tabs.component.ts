import { Component, OnInit } from '@angular/core';
import { PlayerService, VideoAula } from '../../services/player.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  aulaAtual!: VideoAula;
  tabAtiva: string = 'material';

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getAulaAtual().subscribe(aula => {
      this.aulaAtual = aula;
    });
  }

  selecionarTab(tabId: string): void {
    this.tabAtiva = tabId;
  }
}