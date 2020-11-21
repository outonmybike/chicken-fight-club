window.alert('Welcome to Chicken Fight Club');	
var chickenName = window.prompt('Please state your chicken\'s given name:');
// var chickenName = 'Fred'
var chickenHealth = 100;
var chickenAttack = 10;
var chickenMoney = 10;

var enemyNameList = ['Fog Horn Leg Horn','Chicken Little','Colonel Sanders']
var enemyHealth = '50';
var enemyAttack = '12';

var fight = function(enemyName,round) {
	while(enemyHealth>0 && chickenHealth > 0) {

		var promptFight = window.prompt('Type "Skip" if you want to skip this round?');

		if(promptFight===null) {promptFight='a';}		
		if (promptFight.toLowerCase() === 'skip') {
			//confirm skip
			var confirmSkip = window.confirm('You sure you want to quit this round?');
			//if confirmed to leave
			if(confirmSkip) {
				window.alert(chickenName+' has "Chickened Out" of round '+round);
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
			window.alert('Your opponent '+enemyName+' has '+enemyHealth+' health remaining');
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

var startGame = function () {
	chickenHealth = 100;
	chickenAttack = 10;
	chickenMoney = 10;
	for(var i = 0; i < enemyNameList.length; i++) {
		var round = i+1
		if (chickenHealth>0) {
			window.alert('Get ready to fight. Round '+round);
			var pickedEnemyName = enemyNameList[i];
			enemyHealth = 50;
			// debugger;
			fight(pickedEnemyName,round);
			if (chickenHealth > 0 && i < enemyNameList.length -1) {
				var storeConfirm = window.confirm('You got through that round. Would you like to visit the store?');
				if(storeConfirm) {
					shop();
				}
			}
		} 
		else {
			window.alert('Health has reached zero. Your chicken has flown the coop. Game over');
			break;
		}
	}
	endGame();
};

var endGame = function() {
	window.alert('The game is over. Let\'s see how you did.');
	if(chickenHealth>0) {
		window.alert('Great job. You survived the chicken fights. You have a score of '+chickenMoney);
	}
	else {
		window.alert('Sorry. But your chicken did not make it out alive')
	}
	var playAgainConfirm = window.confirm('Would you like to play agian?');
	if(playAgainConfirm) {
		startGame();		
	}
	else {
		window.alert('Thank you for playing Chicken Fight Club. Enjoy some chicken fingers');
	}

};

var shop = function() {
	var shopOptionPrompt = window.prompt('Would you like to REFILL health ($7), UPGRADE attack ($7), or LEAVE? Your balance: $'+chickenMoney);
	if (shopOptionPrompt===null) {shopOptionPrompt='a';}
	response=shopOptionPrompt.toLowerCase();
	switch(response) {
		case 'refill':
			if(chickenMoney>=7) {
				window.alert('Premium chicken feed purchased: Health increased 20');
				chickenHealth += 20;
				chickenMoney -= 7;
			}
			else {
				window.alert('You are low on funds. Transaction DENIED');
			}
			break;
		case 'upgrade':
			if(chickenMoney>=7) {
				window.alert('Your talons have been upgraded: Attack increased 6');
				chickenAttack += 6;
				chickenMoney -= 7;
			}
			else {
				window.alert('You are low on funds. Transaction DENIED');
			}
			break;
		case 'leave':
			window.alert('Leaving the store.');
			break;
		default:
			window.alert('Please pick a valid option');
			shop();
			break;
	}
};

startGame();









