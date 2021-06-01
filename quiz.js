
var questions = [
    {
        question: "Q1 MS-Word is an example of _____",
        choices: ['An operating system',' A processing device','An input device','Application software'],
        correctAnswer: 3
    },
    {
        question:  "Q2  Fathometer is used to measure",
        choices: ['Earthquakes', 'Rainfall', 'Ocean depth', 'Sound intensity'],
        correctAnswer: 2
    },
    {
        question: "Q3  The blue colour of the clear sky is due to",    
        choices: [' Dispersion of light', ' Reflection of light', ' Refraction of light', ' Diffraction of light'],
        correctAnswer: 0
    },
    {
        question: "Q4 The working principle of a washing machine is",
        choices: ['diffusion', 'centrifugation', 'dialysis', ' reverse osmosis'],
        correctAnswer: 1
    },
    {
        question: 'Q5 What color does yellow and green make? ',
        choices: ['Ocean mist', 'Lime', 'Maroon', 'Tangerine'],
        correctAnswer: 1
    }
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

window.addEventListener('DOMContentLoaded', function (e) {
    displayCurrentQuestion();

    var quizMessage = document.querySelector('.quizMessage');

    quizMessage.style.display = 'none';

    document.querySelector('#submit').addEventListener('click', function () {

        if (!quizOver) {
            var radioBtnsChecked = document.querySelector('input[type=radio]:checked');

            if (radioBtnsChecked === null) {
                quizMessage.innerText = 'Please select an answer';
                quizMessage.style.display = 'block';
            } else {
                console.log(radioBtnsChecked.value);
                quizMessage.style.display = 'none';
                if (parseInt(radioBtnsChecked.value) === questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;

                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    document.querySelector('#submit').innerText = 'Play Again?';
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            document.querySelector('#submit').innerText = 'submit';
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion() {
    console.log('In display current Questions');

    var question = questions[currentQuestion].question;
    var questionClass = document.querySelector('.quizContainer > .question');
    var choiceList = document.querySelector('.quizContainer > .choiceList');
    var numChoices = questions[currentQuestion].choices.length;

    //Set the questionClass text to the current question
    questionClass.innerText = question;

    //Remove all current <li> elements (if any)
    choiceList.innerHTML = '';

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        var li = document.createElement('li');
        li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
        choiceList.appendChild(li);

    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    document.querySelector('.quizContainer > .result').innerText = 'You scored: ' + correctAnswers + ' out of ' + questions.length;
    document.querySelector('.quizContainer > .result').style.display = 'block';
}

function hideScore() {
    document.querySelector('.result').style.display = 'none';
}