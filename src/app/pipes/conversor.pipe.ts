import {Pipe, PipeTransform} from '@angular/core';
import { NumberValueAccessor } from '@angular/forms/src/directives';

@Pipe ({name: 'conversor'})
export class ConversorPipe implements PipeTransform{
    transform(value, por){
        let value_one = parseInt(value);
        let value_two = parseInt(por);

        let result = "La multiplicacion es: "+value_one+" x "+value_two+" = "+(value_one*value_two);
    return result;
    }
}