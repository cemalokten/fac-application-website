/* ===============================================================
 * Founders and Coders Application Javascript
 * Author:  Cemal Okten
 * Github: https://github.com/cemalokten/fac-application-website
 * Language: Javascript
 * 01 - Variable declarations
 * 02 - Random colour generator
 * 03 - Greeting word generator
 * 04 - Time screensaver
 * 05 - Scroll position
 * 06 - Drop down and title navigation
 * 07 - Image hover
 * 08 - Links random colour
 * 09 - Wizard
 * To-do: 
 * 01 - Look for alternatvie to addListener for media-querys
================================================================== */

// 01 - Variable declarations

const body = document.querySelector('body');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const headerGradient = document.querySelector('#header--gradient')

const pageTitle = document.querySelector('title');

const greetingWord = document.querySelector('.greeting--word');
const greetingContainer = document.querySelector('.greeting--container');

const screensaverContainer = document.querySelector('.screensaver--container');
const screensaverClock = document.querySelector('.screensaver--clock');

const position = document.getElementById('footer--scroll--position');

const section1 = document.querySelector('#section--one');
const section2 = document.querySelector('#section--two');
const section3 = document.querySelector('#section--three');
const section4 = document.querySelector('#section--four');
const section5 = document.querySelector('#section--five');
const sectionTitles = document.querySelectorAll('.section--title');

const imgContainer = document.querySelectorAll('.img--container');
const links = document.querySelectorAll('.link');

const nav = document.querySelector('nav');
const menu = document.getElementById('header--menu--button');
const navList = document.querySelectorAll('.title--menu');
const navListLinks = nav.querySelectorAll('.link');
const titleLinks = document.querySelectorAll('.section--title');

// 02 - Random colour generator

// Array of HTML colour names
// Colours that are too close to background colour excluded
const colourNames = [
	'Aqua',
	'Aquamarine',
	'Blue',
	'BlueViolet',
	'Brown',
	'BurlyWood',
	'CadetBlue',
	'Chartreuse',
	'Chocolate',
	'Coral',
	'CornflowerBlue',
	'Crimson',
	'Cyan',
	'DarkBlue',
	'DarkCyan',
	'DarkGoldenRod',
	'DarkGreen',
	'DarkMagenta',
	'DarkOliveGreen',
	'DarkOrange',
	'DarkOrchid',
	'DarkRed',
	'DarkSalmon',
	'DarkSlateBlue',
	'DarkTurquoise',
	'DarkViolet',
	'DeepPink',
	'DeepSkyBlue',
	'DodgerBlue',
	'FireBrick',
	'ForestGreen',
	'Fuchsia',
	'Gold',
	'GoldenRod',
	'Green',
	'GreenYellow',
	'HotPink',
	'IndianRed',
	'Indigo',
	'Lavender',
	'LawnGreen',
	'Lime',
	'LimeGreen',
	'Magenta',
	'Maroon',
	'MediumAquaMarine',
	'MediumBlue',
	'MediumOrchid',
	'MediumPurple',
	'MediumSeaGreen',
	'MediumSlateBlue',
	'MediumSpringGreen',
	'MediumTurquoise',
	'MediumVioletRed',
	'MidnightBlue',
	'NavajoWhite',
	'Navy',
	'Olive',
	'OliveDrab',
	'Orange',
	'OrangeRed',
	'Orchid',
	'PaleGreen',
	'PaleTurquoise',
	'PaleVioletRed',
	'PeachPuff',
	'Peru',
	'Pink',
	'Plum',
	'Purple',
	'RebeccaPurple',
	'Red',
	'RosyBrown',
	'RoyalBlue',
	'SaddleBrown',
	'Salmon',
	'SandyBrown',
	'SeaGreen',
	'Sienna',
	'SkyBlue',
	'SlateBlue',
	'SlateGray',
	'SlateGrey',
	'SpringGreen',
	'SteelBlue',
	'Tan',
	'Teal',
	'Thistle',
	'Tomato',
	'Turquoise',
	'Violet',
	'Wheat',
	'Yellow',
];

