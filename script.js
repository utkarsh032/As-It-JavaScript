// console.log(firstName);

// var firstName = 'Utkarsh'
// console.log(firstName)

// // console.log(lastName)
// let lastName = 'Raj'

// console.log(NaN === NaN)

// prompt('put your data') //'321'
// confirm('is it confirm.') //true
// alert('Alert is active') //undefined

// .................................

// let c = { greeting: 'Hello' }
// let d;

// d = c
// c.greeting = 'Hey'
// console.log(d.greeting)

// .................................
// strings are indexed

// const name = 'utkarsh is not a name its means culture'
// console.log(name.length)

// const text = '   Pravel Dom is is is not HR   '
// console.log(text.trim())
// console.log(text.includes('P'))
// console.log(text.indexOf('D')).
// console.log(text.replace('P', 'Z'))
// console.log(text.replace('Pravel', 'Utkarsh'))
// console.log(text.replaceAll('is','was'))
// console.log(text.concat(' or CO'))

// const digit = '9876'

// console.log(digit.padStart(12, '*'))
// console.log(digit.padEnd(12, '*'))

// console.log(text.charAt(12))
// console.log(text.charCodeAt('P'))

// const msg = 'Hi I am Utkarsh Raj'
// console.log(msg.split(' '))

// ........................
// const num = 4
// console.log(Math.sqrt(num))
// console.log(Math.pow(num, 3)) //num power 3
// console.log(Math.floor(3.543))
// console.log(Math.ceil(3.543))
// console.log(Math.round(21.3231))
// console.log(Math.random() * 10)

// console.log(Math.floor(Math.random() * 11 + 10))

// ........................
// let h = prompt("Please enter height of rectangle")
// let w = prompt("Please enter width of rectangle")

// console.log(document.write('Area of rectangle : ', h * w))
// console.log('Area of rectangle : ', h * w)

// ........................
// console.log(Boolean(10)) //true
// console.log(Boolean(0)) //false
// console.log(Boolean(1 / 0)) //true
// console.log(Boolean(0 / 1)) //false

// console.log(Boolean('')) //false
// console.log(Boolean(' ')) //true

// console.log(Boolean(undefined)) //false
// console.log(Boolean(NaN)) //false
// console.log(Boolean(null)) //false

// const a = 19
// const b = 10
// const x = '19'
// const y = '10'

// console.log(a == b) //false
// console.log(a == x) //true
// console.log(a === x) //false
// console.log(a != x) //false
// console.log(a !== x) //true

// console.log(a > b)
// console.log(a >= b)
// console.log(a < b)
// console.log(a <= b)

// ........................
// const userAge = 22

// const isSchoolStudent = (userAge >= 5) && (userAge <= 18)
// const isCollegeStudent = (userAge >= 18) && (userAge <= 24)

// const isStudent = isSchoolStudent || isCollegeStudent
// console.log(isStudent)

// const andResult = 0 && 2
// const orResult = 0 || 2
// console.log(andResult, orResult)

// const andResult2 = '' && 'Hello'
// const orResult2 = '' || 'Hello'
// console.log(andResult2, orResult2)

// const andResult3 = 'Hello' && null
// const orResult3 = 'Hello' || null
// console.log(andResult3, orResult3)

// const andResult4 = 'Hello' && -4 + 4
// const orResult4 = undefined || 4 + 8 * 5
// console.log(andResult4, orResult4)

// const andResult5 = 'Hello' && console.log('hello1')
// const orResult5 = undefined || console.log('hello2')
// console.log(andResult5, orResult5)

// ........................
// const name = 'Utkarsh'
// const age = 18

// if (age > 18) {
//   console.log('You are elligble to vote!')
// } else if (age == 18) {
//   console.log('Your age is under the process..')
// }
// else {
//   console.log('You are not elligble to vote!')
// }

// const username = prompt('Please Enter Your Name.');
// const userAge = parseInt(prompt('Please Enter Your Age.'));

// // debugger
// console.log(`Name: ${username}`);
// console.log(`Age: ${userAge}`);

