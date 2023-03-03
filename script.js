const startButton = document.getElementById("start-btn");
const qContainerElemet = document.getElementById("question-container");
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  qContainerElemet.classList.remove("hide");
  setNextQuestion();
}
function setNextQuestion() {}
function selectAnswer() {}

// create list of questions
const question = [
  {
    question: "What is 2 + 2",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ],
  },
];
