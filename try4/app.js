import { Player } from "./Player.js";
import { Ball } from "./Ball.js";

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

const getOverlappingPlayer = (entity) => {
  if (isOverlapping(entity, player)) {
    return player;
  }
  return null;
};

// CREATE ASSETS
let ball = new Ball({ getOverlappingPlayer });
const player = new Player();

// TODO : keep track of wether ball is moving down or up , left or right 
// TODO : if ball hits left side feild and ball is moving up, then set direction to up-right
// TODO : if ball hits right side feild and ball is moving up and then set direction  to up-left
// TODO : if ball is moving up and hits left side feild, then set direction to up-right

// MAIN GAME UPDATES
const update = () => {
  if (keys.a && player.x > 0) {
    player.moveLeft();
  }
  if (keys.d && player.x < window.innerWidth - player.PLAYER_IMAGE_WIDTH) {
    player.moveRight();
  }
  ball.update();
  if (ball.y < 0) {
    ball.setDirectionDown();
  }
  if (ball.x < 0) {
    ball.setDirectionRight();
  }
  if (ball.x > window.innerWidth - 30) {
    ball.setDirectionLeft();
  }
};

// UPDATES EVERY 20 MILISECONDS
setInterval(update, 20);
