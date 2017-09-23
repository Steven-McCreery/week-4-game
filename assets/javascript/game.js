
//ready when loading is complete
$(document).ready(function() {
	$(".fighter").on("click", fighterSelect);
	$(".begin").on("click", battle);
})

//defining initial variables
var fighter = false;

var isEnemy = false;

var fighterSelect;

var enemySelect;

var battle;

var wins;

//object function for characters
function Character(power, defense, health) {
	return{
		"power":power,
		"defense":defense,
		"health":health,
		}
	}
	
//creating 4 new objects with above template
var character1 = Character(65, 29, 100);

var character2 = Character(40, 30, 125);

var character3 = Character(30, 25, 150);

var character4 = Character(20, 20, 190);

console.log(character1);

//adding the newly created objects to the html elements
var fighter2Character = {
	"fighter1":character1,
	"fighter2":character2,
	"fighter3":character3,
	"fighter4":character4,
	}

var main;

var enemy;

clicks = 1;

console.log(main);
console.log(enemy);

//selection method for first character
fighterSelect = function() {

	//when no fighter is present this will move one (clicked) item into the battle (main) position and the three remaining into defenders position, adjusting classes and object property values
	if (clicks === 1) {
		if (fighter == false) {
			$($(this)).appendTo(".battle");
			fighter = true;
			$($(this)).removeClass("fighter");
			$($(this)).addClass("main");
			$(".fighter").addClass("other");
			$(".fighter").removeClass("fighter");
			$(".other").appendTo(".defenders");
			wins = 0;
			main = fighter2Character[$(".main").attr('id')];
			$(".other").on("click", enemySelect);
		}
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
		$($(this)).addClass("enemy");
		$(".begin").removeClass("inactive");
		$(".begin").addClass("active");
		console.log("enemy selected");
		enemy = fighter2Character[$(".enemy").attr('id')];
	}
}

//combat mechanic on button click when an attacker and defender are present
battle = function() {
	if (fighter === true && isEnemy === true) {
		if (fighter === false) {
			return;
		}
		console.log(main);
		console.log(enemy);
		mainHealth = main.health;
		mainPower = main.power;
		enemyHealth = enemy.health;
		enemyDefense = enemy.defense;

		//enemy's health less the main character's attack value
		enemyHealth = enemyHealth - (mainPower * clicks);
		enemy.health = enemyHealth;
		$(".enemy .health").html(enemyHealth);
		console.log(enemyHealth);

		//reducing main character's health by enemy defense
		mainHealth = mainHealth - enemyDefense;
		main.health = mainHealth;
		$(".main .health").html(mainHealth);

		//main charater's power increases
		clicks = clicks + 1;
		console.log(clicks);

		//checking for main character's health for losing condition
		if (mainHealth < 1) {
			fighter = false;

			//inactivating battle button on loss
			$(".begin").removeClass("active");
			$(".begin").addClass("inactive");

			//alert of loss
			setTimeout(function(){
			alert("You have been bested by your enemies!  Reaload the page to retry.");
			// $(".main").addClass("gone");
			// $(".main").removeClass("main");
			},1000 * .2)
			return;
		}

		//defeated enemy conditions
		if (enemyHealth < 1) {
			setTimeout(function() {
				$(".enemy").appendTo(".defeated");
				$(".enemy").addClass("rip");
				$(".enemy").removeClass("enemy");
				$(".rip").addClass("gone");
				$(".defeated").append("<span class='text'>TANGO DOWN!</span><br>")
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
				setTimeout(function(){
					$(".main").addClass("winner");
					$(".winner").html("<img src='assets/images/chicken.jpg'>")
				},1000 * .2)
			}
		}

	}	
}



