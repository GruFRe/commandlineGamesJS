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

args.forEach((element) => {
	// console.log(element);
	// check starting chars for each element and translate element accordingly to rules
	if (vowels.includes(element[0])) {
		// check for starting with vocals
		console.log(element);
	} else if (
		consonants.includes(element[0]) &&
		consonants.includes[element[1]]
	) {
		// check for starting with two consonants
		console.log();
	} else if (consonants.includes(element[0]) && vowels.includes(element[1])) {
		// check for starting with a consonant and a vowel
		console.log(element);
	}
});
