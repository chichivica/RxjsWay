/**
 * Created by Ivan Talalaev on 2/16/2017.
 */
let Rx = require('rxjs');

let observable = Rx.Observable.create(function (observer) {
  observer.next(42);
  observer.next('foo');
  //observer.error('smth went wrong!');
  observer.next(228);
  observer.complete();
  return function unsubscribe() {
    console.log('from unsubscribe function');
  };
});

let subscription = observable.subscribe(
  function (value) {
    console.log('Next: %s.', value);
  },
  function (ev) {
    console.log('Error: %s!', ev);
  },
  function () {
    console.log('Completed!');
  }
);

let subscription2 = observable.subscribe(
  function (value) {
    console.log('2 Next: %s.', value);
  },
  function (ev) {
    console.log('2 Error: %s!', ev);
  },
  function () {
    console.log('2 Completed!');
  }
);

subscription.unsubscribe();
subscription2.unsubscribe();

console.log('just after subscribe');

process.exit(1);