/**
 * Created by Ivan Talalaev on 2/16/2017.
 * Library with long term operations returning promise
 */

let _ = require('lodash');

const EventEmitter = require('events');


function calculateBigArray() {

}

function calculateOneNumber() {

}

class UserInputEmitter extends EventEmitter {
  constructor(time) {
    super();
    this.time = time;
    this.strings = [
      'google',
      'cats',
      'dogs',
      'books',
      'mems',
      'food',
      'films',
      'funny pictures'
    ];
    this.continueWorking = true;
  }


  startWorking() {
    let currentInput = this.strings[_.random(0, this.strings.length - 1)];

    setTimeout(() => {
      this.emit('search-query', currentInput);
      if (this.continueWorking) {
        this.startWorking();
      }
    }, 1000)
  }

  stopWorking() {
    this.continueWorking = false;
  }
}

class ApiProcessor extends EventEmitter {
  constructor() {
    super();
    this.continueWorking = true;
  }

  startWorking() {
    this.receivedSms = {
      title: `simpleSms ${Math.floor(Math.random() * 100)}`,
      text: `text of the sms ${Math.floor(Math.random() * 1000000000)} ${Math.floor(Math.random() * 1000000000)}`
    };
    setTimeout(() => {
      this.emit('request-received', this.receivedSms);
      if (this.continueWorking) {
        this.startWorking();
      }
    }, 1000)
  }

  stopWorking() {
    this.continueWorking = false;
  }
}

module.exports = {
  calculateBigArray,
  calculateOneNumber,
  UserInputEmitter,
  ApiProcessor
};
