import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductorService } from './productor.service';
import { NgModel } from '@angular/forms';
import { ListadoCooperativaService } from '../cooperativa/listadoCooperativa.service';

@Component({
  selector: 'app-productor-registro',
  templateUrl: './productorRegistro.component.html',
  styleUrls: ['./productorRegistro.component.css'],
  providers: [
    ProductorService,
    ListadoCooperativaService
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ProductorRegistroComponent implements OnInit {
  title: String = "Registrar Productor"
  productor: any = {

  };
  cooperativas: any[];

  constructor(private productorService: ProductorService, private cooperativaService: ListadoCooperativaService) { }

  ngOnInit() {
    this.cooperativaService.getCooperativas()
          .subscribe(response => {
            this.cooperativas = response;
            alert("Su informaci?n fue agregada con ?xito.");
          });
  }

  saveProductor() {
    if(this.productor.nombre && this.productor.descripcion && this.productor.tipo_documento
        && this.productor.documento && this.productor.direccion && this.productor.cooperativa
        && this.productor.foto){
      this.productorService.setProductor(this.productor).subscribe(response => {
        console.log(response);
        this.productor = {};

      });
    }
  }

  loadFoto(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e:FileReaderEvent) {
            this.productor.foto = e.target.result;
        }.bind(this);

        reader.readAsDataURL(input.files[0]);
    }
  }

}

interface FileReaderEventTarget extends EventTarget {
    result:string
}

interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage():string;
}
