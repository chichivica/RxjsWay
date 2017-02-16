/**
 * Created by Ivan Talalaev on 2/16/2017.
 */

let Rx = require('rxjs');


let simpleArray = [1, 2, 3, 4, 5, 6, 7, 8, -1, null, "string"];


let source = Rx.Observable.from(simpleArray),
  subject = new Rx.Subject(),
  multicasted = source.multicast(subject);

// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
multicasted.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

// This is, under the hood, `source.subscribe(subject)`:
multicasted.connect();
