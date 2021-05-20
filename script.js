// 00 - Declaration of global constants
const body = document.querySelector("body");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const title = document.getElementById("title--one");
const titleTwo = document.getElementById("title--two");
const pageTitle = document.querySelector("title");

const greetingWord = document.querySelector(".greeting--word");
const greetingContainer = document.querySelector(".greeting--container");

const screensaverContainer = document.querySelector(".screensaver--container");
const screensaverClock = document.querySelector(".screensaver--clock");

const position = document.getElementById("footer--scroll--position");

const sectionOne = document.querySelector("#section--one");
const sectionTwo = document.querySelector("#section--two");
const sectionThree = document.querySelector("#section--three");
const sectionFour = document.querySelector("#section--four");
const sectionFive = document.querySelector("#section--five");

const imgContainer = document.querySelectorAll(".img--container");
const links = document.querySelectorAll(".link");

const nav = document.querySelector("nav");
const menu = document.getElementById("header--menu--button");

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



//1 - GREETING WORD

const greetingWordList = [
	"Aloha",
	"Nǐ hǎo",
	"こんにちは",
	"Ave",
	"Merhaba",
	"Ciao",
	"Sawubona",
	"Howdy",
	"Hello",
	"Hey",
	"Hej",
	"Bonjour",
	"Salut",
	"Guten Tag",
	"Morning",
	"Hola",
	"你好",
	"✋🏼",
	"Ohayo",
	"Selamat",
	"Tena Koe",
	"Salaam",
	"Sawasdi Ka",
	"Dobryy den",
	"Bwanji",
	"Konnichiwa",
	"Olá",
	"Anyoung",
	"Ahlan",
	"Halløj",
	"Shikamoo",
	"Hallo",
	"Cześć",
	"Namaste",
	"Shalom",
	"Hei",
	"👋🏽",




];

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function greetingWordChange() {
	setInterval(() => {
		greetingWord.textContent =
			greetingWordList[randomNumber(0, greetingWordList.length - 1)];
		greetingWord.style.borderColor = colorNames[randomNumber(0, colorNames.length - 1)];
	}, 500);
}

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				greetingContainer.style.opacity = "1";
				let color = colorNames[randomNumber(0, colorNames.length - 1)]
				// body.style.backgroundColor = color;
				// gradient.style.background = `linear-gradient(180deg, ${color} 30%, rgba(255, 255, 255, 0) 100%)`;
				// footer.style.background = `linear-gradient(0deg, ${color} 30%, rgba(255, 255, 255, 0) 100%)`;
			} else {
				greetingContainer.style.opacity = "0";
			}
		});
	}, {
		root: null,
		threshold: 0.05,
	}
);

observer.observe(main);

greetingWordChange();

// 2 - SCREENSAVER

const screenSaverBackground = function () {
	screensaverContainer.style.background = '#F8F8F8';
};

const showScreensaver = function () {
	screensaverContainer.style.opacity = 1;
	screensaverContainer.style.visibility = "visible";
};

const hideScreensaver = function () {
	screensaverContainer.style.opacity = 0;
	setTimeout(() => (screensaverContainer.style.visibility = "hidden"), 1500);
};

function timeNow() {
	return new Date().toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
	});
}

const getTime = function () {
	setInterval(() => {
		screensaverClock.textContent = timeNow();
		screensaverClock.style.borderColor = colorNames[randomNumber(0, colorNames.length - 1)];
	}, 1000);
};

let idleTime = 0;

function resetidleTime() {
	idleTime = 0;
	hideScreensaver();
	pageTitle.textContent = `Cemal Okten 👋`;
	setTimeout(screenSaverBackground, 1000);
}

function checkIfIdle() {
	idleTime += 1000;
	if (idleTime >= 12000) {
		showScreensaver();
		pageTitle.textContent = `⌚ ${timeNow()} ⌚`;
	}
}

setInterval(checkIfIdle, 1000);
getTime();
screenSaverBackground();

document.addEventListener("mousemove", resetidleTime, false);
document.addEventListener("scroll", resetidleTime, false);
document.addEventListener("keydown", resetidleTime, false);

//3 - SCROLLING PERCENTAGE

let isScrolling;

function scrollToTop() {
	window.scrollTo(0, 0);
	position.removeEventListener("click", scrollToTop, false);
	position.style.cursor = "text";
}

function scrollPosition(event) {
	// Clear our timeout throughout the scroll
	window.clearTimeout(isScrolling);
	let totalHeight =
		document.documentElement.offsetHeight -
		document.documentElement.clientHeight; //total height of the doc - the client height which equals the scrollTop value.
	let currHeight = document.documentElement.scrollTop;
	let percentage = (currHeight / totalHeight) * 100; //get a number from 0 - 100
	position.textContent = `${Math.floor(percentage)}%`;
	position.style.opacity = "1";
	position.classList.remove('footer--hand--animate');

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function () {
		// Run the callback
		position.style.opacity = "0";
		if (position.textContent === "100%") {
			position.textContent = "☝🏼";
			position.style.opacity = 1;
			position.addEventListener("click", scrollToTop, false);
			position.style.cursor = "pointer";
			position.classList.add('footer--hand--animate');
		}
		// console.log('Scrolling has stopped.');
	}, 250);
}

