const AlIEN_IMAGE = "./imgs/ufo.png";
import Entity from "./Entity.js";

const LEFT = "left";
const RIGHT = "right";

export default class Alien extends Entity {
  constructor({ x, y, getOverlappingBullet, removeBullet, removeAlien }) {
    super({ tag: "img", className: "alien" });
    this.el.src = AlIEN_IMAGE;
    // this.el.style.width = "70px";
    this.direction = LEFT;
    this.SPEED = 2;
    this.DOWN_DISTANCE = 20;
    this.getOverlappingBullet = getOverlappingBullet;
    this.removeAlien = removeAlien;
    this.removeBullet = removeBullet;

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
    this.setY(this.y + this.DOWN_DISTANCE);
  }
  // getOverlappingBullet() {}

  update() {
    if (this.direction === LEFT) {
      this.setX(this.x - this.SPEED);
    } else {
      this.setX(this.x + this.SPEED);
    }

    const bullet = this.getOverlappingBullet(this);
    if (bullet) {
      this.removeAlien(this);
      this.removeBullet(bullet);
    }
    // this.removeBullet(this);
  }
}
