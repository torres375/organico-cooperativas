import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class CooperativaService {
    constructor(private http: Http) { }

    getCooperativas(): Observable<string[]> {
        return this.http.get('cooperativalist')
            .map(response => <string[]>response.json());
    }
}
