import { Component, OnInit } from '@angular/core';
import { ProductorService } from '../productor.service';

@Component({
  selector: 'app-productor-detalle',
  templateUrl: './productor-detalle.component.html',
  styleUrls: ['./productor-detalle.component.css'],
  providers: [
    ProductorService
  ]
})
export class ProductorDetalleComponent implements OnInit {

  constructor(private productorServices: ProductorService) {
    alert("Dentro de productor services");
  }

  ngOnInit() {
  }

}
