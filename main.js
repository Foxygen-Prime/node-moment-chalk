console.log("hi shaaaah!!!");

const moment = require('moment')
const chalk = require('chalk')

let answer1 = moment().format()
console.log('It is ' + answer1 + ' .');

console.log(chalk.blue('hayyyyyyyyyyyyyy'));

let answer2 = moment().format('DDDD');
console.log('it is ' +
  answer2 + "th day of the year.");

let answer3 = moment().unix();
console.log('It is ' +
  answer3 + ' seconds into the day.');

  function(answer4){
  let dls = moment().isDST();
  if dls === (true) {
      console.log("It " answertrue "during Daylight Savings Time.");
      answertrue = "is"
  }
  else {
    console.log("It " answerfalse "during Daylight Savings Time.");
      answerfalse = "is not"
  }
}
//
// let answer5 = moment().isLeapYear();
//
//  function(answer5){
//  if leapYear === (true) {
//      console.log("It " answertrue "during Daylight Savings Time.");
//      answertrue = "is"
//  }
//  else {
//    console.log("It " answerfalse "during Daylight Savings Time.");
//      answerfalse = "is not"
//    }
//  }
