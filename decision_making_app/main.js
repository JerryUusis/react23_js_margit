//Functions section

//Generates a random number between 1 and number

function randomNumber(number) {
    return Math.floor(Math.random() * number + 1);
}

//Randomizes an option from 1-10

function getAnswer(number) {
    switch (number) {
        case 1:
            console.log("The stars say yes, go for it!");
            break;
        case 2:
            console.log("Trust your instincts and take the leap");
            break;
        case 3:
            console.log("Hmm, better try again later.");
            break;
        case 4:
            console.log("Consider all options before making a move.");
            break;
        case 5:
            console.log("Outlook is bright, proceed with confidence.");
            break;
        case 6:
            console.log("Seek advice from a trusted friend before deciding.");
            break;
        case 7:
            console.log("Signs point to unexpected opportunities.");
            break;
        case 8:
            console.log("It's a toss-up, make a choice and see what happens.");
            break;
        case 9:
            console.log("Take a step back and reassess before moving forward.");
            break;
        case 10:
            console.log("Not the right time, patience will bring better results.");
            break;
    }
}

// DOM variables

const runButton = document.querySelector(".btn");

// Event listeners

runButton.addEventListener("click", () => {

}
)