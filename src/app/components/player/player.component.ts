import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PlayerService, VideoAula } from '../../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  aulaAtual!: VideoAula;
  videoUrl!: SafeResourceUrl;

  constructor(
    private playerService: PlayerService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.playerService.getAulaAtual().subscribe(aula => {
      this.aulaAtual = aula;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(aula.url);
    });
  }
}