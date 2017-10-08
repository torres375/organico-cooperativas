import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';

import { CrearCooperativaService } from './crearCooperativa.service';

declare var jQuery:any;
declare var $:any;

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

  }

  guardarCooperativa( formCooperativa: NgForm ) {
    //console.log(formCooperativa.value);
    //console.log(formCooperativa.valid);
    //console.lo

    if (formCooperativa.valid) {
      let resultado = this.crearCooperativaServices.guardarCooperativa(formCooperativa.value).subscribe();
      if( resultado ){
        alert("Datos guardados correctamente");
      }else{
        alert("Error almacenando datos");
      }
    }else{
      alert("Por favor llene todos los campos que son obligatorios. (*) ");
    }
  }

}
