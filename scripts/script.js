// const changeGradient = function() {
// 	header.style.background = ` url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAABcCAYAAAAxkBjcAAAACXBIWXMAAAsSAAALEgHS3X78AAAC5klEQVR42u3d0W1DMQwEwXOgMtKvi47z5D4WMyXwc0FKr/fvuQMAAAAAks62jzEAAAAAQNPZ9mcMAAAAANB0tv0bAwAAAAA0OQEGAAAAgDABEAAAAADCvAEIAAAAAGE2AAEAAAAgzCcgAAAAABBmAxAAAAAAwgRAAAAAAAgTAAEAAAAgzBuAAAAAABBmAxAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDCfgAAAAABAmA1AAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCfAICAAAAAGECIAAAAACEOQEGAAAAgDABEAAAAADCnAADAAAAQJgACAAAAABhToABAAAAIEwABAAAAIAwARAAAAAAws62xxgAAAAAoMkGIAAAAACE+QUYAAAAAMJsAAIAAABAmA1AAAAAAAgTAAEAAAAgTAAEAAAAgDBvAAIAAABAmA1AAAAAAAg72x5jAAAAAIAmJ8AAAAAAEOYEGAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAICws+0xBgAAAABosgEIAAAAAGECIAAAAACECYAAAAAAEOYNQAAAAAAIswEIAAAAAGECIAAAAACECYAAAAAAEOYNQAAAAAAIEwABAAAAIMwJMAAAAACECYAAAAAAEOYEGAAAAADCbAACAAAAQNjZdo0BAAAAAJpsAAIAAABAmDcAAQAAACDMBiAAAAAAhNkABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAsLPtGgMAAAAANNkABAAAAIAwG4AAAAAAEGYDEAAAAADCBEAAAAAACHMCDAAAAABhAiAAAAAAhDkBBgAAAIAwG4AAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQ9mMEAAAAAND1utcCIAAAAABUfQEVtV4OjeMcUwAAAABJRU5ErkJggg==')`;
// };

// const changeGradient2 = function() {
// 	header.style.opacity = 1;
// };

// document.querySelector('body').addEventListener('click', function(e) {
// 	gradient1.style.opacity = 0;
// 	gradient2.style.opacity = 1;
// });

// const section = document.querySelector('#section--one');

// const callback4 = function(entries) {
// 	const [ entry ] = entries;
// 	if (!entry.isIntersecting) {
// 		gradient1.style.opacity = 0;
// 		gradient2.style.opacity = 1;
// 	} else {
// 		gradient1.style.opacity = 1;
// 		gradient2.style.opacity = 0;
// 	}
// };

// const options4 = {
// 	root      : null,
// 	threshold : 0.5
// };

// const obSecton = new IntersectionObserver(callback4, options4);

// obSecton.observe(section);

// const img = document.querySelector('img');
// const strong = document.querySelector('strong');

// document.querySelector('strong').addEventListener('mouseover', function(e) {
// 	img.style.opacity = 1;
// 	strong.style.zIndex = 600;
// });

//----------------

const greetingWord = document.querySelector('.greeting--word');
const greetingContainer = document.querySelector('.greeting--container');
const title = document.getElementById('title--one');
const titleTwo = document.getElementById('title--two');
const screensaverContainer = document.querySelector('.screensaver--container');
const screensaverClock = document.querySelector('.screensaver--clock');

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//1 - GREETING WORD

// MORNING OR EVENING?

const getGreeting = function(array) {
	array.forEach((element) => {
		element.splice(0, 2);
	});
	return [ ...new Set(array.flatMap((word) => word)) ];
};

