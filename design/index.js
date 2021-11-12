const userNick = 'lucas';
const userPass = '12345'
let count = 0;
let remainingWords = 25;
let timer = 150;
let correctWords = 0;
let pascount = 0;


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
//game

var words = [
	new Word(0, "A", "Empieza por A:", "lugar en memoria donde se guarda la informacion", "almacenamiento"),
	new Word(1, "B", "Contiene B:", "rango de direcciones ip lógicas de una misma red", "subredes"),
	new Word(2, "C", "Empieza por C:", "interfaz en blanco y negro que se usa para ver informacion", "consola"),
	new Word(3, "D", "Empieza por D", "sistema operativo basado en linux", "debian"),
	new Word(4, "E", "Empieza por E", "cable que usamos para conectar el router a la computadora", "ethernet"),
	new Word(5, "F", "Empieza por F", "sistema que prevé ataques de red en nuestro equipo", "firewall"),
	new Word(6, "G", "Contiene G", "parte... de una computadora", "logica"),
	new Word(7, "H", "Empieza por H", "partes fisicas de una computador", "hardware"),
	new Word(8, "I", "Empieza por I", "siglas de internet de las cosas en inglés", "iot"),
	new Word(9, "J", "Contiene J", "hay que … comandos en las terminales", "ejecutar"),
	new Word(10, "L", "Empieza por L", "comando para ver el contenido de la carpeta en el que estamos parados", "ls"),
	new Word(11, "M", "Empieza por M", "distribucion de linux que es conocido por ser elegante y moderno", "mint"),
	new Word(12, "N", "Contiene N", "sistema operativo que se puede usar como base para crear otros sitemas operativos", "linux"),
	new Word(13, "Ñ", "Contiene Ñ", "la memoria l1 del cache es la mas... de todas", "pequeña"),
	new Word(14, "O", "Empieza por O", "modelo de capa …. es el modelo de referencia de las capas de red", "osi"),
	new Word(15, "P", "Empieza por P", "es la unidad central de procesamiento de datos", "procesador"),
	new Word(16, "Q", "Contiene Q", "...de red, es el conjunto de informacion que se manda por las redes", "paquete"),
	new Word(17, "R", "Contiene R", "comando para crear carpetas en linux/ macOS", "mkdir"),
	new Word(18, "S", "Empieza por S", " ...usuario, el administrador del sistema en bash", "super"),
	new Word(19, "T", "Empieza por T", "capa de ..., es el 4to nivel del modelo OSI", "transporte"),
	new Word(20, "U", "Contiene U", "...de programacion", "lenguaje"),
	new Word(21, "V", "Empieza por V", "...programa que se usa para hacer máquinas virtuales", "virtualbox"),
	new Word(22, "X", "Contiene X", "tipo de circuito logico que sirve para combinar muchas entradas en una salida", "multiplexor"),
	new Word(23, "Y", "Contiene Y", "8 bits componen un...", "byte"),
	new Word(24, "Z", "Contiene Z", "...de usuario, es lo que ve el usuario y con lo que interactua", "interfaz"),
	
];
function Word(idNumber, letter, hint, definition, word, pasapalabra, correct) {
	this.idNumber = idNumber;
	this.letter = letter;
	this.hint = hint;
	this.definition = definition;
	this.word = word;
	this.pasapalabra = pasapalabra;
	this.correct = null;
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

function showText() {
	const hintHtml = document.querySelector(".hint")
	hintHtml.innerHTML = (`<h1>${words[count].hint}</h1>`);
	const definitionHtml = document.querySelector(".definition")
	definitionHtml.innerHTML = (`<p>${words[count].definition}</p>`);
}
let pas;
let indexof;
function verifyPasapalabra() {
	 pas = words.map((e)=> e.pasapalabra);
	 indexof = pas.indexOf(true);
}

function play() {
	verifyPasapalabra()
	if (remainingWords != 0) {
		let userAnswer = document.getElementById("answer").value = ("")
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