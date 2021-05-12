const main = document.querySelector('main');
const footer = document.querySelector('footer');
const greetingWord = document.querySelector('.greeting--word');
const greetingContainer = document.querySelector('.greeting--container');
const title = document.getElementById('title--one');
const titleTwo = document.getElementById('title--two');
const screensaverContainer = document.querySelector('.screensaver--container');
const screensaverClock = document.querySelector('.screensaver--clock');

const position = document.getElementById('scroll--position');

const gradient = document.querySelector('.gradient');

const sectionOne = document.querySelector('#section--one');
const sectionTwo = document.querySelector('#section--two');
const sectionThree = document.querySelector('#section--three');
const sectionFour = document.querySelector('#section--four');
const sectionFive = document.querySelector('#section--five');

const sectionZeroGradient = document.querySelector('#section--zero--gradient');
const sectionOneGradient = document.querySelector('#section--one--gradient');
const sectionTwoGradient = document.querySelector('#section--two--gradient');
const sectionThreeGradient = document.querySelector('#section--three--gradient');
const sectionFourGradient = document.querySelector('#section--four--gradient');
const sectionFiveGradient = document.querySelector('#section--five--gradient');

//1 - GREETING WORD

const greetingWordList = ['Aloha', 'Ave', 'Ciao', 'Howdy', 'Hello', 'Hey', 'Hej', 'Bonjour', 'Salut', 'Guten Tag', 'Morning', 'Ola', ''];

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getGreeting(array) {
	array.forEach((element) => {
		element.splice(0, 2);
	});
	return [...new Set(array.flatMap((word) => word))];
};

function greetingWordChange(array) {
	setInterval(() => {
		greetingWord.textContent = greetingWordList[randomNumber(0, greetingWordList.length - 1)];
	}, 500);
};


const observer = new IntersectionObserver((entries => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {

			greetingContainer.style.opacity = '1';
		} else {
			greetingContainer.style.opacity = '0';
		}
	});
}), {
	root: null,
	threshold: 0.05
});

observer.observe(main);

greetingWordChange();

//2 - SCREENSAVER

// const showScreensaver = function() {
// 	setTimeout(() => {
// 		screensaverContainer.style.setProperty('opacity', '0');
// 	}, 2000);
// };

// const getTime = function() {
// 	setInterval(() => {
// 		let timeNow = new Date().toLocaleTimeString();
// 		screensaverClock.textContent = `${timeNow}`;
// 	}, 1000);
// };

// getTime();
// showScreensaver();

//3 - SCROLLING PERCENTAGE

let isScrolling;

window.addEventListener(
	'scroll',
	function (event) {
		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);
		let totalHeight = document.documentElement.offsetHeight - document.documentElement.clientHeight; //total height of the doc - the client height which equals the scrollTop value.
		let currHeight = document.documentElement.scrollTop;
		let percentage = currHeight / totalHeight * 100; //get a number from 0 - 100
		position.textContent = `${Math.floor(percentage)}%`;
		position.style.opacity = '1';
		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function () {
			// Run the callback
			position.style.opacity = '0';
			// console.log('Scrolling has stopped.');
		}, 250);
	},
	false
);

//4 - GRADIENT CHANGER

const gradientsArray = [sectionOneGradient, sectionTwoGradient, sectionThreeGradient, sectionFourGradient];


function colourArray(sectionGradient) {
	let backgroundImage = ''
	gradientsArray.forEach((gradient) => {
		if (gradient === sectionGradient) {
			gradient.style.opacity = 1;
			backgroundImage = window.getComputedStyle(gradient).getPropertyValue('background-image')
			footer.style.backgroundImage = backgroundImage;
		} else {
			gradient.style.opacity = 0;
		}
	})
}


function changeColour(section, sectionGradient) {
	return (section.getBoundingClientRect().top < 100) ? colourArray(sectionGradient) : null;
}

