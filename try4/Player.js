import { Entity } from "./Entity.js";

export class Player extends Entity {
  constructor() {
    super({ tag: "div", className: "player" });
    this.setX(window.innerWidth / 2 - 50);
    this.setY(window.innerHeight - 80);
    document.body.append(this.el);
    this.SPEED = 10;
    this.PLAYER_IMAGE_WIDTH = 100;
  }
  // PLAYER MOVEMENT
  moveRight() {
    this.setX(this.x + this.SPEED);
  }
  moveLeft() {
    this.setX(this.x - this.SPEED);
  }
  moveUp() {
    this.setY(this.y - this.SPEED);
  }
  moveDown() {
    this.setY(this.y + this.SPEED);
  }
}
