window.alert('Welcome to Chicken Fight Club');	
var chickenName = window.prompt('Please state your chicken\'s given name:');
// var chickenName = 'Fred'
var chickenHealth = 1000;
var chickenAttack = 10;
var chickenMoney = 10;

var enemyNameList = ['Fog Horn Leg Horn','Chicken Little','Colonel Sanders']
var enemyHealth = '50';
var enemyAttack = '12';

var fight = function(enemyName) {
	while(enemyHealth>0 && chickenHealth > 0) {

		var promptFight = window.prompt('Would you like to FIGHT or SKIP this round?');

		if (promptFight.toLowerCase() === 'skip') {
			//confirm skip
			var confirmSkip = window.confirm('You sure you want to quit?');
			//if confirmed to leave
			if(confirmSkip) {
				window.alert(chickenName+' has chosen to skip the fight. (You literally just "Chickened Out")');
				chickenMoney = chickenMoney - 10;
				console.log('Chicken Coins: '+chickenMoney);
				break;
			}
		}

		//player attack action 
		enemyHealth = enemyHealth - chickenAttack;
		//log result
		console.log(chickenName+' attacked '+ enemyName+'. '+enemyName+' now has '+ enemyHealth+' health remaining');

		//enemy health check
		if (enemyHealth<=0) {
			window.alert(enemyName+' has flown to the big coop in the sky');
			//prize money
			chickenMoney = chickenMoney + 20;
			break;
		} else {
			window.alert(enemyName+' has '+enemyHealth+' health remaining');
		}

		//opponent attack action
		chickenHealth = chickenHealth - enemyAttack;
		//log result
		console.log(enemyName+' has attacked '+chickenName+'. '+chickenName+' now has '+chickenHealth+' health remaining');

		//player health check
		if(chickenHealth <=0) {
			window.alert('Your chicken '+chickenName+' has flown to the big coop in the sky');
			break;
		} else {
			window.alert(chickenName+' has '+chickenHealth+' health remaining')
		}	
	}
};

for(var i = 0; i < enemyNameList.length; i++) {
	if (chickenHealth>0) {
		window.alert('Welcome to Chicken Fight Club. Round: '+(i+1));
		var pickedEnemyName = enemyNameList[i];
		enemyHealth = 50;
		debugger;
		fight(pickedEnemyName);
	} else {
		window.alert('Health has reached zero. Your chicken has flown the coop. Game over')
	}
}




// fight();