let timer = document.getElementsByClassName("timer") [0];
let quizContainer = document.getElementById(".container");
let nextButton = document.getElementById("next-button");
let numOfQuestions = document.getElementsByClassName("number-of-questions") [0];
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector("start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 10;
let countdown;
//for hex codes
let letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//Questions and options Array
let quizArray = [];

const generateRandomValue = (array) => array[Math.floor (Math.random() * array.length)];

//Generate Hex Codes

const colorGenrator = () => {
    newColor = '#';
    for (let i = 0; i < 6; i++) {newColor += generateRandomValue(letters)
    }
return newColor;
};

//Create Options
const populateOptions = (optionsArray) => {
    let expectedLength = 4;
    while (optionsArray.length < expectedLength) {
        let color = colorGenrator();
        if (!optionsArray.includes(color)){
            optionsArray.push(color)
        }
    }
};