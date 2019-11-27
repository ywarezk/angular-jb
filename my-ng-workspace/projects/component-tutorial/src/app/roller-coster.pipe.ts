import { Pipe, PipeTransform } from '@angular/core';

/**
 * Yariv Katz => YaRiV KaTz
 */

@Pipe({
  name: 'rollerCoster',
  // pure: false
})
export class RollerCosterPipe implements PipeTransform {

  transform(value: any, age : number, msg : string): string {
    let result = '';
    let counter = 0;
    for (let char of value) {
      if (counter % 2 === 0) {
        result += char.toUpperCase();
      } else {
        result += char;
      }
    }
    return result;
  }

}