// Returns a random positive whole number between two values (min, max)
// Used throughout to select random array elements
function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

// Return random colour name from colourNames array using randomNumber()
function randomColour() {
	return colourNames[randomNumber(0, colourNames.length - 1)];
}

// 03 - Greeting word generator

// Array of greeting words from around the world
// Both formal and informal
// Note: List is on-going, keep adding new greeting words
const greetingWordList = [
	'Aloha',
	'Nǐ hǎo',
	'こんにちは',
	'Ave',
	'Merhaba',
	'Ciao',
	'Sawubona',
	'Howdy',
	'Hello',
	'Hey',
	'Hej',
	'Bonjour',
	'Salut',
	'Guten Tag',
	'Morning',
	'Hola',
	'你好',
	'✋🏼',
	'Ohayo',
	'Selamat',
	'Tena Koe',
	'Salaam',
	'Sawasdi Ka',
	'Dobryy den',
	'Bwanji',
	'Konnichiwa',
	'Olá',
	'Anyoung',
	'Ahlan',
	'Halløj',
	'Shikamoo',
	'Hallo',
	'Cześć',
	'Namaste',
	'Shalom',
	'Hei',
	'👋🏽',
];

function greetingWordChange() {
	setInterval(() => {
		// Select random greeting word from greetingWordList array
		greetingWord.textContent = greetingWordList[randomNumber(0, greetingWordList.length - 1)];
		// Style the border of greetingWord with randomColour
		greetingWord.style.borderColor = randomColour();
	}, 500); //Change greeting word and border colour every 0.5 seconds
}

greetingWordChange();

// Used IntersectionObserver here because greetingContainer is a knowable size/dimension
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			// When <main> is not intersecting(visible) - show greeting word and enable click
			if (!entry.isIntersecting) {
				greetingContainer.style.opacity = '1';
				greetingContainer.style.pointerEvents = 'auto';
				// When <main> is intersecting(visible) - hide greeting word and disable pointer events
				
			} else {
				greetingContainer.style.opacity = '0';
				greetingContainer.style.pointerEvents = 'none';
				
			}
		});
	},
	{
		threshold: 0.05, //Above callback executed when 5% of <main> is visible/not-visible
	}
);

// Watch target element <main>
observer.observe(main);

// 04 - Time screensaver

const showScreensaver = function () {
	screensaverContainer.style.opacity = 1;
	screensaverContainer.style.visibility = 'visible';
};

const hideScreensaver = function () {
	screensaverContainer.style.opacity = 0;
	// Timeout used to hide screenSaverContainer after opacity had transitioned to 0
	// If no Timeout then opacity transition is overridden by visibily changing to hidden
	setTimeout(() => (screensaverContainer.style.visibility = 'hidden'), 500);
};

function timeNow() {
	// Time in format of AM / PM (eg. 1:35 PM, 10:23 AM)
	// This format is 'friendlier' and fits this site better than 24 hour clock
	return new Date().toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit',
	});
}

//Refresh time and border-colour every second, to match the ticking of a clock
const getTime = function () {
	setInterval(() => {
		screensaverClock.textContent = timeNow();
		screensaverClock.style.borderColor = randomColour();
	}, 1000);
};

getTime();

let idleTime = 0;

// Increment idleTime by 1 sec until idleTime >= 12 seconds
// then show screensaver and change page-title to current time
function checkIfIdle() {
	idleTime += 1000;
	if (idleTime >= 12000) {
		showScreensaver();
		pageTitle.textContent = `⌚ ${timeNow()} ⌚`;
	}
}

//Reset idleTime to 0, hidescreensaver and return page-title to default
function resetIdleTime() {
	idleTime = 0;
	hideScreensaver();
	pageTitle.textContent = `Cemal Okten 👋 FAC Application`;
}

