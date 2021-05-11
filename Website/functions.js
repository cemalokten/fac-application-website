// //------------- SETTING DEFAULT VALUES

// const allBookings = [];

// const createBooking = function (flightNum = 5, numPassengers = flightNum * 5, price = 100) {
// 	const newBooking = {
// 		flightNum,
// 		numPassengers,
// 		price,
// 	};

// 	console.log(allBookings);
// 	allBookings.push(newBooking);
// };

// createBooking('8');

// console.log(allBookings);

// createBooking('50', undefined, 150); //SKIP PARAMETER AND LEAVE IT AS DEFAULT

// console.log(allBookings);

//------------- PASSING PRIMITVE AND REFERENCE VALUES

// const flight = 'LH234';
// const cemal = {
// 	name           : 'Cemal Okten',
// 	passportNumber : 23432542345,
// };

// const checkIn = function (flightNum, passenger) {
// 	(flightNum = 'LH999'), (passenger.name = 'Mr ' + passenger.name);

// 	if (passenger.passportNumber === 23432542345) {
// 		console.log('Check In');
// 	} else {
// 		console.log('Wrong Passport!');
// 	}
// };

// checkIn(flight, cemal);
// console.log(flight);
// console.log(cemal);

// const newPassport = function (person) {
// 	person.passportNumber = Math.trunc(Math.random() * 10000333300);
// };

// newPassport(cemal);

// console.log(cemal.passportNumber);

//------------- CALL BACK FUNCTIONS

// const firstWord = function (str) {
// 	const [ first, ...others ] = str.toLowerCase().split(' ');
// 	return `${first.toUpperCase()}${others.join('')}`;
// };

// const lastWord = function (str) {
// 	const array = str.split(' ');
// 	array[array.length - 1] = array[array.length - 1].toUpperCase();
// 	return array.join('');
// };

// function transformer (str, fn) {
// 	return `This is the new String: ${fn(str)} made with ${fn.name}`;
// }

// console.log(transformer('Oh Hello', lastWord));
// console.log(transformer('Oh Hello', firstWord));

// const greet = (greeting) => (name) => console.log(`${greeting} / ${name}`);

// const news = greet('hey');

// news('heys');

// function greaterThan (number) {
// 	return (compared) => compared > number;
// }

// let greaterThan10 = greaterThan(10);

// // function greaterThan (10) {
// // 	return (compared) => compared > 10;
// // }

// console.log(greaterThan10(11));

// // function greaterThan (10) {
// // 	return (11) => 11 > 10;
// // }

// ------------- CALL METHOD -----------------------------

// const britishAirways = {
// 	airline  : 'British Airways',
// 	iataCode : 'BA',
// 	bookings : [],
// 	// book (flightNum, names) {
// 	// 	console.log(`${names} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
// 	// 	this.bookings.push({ flightNum, names });
// 	// },
// };

// const booki = function (flightNum, names) {
// 	console.log(`${names} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
// 	this.bookings.push({ flightNum, names });
// };

// console.log(britishAirways);

// const eurowings = {
// 	airline  : 'Eurowings',
// 	iataCode : 'EW',
// 	bookings : [],
// };

// const book = britishAirways.book;

// booki.call(eurowings, 23, 'Cemal');

// console.log(eurowings);

// const omnium = {
// 	make  : 'Omnium',
// 	model : 'WIFI',
// 	order : [],
// };

// const order = function (size, color) {
// 	console.log(`${this.make} ${this.model} in a size ${size} with ${color} paint`);
// 	this.order.push({ size, color });
// };

// order.call(omnium, 54, 'Blurple');
// order.call(omnium, 54, 'Blurple');

// order.call(omnium, 51, 'Blue');
// order.call(omnium, 51, 'Bluesed');

// console.log(omnium);

// const cervelo = {
// 	make  : 'Cervelo',
// 	model : 'S1',
// 	order : [],
// };

// order.call(cervelo, 61, 'Red');

// console.log(cervelo);

