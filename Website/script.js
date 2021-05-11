// document.querySelector('.linked').addEventListener('mouseenter', function () {
// 	document.querySelector('body').style.backgroundImage =
// 		"url('https://payload.cargocollective.com/1/0/31246/13886292/Vince_Carter_BB4_2000_Sydney_Olympics_native_1600-1_791.jpg')";
// 	('');
// });

// console.log('hello');

// $(document).ready(function () {
// 	$(window).bind('scroll', function () {
// 		var navHeight = $(window).height() - 70;
// 		if ($(window).scrollTop() > navHeight) {
// 			$('nav').addClass('fixed');
// 		} else {
// 			$('nav').removeClass('fixed');
// 		}
// 	});
// });

// document.ready(function () {
// 	window.bind('scroll', function () {
// 		varnavHeight = window.height() - 70;
// 		if (window.scrollTop() > navHeight) {
// 			'nav'.classList.add('fixed');
// 		} else {
// 			'nav'.removeClass('fixed');
// 		}
// 	});
// });

// const colorArray = [
// 	'red  ',
// 	'blue',
// 	'DeepPink',
// 	'lime'
// ];

// document.querySelector('#section2').addEventListener('mousedown', function() {
// 	function getRandomArbitrary(min, max) {
// 		return Math.round(Math.random() * (max - min) + min);
// 	}
// 	let number = getRandomArbitrary(0, 3);
// 	document.documentElement.style.setProperty(
// 		'--maincolor',
// 		colorArray[number]
// 	);
// 	let number2 = getRandomArbitrary(0, 3);
// 	document.documentElement.style.setProperty(
// 		'--bodycolor',
// 		colorArray[number2]
// 	);
// });

const randomNumber = function(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
};

const words = [ 'hello', 'bonjour', 'yo', 'howdy', 'hi' ];

const word = document.querySelector('.word');

const changeWord = function() {
	setInterval(() => {
		word.textContent = words[randomNumber(0, 4)];
	}, 1000);
};

changeWord();

const timer = function() {
	setTimeout(() => {
		document.documentElement.style.setProperty('--bodycolor', 'yellow');
	}, 4000);
};

// document.addEventListener('mousemove', function(e) {
// 	clearTimeout(timer);
// 	document.documentElement.style.setProperty('--bodycolor', 'blue');
// 	timer();
// });

// timer();

// const section = document.createElement('section');
// section.id = 'section4';
// section.innerHTML = 'Its Monday! 🍄';

// document.querySelector('#create').addEventListener('click', function(e) {
// 	document.body.append(section);
// });

// document.querySelector('#bye').addEventListener('click', function(e) {
// 	section.remove();
// });

console.log('hello');

const position = document.getElementById('scrollPosition');

window.addEventListener('scroll', function(e) {
	let totalHeight = document.documentElement.offsetHeight - document.documentElement.clientHeight; //total height of the doc - the client height which equals the scrollTop value.
	let currHeight = document.documentElement.scrollTop;
	let percentage = currHeight / totalHeight * 100; //get a number from 0 - 100
	position.textContent = `${Math.floor(percentage)}`;
	// document.querySelector('.fixed').style.opacity = `${Math.floor(percentage) / 100}`; //changes opacity
});

const section = document.querySelector('#section3');

const psection = section.children[0];

const callback = function(entries) {
	const [ entry ] = entries;
	if (!entry.isIntersecting) {
		psection.classList.add('section--hidden');
	} else {
		psection.classList.remove('section--hidden');
	}
};

const options = {
	root      : null,
	threshold : 0.05
};

const obSecton = new IntersectionObserver(callback, options);

obSecton.observe(section);

//SLIDER MAKES TEXT BIGGER
const p = document.querySelector('p');
const slider = document.querySelector('#myRange');

//tried click and change, but the slider only works once the mouse is released, not throughout
// slider.addEventListener('change', function(e) {
// 	const value = slider.value;
// 	p.style.fontSize = `${value}px`;
// });

//tried click and change, but the slider only works once the mouse is released, not throughout
slider.addEventListener('input', function(e) {
	p.style.fontSize = `${this.value}px`;
});