// Execute checkIfIdle every 1 sec
setInterval(checkIfIdle, 1000);

// resetIdleTime if the user movesmouse, scrolls, or presses a key
document.addEventListener('mousemove', resetIdleTime);
document.addEventListener('scroll', resetIdleTime);
document.addEventListener('keydown', resetIdleTime);

// 05 - Scroll position

// Function scrolls to top of page, remove option to click again and removes pointer
function scrollToTop() {
	window.scrollTo(0, 0);
	position.removeEventListener('click', scrollToTop);
	position.style.cursor = 'text';
}

let isScrolling;

function scrollPosition(event) {
	// Clear the timeout throughout the scroll
	window.clearTimeout(isScrolling);
	// (total page height) equals (page height) minus (client window height) .
	let totalPageHeight = document.documentElement.offsetHeight - document.documentElement.clientHeight;
	// Current distance scrolled from top of page
	let currDistanceFromTop = document.documentElement.scrollTop;
	/* Calculate precentage of page scrolled
	(current distance from top) divided by (total page height) 
	muliplied by 100 to get number between 0 - 100 */
	let scrollPercentage = (currDistanceFromTop / totalPageHeight) * 100;
	// Update HTML with percentage scrolled
	position.textContent = `${Math.floor(scrollPercentage)}%`;
	// Make visible while scrolling
	position.style.opacity = '1';
	// Remove animated hand while not at bottom of page
	position.classList.remove('footer--hand--animate');

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function () {
		// When scrolling stops - hide scroll percentage
		position.style.opacity = '0';
		// When user has scrolled to bottom of the page (100%) do the following:
		if (position.textContent === '100%') {
			// Show hand emoji
			position.textContent = '☝🏼';
			position.style.opacity = 1;
			// Add ability to click hand and scroll to top of page
			position.addEventListener('click', scrollToTop);
			position.style.cursor = 'pointer';
			// Animate the hand
			position.classList.add('footer--hand--animate');
		}
	}, 250);
}

window.addEventListener('scroll', scrollPosition);

// 06 - Drop down and title navigation

const mediaQuery = window.matchMedia("(max-width: 420px)")

let navHeight = '-11vw';

// Change variable from -11vw (Desktop Version) to mobile (-100vh)
function screenSizeChange(e) {
  if (e.matches) {
	navHeight = '-100vh'
  }
}
// Listen for screensize change
// MDN says this is no longer recommended - !look for alternative!
mediaQuery.addListener(screenSizeChange)

// Add event object (media query) to screenSizeChange function
screenSizeChange(mediaQuery);

function menuLoad(height) {
	// Display menu ☰ when section1 is visible
	if (section1.getBoundingClientRect().top < 100) {
		menu.style.opacity = 1;
		menu.style.visibility = 'visible';
	} else {
		// Slide up(if open) and hide menu when greeting word is visible
		menu.style.opacity = 0;
		menu.style.visibility = 'hidden';
		nav.style.top = height;
		menu.textContent = '☰';
	}
}

function scrollMenu() {
	navList.forEach((link) => {
		link.addEventListener('click', function () {
			/* Navigation links have data-section attributes which match section names
			 * eg. section1, section2
			 * retrieving this attribute means we can use it to scroll to that section
			 * eg. (eval(link.dataset.section).scrollIntoView) becomes (section1.scrollIntoView) */
			eval(link.dataset.section).scrollIntoView({
				behavior: 'smooth',
			});
		});
	});
}

function scrollTitles() {
	sectionTitles.forEach((i) => {
		i.addEventListener('click', function () {
			// See notes above for scrollMenu
			eval(i.dataset.section).scrollIntoView({
				behavior: 'smooth',
			});
		});
	});
}

function scrollToStart() {
	greetingWord.addEventListener('click', function () {
		section1.scrollIntoView({
			behavior: 'smooth',
		});
	});
}

