import { defaultIfEmpty } from 'rxjs/operators';
import { of } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/conditional/defaultifempty
// Example 1: Default for empty value

// example 1
//emit 'Observable.of() Empty!' when empty, else any values from source
const exampleOne = of().pipe(defaultIfEmpty('Observable.of() Empty!'));
//output: 'Observable.of() Empty!'
const subscribe = exampleOne.subscribe((val) => console.log(val));

// example 2
// Create an observable that emits no values
// const emptySrc$ = of();
const Src$ = of(2, 4, 6);

// Apply the defaultIfEmpty operator
Src$.pipe(defaultIfEmpty('No val')).subscribe((value) => {
  console.log(value);
});
