const SHIP_IMAGE = "./imgs/spaceship.png";
import Entity from "./Entity.js";

export default class Ship extends Entity {
  constructor() {
    super({ tag: "img", className: "ship" }); // calls parent constructor with arguments.
    this.el.src = SHIP_IMAGE;
    document.body.append(this.el);

    this.SPEED = 8;
    this.SHIP_IMAGE_WIDTH = 50;
    this.canFire = true;

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

  fire({ createBullet }) {
    if (this.canFire) {
      this.canFire = false;
      createBullet({
        x: this.x,
        y: this.y,
      });
      setTimeout(() => {
        this.canFire = true;
      }, 150);
    }
  }
}
