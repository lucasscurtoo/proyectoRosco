const userNick = 'lucas';
const userPass = '12345'
let count = 0;
let remainingWords = 25;
let timer = 150;
let correctWords = 0;
let palabra;


function checkUser() {
	const inputUserNick = document.getElementById("nickname").value;
	const inputUserPass = document.getElementById("pass").value;
	if (inputUserNick == userNick && inputUserPass == userPass) {
		window.location.href = "file:///Users/lucascurto/Documents/anima/ROSCO/design/index.html";
	}
}

function startGame() {
	const hidePreGame = document.getElementsByClassName("pregame")[0]
	hidePreGame.classList.add("hidden")
	const showGame = document.getElementsByClassName("game-container")[0]
	showGame.classList.remove("hidden");
	countdown()
	play()
}
function signUpUser() {
	const inputUserNick = document.getElementById("nameRegis").value;
	const inputLastName = document.getElementById("lastName").value;
	const inputCi = document.getElementById("CI").value;
	const inputMail = document.getElementById("mail").value;
	const inputPass = document.getElementById("setPass").value;
	const inputConfirmPass = document.getElementById("confirmPass").value;
	console.log(inputLastName)
	if (inputUserNick && inputLastName && inputCi && inputMail && inputPass && inputConfirmPass) {
		if (inputPass === inputConfirmPass) {
			const passingToGame = document.getElementsByClassName("login")[0]
			passingToGame.classList.add("hidden");
			const showRosco = document.getElementsByClassName("circle-container")[0]
			showRosco.classList.remove("hidden");
			const showPreGame = document.getElementsByClassName("pregame")[0]
			showPreGame.classList.remove("hidden");
			console.log("hoooolaaaa")
		}
		else{
			const badPass = document.getElementById("badPass")
			badPass.classList.remove("hidden");
		}
	}else{
		const missingInfo = document.getElementById("missingInfo")
		missingInfo.classList.remove("hidden");
	}
	
}


function register() {
	const signIn = document.getElementsByClassName("sign-in")[0]
	signIn.classList.add("hidden")
	const signUp = document.getElementsByClassName("sign-up")[0]
	signUp.classList.remove("hidden")

}

function login() {
	const signIn = document.getElementsByClassName("sign-in")[0]
	signIn.classList.remove("hidden")
	const signUp = document.getElementsByClassName("sign-up")[0]
	signUp.classList.add("hidden")

}
//game
var words = [
	new Word(0, "A", "Empieza por A:", " Relato breve de un acontecimiento extraño, curioso o divertido, generalmente ocurrido a la persona que lo cuenta.", "Anecdota"),
	new Word(1, "B", "Empieza por B:", " Pasta dulce y esponjosa, hecha con harina, huevos, levadura y otros ingredientes, que puede tener distintas formas", "Bollo"),
	new Word(2, "C", "Empieza por C:", " Corriente de agua que cae desde cierta altura a causa de un brusco desnivel en su cauce, especialmente en un rio", "Cascada")
];

function Word(idNumber, letter, hint, definition, word, correct, pasapalabra) {
	this.idNumber = idNumber;
	this.letter = letter;
	this.hint = hint;
	this.definition = definition;
	this.word = word;
	this.correct = null;
	this.pasapalabra = false;
}
function counter() {
	count = words[count++].idNumber
	console.log(count = words[count++].idNumber)
}

//funcion que checkea si la respuesta del usuario esta bien
function checkAnswer() {
	let userAnswer = document.getElementById("answer").value.toLowerCase();
	if (userAnswer == words[count].word.toLowerCase()) {
		words[count].correct = true;
		//aca le agregamos item--success a la class para que cambie su estilo
		if (words[count].pasapalabra == true) {
			const itemChange = document.querySelectorAll(".circle .item")[count];
			itemChange.classList.replace("item--pasapalabra", "item--success")
		} else {
		const itemSuccess = document.querySelectorAll(".circle .item")[count];
		itemSuccess.classList.add("item--success");
		}
		correctWords ++;
	} else {
		words[count].correct = false;
		//aca le agregamos item--failure a la class para que cambie su estilo
		if (words[count].pasapalabra == true) {
			const itemChange = document.querySelectorAll(".circle .item")[count];
			itemChange.classList.replace("item--pasapalabra", "item--failure")
		} else {
			const itemFailure = document.querySelectorAll(".circle .item")[count];
			itemFailure.classList.add("item--failure")
		}
	}
	remainingWords--;
	 count++;
}
function pasapalabra() {
	var w = words[count];
	words.push(w);
	words[count].pasapalabra = true;
	const itemPasapalabra = document.querySelectorAll(".circle .item")[count];
	itemPasapalabra.classList.add("item--pasapalabra");
	count++;
	console.log(count)
	console.log(words)
}

function sendPasapalabra() {
	pasapalabra();
	play()
	counter()
}

function sendAnswer() {
	checkAnswer()
	play()
	counter()
}

function showText() {
	const hintHtml = document.querySelector(".hint")
	hintHtml.innerHTML = (`<h1>${words[count].hint}</h1>`);
	const definitionHtml = document.querySelector(".definition")
	definitionHtml.innerHTML = (`<p>${words[count].definition}</p>`);
}

function play() {
	if (count != 25) {
		let userAnswer = document.getElementById("answer").value = ("")
		showText();
	} else {
		endGame() //como en avengers
	}
}


function endGame() {
	const hiddeGame = document.getElementsByClassName("game-container")[0]
	hiddeGame.classList.add("hidden");
	const hiddeRosco = document.getElementsByClassName("circle-container")[0]
	hiddeRosco.classList.add("hidden");
	const showEndgame = document.querySelector(".endgame")
	showEndgame.classList.remove("hidden");
	for (let index = 0; index < 3; index++) {
		return showEndgame.innerHTML = (`<h1>Fin del Juego </h1>
		<p>Usted acerto: ${correctWords} palabras</p>
		<button id="playAgain" onclick="playAgain()">Jugar de nuevo</button>`);
	}
}

function countdown() {
	timeout = setTimeout(countdown, 1000)
	const timerHTML = document.querySelector('.countdown');
	timerHTML.innerHTML = (`<p>Tiempo: ${timer}s</p>
	<p>Faltan: ${remainingWords} palabras</p>`)
	timer--;
	if (timer == 0) {
		console.log('termine pa')
		endGame()
		clearTimeout(timeout)
	}
}

function playAgain() {
	location.reload()
}
document.getElementsByClassName("sign-in")[0].addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkUser();
    }
});
document.getElementsByClassName("game-container")[0].addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendAnswer();
    }
});
//popover boostrap
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl)
})