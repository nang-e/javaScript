// Data Types
// NUMBER, STRING(TEXT),

console.log(5 / 2);
console.log(5 * 2);
console.log(5 + 2);

// VARIABLE
const a = 5; // const : 상수 지정
const b = 2;
console.log(a + b);
console.log(a * b);
console.log(a / b);

const myName = 'nayeon' // const => cannot update the value
let myNameNy = 'nayeon' // 변수를 처음 선언할 때만 사용, 변수 
// 변수선언은 const로 진행하고 만약 변수수정할 일 있으면 let으로 다시 선언, var은 사용 X

// Boolean - true, false, null, undefined
const amIFat = true;
console.log(amIFat);

const myButty = false;
console.log(myButty);

let something; // 컴퓨터 안에 메모리는 존재하지만 변수값이 할당되지 않았을 경우 undefined
console.log(something);

// Arrays
const daysOfWeek = ['mon','tue','wed','thur','fri','sat','sund']
console.log(daysOfWeek);

// Get Item from Arrays
console.log(daysOfWeek[5]);

// Add one more day to the array => list.push()
daysOfWeek.push('holiday')

// Objects
// objectName = {ob1:, ob2:, ..}
const player = {
  name: 'nayeon',
  age: 23,
  points: 10
}

// Access Objects
console.log(player);
console.log(player.name);
console.log(player['name']); // Item으로 Value 불러오기

player.lastNmae = 'kim';
console.log(player);

player.points += 10
console.log(player.points);

// Function
// function functionName(x){}
function funcName(x){
  console.log('Hello'+x);
}

funcName('nayeon');

// function example
function plus(a,b){
  console.log(a+b);
}
plus(1,3)

function divide(a,b){
  console.log(a/b);
}
divide(10,4)

// How to send information to function
const man = {
  name: 'nayeon',
  sayHello: function(nm){
    console.log('hello!'+' '+ nm)
  }
}

man.sayHello('haru')
man.sayHello(man.name)

console.log(console)

const calculator = {
  plus: function(x,y){
    console.log(x+y)
  },
  minus: function(x,y){
    console.log(x-y)
  },
  multiply: function(x,y){
    console.log(x*y)
  },
  divide: function(x,y){
    console.log(x/y)
  },
  power: function(x,y){
    console.log(x**y)
  }
}

calculator.plus(2,3);
calculator.minus(2,3);
calculator.multiply(2,3);
calculator.divide(2,3);
calculator.power(2,3);

// Returns
const age = 96;
function calculateKrAge(ageOfForienger){
  krAge = ageOfForienger + 2;
  return krAge // return : communicate with inside& outside of function
}

console.log(typeof age);
console.log(calculateKrAge(21))

// Conditions
/// if(condition){
      /// condition === true
/// }

const userAge = parseInt(prompt('How old are you?: ')); // prompt(): showing user some messages (similar as input() in python)
console.log(userAge);
console.log(typeof userAge)
if (isNaN(userAge)) {
  console.log('Error! Input number.');
}

const drinkAge = parseInt(prompt('How old are you? '));
console.log(drinkAge);
console.log(typeof drinkAge);
if (isNaN(drinkAge)||drinkAge < 0) {
  console.log('Error! Input real positive number');
} else if (drinkAge<18) {
  console.log('Cannot drink.');
} else if (drinkAge >= 18 && drinkAge <= 50){ // and(&&), or(||)
  console.log('Can drink');
} else {
  console.log('Stop drinking. Worry about your health.');
}

