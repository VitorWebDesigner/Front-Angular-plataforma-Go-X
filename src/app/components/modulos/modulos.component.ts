import { Component, OnInit } from '@angular/core';
import { Modulo } from '../../models/modulo.model';
import { ModulosService } from '../../services/modulos.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {
  modulos: Modulo[] = [];

  constructor(private modulosService: ModulosService) { }

  ngOnInit(): void {
    this.modulosService.getModulos().subscribe(modulos => {
      this.modulos = modulos;
    });
  }

  toggleModulo(modulo: Modulo): void {
    this.modulosService.toggleModulo(modulo.id);
  }
}
