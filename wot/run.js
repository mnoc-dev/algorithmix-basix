// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
let output = "";
let min = parseInt(args[0]);
let weeks = parseInt(args[1]);
let unit = args[2];
let days = 5;
let result = 0;

if (unit == "H") {
result = (min * days * weeks) / 60;
output = `Waste of Time : ${result} H`;
}
else if (unit == "D") {
result = ((min * days * weeks) / 60) / 7;
output = `Waste of Time : ${result} D`;
}
else {
result = min * days * weeks;
output = `Waste of Time : ${result} M`;
}




// Do not change:
console.log(output);
