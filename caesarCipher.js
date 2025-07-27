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
// console.log(inputString);
// get value of each used char
// shift it by the given value in helper function?

// Helper function to shift char by int based on ASCII
const shiftAscii = (charIn, shiftBy) => {
	return String.fromCharCode(charIn.charCodeAt(0) + shiftBy);
};
