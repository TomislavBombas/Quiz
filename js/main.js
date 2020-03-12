/*
This is a basic quiz template JS.
Author: Dejan Krivokapic https://github.com/TomislavBombas
version 0.01
*/


let quiz_questions; // declaring variable to be used as container for quiz questions

// Here you can set the options for the quiz. Each step is explained with its options
const quiz_options = {
    quiz_type: "single", //single => single correct answer; multiple => quiz is actualy a survey, will check which answer is the most freequent at the end
    quiz_steps: "double", //single => click on answer proceeds to next question; double => after choosing answe you have to click on button to go to next question. You can change your answer like this
    quiz_flow: "dual", //forward => only gies in one direction You can't redoo questions; dual => adds button to go back and redo questions
    quiz_question_background: true, // true or false => each question has separate background
    quiz_loader: true //true or false => wait until questions are loaded, this is in case of loading over network...
}



/*################################################################
    This is the main quiz function
################################################################*/
let quiz = {
    // Draw function will initiliaze the quiz
    draw: function () {
        if (typeof questions != 'undefined') { // checking if questions are loaded from data.js
            quiz_questions = quiz.parse_questions (questions);
            console.log(quiz_questions);
        } else {
            console.log('questions can\'t be loaded, please check.')
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
            if (quiz_options.quiz_question_background) single_question.background = questions[i].b;
            questions_array.push(single_question);
        }
        return questions_array;
    },
    // This makes an object for single question
    make_question_object: function(question) {

    },
}
/*###############################################################*/


window.addEventListener("load", quiz.draw);