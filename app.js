function populate(){
// first check if quiz is ended

	if(quiz.isEnded()){
		//showScores
		showScores();

	}
	else {
		//populate quiz
		 var element = document.getElementById("question");
		 element.innerHTML = quiz.getQuestionIdex().text;

		 // populate optons
		 var choices = quiz.getQuestionIdex().choices;

		 for (var i = 0; i < choices.length; i++){

		 	var element = document.getElementById("choices" + i);
		 	element.innerHTML = choices[i];
		 	guess("btn" + i, choices[i]); 

		 }
	}	
};

function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
}


function showScores(){
	var gameOverHtml = "<h1> Result</h1>";
	gameOverHtml += "<h2 id ='score'> Your score" + quiz.score + "</h2";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;

}



var questions = [
	new Question("What's my name?", ["Adia", "Dia", "Dee", "Queen"], "Adia"),
	new Question("What's my age?", ["35", "34", "24", "12"], "34"),
	new Question("What's my height?", ["5 feet", "2 feet", "7 feet", "4 feet"], "5 feet"),
	new Question("What's my weight?", ["123", "134", "144", "146"], "144")
];

// Object for the quiz controller

var quiz = new Quiz(questions);

populate();