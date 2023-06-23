const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availbileQuestions = [];

let questions = [];

//using Fetch API to get questions from Open Trivia DB
fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
    .then(res => { //using then since fetch is a promise
        //get the body from http response and convert it to json
        return res.json();
    })
    .then(loadedQuestions => {
        console.log(loadedQuestions.results);
        //format q's from OpenTrivia to match ours
        questions = loadedQuestions.results.map(loadedQuestions => {
            const formattedQuestion = {
                question: loadedQuestions.question
            };

            const answerChoices = [...loadedQuestions.incorrect_answers];
            //random index between 0 and 3 for answer
            formattedQuestion.answer = Math.floor(Math.random()*3)+1;
            answerChoices.splice(formattedQuestion.answer-1, 0, loadedQuestions.correct_answer);
            //iterate through answers
            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index+1)] = choice;
            })

            return formattedQuestion;
        })
        startGame();
    })
    .catch(error => { 
        //error catching, usually do something with this
        console.log(error);
    });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => { //function shorthand
    questionCounter = 0;
    score = 0;
    //spread operator ..., copies all content of one array to another
    availbileQuestions = [...questions];
    //console.log(availbileQuestions);
    getNewQuestion();
    //show loader before questions show
    game.classList.remove('hidden');
    loader.classList.add('hidden');
}

getNewQuestion = () => {
    //check if there are questions left
    if(availbileQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        //hold player score in localStorage for use in end screen
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign("end.html");
    }
    questionCounter++;
    //update question number on HUD
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`; //` not '
    
    //update the progress bar, and change to %
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`;

    const questionIndex = Math.floor(Math.random()*availbileQuestions.length);
    currentQuestion = availbileQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    //set the choices for each question
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]
    })
    //remove the question shown from the array
    availbileQuestions.splice(questionIndex, 1);
    //allow user to answer
    acceptingAnswers = true;
}

//get which choice is being clicked
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        //console.log(e.target);
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        //show which answers are right/wrong, shorthand if
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        //console.log(classToApply); //check

        //update score on HUD
        if(classToApply === 'correct'){
            incrementScore(CORRECT_BONUS);
        }

        //using 1 second delay
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
        //getNewQuestion();
    })
})

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
}