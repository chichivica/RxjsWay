/**
 * Created by Ivan Talalaev on 2/16/2017.
 */

let Rx = require('rxjs'),
  UserInput = require('../auxilaryLib').UserInputEmitter;
let newUserInput = new UserInput(500);


Rx.Observable.fromEvent(newUserInput, 'search-query')
  .do(el => console.log(el))
  .throttle(() => Rx.Observable.interval(1500))
  .distinctUntilChanged()
  .subscribe(result => console.log(result, 'throttled'));


newUserInput.startWorking();