'use strict';
/*global triviaAPI*/
class question{
    constructor(){
        this.text='';
        this.answers=[];
        this.correctAnswer='';
        this.userAnswer;
        this.questionNumber=0;
    }
    questiontext(questionSet){
        this.text=questionSet[this.questionNumber];
        // questionSet.questions.pop();
        console.log(questionSet[0]);
    }
    correctAnswerChoice(questionSet){
        this.correctAnswer=correct[this.questionNumber];
        this.questionNumber++;
    }
};
const test = new trivaAPI();
test.newUrl();
console.log(test.questions);
const test2=new question();
test2.questiontext(test.questions);
console.log(test2.questionNumber);
console.log(test2.text);

