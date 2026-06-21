// Do not change, helper to read arguments:
const args = process.argv.slice(2);
// Implement below:
console.log(args);
let output = "";
let mot = args[0];
let supprimer =  args[1]; //lettre o
let remplacer = args[2]; //lettre a

for (let i = 0; i < mot.length; i++)
{
	if (mot[i] === supprimer){
	output += remplacer;
	//t'arrives à O  du coup prends ce qu'il y avant  x + y(nouvelle partie du calc
	}else
	{ 
	output += mot[i];
	}
}

// Do not change:
console.log(output);