// if (userAge >= 0 && userAge <= 4) {
//   console.log(`${username} is a kid.`);
//   console.log('And he/she is playing.');
// }

// if (userAge >= 5 && userAge <= 17) {
//   console.log(`${username} is a school student.`);
//   console.log('And he/she is learning science and maths.');
// }

// if (userAge >= 18 && userAge <= 24) {
//   console.log(`${username} is a college student.`);
//   console.log('And he/she is learning computer science.');
// }

// if (userAge >= 25 && userAge <= 45) {
//   console.log(`${username} is a working professional.`);
//   console.log('And he/she is a web developer.');
// }

// if (userAge > 45) {
//   console.log(`${username} is retired.`);
//   console.log('And he/she reads newspaper.');
// }

// console.log('Program Ended!!');

// ...................
// const age = 27
// if (age >= 25 && age <= 45) {
//   console.log('this person is working worker')
// } else {
//   console.log('this person is not working worker')
// }

// const name = prompt('Enter your name')
// const age = prompt('Enter your age')

// if (name == '' || age == '') {
//   console.log('Procoder')
// } else {
//   console.log('null')
// }

// ......................

// const dayNumber = prompt('Choose Day Number between 0-7')

// if (dayNumber === 0) {
//   console.log('It is Sunday!')
// } else if (dayNumber === 1) {
//   console.log('It is Monday!')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday!')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday!')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday!')
// } else if (dayNumber === 5) {
//   console.log('It is Friday!')
// } else {
//   console.log('It is Saturday!')
// }

// switch (dayNumber) {
//   case 0:
//     console.log('It is Sunday!')
//     break;
//   case 1:
//     console.log('It is Monday!')
//     break;
//   case 2:
//     console.log('It is Tuesday!')
//     break;
//   case 3:
//     console.log('It is Wednesday!')
//     break;
//   case 4:
//     console.log('It is Thursday!')
//     break;
//   case 5:
//     console.log('It is Friday!')
//     break;
//   default:
//     console.log('It is Satuarday!')
// }

// const userName = prompt('Enter your Name')
// const userAge = prompt('Enter your age')

// switch (true) {
//   case (userAge >= 0 && userAge <= 5): console.log(`${userName} is a kid!`)
//     break;
//   case (userAge >= 5 && userAge <= 15): console.log(`${userName} is child`)
//     break
//   case (userAge >= 15 && userAge <= 25): console.log(`${userName} is now mature`)
//     break
//   case (userAge >= 25 && userAge <= 50): console.log(`${userName} is legend`)
//     break
//   default: console.log(`${userName} is quinquagenarian`)
// }

// const alphabet = prompt('Please enter a letter')

// console.log(alphabet)
// console.log(alphabet.toUpperCase())

// const grade = prompt('Please Enter Your Grade')

// switch (grade.toUpperCase()) {
//   case 'A': console.log('Your seat is between 91-100.')
//     break

//   case 'B': console.log('Your seat is between 81-90.')
//     break

//   case 'C': console.log('Your seat is between 71-80.')
//     break

//   case 'D': console.log('Your seat is between 51-70.')
//     break

//   default:
//     console.log('Prepare for Next Attempt!')
// }

// ......................
// const age = 19
// const adult = (age >= 18)

// adult ? console.log('elligble') : console.log('not elligble')
// ...
// const gender = prompt("Select 'F' or 'M'. ")
// const genderAlph = (gender.toUpperCase() == 'F')

// genderAlph ? console.log(`Your's pronoun is She/Her`) : console.log(`Your's pronoun is He/Him`)

// const result = null ? 'Utkarsh' : 0 ? '122' : 0
// console.log(result)

// ......................
// const employer = {
//   name: 'John',
//   age: 23,
//   post: 'HR',
//   salary: 67000,
//   place: 'Delhi',

// }

// const obj = {
//   prop: 'value',
// };

// Object.seal(obj);

// obj.prop = 'new value'; // Allowed
// obj.newProp = 'new value'; // Not allowed
// delete obj.prop; // Not allowed

