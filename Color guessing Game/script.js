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
    return optionsArray;
};

//Create quiz Object
const populateQuiz = () => {
    for (let i = 0; i < 5; i++) {
        let currentColor = colorGenrator();
        let allColors = [];
        allColors.push(currentColor);
        allColors = populateOptions(allColors);
        quizArray.push({
            id: i,
            correct: currentColor,
            options: allColors,
        });
    }
};

//Quiz Creation
function quizContainer() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);

    //Generate Quiz
    for (let i of quizArray){
        //Randomly sort options
        i.options.sort(() => Math.random() - 0.5);

    //Quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");

    //Question number
    numOfQuestions.innerHTML = 1 + "of" + quizArray.length + "Question";

    //questions
    let questionDiv = document.createElement ("p");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `<div class="question-color>${i.correct}</div>"`;
    div.appendChild(questionDiv);

    //Options
    div.innerHTML += `
    <div class="button-container">
    <button class="option-div" onclick="checker(this)" style="background-color: ${i.options[0]} data-option="${i.options[0]}"></button>
    <button class="option-div" onclick="checker(this)" style="background-color: ${i.options[1]} data-option="${i.options[1]}"></button>
    <button class="option-div" onclick="checker(this)" style="background-color: ${i.options[2]} data-option="${i.options[2]}"></button>
    <button class="option-div" onclick="checker(this)" style="background-color: ${i.options[3]} data-option="${i.options[3]}"></button>
    </div>
    `;
    quizContainer.appendChild(div);
    }
}

function initial(){
    nextButton.classList.add("hide");
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    clearInterval(countdown);
    count = 10;
    quizCreator();
}

//when user clicks on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    quizArray = [];
    populateQuiz();
    initial();
});