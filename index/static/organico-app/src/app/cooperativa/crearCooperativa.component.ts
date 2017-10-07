import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
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

  constructor(private crearCooperativaServices: CrearCooperativaService){
      //this.nombre = "rafa";

  }

  guardarCooperativa( form: NgForm ){
    console.log(form.value);  // { first: '', last: '' }
    console.log(form.valid);  // false

    let resultado = this.crearCooperativaServices.guardarCooperativa( form.value ).subscribe();

    console.log(resultado);

  }


}
