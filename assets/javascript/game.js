//ready when loading is complete
$(document).ready(function() {
	$(".fighter").on("click", fighterSelect);
	$(".defenders.other").on("click", enemySelect);
	// $(document).on("click", "other", enemySelect);
	// $("button:not(.fighter)").on("click", enemySelect);
	$(".begin").on("click", battle);

})

//defining initial variables
var fighter = false;

var enemy = false;

var fighterSelect;

var enemySelect;

var battle;

// var clicks = 0;

//object constructor for characters
function Character(powerIncrement, power, defense, health, available, currentAttacker, currentDefender) {
	this.powerIncrement = powerIncrement;
	this.power = power;
	this.defense = defense;
	this.health = health;
	this.available = available;
	this.currentAttacker = currentAttacker;
	this.currentDefender = currentDefender;
}

//creating 4 new objects with above template
var character1 = new Character(111, 111, 111, 111, true, false, false);

var character2 = new Character(222, 222, 222, 222, true, false, false);

var character3 = new Character(333, 333, 333, 333, true, false, false);

var character4 = new Character(444, 444, 444, 444, true, false, false);

//adding the newly created objects to the html elements
$("#fighter1").data(character1);

$("#fighter2").data(character2);

$("#fighter3").data(character3);

$("#fighter4").data(character4);



//trying to make object move in as a challenger to first selected with a click tracker
// fighterSelect = function() {
// 	clicks = 0;

	// if (clicks == 0){
	// 	if (fighter == false) {
	// 	$($(this)).appendTo(".battle");
	// 	fighter = true;
	// 	$($(this)).removeClass("fighter");
	// 	$($(this)).addClass("main");
	// 	$($(this)).data("currentAttacker", true);
	// 	$($(this)).data("available", false);
	// 	$(".fighter").addClass("other");
	// 	$(".fighter").removeClass("fighter");
	// 	$(".other").appendTo(".defenders");
	// 		clicks = 1;
	// 	}
	// }
// 	else {
// 		if (enemy == true) {
// 			setTimeout(function(){
// 			alert("You have already selected a defender, you must first battle!");
// 			},1000 * .2)
// 		}

	// if (enemy == false) {
	// 	$($(this)).appendTo(".battle");
	// 	enemy = true;
	// 	$($(this)).removeClass("other");
	// 	$($(this)).removeClass("fighter");
	// 	$($(this)).addClass("enemy");
	// 	$($(this)).data("available", false);
	// 	$($(this)).data("currentDefender", true);
	// 	$(".begin").removeClass(".inactive");
	// 	$(".begin").addClass(".active");
	// 	console.log("enemy selected");
// 		}
// 	}

// }


//selection method for first character
fighterSelect = function() {

	//when no fighter is present this will move one (clicked) item into the battle (main) position and the three remaining into defenders position, adjusting classes and object property values
	if (fighter == false) {
		$($(this)).appendTo(".battle");
		fighter = true;
		$($(this)).removeClass("fighter");
		$($(this)).addClass("main");
		$($(this)).data("currentAttacker", true);
		$($(this)).data("available", false);
		$(".fighter").addClass("other");
		$(".fighter").removeClass("fighter");
		$(".other").appendTo(".defenders");
	}
}

//selection method for opposing character(s)
enemySelect = function() {

	//alerting user of enemy selected as a filled condition
	if (enemy == true) {
		setTimeout(function(){
		alert("You have already selected a defender, you must first battle!");
		},1000 * .2)
	}

	//if there is no enemy, then the clicked on item is moved into the enemy position, adjusting classes and object property values
	if (enemy == false) {
		$($(this)).appendTo(".battle");
		enemy = true;
		$($(this)).removeClass("other");
		$($(this)).removeClass("fighter");
		$($(this)).addClass("enemy");
		$($(this)).data("available", false);
		$($(this)).data("currentDefender", true);
		$(".begin").removeClass(".inactive");
		$(".begin").addClass(".active");
		console.log("enemy selected");
	}
}



//combat mechanic on button click when an attacker and defender are present
battle = function() {
	if (fighter == true && enemy == true) {
		$(".begin").on("click", function() {

			//enemy's health less the main character's attack value
			$(".enemy").data(health) - $(".main").data(power) = $(".enemy").data(health);

			//main charater's power increases
			$(".main").data(power) + $(".main").data(powerIncrement) = $(".main").data(power);

			//reducing main character's health by enemy defense
			$(".main").data(health) - $(".enemy").data(defense) = $(".main").data(health);

			//defeated enemy conditions
			if ($(".enemy").health < 1) {
				$(".enemy").appendTo(".defeated");
				setTimeout(function(){
				alert("You have defeated the challenger!  Select another enemy.");
				},1000 * .2)

				//changing statuses now that enemy is defeated
				$(".enemy").data("available", false);
				$(".enemy").data("currentDefender", false);
				enemy = false;

				//changing battle button to inactive
				$(".begin").removeClass(".active");
				$(".begin").addClass(".inactive"); 

				//incrementing wins and checking if winning condition met
				wins = wins + 1;
				if (wins = 3) {
					alert("You have defeated all the challengers!  Well done!");
				}
			}

			//checking for main character's health for losing condition
			if ($(".main").health < 1) {
				setTimeout(function(){
				alert("You have been bested by your enemies!  Reaload the page to retry.");
				},1000 * .2)

				//inactivating battle button on loss
				$(".begin").removeClass(".active");
				$(".begin").addClass(".inactive");
			}
		})
	}
}



//function Character(powerIncrement, power, defense, health, available, currentAttacker, currentDefender)
