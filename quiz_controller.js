function Quiz(questions){
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

//get index of current question

Quiz.prototype.getQuestionIdex = function() {
	return this.questions[this.questionIndex];
}

// function is quiz ended

Quiz.prototype.isEnded = function(){
	return this.questions.length === this.questionIndex;
}

// function to check answer is correct

Quiz.prototype.guess = function(answer){
	this.questionIndex++;

	if(this.getQuestionIdex().correctAnswer(answer)){
		this.score++;
	}

}

