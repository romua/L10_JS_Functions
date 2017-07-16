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