// console.log(obj); // { prop: 'new value' }

// Object.freeze(obj);

// obj.prop = 'new value'; // Not allowed
// obj.newProp = 'new value'; // Not allowed
// delete obj.prop; // Not allowed

// console.log(obj); // { prop: 'new value' }

// const employer = {
//   name: 'Darvin',
//   age: 25,
//   post: 'Frontend',
//   floor: '4th',
//   joining: 'aug/2024',
//   salary: '78000'
// }

// delete employer.salary //  allowed

// seal function
// Object.seal(employer) // seal function prevent delete but add
// delete employer.salary // Not allowed
// employer.salary = 83000 // allowed

// freeze function

// delete employer.salary // allowed
// Object.freeze(employer) // Freeze function prevent delete but add
// delete employer.salary // not allowed
// employer.salary = 83000 //not allowed

// console.log(employer)
// console.log(employer.name)
// console.log(employer.salary)
// console.log('salary' in employer)

// ..................................

// const string = {}
// const object = []
// console.log(typeof string)
// console.log(typeof object)

// const city = ['Goa', 'Delhi', 'Kanpur', 'Nagpur']

// console.log(typeof city)
// console.log(city[2])
// city[2] = 'Lucknow'
// console.log(city[2])

// city.push('Manipur')
// console.log(city)

// task
// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// rainbowColors.push('black', '', 'maroon') //add element at lst
// rainbowColors.pop() //remove element from last
// rainbowColors.unshift('white') //add element at first
// rainbowColors.shift('Branjal') //remove element
// console.log(rainbowColors.shift())//remove element from first
// console.log(rainbowColors)

// ..................................

// const employerName = ['Ram', 'Raghav', 'Manish', 'Harsh', 'Utkarsh']
// const newEmployerName = ['Sarvan', 'Jotesh', 'Pravel']
// employerName.pop() //remove last elemnt
// employerName.push('Nishu')//add elmet to first
// employerName.shift() //remove first elemnt
// employerName.unshift('Anubhav') //add element at first
// const newTeam = employerName.concat(newEmployerName) //add two things
// const checkIndex = newTeam.indexOf('Jotesh') //check index
// const checkIncludes = newTeam.includes('Jotesh') // check the element is in array
// const reverseArr = newTeam.reverse() //reverse the array
// const sort = newTeam.sort() //sort array as alphabetical
// const sliceMeth = newTeam.slice(0, 3) //create new arr change
// const spliceMeth = newTeam.splice(0, 3) // change old arr

// console.log(newTeam)
// console.log(sliceMeth)
// console.log(spliceMeth)
// console.log(checkIndex)
// console.log(employerName)
// console.log(checkIncludes)
// console.log(reverseArr)

// const ticTacToe = [
//   ['X', null, null],
//   [null, null, 'O'],
//   ['O', null, 'X']
// ]
// console.log(ticTacToe[0][0])

// Define user1 object
// const user1 = {
//   firstName: 'Anurag',
//   lastName: 'Singh',
//   pata: {
//     city: 'Delhi',
//     pincode: 989888,
//   },
//   subject: ['Physics', 'CS', 'Maths']
// }

// // Define user2 as an empty object
// const user2 = {}

// // Assign properties of user1 to user2
// Object.assign(user2, user1)

// // Output user1 and user2
// console.log(user1) // Output user1 object
// console.log(user2) // Output user2 object with properties copied from user1

// //spread operator
// const user2 = { ...user1 }
// console.log(user2)
// console.log(user1)

// const employe = ['user1', 'user2', 'user3', 'user4', 'user5']
// // const newEmploye = { ...employe }

// const newEmploye = {}

// Object.assign(newEmploye, employe)

// console.log(employe)
// console.log(newEmploye)

// ......................................

// let mrk = 30
// mrk += 5
// mrk -= 5
// mrk %= 5
// mrk *= 5
// mrk /= 5
// mrk **= 2
// mrk++
// mrk--

// console.log(mrk)

