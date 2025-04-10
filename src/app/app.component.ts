import { Component } from '@angular/core';
import { CabecalhoComponent } from "./components/cabecalho/cabecalho.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CabecalhoComponent]
})
export class AppComponent {
  title = 'Go X Academy';
}