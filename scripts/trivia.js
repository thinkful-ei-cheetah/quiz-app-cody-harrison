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
        data.results.forEach(q=>{
          this.questions.push(q.question);
          this.correctAnswers.push(q.correct_answer);
          this.incorrectAnswers.push(q.incorrect_answers);
        })
        
      });
  }
}
let test = new trivaAPI();
test.newUrl();
console.log(test.questions);
console.log(test.correctAnswers);
console.log(test.incorrectAnswers);
// trivaAPI.url ='https://opentdb.com/api.php?amount=10';