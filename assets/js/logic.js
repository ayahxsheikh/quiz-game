// Create Variables for DOM Elements
let timer = document.querySelector('#timer');
let startSc = document.querySelector('#start-screen');
let startBtn = document.querySelector('#start');
let endSc = document.querySelector('#end-screen');
let questionSc = document.querySelector('#question-screen');
let questionTitle =  document.querySelector('#question-title');
let choicesWrapper = document.querySelector('#choices')


// add time for countdouwn
let timeLeft = 45;

// start quiz
startBtn.addEventListener('click', function(){
    startQuiz()
    startCountdown();
    startSc.classList.add('hide');
    questionSc.classList.remove('hide');
})

// create an index and add it to questionrArr to track current q
let questionIndex = 0
let currentQuestionObj = questionArr[questionIndex];

function startQuiz(){
    let choices = currentQuestionObj.choices;
    
    // displays question title in h2
    questionTitle.innerText = currentQuestionObj.title;

    // clear the whole area before prinitng choices
    choicesWrapper.innerHTML = '';

    for(let i = 0; i < choices.length; i++){
        let choice = choices[i];

        // create variable to check correct answer against choice
        let isCorrect = currentQuestionObj.answer === choice;

        // add correct answer variable to choices custom data-attribute
        // target the choicesDiv and create buttons for each choice

        choicesWrapper.insertAdjacentHTML('beforeend',`
        <button data-correct=${isCorrect}>${choice}</button>
        `)
    }
    // add event listener to choices wrapper - event bubbling
    choicesWrapper.addEventListener('click', checkAnswer)

    // increase the index to get the next question
    questionIndex++;
    currentQuestionObj = questionArr[questionIndex]

    return currentQuestionObj;
}

// checks if the button clicked is correct
function checkAnswer(event){
    // console.log(event)

    if(event.target.dataset.correct === "true"){
        console.log('correct')
        nextQuestion();

    // Add an if statement that decreases the timer by 10 secs on incorrect answers
    } else if(event.target.dataset.correct === "false"){
        timeLeft -= 10;
    }

}

// function for next question
function nextQuestion(){
    startQuiz(currentQuestionObj)
}


// Create timer function
function startCountdown(){

// create setInterval Function inside countdown to decrease timeLeft
    let timeInterval = setInterval(function (){
        timer.textContent = timeLeft;
        timeLeft--;

        if(timeLeft <= 0){
            clearTimeout(timeInterval)
            timeLeft = 0;
            endSc.classList.remove('hide');
        // TODO: End quiz when all questions are answered or when timer reaches 0
        } 

    }, 1000);

}

// Store user-name and user-score to localStorage and display it on screen