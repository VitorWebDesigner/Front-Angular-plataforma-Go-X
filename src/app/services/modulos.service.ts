import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Modulo } from '../models/modulo.model';

@Injectable({
  providedIn: 'root'
})
export class ModulosService {
  private modulos: Modulo[] = [
    {
      id: 1,
      nome: 'Nome do módulo',
      progresso: 15,
      aulas: ['Aula 1', 'Aula 2', 'Aula 3'],
      aberto: false
    },
    {
      id: 2,
      nome: 'Nome do módulo',
      progresso: 25,
      aulas: ['Aula 1', 'Aula 2', 'Aula 3'],
      aberto: false
    },
    {
      id: 3,
      nome: 'Nome do módulo',
      progresso: 35,
      aulas: ['Aula 1', 'Aula 2', 'Aula 3'],
      aberto: false
    },
    {
      id: 4,
      nome: 'Nome do módulo',
      progresso: 45,
      aulas: ['Aula 1', 'Aula 2', 'Aula 3'],
      aberto: false
    }
  ];

  private modulosSubject = new BehaviorSubject<Modulo[]>(this.modulos);

  constructor() { }

  getModulos(): Observable<Modulo[]> {
    return this.modulosSubject.asObservable();
  }

  toggleModulo(moduloId: number): void {
    // Encontra o módulo pelo ID
    const moduloIndex = this.modulos.findIndex(m => m.id === moduloId);
    
    if (moduloIndex > -1) {
      // Fecha todos os módulos
      this.modulos.forEach((m, index) => {
        if (index !== moduloIndex) {
          m.aberto = false;
        }
      });
      
      // Alterna o estado do módulo clicado
      this.modulos[moduloIndex].aberto = !this.modulos[moduloIndex].aberto;
      
      // Notifica os assinantes sobre a mudança
      this.modulosSubject.next([...this.modulos]);
    }
  }

  atualizarProgresso(moduloId: number, novoProgresso: number): void {
    const moduloIndex = this.modulos.findIndex(m => m.id === moduloId);
    
    if (moduloIndex > -1) {
      this.modulos[moduloIndex].progresso = novoProgresso;
      this.modulosSubject.next([...this.modulos]);
    }
  }
}