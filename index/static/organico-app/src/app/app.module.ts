import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ListadoCooperativaComponent } from './cooperativa/listadoCooperativa.component';
import { CrearCooperativaComponent } from './cooperativa/crearCooperativa.component';
import { CooperativaDetalleComponent } from './cooperativa/cooperativa-detalle/cooperativa-detalle.component';
import { ProductorRegistroComponent } from './productor/productorRegistro.component';
import { ProductorDetalleComponent } from './productor/productor-detalle/productor-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoCooperativaComponent,
    CrearCooperativaComponent,
    CooperativaDetalleComponent,
    ProductorRegistroComponent,
    ProductorDetalleComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArw7TOl_K1zuxYi_8nR6niG5kBTyegHfU'
    }),
    RouterModule.forRoot([
      {
        path: 'cooperativa/crearCooperativa',
        component: CrearCooperativaComponent
      },
      {
        path: 'cooperativa/listadoCooperativa',
        component: ListadoCooperativaComponent
      },
      {
        path: 'cooperativa/editarCooperativa',
        component: CrearCooperativaComponent
      },
      {
        path: 'cooperativa/detalle/:id',
        component: CooperativaDetalleComponent
      },
      {
        path: 'productor/registro',
        component: ProductorRegistroComponent
      },
      {
        path: 'productor/detalle/:id',
        component: ProductorDetalleComponent
      }
    ])
  ],
 providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

