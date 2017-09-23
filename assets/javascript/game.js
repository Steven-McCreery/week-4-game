
//ready when loading is complete
$(document).ready(function() {
	$(".fighter").on("click", fighterSelect);
		// $(document).on("click", "other", enemySelect);
	// $("button:not(.fighter)").on("click", enemySelect);
	$(".begin").on("click", battle);

})

//defining initial variables
var fighter = false;

var isEnemy = false;

var fighterSelect;

var enemySelect;

var battle;

var wins;

// var clicks = 0;

//object constructor for characters
function Character(powerIncrement, power, defense, health) {
	return{
		"powerIncrement":powerIncrement,
		"power":power,
		"defense":defense,
		"health":health,
		}
	}
	

//creating 4 new objects with above template
var character1 = Character(111, 111, 111, 111);

var character2 = Character(222, 222, 222, 222);

var character3 = Character(333, 333, 333, 333);

var character4 = Character(444, 444, 444, 444);

console.log(character1);

var fighter2Character = {
	"fighter1":character1,
	"fighter2":character2,
	"fighter3":character3,
	"fighter4":character4,
	}

var main;
var enemy;

console.log(main);

//adding the newly created objects to the html elements


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
		$(".fighter").addClass("other");
		$(".fighter").removeClass("fighter");
		$(".other").appendTo(".defenders");
		$(".other").on("click", enemySelect);
		wins = 0;
		main = fighter2Character[$(".main").attr('id')];
		// window.main = main;
	}
}

//selection method for opposing character(s)
enemySelect = function() {

	//alerting user of enemy selected as a filled condition
	if (isEnemy == true) {
		setTimeout(function(){
		alert("You have already selected a defender, you must first battle!");
		},1000 * .2)
	}

	//if there is no enemy, then the clicked on item is moved into the enemy position, adjusting classes and object property values
	if (isEnemy == false) {
		$($(this)).appendTo(".battle");
		isEnemy = true;
		$($(this)).removeClass("other");
		$($(this)).removeClass("fighter");
		$($(this)).addClass("enemy");
		$(".begin").removeClass("inactive");
		$(".begin").addClass("active");
		console.log("enemy selected");
		enemy = fighter2Character[$(".enemy").attr('id')];
		// window.enemy = enemy;
	}
}



//combat mechanic on button click when an attacker and defender are present
battle = function() {
	if (fighter === true && isEnemy === true) {
		// var main = fighter2Character[$(".main").attr('id')];
		// var enemy = fighter2Character[$(".enemy").attr('id')];
		console.log(main);
		console.log(enemy);
		mainHealth = main.health;
		var mainCurrentHealth = mainHealth;
		mainInc = main.power;
		mainPower = mainInc;
		enemyHealth = enemy.health;
		var enemyCurrentHealth = enemyHealth;
		enemyDefense = enemy.defense;

		//enemy's health less the main character's attack value
		enemyHealth = enemyHealth - mainPower;
		enemy.health = enemyHealth;
		// $(enemy).data("health", enemyHealth);
		// window.enemyHealth = enemyHealth;
		$(".enemy .health").html(" " + enemyHealth);
		console.log(enemyHealth);

		//main charater's power increases
		$(main).data("power", $(main).data("power") + $(main).data("powerIncrement"));
		// $(".main .power").html($(".main").data("power"));

		//reducing main character's health by enemy defense
		$(main).data("health", (parseInt(mainHealth) - parseInt(enemyDefense)));
		$(".main .health").html(mainHealth);

		//defeated enemy conditions
		if (enemyHealth < 1) {
			setTimeout(function() {
				$(".enemy").appendTo(".defeated");
				$(".enemy").addClass("rip");
				$(".enemy").removeClass("enemy");
				$(".rip").addClass("gone");
				$(".defeated").append("Defeated an Enemy!<br>")
				//changing statuses now that enemy is defeated
				isEnemy = false;
			},1000 * .2) 
			// $(".enemy").data("available", false);
			// $(".enemy").data("currentDefender", false);

			//changing battle button to inactive
			$(".begin").removeClass("active");
			$(".begin").addClass("inactive"); 

			//incrementing wins and checking if winning condition met
			wins = wins + 1;
			console.log(wins);
			if (wins < 3) {
				setTimeout(function(){
					alert("You have defeated the challenger!  Select another enemy.");
				},1000 * .2)
			}
			if (wins > 2) {
				setTimeout(function(){
					alert("You have defeated all the challengers!  Well done!");
				},1000 * .2)
			}
		}

		//checking for main character's health for losing condition
		if ($(".main").data("health") < 1) {
			setTimeout(function(){
			alert("You have been bested by your enemies!  Reaload the page to retry.");
			},1000 * .2)

			//inactivating battle button on loss
			$(".begin").removeClass("active");
			$(".begin").addClass("inactive");
		}
	}	
}



//function Character(powerIncrement, power, defense, health, available, currentAttacker, currentDefender)
