//Task - Decision making app

//Define a variable named `userName` and set its value to an empty string
//Make condition which checks the value of userName and return "Hello ${userName}"
//If there is name and it returns just "Hello" when it is empty string
//Create a variable userQuestion and assign a string which represent question user ask
//Log username and question in console

//Generate a random number from 1-10 and store that value in variable randomNumber (1-10)
//Log in the console the answer to the question

let userName, question;

function getUserName() {
  userName = prompt("Please enter a name");
}

function getQuestion() {
  question = prompt("Please enter a question");
  console.log(question);
}

function userNameCheck (name) {
  if (name === "") {
    getUserName();
  }
  else {
    alert(`Hello ${userName}`);
  }
  console.log(userName);
}

function randomNumber(number) {
  return Math.floor((Math.random() * number) + 1);
}

function getAnswer (number) {
  switch(number) {
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

getUserName(); 
userNameCheck(userName);
getQuestion();
getAnswer(randomNumber(10));