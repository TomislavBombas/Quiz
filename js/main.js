/*
This is a basic quiz template JS.
Author: Dejan Krivokapic https://github.com/TomislavBombas
version 0.01
*/
// Questions should be loaded before this file. Check is below

let quiz_questions; // declaring variable to be used as container for quiz questions

let quiz = {
    // Draw function will initiliaze the quiz
    draw: function () {
        if (typeof questions != 'undefined') { // checking if questions are loaded form data.js
            quiz_questions = quiz.parse_questions (questions);
            console.log(quiz_questions);
        } else {
            console.log('nece da bidne, nisem icitaa pitanja')
            return false; // if questions are not loaded this will end function
        }
    },
    parse_questions: function (questions) {
        let questions_array = new Array();
        for (let i = 0; i < questions.length; i++) {
            single_question = new Array();
            single_question.question = questions[i].q;
            single_question.options = questions[i].o;
            single_question.answers = questions[i].a;
            questions_array.push(single_question);
        }
        return questions_array;
    },
    // This makes an object for single question
    make_question_object: function(question) {

    },

}



window.addEventListener("load", quiz.draw);