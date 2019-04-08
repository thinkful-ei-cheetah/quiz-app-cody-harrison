'use strict';
/*global question,trivaAPI */
class quiz {
  constructor(){
    this.unasked= [];
    this.asked = [];
    this.score = 0;
    this.scoreHistory= [];
    this.active = false;
    this.questionNumber= 0;
  }
  startquestions(questionSet){
    this.unasked=questionSet;

  }
  askedQuestions(questionSet){
    this.asked.push(this.unasked[0]);
    this.unasked.pop();
  }
  toggleActive(){
    this.active = !this.active;
  }
    
}
const test = new trivaAPI;
test.newUrl().then(()=>{
  const test2=new question();
  test2.questiontext(test.questions);
  test2.correctAnswerChoice(test.correctAnswers);
  test2.answerText(test.incorrectAnswers);
  const test3=new quiz();
  test3.startquestions(test.questions);
  test3.askedQuestions();
  console.log(test3.unasked);
  console.log(test3.asked);


//   test2.questiontext(test.questions);
//   test2.correctAnswerChoice(test.correctAnswers);
//   test2.answerText(test.incorrectAnswers);
//   test2.shuffle();
//   console.log(test2.correctAnswer);
//   console.log(test2.answers);
  

});