// ......................................
// let num = 0
// while (num <= 10) {
//   console.log('hi')
//   console.log(num++)
// }

// let num = 1
// while (num <= 100) {
//   console.log(num++)
// }

// const friends = ['Raghav', 'Satish', 'Mono', 'Robin', 'Alex']

// let i = 0
// while (i < friends.length) {
//   let friend = friends[i++]
//   // console.log(i++ ,'.', friend[i++])
//   console.log(`${i}. Mr.${friend}`)
// }

// ...........................
// for Loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i)
// }

// const friends = ['Raghav', 'Satish', 'Mono', 'Robin', 'Alex', 'Jorge', 'Bravo', 'Parker', 'Harry']

// for (let i = 0; i <= friends.length; i++) {
//   console.log(`${i}. Mr.${friends[i]}`)
// }

// print even number

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }

//.................................
// do while loop

// let i = 10
// do {
//   console.log(i++)
// } while (i <= 15) {
//   console.log(i)
// }

// let password = "";

// do {
//   password = prompt("Enter your password: ");
// } while (password != "secret");

// console.log("You entered the correct password!");

// guess a secret number between 0-9

let num = "";

// do {
//   num = prompt("Guess the secret number (0-9): ");
// } while (num != 7) {
//   console.log('Good Job! You find the seccret number.')
// }

// ...........................
// function

// function myIntro() {
//   console.log('My name is Utkarsh Raj')
// }

// function intro(username, place) {
//   console.log(`${username} belongs to ${place}`)
// }
// intro('Utkarsh', 'Delhi')
// intro('Prakash', 'Pune')

// function addTwoNumber() {
//   return 5 + 7
// }
// // addTwoNumber()
// const output = addTwoNumber()
// console.log(output)

// function multiplication(a, b) {
//   return (a * b)
// }
// const result = multiplication(4, 5)
// console.log(result)

// const h = prompt('Enter value of height')
// const w = prompt('Enter value of width')

// function areaOfRectangle() {
//   // return (`Area of Recatnge is : ${h} * ${w}`)
//   return (h * w)
// }
// let result = areaOfRectangle()
// console.log('Area of Recatnge is:', result)

// function addNum(a, b) {
//   return a * b
// }

// ............................

// console.log(a)
// var a = 10

// myAge()
// function myAge() {
//   console.log(age)
//   var age = 20
// }

// ............................

// function myFunc() {
//   const x = 8
//   let y = 9
//   var z = 10
// }
// myFunc()

// console.log(x)
// console.log(y)
// console.log(z)  //we cann't use variables out off the function that we define inside a function

// const x = 8
// let y = 9
// var z = 10

// function myFunc() {
//   function mathVal() {
//     console.log(x)
//     console.log(y)
//     console.log(z) //we can use variable's value any where that is define in root or out off function means as a global variables
//   }
//   mathVal()
// }
// myFunc()

// {
//   var x = 2;
// }
// console.log(x) //block scope

// myFunction()
// function myFunction() {
//   car = 'KIA sonet'
// }
// console.log(car) //automatically global function

// function outer() {
//   var x = 421
//   function inner() {
//     console.log(x) //lexical scope
//   } inner()
//   console.log(x)
// }
// outer()

// function grand() {
//   var grandPaa = 'David Misra'
//   function parent() {
//     var Paa = 'Vibhuti Misra'
//     function child() {
//       var Son = 'Jayant Misra'
//       console.log(`grandPaa  = ${grandPaa} > Paa= ${Paa} > Son= ${Son}`)
//     } child()
//   } parent()
// } grand()

// ........................

// higer order function

// function a(b) {
//   console.log(b)
//   console.log(typeof b)
// }
// a('utkarsh')
// a({ name: 'utkarsh', age: '20' })
// a(['a', 'e', 'i', 'o', 'u'])

// console.log(a)
// console.dir(a)

// function a(b) {
//   console.log(b)
//   console.dir(b)

//   b() //here b is a sayHi function
// }

// function sayHi() {
//   console.log('i am Hi!')
// }

// a(sayHi) // here sayHi is  argument of b

