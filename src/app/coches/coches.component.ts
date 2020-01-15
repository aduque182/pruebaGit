import {Component} from '@angular/core';
import {Coches} from './coche';
import {PeticionesServices} from '../services/peticiones.services';
@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesServices]
})

export class CochesComponent{
    public coche: Coches;
    public coches:Array<Coches>;
    public articulos;

    constructor(
        private _peticionesService: PeticionesServices
    ){
        this.coche = new Coches("","","");
        this.coches = [
            new Coches("Aveo Emotion","200","Vino Tinto"),
            new Coches("Mazda 2","250","Blanco")
        ];
    }

    ngOnInit(){
        this._peticionesService.getArticulos().subscribe(
            result => {
                this.articulos= result;
                //console.log(result)
if(!this.articulos){
    console.log("Error en servidor")
}
            },
            error =>{
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        )
    }
onSubmit(){
    this.coches.push(this.coche); 
    this.coche = new Coches("","","");
}
}