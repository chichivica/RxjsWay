/**
 * Created by Ivan Talalaev on 2/16/2017.
 */

let helpLib = require('./../auxilaryLib'),
  Rx = require('rxjs');


let simplestSubject = new Rx.Subject();
simplestSubject.subscribe(value => console.log(value));
simplestSubject.subscribe(value => console.log(value));

simplestSubject.next('foo');
simplestSubject.next('bar');
simplestSubject.next(228);


simplestSubject
  .pluck('name')
  .subscribe(name => console.log(name));
simplestSubject.next({name: "Ivan", lastName: "Talalaev"});

