import {Component } from '@angular/core';
import {RopaService} from '../services/ropa.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent{
public titulo = 'Pagina principal';
public listado_ropa: Array<string>;
public prenda_a_guardar:string;
public fecha;

constructor(
    private _ropaService: RopaService  
){
    this.fecha = new Date(2019, 5, 8);
}

ngOnInit(){
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this._ropaService.prueba('Camiseta xl'));
}
guardarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar=null;
}
eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
    alert(index);

}
}