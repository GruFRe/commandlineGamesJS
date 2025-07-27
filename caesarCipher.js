// processing user input and get rid of first two inbuilt ones
const args = process.argv.slice(2);

// console.log("a".charCodeAt(0));

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
	shiftBy = parseInt(args[1]);
} catch {
	console.error("Your secong argument is not a Number, please try again!");
}
// second error check wich works ---> WHY?
if (shiftBy !== typeof Number) {
	console.error("Your secong argument is not a Number:2, please try again!");
	return;
}
