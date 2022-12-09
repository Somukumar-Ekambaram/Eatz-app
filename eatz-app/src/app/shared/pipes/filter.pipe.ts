import { Pipe, PipeTransform } from '@angular/core';

/**
 *
 *
 * @export
 * @class FilterPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], value: string): any[] {
    if (!items) return [];

    if (!value) return items;

    return items.filter((item) => {
      return item?.name.toLowerCase().includes(value.toLowerCase());
    });
  }
}