// const oatly = {
// 	brand  : 'Oatly',
// 	orders : [],
// 	// makeOrder (type, litres, qty, company) {
// 	// 	console.log(`${company} ordered ${qty} cartons of Oatly ${type} (${litres} ea)`);
// 	// 	return this.orders.push({ type, litres, qty, company });
// 	// },
// };

// const makeOrder = function (type, litres, qty, company) {
// 	console.log(`${company} ordered ${qty} cartons of Oatly ${type} (${litres} litres ea)`);
// 	return this.orders.push({ type, litres, qty, company });
// };

// makeOrder.call(oatly, 'Barista', 1, 10, 'Tesco');
// makeOrder.call(oatly, 'Barista', 1, 102, 'Sainsburys');
// makeOrder.call(oatly, 'Normal', 1, 110, 'Tesco');
// makeOrder.call(oatly, 'Light', 1, 102, 'Tesco');
// makeOrder.call(oatly, 'Barista', 1, 10, 'Tesco');

// console.log(oatly);

// // ----------------- BIND METHOD ----------------------

// const orderOatly = makeOrder.bind(oatly);

// orderOatly('Vegan', 0.5, 55, 'ASDA');

// //MAKE FUNCTION BIND WITH PREDEFINED ARGUMENTS, E.G BARISTA, 1

// const orderOatlyBarista = makeOrder.bind(oatly, 'Barista', 1);

// orderOatlyBarista(53, 'Pret A Manger');

// // ------------ BIND WITH EVENT LISTENERS

// oatly.factories = 100;
// oatly.openFactory = function () {
// 	this.factories++;
// 	console.log(`Factory number ${this.factories} has just opened!`);
// };

// console.log(oatly);

// document.querySelector('.openFactory').addEventListener('click', oatly.openFactory.bind(oatly));

// console.log(oatly);

//------------ BINDING WITHOUT THIS KEYWORD
//------------ ALLOWS US TO PREDEFINE ARGUMENTS, IN THIS CASE WE ARE PREDEFINING THE TAX RATE

// const taxCalc = function(rate, value) {
//     return value + value * rate;
// }

// console.log(taxCalc(0.2, 100));

// const addVAT = taxCalc.bind(null, 0.2);

// console.log(addVAT(100));

// //-------------DOING THE SAME THING BUT WITH A FUNCTION THAT RETURNS ANOTHER FUNCTION

// function taxRate(taxRate) {
//     return (value) => value + value * taxRate;
//   }

// const valueAmount = taxRate(0.2);

// console.log(taxRate(0.2)(100));

// console.log(valueAmount(100));

// ---------

// function bmi(height) {
//     return (weight) => weight * height;
// }

// const bmiCalc = bmi(1.72);

// console.log(bmiCalc(65));

// //-----------

// const dogFood = function (age, name) {
//     return function (weight) {
//         console.log(`Recommended amount of Nutrafood per day for ${name}: ${weight * age} KG`);
//     }
// }

// const bobbyFood = dogFood(6, 'Bobby');

// console.log();
// bobbyFood(14)

//---------CODING CHALLENGE

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

const poll = {
	question    : 'What is your favourite type of food?',
	options     : [
		'Indian',
		'Italian',
		'Japanese'
	],
	answers     : new Array(3).fill(0),

	prompt() {
		const n = prompt(
			`What is your favourite type of food?\n 0: Indian\n 1: Italian\n 2: Japanese\n`
		);
		return this.updatePoll(n);
	},

	updatePoll(n) {

			n >= 0 && n <= 2 ? this.answers[n]++ :
			console.log('No answer that matches your number');
	},

	showResults() {
		console.log(
			`Votes are as follows: Indian ${this.answers[0]}, Italian ${this
				.answers[1]}, Japanese ${this.answers[2]}`
		);
	}
};

// document
// 	.querySelector('.updatePoll')
// 	.addEventListener('click', poll.prompt.bind(poll));

// document
// 	.querySelector('.showResults')
// 	.addEventListener('click', poll.showResults.bind(poll));

(function() {
	const header = document.querySelector('h1');
	header.style.color = 'red';
	document.querySelector('body').addEventListener('click', function() {
		header.style.color = 'green';
	});
})();

const logo = document.querySelector('.preview');

console.log(logo);
