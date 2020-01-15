import {Component} from '@angular/core';
import {Empleados} from './empleados';
@Component ({
    selector: 'empleados', 
    templateUrl:'./empleados.component.html'
    
})
export class EmpleadosComponent{
    public nombre_componente = 'Nombres de empleados';
    public listado_empleados = 'Andrés, Carlo, Camilo';

    public empleado:Empleados;
    public trabajadores:Array<Empleados>;
    public trabajador_externo: boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado= new Empleados('Manuel Pataquias', 38, 'barman', true);
        this.trabajadores =[
            new Empleados('Manuel Pataquias', 38, 'barman', false),
            new Empleados('Carlos Loaiza', 54, 'Desarroshador', true),
            new Empleados('Andrés Duque', 27, 'Electricista', true),
            new Empleados('Alejandro Tamasho', 24, 'aguatero', false),
            new Empleados('Cesar Alzate', 34, 'ginecologo', false)

        ];
        this.trabajador_externo = true;
        this.color='green';
        this.color_seleccionado='#ccc';
    }

    

    ngOnInit(){
        //this.empleado =new  Empleados('David Carrillo', 32, "camarero", true);
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo=valor;
    }
    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
}