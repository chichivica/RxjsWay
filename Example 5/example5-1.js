/**
 * Created by Ivan Talalaev on 2/16/2017.
 */
let Rx = require('rxjs'),
  UserInput = require('../auxilaryLib').UserInputEmitter;

let newUserInput = new UserInput(1000);


Rx.Observable.fromEvent(newUserInput, 'search-query')
  .do(el => console.log(el))
  .debounce(() => Rx.Observable.interval(200))
  .subscribe(result => console.log(result, 'debounced'));


newUserInput.startWorking();