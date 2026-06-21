// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below
let output = 0;
let character = args[1];
let sentence = args[0];


for (let i = 0 ; i < sentence.length; i++){
	if(character === sentence[i]){
	output += 1;
	}
}

// Do not change:
console.log(output);
