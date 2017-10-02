import { Component } from '@angular/core';
import { CooperativaService } from './cooperativa.service';

@Component({
  selector: 'cooperativas',
  templateUrl: './cooperativas.component.html',
  providers: [
    CooperativaService
  ]
})
export class CooperativaComponent{
  title = 'cooperativa';

  cooperativas: any[];

  constructor(private cooperativaServices: CooperativaService){
  }

  ngOnInit() {
      this.cooperativaServices.getCooperativas()
          .subscribe(cooperativas => this.cooperativas = cooperativas);
  }
}
