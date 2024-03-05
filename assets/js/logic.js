// Create Variables for DOM Elements
let timer = document.querySelector('#timer');
let startSc = document.querySelector('#start-screen');
let startBtn = document.querySelector('#start');
let endSc = document.querySelector('#end-screen');


// Add event listner to show questions
startBtn.addEventListener('click', function (event){
    event.preventDefault();
    startSc.setAttribute('class', 'hide');
    countDown();
    showQuestions();
})

// Create timer function
function countDown(){
    let timeLeft = 60;

// create setInterval Function inside countdown to decrease timeLeft
    let timeInterval = setInterval(function (){
        timer.textContent = timeLeft;
        timeLeft--;

        if(timeLeft <= 0){
            clearTimeout(timeInterval)
            endSc.removeAttribute('class');
        // TODO: incorportate end time and display end-screen when all questions are ansered 
        }

    }, 1000);

}

// Create function to loop over questions array and display each question object
// Loop over each question object and display array of choices 
// Create new element button for each choice 
// Append new html to questions div


// Create function for when a button from choices is clicked; next questions appear

// Add an if statement that decreases the timer by 10 secs on incorrect answers

// End quiz when all questions are answered or when timer reaches 0

// Store user-name and user-score to localStorage and display it on screen