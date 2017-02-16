/**
 * Created by Ivan Talalaev on 2/16/2017.
 */

let Rx = require('rxjs'),
  ApiProcessor = require('./../auxilaryLib').ApiProcessor;

let numbers = Rx.Observable.interval(1000);
numbers.subscribe(x => console.log(x));