// // a is higher order function

// // callback function
// a(function () {
//   console.log('Dm Me!')
// })

// ...............................

// function sayHello() {
//   console.log('Hello developer')
// }

// setTimeout(sayHello, 2000);

// const jarvis = setTimeout(`console.log('Jarvis')`, 2000)
// const siri = setTimeout(`console.log('Siri')`, 4000)
// const nexus = setTimeout(`console.log('Nexus')`, 6000)

// clearInterval(siri)
// clearTimeout(siri)

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

//............clouser

// function outer() {
//   const round1 = 11;
//   function inside() {
//     const round2 = 8;
//     return function inner() { // Added "function" keyword here
//       console.log(round1 + round2);
//     };
//   }
//   return inside(); // Invoking medium function here to get the closure
// }

// const closure = outer(); // Corrected the variable name to "closure"
// console.log(closure);
// console.dir(closure);

// function...

// function concatName(firstName, middleName, lastName) {
//   return firstName + ' ' + middleName + ' ' + lastName;
// }

// var concatGWC = concatName('George', 'Washington', 'Carver');

// console.log(concatGWC)

// ......Methods

// const maths = { //we have a method named add inside maths.
//   add: function (a, b) {
//     return (a + b)
//   },

//   subs: function (a, b) {
//     return (a - b)
//   },

//   into: function (a, b) {
//     return (a * b)
//   },

//   sqr: function (num) {
//     return (num ** 2)
//   }

// }

// maths.add(9, 4)
// maths.subs(9, 4)
// maths.into(9, 4)
// maths.sqr(4)

//.............functions

// function declaration

// function sqr(num) {
//   return num ** 2
// }

// function expression
// const square = function sqr(num) {
//   return num ** 2
// }

// arrow function
// const square = (num) => console.log(num ** 2)

//.. normal v/s arrow function

/// no arguments in arrow function

// function myFun() {
//   console.log(arguments)
// }
// myFun('dummy', 'data', 'loading', 54) //normal function has always allgruments but arrow

// const myFun = () => {
//   console.log(arguments)
// }
// myFun('dummy', 'data', 'loading', 54) // arguments is not defined

/// Arrow functions do not create their own this binding

// const obj = {
//   name: 'dummy',
//   age: 23,
//   myFunc: function () {
//     console.log(this)
//   }
// }

// obj.myFunc()

// const obj = {
//   name: 'dummy',
//   age: 23,
//   myFunc: () => {
//     console.log(this)
//   }
// }
// obj.myFunc()

/// Arrow functions cannot be used as constructors
// go deep : https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/

//..........................

// const fruits = ['Apple', 'Grapes', 'Banana', 'Payapa', 'Orange']

// // for (i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i])
// // }

// for (const fruit of fruits) {
//   console.log(fruit)
// }

// const person = {
//   firtName: 'Utkarsh',
//   lastName: 'Raj',
//   age: 19,
//   job: 'developer',
//   religion: 'Hindu',
// }

// for (key in person) {
//   console.log(key, ':', person[key])
// }

// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

