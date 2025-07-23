// processing input arguments
const args = process.argv.slice(2);
// print processed arguments
// console.log(args);

// check how many arguments are given
if (args.length !== 1) {
	console.error("Please provide exactly one argument");
}
//convert input to lowercase for easier comparison
try {
	lowerCaseInput = args[0].toLowerCase();
	// console.log(input);
} catch (error) {
	console.error("Wrong input, try again with a string");
}

// Function to generate random integers
function getRandomInt(min, max) {
	// ceil both values
	min = Math.ceil(min);
	max = Math.floor(max);
	//calculate integer
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// create a random number between 1 and 3 for enemys choice
const randomNumber = getRandomInt(1, 3);
console.log("generated num: " + randomNumber);
console.log(typeof randomNumber);

let enemyChoice = "";
switch (randomNumber) {
	case 1:
		enemyChoice = "rock";
		break; // Use break to end switch, took me around 30 minutes to figure out why output is not what i expected
	case 2:
		enemyChoice = "paper";
		break; // use break to end switch
	case 3:
		enemyChoice = "scissors";
		break; // use break to end switch
}
console.log(enemyChoice);
