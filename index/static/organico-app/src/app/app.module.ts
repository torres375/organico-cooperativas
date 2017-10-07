import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { ListadoCooperativaComponent } from './cooperativa/listadoCooperativa.component';
import { CrearCooperativaComponent } from './cooperativa/crearCooperativa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoCooperativaComponent,
    CrearCooperativaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
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
      }
    ])
  ],
 providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
