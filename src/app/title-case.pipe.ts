import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
    return value;
    else

    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
