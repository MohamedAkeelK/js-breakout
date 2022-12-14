// CONTROLS
const keys = {
  a: false,
  d: false,
};

// EVENTS
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
      return block;
    }
  return;
};

// REMOVE BLOCK
const removeBlock = (block) => {
  blocks.splice(blocks.indexOf(block), 1);
  block.remove();
  pointsEl.innerText = `POINTS: ${(points += 20)}`;
};

// CREATE POINTS AND START BUTTON 
let points = 0;

let pointsEl = document.createElement("div");
pointsEl.className = "points";
pointsEl.innerText = `POINTS: ${points}`;
document.body.append(pointsEl);

let startBtn = document.createElement("button");
startBtn.innerText = "Start Game";
startBtn.className = "startBtn";
document.body.append(startBtn);

// CREATE ASSETS
const blocks = [];
const ball = new Ball({ getOverlappingPlayer });
const player = new Player();

// CREATES BLOCKS
let i = 0;
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 7; col++) {
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

// run update function on on start
startBtn.addEventListener("click", () => {
  // startBtn.style.visibility = "hidden";
  const myint = setInterval(update, 20);

  resetBtn.addEventListener("click", () => {
    checkLoser(myint);
    // clearInterval(myint);
  });
});

let resetBtn = document.createElement("button");
resetBtn.innerText = "reset Game";
resetBtn.className = "resetBtn";
document.body.append(resetBtn);
// resetBtn.style.visibility = "hidden";

// createResetBtn();

let checkLoser = (inter) => {
  if (ball.y > window.innerHeight) {
    pointsEl.innerText = `GAME OVER, YOU LOSE!`;
    pointsEl.className = "loser";
    console.log("checking loser");
    console.log(inter);
    clearInterval(inter);
    // resetBtn.style.visibility = "visible";
    return;
  }
};

let checkWinner = () => {
  if (points === 420) {
    pointsEl.innerText = `GAME OVER, YOU WIN!`;
    pointsEl.className = "winner";
    // resetBtn.style.visibility = "visible";
    return;
  }
};

// MAIN GAME UPDATES
const update = () => {
  checkLoser();
  checkWinner();

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

// const myint = setInterval(update, 20);

// function startGame() {
//   return myint();
// }

// UPDATES EVERY 20 MILISECONDS
// setInterval(update, 20);