const greetingWordList = getGreeting([
	[ 'A1', 'Anonymous Proxy', 'Hello' ],
	[ 'A2', 'Satellite Provider', 'Hello' ],
	[ 'AD', 'Andorra', 'Hola' ],
	[ 'AE', 'United Arab Emirates', 'Marhaba' ],
	[ 'AF', 'Afghanistan', 'Senga yai' ],
	[ 'AG', 'Antigua and Barbuda', 'Hello' ],
	[ 'AI', 'Anguilla', 'Hello' ],
	[ 'AL', 'Albania', 'Tungjatjeta' ],
	[ 'AM', 'Armenia', 'Barev' ],
	[ 'AN', 'Netherlands Antilles', 'Kon ta bai' ],
	[ 'AO', 'Angola', 'Olá' ],
	[ 'AP', 'Asia/Pacific Region', 'Hello' ],
	[ 'AQ', 'Antarctica', 'Hello' ],
	[ 'AR', 'Argentina', 'Hola' ],
	[ 'AS', 'American Samoa', 'Hello' ],
	[ 'AT', 'Austria', 'Hallo' ],
	[ 'AU', 'Australia', 'Hello' ],
	[ 'AW', 'Aruba', 'Kon ta bai' ],
	[ 'AX', 'Aland Islands', 'Hello' ],
	[ 'AZ', 'Azerbaijan', 'Salam' ],
	[ 'BA', 'Bosnia and Herzegovina', 'Zdravo' ],
	[ 'BB', 'Barbados', 'Hello' ],
	[ 'BD', 'Bangladesh', 'Namaskar' ],
	[ 'BE', 'Belgium', 'Hallo' ],
	[ 'BF', 'Burkina Faso', 'Bonjour' ],
	[ 'BG', 'Bulgaria', 'Zdravei' ],
	[ 'BH', 'Bahrain', 'Marhaba' ],
	[ 'BI', 'Burundi', 'Bonjour' ],
	[ 'BJ', 'Benin', 'Bonjour' ],
	[ 'BM', 'Bermuda', 'Hello' ],
	[ 'BN', 'Brunei Darussalam', 'Selamat' ],
	[ 'BO', 'Bolivia', 'Hola' ],
	[ 'BR', 'Brazil', 'Olá' ],
	[ 'BS', 'Bahamas', 'Hello' ],
	[ 'BT', 'Bhutan', 'Kuzu zangpo' ],
	[ 'BV', 'Bouvet Island', 'Hello' ],
	[ 'BW', 'Botswana', 'Dumela' ],
	[ 'BY', 'Belarus', 'Вітаю' ],
	[ 'BZ', 'Belize', 'Hello' ],
	[ 'CA', 'Canada', 'Hello' ],
	[ 'CD', 'Congo  The Democratic Republic of the', 'Bonjour' ],
	[ 'CF', 'Central African Republic', 'Bonjour' ],
	[ 'CG', 'Congo', 'Bonjour' ],
	[ 'CH', 'Switzerland', 'Hallo' ],
	[ 'CK', 'Cook Islands', 'Kia orana' ],
	[ 'CL', 'Chile', 'Hola' ],
	[ 'CM', 'Cameroon', 'Hello' ],
	[ 'CN', 'China', '&#20320;&#22909;' ],
	[ 'CO', 'Colombia', 'Hola' ],
	[ 'CR', 'Costa Rica', 'Hola' ],
	[ 'CU', 'Cuba', 'Hola' ],
	[ 'CV', 'Cape Verde', 'Olá' ],
	[ 'CZ', 'Czech Republic', 'Dobrý den' ],
	[ 'DE', 'Germany', 'Hallo' ],
	[ 'DJ', 'Djibouti', 'Marhaba' ],
	[ 'DK', 'Denmark', 'Hej' ],
	[ 'DM', 'Dominica', 'Hello' ],
	[ 'DO', 'Dominican Republic', 'Hola' ],
	[ 'DZ', 'Algeria', 'Marhaba' ],
	[ 'EC', 'Ecuador', 'Hola' ],
	[ 'EE', 'Estonia', 'Tervist' ],
	[ 'EG', 'Egypt', 'Marhaba' ],
	[ 'ER', 'Eritrea', 'Marhaba' ],
	[ 'ES', 'Spain', 'Hola' ],
	[ 'ET', 'Ethiopia', 'Teanastëllën' ],
	[ 'EU', 'Europe', 'Hello' ],
	[ 'FI', 'Finland', 'Moi' ],
	[ 'FJ', 'Fiji', 'Hello' ],
	[ 'FK', 'Falkland Islands [Malvinas]', 'Hello' ],
	[ 'FM', 'Micronesia  Federated States of', 'Hello' ],
	[ 'FO', 'Faroe Islands', 'Hallo' ],
	[ 'FR', 'France', 'Bonjour' ],
	[ 'GA', 'Gabon', 'Bonjour' ],
	[ 'GB', 'Great Britain', 'Hello' ],
	[ 'GD', 'Grenada', 'Hello' ],
	[ 'GE', 'Georgia', 'Gamardjobat' ],
	[ 'GF', 'French Guiana', 'Bonjour' ],
	[ 'GG', 'Guernsey', 'Hello' ],
	[ 'GH', 'Ghana', 'Hello' ],
	[ 'GI', 'Gibraltar', 'Hello' ],
	[ 'GL', 'Greenland', 'Aluu' ],
	[ 'GM', 'Gambia', 'Hello' ],
	[ 'GN', 'Guinea', 'Bonjour' ],
	[ 'GP', 'Guadeloupe', 'Hello' ],
	[ 'GQ', 'Equatorial Guinea', 'Hola' ],
	[ 'GR', 'Greece', '&#915;&#949;&#953;&#945; &#963;&#959;&#965;' ],
	[ 'GT', 'Guatemala', 'Hola' ],
	[ 'GU', 'Guam', 'Hello' ],
	[ 'GW', 'Guinea-Bissau', 'Olá' ],
	[ 'GY', 'Guyana', 'Hello' ],
	[ 'HK', 'Hong Kong', '&#20320;&#22909;' ],
	[ 'HN', 'Honduras', 'HHola' ],
	[ 'HR', 'Croatia', 'Bok' ],
	[ 'HT', 'Haiti', 'Bonjour' ],
	[ 'HU', 'Hungary', 'Jó napot' ],
	[ 'ID', 'Indonesia', 'Selamat' ],
	[ 'IE', 'Ireland', 'Haileo' ],
	[ 'IL', 'Israel', 'Shalom' ],
	[ 'IM', 'Isle of Man', 'Hello' ],
	[ 'IN', 'India', 'नमस्ते दुनिया' ],
	[ 'IO', 'British Indian Ocean Territory', 'Hello' ],
	[ 'IQ', 'Iraq', 'Marhaba' ],
	[ 'IR', 'Iran  Islamic Republic of', 'Salâm' ],
	[ 'IS', 'Iceland', 'Góðan daginn' ],
	[ 'IT', 'Italy', 'Buon giorno' ],
	[ 'JE', 'Jersey', 'Hello' ],
	[ 'JM', 'Jamaica', 'Hello' ],
	[ 'JO', 'Jordan', 'Marhaba' ],
	[ 'JP', 'Japan', 'こんにちは世界！' ],
	[ 'KE', 'Kenya', 'Habari' ],
	[ 'KG', 'Kyrgyzstan', 'Kandisiz' ],
	[ 'KH', 'Cambodia', 'Sua sdei' ],
	[ 'KI', 'Kiribati', 'Mauri' ],
	[ 'KM', 'Comoros', 'Bariza djioni' ],
	[ 'KN', 'Saint Kitts and Nevis', 'Hello' ],
	[ 'KW', 'Kuwait', 'Marhaba' ],
	[ 'KY', 'Cayman Islands', 'Hello' ],
	[ 'KZ', 'Kazakhstan', 'Salam' ],
	[ 'LB', 'Lebanon', 'Marhaba' ],
	[ 'LC', 'Saint Lucia', 'Hello' ],
	[ 'LI', 'Liechtenstein', 'Hallo' ],
	[ 'LK', 'Sri Lanka', 'A`yubowan' ],
	[ 'LR', 'Liberia', 'Hello' ],
	[ 'LS', 'Lesotho', 'Hello' ],
	[ 'LT', 'Lithuania', 'Laba diena' ],
	[ 'LU', 'Luxembourg', 'Moïen' ],
	[ 'LV', 'Latvia', 'Sveiki' ],
	[ 'LY', 'Libyan Arab Jamahiriya', 'Marhaba' ],
	[ 'MA', 'Morocco', 'Marhaba' ],
	[ 'MC', 'Monaco', 'Bonjour' ],
	[ 'MD', 'Moldova  Republic of', 'Salut' ],
	[ 'ME', 'Montenegro', 'Zdravo' ],
	[ 'MG', 'Madagascar', 'Manao ahoana' ],
	[ 'MH', 'Marshall Islands', 'Yokwe' ],
	[ 'ML', 'Mali', 'Bonjour' ],
	[ 'MM', 'Myanmar', 'Mingalarba' ],
	[ 'MN', 'Mongolia', 'Sain baina uu' ],
	[ 'MO', 'Macao', '&#20320;&#22909;' ],
	[ 'MP', 'Northern Mariana Islands', 'Hello' ],
	[ 'MQ', 'Martinique', 'Hello' ],
	[ 'MR', 'Mauritania', 'Marhaba' ],
	[ 'MS', 'Montserrat', 'Hello' ],
	[ 'MT', 'Malta', 'Bongu' ],
	[ 'MU', 'Mauritius', 'Hello' ],
	[ 'MV', 'Maldives', 'Kihineth' ],
	[ 'MW', 'Malawi', 'Muribwanji' ],
	[ 'MX', 'Mexico', 'Hola' ],
	[ 'MY', 'Malaysia', 'Selamat' ],
	[ 'MZ', 'Mozambique', 'Olá' ],
	[ 'NA', 'Namibia', 'Hello' ],
	[ 'NC', 'New Caledonia', 'Bozo' ],
	[ 'NE', 'Niger', 'Bonjour' ],
	[ 'NF', 'Norfolk Island', 'Whataway' ],
	[ 'NG', 'Nigeria', 'Hello' ],
	[ 'NI', 'Nicaragua', 'Hola' ],
	[ 'NL', 'Netherlands', 'Hallo' ],
	[ 'NO', 'Norway', 'Hallo' ],
	[ 'NP', 'Nepal', 'Namaste' ],
	[ 'NR', 'Nauru', 'Hello' ],
	[ 'NU', 'Niue', 'Faka lofa lahi atu' ],
	[ 'NZ', 'New Zealand', 'Hello' ],
	[ 'OM', 'Oman', 'Marhaba' ],
	[ 'PA', 'Panama', 'Hola' ],
	[ 'PE', 'Peru', 'Hola' ],
	[ 'PF', 'French Polynesia', 'Bonjour' ],
	[ 'PG', 'Papua New Guinea', 'Hello' ],
	[ 'PH', 'Philippines', 'Halo' ],
	[ 'PK', 'Pakistan', 'Adaab' ],
	[ 'PL', 'Poland', 'Dzień dobry' ],
	[ 'PM', 'Saint Pierre and Miquelon', 'Hello' ],
	[ 'PR', 'Puerto Rico', 'Hola' ],
	[ 'PS', 'Palestinian Territory', 'Marhaba' ],
	[ 'PT', 'Portugal', 'Olá' ],
	[ 'PW', 'Palau', 'Alii' ],
	[ 'PY', 'Paraguay', 'Hola' ],
	[ 'QA', 'Qatar', 'Marhaba' ],
	[ 'RE', 'Reunion', 'Hello' ],
	[ 'RO', 'Romania', 'Salut' ],
	[ 'RS', 'Serbia', 'Zdravo' ],
	,
	[ 'RW', 'Rwanda', 'Hello' ],
	[ 'SA', 'Saudi Arabia', 'Marhaba' ],
	[ 'SB', 'Solomon Islands', 'Hello' ],
	[ 'SC', 'Seychelles', 'Hello' ],
	[ 'SD', 'Sudan', 'Marhaba' ],
	[ 'SE', 'Sweden', 'God dag' ],
	[ 'SG', 'Singapore', 'Selamat' ],
	[ 'SI', 'Slovenia', 'Živijo' ],
	[ 'SK', 'Slovakia', 'Dobrý deň' ],
	[ 'SL', 'Sierra Leone', 'Hello' ],
	[ 'SM', 'San Marino', 'Buon giorno' ],
	[ 'SN', 'Senegal', 'Bonjour' ],
	[ 'SO', 'Somalia', 'Maalim wanaqsan' ],
	[ 'SR', 'Suriname', 'Hallo' ],
	[ 'ST', 'Sao Tome and Principe', 'Hello' ],
	[ 'SV', 'El Salvador', 'Hola' ],
	[ 'SY', 'Syrian Arab Republic', 'Marhaba' ],
	[ 'SZ', 'Swaziland', 'Hello' ],
	[ 'TC', 'Turks and Caicos Islands', 'Hello' ],
	[ 'TD', 'Chad', 'Marhaba' ],
	[ 'TG', 'Togo', 'Bonjour' ],
	[ 'TH', 'Thailand', 'Sawatdi' ],
	[ 'TJ', 'Tajikistan', 'Salom' ],
	[ 'TK', 'Tokelau', 'Taloha' ],
	[ 'TM', 'Turkmenistan', 'Salam' ],
	[ 'TN', 'Tunisia', 'Marhaba' ],
	[ 'TO', 'Tonga', 'Malo e lelei' ],
	[ 'TR', 'Turkey', 'Merhaba' ],
	[ 'TT', 'Trinidad and Tobago', 'Hello' ],
	[ 'TV', 'Tuvalu', 'Talofa' ],
	[ 'TW', 'Taiwan', '&#20320;&#22909;' ],
	[ 'TZ', 'Tanzania  United Republic of', 'Habari' ],
	[ 'UA', 'Ukraine', 'Pryvit' ],
	[ 'UG', 'Uganda', 'Habari' ],
	[ 'UK', 'United Kingdom', 'Hello' ],
	[ 'UM', 'United States Minor Outlying Islands', 'Hello' ],
	[ 'US', 'United States', 'Hello' ],
	[ 'UY', 'Uruguay', 'Hola' ],
	[ 'UZ', 'Uzbekistan', 'Salom' ],
	[ 'VA', 'Holy See [Vatican City State]', 'Buon giorno' ],
	[ 'VC', 'Saint Vincent and the Grenadines', 'Hello' ],
	[ 'VE', 'Venezuela', 'Hola' ],
	[ 'VG', 'Virgin Islands  British', 'Hello' ],
	[ 'VI', 'Virgin Islands  U.S.', 'Hello' ],
	[ 'VN', 'Vietnam', 'Chào' ],
	[ 'VU', 'Vanuatu', 'Halo' ],
	[ 'WF', 'Wallis and Futuna', 'Malo le kataki' ],
	[ 'WS', 'Samoa', 'Talofa' ],
	[ 'YE', 'Yemen', 'Marhaba' ],
	[ 'YT', 'Mayotte', 'Hello' ],
	[ 'ZA', 'South Africa', 'Hello' ],
	[ 'ZM', 'Zambia', 'Hello' ],
	[ 'ZW', 'Zimbabwe', 'Hello' ],
	[ 'RD', 'Reserved', 'Hello' ]
]);

