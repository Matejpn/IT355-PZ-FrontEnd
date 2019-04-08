import {Pipe} from '@angular/core';

@Pipe({
  name: 'SearchPipeName'
})

export class SearchPipeName {
  transform(value: Object[], anotherValue: string): Object[] {
    console.log('value',value)
    console.log('another',anotherValue)
    if(value == null){
      return null;
    }
    if(anotherValue !== undefined){
      return value.filter((item: Object) => item["name"].toLowerCase().startsWith(anotherValue.toLowerCase()) || item["brand"].toLowerCase().startsWith(anotherValue.toLowerCase()));
    }else{
      return value;
    }
  }
}
