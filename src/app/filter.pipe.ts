import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterName:string): any {
    if(value.lenght ===0 || filterName === ''){
      return value;
    }
    const resultArray=[];
    for( const item of value){

      if(item.firstname.toLowerCase() === filterName.toLowerCase()){
        resultArray.push(item);
      }

    }
    return resultArray
  }

}
