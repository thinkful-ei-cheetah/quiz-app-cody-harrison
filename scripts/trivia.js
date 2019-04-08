'use strict';
class trivaAPI {
  constructor(){
    this.questions = [];
    this.correctAnswers = [];
    this.incorrectAnswers = [];
  }
  newUrl(){
    fetch('https://opentdb.com/api.php?amount=10')
      .then(res => res.json())
      .then(data =>{
        this.questions.push( data.questions);
        this.correctAnswers.push( data.correct_answer);
        this.incorrectAnswers.push( data.incorrect_answers);
      });
  }
}
const test = new trivaAPI;
test.newUrl();
console.log(test.questions);
// trivaAPI.url ='https://opentdb.com/api.php?amount=10';