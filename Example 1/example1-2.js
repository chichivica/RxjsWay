/**
 * Created by Ivan Talalaev on 2/16/2017.
 */

let Rx = require('rxjs');

let observable = Rx.Observable.create(function (observer) {
  observer.next(42);
  observer.next('foo');
  observer.error('smth went wrong!');
  observer.next(228);
  observer.complete();
  return function unsubscribe() {
    console.log('from unsubscribe function');
  };
});
//
//  let hotObservable = observable.publish();
//
// observable
//   .subscribe(value => {
//     console.log('within hot observable', value);
//   });


let subscription3 = observable.subscribe({
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  }
);


subscription3.unsubscribe();


console.log('just after subscribe');

process.exit(1);