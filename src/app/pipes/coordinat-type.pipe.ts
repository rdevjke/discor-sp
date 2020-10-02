import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coordinatType'
})
export class CoordinatTypePipe implements PipeTransform {

  transform(value: string): string {
    if(value == 'value') return 'Значение';
    else if(value == 'other') return 'Другое';
    else return 'Ключ классификатора';
  }

}
