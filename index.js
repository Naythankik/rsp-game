// The Overlay Function
let overlay = document.querySelector(".overlay");

let openRules = () => {
  overlay.style.display = "flex";
};
let closeOverlay = () => {
  overlay.style.display = "none";
};

// The Game function
let drawDisplay = document.querySelector(".start-game");
let gameDisplay = document.querySelector(".game-board");
let player1 = document.querySelector("#player");
let player2 = document.querySelector("#computer");

let result = document.querySelector(".result");
let resultText = document.querySelector(".fate");

let picker = (tags) => {
  let cardsArray = [
    "./images/icon-rock.svg",
    "./images/icon-scissors.svg",
    "./images/icon-paper.svg",
  ];

  let pickedCard = tags.children[0].getAttribute("src");
  player1.setAttribute("src", pickedCard);

  let player1Parent = player1.parentElement.classList;
  player1Parent.remove(...player1Parent);
  player1Parent.add("game-picked");
  player1Parent.add(tags.value);

  player1.setAttribute("alt", tags.value);

  let player1index = cardsArray.indexOf(player1.getAttribute("src"));

  let randCard = Math.floor(Math.random() * cardsArray.length);
  if (randCard == player1index) {
    cardsArray.splice(player1index, 1);
    let newArr = [...cardsArray];
    randCard = Math.floor(Math.random() * newArr.length);
  }
  player2.setAttribute("src", cardsArray[randCard]);

  let player2Value = player2.getAttribute("src").split("/")[2];
  player2Value = player2Value.split(".")[0];
  player2Value = player2Value.split("-")[1];

  let player2Parent = player2.parentElement.classList;
  player2Parent.remove(...player2Parent);
  player2Parent.add("game-picked");
  player2Parent.add(player2Value);

  player2.setAttribute("alt", player2Value);

  let score1 = player1.getAttribute("alt");
  let score2 = player2.getAttribute("alt");

  let fate = (result) => {
    resultText.innerHTML = `You ${result}!`;
    let score = document.querySelector("#score");
    let restart = resultText.nextElementSibling.classList;
    if (result == "win") {
      score.innerHTML = Number(score.innerHTML) + 1;
      if (restart.contains("lose")) {
        restart.remove("lose");
        restart.add("win");
      } else {
        restart.add("win");
      }
    } else {
      score.innerHTML = Number(score.innerHTML) - 1;

      if (restart.contains("win")) {
        restart.remove("win");
        restart.add("lose");
      } else {
        restart.add("lose");
      }
    }
  };

  //   The score sheet of the game
  switch (score1) {
    case "paper":
      if (score2 == "scissors") {
        fate("lose");
      } else if (score2 == "rock") {
        fate("win");
      }
      break;
    case "scissors":
      if (score2 == "paper") {
        fate("win");
      } else if (score2 == "rock") {
        fate("lose");
      }
      break;
    case "rock":
      if (score2 == "scissors") {
        fate("win");
      } else if (score2 == "paper") {
        fate("lose");
      }
      break;
    default:
      break;
  }

  gameDisplay.style.display = "none";
  drawDisplay.style.display = "flex";
  result.style.display = "flex";
};

// When the play again button is clicked
function playAgain() {
  gameDisplay.style.display = "flex";
  drawDisplay.style.display = "none";
  result.style.display = "none";
}