// const greetingWordList = [ 'Aloha', 'Ave', 'Ciao', 'Howdy', 'Hello', 'Hey', 'Hej', 'Bonjour', 'Salut', 'Guten Tag', 'Morning', 'Ola', '' ];

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

const greetingWordChange = function(array) {
	setInterval(() => {
		greetingWord.textContent = greetingWordList[randomNumber(0, greetingWordList.length - 1)];
	}, 500);
};

greetingWordChange();

const main = document.querySelector('main');
const sectionOne = document.querySelector('#section--one');

const options = {
	root      : null,
	threshold : 0.05
};

const callback = function(entries, observer) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			greetingWord.style.opacity = '1';
		} else {
			greetingWord.style.opacity = '0';
		}
	});
};

const observer = new IntersectionObserver(callback, options);

observer.observe(main);

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
// Screensaver

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

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

const position = document.getElementById('scroll--position');

// 2 - SCROLLING PERCENTAGE

var isScrolling;

// Listen for scroll events
window.addEventListener(
	'scroll',
	function(event) {
		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);
		let totalHeight = document.documentElement.offsetHeight - document.documentElement.clientHeight; //total height of the doc - the client height which equals the scrollTop value.
		let currHeight = document.documentElement.scrollTop;
		let percentage = currHeight / totalHeight * 100; //get a number from 0 - 100
		position.textContent = `${Math.floor(percentage)}%`;
		position.style.opacity = '1';
		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {
			// Run the callback
			position.style.opacity = '0';
			// console.log('Scrolling has stopped.');
		}, 250);
	},
	false
);

