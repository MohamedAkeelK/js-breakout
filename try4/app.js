// import { Entity } from "./Entity.js";
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

// class Entity {
//   constructor({ tag = "div", className = "" } = {}) {
//     this.el = document.createElement(tag);
//     document.body.append(this.el);
//     this.el.className = className;
//     this.el.style.position = "fixed";
//     this.x;
//     this.y;
//   }
//   setX(x) {
//     this.x = x;
//     this.el.style.left = `${this.x}px`;
//   }
//   setY(y) {
//     this.y = y;
//     this.el.style.top = `${this.y}px`;
//   }
// }

// class Player extends Entity {
//   constructor() {
//     super({ tag: "div", className: "player" });
//     this.setX(window.innerWidth / 2 - 50);
//     this.setY(window.innerHeight - 80);
//     document.body.append(this.el);
//     this.SPEED = 8;
//     this.PLAYER_IMAGE_WIDTH = 100;
//   }
//   moveRight() {
//     this.setX(this.x + this.SPEED);
//   }
//   moveLeft() {
//     this.setX(this.x - this.SPEED);
//   }
//   moveUp() {
//     this.setY(this.y - this.SPEED);
//   }
//   moveDown() {
//     this.setY(this.y + this.SPEED);
//   }
// }

// const LEFT = "left";
// const RIGHT = "right";
// const UP = "up";
// const DOWN = "down";

// class Ball extends Entity {
//   constructor({ getOverlappingPlayer }) {
//     super({ className: "ball" });
//     this.SPEED = 4;
//     this.setX(window.innerWidth / 2 - 50);
//     this.setY(window.innerHeight - 500);
//     this.hitTop = false;
//     this.hitBot = false;
//     this.hitRight = false;
//     this.hitLeft = false;
//     this.setDirectionUp();
//     this.getOverlappingPlayer = getOverlappingPlayer;
//   }
//   setDirectionLeft() {
//     this.direction = LEFT;
//   }
//   setDirectionRight() {
//     this.direction = RIGHT;
//   }
//   setDirectionDown() {
//     this.direction = DOWN;
//   }
//   setDirectionUp() {
//     this.direction = UP;
//   }
//   moveDown() {
//     this.setY(this.y + this.SPEED);
//     this.setX(this.x + 1);
//   }
//   moveUp() {
//     this.setY(this.y - this.SPEED);
//     this.setX(this.x + 1);
//   }
//   moveRight() {
//     this.setX(this.x + this.SPEED);
//     this.setY(this.y - 1);
//   }
//   moveLeft() {
//     this.setX(this.x - this.SPEED);
//     this.setY(this.y - 1);
//   }

//   update() {
//     if (this.direction === UP) {
//       this.setY(this.y - this.SPEED);
//       this.moveUp();
//     }
//     if (this.direction === DOWN) {
//       this.setY(this.y + this.SPEED);
//       this.moveDown();
//     }
//     if (this.direction === RIGHT) {
//       this.setX(this.x + this.SPEED);
//       this.moveRight();
//     }
//     if (this.direction === LEFT) {
//       this.setX(this.x - this.SPEED);
//       this.moveLeft();
//     }

//     const ball = this.getOverlappingPlayer(this);
//     if (ball) {
//       this.setDirectionUp();
//       this.moveUp();
//     }
//   }
// }

let ball = new Ball({ getOverlappingPlayer });

const player = new Player();

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
