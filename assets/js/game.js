window.alert('Welcome to Chicken Fight Club');	

var healthCost = 7;
var healthAdded = 20;
var attackCost = 7;
var attackAdded = 6;
var skipFee = 2;

var randomNumber = function(min,max) {
	var value = Math.floor(Math.random()*(max-min+1)+min);
	return value;
};

var getPlayerName = function() {
	var name = '';
	while (name===''||name==null) {
		name= prompt('Please state your chicken\'s given name:')
	}

	console.log('Your chicken\'s name is '+name);
	return name;
}

var playerInfo = {
	name: getPlayerName(),
	health: 100,
	attack: 10,
	money: 10,
	reset: function() {
		this.health = 100;
		this.money = 10;
		this.attack = 10;
	},
	refillHealth: function() {
		if(this.money >= healthCost) {	
			window.alert('Premium chicken feed purchased: Health increased 20');	
			this.health += healthAdded;
			this.money -= healthCost;
		}
		else {
		window.alert('You are low on funds. Transaction DENIED');			
		}
	},
	upgradeAttack: function() {
		if(this.money>=attackCost) {
			window.alert('Your talons have been upgraded: Attack increased 6');
			this.attack += attackAdded;
			this.money -= attackCost;
		}
		else {
		window.alert('You are low on funds. Transaction DENIED');			
		}
	}
};

var enemyInfo = [
	{
		name: 'Fog Horn Leg Horn',
		attack: randomNumber(10, 14)
	},
	{
		name: 'Chicken Little',
		attack: randomNumber(10, 14)
	},
	{
		name: 'Colonel Sanders',
		attack: randomNumber(10, 14)
	}
];



var fight = function(enemy,round) {
	var exchange = 0
	while(enemy.health>0 && playerInfo.health > 0) {
		exchange += 1
		if(exchange>1) {exc=' the rest of'} else {exc=''}
		var promptFight = window.prompt('Type "Skip" if you want to pay $'+skipFee+' to skip'+exc+' this round');

		if(promptFight===null) {promptFight='a';}		
		if (promptFight.toLowerCase() === 'skip') {
			//confirm skip
			var confirmSkip = window.confirm('You sure you want to skip this round?');
			//if confirmed to leave
			if(confirmSkip) {
				window.alert(playerInfo.name+' has "Chickened Out" of round '+round);
				playerInfo.money = Math.max(0, playerInfo.money - skipFee);
				console.log('Chicken Coins: '+playerInfo.money);
				break;
			}
		}
		//player attack action 
		var damage = randomNumber(playerInfo.attack - 3,playerInfo.attack);
		enemy.health = Math.max(0, enemy.health - damage);
		console.log('You delivered '+damage+' damage')
		//log result
		console.log(playerInfo.name+' attacked '+ enemy.name+'. '+enemy.name+' now has '+ enemy.health+' health remaining');

		//enemy health check
		if (enemy.health<=0) {
			window.alert(enemy.name+' has flown to the big coop in the sky');
			//spoils
			playerInfo.money = playerInfo.money + 20;
			break;
		} else {
			window.alert('Your opponent '+enemy.name+' has '+enemy.health+' health remaining');
		}

		//opponent attack action
		console.log(playerInfo.health);
		damage = randomNumber(enemy.attack - 3,enemy.attack);
		console.log(damage)
		playerInfo.health = Math.max(0, playerInfo.health - damage);
		console.log('You took '+damage+' damage')
		console.log(enemy.name+' has attacked '+playerInfo.name+'. '+playerInfo.name+' now has '+playerInfo.health+' health remaining');

		//player health check
		if(playerInfo.health <=0) {
			window.alert('Your chicken '+playerInfo.name+' has flown to the big coop in the sky');
			break;
		} else {
			window.alert(playerInfo.name+' has '+playerInfo.health+' health remaining')
		}	
	}
};

var startGame = function () {
	playerInfo.reset();
	for(var i = 0; i < enemyInfo.length; i++) {
		var round = i+1
		if (playerInfo.health>0) {
			window.alert('Get ready to fight. Round '+round);
			var pickedEnemyObj = enemyInfo[i];
			pickedEnemyObj.health = randomNumber(40,60);
			console.log('enemy start health: '+pickedEnemyObj.health)
			// debugger;
			fight(pickedEnemyObj,round);
			if (playerInfo.health > 0 && i < enemyInfo.length -1) {
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
	if(playerInfo.health>0) {
		window.alert('Great job. You survived the chicken fights. You have a score of '+playerInfo.money);
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
	var shopOptionPrompt = window.prompt('Would you like to REFILL health ($7), UPGRADE attack ($7), or LEAVE? Your balance: $'+playerInfo.money);
	if (shopOptionPrompt===null) {shopOptionPrompt='a';}
	response=shopOptionPrompt.toLowerCase();
	switch(response) {
		case 'refill':
			playerInfo.refillHealth();
			break;
		case 'upgrade':
			playerInfo.upgradeAttack();
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









