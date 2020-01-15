export class Empleados{
    /*public nombre:string;
    public edad:number;

    cosntructor(nombre, edad){
        this.nombre=nombre;
        this.edad= edad;
        }*/
    constructor(
        public nombre:string,
        public edad:number,
        public cargo:string,
        public contratado:boolean
    ){}
    }

