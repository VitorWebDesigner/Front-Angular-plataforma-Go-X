import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ConteudosExtrasComponent } from './components/conteudos-extras/conteudos-extras.component';
import { PlayerComponent } from './components/player/player.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { InfoAulaComponent } from './components/info-aula/info-aula.component';

import { ModulosService } from './services/modulos.service';
import { PlayerService } from './services/player.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ConteudosExtrasComponent,
    PlayerComponent,
    ModulosComponent,
    TabsComponent,
    InfoAulaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    ModulosService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }