//DOM variables
const nameInput = document.querySelector("#name");
const questionInput = document.querySelector("#question");
const runButton = document.querySelector(".btn");
const greetingText = document.querySelector("#greeting");
const answerText = document.querySelector("#answer");
const answerTextContent = answerText.textContent;

//Functions section

//Randomizes and returns an answer from 10 options

function generateAnswer() {

    //Generates a random number between 1 and 10

    function generateRandomNumber() {
        return Math.floor(Math.random() * 10 + 1);
    }

    const randomNumber = generateRandomNumber();

    switch (randomNumber) {
        case 1:
            return "The stars say yes, go for it!";
        case 2:
            return "Trust your instincts and take the leap";
        case 3:
            return "Hmm, better try again later.";
        case 4:
            return "Consider all options before making a move.";
        case 5:
            return "Outlook is bright, proceed with confidence.";
        case 6:
            return "Seek advice from a trusted friend before deciding.";
        case 7:
            return "Signs point to unexpected opportunities.";
        case 8:
            return "It's a toss-up, make a choice and see what happens.";
        case 9:
            return "Take a step back and reassess before moving forward.";
        case 10:
            return "Not the right time, patience will bring better results.";
    }
}

//Returns an answer and greet

function getAnswer() {
    if (nameInput.value === "") {
        return `Hello! ${generateAnswer()}`;
    }
    else {
        return `Hello ${nameInput.value}! ${generateAnswer()}`;
    }
}

//Checks that user has provided content in input fields

function checkQuestionInputField() {
    if (questionInput.value === "") {
        answerText.textContent = "Please enter a question";
    }
    else if (questionInput.value !== "") {
        answerText.textContent = getAnswer();
    }
}

function resetAnswerText() {
    answerText.textContent = "";
}

// Event listeners

runButton.addEventListener("click", () => {
    checkQuestionInputField();
});
