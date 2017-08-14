console.log('hi shaaaah!!!');

const moment = require('moment')
const chalk = require('chalk')

let answer1 = moment().format()
console.log('It is ' + answer1 + ' .');

console.log(chalk.blue('hayyyyyyyyyyyyyy'));

let answer2 = moment().format('DDDD');
console.log('It is ' +
  answer2 + 'th day of the year.');

let answer3 = moment().unix();
console.log('It is ' +
  answer3 + ' seconds into the day.');


  let dls = (moment().isDST() ? ' is' : ' is not')
  // if (dls === true) {
      // console.log('It ' + answertrue + 'during Daylight Savings Time.');
      // answertrue = 'is'
      console.log('It' + dls + ' during DayLight Savings Time.');


  // else {
    // console.log('It ' + answerfalse + 'during Daylight Savings Time.');
    //   answerfalse = 'is not'
  // }

// }
//
let leapYear = moment().isLeapYear();

 // answer5();

 if (leapYear) {
    console.log('It ' + answer + 'a Leap Year.');
 }
 else {
   console.log('It is not a Leap Year.');
 }
