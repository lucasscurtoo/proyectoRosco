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
// showDefinition((position) =>{	
// })
//funcion que checkea si la respuesta del usuario esta bien
function checkAnswer(position){
    let userAnswer = document.getElementById("answer").value;
    if (userAnswer == words[position].word) {
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
	return count++;
}
function pasapalabra(position) {
	var w = words.splice(position, 1)[position];
	words.push(w);
	const itemPasapalabra = document.querySelectorAll(".circle .item")[position];
			itemPasapalabra.classList.add("item--pasapalabra");
			console.log(w)
			return count++;
}
function sendPasapalabra() {
	pasapalabra(count);
}
function sendAnswer() {
	checkAnswer(count)
	console.log(words[0].correct)
}


console.log(words[count].hint)