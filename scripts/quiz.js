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
  questiontext(questionSet){
    this.unasked.push(questionSet);
    // questionSet.questions.pop();

  }
  askedQuestions(questionSet){
    this.unasked.pop();
    this.asked.push(questionSet);
  }
  toggleActive(){
    this.active = !this.active;
  }
    
}
const test = new trivaAPI;
test.newUrl().then(()=>{
  const test3=new quiz();
  test3.questiontext(test.questions);
  test3.askedQuestions(test.questions);
  console.log(test3.unasked);
  console.log(test3.asked);


//   test2.questiontext(test.questions);
//   test2.correctAnswerChoice(test.correctAnswers);
//   test2.answerText(test.incorrectAnswers);
//   test2.shuffle();
//   console.log(test2.correctAnswer);
//   console.log(test2.answers);
  

});