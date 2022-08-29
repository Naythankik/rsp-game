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
// console.log(player1, player2);

let randomCard = (cards, firstPlayer, secondPlayer) => {
  let x = Math.floor(Math.random() * 3);
  let shuffledCard = cards[x];
  secondPlayer = secondPlayer.getAttribute("src");
  firstPlayer.setAttribute("src", shuffledCard);
};

let picker = (element) => {
  let pickedCard = element.children[0].getAttribute("src");
  player1.setAttribute("src", pickedCard);
  gameDisplay.style.display = "none";
  drawDisplay.style.display = "flex";
  randomCard(cardsArray, player2, player1);
};

let cardsArray = [
  "./images/icon-rock.svg",
  "./images/icon-scissors.svg",
  "./images/icon-paper.svg",
];
