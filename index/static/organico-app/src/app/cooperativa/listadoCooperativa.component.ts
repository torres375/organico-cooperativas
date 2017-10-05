import { Component } from '@angular/core';
import { ListadoCooperativaService } from './listadoCooperativa.service';

@Component({
  //selector: 'app-cooperativa',
  templateUrl: './listadoCooperativa.component.html',
  providers: [
    ListadoCooperativaService
  ]
})

export class ListadoCooperativaComponent{
  title = 'Listado cooperativas';

  cooperativas: any[];

  constructor(private listadoCooperativaServices: ListadoCooperativaService){
  }

  ngOnInit() {
      this.listadoCooperativaServices.getCooperativas()
          .subscribe(cooperativas => this.cooperativas = cooperativas);
  }
}

