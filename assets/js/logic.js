// Create Variables for DOM Elements
let timer = document.querySelector('#timer');
let startSc = document.querySelector('#start-screen');
let startBtn = document.querySelector('#start');
let endSc = document.querySelector('#end-screen');
let questionSc = document.querySelector('#question-screen');
let questionTitle =  document.querySelector('#question-title');
let choicesWrapper = document.querySelector('#choices')

// create an index and add it to questionrArr to track current q
let questionIndex = 0
let currentQuestionObj = questionArr[questionIndex];
let choices = currentQuestionObj.choices;

// start quiz
startBtn.addEventListener('click', startQuiz)


function startQuiz(){
    startCountdown();
    startSc.classList.add('hide');
    questionSc.classList.remove('hide');
    
    
    // displays question title in h2
    questionTitle.innerText = currentQuestionObj.title;

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
}

// checks if the button clicked is correct
function checkAnswer(event){
    console.log('clicked')
    // console.log(event)
    if(event.target.dataset.correct === "true"){
        console.log('correct')
    }

}

// function for next question
// questionIndex++;


// Create timer function
function startCountdown(){
    let timeLeft = 100;

// create setInterval Function inside countdown to decrease timeLeft
    let timeInterval = setInterval(function (){
        timer.textContent = timeLeft;
        timeLeft--;

        if(timeLeft <= 0){
            clearTimeout(timeInterval)
            endSc.removeAttribute('class');
        // TODO: End quiz when all questions are answered or when timer reaches 0
        } 

    }, 1000);

    return timeLeft;
}



// Add an if statement that decreases the timer by 10 secs on incorrect answers


// Store user-name and user-score to localStorage and display it on screen