/**
 * Created by Ivan Talalaev on 2/16/2017.
 */

let Rx = require('rxjs');


let simpleArray = [1, 2, 3, 4, 5, 6, 7, 8, -1];

let observable = Rx.Observable.from(simpleArray);
observable
  .map(el => el * 2)
  .filter(el => el % 3)
  .take(3)
  .subscribe(value => console.log(value));


observable
  .scan((acc, curr) => acc + curr, 0)
  .subscribe(value => console.log(value));


observable
  .reduce((acc, curr) => acc + curr, 0)
  .subscribe(value => console.log(value));