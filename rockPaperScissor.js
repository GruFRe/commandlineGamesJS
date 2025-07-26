// processing input arguments
const args = process.argv.slice(2);

// check how many arguments are given
if (args.length !== 1) {
	console.error("Please provide exactly one argument");
	return;
}
// try to convert input to lowercase for easier comparison
try {
	lowerCaseInput = args[0].toLowerCase();
} catch (error) {
	console.error("Wrong input, try again with a string?");
}

// Function to generate random integers because its not inbuilt, thx to Gemini
function getRandomInt(min, max) {
	// ceil both values
	min = Math.ceil(min);
	max = Math.floor(max);
	//calculate integer
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// create a random number between 1 and 3 for enemys choice
const randomNumber = getRandomInt(1, 3);

//switch case statement to "translate" random number to string
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

// Game logic
let result = "";

//switch always set to true
switch (true) {
	// check for draw conditions
	case (lowerCaseInput === "rock" && enemyChoice === "rock") ||
		(lowerCaseInput === "paper" && enemyChoice === "paper") ||
		(lowerCaseInput === "scissors" && enemyChoice == "scissors"):
		result = "draw";
		break;
	// check for loose conditions
	case (lowerCaseInput === "rock" && enemyChoice === "paper") ||
		(lowerCaseInput === "paper" && enemyChoice === "scissors") ||
		(lowerCaseInput === "scissors" && enemyChoice === "rock"):
		result = "loose";
		break;
	// check for win conditions
	case (lowerCaseInput === "rock" && enemyChoice === "scissors") ||
		(lowerCaseInput === "paper" && enemyChoice === "rock") ||
		(lowerCaseInput === "scissors" && enemyChoice === "paper"):
		result = "WON!";
		break;
	// catch wrong user input not valid in this game
	case lowerCaseInput !== "rock" ||
		lowerCaseInput !== "paper" ||
		lowerCaseInput !== "scissors":
		console.error("Wrong input, please try again!");
		return;
}
// output to console
console.log(
	`You choose: ${lowerCaseInput}. Your enemy choose: ${enemyChoice}. You ${result}`
);
