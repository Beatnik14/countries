import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform',
})
export class NumberPipe implements PipeTransform {
  transform(value: string) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
