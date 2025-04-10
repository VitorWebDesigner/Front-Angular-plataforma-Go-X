import { Component } from '@angular/core';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ConteudosExtrasComponent } from './components/conteudos-extras/conteudos-extras.component';
import { PlayerComponent } from './components/player/player.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { InfoAulaComponent } from './components/info-aula/info-aula.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CabecalhoComponent,
    ConteudosExtrasComponent,
    PlayerComponent,
    ModulosComponent,
    TabsComponent,
    InfoAulaComponent,
  ],
})
export class AppComponent {
  title = 'Go X Academy';
}