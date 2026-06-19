// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
let output = "";
let str = args[0];
for (let i = str.length - 1 ; i >= 0 ; i--){
	output += str[i];
};
// Do not change:
console.log(output);

