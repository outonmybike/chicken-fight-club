var chickenName = window.prompt('Please state your chicken\'s given name:');
var chickenHealth = 1000;
var chickenAttack = 100;
var chickenMoney = 10;

console.log(chickenName, chickenHealth, chickenHealth);

var enemyName = 'Fog Horn Leg Horn';
var enemyHealth = '50';
var enemyAttack = '12';

var fight = function() {
	window.alert('Welcome to Chicken Fight Club');

	var promptFight = window.prompt('Would you like to FIGHT or SKIP this round?');

	if (promptFight.toLowerCase() === 'fight') {
		//subtract enemy health 
		enemyHealth = enemyHealth - chickenAttack;

		//log result
		console.log(chickenName+' attacked '+ enemyName+'. '+enemyName+' now has '+ enemyHealth+' health remaining');
		//subtract player health
		chickenHealth = chickenHealth - enemyAttack;
		//log result
		console.log(enemyName+' has attacked '+chickenName+'. '+chickenName+' now has '+chickenHealth+' health remaining');

		//enemy health check
		if (enemyHealth<=0) {
			window.alert(enemyName+' has flown to the big coop in the sky');
		}
		else {
			window.alert(enemyName+' has '+enemyHealth+' health remaining');
		}

		//player health check
		if(chickenHealth <=0) {
			window.alert(chickenName+' has flown to the big coop in the sky');
		}
		else {
			window.alert(chickenName+' has '+chickenHealth+' health remaining')
		}
	} else if (promptFight.toLowerCase() === 'skip') {
		//confirm skip
		var confirmSkip = window.confirm('You sure you want to quit?');
		//if confirmed to leave
		if(confirmSkip) {
			window.alert(chickenName+' has chosen to skip the fight. (You literally just "Chickened Out")');
			chickenMoney = chickenMoney - 2;
		}
		else {
			fight();
		}		
	} else {
		window.alert('You had one job. Type the word "Fight" or "Skip". Try again');
	}

};

fight();