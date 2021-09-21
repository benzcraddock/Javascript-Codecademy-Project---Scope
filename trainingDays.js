// The scope of `random` is too loose - moved declaration of random variable to within function and out of global scope, since previously each time getRandEvent was called it used the same value - moving to block scope allows for each competitor to have randomly assigned events

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight - declare days before if statement, removed 'let' within if/else if statements

const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight - created global variable name before functions, removed definition in functions, added as an additional parameters (1) to both functions and added to the function calls at base of code

const name = 'Nala';

const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);

// Define a `name` variable. Use it as an argument after updating logEvent and logTime  - passed through as an argument


logEvent(name, event);
logTime(name, days);

// functions work for another competitor

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);

const event3 = getRandEvent();
const days3 = getTrainingDays(event3);
const name3 = 'Billybob'

logEvent(name3, event3);
logTime(name3, days3);