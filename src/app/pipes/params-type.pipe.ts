import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paramsType'
})
export class ParamsTypePipe implements PipeTransform {

  transform(value: string): string {
    return value == 'integer'? 'Число' : 'Строка';
  }

}
