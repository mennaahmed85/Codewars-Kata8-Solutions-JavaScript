/*
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
*/



function greet(language) {
 let languages={
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
 }
 return languages.hasOwnProperty(language)?languages[language] : languages['english'];
}




// another solution 


const myMap = new Map();
	myMap.set ("english", "Welcome");
	myMap.set ("czech", "Vitejte");
	myMap.set ("danish", "Velkomst");
	myMap.set ("dutch", "Welkom");
	myMap.set ("estonian", "Tere tulemast");
	myMap.set ("finnish", "Tervetuloa");
	myMap.set ("french", "Bienvenue");
	myMap.set ("german", "Willkommen");
	myMap.set ("irish", "Failte");
	myMap.set ("italian", "Benvenuto");
	myMap.set ("latvian", "Gaidits");
	myMap.set ("lithuanian", "Laukiamas");
	myMap.set ("polish", "Witamy");
	myMap.set ("spanish", "Bienvenido");
	myMap.set ("swedish", "Valkommen");
	myMap.set ("welsh", "Croeso");
	myMap.set("flemish", "Welgekomen");
function greet(language) {
 return myMap.has(language)?myMap.get(language):myMap.get("english");
}
