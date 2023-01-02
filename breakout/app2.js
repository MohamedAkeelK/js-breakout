// CONTROLS
const keys = {
  a: false,
  d: false,
};

let blockRows = 7;
let blockCols = 3;

let winningPoint = blockRows * blockCols * 10;

// KEY EVENTS
document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

import { Player } from "./Player.js";
import { Ball } from "./Ball.js";
import { Block } from "./Block.js";

// COLLISION DETECTION
const isOverlapping = (entity1, entity2) => {
  const rect1 = entity1.el.getBoundingClientRect();
  const rect2 = entity2.el.getBoundingClientRect();
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
};

// PLAYER COLLISION
const getOverlappingPlayer = (entity) => {
  if (isOverlapping(entity, player)) {
    return player;
  }
  return null;
};

// BLOCK COLLISION
const blockThatGotHit = () => {
  for (let block of blocks)
    if (isOverlapping(block, ball)) {
      console.log("block hit");
      return block;
    }
  return;
};

// REMOVE BLOCK
const removeBlock = (block) => {
  blocks.splice(blocks.indexOf(block), 1);
  block.remove();
  pointsEl.innerHTML = `<span id="blahh">POINTS:</span> ${(points += 10)}`;
  console.log("block removed");
};

// CREATES BLOCKS
let createBlocks = () => {
  let i = 0;
  for (let row = 0; row < blockCols; row++) {
    for (let col = 0; col < blockRows; col++) {
      let block = new Block({
        x: col * 170 + 160,
        y: row * 100 + 100,
        blockThatGotHit,
        removeBlock,
        blockId: i + 1,
        ball,
      });
      blocks.push(block);
    }
  }
};

// CREATE POINTS AND START BUTTON
let points = 0;

let pointsEl = document.createElement("div");
pointsEl.className = "points";
pointsEl.innerHTML = `<span id="blahh">POINTS:</span> ${points}`;
document.body.append(pointsEl);

let startBtn = document.createElement("button");
startBtn.innerText = "Start Game";
startBtn.className = "startBtn";
document.body.append(startBtn);

let controlsEl = document.createElement("p");
controlsEl.className = "controls";
controlsEl.innerText = `use "a" and "d" to move player!`;
document.body.append(controlsEl);

// let resetBtn = document.createElement("button");
// resetBtn.innerText = "reset Game";
// resetBtn.className = "resetBtn";
// document.body.append(resetBtn);

// CREATE ASSETS
let blocks = [];
let ball = new Ball({ getOverlappingPlayer });
let player = new Player();

let resetGame = () => {
  startBtn.style.visibility = "visible";
  controlsEl.style.visibility = "visible";
  startBtn.innerText = "Play Again";

  clearInterval(myint);
  // reset points
  points = 0;
  pointsEl.className = "points";
  // pointsEl.innerText = points;
  pointsEl.innerHTML = `<span id="blahh">POINTS:</span> <span id="mypoints  ">${points}</span>`;

  // reset ball
  document.querySelectorAll(".ball").forEach((e) => e.remove());
  ball = new Ball({ getOverlappingPlayer });

  // reset player
  document.querySelectorAll(".player").forEach((e) => e.remove());
  player = new Player();

  // reset blocks
  document.querySelectorAll("block").forEach((e) => {
    e.remove();
  });
  blocks.forEach((block) => block.remove());
  blocks = [];
  createBlocks();
};

// creates blocks on first page load
createBlocks();
let myint;

// ON START
startBtn.addEventListener("click", () => {
  clearInterval(myint);
  resetGame();
  myint = setInterval(update, 20);
  startBtn.style.visibility = "hidden";
  controlsEl.style.visibility = "hidden";

  let loser = document.querySelector(".loser");

  if (loser) {
    // console.log(loser);
    loser.style.backgroundColor = "transparent";
  }
});

let checkLoser = () => {
  if (ball.y > window.innerHeight) {
    let loser = document.querySelector(".loser");

    if (loser) {
      // console.log(loser);
      loser.style.backgroundColor = "rgba(0, 0, 0, 0.697)";
    }
    resetGame();
    return true;
  } else {
    return false;
  }
};

let checkWinner = () => {
  if (points === winningPoint) {
    resetGame();
    return true;
  } else {
    return false;
  }
};

// MAIN GAME UPDATES
const update = () => {
  if (checkLoser()) {
    pointsEl.innerText = `GAME OVER, YOU LOSE!`;
    pointsEl.className = "loser";
  }
  if (checkWinner()) {
    pointsEl.innerText = `GAME OVER, YOU WIN!`;
    pointsEl.className = "winner";
  }

  if (keys.a && player.x > 0) {
    player.moveLeft();
  }
  if (keys.d && player.x < window.innerWidth - player.PLAYER_IMAGE_WIDTH) {
    player.moveRight();
  }
  ball.update();
  blocks.forEach((block) => {
    block.update();
  });
  return;
};
