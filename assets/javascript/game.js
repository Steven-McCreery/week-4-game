window.onload = function() {

	$(".fighter").on("click", fighterSelect);
	$(".fighter").on("click", defenderSelect);
	$(".begin").on("click", battle);







}


var fighter = false;

var defender = false;

var defeated = [];

var selector;

var battle;



fighterSelect = function() {
	if (fighter == false) {
		$($(this)).appendTo(".attacker");
		fighter = true;
	}
}

defenderSelect = function() {
	if (defender == true) {
		alert("You have already selected a defender, you must first battle!");
	}

	if (defender = false && fighter == true) {
		$($(this)).appendTo(".defender");
		defender = true;
	}
}

