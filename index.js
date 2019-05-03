


// strings
// String je text
string1 = "niko";
string2 = "2";
string3 = "MIlan23";

// Intiger
// Brojevi

broj = 2;

// Array{NIZ}

array = [
	{
		mina: "minic",
		milan: "Jankovic",
	},
	"nikola",
	5,
	[
		{
			milan2: "janko",
		},
		"sarma",
	],
	];

	for(i = 0; i < array.length; i++){
		if(typeof array[i] === "string"){
			console.log(array[i]);
		}
		console.log('nema stringa');
	}

