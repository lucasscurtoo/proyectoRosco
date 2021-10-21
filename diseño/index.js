const userNick = 'lucas';
const userPass = '12345'
function checkUser() {
	const inputUserNick = document.getElementById("nickname").value;
	const inputUserPass = document.getElementById("pass").value;
	if (inputUserNick == userNick && inputUserPass == userPass) {
		const passingToGame = document.getElementsByClassName("login")[0]
		passingToGame.classList.add("hidden");
		const showRosco = document.getElementsByClassName("circle-container")[0]
		showRosco.classList.remove("hidden");
		const showPreGame = document.getElementsByClassName("pregame")[0]
		showPreGame.classList.remove("hidden");
	}
}
function startGame() {
	const hidePreGame = document.getElementsByClassName("pregame")[0]
	hidePreGame.classList.add("hidden")
	const showGame = document.getElementsByClassName("game-container")[0]
	showGame.classList.remove("hidden");
	countdown()
}
function register() {
	const signIn =  document.getElementsByClassName("sign-in")[0]
	signIn.classList.add("hidden")
	const signUp = document.getElementsByClassName("sign-up")[0]
	signUp.classList.remove("hidden")
   
}
function login() {
   const signIn =  document.getElementsByClassName("sign-in")[0]
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
function Word(idNumber, letter, hint, definition, word, correct) {
	this.idNumber = idNumber;
	this.letter = letter;
	this.hint = hint;
	this.definition = definition;
	this.word = word;
	this.correct = null;
}
count = 0;
let remainingWords = 25;
let correctWords = 0;
//funcion que checkea si la respuesta del usuario esta bien
function checkAnswer(position){
    let userAnswer = document.getElementById("answer").value.toLowerCase();
    if (userAnswer == words[position].word.toLowerCase()) {
			words[position].correct = true;
			//aca le agregamos item--success a la class para que cambie su estilo
			const itemSuccess = document.querySelectorAll(".circle .item")[position];
			itemSuccess.classList.add("item--success");
			correctWords ++;
    }else{
		words[position].correct = false;
		//aca le agregamos item--failure a la class para que cambie su estilo
		const itemFailure = document.querySelectorAll(".circle .item")[position];
			itemFailure.classList.add("item--failure")
	}
	remainingWords --;
	return count++;
}

function pasapalabra(position) {
	var w = words.splice(position, 1)[0];
	words.push(w);
	const itemPasapalabra = document.querySelectorAll(".circle .item")[position];
			itemPasapalabra.classList.add("item--pasapalabra");
}

function sendPasapalabra() {
	pasapalabra(count);
	play()
}
function sendAnswer() {
	checkAnswer(count)
	play()
}
function showText(position) {
	const hintHtml = document.querySelector(".hint")
	hintHtml.innerHTML = (`<h1>${words[position].hint}</h1>`);
	const definitionHtml = document.querySelector(".definition")
	definitionHtml.innerHTML = (`<p>${words[position].definition}</p>`);
}
showText(count)
function play() {
	if (count != 25) {
		let userAnswer = document.getElementById("answer").value = ("")
		showText(count);
	} else {
		endGame() //como en avengers
	}
	
}
function endGame() {

}
let timer = 150;
let temp;

function countdown() {
	const timerHTML = document.querySelector('.countdown');
	 timerHTML.innerHTML = (`<p>Tiempo: ${timer}s</p>`)
	 if (timer == 0) {
		 console.log('termine pa')
		 endGame()
	 }
	timer --;
	console.log(timer)
	timeout = setTimeout(countdown, 1000)
	
}


//popover boostrap
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
