import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface VideoAula {
  id: number;
  titulo: string;
  url: string;
  concluida: boolean;
  descricao: string;
  materialApoio: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private aulaAtual: VideoAula = {
    id: 1,
    titulo: 'Nome da aula',
    url: 'https://iframe.mediadelivery.net/embed/406869/1b9eec5d-3c26-4584-83ad-65176c850c32?token=5134c5e596bbea9e35fc1e5e9280fbb5b78d46b10974216d33f6149254824630&expires=1744217477&autoplay=false&loop=false&muted=false&preload=true&responsive=true',
    concluida: false,
    descricao: 'Descrição da aula aqui.',
    materialApoio: 'Conteúdo do material de apoio aqui.'
  };

  private aulaAtualSubject = new BehaviorSubject<VideoAula>(this.aulaAtual);

  constructor() { }

  getAulaAtual(): Observable<VideoAula> {
    return this.aulaAtualSubject.asObservable();
  }

  setAulaAtual(aula: VideoAula): void {
    this.aulaAtual = aula;
    this.aulaAtualSubject.next(this.aulaAtual);
  }

  marcarComoConcluida(aulaId: number): void {
    if (this.aulaAtual.id === aulaId) {
      this.aulaAtual.concluida = true;
      this.aulaAtualSubject.next({...this.aulaAtual});
    }
  }

  proximaAula(): void {
    // Aqui você implementaria a lógica para ir para a próxima aula
    console.log('Avançar para próxima aula');
  }

  aulaAnterior(): void {
    // Aqui você implementaria a lógica para ir para a aula anterior
    console.log('Voltar para aula anterior');
  }
}