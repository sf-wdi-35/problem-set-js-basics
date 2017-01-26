/*
  Shakesperian Insult Generator

  You saucy, fly-bitten, minnow, you! Randomly generate some zingers using the supplied list of words!

  Bonuses:
  - Encapsulate your logic in a `generateInsult` function
  - Randomly generate 1 word, 2 word, and n word insults.
  - Generate any number of insults, depending on a user supplied integer. (e.g. generateInsults(3) )
  - Allow the user to supply a proper name as an input. ("Why Justin, you villainous toad-spotted strumpet!").
  - Create a browser interface, using some combination of `prompt`, `alert`, and/or DOM manipulation.

*/


// YOUR CODE HERE
// selecting a random array item
v

var generateInsult= function () { 
	var firstInsult =insults[(Math.floor(Math.random() * insults.length))];
};

function generateInsult(){
console.log(insults[(Math.floor(Math.random() * insults.length))] + " " + insults + " " + insults);
}

generateInsult();

var generateInsult = {
	wordOne:[	
 		"wagtail", "whey-face", "vassal", "varlet", "strumpet", "skainsmate", "scut", 
 		"ratsbane", "pumpion", "puttock", "pignut", "pigeon-egg", "nut-hook", "mumble-news", 
 		"moldwarp", "miscreant", "minnow", "measle", "mammet", "malt-worm", "maggot-pie", "lout", 
 		"lewdster", "joithead", "hugger-mugger", "horn-beast", "hedge-pig", "harpy", "haggard", 
 		"gudgeon", "giglet", "fustilarian", "foot-licker", "flirt-gill", "flax-wench", "flap-dragon", 
 		"dewberry", "death-token", "codpiece", "coxcomb", "clotpole", "clack-dish", "canker-blossom", 
 		"bum-bailey", "bugbear", "boar-pig", "bladder", "barnacle", "baggage", "apple-john"
 		],			
	wordTwo:[	
 		"weather-bitten", "unchin-snouted", "toad-spotted", "tickle-brained", 
 		"tardy-gaited", "swag-bellied", "spur-galled", "sheep-biting", "shard-borne", 
 		"rump-fed", "rude-growing", "rough-hewn", "reeling-ripe", "pox-marked", 
 		"pottle-deep","plume-plucked", "onion-eyed", "motley-minded", "milk-livered", 
 		"knotty-pated", "ill-nurtured", "ill-breeding", "idle-headed", "hell-hated", 
 		"hedge-born", "hasty-witted", "half-faced", "guts-griping", "full-gorged", 
 		"fool-born", "folly-fallen", "fly-bitten", "flap-mouthed", "fen-sucked", "fat-kidneyed", 
 		"elf-skinned", "earth-vexing", "dread-bolted", "doghearted", "dizzy-eyed", 
 		"dismal-dreaming", "crook-pated", "common-kissing", "clay-brained", "clapper-clawed", 
 		"boil-brained", "beetle-headed", "beef-witted", "bat-fowling", "base-court"
 		],
 	wordThree:[
		"yeasty", "weedy", "wayward", "warped", "villainous", "venomed", "vain", 
		"unmuzzled", "tottering", "surly", "spongy", "spleeny", "saucy", "ruttish", 
		"roguish", "reeky", "rank", "qualling", "puny", "puking", "pribbling", 
		"paunchy", "mewling", "mangled", "mammering", "lumpish", "loggerheaded", 
		"jarring", "infectious", "impertinent", "gorbellied", "goatish", "gleeking", 
		"frothy", "froward", "fobbing", "fawning", "errant", "droning", "dissembling", 
		"dankish", "currish", "craven", "clouted", "cockered", "churlish", "bootless", 
		"beslubbering", "bawdy", "artless"
		],

	randomWord: function(wordOne){ return wordOne[Math.floor(Math.random()*wordOne.length)]; },
	generate: function(){ var s = "";
		for(n=0; n<Math.floor(Math.random()*3)+1; n++) 
		(s += ", " + insult.randomWord(insult.wordOne) + ", " + insult.randomWord(insult.wordTwo));
		(s += " " + insult.randomWord(insult.wordThree));
		return "Hey! You " + s.substring(2) + "!"; 
		}
	}