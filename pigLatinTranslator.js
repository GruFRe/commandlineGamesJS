// processing user input and get rid of first two inbuilt ones
const args = process.argv.slice(2);

const vowels = ["a", "e", "i", "o", "u"];
const consonants = [
	"q",
	"w",
	"r",
	"t",
	"z",
	"p",
	"s",
	"d",
	"f",
	"g",
	"h",
	"j",
	"k",
	"l",
	"y",
	"x",
	"c",
	"v",
	"b",
	"n",
	"m",
];
retString = "";
args.forEach((element) => {
	// console.log(element);
	// check starting chars for each element and translate element accordingly to rules
	if (vowels.includes(element[0].toLowerCase())) {
		// // check for starting with vocals
		// // add "way" to the end of the string
		// retString = retString + element + "way";
		// // console.log(element);
	} else if (
		consonants.includes(element[0].toLowerCase()) &&
		consonants.includes[element[1].toLowerCase()]
	) {
		// check for starting with two consonants
		// Cut first two consonatns and put them at the end of the word
		// also add "ay" to the end

		// create new variable and assign substrings and additional chars
		// let wordToAdd =
		// 	element.slice(2, -1) + element.slice(0, element.length + 1) + "ay";
		// retString = retString + " " + wordToAdd;
		console.log(element.slice(0, 2));
		console.log(element.slice(2, element.length));
	} else if (
		consonants.includes(element[0].toLowerCase()) &&
		vowels.includes(element[1].toLowerCase())
	) {
		// check for starting with a consonant and a vowel
		// cut first item and put it at the end of the string
		// add "ay" to the end
		// console.log(element);
	}
});
console.log(retString);
// const test = "Hello";
// console.log(test.slice(2, test.length));
