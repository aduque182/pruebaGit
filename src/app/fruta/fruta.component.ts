import {Component} from '@angular/core';
@Component ({
    selector: 'fruta', 
    templateUrl:'./fruta.component.html'
    
})
export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'coco, Papaia';

    public trabajos:Array<any>=['Electricista', 'desarrollador']
    public nombre:string;
    public edad:number;
    public mayorEdad:boolean;

    constructor(){
      this.nombre= "Andrés Duque";
      this.edad=27;
      this.mayorEdad=true;
      this.trabajos;  
      this.holaPikachu(this.nombre);
    }

    ngOnInit(){
        this.cambiarNombre();
        this.cambiarEdad(24 );

        console.log(this.nombre + " "+ this.edad);

        //Variables y alcance
        var uno= 8;
        var dos= 15;
        if(uno===8){
            let uno= 3;
            var dos= 88;
            console.log("dentro del if "+ uno);
        }
        console.log("fuera del if "+ uno)
    }

    cambiarNombre(){
        this.nombre = 'Sebastian Duque';
    }

    cambiarEdad(edad){
        this.edad = edad;
    }

    holaPikachu(nombre){
        alert('Hola Pikachu '+nombre)
    }
}