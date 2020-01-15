import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
//import {Http, Response, Headers} from '@angular/common/http';
import 'rxjs/add/operator/map';
//import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable ()
export class PeticionesServices{
    public url:string;

constructor(
    private _http:Http
){
    this.url= "https://jsonplaceholder.typicode.com/posts";
}

    getPrueba(){
        return 'Hola desde servicio';
    }

    getArticulos(){
        return this. _http.get(this.url)
        .map(res => res.json());
    }
}