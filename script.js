const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const qContainerElemet = document.getElementById("question-container");
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  qContainerElemet.classList.remove("hide");
  shuffledQuestions = questions.sort(() => {
    Math.random - 0.5;
  });
  currentQuestionIndex = 0;
  setNextQuestion();
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  // set status class for body based on chosen answer
  setStatusClass(document.body, correct);

  // loop through our buttons and set a class for them based on user's chosen answer
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

// create setStatusClass function
function setStatusClass(element, correct) {
  // clear any status the element already has
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

// function to remove status classes
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// create list of questions
const questions = [
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ],
  },
  {
    question: "What is 13 * 2?",
    answers: [
      { text: "26", correct: true },
      { text: "213", correct: false },
      { text: "114", correct: false },
      { text: "13", correct: false },
    ],
  },
  {
    question: "What is ???64?",
    answers: [
      { text: "7", correct: false },
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "13", correct: false },
    ],
  },
];
