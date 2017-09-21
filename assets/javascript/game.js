$(document).ready(function() {
	$(".fighter").on("click", fighterSelect);
	$(".other").on("click", enemySelect);
	$(".begin").on("click", battle);
})


var fighter = false;

var enemy = false;

var fighterSelect;

var enemySelect;

var battle;

function Character(powerIncrement, power, defense, health, available) {
	this.powerIncrement = powerIncrement;
	this.power = power;
	this.defense = defense;
	this.health = health;
	this.available = available;
}

var character1 = new Character(111, 111, 111, 111, true);

var character2 = new Character(222, 222, 222, 222, true);

var character3 = new Character(333, 333, 333, 333, true);

var character4 = new Character(444, 444, 444, 444, true);


fighterSelect = function() {
	if (fighter == false) {
		$($(this)).appendTo(".battle");
		fighter = true;
		$($(this)).removeClass("fighter");
		$($(this)).addClass("main");
		$(".fighter").addClass("other");
		$(".fighter").removeClass("fighter");
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
		$($(this)).addClass("enemy");
		console.log("enemy selected");
	}


}

