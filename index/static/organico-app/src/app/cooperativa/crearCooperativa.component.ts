import { Component } from '@angular/core';
import { CrearCooperativaService } from './crearCooperativa.service';

@Component({
  //selector: 'app-crearCooperativa',
  templateUrl: './crearCooperativa.component.html',
  providers: [
    CrearCooperativaService
  ]
})
export class CrearCooperativaComponent{
  title = 'Crear cooperativa';
  cooperativa: any[];
  constructor(private crearCooperativaServices: CrearCooperativaService){

  }
}