// .................
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const result = months.forEach((month) => {
//   return month
//   console.log(month)
// })
// console.log('result', result)

// const Mresult = months.map((month, index) => {
// return month.toUpperCase()
// console.log(index + 1, month.toUpperCase())
// })
// console.log('Map Method:', Mresult) // in map new value store in new created array.

//  by FilterMethod
// const filteredMonth = months.filter((month, index, arr) => {
//   console.log(index + 1, month)
//   return month.toUpperCase()
// })
// console.log(filteredMonth) // here filtered put only truthy value or new filtered value

// assignment

// const monthLength5 = months.filter((month, index) => {
//   return month.length >= 5
// })
// console.log("Month length is greater than 5", monthLength5)

// assignment = that hav a corrector M
// const monthM = months.filter((month, index) => {
// return month.toUpperCase().includes('M')
// return index >= 5
// })
// console.log(monthM)

// Reduce......
// const dayInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// const RDayinMonth = dayInMonth.reduce((acc, cur) => {
//   return acc + cur
// }, 0)
// console.log("Reduce Method", addDayinMonth)

// const totalDay = dayInMonth.reduce((acc, cur) => {
//   return acc + cur
// }, 0)
// console.log(totalDay)
// Filter......

// const FdayInMonth = dayInMonth.filter(dayInMonth => dayInMonth % 2 === 0)
// console.log("Filter Methhod", FdayInMonth)

// const family = [
//   { name: 'Robin', age: 27 },
//   { name: 'Pablo', age: 21 },
//   { name: 'Smath', age: 29 },
//   { name: 'Jolly', age: 24 },
//   { name: 'Peter', age: 20 },
// ]

// const over25 = family.filter(family => family.age >= 25)
// console.log('over25', over25)

// const over24 = family.filter((family, index) => {
//   return family.age <= 24
// }).map((family) => {
//   return family.name
// }).filter((family) => {
//   return family.includes('P')
// })
// console.log(over24)

//.......................

// const numbers = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// const someNumbers = numbers.some(n => n == 31)
// console.log(someNumbers) //some check only true some values

// const everyNumbers = numbers.every(n => n == 31)
// console.log(everyNumbers) // every check all value true

// ....arguments

// const add = function () {
//   let sum = 0
//   for (var i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i]
//   }
//   return sum
// }

// function multiple(a, b = 1) {
//   console.log(a * b)
// }
// multiple(5,)
// default parameter b = 1 if there  is no argument 1 will replace with that

// ..........spread operator

// const num1 = [1, 2, 3, 4, 5, 6, 7]
// const num2 = [8, 9, 10]
// const name = 'JayPrakash'

// const user = {
//   name: 'Alex',
//   age: 23,
//   city: 'USA'
// }

// const joinedArr = [...num1, ...num2, ...name]
// console.log(joinedArr)

// const updateUser = { ...user, role: "HR" }
// console.log(updateUser)

// ......rest parameter

// function sum(...theArgs) {
//   console.log(theArgs)
//   let total = 0;
//   for (const arg of theArgs) {
//     total += arg;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3));

// console.log(sum(1, 2, 3, 4));

// .....Destructuring

// let [a, b, ...rest] = ['red', 'green', 'blue', 'yellow', 'purple']

// console.log(a, b, ...rest)

//...............DOM
// function sayHi() {
//   document.body.children[4].src =
//     'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'
// }

// .......Selecting Elements
// const allImages = document.images
// const allImages = document.getElementsByTagName('img')
// const cssImage = document.getElementsByClassName('css-image')[0]
// const cssImage = document.getElementById('css-image')
// const cssImage = document.querySelectorAll('#css-image')
// const cssImage = document.querySelector('.css-image')
// const jsImage = document.querySelector('[alt="javascript roadmap"]')
// const ul = document.querySelector('ul')

// const allImages = document.querySelectorAll('img')

// const imageInsideUl = ul.querySelector('.css-image')

// const imagesUrl = [
//   'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
//   'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
//   'https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.jpg?s=612x612&w=0&k=20&c=jWUMrHgjMY9zQXsAwZFb1jfM6KxZE16-IXI1bvehjQM=',
// ]

// allImages[0].src = imagesUrl[0]
// allImages[1].src = imagesUrl[1]
// allImages[2].src = imagesUrl[2]

// for (let i = 0; i < allImages.length; i++) {
//   allImages[i].src = imagesUrl[i]
// }

// allImages.forEach((image, i) => {
//   image.src = imagesUrl[i]
// })

// ..........innerText & TextContent
// const Text = document.getElementById('text')
// console.log(Text.innerText)  //"innerText" will only return the visible text content, excluding the hidden text.
// console.log(Text.textContent) // "textContent" will return the complete text content, including the hidden text.

// .......getAttribute & setAttribute

// const h1 = document.querySelector('h1')
// const paragraph = document.querySelector('p')

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

//.....Styling in JavaScript

// const head = document.getElementById('style')
// var head = document.querySelectorAll('h1');
// // head.style.backgroundColor = 'black'
// // head.style.color = 'teal'
// head.forEach(function (h1) {
//   h1.style.backgroundColor = 'black'
//   h1.style.color = 'teal'
// })
// const Body = document.body.style.backgroundColor = "Teal"

// for (i = 0; i <= head.length; i++) {
//   head[i].style.backgroundColor = 'black'
//   head[i].style.color = 'teal'
// }

// ...Access Elements using JavaScript

// ...Append and AppendChild

// const container = document.querySelector('#container')
// const value = document.querySelector('#card')
// value.append('23')
// value.append(document.createElement('div'))

// const textNode = document.createTextNode('text');
// value.appendChild(textNode)

// container.appendChild(h1.cloneNode(true))

//.....create Element

// const firstImage = document.querySelector('#img')
// const Container = document.querySelector('.container')
// const newDiv = document.createElement("div");

// for (i = 1; i <= 50; i++) {
//   const newImg = firstImage.cloneNode()
//   newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//   newDiv.append(newImg)
// }

// document.body.insertBefore(newDiv, Container)

// const square  = document.createElement('div')
// square.style.width = '30vh'
// square.style.height = '30vh'
// square.style.background = "black"
// square.style.borderRadius="50%"
// square.style.border="4px solid red"

// document.body.insertBefore(square,newDiv)

// const newDiv = document.createElement('div') //created new div tag

// newDiv.classList.add('square') //pass class to div tag

// const container = document.querySelector('.container')
// container.style.display = 'flex'

// for (i = 1; i <= 10; i++) {
//   const imgContainer = document.createElement('div')
//   imgContainer.classList.add('img-container')

//   const newImg = document.createElement('img')
//   newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

//   const paragraph = document.createElement('p')
//   paragraph.innerText = i

//   imgContainer.append(newImg, paragraph)
//   container.append(imgContainer)
// }

// container.remove() //this method is used for remove element.

// .......

// Body
// const Btn = document.querySelector('#btn')

// function changeBg() {
//   function colorCd(num) { return Math.random() * (num + 1) }
//   const color = `rgb(${colorCd(255)}, ${colorCd(255)}, ${colorCd(255)})`
//   document.body.style.backgroundColor = color
// }
// Btn.addEventListener('click', changeBg)

// add card onClick

// const Circles = document.querySelector('.circles')
// const Circle = document.querySelector('.circle')

// let count = 1
// function addCircle() {
//   const addCircle = document.createElement('div')
//   addCircle.innerHTML = count++
//   addCircle.classList.add('circle')

//   Circles.appendChild(addCircle)
// }

// Circle.addEventListener('click', addCircle)

// ...create multiCOLOR Banner

// const LCD = document.querySelector(".lcd");

// function fillColor(event) {
//   function rndmColor(num) {
//     return Math.random() * (num + 1);
//   }

//   const colorCode = `rgb(${rndmColor(255)}, ${rndmColor(255)}, ${rndmColor(
//     255
//   )})`;
//   event.target.style.backgroundColor = colorCode;
// }

// LCD.addEventListener("click", fillColor);

// form event.....

const Input = document.querySelector("#input");
const paragraph = document.querySelector("#inputValue");

// Input.addEventListener("input", (e) => {
//   // console.log(e);
//   console.log(e.target.value);
//   paragraph.innerHTML = e.target.value;
// });

// Input.addEventListener("change", (e) => {
//   // console.log(e);
//   console.log(e.target.value);
//   paragraph.innerHTML = e.target.value;
// });

// Input.addEventListener("focus", (e) => {
//   // console.log(e);
//   console.log(e.target.value);
//   paragraph.innerHTML = e.target.value;
// });

// Input.addEventListener("blur", (e) => {
//   // console.log(e);
//   console.log(e.target.value);
//   paragraph.innerHTML = e.target.value;
// });

const form = document.querySelector("form");

// form.addEventListener("click", (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);

//   for (const p of formData.entries()) {
//     console.log(p);
//   }
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("form submitted");
// });

// ......Kryboard events
