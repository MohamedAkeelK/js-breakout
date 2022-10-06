const SHIP_IMAGE = "./spaceship.png";
import Entity from "./Entity.js";

export default class Ship extends Entity {
  constructor() {
    super({ tag: "img", className: "ship" });
    this.el.src = SHIP_IMAGE;
    document.body.append(this.el);
    // this.el.className = "ship";
    this.SPEED = 4;
    this.SHIP_IMAGE_WIDTH = 50;

    this.setX(window.innerWidth / 2);
    this.setY(window.innerHeight - 80);
  }

  moveRight() {
    console.log("right");
    this.setX(this.x + this.SPEED);
  }
  moveLeft() {
    console.log("left");
    this.setX(this.x - this.SPEED);
  }
}