// // --- GRADIENT CHANGER

const pink = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAACMCAYAAAAjrgTzAAAACXBIWXMAAAsSAAALEgHS3X78AAAETklEQVR42u3dwQ0CMRAEweHk/OMkAn5g8mhVhXDP1uz5dd+fOwAAAAAg6WwTAAEAAAAg6mz7+gwAAAAA0CQAAgAAAECYAAgAAAAAYQIgAAAAAISdbT+fAQAAAACaBEAAAAAACHMCDAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABA2Nl2fQYAAAAAaLIABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAg7Gz7+QwAAAAA0CQAAgAAAECYE2AAAAAACLMABAAAAIAwC0AAAAAACBMAAQAAACDsbLs+AwAAAAA0WQACAAAAQJhHQAAAAAAgzAIQAAAAAMIEQAAAAAAIEwABAAAAIMwrwAAAAAAQ5hEQAAAAAAhzAgwAAAAAYQIgAAAAAIQ5AQYAAACAMAtAAAAAAAjzCjAAAAAAhFkAAgAAAECYfwACAAAAQJgFIAAAAACEWQACAAAAQJgFIAAAAACEeQUYAAAAAMIsAAEAAAAgzD8AAQAAACDMAhAAAAAAwiwAAQAAACDMAhAAAAAAwrwCDAAAAABhToABAAAAIMwJMAAAAACEWQACAAAAQJgACAAAAABhToABAAAAIMwrwAAAAAAQ5gQYAAAAAMKcAAMAAABAmAUgAAAAAIQJgAAAAAAQ5gQYAAAAAMK8AgwAAAAAYU6AAQAAACBMAAQAAACAMAEQAAAAAMI8AgIAAAAAYRaAAAAAABDmFWAAAAAACLMABAAAAIAwARAAAAAAwjwCAgAAAABhFoAAAAAAEOYREAAAAAAIswAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMK8AAwAAAECYBSAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACEeQUYAAAAAMIsAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACDMK8AAAAAAECYAAgAAAECYE2AAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIenwAAAAAAuiwAAQAAACBMAAQAAACAMAEQAAAAAMLOtuszAAAAAECTBSAAAAAAhFkAAgAAAECYAAgAAAAAYU6AAQAAACDMAhAAAAAAwiwAAQAAACBMAAQAAACAsMcnAAAAAIAuC0AAAAAACPMICAAAAACEWQACAAAAQJgFIAAAAACEWQACAAAAQJhXgAEAAAAgzAIQAAAAAML8AxAAAAAAwgRAAAAAAAhzAgwAAAAAYRaAAAAAABDmFWAAAAAACHMCDAAAAABhToABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACDs8QkAAAAAoMsCEAAAAADCBEAAAAAACHMCDAAAAABhFoAAAAAAECYAAgAAAECYE2AAAAAACLMABAAAAIAwC0AAAAAACHvdawAIAAAAAFUWgAAAAAAQ9gejGoj0T6zC+wAAAABJRU5ErkJggg==')`;
// const green = ` url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAACMCAYAAAAjrgTzAAAACXBIWXMAAAsSAAALEgHS3X78AAAETklEQVR42u3d0Q3CMBQEwSNyV9RB/5WA6WM1U0I+V/fi1z7vOwAAAAAg6WwTAAEAAAAg6mz7+gwAAAAA0CQAAgAAAECYAAgAAAAAYQIgAAAAAISdbT+fAQAAAACaBEAAAAAACHMCDAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABA2Nl2fQYAAAAAaLIABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAg7Gz7+QwAAAAA0CQAAgAAAECYE2AAAAAACLMABAAAAIAwC0AAAAAACBMAAQAAACDsbLs+AwAAAAA0WQACAAAAQJhHQAAAAAAgzAIQAAAAAMIEQAAAAAAIEwABAAAAIMwrwAAAAAAQ5hEQAAAAAAhzAgwAAAAAYQIgAAAAAIQ5AQYAAACAMAtAAAAAAAjzCjAAAAAAhFkAAgAAAECYfwACAAAAQJgFIAAAAACEWQACAAAAQJgFIAAAAACEeQUYAAAAAMIsAAEAAAAgzD8AAQAAACDMAhAAAAAAwiwAAQAAACDMAhAAAAAAwrwCDAAAAABhToABAAAAIMwJMAAAAACEWQACAAAAQJgACAAAAABhToABAAAAIMwrwAAAAAAQ5gQYAAAAAMKcAAMAAABAmAUgAAAAAIQJgAAAAAAQ5gQYAAAAAMK8AgwAAAAAYU6AAQAAACBMAAQAAACAMAEQAAAAAMI8AgIAAAAAYRaAAAAAABDmFWAAAAAACLMABAAAAIAwARAAAAAAwjwCAgAAAABhFoAAAAAAEOYREAAAAAAIswAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMK8AAwAAAECYBSAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACEeQUYAAAAAMIsAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACDMK8AAAAAAECYAAgAAAECYE2AAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIenwAAAAAAuiwAAQAAACBMAAQAAACAMAEQAAAAAMLOtuszAAAAAECTBSAAAAAAhFkAAgAAAECYAAgAAAAAYU6AAQAAACDMAhAAAAAAwiwAAQAAACBMAAQAAACAsMcnAAAAAIAuC0AAAAAACPMICAAAAACEWQACAAAAQJgFIAAAAACEWQACAAAAQJhXgAEAAAAgzAIQAAAAAML8AxAAAAAAwgRAAAAAAAhzAgwAAAAAYRaAAAAAABDmFWAAAAAACHMCDAAAAABhToABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACDs8QkAAAAAoMsCEAAAAADCBEAAAAAACHMCDAAAAABhFoAAAAAAECYAAgAAAECYE2AAAAAACLMABAAAAIAwC0AAAAAACHvdawAIAAAAAFUWgAAAAAAQ9ge7sYanU51d5gAAAABJRU5ErkJggg==')`;
// const blue = ` url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAACMCAYAAAAjrgTzAAAACXBIWXMAAAsSAAALEgHS3X78AAAESUlEQVR42u3dwQ2EMBAEwQE5/4wPXx6tqhB4tmbxs907AAAAACDpbBMAAQAAACDqbPv5DAAAAADQJAACAAAAQJgACAAAAABhAiAAAAAAhJ1tn88AAAAAAE0CIAAAAACEOQEGAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACDsbLs+AwAAAAA0WQACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABB2tn0+AwAAAAA0CYAAAAAAEOYEGAAAAADCLAABAAAAIMwCEAAAAADCBEAAAAAACDvbrs8AAAAAAE0WgAAAAAAQ5hEQAAAAAAizAAQAAACAMAEQAAAAAMIEQAAAAAAI8wowAAAAAIR5BAQAAAAAwpwAAwAAAECYAAgAAAAAYU6AAQAAACDMAhAAAAAAwrwCDAAAAABhFoAAAAAAEOYfgAAAAAAQZgEIAAAAAGEWgAAAAAAQZgEIAAAAAGFeAQYAAACAMAtAAAAAAAjzD0AAAAAACLMABAAAAIAwC0AAAAAACLMABAAAAIAwrwADAAAAQJgTYAAAAAAIcwIMAAAAAGEWgAAAAAAQJgACAAAAQJgTYAAAAAAI8wowAAAAAIQ5AQYAAACAMCfAAAAAABBmAQgAAAAAYQIgAAAAAIQ5AQYAAACAMK8AAwAAAECYE2AAAAAACBMAAQAAACBMAAQAAACAMI+AAAAAAECYBSAAAAAAhHkFGAAAAADCLAABAAAAIEwABAAAAIAwj4AAAAAAQJgFIAAAAACEeQQEAAAAAMIsAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACDMK8AAAAAAEGYBCAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGFeAQYAAACAMAtAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACPMKMAAAAACECYAAAAAAEOYEGAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAsNcnAAAAAIAuC0AAAAAACBMAAQAAACBMAAQAAACAsLPt+gwAAAAA0GQBCAAAAABhFoAAAAAAECYAAgAAAECYE2AAAAAACLMABAAAAIAwC0AAAAAACBMAAQAAACDs9QkAAAAAoMsCEAAAAADCPAICAAAAAGEWgAAAAAAQZgEIAAAAAGEWgAAAAAAQ5hVgAAAAAAizAAQAAACAMP8ABAAAAIAwARAAAAAAwpwAAwAAAECYBSAAAAAAhHkFGAAAAADCnAADAAAAQJgTYAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACHt9AgAAAADosgAEAAAAgDABEAAAAADCnAADAAAAQJgFIAAAAACECYAAAAAAEOYEGAAAAADCLAABAAAAIMwCEAAAAADCnnsNAAEAAACgygIQAAAAAML+TfSHFstMcBIAAAAASUVORK5CYIICQAAAAAAIMwEGAAAAgDABIAAAAACEmQADAAAAQJgGIAAAAACEPfcqAAIAAABAlQYgAAAAAIT9AZPXk0LNm4gdAAAAAElFTkSuQmCC')`;
const red = ` url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAACMCAYAAAAjrgTzAAAACXBIWXMAAAsSAAALEgHS3X78AAAET0lEQVR42u3dwY3DMBAEwbHAXO/h2B2CzcujURWCno1Z8fV5/90BAAAAAElnmwAIAAAAAFFn29dnAAAAAIAmARAAAAAAwgRAAAAAAAgTAAEAAAAg7Gz7+QwAAAAA0CQAAgAAAECYE2AAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMLOtuszAAAAAECTBSAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGFn289nAAAAAIAmARAAAAAAwpwAAwAAAECYBSAAAAAAhFkAAgAAAECYAAgAAAAAYWfb9RkAAAAAoMkCEAAAAADCPAICAAAAAGEWgAAAAAAQJgACAAAAQJgACAAAAABhXgEGAAAAgDCPgAAAAABAmBNgAAAAAAgTAAEAAAAgzAkwAAAAAIRZAAIAAABAmFeAAQAAACDMAhAAAAAAwvwDEAAAAADCLAABAAAAIMwCEAAAAADCLAABAAAAIMwrwAAAAAAQZgEIAAAAAGH+AQgAAAAAYRaAAAAAABBmAQgAAAAAYRaAAAAAABDmFWAAAAAACHMCDAAAAABhToABAAAAIMwCEAAAAADCBEAAAAAACHMCDAAAAABhXgEGAAAAgDAnwAAAAAAQ5gQYAAAAAMIsAAEAAAAgTAAEAAAAgDAnwAAAAAAQ5hVgAAAAAAhzAgwAAAAAYQIgAAAAAIQJgAAAAAAQ5hEQAAAAAAizAAQAAACAMK8AAwAAAECYBSAAAAAAhAmAAAAAABDmERAAAAAACLMABAAAAIAwj4AAAAAAQJgFIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIR5BRgAAAAAwiwAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIMwrwAAAAAAQZgEIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYV4BBgAAAIAwARAAAAAAwpwAAwAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQ9vgEAAAAANBlAQgAAAAAYQIgAAAAAIQJgAAAAAAQdrZdnwEAAAAAmiwAAQAAACDMAhAAAAAAwgRAAAAAAAhzAgwAAAAAYRaAAAAAABBmAQgAAAAAYQIgAAAAAIQ9PgEAAAAAdFkAAgAAAECYR0AAAAAAIMwCEAAAAADCLAABAAAAIMwCEAAAAADCvAIMAAAAAGEWgAAAAAAQ5h+AAAAAABAmAAIAAABAmBNgAAAAAAizAAQAAACAMK8AAwAAAECYE2AAAAAACHMCDAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYY9PAAAAAABdFoAAAAAAECYAAgAAAECYE2AAAAAACLMABAAAAIAwARAAAAAAwpwAAwAAAECYBSAAAAAAhFkAAgAAAEDY614DQAAAAACosgAEAAAAgLB/MhSH1p5IhF8AAAAASUVORK5CYII=')`;
// const purple = ` url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAACMCAYAAAAjrgTzAAAACXBIWXMAAAsSAAALEgHS3X78AAAETklEQVR42u3d0Q3CMBQEwSNyTxRC/6WA6WM1U0I+V/fi1+d97wAAAACApLNNAAQAAACAqLPt6zMAAAAAQJMACAAAAABhAiAAAAAAhAmAAAAAABB2tv18BgAAAABoEgABAAAAIMwJMAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYWfb9RkAAAAAoMkCEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAsLPt5zMAAAAAQJMACAAAAABhToABAAAAIMwCEAAAAADCLAABAAAAIEwABAAAAICws+36DAAAAADQZAEIAAAAAGEeAQEAAACAMAtAAAAAAAgTAAEAAAAgTAAEAAAAgDCvAAMAAABAmEdAAAAAACDMCTAAAAAAhAmAAAAAABDmBBgAAAAAwiwAAQAAACDMK8AAAAAAEGYBCAAAAABh/gEIAAAAAGEWgAAAAAAQZgEIAAAAAGEWgAAAAAAQ5hVgAAAAAAizAAQAAACAMP8ABAAAAIAwC0AAAAAACLMABAAAAIAwC0AAAAAACPMKMAAAAACEOQEGAAAAgDAnwAAAAAAQZgEIAAAAAGECIAAAAACEOQEGAAAAgDCvAAMAAABAmBNgAAAAAAhzAgwAAAAAYRaAAAAAABAmAAIAAABAmBNgAAAAAAjzCjAAAAAAhDkBBgAAAIAwARAAAAAAwgRAAAAAAAjzCAgAAAAAhFkAAgAAAECYV4ABAAAAIMwCEAAAAADCBEAAAAAACPMICAAAAACEWQACAAAAQJhHQAAAAAAgzAIQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwrwCDAAAAABhFoAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQ5hVgAAAAAAizAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwrwADAAAAQJgACAAAAABhToABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAh7fAIAAAAA6LIABAAAAIAwARAAAAAAwgRAAAAAAAg7267PAAAAAABNFoAAAAAAEGYBCAAAAABhAiAAAAAAhDkBBgAAAIAwC0AAAAAACLMABAAAAIAwARAAAAAAwh6fAAAAAAC6LAABAAAAIMwjIAAAAAAQZgEIAAAAAGEWgAAAAAAQZgEIAAAAAGFeAQYAAACAMAtAAAAAAAjzD0AAAAAACBMAAQAAACDMCTAAAAAAhFkAAgAAAECYV4ABAAAAIMwJMAAAAACEOQEGAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAICwxycAAAAAgC4LQAAAAAAIEwABAAAAIMwJMAAAAACEWQACAAAAQJgACAAAAABhToABAAAAIMwCEAAAAADCLAABAAAAIOx1rwEgAAAAAFRZAAIAAABA2B9RJYegixUeqAAAAABJRU5ErkJggg==')`;

