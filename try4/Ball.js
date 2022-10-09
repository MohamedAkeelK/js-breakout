import { Entity } from "./Entity.js";
// import { Player } from "./Player.js";

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
    this.SPEED = 6;
    this.setX(window.innerWidth / 2 - 50);
    this.setY(window.innerHeight - 500);
    this.setDirectionUp();
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
  // 2d directions
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
  // TODO : create diagnal movement
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
    this.setX(this.x - 2);
  }
  moveUpRight() {
    this.setY(this.y - this.SPEED);
    this.setX(this.x + 2);
  }
  moveDownLeft() {
    this.setY(this.y + this.SPEED);
    this.setX(this.x - 2);
  }
  moveDownRight() {
    this.setY(this.y + this.SPEED);
    this.setX(this.x + 2);
  }

  // CHECK DIRECTIONM,
  update() {
    if (this.direction === UP) {
      // this.setY(this.y - this.SPEED);
      this.moveUp();
    }
    if (this.direction === DOWN) {
      // this.setY(this.y + this.SPEED);
      this.moveDown();
    }
    if (this.direction === RIGHT) {
      // this.setX(this.x + this.SPEED);
      this.moveRight();
    }
    if (this.direction === LEFT) {
      // this.setX(this.x - this.SPEED);
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

    const player = this.getOverlappingPlayer(this);
    if (player) {
      // TODO : configure ball hitting player

      if (!(this.x + 30 > player.x + 30) && !(this.x + 30 < player.x)) {
        this.setDirectionUpLeft();
      } else if (!(this.x < player.x + 70) && !(this.x > player.x + 100)) {
        this.setDirectionUpRight();
      } else {
        this.setDirectionUp();
      }
    }
  }
}
