import { Entity } from "./Entity.js";
// import { Player } from "./Player.js";
const LEFT = "left";
const RIGHT = "right";
const UP = "up";
const DOWN = "down";

export class Ball extends Entity {
  constructor({ getOverlappingPlayer }) {
    super({ className: "ball" });
    this.SPEED = 4;
    this.setX(window.innerWidth / 2 - 50);
    this.setY(window.innerHeight - 500);
    this.hitTop = false;
    this.hitBot = false;
    this.hitRight = false;
    this.hitLeft = false;
    this.setDirectionUp();
    this.getOverlappingPlayer = getOverlappingPlayer;
  }
  setDirectionLeft() {
    this.direction = LEFT;
  }
  setDirectionRight() {
    this.direction = RIGHT;
  }
  setDirectionDown() {
    this.direction = DOWN;
  }
  setDirectionUp() {
    this.direction = UP;
  }
  moveDown() {
    this.setY(this.y + this.SPEED);
    this.setX(this.x + 1);
  }
  moveUp() {
    this.setY(this.y - this.SPEED);
    this.setX(this.x + 1);
  }
  moveRight() {
    this.setX(this.x + this.SPEED);
    this.setY(this.y - 1);
  }
  moveLeft() {
    this.setX(this.x - this.SPEED);
    this.setY(this.y - 1);
  }

  update() {
    if (this.direction === UP) {
      this.setY(this.y - this.SPEED);
      this.moveUp();
    }
    if (this.direction === DOWN) {
      this.setY(this.y + this.SPEED);
      this.moveDown();
    }
    if (this.direction === RIGHT) {
      this.setX(this.x + this.SPEED);
      this.moveRight();
    }
    if (this.direction === LEFT) {
      this.setX(this.x - this.SPEED);
      this.moveLeft();
    }

    const ball = this.getOverlappingPlayer(this);
    if (ball) {
      this.setDirectionUp();
      this.moveUp();
    }
  }
}
