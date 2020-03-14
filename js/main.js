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
const question_template = document.getElementById('question-template');
const end_template = document.getElementById('question-template');


/*################################################################
    This is the main quiz function
################################################################*/
let quiz = {
    // Draw function will initiliaze the quiz
    draw: function () {
        if (typeof questions != 'undefined') { // checking if questions are loaded from data.js
            quiz_questions = quiz.parse_questions (questions);
            // console.log(quiz_questions); // used to check if questions are loaded and sorted properly
            /*------------------------------------------
            Now we go through questions array and make each question into it's html element
            every action has a separate function to deal with it
            --------------------------------------------*/
            for (let qst = 0; qst < quiz_questions.length; qst++) {
                const question_data = quiz_questions[qst];
                const question_html = quiz.make_question_object (question_data, qst);
                document.getElementById('quiz-wrapper').appendChild (question_html);

            }
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
    make_question_object: function(question, q_num) {
        let question_object = document.createElement('div');
        question_object.classList = question_template.classList;
        question_object.innerHTML = question_template.innerHTML;
        question_object.classList.remove('invisible');
        question_object.classList.add('question_wrapper');
        question_object.setAttribute('id', 'question-'+q_num);
        const question_headline = document.createTextNode (question.question);
        question_object.getElementsByClassName('question-headline')[0].appendChild(question_headline);
        if (question.background) question_object.getElementsByClassName('question-background')[0].setAttribute('style', 'background-image:url('+question.background+')');
        let option_list = document.createElement ('ul');
        option_list.classList.add('question_options');
        for (let n = 0; n < question.options.length; n++) {
            const single_option_data = question.options[n];
            let single_option = document.createElement ('li');
            single_option.classList.add('single_question_option');
            let option_text = document.createTextNode (single_option_data);
            single_option.appendChild(option_text);
            single_option.onclick = quiz.choose_answer (event, question, question.answer[n]);
            //single_option.setAttribute('value', question.answers[n]);
            option_list.appendChild(single_option);
        }
        question_object.appendChild (option_list);
        return question_object;
    },
    choose_answer = function (event, question, answer_value) {
        
    }
}
/*###############################################################*/


window.addEventListener("load", quiz.draw);