// const colourArray = [ pink, green, blue, red, purple ];

// const section1 = document.getElementById('section--one');
// const section2 = document.getElementById('section--two');
// const section3 = document.getElementById('section--three');
// const section4 = document.getElementById('section--four');
// const section5 = document.getElementById('section--five');
const gradient = document.querySelector('.gradient');

// const gradientOptions = {
// 	root      : null,
// 	threshold : 0.5
// };

// const gradientChanger = function(entries) {
// 	entries.forEach((entry) => {
// 		if (!entry.isIntersecting) {
// 			console.log(entry.target + 'not intersecting');
// 			const colourID = entry.target.dataset.id;
// 			gradient.style.background = colourArray[colourID];
// 			gradient.style.backgroundSize = 'cover';
// 		}
// 	});
// };

// const gradientObserver = new IntersectionObserver(gradientChanger, gradientOptions);

// gradientObserver.observe(greetingContainer);
// gradientObserver.observe(section1);
// gradientObserver.observe(section2);

const el = document.getElementById('intro');

// const stickyOptions = {
// 	threshold : 1
// };

const sticky = new IntersectionObserver(([ e ]) => e.target.classList.toggle('is-pinned', e.intersectionRatio < 1), {
	threshold: [ 1 ],
	rootMargin: '-1px 0px 0px 0px'
});

sticky.observe(el);
