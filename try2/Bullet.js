import { Entity } from "./Entity";

export default class Bullet extends Entity {
  constructor() {
    super({ className: "bullet" });
    this.SPEED = 4;

    this.setX(window.innerWidth / 2);
    this.setY(window.innerHeight - 80);
  }
}
