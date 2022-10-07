const AlIEN_IMAGE = "./imgs/ufo.png";
import Entity from "./Entity.js";

const LEFT = "left";
const RIGHT = "right";

export default class Alien extends Entity {
  constructor({ x, y }) {
    super({ tag: "img", className: "alien" });
    this.el.src = AlIEN_IMAGE;
    this.direction = LEFT;
    this.SPEED = 2;
    this.DISTANCE = 40;
    this.setX(x);
    this.setY(y);
  }
  setDirectionLeft() {
    this.direction = LEFT;
  }
  setDirectionRight() {
    this.direction = RIGHT;
  }
  moveDown() {
    this.setY(this.y + this.DISTANCE);
  }
  update() {
    if (this.direction === LEFT) {
      this.setX(this.x - this.SPEED);
      // this.moveDown();
    } else {
      this.setX(this.x + this.SPEED);
    }
  }
}