window.addEventListener("scroll", scrollPosition, false);

//4 - COLOUR CHANGER

const gradient = document.querySelector("#header--gradient");

function changeColourFunction(section, colour1, colour2, colour3) {
	body.style.background = colour1;
	body.style.color = colour2;
	gradient.style.background = `linear-gradient(180deg, ${colour1} 30%, rgba(255, 255, 255, 0) 100%)`;
	footer.style.background = `linear-gradient(0deg, ${colour1} 30%, rgba(255, 255, 255, 0) 100%)`;
	nav.style.background = `linear-gradient(180deg, ${colour3} 90%, rgba(255, 255, 255, 0) 100%)`;
}

function changeColour(section, colour1, colour2, colour3) {
	return section.getBoundingClientRect().top < 100 ?
		changeColourFunction(section, colour1, colour2, colour3) :
		null;
}

function menuLoad(section) {
	if (section.getBoundingClientRect().top < 100) {
		menu.style.opacity = 1;
		menu.style.visibility = "visible";
	} else {
		menu.style.opacity = 0;
		menu.style.visibility = "hidden";
		nav.style.top = "-11.6vw";
		menu.textContent = "☰";
	}
}

// #5510d1
// const bgColor = '#F8F8F8'
const bgColor = '#ffffff'

document.addEventListener(
	"scroll",
	function (e) {
		changeColour(sectionOne, bgColor, "black", bgColor);
		changeColour(sectionTwo, bgColor, "black", bgColor);
		changeColour(sectionThree, bgColor, "black", bgColor);
		changeColour(sectionFour, bgColor, "black", bgColor);
		changeColour(sectionFive, bgColor, "black", bgColor);
		menuLoad(sectionOne);
	},
	false
);

//5 - Navigation
const navList = document.querySelectorAll(".title--menu");

const sectionTitles = document.querySelectorAll('.section--title');


function scrollMenu() {
	navList.forEach((i) => {
		i.addEventListener("click", function () {
			eval(i.dataset.section).scrollIntoView({ //Turn string into variable eval()
				behavior: "smooth",
			});
		});
	});
}

function scrollTitles() {
	sectionTitles.forEach((i) => {
		i.addEventListener("click", function () {
			eval(i.dataset.section).scrollIntoView({ //Turn string into variable eval()
				behavior: "smooth",
				block: "start",
			});
		});
	});
}

function scrollToStart() {
	greetingWord.addEventListener('click', function () {
		sectionOne.scrollIntoView({ //Turn string into variable eval()
			behavior: "smooth",
		});
	})
}

scrollToStart();
scrollMenu();
scrollTitles();

menu.addEventListener("click", function () {
	if (nav.style.top != "0vw") {
		nav.style.top = "0vw";
		menu.textContent = "✕";
	} else {
		nav.style.top = "-11.6vw";
		menu.textContent = "☰";
	}
});

nav.addEventListener("click", function () {
	nav.style.top = "-11.6vw";
	menu.textContent = "☰";
});

//6 - IMAGE HOVER
function mouseImgOver(e) {
	e.preventDefault();
	if (e.target.dataset.id != undefined) {
		imgContainer.forEach((value) => {
			value.children.item(e.target.dataset.id - 1).style.opacity = 1;
			e.target.style.zIndex = "20";
		});
	}
}

function mouseImgLeave(e) {
	e.preventDefault();
	if (e.target.dataset.id != undefined) {
		imgContainer.forEach((value) => {
			value.children.item(e.target.dataset.id - 1).style.opacity = 0;
			e.target.style.zIndex = "3";
		});
	}
}

document.querySelector("main").addEventListener("mouseover", mouseImgOver);
document.querySelector("main").addEventListener("mouseout", mouseImgLeave);

//7 - RANDOM COLOURS

links.forEach((val) => (val.style.borderColor = colorNames[randomNumber(0, colorNames.length - 1)]));

const navListLinks = nav.querySelectorAll('.link');
const titleLinks = document.querySelectorAll('.section--title');

/*
Iterate through nodelist of <nav> .link elements, store colour link, 
and then apply it to nodelist titleLinks item at (index)

The nav links and the title links are in the same order - so using index is fine.
 */

navListLinks.forEach((link, i) => {
	let colour = link.style.borderColor;
	titleLinks.item(i).style.borderColor = colour;
	titleLinks.item(4).style.borderColor = colorNames[randomNumber(0, colorNames.length - 1)];
})