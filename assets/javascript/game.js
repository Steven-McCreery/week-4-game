
$(document).ready(function() {
	$(".fighter").on("click", fighterSelect);
	$(".defenders.other").on("click", enemySelect);
	// $(document).on("click", "other", enemySelect);
	// $("button:not(.fighter)").on("click", enemySelect);
	$(".begin").on("click", battle);

})


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

var character1 = new Character(111, 111, 111, 111, true, false, false);

var character2 = new Character(222, 222, 222, 222, true, false, false);

var character3 = new Character(333, 333, 333, 333, true, false, false);

var character4 = new Character(444, 444, 444, 444, true, false, false);

$("#fighter1").data(character1);

$("#fighter2").data(character2);

$("#fighter3").data(character3);

$("#fighter4").data(character4);




// fighterSelect = function() {
// 	clicks = 0;

// 	if (clicks == 0){
// 		if (fighter == false) {
// 			$($(this)).appendTo(".battle");
// 			fighter = true;
// 			$($(this)).removeClass("fighter");
// 			$($(this)).addClass("main");
// 			$(this).attr("currentAttacker", true);
// 			$(".fighter").addClass("other");
// 			// $(".fighter").removeClass("fighter");
// 			$(".other").appendTo(".defenders");
// 			clicks = 1;
// 		}
// 	}
// 	else {
// 		if (enemy == true) {
// 			setTimeout(function(){
// 			alert("You have already selected a defender, you must first battle!");
// 			},1000 * .2)
// 		}

// 		if (enemy == false) {
// 			$($(this)).appendTo(".battle");
// 			enemy = true;
// 			$($(this)).removeClass("other");
// 			$($(this)).removeClass("fighter");
// 			$($(this)).addClass("enemy");
// 			console.log("enemy selected");
// 		}
// 	}

// }



fighterSelect = function() {
	if (fighter == false) {
		$($(this)).appendTo(".battle");
		fighter = true;
		$($(this)).removeClass("fighter");
		$($(this)).addClass("main");
		$(this).attr("currentAttacker", true);
		$(".fighter").addClass("other");
		// $(".fighter").removeClass("fighter");
		$(".other").appendTo(".defenders");
	}
}

enemySelect = function() {
	if (enemy == true) {
		setTimeout(function(){
		alert("You have already selected a defender, you must first battle!");
		},1000 * .2)
	}

	if (enemy == false) {
		$($(this)).appendTo(".battle");
		enemy = true;
		$($(this)).removeClass("other");
		$($(this)).removeClass("fighter");
		$($(this)).addClass("enemy");
		console.log("enemy selected");
	}
}



// fighterSelect();


// enemySelect();

// battle = function() {
// 	if (fighter == true && enemy == true) {
// 		$(".begin").on("click", function(){
// 			if ($(".enemy").health < 1) {.

// 			}
// 		})
// 	}
// }




