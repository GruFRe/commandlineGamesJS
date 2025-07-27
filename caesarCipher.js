// processing user input and get rid of first two inbuilt ones
const args = process.argv.slice(2);

// console.log("a".charCodeAt(0)); // convert to ASCII from CHAR
// test = String.fromCharCode(97); // convert from ASCII to CHAR

if (args.length !== 2) {
	console.error(
		"Only two arguments are allowed: first == <String to decrypt>; second ==<Integer to shift values>"
	);
	return;
}
// define variables from input
inputString = args[0];
// check for type and throw error if neccesary
try {
	// console.log(typeof args[1]);
	shiftBy = parseInt(args[1]);
	// console.log(typeof shiftBy);
} catch {
	console.error("Your secong argument is not a Number:1, please try again!");
}
if (shiftBy === NaN) {
	console.error("Your secong argument is not a Number:2, please try again!");
	return;
}
// Helper function to shift char by int based on ASCII
// takes char and number to shift as argument
const shiftAscii = (char, shiftBy) => {
	// function wich returns char from integer
	return String.fromCharCode(
		// converts char to Integer and adds input to it
		// -> returns value wich gets then converted again by outer function
		char.charCodeAt(0) + shiftBy
	);
};
let retVal = "";
// splits string in single words and filter out spaces
const listOfWords = inputString.split(" ").filter((word) => word !== "");
// loop over array of words
listOfWords.forEach((element) => {
	console.log(element); // Log element for debugging
	// inner loop to get to each char in each word
	for (const char in element) {
		// console.log(element[char]); // Log element for debugging
		retVal = retVal + shiftAscii(element[char], shiftBy);
	}
	retVal = retVal + " ";
});

console.log(retVal);
