// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
let output = "";
let str = args[0];
let start = 0;
let end = 0;
for ( let i = 0; i < str.length; i++){
	if ( str[i] != " " && str[i] != "\t"){
	start = i;
	break;
	}
	
}
for (let i = str.length - 1; i >= 0; i--){
	if (str[i] != " " && str[i] != "\t"){
	end = i;
	break;
	}
}
for ( let i = start; i <= end; i++){
	output += str[i];
	}

// Do not change:
console.log(output);
