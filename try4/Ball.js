import { Entity } from "./Entity.js";
// import { Player } from "./Player.js";

// DIRECTIONS
const LEFT = "left";
const RIGHT = "right";
const UP = "up";
const DOWN = "down";
const UP_LEFT = "up_left";
const UP_RIGHT = "up_right";
const DOWN_LEFT = "down_left";
const DOWN_RIGHT = "down_right";

export class Ball extends Entity {
  constructor({ getOverlappingPlayer }) {
    super({ className: "ball" });
    this.SPEED = 9;
    this.setX(window.innerWidth / 2 - 50);
    this.setY(window.innerHeight - 400);
    this.setDirectionDown();
    this.getOverlappingPlayer = getOverlappingPlayer;
  }
  // SET DIRECTION STATES
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
  // DIAGNAL DIRECTIONS
  setDirectionUpLeft() {
    this.direction = UP_LEFT;
  }
  setDirectionUpRight() {
    this.direction = UP_RIGHT;
  }
  setDirectionDownLeft() {
    this.direction = DOWN_LEFT;
  }
  setDirectionDownRight() {
    this.direction = DOWN_RIGHT;
  }

  // MOVE BALL
  moveUp() {
    this.setY(this.y - this.SPEED);
  }
  moveDown() {
    this.setY(this.y + this.SPEED);
  }
  moveRight() {
    this.setX(this.x + this.SPEED);
  }
  moveLeft() {
    this.setX(this.x - this.SPEED);
  }
  moveUpLeft() {
    this.setY(this.y - this.SPEED);
    this.setX(this.x - 4);
  }
  moveUpRight() {
    this.setY(this.y - this.SPEED);
    this.setX(this.x + 4);
  }
  moveDownLeft() {
    this.setY(this.y + this.SPEED);
    this.setX(this.x - 4);
  }
  moveDownRight() {
    this.setY(this.y + this.SPEED);
    this.setX(this.x + 4);
  }

  // MOVE IN DIRECTION,
  update() {
    if (this.direction === UP) {
      this.moveUp();
    }
    if (this.direction === DOWN) {
      this.moveDown();
    }
    if (this.direction === RIGHT) {
      this.moveRight();
    }
    if (this.direction === LEFT) {
      this.moveLeft();
    }
    if (this.direction === UP_LEFT) {
      this.moveUpLeft();
    }
    if (this.direction === UP_RIGHT) {
      this.moveUpRight();
    }
    if (this.direction === DOWN_LEFT) {
      this.moveDownLeft();
    }
    if (this.direction === DOWN_RIGHT) {
      this.moveDownRight();
    }
    // BALL TO PLAYER COLLISION
    const player = this.getOverlappingPlayer(this);
    if (player) {
      if (!(this.x >= player.x + 33) && !(this.x + 30 < player.x)) {
        this.setDirectionUpLeft();
        // console.log(this.direction);
      }
      if (!(this.x < player.x + 34) && !(this.x > player.x + 66)) {
        this.setDirectionUp();
        // console.log(this.direction);
      }
      if (!(this.x < player.x + 66) && !(this.x > player.x + 100)) {
        this.setDirectionUpRight();
        // console.log(this.direction);
      }
    }
    // WALL COLLISION
    if (this.y < 0 && this.direction === UP) {
      this.setDirectionDown();
    }
    if (this.y < 0 && this.direction === UP_RIGHT) {
      this.setDirectionDownRight();
    }
    if (this.y < 0 && this.direction === UP_LEFT) {
      this.setDirectionDownLeft();
    }
    if (this.x < 0 && this.direction === UP_LEFT) {
      this.setDirectionUpRight();
    }
    if (this.x + 30 > window.innerWidth && this.direction === UP_RIGHT) {
      this.setDirectionUpLeft();
    }
    if (this.x < 0 && this.direction === DOWN_LEFT) {
      this.setDirectionDownRight();
    }
    if (this.x + 30 > window.innerWidth && this.direction === DOWN_RIGHT) {
      this.setDirectionDownLeft();
    }
  }
}
