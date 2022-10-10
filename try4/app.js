import { Player } from "./Player.js";
import { Ball } from "./Ball.js";
import { Block } from "./Block.js";

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
};

// CREATE ASSETS
const blocks = [];
const ball = new Ball({ getOverlappingPlayer });
const player = new Player();

// CREATES BLOCKS
let i = 0;
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 10; col++) {
    let block = new Block({
      x: col * 120 + 90,
      y: row * 100 + 100,
      blockThatGotHit,
      removeBlock,
      blockId: i + 1,
      ball,
    });
    blocks.push(block);
  }
}

// MAIN GAME UPDATES
const update = () => {
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
};

// UPDATES EVERY 20 MILISECONDS
setInterval(update, 20);