scrollToStart();
scrollMenu();
scrollTitles();

document.addEventListener('scroll', function (e) {
	menuLoad(navHeight);
});

// Change menu (☰) into menu close (✕)
menu.addEventListener('click', function () {
	if (nav.style.top != '0vw') {
		nav.style.top = '0vw';
		menu.textContent = '✕';
	} else {
		nav.style.top = navHeight;
		menu.textContent = '☰';
	}
});

// Click anywhere on the menu to close it
nav.addEventListener('click', function () {
	nav.style.top = navHeight;
	menu.textContent = '☰';
});

// 07 - Image hover

function mouseImgOver(e) {
	if (e.target.dataset.id != undefined) {
		/* Loop through img--container and change the opacity of the img and z-index
		 * of the link with the same dataset-id as the e.target (link hovered/clicked) */
		imgContainer.forEach((value) => {
			value.children.item(e.target.dataset.id - 1).style.opacity = 1;
			e.target.style.zIndex = '20';
		});
	}
}

function mouseImgLeave(e) {
	if (e.target.dataset.id != undefined) {
		// When the mouse leaves do the reverse of mouseImgOver()
		imgContainer.forEach((value) => {
			value.children.item(e.target.dataset.id - 1).style.opacity = 0;
			e.target.style.zIndex = '3';
		});
	}
}

document.querySelector('main').addEventListener('mouseover', mouseImgOver);
document.querySelector('main').addEventListener('mouseout', mouseImgLeave);

// 08 - Links random colour

// Loop through links nodelist, apply a random colour to each border
links.forEach((val) => (val.style.borderColor = randomColour()));

/* Match the heading border colour with the navigation link border colour for continuity
 * Iterate through nodelist of <nav> .link elements, store colour link,
 * and then apply it to nodelist titleLinks item at (index)
 * The nav links and the title links are in the same order - so using their index is fine. */
navListLinks.forEach((link, i) => {
	let colour = link.style.borderColor;
	titleLinks.item(i).style.borderColor = colour;
	titleLinks.item(4).style.borderColor = randomColour();
});

// 09 - Wizard

const wizard = document.getElementById('wizard');
body.style.backgroundColor = '#F8F8F8';
body.style.color = 'black';

// Click to change the background, gradient and nav colour and click again to reset it
// Will reset to default after 10 secs
let wizardTimeout;
wizard.addEventListener('click', function () {
	clearTimeout(wizardTimeout)
	if (body.style.backgroundColor != 'rgb(248, 248, 248)') {
		body.style.backgroundColor = 'rgb(248, 248, 248)';
		footer.style.background = 'linear-gradient(0deg, #F8F8F8 30%, rgba(255, 255, 255, 0) 100%)';
		headerGradient.style.background = 'linear-gradient(180deg, #F8F8F8 30%, rgba(255, 255, 255, 0) 100%)';
		nav.style.backgroundColor = 'rgb(248, 248, 248)';
	} else {
		const colour = randomColour();
		body.style.backgroundColor = colour;
		footer.style.background = `linear-gradient(0deg, ${colour} 30%, rgba(255, 255, 255, 0) 100%)`;
		headerGradient.style.background = `linear-gradient(180deg, ${colour} 30%, rgba(255, 255, 255, 0) 100%)`;
		nav.style.backgroundColor = colour;
	};
	wizardTimeout = setTimeout(() => {
		body.style.backgroundColor = 'rgb(248, 248, 248)'
		footer.style.background = 'linear-gradient(0deg, #F8F8F8 30%, rgba(255, 255, 255, 0) 100%)';
		headerGradient.style.background = 'linear-gradient(180deg, #F8F8F8 30%, rgba(255, 255, 255, 0) 100%)';
		nav.style.backgroundColor = 'rgb(248, 248, 248)';
	}, 10000)
});