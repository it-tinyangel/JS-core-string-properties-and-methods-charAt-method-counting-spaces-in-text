let userInputText = prompt('Input your text:');

let spaceCount = 0;
for (let i = 0; i < userInputText.length; i++) {
	if (userInputText.charAt(i) === ' ') {
		spaceCount++;
	}
}

console.log(`The number of spaces in the inputted text: ${spaceCount}`);