const greetingObserver = new IntersectionObserver((entries) => {
	entries.forEach(e => {
		if (!e.isIntersecting) {
			sectionZeroGradient.style.opacity = 0;
		} else {
			sectionZeroGradient.style.opacity = 1;
			sectionOneGradient.style.opacity = 0;
		}
	})
}, {
	threshold: 0.1,
	rootMargin: '0px 0px 0px 0px'
})

greetingObserver.observe(greetingContainer);

document.addEventListener(
	'scroll',
	function (e) {
		changeColour(sectionOne, sectionOneGradient)
		changeColour(sectionTwo, sectionTwoGradient)
		changeColour(sectionThree, sectionThreeGradient)
		changeColour(sectionFour, sectionFourGradient)
	},
	false
);

//5 - IMAGE HOVER
const background = document.querySelector('.background--container');
const imgWrap = document.querySelectorAll('.imgwrap')


function mouseImg(e) {
	e.preventDefault();
	if (e.target.dataset.id != undefined) {
		imgWrap.forEach((value) => {
			value.children.item(e.target.dataset.id - 1).style.opacity = 1;
			e.target.style.zIndex = "999";
		})
	}
}



function mouseImgLeave(e) {
	e.preventDefault();
	if (e.target.dataset.id != undefined) {
		imgWrap.forEach((value) => {
			value.children.item(e.target.dataset.id - 1).style.opacity = 0;
			e.target.style.zIndex = "500";
		})
	}
}

document.querySelector('main').addEventListener('mouseover', mouseImg);
document.querySelector('main').addEventListener('mouseout', mouseImgLeave);

//6 - RANDOM COLOURS

const colorNames = [
	"Aqua",
	"Aquamarine",
	"Bisque",
	"BlanchedAlmond",
	"Blue",
	"BlueViolet",
	"Brown",
	"BurlyWood",
	"CadetBlue",
	"Chartreuse",
	"Chocolate",
	"Coral",
	"CornflowerBlue",
	"Cornsilk",
	"Crimson",
	"Cyan",
	"DarkBlue",
	"DarkCyan",
	"DarkGoldenRod",
	"DarkGreen",
	"DarkKhaki",
	"DarkMagenta",
	"DarkOliveGreen",
	"DarkOrange",
	"DarkOrchid",
	"DarkRed",
	"DarkSalmon",
	"DarkSlateBlue",
	"DarkTurquoise",
	"DarkViolet",
	"DeepPink",
	"DeepSkyBlue",
	"DodgerBlue",
	"FireBrick",
	"ForestGreen",
	"Fuchsia",
	"Gold",
	"GoldenRod",
	"Green",
	"GreenYellow",
	"HotPink",
	"IndianRed",
	"Indigo",
	"Lavender",
	"LawnGreen",
	"Lime",
	"LimeGreen",
	"Magenta",
	"Maroon",
	"MediumAquaMarine",
	"MediumBlue",
	"MediumOrchid",
	"MediumPurple",
	"MediumSeaGreen",
	"MediumSlateBlue",
	"MediumSpringGreen",
	"MediumTurquoise",
	"MediumVioletRed",
	"MidnightBlue",
	"NavajoWhite",
	"Navy",
	"Olive",
	"OliveDrab",
	"Orange",
	"OrangeRed",
	"Orchid",
	"PaleGreen",
	"PaleTurquoise",
	"PaleVioletRed",
	"PeachPuff",
	"Peru",
	"Pink",
	"Plum",
	"PowderBlue",
	"Purple",
	"RebeccaPurple",
	"Red",
	"RosyBrown",
	"RoyalBlue",
	"SaddleBrown",
	"Salmon",
	"SandyBrown",
	"SeaGreen",
	"Sienna",
	"SkyBlue",
	"SlateBlue",
	"SlateGray",
	"SlateGrey",
	"SpringGreen",
	"SteelBlue",
	"Tan",
	"Teal",
	"Thistle",
	"Tomato",
	"Turquoise",
	"Violet",
	"Wheat",
	"Yellow",
];

const buttons = document.querySelectorAll('.number')

buttons.forEach((val) => val.style.borderColor = colorNames[randomNumber(0, colorNames.length - 1)])