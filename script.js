const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const qContainerElemet = document.getElementById("question-container");
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

startButton.addEventListener("click", startGame);

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
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
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
];
