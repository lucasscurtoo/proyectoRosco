const userNick = 'lucas';
const userPass = '12345'
let count = 0;
let remainingWords = 25;
let timer = 150;
let correctWords = 0;
let pascount = 0;
let words= [];

const  randomNumber = ()=> (
	Math.floor(Math.random()  * 4 )
);

const getCategorias = ()=>{
	   switch (randomNumber()) {
	   case 0:
		  return 'economia'
	   case 1:
	      return 'ciencias'
		case 2:
		  return  'desarrollo'
		case 3:
		  return 'tecnicas'
   }
}

const getPalabras = async(random)=>{
    const response = await fetch(`http://localhost:9000/palabras?categoria=${random}`);
	words = await response.json();
}
getPalabras(getCategorias());

function checkUser() {
	const inputUserNick = document.getElementById("nickname").value;
	const inputUserPass = document.getElementById("pass").value;
	if (inputUserNick == userNick && inputUserPass == userPass) {
		window.location.href = "design/index.html";
	}
}

function startGame() {
	const hidePreGame = document.getElementsByClassName("pregame")[0]
	hidePreGame.classList.add("hidden")
	const showGame = document.getElementsByClassName("game-container")[0]
	showGame.classList.remove("hidden");
	countdown()
	hint()
	play()
}
function signUpUser() {
	const inputUserNick = document.getElementById("nameRegis").value;
	const inputLastName = document.getElementById("lastName").value;
	const inputCi = document.getElementById("CI").value;
	const inputMail = document.getElementById("mail").value;
	const inputPass = document.getElementById("setPass").value;
	const inputConfirmPass = document.getElementById("confirmPass").value;
	if (inputUserNick && inputLastName && inputCi && inputMail && inputPass && inputConfirmPass) {
		if (inputPass === inputConfirmPass) {
			window.location.href = "design/index.html";
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
//juego 

function hint() {
	const coso = words.map((item) => item?.hint)
	for (let i = 0; i <= words.length; i++) {
		if (coso[count]==true) {
			words[count].hint = 'empieza por:'+words[count].letter
		}if (coso[count]==false) {
			words[count].hint = 'contiene:'+words[count].letter
		}
	}
	
}
function counter() {
	count = words[pascount].idNumber
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
			words[count].pasapalabra = false;
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
			words[count].pasapalabra = false;
		} else {
			const itemFailure = document.querySelectorAll(".circle .item")[count];
			itemFailure.classList.add("item--failure")
		}
	}
	remainingWords--;
	 count++;
	 pascount++;
}
function pasapalabra() {
	var w = words[count];
	words.push(w);
	words[count].pasapalabra = true;
	const itemPasapalabra = document.querySelectorAll(".circle .item")[count];
	itemPasapalabra.classList.add("item--pasapalabra");
	count++;
	pascount++;
}

function sendPasapalabra() {
	pasapalabra();
	counter()
	play()
}

function sendAnswer() {
	checkAnswer()
	play()
	counter()
	play()
}

async function showText() {
	const hintHtml = await document.querySelector(".hint")
	hintHtml.innerHTML = (`<h1>${words[count].hint}</h1>`);
	const definitionHtml = document.querySelector(".definition")
	definitionHtml.innerHTML = (`<p>${words[count].definition}</p>`);
}
let pas;
let indexof;
function verifyPasapalabra() {
	 pas = words.map((e)=> e?.pasapalabra);
	 indexof = pas.indexOf(true);
}

function play() {
	verifyPasapalabra()
	if (remainingWords != 0) {
		let userAnswer = document.getElementById("answer").value = ("")
		hint()
		showText();
	}else{
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
		endGame()
		clearTimeout(timeout)
	}
}

function playAgain() {
	location.reload()
}


//popover boostrap
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl)
})

