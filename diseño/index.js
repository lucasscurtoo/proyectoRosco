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
//funcion que checkea si la respuesta del usuario esta bien
function checkAnswer(position){
    let userAnswer = document.getElementById("answer").value.toLowerCase();
    if (userAnswer == words[position].word.toLowerCase()) {
			words[position].correct = true;
			//aca le agregamos item--success a la class para que cambie su estilo
			const itemSuccess = document.querySelectorAll(".circle .item")[position];
			itemSuccess.classList.add("item--success")
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
			console.log(w)
}
function sendPasapalabra() {
	pasapalabra(count);
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
function play() {
	if (count != 25) {
		let userAnswer = document.getElementById("answer").value = ("")
		showText(count);
	} else {
		endGame() //como en avengers
	}
}
console.log(showText(count))
function register() {
 	const signIn =  document.getElementsByClassName("sign-in")[0]
	 signIn.classList.add("hidden")
	 const signUp = document.getElementsByClassName("sign-up")[0]
	 signUp.classList.remove("hidden")
	 console.log(signIn)
}

//popover boostrap
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
