import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductorService } from './productor.service';
import { NgModel } from '@angular/forms';
import { ListadoCooperativaService } from '../cooperativa/listadoCooperativa.service';
import { GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  selector: 'app-productor-registro',
  templateUrl: './productorRegistro.component.html',
  styleUrls: ['./productorRegistro.component.css'],
  providers: [
    ProductorService,
    ListadoCooperativaService,
    GoogleMapsAPIWrapper
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ProductorRegistroComponent implements OnInit {
  title: String = "Registrar Productor";
  marker: any = {};

  productor: any = {
    "tipo_documento": -1,
    "cooperativa": -1
  };
  cooperativas: any[];

  constructor(private productorService: ProductorService,
              private cooperativaService: ListadoCooperativaService,
              public gMaps: GoogleMapsAPIWrapper) { }

  ngOnInit() {
    this.cooperativaService.getCooperativas()
          .subscribe(response => {
            this.cooperativas = response;
          });

    if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.marker = {
                  latitud: position.coords.latitude,
                  longitud: position.coords.longitude
                };
            },
            error => {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            }
        );
    };
  }

  saveProductor() {
    if(this.productor.nombre && this.productor.descripcion && this.productor.tipo_documento
        && this.productor.documento && this.productor.direccion && this.productor.cooperativa
        && this.productor.foto && this.marker){
      this.productorService.setProductor(this.productor).subscribe(response => {
        alert("Su informaci?n fue agregada con ?xito.");
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

  mapClicked($event: any) {
    this.marker = {
      latitud: $event.coords.lat,
      longitud: $event.coords.lng
    };
  }

}

interface FileReaderEventTarget extends EventTarget {
    result:string
}

interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage():string;
}
