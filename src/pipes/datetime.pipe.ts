import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
    name: 'DateTimePipe'
})
export class DateTimePipe implements PipeTransform {

    // Transform is the new "return function(value, args)" in Angular 1.x
    transform(value, args?) {
        return moment(value).fromNow();
    }
}