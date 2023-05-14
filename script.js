import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const playerScoreEl = document.querySelector("#player-score");
const playerChoiceEl = document.querySelector("#player-choice");
const computerScoreEl = document.querySelector("#computer-score");
const computerChoiceEl = document.querySelector("#computer-choice");
const resultText = document.querySelector("#result-text");

const playerRock = document.querySelector("#player-rock");
const playerPaper = document.querySelector("#player-paper");
const playerScissors = document.querySelector("#player-scissors");
const playerLizard = document.querySelector("#player-lizard");
const playerSpock = document.querySelector("#player-spock");

const playerOptions = [
  playerRock,
  playerPaper,
  playerScissors,
  playerLizard,
  playerSpock,
];

const computerRock = document.querySelector("#computer-rock");
const computerPaper = document.querySelector("#computer-paper");
const computerScissors = document.querySelector("#computer-scissors");
const computerLizard = document.querySelector("#computer-lizard");
const computerSpock = document.querySelector("#computer-spock");

const computerOptions = [
  computerRock,
  computerPaper,
  computerScissors,
  computerLizard,
  computerSpock,
];

const allGameIcons = document.querySelectorAll(".far");
const resetIcon = document.querySelector(".reset-icon");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};
let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = "";

// Check result, increase score, update resultText
const updateScore = function (playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else {
    const choice = choices[playerChoice];
    console.log();
    if (choice.defeats.indexOf(computerChoice) !== -1) {
      startConfetti();
      resultText.textContent = "You Won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You Lost!";
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
};

// Reset all 'selected' icons for player & computer
const resetSelected = function () {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
  stopConfetti();
  removeConfetti();
};

// Random computer choice
const computerRandomChoice = function () {
  const computerChoiceNumber = Math.trunc(Math.random() * 5);
  if (computerChoiceNumber === 0) {
    computerChoice = "rock";
  } else if (computerChoiceNumber === 1) {
    computerChoice = "paper";
  } else if (computerChoiceNumber === 2) {
    computerChoice = "scissors";
  } else if (computerChoiceNumber === 3) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
};

// Add 'selected' styling & computerChoice
const displayComputerChoice = function () {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
};

// Passing player selection value and styling icons
const select = function () {
  const playerChoice = this.dataset.value;

  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);

  // Add 'selected' styling & playerChoice
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
};

const resetAll = function () {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
  resultText.textContent = "";
  resetSelected();
};

playerOptions.forEach((option) => {
  option.addEventListener("click", select);
});
resetIcon.addEventListener("click", resetAll);

// On load, set initial values
resetAll();
