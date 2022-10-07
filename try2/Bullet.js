import Entity from "./Entity.js";

export default class Bullet extends Entity {
  constructor({ x, y }) {
    super({ className: "bullet" });
    this.SPEED = 4;
    this.setX(x + 23);
    this.setY(y - 5);
  }
  update() {
    this.setY(this.y - this.SPEED);
  }
}
