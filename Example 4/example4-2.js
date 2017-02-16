/**
 * Created by Ivan Talalaev on 2/16/2017.
 */

let Rx = require('rxjs'),
  ApiProcessor = require('./../auxilaryLib').ApiProcessor;
let myProcessor = new ApiProcessor();


Rx.Observable.fromEvent(myProcessor, 'request-received')
  .throttleTime(5000)
  .subscribe(event => {
    console.log(JSON.stringify(event));
  });


myProcessor.startWorking();
