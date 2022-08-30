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

let cardsArray = [
  "./images/icon-rock.svg",
  "./images/icon-scissors.svg",
  "./images/icon-paper.svg",
];

let picker = (tags) => {
  let pickedCard = tags.children[0].getAttribute("src");
  player1.setAttribute("src", pickedCard);
  player1.parentElement.classList.add(tags.value);
  player1.setAttribute("alt", tags.value);

  let player1index = cardsArray.indexOf(player1.getAttribute("src"));

  let randCard = Math.floor(Math.random() * cardsArray.length);
  if (randCard !== player1index) {
    player2.setAttribute("src", cardsArray[randCard]);
  } else {
    if (randCard === 0) {
      player2.setAttribute("src", cardsArray[randCard + 1]);
    } else if (randCard === 2) {
      player2.setAttribute("src", cardsArray[randCard - 1]);
    } else {
      player2.setAttribute("src", cardsArray[randCard]);
    }
  }

  let player2Value = player2.getAttribute("src").split("/")[2];
  player2Value = player2Value.split(".")[0];
  player2Value = player2Value.split("-")[1];

  player2.parentElement.classList.add(player2Value);
  player2.setAttribute("alt", player2Value);

  let score1 = player1.getAttribute("alt");
  let score2 = player2.getAttribute("alt");

  //   let winner = "You Win!";
  //   let loser = "You Lose!";

  let fate = (result) => {
    resultText.innerHTML = `You ${result}!`;
    resultText.nextElementSibling.classList.add(result);
  };
  console.log(resultText.nextElementSibling);

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
