function isBigger(a,b){
	alert(a>b);
}

function isSmaller(a,b){
	alert(a<b);
}

function getMin(){
	var min = arguments[0];
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i]<min) {
			min=arguments[i];
		}
	}
	alert(min);
}

function isPrime(number) {

	if (number < 2) {
		alert(false);
	}

	if (number === 2) {
		alert(true);
	} else if (number % 2 === 0) {
		alert(false);
	}

	for (var i = 3; i*i <= number; i += 2) {
		if (number % i === 0) {
			alert(false);
		}
	}
	alert(true);
}

function getClosestToZero() {
	var min = arguments[0];
	for (var i = 0; i < arguments.length; i++) {
		if (Math.abs(arguments[i])<Math.abs(min)) {
			min=arguments[i];
		}
	}
	alert(min);
}

function game(){
	function gameStart(){
		endOfInterval = 5*Math.pow(2,circleOfGame);;
		randomNumber = Math.floor(Math.random() * (endOfInterval - 0 + 1)) + 0;
		console.log(`Interval: [0..${endOfInterval}]`);
		console.log('randomNumber: '+randomNumber);
	}
	var randomNumber = 0;
	var userNumber = 0;
	var endOfInterval = 5;
	var prize = 0;
	var endOfGame=false;
	var circleOfGame = 0;
	while(!endOfGame){
		switch (confirm("Чи бажаєте почати гру?")) {
			case true:
			gameStart();
			for (var i = 1; i <= 4; i++) {
				if(i!==4){
					userNumber = prompt(`Спроба ${i}. Введіть число`,'0')
				}
				switch (i) {
					//перша спроба
					case 1:
					if(+userNumber === +randomNumber) {
						prize+=10*Math.pow(3,circleOfGame);
						if (confirm(`Перша спроба: Ваш виграш ${prize}USD. Продовжимо?`)){
							console.log('перша спроба')
							i=4;
							break;
						} else {
							alert(`Дякуємо за гру. Ваш виграш ${prize} USD`)
							console.log('вихід з гри');
							return;
						};

					} else {
						console.log('перша спроба');
						console.log(`Current win ${prize}`);
						break;
					}
					//друга спроба
					case 2:
					if(+userNumber === +randomNumber) {
						prize+=5*Math.pow(3,circleOfGame);
						if (confirm(`Друга спроба: Ваш виграш ${prize}USD. Продовжимо?`)){
							console.log('друга спроба');
							i=4;
							break;
						} else {
							alert(`Дякуємо за гру. Ваш виграш ${prize} USD`)
							console.log('вихід з гри');
							return;
						};

					} else {
						console.log('друга спроба');
						console.log(`Current win ${prize}`);
						break;
					}
					//третя спроба
					case 3:
					if(+userNumber === +randomNumber) {
						prize+=2*Math.pow(3,circleOfGame);
						if (confirm(`Третя спроба: Ваш виграш ${prize}USD. Продовжимо?`)){
							console.log('третя спроба')
							console.log(`Current win ${prize}`);
							break;
						} else {
							alert(`Дякуємо за гру. Ваш виграш ${prize} USD`)
							console.log('вихід з гри');
							return;
						};

					} else {
						console.log('третя спроба');
						console.log(`Current win ${prize}`);
						break;
					}
					case 4:
					if (confirm(`Кінець спроб. Продовжимо?`)){
						console.log(`Current win ${prize}`);
						endOfInterval*=2;
						break;
					} else {
						alert(`Дякуємо за гру. Ваш виграш ${prize} USD`);
						endOfGame=true;
						console.log('вихід з гри');
						prize=0;
						return;
					};
					default:
					alert( 'Я таких значений не знаю' );
				}
			}
			break;
			case false:
			if (prize>0){
				alert(`Дякуємо за гру. Ваш виграш ${prize} USD`);
			} else {
				alert( 'Сьогодні ви не виграли мільйон, а могли б!' );
				endOfGame=true;
				console.log('вихід з гри');
				prize=0;
				break;
			}
		}
		circleOfGame++;  	
	}
}